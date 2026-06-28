export interface Certificate {
  title: string;
  image: string;
  description: string;
  link?: string;
}

export interface AwardCategory {
  id: number;
  slug: string;
  color: string;
  title: string; // The category name shown on the card
  issuer: string;
  logo: string;
  description: string;
  certificates: Certificate[];
}

export const AWARDS: AwardCategory[] = [
  { 
    id: 1, 
    slug: "salesforce",
    color: "#3b82f6", 
    title: "Salesforce Certifications", 
    issuer: "Salesforce", 
    logo: "/images/awards/salesforce.svg",
    description: "Official certifications demonstrating expertise in AI-driven CRM solutions, automated agent workflows, and intelligent customer engagement platforms.",
    certificates: [
      {
        title: "Salesforce Agentforce Specialist",
        image: "/certificates/Cert7256328_AgentforceSpecialist_20251223.pdf",
        description: "Achieved the Salesforce Agentforce Specialist certification.",
        link: "https://sforce.co/verifycerts"
      }
    ]
  },
  { 
    id: 2, 
    slug: "amazon-web-services",
    color: "#34d399", 
    title: "AWS Certifications", 
    issuer: "Amazon Web Services", 
    logo: "/images/awards/aws.svg", 
    description: "Certified by Amazon Web Services in Cloud and Machine Learning Foundations, validating a comprehensive understanding of AWS infrastructure and AI model deployment.",
    certificates: [
      {
        title: "AWS Cloud Foundations",
        image: "/certificates/AWS_Cloud_Foundations_Badge20250408-27-39xgbw.pdf",
        description: "Validating a comprehensive understanding of AWS infrastructure, security, pricing, and core architectural principles.",
        link: "https://www.credly.com/go/mVaEXKTE"
      },
      {
        title: "AWS Machine Learning Foundations",
        image: "/certificates/AWS_Machine_Learning_Foundations_Badge20250408-27-rqpxt9.pdf",
        description: "Mastering the deployment of scalable AI models and predictive analytics using AWS SageMaker and associated services.",
        link: "https://www.credly.com/go/9RQdGv6n"
      }
    ]
  },
  { 
    id: 3, 
    slug: "hackathons",
    color: "#fb923c", 
    title: "Hackathon Awards", 
    issuer: "Hackathons", 
    logo: "/images/awards/hackathon.svg", 
    description: "Awards and recognition from participating in competitive, time-constrained hackathons.",
    certificates: [
      {
        title: "3rd Prize — SharpAlthon",
        image: "/certificates/Hackthone 2 SharpALthon-Sharpsysjpg.pdf",
        description: "Awarded 3rd Prize at the 12-hour non-stop SharpAlthon Hackathon by Sharpsys Software Solutions."
      },
      {
        title: "CYGNUSA Elite-Hire Architecture Challenge",
        image: "/certificates/CYGNUSA Elite-Hire-Hackthon.pdf",
        description: "Participation in the SRM Innovation Hackathon (Edition 1)."
      },
      {
        title: "PRISMATIC'26 Hackathon",
        image: "/certificates/prismatic26 hackthon participation.pdf",
        description: "24-Hour Hackathon participation at Easwari Engineering College."
      }
    ]
  },
  { 
    id: 4, 
    slug: "nptel",
    color: "#38bdf8", 
    title: "NPTEL & IIT Certifications", 
    issuer: "NPTEL / IIT", 
    logo: "/images/awards/nptel_official.svg", 
    description: "Rigorous academic certifications administered by the Indian Institutes of Technology (IIT) via NPTEL.",
    certificates: [
      {
        title: "DSA using Java (12-Week)",
        image: "/certificates/Data Structure and Algorithms using Java.pdf",
        description: "Successfully completed a rigorous 12-week Data Structures and Algorithms curriculum.",
        link: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS148S1053909098"
      },
      {
        title: "Introduction to Operating Systems",
        image: "/certificates/Introduction to Operating Systems.pdf",
        description: "Completed the 8-week certification course on Operating Systems.",
        link: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS94S133200620"
      },
      {
        title: "Fundamentals of Object Oriented Programming",
        image: "/certificates/NPTEL Fundamentals of Object Oriented Programming.pdf",
        description: "Completed the 12-week OOP certification course.",
        link: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS34S643201758"
      },
      {
        title: "Python for Data Science",
        image: "/certificates/Python for Data Science.pdf",
        description: "Completed the 4-week Python Data Science certification course.",
        link: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS60S443302385"
      },
      {
        title: "Data Base Management System",
        image: "/certificates/DBMS.pdf",
        description: "Completed the 8-week certification course on Data Base Management Systems.",
        link: "https://nptel.ac.in/noc/E_Certificate/NPTEL26CS39S480401948"
      },
      {
        title: "Introduction to Internet of Things",
        image: "/certificates/IOT.pdf",
        description: "Completed the 12-week certification course on Internet of Things.",
        link: "https://nptel.ac.in/noc/E_Certificate/NPTEL26CS37S1250301254"
      },
      {
        title: "Programming In Java",
        image: "/certificates/Programming In Java.pdf",
        description: "Completed the 12-week certification course on Programming In Java.",
        link: "https://nptel.ac.in/noc/E_Certificate/NPTEL25CS110S475202499"
      }
    ]
  },
  { 
    id: 5, 
    slug: "coding-platforms",
    color: "#fbbf24", 
    title: "Coding Platforms", 
    issuer: "LeetCode & HackerRank", 
    logo: "/images/awards/coding_platforms.png", 
    description: "Achievements across competitive programming platforms validating advanced algorithmic problem-solving capabilities and language mastery.",
    certificates: [
      {
        title: "HackerRank Python (Basic)",
        image: "/certificates/hackerrank python basic.pdf",
        description: "Successfully passed the HackerRank skill certification test for Python (Basic).",
        link: "https://www.hackerrank.com/certificates/5B50FFBE6FA4"
      }
    ]
  },
  { 
    id: 6, 
    slug: "futurix-tech-club",
    color: "#f472b6", 
    title: "Futurix Tech Club", 
    issuer: "Leadership & Contribution", 
    logo: "/images/awards/futurix_logo.png", 
    description: "Awards and certificates recognizing outstanding technical contributions and leadership within the organization.",
    certificates: [
      {
        title: "Certificate of Appreciation (ULTRON 9.0)",
        image: "/certificates/ULTRON SHARVESWAR MADASAMY.pdf",
        description: "Awarded for valuable contribution, technical expertise, and commitment in the successful development of the event website."
      }
    ]
  },
  { 
    id: 7, 
    slug: "bootcamps-internships",
    color: "#a855f7", 
    title: "Bootcamps & Internships", 
    issuer: "Industry Training", 
    logo: "/images/awards/bootcamps_logo.png", 
    description: "Certificates of completion for rigorous technical bootcamps and virtual internships.",
    certificates: [
      {
        title: "AI-ML Virtual Internship (10 weeks)",
        image: "/certificates/SHARVESWAR  MADASAMY 84302_copy.pdf",
        description: "Completed an intensive 10-week AI-ML Virtual Internship by EduSkills and AWS Academy."
      },
      {
        title: "Foundations of AI Internship",
        image: "/certificates/EduNet 4 weeks internship ai.pdf",
        description: "4-week internship on Foundations of AI, a Microsoft initiative implemented by Edunet Foundation and AICTE."
      },
      {
        title: "Bootcamp on Cloud Computing",
        image: "/certificates/CDAC HONOR WORKSHOP.pdf",
        description: "Completed the FutureSkills PRIME Project Bootcamp on Cloud Computing conducted by CDAC."
      },
      {
        title: "C++ Complete Training Course",
        image: "/certificates/C++ starting.pdf",
        description: "Completed the C++ Complete Training Course for Beginners on Udemy.",
        link: "https://ude.my/UC-fcd9fe99-fac3-44a2-aae8-61335b7bdba2"
      }
    ]
  },
  { 
    id: 8, 
    slug: "infosys-springboard",
    color: "#0ea5e9", 
    title: "Infosys Springboard", 
    issuer: "Infosys", 
    logo: "/images/awards/infosys_logo.png", 
    description: "Technical course completion certificates from the Infosys Springboard educational platform.",
    certificates: [
      {
        title: "HTML5 - The Language",
        image: "/certificates/HTML5 -The Language infosys springboard.pdf",
        description: "Successfully completed the HTML5 course.",
        link: "https://verify.onwingspan.com"
      },
      {
        title: "CSS3",
        image: "/certificates/CSS3_ infosys springboard.pdf",
        description: "Successfully completed the CSS3 course.",
        link: "https://verify.onwingspan.com"
      }
    ]
  }
];
