import { TopicData } from "@/types/topic";

export const security: TopicData = {
  slug: "security",
  title: "Security & Compliance",
  subtitle: "Shield, WAF, KMS, GuardDuty & more",
  accent: "red",
  emoji: "\ud83d\udee1\ufe0f",
  category: "Security, Identity & Compliance",
  description:
    "รวมบริการด้านความปลอดภัยของ AWS — ตั้งแต่การป้องกัน DDoS (Shield, WAF), การเข้ารหัสข้อมูล (KMS, CloudHSM, ACM), การจัดการความลับ (Secrets Manager), การตรวจจับภัยคุกคาม (GuardDuty, Inspector, Macie, Detective) ไปจนถึงการรวมศูนย์ความปลอดภัย (Security Hub) และเอกสาร compliance (Artifact) — พร้อม Shared Responsibility Model ที่เป็นหัวใจของการใช้งาน AWS อย่างปลอดภัย",
  keyPoints: [
    "Shared Responsibility: AWS ดู Security OF the Cloud, คุณดู Security IN the Cloud",
    "ป้องกัน DDoS ด้วย Shield (L3/4) + WAF (L7/HTTP) + CloudFront/Route 53",
    "เข้ารหัสข้อมูลด้วย KMS (software) หรือ CloudHSM (hardware, FIPS 140-2 L3)",
    "Threat detection: GuardDuty, Inspector, Macie, Detective รวมศูนย์ที่ Security Hub",
  ],
  sections: [
    {
      id: "shared-responsibility",
      title: "Shared Responsibility Model (Deep Dive)",
      content: [
        {
          type: "paragraph",
          text: "AWS ใช้โมเดล <strong>Shared Responsibility</strong> — แบ่งความรับผิดชอบระหว่าง AWS กับลูกค้าอย่างชัดเจน เพื่อไม่ให้เกิดช่องว่างด้านความปลอดภัย",
        },
        {
          type: "grid",
          items: [
            {
              title: "AWS — Security OF the Cloud",
              description:
                "ดูแล <strong>infrastructure</strong> ทั้งหมด: hardware, software, facilities (data center), networking ของภูมิภาค/AZ และ managed services เช่น S3, DynamoDB, RDS — รับประกัน availability, durability ของบริการ",
            },
            {
              title: "Customer — Security IN the Cloud",
              description:
                "ดูแลทุกอย่างที่อยู่ <em>บน</em> cloud: guest OS patching ของ EC2, firewall + network config, IAM users/roles/policies, การเข้ารหัสข้อมูลของแอป, classify ข้อมูล",
            },
            {
              title: "Shared Controls",
              description:
                "<strong>Patch Management</strong> (AWS patch infra, คุณ patch OS), <strong>Configuration Management</strong> (AWS config infra, คุณ config service), <strong>Awareness + Training</strong> (ทั้งสองฝ่ายฝึกอบรมพนักงาน)",
            },
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "ตัวอย่าง: RDS",
              description:
                "<strong>AWS:</strong> จัดการ EC2 ที่อยู่เบื้องหลัง, auto patching ของ DB engine, automated backup infra. <strong>You:</strong> Security Group / IP rules, สร้าง DB users + permission, เปิด encryption at rest, ตั้ง public access",
            },
            {
              title: "ตัวอย่าง: S3",
              description:
                "<strong>AWS:</strong> infrastructure, durability 99.999999999%, แยกข้อมูลพนักงาน AWS ออกจากข้อมูลลูกค้า. <strong>You:</strong> bucket configuration, bucket policy, IAM permission, encryption settings (SSE), versioning, replication",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "สรุปง่ายๆ",
          text: "<strong>AWS</strong> = ปลอดภัย <em>ของ</em> cloud (กำแพง, ตู้, สาย, ฮาร์ดแวร์) — <strong>You</strong> = ปลอดภัย <em>ใน</em> cloud (ข้อมูล, IAM, OS, network config)",
        },
      ],
    },
    {
      id: "ddos-protection",
      title: "DDoS Protection on AWS",
      content: [
        {
          type: "paragraph",
          text: "AWS ป้องกัน DDoS แบบ <strong>multi-layered</strong> — ผสมหลายบริการเพื่อป้องกันทั้ง network layer และ application layer",
        },
        {
          type: "grid",
          items: [
            {
              title: "AWS Shield Standard",
              description:
                "<strong>FREE</strong> สำหรับลูกค้า AWS ทุกคน เปิดอัตโนมัติ — ป้องกัน <strong>SYN/UDP floods, reflection attacks</strong> และ DDoS ระดับ Layer 3/4 อื่นๆ",
            },
            {
              title: "AWS Shield Advanced",
              description:
                "<strong>$3,000/เดือน/องค์กร</strong> — มี <strong>24/7 DDoS Response Team (DRT)</strong>, ป้องกัน EC2 / ELB / CloudFront / Global Accelerator / Route 53 จากการโจมตีที่ซับซ้อน + ป้องกันค่าใช้จ่ายที่พุ่งสูงจาก DDoS (DDoS cost protection)",
            },
            {
              title: "AWS WAF",
              description:
                "Web Application Firewall — กรอง request ตามกฎ (rules) ที่กำหนด ป้องกัน SQL injection, XSS, geo-blocking ฯลฯ",
            },
            {
              title: "CloudFront + Route 53",
              description:
                "ใช้ edge network ของ AWS กระจายโหลดทั่วโลก — ช่วย absorb traffic spike และเป็น first line of defense",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Best practice",
          text: "ใช้ Shield + WAF + CloudFront + Route 53 ร่วมกันเพื่อป้องกัน DDoS ครบทุกชั้น (network + application)",
        },
      ],
    },
    {
      id: "waf",
      title: "AWS WAF (Web Application Firewall)",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS WAF</strong> ปกป้องเว็บแอปพลิเคชันจากช่องโหว่ <strong>Layer 7 (HTTP)</strong> — เช่น SQL injection, XSS, bot attack",
        },
        {
          type: "list",
          items: [
            "Deploy บน <strong>Application Load Balancer (ALB)</strong>, <strong>API Gateway</strong>, หรือ <strong>CloudFront</strong>",
            "กำหนด <strong>Web ACL (Access Control List)</strong> ที่มี rules ตามต้องการ",
            "ปกป้องเฉพาะ Layer 7 (HTTP) — ไม่ใช่ Layer 3/4 (DDoS ใช้ Shield)",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Rules ที่ใช้บ่อย",
              description:
                "IP addresses, HTTP headers, HTTP body, URI strings — match แบบ exact หรือ regex",
            },
            {
              title: "Attack Protection",
              description:
                "<strong>SQL injection</strong>, <strong>Cross-Site Scripting (XSS)</strong>, common web exploits",
            },
            {
              title: "Size Constraints",
              description: "จำกัดขนาด request — ป้องกันการส่ง payload ใหญ่ผิดปกติ",
            },
            {
              title: "Geo-match",
              description: "บล็อกหรืออนุญาต traffic จากบางประเทศ (geo-blocking)",
            },
            {
              title: "Rate-based Rules",
              description:
                "จำกัดจำนวน request ต่อ IP ในช่วงเวลา — ป้องกัน brute force, scraping",
            },
          ],
        },
      ],
    },
    {
      id: "pen-testing",
      title: "Penetration Testing on AWS",
      content: [
        {
          type: "paragraph",
          text: "AWS อนุญาตให้ทำ <strong>penetration testing</strong> โดย<strong>ไม่ต้องขออนุญาตล่วงหน้า</strong> สำหรับ 8 services เท่านั้น",
        },
        {
          type: "grid",
          items: [
            {
              title: "Services ที่อนุญาต",
              description:
                "EC2 / NAT Gateway / ELB, RDS, CloudFront, Aurora, API Gateway, Lambda + Lambda@Edge, Lightsail, Elastic Beanstalk",
            },
            {
              title: "กิจกรรมที่ห้าม",
              description:
                "DNS zone walking ผ่าน Route 53, DoS / DDoS / simulated DDoS, port flooding, protocol flooding, request flooding (login flooding, API flooding)",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "สำคัญ",
          text: "ห้ามทำ DoS/DDoS แม้แต่ในสภาพ test — ถ้าต้องการทดสอบ DDoS resilience ต้องติดต่อ AWS ก่อน",
        },
      ],
    },
    {
      id: "encryption-at-rest-in-transit",
      title: "Encryption: At Rest vs In Transit",
      content: [
        {
          type: "grid",
          items: [
            {
              title: "Encryption At Rest",
              description:
                "ข้อมูลที่ <strong>เก็บอยู่บน disk</strong> — เช่น Hard Disk, RDS database, S3 Glacier — เข้ารหัสด้วย encryption key เพื่อกันคนเอา disk ไปอ่าน",
            },
            {
              title: "Encryption In Transit (in flight)",
              description:
                "ข้อมูลที่ <strong>กำลังเดินทาง</strong>ผ่าน network — เช่น on-premise → AWS, EC2 → DynamoDB — ใช้ TLS/SSL กันการดักฟัง (eavesdropping, MITM)",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Best practice",
          text: "ควรเข้ารหัสทั้งสองสถานะ — at rest + in transit — เพื่อ defense in depth",
        },
      ],
    },
    {
      id: "kms",
      title: "AWS KMS (Key Management Service)",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS KMS</strong> เป็นบริการที่ให้ AWS ช่วยจัดการ <strong>encryption keys</strong> — ใช้ผสานกับบริการอื่นๆ เพื่อเข้ารหัสข้อมูลได้ง่าย",
        },
        {
          type: "grid",
          items: [
            {
              title: "Encryption Opt-in (เลือกเปิดเอง)",
              description:
                "<strong>EBS volumes</strong>, <strong>S3 (SSE)</strong>, <strong>Redshift</strong>, <strong>RDS</strong>, <strong>EFS</strong> — default ไม่ได้เข้ารหัส ต้องเปิดเอง",
            },
            {
              title: "Encryption Automatic (เปิดให้เลย)",
              description:
                "<strong>CloudTrail Logs</strong>, <strong>S3 Glacier</strong>, <strong>Storage Gateway</strong> — AWS เข้ารหัสอัตโนมัติทุกบริการเลย ปิดไม่ได้",
            },
          ],
        },
        {
          type: "paragraph",
          text: "KMS มี <strong>CMK (Customer Master Keys)</strong> 4 ประเภท:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Customer Managed CMK",
              description:
                "<strong>คุณสร้างเอง</strong> + กำหนด policy + rotate ได้เอง — ควบคุมเต็มที่ (มีค่าใช้จ่าย $1/เดือน/key)",
            },
            {
              title: "AWS Managed CMK",
              description:
                "AWS สร้างให้สำหรับใช้กับ service ของ AWS — เช่น <code>aws/s3</code>, <code>aws/ebs</code>, <code>aws/rds</code> (ฟรี)",
            },
            {
              title: "AWS Owned CMK",
              description:
                "AWS เป็นเจ้าของ ใช้ภายในของ AWS เอง — คุณ <em>ดูไม่ได้</em> และไม่ต้องจัดการ (ฟรี)",
            },
            {
              title: "CloudHSM Keys",
              description:
                "Custom keystore ที่เชื่อมไปยัง <strong>CloudHSM cluster</strong> ของคุณ — สำหรับงานที่ต้อง FIPS 140-2 Level 3",
            },
          ],
        },
      ],
    },
    {
      id: "cloudhsm",
      title: "AWS CloudHSM",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS CloudHSM</strong> = Hardware Security Module — ฮาร์ดแวร์เฉพาะ <strong>tamper-resistant</strong> ที่ใช้จัดเก็บ + ประมวลผล encryption keys",
        },
        {
          type: "list",
          items: [
            "AWS จัดเตรียม <strong>hardware</strong> ให้ — แต่<strong>คุณ</strong>เป็นคนจัดการ keys (ไม่ใช่ AWS)",
            "ผ่านมาตรฐาน <strong>FIPS 140-2 Level 3</strong> — สูงกว่า KMS",
            "เหมาะกับ workload ที่กฎหมาย/compliance บังคับให้ใช้ HSM ฮาร์ดแวร์",
            "สามารถ integrate กับ KMS ผ่าน custom keystore ได้",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "KMS",
              description:
                "Software-based — AWS เป็นคนจัดการ underlying — ใช้ง่าย ราคาถูก เหมาะกับ workload ทั่วไป",
            },
            {
              title: "CloudHSM",
              description:
                "Hardware-based — <strong>คุณ</strong>เป็นคนจัดการ keys — เหมาะกับ workload ที่ต้องการ compliance สูงและความเป็นส่วนตัวเต็มที่",
            },
          ],
        },
      ],
    },
    {
      id: "acm",
      title: "AWS Certificate Manager (ACM)",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Certificate Manager (ACM)</strong> ช่วย <strong>provision, manage, deploy</strong> SSL/TLS certificates เพื่อทำ HTTPS (in-flight encryption)",
        },
        {
          type: "list",
          items: [
            "รองรับทั้ง <strong>Public</strong> และ <strong>Private</strong> TLS certificates",
            "<strong>ฟรี</strong> สำหรับ public TLS certificates",
            "<strong>Auto-renewal</strong> — ต่ออายุให้อัตโนมัติ ไม่ต้องจัดการเอง",
            "Integrate กับ <strong>Elastic Load Balancer (ELB)</strong>, <strong>CloudFront</strong>, <strong>API Gateway</strong>",
          ],
        },
      ],
    },
    {
      id: "secrets-manager",
      title: "AWS Secrets Manager",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Secrets Manager</strong> เก็บความลับเช่น <strong>database password, API key</strong> — ดีกว่าฝังในโค้ดหรือ config",
        },
        {
          type: "list",
          items: [
            "บังคับ <strong>rotation</strong> ทุก X วันได้",
            "<strong>Auto-generate</strong> รหัสใหม่ผ่าน Lambda function",
            "Integrate กับ <strong>RDS (MySQL, PostgreSQL, Aurora)</strong> โดยตรง",
            "Secrets ถูก<strong>เข้ารหัส</strong>ด้วย KMS เสมอ",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Secrets Manager vs Parameter Store",
          text: "<strong>Secrets Manager</strong> มี auto-rotation ผ่าน Lambda + RDS integration — <strong>Parameter Store</strong> ราคาถูกกว่าและเหมาะกับ config ทั่วไปที่ไม่ต้อง rotate",
        },
      ],
    },
    {
      id: "artifact",
      title: "AWS Artifact",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Artifact</strong> เป็น <em>portal</em> สำหรับดาวน์โหลดเอกสาร compliance ของ AWS — ไม่ใช่ \"service\" ในความหมายเทคนิค",
        },
        {
          type: "grid",
          items: [
            {
              title: "Artifact Reports",
              description:
                "ดาวน์โหลดรายงาน security + compliance ของ AWS เช่น <strong>ISO, PCI, SOC</strong> reports — สำหรับใช้ตรวจสอบกับ auditor ของคุณ",
            },
            {
              title: "Artifact Agreements",
              description:
                "ตรวจสอบ / ยอมรับ / ติดตาม agreements กับ AWS เช่น <strong>BAA (Business Associate Agreement สำหรับ HIPAA)</strong>",
            },
          ],
        },
      ],
    },
    {
      id: "guardduty",
      title: "Amazon GuardDuty",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon GuardDuty</strong> ใช้ <strong>Machine Learning + anomaly detection + 3rd party threat intel</strong> เพื่อตรวจจับ threat ใน account อย่างชาญฉลาด — เปิดใช้แค่<strong>คลิกเดียว</strong> (มี 30-day trial)",
        },
        {
          type: "grid",
          items: [
            {
              title: "CloudTrail Logs",
              description:
                "ตรวจ <strong>API call</strong> ที่ผิดปกติ — เช่น user สร้าง resource ในประเทศที่ไม่เคยใช้",
            },
            {
              title: "VPC Flow Logs",
              description:
                "ตรวจ traffic / IP ที่ผิดปกติ — เช่น instance สื่อสารกับ malicious IP ที่ AWS รู้จัก",
            },
            {
              title: "DNS Logs",
              description:
                "ตรวจ EC2 ที่อาจถูก compromise แล้วใช้ <strong>DNS query</strong> ขโมยข้อมูลออกไป",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Action เมื่อพบ finding",
          text: "ตั้ง <strong>CloudWatch Event rules</strong> → trigger <strong>Lambda</strong> หรือส่ง <strong>SNS</strong> เพื่อแจ้งเตือน/ตอบสนองอัตโนมัติ",
        },
      ],
    },
    {
      id: "inspector",
      title: "Amazon Inspector",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Inspector</strong> ทำ <strong>automated security assessment</strong> ให้ EC2 — วิเคราะห์ OS ที่กำลังรันว่ามี vulnerabilities หรือ unintended network exposure ไหม",
        },
        {
          type: "list",
          items: [
            "Target = <strong>EC2 instances</strong> (รวม container image และ Lambda function ในเวอร์ชันใหม่)",
            "ต้องติดตั้ง <strong>Inspector Agent</strong> บน OS ของ instance",
            "วิเคราะห์ <strong>OS vulnerabilities</strong> และ <strong>network reachability</strong>",
            "Output = <strong>vulnerability report</strong> เรียงตามความรุนแรง",
          ],
        },
      ],
    },
    {
      id: "config",
      title: "AWS Config",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Config</strong> ใช้ <strong>audit + record compliance</strong> ของ resource ในบัญชีของคุณตลอดเวลา (รายละเอียดเต็มอยู่ในหัวข้อ Cloud Monitoring)",
        },
        {
          type: "list",
          items: [
            "Track <strong>configuration changes</strong> ของแต่ละ resource ตามกาลเวลา",
            "ทำงานต่อ <strong>region</strong> — แต่ aggregate ข้ามหลาย region / account ได้",
            "Integrate กับ Security Hub ได้ (เป็น prerequisite ของ Security Hub)",
          ],
        },
      ],
    },
    {
      id: "macie",
      title: "Amazon Macie",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Macie</strong> เป็นบริการ <strong>fully managed data security + privacy</strong> — ใช้ <strong>Machine Learning + pattern matching</strong> ค้นหาและปกป้องข้อมูลละเอียดอ่อนใน <strong>S3</strong>",
        },
        {
          type: "list",
          items: [
            "Specialized: ตรวจ <strong>PII (Personally Identifiable Information)</strong> ใน S3 buckets",
            "ตรวจชื่อ ที่อยู่ เลขบัตรเครดิต เลขบัตรประชาชน ฯลฯ",
            "แจ้งเตือนผ่าน CloudWatch Events / EventBridge",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "จดง่ายๆ",
          text: "Macie = หา <strong>PII ใน S3</strong>",
        },
      ],
    },
    {
      id: "security-hub",
      title: "AWS Security Hub",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Security Hub</strong> = <strong>ศูนย์กลาง security</strong> ที่รวม alert จากหลายบริการ + หลาย account — ดูภาพรวมความปลอดภัยทั้งองค์กรได้จากที่เดียว",
        },
        {
          type: "list",
          items: [
            "รวม alert จาก <strong>GuardDuty, Inspector, Macie, IAM Access Analyzer, Systems Manager, Firewall Manager</strong> และ partner products",
            "ต้องเปิดใช้ <strong>AWS Config</strong> ก่อน (prerequisite)",
            "เหมาะกับ multi-account environments (AWS Organizations)",
          ],
        },
      ],
    },
    {
      id: "detective",
      title: "Amazon Detective",
      content: [
        {
          type: "paragraph",
          text: "<strong>GuardDuty / Macie / Security Hub</strong> ตรวจพบปัญหา — แต่ <strong>Amazon Detective</strong> ใช้ <strong>วิเคราะห์ + สอบสวน root cause</strong> ของปัญหานั้น",
        },
        {
          type: "list",
          items: [
            "ใช้ <strong>Machine Learning + graph theory</strong> สร้างภาพความสัมพันธ์ของ event",
            "ดึงข้อมูลจาก <strong>VPC Flow Logs + CloudTrail + GuardDuty</strong>",
            "ช่วยให้ analyst ทำ root cause analysis ได้รวดเร็ว",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "ตำแหน่งใน workflow",
          text: "GuardDuty (ตรวจ) → Security Hub (รวม alert) → <strong>Detective (สอบสวน)</strong>",
        },
      ],
    },
    {
      id: "abuse",
      title: "AWS Abuse",
      content: [
        {
          type: "paragraph",
          text: "ถ้าพบว่า resource ของ AWS ถูกใช้ในทางที่ผิด สามารถรายงานผ่าน <strong>AWS Abuse</strong> ได้",
        },
        {
          type: "list",
          items: [
            "<strong>Spam</strong> — email spam ที่มาจาก IP ของ AWS",
            "<strong>Port scanning</strong>, <strong>DoS / DDoS attack</strong>, <strong>intrusion attempt</strong>",
            "Hosting <strong>copyrighted</strong> หรือ <strong>objectionable content</strong>",
            "การ<strong>แพร่กระจาย malware</strong>",
          ],
        },
      ],
    },
    {
      id: "root-user",
      title: "Root User Privileges",
      content: [
        {
          type: "paragraph",
          text: "<strong>Root user</strong> = เจ้าของ AWS account ที่มีสิทธิ์ <em>เต็มที่</em> — ห้ามใช้ในงานประจำ ควร <strong>lock away access keys</strong> และเปิด MFA ทันที",
        },
        {
          type: "paragraph",
          text: "งานต่อไปนี้ <strong>มีแต่ root user เท่านั้น</strong>ที่ทำได้:",
        },
        {
          type: "list",
          items: [
            "Change <strong>account settings</strong> (name, email, root password, root access keys)",
            "View <strong>tax invoices</strong>",
            "<strong>Close AWS account</strong>",
            "<strong>Restore IAM permissions</strong> เมื่อ admin user เผลอ revoke ตัวเอง",
            "<strong>Change/cancel AWS Support Plan</strong>",
            "Register เป็น <strong>seller ใน Reserved Instance Marketplace</strong>",
            "Configure <strong>S3 MFA Delete</strong>",
            "Edit <strong>S3 bucket policy</strong> ที่มี invalid VPC ID",
            "Sign up สำหรับ <strong>AWS GovCloud</strong>",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "หลักสำคัญ",
          text: "ใช้ root user เฉพาะตอนตั้งค่าครั้งแรก + งาน 9 รายการข้างบน เท่านั้น — งานอื่นใช้ IAM user ที่มี AdministratorAccess แทน",
        },
      ],
    },
    {
      id: "summary",
      title: "Summary",
      content: [
        {
          type: "grid",
          items: [
            {
              title: "Shield Standard / Advanced",
              description: "ป้องกัน DDoS — Standard ฟรี, Advanced $3,000/เดือน + DRT 24/7",
            },
            {
              title: "WAF",
              description: "Layer 7 firewall — ป้องกัน SQL injection, XSS, geo-block",
            },
            {
              title: "KMS",
              description: "จัดการ encryption keys (software-based, AWS ช่วยจัดการ)",
            },
            {
              title: "CloudHSM",
              description: "Hardware HSM, FIPS 140-2 Level 3 — คุณจัดการ keys เอง",
            },
            {
              title: "ACM",
              description: "Provision SSL/TLS certificates — public ฟรี + auto-renewal",
            },
            {
              title: "Secrets Manager",
              description: "เก็บ + rotate secrets อัตโนมัติ (RDS integration)",
            },
            {
              title: "Artifact",
              description: "Portal โหลดเอกสาร compliance (ISO, PCI, SOC, BAA)",
            },
            {
              title: "GuardDuty",
              description: "Threat detection ด้วย ML จาก CloudTrail + VPC Flow + DNS Logs",
            },
            {
              title: "Inspector",
              description: "Vulnerability assessment สำหรับ EC2 (ต้อง install agent)",
            },
            {
              title: "Macie",
              description: "ค้นหา PII ใน S3 ด้วย ML",
            },
            {
              title: "Security Hub",
              description: "ศูนย์กลาง security ที่รวม alert จากบริการอื่นๆ",
            },
            {
              title: "Detective",
              description: "สอบสวน root cause ด้วย ML + graph",
            },
            {
              title: "Config",
              description: "Audit + record compliance per region",
            },
            {
              title: "Abuse",
              description: "รายงาน resource ที่ถูกใช้ในทางผิด",
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: "security-q1",
      question:
        "ข้อใดอธิบายความแตกต่างระหว่าง AWS Shield Standard และ AWS Shield Advanced ได้ถูกต้อง?",
      options: [
        "Shield Standard เสียเงิน $3,000/เดือน — Shield Advanced ฟรี",
        "Shield Standard ฟรีและเปิดอัตโนมัติให้ทุก customer ป้องกัน DDoS Layer 3/4 — Shield Advanced $3,000/เดือน/องค์กร มี DRT 24/7 และป้องกันค่าใช้จ่ายที่พุ่งจาก DDoS",
        "Shield Advanced ป้องกัน Layer 7 (HTTP) เท่านั้น — Shield Standard ป้องกัน Layer 3/4",
        "ทั้งสองตัวมีค่าใช้จ่ายเท่ากันแต่ Advanced ป้องกัน region เดียว",
      ],
      correct: 1,
      explanation:
        "Shield Standard ฟรี + เปิดอัตโนมัติให้ทุก customer ป้องกัน SYN/UDP floods, reflection attacks (Layer 3/4) — ส่วน Shield Advanced ราคา $3,000/เดือน/องค์กร พ่วง DDoS Response Team (DRT) 24/7 + ป้องกัน EC2/ELB/CloudFront/Global Accelerator/Route 53 + ช่วยป้องกันค่าใช้จ่ายที่พุ่งสูงจาก DDoS",
    },
    {
      id: "security-q2",
      question: "AWS WAF ปกป้องเว็บแอปพลิเคชันจากภัยคุกคามใน Layer ใด?",
      options: [
        "Layer 3 (Network) เท่านั้น",
        "Layer 4 (Transport)",
        "Layer 7 (HTTP / Application)",
        "Layer 2 (Data link)",
      ],
      correct: 2,
      explanation:
        "AWS WAF (Web Application Firewall) ปกป้อง Layer 7 (HTTP) — กรอง request ตาม rules เช่น IP, header, body, URI string, SQL injection, XSS, geo-match, rate-based rules — Deploy บน ALB / API Gateway / CloudFront ส่วน Layer 3/4 (DDoS) ใช้ AWS Shield",
    },
    {
      id: "security-q3",
      question: "ข้อใดเปรียบเทียบ AWS KMS กับ AWS CloudHSM ได้ถูกต้อง?",
      options: [
        "ทั้ง KMS และ CloudHSM เป็น hardware-based เหมือนกัน — AWS เป็นคนจัดการ keys ทั้งคู่",
        "KMS เป็น software-based (AWS จัดการ underlying), CloudHSM เป็น hardware-based ที่คุณเป็นคนจัดการ keys (FIPS 140-2 Level 3)",
        "KMS ใช้ฮาร์ดแวร์ FIPS 140-2 Level 3, CloudHSM เป็น software",
        "CloudHSM เป็น service ฟรี, KMS เสียเงินมาก",
      ],
      correct: 1,
      explanation:
        "KMS = software-based, AWS จัดการ underlying infrastructure (เหมาะกับงานทั่วไป ใช้ง่าย) — ส่วน CloudHSM = hardware-based (HSM = Hardware Security Module) ผ่าน FIPS 140-2 Level 3 — AWS แค่จัดเตรียม hardware แต่<strong>คุณ</strong>เป็นคนจัดการ keys เอง เหมาะกับ workload ที่ compliance บังคับ",
    },
    {
      id: "security-q4",
      question: "Amazon GuardDuty ใช้ข้อมูลจาก source ใดบ้างในการตรวจจับ threat?",
      options: [
        "เฉพาะ VPC Flow Logs",
        "CloudTrail Logs, VPC Flow Logs, และ DNS Logs",
        "เฉพาะ DNS Logs",
        "EC2 instance metrics และ CloudWatch alarm",
      ],
      correct: 1,
      explanation:
        "GuardDuty ใช้ Machine Learning + anomaly detection + 3rd party threat intel ดึงข้อมูลจาก 3 sources: <strong>CloudTrail Logs</strong> (ตรวจ unusual API call), <strong>VPC Flow Logs</strong> (ตรวจ unusual traffic/IP), และ <strong>DNS Logs</strong> (ตรวจ EC2 ที่ใช้ DNS query ขโมยข้อมูล) — เปิดใช้แค่คลิกเดียวพร้อม 30-day trial",
    },
    {
      id: "security-q5",
      question: "Amazon Macie เน้นค้นหาและปกป้องข้อมูลประเภทใด?",
      options: [
        "Vulnerability ของ OS บน EC2 instance",
        "DDoS attack ที่กำลังโจมตี ELB",
        "PII (Personally Identifiable Information) ใน S3 buckets ด้วย ML + pattern matching",
        "API call ที่ผิดปกติใน CloudTrail",
      ],
      correct: 2,
      explanation:
        "Macie = fully managed data security + privacy service ที่ใช้ Machine Learning + pattern matching ค้นหาและปกป้อง<strong>ข้อมูลละเอียดอ่อน เช่น PII (ชื่อ ที่อยู่ เลขบัตรเครดิต)</strong> ใน <strong>S3 buckets</strong> — ส่วน vulnerability OS ใช้ Inspector, ตรวจ API call ใช้ GuardDuty/CloudTrail",
    },
    {
      id: "security-q6",
      question: "Amazon Inspector เน้น assess ความปลอดภัยของ resource ประเภทใด?",
      options: [
        "S3 buckets — หา PII",
        "EC2 instances — analyze OS vulnerabilities + unintended network accessibility (ต้อง install agent บน OS)",
        "DynamoDB tables — หา data exposure",
        "Route 53 hosted zone — ตรวจ DNS spoofing",
      ],
      correct: 1,
      explanation:
        "Inspector ทำ automated security assessment สำหรับ <strong>EC2 instances</strong> — วิเคราะห์ <strong>OS vulnerabilities</strong> และ <strong>unintended network accessibility</strong> โดยต้องติดตั้ง <strong>Inspector Agent</strong> บน OS — ผลลัพธ์เป็น vulnerability report เรียงตามความรุนแรง",
    },
    {
      id: "security-q7",
      question:
        "AWS อนุญาตให้ทำ penetration testing โดยไม่ต้องขออนุญาตล่วงหน้ากับ service ใด?",
      options: [
        "ทุก service ของ AWS โดยไม่มีข้อจำกัด",
        "EC2/NAT GW/ELB, RDS, CloudFront, Aurora, API Gateway, Lambda + Lambda@Edge, Lightsail, Elastic Beanstalk",
        "เฉพาะ S3 และ DynamoDB เท่านั้น",
        "Route 53 zone walking และ DDoS simulated test",
      ],
      correct: 1,
      explanation:
        "AWS อนุญาต pen-test โดยไม่ต้องขออนุญาตกับ 8 services: <strong>EC2/NAT Gateway/ELB, RDS, CloudFront, Aurora, API Gateway, Lambda + Lambda@Edge, Lightsail, Elastic Beanstalk</strong> — ห้ามทำ: DNS zone walking ผ่าน Route 53, DoS/DDoS/simulated DDoS, port flooding, protocol flooding, request flooding (login/API)",
    },
    {
      id: "security-q8",
      question: "งานใดต่อไปนี้ \"มีแต่ root user เท่านั้น\" ที่ทำได้?",
      options: [
        "สร้าง EC2 instance และ deploy application",
        "สร้าง IAM user และ assign policy",
        "Close AWS account และ change/cancel AWS Support Plan",
        "อ่าน object ใน S3 bucket",
      ],
      correct: 2,
      explanation:
        "งาน root-only ที่สำคัญ ได้แก่: <strong>change account settings, view tax invoices, close AWS account, restore IAM permissions, change/cancel AWS Support Plan, register เป็น RI Marketplace seller, configure S3 MFA Delete, edit S3 bucket policy ที่มี invalid VPC ID, sign up GovCloud</strong> — งานสร้าง EC2/IAM/อ่าน S3 ใช้ IAM user ที่มี permission เหมาะสมแทน",
    },
  ],
};
