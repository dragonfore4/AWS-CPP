import { TopicData } from "@/types/topic";

export const elbAsg: TopicData = {
  slug: "elb-asg",
  title: "ELB & ASG",
  subtitle: "Elastic Load Balancing & Auto Scaling",
  accent: "green",
  emoji: "\u2696\uFE0F",
  category: "High Availability & Scalability",
  description:
    "ELB และ ASG คือคู่หูที่ทำงานร่วมกันเพื่อให้ระบบรองรับ traffic สูง ไม่ล่ม และขยายตัวได้อัตโนมัติ — ELB กระจาย traffic, ASG ปรับจำนวน instance ตาม load",
  keyPoints: [
    "ELB = Managed Load Balancer กระจาย traffic ข้าม instance/AZ พร้อม Health Check",
    "ALB (Layer 7) routing ตาม URL/Header, NLB (Layer 4) ultra-low latency + Static IP",
    "ASG ปรับจำนวน EC2 อัตโนมัติด้วย Min/Desired/Max capacity",
    "Target Tracking Scaling = strategy ที่ง่ายที่สุดและแนะนำมากที่สุด",
  ],
  sections: [
    {
      id: "ha-concepts",
      title: "HA, Scalability, Elasticity & Agility",
      content: [
        {
          type: "paragraph",
          text: "แนวคิดสำคัญที่เกี่ยวข้องกับการออกแบบระบบบน Cloud — ต้องแยกความหมายให้ชัด เพราะข้อสอบ CLF-C02 ชอบเอามาสลับเพื่อหลอก:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Vertical Scaling (Scale Up / Down)",
              description:
                "เพิ่ม/ลด spec ของเครื่องเดิม เช่น t2.micro → t2.large (Scale Up) หรือ t2.large → t2.micro (Scale Down) มี hardware limit เหมาะกับ database ที่กระจายยาก เช่น RDS",
            },
            {
              title: "Horizontal Scaling (Scale Out / In) = Elasticity",
              description:
                "เพิ่ม/ลดจำนวนเครื่อง — Scale Out = เพิ่มเครื่อง, Scale In = ลดเครื่อง ไม่มี hardware limit เหมาะกับ distributed system เช่น web server หลัง ASG + ELB",
            },
            {
              title: "High Availability (HA)",
              description:
                "ระบบยังทำงานได้แม้ส่วนใดส่วนหนึ่งล้มเหลว (disaster) — กระจาย instance ไว้อย่างน้อย 2 AZ เพื่อไม่มี single point of failure เช่น AZ-A ล่ม AZ-B ยังทำงานต่อได้",
            },
            {
              title: "Elasticity",
              description:
                "ระบบ scale อัตโนมัติตาม load จริง เพิ่มเมื่อ traffic สูง ลดเมื่อ traffic ต่ำ จ่ายตามใช้จริง (Pay-as-you-go) = Horizontal Scaling + Auto",
            },
            {
              title: "Agility (ระวัง! เป็นตัวหลอกในข้อสอบ)",
              description:
                "ความรวดเร็วในการสร้าง resource ใหม่ใน Cloud — แค่คลิกก็ได้ environment ใหม่ใน 1 นาที ไม่ต้องสั่งซื้อ hardware Agility ไม่เกี่ยวกับ Scaling — แต่ข้อสอบมักใส่มาเป็นตัวเลือกหลอก",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "ระวังตัวหลอกในข้อสอบ",
          text: "Agility ≠ Scalability — Agility คือสร้าง resource ได้เร็วเพราะอยู่บน Cloud, ส่วน Scalability/Elasticity คือการขยาย/หดระบบตาม load ถ้าโจทย์ถามเรื่อง 'auto scale ตาม traffic' คำตอบคือ Elasticity ไม่ใช่ Agility",
        },
        {
          type: "callout",
          variant: "info",
          title: "Vertical vs Horizontal",
          text: "<strong>Vertical (Scale Up/Down)</strong> = เครื่องเดิมแต่ spec เปลี่ยน มี hardware limit<br><strong>Horizontal (Scale Out/In)</strong> = spec เดิมแต่จำนวนเครื่องเปลี่ยน ไม่มี limit<br><strong>Elasticity</strong> = Horizontal Scaling แบบ auto",
        },
      ],
    },
    {
      id: "elb-overview",
      title: "Elastic Load Balancing (ELB) Overview",
      content: [
        {
          type: "paragraph",
          text: "<strong>Load Balancer</strong> คือ server ที่รับ traffic จาก user แล้วกระจายไปยัง EC2 instances หลายตัวด้านหลัง ทำให้ไม่มีเครื่องไหนรับ load หนักเกินไป เป็น <strong>Managed Service</strong> ที่ AWS ดูแล upgrade และ maintenance ให้",
        },
        {
          type: "list",
          items: [
            "กระจาย load ข้าม instance / AZ",
            "มี single DNS endpoint ให้ user เชื่อมต่อ",
            "Health check — หยุดส่ง traffic ไปเครื่องที่ล้มเหลว",
            "รองรับ SSL/TLS termination",
            "High availability ข้าม AZ",
            "AWS ดูแล upgrade, maintenance และรับประกัน availability ให้",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "ALB — Application Load Balancer (Layer 7)",
              description:
                "HTTP / HTTPS / WebSocket — routing ตาม URL path, header, query string เหมาะกับ microservices, web apps",
            },
            {
              title: "NLB — Network Load Balancer (Layer 4)",
              description:
                "TCP / UDP / TLS — ultra-low latency, รองรับล้าน request/วินาที, มี Static IP ต่อ AZ",
            },
            {
              title: "GWLB — Gateway Load Balancer (Layer 3)",
              description:
                "ส่ง traffic ผ่าน virtual appliances (firewall, IDS/IPS, deep packet inspection) ก่อนถึง application",
            },
            {
              title: "CLB — Classic Load Balancer (deprecated)",
              description:
                "Layer 4 + 7 รุ่นเดิม — AWS แนะนำย้ายไปใช้ ALB หรือ NLB แทน",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Health Checks",
          text: "ELB ส่ง request ตรวจสอบ instance เป็นระยะ — ถ้า instance ตอบ HTTP 200 ถือว่า healthy, ถ้าไม่ตอบจะหยุดรับ traffic อัตโนมัติ หมายเหตุ: ELB ไม่ terminate instance ที่ unhealthy — แค่หยุดส่ง traffic, ASG ต่างหากที่จะ terminate และ replace",
        },
      ],
    },
    {
      id: "alb",
      title: "Application Load Balancer (ALB)",
      content: [
        {
          type: "paragraph",
          text: "ALB ทำงานที่ <strong>Layer 7 (HTTP/HTTPS)</strong> — สามารถ routing traffic ตาม content ของ request ได้ละเอียด ไม่ใช่แค่ IP/Port",
        },
        {
          type: "list",
          items: [
            "Path-based routing: /users → Target Group A, /payments → Target Group B",
            "Host-based routing: app.example.com → TG A, api.example.com → TG B",
            "Query string routing: ?platform=mobile → Target Group Mobile",
          ],
        },
        {
          type: "paragraph",
          text: "ALB ส่ง traffic ไปยัง <strong>Target Group</strong> ซึ่งประกอบด้วย EC2 Instances (จัดการโดย ASG ได้), ECS Tasks (Container-based), หรือ Lambda Functions (Serverless)",
        },
        {
          type: "callout",
          variant: "warning",
          title: "จำสำหรับสอบ",
          text: "<strong>ALB</strong> = Layer 7, HTTP/HTTPS ดูเนื้อหา request ได้<br><strong>NLB</strong> = Layer 4, TCP/UDP เร็วมาก Static IP<br><strong>GWLB</strong> = Layer 3 ใช้กับ security appliances เท่านั้น",
        },
      ],
    },
    {
      id: "asg-overview",
      title: "Auto Scaling Groups (ASG) Overview",
      content: [
        {
          type: "paragraph",
          text: "<strong>ASG</strong> คือกลุ่มของ EC2 instances ที่ถูก scale out (เพิ่ม) หรือ scale in (ลด) อัตโนมัติตาม load — ทำให้ระบบรองรับ traffic ที่เปลี่ยนแปลงได้โดยไม่ต้องทำเอง",
        },
        {
          type: "grid",
          items: [
            {
              title: "Min Capacity",
              description:
                "จำนวน instance ขั้นต่ำ ห้ามต่ำกว่านี้ เช่น min=1",
            },
            {
              title: "Desired Capacity",
              description:
                "จำนวนที่ต้องการ — ASG พยายามรักษาไว้ที่จำนวนนี้ เช่น desired=2",
            },
            {
              title: "Max Capacity",
              description:
                "จำนวน instance สูงสุด ห้ามเกินนี้ เช่น max=5",
            },
          ],
        },
        {
          type: "list",
          items: [
            "Scale out เมื่อ load เพิ่ม / Scale in เมื่อ load ลด — ใช้ CloudWatch alarms เป็น trigger",
            "Replace instance ที่ unhealthy อัตโนมัติ — รับ health check จาก ELB แล้ว terminate และสร้างใหม่แทน",
            "Register instance ใหม่กับ ELB อัตโนมัติ — instance ใหม่จะถูก add เข้า Target Group ให้เลย",
            "ASG ฟรี — จ่ายแค่ค่า EC2 instances ที่รัน",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Launch Template",
          text: "ASG ต้องรู้ว่าจะสร้าง instance แบบไหน — ใช้ Launch Template เป็น blueprint ที่บอก AMI, instance type, key pair, security group, user data ฯลฯ",
        },
      ],
    },
    {
      id: "launch-template",
      title: "Launch Template — Blueprint ของ ASG",
      content: [
        {
          type: "paragraph",
          text: "<strong>Launch Template</strong> คือ blueprint หรือพิมพ์เขียวที่บอก ASG ว่า 'เวลาสร้าง EC2 instance ใหม่ ให้สร้างแบบไหน' — ASG จะอ่านค่าจาก template ทุกครั้งที่ scale out หรือ replace instance",
        },
        {
          type: "list",
          items: [
            "AMI (Amazon Machine Image) — OS และ software ที่ติดตั้งมาแล้ว",
            "Instance Type — ขนาดเครื่อง เช่น t2.micro, m5.large",
            "Key Pair — สำหรับ SSH เข้าเครื่อง",
            "Security Groups — กฎ firewall เข้า/ออก",
            "EBS Volumes — disk ที่ติดมากับ instance",
            "IAM Role / Instance Profile — สิทธิ์ที่ instance จะใช้เรียก AWS API",
            "User Data — script ที่รันตอน boot ครั้งแรก เช่น install software, config service",
            "Network / Subnet settings",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Launch Template vs Launch Configuration",
          text: "Launch Configuration เป็นรุ่นเก่า AWS แนะนำให้ใช้ Launch Template แทน เพราะรองรับ versioning, mixed instance types, Spot Instances และ feature ใหม่ ๆ ทั้งหมด",
        },
      ],
    },
    {
      id: "asg-strategies",
      title: "ASG Scaling Strategies",
      content: [
        {
          type: "grid",
          items: [
            {
              title: "Manual Scaling",
              description:
                "ปรับตัวเลข desired capacity ด้วยมือ — ง่ายที่สุด เหมาะกับ testing หรือ one-time adjustment",
            },
            {
              title: "Simple / Step Scaling",
              description:
                "กำหนด rule ตาม CloudWatch alarm เช่น 'ถ้า CPU > 70% → เพิ่ม 2 instances' หรือ 'ถ้า CPU < 30% → ลด 1 instance' กำหนดหลาย step ได้",
            },
            {
              title: "Target Tracking Scaling (แนะนำ)",
              description:
                "ง่ายที่สุด — ระบุ metric target แล้ว ASG จัดการให้เอง เช่น 'รักษา Average CPU ไว้ที่ 40%' ASG จะ scale out/in อัตโนมัติเพื่อให้ถึง target",
            },
            {
              title: "Scheduled Scaling",
              description:
                "Scale ตามเวลาที่กำหนดไว้ล่วงหน้า เช่น เช้าจันทร์ 9:00 → min=10, เย็นศุกร์ 18:00 → min=2 เหมาะกับ traffic pattern ที่รู้แล้ว",
            },
            {
              title: "Predictive Scaling (ML)",
              description:
                "AWS วิเคราะห์ historical data ด้วย Machine Learning แล้วคาดการณ์ load ล่วงหน้า pre-scale ก่อน traffic มาถึง ดีกว่า Scheduled เพราะไม่ต้องกำหนดเวลาเอง",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "เลือก Strategy ไหนดี?",
          text: "ส่วนใหญ่แนะนำ Target Tracking เพราะง่ายที่สุด — แค่บอก target metric แล้ว ASG จัดการ scale ให้เอง ไม่ต้องกำหนด rule ซับซ้อน",
        },
      ],
    },
    {
      id: "summary",
      title: "ELB & ASG Summary",
      content: [
        {
          type: "paragraph",
          text: "<strong>ELB</strong> และ <strong>ASG</strong> เป็นคู่หูที่ทำให้ระบบ <em>scale ได้</em> และ <em>tolerant ต่อ failure</em> — ELB กระจาย traffic, ASG ปรับจำนวน instance ตาม load",
        },
        {
          type: "grid",
          items: [
            {
              title: "ALB",
              description:
                "Layer 7 (HTTP/HTTPS) — routing ตาม path, host, header เหมาะกับ microservices",
            },
            {
              title: "NLB",
              description:
                "Layer 4 (TCP/UDP) — ultra-low latency พร้อม Static IP ต่อ AZ",
            },
            {
              title: "GWLB",
              description:
                "Layer 3 — ส่ง traffic ผ่าน security appliances (firewall, IDS/IPS)",
            },
            {
              title: "Health Check",
              description:
                "ELB ตรวจ instance เป็นระยะ และหยุดส่ง traffic ไปเครื่องที่ล้มเหลว",
            },
            {
              title: "ASG Capacity",
              description:
                "Min ≤ Desired ≤ Max — ASG รักษาจำนวน instance ให้อยู่ใน range",
            },
            {
              title: "Launch Template",
              description:
                "Blueprint ของ ASG — AMI, instance type, SG, IAM role, user data",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>ELB</strong> เป็น managed service — AWS ดูแล HA และ upgrade ให้",
            "<strong>ASG</strong> ฟรี — จ่ายแค่ค่า EC2 instance ที่รันจริง",
            "<strong>Target Tracking</strong> เป็น scaling strategy ที่ง่ายและแนะนำที่สุด",
            "<strong>HA</strong> = กระจาย instance ข้ามหลาย AZ ผ่าน ASG + ELB",
            "<strong>Scale Up</strong> (vertical) = spec ใหญ่ขึ้น ส่วน <strong>Scale Out</strong> (horizontal) = จำนวนเครื่องมากขึ้น",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Quick Memory Aid",
          text: "<strong>A</strong>LB = <strong>A</strong>pplication (Layer 7) — <strong>N</strong>LB = <strong>N</strong>etwork (Layer 4) — <strong>G</strong>WLB = <strong>G</strong>ateway (Layer 3, security)",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "elb-q1",
      question:
        "A system can automatically add or remove EC2 instances based on real-time traffic. What is this concept called?",
      options: ["High Availability", "Elasticity (Auto Scaling)", "Fault Tolerance", "Replication"],
      correct: 1,
      explanation:
        "Elasticity is the ability to automatically scale resources (out and in) to match real-time demand. AWS Auto Scaling Groups (ASG) implement elasticity for EC2.",
    },
    {
      id: "elb-q2",
      question:
        "Which AWS load balancer operates at Layer 7 (HTTP/HTTPS) and supports path-based / host-based routing?",
      options: [
        "Classic Load Balancer (CLB)",
        "Application Load Balancer (ALB)",
        "Network Load Balancer (NLB)",
        "Gateway Load Balancer (GWLB)",
      ],
      correct: 1,
      explanation:
        "Application Load Balancer (ALB) operates at Layer 7 — supports HTTP/HTTPS, WebSocket, host-based routing, path-based routing, and routing to multiple target groups (ECS, Lambda, IPs, instances).",
    },
    {
      id: "elb-q3",
      question:
        "Which AWS load balancer is BEST for ultra-low-latency, high-throughput TCP/UDP traffic (e.g., gaming, IoT)?",
      options: [
        "Application Load Balancer",
        "Network Load Balancer",
        "Classic Load Balancer",
        "Gateway Load Balancer",
      ],
      correct: 1,
      explanation:
        "Network Load Balancer (NLB) operates at Layer 4 (TCP/UDP/TLS), provides ultra-low latency and millions of requests per second, and gives a static IP per AZ. Best for non-HTTP, performance-critical workloads.",
    },
    {
      id: "elb-q4",
      question:
        "Which AWS load balancer is used to insert third-party network virtual appliances (firewalls, IDS/IPS, deep packet inspection) into the traffic path?",
      options: [
        "Application Load Balancer",
        "Network Load Balancer",
        "Gateway Load Balancer",
        "Classic Load Balancer",
      ],
      correct: 2,
      explanation:
        "Gateway Load Balancer (GWLB) operates at Layer 3, sending traffic transparently to fleets of third-party security appliances (firewalls, intrusion detection, deep packet inspection) using the GENEVE protocol.",
    },
    {
      id: "elb-q5",
      question:
        "An Auto Scaling Group has min=2, desired=4, max=10. What is the maximum number of instances the ASG can run?",
      options: ["2", "4", "10", "Unlimited"],
      correct: 2,
      explanation:
        "ASG settings: min (lower bound), desired (current target), max (upper bound). Even at peak load, the ASG cannot exceed max=10.",
    },
    {
      id: "elb-q6",
      question:
        "Which Auto Scaling policy adjusts capacity to maintain a target metric value (e.g., 50% average CPU)?",
      options: [
        "Simple Scaling",
        "Step Scaling",
        "Target Tracking Scaling",
        "Manual Scaling",
      ],
      correct: 2,
      explanation:
        "Target Tracking Scaling automatically adjusts capacity to keep a metric (e.g., CPUUtilization, ALBRequestCountPerTarget) at a target value. AWS handles the math — you just specify the target.",
    },
    {
      id: "elb-q7",
      question:
        "What is the main advantage of using an Auto Scaling Group with multiple Availability Zones?",
      options: [
        "Lower cost than a single AZ.",
        "High availability — if one AZ fails, instances in other AZs continue serving traffic.",
        "Faster instance launches.",
        "Required for Lambda integration.",
      ],
      correct: 1,
      explanation:
        "Spanning an ASG across multiple AZs is a fundamental high-availability practice — the ASG can launch replacement instances in healthy AZs if one AZ becomes unavailable.",
    },
    {
      id: "elb-q8",
      question:
        "What does \"sticky sessions\" (session affinity) mean in an Application Load Balancer?",
      options: [
        "All requests from a single client are routed to the same target for the session duration.",
        "The load balancer drops slow connections.",
        "Requests are randomized across all targets equally.",
        "The load balancer caches all responses.",
      ],
      correct: 0,
      explanation:
        "Sticky sessions ensure that a client's requests go to the same backend target (using a cookie). This is useful for stateful applications, but stateless designs are preferred for scalability.",
    },
    {
      id: "elb-q9",
      question:
        "Which feature ensures a load balancer ONLY routes traffic to healthy instances?",
      options: [
        "Sticky sessions",
        "Health checks",
        "Cross-zone load balancing",
        "Listener rules",
      ],
      correct: 1,
      explanation:
        "Load balancer health checks periodically test each target. Unhealthy targets are removed from the rotation; healthy targets continue receiving traffic.",
    },
    {
      id: "elb-q10",
      question:
        "Which load balancer feature distributes traffic evenly across targets in ALL AZs, not just within the same AZ?",
      options: [
        "Cross-Zone Load Balancing",
        "Health Checks",
        "Sticky Sessions",
        "WebSocket",
      ],
      correct: 0,
      explanation:
        "Cross-Zone Load Balancing distributes incoming traffic evenly across all registered targets in all enabled AZs, regardless of which AZ the request originally hit.",
    },
    {
      id: "elb-q11",
      question:
        "What is the difference between scaling out and scaling up?",
      options: [
        "There is no difference.",
        "Scaling out adds more instances (horizontal); scaling up uses a larger instance (vertical).",
        "Scaling up adds more instances; scaling out resizes an instance.",
        "Both terms refer to scaling down.",
      ],
      correct: 1,
      explanation:
        "Horizontal scaling (scale out) = add more instances. Vertical scaling (scale up) = use a larger instance type. ASGs implement horizontal scaling.",
    },
    {
      id: "elb-q12",
      question:
        "Which ELB type is being deprecated and only recommended for legacy workloads using EC2-Classic?",
      options: [
        "Application Load Balancer",
        "Network Load Balancer",
        "Classic Load Balancer (CLB)",
        "Gateway Load Balancer",
      ],
      correct: 2,
      explanation:
        "Classic Load Balancer is the legacy v1 ELB and is being deprecated. AWS recommends ALB or NLB for new workloads.",
    },
    {
      id: "elb-q13",
      question:
        "An ASG should add an instance when CPU > 80% for 5 minutes and remove an instance when CPU < 20% for 10 minutes. Which kind of scaling policy would BEST express this?",
      options: ["Target Tracking", "Step Scaling", "Scheduled Scaling", "Predictive Scaling"],
      correct: 1,
      explanation:
        "Step Scaling lets you define multiple steps based on metric thresholds (e.g., +1 if CPU 60-80%, +2 if 80-100%) — more granular than simple/target tracking.",
    },
    {
      id: "elb-q14",
      question:
        "Which scaling type uses ML to forecast traffic and pre-scale capacity?",
      options: [
        "Simple Scaling",
        "Step Scaling",
        "Target Tracking",
        "Predictive Scaling",
      ],
      correct: 3,
      explanation:
        "Predictive Scaling uses machine learning to analyze historical traffic patterns and pre-launch capacity in anticipation of forecast load — useful for predictable cyclical workloads.",
    },
    {
      id: "elb-q15",
      question:
        "What is the role of an ELB in front of an Auto Scaling Group?",
      options: [
        "To reduce the number of instances.",
        "To distribute incoming traffic evenly across the EC2 instances managed by the ASG.",
        "To replace the ASG.",
        "To encrypt data on EBS volumes.",
      ],
      correct: 1,
      explanation:
        "An ELB in front of an ASG distributes incoming traffic across healthy instances managed by the ASG. The ASG ensures correct capacity; the ELB ensures fair distribution.",
    },
    {
      id: "elb-q16",
      question:
        "Which features can route different URL paths to different backend services on an ALB?",
      options: [
        "Path-based routing",
        "Host-based routing",
        "HTTP header routing",
        "All of the above",
      ],
      correct: 3,
      explanation:
        "ALB supports advanced Layer-7 routing: path-based (e.g., /api/* vs /static/*), host-based (e.g., api.example.com vs www.example.com), and HTTP header- or query-based routing — all via listener rules.",
    },
    {
      id: "elb-q17",
      question:
        "Which is true about NLB IP addresses?",
      options: [
        "NLB only has dynamic public IPs.",
        "NLB provides one static IP per AZ — and supports Elastic IPs.",
        "NLB does not have an IP address.",
        "NLB only supports private IPs.",
      ],
      correct: 1,
      explanation:
        "NLB provides one static IP per AZ (and supports Elastic IPs). This is a key NLB feature — useful for whitelisting or scenarios where stable IPs matter.",
    },
    {
      id: "elb-q18",
      question:
        "What is a Launch Template (vs. legacy Launch Configuration)?",
      options: [
        "A launch template is the legacy way to configure ASG instances.",
        "A launch template is the modern, recommended way to define instance launch parameters (AMI, type, security groups, user data, etc.) — supports versioning.",
        "Launch templates are only for Lambda.",
        "Launch templates can only be used in us-east-1.",
      ],
      correct: 1,
      explanation:
        "Launch Templates are the modern replacement for Launch Configurations. They support versioning, multiple instance types, multiple purchase options (Spot + On-Demand mix), and many newer features.",
    },
    {
      id: "elb-q19",
      question:
        "When does an ASG scale-IN cooldown matter?",
      options: [
        "Before terminating instances after a scale-in event, the ASG waits a specified period before evaluating again — to avoid flapping.",
        "It dictates how often health checks run.",
        "It controls the AZ failover.",
        "It limits the number of new instances per minute.",
      ],
      correct: 0,
      explanation:
        "Cooldown periods prevent the ASG from rapidly scaling in/out repeatedly (flapping). After a scaling activity, the ASG waits the cooldown period before considering another scaling action.",
    },
    {
      id: "elb-q20",
      question:
        "Which protocol does ALB support that allows real-time bidirectional communication between client and server?",
      options: [
        "FTP",
        "WebSocket",
        "SMTP",
        "ICMP",
      ],
      correct: 1,
      explanation:
        "ALB supports HTTP, HTTPS, HTTP/2, and WebSocket — enabling real-time, bidirectional communication for chat apps, multiplayer games, and live dashboards.",
    },
    {
      id: "elb-q21",
      question:
        "Which AWS feature allows ELB to handle SSL/TLS encryption so backend servers don't have to?",
      options: ["WAF", "SSL/TLS termination at the load balancer", "Sticky Sessions", "WebSocket"],
      correct: 1,
      explanation:
        "SSL/TLS termination at the load balancer means the ELB decrypts incoming HTTPS traffic and forwards plain HTTP (or re-encrypted) to backends. Certificates can be managed via AWS Certificate Manager (ACM).",
    },
    {
      id: "elb-q22",
      question:
        "Which target type does an ALB NOT support?",
      options: [
        "EC2 instances",
        "IP addresses (IPv4)",
        "AWS Lambda functions",
        "S3 buckets",
      ],
      correct: 3,
      explanation:
        "ALB targets can be EC2 instances, IP addresses, Lambda functions, or even another ALB. S3 buckets are not ALB targets — S3 is accessed directly.",
    },
    {
      id: "elb-q23",
      question:
        "What is the difference between an ALB target group and a listener?",
      options: [
        "They are the same thing.",
        "A listener checks for incoming traffic on a specific port/protocol; a target group is a set of backend targets that receive routed traffic.",
        "Listeners are only for NLBs.",
        "Target groups are only for HTTPS.",
      ],
      correct: 1,
      explanation:
        "A listener is the entry point: it accepts traffic on a port/protocol and applies routing rules. A target group is the destination: a logical group of backend resources (instances, IPs, Lambda).",
    },
    {
      id: "elb-q24",
      question:
        "In an ASG, when an unhealthy instance is detected, what happens?",
      options: [
        "The instance is rebooted automatically.",
        "The ASG terminates the unhealthy instance and launches a replacement.",
        "The instance stays in the group with errors.",
        "The user is alerted but no action is taken.",
      ],
      correct: 1,
      explanation:
        "ASG continuously monitors instances using EC2 status checks (and optionally ELB health checks). Unhealthy instances are terminated and replaced to maintain the desired capacity.",
    },
    {
      id: "elb-q25",
      question:
        "Which AWS Auto Scaling type is set to scale at specific times (e.g., scale up at 9 AM weekdays, scale down at 6 PM)?",
      options: [
        "Predictive Scaling",
        "Scheduled Scaling",
        "Target Tracking",
        "Step Scaling",
      ],
      correct: 1,
      explanation:
        "Scheduled Scaling lets you define scaling actions at specific dates and times — useful for predictable patterns like business hours, batch jobs, or nightly maintenance.",
    },
  ],
};
