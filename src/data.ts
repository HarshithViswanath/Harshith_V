import { Project, WorkExperience, Education, SkillCategory, Achievement, Certification } from "./types";

export const PORTFOLIO_OWNER = {
  name: "Harshith V",
  title: "AI Enthusiast & Software Engineer",
  location: "Bangalore, Karnataka, India",
  email: "harshithviswanathappa@gmail.com",
  bio: "AI Enthusiast and Software Engineer passionate about Agentic AI, Generative AI, Machine Learning, Deep Learning, and Natural Language Processing. Focused on designing intelligent systems, autonomous agents, and scalable cloud-native applications that push the boundaries of innovation.",
  tagline: "a Software Engineer focused on Agentic AI & modern cloud architecture.",
  socials: {
    github: "https://github.com/HarshithViswanath",
    linkedin: "https://www.linkedin.com/in/harshithv-ai",
    twitter: "https://x.com/harshith_v69480",
    instagram: "https://www.instagram.com/harshith_viswanath/",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI-Powered Cloud Security Analyzer",
    shortDescription: "Local, AI-driven security analyzer with real-time threat detection.",
    description: "Developed a local, AI-driven security analyzer using Spring Boot and ML models (DL4J/TensorFlow Java) to automatically detect and analyze threats. Integrated WebSockets for real-time updates and Chart.js for visualization. Used Docker and PostgreSQL/SQLite for secure deployment.",
    tags: ["Java", "Spring Boot", "WebSockets", "Chart.js", "Docker", "Machine Learning"],
    category: "Cloud Security",
    liveUrl: "https://github.com/HarshithViswanath",
    githubUrl: "https://github.com/HarshithViswanath",
    featured: true,
    imageAccent: "from-sky-500 to-indigo-600",
  },
  {
    id: "2",
    title: "Pixel Puranas: History Revived",
    shortDescription: "Immersive storytelling platform transforming historical events.",
    description: "Built an immersive storytelling platform that transforms historical events into animated narratives using Generative AI and audio narration. Designed an interactive UI and integrated an image-to-history pipeline to generate contextual information.",
    tags: ["React", "Node.js", "Generative AI", "Animation", "UI/UX"],
    category: "Web Interfaces",
    liveUrl: "https://github.com/HarshithViswanath",
    githubUrl: "https://github.com/HarshithViswanath",
    featured: true,
    imageAccent: "from-amber-500 to-orange-600",
  },
  {
    id: "3",
    title: "DevSecOps Vulnerability Scanner",
    shortDescription: "Secure CI/CD pipeline integrated with automated security scanning tools.",
    description: "Practiced building a secure CI/CD pipeline with DevSecOps practices, integrating security scanning tools into the deployment workflow. Used Docker and Kubernetes for containerized deployment with automated vulnerability reporting.",
    tags: ["DevSecOps", "Docker", "Kubernetes", "CI/CD"],
    category: "DevOps & Infrastructure",
    liveUrl: "https://github.com/HarshithViswanath",
    githubUrl: "https://github.com/HarshithViswanath",
    featured: false,
    imageAccent: "from-emerald-500 to-teal-600",
  }
];

export const WORK_HISTORY: WorkExperience[] = [
  {
    id: "exp-1",
    role: "UI/UX Designer",
    company: "Software Development Club - MVJCE",
    location: "Bengaluru, Karnataka",
    period: "Jan. 2024 - May. 2025",
    description: [
      "Led UI/UX design efforts using Figma and Canva to develop user-focused visuals across digital and print platforms.",
      "Designed technical posts, event posters, and promotional content that significantly boosted club engagement and visibility.",
      "Organized and delivered “CREATIVEX” – a design workshop under VertechX, enhancing creativity and practical design thinking among attendees."
    ],
    skills: ["Figma", "Canva", "UI/UX Design", "Leadership", "Event Organization"]
  }
];

export const EDUCATION_HISTORY: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Computer Technology",
    school: "MVJ College Of Engineering",
    location: "Bengaluru, Karnataka",
    period: "Dec. 2022 - Apr. 2026",
  }
];

export const SKILL_TAXONOMY: SkillCategory[] = [
  {
    id: "cat-1",
    name: "Programming",
    skills: ["Python", "SQL", "Java", "C++", "JavaScript"]
  },
  {
    id: "cat-2",
    name: "Artificial Intelligence",
    skills: ["Machine Learning", "Deep Learning", "Generative AI", "Natural Language Processing (NLP)", "Large Language Models (LLMs)", "Prompt Engineering", "Retrieval-Augmented Generation (RAG)"]
  },
  {
    id: "cat-3",
    name: "Data Science & Analytics",
    skills: ["Data Analysis", "Data Visualization", "Statistical Analysis", "Exploratory Data Analysis (EDA)", "Feature Engineering", "Predictive Modeling"]
  },
  {
    id: "cat-4",
    name: "Libraries & Frameworks",
    skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "Keras", "Hugging Face Transformers", "OpenCV"]
  },
  {
    id: "cat-5",
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQLite"]
  },
  {
    id: "cat-6",
    name: "Cloud & MLOps",
    skills: ["Oracle Cloud Infrastructure (OCI)", "Docker", "Kubernetes", "CI/CD", "DevSecOps"]
  },
  {
    id: "cat-7",
    name: "Developer Tools",
    skills: ["Git", "GitHub", "Jupyter Notebook", "Google Colab", "VS Code"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-3",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    organization: "Oracle",
    date: "Sep 2025",
    description: "Earned Oracle certification demonstrating foundational knowledge of Artificial Intelligence, Machine Learning, and AI services on Oracle Cloud Infrastructure."
  },
  {
    id: "ach-4",
    title: "Oracle Data Platform 2025 Certified Foundations Associate",
    organization: "Oracle",
    date: "Oct 2025",
    description: "Certified in core concepts of cloud-based data management, analytics, and Oracle Data Platform services."
  },
  {
    id: "ach-5",
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    organization: "Oracle",
    date: "Oct 2025",
    description: "Validated understanding of cloud computing fundamentals, OCI architecture, security, networking, and core cloud services."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issueDate: "Sep 2025",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=448EF28510CE5E95E92C4DA80982A1FB80ECA9CB8D8FBE1E4E6CF3A5B229741A",
    description: "Earned Oracle certification demonstrating foundational knowledge of Artificial Intelligence, Machine Learning, and AI services on Oracle Cloud Infrastructure."
  },
  {
    id: "cert-2",
    name: "Oracle Data Platform 2025 Certified Foundations Associate",
    issuer: "Oracle",
    issueDate: "Oct 2025",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=0ECB9B1AAF6647226599418FC00BDCD8E347863A19E0065A8CE382DB192E1AA7",
    description: "Certified in core concepts of cloud-based data management, analytics, and Oracle Data Platform services."
  },
  {
    id: "cert-3",
    name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    issueDate: "Oct 2025",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=550F4849BE684A4D5B4671F25C45CF93AC0360A282EF2505F99DD77F30860DB6",
    description: "Validated understanding of cloud computing fundamentals, OCI architecture, security, networking, and core cloud services."
  },
  {
    id: "cert-4",
    name: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    issueDate: "Oct 2025",
    description: "Successfully completed the 12-week NPTEL Online Certification course with a consolidated score of 72%."
  },
  {
    id: "cert-5",
    name: "Integrated Waste Management for a Smart City",
    issuer: "NPTEL",
    issueDate: "Oct 2025",
    description: "Successfully completed the 12-week NPTEL Online Certification course with a consolidated score of 78%."
  }
];
