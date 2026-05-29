import { TopicData } from "@/types/topic";

export const ec2: TopicData = {
  slug: "ec2",
  title: "EC2",
  subtitle: "Elastic Compute Cloud",
  accent: "blue",
  emoji: "\u{1F5A5}\uFE0F",
  category: "Compute",
  description:
    'EC2 คือบริการ <strong class="text-white font-medium">Virtual Machine บน Cloud</strong> ของ AWS — เป็นบริการแบบ <em>IaaS (Infrastructure as a Service)</em> ให้เราเช่า server ตามต้องการ เลือก OS, CPU, RAM, Storage, Network ได้เอง และจ่ายตามที่ใช้จริง (pay as you go)',
  keyPoints: [
    "เช่า Virtual Machine บน Cloud — เลือก OS, CPU, RAM, Storage, Network ได้เอง",
    "Security Group ควบคุม inbound/outbound traffic — เป็น firewall ระดับ instance",
    "Purchase Options หลากหลาย: On-Demand, Reserved, Spot, Savings Plans, Dedicated",
    "User Data รัน script อัตโนมัติครั้งแรกที่ instance เริ่มต้น (bootstrap)",
  ],
  sections: [
    {
      id: "ec2-basics",
      title: "EC2 Basics — รู้จัก EC2",
      content: [
        {
          type: "paragraph",
          text: '<strong class="text-white">EC2 (Elastic Compute Cloud)</strong> คือบริการ Compute ที่ได้รับความนิยมที่สุดของ AWS — เป็น <strong>Infrastructure as a Service (IaaS)</strong> ให้เราเช่า Virtual Machine บน Cloud ตามต้องการ',
        },
        {
          type: "paragraph",
          text: 'EC2 ไม่ได้มีแค่ VM อย่างเดียว — แต่ครอบคลุม capability หลายอย่าง:',
        },
        {
          type: "grid",
          items: [
            {
              title: "Renting Virtual Machines (EC2)",
              description:
                "เช่า server บน Cloud — เลือก OS (Linux, Windows, macOS), spec ตามต้องการ และจ่ายตามที่ใช้จริง",
            },
            {
              title: "Storing Data on Virtual Drives (EBS)",
              description:
                "เก็บข้อมูลบน virtual disk ที่ผูกกับ EC2 — Elastic Block Store ทำหน้าที่เหมือน hard drive ของ VM",
            },
            {
              title: "Distributing Load (ELB)",
              description:
                "Elastic Load Balancer กระจาย traffic ไปยัง instance หลายตัว เพื่อ high availability และ fault tolerance",
            },
            {
              title: "Scaling Services (ASG)",
              description:
                "Auto Scaling Group เพิ่ม/ลด instance อัตโนมัติตาม load — รองรับการเติบโตและประหยัดค่าใช้จ่าย",
            },
          ],
        },
        {
          type: "paragraph",
          text: '<strong class="text-white">Sizing & Configuration Options</strong> — เมื่อสร้าง EC2 instance เราเลือกได้:',
        },
        {
          type: "list",
          items: [
            "<strong>Operating System (OS)</strong>: Linux, Windows, macOS",
            "<strong>CPU</strong>: จำนวน core และ compute power",
            "<strong>RAM</strong>: ขนาด memory",
            "<strong>Storage</strong>: เก็บที่ไหน — EBS & EFS (Network-attached) หรือ EC2 Instance Store (Hardware)",
            "<strong>Network Card</strong>: ความเร็ว network, public IP address",
            "<strong>Firewall Rules</strong>: Security Group สำหรับควบคุม traffic",
            "<strong>Bootstrap Script</strong>: EC2 User Data — รันคำสั่งครั้งแรกตอน launch",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "ทำไม EC2 ถึงสำคัญ",
          text: "EC2 เป็น building block หลักของ AWS — บริการอื่นๆ มากมายสร้างอยู่บน EC2 (เช่น Lambda, ECS, Beanstalk) การเข้าใจ EC2 จึงเป็นพื้นฐานสำคัญของ AWS Cloud Practitioner",
        },
      ],
    },
    {
      id: "user-data",
      title: "EC2 User Data",
      content: [
        {
          type: "paragraph",
          text: '<strong class="text-white">User Data</strong> คือ script ที่รันอัตโนมัติ <em>ครั้งแรกที่ instance เริ่มต้น (bootstrap)</em> ใช้ตั้งค่า server โดยอัตโนมัติโดยไม่ต้องล็อกอินเข้าไปทำเอง',
        },
        {
          type: "list",
          items: [
            "รันในฐานะ root user — มีสิทธิ์เต็ม",
            "รัน <strong>ครั้งเดียว</strong> เมื่อ instance เริ่มต้นครั้งแรกเท่านั้น",
            "รองรับ <strong>bash script</strong> (Linux) และ <strong>PowerShell</strong> (Windows)",
            "ใช้งานที่ไหน: EC2 Launch → Advanced Details → User Data",
          ],
        },
        {
          type: "code",
          language: "bash",
          caption: "ตัวอย่าง User Data Script (Linux)",
          code: `#!/bin/bash
# update ระบบ
yum update -y
# ติดตั้ง web server
yum install -y httpd
# เริ่มต้น service
systemctl start httpd
systemctl enable httpd
# สร้างหน้าเว็บง่ายๆ
echo "<h1>Hello from EC2</h1>" > /var/www/html/index.html`,
        },
        {
          type: "callout",
          variant: "tip",
          title: "ข้อดีของ User Data",
          text: "เมื่อ launch หลาย instance พร้อมกัน (Auto Scaling) ทุก instance จะถูกตั้งค่าเหมือนกันโดยอัตโนมัติ — ไม่ต้องทำเอง",
        },
      ],
    },
    {
      id: "instance-types",
      title: "Instance Types",
      content: [
        {
          type: "paragraph",
          text: 'AWS มี instance หลายประเภทให้เลือก แต่ละประเภทออกแบบมาสำหรับ workload ที่ต่างกัน — ชื่อ instance บอก <strong>family, generation, และ size</strong>',
        },
        {
          type: "callout",
          variant: "info",
          title: "Naming Convention — m5.xlarge แปลว่าอะไร?",
          text: "m5.xlarge = family 'm' (General Purpose) + generation '5' + size 'xlarge' | ตัวอย่างอื่น: c6g.large = family 'c' (Compute) + generation '6' + 'g' (Graviton/ARM) + size 'large' — เลข generation ยิ่งสูง = ใหม่กว่า + เร็วกว่า + ถูกกว่า (มักจะ)",
        },
        {
          type: "grid",
          items: [
            {
              title: "General Purpose (t, m)",
              description:
                "สมดุลระหว่าง CPU, RAM, Network — เหมาะสำหรับงานทั่วไป เช่น Web server, code repository, small databases",
            },
            {
              title: "Compute Optimized (c)",
              description:
                "CPU สูง — เหมาะกับงานที่ต้องการประมวลผลมาก เช่น Batch processing, media transcoding, High-performance web servers, Gaming server, ML inference",
            },
            {
              title: "Memory Optimized (r, x, z)",
              description:
                "RAM สูงมาก — เหมาะกับ workload ที่ต้องการ in-memory processing เช่น In-memory database (Redis), Real-time big data analytics, High-performance databases",
            },
            {
              title: "Storage Optimized (i, d, h)",
              description:
                "I/O สูง — เหมาะกับงานที่อ่าน/เขียน storage เยอะมาก เช่น OLTP databases, Data warehousing, Distributed file systems",
            },
            {
              title: "Accelerated Computing (p, g, inf, trn)",
              description:
                "มี GPU / hardware accelerator — เหมาะกับ AI/ML และ graphic-intensive เช่น ML training, Deep learning, Graphics rendering, Video encoding",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "เคล็ดลับการสอบ",
          text: "จำตัวอักษรหลักของแต่ละ family แล้วแค่อ่านชื่อ instance ก็เดาได้ว่ามันออกแบบมาเพื่ออะไร:<br><strong>t / m</strong> = General Purpose<br><strong>c</strong> = Compute<br><strong>r / x / z</strong> = RAM (Memory)<br><strong>i / d / h</strong> = Storage<br><strong>p / g</strong> = GPU",
        },
      ],
    },
    {
      id: "security-groups",
      title: "Security Groups — Firewall ของ EC2",
      content: [
        {
          type: "paragraph",
          text: '<strong class="text-white">Security Groups</strong> คือพื้นฐานของ network security บน AWS — เป็น <em>virtual firewall</em> ที่ควบคุม traffic เข้า/ออก EC2 instance',
        },
        {
          type: "list",
          items: [
            "ควบคุม <strong>Inbound traffic</strong> (ขาเข้า) — จาก internet มาที่ instance",
            "ควบคุม <strong>Outbound traffic</strong> (ขาออก) — จาก instance ออกไป internet",
            "Security Group มีแต่ <strong>Allow rules</strong> เท่านั้น (ไม่มี Deny rules)",
            "Reference ได้ทั้ง <strong>IP address (CIDR)</strong> หรือ <strong>Security Group อื่น</strong>",
            "1 Security Group สามารถ attach กับหลาย instance ได้",
            "Locked ที่ <strong>Region + VPC</strong> — ข้าม region/VPC ไม่ได้",
            "ลอยอยู่ <strong>นอก EC2</strong> — ถ้า traffic ถูก block จะไม่ถึง instance เลย",
            "Default: <strong>Inbound block ทั้งหมด</strong>, <strong>Outbound allow ทั้งหมด</strong>",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Allow rules เท่านั้น",
              description:
                "Security Group ไม่สามารถสร้าง deny rules ได้ — ใครไม่ถูก allow จะถูก block อัตโนมัติ",
            },
            {
              title: "Reference SG อื่นได้",
              description:
                "แทนที่จะใส่ IP สามารถบอกว่า 'อนุญาตจาก SG-X' — ทำให้ instance ที่อยู่ใน SG-X เข้าได้ทันที โดยไม่ต้องสนใจ IP",
            },
            {
              title: "ผูกกับ Region + VPC",
              description:
                "สร้าง SG ใน VPC A ใช้กับ instance ใน VPC B ไม่ได้ — ต้องสร้างใหม่",
            },
            {
              title: "Multiple instances",
              description:
                "1 SG สามารถ attach หลาย instance ได้ และ 1 instance สามารถมีหลาย SG ได้",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Common Issues — แก้ปัญหาเชื่อมต่อไม่ได้",
          text: "<strong>Connection Timeout</strong> = ปัญหา Security Group (traffic ไม่ถึง instance เลย) — ต้องแก้ที่ SG | <strong>Connection Refused</strong> = traffic ถึงแล้ว แต่ application บน instance ไม่ตอบ — ปัญหาที่ app (เช่น service ไม่รัน, port ผิด)",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Best Practice",
          text: "แนะนำให้แยก Security Group สำหรับ SSH (port 22) ออกจาก SG อื่น — เพื่อจัดการ access ง่าย และเปิด/ปิด SSH ได้โดยไม่กระทบ traffic อื่น",
        },
      ],
    },
    {
      id: "classic-ports",
      title: "Classic Ports — Port ที่ต้องจำ",
      content: [
        {
          type: "paragraph",
          text: 'Port number ที่ใช้บ่อยและออกข้อสอบบ่อย — ควรจำให้ขึ้นใจ',
        },
        {
          type: "grid",
          items: [
            {
              title: "Port 22 — SSH",
              description:
                "Secure Shell — ใช้ login เข้า Linux instance ผ่าน command line (ปลอดภัย เข้ารหัส)",
            },
            {
              title: "Port 22 — SFTP",
              description:
                "SSH File Transfer Protocol — โอนไฟล์อย่างปลอดภัยผ่าน SSH (ใช้ port เดียวกับ SSH)",
            },
            {
              title: "Port 21 — FTP",
              description:
                "File Transfer Protocol — โอนไฟล์แบบเก่า ไม่เข้ารหัส (ปัจจุบันแทนด้วย SFTP)",
            },
            {
              title: "Port 80 — HTTP",
              description:
                "HyperText Transfer Protocol — เว็บไซต์แบบไม่เข้ารหัส (insecure web)",
            },
            {
              title: "Port 443 — HTTPS",
              description:
                "HTTP Secure — เว็บไซต์เข้ารหัสด้วย TLS/SSL (secure web) — มาตรฐานปัจจุบัน",
            },
            {
              title: "Port 3389 — RDP",
              description:
                "Remote Desktop Protocol — ใช้ login เข้า Windows instance ผ่าน GUI",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "วิธีจำง่ายๆ",
          text: "<strong>SSH / SFTP = 22</strong> (เลขเดียวกัน)<br><strong>FTP = 21</strong> (น้อยกว่า SSH 1)<br><strong>HTTP = 80, HTTPS = 443</strong> (เพิ่ม S = เลขเปลี่ยน)<br><strong>RDP = 3389</strong> (Windows = 4 หลัก)",
        },
      ],
    },
    {
      id: "purchase-options",
      title: "Purchase Options",
      content: [
        {
          type: "grid",
          items: [
            {
              title: "On-Demand",
              description:
                "จ่ายต่อ second (Linux) หรือต่อ hour ไม่ต้อง commit ล่วงหน้า ยืดหยุ่นสูงสุด เหมาะกับ workload ระยะสั้น, dev/test environment",
            },
            {
              title: "Reserved Instances (RI) — ลดสูงสุด 72%",
              description:
                "จอง 1 หรือ 3 ปี จ่ายแบบ All Upfront / Partial / No Upfront เหมาะกับ workload คงที่ เช่น database",
            },
            {
              title: "Convertible Reserved Instances",
              description:
                "เปลี่ยน instance type, family, OS, tenancy ได้ระหว่าง term — ส่วนลด ~66% (น้อยกว่า Standard RI แต่ยืดหยุ่นกว่า)",
            },
            {
              title: "Savings Plans — ลดสูงสุด 72%",
              description:
                "commit การใช้จ่ายขั้นต่ำ ($/hour) แทนการ commit instance type — Compute Savings Plan ใช้กับ EC2, Lambda, Fargate — EC2 Instance Savings Plan ผูกกับ instance family ใน region",
            },
            {
              title: "Spot Instances — ลดสูงสุด 90%",
              description:
                "ใช้ capacity ที่เหลือของ AWS ราคาถูกมาก แต่ AWS สามารถ interrupt ได้ทุกเมื่อ (แจ้งล่วงหน้า 2 นาที) เหมาะกับ batch job, data analysis, ML training, image processing",
            },
            {
              title: "Dedicated Host",
              description:
                "เช่า physical server ทั้งเครื่อง มองเห็น socket/core/host ID ควบคุม placement ได้ รองรับ BYOL (Bring Your Own License) เหมาะกับ license ผูก core/socket, compliance",
            },
            {
              title: "Dedicated Instance",
              description:
                "รันบน hardware ที่ไม่แชร์กับ account อื่น แต่ไม่มองเห็น physical server ไม่ควบคุม placement ไม่รองรับ BYOL เหมาะกับ compliance ที่ต้องการ hardware isolation",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Spot Instance — ข้อควรระวัง",
          text: "ไม่เหมาะกับงานสำคัญที่ต้องรันต่อเนื่อง เช่น database, critical web server เพราะ AWS สามารถ interrupt ได้ทุกเมื่อโดยแจ้งล่วงหน้าเพียง 2 นาที",
        },
        {
          type: "callout",
          variant: "info",
          title: "Dedicated Host vs Dedicated Instance — สรุปง่ายๆ",
          text: "Dedicated Host = เหมือนเช่าตึกทั้งหลัง คุณรู้ว่าอยู่ที่ไหน จัดห้องเองได้ นำ license เดิมมาใช้ได้ (BYOL) | Dedicated Instance = เหมือนเช่าห้องในตึกส่วนตัว ไม่มีคนแปลกหน้า แต่คุณไม่รู้ว่าตึกอยู่ที่ไหน และไม่รองรับ BYOL",
        },
      ],
    },
    {
      id: "capacity-reservations",
      title: "Capacity Reservations",
      content: [
        {
          type: "paragraph",
          text: '<strong class="text-white">Capacity Reservation</strong> คือการจอง capacity (ทรัพยากร) ไว้ใน AZ ที่ระบุ เพื่อให้มั่นใจว่าเมื่อต้องการ launch instance จะมี capacity พร้อมเสมอ — <strong>แต่ไม่ได้ลดราคา</strong>',
        },
        {
          type: "list",
          items: [
            "จอง instance type + AZ + OS ที่ต้องการไว้ล่วงหน้า",
            "<strong>ไม่มีข้อผูกมัดด้านเวลา</strong> — สร้าง/ยกเลิกเมื่อไรก็ได้ (ต่างจาก Reserved Instance)",
            "จ่ายในราคา <strong>On-Demand</strong> ตลอดเวลา ไม่ว่าจะรัน instance จริงหรือเปล่า",
            "ผูกกับ <strong>AZ เดียว</strong> เท่านั้น (ไม่ใช่ Regional)",
            "รวมกับ <strong>Savings Plans หรือ Regional Reserved Instance</strong> ได้เพื่อลดราคา",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "แนวคิดหลัก",
          text: "ปัญหาของ On-Demand คือในช่วง peak demand (เช่น Black Friday) AWS อาจไม่มี capacity เหลือใน AZ ที่คุณต้องการ — Capacity Reservation แก้ปัญหานี้ด้วยการ lock slot ไว้ล่วงหน้า",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Best Practice",
          text: "ใช้ Capacity Reservation เพื่อรับประกันว่ามี capacity + รวมกับ Regional Reserved Instance หรือ Savings Plans เพื่อลดราคา → ได้ทั้ง capacity guarantee และ cost saving พร้อมกัน",
        },
      ],
    },
    {
      id: "shared-responsibility",
      title: "Shared Responsibility Model for EC2",
      content: [
        {
          type: "paragraph",
          text: 'AWS และ User <strong class="text-white">แบ่งกันรับผิดชอบ</strong> ด้าน security ของ EC2 — AWS รับผิดชอบ infrastructure ด้านล่าง (Security <em>of</em> the Cloud) ส่วน User รับผิดชอบทุกอย่างที่อยู่ใน instance (Security <em>in</em> the Cloud)',
        },
        {
          type: "grid",
          items: [
            {
              title: "AWS: Physical Security",
              description:
                "ความปลอดภัยของ data center, อาคาร, server room",
            },
            {
              title: "AWS: Hardware & Infrastructure",
              description:
                "Physical server, network hardware, storage hardware",
            },
            {
              title: "AWS: Hypervisor & Isolation",
              description:
                "ซอฟต์แวร์ที่แยก VM ออกจากกัน — AWS patch และ maintain ให้ พร้อมรับประกัน isolation ระหว่าง VM",
            },
            {
              title: "AWS: Global Network Infrastructure",
              description: "Fiber, backbone network, edge locations",
            },
            {
              title: "User: Guest OS (patching & updates)",
              description:
                "อัปเดต OS บน instance ต้องทำเอง — AWS ไม่แตะ OS ใน instance",
            },
            {
              title: "User: Security Group Rules",
              description:
                "ตั้งค่า inbound/outbound rules ให้ถูกต้อง — default ปิดทุกอย่าง",
            },
            {
              title: "User: Software บน Instance",
              description:
                "ทุก software ที่ install: web server, database, library — รับผิดชอบเอง",
            },
            {
              title: "User: IAM Roles & Permissions",
              description:
                "กำหนดว่า instance เข้าถึง AWS service อะไรได้บ้าง",
            },
            {
              title: "User: Data & Encryption",
              description:
                "ข้อมูลบน EBS, S3 ที่ instance ใช้ — encryption ต้องเปิดเอง",
            },
            {
              title: "User: Network Configuration",
              description:
                "VPC, Subnet, Route Table, NACL — ออกแบบและตั้งค่าเอง",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "จุดที่คนมักเข้าใจผิด",
          text: "AWS patch hypervisor ให้ แต่ <strong>OS ใน instance คุณต้อง patch เอง</strong> — ถ้า OS มีช่องโหว่และคุณไม่อัปเดต AWS ไม่รับผิดชอบ<br><strong>Security Group ที่ตั้งผิด</strong>คือความผิดของคุณ ไม่ใช่ AWS<br>ถ้า <strong>IAM Role</strong> ให้ permission กว้างเกินไป หรือ <strong>Access Key หลุด</strong> ความรับผิดชอบอยู่ที่คุณ",
        },
      ],
    },
    {
      id: "summary",
      title: "Summary — สรุปประเด็นสำคัญ",
      content: [
        {
          type: "paragraph",
          text: '<strong class="text-white">EC2</strong> คือ <em>Infrastructure as a Service</em> สำหรับเช่า Virtual Machine บน AWS — เลือก OS, CPU, RAM, Storage, Network ได้ตามใจ และจ่ายเฉพาะที่ใช้ ต่อไปนี้คือประเด็นสำคัญทั้งหมดที่ต้องจำสำหรับการสอบ Cloud Practitioner',
        },
        {
          type: "grid",
          items: [
            {
              title: "General Purpose (t / m)",
              description:
                "Workload ทั่วไป สมดุลระหว่าง CPU, RAM และ Network เหมาะกับ web server ขนาดเล็ก-กลาง",
            },
            {
              title: "Compute Optimized (c)",
              description:
                "CPU แรง เหมาะกับ batch processing, gaming server และ scientific modeling",
            },
            {
              title: "Memory Optimized (r / x / z)",
              description:
                "RAM สูง เหมาะกับ in-memory database เช่น Redis และ real-time analytics",
            },
            {
              title: "Storage Optimized (i / d / h)",
              description:
                "Disk I/O สูง เหมาะกับ NoSQL, data warehouse และ distributed file system",
            },
            {
              title: "Accelerated (p / g)",
              description:
                "มี GPU สำหรับ ML training, deep learning และ graphics rendering",
            },
            {
              title: "User Data",
              description:
                "Bootstrap script รันครั้งเดียวตอน first boot ใช้ install software และตั้งค่า server อัตโนมัติ",
            },
            {
              title: "Security Groups",
              description:
                "Firewall ระดับ instance รองรับเฉพาะ Allow rules และ default ปิดทุกอย่าง",
            },
            {
              title: "Capacity Reservation",
              description:
                "จอง capacity ไว้ใน AZ เพื่อรับประกันว่ามี slot — ไม่ลดราคา จ่าย On-Demand เสมอ",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>Classic Ports:</strong> 22 = SSH/SFTP, 21 = FTP, 80 = HTTP, 443 = HTTPS, 3389 = RDP",
            "<strong>Troubleshooting SG:</strong> Connection <em>Timeout</em> = ปัญหา Security Group ส่วน Connection <em>Refused</em> = ปัญหา application",
            "<strong>On-Demand:</strong> ยืดหยุ่นที่สุด ไม่มี commitment เหมาะกับ workload สั้นๆ ที่คาดเดาไม่ได้",
            "<strong>Reserved Instance:</strong> commit 1-3 ปี ลดสูงสุด 72% เหมาะกับ steady workload (Standard / Convertible)",
            "<strong>Savings Plans:</strong> commit $/hour แทน instance type — Compute SP ใช้กับ EC2, Lambda, Fargate ได้",
            "<strong>Spot Instance:</strong> ถูกที่สุด ลดสูงสุด 90% แต่ AWS interrupt ได้ใน 2 นาที เหมาะกับ batch / ML training",
            "<strong>Dedicated Host:</strong> เช่า physical server ทั้งเครื่อง รองรับ <em>BYOL</em> (license ผูก core/socket)",
            "<strong>Dedicated Instance:</strong> hardware ไม่แชร์กับ account อื่น แต่ไม่เห็น physical server และไม่รองรับ BYOL",
            "<strong>Shared Responsibility:</strong> AWS ดูแล hardware และ hypervisor ส่วน User ดูแล OS, Security Group, IAM, software และ data",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Tips สำหรับการสอบ",
          text: "ข้อสอบมักทดสอบ 4 จุดหลัก: <strong>(1)</strong> เลือก purchase option ให้เหมาะกับ scenario — Spot สำหรับ batch ที่ resume ได้ และ Reserved สำหรับ steady workload <strong>(2)</strong> แยก Dedicated Host ออกจาก Dedicated Instance — BYOL = Host เท่านั้น <strong>(3)</strong> แยกปัญหา SG (timeout) ออกจากปัญหา app (refused) <strong>(4)</strong> User Data รันแค่ครั้งเดียวตอน first boot ไม่ใช่ทุกครั้งที่ start",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "ec2-q1",
      question:
        "EC2 User Data script จะถูกรันเมื่อใด?",
      options: [
        "ทุกครั้งที่ instance ถูก start",
        "เฉพาะครั้งแรกที่ instance เริ่มต้น (first boot)",
        "เมื่อ instance ถูก stop แล้ว start ใหม่",
        "เมื่อมีการ SSH เข้า instance ครั้งแรก",
      ],
      correct: 1,
      explanation:
        "EC2 User Data จะรันเพียงครั้งเดียวเมื่อ instance เริ่มต้นครั้งแรก (first boot/bootstrap) เท่านั้น ไม่ได้รันซ้ำเมื่อ stop/start instance — ใช้สำหรับติดตั้ง software, อัปเดต OS, หรือตั้งค่าเริ่มต้นโดยอัตโนมัติ",
    },
    {
      id: "ec2-q2",
      question:
        "บริษัทต้องการรัน workload ที่ต้องการ RAM สูงมากสำหรับ in-memory database เช่น Redis ควรเลือก EC2 Instance Type family ใด?",
      options: [
        "General Purpose (t, m)",
        "Compute Optimized (c)",
        "Memory Optimized (r, x, z)",
        "Storage Optimized (i, d, h)",
      ],
      correct: 2,
      explanation:
        "Memory Optimized instances (r, x, z family) ถูกออกแบบมาสำหรับ workload ที่ต้องการ RAM สูงมาก เหมาะกับ in-memory database เช่น Redis, real-time big data analytics, high-performance databases",
    },
    {
      id: "ec2-q3",
      question:
        "ผู้ใช้พยายาม SSH เข้า EC2 instance แล้วเจอ error 'Connection timeout' ปัญหานี้น่าจะเกิดจากอะไร?",
      options: [
        "Application บน instance ไม่ตอบสนอง",
        "Security Group block traffic ขาเข้า port 22",
        "ใส่ password ผิด",
        "Instance ถูก terminate ไปแล้ว",
      ],
      correct: 1,
      explanation:
        "Connection Timeout บ่งชี้ว่า traffic ไม่สามารถถึง instance ได้เลย ซึ่งเป็นปัญหาที่ Security Group (เช่น ไม่ได้เปิด port 22 จาก IP ของผู้ใช้) — ส่วน Connection Refused คือ traffic ถึงแล้วแต่ application ไม่ตอบ ซึ่งเป็นปัญหาที่ app",
    },
    {
      id: "ec2-q4",
      question:
        "บริษัทมี batch processing job ที่รันได้ไม่ต่อเนื่อง สามารถ resume ได้ และต้องการลดค่าใช้จ่ายให้มากที่สุด ควรเลือก purchase option ใด?",
      options: [
        "On-Demand Instances",
        "Reserved Instances 3 ปี All Upfront",
        "Spot Instances",
        "Dedicated Host",
      ],
      correct: 2,
      explanation:
        "Spot Instances ให้ส่วนลดสูงสุด 90% จาก On-Demand เหมาะกับ batch job, ML training, data analysis ที่ interrupt ได้ — Reserved Instance ลดได้แค่ 72% และต้อง commit ระยะยาว ส่วน On-Demand แพงสุด เหมาะกับงานสั้นๆ ที่คาดเดาไม่ได้",
    },
    {
      id: "ec2-q5",
      question:
        "บริษัทต้องการนำ Windows Server license เดิมที่ผูกกับ physical core มาใช้บน AWS (BYOL) ควรเลือก purchase option ใด?",
      options: [
        "Dedicated Instance",
        "Dedicated Host",
        "Reserved Instance",
        "Spot Instance",
      ],
      correct: 1,
      explanation:
        "Dedicated Host รองรับ BYOL (Bring Your Own License) เพราะให้ visibility ของ physical server (host ID, socket, core) ที่จำเป็นสำหรับ license แบบผูก core/socket — ส่วน Dedicated Instance แค่รับประกันว่า hardware ไม่แชร์กับ account อื่น แต่ไม่เห็น physical server และไม่รองรับ BYOL",
    },
  ],
};
