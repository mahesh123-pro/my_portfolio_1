export interface Project {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  image: string;
  caseStudyUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: string;
  desc: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  color: string;
  skillsList: Skill[];
}

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  tags: string[];
  link: string;
  icon: string;
}

export interface Service {
  icon: string;
  title: string;
  desc: string;
}

export interface Certification {
  icon: string;
  title: string;
  desc: string;
}

export const portfolioData = {
  personal: {
    name: "Mahesh",
    logoText: "MK",
    role: "Cloud Engineer + Full Stack Developer",
    subRole: "Cloud Solutions Architect & Full-Stack Engineer",
    availability: "Available for Internships, Freelance, & Full-Time Roles",
    bio: "I am a B-Tech student at MLRITM focused on Cloud Computing and Full-Stack Development. I architect reliable structures on AWS, build user-centric interfaces, and deploy system automations utilizing container runtimes.",
    resumeUrl: "/assets/docs/Mahesh(Resume2).pdf",
    email: "kolim5263@gmail.com",
    phone: "+91 6302596695",
    location: "Hyderabad, India",
    socials: {
      github: "https://github.com/mahesh123-pro",
      linkedin: "https://www.linkedin.com/in/bakki-mahesh-b48686242/",
      medium: "https://medium.com/@kolim5263"
    },
    currentFocus: "AWS architecture, product engineering, & systems speed",
    latestRole: "Tech Lead @ GKLT (Manakrishi), deploying agri-tech apps",
    education: [
      {
        "degree": "B-Tech",
        "institution": "MLRITM",
        "period": "2023 - Present"
      },
      {
        "degree": "Intermediate",
        "institution": "Narayana College",
        "period": "2023"
      }
    ]
  },
  certifications: [
    {
      "icon": "AWS",
      "title": "AWS Certified",
      "desc": "Validated competence in AWS cloud setups, network VPC configs, and access controls (NPTEL)."
    },
    {
      "icon": "🏆",
      "title": "Hackathon Winner",
      "desc": "First place award for coding operational AR/VR systems utilizing strong product principles (2024)."
    },
    {
      "icon": "🚀",
      "title": "9+ Deployed Projects",
      "desc": "Built, reviewed, and deployed nine web dashboards on Vercel and AWS servers."
    },
    {
      "icon": "🎙️",
      "title": "Technical Speaker",
      "desc": "Presented summaries on VPC security and network isolation at Valorous National Technical Fest (2025)."
    }
  ] as Certification[],
  projects: [
    {
      "id": "6sgreentech",
      "title": "6S GreenTech",
      "desc": "Advanced agricultural ecosystem featuring AI-driven machinery, autonomous neural drives, and precision farming analytics.",
      "tags": ["AI Core", "IoT Control", "React"],
      "image": "/assets/images/6sgreentech.png",
      "caseStudyUrl": "#",
      "liveUrl": "https://www.6sgreentech.com/"
    },
    {
      "id": "rkprojects",
      "title": "RK Projects",
      "desc": "Enterprise-grade civil construction solutions platform specializing in large-scale structural project planning and material logistics.",
      "tags": ["Civil Infra", "AWS S3", "Logistics"],
      "image": "/assets/images/rkprojects.png",
      "caseStudyUrl": "#",
      "liveUrl": "https://www.rkprojectss.com/"
    },
    {
      "id": "manakrishi",
      "title": "Manakrishi App",
      "desc": "Precision drone spraying schedules platform matching mobile applications with real-time flight telemetry streams.",
      "tags": ["React Native", "WebSockets", "AWS"],
      "image": "/assets/images/work-1.png",
      "caseStudyUrl": "#",
      "liveUrl": "https://www.manakrishi.in/"
    },
    {
      "id": "prolance",
      "title": "Prolance Network",
      "desc": "Professional matches platform helping local freelancers request project quotes and coordinate job calendars.",
      "tags": ["Next.js", "Express", "MERN Stack"],
      "image": "/assets/images/prolance.png",
      "caseStudyUrl": "#",
      "liveUrl": "https://www.prolance.me/"
    },
    {
      "id": "visaensure",
      "title": "VisaEnsure AI",
      "desc": "International student visa checklist wizard featuring automated document uploads and visual flow checks.",
      "tags": ["Next.js", "Vercel CDN", "Sleek UI"],
      "image": "/assets/images/visaensure.png",
      "caseStudyUrl": "#",
      "liveUrl": "https://visaensure.vercel.app/"
    },
    {
      "id": "aws",
      "title": "3-Tier VPC Architecture",
      "desc": "High-availability server infrastructure layout on AWS with application load balancers, private subnets, and Multi-AZ databases.",
      "tags": ["VPC Network", "AWS EC2", "RDS MySQL"],
      "image": "/assets/images/work-3.png",
      "caseStudyUrl": "#"
    },
    {
      "id": "event-management",
      "title": "Elegance Events",
      "desc": "Full-scale event planner system tracking leads, managing manager schedules, and rendering cost calculations.",
      "tags": ["React", "Express", "MongoDB"],
      "image": "/assets/images/work-4.png",
      "caseStudyUrl": "#",
      "liveUrl": "https://event-management-nine-chi.vercel.app/"
    },
    {
      "id": "3d-portfolio",
      "title": "3D Portfolio Website",
      "desc": "Immersive personal website showcase featuring Three.js animations, custom shaders, and scroll-linked cameras.",
      "tags": ["Three.js", "Framer Motion", "Next.js"],
      "image": "/assets/images/my3dportfolioimage.png",
      "caseStudyUrl": "https://my-3d-portfolio-zeta-coral.vercel.app/",
      "liveUrl": "https://my-3d-portfolio-zeta-coral.vercel.app/"
    }
  ] as Project[],
  additionalWork: [
    {
      "title": "Social Media App",
      "desc": "Real-time social posting platform with profile settings, live feed notifications, and like metrics.",
      "tags": ["React", "Node.js", "Socket.io"]
    },
    {
      "title": "Music App UI",
      "desc": "Dynamic music catalog application featuring category discover, playlist tracks, and visual soundbars.",
      "tags": ["JavaScript", "Audio API", "CSS Grid"]
    },
    {
      "title": "Online E-Commerce",
      "desc": "Feature-rich shopping portal layout with cart storage hooks, checkout inputs, and ratings metrics.",
      "tags": ["MERN Stack", "Redux", "Stripe UI"]
    },
    {
      "title": "Static Portfolio site",
      "desc": "Responsive vanilla HTML/CSS presentation portfolio featuring custom layout grids.",
      "tags": ["HTML5", "CSS3", "JS"]
    }
  ],
  skills: [
    {
      "id": "cloud",
      "name": "Cloud Infrastructure",
      "iconName": "Cloud",
      "color": "from-orange-500 to-amber-500",
      "skillsList": [
        { "name": "AWS Cloud Services", "level": "Expert", "desc": "EC2, S3, RDS, VPC, ALB, CloudWatch, IAM, Route53" },
        { "name": "Security Architectures", "level": "Advanced", "desc": "Secure 3-tier networking, subnets, IAM policies, and cloud hardening" },
        { "name": "Hosting & Deployment", "level": "Advanced", "desc": "Vercel, AWS Amplify, Netlify, and serverless architectures" }
      ]
    },
    {
      "id": "devops",
      "name": "DevOps & Systems",
      "iconName": "Terminal",
      "color": "from-blue-500 to-indigo-500",
      "skillsList": [
        { "name": "Docker", "level": "Intermediate", "desc": "Containerization of full-stack services and local development setups" },
        { "name": "Linux Administration", "level": "Advanced", "desc": "Primary OS operations, scripting, process daemon management, and SSH security" },
        { "name": "CI/CD Pipelines", "level": "Intermediate", "desc": "Automating builds and code deployments via GitHub Actions" }
      ]
    },
    {
      "id": "frontend",
      "name": "Frontend Engineering",
      "iconName": "Monitor",
      "color": "from-cyan-500 to-teal-500",
      "skillsList": [
        { "name": "React & Next.js", "level": "Advanced", "desc": "Modern App Router, client/server rendering, state management, and optimized SEO" },
        { "name": "Tailwind CSS", "level": "Expert", "desc": "Modern layouts, custom styling frameworks, and responsive grids" },
        { "name": "Framer Motion", "level": "Advanced", "desc": "Creating premium interactions using GSAP and Framer Motion" }
      ]
    },
    {
      "id": "backend",
      "name": "Backend Systems",
      "iconName": "Server",
      "color": "from-green-500 to-emerald-500",
      "skillsList": [
        { "name": "Node.js & Express", "level": "Advanced", "desc": "Robust RESTful API design, middleware execution, and microservices logic" },
        { "name": "WebSockets", "level": "Intermediate", "desc": "Sub-second real-time telemetry communications using Socket.io" },
        { "name": "Python Engineering", "level": "Intermediate", "desc": "Scripting, server architectures, and mathematical calculations" }
      ]
    },
    {
      "id": "databases",
      "name": "Databases & Cache",
      "iconName": "Database",
      "color": "from-purple-500 to-pink-500",
      "skillsList": [
        { "name": "MongoDB", "level": "Advanced", "desc": "Document indexing, schema optimization, aggregation pipelines, and Atlas" },
        { "name": "PostgreSQL", "level": "Intermediate", "desc": "Relational data models, database integrity, and query tuning" },
        { "name": "Redis Cache", "level": "Intermediate", "desc": "Caching REST API responses to achieve sub-100ms response cycles" }
      ]
    }
  ] as SkillCategory[],
  timeline: [
    {
      "year": "2020",
      "title": "The Foundation",
      "desc": "Deep dive into web fundamentals (HTML5, CSS3, and JavaScript). Building static sites, understanding browser rendering engines, and scripting basic DOM modules.",
      "tags": ["HTML5", "CSS3", "Vanilla JS"],
      "link": "#",
      "icon": "🌱"
    },
    {
      "year": "2023",
      "title": "Modern Web Ecosystem",
      "desc": "Mastering modular component designs, React routing, Node.js RESTful API backends, and NoSQL databases. Shipped first full-stack commercial web layouts.",
      "tags": ["React", "Node.js", "MongoDB"],
      "link": "#",
      "icon": "💻"
    },
    {
      "year": "2024",
      "title": "Linux & Cloud Infrastructure",
      "desc": "Migrating primary system operations to Linux. Diving into cloud design patterns on AWS: virtual networks (VPCs), computing (EC2), security groups, and storage policies (S3).",
      "tags": ["Linux", "AWS Cloud", "Network VPC"],
      "link": "#",
      "icon": "☁️"
    },
    {
      "year": "2025",
      "title": "Professional Execution",
      "desc": "Deploying high-availability 3-tier cloud architectures, setting up Docker container runtimes, managing production databases, and stepping into leading agri-tech product directions.",
      "tags": ["Docker", "AWS Production", "System Design"],
      "link": "#",
      "icon": "🚀"
    },
    {
      "year": "PRESENT",
      "title": "Tech Lead & Architect",
      "desc": "Leading product engineering at GKLT (Manakrishi). Scaling drone-telemetry IoT platforms, optimizing server latency, and designing end-to-end agri-tech platforms for Indian farmers.",
      "tags": ["Architecture", "Team Lead", "IoT Workflows"],
      "link": "#",
      "icon": "👑"
    }
  ] as TimelineItem[],
  services: [
    {
      "icon": "💻",
      "title": "Web Design",
      "desc": "Designing clean, responsive mockups with consistent style templates that perform beautifully across mobile screens."
    },
    {
      "icon": "🛠️",
      "title": "Web Development",
      "desc": "Developing secure, scalable Next.js and Express RESTful API backends with robust database indexing patterns."
    },
    {
      "icon": "☁️",
      "title": "Cloud Architecture",
      "desc": "Deploying Multi-AZ clustered databases, Load Balancers, and secure IAM credentials on AWS instances."
    },
    {
      "icon": "📝",
      "title": "Technical Writing",
      "desc": "Writing in-depth cloud setup logs and system scripting articles on Medium, matching developer patterns."
    },
    {
      "icon": "🎬",
      "title": "Video Editing",
      "desc": "Producing story-driven structural cuts, color balances, and audio updates for promos and media briefs."
    },
    {
      "icon": "📷",
      "title": "Photo Editing",
      "desc": "Retouching client mockups, product color corrections, and visual branding assets for marketing layouts."
    }
  ] as Service[]
};
