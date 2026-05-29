import { TopicData } from "@/types/topic";

export const machineLearning: TopicData = {
  slug: "machine-learning",
  title: "Machine Learning",
  subtitle: "Rekognition, Transcribe, SageMaker & more",
  accent: "violet",
  emoji: "\ud83e\udd16",
  category: "Machine Learning",
  description:
    "AWS \u0e21\u0e35\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23 Machine Learning \u0e04\u0e23\u0e1a\u0e27\u0e07\u0e08\u0e23 \u2014 \u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48 AI services \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e43\u0e0a\u0e49 (Rekognition, Transcribe, Polly, Translate, Lex, Comprehend) \u0e44\u0e1b\u0e08\u0e19\u0e16\u0e36\u0e07 SageMaker \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2a\u0e23\u0e49\u0e32\u0e07 train \u0e41\u0e25\u0e30 deploy ML model \u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e40\u0e2d\u0e07 \u2014 \u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a CCP \u0e08\u0e30\u0e40\u0e19\u0e49\u0e19\u0e01\u0e32\u0e23\u0e08\u0e1a\u0e04\u0e39\u0e48 service \u0e01\u0e31\u0e1a use case",
  keyPoints: [
    "AI services \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e43\u0e0a\u0e49: Rekognition (\u0e23\u0e39\u0e1b/\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d), Transcribe (\u0e40\u0e2a\u0e35\u0e22\u0e07\u2192\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21), Polly (\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u2192\u0e40\u0e2a\u0e35\u0e22\u0e07)",
    "Translate \u2014 \u0e41\u0e1b\u0e25\u0e20\u0e32\u0e29\u0e32 | Lex+Connect \u2014 chatbot+call center | Comprehend \u2014 NLP",
    "SageMaker \u2014 build/train/deploy ML model \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a developers + data scientists",
    "Forecast, Kendra, Personalize, Textract \u2014 \u0e1e\u0e22\u0e32\u0e01\u0e23\u0e13\u0e4c, document search, recommendation, OCR",
  ],
  sections: [
    {
      id: "overview",
      title: "AWS Machine Learning Overview",
      content: [
        {
          type: "paragraph",
          text: "AWS \u0e43\u0e2b\u0e49\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23 Machine Learning \u0e41\u0e1a\u0e48\u0e07\u0e40\u0e1b\u0e47\u0e19 <strong>3 \u0e23\u0e30\u0e14\u0e31\u0e1a</strong> \u0e15\u0e32\u0e21\u0e04\u0e27\u0e32\u0e21\u0e22\u0e32\u0e01\u0e07\u0e48\u0e32\u0e22\u0e02\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 \u2014 \u0e08\u0e32\u0e01 AI \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e2b\u0e22\u0e34\u0e1a\u0e44\u0e1b\u0e08\u0e19\u0e16\u0e36\u0e07\u0e23\u0e30\u0e14\u0e31\u0e1a infrastructure \u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e40\u0e2d\u0e07\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",
        },
        {
          type: "grid",
          items: [
            {
              title: "1. AI Services (Ready-to-use)",
              description:
                "\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e43\u0e0a\u0e49\u0e1c\u0e48\u0e32\u0e19 API \u2014 \u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07 train model \u0e40\u0e2d\u0e07 \u0e40\u0e0a\u0e48\u0e19 Rekognition, Transcribe, Polly, Translate, Comprehend, Lex",
            },
            {
              title: "2. ML Services (Build yourself)",
              description:
                "\u0e0a\u0e48\u0e27\u0e22 build, train, deploy model \u0e40\u0e2d\u0e07 \u2014 ตัวหลักคือ <strong>Amazon SageMaker</strong> \u0e0b\u0e36\u0e48\u0e07\u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e25\u0e38\u0e21 ML lifecycle \u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",
            },
            {
              title: "3. ML Frameworks & Infrastructure",
              description:
                "\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e25\u0e48\u0e32\u0e07\u0e2a\u0e38\u0e14 \u2014 TensorFlow, PyTorch, MXNet \u0e1a\u0e19 EC2 (GPU/Inferentia/Trainium) \u2014 \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e40\u0e0a\u0e35\u0e48\u0e22\u0e27\u0e0a\u0e32\u0e0d\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e40\u0e15\u0e47\u0e21\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a CCP \u0e40\u0e19\u0e49\u0e19\u0e2d\u0e30\u0e44\u0e23?",
          text: "CCP exam \u0e08\u0e30\u0e16\u0e32\u0e21\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 <strong>AI services</strong> \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e43\u0e0a\u0e49 + <strong>SageMaker</strong> \u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e25\u0e31\u0e01 \u0e44\u0e21\u0e48\u0e25\u0e07\u0e25\u0e36\u0e01\u0e16\u0e36\u0e07 framework \u0e2b\u0e23\u0e37\u0e2d algorithm \u2014 \u0e08\u0e33\u0e44\u0e27\u0e49\u0e27\u0e48\u0e32 service \u0e44\u0e2b\u0e19\u0e17\u0e33\u0e2d\u0e30\u0e44\u0e23 + use case \u0e1b\u0e23\u0e30\u0e08\u0e33",
        },
      ],
    },
    {
      id: "rekognition",
      title: "Amazon Rekognition",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Rekognition</strong> \u0e43\u0e0a\u0e49 ML \u0e43\u0e19\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32 <em>\u0e27\u0e31\u0e15\u0e16\u0e38, \u0e04\u0e19, \u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21, \u0e09\u0e32\u0e01</em> \u0e43\u0e19 <strong>\u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e\u0e41\u0e25\u0e30\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d</strong> \u2014 \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a facial analysis (\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e43\u0e1a\u0e2b\u0e19\u0e49\u0e32) \u0e41\u0e25\u0e30 facial search (\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e43\u0e1a\u0e2b\u0e19\u0e49\u0e32)",
        },
        {
          type: "list",
          items: [
            "<strong>Labeling</strong> \u2014 \u0e15\u0e34\u0e14 label \u0e27\u0e31\u0e15\u0e16\u0e38\u0e43\u0e19\u0e23\u0e39\u0e1b (\u0e2b\u0e21\u0e32, \u0e23\u0e16, \u0e15\u0e49\u0e19\u0e44\u0e21\u0e49 \u0e2f\u0e25\u0e2f)",
            "<strong>Content Moderation</strong> \u2014 \u0e15\u0e23\u0e27\u0e08\u0e08\u0e31\u0e1a\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e44\u0e21\u0e48\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21 (NSFW, \u0e04\u0e27\u0e32\u0e21\u0e23\u0e38\u0e19\u0e41\u0e23\u0e07)",
            "<strong>Text Detection</strong> \u2014 \u0e2d\u0e48\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e08\u0e32\u0e01\u0e23\u0e39\u0e1b (OCR-like)",
            "<strong>Face Detection & Analysis</strong> \u2014 \u0e15\u0e23\u0e27\u0e08\u0e08\u0e31\u0e1a\u0e40\u0e1e\u0e28, \u0e2d\u0e32\u0e22\u0e38, \u0e2d\u0e32\u0e23\u0e21\u0e13\u0e4c (gender / age / emotions)",
            "<strong>Face Search & Verification</strong> \u2014 \u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e15\u0e31\u0e27\u0e15\u0e19 (face matching)",
            "<strong>Celebrity Recognition</strong> \u2014 \u0e23\u0e30\u0e1a\u0e38\u0e04\u0e19\u0e14\u0e31\u0e07",
            "<strong>Pathing</strong> \u2014 \u0e15\u0e34\u0e14\u0e15\u0e32\u0e21\u0e01\u0e32\u0e23\u0e40\u0e04\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e2b\u0e27\u0e02\u0e2d\u0e07\u0e04\u0e19/\u0e27\u0e31\u0e15\u0e16\u0e38 (\u0e43\u0e0a\u0e49\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c sports)",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "\u0e08\u0e33\u0e07\u0e48\u0e32\u0e22\u0e46",
          text: "Rekognition = <strong>recognize</strong> \u0e2a\u0e34\u0e48\u0e07\u0e15\u0e48\u0e32\u0e07\u0e46 \u0e43\u0e19 image + video \u2014 \u0e16\u0e49\u0e32\u0e42\u0e08\u0e17\u0e22\u0e4c\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07 \"\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e23\u0e39\u0e1b/\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\" \u2192 \u0e15\u0e2d\u0e1a Rekognition",
        },
      ],
    },
    {
      id: "transcribe",
      title: "Amazon Transcribe",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Transcribe</strong> \u2014 \u0e41\u0e1b\u0e25\u0e07\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21 (Speech to Text) \u0e14\u0e49\u0e27\u0e22 deep learning <strong>ASR (Automatic Speech Recognition)</strong>",
        },
        {
          type: "list",
          items: [
            "Transcribe customer service calls \u2014 \u0e16\u0e2d\u0e14\u0e40\u0e17\u0e1b\u0e2a\u0e32\u0e22\u0e2a\u0e19\u0e17\u0e19\u0e32 call center \u0e40\u0e1b\u0e47\u0e19 text",
            "\u0e17\u0e33 closed captioning + subtitling \u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34",
            "\u0e2a\u0e23\u0e49\u0e32\u0e07 metadata \u0e08\u0e32\u0e01\u0e44\u0e1f\u0e25\u0e4c\u0e40\u0e2a\u0e35\u0e22\u0e07/\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d \u2192 \u0e04\u0e49\u0e19\u0e2b\u0e32\u0e44\u0e14\u0e49 (searchable media archive)",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "\u0e08\u0e33\u0e07\u0e48\u0e32\u0e22",
          text: "Transcribe = <strong>\u0e16\u0e2d\u0e14\u0e40\u0e17\u0e1b</strong> \u2192 Speech to Text",
        },
      ],
    },
    {
      id: "polly",
      title: "Amazon Polly",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Polly</strong> \u2014 \u0e41\u0e1b\u0e25\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e1e\u0e39\u0e14\u0e17\u0e35\u0e48\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e21\u0e19\u0e38\u0e29\u0e22\u0e4c (Text to Speech) \u0e14\u0e49\u0e27\u0e22 deep learning \u2014 \u0e2a\u0e23\u0e49\u0e32\u0e07\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19 \"\u0e17\u0e35\u0e48\u0e1e\u0e39\u0e14\u0e44\u0e14\u0e49\"",
        },
        {
          type: "list",
          items: [
            "Convert text \u2192 lifelike speech",
            "\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e2b\u0e25\u0e32\u0e22\u0e20\u0e32\u0e29\u0e32, \u0e2b\u0e25\u0e32\u0e22\u0e40\u0e2a\u0e35\u0e22\u0e07 (voice)",
            "Use case: voice assistant, e-learning, accessibility (\u0e2d\u0e48\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e43\u0e2b\u0e49\u0e1c\u0e39\u0e49\u0e1e\u0e34\u0e01\u0e32\u0e23)",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "\u0e08\u0e33\u0e07\u0e48\u0e32\u0e22",
          text: "Polly \u2192 Parrot \u0e19\u0e01\u0e41\u0e01\u0e49\u0e27\u0e1e\u0e39\u0e14 = <strong>Text to Speech</strong> (\u0e15\u0e23\u0e07\u0e02\u0e49\u0e32\u0e21\u0e01\u0e31\u0e1a Transcribe)",
        },
      ],
    },
    {
      id: "translate",
      title: "Amazon Translate",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Translate</strong> \u2014 \u0e41\u0e1b\u0e25\u0e20\u0e32\u0e29\u0e32\u0e41\u0e1a\u0e1a\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07\u0e41\u0e25\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e18\u0e23\u0e23\u0e21\u0e0a\u0e32\u0e15\u0e34 (natural + accurate) \u0e14\u0e49\u0e27\u0e22 ML",
        },
        {
          type: "list",
          items: [
            "Localize \u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c/\u0e41\u0e2d\u0e1b\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a user \u0e15\u0e48\u0e32\u0e07\u0e0a\u0e32\u0e15\u0e34",
            "\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e2b\u0e25\u0e32\u0e22\u0e20\u0e32\u0e29\u0e32 \u2014 \u0e44\u0e17\u0e22, \u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29, \u0e0d\u0e35\u0e48\u0e1b\u0e38\u0e48\u0e19, \u0e08\u0e35\u0e19 \u0e2f\u0e25\u0e2f",
            "\u0e23\u0e27\u0e21\u0e01\u0e31\u0e1a Polly \u2192 \u0e2a\u0e23\u0e49\u0e32\u0e07 multi-language voice app \u0e44\u0e14\u0e49",
          ],
        },
      ],
    },
    {
      id: "lex-connect",
      title: "Amazon Lex & Connect",
      content: [
        {
          type: "paragraph",
          text: "Amazon Lex \u0e41\u0e25\u0e30 Connect \u0e21\u0e31\u0e01\u0e08\u0e30\u0e44\u0e1b\u0e14\u0e49\u0e27\u0e22\u0e01\u0e31\u0e19 \u2014 \u0e15\u0e31\u0e27\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07 bot, \u0e2d\u0e35\u0e01\u0e15\u0e31\u0e27\u0e23\u0e31\u0e1a/\u0e42\u0e17\u0e23\u0e2d\u0e2d\u0e01:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Amazon Lex",
              description:
                "\u0e40\u0e17\u0e04\u0e42\u0e19\u0e42\u0e25\u0e22\u0e35\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e17\u0e35\u0e48\u0e02\u0e31\u0e1a\u0e40\u0e04\u0e25\u0e37\u0e48\u0e2d\u0e19 <strong>Alexa</strong> \u2014 \u0e23\u0e27\u0e21 ASR (\u0e40\u0e2a\u0e35\u0e22\u0e07\u2192\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21) + NLU (\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08 intent \u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49) \u2014 \u0e2a\u0e23\u0e49\u0e32\u0e07 chatbot, call center bot",
            },
            {
              title: "Amazon Connect",
              description:
                "<strong>Cloud-based virtual contact center</strong> \u2014 \u0e23\u0e31\u0e1a\u0e2a\u0e32\u0e22, \u0e15\u0e31\u0e49\u0e07 contact flow, \u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e15\u0e48\u0e2d CRM \u2014 \u0e16\u0e39\u0e01\u0e01\u0e27\u0e48\u0e32 traditional contact center <strong>80%</strong>, \u0e44\u0e21\u0e48\u0e21\u0e35\u0e04\u0e48\u0e32 upfront",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "\u0e08\u0e33\u0e08\u0e31\u0e1a\u0e04\u0e39\u0e48",
          text: "Lex = <strong>bot brain</strong> (NLU/intent) \u2014 Connect = <strong>contact center</strong> (\u0e23\u0e30\u0e1a\u0e1a\u0e23\u0e31\u0e1a\u0e2a\u0e32\u0e22) \u2014 \u0e21\u0e31\u0e01\u0e43\u0e0a\u0e49\u0e23\u0e48\u0e27\u0e21\u0e01\u0e31\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07 IVR / virtual agent",
        },
      ],
    },
    {
      id: "comprehend",
      title: "Amazon Comprehend",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Comprehend</strong> \u2014 \u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23 <strong>Natural Language Processing (NLP)</strong> \u2014 fully managed + serverless \u2014 \u0e43\u0e0a\u0e49 ML \u0e2b\u0e32 insight \u0e08\u0e32\u0e01\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21",
        },
        {
          type: "list",
          items: [
            "<strong>Language detection</strong> \u2014 \u0e23\u0e30\u0e1a\u0e38\u0e20\u0e32\u0e29\u0e32\u0e02\u0e2d\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21",
            "\u0e2a\u0e01\u0e31\u0e14\u0e2a\u0e34\u0e48\u0e07\u0e2a\u0e33\u0e04\u0e31\u0e0d (key phrases), \u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48 (places), \u0e1a\u0e38\u0e04\u0e04\u0e25 (people), \u0e41\u0e1a\u0e23\u0e19\u0e14\u0e4c (brands), \u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c (events)",
            "<strong>Sentiment analysis</strong> \u2014 \u0e1a\u0e27\u0e01/\u0e25\u0e1a (positive / negative / neutral / mixed)",
            "Tokenization + parts of speech",
            "Auto-organize text by topic (topic modeling)",
          ],
        },
        {
          type: "grid",
          items: [
            {
              title: "Use case 1",
              description:
                "\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c email \u0e25\u0e39\u0e01\u0e04\u0e49\u0e32 \u2014 \u0e1a\u0e2d\u0e01\u0e44\u0e14\u0e49\u0e27\u0e48\u0e32\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32\u0e1e\u0e2d\u0e43\u0e08\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48",
            },
            {
              title: "Use case 2",
              description:
                "\u0e08\u0e31\u0e14\u0e01\u0e25\u0e38\u0e48\u0e21\u0e1a\u0e17\u0e04\u0e27\u0e32\u0e21\u0e15\u0e32\u0e21\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d (group articles by topic) \u2014 \u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e15\u0e34\u0e14 tag \u0e40\u0e2d\u0e07",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "\u0e08\u0e33\u0e07\u0e48\u0e32\u0e22",
          text: "Comprehend = <strong>\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21</strong> (NLP) \u2014 \u0e16\u0e49\u0e32\u0e42\u0e08\u0e17\u0e22\u0e4c\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07 sentiment, key phrase, entity extraction \u2192 Comprehend",
        },
      ],
    },
    {
      id: "sagemaker",
      title: "Amazon SageMaker",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon SageMaker</strong> \u2014 fully managed service \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a developers + data scientists \u0e2a\u0e23\u0e49\u0e32\u0e07 ML model \u0e40\u0e2d\u0e07 \u2014 \u0e1b\u0e01\u0e15\u0e34 ML lifecycle \u0e22\u0e32\u0e01\u0e41\u0e25\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 server \u0e40\u0e2d\u0e07 \u2014 SageMaker \u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e49\u0e2b\u0e21\u0e14",
        },
        {
          type: "list",
          items: [
            "<strong>Data preparation</strong> \u2014 label, clean, transform data",
            "<strong>Training</strong> \u2014 train model \u0e1a\u0e19 instance \u0e02\u0e19\u0e32\u0e14\u0e15\u0e48\u0e32\u0e07\u0e46 (CPU/GPU)",
            "<strong>Tuning</strong> \u2014 hyperparameter tuning \u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34",
            "<strong>Deployment</strong> \u2014 deploy \u0e40\u0e1b\u0e47\u0e19 endpoint \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a inference \u0e44\u0e14\u0e49\u0e17\u0e31\u0e19\u0e17\u0e35",
            "\u0e23\u0e27\u0e21\u0e17\u0e38\u0e01\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e02\u0e2d\u0e07 ML \u0e44\u0e27\u0e49\u0e43\u0e19\u0e17\u0e35\u0e48\u0e40\u0e14\u0e35\u0e22\u0e27 (build \u2192 train \u2192 deploy)",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e43\u0e04\u0e23?",
          text: "SageMaker \u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e21\u0e32\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b \u2014 \u0e41\u0e15\u0e48\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a <strong>developers \u0e41\u0e25\u0e30 data scientists</strong> \u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07 ML model \u0e40\u0e2d\u0e07 \u2014 \u0e16\u0e49\u0e32\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e23\u0e39\u0e49 ML \u0e43\u0e0a\u0e49 AI services \u0e08\u0e30\u0e07\u0e48\u0e32\u0e22\u0e01\u0e27\u0e48\u0e32",
        },
      ],
    },
    {
      id: "forecast",
      title: "Amazon Forecast",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Forecast</strong> \u2014 fully managed ML \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1e\u0e22\u0e32\u0e01\u0e23\u0e13\u0e4c (forecasting) \u0e17\u0e35\u0e48\u0e41\u0e21\u0e48\u0e19\u0e22\u0e33\u0e2a\u0e39\u0e07",
        },
        {
          type: "list",
          items: [
            "\u0e41\u0e21\u0e48\u0e19\u0e22\u0e33\u0e01\u0e27\u0e48\u0e32\u0e01\u0e32\u0e23\u0e14\u0e39\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e15\u0e23\u0e07\u0e46 \u0e16\u0e36\u0e07 <strong>50%</strong>",
            "\u0e25\u0e14\u0e40\u0e27\u0e25\u0e32\u0e1e\u0e22\u0e32\u0e01\u0e23\u0e13\u0e4c\u0e08\u0e32\u0e01 <strong>\u0e2b\u0e25\u0e32\u0e22\u0e40\u0e14\u0e37\u0e2d\u0e19 \u2192 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07</strong>",
            "Use cases: \u0e27\u0e32\u0e07\u0e41\u0e1c\u0e19 demand \u0e02\u0e2d\u0e07\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32 (product demand planning), \u0e27\u0e32\u0e07\u0e41\u0e1c\u0e19\u0e01\u0e32\u0e23\u0e40\u0e07\u0e34\u0e19 (financial planning), \u0e27\u0e32\u0e07\u0e41\u0e1c\u0e19\u0e17\u0e23\u0e31\u0e1e\u0e22\u0e32\u0e01\u0e23 (resource planning)",
          ],
        },
      ],
    },
    {
      id: "kendra",
      title: "Amazon Kendra",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Kendra</strong> \u2014 fully managed <strong>document search</strong> \u0e02\u0e31\u0e1a\u0e40\u0e04\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e14\u0e49\u0e27\u0e22 ML \u2014 \u0e14\u0e36\u0e07\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e08\u0e32\u0e01\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23\u0e44\u0e14\u0e49",
        },
        {
          type: "list",
          items: [
            "\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e44\u0e1f\u0e25\u0e4c\u0e2b\u0e25\u0e32\u0e01\u0e2b\u0e25\u0e32\u0e22 \u2014 text, PDF, HTML, PowerPoint, Word, FAQs",
            "<strong>Natural language search</strong> \u2014 \u0e16\u0e32\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e04\u0e44\u0e14\u0e49 (\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e41\u0e04\u0e48\u0e04\u0e35\u0e22\u0e4c\u0e40\u0e27\u0e34\u0e23\u0e4c\u0e14)",
            "<strong>Incremental learning</strong> \u2014 \u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49\u0e08\u0e32\u0e01 feedback \u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49 \u2192 \u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e14\u0e35\u0e02\u0e36\u0e49\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e22\u0e46",
          ],
        },
      ],
    },
    {
      id: "personalize",
      title: "Amazon Personalize",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Personalize</strong> \u2014 \u0e23\u0e30\u0e1a\u0e1a recommendation \u0e41\u0e1a\u0e1a real-time \u2014 \u0e40\u0e17\u0e04\u0e42\u0e19\u0e42\u0e25\u0e22\u0e35\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19\u0e01\u0e31\u0e1a Amazon.com",
        },
        {
          type: "list",
          items: [
            "Integrate \u0e01\u0e31\u0e1a website, app, SMS, email marketing",
            "Use cases: retail (\u0e41\u0e19\u0e30\u0e19\u0e33\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32), media + entertainment (\u0e41\u0e19\u0e30\u0e19\u0e33\u0e2b\u0e19\u0e31\u0e07/\u0e40\u0e1e\u0e25\u0e07), custom direct marketing",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "\u0e08\u0e33\u0e07\u0e48\u0e32\u0e22",
          text: "Personalize = <strong>recommendation engine</strong> \u0e41\u0e1a\u0e1a Amazon.com \u2014 \u0e16\u0e49\u0e32\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a\u0e1e\u0e39\u0e14\u0e16\u0e36\u0e07 \"\u0e41\u0e19\u0e30\u0e19\u0e33\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e2b\u0e23\u0e37\u0e2d\u0e2b\u0e19\u0e31\u0e07/\u0e40\u0e1e\u0e25\u0e07\" \u2192 Personalize",
        },
      ],
    },
    {
      id: "textract",
      title: "Amazon Textract",
      content: [
        {
          type: "paragraph",
          text: "<strong>Amazon Textract</strong> \u2014 \u0e2d\u0e48\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21, \u0e25\u0e32\u0e22\u0e21\u0e37\u0e2d, \u0e41\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e08\u0e32\u0e01\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23 scan \u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34\u0e14\u0e49\u0e27\u0e22 ML (OCR + form/table extraction)",
        },
        {
          type: "list",
          items: [
            "Use cases: financial services (\u0e43\u0e1a\u0e41\u0e08\u0e49\u0e07\u0e2b\u0e19\u0e35\u0e49, statement)",
            "Healthcare (\u0e40\u0e27\u0e0a\u0e23\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19, \u0e41\u0e1a\u0e1a\u0e1f\u0e2d\u0e23\u0e4c\u0e21\u0e1c\u0e39\u0e49\u0e1b\u0e48\u0e27\u0e22)",
            "Public sector (\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23\u0e23\u0e32\u0e0a\u0e01\u0e32\u0e23)",
            "<strong>KYC</strong> (Know Your Customer) \u2014 \u0e2d\u0e48\u0e32\u0e19\u0e1a\u0e31\u0e15\u0e23\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19/passport",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Textract vs Rekognition Text Detection",
          text: "Rekognition \u0e2d\u0e48\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e43\u0e19\u0e23\u0e39\u0e1b\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b \u2014 <strong>Textract</strong> \u0e40\u0e09\u0e1e\u0e32\u0e30\u0e17\u0e32\u0e07 document (\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23 scan + form + table) \u2014 \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a structured data \u0e44\u0e14\u0e49\u0e14\u0e35\u0e01\u0e27\u0e48\u0e32",
        },
      ],
    },
    {
      id: "comparison",
      title: "Comparison Table",
      content: [
        {
          type: "paragraph",
          text: "\u0e2a\u0e23\u0e38\u0e1b service \u0e41\u0e15\u0e48\u0e25\u0e30\u0e15\u0e31\u0e27\u0e01\u0e31\u0e1a use case \u0e2b\u0e25\u0e31\u0e01 \u2014 \u0e08\u0e33\u0e44\u0e27\u0e49\u0e15\u0e2d\u0e1a\u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a:",
        },
        {
          type: "grid",
          items: [
            {
              title: "Rekognition",
              description: "\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e23\u0e39\u0e1b/\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d \u2014 face, object, text, celebrity",
            },
            {
              title: "Transcribe",
              description: "\u0e40\u0e2a\u0e35\u0e22\u0e07 \u2192 \u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21 (Speech to Text, ASR)",
            },
            {
              title: "Polly",
              description: "\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21 \u2192 \u0e40\u0e2a\u0e35\u0e22\u0e07 (Text to Speech)",
            },
            {
              title: "Translate",
              description: "\u0e41\u0e1b\u0e25\u0e20\u0e32\u0e29\u0e32 (machine translation)",
            },
            {
              title: "Lex",
              description: "Chatbot brain (Alexa tech \u2014 ASR + NLU)",
            },
            {
              title: "Connect",
              description: "Cloud contact center (\u0e23\u0e30\u0e1a\u0e1a\u0e23\u0e31\u0e1a\u0e2a\u0e32\u0e22 call center)",
            },
            {
              title: "Comprehend",
              description: "NLP \u2014 sentiment, key phrase, entity, language detection",
            },
            {
              title: "SageMaker",
              description: "Build/train/deploy ML model \u0e40\u0e2d\u0e07 (developer + data scientist)",
            },
            {
              title: "Forecast",
              description: "\u0e1e\u0e22\u0e32\u0e01\u0e23\u0e13\u0e4c time-series (demand, financial, resource)",
            },
            {
              title: "Kendra",
              description: "Document search \u2014 \u0e16\u0e32\u0e21\u0e20\u0e32\u0e29\u0e32\u0e18\u0e23\u0e23\u0e21\u0e0a\u0e32\u0e15\u0e34 \u0e1a\u0e19\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23",
            },
            {
              title: "Personalize",
              description: "Recommendation real-time (Amazon.com tech)",
            },
            {
              title: "Textract",
              description: "OCR + extract form/table \u0e08\u0e32\u0e01\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23 scan",
            },
          ],
        },
      ],
    },
    {
      id: "summary",
      title: "AWS ML Summary",
      content: [
        {
          type: "list",
          items: [
            "<strong>3 \u0e23\u0e30\u0e14\u0e31\u0e1a:</strong> AI services (\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e43\u0e0a\u0e49) \u2192 ML services (SageMaker) \u2192 Frameworks/Infra",
            "<strong>Image/Video:</strong> Rekognition (\u0e27\u0e31\u0e15\u0e16\u0e38, \u0e2b\u0e19\u0e49\u0e32, \u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e43\u0e19\u0e23\u0e39\u0e1b)",
            "<strong>\u0e40\u0e2a\u0e35\u0e22\u0e07:</strong> Transcribe (speech\u2192text) \u0e15\u0e23\u0e07\u0e02\u0e49\u0e32\u0e21 Polly (text\u2192speech)",
            "<strong>\u0e20\u0e32\u0e29\u0e32:</strong> Translate (\u0e41\u0e1b\u0e25), Comprehend (\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08 NLP)",
            "<strong>Bot:</strong> Lex (\u0e2a\u0e21\u0e2d\u0e07 chatbot, Alexa tech) + Connect (call center)",
            "<strong>SageMaker:</strong> dev/data scientist build ML \u0e40\u0e2d\u0e07\u0e08\u0e1a\u0e27\u0e07\u0e08\u0e23",
            "<strong>Forecast:</strong> \u0e1e\u0e22\u0e32\u0e01\u0e23\u0e13\u0e4c time-series",
            "<strong>Kendra:</strong> document search ML",
            "<strong>Personalize:</strong> recommendation engine",
            "<strong>Textract:</strong> OCR + form/table extraction",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "\u0e40\u0e04\u0e25\u0e47\u0e14\u0e25\u0e31\u0e1a\u0e2a\u0e2d\u0e1a",
          text: "\u0e08\u0e33\u0e0a\u0e37\u0e48\u0e2d service \u0e41\u0e25\u0e30 use case \u0e2b\u0e25\u0e31\u0e01\u0e02\u0e2d\u0e07\u0e41\u0e15\u0e48\u0e25\u0e30\u0e15\u0e31\u0e27\u0e43\u0e2b\u0e49\u0e44\u0e14\u0e49 \u2014 \u0e02\u0e49\u0e2d\u0e2a\u0e2d\u0e1a CCP \u0e21\u0e31\u0e01\u0e16\u0e32\u0e21\u0e41\u0e1a\u0e1a scenario \u0e27\u0e48\u0e32 \"\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23 X \u2014 \u0e04\u0e27\u0e23\u0e43\u0e0a\u0e49 service \u0e44\u0e2b\u0e19?\"",
        },
      ],
    },
  ],
  quiz: [
    {
      id: "ml-q1",
      question:
        "\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e\u0e41\u0e25\u0e30\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e15\u0e23\u0e27\u0e08\u0e08\u0e31\u0e1a\u0e27\u0e31\u0e15\u0e16\u0e38, \u0e43\u0e1a\u0e2b\u0e19\u0e49\u0e32, \u0e41\u0e25\u0e30\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e43\u0e19\u0e20\u0e32\u0e1e \u0e23\u0e27\u0e21\u0e16\u0e36\u0e07 content moderation \u2014 \u0e04\u0e27\u0e23\u0e43\u0e0a\u0e49 AWS service \u0e43\u0e14?",
      options: [
        "Amazon Comprehend",
        "Amazon Textract",
        "Amazon Rekognition",
        "Amazon SageMaker",
      ],
      correct: 2,
      explanation:
        "Amazon Rekognition \u0e43\u0e0a\u0e49 ML \u0e43\u0e19\u0e01\u0e32\u0e23\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e27\u0e31\u0e15\u0e16\u0e38, \u0e04\u0e19, \u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21, \u0e09\u0e32\u0e01 \u0e43\u0e19 image + video \u2014 \u0e23\u0e27\u0e21\u0e16\u0e36\u0e07 face detection, content moderation, celebrity recognition Comprehend = NLP (\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21) Textract = OCR \u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23 scan SageMaker = build ML model \u0e40\u0e2d\u0e07",
    },
    {
      id: "ml-q2",
      question:
        "\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e41\u0e1b\u0e25\u0e07\u0e44\u0e1f\u0e25\u0e4c\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01 customer service call \u0e43\u0e2b\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e15\u0e48\u0e2d \u2014 \u0e04\u0e27\u0e23\u0e43\u0e0a\u0e49 service \u0e43\u0e14?",
      options: [
        "Amazon Polly",
        "Amazon Transcribe",
        "Amazon Translate",
        "Amazon Lex",
      ],
      correct: 1,
      explanation:
        "Amazon Transcribe = Speech to Text (\u0e40\u0e2a\u0e35\u0e22\u0e07 \u2192 \u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21) \u0e14\u0e49\u0e27\u0e22 ASR \u2014 \u0e40\u0e2b\u0e21\u0e32\u0e30\u0e01\u0e31\u0e1a\u0e16\u0e2d\u0e14\u0e40\u0e17\u0e1b customer service Polly \u0e15\u0e23\u0e07\u0e02\u0e49\u0e32\u0e21 \u2014 Text to Speech (\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21 \u2192 \u0e40\u0e2a\u0e35\u0e22\u0e07) Translate = \u0e41\u0e1b\u0e25\u0e20\u0e32\u0e29\u0e32 Lex = \u0e2a\u0e23\u0e49\u0e32\u0e07 chatbot \u2014 \u0e08\u0e33\u0e07\u0e48\u0e32\u0e22\u0e46: Transcribe = \u0e16\u0e2d\u0e14\u0e40\u0e17\u0e1b",
    },
    {
      id: "ml-q3",
      question:
        "\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07 chatbot \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32 \u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49\u0e40\u0e17\u0e04\u0e42\u0e19\u0e42\u0e25\u0e22\u0e35\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e17\u0e35\u0e48\u0e02\u0e31\u0e1a\u0e40\u0e04\u0e25\u0e37\u0e48\u0e2d\u0e19 Alexa (ASR + NLU) \u2014 \u0e04\u0e27\u0e23\u0e43\u0e0a\u0e49 service \u0e43\u0e14?",
      options: [
        "Amazon Polly",
        "Amazon Comprehend",
        "Amazon Lex",
        "Amazon Personalize",
      ],
      correct: 2,
      explanation:
        "Amazon Lex \u0e43\u0e0a\u0e49\u0e40\u0e17\u0e04\u0e42\u0e19\u0e42\u0e25\u0e22\u0e35\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e1a Alexa \u2014 \u0e23\u0e27\u0e21 ASR (\u0e40\u0e2a\u0e35\u0e22\u0e07\u2192\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21) + NLU (\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08 intent) \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2a\u0e23\u0e49\u0e32\u0e07 chatbot, call center bot \u0e21\u0e31\u0e01\u0e08\u0e30\u0e43\u0e0a\u0e49\u0e23\u0e48\u0e27\u0e21\u0e01\u0e31\u0e1a Amazon Connect \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a contact center Polly = TTS, Comprehend = NLP analysis, Personalize = recommendation",
    },
    {
      id: "ml-q4",
      question:
        "\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c email \u0e02\u0e2d\u0e07\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2b\u0e32 sentiment, key phrases \u0e41\u0e25\u0e30 entity (\u0e1a\u0e38\u0e04\u0e04\u0e25/\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48/\u0e41\u0e1a\u0e23\u0e19\u0e14\u0e4c) \u2014 \u0e04\u0e27\u0e23\u0e43\u0e0a\u0e49 service \u0e43\u0e14?",
      options: [
        "Amazon Comprehend",
        "Amazon Translate",
        "Amazon Kendra",
        "Amazon Forecast",
      ],
      correct: 0,
      explanation:
        "Amazon Comprehend \u0e04\u0e37\u0e2d NLP service \u2014 \u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a sentiment analysis (\u0e1a\u0e27\u0e01/\u0e25\u0e1a), key phrase extraction, entity recognition (people/places/brands), language detection, topic modeling \u2014 \u0e40\u0e2b\u0e21\u0e32\u0e30\u0e01\u0e31\u0e1a\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c email/\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32 Translate = \u0e41\u0e1b\u0e25\u0e20\u0e32\u0e29\u0e32 Kendra = document search Forecast = \u0e1e\u0e22\u0e32\u0e01\u0e23\u0e13\u0e4c time-series",
    },
    {
      id: "ml-q5",
      question:
        "\u0e02\u0e49\u0e2d\u0e43\u0e14\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22 Amazon SageMaker \u0e44\u0e14\u0e49\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14?",
      options: [
        "AI service \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e43\u0e0a\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07 train model \u0e40\u0e2d\u0e07",
        "Fully managed service \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a developers + data scientists \u0e2a\u0e23\u0e49\u0e32\u0e07/train/deploy ML model \u0e40\u0e2d\u0e07 \u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e25\u0e38\u0e21 ML lifecycle",
        "Database service \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e01\u0e47\u0e1a training data \u0e02\u0e2d\u0e07 ML",
        "Storage service \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a image/video dataset",
      ],
      correct: 1,
      explanation:
        "SageMaker \u0e40\u0e1b\u0e47\u0e19 fully managed ML service \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a <strong>developers + data scientists</strong> \u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07 ML model \u0e40\u0e2d\u0e07 \u2014 \u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e25\u0e38\u0e21 data prep \u2192 training \u2192 tuning \u2192 deployment \u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e40\u0e1b\u0e47\u0e19 AI service \u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e43\u0e0a\u0e49\u0e41\u0e1a\u0e1a Rekognition/Polly \u2014 \u0e16\u0e49\u0e32\u0e44\u0e21\u0e48\u0e23\u0e39\u0e49 ML \u0e04\u0e27\u0e23\u0e43\u0e0a\u0e49 AI services \u0e08\u0e30\u0e07\u0e48\u0e32\u0e22\u0e01\u0e27\u0e48\u0e32 SageMaker \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48 database \u0e2b\u0e23\u0e37\u0e2d storage",
    },
  ],
};
