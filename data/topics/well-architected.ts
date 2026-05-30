import { TopicData } from "@/types/topic";

export const wellArchitected: TopicData = {
  slug: "well-architected",
  title: "Well-Architected Framework",
  subtitle: "6 Pillars & Cloud Adoption Framework",
  accent: "emerald",
  emoji: "\u{1F3DB}\u{FE0F}",
  category: "Architecture & Strategy",
  description:
    "AWS Well-Architected Framework คือชุด best practices สำหรับการออกแบบและดำเนินงานระบบบน cloud ให้ reliable, secure, efficient และ cost-effective ประกอบด้วย 6 เสาหลัก (เพิ่ม Sustainability ในปี 2021) และมี Cloud Adoption Framework (CAF) ช่วยให้องค์กรวางแผนการย้ายสู่ cloud ได้ครบทุกมิติ",
  keyPoints: [
    "6 Pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability",
    "AWS Well-Architected Tool — review workload เทียบกับ best practices ฟรี",
    "Cloud Adoption Framework (CAF) มี 6 perspectives: Business, People, Governance, Platform, Security, Operations",
    "Right Sizing — เลือก instance type/size ให้ตรงกับ workload เพื่อประหยัด cost",
  ],
  sections: [
    {
      id: "intro-architecting",
      title: "Introduction to Architecting on AWS",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Well-Architected Framework</strong> คือชุด <em>best practices</em> ที่ AWS รวบรวมจากประสบการณ์ของ solutions architects หลายพันคน เพื่อช่วย customers ออกแบบและดำเนินงานระบบบน cloud ให้ <strong>reliable, secure, efficient, cost-effective</strong> และ sustainable",
        },
        {
          type: "list",
          items: [
            "เริ่มต้นด้วย <strong>5 pillars</strong> และเพิ่มเสาที่ 6 คือ <strong>Sustainability</strong> ในปี <strong>2021</strong>",
            "ใช้เป็นกรอบในการ <em>review</em> workload — หาจุดอ่อน วางแผนปรับปรุง",
            "ไม่ใช่ checklist เดียวจบ — เป็น iterative process: design → measure → improve",
            "เหมาะกับทั้ง workload ใหม่ที่กำลังออกแบบ และ workload เดิมที่อยู่บน cloud แล้ว",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "ทำไมต้อง Well-Architected?",
          text: "ช่วยให้คุณตัดสินใจสถาปัตยกรรมโดยมีข้อมูลรองรับ ลดความเสี่ยง สร้างระบบที่ตอบโจทย์ business ได้จริง และคุยกับทีมในภาษาเดียวกัน",
        },
      ],
    },
    {
      id: "six-pillars",
      title: "The Six Pillars of Well-Architected Framework",
      content: [
        {
          type: "paragraph",
          text: "Framework แบ่งเป็น <strong>6 pillars</strong> ที่แต่ละด้านมี <em>design principles</em> และ best practices ของตัวเอง",
        },
        {
          type: "grid",
          items: [
            {
              title: "1. Operational Excellence",
              description:
                "Run + monitor systems เพื่อ deliver business value และปรับปรุงต่อเนื่อง — Best practices: <strong>Infrastructure as Code (IaC)</strong>, frequent small reversible changes, refine procedures บ่อย ๆ, anticipate failure และเรียนรู้จาก failures",
            },
            {
              title: "2. Security",
              description:
                "ปกป้อง information + systems — Best practices: <strong>strong identity foundation</strong> (IAM), traceability, security ทุก layer, automate security best practices, ปกป้อง data ทั้ง <strong>in transit + at rest</strong>, เตรียมพร้อม security events",
            },
            {
              title: "3. Reliability",
              description:
                "ทำให้ workload ทำงานได้ถูกต้อง consistent ตามที่คาดหวัง — Best practices: <strong>test recovery procedures</strong>, automatically recover, scale <strong>horizontally</strong> เพื่อ availability, stop guessing capacity, manage change ผ่าน automation",
            },
            {
              title: "4. Performance Efficiency",
              description:
                "ใช้ IT + computing resources อย่างมีประสิทธิภาพ — Best practices: democratize advanced tech, go global in minutes, ใช้ <strong>serverless</strong>, experiment บ่อย, mechanical sympathy (เลือก tech ให้ตรงกับ goal)",
            },
            {
              title: "5. Cost Optimization",
              description:
                "หลีกเลี่ยง cost ที่ไม่จำเป็น — Best practices: <strong>cloud financial management</strong>, expenditure + usage awareness, ใช้ resource ที่คุ้มค่า, manage demand + supply, optimize ตลอดเวลา",
            },
            {
              title: "6. Sustainability (เพิ่มปี 2021)",
              description:
                "ลดผลกระทบต่อสิ่งแวดล้อมจาก workload — Best practices: เข้าใจ impact, ตั้ง <strong>sustainability goals</strong>, maximize utilization, adopt hardware/software ที่ efficient, ใช้ <strong>managed services</strong>, ลด downstream impact",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "วิธีจำง่าย ๆ",
          text: "<strong>O-S-R-P-C-S</strong>: Operations, Security, Reliability, Performance, Cost, Sustainability — เสาแรกคือ \"ทำงานอย่างไร\" และเสาสุดท้ายคือ \"ทำเพื่ออนาคต\"",
        },
      ],
    },
    {
      id: "well-architected-tool",
      title: "AWS Well-Architected Tool",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Well-Architected Tool</strong> เป็นเครื่องมือ <em>ฟรี</em> บน AWS Console ที่ช่วยให้คุณ review workload เทียบกับ best practices ของ Well-Architected Framework",
        },
        {
          type: "list",
          items: [
            "Define your <strong>workload</strong> ในระบบ",
            "ตอบคำถามเป็นชุด ๆ ตาม pillars ทั้ง 6",
            "ระบบจะวิเคราะห์และให้ <strong>improvement plan</strong> พร้อม priorities",
            "Track ความคืบหน้าได้ตลอดเวลา และทำซ้ำ (re-review) เมื่อ workload เปลี่ยน",
            "เข้าใช้งานได้ที่ <em>console.aws.amazon.com/wellarchitected</em>",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "ใช้ฟรี ไม่มีค่าใช้จ่าย",
          text: "Well-Architected Tool ไม่มีค่าใช้จ่ายเพิ่มเติม — เหมาะสำหรับทำ self-review เป็นระยะหรือเตรียมตัวก่อนคุยกับ AWS Solutions Architect",
        },
      ],
    },
    {
      id: "caf",
      title: "AWS Cloud Adoption Framework (CAF)",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Cloud Adoption Framework (CAF)</strong> ช่วยให้องค์กรออกแบบและ execute แผนการย้ายสู่ cloud อย่างครบถ้วน — ไม่ใช่แค่เรื่อง technology แต่รวมถึง <em>คน กระบวนการ และธุรกิจ</em>",
        },
        {
          type: "paragraph",
          text: "CAF ประกอบด้วย <strong>6 perspectives</strong> ที่ครอบคลุมทุกมิติของการย้ายสู่ cloud:",
        },
        {
          type: "grid",
          items: [
            {
              title: "1. Business",
              description:
                "การจัดวาง <strong>business strategy</strong> ให้สอดคล้องกับ cloud — สร้าง business case, วัด ROI, เชื่อม IT กับเป้าหมายธุรกิจ",
            },
            {
              title: "2. People",
              description:
                "<strong>Roles, responsibilities, skills, training</strong> — เตรียมคนให้พร้อมทำงานใน cloud, plan การเปลี่ยนแปลง culture และ upskilling",
            },
            {
              title: "3. Governance",
              description:
                "Organizational + project structure — กำหนด <strong>portfolio management</strong>, program/project management, business performance measurement",
            },
            {
              title: "4. Platform",
              description:
                "Infrastructure design + delivery — ออกแบบ platform บน cloud, สร้าง compute, network, data services ที่รองรับ workload ต่าง ๆ",
            },
            {
              title: "5. Security",
              description:
                "<strong>Security controls, IAM, compliance</strong> — กำหนด security model, จัดการ identity, ปฏิบัติตาม regulation/compliance ที่เกี่ยวข้อง",
            },
            {
              title: "6. Operations",
              description:
                "<strong>Ongoing operations, monitoring, performance</strong> — กระบวนการดูแล workload หลัง go-live, incident management, observability",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Well-Architected vs CAF",
          text: "<strong>Well-Architected</strong> = ออกแบบ <em>workload</em> ให้ดี (technical) | <strong>CAF</strong> = ออกแบบ <em>การย้ายสู่ cloud ทั้งองค์กร</em> (strategic) — ใช้คู่กันได้",
        },
      ],
    },
    {
      id: "right-sizing",
      title: "AWS Right Sizing",
      content: [
        {
          type: "paragraph",
          text: "<strong>Right Sizing</strong> คือกระบวนการ <em>match instance types/sizes ให้ตรงกับ workload</em> ทั้งด้าน performance และ capacity ที่ราคาต่ำที่สุด — เป็นกลยุทธ์สำคัญใน Cost Optimization pillar",
        },
        {
          type: "list",
          items: [
            "<strong>Stop unused</strong> resources — ปิด instances ที่ไม่ใช้งาน",
            "<strong>Downsize</strong> — ลดขนาด instance ถ้า utilization ต่ำ",
            "<strong>Upgrade</strong> — เปลี่ยน generation ใหม่เพื่อ performance ที่ดีกว่าในราคาเท่าเดิม (เช่น m5 → m6i)",
            "ทำ right sizing ก่อนซื้อ <strong>Reserved Instances</strong> หรือ Savings Plans",
            "Right sizing เป็น <em>iterative process</em> — ทำซ้ำเมื่อ workload เปลี่ยน",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "AWS Cost Explorer",
              description:
                "วิเคราะห์ cost + usage history ดู right sizing recommendations สำหรับ EC2 instances",
            },
            {
              title: "AWS Compute Optimizer",
              description:
                "ML-based service ที่แนะนำ optimal AWS resources (EC2, EBS, Lambda, ASG) จากการวิเคราะห์ utilization metrics",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "อย่า over-provision",
          text: "การ provision ใหญ่เกินจริงเป็นสาเหตุหลักของ cloud waste — ใช้ Cost Explorer + Compute Optimizer review เป็นประจำ",
        },
      ],
    },
    {
      id: "trusted-advisor-wa",
      title: "AWS Trusted Advisor & Well-Architected",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Trusted Advisor</strong> เป็น automated service ที่ตรวจสอบ AWS environment ของคุณและให้ recommendations โดย <em>map ตรงกับ pillars</em> ของ Well-Architected Framework",
        },
        {
          type: "grid",
          items: [
            {
              title: "Security",
              description:
                "ตรวจ MFA on root, security groups เปิดกว้าง, IAM use, S3 bucket permissions",
            },
            {
              title: "Performance",
              description:
                "ตรวจ service limits, EC2 / EBS optimization, over-utilized instances",
            },
            {
              title: "Cost Optimization",
              description:
                "ตรวจ idle resources, low-utilization EC2, unassociated EIPs, Reserved Instance opportunities",
            },
            {
              title: "Fault Tolerance",
              description:
                "ตรวจ EBS snapshots, ELB optimization, ASG resources, Multi-AZ configuration",
            },
            {
              title: "Service Limits",
              description:
                "เตือนเมื่อใช้งานใกล้ถึง <strong>service quotas</strong> ของแต่ละ region",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "ใช้คู่กับ Well-Architected Tool",
          text: "Trusted Advisor = automated checks (เร็ว, ต่อเนื่อง) | Well-Architected Tool = deep review โดยตอบคำถาม — ใช้ทั้งคู่ได้ครบทุกมุม",
        },
      ],
    },
    {
      id: "acceptable-use",
      title: "AWS Acceptable Use Policy (AUP)",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Acceptable Use Policy</strong> คือกฎที่ customer ทุกคนต้องปฏิบัติตามเมื่อใช้บริการ AWS — กำหนดสิ่งที่ <em>ห้ามทำ</em> บน AWS",
        },
        {
          type: "list",
          items: [
            "ห้าม <strong>illegal/harmful activities</strong> — กิจกรรมผิดกฎหมายหรือเป็นอันตราย",
            "ห้าม <strong>security violations</strong> — เช่น unauthorized access, hacking, vulnerability scanning โดยไม่ได้รับอนุญาต",
            "ห้าม <strong>network abuse</strong> — เช่น DDoS, port scanning, intentional interference",
            "ห้าม <strong>email abuse</strong> — spam, unsolicited mass email, phishing",
            "ห้าม <strong>copyright violations</strong> — เผยแพร่เนื้อหาที่ละเมิดลิขสิทธิ์",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "การฝ่าฝืน AUP",
          text: "AWS อาจระงับหรือยุติการให้บริการได้หาก customer ไม่ปฏิบัติตาม AUP — อ่านฉบับเต็มที่ aws.amazon.com/aup",
        },
      ],
    },
    {
      id: "service-catalog",
      title: "AWS Service Catalog",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Service Catalog</strong> ช่วยให้องค์กร <em>สร้างและจัดการ catalog</em> ของ AWS services / products ที่อนุญาตให้คนในองค์กร deploy ได้ — เป็นการรวมศูนย์การจัดการ resources",
        },
        {
          type: "list",
          items: [
            "Admin สร้าง <strong>portfolio</strong> ของ products (เช่น EC2 + RDS templates ที่ผ่าน compliance)",
            "End-users ใน organization สามารถ <em>self-service</em> deploy ได้จาก catalog เท่านั้น",
            "ช่วย <strong>governance</strong> — บังคับใช้ standard configuration",
            "ช่วย <strong>compliance</strong> — ทุก resource ที่ deploy ผ่าน catalog เป็นไปตาม policy",
            "ช่วย <strong>cost control</strong> — จำกัดประเภท / ขนาดของ resource ที่ deploy ได้",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Use Case: Standard EC2",
              description:
                "สร้าง product \"Standard Web Server\" ใน catalog — dev team deploy ได้ใน 1 click ด้วย config ที่ผ่าน security review แล้ว",
            },
            {
              title: "Use Case: Compliance",
              description:
                "บังคับให้ทุก database deploy ผ่าน catalog เพื่อให้แน่ใจว่ามี encryption, backup, tagging ครบถ้วน",
            },
          ],
        },
      ],
    },
    {
      id: "summary",
      title: "Summary",
      content: [
        {
          type: "paragraph",
          text: "สรุป <strong>Architecting & Ecosystem</strong> บน AWS:",
        },
        {
          type: "list",
          items: [
            "<strong>Well-Architected Framework</strong> = 6 pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, <em>Sustainability (เพิ่มปี 2021)</em>",
            "<strong>Well-Architected Tool</strong> = ฟรี ใช้ review workload เทียบ best practices",
            "<strong>Cloud Adoption Framework (CAF)</strong> = 6 perspectives: Business, People, Governance, Platform, Security, Operations",
            "<strong>Right Sizing</strong> = match instance ให้ตรง workload — ใช้ Cost Explorer + Compute Optimizer",
            "<strong>Trusted Advisor</strong> = automated checks ที่ map ตรงกับ Well-Architected pillars",
            "<strong>Acceptable Use Policy (AUP)</strong> = กฎที่ customer ต้องทำตามเวลาใช้ AWS",
            "<strong>Service Catalog</strong> = central catalog ของ products เพื่อ governance, compliance, cost control",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "ใน CLF-C02 จะเจอเรื่องอะไร?",
          text: "เน้น 6 pillars (รู้ชื่อและความหมาย), เสาที่ 6 คือ Sustainability, CAF 6 perspectives, ความแตกต่าง Well-Architected vs CAF, และ Trusted Advisor map กับ pillars อย่างไร",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "wa-q1",
      question:
        "How many pillars does the AWS Well-Architected Framework currently have?",
      options: ["4", "5", "6", "7"],
      correct: 2,
      explanation:
        "AWS Well-Architected Framework has 6 pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability (added in 2021).",
    },
    {
      id: "wa-q2",
      question:
        "Which Well-Architected pillar focuses on the ability to run workloads efficiently and recover quickly from failures?",
      options: [
        "Reliability",
        "Performance Efficiency",
        "Operational Excellence",
        "Cost Optimization",
      ],
      correct: 0,
      explanation:
        "The Reliability pillar covers the ability to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions like misconfigurations or transient network issues.",
    },
    {
      id: "wa-q3",
      question:
        "Which Well-Architected pillar focuses on running and monitoring systems to deliver business value, and continually improving processes?",
      options: [
        "Operational Excellence",
        "Performance Efficiency",
        "Reliability",
        "Cost Optimization",
      ],
      correct: 0,
      explanation:
        "Operational Excellence focuses on running, monitoring, and continually improving systems and processes — including automation, frequent small changes, anticipating failure, and learning from operational events.",
    },
    {
      id: "wa-q4",
      question:
        "Which Well-Architected pillar covers protecting information, systems, and assets while delivering business value?",
      options: [
        "Security",
        "Reliability",
        "Operational Excellence",
        "Performance Efficiency",
      ],
      correct: 0,
      explanation:
        "The Security pillar covers protecting data, systems, and assets — design principles include strong identity foundation, traceability, applying security at all layers, automating best practices, encryption, and incident preparation.",
    },
    {
      id: "wa-q5",
      question:
        "Which Well-Architected pillar focuses on using IT and computing resources efficiently, and selecting the right resource types and sizes?",
      options: [
        "Performance Efficiency",
        "Cost Optimization",
        "Sustainability",
        "Operational Excellence",
      ],
      correct: 0,
      explanation:
        "Performance Efficiency focuses on using resources efficiently, selecting the right types/sizes, monitoring performance, and making informed scaling decisions.",
    },
    {
      id: "wa-q6",
      question:
        "Which Well-Architected pillar focuses on running systems at the lowest price point that delivers value?",
      options: [
        "Cost Optimization",
        "Operational Excellence",
        "Performance Efficiency",
        "Sustainability",
      ],
      correct: 0,
      explanation:
        "Cost Optimization focuses on cost-aware design — right-sizing, using managed services, matching supply with demand, and analyzing/attributing expenditure.",
    },
    {
      id: "wa-q7",
      question:
        "Which Well-Architected pillar was added most recently and focuses on minimizing environmental impact?",
      options: [
        "Sustainability",
        "Security",
        "Reliability",
        "Operational Excellence",
      ],
      correct: 0,
      explanation:
        "The Sustainability pillar (added in 2021) focuses on minimizing the environmental impacts of running cloud workloads — energy efficiency, hardware efficiency, and choosing efficient services.",
    },
    {
      id: "wa-q8",
      question:
        "Which AWS tool helps you review your workloads against Well-Architected best practices?",
      options: [
        "AWS Well-Architected Tool",
        "AWS Trusted Advisor",
        "AWS Config",
        "AWS Inspector",
      ],
      correct: 0,
      explanation:
        "The AWS Well-Architected Tool is a free service in the console — guides you through a workload review against the framework's pillars, identifies issues, and produces an improvement plan.",
    },
    {
      id: "wa-q9",
      question:
        "Which Operational Excellence design principle encourages making CHANGES gradually?",
      options: [
        "Big-bang releases.",
        "Make frequent, small, reversible changes.",
        "Avoid all changes once in production.",
        "Manual changes only.",
      ],
      correct: 1,
      explanation:
        "Operational Excellence design principles include: perform operations as code, make frequent small reversible changes, refine procedures frequently, anticipate failure, and learn from operational events.",
    },
    {
      id: "wa-q10",
      question:
        "Which Security design principle encourages logging and detection?",
      options: [
        "Implement a strong identity foundation.",
        "Enable traceability — log, monitor, and audit actions/changes in real time.",
        "Eliminate all logging to reduce overhead.",
        "Use only on-premises security.",
      ],
      correct: 1,
      explanation:
        "Security design principles include: strong identity foundation, enable traceability (CloudTrail, CloudWatch, Config), apply security at all layers, automate best practices, protect data in transit and at rest, prepare for security events, keep people away from data.",
    },
    {
      id: "wa-q11",
      question:
        "Which Reliability design principle covers automated recovery from failure?",
      options: [
        "Automatically recover from failure (e.g., monitor + automated remediation).",
        "Manually restart everything when something fails.",
        "Avoid failure analysis.",
        "Use single AZ deployments.",
      ],
      correct: 0,
      explanation:
        "Reliability design principles: automatically recover from failure, test recovery procedures, scale horizontally to increase availability, stop guessing capacity, manage changes via automation.",
    },
    {
      id: "wa-q12",
      question:
        "Which Performance Efficiency design principle covers experimentation?",
      options: [
        "Avoid experiments in the cloud.",
        "Experiment more often — virtual/automated testing of new services and features is cheap.",
        "Stick with on-premises forever.",
        "Use the largest instance for everything.",
      ],
      correct: 1,
      explanation:
        "Performance Efficiency principles: democratize advanced technologies, go global in minutes, use serverless architectures, experiment more often (cheap), use mechanical sympathy.",
    },
    {
      id: "wa-q13",
      question:
        "Which Cost Optimization design principle is BEST described by 'Adopt a consumption model'?",
      options: [
        "Pay for capacity you might use later.",
        "Pay only for the resources you actually consume; turn off resources when not needed.",
        "Buy lots of long-term commitments.",
        "Pay annually upfront.",
      ],
      correct: 1,
      explanation:
        "Cost Optimization principles: implement Cloud Financial Management, adopt a consumption model (pay for what you use), measure overall efficiency, stop spending on undifferentiated heavy lifting, analyze and attribute expenditure.",
    },
    {
      id: "wa-q14",
      question:
        "Which Sustainability design principle is BEST described by 'maximize hardware utilization'?",
      options: [
        "Run idle resources.",
        "Maximize utilization of provisioned resources by right-sizing, using managed services, and consolidating workloads.",
        "Provision more than needed.",
        "Use older hardware.",
      ],
      correct: 1,
      explanation:
        "Sustainability principles: understand impact, establish goals, maximize utilization, anticipate and adopt new (more efficient) hardware/software, use managed services, reduce downstream impact.",
    },
    {
      id: "wa-q15",
      question:
        "What is the AWS Cloud Adoption Framework (AWS CAF)?",
      options: [
        "A guide that helps organizations migrate to AWS, covering 6 perspectives: Business, People, Governance, Platform, Security, Operations.",
        "A type of EC2 instance.",
        "A managed database.",
        "A backup service.",
      ],
      correct: 0,
      explanation:
        "AWS CAF organizes guidance into 6 perspectives: Business, People, Governance (business capability) and Platform, Security, Operations (technical capability) — to help orgs plan/execute their cloud journey.",
    },
    {
      id: "wa-q16",
      question:
        "What are the 7 R's of cloud migration?",
      options: [
        "Rehost, Replatform, Repurchase, Refactor, Retire, Retain, Relocate",
        "Read, Replicate, Restart, Replace, Repair, Rebuild, Retire",
        "Run, Retest, Reduce, Renew, Restart, Reset, Restore",
        "Just rehost",
      ],
      correct: 0,
      explanation:
        "The 7 R's: Rehost (lift-and-shift), Replatform (lift-tinker-shift), Repurchase (move to SaaS), Refactor/Re-architect, Retire, Retain (keep on-prem for now), Relocate (VMware to VMware Cloud on AWS).",
    },
    {
      id: "wa-q17",
      question:
        "Which is the BEST description of 'Rehost' (lift-and-shift)?",
      options: [
        "Re-architecting the application as serverless.",
        "Moving the application to AWS as-is, with minimal changes — typically using AWS Application Migration Service.",
        "Replacing it with a SaaS solution.",
        "Keeping it on-premises.",
      ],
      correct: 1,
      explanation:
        "Rehost (lift-and-shift) means moving the application from on-premises to AWS with minimal changes (just enough to run on AWS). Fastest migration, but doesn't fully use cloud benefits.",
    },
    {
      id: "wa-q18",
      question:
        "Which is the BEST description of 'Replatform' (lift, tinker, and shift)?",
      options: [
        "Move to AWS with some optimizations (e.g., move from self-managed MySQL to RDS) without changing the application's core architecture.",
        "Complete re-architecture.",
        "Keep on-premises.",
        "Buy a SaaS replacement.",
      ],
      correct: 0,
      explanation:
        "Replatform = move with some cloud-native optimizations (e.g., MySQL on EC2 → RDS managed MySQL, file system → S3) but no fundamental architecture change.",
    },
    {
      id: "wa-q19",
      question:
        "Which Well-Architected pillar would consider the use of Auto Scaling Groups to handle variable load?",
      options: [
        "Reliability and Performance Efficiency",
        "Only Security",
        "Only Operational Excellence",
        "None — ASG isn't part of any pillar",
      ],
      correct: 0,
      explanation:
        "Auto Scaling addresses Reliability (recover from failures, match capacity) AND Performance Efficiency (right-size capacity in real time). Cost Optimization too (only pay for what you need).",
    },
    {
      id: "wa-q20",
      question:
        "Which Well-Architected pillar addresses choosing the right region/instance to minimize latency for users?",
      options: [
        "Performance Efficiency",
        "Cost Optimization",
        "Reliability",
        "Security",
      ],
      correct: 0,
      explanation:
        "Performance Efficiency includes selecting the right resources (regions, instance types) and design choices (caching, CDNs, serverless) to deliver the best performance for users.",
    },
    {
      id: "wa-q21",
      question:
        "Which is the BEST way to apply Cost Optimization in AWS?",
      options: [
        "Use Reserved Instances / Savings Plans for steady workloads, Spot for fault-tolerant, right-size, monitor usage with Cost Explorer, and use managed/serverless services to avoid undifferentiated work.",
        "Only use On-Demand for everything.",
        "Always provision the largest instance.",
        "Avoid monitoring.",
      ],
      correct: 0,
      explanation:
        "Cost Optimization combines: right-sizing, RIs/Savings Plans for steady workloads, Spot for flexible workloads, monitoring (Cost Explorer/Budgets), managed services, and removing waste.",
    },
    {
      id: "wa-q22",
      question:
        "Which AWS feature is BEST aligned with the Reliability pillar's principle of 'Test recovery procedures'?",
      options: [
        "AWS Fault Injection Service (formerly Fault Injection Simulator)",
        "Amazon CloudFront",
        "AWS Trusted Advisor",
        "AWS WAF",
      ],
      correct: 0,
      explanation:
        "AWS Fault Injection Service (FIS) lets you inject faults into AWS workloads — chaos engineering — to test resilience and recovery procedures, aligned with the Reliability pillar.",
    },
    {
      id: "wa-q23",
      question:
        "Which Well-Architected pillar would address using lightweight, ARM-based Graviton instances for better price-performance and energy efficiency?",
      options: [
        "Cost Optimization, Performance Efficiency, AND Sustainability",
        "Only Sustainability",
        "Only Security",
        "Only Operational Excellence",
      ],
      correct: 0,
      explanation:
        "Graviton (ARM) instances deliver better price-performance (Cost Optimization, Performance Efficiency) AND lower energy use per workload (Sustainability) — touching multiple pillars.",
    },
    {
      id: "wa-q24",
      question:
        "Which is true about the Well-Architected Review process?",
      options: [
        "It costs $10,000 per review.",
        "It is FREE — provided as a self-service tool, with optional involvement of AWS Solutions Architects (Enterprise Support).",
        "It is required before any AWS deployment.",
        "It is only for Enterprise customers.",
      ],
      correct: 1,
      explanation:
        "The Well-Architected Review is free (using the Well-Architected Tool) and self-service. Enterprise Support customers can also engage AWS Solutions Architects for review assistance.",
    },
    {
      id: "wa-q25",
      question:
        "Which Well-Architected pillar emphasizes using IAM, encryption, and traceability?",
      options: [
        "Security",
        "Reliability",
        "Operational Excellence",
        "Cost Optimization",
      ],
      correct: 0,
      explanation:
        "Security pillar emphasizes strong identity foundation (IAM), traceability (CloudTrail, Config), defense in depth, encryption, automation, and preparation for incidents.",
    },
  ],
};
