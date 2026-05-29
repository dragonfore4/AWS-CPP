"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Sun, Moon, Monitor } from "./Icon";

type ThemeChoice = "light" | "dark" | "system";

const STORAGE_KEY = "theme";

function readChoice(): ThemeChoice {
  if (typeof window === "undefined") return "system";
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "light" || v === "dark") return v;
    return "system";
  } catch {
    return "system";
  }
}

function applyChoice(choice: ThemeChoice) {
  const sys = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const resolved = choice === "system" ? sys : choice;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
  if (choice === "system") {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  } else {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore
    }
  }
  // Notify other tabs / our own listeners that the theme changed.
  try {
    window.dispatchEvent(new Event("theme-change"));
  } catch {
    // ignore
  }
}

function subscribe(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  window.addEventListener("theme-change", callback);
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onMqChange = () => {
    if (readChoice() === "system") {
      applyChoice("system");
    }
    callback();
  };
  mq.addEventListener("change", onMqChange);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("theme-change", callback);
    mq.removeEventListener("change", onMqChange);
  };
}

function getServerSnapshot(): ThemeChoice {
  return "system";
}

const choices: { value: ThemeChoice; label: string; Icon: typeof Sun }[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

export default function ThemeToggle() {
  const choice = useSyncExternalStore(subscribe, readChoice, getServerSnapshot);

  const onPick = useCallback((v: ThemeChoice) => {
    applyChoice(v);
  }, []);

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="inline-flex items-center gap-0.5 rounded-md border border-[var(--rule)] bg-[var(--bg-elev)] p-0.5"
    >
      {choices.map(({ value, label, Icon }) => {
        const active = choice === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            onClick={() => onPick(value)}
            className={
              "inline-flex h-7 w-7 items-center justify-center rounded transition-colors " +
              (active
                ? "bg-[var(--bg-soft)] text-[var(--ink)]"
                : "text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--bg-soft)]")
            }
          >
            <Icon size={15} strokeWidth={1.7} aria-hidden />
          </button>
        );
      })}
    </div>
  );
}
