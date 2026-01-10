
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  imageUrl: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string; // Added phone field
  location: string;
  github: string;
  linkedin: string;
  profileImageUrl: string;
  resumeUrl: string; // Added resume path
  skills: {
    frontend: string[];
    backend: string[];
    tools: string[];
    soft: string[];
  };
  experience: Experience[];
  education: Education[];
  projects: Project[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
