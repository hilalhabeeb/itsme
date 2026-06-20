import { ResumeData } from './types';

export const INITIAL_RESUME_DATA: ResumeData = {
  name: "HILAL HABEEB",
  title: "Software Engineer | Frappe / ERPNext & Python Backend",
  bio: "Software engineer in Bahrain building scalable real-world business systems across ERP, CRM, sales, purchase, inventory, accounting, HR, and operations. I work with Frappe/ERPNext, Python, FastAPI, Django, React, and REST integrations to turn complex workflows into secure, maintainable applications, with added experience in AI/ML automation and computer vision.",
  email: "hilalhabb@gmail.com",
  phone: "+973 34567505",
  location: "Tubli, Bahrain",
  github: "https://github.com/hilalhabeeb",
  linkedin: "https://linkedin.com/in/hilalhabeeb",
  profileImageUrl: "/hilal.png",
  resumeUrl: "/Hilal%20Habeeb%20SWE.pdf",

  skills: [
    {
      title: "Business Systems Engineering",
      summary: "ERP and workflow systems for real business operations.",
      items: [
        "Frappe Framework",
        "ERPNext Customization",
        "Sales & CRM",
        "Purchase & Inventory",
        "Accounts & HR",
        "Role Permissions",
        "Reports & Dashboards"
      ]
    },
    {
      title: "Backend & API Development",
      summary: "Reliable services, integrations, and automation layers.",
      items: [
        "Python",
        "FastAPI",
        "Django",
        "REST APIs",
        "Background Jobs",
        "Scheduled Tasks",
        "Authentication"
      ]
    },
    {
      title: "Frontend & Product UI",
      summary: "Clean interfaces for operational tools and portals.",
      items: [
        "React",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Frappe Desk UI",
        "WordPress"
      ]
    },
    {
      title: "Data, AI & Automation",
      summary: "Applied AI/ML, analytics, and computer vision workflows.",
      items: [
        "Machine Learning",
        "Pandas",
        "NumPy",
        "scikit-learn",
        "OpenCV",
        "Image Processing",
        "Workflow Automation"
      ]
    },
    {
      title: "Databases & Infrastructure",
      summary: "Storage, deployment, and production support fundamentals.",
      items: [
        "MariaDB",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Docker",
        "AWS EC2",
        "Linux"
      ]
    },
    {
      title: "Quality & Delivery",
      summary: "Testing, debugging, and practical agile delivery habits.",
      items: [
        "Selenium",
        "Cucumber",
        "API Testing",
        "Git",
        "Figma",
        "Agile/Scrum",
        "Technical Documentation"
      ]
    }
  ],
  experience: [
    {
      company: "World Shading, Hamad Town, Bahrain",
      role: "Software Engineer - ERP & Business Solutions",
      period: "Aug 2024 - Present",
      description: [
        "Build and customize scalable business applications using Frappe Framework and ERPNext for sales, purchase, inventory, accounts, HR, CRM, and operational workflows.",
        "Design custom DocTypes, role-based permissions, workflow states, reports, print formats, and dashboards to match real company processes instead of forcing teams into generic software.",
        "Develop Python and JavaScript automations for approvals, notifications, scheduled tasks, data validation, and cross-module business rules.",
        "Integrate third-party services through REST APIs, including messaging, customer communication, and operational data exchange.",
        "Support production users by improving usability, debugging live issues, refining permissions, and turning repeated manual work into reliable system flows."
      ],
      skills: ["Frappe", "ERPNext", "Python", "JavaScript", "REST APIs", "MariaDB"]
    },
    {
      company: "DataPy, Thiruvananthapuram",
      role: "Junior Python Developer",
      period: "Mar 2024 - July 2024",
      description: [
        "Worked with Python programming, data analysis, and machine learning fundamentals through practical training and project-based development.",
        "Used NumPy, Pandas, and scikit-learn for data cleaning, feature preparation, model building, and evaluation on real-world datasets.",
        "Built a strong base in backend thinking, automation, debugging, and analytical problem solving that now supports business software development."
      ],
      skills: ["Python", "NumPy", "Pandas", "scikit-learn", "Machine Learning"]
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
      institution: "St George's College, Aruvithura",
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
      title: "WhatsApp API Platform",
      category: "Business Communication",
      description: "Built a business messaging platform around WhatsApp API workflows, including customer conversations, template-based notifications, contact management, campaign-style communication, and backend integrations for operational teams.",
      tags: ["WhatsApp API", "Python", "REST APIs", "Automation", "CRM"],
      imageUrl: "https://images.unsplash.com/photo-1611746869696-d09bce200020?auto=format&fit=crop&q=80&w=800",
      link: "#",
      featured: true
    },
    {
      title: "Manpower ERP System",
      category: "ERP / Operations",
      description: "Developed a manpower-focused ERP system for employee records, recruitment, deployment, attendance, payroll support, document tracking, customer/company management, and operational reporting.",
      tags: ["Frappe", "ERPNext", "HR", "Payroll", "Reports"],
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      link: "#",
      featured: true
    },
    {
      title: "Vehicle Number Plate Detection",
      category: "Computer Vision",
      description: "Implemented an OpenCV-based vehicle number plate detection workflow for parking and access-control use cases, combining image processing, detection logic, and structured output for downstream systems.",
      tags: ["Python", "OpenCV", "Image Processing", "OCR", "Automation"],
      imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800",
      link: "#",
      featured: true
    },
    {
      title: "ERP Business Solutions",
      category: "ERPNext Customization",
      description: "Designed and implemented custom ERPNext-based solutions for SMEs covering inventory, manufacturing, sales, HR, accounting workflows, approvals, reports, and Python/JavaScript automations.",
      tags: ["ERPNext", "Frappe", "Python", "JavaScript"],
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: "Sportigo",
      category: "Academic Product",
      description: "A Python Django-based football turf booking system with an ML recommendation model for turf suggestions based on user preferences. Hosted on AWS EC2 and tested with Selenium.",
      tags: ["Django", "Machine Learning", "AWS EC2", "Selenium"],
      imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: "ePark.bh",
      category: "Smart Parking",
      description: "Digital solution concept for machine-paid parking in Bahrain with number plate recognition using OpenCV, payment-flow thinking, and parking operation automation.",
      tags: ["Python", "OpenCV", "Image Processing", "Payment API"],
      imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800",
      link: "#"
    }
  ]
};
