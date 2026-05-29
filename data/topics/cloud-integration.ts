import { TopicData } from "@/types/topic";

export const cloudIntegration: TopicData = {
  slug: "cloud-integration",
  title: "Cloud Integration",
  subtitle: "SQS, SNS, Kinesis & Amazon MQ",
  accent: "fuchsia",
  emoji: "🔗",
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
              title: "Kinesis Data Firehose",
              description:
                "Load streaming data ไปเก็บที่ S3, Redshift, ElasticSearch, Splunk — fully managed, ไม่ต้องเขียน code, near real-time (~60s buffer)",
            },
            {
              title: "Kinesis Data Analytics",
              description:
                "วิเคราะห์ streaming data แบบ real-time ด้วย <strong>SQL queries</strong> — ไม่ต้อง manage infrastructure",
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
          code: `IoT Sensors ──► Kinesis Data Streams ──► Kinesis Data Analytics (SQL real-time)
   (100k sensors)                          ──► Kinesis Data Firehose ──► S3 (archive)
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
"clickstream / log streaming + S3 archive"  → Kinesis Data Firehose
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
        "ข้อใดอธิบายความแตกต่างระหว่าง SQS กับ SNS ได้ถูกต้อง?",
      options: [
        "SQS เป็น pub/sub model ส่วน SNS เป็น queue model",
        "SQS เป็น queue (consumers แย่ง message) ส่วน SNS เป็น pub/sub (subscribers ทุกตัวได้รับ)",
        "ทั้งสอง service ทำงานเหมือนกันทุกประการ",
        "SQS push ไปหา consumer ส่วน SNS ให้ consumer มา pull เอง",
      ],
      correct: 1,
      explanation:
        "SQS = message queue, pull-based, consumers แย่งกันดึง message (one-to-one) — ส่วน SNS = pub/sub, push-based, ทุก subscriber ได้รับ message (one-to-many) เป็นคนละ model กันโดยสิ้นเชิง",
    },
    {
      id: "ci-q2",
      question:
        "Default retention ของ message ใน SQS คือกี่วัน และสูงสุดได้กี่วัน?",
      options: [
        "Default 1 วัน, max 7 วัน",
        "Default 4 วัน, max 14 วัน",
        "Default 7 วัน, max 30 วัน",
        "Default ไม่จำกัด — message อยู่ตลอดไป",
      ],
      correct: 1,
      explanation:
        "SQS เก็บ message ใน queue ได้ default 4 วัน และตั้งสูงสุดได้ 14 วัน หลังจากนั้น message จะหมดอายุและถูกลบทิ้งโดยอัตโนมัติ — เป็นจุดสำคัญที่ต้องจำเพราะออกข้อสอบบ่อย",
    },
    {
      id: "ci-q3",
      question:
        "Fan-out pattern ใน SNS + SQS คืออะไร?",
      options: [
        "การส่ง message ไปหา consumer ตัวเดียวอย่างรวดเร็ว",
        "Publisher ส่ง message ไป SNS ครั้งเดียว แล้ว SNS กระจายไปหลาย SQS queues พร้อมกัน — แต่ละ queue process อิสระ",
        "การกรอง message ก่อนส่งไปยัง subscriber",
        "การเก็บ message ไว้ใน SNS topic แบบถาวร",
      ],
      correct: 1,
      explanation:
        "Fan-out pattern = SNS เป็นตัวกระจาย publisher ส่ง message ไป topic ครั้งเดียว แล้ว SNS push ไปหลาย SQS queues subscribers พร้อมกัน แต่ละ queue process อิสระกัน — ตัวหนึ่งล่มไม่กระทบตัวอื่น + เพิ่ม subscriber ใหม่ได้โดยไม่แก้ publisher",
    },
    {
      id: "ci-q4",
      question:
        "Visibility Timeout ใน SQS ทำหน้าที่อะไร?",
      options: [
        "กำหนดเวลาที่ message อยู่ใน queue ก่อนหมดอายุ",
        "ทำให้ message invisible ชั่วคราวหลัง consumer ดึงไปแล้ว เพื่อป้องกัน consumer อื่น process ซ้ำ",
        "กำหนดความถี่ที่ consumer สามารถ poll queue",
        "เข้ารหัส message ขณะอยู่ใน queue",
      ],
      correct: 1,
      explanation:
        "Visibility Timeout = ช่วงเวลาที่ message จะ invisible สำหรับ consumer ตัวอื่นหลัง consumer ตัวแรกดึงไปแล้ว (default 30 วินาที) ถ้า consumer ทำเสร็จก็ delete ถ้าไม่เสร็จในเวลา message กลับมา visible ให้ consumer อื่นมาทำต่อ — ป้องกัน double processing",
    },
    {
      id: "ci-q5",
      question:
        "Dead Letter Queue (DLQ) มีไว้เพื่อจุดประสงค์ใด?",
      options: [
        "เก็บ messages ที่หมดอายุ (expired) จาก queue หลัก",
        "เก็บ messages ที่ process ไม่สำเร็จซ้ำๆ (เกิน maxReceiveCount) เพื่อให้ developer ตรวจสอบและ debug",
        "เพิ่มประสิทธิภาพ queue โดยกระจาย load",
        "เก็บ messages ที่มีขนาดเกิน 256 KB",
      ],
      correct: 1,
      explanation:
        "DLQ ใช้เก็บ messages ที่ถูกดึงไป process หลายครั้ง (เกิน maxReceiveCount เช่น 3 ครั้ง) แต่ไม่สำเร็จ แทนที่จะ retry ไปเรื่อยๆ ก็ย้ายไป DLQ เพื่อให้ developer ตรวจสอบหาสาเหตุของ error — ป้องกันไม่ให้ poison message block queue หลัก",
    },
    {
      id: "ci-q6",
      question:
        "บริษัทมี IoT sensors 100,000 ตัวส่งข้อมูลตลอดเวลา ต้องการ process แบบ real-time + เก็บลง S3 ด้วย ควรใช้ service ใด?",
      options: [
        "Amazon SQS — เก็บข้อมูลใน queue แล้วให้ Lambda process",
        "Amazon Kinesis — Data Streams สำหรับ ingest + Firehose สำหรับเก็บลง S3",
        "Amazon MQ — รองรับ MQTT จาก IoT devices",
        "Amazon SNS — broadcast ไปยัง subscribers",
      ],
      correct: 1,
      explanation:
        "Kinesis ออกแบบมาสำหรับ real-time streaming big data scale ได้ระดับหลายแสน sources พร้อมกัน — Kinesis Data Streams ใช้ ingest data, Kinesis Data Firehose load ลง S3 อัตโนมัติ ส่วน SQS ไม่เหมาะกับ streaming volume สูงระดับนี้",
    },
    {
      id: "ci-q7",
      question:
        "บริษัทมี Java application รันบน on-premises ใช้ AMQP protocol ต้องการ migrate มา AWS โดยไม่ต้องเขียน code ใหม่ ควรใช้ service ใด?",
      options: [
        "Amazon SQS — เปลี่ยน application ให้ใช้ AWS SDK",
        "Amazon SNS — broadcast messages ไปหา subscribers",
        "Amazon MQ — managed broker ที่รองรับ AMQP, MQTT, STOMP โดยไม่ต้องแก้ code",
        "Amazon Kinesis — streaming data",
      ],
      correct: 2,
      explanation:
        "Amazon MQ เป็น managed broker (ActiveMQ/RabbitMQ) ที่รองรับ traditional protocols เช่น AMQP, MQTT, STOMP, Openwire, WSS เหมาะกับการ migrate on-premises applications ที่ใช้ protocol เหล่านี้มา cloud โดยไม่ต้อง re-engineer code ส่วน SQS/SNS ใช้ AWS proprietary API ต้องเปลี่ยน code",
    },
    {
      id: "ci-q8",
      question:
        "ข้อใดถูกต้องเกี่ยวกับ SQS message size และการ scale consumers?",
      options: [
        "Message size สูงสุด 64 KB และมี consumer ได้แค่ตัวเดียวต่อ queue",
        "Message size สูงสุด 256 KB และเพิ่ม consumers หลายตัวเพื่อแย่งกันดึง message ได้ (horizontal scaling)",
        "Message size ไม่จำกัด และมี consumer แบบ exclusive ได้ตัวเดียว",
        "Message size สูงสุด 1 MB และทุก consumer ได้รับ message ครบทุก message",
      ],
      correct: 1,
      explanation:
        "SQS message size สูงสุด 256 KB ต่อ message (ถ้าใหญ่กว่านี้ใช้ Extended Client Library เก็บ payload ใน S3) และสามารถเพิ่ม consumers หลายตัวเพื่อแย่งกันดึง message ได้ — เป็น horizontal scaling ที่ทำให้ throughput เพิ่มตามจำนวน consumers (แต่ละ message ไปหา consumer แค่ตัวเดียว ไม่ broadcast)",
    },
  ],
};
