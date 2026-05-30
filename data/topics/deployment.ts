import { TopicData } from "@/types/topic";

export const deployment: TopicData = {
  slug: "deployment",
  title: "Deployment & IaC",
  subtitle: "CloudFormation, Beanstalk, CodePipeline & SSM",
  accent: "rose",
  emoji: "\ud83d\ude80",
  category: "Developer Tools",
  description:
    "\u0e23\u0e27\u0e21\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a deploy \u0e41\u0e25\u0e30\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 infrastructure \u0e1a\u0e19 AWS \u2014 \u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48 Infrastructure as Code (CloudFormation, CDK), PaaS (Elastic Beanstalk), CI/CD pipeline (CodeCommit, CodeBuild, CodeDeploy, CodePipeline) \u0e44\u0e1b\u0e08\u0e19\u0e16\u0e36\u0e07\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 fleet \u0e02\u0e19\u0e32\u0e14\u0e43\u0e2b\u0e0d\u0e48\u0e14\u0e49\u0e27\u0e22 Systems Manager (SSM) \u0e41\u0e25\u0e30 OpsWorks",
  keyPoints: [
    "<strong>IaC</strong>: CloudFormation (declarative AWS only) \u0e41\u0e25\u0e30 CDK (\u0e40\u0e02\u0e35\u0e22\u0e19 IaC \u0e14\u0e49\u0e27\u0e22\u0e20\u0e32\u0e29\u0e32 programming)",
    "<strong>Elastic Beanstalk</strong>: PaaS deploy \u0e41\u0e2d\u0e1b\u0e07\u0e48\u0e32\u0e22\u0e1a\u0e19 EC2 + ASG + ELB + RDS \u0e41\u0e1a\u0e1a all-in-one",
    "<strong>CI/CD</strong>: CodeCommit (Git) \u2192 CodeBuild (build/test) \u2192 CodeDeploy (deploy) \u0e23\u0e49\u0e2d\u0e22\u0e14\u0e49\u0e27\u0e22 CodePipeline",
    "<strong>SSM</strong> \u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 EC2 + on-prem fleet (hybrid) \u2014 OpsWorks = Chef/Puppet",
  ],
  sections: [
    {
      id: "why-iac",
      title: "Why Infrastructure as Code (IaC)?",
      content: [
        {
          type: "paragraph",
          text: "\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07 infrastructure \u0e41\u0e1a\u0e1a manual (\u0e04\u0e25\u0e34\u0e01\u0e1c\u0e48\u0e32\u0e19 Console) \u0e21\u0e35\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e2b\u0e25\u0e32\u0e22\u0e2d\u0e22\u0e48\u0e32\u0e07: \u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e07\u0e48\u0e32\u0e22, \u0e44\u0e21\u0e48\u0e21\u0e35 version control, \u0e22\u0e32\u0e01\u0e15\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e0b\u0e49\u0e33 \u0e41\u0e25\u0e30 review \u0e44\u0e21\u0e48\u0e44\u0e14\u0e49 \u2014 <strong>Infrastructure as Code (IaC)</strong> \u0e04\u0e37\u0e2d\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19 infrastructure \u0e40\u0e1b\u0e47\u0e19 code \u0e17\u0e35\u0e48 <em>repeatable, version-controlled, reviewable</em> \u0e41\u0e25\u0e30 automate \u0e44\u0e14\u0e49",
        },
        {
          type: "grid",
          items: [
            {
              title: "\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e02\u0e2d\u0e07 Manual Setup",
              description:
                "\u0e15\u0e49\u0e2d\u0e07\u0e04\u0e25\u0e34\u0e01\u0e2b\u0e25\u0e32\u0e22\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19, error-prone, \u0e44\u0e21\u0e48\u0e21\u0e35 history, \u0e2a\u0e23\u0e49\u0e32\u0e07\u0e0b\u0e49\u0e33\u0e43\u0e19 region/account \u0e2d\u0e37\u0e48\u0e19\u0e22\u0e32\u0e01",
            },
            {
              title: "\u0e02\u0e49\u0e2d\u0e14\u0e35\u0e02\u0e2d\u0e07 IaC",
              description:
                "Repeatable, version control (Git), \u0e17\u0e33 code review \u0e44\u0e14\u0e49, automation, \u0e25\u0e1a/\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e44\u0e14\u0e49\u0e07\u0e48\u0e32\u0e22 \u2014 \u0e25\u0e14 cost \u0e41\u0e25\u0e30\u0e40\u0e1e\u0e34\u0e48\u0e21 reliability",
            },
          ],
        },
      ],
    },
    {
      id: "cloudformation",
      title: "AWS CloudFormation",
      content: [
        {
          type: "paragraph",
          text: "<strong>CloudFormation</strong> \u0e04\u0e37\u0e2d\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23 IaC \u0e02\u0e2d\u0e07 AWS \u2014 \u0e40\u0e02\u0e35\u0e22\u0e19 template \u0e41\u0e1a\u0e1a <em>declarative</em> (\u0e1a\u0e2d\u0e01\u0e27\u0e48\u0e32\u0e22\u0e32\u0e01\u0e2d\u0e30\u0e44\u0e23 \u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e1a\u0e2d\u0e01\u0e27\u0e34\u0e18\u0e35\u0e17\u0e33) \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a resource \u0e23\u0e30\u0e14\u0e31\u0e1b AWS \u0e40\u0e01\u0e37\u0e2d\u0e1a\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",
        },
        {
          type: "code",
          language: "text",
          caption: "\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07: \u0e1a\u0e2d\u0e01 CloudFormation \u0e27\u0e48\u0e32\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2d\u0e30\u0e44\u0e23",
          code: '"\u0e09\u0e31\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23ใช้ Security Group, EC2 instance 2 \u0e15\u0e31\u0e27\u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49 SG \u0e19\u0e35\u0e49,\nS3 bucket 1 \u0e25\u0e39\u0e01, \u0e41\u0e25\u0e30 ELB 1 \u0e15\u0e31\u0e27\u0e17\u0e35\u0e48\u0e15\u0e48\u0e2d EC2"\n\n\u2192 CloudFormation \u0e08\u0e30\u0e2a\u0e23\u0e49\u0e32\u0e07 resource \u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e15\u0e32\u0e21\u0e25\u0e33\u0e14\u0e31\u0e1a dependency \u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07',
        },
        {
          type: "grid",
          items: [
            {
              title: "Infrastructure as Code",
              description:
                "\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07 resource \u0e21\u0e37\u0e2d\u0e2d\u0e35\u0e01\u0e15\u0e48\u0e2d\u0e44\u0e1b \u2014 review code, version control, \u0e17\u0e33\u0e15\u0e32\u0e21\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19 software development",
            },
            {
              title: "Cost",
              description:
                "Tag resource \u0e44\u0e14\u0e49\u0e07\u0e48\u0e32\u0e22 \u2014 \u0e23\u0e39\u0e49\u0e15\u0e49\u0e19\u0e17\u0e38\u0e19, \u0e2a\u0e23\u0e49\u0e32\u0e07/\u0e25\u0e1a dev environment \u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34 (\u0e25\u0e1a\u0e15\u0e2d\u0e19 5 \u0e42\u0e21\u0e07, \u0e2a\u0e23\u0e49\u0e32\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e15\u0e2d\u0e19 8 \u0e42\u0e21\u0e07)",
            },
            {
              title: "Productivity",
              description:
                "\u0e25\u0e1a + \u0e2a\u0e23\u0e49\u0e32\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e44\u0e14\u0e49\u0e07\u0e48\u0e32\u0e22, \u0e2a\u0e23\u0e49\u0e32\u0e07 diagram \u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34, \u0e40\u0e02\u0e35\u0e22\u0e19\u0e41\u0e1a\u0e1a declarative",
            },
            {
              title: "Don't Reinvent the Wheel",
              description:
                "\u0e21\u0e35 template \u0e1f\u0e23\u0e35\u0e08\u0e32\u0e01 community + AWS \u2014 leverage docs \u0e44\u0e14\u0e49",
            },
            {
              title: "Stack Designer",
              description:
                "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d visualize resource \u0e41\u0e25\u0e30\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07 resource \u0e43\u0e19 stack",
            },
            {
              title: "\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e40\u0e01\u0e37\u0e2d\u0e1a\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",
              description:
                "\u0e40\u0e01\u0e37\u0e2d\u0e1a\u0e17\u0e38\u0e01 AWS service \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a CloudFormation \u2014 \u0e2b\u0e32\u0e01\u0e02\u0e32\u0e14\u0e44\u0e1b\u0e43\u0e0a\u0e49 custom resource workaround \u0e44\u0e14\u0e49",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "\u0e08\u0e33\u0e44\u0e27\u0e49: Declarative",
          text: "CloudFormation = declarative \u2014 \u0e1a\u0e2d\u0e01 <em>what</em> \u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e1a\u0e2d\u0e01 <em>how</em> AWS \u0e08\u0e31\u0e14\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07/\u0e25\u0e1a/\u0e41\u0e01\u0e49\u0e44\u0e02 resource \u0e43\u0e2b\u0e49\u0e40\u0e2d\u0e07",
        },
      ],
    },
    {
      id: "cdk",
      title: "AWS Cloud Development Kit (CDK)",
      content: [
        {
          type: "paragraph",
          text: "<strong>AWS CDK</strong> \u0e04\u0e37\u0e2d\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19 cloud infrastructure \u0e14\u0e49\u0e27\u0e22\u0e20\u0e32\u0e29\u0e32 programming \u0e17\u0e35\u0e48\u0e04\u0e38\u0e49\u0e19\u0e40\u0e04\u0e22 \u2014 JavaScript/TypeScript, Python, Java, .NET \u2014 \u0e41\u0e25\u0e49\u0e27 \"compile\" \u0e40\u0e1b\u0e47\u0e19 CloudFormation template (JSON/YAML)",
        },
        {
          type: "list",
          items: [
            "\u0e40\u0e02\u0e35\u0e22\u0e19 IaC \u0e14\u0e49\u0e27\u0e22\u0e20\u0e32\u0e29\u0e32\u0e17\u0e35\u0e48\u0e23\u0e39\u0e49\u0e2d\u0e22\u0e39\u0e48\u0e41\u0e25\u0e49\u0e27 (\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19 YAML/JSON)",
            "\u0e21\u0e35 type checking, IDE auto-complete, loop, condition \u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19 code \u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b",
            "Deploy infrastructure + application runtime code \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e01\u0e31\u0e19\u0e44\u0e14\u0e49",
            "\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e21\u0e32\u0e01\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Lambda function \u0e41\u0e25\u0e30 Docker container \u0e1a\u0e19 ECS / EKS",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "CDK \u0e15\u0e48\u0e32\u0e07\u0e08\u0e32\u0e01 CloudFormation \u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23?",
          text: "CloudFormation = \u0e40\u0e02\u0e35\u0e22\u0e19 YAML/JSON \u0e15\u0e23\u0e07\u0e46 \u2014 CDK = \u0e40\u0e02\u0e35\u0e22\u0e19\u0e14\u0e49\u0e27\u0e22 programming language (TypeScript, Python, ...) \u0e41\u0e25\u0e49\u0e27\u0e43\u0e2b\u0e49 CDK \u0e41\u0e1b\u0e25\u0e07\u0e40\u0e1b\u0e47\u0e19 CloudFormation template \u0e43\u0e2b\u0e49\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34",
        },
      ],
    },
    {
      id: "elastic-beanstalk",
      title: "AWS Elastic Beanstalk",
      content: [
        {
          type: "paragraph",
          text: "<strong>Elastic Beanstalk</strong> \u0e04\u0e37\u0e2d\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23 deploy application \u0e1a\u0e19 AWS \u0e41\u0e1a\u0e1a developer-centric view \u2014 \u0e20\u0e32\u0e22\u0e43\u0e19\u0e08\u0e23\u0e34\u0e07\u0e43\u0e0a\u0e49 EC2, ASG, ELB, RDS \u0e41\u0e15\u0e48\u0e23\u0e27\u0e21\u0e44\u0e27\u0e49\u0e43\u0e19\u0e21\u0e38\u0e21\u0e21\u0e2d\u0e07 all-in-one \u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e07\u0e48\u0e32\u0e22 \u2014 \u0e40\u0e1b\u0e47\u0e19 <em>Platform as a Service (PaaS)</em>",
        },
        {
          type: "callout",
          variant: "info",
          title: "Beanstalk \u0e1f\u0e23\u0e35!",
          text: "\u0e15\u0e31\u0e27 Beanstalk service \u0e40\u0e2d\u0e07\u0e1f\u0e23\u0e35 \u2014 \u0e08\u0e48\u0e32\u0e22\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e04\u0e48\u0e32 underlying resource (EC2, RDS, ELB, ...) \u0e17\u0e35\u0e48 Beanstalk \u0e2a\u0e23\u0e49\u0e32\u0e07\u0e43\u0e2b\u0e49\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19",
        },
        {
          type: "grid",
          items: [
            {
              title: "AWS \u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e49 (Managed)",
              description:
                "\u0e01\u0e32\u0e23 config instance/OS, deployment strategy, capacity provisioning, load balancer, ASG, application health monitoring",
            },
            {
              title: "Developer \u0e23\u0e31\u0e1a\u0e1c\u0e34\u0e14\u0e0a\u0e2d\u0e1a\u0e41\u0e04\u0e48",
              description:
                "Application code \u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19 \u2014 \u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e22\u0e38\u0e48\u0e07\u0e01\u0e31\u0e1a infrastructure",
            },
          ],
        },
        {
          type: "paragraph",
          text: "<strong>3 Architecture Models</strong>:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Single Instance",
              description:
                "EC2 \u0e15\u0e31\u0e27\u0e40\u0e14\u0e35\u0e22\u0e27 \u2014 \u0e40\u0e2b\u0e21\u0e32\u0e30 dev environment",
            },
            {
              title: "LB + ASG",
              description:
                "Load Balancer + Auto Scaling Group \u2014 \u0e40\u0e2b\u0e21\u0e32\u0e30 production web app",
            },
            {
              title: "ASG only",
              description:
                "Auto Scaling Group \u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e14\u0e35\u0e22\u0e27 \u2014 \u0e40\u0e2b\u0e21\u0e32\u0e30 worker / non-web production",
            },
          ],
        },
        {
          type: "paragraph",
          text: "<strong>Supported Platforms</strong>: Go, Java SE, Java with Tomcat, .NET on Windows Server with IIS, Node.js, PHP, Python, Ruby, Single/Multi-Container Docker, \u0e41\u0e25\u0e30 Custom Platform (advanced)",
        },
        {
          type: "callout",
          variant: "tip",
          title: "Health Monitoring",
          text: "Beanstalk agent \u0e1a\u0e19 EC2 push metrics \u0e44\u0e1b\u0e17\u0e35\u0e48 CloudWatch \u0e41\u0e25\u0e30\u0e2a\u0e48\u0e07 application health events \u2014 \u0e14\u0e39\u0e2a\u0e16\u0e32\u0e19\u0e30 environment \u0e44\u0e14\u0e49\u0e08\u0e32\u0e01 console",
        },
      ],
    },
    {
      id: "codedeploy",
      title: "AWS CodeDeploy",
      content: [
        {
          type: "paragraph",
          text: "<strong>CodeDeploy</strong> \u0e04\u0e37\u0e2d\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23 deploy application \u0e41\u0e1a\u0e1a\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34 \u2014 \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a EC2 \u0e41\u0e25\u0e30 on-premises servers (<em>hybrid</em>) \u2014 \u0e40\u0e1e\u0e35\u0e22\u0e07\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07 <strong>CodeDeploy Agent</strong> \u0e1a\u0e19 server \u0e15\u0e31\u0e27\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22",
        },
        {
          type: "list",
          items: [
            "\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a EC2 + on-premises servers \u2014 hybrid service",
            "Server \u0e15\u0e49\u0e2d\u0e07\u0e15\u0e34\u0e14 CodeDeploy Agent \u0e08\u0e36\u0e07\u0e08\u0e30\u0e2a\u0e34\u0e48\u0e07 deploy \u0e44\u0e14\u0e49",
            "\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49 provision server \u2014 \u0e41\u0e04\u0e48 deploy code \u0e25\u0e07 server \u0e17\u0e35\u0e48\u0e21\u0e35\u0e2d\u0e22\u0e39\u0e48\u0e41\u0e25\u0e49\u0e27\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19",
          ],
        },
      ],
    },
    {
      id: "codecommit",
      title: "AWS CodeCommit",
      content: [
        {
          type: "paragraph",
          text: "<strong>CodeCommit</strong> \u0e04\u0e37\u0e2d source control \u0e41\u0e1a\u0e1a Git \u0e1a\u0e19 AWS \u2014 \u0e17\u0e32\u0e07\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e41\u0e17\u0e19 GitHub / GitLab / Bitbucket \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e23\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e40\u0e01\u0e47\u0e1a code \u0e20\u0e32\u0e22\u0e43\u0e19 AWS",
        },
        {
          type: "list",
          items: [
            "Source-control hosting \u2014 \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a Git protocol",
            "\u0e23\u0e48\u0e27\u0e21\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49\u0e07\u0e48\u0e32\u0e22 \u2014 versioning \u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34",
            "Fully managed, scalable, HA",
            "Private + secure \u2014 integrate \u0e01\u0e31\u0e1a IAM \u0e08\u0e33\u0e01\u0e31\u0e14 access \u0e44\u0e14\u0e49",
            "AWS integration \u2014 \u0e15\u0e48\u0e2d\u0e44\u0e1b CodeBuild / CodePipeline \u0e44\u0e14\u0e49\u0e17\u0e31\u0e19\u0e17\u0e35",
          ],
        },
      ],
    },
    {
      id: "codebuild",
      title: "AWS CodeBuild",
      content: [
        {
          type: "paragraph",
          text: "<strong>CodeBuild</strong> \u0e04\u0e37\u0e2d\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23 build code \u0e1a\u0e19 cloud \u2014 compile \u2192 \u0e23\u0e31\u0e19 test \u2192 \u0e2a\u0e23\u0e49\u0e32\u0e07 package (artifact) \u2014 \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e2a\u0e48\u0e07\u0e44\u0e1b deploy \u0e15\u0e48\u0e2d\u0e44\u0e14\u0e49",
        },
        {
          type: "list",
          items: [
            "Fully managed \u2014 \u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e14\u0e39\u0e41\u0e25 build server \u0e40\u0e2d\u0e07",
            "Serverless \u2014 \u0e44\u0e21\u0e48\u0e21\u0e35 server provision",
            "Scalable + HA + secure",
            "Pay-as-you-go \u2014 \u0e08\u0e48\u0e32\u0e22\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e40\u0e27\u0e25\u0e32\u0e17\u0e35\u0e48 build \u0e08\u0e23\u0e34\u0e07",
          ],
        },
      ],
    },
    {
      id: "codepipeline",
      title: "AWS CodePipeline",
      content: [
        {
          type: "paragraph",
          text: "<strong>CodePipeline</strong> \u0e04\u0e37\u0e2d\u0e15\u0e31\u0e27 orchestrate CI/CD pipeline \u2014 \u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e15\u0e48\u0e2d\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19: <strong>Code \u2192 Build \u2192 Test \u2192 Provision \u2192 Deploy</strong>",
        },
        {
          type: "code",
          language: "text",
          caption: "\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07 pipeline ทั่วไป",
          code: "[Source]      \u2192 [Build]    \u2192 [Test]     \u2192 [Deploy]\nCodeCommit       CodeBuild      CodeBuild     CodeDeploy\nGitHub                                         Beanstalk\n                                              CloudFormation",
        },
        {
          type: "list",
          items: [
            "Compatible \u0e01\u0e31\u0e1a CodeCommit, CodeBuild, CodeDeploy, Elastic Beanstalk, CloudFormation",
            "\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a 3rd-party \u0e40\u0e0a\u0e48\u0e19 GitHub",
            "\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e2a\u0e48 manual approval step \u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e44\u0e14\u0e49",
          ],
        },
      ],
    },
    {
      id: "codeartifact",
      title: "AWS CodeArtifact",
      content: [
        {
          type: "paragraph",
          text: "<strong>CodeArtifact</strong> \u0e04\u0e37\u0e2d\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e40\u0e01\u0e47\u0e1a + \u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 software package + dependency artifact \u2014 \u0e43\u0e0a\u0e49\u0e41\u0e17\u0e19\u0e01\u0e32\u0e23 host artifact server \u0e40\u0e2d\u0e07 (\u0e40\u0e0a\u0e48\u0e19 Nexus, Artifactory)",
        },
        {
          type: "list",
          items: [
            "\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a Maven, Gradle (Java)",
            "\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a npm, yarn (JavaScript)",
            "\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a twine, pip (Python)",
            "\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a NuGet (.NET)",
          ],
        },
      ],
    },
    {
      id: "codestar",
      title: "AWS CodeStar",
      content: [
        {
          type: "paragraph",
          text: "<strong>CodeStar</strong> \u0e04\u0e37\u0e2d unified UI \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e07\u0e32\u0e19 software development \u2014 \u0e23\u0e27\u0e21 CodeCommit + CodePipeline + CodeBuild + CodeDeploy + Beanstalk + EC2 \u0e44\u0e27\u0e49\u0e17\u0e35\u0e48\u0e40\u0e14\u0e35\u0e22\u0e27",
        },
        {
          type: "list",
          items: [
            "Quick start \u2014 setup project CI/CD \u0e44\u0e14\u0e49\u0e23\u0e27\u0e14\u0e40\u0e23\u0e47\u0e27",
            "\u0e41\u0e01\u0e49 code \u0e1a\u0e19 cloud \u0e44\u0e14\u0e49\u0e1c\u0e48\u0e32\u0e19 <strong>Cloud9</strong>",
            "\u0e23\u0e27\u0e21 dashboard issue tracking, team collaboration",
          ],
        },
      ],
    },
    {
      id: "cloud9",
      title: "AWS Cloud9",
      content: [
        {
          type: "paragraph",
          text: "<strong>Cloud9</strong> \u0e04\u0e37\u0e2d cloud IDE \u0e1a\u0e19 browser \u2014 \u0e40\u0e02\u0e35\u0e22\u0e19 / run / debug code \u0e44\u0e14\u0e49\u0e08\u0e32\u0e01 browser \u0e42\u0e14\u0e22\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d\u0e1a\u0e19 local",
        },
        {
          type: "list",
          items: [
            "Browser-based IDE",
            "\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a real-time collaboration (pair programming)",
            "Integrate \u0e01\u0e31\u0e1a CodeStar / CodeCommit \u0e44\u0e14\u0e49",
          ],
        },
      ],
    },
    {
      id: "ssm",
      title: "AWS Systems Manager (SSM)",
      content: [
        {
          type: "paragraph",
          text: "<strong>Systems Manager (SSM)</strong> \u0e04\u0e37\u0e2d\u0e0a\u0e38\u0e14\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 EC2 + on-premises servers \u0e02\u0e19\u0e32\u0e14 fleet \u2014 hybrid service \u2014 \u0e21\u0e35\u0e1c\u0e25\u0e34\u0e15\u0e20\u0e31\u0e13\u0e11\u0e4c\u0e22\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32 10 \u0e15\u0e31\u0e27",
        },
        {
          type: "grid",
          items: [
            {
              title: "Patch Manager",
              description:
                "Automate \u0e01\u0e32\u0e23 patch OS \u0e1a\u0e19 fleet \u2014 \u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a compliance",
            },
            {
              title: "Run Command",
              description:
                "\u0e23\u0e31\u0e19 command \u0e02\u0e49\u0e32\u0e21 server \u0e2b\u0e25\u0e32\u0e22\u0e15\u0e31\u0e27\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e01\u0e31\u0e19 \u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07 SSH",
            },
            {
              title: "Parameter Store",
              description:
                "\u0e40\u0e01\u0e47\u0e1a config / secret \u2014 plain text \u0e2b\u0e23\u0e37\u0e2d encrypted (\u0e1c\u0e48\u0e32\u0e19 KMS)",
            },
            {
              title: "Session Manager",
              description:
                "\u0e40\u0e02\u0e49\u0e32 EC2 \u0e1c\u0e48\u0e32\u0e19 browser \u0e2b\u0e23\u0e37\u0e2d CLI \u0e42\u0e14\u0e22 <em>\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49 SSH</em> \u0e41\u0e25\u0e30\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e40\u0e1b\u0e34\u0e14 port 22",
            },
            {
              title: "State Manager",
              description:
                "\u0e1a\u0e31\u0e07\u0e04\u0e31\u0e1a state \u0e02\u0e2d\u0e07 instance \u0e43\u0e2b\u0e49\u0e2d\u0e22\u0e39\u0e48\u0e15\u0e32\u0e21\u0e17\u0e35\u0e48\u0e01\u0e33\u0e2b\u0e19\u0e14",
            },
            {
              title: "Inventory",
              description:
                "\u0e40\u0e01\u0e47\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 software / OS / patch \u0e02\u0e2d\u0e07 fleet",
            },
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "SSM Agent",
          text: "Server \u0e15\u0e49\u0e2d\u0e07\u0e15\u0e34\u0e14 SSM Agent \u2014 \u0e15\u0e34\u0e14\u0e21\u0e32\u0e43\u0e19\u0e15\u0e31\u0e27 default \u0e02\u0e2d\u0e07 Amazon Linux 2 + Ubuntu \u0e1a\u0e32\u0e07 AMI \u2014 \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a Linux + Windows",
        },
      ],
    },
    {
      id: "opsworks",
      title: "AWS OpsWorks",
      content: [
        {
          type: "paragraph",
          text: "<strong>OpsWorks</strong> \u0e04\u0e37\u0e2d managed <strong>Chef</strong> + <strong>Puppet</strong> \u2014 \u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d configuration management automation \u0e22\u0e2d\u0e14\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19 enterprise \u2014 \u0e17\u0e32\u0e07\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e02\u0e2d\u0e07 SSM",
        },
        {
          type: "list",
          items: [
            "Provision AWS resource \u0e44\u0e14\u0e49\u0e40\u0e09\u0e1e\u0e32\u0e30 (EC2, Database, Load Balancer, EBS)",
            "\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 service \u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e19\u0e2d\u0e01\u0e40\u0e2b\u0e19\u0e37\u0e2d\u0e08\u0e32\u0e01 4 \u0e15\u0e31\u0e27\u0e19\u0e35\u0e49",
            "Hybrid: \u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 on-premises ได้ด้วย",
          ],
        },
        {
          type: "callout",
          variant: "warning",
          title: "Exam Tip",
          text: "\u0e16\u0e49\u0e32\u0e42\u0e08\u0e17\u0e22\u0e4c\u0e21\u0e35\u0e04\u0e33\u0e27\u0e48\u0e32 <strong>Chef</strong> \u0e2b\u0e23\u0e37\u0e2d <strong>Puppet</strong> \u2192 \u0e15\u0e2d\u0e1a <strong>OpsWorks</strong> \u0e17\u0e31\u0e19\u0e17\u0e35",
        },
      ],
    },
    {
      id: "deployment-services-comparison",
      title: "Deployment Services Comparison",
      content: [
        {
          type: "paragraph",
          text: "\u0e15\u0e32\u0e23\u0e32\u0e07\u0e40\u0e1b\u0e23\u0e35\u0e22\u0e1a\u0e40\u0e17\u0e35\u0e22\u0e1a\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23 deployment / management \u0e1e\u0e34\u0e08\u0e32\u0e23\u0e13\u0e32\u0e15\u0e32\u0e21\u0e2a\u0e16\u0e32\u0e19\u0e01\u0e32\u0e23\u0e13\u0e4c:",
        },
        {
          type: "grid",
          items: [
            {
              title: "CloudFormation",
              description:
                "AWS only \u2014 IaC \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e23\u0e35\u0e2a\u0e2d\u0e23\u0e4c\u0e2a\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 \u2014 repeat \u0e02\u0e49\u0e32\u0e21 region/account \u0e44\u0e14\u0e49",
            },
            {
              title: "Elastic Beanstalk",
              description:
                "AWS only \u2014 PaaS \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e20\u0e32\u0e29\u0e32 / framework \u0e08\u0e33\u0e01\u0e31\u0e14 + Docker \u2014 \u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a architecture \u0e23\u0e39\u0e49\u0e08\u0e31\u0e01\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32",
            },
            {
              title: "CodeDeploy",
              description:
                "Hybrid (AWS + on-prem) \u2014 deploy application code \u0e25\u0e07 server \u0e17\u0e35\u0e48\u0e21\u0e35\u0e2d\u0e22\u0e39\u0e48",
            },
            {
              title: "Systems Manager",
              description:
                "Hybrid \u2014 \u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 fleet (patch, run command, parameter, session)",
            },
            {
              title: "OpsWorks",
              description:
                "Hybrid \u2014 managed Chef / Puppet \u2014 configuration management",
            },
          ],
        },
      ],
    },
    {
      id: "developer-services-summary",
      title: "Developer Services Summary",
      content: [
        {
          type: "paragraph",
          text: "\u0e2a\u0e23\u0e38\u0e1b\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a developer \u0e1a\u0e19 AWS:",
        },
        {
          type: "grid",
          items: [
            {
              title: "CodeCommit",
              description: "Git source control \u2014 \u0e40\u0e01\u0e47\u0e1a code repository",
            },
            {
              title: "CodeBuild",
              description: "Build + test code \u2014 \u0e2a\u0e23\u0e49\u0e32\u0e07 artifact",
            },
            {
              title: "CodeDeploy",
              description: "Deploy application \u0e25\u0e07 EC2 / on-prem",
            },
            {
              title: "CodePipeline",
              description: "Orchestrate CI/CD \u2014 \u0e23\u0e49\u0e2d\u0e22\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",
            },
            {
              title: "CodeArtifact",
              description: "\u0e40\u0e01\u0e47\u0e1a software package / dependency",
            },
            {
              title: "CodeStar",
              description: "Unified UI \u0e23\u0e27\u0e21\u0e17\u0e38\u0e01\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e27\u0e49\u0e17\u0e35\u0e48\u0e40\u0e14\u0e35\u0e22\u0e27",
            },
            {
              title: "Cloud9",
              description: "Cloud IDE \u0e1a\u0e19 browser",
            },
            {
              title: "CDK",
              description: "IaC \u0e14\u0e49\u0e27\u0e22 programming language \u2192 CloudFormation",
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: "dep-q1",
      question:
        "What is AWS CloudFormation?",
      options: [
        "A managed CI/CD service.",
        "An Infrastructure as Code (IaC) service that lets you describe AWS resources in JSON/YAML templates and provision them automatically.",
        "A monitoring service.",
        "A code repository service.",
      ],
      correct: 1,
      explanation:
        "AWS CloudFormation is AWS's native Infrastructure as Code service. You define resources in a template (JSON/YAML), and CloudFormation provisions and manages them as a stack.",
    },
    {
      id: "dep-q2",
      question:
        "Which AWS deployment service is BEST for developers to upload code (Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker) without managing the underlying infrastructure?",
      options: [
        "AWS Elastic Beanstalk",
        "AWS CloudFormation",
        "Amazon ECS",
        "AWS Lambda",
      ],
      correct: 0,
      explanation:
        "AWS Elastic Beanstalk is a Platform-as-a-Service (PaaS) that handles capacity provisioning, load balancing, scaling, and monitoring automatically — you just upload your code.",
    },
    {
      id: "dep-q3",
      question:
        "Which AWS service is a managed Git repository?",
      options: [
        "AWS CodeBuild",
        "AWS CodeCommit",
        "AWS CodeDeploy",
        "AWS CodePipeline",
      ],
      correct: 1,
      explanation:
        "AWS CodeCommit is a managed Git service for hosting private repositories (note: CodeCommit is no longer accepting new customers as of July 2024 — Stephane updates AGENTS.md but the exam still tests it).",
    },
    {
      id: "dep-q4",
      question:
        "Which AWS service builds source code and runs unit tests?",
      options: [
        "AWS CodeBuild",
        "AWS CodeCommit",
        "AWS CodeDeploy",
        "AWS CodeStar",
      ],
      correct: 0,
      explanation:
        "AWS CodeBuild is a fully managed continuous integration service — compiles source code, runs tests, and produces deployable artifacts. Pay per build minute.",
    },
    {
      id: "dep-q5",
      question:
        "Which AWS service automates code deployment to EC2, on-premises, Lambda, or ECS?",
      options: [
        "AWS CodeBuild",
        "AWS CodeDeploy",
        "AWS CodePipeline",
        "AWS Elastic Beanstalk",
      ],
      correct: 1,
      explanation:
        "AWS CodeDeploy automates application deployments to EC2 (in-place or blue/green), on-premises servers, Lambda, and ECS. Supports rolling deployments and automatic rollbacks.",
    },
    {
      id: "dep-q6",
      question:
        "Which AWS service is a CI/CD pipeline orchestration tool that can integrate CodeCommit/CodeBuild/CodeDeploy/third-party tools?",
      options: [
        "AWS CodePipeline",
        "AWS CodeBuild",
        "AWS Elastic Beanstalk",
        "AWS CloudFormation",
      ],
      correct: 0,
      explanation:
        "AWS CodePipeline is a continuous delivery service that orchestrates build, test, and deploy phases — integrates with CodeCommit, GitHub, Jenkins, CodeBuild, CodeDeploy, ECS, Lambda, etc.",
    },
    {
      id: "dep-q7",
      question:
        "Which AWS service provides managed Jenkins-like build/test pipelines as a fully managed alternative?",
      options: [
        "AWS CodeBuild",
        "AWS CodeStar",
        "AWS Elastic Beanstalk",
        "AWS Cloud9",
      ],
      correct: 0,
      explanation:
        "AWS CodeBuild is the managed CI service. While CodeStar / Cloud9 are dev environments, CodeBuild specifically handles build/test workflows — replacing self-managed Jenkins.",
    },
    {
      id: "dep-q8",
      question:
        "What is AWS Cloud Development Kit (CDK)?",
      options: [
        "A YAML template editor.",
        "A framework that lets you define AWS infrastructure in familiar programming languages (TypeScript, Python, Java, Go, etc.) and synthesizes CloudFormation templates.",
        "A serverless function service.",
        "A monitoring service.",
      ],
      correct: 1,
      explanation:
        "AWS CDK (Cloud Development Kit) is an IaC framework that uses TypeScript, Python, Java, C#, Go, etc. to define infrastructure. It synthesizes CloudFormation templates under the hood.",
    },
    {
      id: "dep-q9",
      question:
        "Which AWS service is a no-code, fully managed development tool for issue tracking, source control, and CI/CD?",
      options: [
        "AWS CodeStar",
        "AWS CodeBuild",
        "AWS CodeArtifact",
        "AWS CodeGuru",
      ],
      correct: 0,
      explanation:
        "AWS CodeStar is an integrated development tool that provides a unified UI for managing software projects (combining CodeCommit, CodeBuild, CodeDeploy, CodePipeline, JIRA, etc.).",
    },
    {
      id: "dep-q10",
      question:
        "Which is the difference between CloudFormation and Elastic Beanstalk?",
      options: [
        "They are the same.",
        "CloudFormation is general-purpose IaC for ANY AWS resource; Elastic Beanstalk is specifically for deploying applications, abstracting infrastructure.",
        "Beanstalk is for databases, CloudFormation is for compute.",
        "Beanstalk is more expensive.",
      ],
      correct: 1,
      explanation:
        "CloudFormation: define ANY AWS resource declaratively. Elastic Beanstalk: high-level PaaS — upload code, Beanstalk creates EC2, ELB, ASG, RDS automatically. Beanstalk uses CloudFormation under the hood.",
    },
    {
      id: "dep-q11",
      question:
        "What is a CloudFormation StackSet?",
      options: [
        "A set of CloudFormation templates in a folder.",
        "A feature that deploys CloudFormation stacks across multiple accounts and regions from a single template.",
        "A type of EC2 instance.",
        "A deployment to Lambda only.",
      ],
      correct: 1,
      explanation:
        "CloudFormation StackSets let you deploy stacks to multiple AWS accounts and regions in a single operation — useful for AWS Organizations-wide governance and standard deployments.",
    },
    {
      id: "dep-q12",
      question:
        "Which AWS service is a managed package repository for software packages (npm, Maven, Python pip, NuGet)?",
      options: [
        "AWS CodeArtifact",
        "AWS CodeCommit",
        "AWS CodeStar",
        "Amazon ECR",
      ],
      correct: 0,
      explanation:
        "AWS CodeArtifact is a managed artifact repository for application dependencies — supports npm, Maven, PyPI, NuGet, RubyGems, etc. Integrates with public repositories.",
    },
    {
      id: "dep-q13",
      question:
        "Which AWS service uses ML to detect security/code-quality issues during code reviews?",
      options: [
        "AWS CodeGuru",
        "AWS CodeBuild",
        "AWS CodePipeline",
        "Amazon Inspector",
      ],
      correct: 0,
      explanation:
        "Amazon CodeGuru uses ML for automated code reviews (CodeGuru Reviewer) and application performance optimization (CodeGuru Profiler).",
    },
    {
      id: "dep-q14",
      question:
        "Which AWS service is a managed cloud-based IDE accessible via web browser?",
      options: [
        "AWS Cloud9",
        "AWS CodeBuild",
        "AWS CodeStar",
        "AWS CloudShell",
      ],
      correct: 0,
      explanation:
        "AWS Cloud9 is a cloud-based IDE that supports Python, JavaScript, PHP, Ruby, Go, C++, etc. Provides a code editor + terminal + debugger directly in the browser.",
    },
    {
      id: "dep-q15",
      question:
        "Which AWS service is a serverless framework specifically for deploying serverless applications (Lambda + API Gateway + DynamoDB)?",
      options: [
        "AWS Serverless Application Model (SAM)",
        "AWS CloudFormation",
        "AWS CDK",
        "AWS Elastic Beanstalk",
      ],
      correct: 0,
      explanation:
        "AWS SAM (Serverless Application Model) is an open-source framework for building serverless applications — extends CloudFormation with simpler syntax for Lambda, API Gateway, DynamoDB, etc.",
    },
    {
      id: "dep-q16",
      question:
        "What is AWS CloudShell?",
      options: [
        "A web-based terminal pre-authenticated with your AWS credentials, accessible from the AWS Management Console.",
        "A serverless function service.",
        "A managed CI/CD service.",
        "A container service.",
      ],
      correct: 0,
      explanation:
        "AWS CloudShell is a browser-based shell with the AWS CLI/SDK and developer tools pre-installed and pre-authenticated using your console credentials. Free, persistent home directory.",
    },
    {
      id: "dep-q17",
      question:
        "What is the AWS CLI?",
      options: [
        "A web-based GUI.",
        "A command-line tool to interact with AWS services from a terminal.",
        "A type of EC2 instance.",
        "A managed database.",
      ],
      correct: 1,
      explanation:
        "The AWS Command Line Interface (CLI) is a unified tool to interact with AWS services from your terminal. Open-source. Configure credentials with `aws configure`.",
    },
    {
      id: "dep-q18",
      question:
        "Which is the AWS-recommended deployment strategy that creates a parallel new environment, switches traffic, and allows fast rollback?",
      options: [
        "In-place upgrade",
        "Blue/Green deployment",
        "Single instance redeployment",
        "Rolling restart",
      ],
      correct: 1,
      explanation:
        "Blue/Green deployments stand up a brand-new (green) environment alongside the existing (blue), test it, then switch traffic via DNS or ELB. Easy rollback by reverting traffic. Supported in CodeDeploy, Beanstalk, Lambda aliases.",
    },
    {
      id: "dep-q19",
      question:
        "Which AWS service is BEST for running infrastructure changes in a controlled, reviewable manner using IaC?",
      options: [
        "AWS CloudFormation",
        "AWS CLI manual commands",
        "AWS Console click-ops",
        "AWS Backup",
      ],
      correct: 0,
      explanation:
        "CloudFormation (or CDK / Terraform) provides reviewable, version-controlled, repeatable infrastructure changes — far superior to manual CLI commands or console click-ops.",
    },
    {
      id: "dep-q20",
      question:
        "What is the recommended way to manage Elastic Beanstalk application versions?",
      options: [
        "Manually edit production servers.",
        "Upload application source bundles to S3, deploy as Beanstalk application versions, and use environments for dev/staging/prod.",
        "Run all changes from your laptop.",
        "Send code via email.",
      ],
      correct: 1,
      explanation:
        "Best practice: store source bundles in S3, register them as Beanstalk application versions, deploy to environments via the console or CLI, and use environment cloning for dev/staging/prod.",
    },
    {
      id: "dep-q21",
      question:
        "What is the role of a CloudFormation Change Set?",
      options: [
        "It deletes all stacks.",
        "It previews the changes that would be applied to a stack BEFORE executing them.",
        "It backs up the stack.",
        "It encrypts resources.",
      ],
      correct: 1,
      explanation:
        "Change Sets show what would change (add/modify/delete) when a stack update is executed. This lets you review and approve changes before they happen.",
    },
    {
      id: "dep-q22",
      question:
        "Which is the BEST description of \"Drift Detection\" in CloudFormation?",
      options: [
        "Detects when stack resources have been modified outside of CloudFormation (e.g., manually in the console).",
        "Detects when costs are increasing.",
        "Detects when EC2 traffic is unusual.",
        "Detects when an instance changes region.",
      ],
      correct: 0,
      explanation:
        "CloudFormation Drift Detection identifies stack resources that have been modified outside the template (manual console changes, API calls, etc.). Helps re-align infrastructure with IaC.",
    },
    {
      id: "dep-q23",
      question:
        "Which is true about AWS Elastic Beanstalk pricing?",
      options: [
        "It costs $99/month flat.",
        "Beanstalk itself is free; you only pay for the underlying AWS resources (EC2, ELB, RDS, etc.) it provisions.",
        "Beanstalk costs more than running EC2 directly.",
        "Beanstalk is only available with Enterprise Support.",
      ],
      correct: 1,
      explanation:
        "Beanstalk has no additional charge — you only pay for the resources it creates (EC2 instances, EBS volumes, ELBs, RDS, etc.). Same for CloudFormation.",
    },
    {
      id: "dep-q24",
      question:
        "Which deployment strategy ensures zero downtime by gradually shifting traffic to a new version?",
      options: [
        "Blue/Green",
        "Canary deployment",
        "Rolling deployment",
        "All of the above offer zero / minimal downtime",
      ],
      correct: 3,
      explanation:
        "All three strategies enable minimal/zero downtime: blue/green (full new env), canary (small percentage at first, then full), and rolling (gradually replace instances).",
    },
    {
      id: "dep-q25",
      question:
        "Which AWS service provides distributed tracing to debug and analyze microservices applications?",
      options: [
        "AWS X-Ray",
        "Amazon CloudWatch",
        "AWS CloudTrail",
        "AWS Config",
      ],
      correct: 0,
      explanation:
        "AWS X-Ray provides distributed tracing — visualizes request flows through microservices, identifying bottlenecks and errors in Lambda, ECS, EC2, API Gateway, and more.",
    },
  ],
};
