import { TopicData } from "@/types/topic";

export const cloudConcepts: TopicData = {
  slug: "cloud-concepts",
  title: "Cloud Concepts",
  subtitle: "Cloud Computing & AWS Global Infrastructure",
  accent: "sky",
  emoji: "\u2601\ufe0f",
  category: "Cloud Foundations",
  description:
    "พื้นฐาน Cloud Computing — เปรียบเทียบ Traditional IT กับ Cloud, 5 Characteristics, 6 Advantages, ประเภทของ Cloud (IaaS / PaaS / SaaS), Deployment Models, AWS Global Infrastructure (Regions, AZs, Edge Locations) และวิธีเลือก Region ที่เหมาะสม",
  keyPoints: [
    "Cloud = On-demand delivery ของ compute, storage, DB ผ่าน pay-as-you-go",
    "5 Characteristics + 6 Advantages — trade CAPEX for OPEX, go global in minutes",
    "IaaS (EC2) / PaaS (Elastic Beanstalk) / SaaS (Dropbox, Zoom)",
    "AWS Global Infra: Regions (อย่างน้อย 2 AZ), AZs, Edge Locations 216+ จุด",
  ],
  sections: [
    {
      id: "traditional-vs-cloud",
      title: "Traditional IT vs Cloud",
      content: [
        {
          type: "paragraph",
          text: "ก่อนยุค Cloud องค์กรต้องลงทุนและดูแล <strong>Data Center</strong> เองทั้งหมด — ทั้งค่าเช่าพื้นที่, ค่าไฟ, ระบบ cooling, ทีม IT 24/7 และเวลาในการจัดหาเครื่อง <em>Cloud externalizes ปัญหาเหล่านี้ทั้งหมด</em> ให้เป็นหน้าที่ของผู้ให้บริการ",
        },
        {
          type: "grid",
          items: [
            {
              title: "ค่าเช่า DC + ค่าไฟ + Cooling",
              description:
                "ต้องจ่ายค่าเช่าพื้นที่ Data Center, ค่าไฟ, ระบบทำความเย็น และค่าบำรุงรักษาทั้งหมดเป็น CAPEX ก้อนใหญ่",
            },
            {
              title: "Hardware Setup ใช้เวลานาน",
              description:
                "การสั่งซื้อ + ติดตั้ง server ใหม่ใช้เวลาหลายสัปดาห์ถึงหลายเดือน — ปรับขยาย/ลด capacity ทำได้ยาก",
            },
            {
              title: "Scaling จำกัด",
              description:
                "ต้องประเมิน peak traffic ล่วงหน้า ซื้อเผื่อ — ถ้าใช้ไม่ถึงก็เสียเปล่า ถ้าไม่พอก็ระบบล่ม",
            },
            {
              title: "ทีม Monitor 24/7",
              description:
                "ต้องมีทีมเฝ้าระบบตลอดเวลา — รับมือ disaster (ไฟดับ, hardware เสีย, ภัยพิบัติ) เอง",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Cloud แก้ปัญหาเหล่านี้อย่างไร?",
          text: "AWS เป็นเจ้าของ + ดูแล hardware ทั้งหมด คุณแค่ <strong>provision ผ่าน web app/API</strong> ภายในไม่กี่นาที — ไม่ต้องเช่า DC, ไม่ต้องประกอบเครื่อง, ไม่ต้องตั้งทีม monitor เอง",
        },
      ],
    },
    {
      id: "what-is-cloud",
      title: "What is Cloud Computing?",
      content: [
        {
          type: "paragraph",
          text: "<strong>Cloud Computing</strong> คือการส่งมอบทรัพยากร IT (compute, database storage, applications) แบบ <em>on-demand</em> ผ่านอินเทอร์เน็ต โดยจ่ายตามที่ใช้จริง (<strong>pay-as-you-go</strong>) — เป็นวิธีง่ายๆ ในการเข้าถึง servers, storage, databases และ services อื่นๆ",
        },
        {
          type: "list",
          items: [
            "<strong>On-demand delivery</strong> — provision ได้ทันทีไม่ต้องรอ",
            "<strong>Pay-as-you-go pricing</strong> — จ่ายเท่าที่ใช้ ไม่มีค่า upfront",
            "<strong>AWS เป็นเจ้าของ + maintain hardware</strong> — คุณแค่ provision ผ่าน web app",
            "เข้าถึงผ่าน internet ได้ตลอดเวลา จากทุกที่",
          ],
        },
      ],
    },
    {
      id: "five-characteristics",
      title: "5 Characteristics of Cloud Computing",
      content: [
        {
          type: "paragraph",
          text: "NIST นิยาม Cloud Computing ด้วย <strong>5 ลักษณะสำคัญ</strong>:",
        },
        {
          type: "grid",
          items: [
            {
              title: "1. On-demand Self-service",
              description:
                "ผู้ใช้ provision ทรัพยากรเองได้ <em>โดยไม่ต้องติดต่อคนของผู้ให้บริการ</em> — กดปุ่มแล้วได้เครื่องเลย",
            },
            {
              title: "2. Broad Network Access",
              description:
                "เข้าถึงผ่าน network ได้จากหลากหลาย platform (mobile, laptop, tablet, workstation)",
            },
            {
              title: "3. Multi-tenancy + Resource Pooling",
              description:
                "ลูกค้าหลายรายแชร์ infrastructure ร่วมกัน — แต่แยก isolation จากกัน (economies of scale)",
            },
            {
              title: "4. Rapid Elasticity + Scalability",
              description:
                "ขยาย/ลด resource ได้รวดเร็วและอัตโนมัติ — acquire และ dispose ตาม demand",
            },
            {
              title: "5. Measured Service",
              description:
                "วัดการใช้งานได้แม่นยำ — pay-per-use ตามจริง (compute hours, storage GB, data transfer)",
            },
          ],
        },
      ],
    },
    {
      id: "six-advantages",
      title: "6 Advantages of Cloud Computing",
      content: [
        {
          type: "paragraph",
          text: "เหตุผลหลักที่องค์กรย้ายมาใช้ Cloud มี <strong>6 ข้อ</strong> สำคัญ:",
        },
        {
          type: "grid",
          items: [
            {
              title: "1. Trade CAPEX for OPEX",
              description:
                "เปลี่ยนจากลงทุน hardware ก้อนใหญ่ (Capital Expense) → จ่ายตามใช้ (Operating Expense) — ลด TCO โดยรวม",
            },
            {
              title: "2. Massive Economies of Scale",
              description:
                "AWS ซื้อ hardware ในระดับ massive — ราคาต่ำลงเรื่อยๆ และส่งต่อให้ลูกค้า",
            },
            {
              title: "3. Stop Guessing Capacity",
              description:
                "ไม่ต้องเดา capacity ล่วงหน้า — scale ตาม actual usage จริงๆ ได้",
            },
            {
              title: "4. Increased Speed & Agility",
              description:
                "Provision resource ภายในนาที — ทดลอง deploy feature ใหม่ได้เร็วขึ้น time-to-market สั้นลง",
            },
            {
              title: "5. Stop Spending on Data Centers",
              description:
                "ไม่ต้องดูแล DC, racking servers, power, cooling — โฟกัสที่ business value",
            },
            {
              title: "6. Go Global in Minutes",
              description:
                "Deploy ไปหลาย Region ทั่วโลกได้ภายในไม่กี่นาที — leverage AWS global infrastructure",
            },
          ],
        },
      ],
    },
    {
      id: "types-of-cloud",
      title: "Types of Cloud Computing (IaaS / PaaS / SaaS)",
      content: [
        {
          type: "paragraph",
          text: "Cloud แบ่งเป็น <strong>3 ประเภท</strong>ตามระดับการจัดการของผู้ให้บริการ — ยิ่ง abstraction สูง คุณยิ่งดูแลน้อยลง",
        },
        {
          type: "grid",
          items: [
            {
              title: "IaaS — Infrastructure as a Service",
              description:
                "ให้ <strong>building blocks</strong> ระดับ infrastructure (VM, network, storage) คุณดูแล OS, runtime, app เอง — ตัวอย่าง: <em>Amazon EC2</em>, GCP Compute Engine, Rackspace, Digital Ocean",
            },
            {
              title: "PaaS — Platform as a Service",
              description:
                "ผู้ให้บริการดูแล infra + OS + runtime ให้ — คุณแค่ deploy code — ตัวอย่าง: <em>AWS Elastic Beanstalk</em>, Heroku, Google App Engine, Microsoft Azure",
            },
            {
              title: "SaaS — Software as a Service",
              description:
                "ใช้งาน software สำเร็จรูปผ่าน browser — ผู้ให้บริการดูแลทุกอย่าง — ตัวอย่าง: AWS services หลายตัว, Google Apps (Gmail), <em>Dropbox</em>, <em>Zoom</em>",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "จำง่าย",
          text: "<strong>IaaS</strong> = ให้บล็อก เช่น EC2 — <strong>PaaS</strong> = ให้แพลตฟอร์ม เช่น Beanstalk — <strong>SaaS</strong> = ใช้ได้เลย เช่น Dropbox หรือ Zoom",
        },
      ],
    },
    {
      id: "deployment-models",
      title: "Cloud Deployment Models",
      content: [
        {
          type: "paragraph",
          text: "นอกจากแบ่งตามประเภท service แล้ว Cloud ยังแบ่งตาม <strong>วิธี deploy</strong> ได้ 3 แบบ:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Public Cloud",
              description:
                "Infrastructure อยู่กับผู้ให้บริการสาธารณะ — แชร์ใช้งานกับลูกค้ารายอื่น (multi-tenant) — ตัวอย่าง: <strong>AWS, Microsoft Azure, Google Cloud Platform</strong>",
            },
            {
              title: "Private Cloud",
              description:
                "Cloud ที่ใช้งานเฉพาะองค์กรเดียว — อยู่บน on-premises หรือ third-party DC — ตัวอย่าง: <strong>VMware</strong>, OpenStack",
            },
            {
              title: "Hybrid Cloud",
              description:
                "ผสม Public + Private — เก็บข้อมูล sensitive ไว้ private, run workload ทั่วไปบน public — ใช้ AWS Direct Connect / VPN เชื่อม",
            },
          ],
        },
      ],
    },
    {
      id: "pricing-overview",
      title: "Pricing of the Cloud (Quick Overview)",
      content: [
        {
          type: "paragraph",
          text: "AWS pricing มี <strong>3 fundamentals</strong> ที่ต้องเข้าใจ — ช่วยแก้ปัญหาที่ traditional IT แพง:",
        },
        {
          type: "grid",
          items: [
            {
              title: "1. Compute",
              description:
                "จ่ายตาม compute time (เช่น EC2 per second/hour) — ไม่ใช้ก็ไม่จ่าย (เมื่อ stop instance)",
            },
            {
              title: "2. Storage",
              description:
                "จ่ายตาม GB ที่เก็บจริง — มี storage class หลายแบบ (S3 Standard, IA, Glacier) ราคาต่างกัน",
            },
            {
              title: "3. Data Transfer",
              description:
                "<strong>Data IN ฟรี</strong> (เข้า AWS) — <strong>Data OUT คิดเงิน</strong> (ออกจาก AWS ไป internet) — Transfer ภายใน region/AZ บางทีฟรี",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "ทำไมถึงคุ้ม?",
          text: "Cloud แก้ปัญหา traditional IT ที่แพงเรื่อง <em>upfront hardware, DC, cooling, staff</em> — เปลี่ยนเป็น OPEX แบบจ่ายตามใช้ จึงคุ้มกว่ามากในระยะยาวสำหรับ workload ส่วนใหญ่",
        },
      ],
    },
    {
      id: "global-infrastructure",
      title: "AWS Global Infrastructure",
      content: [
        {
          type: "paragraph",
          text: "AWS มี <strong>global infrastructure</strong> ครอบคลุมทั่วโลก — ช่วยให้ deploy app ใกล้กับผู้ใช้ ลด latency และเพิ่ม availability",
        },
        {
          type: "grid",
          items: [
            {
              title: "AWS Regions",
              description:
                "พื้นที่ทางภูมิศาสตร์ (เช่น us-east-1, ap-southeast-1) — ใช้ deploy applications + infrastructure แต่ละ Region <strong>isolated</strong> จากกัน — ประกอบด้วย AZ <em>เฉลี่ย 3 AZ (อย่างน้อย 2, สูงสุด 6)</em>",
            },
            {
              title: "Availability Zones (AZ)",
              description:
                "Data center 1+ แห่งที่มี redundant power, networking, connectivity — <strong>แยก physically</strong> จากกัน (ป้องกันภัยพิบัติ) — เชื่อมกันด้วย high-bandwidth + ultra-low latency network",
            },
            {
              title: "Edge Locations / Points of Presence",
              description:
                "<strong>216+ จุดทั่วโลก</strong> — ใช้ส่ง content ใกล้ผู้ใช้ (content delivery) สำหรับ <em>CloudFront (CDN)</em> และ <em>Route 53 (DNS)</em>",
            },
            {
              title: "AWS Data Centers",
              description:
                "Hardware กายภาพจริง — racks, servers, network equipment ภายใน AZ (ผู้ใช้ไม่สามารถเข้าถึงได้โดยตรง)",
            },
          ],
        },
        {
          type: "code",
          language: "text",
          caption: "ลำดับชั้น AWS Global Infrastructure",
          code: "AWS Global Infrastructure\n  └── Region (เช่น ap-southeast-1)\n        └── Availability Zone (เช่น ap-southeast-1a)\n              └── Data Center (physical hardware)\n\nEdge Locations / PoPs (216+) — แยกต่างหาก ใช้กับ CloudFront / Route 53",
        },
      ],
    },
    {
      id: "choose-region",
      title: "How to Choose an AWS Region",
      content: [
        {
          type: "paragraph",
          text: "การเลือก Region ที่เหมาะสม ขึ้นอยู่กับ <strong>4 ปัจจัย</strong>:",
        },
        {
          type: "grid",
          items: [
            {
              title: "1. Compliance",
              description:
                "กฎหมาย <strong>data sovereignty</strong> — บางประเทศกำหนดว่าข้อมูลต้องอยู่ในประเทศเท่านั้น (เช่น GDPR ในยุโรป) — ต้องเลือก Region ที่ตรงข้อกำหนด",
            },
            {
              title: "2. Proximity (Latency)",
              description:
                "เลือก Region ใกล้ลูกค้า — latency ต่ำลง user experience ดีขึ้น (ลูกค้าไทย → ใช้ ap-southeast-1 Singapore)",
            },
            {
              title: "3. Available Services",
              description:
                "<strong>ไม่ใช่ทุก service มีในทุก Region</strong> — service ใหม่ๆ มักเปิดที่ us-east-1 ก่อน แล้วค่อยขยาย — เช็ค region table ก่อน",
            },
            {
              title: "4. Pricing",
              description:
                "ราคาแต่ละ Region <strong>ต่างกัน</strong> — โดยทั่วไป us-east-1 ถูกที่สุด, Region ห่างไกลแพงกว่า",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "เคล็ดลับสอบ",
          text: "ถ้าโจทย์พูดถึง <em>กฎหมายข้อมูล / data sovereignty</em> → คำตอบคือ <strong>Compliance</strong> — ถ้าพูดถึง <em>latency / ผู้ใช้ใกล้-ไกล</em> → คำตอบคือ <strong>Proximity</strong>",
        },
      ],
    },
    {
      id: "global-vs-regional",
      title: "Global vs Regional Services",
      content: [
        {
          type: "paragraph",
          text: "AWS services แบ่งเป็น 2 scope — <strong>Global</strong> (ทั่วโลก ไม่ผูกกับ Region) และ <strong>Regional</strong> (อยู่เฉพาะใน Region ที่ deploy)",
        },
        {
          type: "grid",
          items: [
            {
              title: "Global Services",
              description:
                "<strong>IAM</strong> (users, groups, roles, policies), <strong>Route 53</strong> (DNS), <strong>CloudFront</strong> (CDN), <strong>WAF</strong> (Web Application Firewall) — ใช้งานได้เหมือนกันจากทุก Region",
            },
            {
              title: "Regional Services",
              description:
                "ส่วนใหญ่เป็น regional — <strong>EC2, RDS, Lambda, VPC</strong> และอื่นๆ — ต้องเลือก Region ตอน deploy <em>S3</em> เป็น regional แต่ <strong>bucket name unique ทั่วโลก</strong>",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "ระวัง: S3 ก้ำกึ่ง",
          text: "S3 เป็น <strong>regional service</strong> (data เก็บใน Region ที่เลือก) แต่ <strong>bucket name ต้อง unique ทั่วโลก</strong> — มักออกข้อสอบหลอก",
        },
      ],
    },
    {
      id: "use-cases",
      title: "AWS Cloud Use Cases",
      content: [
        {
          type: "paragraph",
          text: "AWS ใช้สร้าง <strong>scalable applications</strong> ได้หลากหลายอุตสาหกรรม — ไม่จำกัดแค่ tech startup",
        },
        {
          type: "list",
          items: [
            "<strong>Healthcare</strong> — เก็บข้อมูลผู้ป่วย, run AI/ML วินิจฉัยโรค",
            "<strong>Finance</strong> — fraud detection, real-time trading, banking",
            "<strong>Gaming</strong> — server backend, multiplayer matchmaking, leaderboards",
            "<strong>Media</strong> — video streaming, content delivery (CloudFront)",
            "<strong>Retail / E-commerce</strong> — recommendation engine, peak traffic handling",
            "<strong>Manufacturing</strong> — IoT sensors, supply chain analytics",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Famous AWS Customers",
              description:
                "<strong>Netflix</strong> (video streaming), <strong>Airbnb</strong> (booking platform), <strong>Twitch</strong> (live streaming), <strong>Lyft</strong> (ride-sharing), <strong>NASA</strong> (space data + research)",
            },
            {
              title: "Why They Chose AWS",
              description:
                "Scale รับ traffic peak ได้ทันที, global reach, broad service catalog, pay-as-you-go ลด cost ตอน traffic ต่ำ",
            },
          ],
        },
      ],
    },
    {
      id: "shared-responsibility-intro",
      title: "Shared Responsibility Model (Intro)",
      content: [
        {
          type: "paragraph",
          text: "AWS ใช้แนวคิด <strong>Shared Responsibility Model</strong> — ความปลอดภัยเป็น <em>ความรับผิดชอบร่วม</em>ระหว่าง AWS และลูกค้า",
        },
        {
          type: "grid",
          items: [
            {
              title: "AWS — Security OF the Cloud",
              description:
                "ดูแล <strong>infrastructure</strong> ที่ run cloud services ทั้งหมด — hardware, software, networking, facilities (data centers, power, cooling, physical security)",
            },
            {
              title: "Customer — Security IN the Cloud",
              description:
                "ดูแล <strong>data + configuration</strong> — ข้อมูล, IAM users/policies, OS patching, network/firewall config, encryption (at rest + in transit), application security",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "หัวข้อนี้จะลงลึกอีกใน Security Section",
          text: "ตอนนี้แค่จำหลักการ — <strong>AWS = OF the Cloud</strong> (โครงสร้างพื้นฐาน) ส่วน <strong>Customer = IN the Cloud</strong> (data + config) — รายละเอียดเต็มอยู่ในหัวข้อ Security",
        },
      ],
    },
    {
      id: "summary",
      title: "Summary",
      content: [
        {
          type: "paragraph",
          text: "<strong>Cloud Computing</strong> คือ on-demand delivery ของ compute, storage และ database ผ่าน <em>pay-as-you-go pricing</em> — แก้ปัญหาของ traditional IT ที่ต้องลงทุน hardware, ดูแล data center และทีม monitor 24/7 เอง",
        },
        {
          type: "grid",
          items: [
            {
              title: "5 Characteristics",
              description:
                "On-demand self-service, broad network access, multi-tenancy, rapid elasticity, measured service",
            },
            {
              title: "6 Advantages",
              description:
                "Trade CAPEX→OPEX, economies of scale, stop guessing capacity, speed/agility, stop spending on DC, go global in minutes",
            },
            {
              title: "3 Service Types",
              description:
                "IaaS เช่น EC2 — PaaS เช่น Elastic Beanstalk — SaaS เช่น Dropbox หรือ Zoom",
            },
            {
              title: "3 Deployment Models",
              description:
                "Public (AWS), Private (VMware on-prem), Hybrid (ผสม Public + Private)",
            },
            {
              title: "3 Pricing Fundamentals",
              description:
                "Compute (per hour/sec), Storage (per GB), Data Transfer (IN ฟรี, OUT คิดเงิน)",
            },
            {
              title: "Global Infrastructure",
              description:
                "Region (avg 3 AZ, min 2, max 6) → AZ → Data Center และ Edge Location 216+ จุดทั่วโลก",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>เลือก Region</strong> ตาม 4 ปัจจัย: Compliance, Proximity, Available Services และ Pricing",
            "<strong>Global services</strong> ที่ต้องจำ: IAM, Route 53, CloudFront, WAF",
            "<strong>Regional services</strong> ที่พบบ่อย: EC2, S3, RDS, Lambda, VPC",
            "<strong>Shared Responsibility — AWS</strong> รับผิดชอบ security <em>OF</em> the cloud (โครงสร้างพื้นฐาน)",
            "<strong>Shared Responsibility — Customer</strong> รับผิดชอบ security <em>IN</em> the cloud (data + config)",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Quick Memory Aid",
          text: "<strong>5</strong> Characteristics — <strong>6</strong> Advantages — <strong>3</strong> Types (IaaS/PaaS/SaaS) — <strong>3</strong> Deployment Models (Public/Private/Hybrid) — <strong>3</strong> Pricing Fundamentals (Compute/Storage/Transfer) — <strong>4</strong> Region factors (Compliance/Proximity/Services/Pricing)",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "cc-q1",
      question:
        "Which of the following is one of the six advantages of cloud computing?",
      options: [
        "Pay upfront for capacity that may never be used.",
        "Trade capital expense (CapEx) for variable expense (OpEx).",
        "Maintain your own data centers to keep full control.",
        "Provision resources only after a 6-week procurement cycle.",
      ],
      correct: 1,
      explanation:
        "AWS lists six advantages of cloud computing: (1) trade CapEx for variable OpEx, (2) benefit from massive economies of scale, (3) stop guessing capacity, (4) increase speed and agility, (5) stop spending money on running data centers, and (6) go global in minutes.",
    },
    {
      id: "cc-q2",
      question:
        "A company runs an application on EC2 and the underlying physical server fails — the EC2 instance is automatically launched on healthy hardware. Which AWS Well-Architected pillar BEST describes this?",
      options: ["Cost Optimization", "Reliability", "Performance Efficiency", "Sustainability"],
      correct: 1,
      explanation:
        "Reliability covers the ability of a workload to recover from infrastructure or service failures, including auto-recovery and minimizing the impact of disruptions.",
    },
    {
      id: "cc-q3",
      question:
        "Which cloud deployment model uses a mix of on-premises infrastructure and AWS public cloud, with connectivity between them?",
      options: ["Public cloud", "Private cloud", "Hybrid cloud", "Multi-cloud"],
      correct: 2,
      explanation:
        "Hybrid cloud combines an organization's on-premises infrastructure (or private cloud) with public cloud services such as AWS, typically connected via VPN or AWS Direct Connect.",
    },
    {
      id: "cc-q4",
      question:
        "Which AWS service model gives the customer the MOST control over the operating system and runtime?",
      options: [
        "Software as a Service (SaaS)",
        "Platform as a Service (PaaS)",
        "Infrastructure as a Service (IaaS)",
        "Function as a Service (FaaS)",
      ],
      correct: 2,
      explanation:
        "IaaS (e.g., Amazon EC2) gives customers control of the operating system, runtime, and applications. With PaaS the platform is managed by AWS, and with SaaS the entire application stack is managed by the provider.",
    },
    {
      id: "cc-q5",
      question:
        "Which of the following BEST describes the AWS pay-as-you-go pricing model?",
      options: [
        "Customers pay a fixed monthly fee for unlimited usage.",
        "Customers pay only for the resources and services they actually consume.",
        "Customers must commit to 3 years of usage upfront.",
        "Customers receive a refund for any unused capacity at year-end.",
      ],
      correct: 1,
      explanation:
        "AWS pay-as-you-go means you pay only for what you use, with no long-term commitments and no upfront expenses required (Reserved Instances and Savings Plans are optional commitment-based discounts).",
    },
    {
      id: "cc-q6",
      question: "Which of the following is NOT a benefit of cloud elasticity?",
      options: [
        "Automatically scaling up to meet a traffic spike.",
        "Automatically scaling down during low demand to save cost.",
        "Maintaining a fixed pool of servers regardless of demand.",
        "Matching infrastructure capacity to actual demand.",
      ],
      correct: 2,
      explanation:
        "Elasticity is the ability to acquire resources as you need them and release them when you don't. Maintaining a fixed pool regardless of demand is the opposite of elasticity.",
    },
    {
      id: "cc-q7",
      question:
        "AWS is responsible for the security \"of\" the cloud, while the customer is responsible for security \"in\" the cloud. Which model is this?",
      options: [
        "Single Responsibility Model",
        "Shared Responsibility Model",
        "Customer Responsibility Model",
        "AWS Total Care Model",
      ],
      correct: 1,
      explanation:
        "AWS uses the Shared Responsibility Model: AWS secures the underlying infrastructure (security of the cloud), and the customer secures their data, identities, and configurations (security in the cloud).",
    },
    {
      id: "cc-q8",
      question:
        "Which AWS Well-Architected pillar focuses on the ability to run workloads efficiently and to scale resources to meet demand?",
      options: [
        "Operational Excellence",
        "Reliability",
        "Performance Efficiency",
        "Cost Optimization",
      ],
      correct: 2,
      explanation:
        "Performance Efficiency is about using IT resources efficiently — selecting the right resource types, monitoring performance, and scaling to match demand.",
    },
    {
      id: "cc-q9",
      question:
        "Which of the following is an example of horizontal scaling?",
      options: [
        "Increasing the CPU and RAM of a single EC2 instance.",
        "Adding more EC2 instances behind a load balancer to handle increased load.",
        "Switching from a t3.micro to an m5.4xlarge.",
        "Adding more storage to an EBS volume.",
      ],
      correct: 1,
      explanation:
        "Horizontal scaling (scale out) adds more instances. Vertical scaling (scale up) increases the capacity of an existing instance.",
    },
    {
      id: "cc-q10",
      question:
        "Which deployment model is referred to as on-premises in AWS terminology?",
      options: [
        "Public cloud only",
        "Private cloud / on-premises data centers",
        "Hybrid cloud",
        "Edge locations",
      ],
      correct: 1,
      explanation:
        "On-premises (or private cloud) refers to deploying resources within an organization's own data centers, typically using virtualization tools.",
    },
    {
      id: "cc-q11",
      question:
        "Which type of cloud computing model includes services like Amazon S3, Amazon DynamoDB, and AWS Lambda where AWS handles all of the infrastructure?",
      options: [
        "IaaS — Infrastructure as a Service",
        "PaaS — Platform as a Service",
        "Serverless / managed service",
        "On-premises",
      ],
      correct: 2,
      explanation:
        "Services like S3, DynamoDB, and Lambda are managed/serverless: customers don't provision or manage servers — AWS handles all of the infrastructure, scaling, and patching.",
    },
    {
      id: "cc-q12",
      question:
        "Which of the following best describes the concept of agility in cloud computing?",
      options: [
        "The ability to acquire IT resources in seconds or minutes instead of weeks.",
        "The ability to keep data on-premises forever.",
        "The ability to predict capacity needs years in advance.",
        "The ability to lock infrastructure into a single region.",
      ],
      correct: 0,
      explanation:
        "Cloud agility means dramatically reducing the time to provision new resources — from weeks (for on-premises) to seconds or minutes — enabling faster experimentation and time-to-market.",
    },
    {
      id: "cc-q13",
      question:
        "Which of the following is true about the AWS global infrastructure?",
      options: [
        "Each Region consists of a single data center.",
        "Each Region consists of multiple, isolated, and physically separate Availability Zones.",
        "All Availability Zones share the same building for cost efficiency.",
        "Edge Locations are the same thing as Availability Zones.",
      ],
      correct: 1,
      explanation:
        "An AWS Region is composed of multiple Availability Zones (typically 3+). Each AZ is one or more discrete data centers with redundant power, networking, and connectivity, in physically separated buildings.",
    },
    {
      id: "cc-q14",
      question:
        "Which AWS Well-Architected pillar focuses on minimizing the environmental impact of running cloud workloads?",
      options: [
        "Operational Excellence",
        "Cost Optimization",
        "Sustainability",
        "Performance Efficiency",
      ],
      correct: 2,
      explanation:
        "Sustainability (added in 2021 as the 6th pillar) addresses environmental impacts — energy consumption, hardware efficiency, and choosing services that minimize the carbon footprint of workloads.",
    },
    {
      id: "cc-q15",
      question:
        "A startup wants to launch a new application globally without paying for unused infrastructure. Which cloud benefit BEST applies?",
      options: [
        "Massive economies of scale",
        "Variable expense / pay-as-you-go",
        "Stop guessing capacity",
        "All of the above",
      ],
      correct: 3,
      explanation:
        "All three apply: AWS passes on economies of scale through low prices, customers pay only for usage, and they can scale up or down without guessing capacity in advance.",
    },
    {
      id: "cc-q16",
      question:
        "Which is an example of an Operational Excellence best practice?",
      options: [
        "Performing operations as code (Infrastructure as Code) and automating changes.",
        "Avoiding monitoring to reduce overhead.",
        "Running annual instead of frequent deployments.",
        "Documenting nothing to keep things lean.",
      ],
      correct: 0,
      explanation:
        "Operational Excellence best practices include performing operations as code (IaC), making frequent small reversible changes, refining procedures, anticipating failure, and learning from operational events.",
    },
    {
      id: "cc-q17",
      question:
        "Which AWS pricing fundamental states that AWS reduces prices as it grows in scale?",
      options: [
        "Pay-as-you-go",
        "Save when you reserve",
        "Pay less per unit by using more",
        "Pay less as AWS grows",
      ],
      correct: 3,
      explanation:
        "AWS has four pricing fundamentals: pay-as-you-go, save when you reserve (RIs / Savings Plans), pay less per unit when using more (volume discounts), and pay less as AWS grows (price reductions over time).",
    },
    {
      id: "cc-q18",
      question:
        "What does the term \"undifferentiated heavy lifting\" mean in cloud computing?",
      options: [
        "Tasks that provide direct business value but require manual effort.",
        "Routine infrastructure tasks (racking servers, patching OS, capacity planning) that don't differentiate the business — best offloaded to the cloud provider.",
        "Tasks that only large enterprises perform.",
        "Tasks that require specialized weight-lifting equipment.",
      ],
      correct: 1,
      explanation:
        "Undifferentiated heavy lifting refers to routine infrastructure work (provisioning, patching, networking, hardware management) that doesn't differentiate a business from competitors. Cloud lets companies offload it and focus on what matters.",
    },
    {
      id: "cc-q19",
      question:
        "What is the difference between high availability and fault tolerance?",
      options: [
        "They mean exactly the same thing.",
        "High availability minimizes downtime; fault tolerance allows continued operation even when components fail (typically zero downtime).",
        "Fault tolerance only applies to databases.",
        "High availability is achieved by running on a single AZ.",
      ],
      correct: 1,
      explanation:
        "High availability means the system stays operational with minimal downtime (e.g., quick failover). Fault tolerance is stronger — the system continues operating without interruption even when components fail, often via redundancy.",
    },
    {
      id: "cc-q20",
      question:
        "Which of the following is the BEST example of cloud scalability?",
      options: [
        "Buying more on-premises servers next quarter.",
        "Using Auto Scaling to add EC2 instances as demand grows.",
        "Migrating all workloads to a single instance.",
        "Manually emailing IT to increase capacity.",
      ],
      correct: 1,
      explanation:
        "Auto Scaling automatically adjusts capacity based on demand — a textbook example of cloud scalability.",
    },
    {
      id: "cc-q21",
      question:
        "Which Well-Architected pillar focuses on preventing financial waste through right-sizing and matching supply with demand?",
      options: [
        "Operational Excellence",
        "Reliability",
        "Cost Optimization",
        "Performance Efficiency",
      ],
      correct: 2,
      explanation:
        "Cost Optimization focuses on running systems at the lowest price point: right-sizing, using managed services, monitoring spend, and matching supply with demand.",
    },
    {
      id: "cc-q22",
      question:
        "Which is a key characteristic of cloud computing per the NIST definition that AWS aligns with?",
      options: [
        "Manual provisioning by an administrator only.",
        "On-demand self-service — a consumer can provision capabilities without human interaction with each service provider.",
        "Fixed pricing for unlimited usage.",
        "Single-tenant infrastructure for every customer.",
      ],
      correct: 1,
      explanation:
        "On-demand self-service is one of the five essential characteristics of cloud computing: customers can provision resources automatically without requiring human interaction with the service provider.",
    },
    {
      id: "cc-q23",
      question:
        "Which is true about AWS Edge Locations?",
      options: [
        "They are the same as Availability Zones.",
        "They are used by services like Amazon CloudFront and Route 53 to deliver content with low latency to end users globally.",
        "They are only used for backup storage.",
        "They host customer EC2 instances.",
      ],
      correct: 1,
      explanation:
        "Edge Locations are AWS Points of Presence (PoPs) used by content delivery (CloudFront), DNS (Route 53), and other edge services to cache content close to users for low latency.",
    },
    {
      id: "cc-q24",
      question:
        "Which AWS pillar covers protecting data, systems, and assets while delivering business value through risk assessments and mitigation?",
      options: ["Reliability", "Security", "Performance Efficiency", "Cost Optimization"],
      correct: 1,
      explanation:
        "The Security pillar covers protecting information, systems, and assets while delivering business value through risk assessments and mitigation strategies — including identity, detection, infrastructure protection, data protection, and incident response.",
    },
    {
      id: "cc-q25",
      question:
        "A company wants to provision compute resources only when needed and pay for execution time in milliseconds. Which AWS service category is this?",
      options: ["IaaS", "Serverless / FaaS", "On-premises", "PaaS"],
      correct: 1,
      explanation:
        "Serverless (Function-as-a-Service) like AWS Lambda lets customers run code on-demand and pay only for execution time, with no servers to manage. This is the most extreme form of pay-per-use.",
    },
  ],
};
