import { TopicData } from "@/types/topic";

export const databases: TopicData = {
  slug: "databases",
  title: "Databases & Analytics",
  subtitle: "RDS, Aurora, DynamoDB, Redshift, Athena & more",
  accent: "sky",
  category: "Database",
  description:
    "ภาพรวม Database & Analytics ทั้งหมดของ AWS ตั้งแต่ Relational (RDS, Aurora), NoSQL (DynamoDB, DocumentDB), In-memory (ElastiCache), Data Warehouse (Redshift), Big Data (EMR, Athena, QuickSight, Glue) ไปจนถึง Specialty DB (Neptune, QLDB, Managed Blockchain) — เลือกใช้ให้ถูกกับ workload",
  keyPoints: [
    "RDS = Relational (SQL)<br>DynamoDB = NoSQL (key-value) — เลือกตาม schema และ scaling pattern",
    "Aurora เร็วกว่า MySQL 5x, PostgreSQL 3x — auto-grow storage ถึง 128 TiB",
    "Read Replicas = scale READ<br>Multi-AZ = high availability (failover)",
    "Redshift = OLAP/Analytics<br>Athena = Serverless SQL บน S3<br>EMR = Hadoop big data",
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
            "Storage <strong>auto-grows</strong> ทีละ 10GB จนถึง <strong>128 TiB</strong>",
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
          text: "Redis = HA + persistence + replication + pub/sub<br>Memcached = simple, multi-threaded, no persistence, ไม่มี HA — ส่วนใหญ่ Redis คือ default choice",
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
                "DAX = ใช้ได้เฉพาะ DynamoDB เท่านั้น<br>ElastiCache = general-purpose ใช้ได้กับ database ใดก็ได้ (RDS, Aurora, custom) — ถามเรื่อง cache DynamoDB ตอบ DAX",
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
          text: "Redshift = OLAP (analytics, reporting, large queries)<br>RDS/Aurora = OLTP (transactions, real-time CRUD) — เลือกผิดจะ performance พัง",
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
            "Storage <strong>auto-grows</strong> ทีละ 10GB จนถึง <strong>128 TiB</strong>",
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
          text: "QLDB = central ledger (มี central authority)<br>Managed Blockchain = decentralized (multi-party, no central authority) — ใช้ต่างกัน",
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
      id: "db-q1",
      question:
        "An application needs to store user profiles with flexible schema and scale to millions of requests/second with single-digit ms latency. Which service is BEST?",
      options: ["Amazon RDS", "Amazon Aurora", "Amazon DynamoDB", "Amazon Redshift"],
      correct: 2,
      explanation:
        "DynamoDB is a fully managed NoSQL key-value/document database designed for massive scale and consistent single-digit millisecond latency. RDS/Aurora are relational; Redshift is for analytics.",
    },
    {
      id: "db-q2",
      question:
        "Which database service is AWS's MySQL/PostgreSQL-compatible cloud-native database, claiming up to 5x MySQL performance?",
      options: ["Amazon RDS", "Amazon Aurora", "Amazon DynamoDB", "Amazon DocumentDB"],
      correct: 1,
      explanation:
        "Amazon Aurora is AWS's cloud-native relational database, MySQL- and PostgreSQL-compatible, with up to 5x MySQL / 3x PostgreSQL performance and built-in storage that auto-scales to 128 TiB.",
    },
    {
      id: "db-q3",
      question:
        "Which AWS service is a fully managed, petabyte-scale data warehouse for OLAP / business intelligence queries?",
      options: ["Amazon RDS", "Amazon Redshift", "Amazon DynamoDB", "Amazon EMR"],
      correct: 1,
      explanation:
        "Amazon Redshift is a managed, columnar data warehouse optimized for analytical (OLAP) queries on massive datasets — used for BI, reporting, and complex aggregations.",
    },
    {
      id: "db-q4",
      question:
        "Which AWS service provides an in-memory cache for sub-millisecond data access, supporting Redis or Memcached engines?",
      options: [
        "Amazon ElastiCache",
        "Amazon DynamoDB DAX",
        "Amazon RDS",
        "Amazon MemoryDB",
      ],
      correct: 0,
      explanation:
        "Amazon ElastiCache is a managed in-memory caching service supporting Redis and Memcached. It dramatically improves application performance for read-heavy workloads.",
    },
    {
      id: "db-q5",
      question:
        "Which service is a managed graph database for relationships (social networks, fraud detection, knowledge graphs)?",
      options: [
        "Amazon Neptune",
        "Amazon DocumentDB",
        "Amazon Keyspaces",
        "Amazon Quantum Ledger Database",
      ],
      correct: 0,
      explanation:
        "Amazon Neptune is a managed graph database supporting Property Graph (Gremlin) and RDF (SPARQL) — ideal for highly connected data like social networks and recommendation engines.",
    },
    {
      id: "db-q6",
      question:
        "Which service is a fully-managed, immutable, cryptographically verifiable ledger database?",
      options: [
        "Amazon DynamoDB",
        "Amazon Quantum Ledger Database (QLDB)",
        "Amazon Managed Blockchain",
        "Amazon Aurora",
      ],
      correct: 1,
      explanation:
        "Amazon QLDB provides a transparent, immutable, cryptographically verifiable transaction log — used for audit trails, financial transactions, and supply chain.",
    },
    {
      id: "db-q7",
      question:
        "Which AWS database is a MongoDB-compatible document database?",
      options: [
        "Amazon DocumentDB (with MongoDB compatibility)",
        "Amazon DynamoDB",
        "Amazon Neptune",
        "Amazon Keyspaces",
      ],
      correct: 0,
      explanation:
        "Amazon DocumentDB is a managed JSON document database with MongoDB API compatibility — designed to run MongoDB workloads at AWS scale without managing the infrastructure.",
    },
    {
      id: "db-q8",
      question:
        "Which AWS database is a managed Apache Cassandra-compatible service?",
      options: [
        "Amazon Neptune",
        "Amazon Keyspaces (for Apache Cassandra)",
        "Amazon DynamoDB",
        "Amazon DocumentDB",
      ],
      correct: 1,
      explanation:
        "Amazon Keyspaces is a fully managed Cassandra-compatible service — serverless, pay-per-use, scales automatically.",
    },
    {
      id: "db-q9",
      question:
        "Which AWS service is BEST for serverless interactive SQL queries directly against data in S3?",
      options: [
        "Amazon Athena",
        "Amazon Redshift",
        "Amazon EMR",
        "Amazon RDS",
      ],
      correct: 0,
      explanation:
        "Amazon Athena is a serverless query service that runs SQL directly against S3 (CSV, JSON, Parquet, ORC). Pay only per query (per TB scanned). Great for ad-hoc analytics.",
    },
    {
      id: "db-q10",
      question:
        "Which AWS service provides serverless ETL / data preparation for analytics, with a Data Catalog?",
      options: [
        "AWS Glue",
        "AWS Data Pipeline",
        "AWS DMS",
        "Amazon EMR",
      ],
      correct: 0,
      explanation:
        "AWS Glue is a serverless ETL service. Glue Data Catalog acts as a central metadata store. Glue can crawl sources to discover schemas and run Spark/Python ETL jobs.",
    },
    {
      id: "db-q11",
      question:
        "Which DynamoDB feature provides in-memory caching with microsecond-level read latency?",
      options: [
        "DAX (DynamoDB Accelerator)",
        "DynamoDB Streams",
        "ElastiCache",
        "Global Tables",
      ],
      correct: 0,
      explanation:
        "DynamoDB Accelerator (DAX) is a fully managed, write-through cache delivering microsecond-level read performance for DynamoDB tables.",
    },
    {
      id: "db-q12",
      question:
        "Which DynamoDB feature replicates a table across multiple AWS regions for active-active access?",
      options: [
        "DynamoDB Streams",
        "Global Tables",
        "Cross-Region Replication",
        "DAX",
      ],
      correct: 1,
      explanation:
        "DynamoDB Global Tables provide multi-region, multi-active replication — every region can read AND write, with all changes propagated automatically.",
    },
    {
      id: "db-q13",
      question:
        "Which AWS service is a managed Apache Hadoop / Spark / Hive / Presto cluster service for big data processing?",
      options: [
        "Amazon EMR",
        "AWS Glue",
        "Amazon Athena",
        "Amazon Kinesis",
      ],
      correct: 0,
      explanation:
        "Amazon EMR (Elastic MapReduce) is a managed cluster platform for big data frameworks like Hadoop, Spark, Hive, HBase, Flink, Presto. Used for large-scale data processing and ML.",
    },
    {
      id: "db-q14",
      question:
        "Which RDS feature provides synchronous replication to a standby database in a different AZ for high availability?",
      options: [
        "Read Replica",
        "Multi-AZ Deployment",
        "Cross-Region Replication",
        "Aurora Global Database",
      ],
      correct: 1,
      explanation:
        "RDS Multi-AZ deployments maintain a synchronous standby in a different AZ. On primary failure, RDS automatically fails over (typically <60 sec) — used for HA, not for read scaling.",
    },
    {
      id: "db-q15",
      question:
        "Which RDS feature is used to scale READ workloads by creating one or more asynchronously replicated copies?",
      options: [
        "Multi-AZ",
        "Read Replicas",
        "Global Database",
        "Snapshots",
      ],
      correct: 1,
      explanation:
        "RDS Read Replicas use asynchronous replication. Up to 5 (15 for Aurora) replicas can offload read traffic from the primary. Read Replicas can also be promoted to standalone DBs.",
    },
    {
      id: "db-q16",
      question:
        "Which AWS service simplifies data migration between on-premises and AWS databases (homogeneous and heterogeneous)?",
      options: [
        "AWS Database Migration Service (DMS)",
        "AWS Snowball",
        "AWS Direct Connect",
        "AWS DataSync",
      ],
      correct: 0,
      explanation:
        "AWS DMS migrates data between databases (e.g., Oracle → Aurora, SQL Server → RDS). Combined with the Schema Conversion Tool (SCT), it supports heterogeneous migrations.",
    },
    {
      id: "db-q17",
      question:
        "Which database service is fully serverless — pay only for the requests and storage you use, with no instance to manage?",
      options: [
        "Amazon RDS",
        "Amazon DynamoDB (on-demand mode)",
        "Amazon Aurora Provisioned",
        "Amazon Redshift Provisioned",
      ],
      correct: 1,
      explanation:
        "DynamoDB On-Demand and Aurora Serverless are both serverless. DynamoDB on-demand charges per read/write request; Aurora Serverless scales capacity up/down automatically and pauses when idle.",
    },
    {
      id: "db-q18",
      question:
        "Which AWS service is a real-time streaming data platform for ingestion and analytics (e.g., clickstreams, IoT)?",
      options: [
        "Amazon Kinesis",
        "Amazon SQS",
        "Amazon SNS",
        "Amazon Athena",
      ],
      correct: 0,
      explanation:
        "Amazon Kinesis is a family of real-time streaming services: Data Streams, Data Firehose, Managed Service for Apache Flink, and Video Streams.",
    },
    {
      id: "db-q19",
      question:
        "Which streaming service is BEST to deliver streaming data into S3, Redshift, OpenSearch, or Splunk WITHOUT writing custom code?",
      options: [
        "Kinesis Data Streams",
        "Amazon Data Firehose (formerly Kinesis Data Firehose)",
        "Kinesis Video Streams",
        "Managed Service for Apache Flink",
      ],
      correct: 1,
      explanation:
        "Amazon Data Firehose (renamed from Kinesis Data Firehose in 2024) is a fully managed delivery service for streaming data into S3, Redshift, OpenSearch, Splunk, etc. — no code needed, with optional buffering and transformation.",
    },
    {
      id: "db-q20",
      question:
        "Which is the BEST description of OLTP vs. OLAP?",
      options: [
        "OLTP = analytical; OLAP = transactional.",
        "OLTP = transactional (e.g., orders, inventory updates); OLAP = analytical (e.g., aggregating millions of rows for BI).",
        "OLTP and OLAP are the same.",
        "OLTP only works on NoSQL.",
      ],
      correct: 1,
      explanation:
        "OLTP (Online Transaction Processing) handles many small transactions — RDS/Aurora/DynamoDB. OLAP (Online Analytical Processing) handles complex analytical queries on large datasets — Redshift.",
    },
    {
      id: "db-q21",
      question:
        "Which AWS service provides a centralized data lake catalog and lets you search, manage, and secure data across S3, RDS, Redshift?",
      options: [
        "AWS Lake Formation",
        "AWS Glue Data Catalog",
        "Amazon Athena",
        "AWS Data Exchange",
      ],
      correct: 0,
      explanation:
        "AWS Lake Formation simplifies setting up a secure data lake on S3 — centralized access controls, fine-grained permissions, and integration with Glue/Athena/Redshift.",
    },
    {
      id: "db-q22",
      question:
        "Which database engines does Amazon RDS support? (Choose the BEST answer.)",
      options: [
        "Only MySQL.",
        "MySQL, PostgreSQL, MariaDB, Oracle, Microsoft SQL Server, IBM Db2, and Amazon Aurora.",
        "Only NoSQL engines.",
        "Only proprietary engines.",
      ],
      correct: 1,
      explanation:
        "Amazon RDS supports seven engines: MySQL, PostgreSQL, MariaDB, Oracle, Microsoft SQL Server, IBM Db2 (added in 2023), and Amazon Aurora.",
    },
    {
      id: "db-q23",
      question:
        "Which is the recommended way to back up an RDS database for point-in-time recovery?",
      options: [
        "Manually export to S3 every hour.",
        "Use automated backups (transaction logs + daily snapshots) — enabled by default.",
        "Use EBS snapshots.",
        "Use S3 versioning.",
      ],
      correct: 1,
      explanation:
        "RDS automated backups capture daily snapshots and continuously stream transaction logs, enabling point-in-time recovery to any second within the retention window (up to 35 days).",
    },
    {
      id: "db-q24",
      question:
        "Which service helps visualize data via interactive dashboards from many sources (Athena, Redshift, RDS, S3, etc.)?",
      options: [
        "Amazon QuickSight",
        "Amazon Redshift",
        "AWS Glue",
        "Amazon Kinesis",
      ],
      correct: 0,
      explanation:
        "Amazon QuickSight is a serverless BI service for interactive dashboards and visualizations — connects to many AWS data sources and supports ML insights.",
    },
    {
      id: "db-q25",
      question:
        "Which is a benefit of Aurora compared to standard RDS MySQL/PostgreSQL?",
      options: [
        "Aurora is cheaper for all workloads.",
        "Aurora offers higher performance, auto-scaling storage up to 128 TiB, 6 copies across 3 AZs, faster failover, and Aurora Serverless option.",
        "Aurora supports more engines.",
        "Aurora has worse fault tolerance.",
      ],
      correct: 1,
      explanation:
        "Aurora provides up to 5x MySQL / 3x PostgreSQL performance, storage auto-scaling to 128 TiB, 6 copies across 3 AZs, sub-second failover, and Aurora Serverless for variable workloads.",
    },
  ],
};
