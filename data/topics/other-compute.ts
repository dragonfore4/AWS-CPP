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
      id: "oc-q1",
      question:
        "What is the role of Amazon ECR in AWS containers?",
      options: [
        "A managed Kubernetes control plane.",
        "A fully managed Docker container image registry.",
        "A container orchestrator.",
        "A serverless function service.",
      ],
      correct: 1,
      explanation:
        "Amazon ECR (Elastic Container Registry) is a fully managed Docker / OCI container image registry — used by ECS, EKS, Lambda, and on-premises containers to pull images.",
    },
    {
      id: "oc-q2",
      question:
        "Which AWS service is a serverless container engine that runs containers WITHOUT provisioning EC2 instances?",
      options: [
        "Amazon ECS on EC2",
        "Amazon EKS on EC2",
        "AWS Fargate",
        "AWS Batch",
      ],
      correct: 2,
      explanation:
        "AWS Fargate is a serverless container engine for ECS and EKS. You define the container; Fargate runs it without managing servers. Pay per vCPU/RAM per second.",
    },
    {
      id: "oc-q3",
      question:
        "Which is AWS's managed Kubernetes service?",
      options: [
        "Amazon ECS",
        "Amazon EKS (Elastic Kubernetes Service)",
        "AWS Fargate only",
        "Amazon Lambda",
      ],
      correct: 1,
      explanation:
        "Amazon EKS is the managed Kubernetes service — runs upstream Kubernetes; integrates with AWS networking, IAM, ALB, and storage. Can run on EC2 or Fargate.",
    },
    {
      id: "oc-q4",
      question:
        "What is AWS Lambda?",
      options: [
        "A managed virtual machine service.",
        "A serverless compute service that runs code in response to events; pay per invocation and execution duration.",
        "A managed database.",
        "A container registry.",
      ],
      correct: 1,
      explanation:
        "AWS Lambda is serverless compute — you upload code, define a trigger, and Lambda runs the code on demand. Pay only for execution time (rounded to ms) and number of invocations.",
    },
    {
      id: "oc-q5",
      question:
        "Which is a typical use case for AWS Lambda?",
      options: [
        "Running a 24/7 monolithic database.",
        "Event-driven processing — e.g., S3 object upload triggers image resize, API Gateway request triggers backend logic, scheduled cron-like jobs.",
        "Running a 6-month batch ML training job.",
        "Hosting a stateful WebSocket server with sticky sessions.",
      ],
      correct: 1,
      explanation:
        "Lambda is ideal for short-running, event-driven workloads — S3 / DynamoDB streams / API Gateway / EventBridge / SNS / SQS triggers, or scheduled tasks. Max execution = 15 minutes.",
    },
    {
      id: "oc-q6",
      question:
        "What is the maximum execution time for an AWS Lambda function?",
      options: ["1 minute", "5 minutes", "15 minutes", "1 hour"],
      correct: 2,
      explanation:
        "AWS Lambda functions can run for up to 15 minutes per invocation. Longer-running tasks should use ECS, EC2, Batch, or Step Functions.",
    },
    {
      id: "oc-q7",
      question:
        "Which AWS service is BEST to run large-scale, parallel batch computing jobs (e.g., simulations, scientific computing)?",
      options: [
        "AWS Lambda",
        "AWS Batch",
        "Amazon EC2 manually",
        "AWS Step Functions",
      ],
      correct: 1,
      explanation:
        "AWS Batch is a managed batch computing service that schedules and runs batch jobs on EC2 / Fargate / Spot — automatically provisions compute. Designed for HPC, scientific, and ML batch workloads.",
    },
    {
      id: "oc-q8",
      question:
        "Which service lets you orchestrate multiple Lambda / ECS / API calls into a workflow with retries and parallel branches?",
      options: [
        "AWS Step Functions",
        "Amazon SWF",
        "AWS Batch",
        "Amazon SNS",
      ],
      correct: 0,
      explanation:
        "AWS Step Functions is a serverless workflow orchestrator using state machines (Standard or Express). Visual designer, automatic retries, error handling, parallel branches, and integration with 200+ AWS services.",
    },
    {
      id: "oc-q9",
      question:
        "What is AWS App Runner?",
      options: [
        "A managed Kubernetes service.",
        "A fully managed service to deploy containerized web apps and APIs without managing infrastructure.",
        "A serverless function service.",
        "A container registry.",
      ],
      correct: 1,
      explanation:
        "AWS App Runner is a fully managed service to deploy containerized web applications and APIs from a container image or source code — handles building, deploying, scaling, and load balancing.",
    },
    {
      id: "oc-q10",
      question:
        "Which AWS service is a 100% managed virtual desktop (DaaS)?",
      options: [
        "Amazon WorkSpaces",
        "Amazon AppStream 2.0",
        "Amazon EC2",
        "Amazon Workspaces Web",
      ],
      correct: 0,
      explanation:
        "Amazon WorkSpaces provides cloud-based persistent Windows or Linux desktops — accessible from any device. Pay monthly or per usage.",
    },
    {
      id: "oc-q11",
      question:
        "Which AWS service streams a single application (rather than a full desktop) to remote users?",
      options: [
        "Amazon WorkSpaces",
        "Amazon AppStream 2.0",
        "Amazon EC2",
        "AWS Lambda",
      ],
      correct: 1,
      explanation:
        "Amazon AppStream 2.0 streams individual applications (Windows or Linux) to a web browser — useful for delivering desktop apps without installation.",
    },
    {
      id: "oc-q12",
      question:
        "Which serverless feature describes the time it takes Lambda to initialize a new container for a function (not yet warm)?",
      options: [
        "Cold start",
        "Warm-up",
        "Hot path",
        "Concurrency limit",
      ],
      correct: 0,
      explanation:
        "A Lambda cold start is the time to initialize a new execution environment (download code, start runtime, run init code). Subsequent invocations on the warm container are much faster.",
    },
    {
      id: "oc-q13",
      question:
        "Which Lambda feature reduces cold start latency by keeping containers initialized and ready to respond?",
      options: [
        "Provisioned Concurrency",
        "Reserved Concurrency",
        "Lambda Layers",
        "Lambda@Edge",
      ],
      correct: 0,
      explanation:
        "Provisioned Concurrency keeps a specified number of execution environments initialized and warm — eliminates cold starts for predictable workloads, at additional cost.",
    },
    {
      id: "oc-q14",
      question:
        "Which AWS service is used to package and reuse common code/dependencies across Lambda functions?",
      options: [
        "Lambda Layers",
        "Lambda Aliases",
        "Lambda Versions",
        "Lambda@Edge",
      ],
      correct: 0,
      explanation:
        "Lambda Layers let you package libraries, custom runtimes, or other shared content. Up to 5 layers per function. Promotes reuse and reduces deployment package sizes.",
    },
    {
      id: "oc-q15",
      question:
        "Which AWS service is a hybrid edge computing platform that brings AWS infrastructure to your data center?",
      options: [
        "AWS Outposts",
        "AWS Wavelength",
        "AWS Local Zones",
        "AWS Snowball",
      ],
      correct: 0,
      explanation:
        "AWS Outposts is a fully managed rack of AWS infrastructure delivered to the customer's data center — provides EC2, EBS, RDS, EKS, and other AWS services on-premises with the same APIs as the cloud.",
    },
    {
      id: "oc-q16",
      question:
        "Which AWS edge offering is BEST for ultra-low-latency 5G mobile applications?",
      options: [
        "AWS Outposts",
        "AWS Wavelength",
        "AWS Local Zones",
        "Amazon CloudFront",
      ],
      correct: 1,
      explanation:
        "AWS Wavelength embeds AWS compute and storage within telecommunications providers' 5G networks at the edge — single-digit millisecond latency for mobile devices.",
    },
    {
      id: "oc-q17",
      question:
        "Which AWS edge solution extends an AWS Region to metros with low-latency requirements (e.g., Los Angeles)?",
      options: [
        "AWS Local Zones",
        "AWS Wavelength",
        "AWS Outposts",
        "Amazon Lightsail",
      ],
      correct: 0,
      explanation:
        "AWS Local Zones place AWS compute, storage, database, and other services close to large population, industry, and IT centers — ideal for low-latency applications, content creation, ML inference, etc.",
    },
    {
      id: "oc-q18",
      question:
        "What is Amazon Lightsail?",
      options: [
        "A managed Kubernetes service.",
        "A simple, easy-to-use cloud platform with bundled VMs, databases, and load balancers at predictable monthly pricing.",
        "A container registry.",
        "A serverless function service.",
      ],
      correct: 1,
      explanation:
        "Amazon Lightsail is AWS's offering for users who want simplicity — pre-configured VMs, databases, networking, with predictable monthly bills. Targeted at small business / dev / test workloads.",
    },
    {
      id: "oc-q19",
      question:
        "Which is the difference between ECS and EKS?",
      options: [
        "ECS is Kubernetes; EKS is AWS-proprietary.",
        "ECS is AWS's proprietary container orchestrator; EKS is managed upstream Kubernetes.",
        "Both run only on EC2.",
        "ECS supports Windows; EKS does not.",
      ],
      correct: 1,
      explanation:
        "ECS is AWS's proprietary container orchestrator, simpler to use and tightly integrated with AWS. EKS runs upstream Kubernetes — same API as on-premises K8s clusters.",
    },
    {
      id: "oc-q20",
      question:
        "Which is the difference between ECS launch type EC2 and Fargate?",
      options: [
        "There is no difference.",
        "EC2 launch type means you manage the underlying EC2 instances; Fargate launch type means AWS manages all infrastructure (serverless containers).",
        "Fargate launch type is only for Linux.",
        "EC2 launch type costs more.",
      ],
      correct: 1,
      explanation:
        "ECS EC2 launch type runs containers on EC2 instances you provision and manage. Fargate runs containers serverlessly — AWS manages the underlying infrastructure entirely.",
    },
    {
      id: "oc-q21",
      question:
        "Which AWS service is used to run code at AWS edge locations (CloudFront), close to end users?",
      options: [
        "Lambda@Edge or CloudFront Functions",
        "AWS Lambda standard",
        "AWS Outposts",
        "AWS Local Zones",
      ],
      correct: 0,
      explanation:
        "Lambda@Edge runs Node.js/Python at CloudFront edge locations (4 trigger points). CloudFront Functions are even lighter (JavaScript only, viewer events) for ultra-low-latency request manipulation.",
    },
    {
      id: "oc-q22",
      question:
        "Which is true about AWS Lambda pricing?",
      options: [
        "You pay a flat monthly fee regardless of usage.",
        "You pay per invocation + GB-seconds of memory × execution duration. Free tier: 1M requests + 400,000 GB-seconds per month.",
        "Lambda is always free.",
        "You pay per CPU-hour reserved.",
      ],
      correct: 1,
      explanation:
        "AWS Lambda pricing is based on the number of requests and the GB-seconds of memory consumed during execution. The Always Free tier includes 1M requests and 400,000 GB-seconds monthly.",
    },
    {
      id: "oc-q23",
      question:
        "Which compute option is BEST for a long-running, predictable, 24/7 web application with steady traffic?",
      options: [
        "AWS Lambda",
        "EC2 with Reserved Instances or Savings Plan",
        "AWS Batch",
        "AWS Glue",
      ],
      correct: 1,
      explanation:
        "For steady 24/7 workloads, EC2 (or Fargate) with Reserved Instances or Savings Plans typically offers the lowest cost. Lambda is best for spiky, event-driven, short-running tasks.",
    },
    {
      id: "oc-q24",
      question:
        "Which AWS service helps run distributed batch processing across many EC2/Fargate instances?",
      options: [
        "AWS Batch",
        "AWS Lambda",
        "Amazon S3",
        "AWS Step Functions",
      ],
      correct: 0,
      explanation:
        "AWS Batch dynamically provisions compute capacity (EC2 / Spot / Fargate) and submits jobs across many machines — ideal for parallel batch jobs at scale.",
    },
    {
      id: "oc-q25",
      question:
        "Which is the BEST description of serverless?",
      options: [
        "There are no servers anywhere.",
        "There are still servers, but the customer doesn't manage them — AWS handles provisioning, scaling, patching, and pays per use.",
        "Serverless means free.",
        "Serverless only refers to Lambda.",
      ],
      correct: 1,
      explanation:
        "Serverless means the cloud provider manages servers entirely; customers focus on code and configuration. Examples: Lambda, Fargate, DynamoDB on-demand, S3, Aurora Serverless, EventBridge, SNS, SQS.",
    },
  ],
};
