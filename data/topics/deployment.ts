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
      id: "deployment-q1",
      question: "AWS CloudFormation \u0e04\u0e37\u0e2d\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e25\u0e31\u0e01\u0e29\u0e13\u0e30\u0e43\u0e14?",
      options: [
        "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d imperative scripting \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a deploy application code \u0e25\u0e07 EC2",
        "Declarative Infrastructure as Code \u2014 \u0e40\u0e02\u0e35\u0e22\u0e19 template \u0e1a\u0e2d\u0e01\u0e27\u0e48\u0e32\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23 AWS resource \u0e2d\u0e30\u0e44\u0e23 \u0e41\u0e25\u0e49\u0e27 AWS \u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e43\u0e2b\u0e49",
        "Cloud IDE \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e02\u0e35\u0e22\u0e19 code \u0e1a\u0e19 browser",
        "Managed Chef / Puppet \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a configuration management",
      ],
      correct: 1,
      explanation:
        "CloudFormation \u0e04\u0e37\u0e2d\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23 Infrastructure as Code \u0e41\u0e1a\u0e1a declarative \u2014 \u0e40\u0e02\u0e35\u0e22\u0e19 template (JSON/YAML) \u0e1a\u0e2d\u0e01 <em>what</em> \u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23 (resource, property, dependency) \u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e1a\u0e2d\u0e01 <em>how</em> \u0e41\u0e25\u0e49\u0e27 AWS \u0e2a\u0e23\u0e49\u0e32\u0e07/\u0e25\u0e1a/\u0e41\u0e01\u0e49 resource \u0e43\u0e2b\u0e49\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34 \u2014 \u0e0a\u0e49\u0e2d\u0e22\u0e2d\u0e37\u0e48\u0e19 \u0e04\u0e37\u0e2d Cloud9 (cloud IDE), CodeDeploy / OpsWorks (configuration / deployment)",
    },
    {
      id: "deployment-q2",
      question:
        "AWS Elastic Beanstalk \u0e08\u0e31\u0e14\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e23\u0e30\u0e14\u0e31\u0e1a service \u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e43\u0e14?",
      options: [
        "Infrastructure as a Service (IaaS)",
        "Software as a Service (SaaS)",
        "Platform as a Service (PaaS) \u2014 developer \u0e2a\u0e48\u0e07\u0e41\u0e04\u0e48 application code \u0e41\u0e25\u0e49\u0e27 AWS \u0e14\u0e39\u0e41\u0e25 EC2 / ASG / ELB / RDS \u0e43\u0e2b\u0e49",
        "Function as a Service (FaaS)",
      ],
      correct: 2,
      explanation:
        "Elastic Beanstalk \u0e04\u0e37\u0e2d <strong>PaaS (Platform as a Service)</strong> \u2014 developer \u0e2a\u0e48\u0e07\u0e41\u0e04\u0e48\u0e42\u0e04\u0e49\u0e14\u0e02\u0e36\u0e49\u0e19\u0e44\u0e1b \u0e41\u0e25\u0e49\u0e27 Beanstalk \u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 EC2, ASG, ELB, RDS, capacity, deployment, health monitoring \u0e43\u0e2b\u0e49\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 \u2014 \u0e15\u0e31\u0e27 service \u0e1f\u0e23\u0e35 \u0e08\u0e48\u0e32\u0e22\u0e40\u0e09\u0e1e\u0e32\u0e30 underlying resource \u0e17\u0e35\u0e48 Beanstalk \u0e2a\u0e23\u0e49\u0e32\u0e07",
    },
    {
      id: "deployment-q3",
      question: "AWS CodePipeline \u0e21\u0e35\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e2b\u0e25\u0e31\u0e01\u0e2d\u0e30\u0e44\u0e23?",
      options: [
        "Compile \u0e41\u0e25\u0e30 build code \u0e08\u0e32\u0e01 source",
        "\u0e40\u0e01\u0e47\u0e1a Git repository \u0e1a\u0e19 AWS",
        "Orchestrate CI/CD pipeline \u2014 \u0e15\u0e48\u0e2d\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e08\u0e32\u0e01 source \u2192 build \u2192 test \u2192 deploy \u0e44\u0e27\u0e49\u0e14\u0e49\u0e27\u0e22\u0e01\u0e31\u0e19",
        "\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 EC2 fleet \u0e41\u0e25\u0e30 patch OS",
      ],
      correct: 2,
      explanation:
        "CodePipeline \u0e04\u0e37\u0e2d\u0e15\u0e31\u0e27 orchestrate CI/CD pipeline \u2014 \u0e15\u0e48\u0e2d\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19 Code (CodeCommit/GitHub) \u2192 Build (CodeBuild) \u2192 Test \u2192 Deploy (CodeDeploy/Beanstalk/CloudFormation) \u0e40\u0e02\u0e49\u0e32\u0e14\u0e49\u0e27\u0e22\u0e01\u0e31\u0e19\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34 \u2014 build code \u0e04\u0e37\u0e2d CodeBuild, Git repo \u0e04\u0e37\u0e2d CodeCommit, fleet management \u0e04\u0e37\u0e2d SSM",
    },
    {
      id: "deployment-q4",
      question: "CodeCommit \u0e01\u0e31\u0e1a CodeBuild \u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23?",
      options: [
        "CodeCommit deploy code \u2014 CodeBuild orchestrate pipeline",
        "CodeCommit \u0e04\u0e37\u0e2d Git source control (\u0e40\u0e01\u0e47\u0e1a code) \u2014 CodeBuild \u0e04\u0e37\u0e2d build/test service (compile \u0e41\u0e25\u0e30\u0e2a\u0e23\u0e49\u0e32\u0e07 artifact)",
        "CodeCommit build code \u2014 CodeBuild \u0e40\u0e01\u0e47\u0e1a Git",
        "\u0e17\u0e31\u0e49\u0e07\u0e04\u0e39\u0e48\u0e40\u0e1b\u0e47\u0e19 service \u0e15\u0e31\u0e27\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19 \u0e44\u0e21\u0e48\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19",
      ],
      correct: 1,
      explanation:
        "<strong>CodeCommit</strong> = Git-based source control hosting (\u0e40\u0e01\u0e47\u0e1a code repository \u0e1a\u0e19 AWS \u2014 \u0e17\u0e32\u0e07\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e41\u0e17\u0e19 GitHub) \u2014 <strong>CodeBuild</strong> = build/test service (compile, run tests, \u0e2a\u0e23\u0e49\u0e32\u0e07 package/artifact) \u2014 \u0e17\u0e31\u0e49\u0e07\u0e2a\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e21\u0e31\u0e01\u0e43\u0e0a\u0e49\u0e23\u0e48\u0e27\u0e21\u0e01\u0e31\u0e19\u0e1c\u0e48\u0e32\u0e19 CodePipeline",
    },
    {
      id: "deployment-q5",
      question:
        "\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e23\u0e21\u0e35 EC2 instance \u0e1a\u0e19 AWS \u0e41\u0e25\u0e30\u0e21\u0e35 server on-premises \u0e2d\u0e22\u0e48\u0e32\u0e07\u0e25\u0e30\u0e2b\u0e25\u0e32\u0e22\u0e23\u0e49\u0e2d\u0e22\u0e15\u0e31\u0e27 \u2014 \u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e2b\u0e32\u0e23\u0e23\u0e27\u0e21\u0e0a\u0e38\u0e14\u0e40\u0e14\u0e35\u0e22\u0e27 (patch OS, \u0e23\u0e31\u0e19 command, \u0e40\u0e01\u0e47\u0e1a parameter, \u0e40\u0e02\u0e49\u0e32 server \u0e44\u0e21\u0e48\u0e1c\u0e48\u0e32\u0e19 SSH) \u0e04\u0e27\u0e23\u0e43\u0e0a\u0e49\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e43\u0e14?",
      options: [
        "AWS Elastic Beanstalk",
        "AWS CodeDeploy",
        "AWS Systems Manager (SSM) \u2014 \u0e1a\u0e23\u0e34\u0e2b\u0e32\u0e23 EC2 + on-prem fleet \u0e41\u0e1a\u0e1a hybrid",
        "AWS CloudFormation",
      ],
      correct: 2,
      explanation:
        "<strong>AWS Systems Manager (SSM)</strong> \u0e04\u0e37\u0e2d hybrid service \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 EC2 + on-premises servers \u0e02\u0e19\u0e32\u0e14 fleet \u2014 \u0e23\u0e27\u0e21 Patch Manager, Run Command, Parameter Store, Session Manager (\u0e40\u0e02\u0e49\u0e32 server \u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49 SSH \u0e2b\u0e23\u0e37\u0e2d port 22), State Manager, Inventory \u2014 server \u0e15\u0e49\u0e2d\u0e07\u0e15\u0e34\u0e14 SSM Agent \u0e08\u0e36\u0e07\u0e08\u0e30\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e44\u0e14\u0e49",
    },
    {
      id: "deployment-q6",
      question:
        "\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e16\u0e32\u0e21\u0e16\u0e36\u0e07 managed <strong>Chef</strong> / <strong>Puppet</strong> \u2014 AWS service \u0e15\u0e31\u0e27\u0e44\u0e2b\u0e19\u0e15\u0e23\u0e07\u0e01\u0e31\u0e1a\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22\u0e19\u0e35\u0e49?",
      options: [
        "AWS Systems Manager",
        "AWS CodeDeploy",
        "AWS OpsWorks \u2014 managed Chef + Puppet \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a configuration management",
        "AWS Elastic Beanstalk",
      ],
      correct: 2,
      explanation:
        "<strong>AWS OpsWorks</strong> = managed Chef + Puppet \u2014 \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a configuration management automation \u2014 \u0e16\u0e49\u0e32\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e21\u0e35\u0e04\u0e33\u0e27\u0e48\u0e32 \"Chef\" \u0e2b\u0e23\u0e37\u0e2d \"Puppet\" \u0e15\u0e2d\u0e1a OpsWorks \u0e17\u0e31\u0e19\u0e17\u0e35 \u2014 SSM \u0e40\u0e1b\u0e47\u0e19 alternative \u0e02\u0e2d\u0e07 OpsWorks (\u0e44\u0e21\u0e48\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a Chef/Puppet)",
    },
    {
      id: "deployment-q7",
      question: "AWS CDK (Cloud Development Kit) \u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23?",
      options: [
        "Cloud IDE \u0e1a\u0e19 browser \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e02\u0e35\u0e22\u0e19 / debug code",
        "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d\u0e40\u0e02\u0e35\u0e22\u0e19 IaC \u0e14\u0e49\u0e27\u0e22 programming language (TypeScript, Python, Java, .NET) \u0e41\u0e25\u0e49\u0e27 compile \u0e40\u0e1b\u0e47\u0e19 CloudFormation template",
        "\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23 deploy code \u0e25\u0e07 EC2 / on-premises",
        "Managed Kubernetes service",
      ],
      correct: 1,
      explanation:
        "<strong>AWS CDK</strong> \u0e04\u0e37\u0e2d\u0e01\u0e32\u0e23\u0e40\u0e02\u0e35\u0e22\u0e19 cloud infrastructure \u0e14\u0e49\u0e27\u0e22\u0e20\u0e32\u0e29\u0e32 programming \u0e17\u0e35\u0e48\u0e04\u0e38\u0e49\u0e19\u0e40\u0e04\u0e22 (JavaScript/TypeScript, Python, Java, .NET) \u2014 code \u0e08\u0e30\u0e16\u0e39\u0e01 \"compile\" \u0e40\u0e1b\u0e47\u0e19 CloudFormation template \u0e41\u0e25\u0e49\u0e27 deploy \u0e15\u0e48\u0e2d \u2014 \u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e1a Cloud9 (IDE), CodeDeploy (deploy), EKS (Kubernetes)",
    },
  ],
};
