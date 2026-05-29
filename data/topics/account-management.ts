import { TopicData } from "@/types/topic";

export const accountManagement: TopicData = {
  slug: "account-management",
  title: "Account Management & Billing",
  subtitle: "Organizations, Pricing, Cost Tools & Support",
  accent: "yellow",
  emoji: "💰",
  category: "Cloud Financial Management",
  description:
    "หัวข้อใหญ่ที่รวม Account Management (Organizations, SCP, Control Tower), Pricing Models, Cost Tools (Cost Explorer, Budgets, Pricing Calculator), Savings Plans, Compute Optimizer, Trusted Advisor และ Support Plans — เป็นเซ็คชันที่ออกข้อสอบ CLF-C02 บ่อยมาก ต้องเข้าใจทั้งการจัดการ multi-account, การวางแผนต้นทุน, การติดตามค่าใช้จ่าย และระดับ support ที่เหมาะสม",
  keyPoints: [
    "AWS Organizations + SCP + Control Tower สำหรับจัดการหลาย accounts",
    "Pricing Models 4 แบบ + Free Tier + Savings Plans (สูงสุด 72%)",
    "Cost Tools: Pricing Calculator (plan), Cost Explorer (analyze), Budgets (alert)",
    "Support Plans 5 ระดับ: Basic → Developer → Business → Enterprise On-Ramp → Enterprise",
  ],
  sections: [
    {
      id: "organizations",
      title: "AWS Organizations",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Organizations</strong> เป็น <em>global service</em> ที่ใช้จัดการหลาย AWS accounts จากจุดเดียว — บัญชีหลักเรียก <strong>Master Account (Management Account)</strong> และบัญชีอื่นๆ คือ Member Accounts",
        },
        {
          type: "grid",
          items: [
            {
              title: "Consolidated Billing",
              description:
                "รวมบิลทุก accounts เป็นใบเดียว — single payment สำหรับทุก member accounts",
            },
            {
              title: "Pricing Benefits",
              description:
                "Aggregated usage ทุก account ทำให้ได้ volume discount เร็วขึ้น (EC2, S3 ฯลฯ)",
            },
            {
              title: "Pooling Reserved Instances",
              description:
                "RI sharing ข้าม accounts ใน Organization — ใช้ประโยชน์ RI ได้คุ้มที่สุด",
            },
            {
              title: "API + SCPs",
              description:
                "API automate การสร้าง account ใหม่ + restrict permissions ผ่าน Service Control Policies",
            },
          ],
        },
        {
          type: "list",
          items: [
            "Global service — ใช้ได้ทั่ว AWS regions",
            "Master Account = บัญชีที่สร้าง Organization เป็นคนจ่ายบิลรวม",
            "Member Accounts = บัญชีที่เข้าร่วม Organization",
            "ได้ Volume Discounts จาก aggregated usage (EC2, S3)",
            "Pool Reserved Instances ข้าม accounts ได้",
            "ใช้ API automate การสร้าง account ใหม่",
            "Restrict permission ของแต่ละ account/OU ด้วย SCPs",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Cost Benefits ที่สำคัญ",
          text: "Consolidated Billing (1 บิลรวม) + Pricing Benefits (volume discount จาก aggregated usage) + Pooling RI (RI sharing) — เป็น 3 ข้อดีหลักด้านต้นทุนของ AWS Organizations",
        },
      ],
    },
    {
      id: "multi-account-strategies",
      title: "Multi-Account Strategies",
      content: [
        {
          type: "paragraph",
          text: "การมีหลาย AWS accounts ช่วยแยกความรับผิดชอบและจัดการได้ดีกว่าใช้ account เดียว — มีหลายเหตุผลที่ควรแยก:",
        },
        {
          type: "list",
          items: [
            "แยกตาม department, cost center หรือ business unit",
            "แยก dev / test / prod environments",
            "แยกตาม regulatory restrictions (ใช้ SCP ควบคุม)",
            "Resource isolation (เช่น แยก VPC ให้ชัดเจน)",
            "Per-account service limits — แต่ละ account มี soft limits ของตัวเอง",
            "Isolated logging account สำหรับเก็บ logs ส่วนกลาง",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Multi Account",
              description:
                "แยก account ตาม environment/department — granularity สูง, security boundary ชัด, billing แยกตาม account",
            },
            {
              title: "One Account Multi VPC",
              description:
                "Account เดียวแต่หลาย VPC — จัดการง่ายกว่า แต่ blast radius ใหญ่กว่า ถ้า security incident จะกระทบหมด",
            },
          ],
        },
        {
          type: "list",
          items: [
            "ใช้ <strong>tagging standards</strong> ที่สม่ำเสมอ — เช่น Environment, Project, Owner",
            "เปิด <strong>CloudTrail</strong> ทุก account แล้วส่ง CloudWatch Logs ไป central logging account",
            "ใช้ <strong>Cost Allocation Tags</strong> ทุก resource เพื่อ track ค่าใช้จ่าย",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Best Practices",
          text: "Tagging + central CloudTrail + Cost Allocation Tags ตั้งแต่ day-1 ช่วยให้ governance + cost tracking ง่ายขึ้นมากเมื่อ scale",
        },
      ],
    },
    {
      id: "scp",
      title: "Service Control Policies (SCP)",
      content: [
        {
          type: "paragraph",
          text: "<strong>Service Control Policies (SCPs)</strong> เป็น whitelist หรือ blacklist ของ IAM actions ที่ใช้ที่ระดับ <strong>OU</strong> หรือ <strong>Account</strong> ภายใน Organization — กำหนด permission boundary สูงสุดที่ account นั้นทำได้",
        },
        {
          type: "list",
          items: [
            "Apply ที่ OU level หรือ Account level (ไม่ใช่ user/role)",
            "<strong>ไม่มีผล</strong> กับ Master Account (Management Account) — เสมอมี full access",
            "มีผลกับ <strong>Users + Roles + Root user</strong> ของ member account",
            "ไม่มีผลกับ service-linked roles",
            "ต้องมี <em>explicit Allow</em> — ไม่มี allow by default (deny by default)",
            "SCP restrict permission แต่ไม่ grant — ต้องมี IAM policy allow ร่วมด้วย",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Use Case: Restrict Services",
              description:
                "ห้าม account ใน OU Production ใช้ EMR, SageMaker หรือ services ที่ไม่อนุญาต",
            },
            {
              title: "Use Case: PCI Compliance",
              description:
                "บังคับให้ account ที่อยู่ใน PCI environment ใช้ได้เฉพาะ services + regions ที่ผ่าน compliance",
            },
            {
              title: "Use Case: Block Regions",
              description:
                "อนุญาตให้ใช้เฉพาะ regions ที่กำหนด เพื่อ data sovereignty",
            },
            {
              title: "Use Case: Force MFA",
              description:
                "Block actions ที่อันตราย ถ้า user ไม่ได้ login ด้วย MFA",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "จุดที่สอบบ่อย",
          text: "<strong>SCP ไม่มีผลกับ Master Account</strong> — apply ที่ <em>OU/Account</em> level (ไม่ใช่ user) — restrict ได้แต่ <em>grant ไม่ได้</em> — ต้องมี explicit Allow",
        },
      ],
    },
    {
      id: "control-tower",
      title: "AWS Control Tower",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Control Tower</strong> เป็นวิธีที่ง่ายที่สุดในการ set up และ govern multi-account AWS environment — สร้าง <em>landing zone</em> ที่ปลอดภัย ปฏิบัติตาม best practices ภายในไม่กี่คลิก",
        },
        {
          type: "list",
          items: [
            "สร้างอยู่ <strong>บน AWS Organizations</strong> — ใช้ Organizations เป็น foundation",
            "Automate การ setup ของ environment ภายในไม่กี่คลิก",
            "Ongoing policy management ผ่าน <strong>Guardrails</strong> (preventive + detective)",
            "Detect + remediate policy violations โดยอัตโนมัติ",
            "Monitor compliance ผ่าน interactive dashboard",
            "เหมาะกับองค์กรที่ต้องการ secure multi-account setup แต่ไม่อยากเขียนทุกอย่างเอง",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Control Tower vs Organizations",
          text: "<strong>AWS Organizations</strong> = service พื้นฐานสำหรับจัดการหลาย accounts — <strong>AWS Control Tower</strong> = solution ที่สร้างบน Organizations เพื่อทำ best-practice landing zone ให้อัตโนมัติ พร้อม guardrails และ dashboard",
        },
      ],
    },
    {
      id: "pricing-models",
      title: "AWS Pricing Models (4 แบบ)",
      content: [
        {
          type: "paragraph",
          text: "AWS มี <strong>4 pricing models</strong> หลักที่ทำให้ลูกค้าจ่ายตามลักษณะการใช้งาน:",
        },
        {
          type: "grid",
          items: [
            {
              title: "1. Pay as you go",
              description:
                "จ่ายเฉพาะที่ใช้จริง — agile, responsive ปรับเปลี่ยนได้ทันที ไม่มี upfront",
            },
            {
              title: "2. Save when you reserve",
              description:
                "Reserved Instances สำหรับ EC2, DynamoDB, ElastiCache, RDS, Redshift — ลด risk, manage budget, รองรับ long-term needs",
            },
            {
              title: "3. Pay less by using more",
              description:
                "Volume-based discount — ยิ่งใช้เยอะยิ่งถูก เช่น S3 storage tiers",
            },
            {
              title: "4. Pay less as AWS grows",
              description:
                "AWS ลดราคาเรื่อยๆ ตามเวลา — ลูกค้าได้ราคาต่ำลงโดยไม่ต้องทำอะไร",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "จำให้ได้",
          text: "Reserved Instances ใช้ได้กับ: EC2, DynamoDB, ElastiCache, RDS, Redshift — Reserved ลดราคาได้สูงสุด 72% เทียบกับ On-Demand",
        },
      ],
    },
    {
      id: "free-services-tier",
      title: "Free Services & Free Tier",
      content: [
        {
          type: "paragraph",
          text: "AWS มีหลายแบบของ \"ฟรี\" ที่ต้องแยกให้ออก:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Always Free Services",
              description:
                "บริการที่ฟรีตลอด — IAM, VPC, Consolidated Billing (ไม่มีค่าใช้จ่ายของ service เอง)",
            },
            {
              title: "Free Service, Pay for Resources",
              description:
                "Service ฟรี แต่จ่ายค่า AWS resources ที่สร้างจาก service นั้น — Elastic Beanstalk, CloudFormation, Auto Scaling Groups",
            },
            {
              title: "Free Tier (12 Months)",
              description:
                "EC2 t2.micro 750 hrs/month นาน 12 เดือน, S3 5GB, EBS, ELB, data transfer ฟรีบางส่วน",
            },
          ],
        },
        {
          type: "list",
          items: [
            "Always Free: IAM, VPC, Consolidated Billing — ไม่มีวันหมดอายุ",
            "Free Service (จ่ายเฉพาะ resources): Elastic Beanstalk, CloudFormation, ASG",
            "12 Months Free: EC2 t2.micro, S3 Standard 5GB, ELB 750 hrs, data transfer",
            "หลังครบ 12 เดือน — ต้องจ่ายค่าใช้บริการตาม pricing ปกติ",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "ข้อสอบชอบถาม",
          text: "EC2 t2.micro ฟรี <strong>12 เดือน</strong> หลังจากเปิด account (ไม่ใช่ตลอดไป) — <strong>IAM, VPC, Consolidated Billing</strong> = ฟรีตลอด (Always Free)",
        },
      ],
    },
    {
      id: "compute-pricing-ec2",
      title: "Compute Pricing — EC2",
      content: [
        {
          type: "paragraph",
          text: "EC2 charge ตามหลายปัจจัย:",
        },
        {
          type: "list",
          items: [
            "จำนวน instances",
            "Instance configuration: capacity, region, OS, instance type, instance size",
            "ELB running time + ปริมาณ data ที่ process",
            "Detailed monitoring (CloudWatch)",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "On-Demand",
              description:
                "Linux billed per second, Windows billed per hour — ไม่มี commitment เปิด-ปิดเมื่อไรก็ได้",
            },
            {
              title: "Reserved (1 / 3 yr)",
              description:
                "ลดสูงสุด 75% เทียบ On-Demand — commit 1 หรือ 3 ปี เหมาะกับ steady workload",
            },
            {
              title: "Spot Instances",
              description:
                "ลดสูงสุด 90% — ใช้ spare capacity แต่อาจถูกหยุดได้ทันที เหมาะกับ batch/fault-tolerant",
            },
            {
              title: "Dedicated Host",
              description:
                "Physical server เฉพาะให้เรา — เหมาะกับ compliance, software licensing per-socket/core",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Savings Plans",
          text: "Savings Plans เหมาะกับ <em>sustained usage</em> — commit $/hour เป็นเวลา 1 หรือ 3 ปี ได้ส่วนลดคล้าย Reserved Instances แต่ flexible กว่า",
        },
      ],
    },
    {
      id: "compute-pricing-lambda-ecs",
      title: "Compute Pricing — Lambda & ECS",
      content: [
        {
          type: "grid",
          items: [
            {
              title: "AWS Lambda",
              description:
                "จ่ายตาม number of calls + duration (memory × time) — ไม่ต้องจ่ายเมื่อไม่มี request",
            },
            {
              title: "ECS — EC2 Launch Type",
              description:
                "ECS service ฟรี — จ่ายเฉพาะ AWS resources (EC2 instances, EBS volumes) ที่ใช้",
            },
            {
              title: "ECS — Fargate Launch Type",
              description:
                "Serverless containers — จ่ายตาม vCPU + memory ที่ allocate (ไม่ต้องจัดการ EC2)",
            },
          ],
        },
        {
          type: "list",
          items: [
            "Lambda: pay per request + duration — มี free tier 1M requests/month + 400K GB-seconds",
            "ECS EC2 launch type: ECS เป็น free service, จ่ายเฉพาะ resources",
            "Fargate: pay per vCPU + memory ที่ allocate (per second)",
          ],
        },
      ],
    },
    {
      id: "storage-pricing-s3",
      title: "Storage Pricing — S3",
      content: [
        {
          type: "paragraph",
          text: "S3 charge ตามหลายปัจจัย — ต้องดูทั้ง storage class, ขนาด object, จำนวน requests และ data transfer:",
        },
        {
          type: "list",
          items: [
            "<strong>Storage class</strong>: Standard, Standard-IA, One Zone-IA, Glacier, Glacier Deep Archive",
            "<strong>Object size</strong>: ราคาถูกลงเมื่อใช้เยอะ (tiered pricing)",
            "<strong>Number + type of requests</strong>: GET, PUT, COPY, LIST ฯลฯ — ราคาต่างกันตาม operation",
            "<strong>Data Transfer OUT</strong> — outbound data ออกจาก S3 เสียเงิน (ตาม region)",
            "<strong>S3 Transfer Acceleration</strong> — มีค่าเพิ่มสำหรับ accelerated upload/download",
            "<strong>Lifecycle Transitions</strong> — เสียค่าธรรมเนียมเมื่อย้าย object ระหว่าง storage classes",
          ],
        },
      ],
    },
    {
      id: "storage-pricing-ebs",
      title: "Storage Pricing — EBS",
      content: [
        {
          type: "list",
          items: [
            "<strong>Volume type</strong>: gp2/gp3, io1/io2, st1, sc1, magnetic — ราคาต่างกัน",
            "<strong>Storage volume</strong> ในหน่วย GB/month <em>ที่ provision</em> (จ่ายตาม size ที่จองไว้ ไม่ใช่ที่ใช้จริง)",
            "<strong>IOPS</strong>: gp = รวมในราคา, io1 = จ่ายตาม IOPS ที่ provision, magnetic = จ่ายตาม number of requests",
            "<strong>Snapshots</strong>: per GB/month ที่เก็บ",
            "<strong>Data Transfer</strong>: Outbound = ราคา tiered, Inbound = ฟรี",
          ],
        },
      ],
    },
    {
      id: "database-pricing-rds",
      title: "Database Pricing — RDS",
      content: [
        {
          type: "paragraph",
          text: "RDS charge ต่อชั่วโมง ตาม configuration ของ DB instance:",
        },
        {
          type: "list",
          items: [
            "<strong>Per hour billing</strong> ตาม instance ที่รันอยู่",
            "<strong>DB characteristics</strong>: engine (MySQL/Postgres/Oracle/SQL Server), size, memory class",
            "<strong>Purchase type</strong>: On-demand หรือ Reserved (1-3 ปี ได้ส่วนลด, ต้อง upfront)",
            "<strong>Backup storage</strong>: ฟรีถึง 100% ของ DB storage size ใน region — เกินต้องจ่าย",
            "<strong>Additional storage</strong>: per GB/month",
            "<strong>I/O requests</strong>: number of requests (สำหรับ บางประเภท storage)",
            "<strong>Single AZ vs Multi-AZ</strong>: Multi-AZ เสียมากขึ้น (มี standby instance)",
            "<strong>Data Transfer</strong>: Outbound tiered, Inbound ฟรี",
          ],
        },
      ],
    },
    {
      id: "cdn-pricing-cloudfront",
      title: "Content Delivery Pricing — CloudFront",
      content: [
        {
          type: "list",
          items: [
            "Pricing ต่างกันตาม <strong>geographic region</strong> (อเมริกาเหนือ, ยุโรป, เอเชีย ฯลฯ)",
            "Aggregated <strong>per edge location</strong>",
            "<strong>Data Transfer Out</strong> มี volume discount (ยิ่งใช้เยอะยิ่งถูก)",
            "<strong>Number of HTTP/HTTPS requests</strong>",
            "ไม่มี minimum commitment — pay-as-you-go",
          ],
        },
      ],
    },
    {
      id: "networking-costs",
      title: "Networking Costs in AWS",
      content: [
        {
          type: "paragraph",
          text: "Networking มีหลายจุดที่ optimize cost ได้ — ต้องเข้าใจว่าใช้ Private IP vs Public IP ต่างกันยังไง:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Use Private IP",
              description:
                "ประหยัดเงิน + performance ดีกว่า — ทราฟฟิกในเครือข่าย AWS internal",
            },
            {
              title: "Use Public IP",
              description:
                "เสียค่า data transfer มากขึ้น + performance อาจต่ำกว่า — ผ่าน public internet",
            },
            {
              title: "Same AZ",
              description:
                "ประหยัดสุด (บางครั้งฟรี) — แต่ <em>ขาด HA</em> (single AZ failure = ดับทั้งหมด)",
            },
            {
              title: "Cross-AZ / Cross-Region",
              description:
                "เสียค่า data transfer มากกว่า — แต่ได้ HA สูงขึ้น (trade-off ระหว่าง cost กับ resilience)",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Cost Optimization Tip",
          text: "ใช้ <strong>Private IP</strong> เมื่อ communicate ระหว่าง services ใน AWS — <strong>Same AZ traffic</strong> ถูกที่สุดแต่ sacrifice HA — <strong>Cross-region</strong> แพงสุด",
        },
      ],
    },
    {
      id: "savings-plans",
      title: "AWS Savings Plans",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Savings Plans</strong> = commit จำนวนเงิน ($/hour) เป็นเวลา 1 หรือ 3 ปี เพื่อแลกกับส่วนลด — flexible กว่า Reserved Instances",
        },
        {
          type: "grid",
          items: [
            {
              title: "EC2 Savings Plan",
              description:
                "ส่วนลดสูงสุด 72% — commit ที่ instance family ใน region (เช่น M5 ใน us-east-1) แต่ไม่สนใจ AZ / size / OS / tenancy",
            },
            {
              title: "Compute Savings Plan",
              description:
                "ส่วนลดสูงสุด 66% — flexible ที่สุด ไม่สน family / region / size / OS / tenancy / compute (ใช้กับ EC2, Fargate, Lambda)",
            },
          ],
        },
        {
          type: "list",
          items: [
            "Setup ผ่าน <strong>AWS Cost Explorer</strong>",
            "Compute Savings Plan ครอบคลุม EC2 + Fargate + Lambda",
            "EC2 Savings Plan ครอบคลุมเฉพาะ EC2 — ส่วนลดเยอะกว่า แต่ flexible น้อยกว่า",
            "Commitment: 1 ปี หรือ 3 ปี — All Upfront / Partial Upfront / No Upfront",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Savings Plans vs Reserved Instances",
          text: "<strong>Savings Plans</strong> = commit $/hour (flexible กว่า) — <strong>RI</strong> = commit เฉพาะ instance type/family (specific กว่า) — ปัจจุบัน AWS แนะนำใช้ Savings Plans มากกว่า RI สำหรับ EC2",
        },
      ],
    },
    {
      id: "compute-optimizer",
      title: "AWS Compute Optimizer",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Compute Optimizer</strong> ใช้ Machine Learning วิเคราะห์ configuration + CloudWatch metrics เพื่อแนะนำ optimal AWS resources — ลดต้นทุนและปรับปรุง performance",
        },
        {
          type: "list",
          items: [
            "ใช้ ML วิเคราะห์ configurations + CloudWatch metrics",
            "Supports: <strong>EC2 instances, EC2 Auto Scaling Groups, EBS volumes, Lambda functions</strong>",
            "ลดต้นทุนได้สูงสุด 25%",
            "Export recommendations ไปยัง S3 ได้",
            "ฟรี (ไม่มีค่าใช้จ่ายสำหรับ Compute Optimizer เอง)",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "ใช้เมื่อไร",
          text: "เมื่ออยากรู้ว่า EC2 instance ที่ใช้อยู่ over-provisioned หรือ under-provisioned — Compute Optimizer ดูจาก metrics จริงแล้วแนะนำ instance type ที่เหมาะที่สุด",
        },
      ],
    },
    {
      id: "estimating-costs",
      title: "Estimating Costs",
      content: [
        {
          type: "grid",
          items: [
            {
              title: "TCO Calculator",
              description:
                "เปรียบเทียบ on-premises vs AWS (Server, Storage, Network, IT Labor) — https://awstcocalculator.com",
            },
            {
              title: "AWS Pricing Calculator",
              description:
                "ประมาณค่าใช้จ่ายของ solution ที่จะ deploy บน AWS — https://calculator.aws/ (แทน Simple Monthly Calculator ที่เลิกใช้แล้ว)",
            },
          ],
        },
        {
          type: "list",
          items: [
            "TCO Calculator: focus ที่การเปรียบเทียบ on-prem vs cloud — รวม cost ของ server, storage, network, IT labor",
            "AWS Pricing Calculator: focus ที่การประมาณค่าใช้จ่าย solution บน AWS",
            "Simple Monthly Calculator (เก่า) ถูก deprecate แล้ว — ใช้ AWS Pricing Calculator แทน",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "ข้อสอบชอบถาม",
          text: "\"เปรียบเทียบค่าใช้จ่าย on-prem vs AWS\" → <strong>TCO Calculator</strong> — \"ประมาณค่าใช้จ่าย solution บน AWS\" → <strong>AWS Pricing Calculator</strong>",
        },
      ],
    },
    {
      id: "tracking-costs",
      title: "Tracking Costs",
      content: [
        {
          type: "paragraph",
          text: "AWS มีหลายเครื่องมือสำหรับ track ค่าใช้จ่าย — แต่ละตัวเหมาะกับ use case ต่างกัน:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Billing Dashboard",
              description:
                "ภาพรวมระดับสูง (high-level overview) + free tier dashboard — เห็น month-to-date spend",
            },
            {
              title: "Cost Allocation Tags",
              description:
                "AWS-generated (aws:) + User-defined (user:) — track ค่าใช้จ่ายในระดับละเอียด, ใช้ร่วมกับ Cost Explorer",
            },
            {
              title: "Tagging + Resource Groups",
              description:
                "จัดกลุ่ม resources — common tags: Name, Environment, Team, Project",
            },
            {
              title: "Cost & Usage Reports",
              description:
                "Dataset ของ billing ที่ละเอียดที่สุด — hourly/daily, ทุก services, ทุก IAM users, ทุก tags. Integrate กับ Athena, Redshift, QuickSight",
            },
            {
              title: "Cost Explorer",
              description:
                "Visualize ค่าใช้จ่ายตามเวลา, custom reports, granularity ระดับ monthly/hourly/resource, แนะนำ Savings Plan, forecast 12 เดือน",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>Cost Allocation Tags</strong>: prefix <code>aws:</code> = AWS-generated, prefix <code>user:</code> = user-defined",
            "ต้อง activate tags ใน Billing console ก่อนใช้ใน reports",
            "Cost & Usage Reports = comprehensive ที่สุด — analyze ผ่าน Athena/Redshift/QuickSight",
            "Cost Explorer = visualize + forecast 12 เดือนข้างหน้า + แนะนำ optimal Savings Plan",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "จำแยก",
          text: "<strong>Billing Dashboard</strong> = high-level overview — <strong>Cost Explorer</strong> = visualize + forecast — <strong>Cost & Usage Reports</strong> = raw billing data ที่ละเอียดสุด (ใช้กับ Athena/Redshift/QuickSight)",
        },
      ],
    },
    {
      id: "monitoring-costs",
      title: "Monitoring Against Costs",
      content: [
        {
          type: "grid",
          items: [
            {
              title: "Billing Alarms (CloudWatch)",
              description:
                "อยู่ใน <strong>us-east-1 เท่านั้น</strong> — alert ตาม actual cost (ไม่ใช่ projected/forecast) — simple basic alert",
            },
            {
              title: "AWS Budgets",
              description:
                "Send alarms เมื่อ cost เกิน threshold — ละเอียดกว่า มี 3 types: Usage, Cost, Reservation",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>Billing Alarms</strong>: ตั้งใน CloudWatch us-east-1 only, alert ตาม actual cost",
            "<strong>AWS Budgets</strong>: 3 types — Usage, Cost, Reservation",
            "Budget สำหรับ Reservation: track RI utilization (EC2, ElastiCache, RDS, Redshift)",
            "Budget รองรับสูงสุด <strong>5 SNS notifications</strong> ต่อ budget",
            "Filter ได้ตาม service, account, tag, instance type, region",
            "ฟรี 2 budgets แรก แล้วคิด <strong>$0.02/วัน</strong>",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "ข้อสอบชอบถาม",
          text: "<strong>Billing Alarms</strong> อยู่ใน us-east-1 เท่านั้น — alert ตาม actual cost (ไม่ใช่ projected) — <strong>Budgets</strong> ฟรี 2 budgets แรก",
        },
      ],
    },
    {
      id: "trusted-advisor",
      title: "AWS Trusted Advisor",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Trusted Advisor</strong> เป็น high-level account assessment — ไม่ต้อง install อะไร ทำงานอัตโนมัติ ตรวจสอบ best practices ของ account",
        },
        {
          type: "grid",
          items: [
            {
              title: "Cost Optimization",
              description:
                "หา resources ที่ idle / underutilized — เช่น EC2 instances ที่ไม่ได้ใช้",
            },
            {
              title: "Performance",
              description:
                "แนะนำการปรับปรุง performance — over-provisioned, CloudFront optimization",
            },
            {
              title: "Security",
              description:
                "ตรวจ security gaps — open security groups, MFA on root, public S3 buckets",
            },
            {
              title: "Fault Tolerance",
              description:
                "ตรวจ redundancy — RDS Multi-AZ, ELB cross-AZ, backups",
            },
            {
              title: "Service Limits",
              description:
                "เตือนเมื่อใกล้ถึง service quota — เช่น VPC limit, EC2 instance limit",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>Core Checks</strong> (ทุก customer): MFA on root, security groups, S3 buckets, IAM key rotation ฯลฯ",
            "<strong>Full Trusted Advisor</strong> (Business + Enterprise plans): all checks + CloudWatch alarms + Programmatic Access",
            "<strong>5 Categories</strong>: Cost Optimization, Performance, Security, Fault Tolerance, Service Limits",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "จำให้ได้",
          text: "<strong>5 Categories</strong>: Cost Optimization, Performance, Security, Fault Tolerance, Service Limits — <strong>Core checks</strong> ฟรีทุก plan — <strong>Full Trusted Advisor</strong> ต้อง Business plan ขึ้นไป",
        },
      ],
    },
    {
      id: "support-plans",
      title: "AWS Support Plans (5 Tiers)",
      content: [
        {
          type: "paragraph",
          text: "AWS มี <strong>5 Support Plans</strong> ตั้งแต่ Basic (ฟรี) จนถึง Enterprise — แตกต่างที่ response time, features และ access ถึง expert:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Basic (ฟรี)",
              description:
                "24x7 customer service สำหรับ billing, documentation, 7 core Trusted Advisor checks, Personal Health Dashboard",
            },
            {
              title: "Developer",
              description:
                "Email business hours ถึง Cloud Support Associates, unlimited cases, 1 primary contact — SLA: General <24h, System impaired <12h",
            },
            {
              title: "Business (24/7)",
              description:
                "เหมาะกับ production — Full Trusted Advisor + API, 24x7 phone/email/chat ถึง Cloud Support Engineers, unlimited cases + contacts, Infrastructure Event Management (extra fee) — SLA: Production impaired <4h, Production down <1h",
            },
            {
              title: "Enterprise On-Ramp",
              description:
                "$5,500/เดือน — scaling enterprise needs, pool of TAMs, Concierge Support — SLA: Business-critical <30min",
            },
            {
              title: "Enterprise (24/7)",
              description:
                "Mission critical — <strong>Designated TAM</strong>, Concierge Support (billing/account), Infrastructure Event Management, Well-Architected Reviews — SLA: Business-critical down <15min",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>Basic = ฟรี</strong> สำหรับทุก AWS customer — 7 core Trusted Advisor checks",
            "<strong>Developer</strong>: business hours email — Cloud Support Associates",
            "<strong>Business</strong>: 24/7 phone/email/chat — Cloud Support Engineers, Full Trusted Advisor",
            "<strong>Enterprise On-Ramp</strong>: $5,500/mo — pool of TAMs (ไม่ใช่ designated)",
            "<strong>Enterprise</strong>: designated TAM + Concierge + IEM + Well-Architected Reviews",
            "Concierge Support Team = expert ด้าน billing/account (ไม่ใช่ technical) — เฉพาะ Enterprise + Enterprise On-Ramp",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Response Times ต้องจำให้ได้",
          text: "เวลา response สำหรับ business-critical ต่างกันตาม plan — Enterprise เร็วสุด:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Enterprise",
              description:
                "<strong>15 นาที</strong> สำหรับ business-critical down — เร็วที่สุดในทุก plan",
            },
            {
              title: "Enterprise On-Ramp",
              description:
                "<strong>30 นาที</strong> สำหรับ business-critical down",
            },
            {
              title: "Business",
              description:
                "<strong>1 ชั่วโมง</strong> สำหรับ production system down",
            },
            {
              title: "Developer / Basic",
              description:
                "<em>ไม่มี</em> SLA สำหรับ business-critical / production down",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "TAM อยู่ที่ไหน?",
          text: "<strong>Designated TAM</strong> (คนเดียวดูแลเรา) = Enterprise <em>เท่านั้น</em> — Enterprise On-Ramp ได้ pool of TAMs (ไม่ใช่ designated) — Business/Developer/Basic ไม่มี TAM",
        },
      ],
    },
    {
      id: "account-best-practices",
      title: "Account Best Practices Summary",
      content: [
        {
          type: "list",
          items: [
            "Operate หลาย accounts ผ่าน <strong>AWS Organizations</strong>",
            "ใช้ <strong>SCPs</strong> เพื่อ restrict permission ที่ OU/account level",
            "ใช้ <strong>AWS Control Tower</strong> สำหรับ landing zone + guardrails",
            "ใช้ <strong>Tags + Cost Allocation Tags</strong> ตั้งแต่เริ่มต้น",
            "<strong>IAM</strong>: enable MFA, least privilege, password policy",
            "ใช้ <strong>AWS Config</strong> สำหรับ compliance monitoring",
            "ใช้ <strong>CloudFormation</strong> สำหรับ infrastructure as code",
            "ใช้ <strong>Trusted Advisor</strong> ตรวจสุขภาพ account",
            "เก็บ logs ไว้ใน <strong>S3 + CloudWatch Logs</strong> ที่ central account",
            "เปิด <strong>CloudTrail</strong> ทุก account",
            "วาง <strong>root recovery procedure</strong> สำหรับกรณีเข้า root account ไม่ได้",
          ],
        },
      ],
    },
    {
      id: "billing-tools-summary",
      title: "Billing Tools Summary",
      content: [
        {
          type: "grid",
          items: [
            {
              title: "Compute Optimizer",
              description: "แนะนำ resources ที่เหมาะสม (EC2, ASG, EBS, Lambda)",
            },
            {
              title: "TCO Calculator",
              description: "เปรียบเทียบ on-premises กับ AWS",
            },
            {
              title: "Pricing Calculator",
              description: "ประมาณค่าใช้จ่าย solution ที่จะ deploy",
            },
            {
              title: "Billing Dashboard",
              description: "ภาพรวมค่าใช้จ่ายและ free tier usage",
            },
            {
              title: "Cost Allocation Tags",
              description: "ติด tags เพื่อ track cost (aws: / user:)",
            },
            {
              title: "Cost & Usage Reports",
              description: "Dataset billing ละเอียดสุด — Athena/Redshift/QuickSight",
            },
            {
              title: "Cost Explorer",
              description: "Visualize + forecast + แนะนำ Savings Plan",
            },
            {
              title: "Billing Alarms",
              description: "CloudWatch alert ตาม actual cost (us-east-1 only)",
            },
            {
              title: "AWS Budgets",
              description: "Alert เมื่อ cost/usage/reservation เกิน threshold",
            },
            {
              title: "Savings Plans",
              description: "Commit $/hour 1-3 ปี ลดสูงสุด 72% (EC2) หรือ 66% (Compute)",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>วางแผน</strong>: Pricing Calculator, TCO Calculator",
            "<strong>วิเคราะห์</strong>: Cost Explorer, Cost & Usage Reports, Compute Optimizer",
            "<strong>Alert</strong>: Billing Alarms, Budgets",
            "<strong>ประหยัด</strong>: Savings Plans, Reserved Instances",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Quick Recap",
          text: "เลือกเครื่องมือตาม phase: วางแผนก่อน deploy → วิเคราะห์หลังใช้งาน → alert เมื่อใกล้ budget → commit เพื่อประหยัด",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "account-mgmt-q1",
      question:
        "ประโยชน์หลักของ AWS Organizations ในด้านการเงินคืออะไร?",
      options: [
        "ลดราคา EC2 อัตโนมัติ 50% สำหรับทุก account",
        "Consolidated Billing — รวมบิลทุก accounts เป็นใบเดียวและได้ volume discounts จาก aggregated usage",
        "ทำให้ Free Tier ไม่มีวันหมดอายุ",
        "บังคับใช้ Reserved Instances ทุก account",
      ],
      correct: 1,
      explanation:
        "ประโยชน์หลักด้านการเงินของ AWS Organizations คือ Consolidated Billing — รวมบิลทุก accounts เป็นใบเดียว (single payment) + ได้ volume discount เพราะ aggregated usage + pool Reserved Instances ข้าม accounts ได้",
    },
    {
      id: "account-mgmt-q2",
      question:
        "Service Control Policies (SCPs) ทำหน้าที่อะไรและ apply ที่ระดับไหน?",
      options: [
        "Grant permissions ให้ users ใน Master Account",
        "Restrict IAM actions ที่ระดับ user เท่านั้น",
        "Whitelist/blacklist IAM actions ที่ apply ที่ OU หรือ Account level (ไม่มีผลกับ Master Account)",
        "ตรวจสอบ security ของ S3 buckets",
      ],
      correct: 2,
      explanation:
        "SCPs เป็น whitelist หรือ blacklist ของ IAM actions ที่ apply ที่ OU หรือ Account level — มีผลกับ users + roles + root user ของ member account แต่<strong>ไม่มีผลกับ Master Account</strong> และ SCP restrict ได้แต่ grant ไม่ได้",
    },
    {
      id: "account-mgmt-q3",
      question:
        "AWS Control Tower สร้างอยู่บนพื้นฐานของ service ใด?",
      options: [
        "AWS IAM",
        "AWS Config",
        "AWS Organizations",
        "AWS CloudFormation",
      ],
      correct: 2,
      explanation:
        "AWS Control Tower สร้างอยู่บน <strong>AWS Organizations</strong> — เป็น solution ที่ทำ landing zone + guardrails + compliance dashboard ให้อัตโนมัติ โดยใช้ Organizations เป็น foundation",
    },
    {
      id: "account-mgmt-q4",
      question:
        "Pricing Model แบบใดที่ \"จ่ายเฉพาะที่ใช้จริง ไม่มี upfront commitment\"?",
      options: [
        "Save when you reserve",
        "Pay as you go",
        "Pay less by using more",
        "Pay less as AWS grows",
      ],
      correct: 1,
      explanation:
        "Pay as you go = จ่ายเฉพาะที่ใช้จริง agile + responsive ไม่มี upfront cost — ส่วน Save when you reserve ต้อง commit ล่วงหน้า, Pay less by using more = volume discount, Pay less as AWS grows = AWS ลดราคาตามเวลา",
    },
    {
      id: "account-mgmt-q5",
      question:
        "EC2 t2.micro ใน AWS Free Tier ฟรีนานเท่าไร?",
      options: [
        "ฟรีตลอดไป (Always Free)",
        "ฟรี 30 วัน",
        "ฟรี 6 เดือน",
        "ฟรี 12 เดือน หลังจากเปิด account",
      ],
      correct: 3,
      explanation:
        "EC2 t2.micro = ฟรี <strong>12 เดือน</strong> (750 hrs/month) หลังจากเปิด AWS account — หลังจากนั้นต้องจ่ายตาม pricing ปกติ ส่วน IAM, VPC, Consolidated Billing คือ Always Free",
    },
    {
      id: "account-mgmt-q6",
      question:
        "Cost Allocation Tags ที่ AWS สร้างให้อัตโนมัติมี prefix ใด?",
      options: [
        "user:",
        "aws:",
        "system:",
        "auto:",
      ],
      correct: 1,
      explanation:
        "AWS-generated cost allocation tags มี prefix <code>aws:</code> เช่น aws:createdBy ส่วน user-defined tags มี prefix <code>user:</code> เช่น user:Project, user:Environment — ต้อง activate tags ใน Billing console ก่อนใช้ใน reports",
    },
    {
      id: "account-mgmt-q7",
      question:
        "ระหว่าง Cost Explorer กับ AWS Budgets เครื่องมือใดมี <em>forecast</em> ค่าใช้จ่าย 12 เดือนข้างหน้า?",
      options: [
        "AWS Budgets เท่านั้น",
        "Cost Explorer — visualize ย้อนหลังและ forecast 12 เดือนข้างหน้า + แนะนำ Savings Plan",
        "Billing Dashboard เท่านั้น",
        "ทั้งสองตัวไม่มี forecast",
      ],
      correct: 1,
      explanation:
        "Cost Explorer = visualize ค่าใช้จ่ายย้อนหลังและ <strong>forecast 12 เดือนข้างหน้า</strong> + แนะนำ optimal Savings Plan ส่วน Budgets ใช้ตั้ง alert เมื่อ cost จะเกิน threshold (ไม่ได้เน้น forecast)",
    },
    {
      id: "account-mgmt-q8",
      question:
        "AWS Trusted Advisor ตรวจสอบใน 5 categories ใด?",
      options: [
        "Cost, Compute, Storage, Database, Networking",
        "Billing, Technical, Security, Operational, Compliance",
        "Cost Optimization, Performance, Security, Fault Tolerance, Service Limits",
        "Reliability, Performance Efficiency, Security, Cost, Operational Excellence",
      ],
      correct: 2,
      explanation:
        "5 Categories ของ Trusted Advisor: <strong>Cost Optimization, Performance, Security, Fault Tolerance, Service Limits</strong> — Core checks ฟรีทุก plan, Full Trusted Advisor ต้อง Business plan ขึ้นไป",
    },
    {
      id: "account-mgmt-q9",
      question:
        "Designated Technical Account Manager (TAM) มีใน Support Plan ใด?",
      options: [
        "Business ขึ้นไป",
        "Enterprise On-Ramp และ Enterprise",
        "Enterprise เท่านั้น",
        "ทุก paid plans (Developer ขึ้นไป)",
      ],
      correct: 2,
      explanation:
        "Designated TAM (คนเดียวดูแลเราโดยเฉพาะ) มีใน <strong>Enterprise plan เท่านั้น</strong> — Enterprise On-Ramp ได้ pool of TAMs (ไม่ใช่ designated คนเดียว) ส่วน Business/Developer/Basic ไม่มี TAM",
    },
    {
      id: "account-mgmt-q10",
      question:
        "Support Plan ใดที่ฟรีสำหรับทุก AWS customer?",
      options: [
        "Basic — 24x7 customer service สำหรับ billing, 7 core Trusted Advisor checks, Personal Health Dashboard",
        "Developer",
        "Business",
        "ไม่มี — ทุก plan ต้องจ่ายเงิน",
      ],
      correct: 0,
      explanation:
        "<strong>Basic plan</strong> ฟรีสำหรับทุก AWS customer — ได้ 24x7 customer service สำหรับ billing/account questions, documentation, 7 core Trusted Advisor checks และ Personal Health Dashboard ส่วน Developer ขึ้นไปต้องจ่ายเงิน",
    },
  ],
};
