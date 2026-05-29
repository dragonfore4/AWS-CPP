import { TopicData } from "@/types/topic";

export const advancedIdentity: TopicData = {
  slug: "advanced-identity",
  title: "Advanced Identity",
  subtitle: "STS, Cognito, Directory Services & SSO",
  accent: "pink",
  emoji: "\ud83d\udd11",
  category: "Security, Identity & Compliance",
  description:
    "บริการด้าน identity ระดับสูงของ AWS ที่ไปไกลกว่า IAM พื้นฐาน — ครอบคลุม STS (temporary credentials), Cognito (app users), Directory Services (Active Directory) และ IAM Identity Center (SSO หลาย account) เพื่อรองรับ external users, mobile/web apps, on-prem AD และ multi-account environment",
  keyPoints: [
    "STS \u2014 temporary credentials สำหรับ federation, cross-account และ EC2 roles",
    "Cognito \u2014 จัดการ identity ให้ผู้ใช้ web/mobile app (User Pools + Identity Pools)",
    "Directory Services \u2014 เชื่อมกับ Microsoft Active Directory (Managed AD, AD Connector, Simple AD)",
    "IAM Identity Center \u2014 Single Sign-On ข้ามหลาย AWS account และ business apps",
  ],
  sections: [
    {
      id: "beyond-basic-iam",
      title: "Beyond Basic IAM",
      content: [
        {
          type: "paragraph",
          text: "ทบทวนเร็วๆ: <strong>IAM</strong> = Users + Groups + Roles + Policies <em>ภายใน AWS account ของคุณเอง</em> เหมาะกับการจัดการพนักงาน/ระบบในองค์กรของคุณที่เข้าถึง AWS",
        },
        {
          type: "paragraph",
          text: "แต่ในโลกจริงเรามักเจอ use case ที่ IAM พื้นฐานทำไม่ได้ดี เช่น <strong>external users</strong>, ผู้ใช้ <strong>mobile/web app</strong> เป็นล้านคน, ผู้ใช้ที่อยู่ใน <strong>on-prem Active Directory</strong>, หรือการบริหาร <strong>multi-account</strong> — ตรงนี้คือที่มาของ Advanced Identity services",
        },
        {
          type: "grid",
          items: [
            {
              title: "External / federated users",
              description:
                "ผู้ใช้ที่ login ด้วย Google, Facebook, Apple, หรือ on-prem AD แล้วต้องการเข้าถึง AWS — ไม่ควรสร้าง IAM user ให้แต่ละคน",
            },
            {
              title: "Web / Mobile app users",
              description:
                "แอปพลิเคชันที่มีผู้ใช้หลักล้าน — ใช้ Cognito จัดการ sign-up / sign-in / MFA แทนการสร้าง IAM users",
            },
            {
              title: "On-prem Active Directory",
              description:
                "องค์กรที่มี Windows AD อยู่แล้ว ต้องการให้ user ใน AD เข้า AWS ได้ — ใช้ Directory Services",
            },
            {
              title: "Multi-account SSO",
              description:
                "บริษัทที่มี AWS account หลายตัว (dev, staging, prod) — ใช้ IAM Identity Center login ครั้งเดียวเข้าได้ทุก account",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "สรุปความแตกต่าง",
          text: "IAM = ผู้ใช้ภายใน account ของคุณ | Advanced Identity = ผู้ใช้ภายนอก, แอปพลิเคชัน, AD, หรือข้าม account",
        },
      ],
    },
    {
      id: "sts",
      title: "AWS STS (Security Token Service)",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS STS</strong> คือบริการที่ออก <em>temporary, limited-privilege credentials</em> ให้กับ users หรือ services ที่ต้องการเข้าถึง AWS resources โดยที่ไม่ต้องใช้ long-term access keys",
        },
        {
          type: "list",
          items: [
            "<strong>Temporary credentials</strong> \u2014 มีอายุจำกัด (configurable expiration ตั้งแต่ 15 นาที ไปจนถึงหลายชั่วโมง)",
            "<strong>Limited privilege</strong> \u2014 ได้สิทธิ์เฉพาะที่ Role หรือ federation policy กำหนดไว้",
            "<strong>หมดอายุอัตโนมัติ</strong> \u2014 ลด risk ของ credentials รั่วไหล (ไม่ต้อง rotate เอง)",
            "ทำงานเบื้องหลังของ <strong>IAM Roles</strong> \u2014 ทุกครั้งที่ assume role จริงๆ STS เป็นคนออก token ให้",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Use Case 1: Identity Federation",
              description:
                "ผู้ใช้ภายนอก (on-prem AD, social login, SAML) ได้รับ STS token สำหรับเข้า AWS โดยไม่ต้องสร้าง IAM user",
            },
            {
              title: "Use Case 2: Cross-Account Access",
              description:
                "User ใน account A assume role ใน account B \u2014 STS ออก temp credentials ให้ใช้กับ account B",
            },
            {
              title: "Use Case 3: IAM Roles for EC2",
              description:
                "EC2 instance มี role attached \u2014 STS ออก temp credentials ให้ instance ใช้เรียก AWS services (วิธีที่ AWS แนะนำ)",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "ห้าม embed access keys ใน code",
          text: "วิธีที่ถูกต้องคือใช้ IAM Role + STS \u2014 EC2/Lambda/ECS จะได้ temp credentials อัตโนมัติ ไม่ต้อง hard-code access key ลงใน application code",
        },
      ],
    },
    {
      id: "cognito",
      title: "Amazon Cognito",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Cognito</strong> คือบริการ identity สำหรับ <strong>web และ mobile app users</strong> (อาจมีถึงหลักล้านคน) — แทนที่จะสร้าง IAM user ให้แต่ละคน เราสร้าง user ใน Cognito",
        },
        {
          type: "grid",
          items: [
            {
              title: "Cognito User Pools (CUP)",
              description:
                "<strong>Sign-in สำหรับ app users</strong> \u2014 รองรับ sign up, sign in, MFA, password reset, email/phone verification หลังจาก login สำเร็จจะคืน <strong>JSON Web Token (JWT)</strong> ให้แอป",
            },
            {
              title: "Cognito Identity Pools (Federated Identities)",
              description:
                "ออก <strong>AWS credentials</strong> ให้ user เข้าถึง AWS resources ตรงๆ (เช่น S3, DynamoDB) — ใช้ต่อจาก User Pool หรือ social login ก็ได้",
            },
          ],
        },
        {
          type: "list",
          items: [
            "Integrate กับ <strong>social identity providers</strong>: Facebook, Google, Amazon, Apple",
            "รองรับ <strong>OIDC</strong> และ <strong>SAML 2.0</strong> สำหรับ enterprise federation",
            "รองรับผู้ใช้จำนวนมหาศาล (สเกลได้ถึงหลักล้าน)",
            "เหมาะกับ mobile app, web app, IoT devices ที่มีผู้ใช้ภายนอกองค์กร",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "User Pool vs Identity Pool จำง่ายๆ",
          text: "User Pool = <em>authentication</em> (ใครคือคุณ \u2014 คืน JWT) | Identity Pool = <em>authorization</em> ไป AWS (คุณเข้า AWS service ไหนได้บ้าง \u2014 คืน AWS credentials)",
        },
      ],
    },
    {
      id: "active-directory-background",
      title: "Microsoft Active Directory (AD) Background",
      content: [
        {
          type: "paragraph",
          text: "<strong>Active Directory (AD)</strong> คือบริการที่อยู่บน Windows Server พร้อม <em>AD Domain Services</em> ใช้กันอย่างแพร่หลายในองค์กร — เป็น <strong>database ของ objects</strong> ทุกอย่างในองค์กร",
        },
        {
          type: "list",
          items: [
            "<strong>User Accounts</strong> \u2014 บัญชีพนักงานทุกคน",
            "<strong>Computers</strong> \u2014 เครื่องคอมในองค์กร",
            "<strong>Printers</strong> \u2014 เครื่องพิมพ์",
            "<strong>File Shares</strong> \u2014 โฟลเดอร์ที่แชร์ในเครือข่าย",
            "<strong>Security Groups</strong> \u2014 กลุ่มสิทธิ์",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "ทำไม AD สำคัญ",
          text: "AD ทำให้ admin จัดการ <strong>centralized security</strong> \u2014 สร้าง account ครั้งเดียวกำหนด permission ครั้งเดียว ใช้กับทุกระบบในองค์กรที่ต่อกับ AD ได้ทันที",
        },
      ],
    },
    {
      id: "directory-services",
      title: "AWS Directory Services",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Directory Services</strong> คือกลุ่มบริการที่ช่วยใช้/integrate Active Directory บน AWS — มี <strong>3 ตัวเลือกหลัก</strong>",
        },
        {
          type: "grid",
          items: [
            {
              title: "AWS Managed Microsoft AD",
              description:
                "สร้าง AD <strong>ของจริง</strong> ใน AWS \u2014 จัดการ users ใน cloud ได้, รองรับ MFA, สามารถสร้าง <em>trust relationship</em> เชื่อมกับ on-prem AD ได้ (เหมาะกับ hybrid)",
            },
            {
              title: "AD Connector",
              description:
                "เป็น <strong>directory gateway (proxy)</strong> ที่ redirect คำขอกลับไปยัง on-prem AD \u2014 users และ data ยังอยู่ on-prem ทั้งหมด AWS เป็นเพียงทางผ่าน",
            },
            {
              title: "Simple AD",
              description:
                "<strong>AD-compatible managed directory</strong> บน AWS \u2014 ราคาประหยัด แต่ <em>เชื่อมกับ on-prem AD ไม่ได้</em> เหมาะกับ workload เล็กๆ ที่ไม่ต้องการ feature เต็มของ Microsoft AD",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "เลือกตัวไหนดี",
          text: "ต้อง trust กับ on-prem AD \u2192 <strong>Managed Microsoft AD</strong><br>ต้องการให้ user/data อยู่ on-prem ทั้งหมด \u2192 <strong>AD Connector</strong><br>ใช้คนเดียวบน AWS ไม่เชื่อม on-prem \u2192 <strong>Simple AD</strong>",
        },
      ],
    },
    {
      id: "iam-identity-center",
      title: "AWS IAM Identity Center (formerly AWS SSO)",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS IAM Identity Center</strong> (เดิมชื่อ <em>AWS Single Sign-On / AWS SSO</em>) คือบริการ <strong>One login</strong> ที่เข้าถึงได้หลาย AWS account และ business application พร้อมกัน",
        },
        {
          type: "list",
          items: [
            "<strong>Login portal เดียว</strong> \u2014 user เข้าได้ทุก AWS account ที่ได้รับสิทธิ์",
            "Integrate กับ <strong>AWS Organizations</strong> \u2014 จัดการสิทธิ์ข้าม account ได้สะดวก",
            "Integrate กับ <strong>business apps</strong>: Salesforce, Box, Microsoft 365, ฯลฯ",
            "รองรับ <strong>identity sources</strong> หลายแบบ: built-in IAM Identity Center, AD Connector (เชื่อม on-prem AD), หรือ external SAML 2.0 IdP",
            "ช่วยลดภาระการสร้าง IAM user แยกในแต่ละ account",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "เหมาะกับใคร",
          text: "องค์กรที่มี AWS หลาย account (dev / staging / prod / data) และต้องการให้พนักงานเข้าหลาย account ได้ด้วย login เดียว \u2014 IAM Identity Center คือคำตอบ",
        },
      ],
    },
    {
      id: "comparison",
      title: "Comparison: When to Use Each",
      content: [
        {
          type: "paragraph",
          text: "ตารางสรุปว่าเมื่อไรควรใช้บริการตัวไหน \u2014 ออกสอบบ่อยมาก!",
        },
        {
          type: "grid",
          items: [
            {
              title: "IAM",
              description:
                "<strong>Users ภายใน AWS account ของคุณเอง</strong> \u2014 พนักงาน, services, scripts ที่ต้องเข้าถึง AWS resource",
            },
            {
              title: "AWS STS",
              description:
                "<strong>Temporary credentials</strong> สำหรับ federation, cross-account access หรือ EC2/Lambda assume role",
            },
            {
              title: "Amazon Cognito",
              description:
                "<strong>App users (web/mobile)</strong> \u2014 ผู้ใช้แอปพลิเคชันภายนอก (ลูกค้า) ที่อาจมีหลักล้านคน",
            },
            {
              title: "Directory Services",
              description:
                "<strong>Integrate กับ Microsoft Active Directory</strong> \u2014 ทั้ง managed AD บน AWS และเชื่อมกับ on-prem AD",
            },
            {
              title: "IAM Identity Center",
              description:
                "<strong>SSO ข้ามหลาย AWS account + business apps</strong> \u2014 login เดียวเข้าได้ทุกที่",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "เคล็ดลับเลือกใช้",
          text: "ใครคือ user?<br>\u2022 พนักงาน \u2192 <strong>IAM / IAM Identity Center</strong><br>\u2022 ลูกค้าใช้แอป \u2192 <strong>Cognito</strong><br>\u2022 มี AD อยู่แล้ว \u2192 <strong>Directory Services</strong><br>\u2022 ต้อง temp credentials \u2192 <strong>STS</strong>",
        },
      ],
    },
    {
      id: "summary",
      title: "Summary",
      content: [
        {
          type: "list",
          items: [
            "<strong>IAM</strong> = users / groups / roles ภายใน account \u2014 ของพื้นฐาน",
            "<strong>STS</strong> ออก <em>temporary credentials</em> ให้ federation, cross-account, EC2 roles (15 นาที ถึงหลายชั่วโมง)",
            "<strong>Cognito</strong> = identity สำหรับ web/mobile app users \u2014 User Pools (sign-in, JWT) + Identity Pools (AWS credentials)",
            "<strong>Directory Services</strong> 3 แบบ: Managed Microsoft AD (full AD ใน AWS, trust ได้), AD Connector (proxy ไป on-prem), Simple AD (AD-compatible เล็กๆ)",
            "<strong>IAM Identity Center</strong> (AWS SSO) = one login เข้าได้หลาย AWS account + business apps",
            "หลักการสำคัญ: <em>ห้าม embed access keys ใน code</em> \u2014 ใช้ Role + STS แทนเสมอ",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Big picture",
          text: "Advanced Identity ของ AWS ออกแบบมาเพื่อให้คุณไม่ต้องสร้าง IAM user แบบ 1:1 กับผู้ใช้ทุกคน \u2014 ใช้ federation, temporary credentials และ SSO เพื่อ scale และเพิ่ม security",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "advanced-identity-q1",
      question:
        "AWS STS (Security Token Service) ให้สิ่งใดเป็นหลักกับผู้ใช้หรือ service ที่ต้องการเข้าถึง AWS?",
      options: [
        "Long-term access keys ที่ไม่หมดอายุ ใช้ได้ตลอดไป",
        "Temporary, limited-privilege credentials ที่มีอายุจำกัด (15 นาที ถึงหลายชั่วโมง)",
        "Username และ password สำหรับ login เข้า AWS Management Console",
        "JSON Web Token (JWT) สำหรับ mobile app user",
      ],
      correct: 1,
      explanation:
        "AWS STS ออก <strong>temporary, limited-privilege credentials</strong> ที่มี configurable expiration ตั้งแต่ 15 นาที ไปจนถึงหลายชั่วโมง \u2014 ใช้กับ identity federation, cross-account access และ IAM Roles for EC2 ส่วน long-term access keys เป็นของ IAM user (ไม่ใช่ STS), JWT เป็นของ Cognito User Pools",
    },
    {
      id: "advanced-identity-q2",
      question:
        "Amazon Cognito ออกแบบมาเพื่อจัดการ identity ของผู้ใช้กลุ่มใดเป็นหลัก?",
      options: [
        "พนักงานในองค์กรที่ต้องเข้าถึง AWS Management Console",
        "Service หรือ EC2 instance ที่ต้องเรียก AWS API",
        "ผู้ใช้ web และ mobile application (อาจมีถึงหลักล้านคน)",
        "Admin ที่ต้องบริหาร AWS หลาย account ผ่าน SSO",
      ],
      correct: 2,
      explanation:
        "Cognito ออกแบบมาสำหรับ <strong>web/mobile app users</strong> โดยเฉพาะ รองรับ sign up, sign in, MFA, password reset และคืน JWT (User Pools) หรือ AWS credentials (Identity Pools) ให้กับผู้ใช้ที่อาจมีหลักล้านคน \u2014 พนักงานในองค์กรใช้ IAM, service/EC2 ใช้ IAM Role + STS, และ multi-account SSO ใช้ IAM Identity Center",
    },
    {
      id: "advanced-identity-q3",
      question:
        "ความแตกต่างหลักระหว่าง AWS Managed Microsoft AD และ AD Connector คืออะไร?",
      options: [
        "Managed Microsoft AD ใช้ฟรี ส่วน AD Connector ต้องเสียเงิน",
        "Managed Microsoft AD เป็น AD ของจริงที่รันใน AWS (จัดการ users ใน cloud ได้, ตั้ง trust กับ on-prem AD ได้) ส่วน AD Connector เป็นเพียง proxy ที่ redirect ไปยัง on-prem AD (users และ data ยังอยู่ on-prem)",
        "Managed Microsoft AD ใช้กับ Linux เท่านั้น ส่วน AD Connector ใช้กับ Windows เท่านั้น",
        "ทั้งสองเหมือนกัน ต่างแค่ชื่อ \u2014 เลือกตัวไหนก็ได้",
      ],
      correct: 1,
      explanation:
        "<strong>AWS Managed Microsoft AD</strong> = AD ของจริงที่รันใน AWS — สามารถจัดการ users ใน cloud, รองรับ MFA และตั้ง trust relationship กับ on-prem AD ได้ ส่วน <strong>AD Connector</strong> = directory gateway/proxy ที่ redirect คำขอกลับไปยัง on-prem AD — users และ data ทั้งหมดยังคงอยู่ on-prem นอกจากนี้ยังมี Simple AD ซึ่งเป็น AD-compatible เล็กๆ ที่ไม่สามารถ join กับ on-prem AD ได้",
    },
    {
      id: "advanced-identity-q4",
      question:
        "บริษัทมี AWS account 5 ตัว (dev, staging, prod, data, security) และต้องการให้พนักงาน login ครั้งเดียวเข้าได้ทุก account พร้อมเข้า business apps เช่น Salesforce และ Microsoft 365 ด้วย ควรใช้บริการใด?",
      options: [
        "AWS STS เพื่อออก temporary credentials ให้แต่ละ account",
        "Amazon Cognito เพื่อจัดการ user pool ของพนักงาน",
        "AWS IAM Identity Center (AWS Single Sign-On)",
        "AWS Directory Service \u2014 Simple AD",
      ],
      correct: 2,
      explanation:
        "<strong>AWS IAM Identity Center</strong> (เดิมชื่อ AWS SSO) คือคำตอบ \u2014 ออกแบบมาเพื่อ <em>one login portal</em> ที่เข้าถึงหลาย AWS account (integrate กับ AWS Organizations) พร้อม business apps (Salesforce, Box, Microsoft 365) STS ออก temp credentials แต่ไม่ใช่ portal SSO, Cognito สำหรับ app users ภายนอก, Simple AD เป็น managed directory ไม่ใช่ SSO solution",
    },
    {
      id: "advanced-identity-q5",
      question:
        "บริษัทกำลังพัฒนา mobile app ที่คาดว่าจะมีลูกค้าใช้งานเป็นล้านคน ต้องการระบบ sign-up / sign-in / password reset และให้ผู้ใช้เข้าถึง S3 bucket ของตนเองได้ตรงๆ จาก app ควรใช้บริการใด?",
      options: [
        "สร้าง IAM user ให้ลูกค้าทุกคน คนละ 1 บัญชี",
        "ใช้ Amazon Cognito \u2014 User Pools สำหรับ sign-in (คืน JWT) และ Identity Pools สำหรับออก AWS credentials เข้าถึง S3",
        "ใช้ AWS Directory Service \u2014 AWS Managed Microsoft AD",
        "ใช้ root account credentials ใน mobile app",
      ],
      correct: 1,
      explanation:
        "<strong>Amazon Cognito</strong> ถูกออกแบบมาเพื่อ use case นี้โดยตรง \u2014 <strong>User Pools</strong> จัดการ sign-up/sign-in/MFA/password reset และคืน JWT, <strong>Identity Pools</strong> ออก AWS credentials ให้ user เข้าถึง S3/DynamoDB ตรงๆ การสร้าง IAM user ให้ลูกค้าหลักล้านคนเป็นไปไม่ได้ในทางปฏิบัติ (และ IAM ออกแบบมาสำหรับ users ใน account ของคุณ ไม่ใช่ end-customer), Directory Services สำหรับ AD integration, และห้าม embed root credentials ใน app เด็ดขาด",
    },
  ],
};
