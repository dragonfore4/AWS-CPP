import { TopicData } from "@/types/topic";

export const examTips: TopicData = {
  slug: "exam-tips",
  title: "Exam Tips & Strategy",
  subtitle: "CLF-C02 Format, Strategy & Resources",
  accent: "lime",
  emoji: "\ud83c\udf93",
  category: "Exam Preparation",
  description:
    "\u0e2a\u0e23\u0e38\u0e1b\u0e17\u0e38\u0e01\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e23\u0e39\u0e49\u0e01\u0e48\u0e2d\u0e19\u0e2a\u0e2d\u0e1a CLF-C02 \u2014 \u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a, \u0e2a\u0e31\u0e14\u0e2a\u0e48\u0e27\u0e19 domain, \u0e01\u0e25\u0e22\u0e38\u0e17\u0e18\u0e4c\u0e01\u0e32\u0e23\u0e17\u0e33\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a, \u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e2b\u0e32\u0e23\u0e40\u0e27\u0e25\u0e32 \u0e41\u0e25\u0e30 distractors \u0e17\u0e35\u0e48\u0e1e\u0e1a\u0e1a\u0e48\u0e2d\u0e22 \u0e1e\u0e23\u0e49\u0e2d\u0e21 resources \u0e1f\u0e23\u0e35\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e15\u0e23\u0e35\u0e22\u0e21\u0e15\u0e31\u0e27 \u0e41\u0e25\u0e30 next steps \u0e2b\u0e25\u0e31\u0e07\u0e2a\u0e2d\u0e1a\u0e1c\u0e48\u0e32\u0e19",
  keyPoints: [
    "\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a 65 \u0e02\u0e49\u0e2d \u0e40\u0e27\u0e25\u0e32 90 \u0e19\u0e32\u0e17\u0e35 \u2014 \u0e1c\u0e48\u0e32\u0e19\u0e17\u0e35\u0e48 700/1000 (\u2248 70%)",
    "4 Domains: Cloud Concepts 24%, Security 30%, Technology 34%, Billing 12%",
    "\u0e01\u0e25\u0e22\u0e38\u0e17\u0e18\u0e4c: \u0e15\u0e31\u0e14 distractors, mark for review, \u0e40\u0e25\u0e37\u0e2d\u0e01 AWS managed/serverless \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e25\u0e31\u0e07\u0e40\u0e25",
    "\u0e43\u0e1a\u0e23\u0e31\u0e1a\u0e23\u0e2d\u0e07\u0e2d\u0e22\u0e39\u0e48 3 \u0e1b\u0e35 \u2014 \u0e15\u0e48\u0e2d\u0e22\u0e2d\u0e14: SAA-C03, DVA-C02, SOA-C02",
  ],
  sections: [
    {
      id: "exam-overview",
      title: "CLF-C02 Exam Overview",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS Certified Cloud Practitioner (CLF-C02)</strong> \u0e04\u0e37\u0e2d certification \u0e23\u0e30\u0e14\u0e31\u0e1a foundational \u0e02\u0e2d\u0e07 AWS \u2014 \u0e40\u0e2b\u0e21\u0e32\u0e30\u0e01\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e2b\u0e23\u0e37\u0e2d\u0e1c\u0e39\u0e49\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08 cloud \u0e23\u0e30\u0e14\u0e31\u0e1a\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b",
        },
        {
          type: "grid",
          items: [
            {
              title: "Format",
              description:
                "65 \u0e02\u0e49\u0e2d \u2014 \u0e1c\u0e2a\u0e21\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07 <strong>Multiple choice</strong> (\u0e15\u0e2d\u0e1a\u0e16\u0e39\u0e01 1 \u0e02\u0e49\u0e2d\u0e08\u0e32\u0e01 4) \u0e41\u0e25\u0e30 <strong>Multi-select</strong> (\u0e15\u0e2d\u0e1a\u0e16\u0e39\u0e01 2+ \u0e02\u0e49\u0e2d\u0e08\u0e32\u0e01 5+)",
            },
            {
              title: "Duration",
              description: "<strong>90 \u0e19\u0e32\u0e17\u0e35</strong> \u2014 \u0e40\u0e09\u0e25\u0e35\u0e48\u0e22\u2248 1.4 \u0e19\u0e32\u0e17\u0e35/\u0e02\u0e49\u0e2d",
            },
            {
              title: "Passing Score",
              description: "<strong>700 / 1000</strong> (\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 70%) \u2014 scoring \u0e44\u0e21\u0e48\u0e16\u0e48\u0e27\u0e07\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01\u0e02\u0e49\u0e2d\u0e15\u0e48\u0e2d\u0e02\u0e49\u0e2d \u0e40\u0e1b\u0e47\u0e19 scaled score",
            },
            {
              title: "Cost",
              description: "<strong>$100 USD</strong> (\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 3,500 \u0e1a\u0e32\u0e17) \u2014 \u0e2a\u0e2d\u0e1a\u0e1c\u0e48\u0e32\u0e19\u0e44\u0e14\u0e49\u0e2a\u0e48\u0e27\u0e19\u0e25\u0e14 50% \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2a\u0e2d\u0e1a\u0e23\u0e2d\u0e1a\u0e16\u0e31\u0e14\u0e44\u0e1b",
            },
            {
              title: "Validity",
              description: "<strong>3 \u0e1b\u0e35</strong> \u2014 \u0e15\u0e48\u0e2d\u0e2d\u0e32\u0e22\u0e38\u0e44\u0e14\u0e49\u0e42\u0e14\u0e22\u0e2a\u0e2d\u0e1a recertification \u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e2d\u0e1a\u0e15\u0e31\u0e27 higher-level (Associate \u0e02\u0e36\u0e49\u0e19\u0e44\u0e1b)",
            },
            {
              title: "Delivery",
              description:
                "<strong>Online proctored</strong> (\u0e2a\u0e2d\u0e1a\u0e17\u0e35\u0e48\u0e1a\u0e49\u0e32\u0e19) \u0e2b\u0e23\u0e37\u0e2d <strong>Pearson VUE / PSI testing center</strong> (\u0e2a\u0e2d\u0e1a\u0e17\u0e35\u0e48\u0e28\u0e39\u0e19\u0e22\u0e4c\u0e2a\u0e2d\u0e1a)",
            },
          ],
        },
        {
          type: "paragraph",
          text: "<strong>\u0e20\u0e32\u0e29\u0e32\u0e17\u0e35\u0e48\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a:</strong> English, Japanese, Korean, Chinese (Simplified), Spanish, French, German, Indonesian, Italian, Portuguese (Brazil) \u2014 \u0e22\u0e31\u0e07<em>\u0e44\u0e21\u0e48\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e44\u0e17\u0e22</em> \u0e15\u0e49\u0e2d\u0e07\u0e2a\u0e2d\u0e1a English",
        },
        {
          type: "callout",
          variant: "tip",
          title: "ESL Time Extension",
          text: "\u0e16\u0e49\u0e32\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e1e\u0e39\u0e14\u0e20\u0e32\u0e29\u0e32\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29\u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e25\u0e31\u0e01 \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e02\u0e2d <strong>ESL +30 minutes</strong> (Non-native English) \u0e44\u0e14\u0e49\u0e1f\u0e23\u0e35\u0e1c\u0e48\u0e32\u0e19 AWS Certification portal \u2014 \u0e23\u0e27\u0e21\u0e40\u0e1b\u0e47\u0e19 120 \u0e19\u0e32\u0e17\u0e35",
        },
      ],
    },
    {
      id: "domain-breakdown",
      title: "Domain Breakdown",
      content: [
        {
          type: "paragraph",
          text: "CLF-C02 \u0e41\u0e1a\u0e48\u0e07\u0e2d\u0e2d\u0e01\u0e40\u0e1b\u0e47\u0e19 <strong>4 domains</strong> \u2014 \u0e23\u0e39\u0e49 weight \u0e02\u0e2d\u0e07\u0e41\u0e15\u0e48\u0e25\u0e30 domain \u0e08\u0e30\u0e0a\u0e48\u0e27\u0e22\u0e1b\u0e23\u0e31\u0e1a\u0e01\u0e25\u0e22\u0e38\u0e17\u0e18\u0e4c\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e44\u0e14\u0e49 \u2014 \u0e40\u0e19\u0e49\u0e19 Domain 3 \u0e21\u0e32\u0e01\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Domain 1: Cloud Concepts \u2014 24%",
              description:
                "Benefits \u0e02\u0e2d\u0e07 cloud computing, AWS Cloud economics (CapEx vs OpEx), design principles \u2014 \u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e21\u0e31\u0e01\u0e16\u0e32\u0e21\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 agility, scalability, elasticity, high availability",
            },
            {
              title: "Domain 2: Security & Compliance \u2014 30%",
              description:
                "Shared Responsibility Model, security/compliance concepts, IAM (Users, Groups, Roles, Policies), \u0e01\u0e32\u0e23 access management \u2014 \u0e44\u0e25\u0e1f\u0e4c\u0e2a\u0e39\u0e07\u0e21\u0e32\u0e01 \u0e08\u0e33 shared responsibility \u0e43\u0e2b\u0e49\u0e41\u0e21\u0e48\u0e19\u0e22\u0e33!",
            },
            {
              title: "Domain 3: Cloud Technology & Services \u2014 34%",
              description:
                "Domain \u0e17\u0e35\u0e48\u0e43\u0e2b\u0e0d\u0e48\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14 \u2014 deploying/operating, AWS Global Infrastructure (Regions, AZ, Edge), compute (EC2/Lambda), database (RDS/DynamoDB), networking (VPC), storage (S3/EBS), AI/ML services",
            },
            {
              title: "Domain 4: Billing, Pricing & Support \u2014 12%",
              description:
                "Pricing models (On-Demand, Reserved, Spot, Savings Plans), Organizations + AWS Budgets/Cost Explorer, Support Plans (Basic/Developer/Business/Enterprise), TAM, AWS Marketplace",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "\u0e08\u0e31\u0e14\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e2d\u0e48\u0e32\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e15\u0e32\u0e21 weight",
          text: "Domain 3 (34%) > Domain 2 (30%) > Domain 1 (24%) > Domain 4 (12%) \u2014 \u0e1f\u0e2d\u0e04\u0e31\u0e2a\u0e17\u0e35\u0e48 services + security \u0e01\u0e48\u0e2d\u0e19 \u2014 Billing \u0e2d\u0e48\u0e32\u0e19\u0e17\u0e35\u0e2b\u0e25\u0e31\u0e07 \u0e41\u0e15\u0e48\u0e22\u0e31\u0e07\u0e15\u0e49\u0e2d\u0e07\u0e23\u0e39\u0e49 (12% \u0e22\u0e31\u0e07 \u2248 8 \u0e02\u0e49\u0e2d)",
        },
      ],
    },
    {
      id: "question-types",
      title: "Question Types",
      content: [
        {
          type: "paragraph",
          text: "\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e21\u0e35 <strong>2 \u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a</strong> \u2014 \u0e2d\u0e48\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e43\u0e2b\u0e49\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14 \u0e2a\u0e31\u0e07\u0e40\u0e01\u0e15\u0e08\u0e33\u0e19\u0e27\u0e19\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e15\u0e2d\u0e1a:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Multiple Choice",
              description:
                "<strong>1 \u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e08\u0e32\u0e01 4 \u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01</strong> \u2014 \u0e1e\u0e1a\u0e1a\u0e48\u0e2d\u0e22\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14 \u0e16\u0e49\u0e32\u0e21\u0e35\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e16\u0e39\u0e01\u0e2b\u0e25\u0e32\u0e22\u0e02\u0e49\u0e2d \u2014 \u0e40\u0e25\u0e37\u0e2d\u0e01\u0e17\u0e35\u0e48 <em>best/most appropriate</em>",
            },
            {
              title: "Multi-Select",
              description:
                "<strong>2+ \u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e08\u0e32\u0e01 5+ \u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01</strong> \u2014 \u0e02\u0e49\u0e2d\u0e08\u0e30\u0e1a\u0e2d\u0e01\u0e0a\u0e31\u0e14\u0e40\u0e08\u0e19 \"Select TWO\" / \"Choose THREE\" \u2014 \u0e15\u0e49\u0e2d\u0e07\u0e15\u0e2d\u0e1a\u0e16\u0e39\u0e01\u0e2b\u0e21\u0e14\u0e16\u0e36\u0e07\u0e08\u0e30\u0e44\u0e14\u0e49\u0e04\u0e30\u0e41\u0e19\u0e19",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Keywords \u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e23\u0e30\u0e27\u0e31\u0e07!",
          text: "\u0e2d\u0e48\u0e32\u0e19\u0e23\u0e2d\u0e1a\u0e04\u0e2d\u0e1a 2 \u0e23\u0e2d\u0e1a \u2014 \u0e2a\u0e31\u0e07\u0e40\u0e01\u0e15\u0e04\u0e33\u0e1b\u0e0f\u0e34\u0e40\u0e2a\u0e18\u0e40\u0e0a\u0e48\u0e19 <strong>NOT</strong>, <strong>EXCEPT</strong>, <strong>NEVER</strong> \u0e41\u0e25\u0e30 keywords \u0e23\u0e30\u0e1a\u0e38\u0e08\u0e33\u0e19\u0e27\u0e19 \u0e40\u0e0a\u0e48\u0e19 \"select TWO\", \"choose THREE\" \u2014 \u0e2d\u0e48\u0e32\u0e19\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e08\u0e30\u0e15\u0e2d\u0e1a\u0e1c\u0e34\u0e14\u0e17\u0e31\u0e19\u0e17\u0e35",
        },
      ],
    },
    {
      id: "answering-strategy",
      title: "Answering Strategy",
      content: [
        {
          type: "paragraph",
          text: "\u0e01\u0e25\u0e22\u0e38\u0e17\u0e18\u0e4c\u0e15\u0e2d\u0e1a\u0e02\u0e49\u0e2d\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e21\u0e35\u0e23\u0e30\u0e1a\u0e1a \u2014 \u0e0a\u0e48\u0e27\u0e22\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e08\u0e32\u0e01\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e17\u0e2b\u0e23\u0e37\u0e2d distractors:",
        },
        {
          type: "list",
          items: [
            "<strong>1. \u0e2d\u0e48\u0e32\u0e19\u0e04\u0e33\u0e16\u0e32\u0e21\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14</strong> \u2014 \u0e08\u0e31\u0e1a keywords (NOT, EXCEPT, BEST, MOST cost-effective, MOST highly available)",
            "<strong>2. \u0e15\u0e31\u0e14\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e17\u0e35\u0e48\u0e1c\u0e34\u0e14\u0e0a\u0e31\u0e14\u0e40\u0e08\u0e19\u0e01\u0e48\u0e2d\u0e19</strong> \u2014 \u0e40\u0e2b\u0e25\u0e37\u0e2d 2-3 \u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e08\u0e30\u0e07\u0e48\u0e32\u0e22\u0e02\u0e36\u0e49\u0e19",
            "<strong>3. \u0e2b\u0e32 AWS keywords</strong>: \"managed\" \u2192 AWS service (RDS/Lambda); \"automatic scaling\" \u2192 ASG/serverless; \"no infrastructure\" \u2192 Lambda/Fargate; \"global low-latency\" \u2192 CloudFront",
            "<strong>4. \u0e15\u0e34\u0e14\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07  2 \u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01?</strong> \u2014 \u0e40\u0e25\u0e37\u0e2d\u0e01 AWS-recommended/managed \u0e44\u0e27\u0e49\u0e01\u0e48\u0e2d\u0e19 (e.g. RDS \u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32 EC2 + DB self-managed)",
            "<strong>5. \u0e2d\u0e22\u0e48\u0e32\u0e04\u0e34\u0e14\u0e21\u0e32\u0e01\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b</strong> \u2014 instinct \u0e41\u0e23\u0e01\u0e21\u0e31\u0e01\u0e08\u0e30\u0e16\u0e39\u0e01 \u0e2d\u0e22\u0e48\u0e32\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e22\u0e01\u0e40\u0e27\u0e49\u0e19\u0e21\u0e31\u0e48\u0e19\u0e43\u0e08\u0e08\u0e23\u0e34\u0e07\u0e46",
            "<strong>6. Mark for review</strong> \u2014 \u0e16\u0e49\u0e32\u0e15\u0e34\u0e14\u0e02\u0e31\u0e14 \u0e02\u0e49\u0e32\u0e21\u0e44\u0e1b\u0e01\u0e48\u0e2d\u0e19 \u0e41\u0e25\u0e49\u0e27\u0e01\u0e25\u0e31\u0e1a\u0e21\u0e32\u0e17\u0e35\u0e2b\u0e25\u0e31\u0e07 \u2014 \u0e2d\u0e22\u0e48\u0e32\u0e1b\u0e25\u0e48\u0e2d\u0e22\u0e02\u0e49\u0e2d\u0e27\u0e48\u0e32\u0e07!",
            "<strong>7. Don't leave blanks</strong> \u2014 \u0e44\u0e21\u0e48\u0e21\u0e35 penalty \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e15\u0e2d\u0e1a\u0e1c\u0e34\u0e14 \u2014 \u0e40\u0e14\u0e32\u0e01\u0e47\u0e22\u0e31\u0e07\u0e14\u0e35\u0e01\u0e27\u0e48\u0e32\u0e44\u0e21\u0e48\u0e15\u0e2d\u0e1a",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "AWS Keyword Hints",
          text: "\u0e08\u0e33\u0e44\u0e27\u0e49: \"fully managed\" = RDS, DynamoDB, Lambda | \"serverless\" = Lambda, Fargate, S3, DynamoDB | \"global\" = CloudFront, Route 53, IAM | \"highly available\" = Multi-AZ, ELB | \"cost-effective\" = Spot, Savings Plans, S3 Glacier",
        },
      ],
    },
    {
      id: "common-distractors",
      title: "Common Distractors / Tricky Questions",
      content: [
        {
          type: "paragraph",
          text: "\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e21\u0e31\u0e01\u0e15\u0e31\u0e49\u0e07 distractors \u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e01\u0e25\u0e49\u0e40\u0e04\u0e35\u0e22\u0e07\u0e01\u0e31\u0e1a\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e08\u0e23\u0e34\u0e07 \u2014 \u0e15\u0e49\u0e2d\u0e07\u0e23\u0e39\u0e49\u0e04\u0e27\u0e32\u0e21\u0e15\u0e48\u0e32\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e0a\u0e31\u0e14\u0e40\u0e08\u0e19:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Agility vs Scalability vs Elasticity",
              description:
                "<strong>Agility</strong> = \u0e04\u0e27\u0e32\u0e21\u0e40\u0e23\u0e47\u0e27\u0e43\u0e19\u0e01\u0e32\u0e23 provisioning (\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48 scaling) | <strong>Scalability</strong> = \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a load \u0e17\u0e35\u0e48\u0e43\u0e2b\u0e0d\u0e48\u0e02\u0e36\u0e49\u0e19\u0e44\u0e14\u0e49 | <strong>Elasticity</strong> = auto-scale \u0e02\u0e36\u0e49\u0e19/\u0e25\u0e07\u0e15\u0e32\u0e21 demand",
            },
            {
              title: "Region vs AZ vs Edge",
              description:
                "<strong>Region</strong> \u0e21\u0e35\u0e2b\u0e25\u0e32\u0e22 AZ | <strong>AZ</strong> \u0e21\u0e35\u0e2b\u0e25\u0e32\u0e22 data center (1+) | <strong>Edge Location</strong> \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a CloudFront \u2014 \u0e21\u0e35\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32 Region",
            },
            {
              title: "EBS vs Instance Store",
              description:
                "<strong>EBS</strong> = network drive, persistent (\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2d\u0e22\u0e39\u0e48\u0e16\u0e36\u0e07\u0e41\u0e21\u0e49\u0e15\u0e2d\u0e19 instance \u0e14\u0e31\u0e1a) | <strong>Instance Store</strong> = physical disk, ephemeral (\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2b\u0e32\u0e22\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e14\u0e31\u0e1a)",
            },
            {
              title: "Multi-AZ vs Read Replica",
              description:
                "<strong>Multi-AZ</strong> = HA + automatic failover (synchronous, standby) | <strong>Read Replica</strong> = \u0e02\u0e22\u0e32\u0e22 read performance (asynchronous, \u0e2d\u0e48\u0e32\u0e19\u0e44\u0e14\u0e49\u0e08\u0e23\u0e34\u0e07)",
            },
            {
              title: "NACL vs Security Group",
              description:
                "<strong>NACL</strong> = stateless, ALLOW + DENY, subnet level | <strong>Security Group</strong> = stateful, ALLOW only, instance/ENI level",
            },
            {
              title: "ALB vs NLB",
              description:
                "<strong>ALB</strong> = Layer 7 (HTTP/HTTPS), path/host routing | <strong>NLB</strong> = Layer 4 (TCP/UDP/TLS), \u0e1c\u0e25\u0e07\u0e32\u0e19\u0e2a\u0e39\u0e07, low-latency, static IP",
            },
            {
              title: "CloudWatch vs CloudTrail",
              description:
                "<strong>CloudWatch</strong> = metrics + logs (performance monitoring) | <strong>CloudTrail</strong> = API audit log (governance/compliance) \u2014 \"\u0e43\u0e04\u0e23\u0e17\u0e33\u0e2d\u0e30\u0e44\u0e23\u0e25\u0e07\u0e44\u0e1b?\"",
            },
            {
              title: "KMS vs CloudHSM",
              description:
                "<strong>KMS</strong> = software, AWS-managed keys, multi-tenant | <strong>CloudHSM</strong> = hardware (FIPS 140-2 Level 3), customer-managed keys, single-tenant",
            },
            {
              title: "Rekognition vs Comprehend vs Transcribe vs Polly",
              description:
                "<strong>Rekognition</strong> = images/video | <strong>Comprehend</strong> = text NLP (sentiment) | <strong>Transcribe</strong> = speech \u2192 text | <strong>Polly</strong> = text \u2192 speech",
            },
            {
              title: "S3 Storage Classes",
              description:
                "<strong>Standard</strong> (frequent) | <strong>Standard-IA</strong> (\u0e44\u0e21\u0e48\u0e1a\u0e48\u0e2d\u0e22) | <strong>One Zone-IA</strong> (1 AZ) | <strong>Glacier Instant/Flexible/Deep</strong> (archival)",
            },
            {
              title: "SNS vs SQS",
              description:
                "<strong>SNS</strong> = pub/sub, push, fanout (1 \u2192 many) | <strong>SQS</strong> = queue, pull, decouple producer-consumer",
            },
            {
              title: "Organizations vs Control Tower",
              description:
                "<strong>Organizations</strong> = consolidated billing + SCP | <strong>Control Tower</strong> = \u0e15\u0e31\u0e49\u0e07 multi-account environment \u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e23\u0e39\u0e1b (built on Organizations)",
            },
          ],
        },
      ],
    },
    {
      id: "time-management",
      title: "Time Management",
      content: [
        {
          type: "paragraph",
          text: "\u0e21\u0e35 90 \u0e19\u0e32\u0e17\u0e35\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a 65 \u0e02\u0e49\u0e2d \u2014 \u0e40\u0e09\u0e25\u0e35\u0e48\u0e22<strong>\u2248 1.4 \u0e19\u0e32\u0e17\u0e35\u0e15\u0e48\u0e2d\u0e02\u0e49\u0e2d</strong> \u2014 \u0e41\u0e1a\u0e48\u0e07\u0e44\u0e14\u0e49\u0e40\u0e1b\u0e47\u0e19 3 passes:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Pass 1: Easy Questions (\u224845 min)",
              description:
                "\u0e15\u0e2d\u0e1a\u0e02\u0e49\u0e2d\u0e07\u0e48\u0e32\u0e22\u0e17\u0e31\u0e19\u0e17\u0e35\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 50 \u0e02\u0e49\u0e2d \u2014 \u0e02\u0e49\u0e2d\u0e44\u0e2b\u0e19\u0e44\u0e21\u0e48\u0e21\u0e31\u0e48\u0e19\u0e43\u0e08\u0e43\u0e2b\u0e49 mark for review \u2014 \u0e2d\u0e22\u0e48\u0e32\u0e40\u0e2a\u0e35\u0e22\u0e40\u0e27\u0e25\u0e32\u0e01\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e22\u0e32\u0e01",
            },
            {
              title: "Pass 2: Marked Questions (\u224830 min)",
              description:
                "\u0e01\u0e25\u0e31\u0e1a\u0e21\u0e32\u0e17\u0e35\u0e48\u0e02\u0e49\u0e2d\u0e22\u0e32\u0e01\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 15 \u0e02\u0e49\u0e2d \u2014 \u0e43\u0e0a\u0e49 elimination \u0e41\u0e25\u0e30 keywords \u0e0a\u0e48\u0e27\u0e22\u0e15\u0e31\u0e14\u0e2a\u0e34\u0e19\u0e43\u0e08",
            },
            {
              title: "Pass 3: Final Review (\u224815 min)",
              description:
                "\u0e15\u0e23\u0e27\u0e08\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e17\u0e35\u0e48\u0e15\u0e2d\u0e1a\u0e44\u0e1b \u2014 \u0e22\u0e37\u0e19\u0e22\u0e31\u0e19 multi-select \u0e15\u0e34\u0e01 \u0e15\u0e23\u0e07\u0e08\u0e33\u0e19\u0e27\u0e19 \u2014 <em>\u0e2d\u0e22\u0e48\u0e32\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e16\u0e49\u0e32\u0e44\u0e21\u0e48\u0e21\u0e31\u0e48\u0e19\u0e43\u0e08\u0e08\u0e23\u0e34\u0e07\u0e46</em>",
            },
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Watch the Clock",
          text: "\u0e16\u0e49\u0e32\u0e02\u0e49\u0e2d\u0e44\u0e2b\u0e19\u0e43\u0e0a\u0e49\u0e40\u0e27\u0e25\u0e32 > 2 \u0e19\u0e32\u0e17\u0e35 \u2014 mark + \u0e1c\u0e48\u0e32\u0e19\u0e44\u0e1b\u0e01\u0e48\u0e2d\u0e19 \u2014 \u0e02\u0e49\u0e2d\u0e07\u0e48\u0e32\u0e22\u0e22\u0e31\u0e07\u0e23\u0e2d\u0e2d\u0e22\u0e39\u0e48 \u0e2d\u0e22\u0e48\u0e32\u0e08\u0e21\u0e2d\u0e22\u0e39\u0e48\u0e01\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e40\u0e14\u0e35\u0e22\u0e27 \u2014 \u0e08\u0e30\u0e40\u0e2a\u0e35\u0e22\u0e04\u0e30\u0e41\u0e19\u0e19\u0e1f\u0e23\u0e35\u0e44\u0e1b\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e21\u0e48\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19",
        },
      ],
    },
    {
      id: "day-before-day-of",
      title: "Day Before & Day Of",
      content: [
        {
          type: "grid",
          items: [
            {
              title: "Night Before",
              description:
                "<strong>\u0e19\u0e2d\u0e19\u0e1e\u0e31\u0e01\u0e1c\u0e48\u0e2d\u0e19\u0e04\u0e25\u0e32\u0e22</strong> 7-8 \u0e0a\u0e21. \u2014 \u0e2d\u0e22\u0e48\u0e32 cram \u0e14\u0e36\u0e01\u0e46 \u2014 review \u0e02\u0e49\u0e2d\u0e2a\u0e23\u0e38\u0e1b\u0e2a\u0e31\u0e49\u0e19\u0e46 \u2014 \u0e08\u0e31\u0e14\u0e40\u0e15\u0e23\u0e35\u0e22\u0e21 ID + \u0e2d\u0e38\u0e1b\u0e01\u0e23\u0e13\u0e4c\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32",
            },
            {
              title: "Morning of Exam",
              description:
                "\u0e17\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e40\u0e1a\u0e32\u0e46 (\u0e44\u0e21\u0e48\u0e2d\u0e34\u0e48\u0e21\u0e40\u0e01\u0e34\u0e19) \u2014 \u0e14\u0e37\u0e48\u0e21\u0e19\u0e49\u0e33\u0e43\u0e2b\u0e49\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e1e\u0e2d \u2014 \u0e40\u0e02\u0e49\u0e32\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e01\u0e48\u0e2d\u0e19\u0e2a\u0e2d\u0e1a (\u0e44\u0e21\u0e48\u0e21\u0e35 break \u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e2a\u0e2d\u0e1a)",
            },
            {
              title: "Online Proctored",
              description:
                "\u0e2b\u0e49\u0e2d\u0e07<strong>\u0e40\u0e07\u0e35\u0e22\u0e1a + \u0e1b\u0e34\u0e14\u0e21\u0e34\u0e14\u0e0a\u0e34\u0e14</strong>, internet \u0e40\u0e2a\u0e16\u0e35\u0e22\u0e23, webcam \u0e40\u0e1b\u0e34\u0e14, \u0e2a\u0e21\u0e32\u0e23\u0e4c\u0e17\u0e42\u0e1f\u0e19\u0e1b\u0e34\u0e14, <strong>\u0e02\u0e2d\u0e07\u0e1a\u0e19\u0e42\u0e15\u0e4a\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e2a\u0e30\u0e2d\u0e32\u0e14</strong> \u2014 \u0e44\u0e21\u0e48\u0e21\u0e35\u0e01\u0e23\u0e30\u0e14\u0e32\u0e29\u0e08\u0e14",
            },
            {
              title: "Testing Center",
              description:
                "\u0e44\u0e1b\u0e16\u0e36\u0e07\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32 30 \u0e19\u0e32\u0e17\u0e35 \u2014 \u0e19\u0e33 <strong>2 valid IDs</strong> (1 \u0e21\u0e35\u0e23\u0e39\u0e1b) \u2014 fingerprint/photo check-in \u2014 \u0e25\u0e47\u0e2d\u0e04\u0e40\u0e01\u0e2d\u0e23\u0e4c\u0e02\u0e2d\u0e07\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27",
            },
          ],
        },
        {
          type: "list",
          items: [
            "<strong>\u0e44\u0e21\u0e48\u0e21\u0e35\u0e1e\u0e31\u0e01\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e2a\u0e2d\u0e1a</strong> \u2014 \u0e16\u0e49\u0e32\u0e25\u0e38\u0e01\u0e44\u0e1b\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33 = \u0e2b\u0e21\u0e14\u0e40\u0e27\u0e25\u0e32 + \u0e16\u0e39\u0e01 disqualified \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a online proctored",
            "\u0e2b\u0e32\u0e22\u0e43\u0e08\u0e25\u0e36\u0e01\u0e46\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e02\u0e49\u0e2d\u0e22\u0e32\u0e01 \u2014 \u0e2a\u0e21\u0e2d\u0e07\u0e08\u0e30\u0e44\u0e14\u0e49\u0e23\u0e35\u0e40\u0e0b\u0e47\u0e15",
            "\u0e2d\u0e48\u0e32\u0e19\u0e1c\u0e25 immediate \u0e2b\u0e25\u0e31\u0e07\u0e08\u0e1a (Pass / Fail) \u2014 \u0e04\u0e30\u0e41\u0e19\u0e19 official \u0e21\u0e32\u0e20\u0e32\u0e22\u0e2b\u0e25\u0e31\u0e07 24-72 \u0e0a\u0e21.",
            "\u0e16\u0e49\u0e32 fail \u2014 \u0e23\u0e2d\u0e44\u0e14\u0e49 14 \u0e27\u0e31\u0e19\u0e16\u0e36\u0e07\u0e08\u0e30\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e2a\u0e2d\u0e1a\u0e23\u0e2d\u0e1a\u0e43\u0e2b\u0e21\u0e48\u0e44\u0e14\u0e49 (\u0e08\u0e48\u0e32\u0e22 $100 \u0e23\u0e2d\u0e1a\u0e43\u0e2b\u0e21\u0e48)",
          ],
        },
      ],
    },
    {
      id: "study-strategy",
      title: "Study Strategy",
      content: [
        {
          type: "paragraph",
          text: "\u0e41\u0e1c\u0e19\u0e2d\u0e48\u0e32\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a CLF-C02 \u2014 \u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 1-3 \u0e40\u0e14\u0e37\u0e2d\u0e19 \u0e02\u0e36\u0e49\u0e19\u0e2d\u0e22\u0e39\u0e48\u0e01\u0e31\u0e1a\u0e1e\u0e37\u0e49\u0e19\u0e10\u0e32\u0e19:",
        },
        {
          type: "list",
          items: [
            "<strong>1. \u0e14\u0e39 video course</strong> \u2014 Stephane Maarek (Udemy), Adrian Cantrill, AWS Skill Builder \u2014 \u0e08\u0e1a\u0e17\u0e38\u0e01 section",
            "<strong>2. \u0e08\u0e14\u0e42\u0e19\u0e49\u0e15</strong> \u2014 \u0e2b\u0e23\u0e37\u0e2d\u0e43\u0e0a\u0e49 summary notes (\u0e40\u0e0a\u0e48\u0e19\u0e40\u0e27\u0e47\u0e1a\u0e19\u0e35\u0e49!) \u2014 \u0e0a\u0e48\u0e27\u0e22 retention",
            "<strong>3. Hands-on practice</strong> \u2014 \u0e43\u0e0a\u0e49 AWS Free Tier \u0e2a\u0e23\u0e49\u0e32\u0e07 EC2, S3, Lambda \u0e08\u0e23\u0e34\u0e07\u0e46 \u2014 \u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e25\u0e36\u0e01\u0e02\u0e36\u0e49\u0e19\u0e21\u0e32\u0e01",
            "<strong>4. \u0e17\u0e33 practice exams</strong> \u2014 Stephane \u0e21\u0e35 6 sets \u0e1a\u0e19 Udemy / Tutorials Dojo \u0e02\u0e2d\u0e07 Jon Bonso \u0e01\u0e47\u0e14\u0e35\u0e21\u0e32\u0e01 \u2014 \u0e21\u0e38\u0e48\u0e07 <strong>80%+</strong> \u0e01\u0e48\u0e2d\u0e19\u0e08\u0e2d\u0e07\u0e2a\u0e2d\u0e1a\u0e08\u0e23\u0e34\u0e07",
            "<strong>5. Review wrong answers</strong> \u2014 \u0e2d\u0e48\u0e32\u0e19 explanation \u0e17\u0e38\u0e01\u0e02\u0e49\u0e2d (\u0e23\u0e27\u0e21\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48\u0e15\u0e2d\u0e1a\u0e16\u0e39\u0e01) \u2014 \u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e27\u0e48\u0e32\u0e17\u0e33\u0e44\u0e21\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2d\u0e37\u0e48\u0e19\u0e16\u0e36\u0e07\u0e1c\u0e34\u0e14",
            "<strong>6. Mock exam \u0e08\u0e31\u0e1a\u0e40\u0e27\u0e25\u0e32 90 min</strong> \u2014 \u0e1d\u0e36\u0e01 time pressure \u0e02\u0e2d\u0e07\u0e08\u0e23\u0e34\u0e07",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Spaced Repetition",
          text: "\u0e2d\u0e48\u0e32\u0e19\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07 cram \u0e23\u0e27\u0e14\u0e40\u0e14\u0e35\u0e22\u0e27 \u2014 \u0e41\u0e1a\u0e48\u0e07\u0e2d\u0e48\u0e32\u0e19 30 \u0e19\u0e32\u0e17\u0e35/\u0e27\u0e31\u0e19 \u0e2b\u0e25\u0e32\u0e22\u0e2a\u0e31\u0e1b\u0e14\u0e32\u0e2b\u0e4c \u2014 \u0e08\u0e33\u0e44\u0e14\u0e49\u0e14\u0e35\u0e01\u0e27\u0e48\u0e32\u0e2d\u0e48\u0e32\u0e19 8 \u0e0a\u0e21. \u0e23\u0e27\u0e14\u0e40\u0e14\u0e35\u0e22\u0e27",
        },
      ],
    },
    {
      id: "free-resources",
      title: "Free Resources",
      content: [
        {
          type: "paragraph",
          text: "AWS \u0e21\u0e35 resources \u0e1f\u0e23\u0e35\u0e21\u0e32\u0e01\u0e21\u0e32\u0e22\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Cloud Practitioner \u2014 \u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e08\u0e48\u0e32\u0e22\u0e40\u0e07\u0e34\u0e19:",
        },
        {
          type: "grid",
          items: [
            {
              title: "AWS Skill Builder",
              description:
                "<strong>AWS Cloud Practitioner Essentials</strong> (free) \u2014 official course \u0e08\u0e32\u0e01 AWS \u2014 \u0e21\u0e35 quiz + lab \u0e1f\u0e23\u0e35",
            },
            {
              title: "AWS Whitepapers",
              description:
                "<strong>Overview of AWS</strong>, <strong>Architecting for the Cloud</strong>, <strong>How AWS Pricing Works</strong> \u2014 \u0e2d\u0e48\u0e32\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e49\u0e2d\u0e22 3 \u0e15\u0e31\u0e27\u0e19\u0e35\u0e49",
            },
            {
              title: "AWS Documentation",
              description:
                "docs.aws.amazon.com \u2014 \u0e2d\u0e48\u0e32\u0e19 FAQ \u0e02\u0e2d\u0e07\u0e41\u0e15\u0e48\u0e25\u0e30 service (EC2, S3, RDS, ...) \u2014 \u0e2a\u0e31\u0e49\u0e19\u0e41\u0e15\u0e48\u0e44\u0e14\u0e49\u0e43\u0e08\u0e04\u0e27\u0e32\u0e21",
            },
            {
              title: "AWS YouTube",
              description:
                "Channel \"Amazon Web Services\" \u2014 AWS re:Invent talks, AWS Events, This Is My Architecture",
            },
            {
              title: "Sample Questions",
              description:
                "AWS \u0e21\u0e35 <strong>10 sample questions</strong> \u0e2d\u0e22\u0e39\u0e48\u0e1a\u0e19\u0e2b\u0e19\u0e49\u0e32 exam guide \u2014 \u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e08\u0e23\u0e34\u0e07",
            },
            {
              title: "Exam Guide (PDF)",
              description:
                "AWS \u0e1b\u0e25\u0e48\u0e2d\u0e22 official Exam Guide \u0e1f\u0e23\u0e35 \u2014 \u0e23\u0e30\u0e1a\u0e38 domain weights, in-scope/out-of-scope topics \u2014 <strong>\u0e15\u0e49\u0e2d\u0e07\u0e2d\u0e48\u0e32\u0e19!</strong>",
            },
          ],
        },
      ],
    },
    {
      id: "after-passing",
      title: "What to Do After Passing",
      content: [
        {
          type: "paragraph",
          text: "\u0e2a\u0e2d\u0e1a\u0e1c\u0e48\u0e32\u0e19\u0e41\u0e25\u0e49\u0e27\u0e22\u0e34\u0e19\u0e14\u0e35\u0e14\u0e49\u0e27\u0e22! \u2014 \u0e21\u0e35\u0e2d\u0e30\u0e44\u0e23\u0e15\u0e49\u0e2d\u0e07\u0e17\u0e33\u0e15\u0e48\u0e2d\u0e44\u0e1b:",
        },
        {
          type: "list",
          items: [
            "<strong>1. \u0e23\u0e31\u0e1a Digital Badge + Certificate</strong> \u2014 \u0e08\u0e32\u0e01 AWS Certification portal (Credly) \u2014 \u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14 PDF \u0e44\u0e1b\u0e1b\u0e23\u0e34\u0e49\u0e19\u0e2b\u0e23\u0e37\u0e2d\u0e41\u0e0a\u0e23\u0e4c social",
            "<strong>2. \u0e2d\u0e31\u0e1b\u0e40\u0e14\u0e15 LinkedIn / Resume</strong> \u2014 \u0e40\u0e1e\u0e34\u0e48\u0e21 certification \u0e44\u0e27\u0e49\u0e43\u0e19 Licenses & Certifications",
            "<strong>3. Voucher 50% off</strong> \u2014 AWS \u0e43\u0e2b\u0e49 voucher \u0e2a\u0e48\u0e27\u0e19\u0e25\u0e14 50% \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2a\u0e2d\u0e1a\u0e23\u0e2d\u0e1a\u0e16\u0e31\u0e14\u0e44\u0e1b (\u0e15\u0e49\u0e2d\u0e07\u0e2a\u0e2d\u0e1a\u0e20\u0e32\u0e22\u0e43\u0e19 1 \u0e1b\u0e35)",
            "<strong>4. Renew \u0e17\u0e38\u0e01 3 \u0e1b\u0e35</strong> \u2014 \u0e2a\u0e2d\u0e1a recertification (\u0e1f\u0e23\u0e35\u0e16\u0e49\u0e32\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e2b\u0e21\u0e14\u0e2d\u0e32\u0e22\u0e38) \u0e2b\u0e23\u0e37\u0e2d\u0e2d\u0e31\u0e1e higher cert (Associate \u0e02\u0e36\u0e49\u0e19\u0e44\u0e1b\u0e08\u0e30 renew \u0e15\u0e31\u0e27\u0e25\u0e48\u0e32\u0e07\u0e43\u0e2b\u0e49\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34)",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Solutions Architect Associate (SAA-C03)",
              description:
                "<strong>\u0e22\u0e2d\u0e14\u0e19\u0e34\u0e22\u0e21\u0e2d\u0e31\u0e19\u0e14\u0e31\u0e1a 1</strong> \u2014 \u0e2d\u0e2d\u0e01\u0e41\u0e1a\u0e1a architecture \u0e1a\u0e19 AWS \u2014 \u0e40\u0e2b\u0e21\u0e32\u0e30\u0e01\u0e31\u0e1a\u0e17\u0e38\u0e01\u0e2a\u0e32\u0e22\u0e07\u0e32\u0e19 \u2014 \u0e02\u0e31\u0e49\u0e19\u0e15\u0e48\u0e2d\u0e44\u0e1b\u0e2a\u0e48\u0e27\u0e19\u0e21\u0e32\u0e01",
            },
            {
              title: "Developer Associate (DVA-C02)",
              description:
                "\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e40\u0e02\u0e35\u0e22\u0e19\u0e42\u0e04\u0e49\u0e14 \u2014 Lambda, DynamoDB, API Gateway, CI/CD, SDK",
            },
            {
              title: "SysOps Administrator Associate (SOA-C02)",
              description:
                "\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Ops/SRE \u2014 monitoring, automation, security, networking \u2014 \u0e22\u0e32\u0e01\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e43\u0e19 Associate tier",
            },
            {
              title: "AI Practitioner (AIF-C01)",
              description:
                "Foundational \u0e15\u0e31\u0e27\u0e43\u0e2b\u0e21\u0e48 \u2014 \u0e40\u0e19\u0e49\u0e19 AI/ML services (Bedrock, SageMaker) \u2014 \u0e2b\u0e32\u0e01\u0e2a\u0e19\u0e43\u0e08 GenAI",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Recertification Bonus",
          text: "\u0e16\u0e49\u0e32\u0e2a\u0e2d\u0e1a Associate (SAA/DVA/SOA) \u0e1c\u0e48\u0e32\u0e19\u0e20\u0e32\u0e22\u0e43\u0e19 3 \u0e1b\u0e35\u0e02\u0e2d\u0e07 CLF-C02 \u2014 CLF-C02 \u0e08\u0e30 renew \u0e15\u0e31\u0e27\u0e40\u0e2d\u0e07\u0e43\u0e2b\u0e49\u0e2d\u0e35\u0e01 3 \u0e1b\u0e35\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34 \u2014 \u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e2a\u0e2d\u0e1a\u0e0b\u0e49\u0e33!",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "et-q1",
      question:
        "How many questions are in the AWS Certified Cloud Practitioner (CLF-C02) exam?",
      options: ["50", "65", "75", "100"],
      correct: 1,
      explanation:
        "The CLF-C02 exam has 65 multi-choice / multi-response questions (50 scored + 15 unscored). The 15 unscored items are not identified.",
    },
    {
      id: "et-q2",
      question:
        "What is the time limit for the CLF-C02 exam?",
      options: ["60 minutes", "90 minutes", "120 minutes", "180 minutes"],
      correct: 1,
      explanation:
        "CLF-C02 exam time is 90 minutes. Non-native English speakers can request an extra 30 minutes (ESL accommodation).",
    },
    {
      id: "et-q3",
      question:
        "What is the passing score for the CLF-C02 exam?",
      options: ["650/1000", "700/1000", "720/1000", "750/1000"],
      correct: 2,
      explanation:
        "CLF-C02 passing score is 700 out of 1000 (some sources cite 700; AWS scaled scoring with min/max). The exam grade isn't simply percentage of correct answers — it uses scaled scoring.",
    },
    {
      id: "et-q4",
      question:
        "What is the cost of the CLF-C02 exam (USD)?",
      options: ["$50", "$100", "$150", "$300"],
      correct: 1,
      explanation:
        "AWS Cloud Practitioner exam costs $100 USD. Other AWS certifications cost more (Associate $150, Professional / Specialty $300).",
    },
    {
      id: "et-q5",
      question:
        "Which CLF-C02 exam domain has the LARGEST weighting?",
      options: [
        "Cloud Concepts",
        "Security and Compliance",
        "Cloud Technology and Services",
        "Billing, Pricing, and Support",
      ],
      correct: 2,
      explanation:
        "CLF-C02 domains: Cloud Concepts (24%), Security and Compliance (30%), Cloud Technology and Services (34%), Billing/Pricing/Support (12%). Cloud Technology and Services is the largest.",
    },
    {
      id: "et-q6",
      question:
        "Which strategy is BEST when answering AWS exam questions?",
      options: [
        "Read the question carefully, eliminate obviously wrong answers, choose the BEST answer (not just a correct one), and watch for keywords like 'most cost-effective', 'highly available', 'least operational overhead'.",
        "Always pick the longest answer.",
        "Answer randomly to save time.",
        "Skip all questions and submit blank.",
      ],
      correct: 0,
      explanation:
        "Best practice: read carefully, eliminate clearly wrong answers, focus on the question's qualifiers (cheapest? most secure? least operational overhead?). Often multiple answers are technically correct — pick the BEST one.",
    },
    {
      id: "et-q7",
      question:
        "Which type of question does the CLF-C02 exam contain?",
      options: [
        "Only multiple-choice with one correct answer.",
        "Multiple-choice (one correct) and multiple-response (two or more correct).",
        "Essay-style questions only.",
        "True/False only.",
      ],
      correct: 1,
      explanation:
        "CLF-C02 contains multiple-choice (single correct) and multiple-response (two or more correct from a list of 5+) questions. Read the question for instructions like 'select TWO'.",
    },
    {
      id: "et-q8",
      question:
        "When you see 'most cost-effective' in a question, which AWS purchasing option is OFTEN the answer for stable, long-term workloads?",
      options: [
        "On-Demand",
        "Spot Instances",
        "Reserved Instances or Savings Plans",
        "Dedicated Hosts",
      ],
      correct: 2,
      explanation:
        "For stable, predictable workloads, Reserved Instances or Savings Plans (1-3 year commitment) are the most cost-effective, with up to 72% off On-Demand.",
    },
    {
      id: "et-q9",
      question:
        "When you see 'fault-tolerant' or 'can be interrupted' workloads, which EC2 pricing option is often the BEST?",
      options: [
        "On-Demand",
        "Reserved Instances",
        "Spot Instances",
        "Dedicated Hosts",
      ],
      correct: 2,
      explanation:
        "For fault-tolerant, interruptible workloads (batch, big data, CI/CD), Spot Instances offer up to 90% discount but can be reclaimed with 2-min notice.",
    },
    {
      id: "et-q10",
      question:
        "When you see 'highly available' (HA) in a question, which AWS pattern is usually involved?",
      options: [
        "Single AZ deployment",
        "Multi-AZ deployment with load balancing and auto-scaling",
        "Single instance",
        "On-premises deployment",
      ],
      correct: 1,
      explanation:
        "High Availability typically involves Multi-AZ deployments — distributing resources across multiple Availability Zones with load balancing and ASG. For DR, also consider multi-region.",
    },
    {
      id: "et-q11",
      question:
        "When you see 'least operational overhead' or 'fully managed', which type of service should you favor?",
      options: [
        "Self-managed EC2 instances.",
        "Managed / serverless services (Lambda, Fargate, RDS, DynamoDB, S3).",
        "On-premises hardware.",
        "Custom-built solutions.",
      ],
      correct: 1,
      explanation:
        "Look for managed/serverless options: Lambda > EC2, RDS > EC2 with self-managed DB, DynamoDB > self-managed NoSQL. They reduce operational overhead by letting AWS handle infrastructure.",
    },
    {
      id: "et-q12",
      question:
        "When you see 'temporary access to AWS resources for an external user', which service is usually the answer?",
      options: [
        "Create an IAM user with permanent access keys.",
        "AWS STS / IAM Role with temporary credentials (or Cognito for app users).",
        "Share root credentials.",
        "Create an Amazon SES rule.",
      ],
      correct: 1,
      explanation:
        "Temporary AWS access = STS, IAM Role assumption, identity federation. For app users, use Cognito Identity Pools.",
    },
    {
      id: "et-q13",
      question:
        "When you see 'who called the API to delete X' (audit), which service is the answer?",
      options: [
        "AWS CloudTrail",
        "Amazon CloudWatch",
        "AWS Config",
        "AWS Trusted Advisor",
      ],
      correct: 0,
      explanation:
        "CloudTrail logs every API call (who, what, when). Anything related to 'who did what' is CloudTrail.",
    },
    {
      id: "et-q14",
      question:
        "When you see 'configuration changes / compliance over time', which service is the answer?",
      options: [
        "AWS Config",
        "AWS CloudTrail",
        "Amazon CloudWatch",
        "AWS Trusted Advisor",
      ],
      correct: 0,
      explanation:
        "AWS Config tracks configuration changes and compliance against rules. CloudTrail is API call audit; Config is configuration state and compliance.",
    },
    {
      id: "et-q15",
      question:
        "When you see 'CDN' or 'low latency content delivery globally', which AWS service is the answer?",
      options: [
        "Amazon CloudFront",
        "Amazon Route 53",
        "AWS Global Accelerator",
        "Amazon S3",
      ],
      correct: 0,
      explanation:
        "CDN = CloudFront. (Note: For TCP/UDP non-HTTP optimization, Global Accelerator. For DNS, Route 53.)",
    },
    {
      id: "et-q16",
      question:
        "When you see 'ML to detect threats / suspicious activity', which AWS service is the answer?",
      options: [
        "Amazon GuardDuty",
        "Amazon Inspector",
        "AWS Shield",
        "AWS WAF",
      ],
      correct: 0,
      explanation:
        "GuardDuty = ML threat detection (analyzes CloudTrail/VPC flow/DNS logs). Inspector = vulnerability scanning. Shield = DDoS. WAF = web application firewall.",
    },
    {
      id: "et-q17",
      question:
        "When you see 'PII / sensitive data discovery in S3', which AWS service is the answer?",
      options: [
        "Amazon Macie",
        "Amazon GuardDuty",
        "Amazon Inspector",
        "AWS Config",
      ],
      correct: 0,
      explanation:
        "Macie = sensitive data discovery in S3 (PII, financial, intellectual property) using ML.",
    },
    {
      id: "et-q18",
      question:
        "When you see 'recommendations on cost / performance / security / fault tolerance / service limits', which AWS service is the answer?",
      options: [
        "AWS Trusted Advisor",
        "AWS Config",
        "AWS CloudTrail",
        "Amazon CloudWatch",
      ],
      correct: 0,
      explanation:
        "Trusted Advisor = best practice checks across 5 pillars (cost, performance, security, fault tolerance, service limits).",
    },
    {
      id: "et-q19",
      question:
        "When you see 'Layer 7 web application firewall (block SQL injection, XSS)', which service is the answer?",
      options: [
        "AWS WAF",
        "AWS Shield",
        "Security Group",
        "NACL",
      ],
      correct: 0,
      explanation:
        "WAF = Web Application Firewall, Layer 7 (HTTP). Deploys on CloudFront, ALB, API Gateway, or AppSync.",
    },
    {
      id: "et-q20",
      question:
        "When you see 'DDoS protection', which service is the answer?",
      options: [
        "AWS Shield (Standard free, Advanced paid)",
        "AWS WAF",
        "Security Group",
        "NACL",
      ],
      correct: 0,
      explanation:
        "Shield = DDoS protection. Shield Standard (free) for L3/L4. Shield Advanced (paid) for L7 + 24/7 DRT + cost protection.",
    },
    {
      id: "et-q21",
      question:
        "When you see 'consolidate billing across multiple AWS accounts', which service is the answer?",
      options: [
        "AWS Organizations (with consolidated billing)",
        "AWS Control Tower",
        "AWS Cost Explorer",
        "AWS Trusted Advisor",
      ],
      correct: 0,
      explanation:
        "AWS Organizations provides consolidated billing for multiple accounts, plus SCPs, account creation, etc.",
    },
    {
      id: "et-q22",
      question:
        "When you see 'estimate cost before deploying', which service is the answer?",
      options: [
        "AWS Pricing Calculator",
        "AWS Cost Explorer",
        "AWS Budgets",
        "AWS Trusted Advisor",
      ],
      correct: 0,
      explanation:
        "Pricing Calculator = estimate AWS costs BEFORE deploying. Cost Explorer = analyze actual past spend. Budgets = alert on actual or forecast spend.",
    },
    {
      id: "et-q23",
      question:
        "When you see '24/7 phone support' as a requirement, which AWS Support plan is the MINIMUM?",
      options: [
        "Basic",
        "Developer",
        "Business",
        "Enterprise",
      ],
      correct: 2,
      explanation:
        "Business Support is the minimum for 24/7 phone/chat/email access. Developer has business-hours email only. Basic has billing/account only.",
    },
    {
      id: "et-q24",
      question:
        "When you see 'dedicated Technical Account Manager (TAM)', which AWS Support plan is required?",
      options: [
        "Basic",
        "Developer",
        "Business",
        "Enterprise (or Enterprise On-Ramp for limited TAM)",
      ],
      correct: 3,
      explanation:
        "Dedicated TAM is included in Enterprise Support. Enterprise On-Ramp has a pool of TAMs (not dedicated). Business and below = no TAM.",
    },
    {
      id: "et-q25",
      question:
        "When you see 'compliance reports (SOC, ISO, PCI, FedRAMP)', which AWS service is the answer?",
      options: [
        "AWS Artifact",
        "AWS Audit Manager",
        "AWS Trusted Advisor",
        "AWS Config",
      ],
      correct: 0,
      explanation:
        "AWS Artifact = self-service portal for downloading compliance reports. Audit Manager = continuous compliance auditing.",
    },
  ],
};
