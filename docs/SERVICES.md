# SERVICES.md — AWS service status reference

Living tables of AWS services that are **discontinued**, **renamed**, or **partial-EoL** as they affect this project's content. Authors editing `data/topics/*.ts` must consult this file before adding service mentions.

**Last refreshed:** 2026-05-31 (follow-up audit; previous full pass 2026-05-30)

For the methodology used to compile and refresh these tables, see [`AUDIT.md`](../AUDIT.md). For the URL list used to verify each service's current status, see the *Reference URL table* in [`AGENTS.md`](../AGENTS.md).

---

## Discontinued — DO NOT REINTRODUCE

These AWS services have been removed from the content because they are no longer sold or supported. Do not add them back as quiz options or article content. If a CLF-C02 study resource still references them (older Stephane lectures, third-party prep books), prefer the current AWS reality.

| Service | Status as of May 2026 |
|---|---|
| AWS CodeStar | Discontinued 2024-07-31 (product page redirects) |
| AWS Snowmobile | Discontinued 2024 (product page redirects to Snowball) |
| Amazon WorkDocs | Discontinued 2025-03-31 |
| Amazon Lookout for Metrics | Discontinued (product page redirects) |
| Amazon Lookout for Vision | Discontinued (product page redirects) |
| AWS RoboMaker | Closed to new customers Sep 2022 |
| AWS DeepLens | Discontinued 2024 |
| Amazon Chime end-user app | End of support 2026-02-20 — **Chime SDK is still active and OK to reference** |
| Amazon Lookout for Equipment | End of support 2026-10-07 — avoid in new content |

---

## Renamed — use current names

When writing quiz options or article body, use the current AWS service name. The audit standardised on these names; on a first reference you may use `(formerly X)` to help exam takers, but subsequent references should use the current name only.

| Old name | Current name |
|---|---|
| Kinesis Data Firehose | Amazon Data Firehose |
| Kinesis Data Analytics | Amazon Managed Service for Apache Flink |
| AWS SSO / AWS Single Sign-On | AWS IAM Identity Center |
| Amazon CodeWhisperer | Amazon Q Developer |
| AWS Personal Health Dashboard | AWS Health Dashboard |
| AWS Fault Injection Simulator | AWS Fault Injection Service |
| Amazon WorkSpaces Web | Amazon WorkSpaces Secure Browser |
| AWS CodeStar Connections | AWS CodeConnections |
| Amazon Elasticsearch Service | Amazon OpenSearch Service |
| Inspector Agent (v1) | AWS Systems Manager (SSM) Agent — Inspector v2 since 2021 |

---

## Partial-EoL — keep with disclaimer

These services still exist but have known limitations. Mention the caveat near their primary description (typically a `callout` of variant `warning`):

| Service | Caveat |
|---|---|
| AWS Cloud9 | Closed to new customers since July 2024 — existing users may continue |
| Amazon Forecast | Still active; AWS now also recommends **SageMaker Canvas** for new forecasting workloads |
| AWS CodeCommit | Returned to **full GA on 2025-11-24** — do **not** add the old "closed to new customers" disclaimer |
| AWS TCO Calculator | **Retired** — `awstcocalculator.com` redirects to AWS Pricing Calculator. Pricing Calculator now covers both solution estimation **and** TCO (on-prem vs AWS) comparison in one tool. Do not present TCO Calculator as a separate current product |
| AWS Simple Monthly Calculator | **Retired** — superseded by AWS Pricing Calculator |

---

## Feature-level updates worth tracking

These are not service-level changes but factual corrections that have already tripped up content:

| Feature | Update |
|---|---|
| AWS Trusted Advisor categories | Now **6 categories** (Cost Optimization, Performance, Security, Fault Tolerance, Service Limits, **Operational Excellence** — added 2022). Older references to "5 pillars/categories" are outdated |
| AWS Health API | Available alongside the AWS Health Dashboard for **Business / Enterprise On-Ramp / Enterprise** Support customers — Domain 4.3 of CLF-C02 explicitly tests it together with the Health Dashboard |

---

## How to refresh this file

If a year passes, or after a major AWS re:Invent announcement, refresh both this file and `AUDIT.md`:

1. Read the methodology and category breakdown in [`AUDIT.md`](../AUDIT.md).
2. Sweep each topic file against the latest AWS documentation using the same 6 categories (discontinued, partial-EoL, renaming, outdated numbers, format, quiz consistency).
3. Update the three tables above with new findings.
4. Bump the **Last refreshed** date stamp at the top of this file.
5. Append a new audit-pass section to `AUDIT.md` with the new date and a summary of changes.
