import { TopicData } from "@/types/topic";

export const cloudMonitoring: TopicData = {
  slug: "cloud-monitoring",
  title: "Cloud Monitoring",
  subtitle: "CloudWatch, CloudTrail, Config & Health",
  accent: "teal",
  category: "Management & Governance",
  description:
    "Cloud Monitoring บน AWS ครอบคลุม 4 บริการหลักในการดูแลระบบ: CloudWatch (metrics + logs + events), CloudTrail (audit API calls), AWS Config (compliance + config history), และ Health Dashboards (สถานะ service ของ AWS) — ใช้ร่วมกันเพื่อ visibility, troubleshoot, security audit และ cost optimization",
  keyPoints: [
    "CloudWatch — เก็บ metrics, logs, alarms, dashboards จาก AWS services และ apps",
    "CloudTrail — บันทึกทุก API call เพื่อ governance, compliance, audit",
    "AWS Config — track การเปลี่ยนแปลง configuration ของ resource และ compliance",
    "Service Health Dashboard (public) vs AWS Health Dashboard (your account/resources)",
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
                "Service Health Dashboard (สถานะ AWS public) + AWS Health Dashboard (resource ของคุณ)",
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
          text: "CloudWatch = <strong>W</strong>orkload monitoring (สถานะระบบ)<br>CloudTrail = <strong>T</strong>rail of who did what (เส้นทางผู้ใช้)",
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
      title: "AWS Health Dashboard (formerly Personal Health Dashboard)",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Health Dashboard</strong> (เดิมชื่อ Personal Health Dashboard) ให้ <strong>personalized view</strong> ของสุขภาพ AWS resources ที่คุณใช้งานจริง — แตกต่างจาก Service Health Dashboard ที่เป็น public แบบรวม",
        },
        {
          type: "list",
          items: [
            "<strong>Alerts เมื่อ resource ของคุณเอง</strong> ได้รับผลกระทบ (ไม่ใช่แค่ทุก service)",
            "ให้ <strong>remediation steps</strong> — บอกว่าควรทำอะไรเพื่อแก้ปัญหา",
            "<strong>Proactive notifications:</strong> แจ้งล่วงหน้าเรื่อง scheduled changes เช่น EC2 ที่ underlying hardware กำลังจะถูก retire, RDS maintenance window",
            "Integration กับ EventBridge — automate การตอบสนองเมื่อมี health event",
            "<strong>AWS Health API</strong> — programmatic access ดึง health events ไป integrate กับระบบ ITSM/monitoring เอง (ต้องใช้ Business / Enterprise On-Ramp / Enterprise Support plan)",
            "ดูข้อมูล Open issues, Scheduled changes, Other notifications",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Service Health vs AWS Health Dashboard",
          text: "<strong>Service Health Dashboard</strong> = สถานะ AWS โดยรวม (public, ทุกคน)<br><strong>AWS Health Dashboard</strong> (เดิม Personal Health Dashboard) = สถานะ resource ของคุณเอง (เฉพาะ account คุณ)",
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
              title: "AWS Health Dashboard",
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
                "ดูสถานะ resource ใน account ของคุณเอง พร้อม remediation → <strong>AWS Health Dashboard</strong> (เดิม Personal Health Dashboard)",
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
            "<strong>AWS Health Dashboard:</strong> ให้คำแนะนำ <em>remediation</em> เมื่อ resource ของคุณได้รับผลกระทบ",
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
      id: "cm-q1",
      question:
        "A company wants to audit who called the API to delete an S3 bucket last month. Which service should they use?",
      options: [
        "Amazon CloudWatch",
        "AWS CloudTrail",
        "AWS Config",
        "AWS Trusted Advisor",
      ],
      correct: 1,
      explanation:
        "AWS CloudTrail logs every API call (who, what, when, where) for governance, compliance, and operational/risk auditing. By default, retention is 90 days in the Event History; for longer retention, use a CloudTrail trail to S3.",
    },
    {
      id: "cm-q2",
      question:
        "Which AWS service collects metrics, logs, and events for monitoring AWS resources and applications?",
      options: [
        "Amazon CloudWatch",
        "AWS CloudTrail",
        "AWS Config",
        "Amazon Inspector",
      ],
      correct: 0,
      explanation:
        "Amazon CloudWatch is the unified observability service — metrics, logs, events, alarms, dashboards, and ServiceLens for AWS resources and applications.",
    },
    {
      id: "cm-q3",
      question:
        "Which AWS service tracks resource configuration changes over time and evaluates compliance against rules?",
      options: [
        "AWS Config",
        "AWS CloudTrail",
        "Amazon CloudWatch",
        "AWS Trusted Advisor",
      ],
      correct: 0,
      explanation:
        "AWS Config records the configuration history of AWS resources and evaluates compliance using managed or custom rules — useful for compliance and security baseline enforcement.",
    },
    {
      id: "cm-q4",
      question:
        "Which AWS service provides best-practice recommendations across cost, performance, security, fault tolerance, and service limits?",
      options: [
        "AWS Trusted Advisor",
        "AWS Config",
        "AWS CloudTrail",
        "Amazon Inspector",
      ],
      correct: 0,
      explanation:
        "AWS Trusted Advisor analyzes your account and recommends improvements across 6 categories: cost optimization, performance, security, fault tolerance, service limits, and operational excellence (added in 2022).",
    },
    {
      id: "cm-q5",
      question:
        "Which CloudWatch concept triggers an action (e.g., notify SNS, scale ASG) when a metric crosses a threshold?",
      options: [
        "CloudWatch Alarm",
        "CloudWatch Log",
        "CloudWatch Event",
        "CloudWatch Dashboard",
      ],
      correct: 0,
      explanation:
        "A CloudWatch Alarm watches a metric and transitions states (OK / ALARM / INSUFFICIENT_DATA). Alarms can trigger SNS, Auto Scaling actions, or EC2 actions.",
    },
    {
      id: "cm-q6",
      question:
        "Which CloudWatch feature collects custom application logs from EC2 instances, on-premises servers, or Lambda?",
      options: [
        "CloudWatch Logs (with the CloudWatch agent for EC2/on-prem)",
        "CloudTrail",
        "AWS Config",
        "X-Ray",
      ],
      correct: 0,
      explanation:
        "CloudWatch Logs collects, monitors, and stores log files. Use the CloudWatch agent on EC2 or on-prem servers; Lambda automatically sends logs.",
    },
    {
      id: "cm-q7",
      question:
        "What is the difference between CloudWatch and CloudTrail?",
      options: [
        "They are the same.",
        "CloudWatch monitors performance/operational metrics and logs; CloudTrail logs API calls / audit history.",
        "CloudTrail is for performance; CloudWatch is for audits.",
        "Both are billing services.",
      ],
      correct: 1,
      explanation:
        "CloudWatch = monitoring (metrics + logs + alarms + dashboards). CloudTrail = governance/audit (who-did-what API call log).",
    },
    {
      id: "cm-q8",
      question:
        "What does Amazon CloudWatch Logs Insights do?",
      options: [
        "Encrypts log files.",
        "Provides interactive log search and analytics with a purpose-built query language.",
        "Records API calls.",
        "Replaces CloudWatch Alarms.",
      ],
      correct: 1,
      explanation:
        "CloudWatch Logs Insights is a query language for fast interactive log search and analytics — pattern matching, statistical analysis, and visualization on log data.",
    },
    {
      id: "cm-q9",
      question:
        "Which service helps detect security findings on EC2, Lambda, and ECR using continuous vulnerability scanning?",
      options: [
        "Amazon Inspector",
        "Amazon GuardDuty",
        "AWS WAF",
        "AWS Shield",
      ],
      correct: 0,
      explanation:
        "Amazon Inspector continuously scans EC2 instances, Lambda functions, and ECR container images for vulnerabilities and unintended network exposure.",
    },
    {
      id: "cm-q10",
      question:
        "Which AWS service uses ML to detect malicious or unauthorized activity in your AWS account, including unusual API calls and crypto-mining?",
      options: [
        "Amazon GuardDuty",
        "Amazon Inspector",
        "AWS Trusted Advisor",
        "AWS Config",
      ],
      correct: 0,
      explanation:
        "Amazon GuardDuty is a managed threat-detection service. Uses ML, anomaly detection, and AWS-curated threat intelligence to monitor for malicious activity (CloudTrail logs, VPC flow logs, DNS logs, etc.).",
    },
    {
      id: "cm-q11",
      question:
        "By default, how long does CloudTrail store events visible in the Event History?",
      options: ["7 days", "30 days", "90 days", "Forever"],
      correct: 2,
      explanation:
        "CloudTrail Event History keeps the last 90 days of management events, browseable in the console. For longer retention or data events, create a CloudTrail trail to deliver logs to S3.",
    },
    {
      id: "cm-q12",
      question:
        "Which CloudWatch metric is enabled BY DEFAULT for EC2?",
      options: [
        "Memory utilization",
        "CPU utilization, Disk I/O, Network I/O (basic metrics, 5-min interval)",
        "Application errors",
        "All of the above",
      ],
      correct: 1,
      explanation:
        "EC2 default CloudWatch metrics: CPU utilization, network in/out, disk read/write — at 5-minute intervals. Memory and disk-utilization-percentage are NOT default; you need the CloudWatch agent for those.",
    },
    {
      id: "cm-q13",
      question:
        "Which CloudWatch feature provides a more granular metric collection rate (1-minute or 1-second intervals)?",
      options: [
        "Detailed Monitoring (1-min) and High-Resolution custom metrics (1-sec)",
        "Basic Monitoring",
        "Free metrics",
        "X-Ray",
      ],
      correct: 0,
      explanation:
        "EC2 Detailed Monitoring (paid feature) collects metrics every 1 minute (vs default 5). Custom metrics can be high-resolution (1-second granularity).",
    },
    {
      id: "cm-q14",
      question:
        "What is AWS Health Dashboard?",
      options: [
        "A dashboard showing the health of EC2 instances.",
        "A service that provides personalized info on AWS service health and any events that may affect your AWS resources.",
        "A monitoring service for on-premises infrastructure.",
        "A billing dashboard.",
      ],
      correct: 1,
      explanation:
        "AWS Health Dashboard (formerly Personal Health Dashboard) shows AWS service health and any events specifically affecting your account — outages, maintenance, deprecations.",
    },
    {
      id: "cm-q15",
      question:
        "Which AWS service produces a single point of view for compliance status across multiple accounts, integrating Config, GuardDuty, Inspector?",
      options: [
        "AWS Security Hub",
        "Amazon GuardDuty alone",
        "AWS Config alone",
        "AWS Shield",
      ],
      correct: 0,
      explanation:
        "AWS Security Hub aggregates findings from GuardDuty, Inspector, Macie, IAM Access Analyzer, and partner products. Single-pane view of security posture and compliance.",
    },
    {
      id: "cm-q16",
      question:
        "What is CloudWatch Synthetics?",
      options: [
        "A backup service.",
        "Canaries (configurable scripts) that monitor endpoints and APIs from outside, simulating user behavior.",
        "A service that creates EC2 instances.",
        "A type of CloudTrail.",
      ],
      correct: 1,
      explanation:
        "CloudWatch Synthetics canaries run on a schedule, simulate end-user paths (loading pages, hitting APIs), and report results — proactive monitoring before users notice problems.",
    },
    {
      id: "cm-q17",
      question:
        "Which CloudWatch feature visualizes customizable graphs of metrics?",
      options: [
        "CloudWatch Dashboards",
        "CloudWatch Alarms",
        "CloudWatch Logs",
        "CloudWatch Events",
      ],
      correct: 0,
      explanation:
        "CloudWatch Dashboards are customizable home pages — graphs, numbers, text, and alarms — for monitoring resources at a glance. Cross-region/cross-account dashboards supported.",
    },
    {
      id: "cm-q18",
      question:
        "Which CloudWatch feature listens to AWS events (e.g., 'EC2 state changed', 'CloudFormation stack failed') and triggers actions?",
      options: [
        "Amazon EventBridge (formerly CloudWatch Events)",
        "CloudWatch Logs",
        "CloudWatch Alarms",
        "CloudTrail",
      ],
      correct: 0,
      explanation:
        "CloudWatch Events / Amazon EventBridge listens for AWS service events and triggers targets (Lambda, SNS, SQS, Step Functions, etc.). EventBridge is the modern superset.",
    },
    {
      id: "cm-q19",
      question:
        "Which Trusted Advisor category checks for over-provisioned EC2 instances and idle ELBs to save cost?",
      options: [
        "Cost Optimization",
        "Performance",
        "Security",
        "Fault Tolerance",
      ],
      correct: 0,
      explanation:
        "Trusted Advisor's Cost Optimization checks include idle load balancers, low-utilization EC2 instances, unassociated Elastic IPs, RDS recommendations, etc.",
    },
    {
      id: "cm-q20",
      question:
        "Which AWS service watches for sensitive data (PII, financial info) in S3 buckets using ML?",
      options: [
        "Amazon Macie",
        "Amazon GuardDuty",
        "Amazon Inspector",
        "AWS Config",
      ],
      correct: 0,
      explanation:
        "Amazon Macie uses ML and pattern matching to discover and protect sensitive data (PII, credit card numbers, etc.) in S3 buckets. Reports findings via Security Hub.",
    },
    {
      id: "cm-q21",
      question:
        "Which AWS service stores audit logs for an extended period and can be analyzed with Athena?",
      options: [
        "Send CloudTrail events to S3 (a CloudTrail trail), then query with Athena.",
        "Use only Event History.",
        "Use IAM Credentials Report.",
        "Use Trusted Advisor archive.",
      ],
      correct: 0,
      explanation:
        "Best practice: create a CloudTrail trail that delivers logs to S3 (and optionally CloudWatch Logs). Use Amazon Athena to query CloudTrail JSON logs in S3 with SQL.",
    },
    {
      id: "cm-q22",
      question:
        "Which service helps you analyze and visualize VPC traffic flows for security and troubleshooting?",
      options: [
        "VPC Flow Logs (delivered to CloudWatch Logs or S3)",
        "AWS Trusted Advisor",
        "AWS Config",
        "Amazon Inspector",
      ],
      correct: 0,
      explanation:
        "VPC Flow Logs capture IP traffic info for ENIs in a VPC, subnet, or specific ENI — sent to CloudWatch Logs or S3. Useful for troubleshooting and security analysis.",
    },
    {
      id: "cm-q23",
      question:
        "Which AWS feature analyzes changes to AWS resources and can automatically remediate non-compliance via SSM?",
      options: [
        "AWS Config Rules with Auto-Remediation",
        "CloudWatch Alarms",
        "CloudTrail",
        "Trusted Advisor",
      ],
      correct: 0,
      explanation:
        "AWS Config Rules can be configured with Auto-Remediation — when a rule is violated, AWS Config triggers an SSM Automation document to fix the issue automatically.",
    },
    {
      id: "cm-q24",
      question:
        "What is the BEST description of AWS X-Ray?",
      options: [
        "A monitoring agent for EC2.",
        "A distributed tracing service that helps debug performance issues across microservices.",
        "A backup service.",
        "An audit service.",
      ],
      correct: 1,
      explanation:
        "AWS X-Ray provides distributed tracing — visualizes request paths through Lambda, ECS, EC2, API Gateway, etc., showing latency and errors at each hop.",
    },
    {
      id: "cm-q25",
      question:
        "Which service combines logs, metrics, and traces into a single observability platform?",
      options: [
        "Amazon CloudWatch (with CloudWatch Logs, ServiceLens, X-Ray integration)",
        "AWS Config alone",
        "AWS CloudTrail alone",
        "Amazon Inspector alone",
      ],
      correct: 0,
      explanation:
        "Amazon CloudWatch — combined with X-Ray, ServiceLens, Container Insights, Lambda Insights — provides unified observability (metrics + logs + traces) for AWS workloads.",
    },
  ],
};
