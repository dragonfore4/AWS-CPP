import { TopicData } from "@/types/topic";

export const globalInfrastructure: TopicData = {
  slug: "global-infrastructure",
  title: "Global Infrastructure",
  subtitle: "Route 53, CloudFront & Global Apps",
  accent: "purple",
  emoji: "🌐",
  category: "Networking & Content Delivery",
  description:
    "AWS Global Infrastructure ประกอบด้วย Regions, Availability Zones, และ Edge Locations ทั่วโลก ช่วยให้สร้าง global applications ที่ latency ต่ำ ทนทานต่อ disaster และป้องกัน attack ได้ บทนี้ครอบคลุม Route 53 (DNS), CloudFront (CDN), S3 Transfer Acceleration, Global Accelerator, Outposts, WaveLength และ Local Zones",
  keyPoints: [
    "Regions + AZs + Edge Locations — โครงสร้างหลักของ AWS Global Infrastructure",
    "Route 53 (DNS) + CloudFront (CDN) — บริการหลักสำหรับ global apps",
    "Global Accelerator vs CloudFront — Accelerator ไม่ cache ใช้ AWS network proxy ส่วน CloudFront cache content ที่ edge",
    "Outposts (AWS on-prem), WaveLength (5G edge), Local Zones (ใกล้เมืองใหญ่) — extend AWS ออกนอก region",
  ],
  sections: [
    {
      id: "global-infrastructure",
      title: "Global AWS Infrastructure",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Global Infrastructure</strong> คือโครงสร้างพื้นฐานทางกายภาพของ AWS ที่กระจายอยู่ทั่วโลก ออกแบบมาให้ทั้ง availability สูง, latency ต่ำ และ scalable",
        },
        {
          type: "grid",
          items: [
            {
              title: "AWS Regions",
              description:
                "พื้นที่ทางภูมิศาสตร์สำหรับ deploy applications + infrastructure (เช่น us-east-1, ap-southeast-1) แต่ละ region แยกอิสระจากกัน — เลือก region ตาม compliance, latency, ค่าใช้จ่าย และ services ที่มี",
            },
            {
              title: "Availability Zones (AZ)",
              description:
                "Region หนึ่งประกอบด้วยหลาย AZs (โดยทั่วไป 3 AZs) แต่ละ AZ คือ data center หนึ่งแห่งหรือกลุ่ม data centers ที่แยกอิสระทางกายภาพ ใช้สำหรับ high availability — กระจาย workload ข้าม AZs",
            },
            {
              title: "Edge Locations / Points of Presence",
              description:
                "จุดที่กระจาย content ใกล้ผู้ใช้ — ใช้กับ CloudFront, Global Accelerator, Route 53 มี 400+ แห่งทั่วโลก ครอบคลุม 90+ เมือง — ช่วยลด latency โดยไม่ต้องไปถึง region",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "ทำไมต้องมี 3 ระดับ?",
          text: "<strong>Region</strong> = แยกตามภูมิภาคและ compliance — <strong>AZ</strong> = แยกตาม data center เพื่อ HA ภายใน region — <strong>Edge</strong> = ใกล้ user เพื่อลด latency การส่งมอบ content",
        },
      ],
    },
    {
      id: "why-global",
      title: "Why Build Global Applications",
      content: [
        {
          type: "paragraph",
          text: "การสร้าง <strong>global application</strong> มีประโยชน์หลายอย่างที่ทำให้ AWS เป็นที่นิยม:",
        },
        {
          type: "list",
          items: [
            "<strong>Decreased latency</strong> — ผู้ใช้ทั่วโลกได้ response เร็วขึ้น เพราะ content/service อยู่ใกล้ตัว",
            "<strong>Disaster Recovery (DR)</strong> — ถ้า region หนึ่งล่ม ยังมีอีก region รองรับ workload ต่อได้",
            "<strong>Attack protection</strong> — กระจาย traffic หลายจุดทำให้ DDoS attack สำเร็จยาก ใช้ร่วมกับ Shield, WAF ได้",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>AWS Global Apps Services</strong> คือกลุ่มบริการหลักที่ออกแบบมาเพื่อสร้าง global apps:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Route 53",
              description:
                "Managed DNS service — กระจาย traffic ไปยัง region/endpoint ที่เหมาะสมด้วย routing policies (latency, geolocation, failover)",
            },
            {
              title: "CloudFront",
              description:
                "Content Delivery Network (CDN) — cache content ที่ edge locations ใกล้ user ลด latency การ download/read",
            },
            {
              title: "S3 Transfer Acceleration",
              description:
                "เร่งการ upload ไฟล์เข้า S3 ผ่าน edge location → AWS backbone network เร็วกว่าผ่าน internet ปกติ",
            },
            {
              title: "Global Accelerator",
              description:
                "ใช้ AWS internal global network proxy ไปยัง region — ปรับปรุง performance ของ TCP/UDP apps ได้ static IPs ด้วย",
            },
          ],
        },
      ],
    },
    {
      id: "route53",
      title: "Amazon Route 53",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Route 53</strong> คือ managed DNS service ของ AWS ชื่อ 53 มาจาก port 53 ที่ DNS ใช้งาน — เป็น highly available, scalable และเป็น service เดียวของ AWS ที่มี <strong>100% Availability SLA</strong>",
        },
        {
          type: "list",
          items: [
            "<strong>A Record</strong> — ชี้ hostname ไป IPv4 address",
            "<strong>AAAA Record</strong> — ชี้ hostname ไป IPv6 address",
            "<strong>CNAME</strong> — ชี้ hostname ไป hostname อื่น (ไม่สามารถใช้กับ root domain เช่น example.com)",
            "<strong>Alias</strong> — เฉพาะ Route 53 — ชี้ hostname ไป AWS resource (ELB, CloudFront, S3, RDS) ใช้กับ root domain ได้และฟรี!",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Alias vs CNAME",
          text: "<strong>CNAME</strong> ใช้กับ root domain ไม่ได้ (example.com ✗) — <strong>Alias</strong> ใช้กับ root domain ได้ (example.com ✓) ฟรี ชี้ไป AWS resources ได้ ข้อสอบชอบถาม!",
        },
        {
          type: "paragraph",
          text: "<strong>Routing Policies</strong> — กำหนดวิธีที่ Route 53 ตอบ DNS queries:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Simple",
              description:
                "ชี้ไป resource เดียว (หรือหลาย values → client เลือก random) ไม่มี health check — ง่ายที่สุด",
            },
            {
              title: "Weighted",
              description:
                "กระจาย traffic ตาม weight ที่กำหนด — เช่น 70% ไป A, 30% ไป B เหมาะกับ canary deployment / A/B testing",
            },
            {
              title: "Latency-based",
              description:
                "Route ไป region ที่มี network latency ต่ำสุดสำหรับ user — เหมาะกับ global app ที่ deploy หลาย region ต้องการให้ user ทุกคนเร็วที่สุด",
            },
            {
              title: "Failover",
              description:
                "Active-Passive setup — ปกติไป primary, ถ้า health check fail จะ failover ไป secondary อัตโนมัติ ต้องใช้คู่กับ Health Checks",
            },
            {
              title: "Geolocation",
              description:
                "Route ตาม location ของ user (ประเทศ/ทวีป) — เหมาะกับ content localization, restrict distribution ตามกฎหมาย",
            },
            {
              title: "Multi-Value Answer",
              description:
                "คืน multiple values (สูงสุด 8) พร้อม health check แต่ละตัว — ไม่ใช่ ELB replacement แต่เป็น client-side load balancing แบบง่าย",
            },
            {
              title: "Geoproximity",
              description:
                "Route ตามระยะห่างทางภูมิศาสตร์ของ user กับ resource สามารถปรับ bias เพื่อขยาย/หดพื้นที่ที่ route ไป region ใด region หนึ่งได้",
            },
          ],
        },
        {
          type: "paragraph",
          text: "<strong>Health Checks</strong> — Route 53 ตรวจสอบ health ของ endpoints อัตโนมัติ ใช้คู่กับ <strong>Failover routing</strong> เพื่อ route traffic ไปเฉพาะ healthy endpoints",
        },
        {
          type: "list",
          items: [
            "ตรวจสอบ endpoint โดยตรง (HTTP, HTTPS, TCP) จาก health checkers ทั่วโลก",
            "ตรวจสอบ CloudWatch Alarm — ใช้กับ private resources",
            "Calculated health checks — รวมหลาย checks ด้วย AND/OR/NOT",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>Domain Registration</strong> — Route 53 ทำหน้าที่เป็น Domain Registrar ด้วย จดทะเบียน domain ใหม่ได้ตรงจาก AWS console รองรับหลาย TLD (.com, .net, .org, .io ฯลฯ) จัดการ DNS records ได้ที่เดียว",
        },
      ],
    },
    {
      id: "cloudfront",
      title: "Amazon CloudFront",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon CloudFront</strong> คือ Content Delivery Network (CDN) ปรับปรุง read performance โดย <strong>cache content ที่ edge</strong> มี <strong>216+ Points of Presence</strong> ทั่วโลก พร้อม DDoS protection ในตัว (integrate กับ Shield + WAF)",
        },
        {
          type: "list",
          items: [
            "ปรับปรุง <strong>read performance</strong> — content cache ที่ edge ใกล้ user",
            "<strong>DDoS protection</strong> ในตัวด้วย AWS Shield Standard (ฟรี) — ใช้คู่กับ AWS WAF สำหรับ Layer 7",
            "รองรับ HTTPS ทั้ง viewer↔Edge และ Edge↔Origin (ใช้ ACM cert ฟรี)",
            "Geo Restriction — allow/block users จาก country ที่กำหนด",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>CloudFront Origins</strong> — แหล่งของ content ที่ CloudFront ไปดึงมา cache:",
        },
        {
          type: "grid",
          items: [
            {
              title: "S3 Bucket",
              description:
                "สำหรับ static files (images, CSS, JS, video) ใช้ร่วมกับ <strong>OAI (Origin Access Identity)</strong> หรือใหม่กว่าคือ <strong>OAC (Origin Access Control)</strong> เพื่อบังคับให้ access ผ่าน CloudFront เท่านั้น ไม่ให้ bypass ไป S3 ตรงๆ",
            },
            {
              title: "Custom Origin (HTTP)",
              description:
                "HTTP backend ใดๆ ก็ได้ — ALB, EC2 (public), S3 website endpoint, on-prem server, หรือ HTTP server นอก AWS ขอแค่เข้าถึงผ่าน HTTP/HTTPS ได้",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "OAI vs OAC",
          text: "OAI เป็น legacy ส่วน OAC เป็น recommended ในปัจจุบัน OAC รองรับ SSE-KMS encryption และ dynamic requests ได้ดีกว่า ใช้ AWS:SourceArn condition ใน S3 bucket policy",
        },
        {
          type: "paragraph",
          text: "<strong>CloudFront vs S3 Cross-Region Replication (CRR)</strong> — สองวิธีในการกระจาย content แต่ใช้ scenario ต่างกัน:",
        },
        {
          type: "grid",
          items: [
            {
              title: "CloudFront",
              description:
                "Global edge network — file ถูก cache ที่ edge locations ทั่วโลกตาม TTL เหมาะกับ <strong>static content</strong> ที่ต้อง available ทุกที่ ไม่ต้อง setup ทีละ region — auto cover ทั่วโลก",
            },
            {
              title: "S3 CRR",
              description:
                "ต้อง setup replication per region (source → destination bucket) update แบบ near real-time, files เป็น read-only ในการ replicate เหมาะกับ <strong>dynamic content</strong> ที่ต้องการ low-latency ใน few specific regions",
            },
          ],
        },
      ],
    },
    {
      id: "s3-transfer-acceleration",
      title: "S3 Transfer Acceleration",
      content: [
        {
          type: "paragraph",
          text: "<strong>S3 Transfer Acceleration</strong> เร่งการ <strong>upload/download ไฟล์เข้า/ออก S3</strong> โดย route ผ่าน edge location ที่ใกล้ user ที่สุด แล้วส่งต่อไปยัง S3 region ผ่าน AWS backbone network",
        },
        {
          type: "list",
          items: [
            "User → ส่ง file ไปยัง edge location ที่ใกล้สุด (public internet สั้นๆ)",
            "Edge location → forward ผ่าน <strong>AWS internal backbone network</strong> ที่เร็วและ stable ไปยัง S3 bucket region",
            "เป็นการ enable feature บน <strong>S3 bucket เดิม</strong> — ไม่ต้องสร้าง bucket ใหม่ ไม่เปลี่ยน URL",
            "เหมาะกับการ upload ไฟล์ขนาดใหญ่ข้าม region ทั่วโลก",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Transfer Acceleration vs CloudFront",
          text: "<strong>Transfer Acceleration</strong> = เร่ง upload/download ใน S3 (bucket เดียว ผ่าน edge) — <strong>CloudFront</strong> = CDN cache content ที่ edge สำหรับการอ่านซ้ำๆ",
        },
      ],
    },
    {
      id: "global-accelerator",
      title: "AWS Global Accelerator",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Global Accelerator</strong> ปรับปรุง availability + performance ของ global apps โดยใช้ <strong>AWS global internal network</strong> (ปรับปรุงได้ถึง 60%) แทน public internet",
        },
        {
          type: "list",
          items: [
            "สร้าง <strong>2 Anycast IPs</strong> ให้ application — IPs เดียวที่ใช้ทั่วโลก (deterministic, ไม่เปลี่ยน)",
            "Traffic จาก user → ไปยัง edge location ที่ใกล้ที่สุด (Anycast routing)",
            "Edge location → forward ผ่าน <strong>AWS private network</strong> ไปยัง application ใน region ที่กำหนด",
            "รองรับ failover ระหว่าง regions แบบ deterministic (ภายในวินาที)",
            "เหมาะกับ TCP / UDP applications, gaming, IoT, voice/video",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>Global Accelerator vs CloudFront</strong> — ทั้งคู่ใช้ AWS global network และ edge locations + รองรับ Shield ป้องกัน DDoS แต่ใช้คนละ scenario:",
        },
        {
          type: "grid",
          items: [
            {
              title: "CloudFront",
              description:
                "<strong>Caches content</strong> ที่ edge locations — content ถูก serve จาก edge เลย (cache hit) เหมาะกับ static content (images, videos, web assets) และ dynamic content ที่ cache ได้ — content delivery + acceleration",
            },
            {
              title: "Global Accelerator",
              description:
                "<strong>ไม่ caches content</strong> — แค่ proxy packets ที่ edge แล้วส่งต่อไปยัง app ใน region ผ่าน AWS network ปรับปรุง performance ของ TCP/UDP เหมาะกับ HTTP apps ที่ต้องการ <strong>static IPs</strong> หรือ <strong>deterministic regional failover</strong>",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "ข้อสอบจำง่ายๆ",
          text: "<strong>CloudFront</strong> = cache content (อ่าน/download) — <strong>Global Accelerator</strong> = no cache แค่ proxy ผ่าน AWS network (TCP/UDP, static IPs, gaming, voice)",
        },
      ],
    },
    {
      id: "outposts",
      title: "AWS Outposts",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Outposts</strong> คือ <strong>hybrid cloud</strong> — AWS infrastructure + services + APIs + tools ส่งมอบมาในรูปแบบ rack ติดตั้งใน <strong>data center ของลูกค้า</strong> (on-premises) AWS เป็นคนติดตั้งและดูแล hardware นั้นๆ ให้",
        },
        {
          type: "list",
          items: [
            "AWS setup + manage <strong>Outposts Racks</strong> ภายใน DC ของลูกค้า",
            "ลูกค้าใช้ AWS services เดิม (EC2, EBS, S3, RDS, ECS) ได้บน on-prem hardware",
            "<strong>ลูกค้ารับผิดชอบ physical security</strong> ของ rack",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>ประโยชน์ของ Outposts</strong>:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Low-latency access on-prem",
              description:
                "Application ที่ on-prem ติดต่อกับ AWS services ที่ on-prem ด้วย latency ต่ำมาก (ms ระดับเดียว)",
            },
            {
              title: "Local data processing",
              description:
                "ประมวลผลข้อมูลใน DC ของตัวเอง ไม่ต้องส่งทุก byte ไป cloud — ประหยัด bandwidth",
            },
            {
              title: "Data residency",
              description:
                "ข้อมูลอยู่ในประเทศ/DC ของลูกค้าตามกฎหมาย compliance (เช่น healthcare, financial)",
            },
            {
              title: "Easier migration",
              description:
                "ใช้ AWS APIs/tools เดียวกัน on-prem และ cloud — ย้าย workload ไปมาง่าย",
            },
            {
              title: "Fully managed by AWS",
              description:
                "AWS update, monitor, replace hardware ให้ — ไม่ต้องจัดการ infrastructure เอง",
            },
          ],
        },
      ],
    },
    {
      id: "wavelength",
      title: "AWS WaveLength",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS WaveLength</strong> คือการนำ AWS infrastructure ไปติดตั้ง <strong>embedded ใน 5G telco network</strong> ที่ edge ของผู้ให้บริการเครือข่าย — สำหรับ application ที่ต้องการ <strong>ultra-low latency</strong>",
        },
        {
          type: "list",
          items: [
            "นำ AWS services (EC2, EBS, VPC) ไปอยู่ที่ <strong>5G edge</strong>",
            "Traffic จาก mobile user → ไม่ต้องออกจาก <strong>Communication Service Provider's network</strong> → เข้าถึง app ได้ตรงๆ ที่ edge",
            "Ultra-low latency (single-digit ms) สำหรับ mobile apps",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>Use cases</strong>:",
        },
        {
          type: "list",
          items: [
            "Smart cities — IoT sensors, traffic management แบบ real-time",
            "ML diagnostics — medical imaging แบบ on-the-go",
            "Connected vehicles — autonomous driving, V2X communication",
            "AR / VR — immersive experiences ที่ต้องการ latency ต่ำมาก",
            "Real-time multiplayer gaming บน mobile",
          ],
        },
      ],
    },
    {
      id: "local-zones",
      title: "AWS Local Zones",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Local Zones</strong> นำ AWS services (เลือกบาง services) ไปติดตั้งใกล้ end users ใน <strong>เมืองที่มีประชากรหนาแน่น</strong> เช่น Los Angeles, Houston, Miami, Boston",
        },
        {
          type: "list",
          items: [
            "เป็นส่วนขยายของ AWS Region แม่ — เชื่อมกับ region ปกติด้วย AWS network ที่เร็ว",
            "ให้ <strong>single-digit millisecond latency</strong> สำหรับ users ในพื้นที่นั้น",
            "ใช้ services ที่เลือกได้ เช่น EC2, EBS, FSx, ELB, RDS, ECS, EKS",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>Use cases</strong>:",
        },
        {
          type: "list",
          items: [
            "Real-time gaming — latency ต่ำสุดสำหรับผู้เล่นในเมือง",
            "Live video streaming + processing",
            "Machine Learning inference ที่ต้องการ response เร็ว",
            "AR / VR experiences",
            "Media + entertainment workflows ที่ต้องการ low-latency",
          ],
        },
      ],
    },
    {
      id: "summary",
      title: "Summary",
      content: [
        {
          type: "paragraph",
          text: "สรุปบริการในกลุ่ม Global Infrastructure — ใช้บริการไหนสำหรับ scenario แบบไหน:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Route 53",
              description:
                "<strong>Global DNS</strong> — แปลง domain → IP/resource มี routing policies หลายแบบ (latency, geolocation, failover) + health checks ใช้ทำ smart routing สำหรับ global app",
            },
            {
              title: "CloudFront",
              description:
                "<strong>CDN / Cache at edge</strong> — cache static + dynamic content ที่ edge ลด latency การอ่าน เหมาะกับ web/media content delivery ทั่วโลก",
            },
            {
              title: "S3 Transfer Acceleration",
              description:
                "<strong>เร่ง S3 uploads</strong> — route ผ่าน edge → AWS backbone ไปยัง S3 region เหมาะกับ upload ไฟล์ใหญ่ข้าม region",
            },
            {
              title: "Global Accelerator",
              description:
                "<strong>AWS network proxy</strong> — ไม่ cache แต่ใช้ AWS internal network + Anycast IPs ปรับปรุง performance ของ TCP/UDP apps พร้อม static IPs",
            },
            {
              title: "AWS Outposts",
              description:
                "<strong>AWS on-premises</strong> — AWS rack ใน DC ของลูกค้า ใช้ AWS services on-prem ด้วย low-latency เหมาะกับ data residency / hybrid cloud",
            },
            {
              title: "AWS WaveLength",
              description:
                "<strong>5G edge</strong> — AWS embedded ใน 5G telco network ultra-low latency สำหรับ mobile apps (AR/VR, gaming, connected vehicles)",
            },
            {
              title: "AWS Local Zones",
              description:
                "<strong>ใกล้เมืองใหญ่</strong> — AWS services ในเมืองที่มีประชากรหนาแน่น single-digit ms latency สำหรับ gaming, ML inference, video processing",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>Regions + AZs + Edge Locations</strong> — โครงสร้างหลัก 3 ระดับของ AWS Global Infrastructure",
            "<strong>Route 53</strong> เป็น service เดียวของ AWS ที่มี 100% Availability SLA",
            "<strong>CloudFront vs Global Accelerator</strong> — CloudFront cache content ที่ edge ส่วน Global Accelerator ไม่ cache แค่ proxy ผ่าน AWS network",
            "<strong>Outposts / WaveLength / Local Zones</strong> — extend AWS ออกนอก region ไปยัง on-prem / 5G / เมืองใหญ่",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Decision Cheatsheet",
          text: "Static content ทั่วโลก → <strong>CloudFront</strong> — TCP/UDP app + static IPs → <strong>Global Accelerator</strong> — Upload ไฟล์ใหญ่เข้า S3 → <strong>Transfer Acceleration</strong> — Smart DNS routing → <strong>Route 53</strong>",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "gi-q1",
      question:
        "An application is deployed in 4 regions worldwide. Users should be routed to the region with the lowest network latency. Which Route 53 routing policy?",
      options: [
        "Simple",
        "Weighted",
        "Latency-based",
        "Geolocation",
      ],
      correct: 2,
      explanation:
        "Route 53 Latency-based routing directs users to the AWS region that provides the lowest network latency for their location.",
    },
    {
      id: "gi-q2",
      question:
        "Which Route 53 routing policy lets you direct users based on the geographic location of the requester (e.g., 'all European users go to eu-west-1')?",
      options: [
        "Latency-based",
        "Geolocation",
        "Geoproximity",
        "Failover",
      ],
      correct: 1,
      explanation:
        "Geolocation routing directs traffic based on the user's location (continent, country, or US state). Useful for compliance / language localization.",
    },
    {
      id: "gi-q3",
      question:
        "Which Route 53 routing policy directs traffic based on the geographic distance between the user and the resource, with optional bias?",
      options: [
        "Geolocation",
        "Latency-based",
        "Geoproximity (Traffic Flow only)",
        "Multivalue answer",
      ],
      correct: 2,
      explanation:
        "Geoproximity routing (only via Traffic Flow) routes based on the geographic distance between users and AWS resources, with a bias factor that lets you shift traffic toward or away from a region.",
    },
    {
      id: "gi-q4",
      question:
        "Which AWS service is the global content delivery network (CDN)?",
      options: [
        "Amazon CloudFront",
        "Amazon Route 53",
        "AWS Global Accelerator",
        "AWS Direct Connect",
      ],
      correct: 0,
      explanation:
        "Amazon CloudFront is AWS's global CDN — caches content at 400+ Edge Locations worldwide for low-latency delivery, with built-in DDoS protection (AWS Shield Standard).",
    },
    {
      id: "gi-q5",
      question:
        "Which AWS service provides static IPs and uses the AWS global network to improve performance and availability of applications globally (TCP/UDP)?",
      options: [
        "AWS Global Accelerator",
        "Amazon CloudFront",
        "Amazon Route 53",
        "AWS Direct Connect",
      ],
      correct: 0,
      explanation:
        "AWS Global Accelerator provides 2 anycast static IPs that route over the AWS global backbone to your nearest healthy endpoint — for non-HTTP TCP/UDP applications, gaming, etc.",
    },
    {
      id: "gi-q6",
      question:
        "What is an AWS Region?",
      options: [
        "A single data center.",
        "A physical geographic location consisting of multiple, isolated Availability Zones.",
        "An edge cache location.",
        "A type of EC2 instance.",
      ],
      correct: 1,
      explanation:
        "An AWS Region is a physical location worldwide containing multiple isolated Availability Zones (typically 3+). Examples: us-east-1, eu-west-1, ap-southeast-1.",
    },
    {
      id: "gi-q7",
      question:
        "What is an AWS Availability Zone?",
      options: [
        "A region.",
        "One or more discrete data centers with redundant power, networking, and connectivity in an AWS Region — physically separated.",
        "An edge cache.",
        "A type of EC2 instance.",
      ],
      correct: 1,
      explanation:
        "An AZ is one or more discrete data centers in a Region, physically separated (km apart) and connected by high-bandwidth, low-latency private fiber.",
    },
    {
      id: "gi-q8",
      question:
        "What is an AWS Edge Location?",
      options: [
        "A small data center used for backups.",
        "A point of presence (PoP) where CloudFront, Route 53, and other services cache content close to end users.",
        "A type of EC2 instance.",
        "A region with only 1 AZ.",
      ],
      correct: 1,
      explanation:
        "Edge Locations are AWS Points of Presence (PoPs) used by CloudFront for caching, Route 53 for DNS, and other edge services. There are 400+ edge locations vs ~30 regions.",
    },
    {
      id: "gi-q9",
      question:
        "Which Route 53 routing policy splits traffic across resources based on a percentage you set (e.g., 80% to instance A, 20% to instance B)?",
      options: [
        "Latency-based",
        "Weighted",
        "Geolocation",
        "Failover",
      ],
      correct: 1,
      explanation:
        "Weighted routing splits traffic among multiple resources by percentages you assign — useful for blue/green deployments, canary releases, A/B testing.",
    },
    {
      id: "gi-q10",
      question:
        "Which Route 53 routing policy supports a primary + secondary setup with health checks for active-passive failover?",
      options: [
        "Failover",
        "Weighted",
        "Latency-based",
        "Geolocation",
      ],
      correct: 0,
      explanation:
        "Failover routing routes to a primary resource as long as it's healthy; if it fails (per Route 53 health checks), traffic fails over to a secondary.",
    },
    {
      id: "gi-q11",
      question:
        "Which Route 53 routing policy returns multiple values (up to 8) and lets the client choose, with health checks per record?",
      options: [
        "Weighted",
        "Multivalue Answer",
        "Latency-based",
        "Simple",
      ],
      correct: 1,
      explanation:
        "Multivalue Answer routing returns up to 8 healthy records per query, with optional health checks. NOT a substitute for an ELB but useful for client-side load balancing.",
    },
    {
      id: "gi-q12",
      question:
        "Which AWS service provides DNS web service?",
      options: [
        "Amazon Route 53",
        "Amazon CloudFront",
        "AWS Global Accelerator",
        "Amazon API Gateway",
      ],
      correct: 0,
      explanation:
        "Amazon Route 53 is AWS's authoritative DNS service. Supports many routing policies, health checks, traffic flow, and a 100% uptime SLA.",
    },
    {
      id: "gi-q13",
      question:
        "Which Route 53 record type maps a domain to an AWS resource (like ELB or CloudFront) without requiring an IP address?",
      options: [
        "A record",
        "Alias record",
        "CNAME record",
        "MX record",
      ],
      correct: 1,
      explanation:
        "Route 53 Alias records map directly to AWS resources (ELB, CloudFront, S3 static site, API Gateway, RDS, etc.) — they work at the apex/zone root (unlike CNAME) and have no extra cost.",
    },
    {
      id: "gi-q14",
      question:
        "Which AWS service provides dedicated, private, low-latency connectivity from on-premises to AWS (1 Gbps to 100 Gbps), bypassing the public internet?",
      options: [
        "AWS Direct Connect",
        "AWS Site-to-Site VPN",
        "AWS Global Accelerator",
        "AWS Transit Gateway",
      ],
      correct: 0,
      explanation:
        "AWS Direct Connect provides dedicated network connection from your data center to AWS — predictable performance, lower data egress costs, and private (does not traverse the public internet).",
    },
    {
      id: "gi-q15",
      question:
        "Which Direct Connect option provides faster, lower-cost setup using a Direct Connect Partner's existing connection?",
      options: [
        "Dedicated Connection",
        "Hosted Connection",
        "VPN",
        "Backbone Connection",
      ],
      correct: 1,
      explanation:
        "A Hosted Connection comes from a Direct Connect Partner who already has a connection to AWS — you get a slice (50 Mbps to 10 Gbps). Cheaper and faster setup than a Dedicated Connection.",
    },
    {
      id: "gi-q16",
      question:
        "Which AWS service is BEST for distributing user requests across multiple AWS regions with intelligent failover?",
      options: [
        "Route 53 latency or geolocation routing, OR AWS Global Accelerator",
        "Amazon ECS",
        "AWS Lambda",
        "Amazon RDS",
      ],
      correct: 0,
      explanation:
        "Both Route 53 (DNS-based) and Global Accelerator (anycast IP, layer-4) can route users across regions. Global Accelerator is faster failover (~30s) using AWS backbone; Route 53 is DNS with TTL-based propagation.",
    },
    {
      id: "gi-q17",
      question:
        "Which AWS service is the encrypted IPsec VPN connection from on-premises to a VPC?",
      options: [
        "AWS Site-to-Site VPN",
        "AWS Client VPN",
        "AWS Direct Connect",
        "AWS Transit Gateway",
      ],
      correct: 0,
      explanation:
        "AWS Site-to-Site VPN provides an IPsec VPN tunnel between your on-premises network and your AWS VPC. Quick to set up; runs over the public internet.",
    },
    {
      id: "gi-q18",
      question:
        "Which AWS service is a remote-access OpenVPN-based VPN for individual users to connect to AWS?",
      options: [
        "AWS Site-to-Site VPN",
        "AWS Client VPN",
        "AWS Direct Connect",
        "AWS Transit Gateway",
      ],
      correct: 1,
      explanation:
        "AWS Client VPN is an OpenVPN-based remote access solution — individual users (employees) connect from laptops to a VPC. Supports MFA and AD integration.",
    },
    {
      id: "gi-q19",
      question:
        "Which AWS service is a network transit hub that connects multiple VPCs and on-premises networks through a central gateway?",
      options: [
        "AWS Transit Gateway",
        "VPC Peering",
        "AWS Direct Connect",
        "AWS PrivateLink",
      ],
      correct: 0,
      explanation:
        "AWS Transit Gateway is a regional, central hub-and-spoke router that interconnects VPCs and on-prem networks. Replaces the complexity of full-mesh VPC peering at scale.",
    },
    {
      id: "gi-q20",
      question:
        "Which AWS service is a private DNS forwarder for hybrid cloud DNS resolution between on-premises and VPC?",
      options: [
        "Route 53 Resolver",
        "Amazon CloudFront",
        "AWS Direct Connect",
        "AWS Global Accelerator",
      ],
      correct: 0,
      explanation:
        "Route 53 Resolver enables hybrid DNS — inbound endpoints (on-prem can resolve VPC names) and outbound endpoints (VPC resources can resolve on-prem names).",
    },
    {
      id: "gi-q21",
      question:
        "Which is true about CloudFront's behavior at the edge?",
      options: [
        "It only caches HTML.",
        "Edge locations cache copies of content (objects, video, APIs) close to users — cache hit returns content instantly; miss fetches from origin and caches.",
        "It serves dynamic content only.",
        "It only works for S3 origins.",
      ],
      correct: 1,
      explanation:
        "CloudFront caches content at edge locations: cache hit = instant delivery; cache miss = fetch from origin (S3, ALB, EC2, custom HTTP) and store. Origins can be AWS or non-AWS.",
    },
    {
      id: "gi-q22",
      question:
        "Which AWS service is a fully managed DNS-based service mesh and service discovery for microservices?",
      options: [
        "AWS Cloud Map",
        "AWS Service Catalog",
        "AWS Route 53",
        "Amazon CloudFront",
      ],
      correct: 0,
      explanation:
        "AWS Cloud Map is a cloud resource discovery service — register resources with custom names, and applications discover them dynamically.",
    },
    {
      id: "gi-q23",
      question:
        "Which is the TCP/UDP performance benefit of using AWS Global Accelerator?",
      options: [
        "It encrypts everything.",
        "It uses the AWS global private backbone to route traffic, avoiding internet hops, reducing latency and packet loss, and providing automatic failover.",
        "It increases storage capacity.",
        "It speeds up DNS only.",
      ],
      correct: 1,
      explanation:
        "Global Accelerator routes traffic over AWS's optimized global backbone (rather than the public internet) — improves latency, jitter, and provides fast (~30s) failover via health checks.",
    },
    {
      id: "gi-q24",
      question:
        "When choosing AWS regions to deploy resources, which factors should you consider?",
      options: [
        "Compliance / data residency requirements, latency to users, service availability, pricing.",
        "Only cost.",
        "Only customer location.",
        "Random choice.",
      ],
      correct: 0,
      explanation:
        "Region selection considers: (1) data residency / compliance, (2) latency, (3) service availability (not all services in all regions), (4) pricing.",
    },
    {
      id: "gi-q25",
      question:
        "What is the typical number of Availability Zones in an AWS Region?",
      options: [
        "Always exactly 1",
        "2 minimum",
        "3 or more (typically 3-6)",
        "1-100 randomly",
      ],
      correct: 2,
      explanation:
        "Most AWS Regions have 3 or more AZs (some have up to 6). AWS recommends spanning workloads across multiple AZs for high availability.",
    },
  ],
};
