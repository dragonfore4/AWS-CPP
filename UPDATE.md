# UPDATE — Follow-up Audit (2026-05-31)

บันทึกการเปลี่ยนแปลงรอบนี้ (snapshot, ไม่ใช่ rolling log) — สำหรับรายละเอียดเต็มของ audit รอบหลัก ดู [`AUDIT.md`](./AUDIT.md) และ [`docs/SERVICES.md`](./docs/SERVICES.md)

---

## สรุป

- ตรวจซ้ำหลังการ audit หลัก พบและแก้ **3 จุดที่ล้าสมัย** + เพิ่ม **5 ส่วนเนื้อหาที่ขาด** ตามที่ CLF-C02 Domain 4.3 ระบุ
- ตามคำสั่งผู้ใช้: คงไว้ **CodeArtifact + CodeDeploy** แม้จะ out-of-scope
- ผ่าน `npm run lint` (0 errors) + `npm run build` (24/24 pages)

---

## A. แก้ข้อมูลที่ล้าสมัย (Outdated information)

### A1. AWS Trusted Advisor: 5 → 6 categories

AWS เพิ่ม **Operational Excellence** เป็น category ที่ 6 ในปี 2022

| File | Line | เปลี่ยน |
|---|---|---|
| `data/topics/account-management.ts` | 724 | grid item `5 Categories` → `6 Categories` (เพิ่ม Operational Excellence) |
| `data/topics/account-management.ts` | 731 | callout `5 Categories` → `6 Categories` |
| `data/topics/account-management.ts` | 1079 | quiz explanation `5 pillars` → `6 categories` |
| `data/topics/cloud-monitoring.ts` | 658 | quiz explanation `5 pillars` → `6 categories` |
| `data/topics/cloud-monitoring.ts` | 854 | quiz cm-q19 question `pillar` → `category` |
| `data/topics/exam-tips.ts` | 684 | quiz explanation `5 pillars` → `6 categories` |

อ้างอิง: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/

### A2. AWS TCO Calculator ถูก retire

`awstcocalculator.com` redirect ไปยัง AWS Pricing Calculator แล้ว — Pricing Calculator ปัจจุบันรองรับทั้งการประมาณ solution cost และการเปรียบเทียบ on-prem vs AWS (TCO) ในตัวเดียว

ไฟล์ที่แก้: `data/topics/account-management.ts`

- Section `estimating-costs` (lines 553–586): เขียนใหม่ทั้ง section — ลบ TCO Calculator เป็น tool แยก, ระบุว่า TCO Calculator + Simple Monthly Calculator ถูก retire ทั้งคู่และฟังก์ชันรวมอยู่ใน Pricing Calculator
- Grid `billing-tools-summary` (lines 855–862): ลบ TCO Calculator card, อัปเดต Pricing Calculator description ให้รวม TCO comparison
- List "วางแผน" (line 897): ลบ TCO Calculator
- Callout "ข้อสอบชอบถาม": ทั้งสองคำถาม → Pricing Calculator (ตัวเดียว)

### A3. ci-q10 ใช้ชื่อเก่า "Kinesis Data Firehose"

คำตอบที่ถูกต้องและ explanation ใช้ชื่อเดิม ทั้งที่ทุกที่อื่นใน file นี้ใช้ชื่อใหม่แล้ว

| File | Line | เปลี่ยน |
|---|---|---|
| `data/topics/cloud-integration.ts` | 640 | option text → `Amazon Data Firehose (formerly Kinesis Data Firehose)` |
| `data/topics/cloud-integration.ts` | 646 | explanation → `Amazon Data Firehose (formerly Kinesis Data Firehose)` |

---

## B. เพิ่มเนื้อหาที่ขาด (Per CLF-C02 Domain 4.3)

### B5. AWS Health API

Domain 4.3 ระบุว่าทดสอบ "AWS Health Dashboard, and the AWS Health API" คู่กัน — ของเดิมขาด Health API

ไฟล์: `data/topics/cloud-monitoring.ts` (section `aws-health-dashboard`)

เพิ่ม bullet:
> **AWS Health API** — programmatic access ดึง health events ไป integrate กับระบบ ITSM/monitoring เอง (ต้องใช้ Business / Enterprise On-Ramp / Enterprise Support plan)

### B1–B4. Section ใหม่: "Technical Resources, Partners & Trust"

ตำแหน่ง: `data/topics/account-management.ts`
- id: `technical-resources-partners`
- ตำแหน่ง: หลัง `support-plans`, ก่อน `account-best-practices`

ครอบคลุม resource ที่ Domain 4.3 ระบุชัดเจน:

- **AWS re:Post** — community Q&A platform (replaced AWS Forums)
- **AWS Knowledge Center** — curated FAQ articles จาก support cases
- **AWS Prescriptive Guidance** — patterns/playbooks library
- **AWS Whitepapers & Documentation**
- **AWS Solutions Architects** — engineer ของ AWS ช่วย design architecture
- **AWS Professional Services** — engagement-based consulting
- **AWS Partner Network (APN)**:
  - Independent Software Vendors (ISVs)
  - System Integrators (SIs)
  - Partner benefits (training, events, volume discounts)
  - AWS Marketplace as partner distribution channel
- **AWS Trust & Safety team** — รายงาน abuse จาก AWS resources

### Quiz ใหม่ 4 ข้อ

| ID | หัวข้อ |
|---|---|
| `am-q26` | AWS re:Post (community Q&A vs Knowledge Center) |
| `am-q27` | AWS Prescriptive Guidance (patterns/playbooks) |
| `am-q28` | AWS Trust & Safety (รายงาน abuse จาก EC2 ของ account อื่น) |
| `am-q29` | AWS Partner Network roles (ISV vs SI) |

---

## C. อัปเดตเอกสาร

### `AUDIT.md`

ต่อท้ายด้วย section **"Follow-up Audit Pass — 2026-05-31"** ครอบคลุม:
- ตารางแก้ outdated info (3 จุด)
- รายละเอียดเนื้อหาที่เพิ่ม (5 ส่วน + 4 quiz)
- หัวข้อ "Notes / out of scope" (รวมเรื่อง Support plans restructure ที่ยังไม่อัปเดตเพราะ exam guide ปัจจุบัน)

### `docs/SERVICES.md`

- bump **Last refreshed** → 2026-05-31
- เพิ่มใน Partial-EoL table:
  - **AWS TCO Calculator** — Retired
  - **AWS Simple Monthly Calculator** — Retired
- เพิ่ม section ใหม่ **"Feature-level updates worth tracking"**:
  - AWS Trusted Advisor 6 categories
  - AWS Health API (Business+ support tiers)

---

## D. ไม่แก้ — เหตุผล

| รายการ | เหตุผล |
|---|---|
| CodeArtifact + CodeDeploy | ตามคำสั่งผู้ใช้ — out-of-scope ในรายการ CLF-C02 อย่างเป็นทางการ แต่เป็น context CI/CD ที่มีประโยชน์ |
| Distractors `Kinesis Data Firehose` / `Kinesis Data Analytics` ใน ci-q12, q14, q15 | Defensible — รีแบรนด์ปี 2024 ข้อสอบยังอาจทดสอบชื่อเก่า |
| Support plans restructure (Business Support+, Unified Operations, Enterprise On-Ramp sunset Jan 2027) | CLF-C02 exam guide ปัจจุบันยังทดสอบ tier เดิม (Basic / Developer / Business / Enterprise On-Ramp / Enterprise) — เก็บสอดคล้องกับ exam scope |
| `well-architected.ts:29` "5 pillars" | หมายถึง pillars เริ่มต้นของ Well-Architected Framework (ก่อนเพิ่ม Sustainability ปี 2021) — ถูกต้องแล้ว |

---

## ไฟล์ที่แตะในรอบนี้

| File | ประเภทการแก้ |
|---|---|
| `data/topics/account-management.ts` | ใหญ่ — TCO Calculator rewrite + new section + 4 quiz + TA category fix |
| `data/topics/cloud-monitoring.ts` | กลาง — Health API bullet + TA category fix + pillar→category |
| `data/topics/cloud-integration.ts` | เล็ก — ci-q10 Firehose rename |
| `data/topics/exam-tips.ts` | เล็ก — TA category fix |
| `AUDIT.md` | กลาง — ต่อท้าย Follow-up section |
| `docs/SERVICES.md` | กลาง — date bump + 2 retired calculators + feature updates section |

---

## Verification

```
$ npm run lint
✓ 0 errors

$ npm run build
✓ Compiled successfully
✓ Generating static pages (24/24)
✓ All 24 pages emitted: 1 home + 20 topics + 3 system pages
```

---

## UI improvement (รอบเดียวกัน)

ปรับ hover state ของ section navigation ให้ชัดเจนขึ้น — ผู้ใช้เห็นว่ากำลัง hover อยู่ section ไหนแน่ๆ
- รายละเอียดดูใน commit/diff ของ component navigation
