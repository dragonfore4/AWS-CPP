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
        "A company wants to analyze images and videos to detect objects, faces, text, and perform content moderation. Which AWS service is BEST?",
      options: [
        "Amazon Rekognition",
        "Amazon Textract",
        "Amazon Comprehend",
        "Amazon Polly",
      ],
      correct: 0,
      explanation:
        "Amazon Rekognition is a managed image and video analysis service using deep learning — face detection, object detection, content moderation, celebrity recognition, text-in-image detection.",
    },
    {
      id: "ml-q2",
      question:
        "Which AWS service converts text to lifelike speech (text-to-speech)?",
      options: [
        "Amazon Polly",
        "Amazon Transcribe",
        "Amazon Translate",
        "Amazon Lex",
      ],
      correct: 0,
      explanation:
        "Amazon Polly is a text-to-speech service. Provides natural-sounding voices in many languages — used for IVR, narrating content, accessibility.",
    },
    {
      id: "ml-q3",
      question:
        "Which AWS service converts speech (audio) to text (speech-to-text)?",
      options: [
        "Amazon Transcribe",
        "Amazon Polly",
        "Amazon Comprehend",
        "Amazon Translate",
      ],
      correct: 0,
      explanation:
        "Amazon Transcribe is the AWS automatic speech recognition (ASR) service. Converts audio to text — supports streaming, custom vocabularies, speaker diarization, automatic language detection.",
    },
    {
      id: "ml-q4",
      question:
        "Which AWS service translates text between languages?",
      options: [
        "Amazon Translate",
        "Amazon Comprehend",
        "Amazon Polly",
        "Amazon Transcribe",
      ],
      correct: 0,
      explanation:
        "Amazon Translate provides neural machine translation between many languages. Real-time and batch translation; custom terminology.",
    },
    {
      id: "ml-q5",
      question:
        "Which AWS service uses NLP to extract insights (sentiment, entities, key phrases) from text?",
      options: [
        "Amazon Comprehend",
        "Amazon Translate",
        "Amazon Polly",
        "Amazon Lex",
      ],
      correct: 0,
      explanation:
        "Amazon Comprehend is a natural language processing (NLP) service. Detects entities, key phrases, sentiment, topics, syntax, and PII in text. Comprehend Medical for medical text.",
    },
    {
      id: "ml-q6",
      question:
        "Which AWS service is BEST for building, training, and deploying ML models at scale?",
      options: [
        "Amazon SageMaker",
        "Amazon Comprehend",
        "Amazon Rekognition",
        "AWS Glue",
      ],
      correct: 0,
      explanation:
        "Amazon SageMaker is a fully managed ML platform — covers the entire ML lifecycle: data labeling, notebooks, training, hyperparameter tuning, model deployment, monitoring.",
    },
    {
      id: "ml-q7",
      question:
        "Which AWS service is a chatbot service for building conversational interfaces (text and voice)?",
      options: [
        "Amazon Lex",
        "Amazon Polly",
        "Amazon Connect",
        "Amazon Comprehend",
      ],
      correct: 0,
      explanation:
        "Amazon Lex is the service powering Alexa — builds chatbots with automatic speech recognition (ASR) and natural language understanding (NLU). Integrates with Connect for IVR.",
    },
    {
      id: "ml-q8",
      question:
        "Which AWS service is a managed cloud-based contact center?",
      options: [
        "Amazon Connect",
        "Amazon Lex",
        "Amazon Polly",
        "Amazon Comprehend",
      ],
      correct: 0,
      explanation:
        "Amazon Connect is a fully managed cloud contact center — replaces traditional call centers. Integrates with Lex for chatbots, Polly for TTS, and many other AWS services.",
    },
    {
      id: "ml-q9",
      question:
        "Which AWS service uses ML to extract text, handwriting, forms, and tables from scanned documents?",
      options: [
        "Amazon Textract",
        "Amazon Rekognition",
        "Amazon Comprehend",
        "Amazon Transcribe",
      ],
      correct: 0,
      explanation:
        "Amazon Textract uses ML to automatically extract printed text, handwriting, forms, and tables from scanned documents — far beyond basic OCR.",
    },
    {
      id: "ml-q10",
      question:
        "Which AWS service is a personalization engine for recommendation systems?",
      options: [
        "Amazon Personalize",
        "Amazon Forecast",
        "Amazon Comprehend",
        "Amazon Rekognition",
      ],
      correct: 0,
      explanation:
        "Amazon Personalize provides real-time personalized recommendations (similar to those used at Amazon.com) — same ML technology as Amazon's own recommendation engine.",
    },
    {
      id: "ml-q11",
      question:
        "Which AWS service provides time-series forecasting (e.g., demand forecasting, stock predictions)?",
      options: [
        "Amazon Forecast",
        "Amazon Personalize",
        "Amazon SageMaker only",
        "Amazon Comprehend",
      ],
      correct: 0,
      explanation:
        "Amazon Forecast is a managed time-series forecasting service — uses the same technology Amazon uses for retail demand forecasting. (Note: Amazon Forecast is being deprecated; for new workloads, use SageMaker Canvas.)",
    },
    {
      id: "ml-q12",
      question:
        "Which AWS service is a generative AI service that lets you build apps using foundation models (Anthropic Claude, Amazon Titan, Meta Llama, etc.) via a single API?",
      options: [
        "Amazon Bedrock",
        "Amazon SageMaker",
        "Amazon Comprehend",
        "Amazon Q",
      ],
      correct: 0,
      explanation:
        "Amazon Bedrock provides serverless access to multiple foundation models from leading AI companies (Anthropic, AI21, Cohere, Meta, Stability AI, Amazon) through a single API for generative AI apps.",
    },
    {
      id: "ml-q13",
      question:
        "Which AWS service is a generative AI assistant for business / developer / contact center use cases?",
      options: [
        "Amazon Q",
        "Amazon Bedrock",
        "Amazon SageMaker",
        "Amazon Lex",
      ],
      correct: 0,
      explanation:
        "Amazon Q is AWS's generative AI assistant — Amazon Q Developer (formerly CodeWhisperer) for code, Amazon Q Business (knowledge worker assistant connecting to enterprise data), and Amazon Q in QuickSight for BI.",
    },
    {
      id: "ml-q14",
      question:
        "Which AWS ML service is BEST for fraud detection?",
      options: [
        "Amazon Fraud Detector",
        "Amazon GuardDuty",
        "Amazon Comprehend",
        "AWS Shield",
      ],
      correct: 0,
      explanation:
        "Amazon Fraud Detector is a managed service that uses ML to detect online fraud — fake accounts, payment fraud, identity fraud — based on Amazon's 20+ years of fraud-detection experience.",
    },
    {
      id: "ml-q15",
      question:
        "Which AWS service is BEST for detecting anomalies in business metrics using ML?",
      options: [
        "Amazon Lookout for Metrics",
        "Amazon Forecast",
        "Amazon Personalize",
        "Amazon Macie",
      ],
      correct: 0,
      explanation:
        "Amazon Lookout for Metrics automatically detects anomalies in business metrics (revenue, conversions, traffic) and helps identify root causes. Lookout for Equipment / Vision are similar for industrial.",
    },
    {
      id: "ml-q16",
      question:
        "Which AWS service provides a healthcare-specific NLP for unstructured medical text?",
      options: [
        "Amazon Comprehend Medical",
        "Amazon HealthLake",
        "Amazon Transcribe Medical",
        "All of the above are healthcare-specific",
      ],
      correct: 3,
      explanation:
        "AWS has multiple healthcare/medical AI services: Comprehend Medical (NLP for medical text), Transcribe Medical (medical speech-to-text), HealthLake (clinical data store), and HealthOmics (genomics).",
    },
    {
      id: "ml-q17",
      question:
        "Which AWS feature provides no-code visual ML model building for business analysts?",
      options: [
        "Amazon SageMaker Canvas",
        "Amazon SageMaker Studio",
        "Amazon SageMaker JumpStart",
        "Amazon SageMaker Autopilot",
      ],
      correct: 0,
      explanation:
        "Amazon SageMaker Canvas provides a visual, no-code interface for building ML models — designed for business analysts without coding experience. Connects to many data sources.",
    },
    {
      id: "ml-q18",
      question:
        "Which AWS feature in SageMaker automatically builds, trains, and tunes the best ML model?",
      options: [
        "Amazon SageMaker Autopilot",
        "Amazon SageMaker Studio",
        "Amazon SageMaker Notebooks",
        "Amazon SageMaker Pipelines",
      ],
      correct: 0,
      explanation:
        "SageMaker Autopilot is automated ML (AutoML) — automatically explores and tunes models, lets you see the steps it took (transparent AutoML).",
    },
    {
      id: "ml-q19",
      question:
        "Which AWS service is the unified ML IDE for data scientists?",
      options: [
        "Amazon SageMaker Studio",
        "AWS Cloud9",
        "Amazon Athena",
        "AWS Glue Studio",
      ],
      correct: 0,
      explanation:
        "Amazon SageMaker Studio is a web-based ML IDE — provides notebooks, debugging, model training, deployment, and monitoring in a single interface.",
    },
    {
      id: "ml-q20",
      question:
        "Which AWS service uses ML to extract insights from your call center conversations (sentiment, key issues)?",
      options: [
        "Amazon Connect Contact Lens",
        "Amazon Comprehend",
        "Amazon Transcribe alone",
        "Amazon Lex",
      ],
      correct: 0,
      explanation:
        "Contact Lens for Amazon Connect uses ML to analyze call center conversations — sentiment, talk speed, interruptions, themes — helping improve customer experience and agent performance.",
    },
    {
      id: "ml-q21",
      question:
        "Which is true about Amazon Bedrock?",
      options: [
        "It only supports a single AI model.",
        "It is serverless, supports multiple foundation models, and includes guardrails for safe generative AI.",
        "It requires customers to manage GPU instances.",
        "It only works with Amazon-built models.",
      ],
      correct: 1,
      explanation:
        "Amazon Bedrock is serverless, offers multiple foundation models (Anthropic, AI21, Cohere, Meta, Stability AI, Amazon Titan), supports knowledge bases, agents, and guardrails for responsible AI.",
    },
    {
      id: "ml-q22",
      question:
        "Which AWS GPU/accelerated EC2 family is BEST for ML training?",
      options: [
        "P (P3, P4, P5) and Trn1 (Trainium)",
        "T2",
        "M5",
        "C5",
      ],
      correct: 0,
      explanation:
        "P-family (P3 with V100, P4 with A100, P5 with H100) and Trainium (Trn1) instances are optimized for ML training. For inference: G-family and Inferentia (Inf1, Inf2).",
    },
    {
      id: "ml-q23",
      question:
        "Which AWS service is BEST for industrial computer vision (e.g., defect detection on assembly lines)?",
      options: [
        "Amazon Lookout for Vision",
        "Amazon Rekognition",
        "Amazon Comprehend",
        "Amazon Polly",
      ],
      correct: 0,
      explanation:
        "Amazon Lookout for Vision is purpose-built for industrial computer vision — automated defect detection in manufacturing, with minimal training images needed.",
    },
    {
      id: "ml-q24",
      question:
        "Which AWS service is BEST for predictive maintenance (detecting equipment anomalies from sensor data)?",
      options: [
        "Amazon Lookout for Equipment",
        "Amazon Lookout for Metrics",
        "Amazon Forecast",
        "Amazon Comprehend",
      ],
      correct: 0,
      explanation:
        "Amazon Lookout for Equipment uses sensor data (vibration, temperature, etc.) to detect abnormal equipment behavior and predict maintenance needs.",
    },
    {
      id: "ml-q25",
      question:
        "Which AWS service is BEST for searching and analyzing structured/unstructured data (full-text search, log analytics, observability)?",
      options: [
        "Amazon OpenSearch Service",
        "Amazon SageMaker",
        "Amazon Comprehend",
        "Amazon Athena",
      ],
      correct: 0,
      explanation:
        "Amazon OpenSearch Service (formerly Elasticsearch Service) is a managed search and analytics service — used for log analytics, full-text search, observability dashboards.",
    },
  ],
};
