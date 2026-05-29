import { TopicData } from "@/types/topic";

export const s3: TopicData = {
  slug: "s3",
  title: "S3",
  subtitle: "Simple Storage Service",
  accent: "yellow",
  emoji: "🪣",
  category: "Storage",
  description:
    "Amazon S3 คือ Object Storage ระดับ infinitely scalable เก็บไฟล์ได้ไม่จำกัด มี durability 99.999999999% (11 nines) ใช้สำหรับ backup, DR, archive, hybrid cloud, hosting, media, data lakes, software delivery และ static website นอกจากนี้ AWS ยังมี Snow Family สำหรับ migrate ข้อมูลขนาดใหญ่เข้าสู่ S3",
  keyPoints: [
    "Object storage แบบ unlimited — แต่ละไฟล์สูงสุด 5TB, key คือ full path ของ object",
    "Storage Classes 6 แบบ — เลือกตามความถี่ในการเข้าถึงเพื่อประหยัดค่าใช้จ่าย",
    "Durability 99.999999999% (11 nines) ทุก class — ข้อมูลแทบไม่มีทางหาย",
    "รองรับ Versioning, Replication (CRR/SRR), Object Lock (WORM) และ Static Website Hosting",
    "Snow Family — ขนข้อมูลทางกายภาพเข้าสู่ S3 (Snowcone, Snowball Edge, Snowmobile)",
  ],
  sections: [
    {
      id: "overview",
      title: "S3 Overview",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon S3</strong> เป็นหนึ่งในบริการหลักของ AWS โฆษณาว่าเป็น <em>infinitely scaling storage</em> เก็บข้อมูลในรูปแบบ <strong>objects</strong> ภายใน <strong>buckets</strong> ใช้กันอย่างแพร่หลายทั่วโลก",
        },
        {
          type: "list",
          items: [
            "<strong>Buckets</strong> — container ระดับบนสุด ชื่อต้อง <em>globally unique</em> ทั่ว AWS (ทุก account, ทุก region)",
            "<strong>Objects</strong> — ไฟล์ที่เก็บใน bucket ขนาดสูงสุด <strong>5TB ต่อ object</strong>",
            "<strong>Object Key</strong> = full path ของ object เช่น <code>s3://my-bucket/folder1/folder2/file.txt</code>",
            "ไม่มีแนวคิดเรื่อง directory จริงๆ — มีแค่ keys ที่มี prefix ดูเหมือน folder",
            "เป็น <strong>Regional service</strong> — bucket สร้างใน region ที่เลือก แต่ชื่อต้อง unique ทั่วโลก",
            "ไฟล์ใหญ่กว่า 5GB ต้องใช้ <strong>Multi-Part Upload</strong> (แนะนำเริ่มที่ 100MB)",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Backup & Storage",
              description: "เก็บไฟล์ backup ทั่วไป — ทดแทน on-prem storage ได้ทันที",
            },
            {
              title: "Disaster Recovery",
              description: "Replicate ข้อมูลข้าม region (CRR) เพื่อรองรับเหตุการณ์ภัยพิบัติ",
            },
            {
              title: "Archive",
              description: "เก็บข้อมูลระยะยาวใน Glacier / Deep Archive ราคาถูกมาก",
            },
            {
              title: "Hybrid Cloud Storage",
              description: "ใช้คู่กับ on-prem ผ่าน Storage Gateway",
            },
            {
              title: "Application Hosting",
              description: "เก็บ static assets ของแอป (JS, CSS, รูป)",
            },
            {
              title: "Media Hosting",
              description: "เก็บไฟล์ vdo / รูป ขนาดใหญ่ — scalable มาก",
            },
            {
              title: "Data Lakes & Big Data Analytics",
              description: "เก็บ raw data จำนวนมหาศาลให้ Athena / Redshift / EMR ดึงไปใช้",
            },
            {
              title: "Software Delivery",
              description: "เผยแพร่ installer / update ให้ผู้ใช้ดาวน์โหลด",
            },
            {
              title: "Static Website Hosting",
              description: "Host website ที่ไม่มี backend (HTML, CSS, JS) โดยตรงจาก S3",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Bucket Naming Convention",
          text: "ต้อง globally unique ทั่ว AWS · ความยาว 3-63 ตัวอักษร · ห้าม uppercase · ห้าม underscore · ห้ามขึ้นต้นด้วยตัวเลขแบบ IP address (เช่น 192.168.x.x) · ต้องขึ้นต้นด้วย lowercase letter หรือ number · ห้ามขึ้นต้นด้วย prefix <code>xn--</code> · ห้ามลงท้ายด้วย <code>-s3alias</code>",
        },
      ],
    },
    {
      id: "security",
      title: "S3 Security",
      content: [
        {
          type: "paragraph",
          text: "S3 Security แบ่งเป็น <strong>User-Based</strong> (ใครเข้าได้) และ <strong>Resource-Based</strong> (resource อนุญาตใคร) — สามารถใช้ร่วมกันได้",
        },
        {
          type: "grid",
          items: [
            {
              title: "User-Based: IAM Policies",
              description:
                "กำหนดในระดับ IAM user/role/group ว่า API call ใดบ้างที่อนุญาตสำหรับ user คนนั้นกับ S3",
            },
            {
              title: "Resource-Based: Bucket Policies",
              description:
                "JSON policy ติดที่ bucket — ใช้บ่อยที่สุด อนุญาต cross-account access ได้และ make bucket public ได้",
            },
            {
              title: "Resource-Based: Object ACL",
              description:
                "Access Control List ระดับ object — fine grained (เปิด/ปิดได้ในการตั้งค่า bucket)",
            },
            {
              title: "Resource-Based: Bucket ACL",
              description:
                "ACL ระดับ bucket — พบไม่บ่อยแล้ว (legacy, AWS แนะนำใช้ bucket policy แทน)",
            },
          ],
        },
        {
          type: "paragraph",
          text: "<strong>กฎ:</strong> IAM principal เข้าถึง S3 object ได้เมื่อ <em>(IAM permission อนุญาต OR resource policy อนุญาต) AND ไม่มี explicit DENY</em>",
        },
        {
          type: "code",
          language: "json",
          caption: "ตัวอย่าง S3 Bucket Policy — อนุญาต public read ทุก object",
          code: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}`,
        },
        {
          type: "list",
          items: [
            "<strong>Resources</strong> — ระบุ bucket / object ที่ policy มีผล (ARN)",
            "<strong>Effect</strong> — Allow หรือ Deny",
            "<strong>Actions</strong> — API call เช่น s3:GetObject, s3:PutObject",
            "<strong>Principal</strong> — ใคร (account / user / role) ที่ policy นี้มีผลกับ — ใช้ <code>*</code> หมายถึงใครก็ได้ (public)",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Block Public Access",
          text: "S3 มี settings <strong>Block Public Access</strong> ที่ระดับ bucket และ account level — เปิดเป็น default เพื่อกัน data leak บังคับเอาออกถึงจะ make bucket public ได้ AWS แนะนำว่าให้เปิดไว้เสมอเว้นแต่จำเป็นจริงๆ (เช่น static website hosting)",
        },
        {
          type: "list",
          items: [
            "Networking: รองรับ <strong>VPC Endpoint</strong> เข้าจาก VPC โดยไม่ต้องผ่าน internet",
            "Logging & Audit: <strong>CloudTrail</strong> log API call, <strong>S3 Access Logs</strong> log การเข้าถึง object",
            "User Security: <strong>MFA Delete</strong> ต้องมี MFA ก่อนลบ object (ใช้ได้เมื่อเปิด Versioning)",
          ],
        },
      ],
    },
    {
      id: "static-website",
      title: "S3 Static Website Hosting",
      content: [
        {
          type: "paragraph",
          text: "S3 สามารถ <strong>host static website</strong> (HTML, CSS, JS, รูป) ได้โดยตรงโดยไม่ต้องมี server — เปิดผ่าน internet ได้ทันที",
        },
        {
          type: "list",
          items: [
            "เปิด <strong>Static Website Hosting</strong> ใน bucket settings",
            "กำหนด <em>index document</em> (เช่น index.html) และ <em>error document</em> (เช่น error.html)",
            "URL format: <code>http://bucket-name.s3-website-<strong>aws-region</strong>.amazonaws.com</code> หรือ <code>http://bucket-name.s3-website.<strong>aws-region</strong>.amazonaws.com</code>",
            "Bucket ต้องเป็น <strong>public</strong> — ต้องปิด Block Public Access และตั้ง bucket policy ให้ allow public read (s3:GetObject)",
            "ถ้าไม่ตั้ง bucket policy ที่อนุญาต public read จะได้ <strong>403 Forbidden</strong>",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "S3 + CloudFront",
          text: "ในการใช้งานจริงมักใช้คู่กับ <strong>CloudFront</strong> (CDN) เพื่อ HTTPS support, caching, edge locations ทั่วโลก และ custom domain",
        },
      ],
    },
    {
      id: "versioning",
      title: "S3 Versioning",
      content: [
        {
          type: "paragraph",
          text: "<strong>S3 Versioning</strong> เก็บ version เก่าของ object ไว้ทุกครั้งที่มีการ overwrite หรือ delete — เปิดได้ที่ <em>ระดับ bucket</em>",
        },
        {
          type: "list",
          items: [
            "ทุกครั้งที่ upload ไฟล์ซ้ำชื่อเดิม จะได้ <strong>version ID ใหม่</strong> (version เก่ายังอยู่)",
            "การ delete จะใส่ <strong>delete marker</strong> แทนการลบจริง — กู้คืนได้โดยการลบ delete marker ออก",
            "ป้องกันการลบโดยไม่ตั้งใจ (unintended deletes) และทำ <em>rollback</em> ได้ง่าย",
            "ไฟล์ที่มีอยู่ก่อนเปิด versioning จะมี version ID = <code>null</code>",
            "Suspending versioning ไม่ได้ลบ version เก่า — แค่หยุดสร้าง version ใหม่",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "ค่าใช้จ่ายเพิ่ม",
          text: "Versioning เก็บทุก version ไว้ — ถ้ามีการ overwrite บ่อย ค่าใช้จ่ายอาจเพิ่มขึ้นมาก ควรใช้ Lifecycle Rules ลบ version เก่าที่ไม่ใช้แล้ว",
        },
      ],
    },
    {
      id: "access-logs",
      title: "S3 Access Logs",
      content: [
        {
          type: "paragraph",
          text: "<strong>S3 Access Logs</strong> ใช้สำหรับ <em>audit purpose</em> — บันทึกทุก request ที่เข้ามาที่ S3 bucket (ทั้ง authorized และ unauthorized)",
        },
        {
          type: "list",
          items: [
            "Log จะถูกเขียนไปยัง <strong>S3 bucket อื่น</strong> (logging bucket) — ไม่ใช่ bucket ตัวเอง",
            "บันทึก: ใครเข้า, request type, time, status code, error code, etc.",
            "Logging bucket ต้องอยู่ใน <strong>region เดียวกัน</strong> กับ bucket ที่ถูก log",
            "ใช้วิเคราะห์ผ่าน Athena ได้",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "ห้าม log ไป bucket ตัวเอง",
          text: "ห้ามตั้ง logging bucket เป็น bucket เดียวกับ bucket ที่ถูก log จะเกิด <strong>logging loop</strong> bucket จะใหญ่ขึ้นเรื่อยๆ ไม่จบ",
        },
      ],
    },
    {
      id: "replication",
      title: "S3 Replication (CRR & SRR)",
      content: [
        {
          type: "paragraph",
          text: "S3 Replication คือการ <strong>copy objects อัตโนมัติ</strong> จาก source bucket ไปยัง destination bucket — ต้องเปิด <em>Versioning</em> ทั้งสองฝั่ง",
        },
        {
          type: "grid",
          items: [
            {
              title: "CRR — Cross-Region Replication",
              description:
                "Replicate ข้าม region — ใช้สำหรับ compliance, lower latency access จาก region อื่น, replication ข้าม account",
            },
            {
              title: "SRR — Same-Region Replication",
              description:
                "Replicate ภายใน region เดียวกัน — ใช้สำหรับ log aggregation, live replication ระหว่าง production และ test accounts",
            },
          ],
        },
        {
          type: "list",
          items: [
            "ต้องเปิด <strong>Versioning</strong> ทั้ง source และ destination",
            "Buckets อยู่คนละ AWS account ได้",
            "Replication เป็น <strong>asynchronous</strong> (ไม่ทันที)",
            "ต้องให้ <strong>IAM permission</strong> ที่เหมาะสมกับ S3 (S3 ทำหน้าที่ replicate ในนามคุณ)",
            "Object ที่มีอยู่ก่อนเปิด replication จะ <em>ไม่</em> ถูก replicate อัตโนมัติ — ต้องใช้ <strong>S3 Batch Replication</strong>",
            "Delete operations: replicate <em>delete marker</em> ได้ (optional), แต่ <em>permanent delete พร้อม version ID</em> จะไม่ replicate (กันการ malicious delete)",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Use Cases",
          text: "<strong>CRR:</strong> compliance, lower latency, cross-account · <strong>SRR:</strong> log aggregation จากหลาย bucket, live replication ระหว่าง prod ↔ test account",
        },
      ],
    },
    {
      id: "storage-classes",
      title: "S3 Storage Classes",
      content: [
        {
          type: "paragraph",
          text: "S3 มี Storage Classes 6 แบบหลัก (Glacier มี 3 sub-tiers) — เลือกตาม <em>ความถี่ในการเข้าถึง</em> และ <em>ค่าใช้จ่าย</em> ที่ยอมรับได้ — ทุก class มี <strong>durability 99.999999999% (11 nines)</strong> เหมือนกัน",
        },
        {
          type: "grid",
          items: [
            {
              title: "S3 Standard — General Purpose",
              description:
                "เข้าถึงบ่อย — <strong>availability 99.99%</strong>, low latency, high throughput, ใช้กับ big data, mobile/gaming apps, content distribution",
            },
            {
              title: "S3 Standard-IA (Infrequent Access)",
              description:
                "เข้าถึงไม่บ่อยแต่ต้องการเร็วเมื่อเข้าถึง — <strong>availability 99.9%</strong>, ค่าเก็บถูกกว่า Standard แต่มี <em>retrieval fee</em> ต่อ GB · ใช้กับ DR, backup",
            },
            {
              title: "S3 One Zone-IA",
              description:
                "Infrequent Access แต่เก็บใน <strong>AZ เดียว</strong> — <strong>availability 99.5%</strong>, ถูกกว่า Standard-IA ~20% ข้อมูลหายถ้า AZ พัง · เหมาะกับข้อมูลที่สร้างใหม่ได้, secondary backup",
            },
            {
              title: "S3 Intelligent-Tiering",
              description:
                "ย้าย object ระหว่าง tiers <strong>อัตโนมัติ</strong> ตามการใช้งาน — มี monitoring fee เล็กน้อยแต่ <em>ไม่มี retrieval fee</em> ไม่ต้องคิด lifecycle เอง · เหมาะเมื่อไม่รู้ pattern การเข้าถึง",
            },
            {
              title: "S3 Glacier — Archive",
              description:
                "ราคาถูกสำหรับ archive · retrieval มี 3 ระดับ: <strong>Expedited 1-5 นาที</strong>, <strong>Standard 3-5 ชม.</strong>, <strong>Bulk 5-12 ชม.</strong> · ขั้นต่ำ 90 วัน",
            },
            {
              title: "S3 Glacier Deep Archive",
              description:
                "<strong>ถูกที่สุด</strong> — สำหรับข้อมูลที่แทบไม่เข้าถึง (long-term archive) · retrieval: <strong>Standard 12 ชม.</strong>, <strong>Bulk 48 ชม.</strong> · ขั้นต่ำ 180 วัน",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>Durability:</strong> ทุก class = 99.999999999% (11 nines) — เก็บ 10 ล้าน objects โดยเฉลี่ยจะหาย 1 object ทุกๆ 10,000 ปี",
            "<strong>Availability:</strong> ต่างกันตาม class · Standard 99.99% > Standard-IA 99.9% > One Zone-IA 99.5%",
            "ย้าย class ได้ด้วยตนเอง หรือใช้ <strong>S3 Lifecycle Rules</strong> ย้ายอัตโนมัติตามอายุ object",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "เทคนิคจำ",
          text: "<strong>Standard</strong> = ใช้บ่อย · <strong>IA</strong> = ไม่บ่อยแต่ต้องเร็ว · <strong>One Zone-IA</strong> = IA แต่ AZ เดียว ถูกกว่า · <strong>Intelligent-Tiering</strong> = ให้ AWS จัดการให้ · <strong>Glacier</strong> = archive ยิ่ง Deep ยิ่งถูกแต่ช้า",
        },
      ],
    },
    {
      id: "object-lock",
      title: "S3 Object Lock & Glacier Vault Lock",
      content: [
        {
          type: "paragraph",
          text: "<strong>S3 Object Lock</strong> และ <strong>Glacier Vault Lock</strong> ใช้รูปแบบ <strong>WORM (Write Once Read Many)</strong> — เขียนแล้วลบ/แก้ไม่ได้ในช่วงเวลาที่กำหนด เหมาะกับ compliance",
        },
        {
          type: "grid",
          items: [
            {
              title: "S3 Object Lock",
              description:
                "Block <strong>delete / overwrite</strong> object version เป็นเวลาที่กำหนด หรือ indefinitely · ใช้กับ compliance เช่น financial records, healthcare data — ต้องเปิด Versioning",
            },
            {
              title: "S3 Glacier Vault Lock",
              description:
                "ใช้ WORM กับ Glacier Vault — สร้าง Vault Lock Policy แล้ว <em>lock</em> ห้ามแก้ไขหรือลบนโยบายนี้ตลอดไป · เหมาะ regulatory compliance, data retention",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "WORM คืออะไร",
          text: "<strong>Write Once Read Many</strong> — เขียนข้อมูลครั้งเดียว อ่านได้ไม่จำกัด แต่ <em>แก้ / ลบ ไม่ได้</em> ในช่วงเวลาที่กำหนด · ป้องกันการดัดแปลงข้อมูล (แม้ root account ก็ลบไม่ได้)",
        },
      ],
    },
    {
      id: "shared-responsibility",
      title: "Shared Responsibility for S3",
      content: [
        {
          type: "paragraph",
          text: "S3 ก็ใช้ <strong>Shared Responsibility Model</strong> เหมือนบริการอื่น — AWS ดูแล infrastructure ส่วนผู้ใช้รับผิดชอบเรื่อง config และ data",
        },
        {
          type: "grid",
          items: [
            {
              title: "AWS รับผิดชอบ",
              description:
                "Infrastructure (global security, durability, availability, sustainability) · Configuration และ vulnerability analysis · ความพร้อมของ service-side encryption · Compliance validation · Separation ระหว่าง customer (multi-tenant)",
            },
            {
              title: "ผู้ใช้รับผิดชอบ",
              description:
                "S3 Versioning · Bucket Policies / IAM Policies · Replication setup · Logging and monitoring · Storage Classes selection · Encryption settings (เลือกใช้ SSE-S3 / SSE-KMS / SSE-C / Client-side)",
            },
          ],
        },
      ],
    },
    {
      id: "snow-family",
      title: "AWS Snow Family",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Snow Family</strong> คือชุดอุปกรณ์ <em>physical portable</em> ที่ <strong>highly secure</strong> ใช้สำหรับ <strong>collect และ process data</strong> นอก AWS — ใช้ทั้งงาน <em>data migration</em> เข้าสู่ AWS และ <em>edge computing</em> ในพื้นที่ที่เน็ตไม่ดี",
        },
        {
          type: "callout",
          variant: "info",
          title: "ทำไมต้องใช้ Snow Family?",
          text: "เมื่อต้อง migrate ข้อมูลขนาดใหญ่ (TB-PB) บางทีการส่งผ่าน internet <em>ช้าและแพง</em> — เช่น 100TB ผ่าน 100Mbps ใช้เวลา ~120 วัน · แก้ปัญหา: <strong>limited connectivity, limited bandwidth, high network cost, shared bandwidth, connection stability</strong>",
        },
        {
          type: "paragraph",
          text: "<strong>Use cases สองด้าน:</strong>",
        },
        {
          type: "grid",
          items: [
            {
              title: "1. Data Migration",
              description:
                "ขนข้อมูลจำนวนมากเข้า AWS โดยส่งอุปกรณ์ทางไปรษณีย์ — Snowcone, Snowball Edge, Snowmobile",
            },
            {
              title: "2. Edge Computing",
              description:
                "Process data ในที่ที่ไม่มี internet หรือเน็ตช้า เช่น เรือ เหมือง สถานที่ห่างไกล — รัน EC2 Instances + Lambda functions ผ่าน <strong>AWS IoT Greengrass</strong>",
            },
          ],
        },
        {
          type: "paragraph",
          text: "<strong>อุปกรณ์ในตระกูล Snow:</strong>",
        },
        {
          type: "grid",
          items: [
            {
              title: "Snowcone (& Snowcone SSD)",
              description:
                "เล็กที่สุด — น้ำหนัก 4.5 lbs (2.1 kg) · พื้นที่ <strong>8 TB HDD</strong> (Snowcone) หรือ <strong>14 TB SSD</strong> · ใช้ในที่จำกัดพื้นที่ (drone, IoT, vehicle) · ทนทาน secure rugged",
            },
            {
              title: "Snowball Edge — Storage Optimized",
              description:
                "<strong>80 TB</strong> HDD capacity · เหมาะกับงาน <em>data migration ขนาดใหญ่</em> · มี clustering ได้",
            },
            {
              title: "Snowball Edge — Compute Optimized",
              description:
                "<strong>42 TB</strong> HDD + GPU optional · เหมาะกับงาน <em>edge computing</em>, machine learning, video analytics, local computing",
            },
            {
              title: "Snowmobile",
              description:
                "<strong>ตู้คอนเทนเนอร์</strong> 45 ฟุต ลากด้วยรถบรรทุก! · ความจุ <strong>up to 100 PB ต่อคัน</strong> · เหมาะเมื่อต้อง migrate <strong>มากกว่า 10 PB</strong> · มี GPS tracking, 24/7 video surveillance, security personnel",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "เลือกอุปกรณ์อย่างไร",
          text: "<strong>≤ 24 TB:</strong> Snowcone · <strong>หลาย TB ถึง PB:</strong> Snowball Edge · <strong>&gt; 10 PB:</strong> Snowmobile",
        },
        {
          type: "paragraph",
          text: "<strong>ขั้นตอนการใช้งาน Snow Family (Data Migration):</strong>",
        },
        {
          type: "list",
          items: [
            "1. <strong>Request</strong> Snow device จาก AWS Console",
            "2. AWS ส่งอุปกรณ์มาทางไปรษณีย์",
            "3. ติดตั้ง <strong>AWS OpsHub</strong> software บนเครื่อง client เพื่อจัดการอุปกรณ์",
            "4. Connect Snow device เข้า network และ <strong>copy ไฟล์</strong> เข้าอุปกรณ์",
            "5. Ship อุปกรณ์กลับ AWS",
            "6. AWS โหลดข้อมูลขึ้น <strong>S3 bucket</strong> ที่ระบุ",
            "7. AWS <strong>wipe</strong> อุปกรณ์ตามมาตรฐาน NIST",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Edge Computing บน Snow",
          text: "Snowcone และ Snowball Edge รัน <strong>EC2 Instances + AWS Lambda functions</strong> ได้ในตัวผ่าน <strong>AWS IoT Greengrass</strong> · เหมาะกับ preprocess data, machine learning, transcoding media · เช่าได้แบบ short-term (1 day-3 yr) ส่งคืนหรือ ship ใหม่",
        },
      ],
    },
    {
      id: "opshub",
      title: "AWS OpsHub",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS OpsHub</strong> คือ <em>software application</em> ที่ AWS แจกฟรี — ใช้จัดการ Snow Family devices ผ่าน <strong>GUI</strong> แทน CLI เดิม (เมื่อก่อนต้องใช้ command line ยุ่งยาก)",
        },
        {
          type: "list",
          items: [
            "ติดตั้งบน <strong>laptop / desktop</strong> ของผู้ใช้ (Windows, macOS, Linux)",
            "Unlock และ configure Snow device แต่ละเครื่อง",
            "<strong>Drag-and-drop</strong> ไฟล์เข้า device",
            "Launch และจัดการ <strong>EC2 Instances</strong> บน Snowball Edge / Snowcone",
            "Monitor device metrics (capacity, network, storage)",
            "Manage AWS services ที่รันบน device — IoT Greengrass, EC2, S3 compatible storage",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "OpsHub ช่วยอะไร",
          text: "เปลี่ยนการจัดการ Snow device จาก <em>CLI</em> ที่ยุ่งยาก → เป็น <em>GUI</em> ใช้งานง่าย — ไม่ต้องเป็น sysadmin ก็จัดการได้",
        },
      ],
    },
    {
      id: "summary",
      title: "Summary",
      content: [
        {
          type: "list",
          items: [
            "<strong>S3 Buckets vs Objects</strong> — global unique name, tied to a region",
            "<strong>S3 Security</strong> — IAM policy, S3 Bucket Policy (public access), S3 Encryption",
            "<strong>S3 Websites</strong> — host static website on Amazon S3",
            "<strong>S3 Versioning</strong> — multiple versions for files, prevent accidental deletes",
            "<strong>S3 Access Logs</strong> — log requests made within your S3 bucket",
            "<strong>S3 Replication</strong> — same-region or cross-region, must enable versioning",
            "<strong>S3 Storage Classes</strong> — Standard, IA, 1Z-IA, Intelligent, Glacier, Glacier Deep Archive",
            "<strong>S3 Object Lock</strong> — WORM model, prevent deletes for a defined time",
            "<strong>Snow Family</strong> — physical devices to transfer data into AWS or run edge computing",
            "<strong>OpsHub</strong> — desktop application to manage Snow Family devices",
            "<strong>Shared Responsibility</strong> — AWS handles infra; you handle config, policy, encryption",
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: "s3-q1",
      question:
        "บริษัทต้องการเก็บข้อมูล archive ที่แทบไม่เคยเข้าถึง โดยยอมรับ retrieval time ได้ถึง 12 ชั่วโมง ต้องการต้นทุนที่ <em>ถูกที่สุด</em> ควรใช้ Storage Class ใด?",
      options: [
        "S3 Standard-IA",
        "S3 Glacier Flexible Retrieval (Standard tier)",
        "S3 Glacier Deep Archive",
        "S3 One Zone-IA",
      ],
      correct: 2,
      explanation:
        "S3 Glacier Deep Archive ถูกที่สุดใน S3 เหมาะสำหรับ long-term archive · retrieval Standard ใช้เวลา 12 ชั่วโมง (Bulk 48 ชั่วโมง) · ขั้นต่ำ 180 วัน · ส่วน Glacier Flexible Retrieval Standard ใช้ 3-5 ชั่วโมง ซึ่งแพงกว่า Deep Archive",
    },
    {
      id: "s3-q2",
      question:
        "ถ้า <em>suspend</em> S3 Versioning บน bucket ที่เปิดอยู่ จะเกิดอะไรขึ้นกับ versions เดิมที่มีอยู่?",
      options: [
        "Versions เดิมถูกลบทั้งหมดทันที",
        "Versions เดิมยังอยู่ครบ — แค่หยุดสร้าง version ใหม่",
        "Versions เดิมย้ายไป Glacier อัตโนมัติ",
        "Bucket ทั้งหมดถูก disable ใช้งานไม่ได้",
      ],
      correct: 1,
      explanation:
        "Suspending versioning ไม่ลบ version เก่าใดๆ — ทุก version ที่มีอยู่ยังคงอยู่ครบ AWS แค่หยุดสร้าง version ใหม่ ไฟล์ที่ upload หลัง suspend จะมี version ID = null และ overwrite version null เดิม · นอกจากนี้ versioning <strong>ปิดสมบูรณ์ไม่ได้</strong> ทำได้แค่ enable / suspended",
    },
    {
      id: "s3-q3",
      question:
        "บริษัทมี data lake ใน S3 ที่ region us-east-1 และต้อง <strong>compliance</strong> ให้สำเนาข้อมูลอยู่ใน region eu-west-1 ตลอดเวลา ควรใช้ feature ใด?",
      options: [
        "Same-Region Replication (SRR)",
        "Cross-Region Replication (CRR)",
        "S3 Lifecycle Rules",
        "S3 Transfer Acceleration",
      ],
      correct: 1,
      explanation:
        "Cross-Region Replication (CRR) ใช้สำหรับการ replicate object ข้าม region ซึ่งเหมาะกับ <em>compliance</em>, lower latency access จาก region อื่น และ replication ข้าม account · SRR ใช้ภายใน region เดียวกัน · Lifecycle Rules ใช้ย้ายระหว่าง storage class · Transfer Acceleration ใช้ upload เร็วขึ้นผ่าน CloudFront edge",
    },
    {
      id: "s3-q4",
      question:
        "S3 Bucket Policy เขียนในรูปแบบ JSON ต้องประกอบด้วย element ใดบ้าง (เลือกที่ถูกต้องที่สุด)?",
      options: [
        "Resources, Actions, Effect, Principal",
        "Region, AZ, VPC, Subnet",
        "Username, Password, Role, Group",
        "Source IP, Destination IP, Port, Protocol",
      ],
      correct: 0,
      explanation:
        "S3 Bucket Policy เป็น JSON document ที่ประกอบด้วย: <strong>Resources</strong> (ARN ของ bucket/object), <strong>Actions</strong> (เช่น s3:GetObject), <strong>Effect</strong> (Allow/Deny), <strong>Principal</strong> (account/user/role ที่ policy มีผล) ตัวเลือกอื่นเป็น concept ของ networking หรือ IAM ไม่ใช่ bucket policy",
    },
    {
      id: "s3-q5",
      question:
        "บริษัทต้องการ migrate ข้อมูล <strong>50 PB</strong> เข้า AWS ในเวลาที่จำกัด ผ่าน internet จะช้ามาก ควรใช้อุปกรณ์ใดของ Snow Family?",
      options: [
        "Snowcone",
        "Snowball Edge — Storage Optimized",
        "Snowmobile",
        "Snowball Edge — Compute Optimized",
      ],
      correct: 2,
      explanation:
        "Snowmobile รองรับสูงสุดถึง <strong>100 PB ต่อตู้</strong> และเหมาะสำหรับ migration <strong>มากกว่า 10 PB</strong> · เป็นตู้คอนเทนเนอร์ขนาด 45 ฟุตลากด้วยรถบรรทุก · Snowcone ได้แค่ 8-14 TB · Snowball Edge Storage Optimized 80 TB ต่อเครื่อง (ต้องใช้หลายร้อยเครื่องสำหรับ 50 PB ไม่คุ้ม)",
    },
    {
      id: "s3-q6",
      question:
        "ทีมต้อง process ข้อมูลจากกล้อง CCTV ในเหมืองห่างไกลที่ <em>ไม่มี internet</em> โดยรัน EC2 Instances และ Lambda functions ในพื้นที่จริง ควรใช้อุปกรณ์ใด?",
      options: [
        "Snowmobile",
        "Snowball Edge — Compute Optimized",
        "EC2 instance ใน region ที่ใกล้ที่สุด",
        "AWS Direct Connect",
      ],
      correct: 1,
      explanation:
        "Snowball Edge — Compute Optimized เหมาะกับงาน <strong>edge computing</strong> ในที่ไม่มี / มี internet จำกัด · รัน EC2 Instances + Lambda functions ผ่าน AWS IoT Greengrass · มี GPU optional สำหรับ ML / video analytics · Snowmobile เน้น storage migration · EC2 ใน region ใช้ไม่ได้เพราะไม่มี internet · Direct Connect ก็ต้องมีสายเชื่อมต่อ",
    },
    {
      id: "s3-q7",
      question:
        "S3 Object Lock ใช้รูปแบบ <strong>WORM</strong> — WORM ย่อมาจากอะไร และทำหน้าที่อย่างไร?",
      options: [
        "Write Once Replicate Many — replicate ข้อมูลไปหลาย region",
        "Write Once Read Many — เขียนได้ครั้งเดียว อ่านได้ไม่จำกัด แต่แก้/ลบไม่ได้ในช่วงที่กำหนด",
        "Write Often Read Mostly — สำหรับ workload ที่ write เยอะ",
        "Wide Object Replication Mode — ขยาย object ไปหลาย bucket",
      ],
      correct: 1,
      explanation:
        "<strong>WORM = Write Once Read Many</strong> — เขียนข้อมูลได้ครั้งเดียว อ่านได้ไม่จำกัด แต่ <em>แก้ไข / ลบไม่ได้</em> ตลอดช่วงเวลาที่กำหนด (retention period) · เหมาะกับ compliance เช่น financial records, healthcare data, regulatory requirements · แม้ root account ก็ลบไม่ได้ในช่วง lock · Glacier Vault Lock ก็ใช้ concept เดียวกัน",
    },
  ],
};
