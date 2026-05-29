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
      id: "elb-asg-q1",
      question:
        "ระบบสามารถเพิ่ม/ลดจำนวน EC2 instances อัตโนมัติตาม traffic จริง — แนวคิดนี้เรียกว่าอะไร?",
      options: [
        "High Availability — ระบบยังทำงานได้แม้ AZ ล่ม",
        "Agility — สร้าง resource ใหม่ได้เร็วเพราะอยู่บน Cloud",
        "Elasticity — Horizontal Scaling แบบ auto ตาม load จริง จ่ายตามใช้งาน",
        "Vertical Scaling — เพิ่ม spec ของเครื่องเดิม",
      ],
      correct: 2,
      explanation:
        "Elasticity = ความสามารถ scale อัตโนมัติตาม load จริง (เพิ่มเมื่อ traffic สูง ลดเมื่อ traffic ต่ำ) จ่ายตามใช้งาน | HA = ทนต่อการล่ม (กระจายหลาย AZ) | Agility = สร้าง resource ได้เร็ว (ตัวหลอกในข้อสอบ ไม่เกี่ยว scaling) | Vertical Scaling = เปลี่ยน spec เครื่องเดิม ไม่ใช่ auto",
    },
    {
      id: "elb-asg-q2",
      question:
        "ALB ทำงานที่ Layer ใด และ NLB ทำงานที่ Layer ใดของ OSI Model?",
      options: [
        "ALB = Layer 4, NLB = Layer 7",
        "ALB = Layer 7, NLB = Layer 4",
        "ALB = Layer 3, NLB = Layer 4",
        "ALB = Layer 7, NLB = Layer 3",
      ],
      correct: 1,
      explanation:
        "ALB (Application Load Balancer) ทำงานที่ Layer 7 (HTTP/HTTPS) สามารถ routing ตาม URL path, header, query string ได้ ส่วน NLB (Network Load Balancer) ทำงานที่ Layer 4 (TCP/UDP) ให้ ultra-low latency และ Static IP",
    },
    {
      id: "elb-asg-q3",
      question:
        "ใน Auto Scaling Group ค่า Min, Desired, Max capacity หมายความว่าอย่างไร?",
      options: [
        "Min = CPU ขั้นต่ำ, Desired = CPU ที่ต้องการ, Max = CPU สูงสุด",
        "Min = จำนวน instance ขั้นต่ำที่ห้ามต่ำกว่า, Desired = จำนวนที่ ASG พยายามรักษา, Max = จำนวนสูงสุดที่ห้ามเกิน",
        "Min = ราคาขั้นต่ำ, Desired = งบประมาณ, Max = ราคาสูงสุด",
        "Min = AZ ขั้นต่ำ, Desired = AZ ที่ต้องการ, Max = AZ สูงสุด",
      ],
      correct: 1,
      explanation:
        "Min capacity คือจำนวน instance ขั้นต่ำที่ ASG จะไม่ลดต่ำกว่านี้ Desired capacity คือจำนวนที่ ASG พยายามรักษาไว้ตลอดเวลา และ Max capacity คือจำนวนสูงสุดที่ ASG จะไม่สร้างเกินนี้แม้ load จะสูงมาก",
    },
    {
      id: "elb-asg-q4",
      question:
        "Target Tracking Scaling ทำงานอย่างไร และทำไมถึงแนะนำเป็นอันดับแรก?",
      options: [
        "ต้องกำหนด CloudWatch alarm rule หลายข้อ ซึ่งยืดหยุ่นที่สุด",
        "ใช้ ML คาดการณ์ traffic ล่วงหน้าแล้ว pre-scale ให้",
        "แค่ระบุ metric target (เช่น CPU 40%) แล้ว ASG จัดการ scale out/in เองอัตโนมัติ — ง่ายที่สุดไม่ต้องกำหนด rule",
        "ตั้งเวลา scale ล่วงหน้าตาม pattern ที่รู้แล้ว",
      ],
      correct: 2,
      explanation:
        "Target Tracking Scaling ง่ายที่สุด — แค่ระบุ metric target เช่น 'รักษา Average CPU ไว้ที่ 40%' แล้ว ASG จะจัดการ scale out/in เองอัตโนมัติเพื่อให้ metric ใกล้เคียง target ไม่ต้องกำหนด alarm rule ซับซ้อน",
    },
    {
      id: "elb-asg-q5",
      question:
        "ELB Health Check ทำงานอย่างไรเมื่อตรวจพบว่า instance ไม่ healthy?",
      options: [
        "ELB จะ terminate instance นั้นทันทีและสร้างใหม่",
        "ELB หยุดส่ง traffic ไปยัง instance นั้น แต่ไม่ terminate — ASG เป็นคนที่ terminate และ replace instance",
        "ELB จะ restart instance นั้นอัตโนมัติ",
        "ELB จะส่ง notification ไปยัง admin แต่ยังส่ง traffic ต่อ",
      ],
      correct: 1,
      explanation:
        "ELB ทำหน้าที่แค่หยุดส่ง traffic ไปยัง instance ที่ unhealthy (ไม่ตอบ HTTP 200) จนกว่าจะ healthy อีกครั้ง ELB ไม่มีสิทธิ์ terminate instance — หน้าที่ terminate instance ที่ unhealthy และสร้างใหม่แทนเป็นของ ASG",
    },
  ],
};
