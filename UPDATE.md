# UPDATE — Coverage Expansion Pass (2026-06-03)

บันทึกการเปลี่ยนแปลงรอบนี้ (snapshot, ไม่ใช่ rolling log) — สำหรับรายละเอียดเต็มของ audit รอบก่อนๆ ดู [`AUDIT.md`](./AUDIT.md) และ [`docs/SERVICES.md`](./docs/SERVICES.md)

---

## สรุป

- ตรวจซ้ำ **CLF-C02 in-scope service coverage** เทียบกับ official exam guide ([In-Scope Services page](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html))
- พบ **11 บริการ Tier 1** ที่ in-scope แต่ไม่มี article body (มีเฉพาะใน quiz distractor) — ทั้งหมดเติมเนื้อหาให้ครบ
- พบ **5 บริการ Tier 2** ที่มี article body แล้วแต่ quiz coverage บาง — เพิ่ม quiz items
- พบ **OpenSearch** ไม่มี dedicated section จริง — promoted เป็น Tier 1 พร้อมเพิ่ม section ใน `databases.ts`
- เพิ่ม **Client VPN, AWS PrivateLink, Shield/WAF integration scope** ตามคำขอผู้ใช้ก่อนเริ่ม audit
- ไม่พบ service-status change (discontinued / renamed / partial-EoL) ใหม่ในรอบนี้
- ผ่าน `npm run lint` (0 errors) + `npm run build` (25 pages, ทุกหน้า static)

---

## A. ตามคำขอผู้ใช้: VPC + Security integration scope

### A1. VPC topic — เพิ่ม Client VPN และ PrivateLink

ไฟล์: `data/topics/vpc.ts`

| รายการ | การเปลี่ยน |
|---|---|
| `keyPoints` | แตกออกเพิ่ม Client VPN + PrivateLink — `"VPC Peering / Endpoints / PrivateLink<br>Site-to-Site VPN / Client VPN / Direct Connect / Transit Gateway"` |
| Section ใหม่ `client-vpn` | วางระหว่าง `vpn-direct-connect` และ `transit-gateway` — paragraph + grid (Site-to-Site vs Client VPN) + list + callout |
| Section `endpoints` | rename เป็น `"VPC Endpoints & PrivateLink"` — เพิ่ม paragraph เกี่ยวกับ PrivateLink, ขยาย grid 2→3 items (เพิ่ม PrivateLink for 3rd-party / customer services), เพิ่ม list bullets, เพิ่ม `info` callout เกี่ยวกับ SaaS exam pattern |
| Summary grid | เพิ่ม **Client VPN** + **AWS PrivateLink** items, อัปเดต VPC Endpoints description |
| Quiz +3 (vpc-q26..28) | (1) remote laptop → Client VPN, (2) Site-to-Site vs Client VPN, (3) SaaS API exposure → PrivateLink + NLB |

### A2. Security topic — เพิ่ม Shield/WAF integration scope

ไฟล์: `data/topics/security.ts`

| รายการ | การเปลี่ยน |
|---|---|
| `ddos-protection` section | เพิ่ม list ระบุ resources ที่ Shield Advanced ปกป้อง (CloudFront, Route 53, Global Accelerator, ELB, EC2 EIP) + `info` callout ว่า Shield ไม่ผูก ENI โดยตรง |
| `waf` section | เพิ่ม list ระบุ services ที่ WAF ผูกได้ (CloudFront, ALB, API Gateway, AppSync, Cognito user pools) + note ว่าใช้ไม่ได้กับ NLB / EC2 ตรง ๆ |
| Summary grid | อัปเดต Shield + WAF descriptions ให้ครอบคลุม integration scope |

---

## B. Audit Tier 1: เพิ่ม section ให้บริการ in-scope ที่ไม่มี article body

### B1. AWS Firewall Manager + AWS Audit Manager

ไฟล์: `data/topics/security.ts`

- Section ใหม่ `firewall-manager` (หลัง `waf`) — paragraph + list + `tip` callout
- Section ใหม่ `audit-manager` (หลัง `artifact`) — paragraph + grid (Artifact vs Audit Manager) + list + `info` callout
- Summary grid: เพิ่ม **Firewall Manager** + **Audit Manager** items
- Quiz +3 (sec-q26..28): WAF ไม่ผูกกับ EC2, Firewall Manager หลาย account, Audit Manager vs Artifact

### B2. Amazon EventBridge + AWS Step Functions

ไฟล์: `data/topics/cloud-integration.ts`

- Section ใหม่ `eventbridge` (หลัง `amazon-mq`) — paragraph + grid (Default/Custom/Partner Bus) + list + `tip` callout
- Section ใหม่ `step-functions` (ต่อจาก eventbridge) — paragraph + grid (Standard/Express) + list + `info` callout (เปรียบเทียบกับ EventBridge / SQS / SNS)
- Quiz +2 (ci-q26..27): orchestrate workflow → Step Functions, route events → EventBridge

### B3. AWS X-Ray

ไฟล์: `data/topics/cloud-monitoring.ts`

- Section ใหม่ `x-ray` (หลัง `personal-health-dashboard`) — paragraph + grid (Service Map / Trace Analysis) + list + `tip` callout (CloudWatch / CloudTrail / X-Ray)
- Comparison Summary grid: เพิ่ม **AWS X-Ray** item
- Decision-tree grid: เพิ่ม `"request ช้าตรงไหน?"` → X-Ray
- Summary grid: เพิ่ม **AWS X-Ray** item
- Quiz +1 (cm-q26): microservices request tracing → X-Ray

### B4. Amazon SES + AWS AppSync + WorkSpaces Secure Browser

ไฟล์: `data/topics/other-services.ts`

- Section ใหม่ `ses` (ก่อน `summary`) — paragraph + grid (Outbound / Inbound) + list + `tip` callout (SES vs SNS vs SQS)
- Section ใหม่ `appsync` (หลัง `amplify`) — paragraph + list + `info` callout (API Gateway vs AppSync)
- Section `workspaces` (เดิม): เพิ่ม grid เปรียบเทียบ **Amazon WorkSpaces (full desktop)** vs **WorkSpaces Secure Browser** + `tip` callout
- Summary grid: เพิ่ม **AppSync**, **WorkSpaces Secure Browser**, **Amazon SES** items
- Quiz +3 (os-q26..28): SES = email service, AppSync = managed GraphQL, WorkSpaces vs Secure Browser

### B5. Service Quotas + AWS RAM + AWS License Manager

ไฟล์: `data/topics/account-management.ts`

- Section ใหม่ `service-quotas` (หลัง `control-tower`) — paragraph + list + `tip` callout
- Section ใหม่ `ram-license-manager` (ต่อจาก service-quotas) — paragraph + grid (RAM / License Manager) + list
- Quiz +3 (am-q30..32): Service Quotas → request increase, RAM → share subnets/TGW, License Manager → BYOL tracking

---

## C. Audit Tier 2: เพิ่ม quiz coverage ให้บริการที่มี section อยู่แล้ว

### C1. AWS Glue + Amazon QuickSight + Amazon OpenSearch (promoted)

ไฟล์: `data/topics/databases.ts`

- Section ใหม่ `opensearch` (หลัง `glue`, ก่อน `summary`) — paragraph + list + `info` callout (Elasticsearch rename trap)
- Summary grid: เพิ่ม **OpenSearch Service** item
- Quiz +2 (db-q26..27): Glue = serverless ETL + Data Catalog, QuickSight = serverless BI dashboards

### C2. Amazon Kendra + OpenSearch (rename) + Amazon Q

ไฟล์: `data/topics/machine-learning.ts`

- Quiz +3 (ml-q26..28): Kendra = enterprise NLP search, OpenSearch was formerly Elasticsearch Service, Q = generative AI assistant family (Q Business / Q Developer / Q in QuickSight)

---

## D. ไม่แก้ — เหตุผล

| รายการ | เหตุผล |
|---|---|
| Tier 3 cross-cutting (SDKs, Knowledge Center, Prescriptive Guidance) | ผู้ใช้เลือก scope = Tier 1 + Tier 2; Tier 3 มี diminishing returns |
| Section reordering / rewrites / structural refactors | ไม่ใช่ exam-coverage gap — เพิ่มความเสี่ยง regression โดยไม่ได้ payoff |
| Page count "24" ในเอกสาร | จริงๆ ตอนนี้ build emits 25 pages (1 home + 1 memos + 20 topics + 3 system) — `memos` page มีอยู่แล้วก่อนรอบนี้ — เป็น inconsistency เก่า ไม่ใช่ของรอบนี้ |
| ไม่อัปเดต `docs/SERVICES.md` ตารางบริการ | ตรวจรอบนี้ไม่พบ service-status change (discontinued / renamed / partial-EoL) ใหม่ — ตารางเดิมยังถูกต้อง (ยกเว้น bump วันที่ refresh) |

---

## E. ไฟล์ที่แตะในรอบนี้

| File | Δ lines | ประเภทการแก้ |
|---|---|---|
| `data/topics/vpc.ts` | +119 / -8 | Client VPN section + endpoints rename + 3 quiz |
| `data/topics/security.ts` | +146 / -2 | Firewall Manager + Audit Manager sections + Shield/WAF lists + 3 quiz |
| `data/topics/cloud-integration.ts` | +114 | EventBridge + Step Functions sections + 2 quiz |
| `data/topics/cloud-monitoring.ts` | +69 | X-Ray section + comparison grids + 1 quiz |
| `data/topics/other-services.ts` | +145 | SES + AppSync sections + Secure Browser grid + 3 quiz |
| `data/topics/account-management.ts` | +99 | Service Quotas + RAM + License Manager sections + 3 quiz |
| `data/topics/databases.ts` | +58 | OpenSearch section + 2 quiz |
| `data/topics/machine-learning.ts` | +42 | 3 quiz (Kendra / OpenSearch rename / Q) |
| `AUDIT.md` | (this round) | ต่อท้าย Coverage Expansion Pass section |
| `docs/SERVICES.md` | (this round) | bump Last refreshed → 2026-06-03 |
| `UPDATE.md` | (this round) | snapshot ใหม่ของรอบนี้ |

**รวม:** 8 ไฟล์ content + 3 ไฟล์ docs, **+784 / -8** บรรทัด content, **+20 quiz items**

---

## F. Verification

```
$ npm run lint
✓ 0 errors

$ npm run build
✓ Compiled successfully
✓ Generating static pages (25/25)
✓ All 25 pages emitted: 1 home + 1 memos + 20 topics + 3 system pages
```

AGENTS.md hard rules check:
- ✓ ไม่มี pipe-separator (` | `) ใน `description` / `text` ของเนื้อหาที่เพิ่ม
- ✓ ไม่มี emoji ในเนื้อหาที่เพิ่ม
- ✓ ใช้ current service names ทุกที่ (Amazon Data Firehose, IAM Identity Center, ฯลฯ)
- ✓ ไม่มี agent-comment leakage
- ✓ บริการที่เพิ่มทั้งหมดอยู่ในรายการ in-scope CLF-C02 (Client VPN, PrivateLink, Firewall Manager, Audit Manager, EventBridge, Step Functions, X-Ray, SES, AppSync, WorkSpaces Secure Browser, Service Quotas, RAM, License Manager, OpenSearch, Kendra, Q, Glue, QuickSight)

---

## G. ภาพรวม quiz count หลังรอบนี้

| File | Before | After | Δ |
|---|---|---|---|
| `vpc.ts` | 25 | 28 | +3 |
| `security.ts` | 25 | 28 | +3 |
| `cloud-integration.ts` | 25 | 27 | +2 |
| `cloud-monitoring.ts` | 25 | 26 | +1 |
| `other-services.ts` | 25 | 28 | +3 |
| `account-management.ts` | 29 | 32 | +3 |
| `databases.ts` | 25 | 27 | +2 |
| `machine-learning.ts` | 25 | 28 | +3 |
| **Total** | — | — | **+20** |
