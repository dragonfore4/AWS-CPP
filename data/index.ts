import { TopicData } from "@/types/topic";
import { cloudConcepts } from "./topics/cloud-concepts";
import { iam } from "./topics/iam";
import { ec2 } from "./topics/ec2";
import { ec2Storage } from "./topics/ec2-storage";
import { elbAsg } from "./topics/elb-asg";
import { s3 } from "./topics/s3";
import { databases } from "./topics/databases";
import { otherCompute } from "./topics/other-compute";
import { deployment } from "./topics/deployment";
import { globalInfrastructure } from "./topics/global-infrastructure";
import { cloudIntegration } from "./topics/cloud-integration";
import { cloudMonitoring } from "./topics/cloud-monitoring";
import { vpc } from "./topics/vpc";
import { security } from "./topics/security";
import { machineLearning } from "./topics/machine-learning";
import { accountManagement } from "./topics/account-management";
import { advancedIdentity } from "./topics/advanced-identity";
import { otherServices } from "./topics/other-services";
import { wellArchitected } from "./topics/well-architected";
import { examTips } from "./topics/exam-tips";

// Topic order follows Stephane Maarek's Ultimate AWS Cloud Practitioner CLF-C02 course (Udemy)
export const topics: TopicData[] = [
  cloudConcepts,        // sec 3  - Cloud Computing Concepts
  iam,                  // sec 4  - IAM
  ec2,                  // sec 5  - EC2
  ec2Storage,           // sec 6  - EC2 Storage (EBS, EFS, FSx, Instance Store, AMI)
  elbAsg,               // sec 7  - ELB & ASG
  s3,                   // sec 8  - Amazon S3 (+ Snow Family)
  databases,            // sec 9  - Databases & Analytics
  otherCompute,         // sec 10 - Other Compute (Lambda, ECS, Fargate, etc.)
  deployment,           // sec 11 - Deployment & IaC
  globalInfrastructure, // sec 12 - Global Infrastructure (Route 53, CloudFront, etc.)
  cloudIntegration,     // sec 13 - Cloud Integration (SQS, SNS, Kinesis, MQ)
  cloudMonitoring,      // sec 14 - Cloud Monitoring (CloudWatch, CloudTrail, Config)
  vpc,                  // sec 15 - VPC & Networking
  security,             // sec 16 - Security & Compliance
  machineLearning,      // sec 17 - Machine Learning
  accountManagement,    // sec 18 - Account Management & Billing
  advancedIdentity,     // sec 19 - Advanced Identity (STS, Cognito, etc.)
  otherServices,        // sec 20 - Other Services
  wellArchitected,      // sec 21 - Well-Architected Framework
  examTips,             // sec 22 - Exam Tips & Strategy
];

export function getTopicBySlug(slug: string): TopicData | undefined {
  return topics.find((t) => t.slug === slug);
}

export function getAllSlugs(): string[] {
  return topics.map((t) => t.slug);
}
