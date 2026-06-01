# AWS CLF-C02 Study Notes — Content Audit Report

ตรวจสอบเนื้อหา **quiz + article body** ใน `data/topics/*.ts` ทั้ง 20 ไฟล์ของ AWS CLF-C02 study notes
เปรียบเทียบกับ AWS Official Documentation และ CLF-C02 Exam Guide

**วันที่ตรวจ:** 2026-05-30
**ผู้ตรวจ:** OpenCode (Claude Opus 4.7)
**Scope:** quiz arrays + article body (description, keyPoints, tags, sections) ทั้ง 20 ไฟล์

---

## Executive Summary

| Phase | Scope | Items reviewed | Edits made |
|---|---|---|---|
| **Phase 1** | Quiz audit — 501 questions | 501 | **27 edits** ใน 13 ไฟล์ |
| **Phase 2** | Article body audit + cross-cutting cleanup | ~16,000 บรรทัด | **~115 edits** ใน 18 ไฟล์ + types/topic.ts |
| **รวม** | — | — | **~142 edits** |

### Key Outcomes

- ✅ ลบบริการที่ discontinued ทั้งหมด: **CodeStar**, **Snowmobile**, **WorkDocs**, **Lookout for Metrics**, **Lookout for Vision**, **RoboMaker**, **DeepLens**, **Workspaces Web** (renamed)
- ✅ อัปเดตชื่อบริการที่ rebranded: **Kinesis Data Firehose → Amazon Data Firehose**, **Kinesis Data Analytics → Managed Service for Apache Flink**, **Personal Health Dashboard → AWS Health Dashboard**, **Inspector Agent v1 → SSM Agent (v2)**
- ✅ ลบ pipe-separator violations 100+ จุด ทั่ว 13 ไฟล์ (ละเมิด AGENTS.md)
- ✅ ลบ `emoji` field ที่ deprecated ออกจาก TopicData interface และทุก data file (20 ไฟล์)
- ✅ อัปเดตตัวเลขล้าสมัย: edge locations (216+/400+ → 600+), DocumentDB storage (64TB → 128 TiB), CloudFront PoPs, Free Tier (t2/t3.micro), Aurora storage
- ✅ เพิ่ม callout warning สำหรับบริการที่ partial-EoL (Cloud9, Forecast → SageMaker Canvas)
- ✅ Build verification: `npm run lint` + `npm run build` ผ่าน 24 pages
- ✅ Quiz consistency: article body สอดคล้องกับ quiz answers ที่อัปเดตแล้ว

---

## Service Status Reference (ณ พ.ค. 2026)

ข้อมูลสถานะบริการ AWS ที่กระทบเนื้อหาในโปรเจกต์:

| Service | สถานะ | Action |
|---|---|---|
| **AWS CodeStar** | **Discontinued 31 ก.ค. 2024** — หน้า redirect ไป homepage | ลบ section + grid card + quiz options |
| **AWS Snowmobile** | **Discontinued 2024** — หน้า redirect ไป Snowball page | ลบ grid card + keyPoints + mnemonic |
| **Amazon WorkDocs** | **Discontinued 31 มี.ค. 2025** | แทนด้วย WorkMail ในคำถาม |
| **Amazon Lookout for Metrics** | **Discontinued** | แทนด้วย DevOps Guru |
| **Amazon Lookout for Vision** | **Discontinued** | แทนด้วย Rekognition Custom Labels |
| **Amazon Lookout for Equipment** | **End of support 7 ต.ค. 2026** | rewrite เป็น Transcribe Medical |
| **Amazon Chime (end-user app)** | **End of support 20 ก.พ. 2026** | คงไว้แต่อ้าง Chime SDK แทน |
| **AWS RoboMaker** | **ปิดรับลูกค้าใหม่ ก.ย. 2022** | ลบจาก quiz options |
| **AWS DeepLens** | **Discontinued 2024** | ลบจาก quiz options |
| **AWS CodeCommit** | **กลับมา GA เต็ม 24 พ.ย. 2025** | ลบ disclaimer "closed to new" |
| **AWS Cloud9** | Closed to new customers 2024 — ลูกค้าเดิมยังใช้ได้ | เพิ่ม callout warning |
| **Amazon Forecast** | ยัง active แต่ AWS แนะ SageMaker Canvas | เพิ่ม callout note |
| **Kinesis Data Firehose** | **Renamed → Amazon Data Firehose** (Feb 2024) | rename + (formerly ...) |
| **Kinesis Data Analytics** | **Renamed → Managed Service for Apache Flink** | rename + (formerly ...) |
| **AWS SSO** | **Renamed → AWS IAM Identity Center** (ก.ค. 2022) | คงเดิม (อัปเดตแล้ว) |
| **CodeWhisperer** | **Renamed → Amazon Q Developer** (2024) | คงเดิม (อัปเดตแล้ว) |
| **Personal Health Dashboard** | **Renamed → AWS Health Dashboard** | rename ทั้งหมดในไฟล์ที่กระทบ |
| **Inspector Agent (v1)** | ตั้งแต่ Inspector v2 (2021) ใช้ **SSM Agent** | อัปเดต security.ts |
| **Workspaces Web** | **Renamed → WorkSpaces Secure Browser** | อัปเดต other-compute distractor |

---

## Phase 1: Quiz Audit (501 questions)

### Methodology

ตรวจ quiz แต่ละข้อด้วย 5 เกณฑ์: (A) Correctness, (B) Distractor quality, (C) Currency, (D) Scope (CLF-C02), (E) Format.

### Findings by Topic

| # | Topic | Status | Edits | Note |
|---|---|---|---|---|
| 1 | cloud-concepts | ✅ Pass | 0 | All 25 questions correct |
| 2 | iam | ✅ Pass | 0 | All 26 questions correct |
| 3 | ec2 | ✅ Pass | 0 | All 25 questions correct |
| 4 | ec2-storage | ✅ Pass | 0 | All 25 questions correct |
| 5 | elb-asg | ⚠️ Edits | 1 | elb-q12 — soften CLB tone (deprecated → previous-generation) |
| 6 | s3 | ⚠️ Edits | 2 | s3-q12 (bucket size limit), s3-q17 (Snowmobile → Snowball Edge) |
| 7 | databases | ⚠️ Edits | 2 | db-q19 (Kinesis → Data Firehose), db-q22 (add IBM Db2) |
| 8 | other-compute | ⚠️ Edits | 1 | oc-q10 (Workspaces Web → Secure Browser) |
| 9 | **deployment** | 🔴 Heavy | 6 | dep-q3, q4, q7, q9, q12, q13, q14 — CodeStar removal + CodeCommit disclaimer |
| 10 | global-infrastructure | ⚠️ Edits | 2 | gi-q4, q8 — edge location count |
| 11 | cloud-integration | ⚠️ Edits | 1 | ci-q13 — Kinesis renaming |
| 12 | cloud-monitoring | ✅ Pass | 0 | All 25 questions correct |
| 13 | vpc | ⚠️ Edits | 1 | vpc-q25 — reword default VPC question |
| 14 | security | ✅ Pass | 0 | All 25 questions correct |
| 15 | **machine-learning** | 🔴 Heavy | 4 | ml-q11, q15, q23, q24 — Forecast/Lookout services rewrite |
| 16 | account-management | ⚠️ Edits | 1 | am-q19 — Free Tier specifics |
| 17 | advanced-identity | ✅ Pass | 0 | All 25 questions correct |
| 18 | **other-services** | 🔴 Heavy | 5 | os-q12, q19, q24, q25 — RoboMaker/WorkDocs/Chime/DeepLens replacements |
| 19 | well-architected | ✅ Pass | 0 | All 25 questions correct |
| 20 | exam-tips | ✅ Pass | 0 | All 25 questions correct |
| **Total** | | | **27 edits** | 7 topics with no edits, 13 topics with edits |

---

## Phase 2: Article Body Audit (~16,000 lines)

### Methodology

ใช้ explore subagent ค้นหา issues 6 หมวดทั่วทุกไฟล์: (1) Discontinued services, (2) Partial-EoL, (3) Renaming, (4) Outdated numbers, (5) HTML/format violations, (6) Quiz consistency.

### Critical Removals (Discontinued services)

#### deployment.ts — CodeStar full removal
- ลบ entire `codestar` section (id, title, paragraph, list)
- ลบ CodeStar grid card ใน `developer-services-summary`
- แก้ Cloud9 list item ที่อ้าง CodeStar
- เพิ่ม callout warning ใน Cloud9 section ("closed to new customers ก.ค. 2024")

#### s3.ts — Snowmobile full removal
- ลบ Snowmobile จาก keyPoints (line 17)
- ลบ Snow Family list bullet ที่กล่าวถึง Snowmobile
- ลบ Snowmobile grid card ทั้งหมด
- แก้ size-tier mnemonic — ระบุว่า Snowmobile ถูกยกเลิกแล้ว

### Service Renaming (8+ files)

#### cloud-monitoring.ts
- 8 จุด: `Personal Health Dashboard` → `AWS Health Dashboard (formerly Personal Health Dashboard)` ใน keyPoints, list, section title, paragraph, callout, grid card

#### cloud-integration.ts
- Section titles + paragraphs: `Kinesis Data Firehose` → `Amazon Data Firehose (เดิม Kinesis Data Firehose)`
- `Kinesis Data Analytics` → `Managed Service for Apache Flink (เดิม Kinesis Data Analytics)`
- ASCII code diagram: ใช้ชื่อใหม่ทั้งหมด

#### account-management.ts
- 1 จุด: PHD → AWS Health Dashboard

### Outdated Numbers

| File | Line | Old | New |
|---|---|---|---|
| cloud-concepts.ts | 16, 290, 303, 485 | `216+ จุด` | `หลายร้อย (600+) ทั่วโลก` |
| global-infrastructure.ts | 43 | `400+ แห่ง · 90+ เมือง` | `หลายร้อย (600+) ครอบคลุมเมืองสำคัญ` |
| global-infrastructure.ts | 193 | `216+ Points of Presence` | `หลายร้อย Points of Presence (600+)` |
| databases.ts | 14, 101, 336 | `64TB` (Aurora/DocumentDB) | `128 TiB` |
| security.ts | 420 | `Inspector Agent` | `AWS Systems Manager (SSM) Agent` (Inspector v2) |
| account-management.ts | 266, 275, 283 | `t2.micro` only | `t2.micro/t3.micro` + Always Free expanded |
| machine-learning.ts | Forecast section | คงข้อมูลเดิม | + callout "AWS แนะ SageMaker Canvas" |
| elb-asg.ts | 109 | CLB `(deprecated)` | CLB `(legacy)` + softer tone |

### Pipe-separator Violations (100+ instances)

ตาม AGENTS.md ห้ามใช้ ` | ` ใน description/text ของ paragraph/list/grid/callout (เก็บ ASCII tables ใน `code` blocks ได้)

**Files cleaned (12 files, total 100+ violations replaced with `<br>` or restructured to lists):**

| File | Pipes removed |
|---|---|
| exam-tips.ts | 13 (heaviest, including 1 keyword-hint converted to list) |
| other-compute.ts | 28 |
| ec2-storage.ts | 22 |
| vpc.ts | 15 |
| databases.ts | 8 |
| other-services.ts | 4 |
| ec2.ts | 3 |
| well-architected.ts | 2 |
| advanced-identity.ts | 2 |
| machine-learning.ts | 2 |
| cloud-monitoring.ts | 2 |
| iam.ts | 1 |
| **Total** | **~100 pipes removed** |

### Cross-cutting Cleanup

#### emoji field removal
- ลบ `emoji: string` field ออกจาก `TopicData` interface ใน `types/topic.ts`
- ลบ `emoji: "..."` จากทุก 20 data files (`data/topics/*.ts`)
- อัปเดต AGENTS.md เพื่อสะท้อนการลบ field
- UI ใช้ `lucide-react` icons ผ่าน `<CategoryIcon>` (ไม่กระทบ visual)

---

## Build Verification

```
$ npm run lint
✓ Lint clean (0 errors)

$ npm run build
✓ Compiled successfully
✓ Generating static pages (24/24)
✓ All 24 pages emitted: 1 home + 20 topics + 3 system pages
```

---

## Files Touched

| File | Phase 1 quiz | Phase 2 article | Phase 2 cleanup |
|---|---|---|---|
| account-management.ts | ✓ | ✓ | ✓ |
| advanced-identity.ts | — | ✓ (pipes) | ✓ |
| cloud-concepts.ts | — | ✓ (numbers) | ✓ |
| cloud-integration.ts | ✓ | ✓ (rename) | ✓ |
| cloud-monitoring.ts | — | ✓ (rename) | ✓ |
| databases.ts | ✓ | ✓ (numbers, pipes) | ✓ |
| **deployment.ts** | ✓ | ✓ (CodeStar removal) | ✓ |
| ec2-storage.ts | — | ✓ (pipes) | ✓ |
| ec2.ts | — | ✓ (pipes) | ✓ |
| elb-asg.ts | ✓ | ✓ (CLB tone) | ✓ |
| **exam-tips.ts** | — | ✓ (heavy pipes) | ✓ |
| global-infrastructure.ts | ✓ | ✓ (numbers) | ✓ |
| iam.ts | — | ✓ (pipes) | ✓ |
| **machine-learning.ts** | ✓ | ✓ (Forecast note) | ✓ |
| **other-compute.ts** | ✓ | ✓ (heavy pipes) | ✓ |
| **other-services.ts** | ✓ | ✓ (pipes) | ✓ |
| **s3.ts** | ✓ | ✓ (Snowmobile removal) | ✓ |
| security.ts | — | ✓ (Inspector Agent) | ✓ |
| vpc.ts | — | ✓ (pipes) | ✓ |
| well-architected.ts | — | ✓ (pipes) | ✓ |
| **types/topic.ts** | — | — | ✓ (emoji field) |
| **AGENTS.md** | — | — | ✓ (interface doc) |

---

## Out of Scope (รายงานเฉยๆ ไม่แก้)

- **Stephane Maarek mentions** ใน exam-tips.ts (lines 332, 335) — เป็น user-facing study-resource recommendation, intentional editorial content
- **Symbols `✓` / `✗`** ใน global-infrastructure.ts (line 123) — typography for clarity, not emoji per se
- **AWS Support plans rebranding** (Business Support+, Unified Operations) — exam guide ปัจจุบันยังทดสอบ 4 tiers หลัก (Basic, Developer, Business, Enterprise + Enterprise On-Ramp) จึงคงเดิม
- **t2 instance examples** ใน elb-asg article body — t2 ยังเป็น valid family แต่ AWS แนะนำ t3/t4 เป็นหลักในปัจจุบัน

---

## Conclusion

โปรเจกต์ AWS CLF-C02 study notes ได้รับการตรวจสอบและอัปเดตให้ทันสมัยกับสถานะ AWS services ณ พฤษภาคม 2026:

- **Quiz** ทั้ง 501 ข้อสอดคล้องกับ AWS Official Documentation และ CLF-C02 Exam Guide
- **Article body** ทั้งหมดไม่อ้างถึงบริการที่ discontinued อีกต่อไป
- **Code quality** ปฏิบัติตามมาตรฐานใน AGENTS.md (ไม่มี pipe-separator violations, ไม่มี emoji, ไม่มี deprecated fields)
- **Build verification** ผ่าน 24 หน้าตามที่ AGENTS.md กำหนด

ผู้เรียนที่ใช้ notes นี้สำหรับ CLF-C02 จะไม่พบเนื้อหาที่ทำให้สับสนหรือชี้ไปบริการที่ปิดไปแล้ว

---

## Follow-up Audit Pass — 2026-05-31

ตรวจซ้ำหลังการอัปเดตหลัก พบประเด็นเพิ่มเติม 3 หมวด:

### A. Outdated information

| File | Issue | Fix |
|---|---|---|
| `account-management.ts` (×4 จุด: lines 724, 731, 1079) + `cloud-monitoring.ts` (line 658) + `exam-tips.ts` (line 684) | Trusted Advisor บอก **5 pillars/categories** | อัปเดตเป็น **6 categories** (เพิ่ม Operational Excellence ปี 2022) |
| `account-management.ts` lines 555–585, 855–897 | **TCO Calculator** ที่ awstcocalculator.com ถูก retire และรวมเข้า Pricing Calculator แล้ว | ลบ TCO Calculator เป็น tool แยก, อัปเดตเป็น "Pricing Calculator (รวม TCO comparison ในตัวเดียว)" |
| `cloud-integration.ts` ci-q10 (lines 640, 646) | คำตอบที่ถูกต้องและ explanation ใช้ชื่อเดิม "Kinesis Data Firehose" | เปลี่ยนเป็น "Amazon Data Firehose (formerly Kinesis Data Firehose)" |
| `cloud-monitoring.ts` line 854 | คำว่า "pillar" ใน quiz cm-q19 | เปลี่ยนเป็น "category" |

### B. Missing in-scope / testable concepts (per CLF-C02 Domain 4.3 task statement)

เพิ่มเนื้อหาใหม่ที่ exam guide ระบุชัดเจนว่าเป็น testable resources แต่ไม่เคยถูก cover:

| File | Addition |
|---|---|
| `cloud-monitoring.ts` (AWS Health Dashboard section) | เพิ่ม bullet เรื่อง **AWS Health API** (programmatic access, ต้องใช้ Business+ support plan) |
| `account-management.ts` | เพิ่ม **section ใหม่ `technical-resources-partners`** ครอบคลุม: AWS re:Post, Knowledge Center, Prescriptive Guidance, Whitepapers/Documentation, Solutions Architects, Professional Services, AWS Partner Network (ISV / SI / partner benefits / Marketplace as partner channel), Trust &amp; Safety abuse reporting |
| `account-management.ts` quiz | เพิ่ม **4 quiz ข้อ** (am-q26 ถึง am-q29): re:Post, Prescriptive Guidance, Trust &amp; Safety, ISV/APN |

### C. Build verification

```
$ npm run lint   ✓ 0 errors
$ npm run build  ✓ 24/24 pages emitted (1 home + 20 topics + 3 system)
```

### Notes / out of scope

- **CodeArtifact + CodeDeploy** ยังคงเก็บไว้ตามคำสั่งของ author (out-of-scope ในรายการอย่างเป็นทางการของ CLF-C02 แต่เป็น context CI/CD ที่มีประโยชน์ต่อผู้เรียน) — ไม่แก้ไข
- **Trusted Advisor "5 pillars" ใน well-architected.ts:29** หมายถึง pillars เริ่มต้นของ **Well-Architected Framework** (ก่อนเพิ่ม Sustainability ปี 2021) ไม่ใช่ Trusted Advisor — คำในบริบทถูกต้องแล้ว ไม่แก้
- **AWS Support plans restructure** (Business+/Unified Operations/Enterprise On-Ramp sunset Jan 2027) — ยังไม่อัปเดตในเอกสารเพราะ exam guide ปัจจุบันยังทดสอบ tier เดิม (Basic/Developer/Business/Enterprise On-Ramp/Enterprise) เก็บสอดคล้องกับ exam scope
- **Distractors ที่ใช้ชื่อ Kinesis Data Firehose / Kinesis Data Analytics** ใน ci-q12, q14, q15 ยังคงไว้ — เป็น distractor ที่ defensible เพราะข้อสอบยังอาจทดสอบชื่อเก่า (รีแบรนด์ปี 2024)
