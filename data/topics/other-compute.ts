import { TopicData } from "@/types/topic";

export const otherCompute: TopicData = {
  slug: "other-compute",
  title: "Other Compute",
  subtitle: "Lambda, ECS, Fargate, Lightsail & more",
  accent: "amber",
  emoji: "\u26a1",
  category: "Compute",
  description:
    "หมวด Other Compute Services รวบรวม compute options นอกเหนือจาก EC2 — ตั้งแต่ container services (ECS, Fargate, EKS, ECR), serverless (Lambda, API Gateway), batch processing (AWS Batch) ไปจนถึง Lightsail สำหรับ beginners ครอบคลุมทุกแบบที่ข้อสอบ CLF-C02 ต้องรู้",
  keyPoints: [
    "Containers — Docker, ECS, Fargate (serverless), EKS (Kubernetes), ECR (registry)",
    "Serverless — Lambda (FaaS, max 15 นาที), API Gateway, Fargate, Aurora Serverless",
    "AWS Batch — รัน batch jobs ใหญ่ๆ บน EC2/Spot, ไม่มี time limit (ต่างจาก Lambda)",
    "Lightsail — บริการง่ายๆ ราคาถูก คาดเดาได้ เหมาะกับ beginners และ simple workloads",
  ],
  sections: [
    {
      id: "docker-overview",
      title: "Docker Overview",
      content: [
        {
          type: "paragraph",
          text: "<strong>Docker</strong> คือ software platform สำหรับ deploy applications ใน <em>containers</em> — package app + dependencies เข้าด้วยกัน ทำให้รันได้ทุกที่บนทุก OS โดยไม่มีปัญหา compatibility",
        },
        {
          type: "list",
          items: [
            "รันได้ทุก OS (Linux, Windows, Mac) — ไม่มีปัญหา compatibility ระหว่างเครื่อง",
            "<strong>Predictable</strong> — ทำงานเหมือนกันทุกที่ ลดปัญหา \"it works on my machine\"",
            "ทำงานน้อยลง, maintain ง่ายขึ้น, deploy เร็วขึ้น",
            "ใช้ได้กับทุก programming language และทุก OS",
            "เหมาะกับ microservices architecture และ modern app deployment",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Docker Repositories",
              description:
                "<strong>Public</strong>: Docker Hub (https://hub.docker.com) — public registry ที่ใหญ่ที่สุด | <strong>Private</strong>: Amazon ECR (Elastic Container Registry) — private registry บน AWS",
            },
            {
              title: "Docker vs Virtual Machine (VM)",
              description:
                "Docker containers <em>share kernel และ resources</em> กับ host OS — เบา เร็ว รัน containers ได้หลายตัวบน server เดียว มี efficiency มากกว่า VMs ที่ต้องรัน full OS แยก",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Container vs VM",
          text: "VM ต้องรัน guest OS เต็มตัว → หนัก, boot ช้า, รันได้ไม่กี่ตัวต่อ server | Container share OS kernel → เบา, start เป็นวินาที, รันได้นับร้อยต่อ server",
        },
      ],
    },
    {
      id: "ecs",
      title: "Amazon ECS (Elastic Container Service)",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon ECS</strong> คือ container orchestration service ของ AWS — ใช้ launch Docker containers บน AWS โดย AWS จัดการ start/stop containers ให้",
        },
        {
          type: "list",
          items: [
            "Launch Docker containers บน AWS = launch <strong>ECS Tasks</strong>",
            "ใน <em>EC2 Launch Type</em>: <strong>เราเป็นคน provision และ maintain EC2 instances</strong> ที่รัน containers",
            "AWS จัดการ <strong>start/stop containers</strong> ให้บน infrastructure ของเรา",
            "Integrate กับ ALB (Application Load Balancer) สำหรับกระจาย traffic ไปยัง containers",
            "Integrate กับ IAM, CloudWatch, ECR และ AWS services อื่นๆ",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "ความรับผิดชอบใน ECS (EC2 Launch Type)",
          text: "เรา = ดูแล EC2 instances (provision, patch, scale) | AWS = ดูแล container lifecycle (start, stop, schedule) → ยังไม่ใช่ \"serverless\" สมบูรณ์ ต้องใช้ Fargate ถ้าต้องการ serverless",
        },
      ],
    },
    {
      id: "fargate",
      title: "AWS Fargate",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Fargate</strong> คือ launch type ที่ให้รัน Docker containers บน AWS โดย<strong>ไม่ต้องจัดการ infrastructure เลย</strong> — เป็น <em>serverless</em> สำหรับ containers",
        },
        {
          type: "list",
          items: [
            "<strong>Serverless</strong> — ไม่มี EC2 instances ให้ดูแล, ไม่ต้อง provision/patch/scale",
            "AWS จะรัน containers ให้ตาม <strong>CPU + RAM</strong> ที่เรากำหนด",
            "ง่ายกว่า ECS + EC2 มาก — เหมาะกับทีมที่ไม่อยากดูแล server",
            "จ่ายเฉพาะ resource ที่ container ใช้จริง (per-second billing)",
            "ใช้ได้กับทั้ง ECS และ EKS",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "ข้อสอบ CLF-C02",
          text: "ถ้าโจทย์บอก \"run containers without managing servers\" หรือ \"serverless containers\" → Fargate | ถ้าต้อง control OS / GPU / custom AMI → ECS + EC2 Launch Type",
        },
      ],
    },
    {
      id: "ecr",
      title: "Amazon ECR (Elastic Container Registry)",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon ECR</strong> คือ <em>private Docker image repository</em> บน AWS — ใช้เก็บ Docker images ก่อนนำไป deploy ผ่าน ECS หรือ EKS",
        },
        {
          type: "list",
          items: [
            "<strong>Private repository</strong> สำหรับ Docker images (มี public option ด้วย — ECR Public)",
            "<strong>Fully integrated กับ ECS</strong> — pull images ได้เร็วเพราะอยู่ใน AWS network",
            "<strong>Backed by Amazon S3</strong> — เก็บ images บน S3 (durable + encrypted at rest)",
            "<strong>Access ควบคุมด้วย IAM</strong> — security ดี, กำหนดได้ว่าใคร push/pull images ได้",
            "รองรับ image scanning หา vulnerabilities อัตโนมัติ",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "ECR = Docker Hub ของ AWS",
          text: "เหมือน Docker Hub แต่อยู่บน AWS — private, secure (IAM), เร็ว (อยู่ใกล้ ECS/EKS) และใช้ S3 เก็บ images เบื้องหลัง",
        },
      ],
    },
    {
      id: "eks",
      title: "Amazon EKS (Elastic Kubernetes Service)",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon EKS</strong> คือ <em>managed Kubernetes</em> service บน AWS — ช่วยรัน Kubernetes clusters โดยไม่ต้อง manage <strong>control plane</strong> เอง",
        },
        {
          type: "list",
          items: [
            "<strong>Managed Kubernetes</strong> — AWS จัดการ control plane (API server, etcd, scheduler) ให้",
            "<strong>Compatible กับ on-premises Kubernetes</strong> 100% — migrate มาได้ง่าย",
            "เหมาะเมื่อ <strong>ทีมรู้จัก Kubernetes อยู่แล้ว</strong> หรือต้องการ multi-cloud portability",
            "รองรับทั้ง <strong>EC2 Nodes</strong> (จัดการเอง/managed groups) และ <strong>Fargate</strong> (serverless)",
            "ใช้ K8s ecosystem ทั้งหมด: kubectl, Helm, add-ons ต่างๆ",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "EKS vs ECS",
              description:
                "EKS = open-source Kubernetes (portable, K8s ecosystem) | ECS = AWS proprietary (ง่ายกว่า, integrate AWS ดี) — ทั้งคู่รองรับ Fargate",
            },
            {
              title: "เมื่อไรเลือก EKS",
              description:
                "ใช้ K8s อยู่แล้ว, ต้องการ multi-cloud, มีคน expertise K8s, ต้องการ migrate from on-prem Kubernetes",
            },
          ],
        },
      ],
    },
    {
      id: "serverless-concept",
      title: "Serverless Concept",
      content: [
        {
          type: "paragraph",
          text: "<strong>Serverless</strong> = paradigm ที่ developer <em>ไม่ต้อง manage servers</em> เลย — แค่ deploy code/functions แล้ว AWS จัดการที่เหลือ",
        },
        {
          type: "list",
          items: [
            "<strong>เริ่มต้นจาก FaaS (Function as a Service)</strong> เช่น AWS Lambda",
            "ปัจจุบันรวม managed databases, messaging, storage ที่เป็น serverless ทั้งหมด",
            "<strong>Serverless ไม่ได้แปลว่าไม่มี server</strong> — แค่ developer ไม่ต้อง manage หรือ provision เอง",
            "AWS จัดการ scaling, patching, availability ให้อัตโนมัติ",
            "Pay per use — ไม่ใช้ก็ไม่จ่าย (ส่วนใหญ่)",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "AWS Serverless Services ที่เคยเรียน",
              description:
                "<strong>S3</strong> (storage) | <strong>DynamoDB</strong> (NoSQL DB) | <strong>Fargate</strong> (containers) | <strong>Lambda</strong> (functions) | <strong>Aurora Serverless</strong> (relational DB)",
            },
            {
              title: "ไม่ใช่ Serverless",
              description:
                "EC2, RDS (ปกติ), ECS + EC2 Launch Type, EKS + EC2 Nodes — services เหล่านี้ยังต้อง provision/manage instances",
            },
          ],
        },
      ],
    },
    {
      id: "lambda",
      title: "AWS Lambda",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Lambda</strong> คือ <em>virtual functions</em> — รัน code โดยไม่มี servers, รันสั้นๆ (max 15 นาที), ทำงาน on-demand, scaling อัตโนมัติ",
        },
        {
          type: "grid",
          items: [
            {
              title: "Amazon EC2",
              description:
                "Virtual servers ใน cloud — <strong>ทำงานตลอดเวลา</strong>, sized ตาม RAM/CPU, scaling = manual (เพิ่ม/ลด instances เอง หรือ ASG)",
            },
            {
              title: "AWS Lambda",
              description:
                "Virtual functions — <strong>on-demand</strong>, run สั้นๆ (max 15 นาที), <strong>scaling อัตโนมัติ</strong>, ไม่มี server ให้ดูแล",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>Pay per request + compute time</strong> — Free tier: 1M requests/เดือน + 400,000 GB-seconds ฟรี",
            "Integrated กับ AWS services เกือบทั้งหมด",
            "<strong>Event-driven</strong> — function ทำงานเมื่อมี event เข้ามาเท่านั้น",
            "รองรับหลาย languages: Node.js, Python, Java, C#, Go, Ruby, Custom Runtime",
            "Monitoring ผ่าน <strong>CloudWatch</strong>",
            "RAM สูงสุด <strong>10GB</strong> per function — ยิ่ง RAM เยอะ → ได้ CPU + network bandwidth เพิ่มขึ้นด้วย",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Common Lambda Triggers",
              description:
                "API Gateway, S3 (events), DynamoDB Streams, CloudWatch Events / EventBridge, SQS, SNS, Kinesis",
            },
            {
              title: "Common Use Cases",
              description:
                "Serverless API backends, image/file processing on S3 upload, scheduled cron jobs, real-time stream processing, event-driven automation",
            },
          ],
        },
      ],
    },
    {
      id: "api-gateway",
      title: "Amazon API Gateway",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon API Gateway</strong> คือ fully managed service สำหรับ <em>create, publish, maintain, monitor และ secure APIs</em> ที่ scale ใหญ่ — เป็น serverless และ scalable",
        },
        {
          type: "list",
          items: [
            "<strong>Serverless + scalable</strong> — ไม่ต้อง manage server",
            "รองรับ <strong>RESTful APIs</strong> และ <strong>WebSocket APIs</strong> (real-time)",
            "ฟีเจอร์ครบ: <strong>security, authentication, API throttling, API keys, monitoring</strong>",
            "ใช้ร่วมกับ Lambda เป็น <strong>serverless REST API</strong> ที่นิยมที่สุด",
            "Integrate ได้กับ Lambda, EC2, on-prem services, AWS services อื่นๆ",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Use Case ยอดนิยม",
          text: "Client → API Gateway → Lambda → DynamoDB = serverless web app stack ที่นิยมที่สุด ไม่ต้อง manage server เลย scale ได้ไม่จำกัด",
        },
      ],
    },
    {
      id: "batch",
      title: "AWS Batch",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Batch</strong> คือ fully managed service สำหรับรัน <em>batch processing jobs</em> ที่ scale ใหญ่ (รันได้ 100,000+ jobs)",
        },
        {
          type: "list",
          items: [
            "<strong>Batch job</strong> = job ที่มี <strong>start และ end</strong> ชัดเจน (ไม่ใช่ continuous service)",
            "AWS Batch <strong>launch EC2 instances หรือ Spot Instances</strong> ให้แบบ dynamic ตามจำนวน jobs",
            "<strong>Provisions CPU + memory</strong> ที่เหมาะสมกับแต่ละ job อัตโนมัติ",
            "Jobs ถูก<strong>กำหนดเป็น Docker images</strong> และรันบน ECS",
            "เราแค่ submit jobs — AWS จัดการ scheduling, scaling, retry ให้",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "AWS Batch",
              description:
                "<strong>ไม่มี time limit</strong> | runtime อะไรก็ได้ (ผ่าน Docker) | ใช้ <strong>EBS / Instance Store</strong> | รันบน <strong>EC2-based</strong> infrastructure",
            },
            {
              title: "AWS Lambda",
              description:
                "<strong>มี time limit (15 นาที)</strong> | runtime จำกัด (ที่ AWS รองรับ) | temporary disk เท่านั้น | <strong>Serverless</strong> สมบูรณ์",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Batch vs Lambda",
          text: "ถ้า job รันนานกว่า 15 นาที, ต้องใช้ runtime พิเศษ, หรือต้อง storage ขนาดใหญ่ → AWS Batch | ถ้าเป็น short event-driven function → Lambda",
        },
      ],
    },
    {
      id: "lightsail",
      title: "Amazon Lightsail",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Lightsail</strong> คือบริการที่รวม virtual servers + storage + databases + networking ในที่เดียว ราคาถูกและ <em>predictable</em> — ง่ายกว่า EC2/RDS/ELB/EBS มาก เหมาะกับ <strong>beginners</strong>",
        },
        {
          type: "list",
          items: [
            "<strong>Low + predictable pricing</strong> — ราคาเริ่มต้นไม่กี่ดอลลาร์/เดือน",
            "Simpler กว่าใช้ EC2 + RDS + ELB + EBS แยก",
            "เหมาะกับ <strong>beginners</strong> ที่ยังไม่คุ้นกับ AWS services",
            "มี <strong>templates</strong> สำเร็จรูป: LAMP, Nginx, MEAN, Node.js, WordPress, Magento, Joomla และอื่นๆ",
            "<strong>High Availability ได้</strong> แต่<strong>ไม่มี auto-scaling</strong>",
            "Limited integrations กับ AWS services อื่นๆ (ไม่เหมือน EC2 ที่ integrate ลึก)",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Use Cases",
              description:
                "Simple web applications, websites (เช่น WordPress), dev/test environments, small business apps, การเรียนรู้ AWS เบื้องต้น",
            },
            {
              title: "ไม่เหมาะกับ",
              description:
                "Production workloads ขนาดใหญ่ที่ต้อง auto-scaling, high traffic, deep AWS integrations → ใช้ EC2 + Auto Scaling แทน",
            },
          ],
        },
      ],
    },
    {
      id: "comparison",
      title: "ECS vs EKS vs Fargate Comparison",
      content: [
        {
          type: "paragraph",
          text: "AWS มี container services หลายตัว ต้องแยกให้ออกว่าตัวไหนเป็น orchestrator, ตัวไหน serverless, และเลือกใช้ตอนไหน:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Amazon ECS",
              description:
                "<strong>Container orchestrator</strong>: ใช่ (AWS proprietary) | <strong>Control plane</strong>: AWS manages | <strong>Launch types</strong>: EC2 + Fargate | <strong>เลือกเมื่อ</strong>: ใช้ AWS เป็นหลัก, ต้องการความง่าย, ไม่มี K8s expertise",
            },
            {
              title: "Amazon EKS",
              description:
                "<strong>Container orchestrator</strong>: ใช่ (Kubernetes) | <strong>Control plane</strong>: AWS manages K8s control plane | <strong>Launch types</strong>: EC2 Nodes + Fargate | <strong>เลือกเมื่อ</strong>: ใช้ K8s อยู่แล้ว, ต้องการ multi-cloud portability",
            },
            {
              title: "AWS Fargate",
              description:
                "<strong>Container orchestrator</strong>: ไม่ใช่ (เป็น compute engine) | <strong>Control plane</strong>: ไม่มี (serverless) | <strong>Launch types</strong>: ใช้ร่วมกับ ECS หรือ EKS | <strong>เลือกเมื่อ</strong>: ต้องการ serverless containers, ไม่อยาก manage EC2",
            },
            {
              title: "Amazon ECR",
              description:
                "<strong>Container orchestrator</strong>: ไม่ใช่ (เป็น registry) | ใช้เก็บ Docker images | ใช้ร่วมกับ ECS หรือ EKS | Backed by S3, controlled by IAM",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "อย่าสับสน",
          text: "<strong>Fargate ≠ orchestrator</strong> → เป็น serverless compute engine ที่ทำงานร่วมกับ ECS หรือ EKS<br><strong>ECS</strong> = AWS's own orchestrator<br><strong>EKS</strong> = managed Kubernetes",
        },
      ],
    },
    {
      id: "lambda-summary",
      title: "Lambda Summary",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Lambda</strong> = serverless Function as a Service (FaaS) — สรุปประเด็นหลักที่ข้อสอบชอบถาม:",
        },
        {
          type: "list",
          items: [
            "<strong>Serverless FaaS</strong> — focus ที่ code, ไม่ดูแล server",
            "<strong>Billing</strong> = (compute time) × (RAM allocated) + จำนวน requests — pay per use จริงๆ",
            "<strong>Language support</strong>: Node.js, Python, Java, C#, Go, Ruby + Custom Runtime",
            "<strong>15-minute limit</strong> — ถ้านานกว่านี้ใช้ ECS/Fargate/Batch แทน",
            "<strong>Use cases ยอดฮิต</strong>: S3 thumbnail generation, serverless cron (CloudWatch Events), REST API ที่อยู่หลัง API Gateway",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "ข้อสอบ CLF-C02",
          text: "เห็น keyword \"serverless function\" / \"event-driven\" / \"pay per execution\" / \"S3 trigger\" → Lambda เกือบแน่นอน",
        },
      ],
    },
    {
      id: "summary",
      title: "Other Compute Summary",
      content: [
        {
          type: "paragraph",
          text: "สรุป Other Compute Services ทั้งหมดที่ต้องรู้สำหรับ CLF-C02 — แต่ละ service มีจุดแข็งและ use case ต่างกัน เลือกให้เหมาะกับ workload",
        },
        {
          type: "grid",
          items: [
            {
              title: "ECS",
              description:
                "AWS-native container orchestration — รัน Docker containers บน EC2 หรือ Fargate",
            },
            {
              title: "Fargate",
              description:
                "Serverless compute engine สำหรับ containers — ไม่ต้อง provision EC2 เอง",
            },
            {
              title: "EKS",
              description:
                "Managed Kubernetes — เหมาะกับทีมที่ใช้ K8s อยู่แล้วหรือต้องการ multi-cloud",
            },
            {
              title: "ECR",
              description:
                "Private Docker image registry บน AWS — backed by S3, controlled by IAM",
            },
            {
              title: "Lambda",
              description:
                "Serverless FaaS — รันสั้นๆ (max 15 นาที), event-driven, pay per execution",
            },
            {
              title: "API Gateway",
              description:
                "Managed REST/WebSocket APIs — มักใช้คู่ Lambda เป็น serverless API",
            },
            {
              title: "AWS Batch",
              description:
                "รัน batch jobs ขนาดใหญ่บน EC2/Spot ผ่าน Docker — <strong>ไม่จำกัดเวลา</strong>",
            },
            {
              title: "Lightsail",
              description:
                "บริการรวม VM + DB + networking ราคาถูก predictable เหมาะ beginners",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>Short event-driven function</strong> → Lambda",
            "<strong>Long-running batch jobs</strong> (>15 นาที) → AWS Batch",
            "<strong>Containers แบบ serverless</strong> → Fargate (กับ ECS หรือ EKS)",
            "<strong>ใช้ Kubernetes อยู่แล้ว</strong> → EKS",
            "<strong>AWS-native + ง่าย</strong> → ECS (EC2 หรือ Fargate launch type)",
            "<strong>Simple website / dev-test</strong> → Lightsail",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "ภาพรวม Compute Services บน AWS",
          text: "<strong>EC2</strong> = VMs, <strong>ECS/Fargate/EKS</strong> = containers, <strong>Lambda</strong> = functions, <strong>Batch</strong> = batch jobs, <strong>Lightsail</strong> = simple all-in-one — เลือกตาม workload (ขนาด, duration) และความต้องการ control เทียบกับ convenience",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "other-compute-q1",
      question:
        "Amazon ECR ทำหน้าที่อะไรในระบบ container ของ AWS?",
      options: [
        "รัน Docker containers แบบ serverless",
        "Private Docker image repository ที่ integrate กับ ECS, ใช้ S3 เป็น storage และควบคุมด้วย IAM",
        "Managed Kubernetes control plane",
        "Load balancer สำหรับกระจาย traffic ไปยัง containers",
      ],
      correct: 1,
      explanation:
        "ECR (Elastic Container Registry) คือ private Docker image repository บน AWS — fully integrated กับ ECS, backed by S3, ควบคุม access ด้วย IAM (security ดี) เหมือน Docker Hub แต่ private และอยู่บน AWS",
    },
    {
      id: "other-compute-q2",
      question:
        "ความแตกต่างหลักระหว่าง ECS EC2 Launch Type และ Fargate Launch Type คืออะไร?",
      options: [
        "EC2 Launch Type รันได้แค่ Linux ส่วน Fargate รันได้ทุก OS",
        "EC2 Launch Type ผู้ใช้ต้อง provision/maintain EC2 instances เอง ส่วน Fargate เป็น serverless ไม่ต้องดูแล infrastructure",
        "Fargate รัน containers ได้แค่ 1 ตัว แต่ EC2 Launch Type รันได้หลายตัว",
        "Fargate ใช้ Kubernetes ส่วน EC2 Launch Type ใช้ Docker Swarm",
      ],
      correct: 1,
      explanation:
        "EC2 Launch Type: เรา provision และดูแล EC2 instances เอง AWS แค่จัดการ container start/stop | Fargate: serverless ไม่ต้องดูแล server เลย แค่กำหนด CPU/RAM ที่ต้องการ AWS จัดการที่เหลือ",
    },
    {
      id: "other-compute-q3",
      question:
        "Amazon EKS คือบริการอะไร?",
      options: [
        "Managed service สำหรับรัน Docker Swarm บน AWS",
        "AWS proprietary container orchestration ที่ไม่เกี่ยวกับ open-source",
        "Managed Kubernetes service ที่ AWS ดูแล control plane ให้ compatible กับ on-prem K8s",
        "Container registry สำหรับเก็บ Docker images",
      ],
      correct: 2,
      explanation:
        "EKS (Elastic Kubernetes Service) เป็น managed Kubernetes บน AWS — AWS ดูแล control plane ให้ compatible กับ on-premises Kubernetes 100% เหมาะกับทีมที่ใช้ K8s อยู่แล้วหรือต้องการ multi-cloud portability",
    },
    {
      id: "other-compute-q4",
      question:
        "AWS Lambda function รันได้นานสูงสุดเท่าไหร่ต่อหนึ่ง execution?",
      options: [
        "5 นาที",
        "15 นาที",
        "1 ชั่วโมง",
        "ไม่จำกัดเวลา",
      ],
      correct: 1,
      explanation:
        "Lambda มี maximum execution time = 15 นาที (900 วินาที) ถ้า workload ใช้เวลานานกว่านี้ ต้องใช้ ECS, Fargate, AWS Batch หรือ EC2 แทน",
    },
    {
      id: "other-compute-q5",
      question:
        "ข้อใด <strong>ไม่ใช่</strong> serverless service บน AWS?",
      options: [
        "AWS Lambda",
        "Amazon DynamoDB",
        "AWS Fargate",
        "Amazon EC2",
      ],
      correct: 3,
      explanation:
        "EC2 ไม่ใช่ serverless — ผู้ใช้ต้อง provision, manage, patch instances เอง | Lambda, DynamoDB, Fargate, S3, Aurora Serverless ทั้งหมดเป็น serverless services ที่ AWS จัดการ infrastructure ให้",
    },
    {
      id: "other-compute-q6",
      question:
        "บริษัทต้องการสร้าง serverless REST API ที่ scale อัตโนมัติ ควรใช้ services ใดร่วมกัน?",
      options: [
        "EC2 + ALB",
        "API Gateway + Lambda",
        "ECS + Fargate + RDS",
        "Lightsail + DynamoDB",
      ],
      correct: 1,
      explanation:
        "Pattern serverless API ที่นิยมที่สุดคือ API Gateway (managed REST API) + Lambda (function เป็น backend logic) — ไม่ต้อง manage server, scale อัตโนมัติ, จ่ายตามใช้งาน มักใช้ร่วมกับ DynamoDB เป็น database",
    },
    {
      id: "other-compute-q7",
      question:
        "Lambda คิดค่าใช้จ่ายอย่างไร?",
      options: [
        "คิดเป็นรายเดือนคงที่ตาม plan ที่เลือก",
        "คิดตามจำนวน functions ที่สร้างไว้ ไม่ว่าจะรันหรือไม่",
        "คิดตามจำนวน requests + duration (compute time × RAM allocated เป็น GB-seconds) — Free tier 1M requests + 400k GB-seconds ต่อเดือน",
        "คิดตามจำนวน EC2 instances ที่ Lambda ใช้ background",
      ],
      correct: 2,
      explanation:
        "Lambda billing = จำนวน requests + duration (GB-seconds = RAM × execution time) | Free tier: 1 ล้าน requests/เดือน + 400,000 GB-seconds/เดือน ฟรีตลอดไป | ไม่มี invocation = ไม่เสียเงิน",
    },
    {
      id: "other-compute-q8",
      question:
        "บริษัทต้องการรัน batch processing job ที่ใช้เวลา 2 ชั่วโมง ควรเลือก service ใด?",
      options: [
        "AWS Lambda เพราะ serverless และถูกที่สุด",
        "AWS Batch เพราะไม่มี time limit รัน job ยาวๆ ได้",
        "API Gateway",
        "Amazon Lightsail",
      ],
      correct: 1,
      explanation:
        "Lambda มี time limit แค่ 15 นาที ทำงาน 2 ชั่วโมงไม่ได้ | AWS Batch ไม่มี time limit, รันบน EC2/Spot Instances แบบ dynamic, jobs เป็น Docker images — เหมาะสำหรับ long-running batch jobs",
    },
    {
      id: "other-compute-q9",
      question:
        "Amazon Lightsail เหมาะกับใครมากที่สุด?",
      options: [
        "Enterprise ขนาดใหญ่ที่ต้องการ deep AWS integration และ auto-scaling",
        "Beginners และ simple workloads (เช่น WordPress site, dev/test) ที่ต้องการราคาถูกและคาดเดาได้",
        "Workloads ที่ต้องการ GPU computing และ HPC",
        "Multi-region production applications ที่มี traffic สูงมาก",
      ],
      correct: 1,
      explanation:
        "Lightsail ออกแบบมาสำหรับ beginners และ simple use cases — ราคาถูก predictable, มี templates สำเร็จรูป (WordPress, LAMP, Node.js, ฯลฯ), HA ได้แต่ไม่มี auto-scaling, integration จำกัด เหมาะกับ web apps เล็กๆ และ dev/test",
    },
    {
      id: "other-compute-q10",
      question:
        "ข้อใดเป็น event source ที่สามารถ trigger AWS Lambda ได้?",
      options: [
        "เฉพาะ API Gateway เท่านั้น",
        "Lambda ไม่รองรับ trigger ต้อง invoke manually เท่านั้น",
        "S3 object upload, API Gateway requests, CloudWatch Events / EventBridge, DynamoDB Streams, SNS, SQS และอีกมากมาย",
        "เฉพาะ EC2 instance state changes",
      ],
      correct: 2,
      explanation:
        "Lambda เป็น event-driven — รองรับ triggers หลากหลาย: S3 events (เช่น object upload), API Gateway, CloudWatch Events / EventBridge (cron jobs), DynamoDB Streams, SNS, SQS, Kinesis และ AWS services อื่นๆ อีกมาก",
    },
  ],
};
