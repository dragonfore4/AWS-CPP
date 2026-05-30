import { TopicData } from "@/types/topic";

export const otherServices: TopicData = {
  slug: "other-services",
  title: "Other Services",
  subtitle: "WorkSpaces, IoT, Backup, Migration & more",
  accent: "slate",
  emoji: "\ud83d\udce6",
  category: "Other AWS Services",
  description:
    "รวม AWS services อื่น ๆ ที่อาจปรากฏในข้อสอบ CLF-C02 — End-User Computing (WorkSpaces, AppStream), IoT, Media, Integration, Backup & Disaster Recovery, Migration tools, Amplify, DataExchange และอื่น ๆ เน้นรู้จัก service ในภาพรวม + use case หลัก ไม่ลงลึกเชิงเทคนิค",
  keyPoints: [
    "End-User Computing: WorkSpaces (full desktop) vs AppStream 2.0 (app streaming)",
    "AWS Backup — centralized backup ข้าม services + Vault Lock (WORM)",
    "Disaster Recovery 4 strategies: Backup & Restore \u2192 Pilot Light \u2192 Warm Standby \u2192 Multi-Site",
    "Migration tools: DataSync, MGN (lift-and-shift), Application Discovery, SCT, Migration Evaluator",
  ],
  sections: [
    {
      id: "intro",
      title: "ภาพรวม Other Services",
      content: [
        {
          type: "paragraph",
          text: "หัวข้อนี้รวม <strong>AWS services เพิ่มเติม</strong> ที่อาจปรากฏในข้อสอบ CLF-C02 — เน้นรู้ <em>service คืออะไร</em> และ <em>use case หลัก</em> เพียง 1 บรรทัด ไม่ลงลึกเชิงเทคนิค",
        },
        {
          type: "callout",
          variant: "info",
          title: "เป้าหมายการเรียน",
          text: "จำได้ว่า service ไหนอยู่หมวดอะไร (End-User Computing, IoT, Media, Backup, DR, Migration, Frontend, Data Exchange) เพื่อแยกโจทย์ในข้อสอบได้",
        },
      ],
    },
    {
      id: "workspaces",
      title: "Amazon WorkSpaces",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon WorkSpaces</strong> = <em>Managed Desktop as a Service (DaaS)</em> — provision desktop Windows หรือ Linux บน cloud ทดแทน VDI on-premises",
        },
        {
          type: "list",
          items: [
            "<strong>Eliminate</strong> งาน manage on-prem VDI (Virtual Desktop Infrastructure)",
            "<strong>Fast + scalable</strong> ขยายไปหลักพัน desktops ได้",
            "<strong>Secure</strong> integrate กับ KMS (encryption)",
            "<strong>Pay-as-you-go</strong> รายเดือนหรือรายชั่วโมง",
            "เหมาะกับองค์กรที่ต้องการ desktop กลางให้พนักงาน remote work",
          ],
        },
      ],
    },
    {
      id: "appstream",
      title: "Amazon AppStream 2.0",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon AppStream 2.0</strong> = stream <em>desktop applications</em> ไปยัง web browser ของ user — application รันบน AWS แล้ว stream ผลลัพธ์ออกไป",
        },
        {
          type: "callout",
          variant: "tip",
          title: "WorkSpaces vs AppStream",
          text: "<strong>WorkSpaces</strong> = full desktop (ทั้งเครื่อง) | <strong>AppStream 2.0</strong> = เฉพาะ application (ไม่ใช่ทั้ง desktop) — stream แค่ app เดียวลง browser",
        },
        {
          type: "list",
          items: [
            "ไม่ต้อง provision infrastructure",
            "ทำงานได้บน device ใดก็ได้ที่มี web browser",
            "เหมาะกับ SaaS providers, training, demos",
          ],
        },
      ],
    },
    {
      id: "iot-core",
      title: "AWS IoT Core",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS IoT Core</strong> = เชื่อม IoT devices เข้า AWS Cloud — รองรับหลัก <em>billions of devices</em> และ <em>trillions of messages</em>",
        },
        {
          type: "list",
          items: [
            "Devices สื่อสารกับ AWS ผ่าน <strong>MQTT, HTTPS, WebSockets</strong>",
            "ส่งข้อมูลไปประมวลผลต่อใน AWS services อื่น ๆ ได้ (Lambda, Kinesis, S3)",
            "ใช้สำหรับ <strong>smart home, smart city, industrial IoT</strong>",
            "Serverless + scale อัตโนมัติ",
          ],
        },
      ],
    },
    {
      id: "elastic-transcoder",
      title: "Amazon Elastic Transcoder",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Elastic Transcoder</strong> = แปลงไฟล์ media ใน <em>S3</em> จาก source format ไปเป็นเวอร์ชันที่เล่นได้บน <em>phones, tablets, PCs</em>",
        },
        {
          type: "list",
          items: [
            "Cost-effective + scalable",
            "ใช้ benefit ของ AWS โดยไม่ต้องดูแล media servers เอง",
            "เหมาะสำหรับ video streaming services, content delivery",
          ],
        },
      ],
    },
    {
      id: "appflow",
      title: "AWS AppFlow",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS AppFlow</strong> = <em>fully managed integration service</em> ส่งข้อมูลอย่างปลอดภัยระหว่าง <em>SaaS apps</em> กับ AWS",
        },
        {
          type: "list",
          items: [
            "Sources: <strong>Salesforce, SAP, Zendesk, Slack, ServiceNow</strong>",
            "Destinations: <strong>S3, Redshift</strong> (และ SaaS อื่น ๆ)",
            "<strong>No code</strong> สร้าง integration ผ่าน UI ได้เลย",
            "ทำงานแบบ on-demand, scheduled, หรือ event-driven",
          ],
        },
      ],
    },
    {
      id: "device-farm",
      title: "AWS Device Farm",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Device Farm</strong> = บริการทดสอบ <em>web + mobile apps</em> บน <strong>real devices</strong> ใน AWS",
        },
        {
          type: "list",
          items: [
            "รองรับหลาย OS versions และ manufacturers",
            "<strong>Run tests in parallel</strong> หลาย device พร้อมกันลด test time",
            "ดูผล video, screenshots, logs ได้",
          ],
        },
      ],
    },
    {
      id: "aws-backup",
      title: "AWS Backup",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Backup</strong> = <em>centralized backup service</em> แบบ fully managed ครอบคลุม AWS services หลายตัว — ไม่ต้องเขียน custom scripts เอง",
        },
        {
          type: "grid",
          items: [
            {
              title: "รองรับ services",
              description:
                "EC2, EBS, EFS, RDS (databases), Aurora, DynamoDB, Storage Gateway, FSx — backup จากที่เดียว",
            },
            {
              title: "Backup Plans",
              description:
                "กำหนด schedule, frequency, retention policy ได้ในที่เดียว",
            },
            {
              title: "Cross-region + Cross-account",
              description:
                "backup ข้าม region และข้าม account ได้ — เหมาะกับ DR และ compliance",
            },
            {
              title: "Vault Lock (WORM)",
              description:
                "Write-Once-Read-Many — backup กลายเป็น <strong>immutable</strong> ป้องกันการลบหรือแก้ไข แม้ admin ก็ทำไม่ได้",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "ทำไมใช้ AWS Backup?",
          text: "ถ้ามีหลาย services ต้อง backup → ใช้ AWS Backup จัดการรวมที่เดียว ลดงาน DevOps + ทำ compliance ง่ายขึ้น",
        },
      ],
    },
    {
      id: "disaster-recovery",
      title: "AWS Disaster Recovery (4 Strategies)",
      content: [
        {
          type: "paragraph",
          text: "<strong>Disaster Recovery (DR)</strong> มี 4 กลยุทธ์ — trade-off ระหว่าง <em>RTO (Recovery Time Objective)</em>, <em>RPO (Recovery Point Objective)</em> กับ <em>cost</em>",
        },
        {
          type: "grid",
          items: [
            {
              title: "1. Backup & Restore",
              description:
                "<strong>Cost: ต่ำสุด</strong> | <strong>RTO/RPO: สูงสุด (ช้า)</strong> — backup data ปกติ ตอน disaster ค่อย restore + provision ใหม่",
            },
            {
              title: "2. Pilot Light",
              description:
                "<strong>Cost: ต่ำ</strong> — รัน <em>core ที่จำเป็น</em> ขนาดเล็กไว้ใน AWS (เช่น DB replicate) ตอน disaster ค่อย scale up ส่วนอื่น",
            },
            {
              title: "3. Warm Standby",
              description:
                "<strong>Cost: กลาง</strong> — ระบบทั้งหมด<em>รันอยู่จริงแต่ขนาดเล็ก</em> ตอน disaster scale up ทันที",
            },
            {
              title: "4. Multi-Site / Hot Site",
              description:
                "<strong>Cost: สูงสุด</strong> | <strong>RTO/RPO: ใกล้ 0</strong> — full active-active ทั้ง 2 site รัน production ขนาดเต็ม",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "จดจำ",
          text: "ยิ่งกลยุทธ์<strong>แพง</strong>ขึ้น → RTO/RPO ยิ่ง<strong>ต่ำ</strong>ลง (กู้คืนเร็วขึ้น) | Backup & Restore ถูกสุดแต่ช้าสุด, Multi-Site แพงสุดแต่เร็วสุด",
        },
      ],
    },
    {
      id: "drs",
      title: "AWS Elastic Disaster Recovery (DRS)",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Elastic Disaster Recovery (DRS)</strong> — เดิมชื่อ <em>CloudEndure Disaster Recovery</em> — กู้คืน servers + applications ได้รวดเร็วและน่าเชื่อถือ",
        },
        {
          type: "list",
          items: [
            "<strong>Continuous replication</strong> — replicate ข้อมูลตลอดเวลา",
            "Recover applications ไปยัง <strong>AWS</strong> หรือกลับมา <strong>on-premises</strong> ก็ได้",
            "ใช้แทน custom DR solutions เช่น tape backup",
            "RTO ต่ำมาก, RPO ระดับวินาที",
          ],
        },
      ],
    },
    {
      id: "datasync",
      title: "AWS DataSync",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS DataSync</strong> = ย้ายข้อมูลจำนวนมาก <em>เข้า / ออก / ภายใน AWS</em>",
        },
        {
          type: "list",
          items: [
            "<strong>On-premises \u2192 AWS</strong> หรือ <strong>AWS \u2192 AWS</strong>",
            "รองรับ protocols: <strong>NFS, SMB, S3, EFS, FSx for Windows</strong>",
            "เร็วกว่าเครื่องมือ open-source ทั่วไปได้ <strong>up to 10x</strong>",
            "Schedule transfer + ตรวจสอบ data integrity อัตโนมัติ",
          ],
        },
      ],
    },
    {
      id: "application-discovery",
      title: "AWS Application Discovery Service",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Application Discovery Service</strong> = เครื่องมือช่วย <em>plan migration</em> จาก on-premises ไป AWS",
        },
        {
          type: "list",
          items: [
            "เก็บข้อมูล server on-premises: <strong>configuration, usage, behavior</strong>",
            "ช่วยตัดสินใจว่า <strong>server ไหนควรย้าย</strong> และต้องใช้ resource บน AWS เท่าไร",
            "ใช้ก่อนเริ่มจริงเพื่อทำ migration plan",
          ],
        },
      ],
    },
    {
      id: "mgn",
      title: "AWS Application Migration Service (MGN)",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Application Migration Service (MGN)</strong> — เดิมชื่อ <em>CloudEndure Migration</em> — เป็นโซลูชัน <strong>lift-and-shift</strong> หลักของ AWS",
        },
        {
          type: "list",
          items: [
            "ย้าย <strong>physical, virtual, cloud-based servers</strong> มาเป็น EC2",
            "<strong>Continuous replication</strong> ขณะ source ยังรันอยู่ — cutover ตอนพร้อม",
            "ลด downtime ระหว่าง migration",
            "แทน CloudEndure Migration และ SMS รุ่นเก่า",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Lift-and-Shift",
          text: "Lift-and-Shift = ย้าย workload ไปยัง cloud <strong>โดยไม่แก้ application</strong> — เร็ว แต่ไม่ได้ optimize เพื่อ cloud-native",
        },
      ],
    },
    {
      id: "migration-evaluator",
      title: "AWS Migration Evaluator",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Migration Evaluator</strong> — เดิมชื่อ <em>TSO Logic</em> — ช่วยสร้าง <em>business case</em> สำหรับ migration",
        },
        {
          type: "list",
          items: [
            "วิเคราะห์ <strong>cost-benefit</strong> ก่อนตัดสินใจย้าย",
            "ทำ <strong>TCO (Total Cost of Ownership) comparison</strong> ระหว่าง on-prem กับ AWS",
            "ใช้ขออนุมัติงบกับผู้บริหาร",
          ],
        },
      ],
    },
    {
      id: "schema-conversion-tool",
      title: "AWS Schema Conversion Tool (SCT)",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Schema Conversion Tool (SCT)</strong> = แปลง <em>database schema</em> ระหว่าง DB ต่างชนิดกัน (heterogeneous)",
        },
        {
          type: "list",
          items: [
            "ตัวอย่าง: <strong>Oracle \u2192 Aurora</strong>, <strong>SQL Server \u2192 MySQL</strong>",
            "ใช้คู่กับ <strong>Database Migration Service (DMS)</strong> — SCT แปลง schema, DMS ย้ายข้อมูล",
            "ลด vendor lock-in จาก commercial DB",
          ],
        },
      ],
    },
    {
      id: "amplify",
      title: "AWS Amplify",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Amplify</strong> = ชุดเครื่องมือสำหรับสร้าง <em>full-stack web + mobile apps</em>",
        },
        {
          type: "grid",
          items: [
            {
              title: "Amplify Studio",
              description:
                "<strong>Visual development environment</strong> — ลาก-วาง UI components",
            },
            {
              title: "Authentication",
              description: "ผูกกับ <strong>Cognito</strong> ทำ login/signup",
            },
            {
              title: "Storage",
              description: "ใช้ <strong>S3</strong> เก็บไฟล์",
            },
            {
              title: "APIs",
              description: "REST หรือ <strong>GraphQL</strong> auto-generate",
            },
            {
              title: "Hosting",
              description: "Deploy front-end + CI/CD ในที่เดียว",
            },
            {
              title: "Push Notifications + Analytics",
              description: "Built-in สำหรับ mobile apps",
            },
          ],
        },
      ],
    },
    {
      id: "data-exchange",
      title: "AWS Data Exchange",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Data Exchange</strong> = marketplace สำหรับ <em>find + subscribe</em> ข้อมูลจาก <em>3rd-party data providers</em> บน cloud",
        },
        {
          type: "list",
          items: [
            "มี<strong>หลายร้อย providers</strong> (financial, healthcare, weather, ฯลฯ)",
            "Subscribe แล้วได้ <strong>automatic updates</strong> เมื่อ provider อัปเดตข้อมูล",
            "ข้อมูลส่งมาที่ S3 — ใช้ต่อกับ Athena, Redshift, SageMaker ได้ทันที",
          ],
        },
      ],
    },
    {
      id: "summary",
      title: "Summary — Quick Recap",
      content: [
        {
          type: "paragraph",
          text: "หมวด <strong>Other Services</strong> รวม services เบ็ดเตล็ดหลากประเภท — ตั้งแต่ end-user computing, IoT, media, integration ไปจนถึง backup, DR และ migration ข้อสอบ CLF-C02 มัก<em>ถามภาพรวม</em>ว่า service ไหนเหมาะกับ use case ใด",
        },
        {
          type: "grid",
          items: [
            {
              title: "WorkSpaces",
              description: "Managed Desktop-as-a-Service (DaaS) — ให้ user ใช้ full Windows/Linux desktop",
            },
            {
              title: "AppStream 2.0",
              description: "Stream เฉพาะ application ลง browser โดยไม่ต้องติดตั้งบนเครื่อง user",
            },
            {
              title: "IoT Core",
              description: "เชื่อม devices หลักพันล้านผ่าน MQTT, HTTPS หรือ WebSockets",
            },
            {
              title: "Elastic Transcoder",
              description: "แปลงไฟล์วิดีโอใน S3 ให้เล่นได้บน device ต่างๆ",
            },
            {
              title: "AppFlow",
              description: "เชื่อม SaaS apps กับ AWS แบบ no-code (เช่น Salesforce, ServiceNow)",
            },
            {
              title: "Device Farm",
              description: "Test mobile/web apps บน real devices บน cloud",
            },
            {
              title: "AWS Backup",
              description: "Centralized backup ครอบคลุมหลาย services + cross-region + Vault Lock (WORM)",
            },
            {
              title: "AWS DRS",
              description: "Continuous replication recovery สำหรับ disaster recovery",
            },
            {
              title: "Amplify",
              description: "Full-stack web/mobile dev platform + Studio (visual development)",
            },
            {
              title: "Data Exchange",
              description: "Subscribe ข้อมูลจาก 3rd-party providers ส่งเข้า S3 ใช้กับ Athena/Redshift/SageMaker",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>DR Strategies (จากถูก/ช้า → แพง/เร็ว)</strong>: Backup &amp; Restore → Pilot Light → Warm Standby → Multi-Site",
            "<strong>DataSync</strong>: ย้าย data ระหว่าง on-prem และ AWS storage",
            "<strong>MGN (Application Migration Service)</strong>: lift-and-shift servers มา AWS",
            "<strong>Application Discovery Service</strong>: วางแผน migration (สำรวจ on-prem)",
            "<strong>SCT (Schema Conversion Tool)</strong>: แปลง DB schema ข้าม engine",
            "<strong>Migration Evaluator</strong>: สร้าง business case ก่อน migrate",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "เคล็ดสำหรับสอบ",
          text: "ข้อสอบ CLF-C02 ในหัวข้อนี้มัก<strong>ถามภาพรวม</strong> ว่า \"ใช้ service ไหนทำสิ่งนี้?\" — จำชื่อ service กับ use case 1 บรรทัดให้ได้ก็พอ ไม่ต้องลึก",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "os-q1",
      question:
        "An organization wants employees to access a SPECIFIC application via web browser without installing it locally. Which AWS service is BEST?",
      options: [
        "Amazon AppStream 2.0",
        "Amazon WorkSpaces",
        "Amazon EC2",
        "AWS Cloud9",
      ],
      correct: 0,
      explanation:
        "Amazon AppStream 2.0 streams individual desktop applications (Windows or Linux) to a web browser. Used for delivering apps to users without installation.",
    },
    {
      id: "os-q2",
      question:
        "Which AWS service is a managed cloud-based virtual desktop (DaaS) for end users?",
      options: [
        "Amazon WorkSpaces",
        "Amazon AppStream 2.0",
        "Amazon EC2",
        "AWS Outposts",
      ],
      correct: 0,
      explanation:
        "Amazon WorkSpaces provides full virtual desktops (Windows or Linux) — accessible from any device. Pay monthly or hourly. Used by enterprises to deliver desktops without managing on-prem VDI.",
    },
    {
      id: "os-q3",
      question:
        "Which AWS service is used to manage / inventory IT assets across hybrid environments (EC2 + on-premises servers)?",
      options: [
        "AWS Systems Manager",
        "AWS Config",
        "AWS Trusted Advisor",
        "AWS CloudTrail",
      ],
      correct: 0,
      explanation:
        "AWS Systems Manager (SSM) provides operational management — inventory, patching, automation, run command, session manager, parameter store — across EC2 and on-prem servers.",
    },
    {
      id: "os-q4",
      question:
        "Which AWS service replaces traditional SSH/RDP with browser-based or CLI shell access to EC2 instances using IAM (no inbound port required)?",
      options: [
        "AWS Systems Manager Session Manager",
        "AWS EC2 Instance Connect",
        "Both can do this",
        "Only EC2 SSH agent",
      ],
      correct: 2,
      explanation:
        "Both SSM Session Manager (no port required, browser/CLI) and EC2 Instance Connect (browser-based SSH using IAM) eliminate the need to manage SSH keys / open SSH/RDP ports.",
    },
    {
      id: "os-q5",
      question:
        "Which AWS service provides cost-effective hybrid cloud storage by caching frequently accessed data on-prem and storing the bulk in AWS?",
      options: [
        "AWS Storage Gateway",
        "AWS DataSync",
        "AWS Snowball",
        "AWS Direct Connect",
      ],
      correct: 0,
      explanation:
        "AWS Storage Gateway integrates on-prem environments with AWS storage. Variants: S3 File Gateway, FSx File Gateway, Volume Gateway (iSCSI), Tape Gateway. Local cache + cloud backend.",
    },
    {
      id: "os-q6",
      question:
        "Which AWS service is BEST to back up data from many AWS resources (EBS, RDS, DynamoDB, EFS, FSx) in a centralized way?",
      options: [
        "AWS Backup",
        "Amazon S3 Versioning",
        "AWS DataSync",
        "Amazon EBS Snapshots manually",
      ],
      correct: 0,
      explanation:
        "AWS Backup is a managed centralized backup service for EBS, RDS, DynamoDB, EFS, FSx, EC2, Storage Gateway. Policies define retention and cross-region copy. Far simpler than per-service backups.",
    },
    {
      id: "os-q7",
      question:
        "Which AWS service is a managed disaster recovery solution that replicates servers from on-premises (or any cloud) to AWS for fast failover?",
      options: [
        "AWS Elastic Disaster Recovery (DRS)",
        "AWS Backup",
        "AWS Migration Hub",
        "AWS Snowball",
      ],
      correct: 0,
      explanation:
        "AWS Elastic Disaster Recovery (formerly CloudEndure DR) provides continuous replication of on-prem (or other cloud) servers to AWS. RPO seconds, RTO minutes. Pay only for staging until failover.",
    },
    {
      id: "os-q8",
      question:
        "Which AWS service helps you discover, plan, and migrate on-premises applications to AWS?",
      options: [
        "AWS Migration Hub",
        "AWS DataSync",
        "AWS Backup",
        "AWS Outposts",
      ],
      correct: 0,
      explanation:
        "AWS Migration Hub provides a single place to track the progress of application migrations across multiple AWS migration tools (Application Migration Service, Database Migration Service, etc.).",
    },
    {
      id: "os-q9",
      question:
        "Which AWS service is BEST for replicating servers (lift-and-shift) from on-premises or other cloud to AWS?",
      options: [
        "AWS Application Migration Service (MGN)",
        "AWS Database Migration Service",
        "AWS DataSync",
        "AWS Backup",
      ],
      correct: 0,
      explanation:
        "AWS Application Migration Service (MGN, formerly CloudEndure Migration) is the recommended service for lift-and-shift server migration to AWS — replicates VMs/physical servers as EC2 instances.",
    },
    {
      id: "os-q10",
      question:
        "Which AWS service is BEST for migrating relational databases between heterogeneous engines (e.g., Oracle → Aurora)?",
      options: [
        "AWS Database Migration Service (DMS) + Schema Conversion Tool (SCT)",
        "AWS Snowball",
        "AWS Backup",
        "AWS DataSync",
      ],
      correct: 0,
      explanation:
        "AWS DMS migrates data between databases (homogeneous and heterogeneous). For heterogeneous (e.g., Oracle → PostgreSQL), use AWS Schema Conversion Tool (SCT) to convert schema first.",
    },
    {
      id: "os-q11",
      question:
        "Which AWS service is BEST for transferring large amounts of data over network from on-prem to AWS storage?",
      options: [
        "AWS DataSync",
        "AWS Snowball",
        "AWS Direct Connect",
        "Amazon S3 Transfer Acceleration",
      ],
      correct: 0,
      explanation:
        "AWS DataSync is a managed online data transfer service — moves data between on-prem (NFS, SMB, HDFS, object storage) and AWS storage (S3, EFS, FSx). Built-in encryption, validation, scheduling.",
    },
    {
      id: "os-q12",
      question:
        "Which AWS service is a managed Robotics Operating System (ROS) for testing/deploying robotic applications?",
      options: [
        "AWS RoboMaker (sunset)",
        "AWS DeepLens",
        "AWS DeepRacer",
        "AWS IoT Core",
      ],
      correct: 0,
      explanation:
        "AWS RoboMaker was a service to develop, test, and deploy intelligent robotics applications using ROS. (It is being sunset; mentioned for legacy exam coverage.)",
    },
    {
      id: "os-q13",
      question:
        "Which AWS service is BEST for IoT device management at scale (millions of devices)?",
      options: [
        "AWS IoT Core",
        "AWS IoT Greengrass",
        "AWS IoT Device Management",
        "All of the above are part of AWS IoT family",
      ],
      correct: 3,
      explanation:
        "AWS IoT family includes IoT Core (broker / device gateway), IoT Greengrass (edge runtime), IoT Device Management (registry, OTA updates), IoT Analytics, IoT SiteWise (industrial), IoT FleetWise (vehicles).",
    },
    {
      id: "os-q14",
      question:
        "Which AWS service brings AWS infrastructure to a customer's data center as a fully managed rack?",
      options: [
        "AWS Outposts",
        "AWS Local Zones",
        "AWS Wavelength",
        "AWS Snowball",
      ],
      correct: 0,
      explanation:
        "AWS Outposts is a fully managed rack of AWS infrastructure delivered to the customer's data center, providing EC2, EBS, RDS, EKS, etc. on-prem with the same APIs as the cloud.",
    },
    {
      id: "os-q15",
      question:
        "Which AWS service is BEST for streaming game development infrastructure to game studios?",
      options: [
        "Amazon GameLift",
        "Amazon AppStream 2.0",
        "Amazon WorkSpaces",
        "AWS Cloud9",
      ],
      correct: 0,
      explanation:
        "Amazon GameLift is a managed service for deploying, operating, and scaling dedicated multiplayer game servers. Used by game studios for matchmaking, server hosting, and scaling.",
    },
    {
      id: "os-q16",
      question:
        "Which AWS service hosts blockchain networks (Hyperledger Fabric or Ethereum)?",
      options: [
        "Amazon Managed Blockchain",
        "Amazon QLDB",
        "Amazon DynamoDB",
        "Amazon Neptune",
      ],
      correct: 0,
      explanation:
        "Amazon Managed Blockchain provides managed blockchain networks for Hyperledger Fabric and Ethereum — for use cases like supply chain, financial transactions, decentralized apps.",
    },
    {
      id: "os-q17",
      question:
        "Which AWS service is an immutable, cryptographically verifiable transaction log database?",
      options: [
        "Amazon Quantum Ledger Database (QLDB)",
        "Amazon Managed Blockchain",
        "Amazon DynamoDB",
        "Amazon Aurora",
      ],
      correct: 0,
      explanation:
        "Amazon QLDB is a centralized, fully managed ledger database — immutable, cryptographically verifiable, with a built-in journal. Used for audit trails, supply chain history, financial transactions.",
    },
    {
      id: "os-q18",
      question:
        "Which AWS service is used to manage software licenses across AWS and on-premises?",
      options: [
        "AWS License Manager",
        "AWS Marketplace",
        "AWS Service Catalog",
        "AWS Trusted Advisor",
      ],
      correct: 0,
      explanation:
        "AWS License Manager streamlines license management for software vendor licenses (Microsoft, Oracle, SAP, IBM, etc.) — across AWS and on-prem. Helps avoid over-deployment.",
    },
    {
      id: "os-q19",
      question:
        "Which AWS service is a fully managed quantum computing service?",
      options: [
        "Amazon Braket",
        "AWS DeepRacer",
        "Amazon SageMaker",
        "AWS RoboMaker",
      ],
      correct: 0,
      explanation:
        "Amazon Braket is a managed quantum computing service — gives access to quantum hardware from D-Wave, IonQ, Rigetti, and a quantum simulator.",
    },
    {
      id: "os-q20",
      question:
        "Which AWS service provides a fully managed integration platform for data integration / iPaaS?",
      options: [
        "AWS AppFlow",
        "AWS Glue",
        "AWS DataSync",
        "Amazon EventBridge",
      ],
      correct: 0,
      explanation:
        "Amazon AppFlow integrates SaaS applications (Salesforce, ServiceNow, Slack, Zendesk, etc.) with AWS services with no code. Schedule or event-trigger based, with data transformation.",
    },
    {
      id: "os-q21",
      question:
        "Which AWS service is BEST for sending transactional or marketing emails at scale?",
      options: [
        "Amazon Simple Email Service (SES)",
        "Amazon SNS",
        "Amazon Pinpoint",
        "Amazon WorkMail",
      ],
      correct: 0,
      explanation:
        "Amazon SES is a cost-effective, scalable email service — sending and receiving emails for marketing, notifications, and transactional. SNS is for pub/sub messaging; Pinpoint is multi-channel (email, SMS, push) marketing.",
    },
    {
      id: "os-q22",
      question:
        "Which AWS service is a multi-channel customer engagement service (email, SMS, push, voice)?",
      options: [
        "Amazon Pinpoint",
        "Amazon SES",
        "Amazon Connect",
        "Amazon SNS",
      ],
      correct: 0,
      explanation:
        "Amazon Pinpoint is a multi-channel customer engagement platform — email, SMS, push, voice, in-app — with segmentation, A/B testing, analytics. SES is just email.",
    },
    {
      id: "os-q23",
      question:
        "What is AWS Amplify?",
      options: [
        "A platform for building full-stack mobile/web apps with hosting, CI/CD, and AWS service integrations.",
        "A managed Kubernetes service.",
        "A backup service.",
        "A monitoring service.",
      ],
      correct: 0,
      explanation:
        "AWS Amplify is a development platform for full-stack web/mobile apps with auth (Cognito), API (AppSync/API Gateway), storage (S3), hosting, and CI/CD — designed for frontend developers.",
    },
    {
      id: "os-q24",
      question:
        "Which AWS service is BEST for collaborative document/spreadsheet editing (a Google Docs / Office 365 alternative on AWS)?",
      options: [
        "Amazon WorkDocs (deprecated) / Amazon WorkSpaces",
        "Amazon WorkMail",
        "Amazon Chime",
        "Amazon Connect",
      ],
      correct: 0,
      explanation:
        "Amazon WorkDocs was AWS's collaborative file storage and document service (it has been deprecated as of 2024, but still appears in some exam materials). Amazon WorkMail handles email/calendar.",
    },
    {
      id: "os-q25",
      question:
        "Which AWS service is BEST for video conferencing and team collaboration?",
      options: [
        "Amazon Chime",
        "Amazon Connect",
        "Amazon WorkMail",
        "AWS WAF",
      ],
      correct: 0,
      explanation:
        "Amazon Chime is a communications service (video, voice, chat, meetings). Amazon Connect is a contact center, WorkMail is email.",
    },
  ],
};
