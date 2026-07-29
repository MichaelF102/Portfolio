import gfgDSImg from "../assets/certificates/GFG_DS.png";
import gfgDSPdf from "../assets/certificates/GFG_DS.pdf";

import gfgGenaiImg from "../assets/certificates/GFG_Genai.png";
import gfgGenaiPdf from "../assets/certificates/GFG_Genai.pdf";

import awsCloudImg from "../assets/certificates/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20260405-30-2tkhi7.png";
import awsCloudPdf from "../assets/certificates/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20260405-30-2tkhi7.pdf";

import awsDEImg from "../assets/certificates/AWS_Academy_Graduate___Data_Engineering___Training_Badge_Badge20260406-30-hku1ac.png";
import awsDEPdf from "../assets/certificates/AWS_Academy_Graduate___Data_Engineering___Training_Badge_Badge20260406-30-hku1ac.pdf";

import awsMLImg from "../assets/certificates/AWS_Academy_Graduate___Machine_Learning_Foundations___Training_Badge_Badge20260422-31-7o2er4.png";
import awsMLPdf from "../assets/certificates/AWS_Academy_Graduate___Machine_Learning_Foundations___Training_Badge_Badge20260422-31-7o2er4.pdf";

import iitbImg from "../assets/certificates/iitb.png";
import iitbPdf from "../assets/certificates/iitb.pdf";

export const Certifications = [
  {
    id: 1,
    name: "AWS Academy Graduate - Data Engineering",
    tags: ["AWS", "DataEngineering", "Cloud"],
    date: "April 06, 2026",
    imgSrc: awsDEImg,
    link: awsDEPdf,
  },
  {
    id: 2,
    name: "Complete Machine Learning & Data Science Program | GeeksforGeeks",
    tags: ["MachineLearning", "DataScience", "Python"],
    date: "November 2024",
    imgSrc: gfgDSImg,
    link: gfgDSPdf,
  },
  {
    id: 3,
    name: "Mastering Generative AI and ChatGPT | GeeksforGeeks",
    tags: ["GenerativeAI", "ChatGPT", "LLMs"],
    date: "December 2024",
    imgSrc: gfgGenaiImg,
    link: gfgGenaiPdf,
  },
  {
    id: 4,
    name: "AWS Academy Graduate - Machine Learning Foundations",
    tags: ["AWS", "MachineLearning", "Cloud"],
    date: "April 22, 2026",
    imgSrc: awsMLImg,
    link: awsMLPdf,
  },
  {
    id: 5,
    name: "AWS Academy Graduate - Cloud Foundations",
    tags: ["AWS", "Cloud", "Infrastructure"],
    date: "February 17, 2026",
    imgSrc: awsCloudImg,
    link: awsCloudPdf,
  },
  {
    id: 6,
    name: "Algorithmic Trading Workshop | Techfest, IIT Bombay",
    tags: ["AlgorithmicTrading", "Finance", "IITBombay"],
    date: "January 2025",
    imgSrc: iitbImg,
    link: iitbPdf,
  }
];
