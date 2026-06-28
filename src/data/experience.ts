export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Intern",
    company: "Tata Elxsi",
    duration: "Recent",
    location: "Chennai, TN",
    description: [
      "Completed a professional internship at Tata Elxsi, contributing to technical engineering projects.",
      "Gained hands-on industry experience and exposure to real-world development environments."
    ],
    skills: ["Engineering", "Development", "Industry Experience"]
  },
  {
    id: 2,
    role: "Full Stack Web Development Intern",
    company: "InternsForge",
    duration: "Jul 2025 - Oct 2025",
    location: "Remote",
    description: [
      "Built and deployed full-stack web applications using HTML, CSS, JavaScript, Node.js, and MongoDB.",
      "Completed rigorous milestones in REST API development, backend architecture, and responsive front-end design.",
      "Received a prestigious Certificate of Appreciation for exceptional performance."
    ],
    skills: ["React.js", "Node.js", "MongoDB", "REST APIs", "Tailwind CSS"]
  },
  {
    id: 3,
    role: "Foundations of Artificial Intelligence Intern",
    company: "Microsoft & AICTE",
    duration: "Apr 2025 - May 2025",
    location: "Remote",
    description: [
      "Completed a structured 4-week AI program under the guidance of Microsoft, Edunet Foundation, and AICTE.",
      "Gained foundational knowledge and practical skills in neural networks, model training, and AI algorithms.",
      "Studied the implementation of ethical AI principles in modern software development."
    ],
    skills: ["Artificial Intelligence", "Neural Networks", "Model Training", "Python"]
  }
];
