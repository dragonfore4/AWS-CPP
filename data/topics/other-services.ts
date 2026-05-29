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
      id: "other-q1",
      question:
        "องค์กรต้องการให้พนักงานเข้าถึง <strong>application เฉพาะตัวหนึ่ง</strong> ผ่าน web browser โดยไม่ต้องติดตั้งบนเครื่อง user — ควรใช้ service ไหน?",
      options: [
        "Amazon WorkSpaces — เพราะให้ desktop เต็มรูปแบบ",
        "Amazon AppStream 2.0 — stream เฉพาะ application ลง browser",
        "AWS IoT Core — เชื่อม devices กับ cloud",
        "AWS AppFlow — สำหรับเชื่อม SaaS กับ AWS",
      ],
      correct: 1,
      explanation:
        "AppStream 2.0 = stream เฉพาะ <strong>application</strong> (ไม่ใช่ทั้ง desktop) ลง web browser — application รันบน AWS แล้ว stream ออกไป ส่วน WorkSpaces จะให้ <strong>full desktop</strong> ทั้งเครื่อง ซึ่ง overkill ถ้าต้องการแค่ใช้ app เดียว",
    },
    {
      id: "other-q2",
      question:
        "ทีมต้องการ backup ข้อมูลแบบรวมศูนย์จากหลาย AWS services (EC2, EBS, RDS, DynamoDB, EFS) ในที่เดียว ควรใช้ service ใด?",
      options: [
        "เขียน custom Lambda scripts สำหรับแต่ละ service",
        "AWS DataSync — เพราะย้ายข้อมูลได้",
        "AWS Backup — fully managed centralized backup ครอบคลุมหลาย services",
        "AWS Storage Gateway — สำหรับ on-prem เท่านั้น",
      ],
      correct: 2,
      explanation:
        "AWS Backup เป็น <strong>centralized backup service</strong> ที่ครอบคลุม EC2, EBS, EFS, RDS, Aurora, DynamoDB, Storage Gateway, FSx — กำหนด Backup Plans (schedule, frequency, retention) ได้ในที่เดียว รองรับ cross-region/cross-account และ Vault Lock (WORM) DataSync ใช้ย้ายข้อมูล (ไม่ใช่ backup), Storage Gateway เชื่อม on-prem กับ AWS storage",
    },
    {
      id: "other-q3",
      question:
        "ในกลยุทธ์ Disaster Recovery 4 แบบ ข้อใดมี <strong>RTO สูงสุด</strong> (กู้คืนช้าสุด) แต่ <strong>cost ต่ำสุด</strong>?",
      options: [
        "Multi-Site / Hot Site",
        "Warm Standby",
        "Pilot Light",
        "Backup & Restore",
      ],
      correct: 3,
      explanation:
        "<strong>Backup & Restore</strong> = backup data ตามปกติ ตอน disaster ค่อย restore + provision infrastructure ใหม่ → ช้าสุด (RTO/RPO สูง) แต่ถูกสุด ส่วน Multi-Site = active-active ทั้ง 2 site (RTO ใกล้ 0 แต่แพงสุด), Pilot Light = core เล็ก ๆ รันอยู่, Warm Standby = ระบบรันอยู่แบบ minimum",
    },
    {
      id: "other-q4",
      question: "AWS DataSync ใช้ทำอะไร?",
      options: [
        "Backup AWS services แบบรวมศูนย์",
        "ย้ายข้อมูลจำนวนมาก on-premises \u2194 AWS หรือ AWS \u2194 AWS รองรับ NFS, SMB, S3, EFS, FSx",
        "แปลง database schema ระหว่าง DB ต่างชนิด",
        "ทดสอบ mobile app บน real devices",
      ],
      correct: 1,
      explanation:
        "AWS DataSync = ย้ายข้อมูลขนาดใหญ่ <strong>เข้า/ออก/ภายใน AWS</strong> รองรับ protocols NFS, SMB, S3, EFS, FSx for Windows เร็วกว่า open-source tools ได้ถึง 10 เท่า ส่วน AWS Backup = backup รวมศูนย์, SCT = แปลง DB schema, Device Farm = ทดสอบ app บน real device",
    },
    {
      id: "other-q5",
      question:
        "องค์กรต้องการย้าย physical/virtual servers จาก on-premises มา AWS แบบ <strong>lift-and-shift</strong> โดยไม่แก้ application code ควรใช้ service ใด?",
      options: [
        "AWS Application Discovery Service",
        "AWS Migration Evaluator",
        "AWS Application Migration Service (MGN)",
        "AWS Schema Conversion Tool",
      ],
      correct: 2,
      explanation:
        "AWS Application Migration Service (MGN) — เดิมชื่อ CloudEndure Migration — เป็นโซลูชัน <strong>lift-and-shift</strong> หลัก ย้าย physical, virtual, cloud-based servers มาเป็น EC2 โดยใช้ continuous replication ส่วน Application Discovery = plan migration (เก็บ data on-prem), Migration Evaluator = สร้าง business case (TCO), SCT = แปลง DB schema",
    },
  ],
};
