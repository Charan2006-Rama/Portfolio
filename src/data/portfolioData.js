export const portfolioData = {
  personal: {
    name: "Balivada Rama Charan",
    role: "B.Tech Computer Science & Engineering Student",
    subRole: "Aspiring Software Developer",
    statusBadge: "Fresher | B.Tech CSE",
    bio: "Computer Science & Engineering student with a strong foundation in Java, Data Structures & Algorithms, SQL, and Web Development. Passionate about building interactive, scalable applications and exploring cloud technologies while preparing for software development roles.",
    aboutHeading: "Building real-world web applications & refining core CS skills",
    aboutParagraphs: [
      "I am currently in my 4th Year (Semester 7) pursuing B.Tech in Computer Science and Engineering at Sir C R Reddy College of Engineering with a CGPA of 7.93.",
      "As a software engineering fresher, I focus on solving algorithmic problems, writing clean modular code, and creating feature-rich web applications like CRICKIES — a real-time cricket scorecard platform.",
      "I am actively enhancing my expertise in Java, DSA, SQL, full-stack web development (ReactJS, Node.js), and AWS cloud concepts, and am ready for campus placement and full-time software developer opportunities."
    ],
    college: "Sir C R Reddy College of Engineering",
    cgpa: "7.93",
    currentSem: "Year 4, Semester 7",
    email: "ramacharanbalivada2006@gmail.com",
    resumeUrl: "/Balivada_Rama_Charan_Resume.pdf"
  },

  links: {
    resume: "/Balivada_Rama_Charan_Resume.pdf",
    email: "mailto:ramacharanbalivada2006@gmail.com",
    github: "https://github.com/Charan2006-Rama",
    leetcode: "https://leetcode.com/u/Rama_Charan/",
    linkedin: "https://www.linkedin.com/in/balivada-rama-charan"
  },

  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", icon: "Code2", description: "Core Java, OOPs, Data Structures" },
        { name: "Python", icon: "Terminal", description: "Scripting & Algorithms" }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "HTML", icon: "Layout", description: "Semantic Structure & Accessibility" },
        { name: "CSS", icon: "Palette", description: "Flexbox, Grid, Responsive UI" },
        { name: "JavaScript", icon: "FileCode", description: "Dynamic Logic & API Integration" },
        { name: "ReactJS", icon: "Atom", description: "Components, Hooks, State Management" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "Server", description: "REST APIs & Event-Driven Services" },
        { name: "Spring Boot", icon: "Cpu", description: "Java Enterprise Microservices & REST APIs" }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "PostgreSQL", icon: "Database", description: "Relational Database Management" },
        { name: "SQL", icon: "Layers", description: "Structured Query Language" }
      ]
    },
    {
      category: "Cloud",
      items: [
        { name: "AWS", icon: "Cloud", description: "Cloud Fundamentals & Services" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: "GitBranch", description: "Version Control System" },
        { name: "GitHub", icon: "Github", description: "Code Hosting & Collaboration" },
        { name: "VS Code", icon: "Monitor", description: "Primary IDE & Extensions" },
        { name: "Postman", icon: "Send", description: "API Testing & Documentation" },
        { name: "Google Colab", icon: "Code2", description: "Cloud Jupyter Notebooks & Data Analytics" }
      ]
    }
  ],

  experiences: [
    {
      id: "dexterity-internship",
      company: "Dexterity",
      role: "Full Stack Web Developer Intern",
      type: "Internship",
      duration: "1 February 2025 – 30 April 2025",
      location: "Eluru (Remote)",
      technologies: ["HTML & CSS", "Node.js", "React.js", "JavaScript"],
      responsibilities: [
        "Built responsive frontend interfaces and interactive components using HTML, CSS, and React.js.",
        "Engineered backend application services, socket handlers, and API logic using Node.js.",
        "Collaborated on full-stack web application features ensuring smooth data persistence and client-server synchronization."
      ],
      project: "CRICKIES — Live Cricket Scorecard",
      certificateUrl: "/certificates/DXIC456 - Certificate Of Internship Balivada Rama Charan .pdf"
    },
    {
      id: "datavalley-internship",
      company: "DataValley",
      role: "Cloud & DevOps Intern",
      type: "Internship",
      duration: "4 May 2026 – 27 June 2026",
      location: "Remote",
      technologies: ["AWS EC2", "AWS S3", "AWS IAM", "Maven", "Tomcat", "GitHub", "Docker"],
      responsibilities: [
        "Gained hands-on exposure to Cloud Computing and DevOps concepts through practical technical activities.",
        "Worked with fundamental cloud infrastructure concepts, including compute, storage, networking, and resource management.",
        "Applied version control, deployment automation, containerization, and DevOps workflows in hands-on cloud tasks."
      ],
      project: "Cloud & DevOps Infrastructure Deployment Project",
      certificateUrl: "/certificates/DATAVLLEY - Short Term Internship Certificate.pdf"
    }
  ],

  projects: [
    {
      id: "crickies",
      title: "CRICKIES — Live Cricket Scorecard",
      featured: true,
      tagline: "Interactive match-scoring application with real-time sockets & live cricket API integration",
      description: "A comprehensive live cricket scorecard application designed to provide an interactive, seamless match-scoring experience for players and fans.",
      features: [
        "Two-innings match support with detailed over breakdowns",
        "Ball-by-ball score input & real-time stat updating",
        "Automatic run-rate and required run-rate calculation",
        "LocalStorage-based data persistence across sessions",
        "Real-time socket communication for instant scorecard sync",
        "Graph-based match visualization for run trends & overs",
        "SportMonks Cricket API integration for live match data"
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "Node.js",
        "SportMonks Cricket API",
        "LocalStorage",
        "Real-time Sockets"
      ],
      github: "https://github.com/Charan2006-Rama"
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science and Engineering",
      institution: "Sir C R Reddy College of Engineering",
      duration: "2023 – 2027",
      status: "Year 4, Semester 7",
      metricsLabel: "CGPA",
      metricsValue: "7.93",
      highlight: true
    },
    {
      degree: "Intermediate (10+2)",
      specialization: "MPC Stream",
      institution: "Sri Chaitanya Junior College",
      duration: "2021 – 2023",
      status: "Completed",
      metricsLabel: "Percentage",
      metricsValue: "93.9%",
      highlight: false
    },
    {
      degree: "Secondary School Certificate",
      specialization: "ICSE Board",
      institution: "De Paul School",
      duration: "2020 – 2021",
      status: "Completed",
      metricsLabel: "Percentage",
      metricsValue: "80%",
      highlight: false
    }
  ],

  certifications: [
    {
      title: "AWS Cloud Practitioner",
      issuer: "AWS",
      type: "Certification",
      fileUrl: "/certificates/AWS Cloud Practitioner Certificate.pdf"
    },
    {
      title: "Data Structures & Algorithms using Java",
      issuer: "Infosys Springboard",
      type: "Certification",
      fileUrl: "/certificates/Infosys Springboard Certificate - Data Structures and Algorithms using Java.pdf"
    },
    {
      title: "Java 11 Essentials & Programming",
      issuer: "Infosys Springboard",
      type: "Certification",
      fileUrl: "/certificates/Infosys Springboard Certifcate - Java 11 Essentials.pdf"
    },
    {
      title: "Database Management System",
      issuer: "Infosys Springboard",
      type: "Certification",
      fileUrl: "/certificates/Infosys SpringBoard Certificate - Database Management System Part - 1.pdf"
    },
    {
      title: "16-hour Generative AI Workshop",
      issuer: "OutSkill",
      type: "Hands-on Workshop",
      fileUrl: "/certificates/Outskill 16 hours workshop certificate.pdf"
    },
    {
      title: "Google Data Analytics Professional",
      issuer: "Google",
      type: "Certification",
      fileUrl: "/certificates/GOOGLE-Google Data Analytics.pdf"
    },
    {
      title: "AI Bootcamp Certificate",
      issuer: "Intellipaat",
      type: "Bootcamp Certificate",
      fileUrl: "/certificates/INTELLIPAT AI BOOTCAMP CERTIFICATE.pdf"
    },
    {
      title: "Data Analysis Using Python",
      issuer: "Google",
      type: "Certification",
      fileUrl: "/certificates/GOOGLE-Introduction to Data Analysis Using Python.pdf"
    }
  ],

  achievements: [
    {
      title: "All India Rank 414",
      detail: "Achieved AIR Rank 414 out of 22,250 participants in nationwide competitive evaluation.",
      badge: "AIR 414 / 22,250",
      category: "National Competitive Rank"
    },
    {
      title: "AWS Cloud Practitioner Certified",
      detail: "Validated foundational knowledge of AWS Cloud infrastructure, IAM security, EC2 compute, and S3 storage services.",
      badge: "AWS Certified",
      category: "Cloud Architecture",
      fileUrl: "/certificates/AWS Cloud Practitioner Certificate.pdf"
    },
    {
      title: "Google Professional Data Analytics",
      detail: "Completed Google Data Analytics specialization mastering SQL queries, Python data processing, and visual analytics.",
      badge: "Google Certified",
      category: "Data & Analytics",
      fileUrl: "/certificates/GOOGLE-Google Data Analytics.pdf"
    },
    {
      title: "Cisco Cybersecurity Certification",
      detail: "Earned Cisco Networking Academy certification in cybersecurity fundamentals, threat analysis, and network protection.",
      badge: "Cisco Certified",
      category: "Security Fundamentals",
      fileUrl: "/certificates/CISCO - Introduction To Cyber Security Certificate.pdf"
    }
  ]
};
