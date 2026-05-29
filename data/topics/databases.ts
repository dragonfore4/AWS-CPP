import { TopicData } from "@/types/topic";

export const databases: TopicData = {
  slug: "databases",
  title: "Databases & Analytics",
  subtitle: "RDS, Aurora, DynamoDB, Redshift, Athena & more",
  accent: "sky",
  emoji: "🗄️",
  category: "Database",
  description:
    "ภาพรวม Database & Analytics ทั้งหมดของ AWS ตั้งแต่ Relational (RDS, Aurora), NoSQL (DynamoDB, DocumentDB), In-memory (ElastiCache), Data Warehouse (Redshift), Big Data (EMR, Athena, QuickSight, Glue) ไปจนถึง Specialty DB (Neptune, QLDB, Managed Blockchain) — เลือกใช้ให้ถูกกับ workload",
  keyPoints: [
    "RDS = Relational (SQL) | DynamoDB = NoSQL (key-value) — เลือกตาม schema และ scaling pattern",
    "Aurora เร็วกว่า MySQL 5x, PostgreSQL 3x — auto-grow storage ถึง 64TB",
    "Read Replicas = scale READ | Multi-AZ = high availability (failover)",
    "Redshift = OLAP/Analytics | Athena = Serverless SQL บน S3 | EMR = Hadoop big data",
  ],
  sections: [
    {
      id: "intro",
      title: "Databases Intro — เมื่อไหร่ควรใช้ DB?",
      content: [
        {
          type: "paragraph",
          text: "ก่อนเลือก database ต้องเข้าใจว่า <strong>เมื่อไหร่ควรใช้ database</strong> แทนการเก็บไฟล์ใน disk storage (EFS, EBS, S3) — Database เหมาะกับข้อมูลที่มี <em>structure</em>, ต้องการ <em>indexes</em> สำหรับ query เร็ว, และมี <em>relationships</em> ระหว่างข้อมูล",
        },
        {
          type: "list",
          items: [
            "<strong>Disk storage (EFS/EBS/S3)</strong> — เก็บไฟล์ดิบ (images, videos, logs, backups) ไม่มี query engine",
            "<strong>Database</strong> — เก็บ structured data ที่ต้อง query, filter, join, sort ได้เร็ว มี indexes",
            "ใช้ DB เมื่อ: ต้องการ relationships, transactions, ACID, ค้นหาเร็วผ่าน index",
            "ใช้ S3/EFS/EBS เมื่อ: เก็บไฟล์ binary, archive, shared storage ระหว่าง EC2",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Relational Database (SQL)",
              description:
                "เหมือน Excel — มีตาราง, columns, rows, relationships ระหว่างตาราง ใช้ SQL query (SELECT, JOIN) เหมาะกับข้อมูลที่ schema ชัดเจน เช่น users, orders, products",
            },
            {
              title: "NoSQL Database",
              description:
                "Schema ยืดหยุ่น scale-out (horizontal) ได้ดี performance สูง — มีหลายแบบ: key-value (DynamoDB), document (DocumentDB), graph (Neptune), in-memory (ElastiCache), search (OpenSearch)",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "ประเภท NoSQL",
          text: "<strong>Key-value</strong> (DynamoDB) — <strong>Document/JSON</strong> (DocumentDB) — <strong>Graph</strong> (Neptune) — <strong>In-memory</strong> (ElastiCache) — <strong>Search</strong> (OpenSearch). เลือกตามรูปแบบ data และ access pattern",
        },
      ],
    },
    {
      id: "rds",
      title: "AWS RDS — Managed Relational Database",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon RDS</strong> คือ <em>Managed Relational Database Service</em> ที่ใช้ SQL — AWS จัดการ infrastructure ให้ คุณแค่สร้าง DB instance แล้วใช้ได้เลย",
        },
        {
          type: "list",
          items: [
            "รองรับ 6 engines: <strong>PostgreSQL, MySQL, MariaDB, Oracle, MS SQL Server, Aurora</strong>",
            "<strong>Automated provisioning + OS patching</strong> — AWS จัดการให้",
            "<strong>Continuous backups + point-in-time restore</strong>",
            "<strong>Monitoring dashboards</strong> — ดู metrics ผ่าน CloudWatch",
            "<strong>Read Replicas</strong> เพิ่ม read performance",
            "<strong>Multi-AZ</strong> สำหรับ disaster recovery (DR)",
            "<strong>Maintenance windows</strong> สำหรับ upgrade",
            "<strong>Scaling capability</strong> — vertical และ horizontal",
            "Storage backed by EBS (gp2/gp3/io1)",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "ข้อจำกัดสำคัญ",
          text: "ไม่สามารถ <strong>SSH</strong> เข้า RDS instance ได้ — ถ้าต้องการ control เต็มรูปแบบ ต้องติดตั้ง DB บน EC2 เอง (แต่จะไม่ได้ managed features)",
        },
      ],
    },
    {
      id: "aurora",
      title: "Amazon Aurora",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Aurora</strong> เป็น proprietary relational database ของ AWS รองรับ <strong>PostgreSQL</strong> และ <strong>MySQL</strong> — ออกแบบมาให้เร็วและ scale ได้ดีกว่า RDS ปกติ",
        },
        {
          type: "list",
          items: [
            "<strong>เร็วกว่า MySQL บน RDS ถึง 5x และเร็วกว่า PostgreSQL บน RDS ถึง 3x</strong>",
            "Storage <strong>auto-grows</strong> ทีละ 10GB จนถึง <strong>64TB</strong>",
            "ราคาแพงกว่า RDS ~20% แต่ <em>more efficient</em> (cost-effective ในระยะยาว)",
            "<strong>ไม่อยู่ใน Free Tier</strong>",
            "Cloud-native — เก็บ 6 copies ของข้อมูลใน 3 AZ",
            "รองรับ Aurora Serverless (auto-scaling) และ Aurora Global Database (multi-region)",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "เลือก Aurora เมื่อ",
          text: "ต้องการ performance สูงกว่า MySQL/PostgreSQL ปกติ, ยินดีจ่ายแพงกว่า RDS เพื่อแลกกับ throughput และ storage scaling อัตโนมัติ",
        },
      ],
    },
    {
      id: "rds-deployments",
      title: "RDS Deployments — Read Replicas vs Multi-AZ",
      content: [
        {
          type: "paragraph",
          text: "RDS มี deployment patterns 3 แบบที่ต่างกัน — เลือกตามจุดประสงค์: <strong>scale reads</strong>, <strong>high availability</strong>, หรือ <strong>multi-region DR</strong>",
        },
        {
          type: "grid",
          items: [
            {
              title: "Read Replicas — Scale READ",
              description:
                "สร้าง replica ได้สูงสุด <strong>5 ตัว</strong> (15 สำหรับ Aurora) — ข้อมูลถูก WRITE เข้า main DB เท่านั้น แล้ว replicate ไปยัง replicas เพื่อรับ READ workload ช่วยเพิ่ม performance",
            },
            {
              title: "Multi-AZ — High Availability",
              description:
                "สร้าง <strong>1 standby</strong> ใน AZ อื่น สำหรับ <em>failover</em> เมื่อ AZ หลักล่ม — Standby ไม่รับ traffic (ไม่ใช่สำหรับ scale read) ข้อมูลยังคง read/written ที่ main เท่านั้น",
            },
            {
              title: "Multi-Region (Read Replicas)",
              description:
                "Replicate ไปยัง Region อื่นเพื่อ <strong>Disaster Recovery</strong> + <strong>local read performance</strong> สำหรับ users ทั่วโลก — มีค่า replication network cost",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "จำให้แม่น",
          text: "<strong>Read Replicas</strong> = PERFORMANCE (scale reads)<br><strong>Multi-AZ</strong> = AVAILABILITY (failover ใน region เดียว)<br><strong>Multi-Region</strong> = DR + global low-latency reads",
        },
      ],
    },
    {
      id: "elasticache",
      title: "Amazon ElastiCache",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon ElastiCache</strong> คือ managed <em>in-memory database</em> service รองรับ <strong>Redis</strong> หรือ <strong>Memcached</strong> — ใช้สำหรับลด load จาก database หลักโดยเก็บ frequently-read data ไว้ใน memory",
        },
        {
          type: "list",
          items: [
            "เลือก engine ได้: <strong>Redis</strong> (HA, persistence, advanced data types) หรือ <strong>Memcached</strong> (simple, multi-threaded)",
            "<strong>High performance + low latency</strong> — sub-millisecond",
            "ลด load จาก database หลักสำหรับ <em>read-heavy</em> workloads",
            "AWS จัดการ OS patching, optimization, setup, configuration, monitoring, failure recovery, backups ให้",
            "Use cases: session store, leaderboard, real-time analytics, caching",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Redis vs Memcached",
          text: "Redis = HA + persistence + replication + pub/sub | Memcached = simple, multi-threaded, no persistence, ไม่มี HA — ส่วนใหญ่ Redis คือ default choice",
        },
      ],
    },
    {
      id: "dynamodb",
      title: "Amazon DynamoDB",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon DynamoDB</strong> คือ fully managed <em>NoSQL key-value database</em> — serverless, distributed, scale ได้ระดับ planet-scale",
        },
        {
          type: "list",
          items: [
            "Highly available — replicate ข้ามตั้ง <strong>3 AZ</strong> อัตโนมัติ",
            "Serverless, distributed — ไม่ต้องจัดการ infrastructure",
            "รองรับ <strong>millions of requests/second, trillions of rows, 100s of TB</strong>",
            "<strong>Single-digit millisecond latency</strong>",
            "Integrate กับ <strong>IAM</strong> สำหรับ security",
            "Low cost + auto-scaling capability",
            "Key/value data model (รองรับ document ได้ด้วย)",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "DAX — DynamoDB Accelerator",
              description:
                "<strong>In-memory cache เฉพาะ DynamoDB</strong> — เร็วขึ้น <strong>10x</strong> (จาก ms → microseconds) ไม่ต้องเปลี่ยน application code (compatible กับ DynamoDB API)",
            },
            {
              title: "DAX vs ElastiCache",
              description:
                "DAX = ใช้ได้เฉพาะ DynamoDB เท่านั้น | ElastiCache = general-purpose ใช้ได้กับ database ใดก็ได้ (RDS, Aurora, custom) — ถามเรื่อง cache DynamoDB ตอบ DAX",
            },
            {
              title: "DynamoDB Global Tables",
              description:
                "Multi-region, <strong>multi-master replication</strong> (active-active) — read/write ได้ทุก region, low-latency สำหรับ users ทั่วโลก",
            },
            {
              title: "DynamoDB Streams",
              description:
                "Time-ordered sequence of changes (insert/update/delete) — trigger Lambda ได้ event-driven, เก็บ 24 ชั่วโมง",
            },
          ],
        },
      ],
    },
    {
      id: "redshift",
      title: "Amazon Redshift",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Redshift</strong> คือ data warehouse service — <em>based on PostgreSQL</em> แต่ออกแบบมาสำหรับ <strong>OLAP</strong> (Online Analytical Processing) <em>ไม่ใช่ OLTP</em> (Online Transaction Processing)",
        },
        {
          type: "list",
          items: [
            "<strong>OLAP</strong> = analytics + data warehousing (ไม่เหมาะกับ transaction-heavy workload)",
            "Load data <strong>per hour</strong> (batch) ไม่ใช่ per second",
            "<strong>เร็วกว่า data warehouses อื่น 10 เท่า</strong>",
            "Scale ได้ถึง <strong>PB-scale</strong>",
            "<strong>Columnar storage</strong> (แทน row-based) เพื่อ analytics performance",
            "<strong>MPP</strong> (Massively Parallel Processing) — ประมวลผล query ขนาดใหญ่ขนานกัน",
            "Pricing: <strong>pay per instance</strong> ที่ provision",
            "Integrate กับ BI tools เช่น <strong>Amazon QuickSight, Tableau</strong>",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "OLAP vs OLTP",
          text: "Redshift = OLAP (analytics, reporting, large queries) | RDS/Aurora = OLTP (transactions, real-time CRUD) — เลือกผิดจะ performance พัง",
        },
      ],
    },
    {
      id: "emr",
      title: "Amazon EMR — Elastic MapReduce",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon EMR</strong> (Elastic MapReduce) ใช้สร้าง <strong>Hadoop clusters</strong> สำหรับ <em>big data</em> processing — รัน บน hundreds of EC2 instances",
        },
        {
          type: "list",
          items: [
            "สร้าง Hadoop clusters วิเคราะห์ + process big data",
            "Cluster ใช้ EC2 instances ได้เป็น <strong>หลายร้อยตัว</strong>",
            "รองรับ frameworks: <strong>Apache Spark, HBase, Presto, Flink</strong> และอื่น ๆ",
            "EMR จัดการ <em>provisioning + configuration + auto-scaling</em> ให้",
            "Integrate กับ <strong>Spot Instances</strong> เพื่อลดค่าใช้จ่าย",
            "Use cases: data processing, machine learning, web indexing, big data analytics",
          ],
        },
      ],
    },
    {
      id: "athena",
      title: "Amazon Athena",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Athena</strong> คือ <em>serverless query service</em> ที่ใช้ <strong>SQL</strong> query ข้อมูลใน <strong>S3 โดยตรง</strong> — ไม่ต้องโหลดเข้า database ก่อน",
        },
        {
          type: "list",
          items: [
            "Fully <strong>serverless</strong> — ไม่ต้อง provision อะไรทั้งสิ้น",
            "Query ข้อมูลใน S3 ด้วย SQL ได้เลย",
            "<strong>Pay per query</strong> (จ่ายตาม data ที่ scan)",
            "Output ผลลัพธ์ลง S3 อีกที่หนึ่ง",
            "Secured ด้วย <strong>IAM</strong>",
            "Use cases: <em>one-time SQL queries, log analytics, ad-hoc analysis, BI reporting บน S3 data</em>",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "เลือก Athena เมื่อ",
          text: "มีข้อมูลใน S3 อยู่แล้ว (เช่น logs, CSV, Parquet) และต้องการ query แบบ ad-hoc ไม่บ่อย ไม่อยากตั้ง database — Athena จ่ายตาม query เท่านั้น",
        },
      ],
    },
    {
      id: "quicksight",
      title: "Amazon QuickSight",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon QuickSight</strong> คือ <em>serverless</em>, <em>machine-learning powered</em> business intelligence (BI) service — สร้าง interactive dashboards และ visualizations",
        },
        {
          type: "list",
          items: [
            "Serverless BI service — ไม่ต้องดูแล infrastructure",
            "Interactive dashboards + visualizations",
            "ML-powered insights (anomaly detection, forecasting)",
            "<strong>Per-session pricing</strong> — จ่ายตาม session ที่ user เปิดใช้",
            "Integrate กับ <strong>RDS, Aurora, Athena, Redshift, S3</strong> และอื่น ๆ",
            "Use cases: business analytics, building visualizations, ad-hoc analysis, การ insights ทาง business",
          ],
        },
      ],
    },
    {
      id: "documentdb",
      title: "Amazon DocumentDB",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon DocumentDB</strong> คือ <em>\"Aurora แต่สำหรับ MongoDB\"</em> — เป็น NoSQL document database (JSON) ที่ MongoDB-compatible",
        },
        {
          type: "list",
          items: [
            "MongoDB-compatible document database (NoSQL JSON)",
            "Fully managed, highly available — replicate ข้าม <strong>3 AZ</strong>",
            "Storage <strong>auto-grows</strong> ทีละ 10GB จนถึง <strong>64TB</strong>",
            "รองรับ <strong>millions of requests/second</strong>",
            "เหมาะกับ migration จาก MongoDB on-premise มา AWS",
          ],
        },
      ],
    },
    {
      id: "neptune",
      title: "Amazon Neptune",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Neptune</strong> คือ fully managed <em>graph database</em> — เหมาะกับข้อมูลที่มี relationships ซับซ้อน",
        },
        {
          type: "list",
          items: [
            "Graph database — เก็บ nodes + edges (relationships)",
            "Highly available ข้าม <strong>3 AZ</strong>, <strong>15 read replicas</strong>",
            "รองรับ <strong>billions of relations</strong>, query ระดับ <strong>milliseconds</strong>",
            "Use cases: <strong>social networks, recommendation engines, fraud detection, knowledge graphs</strong>",
          ],
        },
      ],
    },
    {
      id: "qldb",
      title: "Amazon QLDB — Quantum Ledger Database",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon QLDB</strong> (Quantum Ledger Database) คือ <em>ledger database</em> สำหรับเก็บ <strong>financial transactions</strong> และ history of changes ที่ <strong>immutable</strong> และ <strong>cryptographically verifiable</strong>",
        },
        {
          type: "list",
          items: [
            "Fully managed, <strong>serverless</strong>, highly available, replicate ข้าม 3 AZ",
            "เก็บ <strong>complete history of changes</strong> ของทุก application data",
            "<strong>Immutable</strong> (ลบ/แก้ไม่ได้) + <em>cryptographically verifiable</em> (ตรวจสอบความถูกต้องได้)",
            "Use case: <em>financial transaction ledger</em>, audit trail, compliance",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "QLDB vs Blockchain",
          text: "QLDB = central ledger (มี central authority) | Managed Blockchain = decentralized (multi-party, no central authority) — ใช้ต่างกัน",
        },
      ],
    },
    {
      id: "managed-blockchain",
      title: "Amazon Managed Blockchain",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Managed Blockchain</strong> ใช้สร้าง applications ที่ <em>multiple parties สามารถทำ transaction ระหว่างกันได้โดยไม่มี central authority</em>",
        },
        {
          type: "list",
          items: [
            "Decentralized — ไม่มี central authority",
            "รองรับ <strong>Hyperledger Fabric</strong> และ <strong>Ethereum</strong>",
            "Fully managed — AWS ดูแล infrastructure",
            "Use cases: supply chain, multi-party transactions, decentralized applications",
          ],
        },
      ],
    },
    {
      id: "dms",
      title: "Database Migration Service (DMS)",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Database Migration Service (DMS)</strong> ใช้ migrate database มา AWS — <em>source database ยังคงทำงานต่อได้ระหว่าง migration</em> (zero-downtime หรือใกล้เคียง)",
        },
        {
          type: "list",
          items: [
            "Quickly + securely migrate databases มา AWS",
            "<strong>Source DB ยังคงใช้งานได้ระหว่าง migration</strong> (resilient + self-healing)",
            "<strong>Homogeneous migration</strong>: Oracle → Oracle, MySQL → MySQL",
            "<strong>Heterogeneous migration</strong>: Microsoft SQL Server → Aurora, Oracle → PostgreSQL (ใช้ร่วมกับ AWS Schema Conversion Tool — SCT)",
            "Use cases: lift-and-shift to RDS, consolidate databases, replicate ระหว่าง regions",
          ],
        },
      ],
    },
    {
      id: "glue",
      title: "AWS Glue — ETL Service",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Glue</strong> คือ managed <strong>ETL</strong> (Extract, Transform, Load) service ที่เป็น <em>serverless</em> — เตรียม + transform data สำหรับ analytics",
        },
        {
          type: "list",
          items: [
            "Managed ETL service — extract, transform, load data",
            "<strong>Serverless</strong> — ไม่ต้อง provision/manage server",
            "เตรียม + transform data ก่อนทำ analytics",
            "<strong>Glue Data Catalog</strong>: catalog ของ datasets (metadata, schema) ใช้กับ <strong>Athena, Redshift Spectrum, EMR</strong>",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Glue Data Catalog",
          text: "เป็น central metadata repository — Athena/Redshift/EMR ใช้ดู schema ของ data ใน S3 ได้โดยไม่ต้องตั้ง schema ซ้ำในแต่ละ service",
        },
      ],
    },
    {
      id: "summary",
      title: "Summary — เลือก service ให้ถูก",
      content: [
        {
          type: "paragraph",
          text: "สรุปแต่ละ service กับ use case หลัก — <em>ข้อสอบ CLF-C02 ชอบถามแบบเลือก service ให้ถูกกับโจทย์</em>:",
        },
        {
          type: "grid",
          items: [
            {
              title: "RDS",
              description: "Managed Relational DB (SQL) — PostgreSQL/MySQL/MariaDB/Oracle/SQL Server",
            },
            {
              title: "Aurora",
              description: "Cloud-native relational, 5x MySQL / 3x PostgreSQL — high performance",
            },
            {
              title: "ElastiCache",
              description: "In-memory cache — Redis / Memcached, ลด DB load",
            },
            {
              title: "DynamoDB",
              description: "Serverless NoSQL key-value, single-digit ms latency, planet-scale",
            },
            {
              title: "DAX",
              description: "Cache เฉพาะ DynamoDB → microsecond latency",
            },
            {
              title: "Redshift",
              description: "Data warehouse (OLAP), columnar, PB-scale analytics",
            },
            {
              title: "EMR",
              description: "Hadoop/Spark cluster สำหรับ big data processing",
            },
            {
              title: "Athena",
              description: "Serverless SQL query บน S3 — pay per query",
            },
            {
              title: "QuickSight",
              description: "Serverless BI dashboards + visualizations",
            },
            {
              title: "DocumentDB",
              description: "MongoDB-compatible (Aurora for MongoDB)",
            },
            {
              title: "Neptune",
              description: "Graph DB — social networks, recommendations, fraud",
            },
            {
              title: "QLDB",
              description: "Immutable ledger — financial transactions, audit trail",
            },
            {
              title: "Managed Blockchain",
              description: "Decentralized — Hyperledger Fabric / Ethereum",
            },
            {
              title: "DMS",
              description: "Migrate DB มา AWS (homogeneous + heterogeneous)",
            },
            {
              title: "Glue",
              description: "Serverless ETL + Data Catalog (ใช้กับ Athena/Redshift/EMR)",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>OLTP (transactional)</strong> → RDS / Aurora",
            "<strong>OLAP (analytics, data warehouse)</strong> → Redshift",
            "<strong>NoSQL key-value, planet-scale</strong> → DynamoDB",
            "<strong>Cache เพื่อลด DB load</strong> → ElastiCache (general) หรือ DAX (สำหรับ DynamoDB)",
            "<strong>Query S3 ด้วย SQL แบบ serverless</strong> → Athena",
            "<strong>Big data processing (Hadoop/Spark)</strong> → EMR",
            "<strong>Graph data</strong> → Neptune, <strong>MongoDB-compatible</strong> → DocumentDB",
            "<strong>Migrate database มา AWS</strong> → DMS (+ SCT ถ้าเปลี่ยน engine)",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Memory Aid",
          text: "<strong>SQL</strong> = RDS/Aurora, <strong>NoSQL</strong> = DynamoDB, <strong>Cache</strong> = ElastiCache/DAX, <strong>Warehouse</strong> = Redshift, <strong>Query S3</strong> = Athena — จำ pattern นี้ตอบข้อสอบได้ครึ่งหนึ่งแล้ว",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "databases-q1",
      question:
        "Application ต้องการเก็บ user profiles ที่มี schema ยืดหยุ่นและ scale ระดับ millions of requests/second ด้วย single-digit ms latency ควรใช้ service ใด?",
      options: [
        "Amazon RDS (PostgreSQL)",
        "Amazon DynamoDB",
        "Amazon Redshift",
        "Amazon Athena",
      ],
      correct: 1,
      explanation:
        "DynamoDB เป็น serverless NoSQL key-value database ที่รองรับ flexible schema, millions of requests/second และ single-digit ms latency — เหมาะกับ workload แบบนี้ ส่วน RDS เป็น relational (fixed schema, vertical scaling), Redshift เป็น data warehouse (OLAP), Athena เป็น query service",
    },
    {
      id: "databases-q2",
      question:
        "Application อ่าน database หนักมากจน main DB เริ่มช้า ควรใช้ feature ใดของ RDS เพื่อ scale READ workload?",
      options: [
        "Multi-AZ Deployment",
        "Read Replicas",
        "Automated Backups",
        "Storage Auto Scaling",
      ],
      correct: 1,
      explanation:
        "Read Replicas ใช้ scale READ workload — สร้างได้สูงสุด 5 ตัว (RDS) หรือ 15 ตัว (Aurora) ส่วน Multi-AZ ใช้สำหรับ high availability/failover (standby ไม่รับ traffic) ไม่ใช่สำหรับ scale read",
    },
    {
      id: "databases-q3",
      question:
        "Amazon Aurora มี performance benefit เหนือ RDS อย่างไร?",
      options: [
        "เร็วกว่า MySQL บน RDS 2x และ PostgreSQL 1.5x",
        "เร็วกว่า MySQL บน RDS 5x และ PostgreSQL 3x",
        "เร็วกว่า DynamoDB 10x",
        "เร็วกว่า Redshift 100x สำหรับ analytics",
      ],
      correct: 1,
      explanation:
        "Aurora claim ว่าเร็วกว่า MySQL บน RDS ถึง 5x และเร็วกว่า PostgreSQL บน RDS ถึง 3x — เป็น cloud-native database ที่ออกแบบมาเฉพาะ AWS storage auto-grow ถึง 64TB ราคาแพงกว่า RDS ~20% แต่ efficient กว่า",
    },
    {
      id: "databases-q4",
      question:
        "Amazon ElastiCache รองรับ in-memory engine อะไรบ้าง?",
      options: [
        "Redis และ MongoDB",
        "Redis และ Memcached",
        "Memcached และ Cassandra",
        "Redis และ DynamoDB",
      ],
      correct: 1,
      explanation:
        "ElastiCache รองรับ 2 engines: Redis (HA, persistence, advanced data types) และ Memcached (simple, multi-threaded, no persistence) — MongoDB ใช้ DocumentDB, Cassandra ใช้ Keyspaces, DynamoDB ไม่ใช่ in-memory engine แต่ใช้ DAX สำหรับ caching",
    },
    {
      id: "databases-q5",
      question:
        "ข้อใดคือความแตกต่างหลักระหว่าง DAX กับ ElastiCache?",
      options: [
        "DAX เป็น disk cache, ElastiCache เป็น in-memory cache",
        "DAX ใช้ได้เฉพาะ DynamoDB เท่านั้น ส่วน ElastiCache ใช้ได้กับ database ใดก็ได้",
        "ElastiCache เร็วกว่า DAX 10x",
        "DAX รองรับเฉพาะ Redis ส่วน ElastiCache รองรับ Memcached ด้วย",
      ],
      correct: 1,
      explanation:
        "DAX เป็น in-memory cache ที่ออกแบบมา <em>เฉพาะ DynamoDB</em> เท่านั้น (compatible กับ DynamoDB API) ส่วน ElastiCache เป็น general-purpose cache (Redis/Memcached) ที่ใช้ได้กับ database ใด ๆ ทั้งคู่เป็น in-memory",
    },
    {
      id: "databases-q6",
      question:
        "Amazon Redshift ออกแบบมาสำหรับ workload ประเภทใด?",
      options: [
        "OLTP (Online Transaction Processing)",
        "OLAP (Online Analytical Processing) / Data Warehousing",
        "Real-time key-value lookups",
        "Graph traversal queries",
      ],
      correct: 1,
      explanation:
        "Redshift เป็น data warehouse ที่ออกแบบสำหรับ OLAP (analytics, reporting, large queries) ใช้ columnar storage และ MPP — ไม่เหมาะกับ OLTP (transaction-heavy, real-time CRUD) ที่ควรใช้ RDS/Aurora แทน",
    },
    {
      id: "databases-q7",
      question:
        "Amazon Athena ใช้ query ข้อมูลที่ไหน?",
      options: [
        "EBS volumes",
        "RDS databases",
        "Amazon S3",
        "DynamoDB tables",
      ],
      correct: 2,
      explanation:
        "Athena เป็น serverless query service ที่ใช้ SQL query ข้อมูลใน <strong>S3 โดยตรง</strong> ไม่ต้องโหลดข้อมูลเข้า database ก่อน — pay per query (ตาม data ที่ scan) เหมาะกับ ad-hoc analysis และ log analytics",
    },
    {
      id: "databases-q8",
      question:
        "Amazon Aurora รองรับ database engines อะไรบ้าง?",
      options: [
        "MySQL และ MariaDB",
        "PostgreSQL และ MySQL",
        "Oracle และ SQL Server",
        "PostgreSQL และ MongoDB",
      ],
      correct: 1,
      explanation:
        "Aurora เป็น proprietary database ของ AWS ที่ <strong>compatible กับ PostgreSQL และ MySQL</strong> เท่านั้น ไม่รองรับ Oracle, SQL Server, MariaDB, หรือ MongoDB (MongoDB ใช้ DocumentDB)",
    },
    {
      id: "databases-q9",
      question:
        "ข้อใดถูกต้องเกี่ยวกับ access RDS instance?",
      options: [
        "สามารถ SSH เข้า RDS instance เพื่อปรับแต่ง OS ได้",
        "สามารถ SSH ได้เฉพาะ Aurora",
        "ไม่สามารถ SSH เข้า RDS instance ได้ (managed service)",
        "ต้องใช้ AWS Systems Manager Session Manager เพื่อ SSH",
      ],
      correct: 2,
      explanation:
        "RDS เป็น managed service ที่ AWS จัดการ underlying OS ให้ — <strong>ไม่สามารถ SSH</strong> เข้า instance ได้ ถ้าต้องการ control เต็มรูปแบบต้องติดตั้ง database บน EC2 เอง (แต่จะไม่ได้ managed features เช่น automated backup, Multi-AZ)",
    },
    {
      id: "databases-q10",
      question:
        "Amazon EMR (Elastic MapReduce) ใช้สำหรับงานประเภทใด?",
      options: [
        "สร้าง relational database clusters",
        "สร้าง Hadoop clusters สำหรับ big data processing (Spark, HBase, Presto, Flink)",
        "Cache ข้อมูลใน memory เพื่อลด DB load",
        "Migrate database จาก on-premise มา AWS",
      ],
      correct: 1,
      explanation:
        "EMR (Elastic MapReduce) ใช้สร้าง <strong>Hadoop clusters</strong> สำหรับ big data processing บน EC2 instances หลายร้อยตัว รองรับ Apache Spark, HBase, Presto, Flink และอื่น ๆ — ใช้สำหรับ data processing, machine learning, web indexing, big data analytics ส่วน migration ใช้ DMS, caching ใช้ ElastiCache/DAX",
    },
  ],
};
