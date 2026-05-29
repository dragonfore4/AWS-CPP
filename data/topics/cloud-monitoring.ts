import { TopicData } from "@/types/topic";

export const cloudMonitoring: TopicData = {
  slug: "cloud-monitoring",
  title: "Cloud Monitoring",
  subtitle: "CloudWatch, CloudTrail, Config & Health",
  accent: "teal",
  emoji: "📊",
  category: "Management & Governance",
  description:
    "Cloud Monitoring บน AWS ครอบคลุม 4 บริการหลักในการดูแลระบบ: CloudWatch (metrics + logs + events), CloudTrail (audit API calls), AWS Config (compliance + config history), และ Health Dashboards (สถานะ service ของ AWS) — ใช้ร่วมกันเพื่อ visibility, troubleshoot, security audit และ cost optimization",
  keyPoints: [
    "CloudWatch — เก็บ metrics, logs, alarms, dashboards จาก AWS services และ apps",
    "CloudTrail — บันทึกทุก API call เพื่อ governance, compliance, audit",
    "AWS Config — track การเปลี่ยนแปลง configuration ของ resource และ compliance",
    "Service Health Dashboard (public) vs Personal Health Dashboard (your resources)",
  ],
  sections: [
    {
      id: "why-monitor",
      title: "ทำไมต้อง Monitor (Why Monitor?)",
      content: [
        {
          type: "paragraph",
          text: "<strong>Monitoring</strong> คือหัวใจของการดูแลระบบบน cloud — ถ้าไม่มี visibility ก็ไม่รู้ว่าระบบทำงานปกติหรือไม่ มีปัญหาตรงไหน หรือมีคนเข้ามาทำอะไรกับ account",
        },
        {
          type: "list",
          items: [
            "<strong>Visibility:</strong> มองเห็นสถานะการทำงานของระบบทั้งหมด แบบ real-time",
            "<strong>Troubleshoot issues:</strong> หาสาเหตุของปัญหาได้รวดเร็วเมื่อ application เกิด error",
            "<strong>Improve performance:</strong> ระบุ bottleneck แล้วปรับปรุงประสิทธิภาพ",
            "<strong>Security audit:</strong> ตรวจสอบว่ามี unauthorized access หรือ suspicious activity หรือไม่",
            "<strong>Compliance:</strong> เก็บหลักฐานสำหรับ audit (PCI-DSS, HIPAA, SOC) ว่าระบบเป็นไปตามข้อกำหนด",
            "<strong>Cost optimization:</strong> หาว่า resource ใดถูกใช้น้อย/ไม่ได้ใช้ เพื่อลดค่าใช้จ่าย",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Amazon CloudWatch",
              description:
                "เก็บ metrics + logs + events จาก AWS services และ application ของคุณ พร้อม alarms และ dashboards",
            },
            {
              title: "AWS CloudTrail",
              description:
                "บันทึกทุก API call ภายใน AWS account เพื่อ governance, compliance, และ audit",
            },
            {
              title: "AWS Config",
              description:
                "ตรวจสอบและบันทึกการเปลี่ยนแปลง configuration ของ resource เพื่อ compliance",
            },
            {
              title: "Health Dashboards",
              description:
                "Service Health Dashboard (สถานะ AWS public) + Personal Health Dashboard (resource ของคุณ)",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "4 Pillars of AWS Monitoring",
          text: "จำให้ขึ้นใจ: CloudWatch (metrics/logs), CloudTrail (audit API), Config (compliance), Health (service status) — แต่ละตัวมีบทบาทต่างกันแต่เสริมกันเป็นภาพรวม",
        },
      ],
    },
    {
      id: "cloudwatch-metrics",
      title: "CloudWatch Metrics",
      content: [
        {
          type: "paragraph",
          text: "<strong>CloudWatch Metrics</strong> คือข้อมูลตัวเลข (variable) ที่เราต้องการ monitor เช่น CPU, network, disk — ทุก AWS service ส่ง default metrics มาให้อัตโนมัติ",
        },
        {
          type: "list",
          items: [
            "<strong>Variable to monitor:</strong> CPU utilization, network in/out, disk read/write ฯลฯ",
            "<strong>AWS services come with default metrics</strong> — ไม่ต้อง config เอง",
            "<strong>Namespace:</strong> metric แต่ละตัวอยู่ใน namespace ของแต่ละ service เช่น AWS/EC2, AWS/S3, AWS/Lambda",
            "<strong>Dimension:</strong> attribute ของ metric เช่น InstanceId, InstanceType — ใช้แยก metric ของแต่ละ resource",
            "Metric หนึ่งตัวมีได้สูงสุด <strong>30 dimensions</strong>",
            "ทุก metric มี <strong>timestamp</strong> ติดมาด้วย",
            "<strong>Custom Metrics:</strong> ส่ง metric ของเราเองได้ผ่าน PutMetricData API (เช่น active users, queue length)",
            "<strong>High-resolution custom metrics:</strong> ส่งได้ละเอียดถึง <strong>1 วินาที</strong> (StorageResolution = 1)",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "EC2 Default Metrics",
          text: "EC2 ส่ง CPUUtilization, NetworkIn/Out, DiskReadOps, StatusCheck แต่ <strong>ไม่ส่ง RAM และ disk space</strong> — ต้องติดตั้ง CloudWatch Agent เพื่อเก็บเป็น custom metric",
        },
      ],
    },
    {
      id: "cloudwatch-alarms",
      title: "CloudWatch Alarms",
      content: [
        {
          type: "paragraph",
          text: "<strong>CloudWatch Alarms</strong> ใช้ trigger notification หรือ action เมื่อ metric เข้าเงื่อนไข (threshold) ที่ตั้งไว้ — ใช้ตอบสนองอัตโนมัติเมื่อระบบมีปัญหา",
        },
        {
          type: "list",
          items: [
            "Trigger notifications สำหรับ <strong>any metric</strong> ใน CloudWatch",
            "<strong>Various options:</strong> sampling, percentage, max, min, average, sum ฯลฯ",
            "<strong>Alarm States (3 states):</strong> OK / INSUFFICIENT_DATA / ALARM",
            "<strong>Alarm Period:</strong> 10 วินาที, 30 วินาที, หรือทวีคูณของ 60 วินาที",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Auto Scaling Action",
              description:
                "Trigger ASG ให้ scale out (เพิ่ม instance) หรือ scale in (ลด instance) เมื่อ alarm เข้า ALARM state เช่น CPU > 70% → เพิ่ม instance",
            },
            {
              title: "EC2 Action",
              description:
                "Stop, Terminate, Reboot, หรือ Recover EC2 instance อัตโนมัติเมื่อ alarm trigger เช่น StatusCheckFailed → recover",
            },
            {
              title: "SNS Notifications",
              description:
                "ส่ง notification ผ่าน SNS topic ไปยัง email, SMS, Lambda, SQS เมื่อ alarm state เปลี่ยน",
            },
            {
              title: "Composite Alarms",
              description:
                "รวมหลาย alarms เข้าด้วยกันด้วย AND / OR logic เช่น Alarm1 AND Alarm2 = ALARM → จึงจะ trigger — ลด alarm noise",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Billing Alarm",
          text: "สามารถสร้าง Billing Alarm ที่ region us-east-1 เพื่อแจ้งเตือนเมื่อค่าใช้จ่าย AWS เกิน budget — สำคัญมากสำหรับ cost management!",
        },
      ],
    },
    {
      id: "cloudwatch-logs",
      title: "CloudWatch Logs",
      content: [
        {
          type: "paragraph",
          text: "<strong>CloudWatch Logs</strong> คือที่เก็บ log แบบ centralized ของ AWS สำหรับ application logs และ AWS service logs ค้นหาและวิเคราะห์ได้ในที่เดียว",
        },
        {
          type: "list",
          items: [
            "<strong>Log Groups:</strong> มักเป็นหนึ่งกลุ่มต่อ application เช่น /aws/lambda/my-function",
            "<strong>Log Streams:</strong> อยู่ภายใน log group แยกตาม instance, container, หรือ log file",
            "<strong>Log Expiration Policies:</strong> กำหนดเวลาเก็บ log ได้ (never expire / 1 day / 1 year / 10 years)",
            "<strong>Export to S3:</strong> ส่ง log ไป S3 สำหรับ long-term archive ราคาถูกกว่า",
            "<strong>Stream to ElasticSearch (OpenSearch):</strong> ส่งต่อเพื่อ search + analytics ขั้นสูง",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Sources of Logs",
              description:
                "SDK / CloudWatch Logs Agent / Elastic Beanstalk / ECS / Lambda / VPC Flow Logs / API Gateway / CloudTrail / Route 53 — ทุก service หลักของ AWS ส่ง log มาที่ CloudWatch Logs ได้",
            },
            {
              title: "CloudWatch Logs Insights",
              description:
                "Search + analyze logs ด้วย custom query language — query แบบ SQL-like เพื่อหา error, นับ event, หรือ aggregate ข้อมูล",
            },
            {
              title: "Logs → Metrics (Metric Filter)",
              description:
                "แปลง pattern ใน log เป็น metric เช่น count คำว่า ERROR แล้วทำ alarm — ตอบสนองต่อ event ใน log อัตโนมัติ",
            },
            {
              title: "Real-time Processing",
              description:
                "Subscribe log ไปยัง Lambda, Kinesis Data Streams, Kinesis Firehose เพื่อ process แบบ real-time",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "CloudWatch Logs Agent",
          text: "EC2 ไม่ส่ง log มาให้ CloudWatch อัตโนมัติ — ต้องติดตั้ง Unified CloudWatch Agent เพื่อส่ง logs + custom metrics (RAM, disk) ส่วน Lambda ส่งให้อัตโนมัติแล้ว",
        },
      ],
    },
    {
      id: "events-eventbridge",
      title: "CloudWatch Events / EventBridge",
      content: [
        {
          type: "paragraph",
          text: "<strong>CloudWatch Events</strong> (ชื่อเดิม) = <strong>Amazon EventBridge</strong> (ชื่อใหม่ + features เพิ่ม) คือ event bus ที่ใช้ตอบสนองต่อเหตุการณ์ใน AWS แบบ real-time",
        },
        {
          type: "list",
          items: [
            "<strong>Schedule (Cron):</strong> ตั้งให้ทำงานตามเวลา เช่น ทุก 1 ชั่วโมง trigger Lambda",
            "<strong>Event Pattern:</strong> trigger เมื่อ AWS service ทำอะไรบางอย่าง เช่น EC2 state change, S3 object upload, CodePipeline failure",
            "<strong>Targets:</strong> Lambda, SNS, SQS, Step Functions, ECS Task ฯลฯ",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Default Event Bus",
              description:
                "Bus มาตรฐานที่ AWS services ส่ง event มาให้อัตโนมัติ — ทุก account มีให้ใช้",
            },
            {
              title: "Custom Event Bus",
              description:
                "สร้าง bus ของเราเองสำหรับ application events ภายใน — แยก event ของแต่ละ team/service",
            },
            {
              title: "Partner Event Bus",
              description:
                "รับ events จาก SaaS partners เช่น Zendesk, Datadog, Auth0 เข้ามาใน AWS โดยตรง",
            },
            {
              title: "Schema Registry",
              description:
                "เก็บ schema ของ events ทำให้ developer รู้รูปแบบ event แล้ว generate code (SDK bindings) ได้อัตโนมัติ",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "EventBridge = CloudWatch Events 2.0",
          text: "EventBridge คือ next evolution ของ CloudWatch Events — มี features เพิ่ม (multiple buses, partner integrations, schema registry) แต่ทำงานเหมือนกัน AWS แนะนำให้ใช้ EventBridge แทน",
        },
      ],
    },
    {
      id: "cloudwatch-dashboards",
      title: "CloudWatch Dashboards",
      content: [
        {
          type: "paragraph",
          text: "<strong>CloudWatch Dashboards</strong> คือ custom view สำหรับแสดง metrics + alarms รวมในหน้าจอเดียว — เหมาะสำหรับ NOC / DevOps team ที่ต้อง monitor ระบบทั้งหมด",
        },
        {
          type: "list",
          items: [
            "สูงสุด <strong>1,000 dashboards</strong> ต่อ account",
            "สูงสุด <strong>100 widgets</strong> ต่อ dashboard",
            "<strong>Cross-region + Cross-account:</strong> รวม metrics จากหลาย region และหลาย account ในหน้าเดียว",
            "Dashboard เป็น <strong>Global resource</strong> — สร้างทีเดียวเข้าดูได้จากทุก region",
            "<strong>Pricing:</strong> 3 dashboards แรกฟรี (50 metrics/dashboard) จากนั้น $3/dashboard/เดือน",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Use Case",
          text: "เหมาะสำหรับสร้าง single pane of glass — DevOps ดู health ของทั้งระบบ (production + staging) จากทุก region ในหน้าเดียว ไม่ต้องสลับ console ไปมา",
        },
      ],
    },
    {
      id: "cloudtrail",
      title: "AWS CloudTrail",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS CloudTrail</strong> ให้บริการ governance, compliance และ audit สำหรับ AWS account ของคุณ — เปิดใช้งาน <strong>by default</strong> ทุก account ดู event history ย้อนหลังได้ 90 วันฟรี",
        },
        {
          type: "list",
          items: [
            "บันทึก <strong>history of events / API calls</strong> ที่เกิดขึ้นใน AWS account",
            "ครอบคลุมทุก source: <strong>Console, SDK, CLI, AWS services</strong> (เพราะทุกอย่างเรียกผ่าน API หมด)",
            "<strong>Logs to:</strong> CloudWatch Logs และ/หรือ S3 (สำหรับเก็บถาวร)",
            "<strong>Trail:</strong> ตั้งค่าให้ apply All Regions (default, แนะนำ) หรือ single Region",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Management Events",
              description:
                "Operations ที่จัดการ resource เช่น create user, set IAM policy, configure security group — <strong>logged by default</strong> ฟรี (control plane operations)",
            },
            {
              title: "Data Events",
              description:
                "High-volume operations เช่น <strong>S3 GetObject / PutObject / DeleteObject, Lambda Invoke</strong> — <strong>opt-in</strong> เพราะปริมาณมหาศาลและเสียค่าใช้จ่าย",
            },
            {
              title: "CloudTrail Insights",
              description:
                "ตรวจจับ <strong>unusual activity</strong> โดยอัตโนมัติด้วย ML — anomaly detection เช่น API call spike, error rate ผิดปกติ (เสียค่าใช้จ่ายเพิ่ม)",
            },
            {
              title: "Retention",
              description:
                "Console ดูได้ 90 วันฟรี — ส่งไป S3 เก็บได้ตลอดไป หรือใช้ CloudTrail Lake เก็บได้ถึง 7 ปี (queryable ด้วย SQL)",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "ข้อสอบชอบถาม!",
          text: "ถ้าโจทย์ถามว่า \"ใครลบ resource?\" \"ใคร terminate EC2?\" \"ต้องการ audit API calls\" — คำตอบคือ <strong>CloudTrail</strong> เสมอ! Data Events จำเป็นถ้าจะ track S3 object-level access",
        },
      ],
    },
    {
      id: "cloudtrail-vs-cloudwatch",
      title: "CloudTrail vs CloudWatch",
      content: [
        {
          type: "paragraph",
          text: "หลายคนสับสน 2 service นี้ — จำให้ขึ้นใจว่าทำงานคนละหน้าที่:",
        },
        {
          type: "grid",
          items: [
            {
              title: "CloudWatch",
              description:
                "<strong>Monitoring</strong> — เก็บ metrics + logs จาก application และ AWS services ตอบคำถาม \"ระบบทำงานเป็นอย่างไร?\" (CPU สูงไหม, มี error log ไหม)",
            },
            {
              title: "CloudTrail",
              description:
                "<strong>Audit</strong> — บันทึก API calls / governance / compliance ตอบคำถาม \"ใครทำอะไร เมื่อไร?\" (ใครลบ S3 bucket, ใคร modify IAM)",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Mnemonic ช่วยจำ",
          text: "CloudWatch = <strong>W</strong>orkload monitoring (สถานะระบบ) | CloudTrail = <strong>T</strong>rail of who did what (เส้นทางผู้ใช้)",
        },
      ],
    },
    {
      id: "aws-config",
      title: "AWS Config",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Config</strong> ช่วยในด้าน auditing และบันทึก compliance ของ AWS resources — เก็บประวัติ configuration และการเปลี่ยนแปลงตลอดเวลา",
        },
        {
          type: "list",
          items: [
            "<strong>Records configurations and changes over time</strong> — ดูได้ว่า resource เคยถูกตั้งค่าอย่างไรในอดีต",
            "<strong>Stores config data in S3</strong> (วิเคราะห์ต่อด้วย Athena ได้)",
            "<strong>Per-region service</strong> — ต้องเปิดในแต่ละ region แต่สามารถ <strong>aggregate ข้าม regions และ accounts</strong> ได้",
            "<strong>Alerts via SNS</strong> เมื่อมีการเปลี่ยนแปลง config",
            "ใช้ร่วมกับ CloudTrail ได้ — Config บอก \"resource เปลี่ยนเป็นอะไร\" ส่วน CloudTrail บอก \"ใครเปลี่ยน\"",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Q: SSH access ไหน unrestricted?",
              description:
                "Config rule ตรวจสอบ Security Group ว่ามี 0.0.0.0/0 บน port 22 หรือไม่ — แจ้งเตือนทันทีถ้าเจอ",
            },
            {
              title: "Q: S3 buckets ไหน public?",
              description:
                "Config rule ตรวจสอบ bucket policy + ACL ว่าเปิด public access หรือไม่ — สำคัญสำหรับ data security",
            },
            {
              title: "Q: ALB config เปลี่ยนอย่างไร?",
              description:
                "ดู configuration timeline ของ ALB — เห็นทุกการเปลี่ยนแปลง listener, target group, security group",
            },
            {
              title: "AWS Config Resource View",
              description:
                "ดู compliance + configuration over time ของ resource หนึ่งตัว + CloudTrail API calls ที่เกี่ยวข้อง — รวมข้อมูลในที่เดียว",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Config = Compliance & Configuration History",
          text: "ถ้าโจทย์พูดถึง \"compliance,\" \"track resource configuration,\" \"audit configuration changes,\" \"is my resource compliant?\" — คำตอบคือ <strong>AWS Config</strong>",
        },
      ],
    },
    {
      id: "service-health-dashboard",
      title: "AWS Service Health Dashboard",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Service Health Dashboard</strong> เป็น <strong>public dashboard</strong> ที่แสดงสถานะของ AWS services ทุกตัวในทุก region — ใครก็เข้าดูได้ ไม่ต้อง login",
        },
        {
          type: "list",
          items: [
            "URL: <strong>https://status.aws.amazon.com</strong>",
            "แสดงสถานะของ <strong>ทุก AWS service ทั่วทุก region</strong>",
            "แสดง <strong>service outages และ incidents</strong> ทั่วโลก",
            "ดูประวัติของ events ย้อนหลังได้",
            "เป็น <strong>generic view</strong> ไม่เจาะจงว่า resource ของคุณได้รับผลกระทบหรือไม่",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Use Case",
          text: "เมื่อระบบของคุณมีปัญหา ตรวจสอบที่นี่ก่อนเพื่อดูว่าเป็นปัญหาที่ AWS เองหรือไม่ — ถ้า AWS ขึ้นว่ามี outage ในบริการที่คุณใช้ คุณก็ไม่ต้องไป debug code",
        },
      ],
    },
    {
      id: "personal-health-dashboard",
      title: "AWS Personal Health Dashboard (PHD)",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Personal Health Dashboard (PHD)</strong> ให้ <strong>personalized view</strong> ของสุขภาพ AWS resources ที่คุณใช้งานจริง — แตกต่างจาก Service Health Dashboard ที่เป็น public แบบรวม",
        },
        {
          type: "list",
          items: [
            "<strong>Alerts เมื่อ resource ของคุณเอง</strong> ได้รับผลกระทบ (ไม่ใช่แค่ทุก service)",
            "ให้ <strong>remediation steps</strong> — บอกว่าควรทำอะไรเพื่อแก้ปัญหา",
            "<strong>Proactive notifications:</strong> แจ้งล่วงหน้าเรื่อง scheduled changes เช่น EC2 ที่ underlying hardware กำลังจะถูก retire, RDS maintenance window",
            "Integration กับ EventBridge — automate การตอบสนองเมื่อมี health event",
            "ดูข้อมูล Open issues, Scheduled changes, Other notifications",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Service Health vs Personal Health",
          text: "<strong>Service Health Dashboard</strong> = สถานะ AWS โดยรวม (public, ทุกคน) | <strong>Personal Health Dashboard</strong> = สถานะ resource ของคุณเอง (เฉพาะ account คุณ)",
        },
      ],
    },
    {
      id: "comparison-summary",
      title: "Comparison Summary",
      content: [
        {
          type: "paragraph",
          text: "ตารางสรุปเครื่องมือ Cloud Monitoring แต่ละตัวและ use case:",
        },
        {
          type: "grid",
          items: [
            {
              title: "CloudWatch Metrics",
              description:
                "<strong>Use case:</strong> ดูสถานะ performance ของ resource (CPU, memory, network) — ตอบคำถาม \"ระบบทำงานปกติไหม?\"",
            },
            {
              title: "CloudWatch Logs",
              description:
                "<strong>Use case:</strong> เก็บและ search application logs จาก Lambda, ECS, EC2 — ตอบคำถาม \"app log error อะไร?\"",
            },
            {
              title: "CloudWatch Alarms",
              description:
                "<strong>Use case:</strong> trigger action เมื่อ metric ข้าม threshold เช่น auto scale, ส่ง SNS — ตอบสนองอัตโนมัติ",
            },
            {
              title: "CloudWatch Events / EventBridge",
              description:
                "<strong>Use case:</strong> schedule cron jobs + react ต่อ AWS events — automate workflow",
            },
            {
              title: "CloudTrail",
              description:
                "<strong>Use case:</strong> audit API calls — ตอบคำถาม \"ใครทำอะไร เมื่อไร จากที่ไหน?\" (governance, compliance, security)",
            },
            {
              title: "AWS Config",
              description:
                "<strong>Use case:</strong> track configuration changes + compliance — ตอบคำถาม \"resource ถูกตั้งค่าอย่างไร และ compliant ไหม?\"",
            },
            {
              title: "Service Health Dashboard",
              description:
                "<strong>Use case:</strong> ดูสถานะ AWS services ทั้งหมด (public) — ตอบคำถาม \"AWS ล่มทั่วโลกไหม?\"",
            },
            {
              title: "Personal Health Dashboard",
              description:
                "<strong>Use case:</strong> ดูสถานะ resource ของคุณเอง + remediation — ตอบคำถาม \"resource ของฉันได้รับผลกระทบไหม?\"",
            },
          ],
        },
        {
          type: "paragraph",
          text: "<strong>Decision Tree สำหรับข้อสอบ</strong> — เริ่มจากคำถามใน scenario แล้วจับคู่กับบริการที่ตอบโจทย์โดยตรง:",
        },
        {
          type: "grid",
          items: [
            {
              title: '"ใครทำ?"',
              description:
                "ต้อง audit API call ว่าใครเรียก เมื่อไร จากที่ไหน → <strong>CloudTrail</strong>",
            },
            {
              title: '"ระบบทำงานอย่างไร?"',
              description:
                "ดู performance metric, log และ alarm ของ resource → <strong>CloudWatch</strong>",
            },
            {
              title: '"resource ตั้งค่าอย่างไร / compliant ไหม?"',
              description:
                "ติดตาม configuration change และ compliance rule → <strong>AWS Config</strong>",
            },
            {
              title: '"AWS service ล่มไหม?"',
              description:
                "ดูสถานะบริการ AWS แบบ public ทั่วโลก → <strong>Service Health Dashboard</strong>",
            },
            {
              title: '"resource ของฉัน healthy ไหม?"',
              description:
                "ดูสถานะ resource ใน account ของคุณเอง พร้อม remediation → <strong>Personal Health Dashboard</strong>",
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
          text: '<strong class="text-white">Cloud Monitoring บน AWS</strong> ใช้บริการหลายตัวร่วมกัน — แต่ละตัวมีบทบาทเฉพาะ และเสริมกันเป็นภาพรวมของ <em>visibility</em>, <em>governance</em> และ <em>compliance</em>',
        },
        {
          type: "grid",
          items: [
            {
              title: "Amazon CloudWatch",
              description:
                "Monitoring แบบครบวงจร: <strong>Metrics</strong>, <strong>Alarms</strong>, <strong>Logs</strong>, <strong>Events / EventBridge</strong> และ <strong>Dashboards</strong>",
            },
            {
              title: "AWS CloudTrail",
              description:
                "Audit ทุก API call ใน account — ตอบคำถาม <em>“ใครทำอะไร เมื่อไร จากที่ไหน”</em>",
            },
            {
              title: "AWS Config",
              description:
                "ติดตาม configuration change ของ resource ตามเวลา และตรวจสอบ <strong>compliance rule</strong>",
            },
            {
              title: "Health Dashboards",
              description:
                "<strong>Service Health</strong> = สถานะ AWS แบบ public ส่วน <strong>Personal Health</strong> = สถานะ resource ใน account คุณเอง",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>CloudWatch Metrics:</strong> ตัวเลข performance ของ AWS service และ custom metric รองรับ high-resolution ถึง <strong>1 วินาที</strong>",
            "<strong>CloudWatch Alarms:</strong> มี 3 states (<em>OK / INSUFFICIENT_DATA / ALARM</em>) trigger ASG, EC2 action, SNS หรือ composite alarm",
            "<strong>CloudWatch Logs:</strong> ใช้ log group และ stream เก็บ log จาก Lambda, ECS, VPC Flow Logs, API Gateway ฯลฯ และ query ด้วย Logs Insights",
            "<strong>EventBridge:</strong> cron schedule และ event pattern → trigger Lambda / SNS / SQS รองรับ multiple event buses และ schema registry",
            "<strong>CloudWatch Dashboards:</strong> สูงสุด 1000 dashboards / account และ 100 widgets / dashboard รองรับ cross-region และ cross-account",
            "<strong>CloudTrail Events:</strong> แบ่งเป็น Management, Data และ Insights — เปิด default และดูย้อนหลังได้ <strong>90 วันฟรี</strong>",
            "<strong>AWS Config:</strong> ทำงาน per-region แต่สามารถ aggregate ข้าม account และข้าม region ได้",
            "<strong>Personal Health Dashboard:</strong> ให้คำแนะนำ <em>remediation</em> เมื่อ resource ของคุณได้รับผลกระทบ",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "พร้อมสอบ CLF-C02!",
          text: 'Cloud Monitoring เป็น domain หลักของข้อสอบ — จำสามตัวนี้ให้แม่น: <strong>CloudWatch</strong> = <em>monitoring</em> (ระบบทำงานอย่างไร), <strong>CloudTrail</strong> = <em>audit</em> (ใครทำอะไร) และ <strong>Config</strong> = <em>compliance</em> (resource ตั้งค่าอย่างไร) นี่คือจุดที่โจทย์ชอบเอามาสลับเพื่อหลอก',
        },
      ],
    },
  ],
  quiz: [
    {
      id: "cloud-monitoring-q1",
      question:
        "บริษัทต้องการ audit ว่าใครเป็นคนเรียก API ลบ S3 bucket ในเดือนที่แล้ว ควรใช้ service ใด?",
      options: [
        "Amazon CloudWatch Metrics",
        "Amazon CloudWatch Logs",
        "AWS CloudTrail",
        "AWS Service Health Dashboard",
      ],
      correct: 2,
      explanation:
        "CloudTrail บันทึกทุก API call ภายใน AWS account รวมถึง who (IAM user/role), what (เช่น DeleteBucket), when (timestamp), where (IP) — ใช้สำหรับ audit/governance/compliance ส่วน CloudWatch ใช้ดู metrics + logs ของระบบ ไม่บอกว่า \"ใครทำ\"",
    },
    {
      id: "cloud-monitoring-q2",
      question:
        "CloudWatch Alarm มี state ใดบ้าง?",
      options: [
        "GREEN, YELLOW, RED",
        "OK, WARNING, CRITICAL",
        "OK, INSUFFICIENT_DATA, ALARM",
        "ACTIVE, INACTIVE, PENDING",
      ],
      correct: 2,
      explanation:
        "CloudWatch Alarm มี 3 states: OK (metric อยู่ในเกณฑ์ปกติ), INSUFFICIENT_DATA (ข้อมูลไม่เพียงพอที่จะตัดสิน), และ ALARM (metric ข้าม threshold) — ไม่มี state WARNING, CRITICAL หรือสีแบบ traffic light",
    },
    {
      id: "cloud-monitoring-q3",
      question:
        "ข้อใด <strong>ไม่ใช่</strong> source ของ CloudWatch Logs?",
      options: [
        "AWS Lambda",
        "VPC Flow Logs",
        "Elastic Beanstalk",
        "AWS Config configuration history",
      ],
      correct: 3,
      explanation:
        "Sources ของ CloudWatch Logs ได้แก่ SDK, CloudWatch Logs Agent, Elastic Beanstalk, ECS, Lambda, VPC Flow Logs, API Gateway, CloudTrail, Route 53 ส่วน AWS Config เก็บ configuration history ใน S3 (ไม่ใช่ CloudWatch Logs) แม้ Config จะส่ง notification ผ่าน SNS ได้แต่ไม่ส่ง config history เข้า CloudWatch Logs",
    },
    {
      id: "cloud-monitoring-q4",
      question:
        "ต้องการ track ทุกการเรียก S3 GetObject และ PutObject เพื่อ security audit ควรเปิด CloudTrail event ประเภทใด?",
      options: [
        "Management Events (เปิด default แล้ว)",
        "Data Events (ต้อง opt-in)",
        "Insights Events",
        "Service Events",
      ],
      correct: 1,
      explanation:
        "S3 object-level operations (GetObject, PutObject, DeleteObject) เป็น <strong>Data Events</strong> ซึ่งปิด default เพราะมีปริมาณมหาศาลและเสียค่าใช้จ่าย — ต้องเปิด opt-in ใน Trail settings ส่วน Management Events จะบันทึกการ create/delete bucket แต่ไม่ได้บันทึก object-level access",
    },
    {
      id: "cloud-monitoring-q5",
      question:
        "ต้องการตรวจสอบว่า S3 buckets ตัวใดเปิด public access อยู่ และดู configuration ย้อนหลัง 1 เดือนที่ผ่านมา ควรใช้ service ใด?",
      options: [
        "AWS CloudTrail",
        "Amazon CloudWatch Logs",
        "AWS Config",
        "AWS Personal Health Dashboard",
      ],
      correct: 2,
      explanation:
        "AWS Config บันทึก configurations + changes ของ resource ตลอดเวลา และมี Config Rules ตรวจ compliance เช่น \"S3 bucket ห้าม public\" สามารถดู configuration timeline ย้อนหลังได้ ส่วน CloudTrail บอกว่า \"ใครเปลี่ยน config\" แต่ไม่ได้แสดง state ของ config ในแต่ละช่วงเวลาแบบ Config",
    },
    {
      id: "cloud-monitoring-q6",
      question:
        "ต้องการ schedule ให้ Lambda function ทำงานทุก 1 ชั่วโมง (cron job) ควรใช้ service ใด?",
      options: [
        "CloudWatch Alarms",
        "CloudWatch Events / Amazon EventBridge",
        "AWS Config Rules",
        "CloudTrail Insights",
      ],
      correct: 1,
      explanation:
        "CloudWatch Events (= EventBridge) รองรับ <strong>Schedule (cron)</strong> เพื่อ trigger target เช่น Lambda ตามเวลา และยัง react ต่อ Event Pattern ของ AWS services ได้ด้วย ส่วน CloudWatch Alarms ใช้ trigger เมื่อ metric ข้าม threshold ไม่ได้ทำ scheduling",
    },
    {
      id: "cloud-monitoring-q7",
      question:
        "ผู้ใช้ต้องการดูว่า EC2 instance ของตัวเองได้รับผลกระทบจาก hardware maintenance ที่ AWS กำลังจะทำหรือไม่ พร้อม remediation steps ควรใช้บริการใด?",
      options: [
        "AWS Service Health Dashboard (status.aws.amazon.com)",
        "AWS Personal Health Dashboard (PHD)",
        "Amazon CloudWatch Dashboard",
        "AWS CloudTrail",
      ],
      correct: 1,
      explanation:
        "<strong>Personal Health Dashboard (PHD)</strong> ให้ personalized view เฉพาะ resource ของ account คุณเอง รวมถึง proactive notifications เรื่อง scheduled changes (เช่น EC2 underlying hardware ใกล้ retire) พร้อม remediation steps ส่วน Service Health Dashboard เป็น public view รวมของทุก service ไม่เจาะจงว่า resource ของคุณกระทบหรือไม่",
    },
    {
      id: "cloud-monitoring-q8",
      question:
        "CloudTrail Insights ใช้ทำอะไร?",
      options: [
        "ส่ง CloudTrail logs ไปเก็บใน S3 อัตโนมัติ",
        "ตรวจจับ unusual API activity (anomaly detection) เช่น API call spike",
        "Query CloudTrail logs ด้วย SQL",
        "บันทึก S3 object-level access events",
      ],
      correct: 1,
      explanation:
        "CloudTrail Insights ใช้ machine learning วิเคราะห์ API activity patterns แล้วแจ้งเตือนเมื่อพบ <strong>unusual activity / anomaly</strong> เช่น API call spike, error rate สูงผิดปกติ ส่วนการ query ด้วย SQL คือ CloudTrail Lake และ S3 object-level access คือ Data Events (ไม่ใช่ Insights)",
    },
  ],
};
