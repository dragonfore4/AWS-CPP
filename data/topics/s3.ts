import { TopicData } from "@/types/topic";

export const s3: TopicData = {
  slug: "s3",
  title: "S3",
  subtitle: "Simple Storage Service",
  accent: "yellow",
  category: "Storage",
  description:
    "Amazon S3 คือ Object Storage ระดับ infinitely scalable เก็บไฟล์ได้ไม่จำกัด มี durability 99.999999999% (11 nines) ใช้สำหรับ backup, DR, archive, hybrid cloud, hosting, media, data lakes, software delivery และ static website นอกจากนี้ AWS ยังมี Snow Family สำหรับ migrate ข้อมูลขนาดใหญ่และ Storage Gateway สำหรับ hybrid cloud เชื่อม on-prem app เข้ากับ S3",
  keyPoints: [
    "Object storage แบบ unlimited — แต่ละไฟล์สูงสุด 5TB, key คือ full path ของ object",
    "Storage Classes 8 แบบ — เลือกตามความถี่ในการเข้าถึงเพื่อประหยัดค่าใช้จ่าย",
    "Durability 99.999999999% (11 nines) ทุก class — ข้อมูลแทบไม่มีทางหาย",
    "รองรับ Versioning, Replication (CRR/SRR), Object Lock (WORM) และ Static Website Hosting",
    "Snow Family — ขนข้อมูลทางกายภาพเข้าสู่ S3 (Snowcone, Snowball Edge)",
    "Storage Gateway — bridge ระหว่าง on-prem (NFS, SMB, iSCSI, VTL) กับ S3 / Glacier มี local cache",
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
              description: "เชื่อม on-prem app เข้ากับ S3 / Glacier ผ่าน Storage Gateway โดยใช้ NFS, SMB, iSCSI, VTL — มี local cache",
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
          text: "S3 มี Storage Classes 8 แบบ (Glacier มี 3 sub-tiers) — เลือกตาม <em>ความถี่ในการเข้าถึง</em>, <em>latency</em> และ <em>ค่าใช้จ่าย</em> ที่ยอมรับได้ — ทุก class มี <strong>durability 99.999999999% (11 nines)</strong> เหมือนกัน",
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
              title: "S3 Intelligent-Tiering",
              description:
                "ย้าย object ระหว่าง tiers <strong>อัตโนมัติ</strong> ตามการใช้งาน — มี monitoring fee เล็กน้อยแต่ <em>ไม่มี retrieval fee</em> ไม่ต้องคิด lifecycle เอง · เหมาะเมื่อไม่รู้ pattern การเข้าถึง",
            },
            {
              title: "S3 Express One Zone",
              description:
                "<strong>High performance</strong> — single-AZ, <strong>single-digit ms latency</strong>, เร็วกว่า Standard ~10x, request cost ถูกกว่า Standard ~80% · เก็บใน <em>directory bucket</em> · เหมาะกับ ML training, analytics ที่ต้องการ latency ต่ำสุด · availability 99.95%",
            },
            {
              title: "S3 Standard-IA (Infrequent Access)",
              description:
                "เข้าถึงไม่บ่อยแต่ต้องการเร็วเมื่อเข้าถึง — <strong>availability 99.9%</strong>, ค่าเก็บถูกกว่า Standard แต่มี <em>retrieval fee</em> ต่อ GB · ขั้นต่ำ 30 วัน · ใช้กับ DR, backup",
            },
            {
              title: "S3 One Zone-IA",
              description:
                "Infrequent Access แต่เก็บใน <strong>AZ เดียว</strong> — <strong>availability 99.5%</strong>, ถูกกว่า Standard-IA ~20% ข้อมูลหายถ้า AZ พัง · เหมาะกับข้อมูลที่สร้างใหม่ได้, secondary backup",
            },
            {
              title: "S3 Glacier Instant Retrieval",
              description:
                "Archive ที่ต้องการ <strong>millisecond retrieval</strong> — ถูกกว่า Standard-IA ~68% เมื่อเข้าถึงประมาณ <em>ครั้ง/ไตรมาส</em> · ขั้นต่ำ 90 วัน · เหมาะกับ medical images, news media archives, user-generated content",
            },
            {
              title: "S3 Glacier Flexible Retrieval (formerly S3 Glacier)",
              description:
                "Archive ราคาถูก — retrieval มี 3 ระดับ: <strong>Expedited 1-5 นาที</strong>, <strong>Standard 3-5 ชม.</strong>, <strong>Bulk 5-12 ชม.</strong> (Bulk ฟรี) · ขั้นต่ำ 90 วัน · เหมาะกับ backup และ DR ที่บางครั้งต้องดึงเร็ว",
            },
            {
              title: "S3 Glacier Deep Archive",
              description:
                "<strong>ถูกที่สุด</strong> — สำหรับข้อมูลที่แทบไม่เข้าถึง (long-term archive 7-10 ปี) · retrieval: <strong>Standard 12 ชม.</strong>, <strong>Bulk 48 ชม.</strong> · ขั้นต่ำ 180 วัน · ทดแทน on-prem tape libraries",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>Durability:</strong> ทุก class = 99.999999999% (11 nines) — เก็บ 10 ล้าน objects โดยเฉลี่ยจะหาย 1 object ทุกๆ 10,000 ปี",
            "<strong>Availability:</strong> ต่างกันตาม class · Standard 99.99% > Standard-IA 99.9% > One Zone-IA 99.5% · Express One Zone 99.95%",
            "<strong>Storage in 3+ AZs by default</strong> ยกเว้น One Zone-IA และ Express One Zone ที่เก็บใน AZ เดียว",
            "ย้าย class ได้ด้วยตนเอง หรือใช้ <strong>S3 Lifecycle Rules</strong> ย้ายอัตโนมัติตามอายุ object",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "เทคนิคจำ",
          text: "<strong>Standard</strong> = ใช้บ่อย · <strong>Intelligent-Tiering</strong> = ให้ AWS จัดการให้ · <strong>Express One Zone</strong> = เร็วสุด ms ต่ำ AZ เดียว · <strong>IA</strong> = ไม่บ่อยแต่ต้องเร็ว · <strong>One Zone-IA</strong> = IA แต่ AZ เดียว ถูกกว่า · <strong>Glacier Instant</strong> = archive ms · <strong>Glacier Flexible</strong> = archive นาที-ชม. · <strong>Deep Archive</strong> = ถูกสุด ช้าสุด",
        },
      ],
    },
    {
      id: "advanced-features",
      title: "S3 Advanced Features",
      content: [
        {
          type: "paragraph",
          text: "นอกเหนือจากเก็บไฟล์เฉยๆ S3 มี features สำคัญสำหรับ <strong>cost optimization</strong>, <strong>security</strong>, <strong>performance</strong> และ <strong>event-driven workflows</strong> ที่ CLF-C02 มักทดสอบ",
        },
        {
          type: "grid",
          items: [
            {
              title: "Encryption (Server-Side & Client-Side)",
              description:
                "<strong>SSE-S3</strong> AWS managed key (default ตั้งแต่ ม.ค. 2023) · <strong>SSE-KMS</strong> ใช้ KMS key ของลูกค้า มี audit log ใน CloudTrail · <strong>SSE-C</strong> ลูกค้าให้ key เอง AWS ไม่เก็บ · <strong>Client-Side Encryption</strong> เข้ารหัสก่อน upload key ไม่ถึง AWS",
            },
            {
              title: "Lifecycle Policies",
              description:
                "<strong>Transition actions</strong> ย้าย object ระหว่าง storage classes ตามอายุ (Standard → IA → Glacier) · <strong>Expiration actions</strong> ลบ object เก่า / version เก่า / incomplete multipart uploads · ฟรี ไม่มีค่า config",
            },
            {
              title: "S3 Transfer Acceleration",
              description:
                "Upload / download เร็วขึ้นจากที่ห่างไกล โดยใช้ <strong>CloudFront edge locations</strong> เป็นจุดรับและส่งผ่าน <em>AWS backbone</em> ไป bucket · เหมาะกับการรับไฟล์จาก users ทั่วโลกเข้า bucket ใน region เดียว",
            },
            {
              title: "S3 Select",
              description:
                "ใช้ <strong>SQL</strong> ดึงเฉพาะ subset ของ object (CSV, JSON, Parquet) — ไม่ต้อง download ทั้งไฟล์ · ลด egress cost และ processing time · เหมาะกับ object ไฟล์เดียว (ใช้ Athena สำหรับหลายไฟล์)",
            },
            {
              title: "Presigned URLs",
              description:
                "URL ที่มี <strong>signature</strong> + วันหมดอายุ ใช้แชร์ object แบบ private ชั่วคราวโดยไม่ต้องเปิด bucket public · default 1 ชม., max 7 วัน (SigV4) · ใช้กับ download หรือ upload ก็ได้",
            },
            {
              title: "Event Notifications",
              description:
                "Trigger <strong>Lambda / SNS / SQS / EventBridge</strong> เมื่อ object ถูก create / delete / restore / replicate · เป็น foundation ของ event-driven workflow บน S3 (เช่น auto-resize ภาพ, virus scan)",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>VPC Gateway Endpoint for S3</strong> — เข้า S3 จาก VPC ผ่าน AWS backbone โดยไม่ต้องผ่าน internet · ใช้ bucket policy condition <code>aws:SourceVpc</code> บังคับให้เข้าจาก VPC ที่กำหนดเท่านั้น",
            "<strong>MFA Delete</strong> — ต้องใส่ MFA token ก่อนลบ object version (ใช้ได้เมื่อเปิด Versioning) · เพิ่มชั้นป้องกัน accidental หรือ malicious delete",
            "<strong>Multi-Part Upload</strong> — แนะนำเมื่อไฟล์ ≥ 100 MB, บังคับเมื่อไฟล์ ≥ 5 GB · upload เป็น parts แบบ parallel เร็วกว่าและ retry ส่วนที่ fail ได้",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Encryption by Default",
          text: "ตั้งแต่ <strong>มกราคม 2023</strong> S3 bucket ใหม่ทุกตัวเปิด <strong>SSE-S3</strong> เป็น default encryption โดยอัตโนมัติ · ไม่ต้อง config เอง · ถ้าต้องการ KMS key ให้เปลี่ยนเป็น SSE-KMS ใน bucket settings",
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
                "ขนข้อมูลจำนวนมากเข้า AWS โดยส่งอุปกรณ์ทางไปรษณีย์ — Snowcone, Snowball Edge",
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
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "เลือกอุปกรณ์อย่างไร",
          text: "<strong>≤ 24 TB:</strong> Snowcone · <strong>หลาย TB ถึง PB:</strong> Snowball Edge — สำหรับ <strong>petabyte-scale</strong> ส่งหลายเครื่องพร้อมกัน (Snowmobile รถตู้ 100 PB ถูกยกเลิกแล้ว)",
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
      id: "storage-gateway",
      title: "AWS Storage Gateway",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Storage Gateway</strong> คือ <em>hybrid cloud storage service</em> ที่เชื่อม on-prem application เข้ากับ AWS storage ผ่าน protocol มาตรฐาน — <strong>NFS, SMB, iSCSI, iSCSI VTL</strong> — โดยมี <em>local cache</em> เพื่อ low-latency reads ในขณะที่ข้อมูลส่วนใหญ่อยู่บน cloud · ติดตั้งเป็น VM (VMware, Hyper-V, Linux KVM) หรือ EC2 instance ก็ได้",
        },
        {
          type: "callout",
          variant: "info",
          title: "ทำไมต้องใช้ Storage Gateway",
          text: "On-prem app ส่วนใหญ่ใช้ <strong>NFS / SMB / iSCSI</strong> โดยไม่รู้จัก S3 API · Storage Gateway แปลง protocol ให้ apps เห็นเป็น file share / block volume / tape library ตามปกติ แต่ข้อมูลจริงเก็บใน <strong>S3 / S3 Glacier</strong> · ได้ durability + cost ของ cloud โดยไม่ต้องเขียน app ใหม่",
        },
        {
          type: "paragraph",
          text: "<strong>Storage Gateway มี 3 ประเภท:</strong>",
        },
        {
          type: "grid",
          items: [
            {
              title: "Amazon S3 File Gateway",
              description:
                "<strong>NFS / SMB</strong> file share — ไฟล์ถูกเก็บเป็น object ใน S3 · มี local cache สำหรับ hot data · รองรับ Lifecycle ไป Glacier · ใช้ AWS IAM และ bucket policy · เหมาะกับ user file shares, application data, ML training data, database backup (SQL, Oracle, SAP)",
            },
            {
              title: "Volume Gateway",
              description:
                "<strong>iSCSI block volumes</strong> — ใช้กับ Windows/Linux servers on-prem · เก็บใน S3 + EBS snapshots สำหรับ recovery · มี <em>Cached mode</em> (primary ใน cloud, hot data cache on-prem) และ <em>Stored mode</em> (primary on-prem, async backup เข้า S3)",
            },
            {
              title: "Tape Gateway",
              description:
                "<strong>iSCSI Virtual Tape Library (VTL)</strong> — ทดแทน physical tape backup ด้วย virtual tapes ที่เก็บใน S3 / S3 Glacier / Deep Archive · ใช้ได้กับ backup software เดิม (Veeam, NetBackup, Backup Exec) · ไม่ต้องเปลี่ยน workflow",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>Local cache</strong> ทำให้ on-prem app อ่าน hot data ได้เร็วเหมือน local storage",
            "ข้อมูลถูก <strong>เข้ารหัสทั้ง in transit (TLS) และ at rest</strong> (S3 SSE)",
            "Integrate กับ <strong>AWS Backup</strong>, CloudWatch metrics, CloudTrail audit logs",
            "รองรับ <strong>WORM</strong> (write-once read-many) สำหรับ compliance",
            "Charged ตาม storage ที่ใช้ + request + data transfer out — ไม่มีค่า ingest เข้า S3",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Storage Gateway vs DataSync vs Snow Family",
          text: "<strong>Storage Gateway:</strong> ongoing hybrid access — on-prem app ใช้ NFS/SMB/iSCSI ทุกวัน, data caching<br><strong>DataSync:</strong> one-off / scheduled bulk online sync — NFS/SMB/HDFS/S3 ↔ AWS, ไม่ใช่ caching<br><strong>Snow Family:</strong> offline physical migration — เมื่อ bandwidth ไม่พอสำหรับ migration ขนาดใหญ่",
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
            "<strong>S3 Storage Classes</strong> — Standard, Intelligent-Tiering, Express One Zone, Standard-IA, One Zone-IA, Glacier Instant Retrieval, Glacier Flexible Retrieval, Glacier Deep Archive",
            "<strong>S3 Advanced Features</strong> — Encryption (SSE-S3/KMS/C, Client-Side), Lifecycle, Transfer Acceleration, S3 Select, Presigned URLs, Event Notifications, VPC Gateway Endpoint, MFA Delete",
            "<strong>S3 Object Lock</strong> — WORM model, prevent deletes for a defined time",
            "<strong>Snow Family</strong> — physical devices to transfer data into AWS or run edge computing",
            "<strong>Storage Gateway</strong> — hybrid bridge: S3 File Gateway (NFS/SMB), Volume Gateway (iSCSI), Tape Gateway (VTL)",
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
        "A company needs to store archive data that is rarely accessed and accepts retrieval times up to 12 hours. Which storage class is the CHEAPEST?",
      options: [
        "S3 Standard",
        "S3 Standard-IA",
        "S3 Glacier Flexible Retrieval",
        "S3 Glacier Deep Archive",
      ],
      correct: 3,
      explanation:
        "S3 Glacier Deep Archive is the cheapest storage class — for long-term archive data accessed maybe once or twice a year, with retrieval times of 12-48 hours.",
    },
    {
      id: "s3-q2",
      question: "What is the maximum size of a single object in Amazon S3?",
      options: ["100 MB", "5 GB", "5 TB", "Unlimited"],
      correct: 2,
      explanation:
        "S3 supports objects up to 5 TB in size. Objects larger than 5 GB must use multipart upload. There is no limit on the total size of a bucket.",
    },
    {
      id: "s3-q3",
      question:
        "Which S3 feature is used to keep multiple versions of an object so accidental deletes/overwrites can be recovered?",
      options: [
        "S3 Cross-Region Replication",
        "S3 Versioning",
        "S3 Lifecycle Policy",
        "S3 Object Lock",
      ],
      correct: 1,
      explanation:
        "S3 Versioning preserves every version of every object, including deleted ones. Deleting an object actually inserts a delete marker — older versions remain available.",
    },
    {
      id: "s3-q4",
      question:
        "Which S3 storage class is optimized for unknown or changing access patterns?",
      options: [
        "S3 Standard",
        "S3 Intelligent-Tiering",
        "S3 Glacier",
        "S3 One Zone-IA",
      ],
      correct: 1,
      explanation:
        "S3 Intelligent-Tiering automatically moves objects between frequent, infrequent, archive, and deep archive tiers based on access patterns — no retrieval charges and a small monitoring fee.",
    },
    {
      id: "s3-q5",
      question:
        "Which feature automates moving objects between storage classes (e.g., Standard → Standard-IA → Glacier) based on age?",
      options: [
        "S3 Lifecycle Policies",
        "S3 Versioning",
        "S3 Replication",
        "S3 Event Notifications",
      ],
      correct: 0,
      explanation:
        "S3 Lifecycle Policies automate transitions between storage classes (e.g., move to IA after 30 days, Glacier after 90, expire after 365). Saves cost without manual effort.",
    },
    {
      id: "s3-q6",
      question:
        "Which encryption option encrypts S3 objects with keys managed entirely by AWS, with no customer interaction?",
      options: ["SSE-S3", "SSE-KMS", "SSE-C", "Client-Side Encryption"],
      correct: 0,
      explanation:
        "SSE-S3 (Server-Side Encryption with S3-managed keys) uses AES-256 keys fully managed by AWS. Default for new buckets since 2023. SSE-KMS uses customer-controlled KMS keys; SSE-C uses customer-provided keys.",
    },
    {
      id: "s3-q7",
      question:
        "How can you ensure an object cannot be deleted even by an account administrator (e.g., for regulatory compliance)?",
      options: [
        "Use S3 Versioning only.",
        "Use S3 Object Lock with Compliance Mode.",
        "Use IAM policy.",
        "Use S3 Bucket Policy.",
      ],
      correct: 1,
      explanation:
        "S3 Object Lock in Compliance Mode prevents anyone (including the root user) from deleting or modifying an object version for the duration of the retention period — designed for WORM compliance.",
    },
    {
      id: "s3-q8",
      question:
        "Which S3 feature lets you serve a static website directly from a bucket?",
      options: [
        "S3 Static Website Hosting",
        "S3 Replication",
        "S3 Lifecycle",
        "S3 Versioning",
      ],
      correct: 0,
      explanation:
        "S3 buckets can be configured for static website hosting — serving HTML/CSS/JS/images. The endpoint is http://<bucket>.s3-website.<region>.amazonaws.com.",
    },
    {
      id: "s3-q9",
      question:
        "How can you grant a temporary, time-limited URL to download an S3 object without making the bucket public?",
      options: [
        "Use a presigned URL.",
        "Make the bucket public.",
        "Email the object directly.",
        "Use IAM access keys.",
      ],
      correct: 0,
      explanation:
        "S3 presigned URLs grant temporary access to a private object, signed with the requester's credentials. URLs expire after a configurable duration — useful for time-limited downloads.",
    },
    {
      id: "s3-q10",
      question:
        "Which feature replicates S3 objects between buckets in different AWS Regions?",
      options: [
        "Same-Region Replication (SRR)",
        "Cross-Region Replication (CRR)",
        "S3 Cross-Account Sync",
        "AWS DataSync",
      ],
      correct: 1,
      explanation:
        "S3 Cross-Region Replication (CRR) automatically replicates objects from a source bucket to a destination bucket in a different region, used for DR, lower-latency access, or compliance.",
    },
    {
      id: "s3-q11",
      question:
        "Which S3 storage class stores data in a SINGLE Availability Zone, costs less, but has lower durability?",
      options: [
        "S3 Standard",
        "S3 Standard-IA",
        "S3 One Zone-IA",
        "S3 Glacier Instant Retrieval",
      ],
      correct: 2,
      explanation:
        "S3 One Zone-IA stores data in a single AZ — about 20% cheaper than Standard-IA. Suitable for re-creatable, infrequently accessed data that can tolerate AZ-level loss.",
    },
    {
      id: "s3-q12",
      question:
        "What is the maximum size of an Amazon S3 bucket (the total amount of data it can store)?",
      options: [
        "5 TB",
        "1 PB",
        "100 PB",
        "Effectively unlimited — there is no overall bucket-size limit, only per-object limits.",
      ],
      correct: 3,
      explanation:
        "S3 buckets have no overall storage size limit. The only relevant limits are per object: a single object can be up to 5 TB, and uploads larger than 5 GB must use multipart upload. The number of buckets per account has a default service quota that can be increased via Service Quotas if needed.",
    },
    {
      id: "s3-q13",
      question:
        "Which S3 feature is BEST to transfer files to S3 from a remote location with low bandwidth?",
      options: [
        "S3 Multipart Upload",
        "S3 Transfer Acceleration",
        "AWS DataSync",
        "AWS Snowball",
      ],
      correct: 1,
      explanation:
        "S3 Transfer Acceleration uses CloudFront edge locations to upload files over the AWS backbone — speeding up uploads from distant locations. Snowball is for petabyte-scale offline data transfer.",
    },
    {
      id: "s3-q14",
      question:
        "An S3 bucket has \"Block Public Access\" enabled. What does this do?",
      options: [
        "Allows full public access.",
        "Prevents the bucket and its objects from being made publicly accessible, even via bucket policy or ACL.",
        "Encrypts all objects.",
        "Replicates the bucket cross-region.",
      ],
      correct: 1,
      explanation:
        "S3 Block Public Access is a safety net at account/bucket level that overrides bucket policies and ACLs to prevent any accidental public exposure. Enabled by default for new buckets.",
    },
    {
      id: "s3-q15",
      question:
        "Which Amazon S3 feature can be used to query data directly using SQL without loading it elsewhere?",
      options: [
        "S3 Select",
        "S3 Lambda",
        "S3 Versioning",
        "S3 Lifecycle",
      ],
      correct: 0,
      explanation:
        "S3 Select retrieves a subset of object data (CSV, JSON, Parquet) using SQL, reducing data transfer and downstream processing cost. Athena offers richer SQL across many objects/buckets.",
    },
    {
      id: "s3-q16",
      question:
        "A company has 50 TB of on-premises data and very limited internet bandwidth. They need to migrate the data to S3 quickly. Which AWS service is BEST?",
      options: [
        "AWS Storage Gateway",
        "AWS Snowball or Snowball Edge",
        "AWS DataSync",
        "AWS Direct Connect",
      ],
      correct: 1,
      explanation:
        "AWS Snowball / Snowball Edge are physical devices shipped to the customer for offline bulk data transfer (up to ~80 TB per device). For 50 TB this is far faster than uploading over the internet.",
    },
    {
      id: "s3-q17",
      question:
        "A company has 100 TB of on-premises archive data and very limited internet bandwidth. They want to move it to S3 in a single shipment. Which AWS service is BEST?",
      options: [
        "AWS Snowball Edge Storage Optimized",
        "AWS DataSync",
        "AWS Direct Connect",
        "S3 Transfer Acceleration",
      ],
      correct: 0,
      explanation:
        "AWS Snowball Edge Storage Optimized is a ruggedized physical device shipped to the customer for offline bulk data transfer (~80 TB usable per device, request multiple devices for larger jobs). For 100 TB on a constrained link, this is dramatically faster than uploading over the internet. (Note: AWS Snowmobile, the 45-foot truck for exabyte-scale transfers, has been discontinued.)",
    },
    {
      id: "s3-q18",
      question: "Which S3 feature allows event-driven processing (e.g., trigger Lambda on object upload)?",
      options: [
        "S3 Event Notifications",
        "S3 Inventory",
        "S3 Replication",
        "S3 Versioning",
      ],
      correct: 0,
      explanation:
        "S3 Event Notifications can trigger Lambda functions, SQS queues, or SNS topics when objects are created, deleted, or restored — the foundation for event-driven workflows in S3.",
    },
    {
      id: "s3-q19",
      question:
        "Which Glacier retrieval option provides retrieval within 1-5 minutes (at higher cost)?",
      options: [
        "Standard retrieval",
        "Bulk retrieval",
        "Expedited retrieval",
        "Free tier retrieval",
      ],
      correct: 2,
      explanation:
        "S3 Glacier Flexible Retrieval has 3 retrieval options: Expedited (1-5 min), Standard (3-5 hours), Bulk (5-12 hours). Glacier Deep Archive: Standard 12 hours, Bulk 48 hours.",
    },
    {
      id: "s3-q20",
      question:
        "What is the durability of objects in Amazon S3 Standard?",
      options: [
        "99% (2 nines)",
        "99.9% (3 nines)",
        "99.99% (4 nines)",
        "99.999999999% (11 nines)",
      ],
      correct: 3,
      explanation:
        "Amazon S3 is designed for 99.999999999% (11 nines) durability of objects in a year — meaning if you store 10 million objects, you can on average expect to lose one once every 10,000 years.",
    },
    {
      id: "s3-q21",
      question:
        "Which feature limits S3 access to a specific VPC, blocking all internet-based access?",
      options: [
        "VPC Endpoint for S3 (Gateway Endpoint)",
        "S3 ACL",
        "S3 Bucket Policy",
        "AWS Shield",
      ],
      correct: 0,
      explanation:
        "A VPC Gateway Endpoint for S3 enables private connectivity from within a VPC to S3 over the AWS backbone (no internet). You can also enforce VPC-only access via bucket policy conditions.",
    },
    {
      id: "s3-q22",
      question:
        "Which S3 storage class provides millisecond-latency access for rarely-accessed data, with lower cost than Standard?",
      options: [
        "S3 Standard-IA",
        "S3 One Zone-IA",
        "S3 Glacier Instant Retrieval",
        "All of the above (each with different trade-offs)",
      ],
      correct: 3,
      explanation:
        "All three offer millisecond-latency. Standard-IA stores across AZs; One Zone-IA in a single AZ for ~20% less; Glacier Instant Retrieval is for archive that must still be retrieved quickly when needed.",
    },
    {
      id: "s3-q23",
      question:
        "Which AWS service is BEST for syncing files between on-premises NFS / SMB file shares and AWS storage?",
      options: [
        "AWS DataSync",
        "AWS Snowball",
        "AWS Storage Gateway",
        "AWS Direct Connect",
      ],
      correct: 0,
      explanation:
        "AWS DataSync is a managed service for online data transfer between on-premises and AWS (S3, EFS, FSx). It's much faster than scripted rsync/cp jobs, with built-in encryption and validation.",
    },
    {
      id: "s3-q24",
      question:
        "Which Storage Gateway type provides on-premises access to S3 objects via NFS/SMB?",
      options: [
        "Volume Gateway",
        "Tape Gateway",
        "File Gateway / Amazon S3 File Gateway",
        "FSx Gateway",
      ],
      correct: 2,
      explanation:
        "S3 File Gateway (formerly File Gateway) presents S3 buckets as NFS or SMB file shares to on-premises servers, with local caching for low-latency reads.",
    },
    {
      id: "s3-q25",
      question:
        "Which S3 cost optimization feature is FREE and recommended as a first step?",
      options: [
        "S3 Lifecycle policies to transition old data to cheaper tiers.",
        "AWS Snowball",
        "S3 Replication",
        "Glacier Vault Lock",
      ],
      correct: 0,
      explanation:
        "S3 Lifecycle policies are free to configure and automatically transition or expire objects based on age — typically the first and biggest S3 cost optimization win.",
    },
    {
      id: "s3-q26",
      question:
        "A company wants to replace its on-premises physical tape backup library while keeping its existing backup software (e.g., Veeam, NetBackup) and workflows. Which AWS service is BEST?",
      options: [
        "AWS Storage Gateway — Tape Gateway",
        "AWS Storage Gateway — S3 File Gateway",
        "AWS DataSync",
        "AWS Snowball Edge",
      ],
      correct: 0,
      explanation:
        "Tape Gateway presents an iSCSI Virtual Tape Library (VTL) interface that existing backup software recognizes as physical tape. Virtual tapes are stored in S3 / S3 Glacier / Deep Archive, replacing on-premises tape libraries without requiring workflow changes.",
    },
    {
      id: "s3-q27",
      question:
        "An on-premises application uses an NFS file share for daily reads and writes. The company wants the data to live in Amazon S3 with low-latency local reads, without re-architecting the application. Which AWS service is BEST?",
      options: [
        "AWS DataSync",
        "AWS Snowball Edge",
        "AWS Storage Gateway — S3 File Gateway",
        "S3 Transfer Acceleration",
      ],
      correct: 2,
      explanation:
        "S3 File Gateway presents NFS (or SMB) file shares to on-premises applications while storing the underlying objects in Amazon S3, with a local cache for low-latency reads. DataSync is for one-off / scheduled bulk online sync (not ongoing file-share access). Snowball is offline migration. Transfer Acceleration speeds up uploads but doesn't expose a file-share interface.",
    },
  ],
};
