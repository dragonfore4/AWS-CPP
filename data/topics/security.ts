import { TopicData } from "@/types/topic";

export const security: TopicData = {
  slug: "security",
  title: "Security & Compliance",
  subtitle: "Shield, WAF, KMS, GuardDuty & more",
  accent: "red",
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
          type: "list",
          items: [
            "<strong>Resources ที่ Shield Advanced ปกป้อง:</strong> Amazon CloudFront distributions, Amazon Route 53 hosted zones, AWS Global Accelerator accelerators, Elastic Load Balancing (ALB / NLB / CLB), Amazon EC2 Elastic IP addresses",
            "<strong>Shield Standard</strong> เปิดอัตโนมัติบน edge services (CloudFront, Route 53, Global Accelerator) สำหรับลูกค้าทุกคน",
            "<strong>Shield Advanced</strong> เพิ่ม L7 DDoS protection (ผ่าน WAF integration), DRT 24/7, และ DDoS cost protection ให้ resources ข้างต้น",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Shield ปกป้องที่ไหน",
          text: "Shield ปกป้อง <strong>edge / load balancer / DNS</strong> — ไม่ได้ผูกกับ EC2 ENI โดยตรง ถ้าจะป้องกัน EC2 ต้องผ่าน <strong>Elastic IP</strong> ที่ผูกกับ instance",
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
          type: "list",
          items: [
            "<strong>Services ที่ WAF ผูกได้ (attach points):</strong> Amazon CloudFront distributions, Application Load Balancer (ALB), Amazon API Gateway (REST APIs), AWS AppSync (GraphQL APIs), Amazon Cognito user pools",
            "WAF ผูกที่ <strong>front door / load balancer</strong> เสมอ — <em>ไม่</em> ผูกกับ EC2 instance โดยตรง (ไม่มี agent บน OS)",
            "WAF ใช้ไม่ได้กับ <strong>Network Load Balancer (NLB)</strong> เพราะ NLB ทำงานที่ Layer 4 (TCP/UDP) ส่วน WAF เป็น Layer 7",
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
      id: "firewall-manager",
      title: "AWS Firewall Manager",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Firewall Manager</strong> คือบริการ <em>centralized policy management</em> สำหรับจัดการกฎความปลอดภัยข้ามหลาย account ใน <strong>AWS Organizations</strong> — ใช้กำหนด WAF rules, Shield Advanced, Security Groups, และ Network Firewall จากที่เดียว",
        },
        {
          type: "list",
          items: [
            "ใช้คู่กับ <strong>AWS Organizations</strong> — apply policy ครอบคลุมทุก account ในองค์กร",
            "Manages: <strong>WAF Web ACLs, Shield Advanced protections, VPC Security Groups, AWS Network Firewall, Route 53 Resolver DNS Firewall</strong>",
            "<strong>Auto-applies</strong> policy ให้ <em>account ใหม่</em> ที่เพิ่งเพิ่มเข้า Organization โดยอัตโนมัติ",
            "ช่วยรวมศูนย์ <strong>compliance</strong> — เห็นภาพรวมว่ามี resource ไหนยังไม่เป็นไปตาม policy",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "เลือกใช้เมื่อไหร่",
          text: "<strong>หลาย account</strong> (Organization) ต้องการ rule เดียวกันทุกที่ → <strong>Firewall Manager</strong><br><strong>Account เดียว</strong> → ตั้ง WAF / Shield / Security Groups ตรง ๆ ก็พอ",
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
      id: "audit-manager",
      title: "AWS Audit Manager",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Audit Manager</strong> เก็บหลักฐาน (evidence) เกี่ยวกับการใช้งาน AWS ของคุณ <em>อัตโนมัติและต่อเนื่อง</em> เพื่อ map กับ frameworks ต่าง ๆ เช่น <strong>SOC 2, PCI DSS, GDPR, HIPAA, ISO 27001</strong> — ลดงาน manual ในการเตรียมข้อมูลสำหรับ audit",
        },
        {
          type: "grid",
          items: [
            {
              title: "AWS Artifact",
              description:
                "ดาวน์โหลด <strong>compliance reports ของ AWS</strong> (ISO, PCI, SOC) — เป็นหลักฐานว่า <em>AWS</em> ผ่านมาตรฐาน",
            },
            {
              title: "AWS Audit Manager",
              description:
                "สร้าง <strong>evidence ของคุณเอง</strong> — ตรวจสอบว่า <em>workload ของคุณ</em> เป็นไปตาม framework ที่เลือก โดยรวบรวม config + logs + activity ให้อัตโนมัติ",
            },
          ],
        },
        {
          type: "list",
          items: [
            "Pre-built frameworks: <strong>SOC 2, PCI DSS, GDPR, HIPAA, ISO 27001, CIS, AWS Foundational Security Best Practices</strong> ฯลฯ",
            "เก็บ evidence จาก <strong>CloudTrail, Config, Security Hub</strong> ฯลฯ",
            "สร้าง <strong>assessment report</strong> ที่พร้อมส่งให้ auditor",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Artifact vs Audit Manager",
          text: "<strong>Artifact</strong> = ดาวน์โหลดเอกสารของ <em>AWS</em> ที่ผ่านมาตรฐานแล้ว<br><strong>Audit Manager</strong> = สร้างหลักฐานของ <em>คุณเอง</em> ว่า workload เป็นไปตาม framework",
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
            "ต้องติดตั้ง <strong>AWS Systems Manager (SSM) Agent</strong> บน EC2 (Inspector v2 ใช้ SSM Agent — ไม่ต้องการ Inspector Agent แยก)",
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
              description:
                "ป้องกัน DDoS — Standard ฟรี (อัตโนมัติบน CloudFront / Route 53 / Global Accelerator), Advanced $3,000/เดือน + DRT 24/7 (ปกป้อง CloudFront, Route 53, Global Accelerator, ELB, EC2 EIP)",
            },
            {
              title: "WAF",
              description:
                "Layer 7 firewall — ป้องกัน SQL injection, XSS, geo-block ผูกได้กับ CloudFront, ALB, API Gateway, AppSync, Cognito user pools (ไม่ผูกกับ EC2 / NLB)",
            },
            {
              title: "Firewall Manager",
              description:
                "Centralized policy ข้ามหลาย account ใน AWS Organizations — manage WAF, Shield Advanced, Security Groups, Network Firewall จากที่เดียว",
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
              description: "Portal โหลดเอกสาร compliance ของ AWS (ISO, PCI, SOC, BAA)",
            },
            {
              title: "Audit Manager",
              description:
                "เก็บ evidence อัตโนมัติเพื่อ map กับ frameworks (SOC 2, PCI DSS, HIPAA, GDPR, ISO) — สร้าง assessment report ของ workload คุณเอง",
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
      id: "sec-q1",
      question:
        "Which statement BEST describes the difference between AWS Shield Standard and AWS Shield Advanced?",
      options: [
        "Shield Standard costs extra; Shield Advanced is free.",
        "Shield Standard is free for all AWS customers and protects against common Layer 3/4 DDoS attacks. Shield Advanced ($3,000/month) adds 24/7 DRT support, cost protection, and advanced attack mitigation.",
        "Both are identical.",
        "Shield Advanced replaces all firewalls.",
      ],
      correct: 1,
      explanation:
        "AWS Shield Standard is free and automatically applied to all AWS customers — protects against the most common L3/L4 DDoS attacks. Shield Advanced is paid ($3,000/month per organization) and adds Layer 7 protection, 24/7 DDoS Response Team (DRT), cost protection for scaled resources during attacks, and more sophisticated detection.",
    },
    {
      id: "sec-q2",
      question:
        "Which AWS service is a Web Application Firewall (WAF) that protects against application-layer (Layer 7) attacks like SQL injection and XSS?",
      options: [
        "AWS WAF",
        "AWS Shield",
        "AWS Firewall Manager",
        "Amazon GuardDuty",
      ],
      correct: 0,
      explanation:
        "AWS WAF (Web Application Firewall) protects HTTP/HTTPS web apps at Layer 7. Deploys on CloudFront, ALB, API Gateway, or AppSync. Filters common attacks (SQL injection, XSS), bots, IP-based rules.",
    },
    {
      id: "sec-q3",
      question:
        "Which AWS service uses ML to detect malicious or unauthorized activity in your AWS account by analyzing CloudTrail logs, VPC flow logs, and DNS logs?",
      options: [
        "Amazon GuardDuty",
        "AWS Shield",
        "Amazon Macie",
        "AWS WAF",
      ],
      correct: 0,
      explanation:
        "Amazon GuardDuty is a threat-detection service that uses ML and AWS-curated threat intelligence to identify malicious activity (cryptomining, compromised instances, unusual API calls, port scanning, etc.).",
    },
    {
      id: "sec-q4",
      question:
        "Which AWS service uses ML to discover and protect sensitive data (PII, credit cards, etc.) in S3 buckets?",
      options: [
        "Amazon Macie",
        "Amazon GuardDuty",
        "Amazon Inspector",
        "AWS Shield",
      ],
      correct: 0,
      explanation:
        "Amazon Macie uses ML and pattern matching to identify and protect sensitive data (personally identifiable information, financial data, intellectual property) stored in S3.",
    },
    {
      id: "sec-q5",
      question:
        "Which AWS service is BEST for managing encryption keys used to encrypt data at rest and in transit?",
      options: [
        "AWS KMS (Key Management Service)",
        "AWS Secrets Manager",
        "AWS CloudHSM",
        "AWS IAM",
      ],
      correct: 0,
      explanation:
        "AWS KMS is the managed key management service. Integrated with most AWS services (S3, EBS, RDS, etc.). Keys are FIPS 140-2 validated. CloudHSM provides dedicated single-tenant hardware security modules.",
    },
    {
      id: "sec-q6",
      question:
        "Which AWS service stores secrets (DB passwords, API keys) and provides automatic rotation?",
      options: [
        "AWS Secrets Manager",
        "AWS Systems Manager Parameter Store",
        "AWS KMS",
        "AWS IAM",
      ],
      correct: 0,
      explanation:
        "AWS Secrets Manager stores secrets and provides automatic rotation (e.g., RDS, Redshift, DocumentDB credentials). Parameter Store also stores config but does NOT auto-rotate.",
    },
    {
      id: "sec-q7",
      question:
        "Which AWS service issues and manages free public SSL/TLS certificates for use with AWS resources?",
      options: [
        "AWS Certificate Manager (ACM)",
        "AWS KMS",
        "AWS IAM",
        "AWS Shield",
      ],
      correct: 0,
      explanation:
        "AWS Certificate Manager (ACM) provisions, manages, and deploys public/private SSL/TLS certificates for use with ELB, CloudFront, API Gateway. Free for public certs, with auto-renewal.",
    },
    {
      id: "sec-q8",
      question:
        "Under the Shared Responsibility Model, who is responsible for patching the operating system on an Amazon EC2 instance?",
      options: [
        "AWS",
        "The customer",
        "Both equally",
        "It's automated for free",
      ],
      correct: 1,
      explanation:
        "For EC2 (IaaS), the customer is responsible for patching the OS, applications, and data. AWS is responsible for the underlying infrastructure (hypervisor, host OS, physical hardware). For managed services like RDS, AWS handles OS patching.",
    },
    {
      id: "sec-q9",
      question:
        "Which AWS service is a managed compliance/audit reporting service that provides on-demand access to AWS compliance reports (SOC, PCI, ISO, FedRAMP)?",
      options: [
        "AWS Artifact",
        "AWS Audit Manager",
        "AWS Config",
        "AWS CloudTrail",
      ],
      correct: 0,
      explanation:
        "AWS Artifact is a self-service portal for downloading AWS audit and compliance reports (SOC 1/2/3, PCI DSS, ISO, HIPAA, FedRAMP) and signing agreements with AWS.",
    },
    {
      id: "sec-q10",
      question:
        "Which AWS service helps continuously audit your AWS usage to assess compliance with regulations and industry standards?",
      options: [
        "AWS Audit Manager",
        "AWS Artifact",
        "AWS Config",
        "Amazon Inspector",
      ],
      correct: 0,
      explanation:
        "AWS Audit Manager continuously audits AWS usage and simplifies how you assess risk and compliance with regulations (PCI DSS, GDPR, HIPAA, SOC 2, etc.). Automates evidence collection.",
    },
    {
      id: "sec-q11",
      question:
        "Which AWS service provides centralized configuration of WAF rules, Shield Advanced, and security groups across multiple accounts in AWS Organizations?",
      options: [
        "AWS Firewall Manager",
        "AWS WAF",
        "AWS Shield",
        "AWS Security Hub",
      ],
      correct: 0,
      explanation:
        "AWS Firewall Manager provides centralized management of AWS WAF rules, Shield Advanced, and Security Groups across multiple accounts in AWS Organizations.",
    },
    {
      id: "sec-q12",
      question:
        "Which AWS service is a managed Hardware Security Module (HSM) for FIPS 140-2 Level 3 compliance, single-tenant?",
      options: [
        "AWS CloudHSM",
        "AWS KMS",
        "AWS Secrets Manager",
        "AWS Certificate Manager",
      ],
      correct: 0,
      explanation:
        "AWS CloudHSM provides dedicated, single-tenant Hardware Security Modules in the cloud. FIPS 140-2 Level 3. Customer manages keys; AWS manages hardware.",
    },
    {
      id: "sec-q13",
      question:
        "Which compliance certification does AWS hold that proves IT general controls?",
      options: [
        "SOC 1",
        "SOC 2",
        "SOC 3",
        "All of the above",
      ],
      correct: 3,
      explanation:
        "AWS holds SOC 1 (financial reporting), SOC 2 (security, availability, confidentiality), and SOC 3 (public report) certifications, plus many others (PCI DSS, ISO 27001, HIPAA, FedRAMP, etc.).",
    },
    {
      id: "sec-q14",
      question:
        "What does AWS Inspector do?",
      options: [
        "Continuously scans EC2 instances, ECR container images, and Lambda functions for software vulnerabilities and unintended network exposure.",
        "Logs all API calls.",
        "Manages encryption keys.",
        "Provides DNS service.",
      ],
      correct: 0,
      explanation:
        "Amazon Inspector is an automated vulnerability assessment service. Continuously scans EC2, ECR images, and Lambda for known software vulnerabilities (CVEs) and unintended network exposure.",
    },
    {
      id: "sec-q15",
      question:
        "Which AWS service consolidates security findings from GuardDuty, Inspector, Macie, IAM Access Analyzer, and partner tools?",
      options: [
        "AWS Security Hub",
        "Amazon GuardDuty alone",
        "AWS Config alone",
        "AWS Trusted Advisor",
      ],
      correct: 0,
      explanation:
        "AWS Security Hub aggregates and prioritizes security findings from multiple AWS and partner tools — provides a single security posture dashboard.",
    },
    {
      id: "sec-q16",
      question:
        "Which is true about encryption in transit and at rest in AWS?",
      options: [
        "AWS does not support encryption.",
        "AWS supports encryption in transit (TLS) and at rest (AES-256) for nearly all services — sometimes by default, sometimes via configuration.",
        "Only paid tiers support encryption.",
        "Only on-premises encryption is supported.",
      ],
      correct: 1,
      explanation:
        "AWS supports encryption in transit (TLS/HTTPS) and at rest (AES-256, often via KMS) across nearly every service. Some services encrypt by default (S3 since 2023, EBS via account default, RDS storage encryption optional).",
    },
    {
      id: "sec-q17",
      question:
        "Which feature of AWS WAF lets you block specific IP addresses from accessing your application?",
      options: [
        "IP set / IP-based rules",
        "Geo-match conditions",
        "Rate-based rules",
        "All of the above",
      ],
      correct: 3,
      explanation:
        "AWS WAF supports IP sets (block/allow specific IPs/CIDR), geo-match (block by country), rate-based rules (block IPs sending too many requests), string matching, regex, SQL injection rules, etc.",
    },
    {
      id: "sec-q18",
      question:
        "Under the Shared Responsibility Model, what is AWS responsible for?",
      options: [
        "Customer data and applications.",
        "Security OF the cloud — the global infrastructure (data centers, hardware, host OS, hypervisor, networking).",
        "OS-level patching for all customers.",
        "Customer IAM policies.",
      ],
      correct: 1,
      explanation:
        "AWS is responsible for security OF the cloud: physical security, hardware, host OS, hypervisor, AWS service software, and global infrastructure. The customer is responsible for security IN the cloud.",
    },
    {
      id: "sec-q19",
      question:
        "Under the Shared Responsibility Model, what is the customer responsible for?",
      options: [
        "Physical security of data centers.",
        "Security IN the cloud — customer data, IAM (identities/roles/policies), OS patching (for IaaS), application logic, encryption, networking config.",
        "AWS service availability.",
        "Hypervisor patching.",
      ],
      correct: 1,
      explanation:
        "Customer responsibilities (security IN the cloud) include: their data, IAM users/roles/policies, OS patching for IaaS workloads, application config, encryption choices, network ACLs, and security groups.",
    },
    {
      id: "sec-q20",
      question:
        "Which service helps you find S3 buckets that are publicly accessible across an AWS Organization?",
      options: [
        "IAM Access Analyzer",
        "AWS Config",
        "AWS Trusted Advisor",
        "All of the above can help",
      ],
      correct: 3,
      explanation:
        "All can help: IAM Access Analyzer flags resources accessible outside your zone of trust; AWS Config rules can detect public buckets; Trusted Advisor checks for open S3 buckets. Use Block Public Access as the safety net.",
    },
    {
      id: "sec-q21",
      question:
        "Which is the BEST practice for protecting the AWS account root user?",
      options: [
        "Use it for daily admin tasks.",
        "Enable MFA, lock away credentials, do NOT use it for daily work, and create separate IAM users with appropriate permissions.",
        "Share the password with all admins.",
        "Disable the root user.",
      ],
      correct: 1,
      explanation:
        "Best practice: enable MFA (preferably hardware), securely lock away the password and access keys, never use root for daily ops, and use IAM users / Identity Center for actual work.",
    },
    {
      id: "sec-q22",
      question:
        "Which AWS service is an integrated dashboard that shows the current security posture and compliance with security standards?",
      options: [
        "AWS Security Hub",
        "AWS Trusted Advisor",
        "AWS Config",
        "Amazon GuardDuty",
      ],
      correct: 0,
      explanation:
        "AWS Security Hub gives a comprehensive view of high-priority security alerts and compliance status across AWS accounts — using best-practice standards like AWS Foundational Security Best Practices, CIS, PCI DSS.",
    },
    {
      id: "sec-q23",
      question:
        "Which AWS service helps you respond to and recover from security incidents using automated playbooks?",
      options: [
        "AWS Detective + Security Hub + EventBridge + Lambda runbooks",
        "AWS Trusted Advisor",
        "AWS CloudTrail alone",
        "Amazon Macie alone",
      ],
      correct: 0,
      explanation:
        "Incident response uses several services: Detective for investigation, Security Hub for findings, EventBridge to trigger Lambda automation, Systems Manager Automation for runbooks, and IR-specific services like AWS Detective.",
    },
    {
      id: "sec-q24",
      question:
        "Which service helps investigate the root cause of security findings using a graph model of users, resources, and activities?",
      options: [
        "Amazon Detective",
        "Amazon GuardDuty",
        "AWS CloudTrail",
        "AWS Config",
      ],
      correct: 0,
      explanation:
        "Amazon Detective automatically collects log data from CloudTrail, VPC flow logs, GuardDuty findings, and applies graph theory + ML to help analyze and visualize root causes.",
    },
    {
      id: "sec-q25",
      question:
        "Which AWS service helps you find unintended public access to AWS resources (S3 buckets, IAM roles, KMS keys, Lambda)?",
      options: [
        "IAM Access Analyzer",
        "AWS Trusted Advisor",
        "AWS WAF",
        "AWS Shield",
      ],
      correct: 0,
      explanation:
        "IAM Access Analyzer continuously analyzes resource policies (S3, IAM roles, KMS, Lambda, SQS, Secrets Manager) and flags resources accessible from outside your account or organization.",
    },
    {
      id: "sec-q26",
      question:
        "Which of the following is NOT a resource that AWS WAF can be attached to?",
      options: [
        "Amazon CloudFront distribution",
        "Application Load Balancer (ALB)",
        "Amazon API Gateway",
        "An EC2 instance directly (via its ENI)",
      ],
      correct: 3,
      explanation:
        "AWS WAF attaches to the front door / load balancer in front of your application — supported targets are CloudFront, ALB, API Gateway, AWS AppSync, and Amazon Cognito user pools. WAF is NOT attached directly to an EC2 instance, and it does NOT work with Network Load Balancers (NLB operates at Layer 4, while WAF is Layer 7).",
    },
    {
      id: "sec-q27",
      question:
        "You have 50 AWS accounts in an AWS Organization and want to deploy and enforce a single set of WAF rules across all of them — including new accounts that join later. Which AWS service is BEST suited to do this?",
      options: [
        "AWS WAF (configured manually in each account)",
        "AWS Firewall Manager",
        "AWS Shield Advanced",
        "AWS Config",
      ],
      correct: 1,
      explanation:
        "AWS Firewall Manager provides centralized policy management for WAF Web ACLs, Shield Advanced protections, Security Groups, AWS Network Firewall, and Route 53 Resolver DNS Firewall across multiple accounts in an AWS Organization. It auto-applies policies to new accounts that join the Organization.",
    },
    {
      id: "sec-q28",
      question:
        "Your auditor needs continuous evidence that your AWS workload meets SOC 2 controls. Which AWS service should you use to automate evidence collection and produce an assessment report?",
      options: [
        "AWS Artifact",
        "AWS Audit Manager",
        "AWS Trusted Advisor",
        "AWS Security Hub",
      ],
      correct: 1,
      explanation:
        "AWS Audit Manager automates evidence collection from your AWS environment (CloudTrail, Config, Security Hub, etc.) and maps it to pre-built frameworks like SOC 2, PCI DSS, GDPR, HIPAA, and ISO 27001 — producing an assessment report ready for auditors. AWS Artifact is different: it lets you download AWS's own compliance reports (proof that AWS itself is compliant), not evidence about your workload.",
    },
  ],
};
