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
        "AWS Well-Architected Framework ปัจจุบันประกอบด้วยกี่ pillars?",
      options: ["4 pillars", "5 pillars", "6 pillars", "7 pillars"],
      correct: 2,
      explanation:
        "Well-Architected Framework เริ่มต้นด้วย 5 pillars และเพิ่ม Sustainability เป็นเสาที่ 6 ในปี 2021 ปัจจุบันจึงมีทั้งหมด 6 pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability",
    },
    {
      id: "wa-q2",
      question:
        "เสาหลัก (pillar) ที่ 6 ที่ AWS เพิ่มเข้ามาในปี 2021 คือเสาใด?",
      options: [
        "Reliability",
        "Sustainability",
        "Performance Efficiency",
        "Cost Optimization",
      ],
      correct: 1,
      explanation:
        "Sustainability เป็นเสาที่ 6 ที่ AWS เพิ่มเข้ามาในปี 2021 มุ่งเน้นการลดผลกระทบต่อสิ่งแวดล้อมจากการรัน workload — best practices ได้แก่ เข้าใจ impact, ตั้ง sustainability goals, maximize utilization, ใช้ managed services และ adopt hardware/software ที่ efficient",
    },
    {
      id: "wa-q3",
      question:
        "ข้อใดเป็น best practice ของ Reliability pillar?",
      options: [
        "Hard-code Access Keys ลงใน application",
        "Scale vertically (เพิ่ม CPU/RAM ของ server เดิม) เป็นหลัก",
        "Test recovery procedures, auto recovery และ scale horizontally",
        "ลด availability zone ให้เหลือเพียง zone เดียวเพื่อความง่าย",
      ],
      correct: 2,
      explanation:
        "Reliability pillar เน้น test recovery procedures, automatically recover จาก failure, scale horizontally เพื่อ availability, stop guessing capacity และ manage change ผ่าน automation — ส่วน hard-code keys, scale vertically อย่างเดียว และใช้ AZ เดียว ขัดกับ best practices ของ Reliability",
    },
    {
      id: "wa-q4",
      question:
        "ใน AWS Cloud Adoption Framework (CAF) perspective ใดที่ดูแลเรื่อง roles, responsibilities, skills และ training?",
      options: ["Business", "Governance", "People", "Operations"],
      correct: 2,
      explanation:
        "People perspective ใน CAF ดูแลเรื่อง roles, responsibilities, skills และ training — เตรียมคนให้พร้อมทำงานบน cloud และ plan การเปลี่ยนแปลง culture ส่วน Business = business strategy, Governance = organizational/project structure, Operations = ongoing operations และ monitoring",
    },
    {
      id: "wa-q5",
      question: "AWS Right Sizing คืออะไร?",
      options: [
        "การเพิ่มจำนวน instance ให้มากที่สุดเพื่อ performance สูงสุด",
        "การ match instance type/size ให้ตรงกับ workload เพื่อ performance + capacity ที่ราคาต่ำที่สุด",
        "การย้าย workload ไปยัง region ที่ใหญ่ที่สุด",
        "การซื้อ Reserved Instances ทั้งหมดล่วงหน้า 3 ปีโดยไม่ต้องวิเคราะห์",
      ],
      correct: 1,
      explanation:
        "Right Sizing คือการ match instance types/sizes ให้ตรงกับ workload performance + capacity requirements ที่ราคาต่ำที่สุด — ใช้ Cost Explorer และ Compute Optimizer ดู recommendations แล้ว stop unused, downsize หรือ upgrade instance ตามความเหมาะสม ควรทำ right sizing ก่อนซื้อ Reserved Instances",
    },
  ],
};
