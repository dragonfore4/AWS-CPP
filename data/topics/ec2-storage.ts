import { TopicData } from "@/types/topic";

export const ec2Storage: TopicData = {
  slug: "ec2-storage",
  title: "EC2 Storage",
  subtitle: "EBS, EFS, Instance Store, FSx & AMI",
  accent: "cyan",
  category: "Storage",
  description:
    "รวมทุกเรื่อง Storage ของ EC2 — EBS (Network Drive), Instance Store (Physical Disk), EFS (Network File System), FSx (Windows/Lustre) และ AMI (Image สำหรับ launch instance) เข้าใจความต่างของแต่ละแบบเพื่อเลือกใช้ให้เหมาะกับงาน",
  keyPoints: [
    "EBS = Network Drive ผูกกับ AZ — Instance Store = Physical Disk เร็วสุดแต่ข้อมูลหายเมื่อ stop",
    "EFS = NFS แชร์ได้หลาย instance ข้าม AZ (Linux เท่านั้น) — แพงกว่า EBS ~3x",
    "FSx for Windows = SMB + Active Directory<br>FSx for Lustre = HPC/ML cluster file system",
    "AMI = Image ของ EC2 (OS + software + config) — region-specific, copy ข้าม region ได้",
  ],
  sections: [
    {
      id: "ebs-overview",
      title: "EBS Overview — Network Drive ของ EC2",
      content: [
        {
          type: "paragraph",
          text: "<strong>EBS (Elastic Block Store)</strong> คือ Network Drive ที่ attach เข้ากับ EC2 instance ได้ — ข้อมูลยังคงอยู่แม้ instance จะถูก terminate เหมือน USB External Hard Drive ที่อยู่บน network",
        },
        {
          type: "list",
          items: [
            "<strong>Network Drive ไม่ใช่ Physical Drive</strong> — ส่งข้อมูลผ่าน network ดังนั้นอาจมี latency เล็กน้อย",
            "<strong>Detach / Reattach ได้เร็ว</strong> — ถอดจาก instance หนึ่งไปเสียบอีก instance ได้ในไม่กี่วินาที",
            "<strong>ผูกกับ AZ เดียว</strong> — EBS Volume ที่สร้างใน ap-southeast-1a attach กับ instance ใน ap-southeast-1b ไม่ได้ ต้องใช้ Snapshot ก่อน",
            "<strong>Provisioned Capacity</strong> — จองทั้งขนาด (GB) และ IOPS ล่วงหน้า จ่ายตามที่จองไม่ใช่ที่ใช้จริง",
            "<strong>Free Tier</strong> — 30 GB ของ General Purpose SSD หรือ Magnetic ต่อเดือน",
            "1 Volume → 1 Instance (ปกติ) ยกเว้น io1/io2 Multi-Attach",
            "1 Instance → หลาย Volume ได้ — เหมือน computer ที่มีหลาย hard disk",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "เปรียบเปรย — USB stick on network",
          text: "EBS เหมือน USB External Hard Drive บน network — เสียบเข้า EC2 ได้ ถอดออกได้ และเมื่อย้าย instance ข้าม AZ ก็แค่ถอดไปเสียบใหม่ (โดยใช้ Snapshot)",
        },
      ],
    },
    {
      id: "volume-types",
      title: "EBS Volume Types — 6 ประเภทที่ต้องรู้",
      content: [
        {
          type: "paragraph",
          text: "EBS แบ่งเป็น 2 กลุ่มหลัก: <strong>SSD</strong> (เหมาะกับ random I/O, latency ต่ำ, ใช้เป็น Boot Volume ได้) และ <strong>HDD</strong> (เหมาะกับ sequential I/O, throughput สูง, ราคาถูก, <em>ใช้เป็น Boot Volume ไม่ได้</em>)",
        },
        {
          type: "grid",
          items: [
            {
              title: "gp3 — General Purpose SSD (แนะนำ)",
              description:
                "Baseline 3,000 IOPS + 125 MB/s, scale ได้ถึง 16,000 IOPS และ 1,000 MB/s อิสระจาก storage size — ราคาถูกกว่า gp2 ~20%",
            },
            {
              title: "gp2 — General Purpose SSD (รุ่นเก่า)",
              description:
                "IOPS ผูกกับ size: 3 IOPS/GB (สูงสุด 16,000) — อยากได้ IOPS มากต้องเพิ่ม storage ด้วย แนะนำ migrate ไป gp3",
            },
            {
              title: "io2 Block Express — Provisioned IOPS SSD",
              description:
                "สูงสุด 256,000 IOPS, sub-millisecond latency, รองรับ Multi-Attach เหมาะกับ SAP HANA, Oracle, critical DB ที่ต้องการ IOPS สูงสุด",
            },
            {
              title: "io1 — Provisioned IOPS SSD (รุ่นเก่า)",
              description:
                "สูงสุด 64,000 IOPS (Nitro instance), รองรับ Multi-Attach แนะนำใช้ io2 แทน",
            },
            {
              title: "st1 — Throughput Optimized HDD",
              description:
                "สูงสุด 500 MB/s throughput — ใช้เป็น Boot Volume ไม่ได้ เหมาะกับ Big Data, Data Warehouse, Log processing",
            },
            {
              title: "sc1 — Cold HDD",
              description:
                "สูงสุด 250 MB/s — ราคาถูกที่สุดใน EBS ทั้งหมด ใช้เป็น Boot Volume ไม่ได้ เหมาะกับ archive, ข้อมูลที่เข้าถึงไม่บ่อย",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "จำสำหรับสอบ — HDD ใช้เป็น Boot Volume ไม่ได้",
          text: "<strong>Boot Volume</strong> ต้องเป็น SSD เท่านั้น (gp2, gp3, io1, io2) — st1 และ sc1 (HDD) ใช้เป็น Boot Volume ไม่ได้<br>ต้องการ <strong>IOPS สูงมาก (>16,000)</strong> → ต้อง io1 หรือ io2<br><strong>gp3 ดีกว่า gp2</strong> ทุกด้าน",
        },
      ],
    },
    {
      id: "snapshots",
      title: "EBS Snapshots — Backup & ย้าย AZ/Region",
      content: [
        {
          type: "paragraph",
          text: "<strong>Snapshot</strong> คือการ backup EBS Volume ณ จุดเวลาหนึ่ง — เก็บอยู่ใน <strong>S3</strong> (แต่ไม่เห็นใน S3 bucket โดยตรง) และเป็นวิธีหลักในการย้าย EBS ข้าม AZ หรือ Region",
        },
        {
          type: "list",
          items: [
            "<strong>แนะนำให้ detach volume ก่อน snapshot</strong> เพื่อความถูกต้องของข้อมูล แต่ไม่จำเป็น (ไม่ใช่ requirement)",
            "<strong>Incremental</strong> — backup เฉพาะ block ที่เปลี่ยนแปลงตั้งแต่ snapshot ครั้งก่อน ประหยัดพื้นที่และเวลา",
            "สร้าง Volume ใหม่จาก snapshot ใน AZ หรือ Region ใดก็ได้ — <strong>วิธีหลักในการย้าย EBS ข้าม AZ</strong>",
            "Copy snapshot ข้าม Region ได้ — ใช้สำหรับ Disaster Recovery (DR)",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "EBS Snapshot Archive",
              description:
                "ย้าย snapshot ไป archive tier ราคาถูกกว่า ~75% — Restore ใช้เวลา 24–72 ชั่วโมง เหมาะกับ snapshot ที่ไม่ค่อยใช้แต่ต้องเก็บ",
            },
            {
              title: "Recycle Bin for Snapshots",
              description:
                "กำหนด retention rule ให้ snapshot ที่ถูกลบย้ายไป Recycle Bin ก่อน (1 วัน – 1 ปี) ป้องกันลบโดยไม่ตั้งใจ — กู้คืนได้ภายใน retention period",
            },
            {
              title: "Fast Snapshot Restore (FSR)",
              description:
                "Volume ที่ restore จาก snapshot พร้อม full performance ทันทีโดยไม่ต้อง warm up — มีค่าใช้จ่ายเพิ่ม เหมาะกับ snapshot ที่ต้อง restore เร่งด่วน",
            },
            {
              title: "Cross-AZ / Cross-Region Copy",
              description:
                "วิธีเดียวที่จะย้าย EBS volume ข้าม AZ หรือ Region: Snapshot → Copy → Create Volume ใน AZ/Region ปลายทาง",
            },
          ],
        },
      ],
    },
    {
      id: "multi-attach",
      title: "EBS Multi-Attach — Volume เดียว หลาย Instance",
      content: [
        {
          type: "paragraph",
          text: "ปกติ EBS Volume attach ได้กับ instance เดียวเท่านั้น แต่ <strong>io1 / io2</strong> รองรับ <strong>Multi-Attach</strong> — attach volume เดียวกันกับ instance หลายตัวพร้อมกันได้ใน <em>AZ เดียวกัน</em>",
        },
        {
          type: "list",
          items: [
            "รองรับเฉพาะ <strong>io1 และ io2</strong> เท่านั้น (gp2/gp3/HDD ไม่รองรับ)",
            "Attach ได้สูงสุด <strong>16 instances</strong> พร้อมกัน",
            "ทุก instance ต้องอยู่ใน <strong>AZ เดียวกัน</strong>",
            "ทุก instance มีสิทธิ์ <strong>read และ write</strong> volume พร้อมกัน",
            "Application ต้องจัดการ <strong>concurrent write เอง</strong> — EBS ไม่ได้ lock ให้",
            "ต้องใช้ filesystem ที่รองรับ cluster เช่น <strong>GFS2, OCFS2</strong> — <em>ไม่ใช่ ext4 หรือ xfs ธรรมดา</em>",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Use Case",
          text: "High-availability application ที่ต้องการให้หลาย instance เข้า storage เดียวกันพร้อมกัน เช่น clustered database หรือ distributed file system",
        },
      ],
    },
    {
      id: "encryption",
      title: "EBS Encryption — เข้ารหัสด้วย KMS",
      content: [
        {
          type: "paragraph",
          text: "เปิด encryption บน EBS Volume ได้ด้วย <strong>AWS KMS</strong> (AES-256) — เมื่อเปิดแล้วทุกอย่างจะถูก encrypt โดยอัตโนมัติ:",
        },
        {
          type: "list",
          items: [
            "ข้อมูลที่เก็บบน volume (<strong>data at rest</strong>)",
            "ข้อมูลที่วิ่งระหว่าง volume กับ instance (<strong>data in transit</strong>)",
            "<strong>Snapshot</strong> ที่สร้างจาก volume ที่ encrypt",
            "<strong>Volume</strong> ที่สร้างจาก snapshot ที่ encrypt",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "ผลต่อ performance",
          text: "Encryption/Decryption จัดการโดย hardware (hardware-accelerated) — ไม่มีผลต่อ latency อย่างมีนัยสำคัญ",
        },
        {
          type: "paragraph",
          text: "<strong>วิธีเข้ารหัส Volume ที่ไม่ได้ encrypt ไว้ตั้งแต่แรก:</strong>",
        },
        {
          type: "list",
          items: [
            "1) สร้าง <strong>Snapshot</strong> จาก volume เดิม (ไม่ encrypt)",
            "2) <strong>Copy snapshot</strong> พร้อมเปิด Encrypt → ได้ encrypted snapshot",
            "3) <strong>Create Volume</strong> ใหม่จาก encrypted snapshot → ได้ encrypted volume",
            "4) <strong>Attach volume ใหม่</strong> เข้า instance แทนอันเดิม",
          ],
        },
      ],
    },
    {
      id: "delete-on-termination",
      title: "EBS Delete on Termination",
      content: [
        {
          type: "paragraph",
          text: "เมื่อ EC2 instance ถูก <strong>terminate</strong> EBS Volume ที่ attach อยู่จะถูกลบหรือไม่ขึ้นอยู่กับ <strong>Delete on Termination flag</strong>",
        },
        {
          type: "grid",
          items: [
            {
              title: "Root Volume — Default = TRUE",
              description:
                "Boot volume (root EBS) ของ EC2 จะถูก <strong>ลบอัตโนมัติ</strong> เมื่อ instance terminate — ป้องกัน orphan volume สะสม",
            },
            {
              title: "Other (Attached) Volumes — Default = FALSE",
              description:
                "Volume อื่นที่ attach เพิ่มเข้ามาจะ <strong>ไม่ถูกลบ</strong> เมื่อ instance terminate — เก็บข้อมูลไว้ได้",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Configurable",
          text: "ค่านี้ตั้งได้ใน AWS Console หรือ CLI ตอน launch instance หรือแก้ทีหลัง — เช่น ถ้าต้องการเก็บ root volume ไว้หลัง terminate ก็เปลี่ยนเป็น FALSE ได้",
        },
      ],
    },
    {
      id: "instance-store",
      title: "EC2 Instance Store — Physical Disk บน Host",
      content: [
        {
          type: "paragraph",
          text: "<strong>Instance Store</strong> คือ storage ที่ติดมากับ <strong>physical host</strong> ของ EC2 โดยตรง — ต่างจาก EBS ที่เป็น network drive เชื่อมต่อผ่าน hardware เดียวกัน ทำให้เร็วกว่ามาก",
        },
        {
          type: "list",
          items: [
            "<strong>Highest IOPS / Lowest Latency</strong> — เป็น physical disk บน host เร็วกว่า EBS อย่างมาก",
            "<strong>Ephemeral Storage</strong> — ข้อมูลหายทั้งหมดเมื่อ stop / terminate / hardware ล้มเหลว ไม่สามารถกู้คืนได้",
            "<strong>ราคารวมอยู่ในค่า instance แล้ว</strong> — ไม่มีค่าใช้จ่ายแยกต่างหาก",
            "<strong>ขนาดคงที่</strong>ตาม instance type — ไม่สามารถ resize ได้",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "ข้อควรระวัง",
          text: "อย่าเก็บข้อมูลสำคัญใน Instance Store — ใช้ EBS หรือ S3 แทน เพราะข้อมูลจะหายถาวรเมื่อ instance หยุดทำงาน",
        },
        {
          type: "callout",
          variant: "info",
          title: "Use Cases ที่เหมาะสม",
          text: "Buffer / Cache ชั่วคราว, Scratch data / Temporary files, Replicated data ที่มี copy อยู่ที่อื่นแล้ว",
        },
      ],
    },
    {
      id: "ami",
      title: "AMI — Amazon Machine Image",
      content: [
        {
          type: "paragraph",
          text: "<strong>AMI (Amazon Machine Image)</strong> คือ <em>customization ของ EC2</em> — เก็บ OS + software + configuration + monitoring agent ไว้เป็น image พร้อมใช้ launch instance ใหม่ได้ทันที",
        },
        {
          type: "list",
          items: [
            "<strong>Faster Boot</strong> — ทุก software ถูกติดตั้งไว้แล้วใน AMI ไม่ต้อง install ตอน boot",
            "<strong>Region-specific</strong> — AMI ใน ap-southeast-1 ใช้ใน us-east-1 ไม่ได้ ต้อง <em>copy AMI ข้าม region</em>",
            "AMI สร้างจาก EBS Snapshot ของ root volume",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Public AMI (จาก AWS)",
              description:
                "AMI ที่ AWS เตรียมไว้ให้ฟรี เช่น Amazon Linux 2, Ubuntu, Windows Server — ใช้เป็นจุดเริ่มต้นในการ customize",
            },
            {
              title: "Your Own AMI",
              description:
                "AMI ที่คุณสร้างเอง — launch EC2 → install/config → stop → Build AMI — ใช้กระจายเป็น template ภายในองค์กร",
            },
            {
              title: "AWS Marketplace AMI",
              description:
                "AMI ที่ vendor ขายผ่าน Marketplace — มาพร้อม software license (เช่น databases, security appliance) จ่ายผ่าน AWS bill",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Process การสร้าง Custom AMI",
          text: "1) Launch EC2 instance จาก base AMI → 2) Customize: install software, config, patch → 3) Stop instance → 4) Build AMI (AWS จะสร้าง EBS Snapshot อัตโนมัติ) → 5) Launch instance ใหม่จาก AMI ใช้งานได้ทันที",
        },
      ],
    },
    {
      id: "image-builder",
      title: "EC2 Image Builder — สร้าง AMI อัตโนมัติ",
      content: [
        {
          type: "paragraph",
          text: "<strong>EC2 Image Builder</strong> เป็น service ที่ใช้ <strong>automate</strong> การสร้าง / maintain / validate / test AMI — ตั้งให้รันตามตารางหรือเมื่อมี package update",
        },
        {
          type: "list",
          items: [
            "Automate การสร้าง AMI — ไม่ต้อง build manually ทุกครั้ง",
            "ตั้ง <strong>schedule</strong> ได้ (เช่น weekly) หรือ trigger เมื่อ package update",
            "มี <strong>validation & testing pipeline</strong> ในตัว — ทดสอบ AMI ก่อน publish",
            "<strong>Free service</strong> — จ่ายเฉพาะ EC2, EBS, S3 ที่ใช้ระหว่าง build",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Use Case",
          text: "องค์กรที่ต้อง maintain AMI ของตัวเองเพื่อให้มี security patch ใหม่เสมอ — ตั้ง Image Builder ให้รันทุกสัปดาห์ จะได้ AMI ที่ปลอดภัยและทันสมัยโดยอัตโนมัติ",
        },
      ],
    },
    {
      id: "efs",
      title: "EFS — Elastic File System",
      content: [
        {
          type: "paragraph",
          text: "<strong>EFS</strong> คือ <strong>Managed NFS (Network File System)</strong> ที่ให้ EC2 instance หลายร้อยเครื่อง mount พร้อมกันได้ — ต่างจาก EBS ที่ attach ได้กับ instance เดียว",
        },
        {
          type: "list",
          items: [
            "<strong>Multi-Attach หลายร้อย instance</strong> — หลาย EC2 ในหลาย AZ สามารถ mount EFS เดียวกันได้พร้อมกัน",
            "<strong>Linux เท่านั้น</strong> — ใช้ POSIX file system (ไม่รองรับ Windows)",
            "<strong>Multi-AZ, Highly Available</strong> — ข้อมูลซ้ำหลาย AZ อัตโนมัติ",
            "<strong>Scalable</strong> — auto-grow ตามที่ใช้ ไม่ต้อง provision ขนาดล่วงหน้า",
            "<strong>Pay-per-use</strong> — จ่ายตามที่ใช้จริง ไม่ต้องจองพื้นที่",
            "<strong>แพงกว่า EBS gp2 ~3x</strong> — แต่คุ้มค่าสำหรับ shared storage ข้าม instance",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "EFS Standard (Multi-AZ)",
              description:
                "เก็บข้อมูลซ้ำหลาย AZ เพื่อ high availability — เหมาะกับ production workload ที่ต้องการ availability สูง",
            },
            {
              title: "EFS-IA (Infrequent Access)",
              description:
                "ราคาถูกกว่า Standard ถึง 92% มีค่าใช้จ่ายเมื่อ retrieve — ใช้ <strong>Lifecycle Policy</strong> ย้ายไฟล์ที่ไม่ถูกใช้งาน &gt;60 วันไป IA อัตโนมัติ",
            },
            {
              title: "EFS One Zone (Single-AZ)",
              description:
                "เก็บข้อมูลใน AZ เดียว ราคาถูก — เหมาะกับ dev / test environment ที่ไม่ต้องการ multi-AZ resilience",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Use Cases",
          text: "Content Management System (CMS), Web serving (shared assets), Home directories (multi-user system), Data sharing ระหว่าง EC2 หลายเครื่อง",
        },
      ],
    },
    {
      id: "fsx-windows",
      title: "FSx for Windows File Server",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon FSx for Windows File Server</strong> คือ <strong>fully managed Windows file system</strong> — เป็น Windows-native shared storage บน AWS",
        },
        {
          type: "list",
          items: [
            "รองรับ <strong>SMB protocol</strong> (Windows native file sharing)",
            "รองรับ <strong>Windows NTFS</strong> filesystem",
            "Integrate กับ <strong>Microsoft Active Directory (AD)</strong> — ใช้ AD permission ควบคุมการเข้าถึงไฟล์",
            "Multi-AZ available, supports Windows ACLs, user quotas",
            "เหมาะกับ Windows-based applications ที่ต้องการ shared storage",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "เปรียบเทียบกับ EFS",
          text: "EFS = Linux/NFS<br>FSx for Windows = Windows/SMB + Active Directory — ถ้าใช้ Windows app ที่ต้องการ shared file system ต้องเลือก FSx for Windows",
        },
      ],
    },
    {
      id: "fsx-lustre",
      title: "FSx for Lustre — HPC / ML",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon FSx for Lustre</strong> คือ <strong>high-performance Linux cluster file system</strong> — ชื่อ Lustre มาจาก <em>'Linux + cluster'</em> ออกแบบมาสำหรับงานที่ต้องการ throughput และ IOPS สูงมาก",
        },
        {
          type: "list",
          items: [
            "<strong>Performance สูงมาก</strong> — scale ได้ถึง 100s GB/s throughput, ล้าน IOPS, sub-millisecond latency",
            "เหมาะกับ <strong>HPC (High Performance Computing)</strong>",
            "เหมาะกับ <strong>Machine Learning</strong> (training data ขนาดใหญ่)",
            "เหมาะกับ <strong>Analytics</strong> และ <strong>Financial Modeling</strong>",
            "Integrate กับ S3 ได้ — อ่าน/เขียนไฟล์บน S3 ผ่าน FSx Lustre",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "วิธีจำ",
          text: "FSx for Lustre = '<strong>L</strong>inux + cl<strong>uster</strong>' — ชื่อบอกว่าเป็น file system สำหรับ Linux cluster ที่ใช้ในงาน HPC / ML / Analytics",
        },
      ],
    },
    {
      id: "shared-responsibility",
      title: "Shared Responsibility สำหรับ EC2 Storage",
      content: [
        {
          type: "grid",
          items: [
            {
              title: "AWS รับผิดชอบ (Security OF the Cloud)",
              description:
                "Infrastructure ของ EBS / EFS / FSx (physical storage), Replication ภายใน AZ (EBS) และ Multi-AZ (EFS) อัตโนมัติ, Hardware failure replacement, ป้องกันการเข้าถึงโดย AWS employees, Encryption key infrastructure (KMS)",
            },
            {
              title: "User รับผิดชอบ (Security IN the Cloud)",
              description:
                "ตั้งค่า Backup / Snapshot เอง (EBS ไม่ backup อัตโนมัติ), เปิด Encryption หรือไม่, ข้อมูลที่เก็บบน drive, เข้าใจความเสี่ยงของ Instance Store (ephemeral), ตั้ง Delete on Termination ให้ถูกต้อง, IAM permissions",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "สำคัญ",
          text: "EBS ไม่ backup ให้อัตโนมัติ — ต้องสร้าง Snapshot เองหรือใช้ AWS Backup<br>Instance Store ข้อมูลหายทันทีเมื่อ stop — ความเสี่ยงนี้ User ต้องรู้และจัดการเอง",
        },
      ],
    },
    {
      id: "comparison",
      title: "ตารางเปรียบเทียบ EBS vs Instance Store vs EFS",
      content: [
        {
          type: "grid",
          items: [
            {
              title: "EBS",
              description:
                "<strong>Block Storage (Network)</strong><br>เร็ว<br>ข้อมูลไม่หายเมื่อ stop<br>1 instance (หรือ 16 ด้วย Multi-Attach io1/io2)<br><strong>ผูก AZ เดียว</strong><br>Provisioned size<br>Linux + Windows",
            },
            {
              title: "Instance Store",
              description:
                "<strong>Block Storage (Physical)</strong><br><strong>เร็วที่สุด</strong><br>ข้อมูล<strong>หายหมด</strong>เมื่อ stop/terminate<br>1 instance เท่านั้น<br>ผูก AZ เดียว<br>Fixed size<br>Linux + Windows<br>ราคารวมกับ instance",
            },
            {
              title: "EFS",
              description:
                "<strong>File System (Network NFS)</strong><br>ช้ากว่า EBS<br>ข้อมูลไม่หาย<br><strong>หลายร้อย instance ข้าม AZ</strong><br>Auto Scaling<br><strong>Linux เท่านั้น</strong><br>แพงสุด (~3x EBS gp2)",
            },
          ],
        },
        {
          type: "paragraph",
          text: "<strong>สรุปการเลือกใช้</strong> — ใช้ scenario เป็นจุดเริ่มต้น แล้วจับคู่กับบริการที่เหมาะที่สุด:",
        },
        {
          type: "list",
          items: [
            "ต้องการ <strong>persistent block storage</strong> สำหรับ instance เดียว (Boot volume, DB) → <strong>EBS</strong>",
            "ต้องการ <strong>IOPS สูงสุด</strong> กับข้อมูลชั่วคราว (Cache, Buffer) → <strong>Instance Store</strong>",
            "หลาย instance ต้อง<strong>แชร์ไฟล์ข้าม AZ</strong> → <strong>EFS</strong>",
            "<strong>Windows shared storage</strong> (SMB + Active Directory) → <strong>FSx for Windows</strong>",
            "<strong>HPC / ML cluster</strong> ที่ต้องการ throughput สูงระดับ 100 GB/s → <strong>FSx for Lustre</strong>",
          ],
        },
      ],
    },
    {
      id: "summary",
      title: "Summary — สรุปประเด็นสำคัญ",
      content: [
        {
          type: "paragraph",
          text: '<strong class="text-white">EC2 Storage</strong> มี 4 กลุ่มหลัก: <strong>EBS</strong> สำหรับ block storage แบบติด instance เดียว, <strong>Instance Store</strong> สำหรับ disk ที่เร็วที่สุดแต่ชั่วคราว, <strong>EFS</strong> สำหรับ shared file system บน Linux และ <strong>FSx</strong> สำหรับ workload เฉพาะทาง (Windows / HPC) — เลือกได้จาก persistence, performance และ access pattern',
        },
        {
          type: "grid",
          items: [
            {
              title: "EBS — Block Storage",
              description:
                "Network drive ที่ผูกกับ <strong>AZ เดียว</strong> และ <em>persistent</em> เมื่อ stop instance",
            },
            {
              title: "EBS Volume Types",
              description:
                "<strong>gp3</strong> เป็น default ที่แนะนำ ส่วน <strong>io2</strong> ให้ IOPS สูงสุดสำหรับ DB ที่ต้องการ performance",
            },
            {
              title: "EBS HDD (st1 / sc1)",
              description:
                "ราคาถูกสำหรับ throughput-intensive workload แต่<strong>ใช้เป็น Boot Volume ไม่ได้</strong>",
            },
            {
              title: "Snapshot",
              description:
                "Backup แบบ incremental เก็บใน S3 และเป็นวิธี<strong>เดียว</strong>ที่ย้าย EBS ข้าม AZ หรือ Region",
            },
            {
              title: "Multi-Attach",
              description:
                "ผูก EBS เดียวกับสูงสุด 16 instance — รองรับเฉพาะ <strong>io1 / io2</strong> และต้องใช้ cluster filesystem",
            },
            {
              title: "EBS Encryption",
              description:
                "ใช้ <strong>AWS KMS (AES-256)</strong> เข้ารหัส data at rest, in transit และ snapshot โดยไม่กระทบ performance",
            },
            {
              title: "Instance Store",
              description:
                "Physical disk บน host server — <em>เร็วที่สุด</em> แต่<strong>ข้อมูลหาย</strong>เมื่อ stop หรือ terminate",
            },
            {
              title: "AMI",
              description:
                "Image ของ EC2 (OS + software + config) เป็น <strong>region-specific</strong> ต้อง copy ก่อนใช้ใน region อื่น",
            },
            {
              title: "EC2 Image Builder",
              description:
                "Service ฟรีที่ automate การสร้าง AMI ตาม schedule พร้อม validation และ testing",
            },
            {
              title: "EFS — File System",
              description:
                "NFS shared file system สำหรับ <strong>Linux เท่านั้น</strong> ใช้ได้หลายร้อย instance ข้าม AZ",
            },
            {
              title: "FSx for Windows",
              description:
                "Managed Windows file system รองรับ <strong>SMB + Active Directory</strong> สำหรับ Windows app",
            },
            {
              title: "FSx for Lustre",
              description:
                "Linux cluster file system สำหรับ <strong>HPC / ML / Analytics</strong> ให้ throughput ระดับ 100s GB/s",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>Boot Volume:</strong> ต้องเป็น SSD (gp2/gp3/io1/io2) เท่านั้น — HDD (st1/sc1) ใช้เป็น root ไม่ได้",
            "<strong>ย้าย EBS ข้าม AZ:</strong> ใช้ Snapshot → restore ใน AZ ใหม่ (EBS ผูกกับ AZ เดียวเท่านั้น)",
            "<strong>Snapshot Archive:</strong> ลดราคาได้ ~75% เหมาะกับ snapshot ที่ไม่ค่อยใช้",
            "<strong>Recycle Bin:</strong> ป้องกันการลบ snapshot โดยไม่ตั้งใจ — restore ได้ภายใน retention period",
            "<strong>FSR (Fast Snapshot Restore):</strong> ทำให้ restore จาก snapshot เร็วขึ้นทันที (no warm-up)",
            "<strong>EFS Storage Classes:</strong> Standard, IA และ One Zone — แพงกว่า EBS gp2 ประมาณ 3 เท่า",
            "<strong>OS Compatibility:</strong> EFS = Linux, FSx for Windows = Windows, FSx for Lustre = Linux HPC",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Tips สำหรับการสอบ",
          text: "ข้อสอบมักทดสอบ 6 จุดหลัก: <strong>(1)</strong> Boot Volume ต้องเป็น SSD ไม่ใช่ HDD <strong>(2)</strong> Multi-Attach รองรับเฉพาะ io1/io2 <strong>(3)</strong> ย้าย EBS ข้าม AZ ใช้ Snapshot <strong>(4)</strong> Instance Store ephemeral — stop = ข้อมูลหาย <strong>(5)</strong> EFS = Linux, FSx for Windows = Windows, FSx for Lustre = HPC/ML <strong>(6)</strong> AMI เป็น region-specific ต้อง copy ข้าม region",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "ec2s-q1",
      question:
        "Which of the following CANNOT be used as a boot volume for an EC2 instance?",
      options: [
        "General Purpose SSD (gp3)",
        "Provisioned IOPS SSD (io2)",
        "Throughput Optimized HDD (st1)",
        "General Purpose SSD (gp2)",
      ],
      correct: 2,
      explanation:
        "Boot volumes must be SSD-based: gp2, gp3, io1, io2. HDD types (st1 = throughput optimized, sc1 = cold) cannot be used as boot volumes.",
    },
    {
      id: "ec2s-q2",
      question:
        "Which AWS storage service is BEST for shared file storage that can be mounted by multiple Linux EC2 instances simultaneously?",
      options: ["EBS", "Instance Store", "EFS (Elastic File System)", "S3"],
      correct: 2,
      explanation:
        "Amazon EFS provides a fully managed, shared NFS file system that can be mounted by thousands of Linux EC2 instances simultaneously across AZs. EBS volumes are typically attached to a single instance (Multi-Attach is limited).",
    },
    {
      id: "ec2s-q3",
      question:
        "What happens to data on an EC2 Instance Store when the instance is stopped or terminated?",
      options: [
        "Data is preserved automatically.",
        "Data is moved to S3.",
        "Data is lost — Instance Store is ephemeral.",
        "Data is moved to an EBS snapshot.",
      ],
      correct: 2,
      explanation:
        "Instance Store is physically attached to the host and provides very high I/O performance — but it is ephemeral. Stopping or terminating the instance loses the data; only persists across reboots.",
    },
    {
      id: "ec2s-q4",
      question:
        "Which EBS volume type is the latest-generation, lowest-cost SSD that decouples performance from volume size?",
      options: ["gp2", "gp3", "io1", "st1"],
      correct: 1,
      explanation:
        "gp3 (General Purpose SSD v3) provides a baseline 3,000 IOPS and 125 MB/s independent of volume size, with the ability to provision more for additional cost. It typically costs ~20% less than gp2 for the same performance.",
    },
    {
      id: "ec2s-q5",
      question:
        "Which AWS service is BEST suited for running a Windows-based file share with Active Directory integration in the cloud?",
      options: [
        "Amazon EFS",
        "Amazon FSx for Windows File Server",
        "Amazon S3",
        "EBS Multi-Attach",
      ],
      correct: 1,
      explanation:
        "Amazon FSx for Windows File Server provides a fully managed Windows-native file system with SMB protocol, AD integration, NTFS permissions, and Windows ACLs — perfect for Windows workloads.",
    },
    {
      id: "ec2s-q6",
      question:
        "Which FSx variant is built for high-performance computing (HPC) and machine learning workloads?",
      options: [
        "FSx for Windows File Server",
        "FSx for Lustre",
        "FSx for ONTAP",
        "FSx for OpenZFS",
      ],
      correct: 1,
      explanation:
        "Amazon FSx for Lustre is designed for HPC, ML, and media workloads — providing sub-millisecond latency and millions of IOPS, with optional integration with S3.",
    },
    {
      id: "ec2s-q7",
      question:
        "What is an EBS Snapshot used for?",
      options: [
        "Encrypting an EBS volume.",
        "Creating a point-in-time backup of an EBS volume, stored in S3.",
        "Increasing IOPS performance.",
        "Mounting the volume on multiple instances.",
      ],
      correct: 1,
      explanation:
        "An EBS Snapshot is an incremental, point-in-time backup of an EBS volume stored in S3 (managed by AWS). Snapshots can be used to create new volumes (potentially in different AZs/Regions), enabling backup and DR.",
    },
    {
      id: "ec2s-q8",
      question:
        "An EC2 instance in AZ us-east-1a needs to use an EBS volume that was created in us-east-1b. What must you do?",
      options: [
        "Attach the volume directly across AZs — EBS is regional.",
        "Take a snapshot of the volume, then create a new volume from the snapshot in us-east-1a.",
        "Detach and re-attach the volume.",
        "EBS volumes can be attached to instances in any AZ.",
      ],
      correct: 1,
      explanation:
        "EBS volumes are tied to a single AZ. To move a volume to another AZ, snapshot it (snapshots are regional, stored in S3), then create a new volume from the snapshot in the target AZ.",
    },
    {
      id: "ec2s-q9",
      question:
        "Which of the following is true about EBS volumes by default?",
      options: [
        "They are deleted when the instance is stopped.",
        "They persist independently of the EC2 instance — they continue to exist if the instance is terminated (unless DeleteOnTermination=true for the root volume).",
        "They are automatically replicated to S3.",
        "They share storage with all instances in the VPC.",
      ],
      correct: 1,
      explanation:
        "EBS volumes persist independently of the instance lifecycle. The root volume defaults to DeleteOnTermination=true (deleted with the instance). Additional attached volumes default to false (preserved).",
    },
    {
      id: "ec2s-q10",
      question:
        "What is an AMI (Amazon Machine Image)?",
      options: [
        "A backup of an EBS snapshot only.",
        "A template containing the OS, applications, and configuration used to launch EC2 instances.",
        "A container image registry.",
        "A networking ACL.",
      ],
      correct: 1,
      explanation:
        "An AMI is a launch template for EC2 — it includes the root volume (OS + apps), launch permissions, and block-device mapping. It can be public, private, AWS-provided, or custom.",
    },
    {
      id: "ec2s-q11",
      question:
        "Which feature of AWS allows EC2 instances to access shared storage that scales automatically?",
      options: [
        "EBS",
        "Instance Store",
        "Amazon EFS (Elastic File System)",
        "S3 Glacier",
      ],
      correct: 2,
      explanation:
        "Amazon EFS scales automatically and elastically — pay only for the storage used. Multiple instances can mount it concurrently, making it ideal for shared workloads.",
    },
    {
      id: "ec2s-q12",
      question:
        "Which EBS volume type is designed for high-throughput, sequential workloads like big data and data warehouses?",
      options: ["gp3", "io2", "st1 (Throughput Optimized HDD)", "sc1 (Cold HDD)"],
      correct: 2,
      explanation:
        "st1 is throughput-optimized HDD — high MB/s for streaming workloads like big data, log processing, and data warehouses. Cannot be used as boot volume.",
    },
    {
      id: "ec2s-q13",
      question:
        "Which storage class is the LOWEST-COST EBS HDD option, intended for infrequently accessed data?",
      options: ["gp3", "io2", "st1", "sc1 (Cold HDD)"],
      correct: 3,
      explanation:
        "sc1 (Cold HDD) is the lowest-cost EBS option — for infrequently accessed, large, sequential workloads. Cannot be used as boot volume.",
    },
    {
      id: "ec2s-q14",
      question:
        "Which EBS volume type is designed for the highest performance — millions of IOPS — for I/O-intensive databases?",
      options: ["gp2", "gp3", "io2 Block Express", "st1"],
      correct: 2,
      explanation:
        "io2 Block Express delivers up to 256,000 IOPS and 4,000 MB/s — designed for the most demanding I/O-intensive applications like SAP HANA, large databases, and other latency-sensitive workloads.",
    },
    {
      id: "ec2s-q15",
      question:
        "What is the main difference between EFS and EBS?",
      options: [
        "EFS is block storage, EBS is object storage.",
        "EFS is a shared, multi-AZ NFS file system; EBS is block storage attached to a single AZ instance.",
        "EFS only works on Windows, EBS only on Linux.",
        "There is no difference.",
      ],
      correct: 1,
      explanation:
        "EFS = elastic, shared, NFS file system across multiple AZs and instances (Linux). EBS = block storage attached to a single instance, in a single AZ.",
    },
    {
      id: "ec2s-q16",
      question:
        "Which feature provides automated, scheduled creation and lifecycle management of EBS snapshots?",
      options: [
        "Amazon Data Lifecycle Manager (DLM)",
        "AWS Backup only",
        "EBS Snapshot Manual",
        "S3 Lifecycle policy",
      ],
      correct: 0,
      explanation:
        "Amazon Data Lifecycle Manager automates creation, retention, and deletion of EBS snapshots and AMIs. AWS Backup is a broader managed backup service that can also manage EBS snapshots.",
    },
    {
      id: "ec2s-q17",
      question:
        "Which of the following is the BEST description of EBS Multi-Attach?",
      options: [
        "Allows attaching one volume to instances across multiple regions.",
        "Allows a single io1/io2 volume to be attached to up to 16 EC2 instances in the same AZ.",
        "Automatically replicates data across all AZs.",
        "Lets you mount EBS as a file system from S3.",
      ],
      correct: 1,
      explanation:
        "EBS Multi-Attach lets a single io1/io2 volume be attached to multiple EC2 instances (up to 16) within the same AZ. Useful for clustered Linux applications. Requires a cluster-aware file system.",
    },
    {
      id: "ec2s-q18",
      question:
        "Which storage option is cheapest for archive backups that are rarely accessed?",
      options: ["EBS gp3", "EFS Standard", "S3 Glacier Deep Archive", "Instance Store"],
      correct: 2,
      explanation:
        "S3 Glacier Deep Archive is the cheapest AWS storage class — designed for long-term archive data accessed perhaps once or twice a year, with retrieval in 12-48 hours.",
    },
    {
      id: "ec2s-q19",
      question:
        "Which EC2 storage option provides the LOWEST latency and HIGHEST IOPS, but is ephemeral and tied to the host?",
      options: ["EBS gp3", "EBS io2", "Instance Store", "EFS"],
      correct: 2,
      explanation:
        "Instance Store is local NVMe SSD physically attached to the host — extreme performance but data is lost when the instance is stopped or terminated.",
    },
    {
      id: "ec2s-q20",
      question:
        "Which FSx variant is fully managed NetApp ONTAP storage?",
      options: [
        "FSx for Windows File Server",
        "FSx for Lustre",
        "FSx for NetApp ONTAP",
        "FSx for OpenZFS",
      ],
      correct: 2,
      explanation:
        "Amazon FSx for NetApp ONTAP is a fully managed shared file storage built on NetApp's ONTAP — supports NFS, SMB, iSCSI, with snapshots, clones, replication, and tiering to capacity-optimized storage.",
    },
    {
      id: "ec2s-q21",
      question:
        "What is the default behavior for the root EBS volume when you terminate an EC2 instance?",
      options: [
        "It is preserved.",
        "It is deleted (DeleteOnTermination = true by default).",
        "It is converted to a snapshot.",
        "It is moved to S3.",
      ],
      correct: 1,
      explanation:
        "By default, root EBS volumes are deleted when the instance is terminated. You can set DeleteOnTermination=false to preserve the volume.",
    },
    {
      id: "ec2s-q22",
      question:
        "An EC2 instance has been stopped. What happens to its EBS volumes?",
      options: [
        "All volumes are deleted.",
        "Volumes remain attached and persist; you continue to pay for storage.",
        "Volumes are converted to S3 objects.",
        "Volumes are detached automatically.",
      ],
      correct: 1,
      explanation:
        "Stopping an EC2 instance does not affect its EBS volumes. They remain attached and you continue to pay for the storage (but not for the instance compute time).",
    },
    {
      id: "ec2s-q23",
      question:
        "Which feature allows you to copy an EBS snapshot to another AWS region for disaster recovery?",
      options: [
        "EBS Cross-Region Replication is automatic.",
        "Snapshot Copy — manually copy a snapshot to another region.",
        "EBS Multi-Region Mode",
        "S3 Cross-Region Replication",
      ],
      correct: 1,
      explanation:
        "EBS snapshots are regional. To use them in another region for DR, you copy the snapshot manually to the target region (CopySnapshot API). The copy can also be encrypted with a different KMS key.",
    },
    {
      id: "ec2s-q24",
      question:
        "Which is true about EBS encryption?",
      options: [
        "EBS volumes cannot be encrypted.",
        "EBS encryption uses AWS KMS — encryption at rest, in transit, and snapshots are also encrypted automatically.",
        "Encryption must be enabled per region per request.",
        "Encryption only applies to gp3 volumes.",
      ],
      correct: 1,
      explanation:
        "EBS encryption (using AWS KMS) encrypts data at rest, in transit between the instance and the volume, and all created snapshots — at no additional cost. You can enable encryption by default in account settings.",
    },
    {
      id: "ec2s-q25",
      question:
        "A company must back up an EFS file system to another region for DR. Which AWS service is BEST?",
      options: [
        "Amazon S3 Lifecycle policies",
        "AWS Backup with cross-region copy",
        "EBS Snapshots",
        "AWS Glacier Vault Lock",
      ],
      correct: 1,
      explanation:
        "AWS Backup provides a centralized way to back up EFS, EBS, RDS, DynamoDB, and other resources, with policy-based retention and cross-region copy support.",
    },
  ],
};
