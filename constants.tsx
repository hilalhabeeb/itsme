
import { ResumeData } from './types';

/**
 * HI HILAL! Edit this file to update your personal details.
 * To change your picture: Replace the 'profileImageUrl' string below.
 * Since your image 'hilal.jpg' is in the same folder, use "./hilal.jpg"
 */
export const INITIAL_RESUME_DATA: ResumeData = {
  name: "HILAL HABEEB",
  title: "Solution-Driven Software Developer",
  bio: "Passionate software developer specializing in building efficient, scalable applications. Proficient in Python, Django, React, and cloud platforms with extensive hands-on experience in ERP systems and data-driven solutions.",
  email: "hilalhabb@gmail.com",
  phone: "+973 33797901", // YOUR NEW PHONE NUMBER
  location: "Tubli, Bahrain",
  github: "https://github.com/hilalhabeeb",
  linkedin: "https://linkedin.com/in/hilalhabeeb",
  
  // IMAGE SETTINGS
  profileImageUrl: "/hilal.png",
  
  // RESUME SETTINGS (Place resume.pdf in the same folder)
  resumeUrl: "/Hilal_Habeeb_Resume.pdf",
  
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React", "WordPress"],
    backend: ["Python (Django)", "Frappe Framework", "PHP", "Java", "C", "C++"],
    tools: ["Docker", "AWS EC2", "PostgreSQL", "MySQL", "MongoDB", "Figma", "REST APIs", "OpenCV"],
    soft: ["Problem-Solving", "Critical Thinking", "Adaptability", "Decision Making", "Agile/Scrum"]
  },
  experience: [
    {
      company: "World Shading, Hamad Town, Bahrain",
      role: "Web & ERP Developer",
      period: "Aug 2024 - Present",
      description: [
        "Develop and customize business ERP solutions using the Frappe Framework (Python & JavaScript).",
        "Create custom modules, scripts, and UI enhancements for specific business needs.",
        "Automate workflows and integrate third-party services using REST APIs and scheduled tasks.",
        "Implement role-based permission systems to ensure secure access control."
      ],
      skills: ["Frappe", "Python", "JavaScript", "REST APIs"]
    },
    {
      company: "DataPy, Thiruvananthapuram",
      role: "Junior Python Developer",
      period: "Mar 2024 - July 2024",
      description: [
        "Completed intensive training in Python programming and Data Science/Machine Learning.",
        "Acquired hands-on experience with Python libraries such as NumPy, Pandas, and scikit-learn.",
        "Built predictive models and performed data analysis on real-world datasets."
      ],
      skills: ["Python", "NumPy", "Pandas", "scikit-learn", "ML"]
    }
  ],
  education: [
    {
      institution: "Amal Jyothi College of Engineering, Koovappally",
      degree: "Master of Computer Application (MCA)",
      period: "2022 - 2024",
      details: "Specialization in Advanced Software Engineering. CGPA: 8.6/10"
    },
    {
      institution: "St George’s College, Aruvithura",
      degree: "Bachelor of Computer Application (BCA)",
      period: "2019 - 2022",
      details: "CGPA: 6.4/10"
    },
    {
      institution: "St Thomas HSS, Erumeli",
      degree: "Secondary School",
      period: "2017 - 2019",
      details: "Score: 83%"
    }
  ],
  projects: [
    {
      title: "ERP Business Solutions",
      description: "Designed and implemented custom ERPNext-based solutions for SMEs covering inventory, manufacturing, sales, HR, and accounting workflows with Python/JS automations.",
      tags: ["ERPNext", "Frappe", "Python", "JavaScript"],
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: "Sportigo",
      description: "A Python Django-based football turf booking system with an ML recommendation model for turf suggestions based on user preferences. Hosted on AWS EC2.",
      tags: ["Django", "Machine Learning", "AWS EC2", "Selenium"],
      imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: "ePark.bh",
      description: "Digital solution for machine-paid parking in Bahrain with real-time number plate recognition using OpenCV and payment integration.",
      tags: ["Python", "OpenCV", "Image Processing", "Payment API"],
      imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800",
      link: "#"
    }
  ]
};
