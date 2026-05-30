import { TopicData } from "@/types/topic";

export const advancedIdentity: TopicData = {
  slug: "advanced-identity",
  title: "Advanced Identity",
  subtitle: "STS, Cognito, Directory Services & SSO",
  accent: "pink",
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
          text: "IAM = ผู้ใช้ภายใน account ของคุณ<br>Advanced Identity = ผู้ใช้ภายนอก, แอปพลิเคชัน, AD, หรือข้าม account",
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
          text: "User Pool = <em>authentication</em> (ใครคือคุณ \u2014 คืน JWT)<br>Identity Pool = <em>authorization</em> ไป AWS (คุณเข้า AWS service ไหนได้บ้าง \u2014 คืน AWS credentials)",
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
      id: "ai-q1",
      question:
        "What does AWS STS (Security Token Service) primarily provide?",
      options: [
        "Long-term IAM access keys.",
        "Temporary, limited-privilege security credentials for AWS users or services.",
        "Permanent S3 access tokens.",
        "MFA hardware devices.",
      ],
      correct: 1,
      explanation:
        "AWS STS issues temporary, time-limited credentials (typically 15 minutes to 36 hours). Used when assuming roles, federation, or generating short-lived API access.",
    },
    {
      id: "ai-q2",
      question:
        "Which AWS service is BEST for managing user authentication for web/mobile applications, including sign-up, sign-in, and social identity providers?",
      options: [
        "Amazon Cognito",
        "AWS IAM Identity Center",
        "AWS Directory Service",
        "AWS STS",
      ],
      correct: 0,
      explanation:
        "Amazon Cognito provides authentication and user management for web/mobile apps — user pools (sign-up/sign-in) and identity pools (federated identity for AWS access). Supports social login (Google, Facebook, Apple), SAML, OIDC.",
    },
    {
      id: "ai-q3",
      question:
        "What is the difference between Cognito User Pools and Identity Pools?",
      options: [
        "They are identical.",
        "User Pools handle authentication (sign-in/sign-up); Identity Pools provide AWS credentials to authenticated users (federated identities for accessing AWS resources).",
        "Identity Pools are deprecated.",
        "User Pools are only for B2B.",
      ],
      correct: 1,
      explanation:
        "Cognito User Pools = user directory for sign-up/sign-in (returns JWT tokens). Cognito Identity Pools = exchange JWT/social/SAML tokens for temporary AWS credentials (so the app can call AWS services).",
    },
    {
      id: "ai-q4",
      question:
        "Which AWS service provides a managed Microsoft Active Directory in the cloud?",
      options: [
        "AWS Directory Service for Microsoft AD (AWS Managed Microsoft AD)",
        "AWS IAM",
        "Amazon Cognito",
        "AWS STS",
      ],
      correct: 0,
      explanation:
        "AWS Managed Microsoft AD is a fully managed AD service built on actual Microsoft AD. Supports trusts with on-prem AD, can be used by Windows EC2 instances, RDS for SQL Server, WorkSpaces, etc.",
    },
    {
      id: "ai-q5",
      question:
        "Which Directory Service option is BEST for redirecting AD requests from your AWS resources to your existing on-premises AD?",
      options: [
        "AWS Managed Microsoft AD",
        "AD Connector",
        "Simple AD",
        "Cognito",
      ],
      correct: 1,
      explanation:
        "AD Connector is a directory gateway / proxy that redirects requests to your existing on-premises AD without caching information in AWS. No on-prem replication needed.",
    },
    {
      id: "ai-q6",
      question:
        "Which Directory Service option is a stand-alone, lightweight directory compatible with basic AD features for small (<5000 users) environments?",
      options: [
        "Simple AD",
        "AD Connector",
        "AWS Managed Microsoft AD",
        "Cognito User Pools",
      ],
      correct: 0,
      explanation:
        "Simple AD is a lightweight, low-cost Samba-based directory compatible with most AD-aware applications. Good for small workloads. No trust support, no full MS AD features.",
    },
    {
      id: "ai-q7",
      question:
        "What does \"identity federation\" mean in AWS?",
      options: [
        "Creating IAM users for every external user.",
        "Allowing users authenticated by an external identity provider (corporate AD, SAML, social login) to access AWS without creating IAM users.",
        "Federating S3 buckets across regions.",
        "Replicating users across regions.",
      ],
      correct: 1,
      explanation:
        "Identity federation lets external users (from Microsoft AD, SAML, OIDC, social IdPs) sign into AWS without an IAM user. They assume an IAM role via STS for temporary credentials.",
    },
    {
      id: "ai-q8",
      question:
        "Which protocol is commonly used for enterprise SAML 2.0 federation with AWS (e.g., Active Directory Federation Services)?",
      options: [
        "SAML 2.0",
        "OAuth 2.0",
        "Kerberos",
        "RADIUS",
      ],
      correct: 0,
      explanation:
        "Enterprise federation with AWS commonly uses SAML 2.0 (e.g., ADFS, Okta, Ping). Users authenticate to the IdP, get a SAML assertion, exchange it via STS for AWS temporary credentials.",
    },
    {
      id: "ai-q9",
      question:
        "Which AWS service is the modern replacement for legacy AWS SSO and is recommended for managing access across multiple AWS accounts?",
      options: [
        "AWS IAM Identity Center (formerly AWS SSO)",
        "AWS Directory Service",
        "Amazon Cognito",
        "AWS STS",
      ],
      correct: 0,
      explanation:
        "AWS IAM Identity Center (formerly AWS Single Sign-On) is the recommended way to manage workforce access across AWS accounts and SaaS apps. Integrates with AWS Organizations and external IdPs.",
    },
    {
      id: "ai-q10",
      question:
        "Which is true about IAM roles vs. IAM users?",
      options: [
        "Users and roles are the same.",
        "Users have long-term credentials and represent a single person/service; roles have no credentials and are assumed by trusted entities to get temporary credentials.",
        "Roles are deprecated.",
        "Users provide temporary credentials.",
      ],
      correct: 1,
      explanation:
        "IAM users have long-term credentials (password / access keys) tied to a specific identity. Roles are assumable identities — trusted entities (users, services, federated identities) call AssumeRole to get temporary credentials.",
    },
    {
      id: "ai-q11",
      question:
        "Which AWS feature simplifies cross-account access using IAM roles?",
      options: [
        "Trust policy with role assumption (sts:AssumeRole)",
        "Resource-based S3 bucket ACLs",
        "VPC peering",
        "Direct Connect",
      ],
      correct: 0,
      explanation:
        "Cross-account access uses IAM roles with a trust policy that allows another AWS account (or specific role) to call sts:AssumeRole — getting temporary credentials in the target account.",
    },
    {
      id: "ai-q12",
      question:
        "Which AWS service helps you analyze IAM permissions and identify resources accessible from outside your account or organization?",
      options: [
        "IAM Access Analyzer",
        "AWS CloudTrail",
        "AWS Trusted Advisor",
        "Amazon GuardDuty",
      ],
      correct: 0,
      explanation:
        "IAM Access Analyzer analyzes resource policies (S3 buckets, IAM roles, KMS keys, Lambda, SQS, Secrets Manager) and flags resources accessible from outside your account or organization — also helps generate least-privilege policies.",
    },
    {
      id: "ai-q13",
      question:
        "What is a permissions boundary in IAM?",
      options: [
        "A safety net that defines the MAXIMUM permissions an identity-based policy can grant to a user or role.",
        "A type of resource policy.",
        "A region-level restriction.",
        "A type of trust policy.",
      ],
      correct: 0,
      explanation:
        "A permissions boundary is a safety net — the EFFECTIVE permissions of a user/role are the intersection of attached policies AND the boundary. Cannot exceed the boundary.",
    },
    {
      id: "ai-q14",
      question:
        "Which AWS service provides workforce identity management (federated SSO) for ENTERPRISE / B2E use cases?",
      options: [
        "AWS IAM Identity Center",
        "Amazon Cognito",
        "AWS STS",
        "AWS Directory Service",
      ],
      correct: 0,
      explanation:
        "AWS IAM Identity Center is for workforce / employee access (B2E). Cognito is for customer-facing applications (B2C / B2B).",
    },
    {
      id: "ai-q15",
      question:
        "Which AWS service provides customer-facing identity management (B2C / B2B) for mobile and web apps?",
      options: [
        "Amazon Cognito",
        "AWS IAM Identity Center",
        "AWS Directory Service",
        "AWS Managed Microsoft AD",
      ],
      correct: 0,
      explanation:
        "Amazon Cognito is for customer-facing (B2C / B2B) identity in apps. IAM Identity Center is for workforce (B2E).",
    },
    {
      id: "ai-q16",
      question:
        "Which is the BEST description of Web Identity Federation?",
      options: [
        "Allowing users authenticated by web identity providers (Google, Facebook, Amazon, Apple) to access AWS via temporary credentials.",
        "Federating between two AWS accounts.",
        "Replicating users across regions.",
        "A type of VPN.",
      ],
      correct: 0,
      explanation:
        "Web Identity Federation lets users authenticate with an external web IdP (Google, Facebook, Amazon, Apple, etc.) and exchange the token via STS / Cognito Identity Pools for temporary AWS credentials.",
    },
    {
      id: "ai-q17",
      question:
        "Which AWS feature lets you grant access to AWS resources to users from external identity providers using OpenID Connect (OIDC)?",
      options: [
        "OIDC Identity Provider in IAM (with sts:AssumeRoleWithWebIdentity)",
        "VPC Endpoint",
        "Direct Connect",
        "AWS Macie",
      ],
      correct: 0,
      explanation:
        "IAM supports OpenID Connect identity providers — users authenticated by an OIDC IdP (e.g., GitHub Actions, Auth0) can call AssumeRoleWithWebIdentity to get AWS temporary credentials.",
    },
    {
      id: "ai-q18",
      question:
        "Which is true about IAM roles for AWS services (e.g., EC2 instance role)?",
      options: [
        "The service must be given long-term access keys.",
        "Trusted AWS services assume the role and receive temporary credentials via the instance metadata service or STS.",
        "Roles for services are deprecated.",
        "Only humans can assume roles.",
      ],
      correct: 1,
      explanation:
        "AWS service roles allow services like EC2, Lambda, ECS to assume an IAM role, getting temporary credentials (no long-term keys). For EC2, credentials are auto-rotated and accessible via the instance metadata service.",
    },
    {
      id: "ai-q19",
      question:
        "What is IAM Roles Anywhere?",
      options: [
        "Lets workloads outside AWS (on-prem servers, other clouds) obtain temporary AWS credentials by using X.509 certificates as their identity.",
        "Roles that work in all AWS regions.",
        "A free trial of IAM.",
        "A backup service for IAM users.",
      ],
      correct: 0,
      explanation:
        "IAM Roles Anywhere allows workloads outside AWS (on-prem, other clouds) to use X.509 certificates issued by your CA to obtain temporary AWS credentials — no need for long-lived access keys.",
    },
    {
      id: "ai-q20",
      question:
        "Which AWS service is BEST for managing app secrets like database passwords, with automatic rotation?",
      options: [
        "AWS Secrets Manager",
        "AWS Systems Manager Parameter Store",
        "AWS KMS",
        "AWS IAM",
      ],
      correct: 0,
      explanation:
        "AWS Secrets Manager stores secrets and supports automatic rotation (via Lambda). Parameter Store is also for config/secrets but lacks built-in auto-rotation.",
    },
    {
      id: "ai-q21",
      question:
        "Which is true about IAM policies and STS in cross-account access?",
      options: [
        "Each account is independent and has no interaction.",
        "The trusting account creates a role with a trust policy allowing the other account; the other account's user calls AssumeRole and gets temporary credentials.",
        "Users share access keys directly.",
        "Cross-account access is impossible.",
      ],
      correct: 1,
      explanation:
        "Cross-account: account A creates a role whose trust policy allows account B's principals to assume it. Account B's user/role calls sts:AssumeRole, gets temporary creds, and acts in account A.",
    },
    {
      id: "ai-q22",
      question:
        "Which Cognito feature provides social identity provider integration?",
      options: [
        "Cognito Identity Pool federated identities (Facebook, Google, Apple, Twitter, Amazon, OIDC, SAML).",
        "Cognito User Pool only.",
        "AWS STS only.",
        "AWS IAM only.",
      ],
      correct: 0,
      explanation:
        "Cognito Identity Pools support federated identities from many IdPs (social: Facebook, Google, Apple, Twitter, Amazon; enterprise: SAML / OIDC).",
    },
    {
      id: "ai-q23",
      question:
        "Which AWS feature is recommended for granting temporary AWS access to GitHub Actions / GitLab CI workflows without using long-term keys?",
      options: [
        "OIDC Identity Provider + IAM role with AssumeRoleWithWebIdentity",
        "Hard-coded access keys in repository secrets",
        "Sharing the root credentials",
        "Email-based authentication",
      ],
      correct: 0,
      explanation:
        "Configure GitHub Actions (or GitLab CI) as an OIDC IdP in IAM, create a role with a trust policy allowing the OIDC provider, and the CI assumes the role for temporary credentials. No long-term keys.",
    },
    {
      id: "ai-q24",
      question:
        "Which AWS feature allows authenticated users (via AD or social) to access an EC2 instance with their identity, without an SSH key?",
      options: [
        "EC2 Instance Connect",
        "AWS Systems Manager Session Manager",
        "Both A and B can avoid SSH keys",
        "Manually distributing keys",
      ],
      correct: 2,
      explanation:
        "EC2 Instance Connect (browser-based SSH using IAM) and SSM Session Manager (browser/CLI shell using IAM, no inbound port) both let authenticated AWS users connect without managing SSH keys.",
    },
    {
      id: "ai-q25",
      question:
        "Which is true about AWS STS GetSessionToken?",
      options: [
        "Returns a permanent access key.",
        "Returns temporary credentials (typically including MFA-validated credentials) — used for users needing temporary elevated access.",
        "Returns an IAM role ARN.",
        "Deletes the user.",
      ],
      correct: 1,
      explanation:
        "GetSessionToken returns temporary credentials for an IAM user, often used to validate MFA before allowing sensitive operations. Different from AssumeRole (used to switch identities).",
    },
  ],
};
