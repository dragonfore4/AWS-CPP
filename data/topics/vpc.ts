import { TopicData } from "@/types/topic";

export const vpc: TopicData = {
  slug: "vpc",
  title: "VPC",
  subtitle: "Virtual Private Cloud",
  accent: "indigo",
  category: "Networking",
  description:
    "VPC คือ private network ส่วนตัวของคุณใน AWS (ระดับ Region) ที่ให้คุณควบคุม IP range, subnets, route tables, gateways ได้เต็มที่ เปรียบเหมือนการมี data center ของตัวเองบน cloud",
  keyPoints: [
    "VPC = private network (Regional)<br>Subnets = partition VPC (ผูกกับ AZ)",
    "Public subnet เข้าถึงจาก internet ได้ผ่าน IGW<br>Private subnet ไม่ได้ (ใช้ NAT Gateway ออกได้)",
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
            "NAT Gateway = AWS managed (high availability, scale อัตโนมัติ)<br>NAT Instance = self-managed",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Flow สำคัญ",
          text: "Public Subnet → Route Table → IGW → Internet<br>Private Subnet → Route Table → NAT Gateway (ใน public subnet) → IGW → Internet",
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
            "<strong>NACL</strong>: subnet level<br>ALLOW + DENY<br>IP only<br>STATELESS<br>evaluate ตาม rule number (ต่ำก่อน)",
            "<strong>Security Group</strong>: ENI/EC2 level<br>ALLOW only<br>IP + SG อื่น<br>STATEFUL<br>evaluate ทุก rule รวมกัน",
            "Default NACL = allow ทุกอย่าง<br>Default SG = deny all inbound, allow all outbound",
            "Best practice: ใช้ทั้งคู่ — NACL เป็น first line (subnet), SG เป็น second line (instance)",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "ข้อสอบชอบถาม",
          text: "Security Group = STATEFUL, allow only, IP + SG<br>NACL = STATELESS, allow + DENY, IP only — ถ้าถามว่าอะไรมี DENY rules → ตอบ NACL!",
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
          text: "ถ้าถามเรื่องเข้าถึง S3 หรือ DynamoDB จาก private subnet โดยไม่ผ่าน internet → คำตอบคือ VPC Endpoint Gateway<br>services อื่นๆ → Interface Endpoint",
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
        "Which of the following is TRUE about NACLs and Security Groups?",
      options: [
        "Both are stateful.",
        "NACLs are stateless and operate at subnet level; Security Groups are stateful and operate at instance level.",
        "NACLs operate at instance level; Security Groups operate at subnet level.",
        "Security Groups support deny rules, NACLs do not.",
      ],
      correct: 1,
      explanation:
        "NACLs (Network ACLs) are stateless and operate at the subnet level — return traffic must be explicitly allowed. Security Groups are stateful and operate at the instance/ENI level — return traffic is automatically allowed. NACLs support deny rules; Security Groups support only allow rules.",
    },
    {
      id: "vpc-q2",
      question:
        "Which AWS service provides a virtual network in the cloud, isolated from other customers?",
      options: [
        "Amazon VPC",
        "AWS Direct Connect",
        "AWS Transit Gateway",
        "Amazon Route 53",
      ],
      correct: 0,
      explanation:
        "Amazon VPC (Virtual Private Cloud) is a logically isolated virtual network in AWS where you launch resources, defined by IP ranges and broken into subnets across AZs.",
    },
    {
      id: "vpc-q3",
      question:
        "What is the difference between a public and private subnet in a VPC?",
      options: [
        "Private subnets are in different regions.",
        "A public subnet has a route to an Internet Gateway in its route table; a private subnet does not.",
        "Public subnets are free.",
        "Private subnets cannot have EC2 instances.",
      ],
      correct: 1,
      explanation:
        "Public subnet = subnet with a default route (0.0.0.0/0) to an Internet Gateway. Private subnet = no IGW route. Private subnets typically use a NAT Gateway in a public subnet to reach the internet outbound.",
    },
    {
      id: "vpc-q4",
      question:
        "Which device allows EC2 instances in a private subnet to make outbound internet requests (e.g., to download patches) but blocks inbound internet connections?",
      options: [
        "Internet Gateway",
        "NAT Gateway (or NAT instance)",
        "Egress-only Internet Gateway (IPv6 only)",
        "Route 53 resolver",
      ],
      correct: 1,
      explanation:
        "A NAT Gateway lives in a public subnet and translates outbound traffic from private-subnet instances. It blocks inbound connections initiated from the internet. (For IPv6, use an Egress-only IGW instead.)",
    },
    {
      id: "vpc-q5",
      question:
        "What is VPC Peering?",
      options: [
        "A service to connect VPCs to on-premises only.",
        "A networking connection between two VPCs that enables routing using private IPs as if they were the same network.",
        "A service to connect to the internet.",
        "A way to attach a VPC to multiple regions automatically.",
      ],
      correct: 1,
      explanation:
        "VPC Peering connects two VPCs (same or different account/region) so resources can communicate via private IPs. Peerings are non-transitive — A peered with B and B peered with C does NOT mean A can reach C.",
    },
    {
      id: "vpc-q6",
      question:
        "Which AWS service is BEST for connecting many VPCs and on-premises networks through a central hub?",
      options: [
        "VPC Peering full mesh",
        "AWS Transit Gateway",
        "AWS Direct Connect alone",
        "VPN Gateway",
      ],
      correct: 1,
      explanation:
        "AWS Transit Gateway is a regional network transit hub for connecting hundreds of VPCs, VPNs, and Direct Connect — replaces the complexity of VPC peering full-mesh.",
    },
    {
      id: "vpc-q7",
      question:
        "Which type of VPC endpoint is used for S3 and DynamoDB?",
      options: [
        "Interface Endpoint",
        "Gateway Endpoint",
        "Direct Connect Endpoint",
        "Transit Endpoint",
      ],
      correct: 1,
      explanation:
        "VPC Gateway Endpoints (free) are used for S3 and DynamoDB. They are routing-table entries. All other AWS services use Interface Endpoints (powered by AWS PrivateLink, which costs per-hour + per-GB).",
    },
    {
      id: "vpc-q8",
      question:
        "What does VPC Flow Logs capture?",
      options: [
        "Disk I/O on EC2 instances.",
        "IP traffic information for ENIs in a VPC, subnet, or specific ENI — captured to CloudWatch Logs or S3.",
        "API calls.",
        "User logins.",
      ],
      correct: 1,
      explanation:
        "VPC Flow Logs capture metadata about IP traffic going to/from network interfaces in a VPC. Logs go to CloudWatch Logs or S3. Used for troubleshooting and security analysis.",
    },
    {
      id: "vpc-q9",
      question:
        "Which AWS service is a private connection between a VPC and AWS services without traversing the public internet?",
      options: [
        "AWS PrivateLink (Interface VPC Endpoint)",
        "AWS Transit Gateway",
        "Direct Connect",
        "Internet Gateway",
      ],
      correct: 0,
      explanation:
        "AWS PrivateLink (Interface VPC Endpoints) provides private connectivity from your VPC to AWS services or 3rd-party services without internet/NAT/IGW. Powered by ENIs in your VPC.",
    },
    {
      id: "vpc-q10",
      question:
        "Which is true about a VPC and its CIDR block?",
      options: [
        "A VPC must be exactly /16.",
        "A VPC has a primary CIDR block (between /16 and /28). You can add up to 4 secondary CIDR blocks.",
        "VPCs cannot use private IP ranges.",
        "A VPC is bound to one AZ only.",
      ],
      correct: 1,
      explanation:
        "A VPC has a primary IPv4 CIDR (size /16 to /28) and you can add up to 4 secondary CIDRs. A VPC spans all AZs in a region.",
    },
    {
      id: "vpc-q11",
      question:
        "Which is true about subnets in a VPC?",
      options: [
        "A subnet can span multiple AZs.",
        "A subnet is bound to a single Availability Zone — for HA you create subnets in multiple AZs.",
        "Subnets can span regions.",
        "Each subnet must be exactly /24.",
      ],
      correct: 1,
      explanation:
        "Each subnet exists in exactly one AZ. For HA, create subnets in multiple AZs and distribute resources across them.",
    },
    {
      id: "vpc-q12",
      question:
        "Which device lets EC2 instances in a VPC communicate with the public internet?",
      options: [
        "Internet Gateway (IGW)",
        "NAT Gateway",
        "Customer Gateway",
        "Direct Connect Gateway",
      ],
      correct: 0,
      explanation:
        "An Internet Gateway is attached to the VPC and enables internet communication for resources in public subnets (those with a route to the IGW).",
    },
    {
      id: "vpc-q13",
      question:
        "Which is true about Security Group rules?",
      options: [
        "Security Groups support both allow and deny rules.",
        "Security Groups support ONLY allow rules — there are no deny rules. The default is to deny all.",
        "Security Group rules apply at subnet level.",
        "Security Groups are stateless.",
      ],
      correct: 1,
      explanation:
        "Security Groups support only ALLOW rules (no deny). All inbound is denied by default; outbound allowed by default. Stateful — return traffic is automatic.",
    },
    {
      id: "vpc-q14",
      question:
        "Which is true about NACL rules?",
      options: [
        "NACLs only support allow rules.",
        "NACLs support both allow and deny rules, evaluated in numeric order. Default NACL allows all in/out.",
        "NACLs are stateful.",
        "NACLs operate at instance level.",
      ],
      correct: 1,
      explanation:
        "NACLs are stateless, operate at subnet level, and support both allow and deny rules processed in rule-number order. Default NACL allows all in/out (custom NACLs deny all by default).",
    },
    {
      id: "vpc-q15",
      question:
        "Which AWS service provides a managed encrypted VPN over the internet from your data center to your VPC?",
      options: [
        "AWS Site-to-Site VPN",
        "AWS Client VPN",
        "AWS Direct Connect",
        "AWS PrivateLink",
      ],
      correct: 0,
      explanation:
        "AWS Site-to-Site VPN provides an IPsec VPN tunnel between an on-prem network and AWS — quick to set up; runs over the public internet.",
    },
    {
      id: "vpc-q16",
      question:
        "Which is true about IPv6 in AWS VPC?",
      options: [
        "AWS does not support IPv6.",
        "VPCs and subnets can have IPv6 CIDR blocks. IPv6 addresses are public; private subnets use an Egress-only IGW for outbound IPv6.",
        "IPv6 is only available in some regions.",
        "IPv6 in AWS works exactly the same as IPv4.",
      ],
      correct: 1,
      explanation:
        "AWS supports IPv6. All IPv6 addresses are publicly routable; for private outbound IPv6 use an Egress-only Internet Gateway (the IPv6 equivalent of NAT for outbound only).",
    },
    {
      id: "vpc-q17",
      question:
        "Which is the recommended way to allow EC2 instances in a private subnet to access AWS services privately?",
      options: [
        "Through a NAT Gateway and the public internet.",
        "Through VPC Endpoints (Gateway endpoint for S3/DynamoDB; Interface endpoints for others) — keeps traffic on the AWS network.",
        "Through Direct Connect only.",
        "Through Client VPN.",
      ],
      correct: 1,
      explanation:
        "VPC Endpoints provide private connectivity from a VPC to AWS services, avoiding the public internet (and NAT Gateway egress charges). Gateway endpoint for S3/DynamoDB; Interface endpoint (PrivateLink) for everything else.",
    },
    {
      id: "vpc-q18",
      question:
        "What is the maximum number of VPCs per AWS region by default?",
      options: ["1", "5 (soft limit)", "100", "Unlimited"],
      correct: 1,
      explanation:
        "Default is 5 VPCs per region per account (soft limit, can be increased via Service Quotas).",
    },
    {
      id: "vpc-q19",
      question:
        "What is the difference between a NAT Gateway and a NAT Instance?",
      options: [
        "They are identical.",
        "NAT Gateway is fully managed by AWS (high availability, scalable); NAT Instance is a customer-managed EC2 — older approach.",
        "NAT Instance is cheaper for high traffic.",
        "NAT Gateway is on-premises.",
      ],
      correct: 1,
      explanation:
        "NAT Gateway is AWS-managed: highly available within an AZ, auto-scales bandwidth (up to 100 Gbps), no maintenance. NAT Instance is a customer-managed EC2 — legacy approach; you manage HA and scaling.",
    },
    {
      id: "vpc-q20",
      question:
        "Which is the role of a route table?",
      options: [
        "It defines firewall rules.",
        "It controls how traffic is routed within a subnet — to other subnets, IGW, NAT Gateway, VPC peering, etc.",
        "It encrypts traffic.",
        "It lists IAM users.",
      ],
      correct: 1,
      explanation:
        "A route table contains rules (routes) that determine where network traffic from subnets is directed. Each subnet must be associated with a route table.",
    },
    {
      id: "vpc-q21",
      question:
        "Which CIDR block sizes are supported for a VPC?",
      options: [
        "Only /16",
        "Between /16 (largest, ~65k IPs) and /28 (smallest, 16 IPs)",
        "Any size up to /8",
        "Only /24",
      ],
      correct: 1,
      explanation:
        "VPC CIDR blocks must be between /16 (65,536 IPs) and /28 (16 IPs). Note: AWS reserves 5 IP addresses in every subnet for AWS use (network, gateway, DNS, etc.).",
    },
    {
      id: "vpc-q22",
      question:
        "Which network construct provides private connectivity between two VPCs in the same OR different regions?",
      options: [
        "VPC Peering (works across regions, accounts, even if in different organizations)",
        "Internet Gateway",
        "NAT Gateway",
        "Customer Gateway",
      ],
      correct: 0,
      explanation:
        "VPC Peering connects two VPCs — same or different region/account/org — over AWS's private network using private IPs. Non-transitive.",
    },
    {
      id: "vpc-q23",
      question:
        "Which service helps you visualize, troubleshoot, and audit your VPC network at scale?",
      options: [
        "VPC Reachability Analyzer / Network Access Analyzer",
        "Amazon Inspector",
        "AWS Trusted Advisor",
        "Amazon GuardDuty",
      ],
      correct: 0,
      explanation:
        "VPC Reachability Analyzer tests whether traffic can reach a destination, identifying blocking elements. Network Access Analyzer audits for unintended network paths.",
    },
    {
      id: "vpc-q24",
      question:
        "Which is true about Direct Connect?",
      options: [
        "It is a public internet connection.",
        "It is a private dedicated connection from your data center to AWS, bypassing the internet (1, 10, or 100 Gbps).",
        "It is encrypted by default.",
        "It is the cheapest option for any company.",
      ],
      correct: 1,
      explanation:
        "AWS Direct Connect provides a dedicated physical network connection between your data center and AWS — predictable performance, NOT encrypted by default (use VPN over Direct Connect for encryption).",
    },
    {
      id: "vpc-q25",
      question:
        "What does AWS automatically provision for every new account in each region?",
      options: [
        "Nothing — accounts start with no VPCs.",
        "A default VPC with default subnets in each AZ, an Internet Gateway, and pre-populated route tables — ready to launch instances.",
        "Only an Internet Gateway.",
        "Only EC2 instances.",
      ],
      correct: 1,
      explanation:
        "Every AWS account comes with a default VPC per region (default CIDR 172.31.0.0/16) — including default subnets in each AZ, an Internet Gateway, and routes — so users can launch EC2 instances immediately. Custom VPCs that you create yourself, by contrast, start empty.",
    },
  ],
};
