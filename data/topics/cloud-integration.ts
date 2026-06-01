import { TopicData } from "@/types/topic";

export const cloudIntegration: TopicData = {
  slug: "cloud-integration",
  title: "Cloud Integration",
  subtitle: "SQS, SNS, Kinesis & Amazon MQ",
  accent: "fuchsia",
  category: "Application Integration",
  description:
    "Cloud Integration คือกลุ่มบริการที่ช่วยให้ applications สื่อสารกันได้แบบ decoupled — ไม่ต้องรอกัน, scale แยกกัน, และไม่พังพร้อมกัน ครอบคลุม SQS (queue), SNS (pub/sub), Kinesis (streaming), Amazon MQ (traditional protocols) ซึ่งเป็นพื้นฐานของ event-driven architecture บน AWS",
  keyPoints: [
    "SQS — queue: producer ส่ง, consumer pull, retention 4-14 วัน, มี DLQ",
    "SNS — pub/sub: publisher ส่งครั้งเดียว, push ไปทุก subscriber (ได้ถึง 10M)",
    "Kinesis — real-time streaming data ที่ scale ได้ระดับ big data",
    "Amazon MQ — managed message broker สำหรับ MQTT/AMQP/STOMP (migrate on-prem)",
  ],
  sections: [
    {
      id: "section-intro",
      title: "Section Introduction",
      content: [
        {
          type: "paragraph",
          text: "ใน cloud applications ที่มีหลาย services การสื่อสารระหว่างกันสามารถทำได้ <strong>2 รูปแบบหลัก</strong> — แต่ละแบบมีข้อดีข้อเสียและเหมาะกับสถานการณ์ต่างกัน",
        },
        {
          type: "list",
          items: [
            "<strong>Synchronous communication:</strong> app-to-app โดยตรง (ผู้ส่งต้องรอผู้รับตอบ)",
            "<strong>Asynchronous / Event-based communication:</strong> สื่อสารผ่านตัวกลาง (queue, topic, stream) — ทั้งสองฝั่งทำงานอิสระกัน",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "ปัญหาของ Synchronous",
          text: "ถ้ามี traffic spike กะทันหัน — service ผู้รับอาจรับไม่ไหว ล่ม และทำให้ทั้ง chain พังตามกัน (cascading failure) ไม่ scale",
        },
        {
          type: "paragraph",
          text: "<strong>ทางออก:</strong> Decouple ระบบด้วย integration services — ทำให้แต่ละส่วน scale ได้อย่างอิสระ และไม่พึ่งพากันโดยตรง",
        },
        {
          type: "grid",
          items: [
            {
              title: "SQS — Queue Model",
              description:
                "Decouple producer-consumer ผ่าน queue ผู้ส่งทิ้ง message ไว้ ผู้รับมาดึงตอนพร้อม ไม่ต้องรอกัน",
            },
            {
              title: "SNS — Pub/Sub Model",
              description:
                "Publisher ส่งครั้งเดียว Subscribers ได้รับทุกคน เหมาะกับ notification และ fan-out",
            },
            {
              title: "Kinesis — Streaming Model",
              description:
                "Real-time data streaming สำหรับ big data, analytics, และ IoT scale ได้สูงมาก",
            },
          ],
        },
      ],
    },
    {
      id: "sync-vs-async",
      title: "Synchronous vs Asynchronous Communication",
      content: [
        {
          type: "paragraph",
          text: "เข้าใจความแตกต่างระหว่าง <strong>sync</strong> และ <strong>async</strong> เป็นพื้นฐานสำคัญในการเลือก integration pattern ที่เหมาะสม",
        },
        {
          type: "code",
          language: "text",
          caption: "Synchronous Communication",
          code: `App A  ──── HTTP request ────►  App B
       ◄─── HTTP response ────

  - App A ต้อง "รอ" จนกว่า App B จะตอบกลับ
  - ถ้า App B ช้า → App A ก็ช้าตาม
  - ถ้า App B ล่ม → App A error ทันที
  - Traffic spike → App B รับไม่ไหว → ทั้งระบบพัง`,
        },
        {
          type: "code",
          language: "text",
          caption: "Asynchronous / Event-based Communication",
          code: `App A  ──► [SQS Queue / SNS Topic / Kinesis] ──► App B
                       ▲ ตัวกลาง (buffer)

  - App A ส่งแล้วจบ ไม่ต้องรอ App B
  - App B ค่อย consume เมื่อพร้อม (rate ของตัวเอง)
  - App B ล่ม → message รออยู่ใน queue ไม่หาย
  - Traffic spike → queue ดูดซับไว้ → App B ไม่พัง`,
        },
        {
          type: "list",
          items: [
            "<strong>Sync เหมาะกับ:</strong> งานที่ต้องการคำตอบทันที เช่น login, payment confirmation, query data",
            "<strong>Async เหมาะกับ:</strong> งานที่ไม่ต้องรอผล เช่น send email, process order, generate report, log analytics",
            "<strong>Decoupling = Resilience:</strong> services ไม่พึ่งพากันโดยตรง → ตัวหนึ่งล่ม ตัวอื่นยังทำงานได้",
            "<strong>Independent scaling:</strong> producer และ consumer scale ได้คนละ rate",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "ทำไม Decoupling จึงสำคัญ?",
          text: "ในระบบจริง services มักทำงานคนละความเร็ว — frontend รับ request เร็ว แต่ backend processing ช้า การมี queue คั่นกลางช่วย buffer load และทำให้ระบบทนต่อ failure ได้ดีขึ้น",
        },
      ],
    },
    {
      id: "sqs",
      title: "Amazon SQS (Simple Queue Service)",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon SQS</strong> เป็น service ที่เก่าแก่ที่สุดของ AWS (เปิดตัวกว่า 10 ปีแล้ว) เป็น <em>fully managed message queue</em> (~serverless) ใช้ decouple applications ระหว่างกัน",
        },
        {
          type: "list",
          items: [
            "<strong>Scale อัตโนมัติ:</strong> 1 message/วินาที → 10,000+ messages/วินาที",
            "<strong>Default retention:</strong> 4 วัน, <strong>maximum:</strong> 14 วัน",
            "<strong>ไม่จำกัด</strong>จำนวน messages ใน queue",
            "Messages ถูก <strong>ลบหลัง consumer อ่านสำเร็จ</strong> (consumer ต้องเรียก delete)",
            "<strong>Low latency:</strong> < 10ms ในการส่งและรับ message",
            "Message size สูงสุด <strong>256 KB</strong> ต่อ message",
            "Consumers สามารถ <strong>แชร์งานกัน</strong> (horizontal scaling — เพิ่ม consumer = เพิ่ม throughput)",
          ],
        },
        {
          type: "code",
          language: "text",
          caption: "SQS Architecture",
          code: `Producer 1 ──┐
Producer 2 ──┼──► [ SQS Queue ] ──► Consumer 1 (process & delete)
Producer 3 ──┘                  ──► Consumer 2 (process & delete)
                                ──► Consumer 3 (process & delete)

  - Producers ส่ง message เข้า queue
  - Consumers แต่ละตัวแย่งกันดึง message ไป process
  - Consumer หลายตัว = scale horizontally`,
        },
        {
          type: "grid",
          items: [
            {
              title: "SQS Standard Queue",
              description:
                "Unlimited throughput, best-effort ordering, at-least-once delivery (อาจมี message ซ้ำ) — เหมาะกับ high volume ทั่วไป",
            },
            {
              title: "SQS FIFO Queue",
              description:
                "First-In-First-Out ordering, exactly-once delivery (ไม่ซ้ำ) แต่ throughput ต่ำกว่า (300-3,000 msg/s) — เหมาะกับงานที่ลำดับสำคัญ",
            },
          ],
        },
        {
          type: "paragraph",
          text: "<strong>Visibility Timeout:</strong> เมื่อ consumer อ่าน message — message จะ <em>invisible</em> สำหรับ consumer ตัวอื่นชั่วคราว (default 30 วินาที) เพื่อป้องกันการ process ซ้ำ ถ้า consumer ทำเสร็จก็ delete ถ้าไม่เสร็จในเวลา message กลับมา visible อีกครั้ง",
        },
        {
          type: "paragraph",
          text: "<strong>Dead Letter Queue (DLQ):</strong> ถ้า message ถูก process ล้มเหลวซ้ำๆ (เกิน maxReceiveCount) → จะถูกย้ายไปยัง DLQ เพื่อให้ developer ตรวจสอบและ debug — แทนที่จะ retry ไปเรื่อยๆ และ block queue",
        },
        {
          type: "callout",
          variant: "info",
          title: "SQS = Buffer สำคัญ",
          text: "SQS ทำหน้าที่ buffer ระหว่าง producer และ consumer — ถ้า traffic spike, queue รับเก็บไว้ก่อน, consumer ค่อย process ตาม rate ที่ทำได้ ไม่มี data loss",
        },
      ],
    },
    {
      id: "sns",
      title: "Amazon SNS (Simple Notification Service)",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon SNS</strong> ใช้ <em>Pub/Sub model</em> — event publishers ส่ง message ไปที่ <strong>1 Topic</strong> เดียว แล้ว <strong>subscribers ทุกตัว</strong>ที่ subscribe topic นั้นจะได้รับ message ทุกอัน",
        },
        {
          type: "list",
          items: [
            "<strong>Up to 10,000,000 subscriptions</strong> ต่อ 1 topic",
            "<strong>Limit 100,000 topics</strong> ต่อ AWS account",
            "Push-based — SNS push ไปหา subscribers ทันทีที่มี message ใหม่",
            "ไม่มี message retention — ถ้า subscriber รับไม่ทัน message หาย (ยกเว้น HTTP retry)",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "HTTP / HTTPS",
              description:
                "ส่ง HTTP POST ไปยัง URL ที่กำหนด มี delivery retries อัตโนมัติถ้า endpoint ล่ม (configurable retry policy)",
            },
            {
              title: "Email",
              description:
                "ส่ง notification เป็น email ตรงเข้า inbox เหมาะสำหรับ alert admin/team",
            },
            {
              title: "SMS",
              description:
                "ส่ง SMS ไปยังเบอร์โทรศัพท์ เหมาะกับ urgent alerts (รองรับหลายประเทศ)",
            },
            {
              title: "Mobile Notifications",
              description:
                "Push notification ไปยัง iOS, Android, Kindle Fire ผ่าน APNS, FCM, ADM",
            },
            {
              title: "SQS Queues",
              description:
                "ส่งเข้า SQS queue หลายตัวพร้อมกัน — ใช้ใน Fan-out pattern",
            },
            {
              title: "Lambda Functions",
              description:
                "Trigger Lambda function ทุกครั้งที่มี message — process notification แบบ serverless",
            },
          ],
        },
        {
          type: "code",
          language: "text",
          caption: "Fan-out Pattern (SNS + SQS)",
          code: `Publisher ──► SNS Topic ──┬──► SQS Queue A ──► Service A
                          ├──► SQS Queue B ──► Service B
                          ├──► SQS Queue C ──► Service C
                          └──► Lambda Function ──► Service D

  - Publisher ส่งครั้งเดียว → ทุก subscriber ได้รับ
  - แต่ละ consumer process อิสระกัน
  - เพิ่ม subscriber ใหม่ได้โดยไม่แก้ publisher
  - SQS ใน fan-out ทำหน้าที่ buffer + persistence`,
        },
        {
          type: "paragraph",
          text: "<strong>SNS Filtering:</strong> Subscriber แต่ละตัวสามารถกำหนด <em>filter policy</em> (JSON) เพื่อรับเฉพาะ messages ที่ตรงตามเงื่อนไข — ลด load และ cost (ไม่ต้อง process message ที่ไม่เกี่ยวข้อง)",
        },
        {
          type: "callout",
          variant: "tip",
          title: "ทำไมต้อง Fan-out?",
          text: "ถ้าส่ง message ตรงไปหา 3 services แล้ว 1 ตัวพัง message หายแน่นอน แต่ผ่าน SNS + SQS — message อยู่ใน queue รอ service กลับมา ไม่มี data loss + เพิ่ม subscriber ใหม่ได้ง่ายโดยไม่แก้ producer",
        },
      ],
    },
    {
      id: "sns-vs-sqs",
      title: "SNS vs SQS Comparison",
      content: [
        {
          type: "paragraph",
          text: "SNS และ SQS มักถูกถามให้เปรียบเทียบในข้อสอบ — เข้าใจความแตกต่างเพื่อเลือกใช้ถูกตัว:",
        },
        {
          type: "grid",
          items: [
            {
              title: "SNS — Pub/Sub Model",
              description:
                "Push ไปหา subscribers หลายตัวพร้อมกัน — one message → many receivers (broadcast). ไม่มี retention (data loss ถ้า subscriber ล่ม) รองรับสูงสุด 10M subscribers/topic หลายแบบ (Email, SMS, HTTP, Lambda, SQS)",
            },
            {
              title: "SQS — Message Queue",
              description:
                "Pull-based: consumers แย่งกันดึง message — one message → one consumer (compete). Retention 4-14 วัน (data persist) มี DLQ สำหรับ failed messages เหมาะกับ decoupling + buffering",
            },
          ],
        },
        {
          type: "code",
          language: "text",
          caption: "เปรียบเทียบรวม",
          code: `Feature              | SNS                      | SQS
─────────────────────|──────────────────────────|─────────────────────────
Model                | Pub/Sub (push)           | Queue (pull)
Distribution         | One-to-many (broadcast)  | One-to-one (compete)
Retention            | ไม่เก็บ (no retention)     | 4 วัน default, 14 วัน max
Subscribers / Consumers | 10M subscribers/topic | unlimited consumers
DLQ                  | Yes (ผ่าน SQS)            | Yes (built-in)
Use Case             | Notifications, fan-out   | Decoupling, buffering`,
        },
        {
          type: "callout",
          variant: "info",
          title: "ใช้ร่วมกันได้!",
          text: "SNS + SQS Fan-out pattern เป็น best practice สุด — SNS กระจาย message ไปหลาย SQS queues แต่ละ queue มี consumer แยกกัน process อิสระ + persist message ไว้ในกรณี consumer ล่ม",
        },
      ],
    },
    {
      id: "kinesis",
      title: "Amazon Kinesis",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Kinesis</strong> เป็น <em>managed service</em> สำหรับ <strong>real-time big data streaming</strong> — เก็บ, process, วิเคราะห์ streaming data ที่ scale ได้ระดับ big data",
        },
        {
          type: "list",
          items: [
            "<strong>Real-time</strong> ไม่ใช่ batch — process data ทันทีที่เข้ามา",
            "Scale ได้ระดับ <strong>หลายแสน data sources</strong> พร้อมกัน",
            "เหมาะสำหรับ application logs, metrics, IoT, clickstreams, social media data",
            "เก็บข้อมูลใน stream ได้ <strong>1-365 วัน</strong> สำหรับ replay และ multiple consumers",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Kinesis Data Streams",
              description:
                "Low-latency ingestion ที่ scale รับ data จากหลายแสน sources พร้อมกัน — เป็นตัวหลักของ Kinesis ใช้สำหรับ real-time data pipeline",
            },
            {
              title: "Amazon Data Firehose (เดิม Kinesis Data Firehose)",
              description:
                "Load streaming data ไปเก็บที่ S3, Redshift, OpenSearch, Splunk — fully managed, ไม่ต้องเขียน code, near real-time (~60s buffer). AWS rebrand ปี 2024",
            },
            {
              title: "Managed Service for Apache Flink (เดิม Kinesis Data Analytics)",
              description:
                "วิเคราะห์ streaming data แบบ real-time ด้วย <strong>SQL queries</strong> หรือ Apache Flink — ไม่ต้อง manage infrastructure",
            },
            {
              title: "Kinesis Video Streams",
              description:
                "Stream video จาก devices ไปเก็บและวิเคราะห์บน AWS เพื่อทำ analytics หรือ ML (เช่น face recognition, security cameras)",
            },
          ],
        },
        {
          type: "code",
          language: "text",
          caption: "Kinesis Use Case Example",
          code: `IoT Sensors ──► Kinesis Data Streams ──► Managed Service for Flink (SQL real-time)
   (100k sensors)                          ──► Amazon Data Firehose ──► S3 (archive)
                                            ──► Lambda ──► DynamoDB (alerts)`,
        },
        {
          type: "callout",
          variant: "tip",
          title: "Kinesis vs SQS",
          text: "Kinesis เหมาะกับ <strong>streaming data ปริมาณมหาศาล</strong> ที่ต้องการ real-time analytics และ replay ได้ ส่วน SQS เหมาะกับ <strong>discrete messages</strong> ที่ process ทีละตัวและลบทิ้ง",
        },
      ],
    },
    {
      id: "amazon-mq",
      title: "Amazon MQ",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon MQ</strong> เป็น <em>managed message broker</em> สำหรับ <strong>traditional protocols</strong> ที่ใช้กันมานานก่อนยุค cloud-native — เช่น MQTT, AMQP, STOMP, Openwire, WSS",
        },
        {
          type: "list",
              items: [
            "Managed <strong>Apache ActiveMQ</strong> และ <strong>RabbitMQ</strong>",
            "รองรับ protocols: <strong>MQTT, AMQP, STOMP, Openwire, WSS</strong>",
            "มีทั้ง <strong>queue feature (~SQS)</strong> และ <strong>topic feature (~SNS)</strong> ในตัวเดียว",
            "<strong>ไม่ scale</strong> ได้แบบ SQS/SNS — รันบน <em>dedicated server</em> (ไม่ใช่ serverless)",
            "เหมาะกับการ <strong>migrate on-premises applications</strong> มาที่ cloud โดยไม่ต้อง re-engineer code",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "เมื่อไรควรใช้ Amazon MQ?",
          text: "ใช้เมื่อต้อง<strong>ย้าย application เก่า</strong>จาก on-premises มา cloud และ application นั้นใช้ traditional message protocols (MQTT, AMQP, etc.) — แทนที่จะเขียนใหม่ให้ใช้ SQS/SNS ก็ใช้ MQ ที่รองรับ protocol เดิมได้เลย",
        },
        {
          type: "code",
          language: "text",
          caption: "เปรียบเทียบ Amazon MQ กับ SQS/SNS",
          code: `                    | Amazon MQ          | SQS / SNS
────────────────────|────────────────────|───────────────────
Type                | Managed broker     | Cloud-native service
Protocols           | MQTT, AMQP, STOMP, | AWS proprietary API
                    | Openwire, WSS      |
Scale               | Limited (server)   | Massive (serverless)
Architecture        | Dedicated machines | Fully serverless
Features            | Queue + Topic      | SQS=queue, SNS=topic
Use case            | Migrate on-prem    | Cloud-native apps`,
        },
        {
          type: "paragraph",
          text: "<strong>Note:</strong> Amazon MQ ทำงานบน dedicated machines (instance-based) จึงต้อง <em>provision capacity</em> ล่วงหน้า ต่างจาก SQS/SNS ที่เป็น serverless และ scale อัตโนมัติ",
        },
      ],
    },
    {
      id: "when-to-use",
      title: "When to Use Which?",
      content: [
        {
          type: "paragraph",
          text: "Decision matrix สำหรับเลือก integration service ที่เหมาะกับงาน — เป็นจุดที่ข้อสอบมักถามบ่อย:",
        },
        {
          type: "grid",
          items: [
            {
              title: "ใช้ SQS เมื่อ...",
              description:
                "ต้องการ <strong>decouple</strong> producer-consumer แบบง่ายๆ — async processing เช่น background jobs ต้องการ retry logic + DLQ สำหรับ error handling buffer load ระหว่าง services",
            },
            {
              title: "ใช้ SNS เมื่อ...",
              description:
                "ต้องส่ง <strong>notifications</strong> (email, SMS, push) — fan-out ไปหลาย consumers พร้อมกัน trigger Lambda จาก events broadcast events ให้หลาย services",
            },
            {
              title: "ใช้ Kinesis เมื่อ...",
              description:
                "<strong>Real-time streaming</strong> data ปริมาณมหาศาล — real-time analytics (SQL on stream) log/metric ingestion ระดับ big data ต้อง replay data ได้ + multiple consumers",
            },
            {
              title: "ใช้ Amazon MQ เมื่อ...",
              description:
                "<strong>Migrate</strong> on-premises application มา cloud — application ใช้ traditional protocols (MQTT, AMQP, STOMP) ไม่อยาก re-engineer code เพื่อใช้ AWS API",
            },
          ],
        },
        {
          type: "code",
          language: "text",
          caption: "Quick Decision Guide",
          code: `"async background job processing"          → SQS
"send email/SMS notification"               → SNS
"broadcast event ไป 5 services พร้อมกัน"     → SNS + SQS (Fan-out)
"real-time IoT sensor data + analytics"     → Kinesis
"clickstream / log streaming + S3 archive"  → Amazon Data Firehose
"migrate Java app ที่ใช้ AMQP จาก on-prem"  → Amazon MQ
"order processing — ห้ามหาย ถ้า consumer ล่ม" → SQS
"trigger Lambda จาก S3 upload"              → SNS (หรือ S3 event direct)`,
        },
        {
          type: "callout",
          variant: "info",
          title: "Key Insight",
          text: "SQS/SNS/Kinesis เป็น <strong>cloud-native + serverless + scalable</strong> ส่วน Amazon MQ เป็น <strong>traditional protocols + dedicated server</strong> — ถ้าเริ่มต้นใหม่บน cloud ใช้ SQS/SNS/Kinesis ถ้า migrate ของเก่าที่ผูกกับ MQTT/AMQP ใช้ MQ",
        },
      ],
    },
    {
      id: "summary",
      title: "Summary",
      content: [
        {
          type: "paragraph",
          text: "สรุปบริการในกลุ่ม Cloud Integration ที่ออกข้อสอบ CLF-C02 บ่อย — แต่ละตัวมีจุดเด่นและ use case ของตัวเอง:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Amazon SQS",
              description:
                "<strong>Message queue (pull-based)</strong> — retention 4-14 วัน, มี Visibility Timeout + DLQ, message size 256 KB เหมาะกับ decoupling + buffering",
            },
            {
              title: "Amazon SNS",
              description:
                "<strong>Pub/Sub (push-based)</strong> — สูงสุด 10M subscribers/topic, รองรับ Email, SMS, HTTP, SQS, Lambda เหมาะกับ notifications + fan-out",
            },
            {
              title: "Fan-out Pattern",
              description:
                "<strong>SNS + multiple SQS</strong> — publisher ส่งครั้งเดียว แต่ละ subscriber queue ได้รับ + process อิสระ ตัวหนึ่งล่มไม่กระทบตัวอื่น",
            },
            {
              title: "Amazon Kinesis",
              description:
                "<strong>Real-time streaming</strong> big data — Streams, Firehose, Analytics, Video Streams เหมาะกับ IoT, logs, clickstreams ระดับ big data",
            },
            {
              title: "Amazon MQ",
              description:
                "<strong>Managed broker</strong> (ActiveMQ / RabbitMQ) สำหรับ MQTT, AMQP, STOMP, Openwire ใช้ migrate on-prem app ที่ผูกกับ traditional protocols",
            },
            {
              title: "Decoupling = หัวใจ",
              description:
                "<strong>Resilience + Independent Scaling</strong> — services ทำงานอิสระจากกัน เป็นหัวใจของ event-driven architecture",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>SQS</strong>: queue, pull-based, retention 4-14 วัน, มี Visibility Timeout + DLQ, message size 256 KB",
            "<strong>SNS</strong>: pub/sub, push-based, สูงสุด 10M subscribers/topic, รองรับ Email/SMS/HTTP/SQS/Lambda",
            "<strong>Kinesis</strong>: real-time streaming big data — Streams, Firehose, Analytics, Video Streams",
            "<strong>Amazon MQ</strong>: managed broker (ActiveMQ/RabbitMQ) สำหรับ MQTT/AMQP/STOMP — ใช้ migrate on-prem",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Exam Tip — อ่านโจทย์หา keyword",
          text: "\"queue / pull / decouple\" → <strong>SQS</strong> — \"notification / fan-out / pub-sub\" → <strong>SNS</strong> — \"real-time / streaming / big data\" → <strong>Kinesis</strong> — \"MQTT / AMQP / migrate on-prem\" → <strong>Amazon MQ</strong>",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "ci-q1",
      question:
        "Which statement BEST describes the difference between Amazon SQS and Amazon SNS?",
      options: [
        "SQS is pub/sub, SNS is queue.",
        "SQS is a message queue (one consumer per message); SNS is pub/sub (one message broadcast to many subscribers).",
        "Both are identical.",
        "SQS is for video streaming.",
      ],
      correct: 1,
      explanation:
        "SQS = poll-based queue, one consumer per message (decouples producers/consumers). SNS = pub/sub topic, message fan-out to many subscribers (Lambda, SQS, HTTP endpoints, email, SMS).",
    },
    {
      id: "ci-q2",
      question:
        "What is the maximum message retention period for an Amazon SQS queue?",
      options: ["1 minute", "1 hour", "14 days", "Forever"],
      correct: 2,
      explanation:
        "SQS messages can be retained from 1 minute to a maximum of 14 days. Default is 4 days.",
    },
    {
      id: "ci-q3",
      question:
        "Which SQS queue type guarantees first-in-first-out ordering and exactly-once processing?",
      options: [
        "Standard Queue",
        "FIFO Queue",
        "Dead-Letter Queue",
        "Delay Queue",
      ],
      correct: 1,
      explanation:
        "SQS FIFO queues preserve order and provide exactly-once processing. They have lower throughput than Standard queues. FIFO queue names must end with .fifo.",
    },
    {
      id: "ci-q4",
      question:
        "What is the default behavior of Amazon SQS Standard Queues regarding ordering and delivery?",
      options: [
        "Strict ordering and exactly-once.",
        "Best-effort ordering, at-least-once delivery (occasional duplicates possible), nearly unlimited throughput.",
        "No ordering and no delivery guarantee.",
        "Strict ordering, at-most-once.",
      ],
      correct: 1,
      explanation:
        "SQS Standard Queues offer best-effort ordering, at-least-once delivery (occasional duplicates), and nearly unlimited throughput. For strict ordering use FIFO.",
    },
    {
      id: "ci-q5",
      question:
        "Which AWS service is a managed message broker for industry-standard protocols (MQTT, AMQP, STOMP, OpenWire) — useful for migrating from on-premises message brokers?",
      options: [
        "Amazon SQS",
        "Amazon SNS",
        "Amazon MQ",
        "Amazon Kinesis",
      ],
      correct: 2,
      explanation:
        "Amazon MQ is a managed message broker for ActiveMQ and RabbitMQ. Best when migrating existing on-premises applications that use industry-standard protocols (MQTT, AMQP, STOMP, OpenWire). New apps should consider SQS/SNS.",
    },
    {
      id: "ci-q6",
      question:
        "Which AWS service is BEST for real-time streaming of large amounts of data (e.g., clickstreams, IoT, application logs)?",
      options: [
        "Amazon SQS",
        "Amazon SNS",
        "Amazon Kinesis",
        "Amazon MQ",
      ],
      correct: 2,
      explanation:
        "Amazon Kinesis is designed for real-time streaming data ingestion and processing. SQS is for traditional task queues; Kinesis Data Streams is for real-time event streams (records can be replayed).",
    },
    {
      id: "ci-q7",
      question:
        "Which AWS event bus delivers events from many AWS services and SaaS partners to subscribers (Lambda, SQS, etc.)?",
      options: [
        "Amazon EventBridge",
        "Amazon SNS",
        "Amazon SQS",
        "Amazon MQ",
      ],
      correct: 0,
      explanation:
        "Amazon EventBridge (formerly CloudWatch Events) is a serverless event bus that ingests events from AWS services, custom apps, or SaaS partners. Filters and routes events to many targets.",
    },
    {
      id: "ci-q8",
      question:
        "Which is true about an SQS Dead-Letter Queue (DLQ)?",
      options: [
        "It deletes messages after expiry.",
        "It receives messages that failed to be processed successfully after a configurable number of retries — for debugging or manual reprocessing.",
        "It encrypts messages.",
        "It speeds up the main queue.",
      ],
      correct: 1,
      explanation:
        "DLQ is a separate queue that captures messages a consumer fails to process after maxReceiveCount attempts. Lets you debug, alert, and re-drive messages without blocking the main queue.",
    },
    {
      id: "ci-q9",
      question:
        "What is the maximum size of a single SQS message?",
      options: ["64 KB", "256 KB", "1 MB", "10 MB"],
      correct: 1,
      explanation:
        "SQS messages can be up to 256 KB. For larger payloads, store the message body in S3 and put a reference in SQS (Extended Client Library handles this).",
    },
    {
      id: "ci-q10",
      question:
        "Which SNS subscriber types are supported?",
      options: [
        "Only email and SMS.",
        "HTTP/HTTPS, Email/Email-JSON, SQS, SMS, AWS Lambda, Mobile Push, Amazon Data Firehose (formerly Kinesis Data Firehose).",
        "Only SQS.",
        "Only Lambda.",
      ],
      correct: 1,
      explanation:
        "SNS supports many subscriber types: HTTP/HTTPS, Email, SMS, SQS queues, Lambda functions, mobile push notifications (APNS, FCM, ADM, etc.), and Amazon Data Firehose (formerly Kinesis Data Firehose).",
    },
    {
      id: "ci-q11",
      question:
        "What is fan-out in messaging?",
      options: [
        "Reducing message volume.",
        "Sending one message to a single subscriber.",
        "Publishing one message to a topic with multiple subscribers (SNS), each receiving its own copy.",
        "Encrypting messages.",
      ],
      correct: 2,
      explanation:
        "Fan-out is the SNS pattern where a single published message is delivered to many subscribers (e.g., multiple SQS queues + Lambda + email) — a powerful decoupling pattern.",
    },
    {
      id: "ci-q12",
      question:
        "Which Kinesis service is BEST for ingesting and storing streaming records for processing by custom consumers?",
      options: [
        "Kinesis Data Streams",
        "Kinesis Data Firehose",
        "Kinesis Video Streams",
        "Kinesis Data Analytics",
      ],
      correct: 0,
      explanation:
        "Kinesis Data Streams is the low-level ingestion / storage layer for streaming data (1-365 day retention). Custom consumers (Lambda, KCL apps, Firehose, Analytics) read from it.",
    },
    {
      id: "ci-q13",
      question:
        "Which streaming service is BEST for delivering streaming data DIRECTLY to S3, Redshift, OpenSearch without writing code?",
      options: [
        "Kinesis Data Streams",
        "Amazon Data Firehose (formerly Kinesis Data Firehose)",
        "Kinesis Video Streams",
        "Amazon Managed Service for Apache Flink",
      ],
      correct: 1,
      explanation:
        "Amazon Data Firehose (renamed from Kinesis Data Firehose in 2024) is a fully managed delivery service to S3, Redshift, OpenSearch, Splunk, and HTTP endpoints — no code needed, with optional buffering, transformation, and compression.",
    },
    {
      id: "ci-q14",
      question:
        "Which Kinesis service runs SQL or Apache Flink on streaming data?",
      options: [
        "Kinesis Data Streams",
        "Kinesis Data Firehose",
        "Amazon Managed Service for Apache Flink (Kinesis Data Analytics)",
        "Kinesis Video Streams",
      ],
      correct: 2,
      explanation:
        "Amazon Managed Service for Apache Flink (formerly Kinesis Data Analytics) runs SQL or Flink applications on streaming data — real-time analytics, anomaly detection, etc.",
    },
    {
      id: "ci-q15",
      question:
        "Which Kinesis service is for streaming video from cameras, AR/VR, and other sources to AWS for analytics or ML?",
      options: [
        "Kinesis Data Streams",
        "Kinesis Data Firehose",
        "Kinesis Video Streams",
        "Kinesis Data Analytics",
      ],
      correct: 2,
      explanation:
        "Kinesis Video Streams is built for ingesting video, audio, and time-series data from millions of devices — used for analytics, ML, and AR/VR workloads.",
    },
    {
      id: "ci-q16",
      question:
        "Which AWS service is a managed fully serverless API endpoint service that fronts Lambda, EC2, or any HTTP backend?",
      options: [
        "Amazon API Gateway",
        "AWS App Mesh",
        "AWS AppSync",
        "Amazon CloudFront",
      ],
      correct: 0,
      explanation:
        "Amazon API Gateway is a fully managed REST/HTTP/WebSocket API service. Fronts Lambda, EC2, ECS, or any HTTP endpoint. Provides authentication, throttling, caching, monitoring.",
    },
    {
      id: "ci-q17",
      question:
        "Which AWS service is a managed GraphQL backend, ideal for mobile/web apps with real-time data sync?",
      options: [
        "AWS AppSync",
        "Amazon API Gateway",
        "AWS Lambda",
        "Amazon Cognito",
      ],
      correct: 0,
      explanation:
        "AWS AppSync provides a managed GraphQL service with real-time subscriptions, offline data sync, and integration with DynamoDB, RDS, OpenSearch, Lambda.",
    },
    {
      id: "ci-q18",
      question:
        "Which AWS service is an IoT message broker that supports MQTT, HTTP, and WebSocket for IoT device communication?",
      options: [
        "AWS IoT Core",
        "Amazon SQS",
        "Amazon MQ",
        "Amazon EventBridge",
      ],
      correct: 0,
      explanation:
        "AWS IoT Core is a managed service to connect IoT devices to the AWS cloud. Supports MQTT, HTTPS, WebSocket. Routes messages to Lambda, DynamoDB, Kinesis, S3, etc.",
    },
    {
      id: "ci-q19",
      question:
        "Which AWS service is a workflow orchestration tool with state machines, retries, and parallel branches?",
      options: [
        "AWS Step Functions",
        "Amazon SWF",
        "Amazon EventBridge",
        "AWS Lambda",
      ],
      correct: 0,
      explanation:
        "AWS Step Functions orchestrates serverless workflows (Standard or Express). Visual designer, automatic retries, error handling, parallel and choice states. Integrates with 200+ AWS services.",
    },
    {
      id: "ci-q20",
      question:
        "What is SQS visibility timeout?",
      options: [
        "How long messages remain in the queue.",
        "The time during which a received message is hidden from other consumers, allowing the receiving consumer to process it.",
        "How long the queue is visible.",
        "The retention period.",
      ],
      correct: 1,
      explanation:
        "Visibility timeout (default 30 sec, max 12 hours) is the period after a consumer receives a message during which the message is hidden from other consumers. The consumer must delete the message before the timeout, or it becomes visible again for re-processing.",
    },
    {
      id: "ci-q21",
      question:
        "Which is the BEST way to decouple a tightly-coupled multi-tier application?",
      options: [
        "Use SQS to queue work between tiers, allowing each tier to scale and fail independently.",
        "Tightly couple all tiers with shared database access.",
        "Run everything as a single monolith.",
        "Use synchronous REST calls between every tier.",
      ],
      correct: 0,
      explanation:
        "Decoupling with SQS (or SNS) allows tiers to scale independently, fail without taking the whole app down, and absorb traffic spikes. Classic asynchronous decoupling pattern.",
    },
    {
      id: "ci-q22",
      question:
        "Which AWS service is a managed Apache Kafka offering?",
      options: [
        "Amazon MSK (Managed Streaming for Apache Kafka)",
        "Amazon SQS",
        "Amazon Kinesis",
        "Amazon MQ",
      ],
      correct: 0,
      explanation:
        "Amazon MSK is a fully managed Apache Kafka service — runs upstream Kafka, manages brokers, ZooKeeper/KRaft, patching, and scaling.",
    },
    {
      id: "ci-q23",
      question:
        "Which is true about the SNS message delivery model?",
      options: [
        "SNS is poll-based; consumers must poll the topic.",
        "SNS is push-based; messages are pushed to subscribers as soon as published.",
        "SNS is FIFO only.",
        "SNS is exclusively for email.",
      ],
      correct: 1,
      explanation:
        "SNS is push-based: when a message is published to a topic, SNS immediately pushes it to all confirmed subscribers (Lambda, SQS, HTTP, email, SMS, mobile).",
    },
    {
      id: "ci-q24",
      question:
        "Which is true about the SQS message consumption model?",
      options: [
        "SQS is push-based; messages are pushed to consumers.",
        "SQS is pull/poll-based; consumers poll the queue and process messages, then delete them.",
        "SQS automatically deletes messages after delivery.",
        "SQS uses webhooks only.",
      ],
      correct: 1,
      explanation:
        "SQS is poll-based — consumers call ReceiveMessage, process the message, then call DeleteMessage. If not deleted within the visibility timeout, the message reappears.",
    },
    {
      id: "ci-q25",
      question:
        "Which use case is BEST for Amazon EventBridge over SNS?",
      options: [
        "When you need a simple pub/sub email notification.",
        "When you need rich event filtering, integration with many AWS services and SaaS partners, and an event archive/replay capability.",
        "When you need TCP/UDP load balancing.",
        "When you need video streaming.",
      ],
      correct: 1,
      explanation:
        "EventBridge is event-driven with rich content-based filtering, schema registry, event archive, replay, partner integrations (Zendesk, Datadog, MongoDB Atlas, etc.). SNS is simpler pub/sub.",
    },
  ],
};
