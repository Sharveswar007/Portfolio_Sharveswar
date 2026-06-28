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
        image: "/photos/tokyo-shinjuku-2/image-1.jpg", // Placeholder for actual certificate
        description: "Achieved the Salesforce Agentforce Specialist certification.",
      }
      // You can add more Salesforce certs here!
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
        image: "/photos/tokyo-shinjuku-2/image-3.jpg",
        description: "Validating a comprehensive understanding of AWS infrastructure, security, pricing, and core architectural principles."
      },
      {
        title: "AWS Machine Learning Foundations",
        image: "/photos/tokyo-shinjuku-2/image-4.jpg",
        description: "Mastering the deployment of scalable AI models and predictive analytics using AWS SageMaker and associated services."
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
        image: "/photos/tokyo-shinjuku-2/image-2.jpg",
        description: "Awarded 3rd Prize at the SharpAlthon Hackathon for developing an innovative, high-performance software solution under extreme time constraints."
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
        image: "/photos/tokyo-shinjuku-2/image-1.jpg",
        description: "Successfully completed a rigorous 12-week Data Structures and Algorithms curriculum."
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
        title: "HackerRank 5★ C++ & 4★ Python",
        image: "/photos/tokyo-shinjuku-2/image-2.jpg",
        description: "Achieved a 5-star rating in C++ and a 4-star rating in Python on HackerRank."
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
        title: "Certificate of Appreciation",
        image: "/photos/tokyo-shinjuku-2/image-3.jpg",
        description: "Received a Certificate of Appreciation from the Futurix Tech Club for outstanding technical contributions."
      }
    ]
  },
];
