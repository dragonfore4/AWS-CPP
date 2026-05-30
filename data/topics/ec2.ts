import { TopicData } from "@/types/topic";

export const ec2: TopicData = {
  slug: "ec2",
  title: "EC2",
  subtitle: "Elastic Compute Cloud",
  accent: "blue",
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
          text: "m5.xlarge = family 'm' (General Purpose) + generation '5' + size 'xlarge'<br>ตัวอย่างอื่น: c6g.large = family 'c' (Compute) + generation '6' + 'g' (Graviton/ARM) + size 'large' — เลข generation ยิ่งสูง = ใหม่กว่า + เร็วกว่า + ถูกกว่า (มักจะ)",
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
          text: "<strong>Connection Timeout</strong> = ปัญหา Security Group (traffic ไม่ถึง instance เลย) — ต้องแก้ที่ SG<br><strong>Connection Refused</strong> = traffic ถึงแล้ว แต่ application บน instance ไม่ตอบ — ปัญหาที่ app (เช่น service ไม่รัน, port ผิด)",
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
          text: "Dedicated Host = เหมือนเช่าตึกทั้งหลัง คุณรู้ว่าอยู่ที่ไหน จัดห้องเองได้ นำ license เดิมมาใช้ได้ (BYOL)<br>Dedicated Instance = เหมือนเช่าห้องในตึกส่วนตัว ไม่มีคนแปลกหน้า แต่คุณไม่รู้ว่าตึกอยู่ที่ไหน และไม่รองรับ BYOL",
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
      question: "When does the EC2 User Data script run?",
      options: [
        "Every time the instance boots.",
        "Only at the very first boot of the instance.",
        "When the instance is stopped.",
        "When the instance is terminated.",
      ],
      correct: 1,
      explanation:
        "By default, EC2 User Data runs only once — on the first boot of the instance — to bootstrap the OS (install software, apply updates, configure services). It runs as the root user.",
    },
    {
      id: "ec2-q2",
      question:
        "Which EC2 purchasing option offers the LARGEST discount in exchange for accepting that AWS may interrupt the instance with 2 minutes notice?",
      options: ["On-Demand", "Reserved Instances (RI)", "Spot Instances", "Dedicated Hosts"],
      correct: 2,
      explanation:
        "Spot Instances offer up to 90% off on-demand prices but AWS may reclaim them with a 2-minute warning. They are ideal for fault-tolerant, flexible workloads (batch jobs, big data, CI).",
    },
    {
      id: "ec2-q3",
      question:
        "Which EC2 purchasing option is BEST for predictable, steady-state workloads running 24/7 for 1 or 3 years?",
      options: [
        "On-Demand",
        "Spot Instances",
        "Reserved Instances or Savings Plans",
        "Dedicated Hosts",
      ],
      correct: 2,
      explanation:
        "Reserved Instances (or Savings Plans) provide up to ~72% discount for 1- or 3-year commitments — the right choice for steady-state workloads with predictable usage.",
    },
    {
      id: "ec2-q4",
      question:
        "Which Security Group rule type controls traffic LEAVING an EC2 instance?",
      options: ["Ingress (Inbound)", "Egress (Outbound)", "Stateless rules", "NACL rules"],
      correct: 1,
      explanation:
        "Security Groups have inbound (ingress) and outbound (egress) rules. Egress controls what the instance can connect TO. Security Groups are stateful — return traffic is automatically allowed.",
    },
    {
      id: "ec2-q5",
      question:
        "A Security Group does NOT have a rule allowing inbound traffic on port 22 (SSH). What happens when a user tries to SSH in?",
      options: [
        "The connection succeeds — Security Groups allow all by default.",
        "The connection is denied — Security Groups deny inbound by default.",
        "The connection is logged but allowed.",
        "The user is prompted for a password.",
      ],
      correct: 1,
      explanation:
        "Security Groups deny all inbound traffic by default. Without an explicit allow rule for port 22, the SSH connection will be blocked.",
    },
    {
      id: "ec2-q6",
      question: "Which of the following is true about EC2 Security Groups?",
      options: [
        "They are stateless and require explicit return rules.",
        "They are stateful — return traffic is automatically allowed.",
        "They only support deny rules.",
        "They operate at the subnet level.",
      ],
      correct: 1,
      explanation:
        "Security Groups are stateful: if outbound traffic is allowed, the response is automatically allowed inbound (and vice versa). NACLs, in contrast, are stateless.",
    },
    {
      id: "ec2-q7",
      question: "Which EC2 instance family is optimized for compute-intensive workloads?",
      options: ["T (Burstable)", "C (Compute Optimized)", "R (Memory Optimized)", "I (Storage Optimized)"],
      correct: 1,
      explanation:
        "C-family instances (e.g., c5, c6i) are compute optimized — high-performance processors for batch processing, media transcoding, scientific modeling, gaming servers.",
    },
    {
      id: "ec2-q8",
      question:
        "Which EC2 instance family is BEST for in-memory databases or real-time big data analytics?",
      options: ["T", "C", "R (Memory Optimized)", "M (General Purpose)"],
      correct: 2,
      explanation:
        "R-family (and X-family) are memory optimized for memory-intensive workloads like in-memory caches, real-time analytics, SAP HANA, and large database hosts.",
    },
    {
      id: "ec2-q9",
      question:
        "What is the difference between stopping and terminating an EC2 instance?",
      options: [
        "There is no difference.",
        "Stopping shuts the instance down but keeps the EBS volume; terminating deletes the instance and (by default) the root EBS volume.",
        "Terminating only pauses the instance; stopping deletes it.",
        "Both keep the instance running but disable networking.",
      ],
      correct: 1,
      explanation:
        "Stop = shutdown the OS, keep the root EBS volume; can be started again. Terminate = delete the instance; root EBS volume is deleted by default (unless DeleteOnTermination=false).",
    },
    {
      id: "ec2-q10",
      question:
        "What kind of pricing model is EC2 On-Demand?",
      options: [
        "Pay a 1-year commitment up front.",
        "Pay only for what you use, billed per second (Linux) or per hour, with no commitment.",
        "Free for the first 12 months.",
        "Paid annually in advance.",
      ],
      correct: 1,
      explanation:
        "On-Demand pricing has no long-term commitment. Linux instances are billed per second (60-second minimum); other OSes are billed per hour. Highest cost per hour but maximum flexibility.",
    },
    {
      id: "ec2-q11",
      question:
        "Which feature of EC2 is used to bootstrap an instance — installing software and configuring it the first time it boots?",
      options: ["AMI", "User Data", "Security Group", "Placement Group"],
      correct: 1,
      explanation:
        "User Data is a bootstrap script (typically bash or PowerShell) that runs at first boot to install packages, fetch configuration, and prepare the instance for use.",
    },
    {
      id: "ec2-q12",
      question:
        "Which AWS service helps you choose the right EC2 instance type and identify under-utilized instances?",
      options: ["AWS Trusted Advisor", "AWS Compute Optimizer", "Amazon Inspector", "AWS Config"],
      correct: 1,
      explanation:
        "AWS Compute Optimizer analyzes utilization metrics and recommends optimal EC2 instance types and sizes (right-sizing) to improve performance and reduce cost.",
    },
    {
      id: "ec2-q13",
      question:
        "An EC2 instance must run on physical hardware that is dedicated to a single customer for compliance reasons. Which option meets this requirement?",
      options: [
        "On-Demand instance",
        "Spot instance",
        "Dedicated Host or Dedicated Instance",
        "T-series burstable",
      ],
      correct: 2,
      explanation:
        "Dedicated Hosts give you a physical server fully dedicated to your account (and let you bring existing software licenses). Dedicated Instances run on hardware dedicated to your account but you don't see the underlying host.",
    },
    {
      id: "ec2-q14",
      question:
        "Which Savings Plan type provides flexibility across instance family, size, OS, region, and tenancy?",
      options: [
        "Compute Savings Plan",
        "EC2 Instance Savings Plan",
        "SageMaker Savings Plan",
        "Reserved Instance",
      ],
      correct: 0,
      explanation:
        "Compute Savings Plans (up to 66% off) apply across EC2, Lambda, and Fargate, regardless of instance family, region, OS, or tenancy. EC2 Instance Savings Plans (up to 72%) are limited to a specific family in a region.",
    },
    {
      id: "ec2-q15",
      question:
        "Which type of EC2 placement group is BEST for low-latency, high-throughput communication between instances (e.g., HPC)?",
      options: ["Cluster", "Spread", "Partition", "Random"],
      correct: 0,
      explanation:
        "Cluster placement groups pack instances close together in a single AZ for the lowest network latency and highest network throughput — ideal for HPC and tightly-coupled workloads.",
    },
    {
      id: "ec2-q16",
      question:
        "Which placement group spreads instances across distinct underlying hardware to reduce correlated failures?",
      options: ["Cluster", "Spread", "Partition", "Dedicated"],
      correct: 1,
      explanation:
        "Spread placement groups place each instance on distinct racks/hardware (up to 7 per AZ), minimizing the chance that simultaneous hardware failures affect multiple critical instances.",
    },
    {
      id: "ec2-q17",
      question:
        "Which placement group divides instances into logical partitions, used for distributed/replicated workloads like Hadoop, Cassandra, Kafka?",
      options: ["Cluster", "Spread", "Partition", "Tenant"],
      correct: 2,
      explanation:
        "Partition placement groups separate instances into partitions (up to 7 per AZ). Each partition has its own racks. If a rack fails, only that partition is impacted — perfect for distributed databases.",
    },
    {
      id: "ec2-q18",
      question:
        "Which statement about Security Groups attached to an EC2 instance is correct?",
      options: [
        "An instance can only have one Security Group.",
        "An instance can have multiple Security Groups, and the rules are evaluated as a UNION (cumulative).",
        "Multiple Security Groups conflict and the latest one wins.",
        "Security Groups are limited to 1 inbound rule each.",
      ],
      correct: 1,
      explanation:
        "An EC2 instance can have multiple Security Groups; their rules are combined cumulatively (any allow lets the traffic through). Security Groups support many rules per group.",
    },
    {
      id: "ec2-q19",
      question:
        "What is an Amazon Machine Image (AMI)?",
      options: [
        "A networking object used to peer two VPCs.",
        "A template that contains the OS, application server, and applications used to launch an EC2 instance.",
        "An IAM policy.",
        "A type of EBS snapshot used by S3.",
      ],
      correct: 1,
      explanation:
        "An AMI is a pre-configured template (root volume + launch permissions + block-device mapping) used to create EC2 instances. AWS provides public AMIs; you can also create custom AMIs.",
    },
    {
      id: "ec2-q20",
      question: "Which of the following is true about EC2 instance types?",
      options: [
        "All EC2 instances have the same CPU and memory.",
        "Instance types are organized into families (e.g., T, M, C, R, I) optimized for specific workloads.",
        "Instance types cannot be changed once chosen.",
        "Instance types only differ by cost, not capability.",
      ],
      correct: 1,
      explanation:
        "EC2 has many instance families optimized for different workloads: T (burstable), M (general purpose), C (compute), R/X (memory), I/D (storage), P/G (accelerated), etc.",
    },
    {
      id: "ec2-q21",
      question:
        "What is the recommended way to grant an EC2 instance permissions to access AWS services like S3 or DynamoDB?",
      options: [
        "Embed an IAM access key in the application code.",
        "Use the root user credentials.",
        "Attach an IAM Role to the EC2 instance.",
        "Allow public access on the target service.",
      ],
      correct: 2,
      explanation:
        "Attach an IAM role to the EC2 instance — this provides temporary, automatically rotated credentials via the instance metadata service. It is more secure than long-lived access keys.",
    },
    {
      id: "ec2-q22",
      question:
        "Which EC2 pricing option is CHEAPEST for non-critical workloads that can tolerate interruption?",
      options: [
        "On-Demand",
        "Reserved Instances (3-year)",
        "Spot Instances",
        "Dedicated Hosts",
      ],
      correct: 2,
      explanation:
        "Spot Instances are the cheapest (up to 90% off) but can be reclaimed with 2 minutes notice. Best for fault-tolerant, flexible, batch-style workloads.",
    },
    {
      id: "ec2-q23",
      question: "Which of the following best describes EC2?",
      options: [
        "A managed object storage service.",
        "A managed relational database.",
        "Infrastructure as a Service (IaaS) providing resizable virtual machines in the cloud.",
        "A Platform-as-a-Service for deploying web apps.",
      ],
      correct: 2,
      explanation:
        "Amazon EC2 (Elastic Compute Cloud) is the foundational IaaS compute service — it provides virtual machines (instances) of various sizes that you control at the OS level.",
    },
    {
      id: "ec2-q24",
      question:
        "A company wants to run an application requiring an existing Windows Server license that is tied to a physical machine. Which EC2 option supports BYOL with hardware-level visibility?",
      options: ["On-Demand", "Spot", "Dedicated Host", "Savings Plan"],
      correct: 2,
      explanation:
        "Dedicated Hosts let you bring your own software licenses (BYOL) tied to physical sockets/cores, and give you visibility into the underlying physical server.",
    },
    {
      id: "ec2-q25",
      question:
        "Which network construct is associated with an EC2 instance to control inbound and outbound traffic at the instance level?",
      options: ["Network ACL", "Subnet", "Security Group", "Route Table"],
      correct: 2,
      explanation:
        "Security Groups operate at the instance (ENI) level and act as virtual firewalls. NACLs operate at the subnet level and are stateless.",
    },
  ],
};
