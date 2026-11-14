export const COURSE_CATEGORIES = [
  "All Programs",
  "Full Stack & Web",
  "Data Science & AI",
  "Cloud & DevOps",
  "Networking & Security",
  "Software Testing",
  "Finance & ERP"
];

export const COURSES = [
  {
    id: "fs-mern",
    title: "Master in Full Stack MERN Development",
    category: "Full Stack & Web",
    duration: "4.5 Months",
    mode: "Classroom (Avadi) / Live Online",
    level: "Beginner to Advanced",
    rating: 4.9,
    reviewsCount: 382,
    badge: "Most Popular",
    fee: 38000,
    monthlyEmi: 3166,
    featured: true,
    description: "End-to-end web engineering program covering React 18, Node.js, Express, MongoDB, TypeScript, Next.js, and production deployment on AWS.",
    highlights: [
      "100% Guaranteed Placement Assistance with FIIT Jobs",
      "5+ Industry Capstone Projects (E-Commerce, CRM, Social Portal)",
      "Daily Code Reviews & Git Workflows with Senior Architects",
      "Official FIIT Formacion Industry Certification"
    ],
    tools: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Git", "Docker", "AWS"],
    syllabus: [
      {
        module: "Module 1: Modern Frontend Foundations",
        topics: ["HTML5 Semantic Architecture", "CSS3 Modern Grid & Flexbox", "Tailwind CSS & Responsive Design", "Modern JavaScript (ES6+), Asynchronous JS & Promises"]
      },
      {
        module: "Module 2: Advanced React 18 Engineering",
        topics: ["Component Lifecycle & Custom Hooks", "State Management (Redux Toolkit & Context API)", "Routing (React Router v6)", "Performance Optimization & Lazy Loading"]
      },
      {
        module: "Module 3: Server-Side Backend & REST APIs",
        topics: ["Node.js Runtime & Event Loop", "Express.js REST Architecture & Middleware", "JWT Authentication, Refresh Tokens & RBAC", "API Security & Rate Limiting"]
      },
      {
        module: "Module 4: Databases & Cloud DevOps",
        topics: ["MongoDB Aggregation Pipelines & Mongoose Schemas", "PostgreSQL Relational Design basics", "Dockerizing Apps & CI/CD Pipelines", "AWS EC2, S3 & Vercel Deployment"]
      }
    ],
    careerRoles: ["Full Stack Developer", "MERN Stack Engineer", "Frontend Specialist", "Node.js Backend Developer"]
  },
  {
    id: "fs-java",
    title: "Enterprise Java Full Stack & Microservices",
    category: "Full Stack & Web",
    duration: "5 Months",
    mode: "Classroom (Avadi) / Hybrid",
    level: "Intermediate",
    rating: 4.8,
    reviewsCount: 295,
    badge: "Enterprise Pick",
    fee: 42000,
    monthlyEmi: 3500,
    featured: true,
    description: "Master Core Java, Spring Boot 3, Hibernate JPA, Microservices Architecture, REST APIs, and modern React frontend for tier-1 MNC placements.",
    highlights: [
      "Spring Boot 3 & Spring Cloud Microservices",
      "Docker & Kubernetes Container Orchestration",
      "Mock Technical Interviews with MNC Leads",
      "TCS, Cognizant, Wipro, and Infosys Exam Preparation"
    ],
    tools: ["Core Java", "Spring Boot", "Hibernate", "React", "MySQL", "PostgreSQL", "Kafka", "Docker"],
    syllabus: [
      {
        module: "Module 1: Core Java 21 & OOP Mastery",
        topics: ["OOP Principles, Abstraction, Polymorphism", "Java Collections Framework & Generics", "Multithreading, Concurrency & Stream API", "JDBC & Database Connectivity"]
      },
      {
        module: "Module 2: Spring Boot 3 Framework",
        topics: ["Dependency Injection & Spring IoC", "Spring Data JPA & Hibernate ORM", "RESTful Web Services & Swagger OpenAPI", "Spring Security with JWT"]
      },
      {
        module: "Module 3: Microservices Architecture",
        topics: ["Service Registry (Eureka) & API Gateway", "Config Server & Resilient Circuit Breakers (Resilience4j)", "Kafka Asynchronous Event Streaming", "Distributed Tracing with Zipkin"]
      },
      {
        module: "Module 4: React UI Integration & Deployment",
        topics: ["React 18 Frontend Integration", "Axios API Consumer & Interceptors", "Docker Containerization of Microservices", "CI/CD Pipeline with Jenkins"]
      }
    ],
    careerRoles: ["Java Full Stack Engineer", "Spring Boot Developer", "Backend Software Engineer", "Java Architect"]
  },
  {
    id: "ai-data-science",
    title: "Python, Data Science & Machine Learning",
    category: "Data Science & AI",
    duration: "4 Months",
    mode: "Classroom (Avadi) / Live Online",
    level: "Beginner to Advanced",
    rating: 4.9,
    reviewsCount: 310,
    badge: "High Demand",
    fee: 39000,
    monthlyEmi: 3250,
    featured: true,
    description: "Practical Data Science path covering Python programming, Pandas data wrangling, Scikit-Learn algorithms, Deep Learning with TensorFlow, and GenAI LLM prompt workflows.",
    highlights: [
      "Real-world datasets analysis & Kaggle competitions",
      "Hands-on AI Predictive Modeling & NLP projects",
      "Power BI & Tableau interactive visual dashboards",
      "Direct interviews through FIIT Jobs Analytics wing"
    ],
    tools: ["Python", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Power BI", "SQL", "Streamlit"],
    syllabus: [
      {
        module: "Module 1: Advanced Python & Scientific Computing",
        topics: ["Python 3 Core & OOP Concepts", "NumPy Numerical Arrays & Matrix Algebra", "Pandas Data Exploration & Cleaning", "Matplotlib & Seaborn Data Visualization"]
      },
      {
        module: "Module 2: Statistical Foundations & SQL",
        topics: ["Inferential Statistics & Probability Distributions", "Hypothesis Testing & A/B Experiments", "Advanced SQL Joins, Window Functions & CTEs", "Data Pipeline ETL with Python"]
      },
      {
        module: "Module 3: Machine Learning Algorithms",
        topics: ["Supervised Learning (Regression & Classification)", "Unsupervised Learning (K-Means, PCA, Clustering)", "Ensemble Models (Random Forest, XGBoost)", "Model Hyperparameter Tuning & Cross-Validation"]
      },
      {
        module: "Module 4: Deep Learning & GenAI Fundamentals",
        topics: ["Neural Networks with Keras / TensorFlow", "NLP Text Mining & Sentiment Analysis", "HuggingFace Transformers & OpenAI APIs", "Streamlit Dashboard App Deployment"]
      }
    ],
    careerRoles: ["Data Scientist", "Machine Learning Engineer", "Business Intelligence Analyst", "Python AI Developer"]
  },
  {
    id: "cloud-devops",
    title: "Cloud Computing (AWS/Azure) & DevOps Engineering",
    category: "Cloud & DevOps",
    duration: "3.5 Months",
    mode: "Classroom (Avadi) / Live Online",
    level: "Intermediate",
    rating: 4.8,
    reviewsCount: 245,
    badge: "Top Salary",
    fee: 40000,
    monthlyEmi: 3333,
    featured: false,
    description: "Master modern Infrastructure as Code (Terraform), CI/CD automation with GitHub Actions & Jenkins, Docker containerization, Kubernetes cluster management, and AWS Cloud Architecture.",
    highlights: [
      "100% Practical Linux Terminal & AWS Cloud Labs",
      "Kubernetes production cluster setup & monitoring",
      "Preparation for AWS Solutions Architect (SAA-C03)",
      "High-paying career transitions for freshers & sysadmins"
    ],
    tools: ["AWS", "Linux", "Docker", "Kubernetes", "Terraform", "Jenkins", "Ansible", "Prometheus"],
    syllabus: [
      {
        module: "Module 1: Linux Administration & Shell Scripting",
        topics: ["Linux Kernel, Filesystem & Permissions", "Bash Automation Scripting", "Networking Protocols, SSH & Firewall config", "Package Managers & Systemd Services"]
      },
      {
        module: "Module 2: AWS Solutions Architecture",
        topics: ["EC2, VPC, Subnets & Route Tables", "S3 Storage, IAM Security Policies", "Application Load Balancer & Auto Scaling", "RDS Databases & CloudWatch Monitoring"]
      },
      {
        module: "Module 3: Containers & Kubernetes Orchestration",
        topics: ["Docker Image Optimization & Multi-stage builds", "Docker Compose microservices orchestration", "Kubernetes Pods, Deployments & Ingress Services", "ConfigMaps, Secrets & Persistent Volumes"]
      },
      {
        module: "Module 4: Infrastructure as Code & CI/CD",
        topics: ["Terraform HCL Infrastructure Provisioning", "Jenkins Declarative Pipelines & GitHub Actions", "Ansible Configuration Automation", "Prometheus & Grafana Observability"]
      }
    ],
    careerRoles: ["DevOps Engineer", "Cloud Architect", "Site Reliability Engineer (SRE)", "AWS Solutions Specialist"]
  },
  {
    id: "ccna-networking",
    title: "Cisco CCNA (200-301) & Enterprise Networking",
    category: "Networking & Security",
    duration: "2.5 Months",
    mode: "Classroom (Avadi Hands-on Lab)",
    level: "Beginner to Intermediate",
    rating: 4.9,
    reviewsCount: 420,
    badge: "Avadi Lab Favorite",
    fee: 28000,
    monthlyEmi: 2333,
    featured: false,
    description: "Hands-on networking training with physical Cisco routers, switches, subnetting, IPv4/IPv6, VLANs, OSPF routing, wireless LAN, and network security foundations.",
    highlights: [
      "Real Cisco Hardware Lab sessions at Avadi Training Center",
      "Packet Tracer & GNS3 Network Simulations",
      "100% Passing preparation for Cisco 200-301 Certification",
      "Immediate placement in Network Support, NOC & IT Infrastructure"
    ],
    tools: ["Cisco IOS", "Packet Tracer", "GNS3", "Wireshark", "Putty", "OSPF", "VLANs", "Subnetting"],
    syllabus: [
      {
        module: "Module 1: Network Fundamentals & IPv4/IPv6",
        topics: ["OSI & TCP/IP 7-Layer Protocol Suite", "Binary Mathematics, VLSM & CIDR Subnetting", "IPv6 Addressing & Autoconfiguration", "Physical Cabling, Fiber & Ethernet topologies"]
      },
      {
        module: "Module 2: Switching Technologies & VLANs",
        topics: ["Switch Architecture & MAC Address Tables", "VLAN configuration, 802.1Q Trunking", "Spanning Tree Protocol (STP & RSTP)", "EtherChannel Link Aggregation (LACP)"]
      },
      {
        module: "Module 3: IP Routing & Protocols",
        topics: ["Static Routing & Floating Defaults", "OSPFv2 Multi-Area Configuration & Metrics", "First Hop Redundancy Protocols (HSRP)", "Network Address Translation (NAT/PAT)"]
      },
      {
        module: "Module 4: Security, Wireless & Automation",
        topics: ["Access Control Lists (Standard & Extended ACLs)", "Port Security & DHCP Snooping", "WLAN Controllers & Wireless Architectures", "Network Programmability, REST APIs & JSON"]
      }
    ],
    careerRoles: ["Network Engineer", "NOC Analyst", "Technical Support Specialist", "System Network Administrator"]
  },
  {
    id: "qa-testing",
    title: "Software Testing: Automation (Selenium) & Manual QA",
    category: "Software Testing",
    duration: "3 Months",
    mode: "Classroom (Avadi) / Live Online",
    level: "Beginner",
    rating: 4.7,
    reviewsCount: 198,
    badge: "Quick Placement",
    fee: 29000,
    monthlyEmi: 2416,
    featured: false,
    description: "Comprehensive QA engineering covering SDLC/STLC methodologies, test case design, Selenium WebDriver with Java/Python, TestNG, Cucumber BDD, and Postman API testing.",
    highlights: [
      "Live Banking & E-Commerce Application Test Automation",
      "API Testing with Postman & RestAssured",
      "Jira Defect Tracking & Agile Sprint Workflows",
      "Ideal course for non-IT graduates to enter IT careers"
    ],
    tools: ["Selenium WebDriver", "Java", "TestNG", "Postman", "Jira", "Cucumber BDD", "Git", "Maven"],
    syllabus: [
      {
        module: "Module 1: Manual Testing & Agile Process",
        topics: ["Software Testing Life Cycle (STLC)", "Black Box & White Box Testing techniques", "Writing Test Cases & Test Scenarios", "Jira Bug Tracking & Severity/Priority matrix"]
      },
      {
        module: "Module 2: Selenium Automation with Java",
        topics: ["Java Programming for Testers", "Selenium Architecture & Locators (XPath, CSS)", "Handling Dropdowns, Alerts, Frames & Multi-Windows", "Actions Class & JavaScriptExecutor"]
      },
      {
        module: "Module 3: Automation Framework Design",
        topics: ["Page Object Model (POM) Design Pattern", "TestNG Annotations, Assertions & XML Suites", "Data-Driven Testing with Apache POI", "ExtentReports & Screenshot Capture on Failure"]
      },
      {
        module: "Module 4: API & Continuous Testing",
        topics: ["REST API Fundamentals & Status Codes", "Postman Collections & Automated Assertions", "Cucumber BDD Feature Files & Step Definitions", "Jenkins Automated Test Execution"]
      }
    ],
    careerRoles: ["Automation Test Engineer", "QA Analyst", "Software Tester", "SDET Specialist"]
  },
  {
    id: "tally-gst",
    title: "Tally Prime with GST, TDS & Corporate Accounting",
    category: "Finance & ERP",
    duration: "2 Months",
    mode: "Classroom (Avadi Hands-on Lab)",
    level: "Beginner to Professional",
    rating: 4.9,
    reviewsCount: 520,
    badge: "B.Com / Arts Favorite",
    fee: 18000,
    monthlyEmi: 1500,
    featured: false,
    description: "Industry-standard financial accounting, Inventory control, GST e-filing, e-Way bills, Payroll processing, TDS deduction, and audit preparation on the latest Tally Prime 4.0.",
    highlights: [
      "Official Tally Certification Exam Center in Avadi",
      "Real GST Billing & Invoicing cases for Chennai businesses",
      "Payroll & Salary Slip computation with PF/ESI",
      "Direct placement in Chartered Accountant (CA) firms & Corporates"
    ],
    tools: ["Tally Prime 4.0", "Advanced MS Excel", "GST Portal", "TDS Returns", "E-Way Bill System"],
    syllabus: [
      {
        module: "Module 1: Accounting Fundamentals & Company Creation",
        topics: ["Golden Rules of Accounting & Ledger Management", "Group Creation & Chart of Accounts", "Voucher Entry (Payment, Receipt, Sales, Purchase)", "Bank Reconciliation Statement (BRS)"]
      },
      {
        module: "Module 2: Inventory & Stock Management",
        topics: ["Stock Groups, Categories & Units of Measure", "Godown & Multi-Location Stock Transfer", "Purchase Orders & Sales Order Processing", "Reorder Levels & Stock Valuation methods"]
      },
      {
        module: "Module 3: GST (Goods & Services Tax) Implementation",
        topics: ["CGST, SGST, IGST Computation", "Tax Invoices, Credit Notes & Debit Notes", "GSTR-1, GSTR-3B Return Preparation", "Generating E-Invoices and E-Way Bills"]
      },
      {
        module: "Module 4: Payroll & Advance Financial Reports",
        topics: ["Employee Masters, Attendance & Leave tracking", "Salary Calculation, Pay slips, PF & ESI deductions", "Balance Sheet, Profit & Loss analysis", "Data Backup, Restore & Year-end Closing"]
      }
    ],
    careerRoles: ["Tally Accountant", "GST Executive", "Accounts Executive", "Billing Specialist"]
  }
];
