import { TopicData } from "@/types/topic";

export const iam: TopicData = {
  slug: "iam",
  title: "IAM",
  subtitle: "Identity and Access Management",
  accent: "orange",
  emoji: "\ud83d\udd10",
  category: "Security, Identity & Compliance",
  description:
    "IAM \u0e04\u0e37\u0e2d\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e02\u0e2d\u0e07 AWS \u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e27\u0e48\u0e32\u0e43\u0e04\u0e23\u0e08\u0e30\u0e40\u0e02\u0e49\u0e32\u0e16\u0e36\u0e07\u0e2d\u0e30\u0e44\u0e23\u0e44\u0e14\u0e49\u0e1a\u0e49\u0e32\u0e07\u0e43\u0e19\u0e1a\u0e31\u0e0d\u0e0a\u0e35 AWS \u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13 \u0e40\u0e1b\u0e47\u0e19 Global service \u0e44\u0e21\u0e48\u0e1c\u0e39\u0e01\u0e01\u0e31\u0e1a Region \u0e43\u0e14 region \u0e2b\u0e19\u0e36\u0e48\u0e07 \u0e41\u0e25\u0e30\u0e44\u0e21\u0e48\u0e21\u0e35\u0e04\u0e48\u0e32\u0e43\u0e0a\u0e49\u0e08\u0e48\u0e32\u0e22",
  keyPoints: [
    "\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e16\u0e36\u0e07 AWS \u0e14\u0e49\u0e27\u0e22 Users, Groups, Roles \u0e41\u0e25\u0e30 Policies",
    "\u0e43\u0e0a\u0e49\u0e2b\u0e25\u0e31\u0e01 Least Privilege \u2014 \u0e43\u0e2b\u0e49 permission \u0e40\u0e17\u0e48\u0e32\u0e17\u0e35\u0e48\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19",
    "\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a MFA, Password Policy \u0e41\u0e25\u0e30 Access Keys \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Console / CLI / SDK",
    "Security Tools: Credentials Report (account) \u0e41\u0e25\u0e30 Access Advisor (user)",
  ],
  sections: [
    {
      id: "users-groups",
      title: "Users & Groups",
      content: [
        {
          type: "paragraph",
          text: "<strong>IAM User</strong> \u0e04\u0e37\u0e2d\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e36\u0e49\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a <em>\u0e04\u0e19\u0e2b\u0e23\u0e37\u0e2d service</em> \u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e16\u0e36\u0e07 AWS \u2014 \u0e2a\u0e48\u0e27\u0e19 <strong>IAM Group</strong> \u0e04\u0e37\u0e2d\u0e01\u0e25\u0e38\u0e48\u0e21\u0e02\u0e2d\u0e07 Users \u0e17\u0e35\u0e48\u0e23\u0e27\u0e21\u0e01\u0e31\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14 permission \u0e44\u0e14\u0e49\u0e17\u0e35\u0e40\u0e14\u0e35\u0e22\u0e27",
        },
        {
          type: "list",
          items: [
            "1 User \u0e15\u0e48\u0e2d 1 \u0e04\u0e19 (\u0e44\u0e21\u0e48\u0e04\u0e27\u0e23 share)",
            "User \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e02\u0e49\u0e32\u0e16\u0e36\u0e07 AWS \u0e44\u0e14\u0e49 2 \u0e27\u0e34\u0e18\u0e35: Management Console (password) \u0e41\u0e25\u0e30 CLI / SDK (Access Key)",
            "User \u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e08\u0e30\u0e44\u0e21\u0e48\u0e21\u0e35 permission \u0e43\u0e14\u0e46 \u0e40\u0e25\u0e22\u0e42\u0e14\u0e22 default",
            "Root user \u0e21\u0e35\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e17\u0e38\u0e01\u0e2d\u0e22\u0e48\u0e32\u0e07 \u2014 \u0e04\u0e27\u0e23\u0e40\u0e1b\u0e34\u0e14\u0e43\u0e0a\u0e49\u0e41\u0e04\u0e48\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19 \u0e41\u0e25\u0e30 enable MFA \u0e17\u0e31\u0e19\u0e17\u0e35",
            "Group \u0e21\u0e35\u0e44\u0e14\u0e49\u0e41\u0e04\u0e48 Users \u2014 \u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e2a\u0e48 Group \u0e0b\u0e49\u0e2d\u0e19 Group \u0e44\u0e14\u0e49 (no nested groups)",
            "User 1 \u0e04\u0e19 \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e14\u0e49\u0e2b\u0e25\u0e32\u0e22 Group \u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48\u0e2d\u0e22\u0e39\u0e48 Group \u0e40\u0e25\u0e22\u0e01\u0e47\u0e44\u0e14\u0e49",
            "\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07: \u0e01\u0e25\u0e38\u0e48\u0e21 Developers, \u0e01\u0e25\u0e38\u0e48\u0e21 Admins, \u0e01\u0e25\u0e38\u0e48\u0e21 Finance",
          ],
        },
        {
          type: "code",
          language: "text",
          caption: "\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07",
          code: "Group: Developers \u2192 Alice, Bob\nGroup: Admins \u2192 Carol\nUser: Dave \u2192 \u0e44\u0e21\u0e48\u0e2d\u0e22\u0e39\u0e48 group \u0e44\u0e2b\u0e19 (\u0e44\u0e14\u0e49 permission \u0e40\u0e09\u0e1e\u0e32\u0e30\u0e17\u0e35\u0e48 assign \u0e42\u0e14\u0e22\u0e15\u0e23\u0e07)",
        },
      ],
    },
    {
      id: "roles",
      title: "Roles",
      content: [
        {
          type: "paragraph",
          text: "<strong>IAM Role</strong> \u0e04\u0e37\u0e2d\u0e0a\u0e38\u0e14 permission \u0e17\u0e35\u0e48 <em>\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e1c\u0e39\u0e01\u0e01\u0e31\u0e1a\u0e04\u0e19</em> \u0e41\u0e15\u0e48\u0e1c\u0e39\u0e01\u0e01\u0e31\u0e1a entity \u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 \u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19 \"\u0e1a\u0e17\u0e1a\u0e32\u0e17\" \u0e17\u0e35\u0e48\u0e43\u0e04\u0e23\u0e01\u0e47\u0e44\u0e14\u0e49\u0e21\u0e32\u0e2a\u0e27\u0e21\u0e0a\u0e31\u0e48\u0e27\u0e04\u0e23\u0e32\u0e27",
        },
        {
          type: "list",
          items: [
            "\u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a <strong>AWS Services</strong> \u0e40\u0e0a\u0e48\u0e19 EC2 \u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23 access S3",
            "\u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a <strong>Cross-account access</strong> \u2014 \u0e43\u0e2b\u0e49\u0e1a\u0e31\u0e0d\u0e0a\u0e35 AWS \u0e2d\u0e37\u0e48\u0e19\u0e40\u0e02\u0e49\u0e32\u0e16\u0e36\u0e07\u0e44\u0e14\u0e49",
            "\u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a <strong>Federated users</strong> \u0e40\u0e0a\u0e48\u0e19 login \u0e14\u0e49\u0e27\u0e22 Google / Active Directory",
            "Role \u0e43\u0e0a\u0e49\u0e44\u0e21\u0e48\u0e21\u0e35 long-term credentials \u2014 \u0e44\u0e14\u0e49 temporary security credentials \u0e41\u0e17\u0e19",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Use Case: EC2 \u2192 S3",
              description:
                "\u0e2a\u0e23\u0e49\u0e32\u0e07 Role \u0e0a\u0e37\u0e48\u0e2d EC2-S3-Access \u0e41\u0e25\u0e49\u0e27 attach \u0e01\u0e31\u0e1a EC2 instance \u0e41\u0e17\u0e19\u0e01\u0e32\u0e23\u0e43\u0e2a\u0e48 Access Key \u0e25\u0e07\u0e43\u0e19 code",
            },
            {
              title: "Use Case: Lambda \u2192 DynamoDB",
              description:
                "Lambda function \u0e23\u0e31\u0e1a Role \u0e17\u0e35\u0e48\u0e21\u0e35 permission \u0e2d\u0e48\u0e32\u0e19/\u0e40\u0e02\u0e35\u0e22\u0e19 DynamoDB \u0e42\u0e14\u0e22\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49 user",
            },
          ],
        },
      ],
    },
    {
      id: "policies",
      title: "Policies",
      content: [
        {
          type: "paragraph",
          text: "<strong>Policy</strong> \u0e04\u0e37\u0e2d JSON document \u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e27\u0e48\u0e32 <em>\u0e2d\u0e19\u0e38\u0e0d\u0e32\u0e15\u0e2b\u0e23\u0e37\u0e2d\u0e2b\u0e49\u0e32\u0e21</em> \u0e17\u0e33\u0e2d\u0e30\u0e44\u0e23\u0e01\u0e31\u0e1a resource \u0e43\u0e14\u0e1a\u0e49\u0e32\u0e07 \u2014 attach \u0e01\u0e31\u0e1a User, Group \u0e2b\u0e23\u0e37\u0e2d Role \u0e44\u0e14\u0e49",
        },
        {
          type: "grid",
          items: [
            {
              title: "Identity-based Policy",
              description:
                "Attach \u0e01\u0e31\u0e1a User, Group, \u0e2b\u0e23\u0e37\u0e2d Role \u2014 \u0e01\u0e33\u0e2b\u0e19\u0e14\u0e27\u0e48\u0e32 identity \u0e19\u0e31\u0e49\u0e19\u0e17\u0e33\u0e2d\u0e30\u0e44\u0e23\u0e44\u0e14\u0e49",
            },
            {
              title: "Resource-based Policy",
              description:
                "Attach \u0e01\u0e31\u0e1a resource \u0e40\u0e0a\u0e48\u0e19 S3 bucket \u2014 \u0e01\u0e33\u0e2b\u0e19\u0e14\u0e27\u0e48\u0e32\u0e43\u0e04\u0e23\u0e40\u0e02\u0e49\u0e32 resource \u0e19\u0e35\u0e49\u0e44\u0e14\u0e49",
            },
            {
              title: "AWS Managed Policy",
              description:
                "AWS \u0e2a\u0e23\u0e49\u0e32\u0e07\u0e43\u0e2b\u0e49\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e23\u0e39\u0e1b \u0e40\u0e0a\u0e48\u0e19 AdministratorAccess, ReadOnlyAccess",
            },
            {
              title: "Customer Managed Policy",
              description:
                "\u0e40\u0e23\u0e32\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e40\u0e2d\u0e07\u0e15\u0e32\u0e21\u0e04\u0e27\u0e32\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23, reusable \u0e02\u0e49\u0e32\u0e21 User/Role",
            },
          ],
        },
        {
          type: "paragraph",
          text: "\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07 Policy JSON \u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e14\u0e49\u0e27\u0e22: <strong>Version</strong> (\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e0a\u0e31\u0e48\u0e19 policy language), <strong>Id</strong> (\u0e23\u0e30\u0e1a\u0e38 policy \u2014 optional), \u0e41\u0e25\u0e30 <strong>Statement</strong> (1 \u0e2b\u0e23\u0e37\u0e2d\u0e2b\u0e25\u0e32\u0e22 statement)",
        },
        {
          type: "grid",
          items: [
            {
              title: "Sid",
              description:
                "Statement ID \u2014 \u0e15\u0e31\u0e27\u0e23\u0e30\u0e1a\u0e38 statement (optional) \u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e2d\u0e48\u0e32\u0e19\u0e07\u0e48\u0e32\u0e22\u0e02\u0e36\u0e49\u0e19",
            },
            {
              title: "Effect",
              description:
                "<strong>Allow</strong> \u0e2b\u0e23\u0e37\u0e2d <strong>Deny</strong> \u2014 statement \u0e19\u0e35\u0e49\u0e2d\u0e19\u0e38\u0e0d\u0e32\u0e15\u0e2b\u0e23\u0e37\u0e2d\u0e1b\u0e0f\u0e34\u0e40\u0e2a\u0e18 access",
            },
            {
              title: "Principal",
              description:
                "\u0e1a\u0e31\u0e0d\u0e0a\u0e35/User/Role \u0e17\u0e35\u0e48 policy \u0e1a\u0e31\u0e07\u0e04\u0e31\u0e1a\u0e43\u0e0a\u0e49 (\u0e2a\u0e48\u0e27\u0e19\u0e21\u0e32\u0e01\u0e43\u0e0a\u0e49\u0e43\u0e19 resource-based policy)",
            },
            {
              title: "Action",
              description:
                "\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23ของ API call \u0e17\u0e35\u0e48 allow/deny \u0e40\u0e0a\u0e48\u0e19 s3:GetObject, ec2:StartInstances",
            },
            {
              title: "Resource",
              description:
                "\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23 resource \u0e17\u0e35\u0e48 action \u0e21\u0e35\u0e1c\u0e25 (\u0e40\u0e02\u0e35\u0e22\u0e19\u0e40\u0e1b\u0e47\u0e19 ARN)",
            },
            {
              title: "Condition",
              description:
                "\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21 (optional) \u2014 \u0e40\u0e0a\u0e48\u0e19\u0e08\u0e33\u0e01\u0e31\u0e14 IP, \u0e40\u0e27\u0e25\u0e32, MFA",
            },
          ],
        },
        {
          type: "code",
          language: "json",
          caption: "\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07 Policy JSON \u0e41\u0e1a\u0e1a\u0e40\u0e15\u0e47\u0e21\u0e23\u0e39\u0e1b",
          code: `{
  "Version": "2012-10-17",
  "Id": "S3-Account-Permissions",
  "Statement": [
    {
      "Sid": "AllowReadObjects",
      "Effect": "Allow",
      "Principal": {
        "AWS": ["arn:aws:iam::123456789012:root"]
      },
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}`,
        },
        {
          type: "callout",
          variant: "warning",
          title: "\u0e2b\u0e25\u0e31\u0e01\u0e2a\u0e33\u0e04\u0e31\u0e0d: Least Privilege",
          text: "\u0e43\u0e2b\u0e49 permission \u0e40\u0e17\u0e48\u0e32\u0e17\u0e35\u0e48\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19 \u2014 \u0e2d\u0e22\u0e48\u0e32\u0e43\u0e2b\u0e49\u0e21\u0e32\u0e01\u0e40\u0e01\u0e34\u0e19 \u0e25\u0e14 risk \u0e02\u0e2d\u0e07 security breach",
        },
      ],
    },
    {
      id: "mfa",
      title: "MFA (Multi-Factor Authentication)",
      content: [
        {
          type: "paragraph",
          text: "<strong>MFA</strong> = Password \u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e23\u0e39\u0e49 + Security Device \u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e21\u0e35 \u2014 \u0e16\u0e36\u0e07\u0e41\u0e21\u0e49 password \u0e16\u0e39\u0e01\u0e02\u0e42\u0e21\u0e22\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e01\u0e47\u0e22\u0e31\u0e07\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22 \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35 device \u0e14\u0e49\u0e27\u0e22",
        },
        {
          type: "callout",
          variant: "warning",
          title: "\u0e17\u0e33\u0e44\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49 MFA?",
          text: "\u0e40\u0e1e\u0e23\u0e32\u0e30 root account \u0e41\u0e25\u0e30 IAM users \u0e21\u0e35\u0e1c\u0e25\u0e01\u0e23\u0e30\u0e17\u0e1a\u0e2a\u0e39\u0e07\u0e2b\u0e32\u0e01\u0e16\u0e39\u0e01\u0e02\u0e42\u0e21\u0e22 \u2014 MFA \u0e0a\u0e48\u0e27\u0e22\u0e25\u0e14\u0e04\u0e27\u0e32\u0e21\u0e40\u0e2a\u0e35\u0e48\u0e22\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e21\u0e32\u0e01\u0e41\u0e21\u0e49 password \u0e23\u0e31\u0e48\u0e27",
        },
        {
          type: "grid",
          items: [
            {
              title: "Virtual MFA Device",
              description:
                "\u0e41\u0e2d\u0e1b\u0e1a\u0e19\u0e21\u0e37\u0e2d\u0e16\u0e37\u0e2d \u0e40\u0e0a\u0e48\u0e19 <strong>Google Authenticator</strong> (\u0e15\u0e48\u0e2d 1 device) \u0e2b\u0e23\u0e37\u0e2d <strong>Authy</strong> (\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a multi-device)",
            },
            {
              title: "U2F Security Key",
              description:
                "\u0e2d\u0e38\u0e1b\u0e01\u0e23\u0e13\u0e4c USB \u0e17\u0e32\u0e07\u0e01\u0e32\u0e22\u0e20\u0e32\u0e1e \u0e40\u0e0a\u0e48\u0e19 <strong>YubiKey</strong> by Yubico (3rd party) \u2014 \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a root \u0e41\u0e25\u0e30 IAM users \u0e2b\u0e25\u0e32\u0e22\u0e04\u0e19\u0e1a\u0e19 device \u0e40\u0e14\u0e35\u0e22\u0e27",
            },
            {
              title: "Hardware Key Fob MFA Device",
              description:
                "\u0e2d\u0e38\u0e1b\u0e01\u0e23\u0e13\u0e4c\u0e1e\u0e27\u0e07\u0e01\u0e38\u0e0d\u0e41\u0e08 \u0e08\u0e32\u0e01 <strong>Gemalto</strong> \u2014 \u0e41\u0e2a\u0e14\u0e07 OTP \u0e1a\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e08\u0e2d\u0e40\u0e25\u0e47\u0e01\u0e46",
            },
            {
              title: "Hardware Key Fob (AWS GovCloud)",
              description:
                "\u0e23\u0e38\u0e48\u0e19\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a AWS GovCloud (US) \u2014 \u0e08\u0e32\u0e01 SurePassID",
            },
          ],
        },
      ],
    },
    {
      id: "password-policy",
      title: "Password Policy",
      content: [
        {
          type: "paragraph",
          text: "Password \u0e17\u0e35\u0e48\u0e41\u0e02\u0e47\u0e07\u0e41\u0e23\u0e07 = \u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19 \u2014 IAM \u0e43\u0e2b\u0e49\u0e15\u0e31\u0e49\u0e07 <strong>Password Policy</strong> \u0e23\u0e30\u0e14\u0e31\u0e1a account \u0e44\u0e14\u0e49",
        },
        {
          type: "list",
          items: [
            "\u0e15\u0e31\u0e49\u0e07 <strong>minimum password length</strong> (\u0e04\u0e27\u0e32\u0e21\u0e22\u0e32\u0e27\u0e02\u0e31\u0e49\u0e19\u0e15\u0e48\u0e33)",
            "\u0e1a\u0e31\u0e07\u0e04\u0e31\u0e1a\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23: <strong>uppercase</strong>, <strong>lowercase</strong>, <strong>number</strong>, <strong>non-alphanumeric</strong> (special character)",
            "\u0e2d\u0e19\u0e38\u0e0d\u0e32\u0e15\u0e2b\u0e23\u0e37\u0e2d\u0e1a\u0e31\u0e07\u0e04\u0e31\u0e1a\u0e43\u0e2b\u0e49\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19 password \u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e2d\u0e07\u0e44\u0e14\u0e49 (allow users to change own password)",
            "\u0e15\u0e31\u0e49\u0e07 <strong>password expiration</strong> \u2014 \u0e1a\u0e31\u0e07\u0e04\u0e31\u0e1a\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19 password \u0e17\u0e38\u0e01\u0e46 \u0e01\u0e35\u0e48\u0e27\u0e31\u0e19",
            "\u0e2b\u0e49\u0e32\u0e21\u0e43\u0e0a\u0e49 password \u0e0b\u0e49\u0e33\u0e02\u0e2d\u0e07\u0e40\u0e01\u0e48\u0e32 (prevent password re-use)",
          ],
        },
      ],
    },
    {
      id: "access-keys-cli-sdk",
      title: "Access Keys, CLI & SDK",
      content: [
        {
          type: "paragraph",
          text: "\u0e21\u0e35 <strong>3 \u0e27\u0e34\u0e18\u0e35</strong>\u0e43\u0e19\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e16\u0e36\u0e07 AWS:",
        },
        {
          type: "grid",
          items: [
            {
              title: "1. AWS Management Console",
              description:
                "\u0e40\u0e02\u0e49\u0e32\u0e1c\u0e48\u0e32\u0e19 web browser \u2014 \u0e1b\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19\u0e14\u0e49\u0e27\u0e22 password + MFA",
            },
            {
              title: "2. AWS CLI",
              description:
                "Command Line Interface \u2014 \u0e1b\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19\u0e14\u0e49\u0e27\u0e22 <strong>Access Keys</strong>",
            },
            {
              title: "3. AWS SDK",
              description:
                "Software Development Kit (\u0e40\u0e23\u0e35\u0e22\u0e01\u0e08\u0e32\u0e01\u0e42\u0e04\u0e49\u0e14) \u2014 \u0e1b\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19\u0e14\u0e49\u0e27\u0e22 <strong>Access Keys</strong>",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Access Keys = credentials \u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27",
          text: "Users \u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 Access Keys \u0e15\u0e31\u0e27\u0e40\u0e2d\u0e07\u0e1c\u0e48\u0e32\u0e19 IAM Console \u2014 <strong>Access Key ID</strong> \u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19 username, <strong>Secret Access Key</strong> \u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19 password \u2014 \u0e2b\u0e49\u0e32\u0e21 share \u0e40\u0e14\u0e47\u0e14\u0e02\u0e32\u0e14",
        },
        {
          type: "grid",
          items: [
            {
              title: "AWS CLI \u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23?",
              description:
                "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d command-line \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2a\u0e31\u0e48\u0e07\u0e07\u0e32\u0e19 AWS services \u0e1c\u0e48\u0e32\u0e19 terminal/shell \u2014 \u0e40\u0e02\u0e35\u0e22\u0e19 script \u0e17\u0e33 automation \u0e44\u0e14\u0e49 \u0e40\u0e1b\u0e47\u0e19 open-source (github.com/aws/aws-cli)",
            },
            {
              title: "AWS SDK \u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23?",
              description:
                "\u0e0a\u0e38\u0e14 library \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e20\u0e32\u0e29\u0e32 programming (JavaScript, Python, Java, .NET, ...) \u2014 \u0e40\u0e23\u0e35\u0e22\u0e01 AWS API \u0e44\u0e14\u0e49\u0e08\u0e32\u0e01 application code \u0e08\u0e23\u0e34\u0e07\u0e46\u0e41\u0e25\u0e49\u0e27 AWS CLI \u0e01\u0e47\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e1a\u0e19 Python SDK (boto3)",
            },
          ],
        },
      ],
    },
    {
      id: "security-tools",
      title: "Security Tools",
      content: [
        {
          type: "paragraph",
          text: "IAM \u0e21\u0e35\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22 2 \u0e15\u0e31\u0e27\u0e2b\u0e25\u0e31\u0e01:",
        },
        {
          type: "grid",
          items: [
            {
              title: "IAM Credentials Report (Account-level)",
              description:
                "\u0e23\u0e32\u0e22\u0e07\u0e32\u0e19 CSV \u0e17\u0e35\u0e48\u0e41\u0e2a\u0e14\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 credential \u0e02\u0e2d\u0e07\u0e17\u0e38\u0e01 user \u0e43\u0e19\u0e1a\u0e31\u0e0d\u0e0a\u0e35 \u2014 \u0e1a\u0e2d\u0e01\u0e27\u0e48\u0e32 user \u0e44\u0e2b\u0e19\u0e40\u0e1b\u0e34\u0e14 MFA, password/access key \u0e16\u0e39\u0e01\u0e43\u0e0a\u0e49\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e44\u0e23 \u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a audit security compliance",
            },
            {
              title: "IAM Access Advisor (User-level)",
              description:
                "\u0e41\u0e2a\u0e14\u0e07\u0e27\u0e48\u0e32 service \u0e17\u0e35\u0e48 user \u0e21\u0e35 permission \u0e16\u0e39\u0e01\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e08\u0e23\u0e34\u0e07\u0e04\u0e23\u0e31\u0e49\u0e07\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e44\u0e23 \u2014 \u0e43\u0e0a\u0e49\u0e23\u0e30\u0e1a\u0e38 permission \u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e41\u0e25\u0e49\u0e27\u0e25\u0e1a\u0e2d\u0e2d\u0e01\u0e15\u0e32\u0e21 Least Privilege",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "\u0e08\u0e33\u0e41\u0e22\u0e01\u0e43\u0e2b\u0e49\u0e0a\u0e31\u0e14",
          text: "Credentials Report = \u0e14\u0e39\u0e20\u0e32\u0e1e\u0e23\u0e27\u0e21\u0e17\u0e31\u0e49\u0e07\u0e1a\u0e31\u0e0d\u0e0a\u0e35 (account-level) | Access Advisor = \u0e14\u0e39\u0e23\u0e32\u0e22\u0e04\u0e19 (user-level) \u0e27\u0e48\u0e32\u0e43\u0e0a\u0e49 service \u0e44\u0e2b\u0e19\u0e08\u0e23\u0e34\u0e07\u0e1a\u0e49\u0e32\u0e07",
        },
      ],
    },
    {
      id: "best-practices",
      title: "Best Practices",
      content: [
        {
          type: "list",
          items: [
            "\u0e2d\u0e22\u0e48\u0e32\u0e43\u0e0a\u0e49 root account \u0e22\u0e01\u0e40\u0e27\u0e49\u0e19\u0e15\u0e2d\u0e19 setup \u0e1a\u0e31\u0e0d\u0e0a\u0e35 AWS \u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e23\u0e01\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19",
            "\u0e2b\u0e49\u0e32\u0e21 share root account \u2014 \u0e2a\u0e23\u0e49\u0e32\u0e07 IAM user \u0e41\u0e22\u0e01\u0e15\u0e48\u0e32\u0e07\u0e2b\u0e32\u0e01 1 \u0e04\u0e19\u0e15\u0e48\u0e2d\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e08\u0e23\u0e34\u0e07",
            "\u0e40\u0e1b\u0e34\u0e14 <strong>MFA</strong> \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a root account \u0e41\u0e25\u0e30 user \u0e17\u0e38\u0e01\u0e04\u0e19\u0e17\u0e35\u0e48\u0e2a\u0e33\u0e04\u0e31\u0e0d",
            "Assign permission \u0e1c\u0e48\u0e32\u0e19 <strong>Group</strong> \u0e41\u0e17\u0e19\u0e01\u0e32\u0e23 assign \u0e43\u0e2b\u0e49 User \u0e42\u0e14\u0e22\u0e15\u0e23\u0e07",
            "\u0e43\u0e0a\u0e49 <strong>Role</strong> \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a AWS services \u0e41\u0e17\u0e19\u0e01\u0e32\u0e23\u0e40\u0e01\u0e47\u0e1a Access Key \u0e43\u0e19 code",
            "\u0e15\u0e31\u0e49\u0e07 <strong>strong password policy</strong> \u0e41\u0e25\u0e30\u0e1a\u0e31\u0e07\u0e04\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19 password \u0e15\u0e32\u0e21\u0e23\u0e2d\u0e1a (rotation)",
            "Review permission \u0e40\u0e1b\u0e47\u0e19\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e14\u0e49\u0e27\u0e22 Credentials Report & Access Advisor",
            "\u0e2b\u0e49\u0e32\u0e21 embed Access Key \u0e25\u0e07\u0e43\u0e19 application code \u0e42\u0e14\u0e22\u0e40\u0e14\u0e47\u0e14\u0e02\u0e32\u0e14",
            "Rotate Access Keys \u0e2d\u0e22\u0e48\u0e32\u0e07\u0e2a\u0e21\u0e48\u0e33\u0e40\u0e2a\u0e21\u0e2d",
          ],
        },
      ],
    },
    {
      id: "shared-responsibility",
      title: "Shared Responsibility for IAM",
      content: [
        {
          type: "paragraph",
          text: "AWS \u0e43\u0e0a\u0e49\u0e42\u0e21\u0e40\u0e14\u0e25 <strong>Shared Responsibility</strong> \u2014 AWS \u0e23\u0e31\u0e1a\u0e1c\u0e34\u0e14\u0e0a\u0e2d\u0e1a\u0e2a\u0e48\u0e27\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07 \u0e25\u0e39\u0e01\u0e04\u0e49\u0e32\u0e23\u0e31\u0e1a\u0e1c\u0e34\u0e14\u0e0a\u0e2d\u0e1a\u0e2d\u0e35\u0e01\u0e2a\u0e48\u0e27\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07",
        },
        {
          type: "grid",
          items: [
            {
              title: "AWS Responsibility (Security OF the Cloud)",
              description:
                "\u0e14\u0e39\u0e41\u0e25 infrastructure \u0e02\u0e2d\u0e07 IAM service \u2014 \u0e23\u0e31\u0e1a\u0e1c\u0e34\u0e14\u0e0a\u0e2d\u0e1a availability, global infrastructure, compliance validation \u0e41\u0e25\u0e30 protection \u0e02\u0e2d\u0e07 IAM service \u0e40\u0e2d\u0e07",
            },
            {
              title: "Your Responsibility (Security IN the Cloud)",
              description:
                "\u0e2a\u0e23\u0e49\u0e32\u0e07/\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 Users, Groups, Roles, Policies \u2014 enable MFA, monitor user activity, rotate keys, \u0e25\u0e1a user \u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e49\u0e41\u0e25\u0e49\u0e27 \u0e41\u0e25\u0e30\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e08\u0e32\u0e01 CloudTrail",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>AWS:</strong> infrastructure, IAM service availability, global compliance",
            "<strong>You:</strong> manage Users / Groups / Roles / Policies",
            "<strong>You:</strong> enable MFA \u0e1a\u0e19\u0e17\u0e38\u0e01 account",
            "<strong>You:</strong> assign permission \u0e15\u0e32\u0e21 Least Privilege",
            "<strong>You:</strong> monitor user activity (CloudTrail) \u0e41\u0e25\u0e30 review credentials \u0e1b\u0e23\u0e30\u0e08\u0e33",
            "<strong>You:</strong> rotate access keys \u0e41\u0e25\u0e30\u0e15\u0e31\u0e49\u0e07 password policy",
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: "iam-q1",
      question:
        "Following AWS best practices, how should the AWS account root user be managed?",
      options: [
        "Use the root user for all daily administrative work to keep things simple.",
        "Enable MFA on the root user, lock away the credentials, and create separate IAM users for everyday tasks.",
        "Share root user credentials with the team so everyone has full access when needed.",
        "Delete the root user after creating an IAM user with AdministratorAccess.",
      ],
      correct: 1,
      explanation:
        "The root user has full, unrestricted access and cannot be deleted. AWS recommends enabling MFA on the root, securely storing the credentials, and creating IAM users (typically with appropriate group permissions) for everyday work. The root user should only be used for the few tasks that strictly require it (e.g., changing account settings, closing the account).",
    },
    {
      id: "iam-q2",
      question: "Which statement about IAM Groups is correct?",
      options: [
        "Groups can contain other groups (nested groups).",
        "An IAM user can belong to multiple groups, but groups cannot contain other groups.",
        "Groups can contain both users and IAM roles.",
        "A group must contain at least one user, otherwise it is automatically deleted.",
      ],
      correct: 1,
      explanation:
        "IAM Groups can only contain IAM users, not other groups (no nesting). A single user can be a member of multiple groups, and a group can also exist with no users. Groups cannot contain roles.",
    },
    {
      id: "iam-q3",
      question:
        "An EC2 instance needs to read objects from an S3 bucket. What is the AWS-recommended way to grant this access?",
      options: [
        "Create an IAM user, generate an access key, and store it on the EC2 instance.",
        "Use the AWS account root credentials in the application code.",
        "Create an IAM role with the required S3 permissions and attach it to the EC2 instance.",
        "Hard-code an access key and secret key into the application source code.",
      ],
      correct: 2,
      explanation:
        "IAM roles attached to EC2 instances provide temporary, automatically-rotated credentials via the instance metadata service. This is more secure than long-lived access keys and is the AWS-recommended pattern. Hard-coding keys or using root credentials are anti-patterns.",
    },
    {
      id: "iam-q4",
      question:
        "What does the principle of \"Least Privilege\" mean in IAM?",
      options: [
        "Granting AdministratorAccess to all users for convenience.",
        "Granting only the permissions required to perform a task — no more, no less.",
        "Granting permissions only to the root user.",
        "Granting no permissions to anyone by default.",
      ],
      correct: 1,
      explanation:
        "Least Privilege means giving an identity only the permissions it needs to perform its intended task. This limits the blast radius of compromised credentials and is a core IAM best practice.",
    },
    {
      id: "iam-q5",
      question:
        "Which of the following are valid MFA device options supported by AWS IAM? (Select the most complete answer.)",
      options: [
        "Only hardware key fobs are supported; virtual MFA apps are not allowed.",
        "MFA can only be enabled on the root user, not on IAM users.",
        "Virtual MFA devices (Google Authenticator, Authy), U2F security keys (e.g., YubiKey), and hardware MFA devices (key fobs) are all supported.",
        "MFA replaces the password — you no longer need to enter a password after enabling MFA.",
      ],
      correct: 2,
      explanation:
        "AWS supports virtual MFA devices (e.g., Google Authenticator, Authy), U2F security keys like YubiKey, and hardware key fobs. MFA is in addition to the password, not a replacement: it is something you have (device) plus something you know (password).",
    },
    {
      id: "iam-q6",
      question:
        "Which statement best describes the difference between an IAM user and an IAM role?",
      options: [
        "Users and roles are identical and interchangeable.",
        "An IAM user represents a specific person/service with long-term credentials, while an IAM role is assumed by trusted entities and provides temporary credentials.",
        "Roles can only be used by AWS services, never by humans.",
        "Users get temporary credentials, roles get permanent credentials.",
      ],
      correct: 1,
      explanation:
        "IAM users are identities tied to a person or application with long-term credentials (password and/or access keys). IAM roles are not tied to a specific identity; trusted entities (users, services, federated users) assume the role and receive temporary credentials via STS.",
    },
    {
      id: "iam-q7",
      question:
        "In which region should you create IAM users, groups, and roles?",
      options: [
        "Only in the us-east-1 region.",
        "In the region closest to your users.",
        "IAM is a global service — IAM resources are not region-specific.",
        "In every region you plan to use.",
      ],
      correct: 2,
      explanation:
        "IAM is a global service. Users, groups, roles, and policies are not tied to any region — they are available across all AWS regions in the account.",
    },
    {
      id: "iam-q8",
      question:
        "Which IAM policy element specifies whether the statement allows or denies access?",
      options: ["Action", "Resource", "Effect", "Principal"],
      correct: 2,
      explanation:
        "The Effect element of a policy statement is either Allow or Deny. Action specifies what API operations are covered, Resource specifies what objects, and Principal (in resource-based policies) specifies who.",
    },
    {
      id: "iam-q9",
      question:
        "What does an explicit Deny in an IAM policy do when there is also an explicit Allow for the same action?",
      options: [
        "The explicit Allow always overrides the Deny.",
        "The explicit Deny always overrides any Allow — access is denied.",
        "The most recent statement wins.",
        "The two statements cancel out and a prompt is shown.",
      ],
      correct: 1,
      explanation:
        "IAM evaluation logic: by default everything is denied; an explicit Allow grants access; but an explicit Deny always overrides any Allow. This is why Deny statements are powerful for guardrails.",
    },
    {
      id: "iam-q10",
      question:
        "An auditor needs a report showing the status of all IAM users in the account, including their MFA status, password age, and access key usage. Which IAM feature should be used?",
      options: [
        "IAM Access Advisor",
        "IAM Credentials Report",
        "AWS Config",
        "AWS CloudTrail",
      ],
      correct: 1,
      explanation:
        "The IAM Credentials Report is an account-level CSV report listing every user and the status of their credentials (password, access keys, MFA, etc.). Access Advisor is per-user and shows which services they have actually used.",
    },
    {
      id: "iam-q11",
      question:
        "Which IAM tool helps you identify unused permissions on an IAM user, group, or role so you can apply Least Privilege?",
      options: [
        "IAM Access Advisor",
        "IAM Credentials Report",
        "AWS Trusted Advisor",
        "AWS Inspector",
      ],
      correct: 0,
      explanation:
        "IAM Access Advisor shows which AWS services an identity has been granted access to and when those services were last accessed. It is used to detect and remove permissions that are not actually being used.",
    },
    {
      id: "iam-q12",
      question:
        "A company wants users to log in using their existing corporate Active Directory accounts instead of creating IAM users. Which IAM concept enables this?",
      options: [
        "IAM Groups",
        "Identity federation with IAM roles",
        "Resource-based policies",
        "Service Control Policies",
      ],
      correct: 1,
      explanation:
        "Identity federation lets external identity providers (such as Active Directory via SAML 2.0, or social IdPs) sign in to AWS by assuming an IAM role. This avoids the need to create individual IAM users for each employee.",
    },
    {
      id: "iam-q13",
      question:
        "Which two methods can an IAM user use to access AWS programmatically? (Select the most accurate answer.)",
      options: [
        "Email and SMS",
        "Access Key ID + Secret Access Key (used by CLI/SDK), and the Console password (used in the browser)",
        "Only the AWS Management Console password",
        "Only access keys",
      ],
      correct: 1,
      explanation:
        "Console access uses a username and password (with optional MFA). Programmatic access (CLI, SDK, REST API) uses an Access Key ID and Secret Access Key. A user may have both, only one, or neither.",
    },
    {
      id: "iam-q14",
      question:
        "Which of the following does an IAM password policy NOT allow you to configure?",
      options: [
        "Minimum password length",
        "Required character types (uppercase, lowercase, numbers, symbols)",
        "Password expiration period",
        "Automatic deletion of users with weak passwords",
      ],
      correct: 3,
      explanation:
        "An IAM password policy controls password length, required character types, expiration, prevention of reuse, and whether users can change their own password. It does not delete users — only enforces password requirements.",
    },
    {
      id: "iam-q15",
      question:
        "Under the AWS Shared Responsibility Model, who is responsible for managing IAM users, groups, roles, and policies inside an AWS account?",
      options: [
        "AWS — they fully manage IAM identities for customers.",
        "The customer — IAM identity management is the customer's responsibility.",
        "It is shared 50/50 between AWS and the customer.",
        "An AWS Partner Network (APN) partner only.",
      ],
      correct: 1,
      explanation:
        "AWS is responsible for the security OF the IAM service itself (infrastructure, availability). The customer is responsible for security IN the cloud — creating and managing users/groups/roles/policies, enabling MFA, rotating keys, and assigning least-privilege permissions.",
    },
    {
      id: "iam-q16",
      question:
        "What is the difference between an AWS managed policy and a customer managed policy?",
      options: [
        "AWS managed policies can be edited by the customer; customer managed policies cannot.",
        "AWS managed policies are created and maintained by AWS; customer managed policies are created and maintained by the customer.",
        "Customer managed policies cost extra, AWS managed policies are free.",
        "There is no difference — both terms refer to the same thing.",
      ],
      correct: 1,
      explanation:
        "AWS managed policies (e.g., AdministratorAccess, ReadOnlyAccess) are created and maintained by AWS and cannot be modified by the customer. Customer managed policies are created by the customer, fully editable, and can be reused across multiple identities.",
    },
    {
      id: "iam-q17",
      question:
        "Where are IAM access keys safely stored? (Choose the best practice.)",
      options: [
        "Embedded directly in application source code.",
        "In a public Git repository for easy sharing.",
        "Only displayed once at creation — store in a password manager or secrets manager and never share.",
        "Emailed to all team members.",
      ],
      correct: 2,
      explanation:
        "An IAM access key (Access Key ID + Secret Access Key) is shown only once when created. The secret should be stored in a password manager or a secrets management service (e.g., AWS Secrets Manager) and never embedded in source code or shared publicly.",
    },
    {
      id: "iam-q18",
      question:
        "Which of the following BEST describes an inline policy?",
      options: [
        "A policy embedded directly into a single user, group, or role and not reusable elsewhere.",
        "A policy created and maintained by AWS.",
        "A policy that automatically denies all access.",
        "A policy attached to multiple identities for reuse.",
      ],
      correct: 0,
      explanation:
        "An inline policy is embedded directly into a single principal (user, group, or role). It has a strict 1:1 relationship with that principal and cannot be reused. Managed policies (AWS or customer) are reusable across many identities.",
    },
    {
      id: "iam-q19",
      question:
        "Which CLF-C02 statement about IAM Roles is FALSE?",
      options: [
        "Roles use temporary security credentials issued by STS.",
        "Roles can be assumed by AWS services, IAM users, or federated users.",
        "Roles have permanent access keys that must be rotated regularly.",
        "Roles enable cross-account access without sharing long-term credentials.",
      ],
      correct: 2,
      explanation:
        "Roles do NOT have permanent access keys. They issue temporary credentials (via AWS STS) when assumed. The other statements are true.",
    },
    {
      id: "iam-q20",
      question:
        "A developer wants to grant a Lambda function permission to write to a DynamoDB table. What is the recommended approach?",
      options: [
        "Create an IAM user for the Lambda function and embed its access keys.",
        "Attach an IAM execution role with DynamoDB write permissions to the Lambda function.",
        "Use the AWS account root credentials in the function code.",
        "Make the DynamoDB table public.",
      ],
      correct: 1,
      explanation:
        "Lambda functions use an execution role — an IAM role assumed by the Lambda service that grants only the permissions the function needs (e.g., dynamodb:PutItem). This avoids long-lived credentials and follows least privilege.",
    },
    {
      id: "iam-q21",
      question:
        "Which of the following is NOT a valid IAM policy type?",
      options: [
        "Identity-based policy",
        "Resource-based policy",
        "Permissions boundary",
        "Region-based policy",
      ],
      correct: 3,
      explanation:
        "Region-based policy is not a thing in IAM. Identity-based, resource-based, permissions boundaries, Service Control Policies (SCPs in AWS Organizations), session policies, and ACLs are all valid IAM policy types.",
    },
    {
      id: "iam-q22",
      question:
        "An organization wants to set the maximum permissions that an IAM user can ever have, even if attached policies grant more. Which feature should they use?",
      options: [
        "Inline policy",
        "Permissions boundary",
        "Group policy",
        "Trust policy",
      ],
      correct: 1,
      explanation:
        "A permissions boundary defines the maximum permissions an identity-based policy can grant to an IAM user or role. Even if the attached policies allow more, the effective permissions are intersected with the boundary.",
    },
    {
      id: "iam-q23",
      question:
        "Which of the following is the recommended way to allow an application running outside of AWS (e.g., on-premises) to access AWS APIs?",
      options: [
        "Embed the AWS account root credentials in the application.",
        "Create an IAM user with programmatic access and use access keys, or use IAM Roles Anywhere/identity federation for short-lived credentials.",
        "Make all S3 buckets public.",
        "Disable IAM entirely.",
      ],
      correct: 1,
      explanation:
        "For on-premises workloads you can either (a) create an IAM user with access keys (rotate them regularly) or (b) use IAM Roles Anywhere or identity federation to obtain temporary credentials — the latter is preferred. Never use root credentials.",
    },
    {
      id: "iam-q24",
      question:
        "What happens if an IAM user has no policies attached at all?",
      options: [
        "They get full administrator access by default.",
        "They get read-only access by default.",
        "They have no permissions and cannot perform any AWS actions until a policy is attached.",
        "They inherit the root user's permissions.",
      ],
      correct: 2,
      explanation:
        "IAM follows an implicit deny model. Without an explicit Allow from an attached policy (directly, via group, or via assumed role), the user has no permissions.",
    },
    {
      id: "iam-q25",
      question:
        "Which statement about IAM access keys is TRUE?",
      options: [
        "An IAM user can have up to 5 active access keys at once.",
        "An IAM user can have a maximum of 2 access keys, which helps with seamless rotation.",
        "Access keys never expire and never need to be rotated.",
        "Access keys can only be used in the AWS Management Console.",
      ],
      correct: 1,
      explanation:
        "An IAM user can have up to 2 access keys simultaneously. This allows rotation: create the new key, update applications, then deactivate and delete the old key — all without downtime. Access keys are used for CLI/SDK/API access, not the Console.",
    },
    {
      id: "iam-q26",
      question:
        "What is the purpose of the Principal element in an IAM resource-based policy?",
      options: [
        "It specifies the AWS service being accessed.",
        "It specifies who (which user, role, account, or service) is allowed or denied access to the resource.",
        "It specifies the region the resource lives in.",
        "It specifies the cost of the action.",
      ],
      correct: 1,
      explanation:
        "Principal in a resource-based policy specifies who the policy applies to — e.g., a specific AWS account, IAM user/role ARN, or AWS service principal. Identity-based policies do not use Principal because the principal is implied by who the policy is attached to.",
    },
  ],
};
