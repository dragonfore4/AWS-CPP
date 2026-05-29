import { TopicData } from "@/types/topic";

export const vpc: TopicData = {
  slug: "vpc",
  title: "VPC",
  subtitle: "Virtual Private Cloud",
  accent: "indigo",
  emoji: "🌐",
  category: "Networking",
  description:
    "VPC คือ private network ส่วนตัวของคุณใน AWS (ระดับ Region) ที่ให้คุณควบคุม IP range, subnets, route tables, gateways ได้เต็มที่ เปรียบเหมือนการมี data center ของตัวเองบน cloud",
  keyPoints: [
    "VPC = private network (Regional) | Subnets = partition VPC (ผูกกับ AZ)",
    "Public subnet เข้าถึงจาก internet ได้ผ่าน IGW | Private subnet ไม่ได้ (ใช้ NAT Gateway ออกได้)",
    "Security Groups (stateful, ENI level) vs NACLs (stateless, subnet level, มี DENY)",
    "VPC Peering / Endpoints / Site-to-Site VPN / Direct Connect / Transit Gateway",
  ],
  sections: [
    {
      id: "overview",
      title: "VPC & Subnets Primer",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon VPC (Virtual Private Cloud)</strong> คือ <em>private network</em> ที่แยก (isolated) สำหรับ AWS account ของคุณ — เป็น <strong>Regional resource</strong> (อยู่ภายใน Region เดียว) ทุก resource ที่สร้าง (EC2, RDS, Lambda, ฯลฯ) จะวางอยู่ภายใน VPC",
        },
        {
          type: "list",
          items: [
            "<strong>VPC</strong> — virtual network ที่คุณกำหนด CIDR block (IP range) เช่น 10.0.0.0/16 — เป็น <strong>Regional resource</strong>",
            "<strong>Subnets</strong> — partition (แบ่งย่อย) ของ VPC — เป็น <strong>AZ resource</strong> (ผูกกับ Availability Zone หนึ่ง)",
            "<strong>Public Subnet</strong> — subnet ที่ <em>เข้าถึงได้จาก internet</em> (มี route ไป Internet Gateway)",
            "<strong>Private Subnet</strong> — subnet ที่ <em>เข้าถึงจาก internet ไม่ได้</em> (ไม่มี route ตรงไป IGW)",
            "<strong>Route Tables</strong> — กำหนดว่า traffic จะไปที่ไหน (control access between subnets, IGW, NAT, ฯลฯ)",
            "แต่ละ Region มี <strong>default VPC</strong> พร้อมใช้งาน (มี public subnet ทุก AZ)",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "CIDR Block",
          text: "CIDR กำหนดช่วง IP เช่น 10.0.0.0/16 = 65,536 IPs ยิ่ง /number ใหญ่ยิ่งมี IP น้อย เช่น /24 = 256 IPs, /28 = 16 IPs",
        },
        {
          type: "callout",
          variant: "tip",
          title: "จำให้แม่น",
          text: "<strong>VPC</strong> = Regional<br><strong>Subnet</strong> = AZ<br><strong>Public subnet</strong> ต้อง route ผ่าน IGW<br><strong>Private subnet</strong> ไม่มี route ตรงไป internet",
        },
      ],
    },
    {
      id: "igw-nat",
      title: "Internet Gateway & NAT Gateway",
      content: [
        {
          type: "paragraph",
          text: "การเข้าถึง internet จาก VPC ต้องอาศัย <strong>Internet Gateway (IGW)</strong> สำหรับ public subnet และ <strong>NAT Gateway / NAT Instance</strong> สำหรับ private subnet ที่ต้องออก internet:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Internet Gateway (IGW)",
              description:
                "Helps VPC instances connect with internet — Public Subnets ต้องมี route ไป IGW (1 VPC ต่อ 1 IGW), ทำ NAT สำหรับ instances ที่มี public IP",
            },
            {
              title: "NAT Gateway (AWS-managed)",
              description:
                "AWS managed service — ให้ instances ใน private subnet เข้าถึง internet ได้ (เช่น download updates) แต่ <em>private อยู่</em> (internet เข้ามาไม่ได้), อยู่ใน public subnet, ต้อง allocate Elastic IP",
            },
            {
              title: "NAT Instance (self-managed)",
              description:
                "EC2 instance ที่ทำหน้าที่ NAT — ต้อง manage เอง (legacy), disable Source/Dest Check, ปัจจุบันแนะนำใช้ NAT Gateway แทน",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>IGW</strong> ทำให้ public subnet เชื่อมต่อ internet ได้ทั้ง <em>inbound และ outbound</em>",
            "<strong>NAT Gateway / NAT Instance</strong> ทำให้ private subnet เข้าถึง internet ได้ <em>เฉพาะ outbound</em> โดยยังคงความเป็น private (internet initiate เข้ามาไม่ได้)",
            "NAT Gateway = AWS managed (high availability, scale อัตโนมัติ) | NAT Instance = self-managed",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Flow สำคัญ",
          text: "Public Subnet → Route Table → IGW → Internet | Private Subnet → Route Table → NAT Gateway (ใน public subnet) → IGW → Internet",
        },
      ],
    },
    {
      id: "sg-nacl",
      title: "Network ACL vs Security Groups",
      content: [
        {
          type: "paragraph",
          text: "VPC มี <strong>2 ชั้น</strong> ของ network firewall: <strong>NACL</strong> (subnet level) และ <strong>Security Groups</strong> (ENI / EC2 instance level)",
        },
        {
          type: "grid",
          items: [
            {
              title: "NACL (Network ACL)",
              description:
                "Firewall ระดับ <strong>Subnet</strong> — มีทั้ง <strong>ALLOW และ DENY</strong> rules, ระบุได้แค่ <strong>IP addresses</strong>, เป็น <strong>STATELESS</strong> (return traffic ต้องเปิด rule แยก)",
            },
            {
              title: "Security Groups (SG)",
              description:
                "Firewall ระดับ <strong>ENI / EC2 instance</strong> — มีแค่ <strong>ALLOW</strong> rules (ไม่มี DENY), ระบุได้ทั้ง <strong>IP และ Security Group อื่น</strong>, เป็น <strong>STATEFUL</strong> (return traffic ได้ auto)",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>NACL</strong>: subnet level | ALLOW + DENY | IP only | STATELESS | evaluate ตาม rule number (ต่ำก่อน)",
            "<strong>Security Group</strong>: ENI/EC2 level | ALLOW only | IP + SG อื่น | STATEFUL | evaluate ทุก rule รวมกัน",
            "Default NACL = allow ทุกอย่าง | Default SG = deny all inbound, allow all outbound",
            "Best practice: ใช้ทั้งคู่ — NACL เป็น first line (subnet), SG เป็น second line (instance)",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "ข้อสอบชอบถาม",
          text: "Security Group = STATEFUL, allow only, IP + SG | NACL = STATELESS, allow + DENY, IP only — ถ้าถามว่าอะไรมี DENY rules → ตอบ NACL!",
        },
      ],
    },
    {
      id: "flow-logs",
      title: "VPC Flow Logs",
      content: [
        {
          type: "paragraph",
          text: "<strong>VPC Flow Logs</strong> เก็บข้อมูล (capture) <em>IP traffic</em> ที่ไหลเข้า-ออกจาก network interfaces ของคุณ — ใช้สำหรับ <strong>troubleshoot connectivity issues</strong> และ monitor traffic",
        },
        {
          type: "list",
          items: [
            "Capture ได้ 3 ระดับ: <strong>VPC Flow Logs</strong>, <strong>Subnet Flow Logs</strong>, <strong>ENI (Elastic Network Interface) Flow Logs</strong>",
            "ช่วย <strong>monitor และ troubleshoot</strong> connectivity issues (เช่น ทำไม traffic ไม่ผ่าน, อะไรถูก deny)",
            "Capture network information ได้จาก AWS managed services ด้วย: <strong>ELB, ElastiCache, RDS, Aurora, ฯลฯ</strong>",
            "Flow Logs data สามารถ <strong>ส่งไปเก็บที่ Amazon S3 หรือ CloudWatch Logs</strong> ได้",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "ใช้เมื่อไหร่",
          text: "เมื่อต้องการตรวจสอบว่ามี traffic อะไรผ่าน VPC, traffic ถูก allow/deny หรือไม่ และเพื่อ debug network issues — VPC Flow Logs คือคำตอบ",
        },
      ],
    },
    {
      id: "peering",
      title: "VPC Peering",
      content: [
        {
          type: "paragraph",
          text: "<strong>VPC Peering</strong> คือการเชื่อม 2 VPC เข้าด้วยกัน <em>privately</em> ผ่าน AWS network โดยตรง ทำให้ instances ใน 2 VPC คุยกันได้เหมือนอยู่ network เดียวกัน",
        },
        {
          type: "list",
          items: [
            "Connect 2 VPCs <strong>privately</strong> ผ่าน AWS network",
            "ทำให้ behave เหมือนอยู่ใน same network",
            "<strong>ต้อง NOT มี overlapping CIDR</strong> (CIDR block ของ 2 VPC ห้ามซ้อนทับกัน)",
            "<strong>VPC Peering connection is NOT transitive</strong> — ต้อง <em>establish for every VPC ที่ต้องการสื่อสาร</em> (A↔B และ B↔C ไม่ทำให้ A↔C)",
            "เชื่อมได้ข้าม account และข้าม Region (cross-account / cross-region peering)",
            "ต้อง update Route Tables ทั้งสอง VPC ให้ชี้ไปหากัน",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Not Transitive",
          text: "VPC Peering ไม่เป็น transitive — ถ้ามีหลาย VPC ที่ต้องเชื่อมกันหมด ต้อง peer ทุกคู่ (n*(n-1)/2 connections) หรือพิจารณาใช้ Transit Gateway แทน",
        },
      ],
    },
    {
      id: "endpoints",
      title: "VPC Endpoints",
      content: [
        {
          type: "paragraph",
          text: "<strong>VPC Endpoints</strong> ให้คุณเชื่อมต่อกับ AWS services ผ่าน <em>private network</em> แทนที่จะต้องผ่าน public internet — ผลลัพธ์คือ <strong>enhanced security</strong> และ <strong>lower latency</strong>",
        },
        {
          type: "grid",
          items: [
            {
              title: "VPC Endpoint Gateway",
              description:
                "สำหรับ <strong>S3 และ DynamoDB เท่านั้น</strong> — ฟรี, กำหนดใน route table ให้ traffic ไป AWS service โดยตรงผ่าน private network",
            },
            {
              title: "VPC Endpoint Interface",
              description:
                "สำหรับ <strong>AWS services อื่นๆ ทั้งหมด</strong> — สร้าง ENI (Elastic Network Interface) ใน subnet ของคุณ, มีค่าใช้จ่ายรายชั่วโมง + data processing (ใช้ AWS PrivateLink)",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>Gateway Endpoint</strong> → S3, DynamoDB (จำคู่นี้)",
            "<strong>Interface Endpoint</strong> → AWS services อื่นๆ ทั้งหมด",
            "Benefit: enhanced security (traffic ไม่ออก internet) + lower latency (อยู่ใน AWS network)",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "ข้อสอบ",
          text: "ถ้าถามเรื่องเข้าถึง S3 หรือ DynamoDB จาก private subnet โดยไม่ผ่าน internet → คำตอบคือ VPC Endpoint Gateway | services อื่นๆ → Interface Endpoint",
        },
      ],
    },
    {
      id: "vpn-direct-connect",
      title: "Site-to-Site VPN & Direct Connect",
      content: [
        {
          type: "paragraph",
          text: "เชื่อมต่อ <strong>on-premises data center</strong> เข้ากับ AWS VPC ได้ 2 วิธีหลัก: <strong>Site-to-Site VPN</strong> (ผ่าน internet) หรือ <strong>Direct Connect</strong> (สาย physical):",
        },
        {
          type: "grid",
          items: [
            {
              title: "Site-to-Site VPN",
              description:
                "เชื่อม on-premises กับ AWS — <strong>connection is automatically encrypted</strong>, แต่ <em>goes over public internet</em>, setup เร็วภายในนาที, ราคาถูก",
            },
            {
              title: "Direct Connect (DX)",
              description:
                "<strong>Physical connection</strong> ระหว่าง on-premises กับ AWS — <em>private, secure, fast</em>, แต่ <strong>takes at least a month to establish</strong>, bandwidth สูง (1-100Gbps), ราคาแพงกว่า",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>Site-to-Site VPN</strong>: ผ่าน internet (encrypted), setup เร็ว, ราคาถูก, latency ไม่แน่นอน",
            "ฝั่ง on-premises ต้องมี <strong>Customer Gateway (CGW)</strong>",
            "ฝั่ง AWS ต้องมี <strong>Virtual Private Gateway (VGW)</strong>",
            "<strong>Direct Connect (DX)</strong>: ผ่าน dedicated physical connection — private, secure, fast, แต่ takes 1+ month",
            "สามารถใช้ VPN เป็น backup ของ Direct Connect ได้ (failover)",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "เลือกอะไรดี?",
          text: "ต้องการ <strong>setup เร็ว ราคาถูก</strong> → Site-to-Site VPN<br>ต้องการ <strong>private, secure, fast</strong> (bandwidth สูง latency ต่ำ) → Direct Connect<br>ต้องการ <strong>resilience</strong> → Direct Connect + VPN backup",
        },
      ],
    },
    {
      id: "transit-gateway",
      title: "Transit Gateway",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Transit Gateway</strong> คือ network <em>hub-and-spoke (star)</em> ที่ให้ <strong>transitive peering</strong> ระหว่าง VPCs และ on-premises networks ได้ <em>หลายพัน</em> connections ผ่าน <strong>single gateway</strong>",
        },
        {
          type: "list",
          items: [
            "ให้ <strong>transitive peering</strong> ระหว่าง <em>thousands of VPCs และ on-premises</em> — แก้ปัญหาที่ VPC Peering ไม่ transitive",
            "Topology แบบ <strong>hub-and-spoke (star)</strong> — Transit Gateway เป็น hub กลาง, VPCs / on-prem เป็น spokes",
            "<strong>Single gateway</strong> เพื่อจัดการ network connectivity ทั้งหมด — ลดความซับซ้อน",
            "ทำงานร่วมกับ <strong>Direct Connect Gateway</strong> และ <strong>VPN connections</strong> ได้",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "เมื่อใช้ Transit Gateway",
          text: "ถ้ามีหลาย VPC ที่ต้องเชื่อมกันหมด (full mesh) — Transit Gateway = ทางเลือกที่ scalable กว่า VPC Peering เพราะให้ transitive peering ผ่าน hub เดียว",
        },
      ],
    },
    {
      id: "summary",
      title: "Summary — VPC Components Recap",
      content: [
        {
          type: "paragraph",
          text: "สรุป network components ของ VPC ที่ต้องจำให้ขึ้นใจสำหรับข้อสอบ CLF-C02 — แต่ละ component มีหน้าที่ของตัวเองและมักออกข้อสอบเป็นคู่ ๆ:",
        },
        {
          type: "grid",
          items: [
            {
              title: "VPC",
              description:
                "Private network ส่วนตัวระดับ <strong>Region</strong> ที่คุณกำหนด CIDR block เอง",
            },
            {
              title: "Subnet",
              description:
                "Partition ของ VPC ระดับ <strong>AZ</strong> — public มี route ผ่าน IGW, private ไม่มี",
            },
            {
              title: "Internet Gateway",
              description:
                "เชื่อม VPC กับ internet สำหรับ public subnet (1 VPC ต่อ 1 IGW)",
            },
            {
              title: "NAT Gateway",
              description:
                "ให้ private subnet ออก internet ได้แบบ outbound เท่านั้น (managed by AWS)",
            },
            {
              title: "NACL",
              description:
                "Firewall ระดับ subnet — <em>stateless</em> รองรับทั้ง ALLOW และ DENY (IP only)",
            },
            {
              title: "Security Group",
              description:
                "Firewall ระดับ ENI/EC2 — <em>stateful</em> มีแค่ ALLOW (รองรับ IP และ SG อื่น)",
            },
            {
              title: "VPC Flow Logs",
              description:
                "Capture IP traffic ระดับ VPC/Subnet/ENI ส่งไป S3 หรือ CloudWatch Logs",
            },
            {
              title: "VPC Peering",
              description:
                "เชื่อม 2 VPC แบบ private — CIDR ห้าม overlap และ <strong>NOT transitive</strong>",
            },
            {
              title: "VPC Endpoints",
              description:
                "เชื่อม AWS service แบบ private — Gateway สำหรับ S3/DynamoDB, Interface สำหรับที่เหลือ",
            },
            {
              title: "Site-to-Site VPN",
              description:
                "On-prem ↔ AWS ผ่าน internet (encrypted) — setup เร็ว ราคาถูก ใช้ CGW + VGW",
            },
            {
              title: "Direct Connect",
              description:
                "Physical connection on-prem ↔ AWS — private, fast แต่ใช้เวลา 1+ เดือนติดตั้ง",
            },
            {
              title: "Transit Gateway",
              description:
                "Hub-and-spoke เชื่อม VPC จำนวนมาก + on-prem แบบ transitive peering",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>VPC = Regional</strong> ส่วน <strong>Subnet = AZ</strong> — จำคู่นี้ให้ขึ้นใจ",
            "<strong>Public subnet</strong> ต้องมี route ไป IGW เท่านั้น",
            "<strong>NACL</strong> เป็นชั้นแรก (subnet) ส่วน <strong>SG</strong> เป็นชั้นที่สอง (instance)",
            "ถ้าโจทย์ถามว่าอะไรมี <strong>DENY rules</strong> → ตอบ NACL เสมอ",
            "<strong>Gateway Endpoint</strong> ใช้ได้แค่กับ S3 และ DynamoDB เท่านั้น",
            "<strong>VPN</strong> = ผ่าน internet (เร็ว ถูก) ส่วน <strong>Direct Connect</strong> = physical (private, fast, ติดตั้งนาน)",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Cheat Sheet",
          text: "ถ้าจำได้แค่ประโยคเดียว ให้จำว่า <strong>VPC คือ Region, Subnet คือ AZ</strong> — ที่เหลือคือเครื่องมือควบคุม traffic เข้า-ออก (IGW/NAT, NACL/SG) และเครื่องมือเชื่อมต่อภายนอก (Peering, Endpoints, VPN, Direct Connect, Transit Gateway)",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "vpc-q1",
      question:
        "ข้อใดต่อไปนี้ <strong>ถูกต้อง</strong> เกี่ยวกับ NACL และ Security Groups?",
      options: [
        "Security Groups เป็น stateless และมี DENY rules ได้",
        "NACL เป็น stateful และมีแค่ ALLOW rules",
        "NACL เป็น stateless และมีทั้ง ALLOW + DENY rules ส่วน Security Groups เป็น stateful และมีแค่ ALLOW rules",
        "ทั้งคู่เป็น stateful และมีแค่ ALLOW rules",
      ],
      correct: 2,
      explanation:
        "NACL ทำงานที่ระดับ subnet เป็น STATELESS (return traffic ต้องเปิด rule แยก) และรองรับทั้ง ALLOW + DENY rules ส่วน Security Groups ทำงานที่ระดับ ENI/EC2 instance เป็น STATEFUL (return traffic อัตโนมัติ) และมีแค่ ALLOW rules — จำคู่นี้ให้แม่น เพราะข้อสอบชอบถาม",
    },
    {
      id: "vpc-q2",
      question:
        "Instances ใน private subnet ต้องการ download software updates จาก internet โดย<em>ยังคงเป็น private</em> (internet เข้ามาหาไม่ได้) ควรใช้อะไร?",
      options: [
        "Internet Gateway attach กับ private subnet โดยตรง",
        "NAT Gateway ใน public subnet",
        "VPC Peering กับ public VPC",
        "Direct Connect",
      ],
      correct: 1,
      explanation:
        "NAT Gateway (AWS-managed) อยู่ใน public subnet — ให้ instances ใน private subnet ออก internet ได้ (outbound) เช่น download updates แต่ internet ไม่สามารถ initiate connection เข้ามาหา instance ได้ (inbound blocked) ทำให้ private subnet ยังคงความเป็น private",
    },
    {
      id: "vpc-q3",
      question:
        "บริษัทมี VPC A, B, C โดย A peer กับ B และ B peer กับ C — ข้อใดถูกต้อง?",
      options: [
        "A สามารถสื่อสารกับ C ได้โดยตรงผ่าน B (transitive)",
        "VPC Peering เป็น transitive โดย default",
        "A ไม่สามารถสื่อสารกับ C ได้ ต้องสร้าง peering A↔C เพิ่ม เพราะ VPC Peering ไม่เป็น transitive",
        "VPC ทั้งสาม CIDR สามารถ overlap กันได้",
      ],
      correct: 2,
      explanation:
        "VPC Peering ไม่เป็น transitive — ถ้า A↔B และ B↔C ไม่ทำให้ A สื่อสารกับ C ได้ ต้อง peer A↔C แยกต่างหาก นอกจากนี้ CIDR ของ VPC ที่ peer กันต้องไม่ overlap ถ้ามีหลาย VPC ที่ต้องเชื่อมกันหมด ควรใช้ Transit Gateway แทน",
    },
    {
      id: "vpc-q4",
      question:
        "บริษัทต้องการเชื่อม on-premises data center กับ AWS โดยต้องการ <strong>private, secure, fast</strong> connection ที่ไม่ผ่าน public internet — ควรใช้อะไร?",
      options: [
        "Site-to-Site VPN เพราะ encrypted automatically",
        "AWS Direct Connect เพราะเป็น physical connection ที่ private และ fast",
        "VPC Peering",
        "Internet Gateway",
      ],
      correct: 1,
      explanation:
        "AWS Direct Connect เป็น physical connection ระหว่าง on-premises กับ AWS — เป็น private, secure, fast (ไม่ผ่าน public internet) แต่ใช้เวลาอย่างน้อย 1 เดือนในการ establish ส่วน Site-to-Site VPN แม้จะ encrypted แต่ยังคง goes over public internet",
    },
    {
      id: "vpc-q5",
      question:
        "คุณต้องการให้ EC2 ใน private subnet เข้าถึง <strong>S3 และ DynamoDB</strong> โดยไม่ผ่าน public internet ควรใช้ VPC Endpoint แบบใด?",
      options: [
        "VPC Endpoint Interface (PrivateLink)",
        "VPC Endpoint Gateway",
        "NAT Gateway",
        "Transit Gateway",
      ],
      correct: 1,
      explanation:
        "VPC Endpoint Gateway สำหรับ S3 และ DynamoDB เท่านั้น — ฟรี, กำหนดใน route table ให้ traffic ไป service โดยตรงผ่าน private network ส่วน VPC Endpoint Interface ใช้กับ AWS services อื่นๆ (มี ENI + ค่าใช้จ่ายรายชั่วโมง) จำคู่นี้: Gateway → S3/DynamoDB, Interface → ที่เหลือ",
    },
  ],
};
