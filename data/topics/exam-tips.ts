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
      id: "exam-tips-q1",
      question: "\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a CLF-C02 \u0e21\u0e35\u0e08\u0e33\u0e19\u0e27\u0e19\u0e02\u0e49\u0e2d\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e01\u0e35\u0e48\u0e02\u0e49\u0e2d?",
      options: [
        "50 \u0e02\u0e49\u0e2d \u0e20\u0e32\u0e22\u0e43\u0e19 60 \u0e19\u0e32\u0e17\u0e35",
        "65 \u0e02\u0e49\u0e2d \u0e20\u0e32\u0e22\u0e43\u0e19 90 \u0e19\u0e32\u0e17\u0e35",
        "75 \u0e02\u0e49\u0e2d \u0e20\u0e32\u0e22\u0e43\u0e19 130 \u0e19\u0e32\u0e17\u0e35",
        "100 \u0e02\u0e49\u0e2d \u0e20\u0e32\u0e22\u0e43\u0e19 180 \u0e19\u0e32\u0e17\u0e35",
      ],
      correct: 1,
      explanation:
        "CLF-C02 \u0e21\u0e35 <strong>65 \u0e02\u0e49\u0e2d</strong> \u0e20\u0e32\u0e22\u0e43\u0e19\u0e40\u0e27\u0e25\u0e32 <strong>90 \u0e19\u0e32\u0e17\u0e35</strong> \u2014 \u0e1c\u0e2a\u0e21 multiple choice (1 \u0e08\u0e32\u0e01 4) \u0e41\u0e25\u0e30 multi-select (2+ \u0e08\u0e32\u0e01 5+) \u2014 \u0e40\u0e09\u0e25\u0e35\u0e48\u0e22 \u2248 1.4 \u0e19\u0e32\u0e17\u0e35\u0e15\u0e48\u0e2d\u0e02\u0e49\u0e2d \u0e2a\u0e48\u0e27\u0e19 75/130 \u0e04\u0e37\u0e2d Associate-level (SAA, DVA, SOA)",
    },
    {
      id: "exam-tips-q2",
      question: "\u0e04\u0e30\u0e41\u0e19\u0e19\u0e15\u0e48\u0e33\u0e2a\u0e38\u0e14\u0e17\u0e35\u0e48\u0e1c\u0e48\u0e32\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a CLF-C02 \u0e04\u0e37\u0e2d\u0e40\u0e17\u0e48\u0e32\u0e44\u0e2b\u0e23\u0e48?",
      options: [
        "650 / 1000",
        "700 / 1000",
        "720 / 1000",
        "750 / 1000",
      ],
      correct: 1,
      explanation:
        "CLF-C02 \u0e15\u0e49\u0e2d\u0e07\u0e44\u0e14\u0e49 <strong>700 \u0e08\u0e32\u0e01 1000</strong> \u0e2b\u0e23\u0e37\u0e2d\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 70% \u0e08\u0e36\u0e07\u0e08\u0e30\u0e1c\u0e48\u0e32\u0e19 \u2014 \u0e40\u0e1b\u0e47\u0e19 scaled score \u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e16\u0e48\u0e27\u0e07\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01\u0e02\u0e49\u0e2d\u0e15\u0e48\u0e2d\u0e02\u0e49\u0e2d \u2014 \u0e02\u0e49\u0e2d\u0e22\u0e32\u0e01\u0e21\u0e35\u0e04\u0e30\u0e41\u0e19\u0e19\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32 \u2014 \u0e1e\u0e22\u0e32\u0e22\u0e32\u0e21\u0e21\u0e38\u0e48\u0e07 80%+ \u0e43\u0e19 practice exam \u0e01\u0e48\u0e2d\u0e19\u0e2a\u0e2d\u0e1a\u0e08\u0e23\u0e34\u0e07",
    },
    {
      id: "exam-tips-q3",
      question: "Domain \u0e44\u0e2b\u0e19\u0e02\u0e2d\u0e07 CLF-C02 \u0e21\u0e35 weight \u0e2a\u0e39\u0e07\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14?",
      options: [
        "Domain 1: Cloud Concepts (24%)",
        "Domain 2: Security and Compliance (30%)",
        "Domain 3: Cloud Technology and Services (34%)",
        "Domain 4: Billing, Pricing, and Support (12%)",
      ],
      correct: 2,
      explanation:
        "<strong>Domain 3: Cloud Technology and Services</strong> \u0e21\u0e35\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e31\u0e01\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14\u0e17\u0e35\u0e48 <strong>34%</strong> \u2014 \u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e25\u0e38\u0e21 services \u0e15\u0e48\u0e32\u0e07\u0e46 (compute, database, network, storage, AI/ML), Global Infrastructure (Region/AZ/Edge) \u2014 \u0e15\u0e32\u0e21\u0e21\u0e32\u0e14\u0e49\u0e27\u0e22 Domain 2 (30%), Domain 1 (24%), Domain 4 (12%)",
    },
    {
      id: "exam-tips-q4",
      question: "\u0e16\u0e49\u0e32\u0e41\u0e1a\u0e48\u0e07\u0e40\u0e27\u0e25\u0e32\u0e40\u0e17\u0e48\u0e32\u0e46 \u0e01\u0e31\u0e19\u0e17\u0e38\u0e01\u0e02\u0e49\u0e2d \u0e04\u0e38\u0e13\u0e21\u0e35\u0e40\u0e27\u0e25\u0e32\u0e40\u0e09\u0e25\u0e35\u0e48\u0e22\u0e15\u0e48\u0e2d\u0e02\u0e49\u0e2d\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13\u0e40\u0e17\u0e48\u0e32\u0e44\u0e2b\u0e23\u0e48?",
      options: [
        "\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 0.7 \u0e19\u0e32\u0e17\u0e35\u0e15\u0e48\u0e2d\u0e02\u0e49\u0e2d",
        "\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 1.4 \u0e19\u0e32\u0e17\u0e35\u0e15\u0e48\u0e2d\u0e02\u0e49\u0e2d",
        "\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 2 \u0e19\u0e32\u0e17\u0e35\u0e15\u0e48\u0e2d\u0e02\u0e49\u0e2d",
        "\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 3 \u0e19\u0e32\u0e17\u0e35\u0e15\u0e48\u0e2d\u0e02\u0e49\u0e2d",
      ],
      correct: 1,
      explanation:
        "90 \u0e19\u0e32\u0e17\u0e35 \u00f7 65 \u0e02\u0e49\u0e2d \u2248 <strong>1.4 \u0e19\u0e32\u0e17\u0e35\u0e15\u0e48\u0e2d\u0e02\u0e49\u0e2d</strong> \u2014 \u0e01\u0e25\u0e22\u0e38\u0e17\u0e18\u0e4c\u0e17\u0e35\u0e48\u0e14\u0e35\u0e04\u0e37\u0e2d\u0e15\u0e2d\u0e1a\u0e02\u0e49\u0e2d\u0e07\u0e48\u0e32\u0e22\u0e20\u0e32\u0e22\u0e43\u0e19 1 \u0e19\u0e32\u0e17\u0e35\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e01\u0e47\u0e1a\u0e40\u0e27\u0e25\u0e32\u0e44\u0e27\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e22\u0e32\u0e01 \u2014 mark for review \u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e21\u0e31\u0e48\u0e19\u0e43\u0e08\u0e41\u0e25\u0e49\u0e27\u0e01\u0e25\u0e31\u0e1a\u0e21\u0e32\u0e17\u0e35\u0e2b\u0e25\u0e31\u0e07",
    },
    {
      id: "exam-tips-q5",
      question:
        "AWS Certified Cloud Practitioner certification \u0e21\u0e35\u0e2d\u0e32\u0e22\u0e38\u0e01\u0e35\u0e48\u0e1b\u0e35\u0e01\u0e48\u0e2d\u0e19\u0e15\u0e49\u0e2d\u0e07 renew?",
      options: [
        "1 \u0e1b\u0e35",
        "2 \u0e1b\u0e35",
        "3 \u0e1b\u0e35",
        "5 \u0e1b\u0e35",
      ],
      correct: 2,
      explanation:
        "AWS Certifications (\u0e23\u0e27\u0e21\u0e16\u0e36\u0e07 CLF-C02) \u0e21\u0e35\u0e2d\u0e32\u0e22\u0e38 <strong>3 \u0e1b\u0e35</strong> \u2014 \u0e15\u0e49\u0e2d\u0e07\u0e2a\u0e2d\u0e1a recertification \u0e2b\u0e23\u0e37\u0e2d\u0e2d\u0e31\u0e1e higher-level cert (Associate) \u2014 \u0e16\u0e49\u0e32\u0e1c\u0e48\u0e32\u0e19 Associate \u0e20\u0e32\u0e22\u0e43\u0e19 3 \u0e1b\u0e35\u0e02\u0e2d\u0e07 CLF-C02 \u2014 CLF \u0e08\u0e30 renew \u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34\u0e1f\u0e23\u0e35\u0e44\u0e1b\u0e2d\u0e35\u0e01 3 \u0e1b\u0e35",
    },
  ],
};
