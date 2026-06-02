-- Memos table for the /memos page.
-- Paste this into the Supabase SQL editor to provision the schema.
-- RLS is intentionally DISABLED — see docs/superpowers/specs/2026-06-02-memos-page-design.md
-- accepted risks for the rationale.

create table if not exists memos (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  body        text not null default '',
  tags        text[] not null default '{}',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists memos_created_at_idx on memos (created_at desc);
create index if not exists memos_tags_idx on memos using gin (tags);

create or replace function set_memos_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists memos_set_updated_at on memos;
create trigger memos_set_updated_at
  before update on memos
  for each row execute function set_memos_updated_at();

alter table memos disable row level security;
