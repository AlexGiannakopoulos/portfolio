export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  status: 'active' | 'completed';
  badge: string;
  achievements: string[];
  skills: string[];
  metrics?: { label: string; value: string };
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  affiliation: string;
  period: string;
  location: string;
  description: string;
  highlight?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  architecture: string[];
  impact: string;
  tags: string[];
  status: 'PRODUCTION' | 'DEPLOYED' | 'RESEARCH';
}

export const PERSONAL_INFO = {
  fullName: "Alexandros - Nektarios Giannakopoulos",
  callsign: "A. GIANNAKOPOULOS",
  systemId: "SYS-ANG-2026",
  headline: "Data Scientist & Agentic AI Engineer",
  subHeadline: "MSc Data Analytics Candidate | Bridging Software Engineering, Agentic AI & Data Intelligence",
  email: "alexgiannakopoulos@hotmail.com",
  phone: "(+30) 6978847997",
  location: "Athens, Greece",
  linkedin: "https://linkedin.com/in/alexandros-giannakopoulos99",
  github: "https://github.com/AlexGiannakopoulos",
  resumePath: "./Alexandros-Nektarios-Giannakopoulos-CV.pdf",
  bio: `A Data Scientist MSc candidate with two years of experience bridging Software Engineering and Data Analytics. Specializes in identifying workflow inefficiencies, engineering automated solutions, and deploying production Agentic AI workflows. Engineered enterprise frameworks utilizing Microsoft Agentic Framework and MCP that eliminate manual overhead and deliver measurable business velocity.`,
};

export const QUANTIFIED_METRICS = [
  {
    id: "eff-boost",
    value: "+20%",
    label: "Team Efficiency Boost",
    subtext: "Agentic AI Automation for Banking Workflows",
    code: "METRIC_01_EFF",
  },
  {
    id: "bug-red",
    value: "-25%",
    label: "Post-Release Bug Reduction",
    subtext: "Systematic MCP & Automated Test Suites",
    code: "METRIC_02_REL",
  },
  {
    id: "time-save",
    value: "2+ Hrs",
    label: "Saved Daily Per Engineer",
    subtext: "Python Automation & CI/CD Pipeline Optimization",
    code: "METRIC_03_TIME",
  },
  {
    id: "pipeline-opt",
    value: "+30%",
    label: "CI/CD Speed Acceleration",
    subtext: "Engineered Bash Scripting & Delivery Pipelines",
    code: "METRIC_04_FLOW",
  },
];

export const WORK_EXPERIENCES: Experience[] = [
  {
    id: "ey-greece",
    role: "Data Scientist",
    company: "EY Greece",
    period: "March 2026 – Present",
    location: "Athens, Greece",
    status: "active",
    badge: "CURRENT ASSIGNMENT",
    metrics: { label: "Efficiency Boost", value: "+20%" },
    achievements: [
      "Engineered agentic AI applications with Microsoft Agentic Framework for a major banking client to automate complex enterprise workflows.",
      "Optimized project development procedures, boosting overall cross-functional team efficiency by 20%.",
      "Translated intricate business requirements into rigorous technical specifications, refining agentic workflows to maximize system reliability and throughput.",
      "Reviewed and evaluated critical project deliverables, ensuring high engineering quality and strict adherence to planned schedules.",
    ],
    skills: ["Microsoft Agentic Framework", "Python", "Agentic AI", "Enterprise Architecture", "Banking Automation", "Technical Specifications"],
  },
  {
    id: "omilia",
    role: "Delivery QA Engineer",
    company: "Omilia Ltd.",
    period: "October 2024 – March 2026",
    location: "Athens, Greece",
    status: "completed",
    badge: "COMPLETED MISSION",
    metrics: { label: "Bug Reduction", value: "-25%" },
    achievements: [
      "Authored and executed comprehensive test suites for new software features, resulting in a verified 25% reduction in post-release defects.",
      "Spearheaded a modern testing framework to utilize Model Context Protocol (MCP) for an innovative AI-assisted project.",
      "Re-engineered version control paradigms in Git, reducing merge conflicts and optimizing team branch management.",
      "Collaborated within a 6-person agile engineering squad to pioneer new testing methodologies and AI tooling integrations.",
      "Architected CI/CD delivery pipelines and automated Bash scripts, increasing pipeline throughput and execution efficiency by up to 30%.",
      "Developed robust Python automation scripts, eliminating manual testing bottlenecks and recovering up to 2 hours of daily engineering capacity.",
    ],
    skills: ["Model Context Protocol (MCP)", "Python", "CI/CD Automation", "Git Workflows", "Bash Scripting", "Agile QA", "Playwright"],
  },
  {
    id: "nyc-tech",
    role: "Information Technology Support Technician",
    company: "New York College",
    period: "December 2022 – July 2023",
    location: "Athens, Greece",
    status: "completed",
    badge: "FOUNDATIONAL IT",
    achievements: [
      "Delivered Tier-2 technical support for online classes, student portals, and optimized staff access across the college's e-learning infrastructure.",
      "Collaborated directly with college management to deploy, configure, and maintain hardware workstations across campus laboratories.",
      "Assessed and resolved hardware, software, and networking issues for over 500+ active students, faculty, and administrative staff members.",
    ],
    skills: ["IT Infrastructure", "E-Learning Systems", "Hardware Diagnostics", "Network Configuration", "Technical Support"],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "msc-data",
    degree: "MSc Data Analytics and Technologies",
    institution: "University of Greater Manchester (UK)",
    affiliation: "In attendance at New York College, Athens",
    period: "Nov. 2025 – Jan 2027",
    location: "Athens / United Kingdom",
    description: "Postgraduate focus on predictive modeling, enterprise data pipelines, deep learning architectures, statistical hypothesis testing, and CRISP-DM methodology.",
    highlight: "Active MSc Candidate",
  },
  {
    id: "bsc-comp",
    degree: "BSc (Hons) Computing (Data Analyst)",
    institution: "University of Greater Manchester (UK)",
    affiliation: "In attendance at New York College, Athens",
    period: "Oct. 2022 – May 2025",
    location: "Athens / United Kingdom",
    description: "Rigorous curriculum spanning algorithms, relational & NoSQL databases, object-oriented design patterns, distributed data systems, and machine learning analytics.",
    highlight: "Graduated with Honors",
  },
];

export const SPECIAL_ACADEMIC_CREDENTIALS = [
  {
    title: "University Validation Board Member",
    institution: "University of Greater Manchester & New York College",
    description: "Selected to participate in the formal academic validation process for the new MSc in Data Analytics and Technologies program.",
    stamp: "OFFICIAL VALIDATION BOARD",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Core",
    iconName: "Code2",
    skills: [
      { name: "Python", level: 95, highlight: true },
      { name: "SQL", level: 90, highlight: true },
      { name: "Java", level: 80 },
      { name: "C#", level: 78 },
      { name: "C++", level: 75 },
      { name: "Bash / Shell", level: 85 },
    ],
  },
  {
    category: "Data & Machine Learning",
    iconName: "BrainCircuit",
    skills: [
      { name: "PyTorch", level: 85, highlight: true },
      { name: "Pandas & NumPy", level: 95, highlight: true },
      { name: "Sentiment Analysis & NLP", level: 88, highlight: true },
      { name: "Web Scraping", level: 92 },
      { name: "Predictive Modeling", level: 86 },
      { name: "Matplotlib & Seaborn", level: 90 },
      { name: "CRISP-DM / KDD / SEMMA", level: 90 },
    ],
  },
  {
    category: "AI & Agentic Systems",
    iconName: "Cpu",
    skills: [
      { name: "Microsoft Agentic Framework", level: 92, highlight: true },
      { name: "Model Context Protocol (MCP)", level: 90, highlight: true },
      { name: "Autonomous Agent Workflows", level: 90, highlight: true },
      { name: "LLM Tool-Calling & Reasoning", level: 88 },
      { name: "Workflow Inefficiency Auditing", level: 94 },
    ],
  },
  {
    category: "Databases & Storage",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", level: 88, highlight: true },
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 82 },
      { name: "Neo4j (Graph DB)", level: 80, highlight: true },
      { name: "GraphQL", level: 78 },
      { name: "NoSQL Architecture", level: 84 },
    ],
  },
  {
    category: "DevOps & Tooling",
    iconName: "TerminalSquare",
    skills: [
      { name: "Git & Advanced Workflows", level: 92, highlight: true },
      { name: "Docker & Containers", level: 82 },
      { name: "CI/CD Pipeline Design", level: 88, highlight: true },
      { name: "Playwright Automation", level: 90 },
      { name: "Google Cloud Platform (GCP)", level: 78 },
      { name: "Postman & API Testing", level: 88 },
      { name: "VS Code / PyCharm / IntelliJ", level: 94 },
    ],
  },
  {
    category: "Methodologies & Soft Skills",
    iconName: "Boxes",
    skills: [
      { name: "Agile & Scrum Methodologies", level: 92 },
      { name: "Software Design Patterns", level: 88 },
      { name: "Analytical Problem Solving", level: 96, highlight: true },
      { name: "Technical Specifications & Docs", level: 92 },
      { name: "Cross-Functional Collaboration", level: 90 },
      { name: "Time & Sprint Management", level: 92 },
    ],
  },
];

export const SPOKEN_LANGUAGES = [
  { name: "Greek", proficiency: "Native Speaker", code: "EL", level: "Native" },
  { name: "English", proficiency: "Certificate of Proficiency in English (CPE / C2)", code: "EN", level: "Proficient C2" },
  { name: "French", proficiency: "DELF B2 (Independent User)", code: "FR", level: "Intermediate B2" },
];

export const FEATURED_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "cs-agentic-bank",
    title: "Enterprise Banking Agentic Automation",
    category: "Agentic AI & Orchestration",
    badge: "MISSION CRITICAL",
    status: "PRODUCTION",
    description: "Engineered autonomous agent workflows built on top of the Microsoft Agentic Framework for a major Greek financial banking institution to automate complex multi-step document verification and data extraction procedures.",
    architecture: [
      "Multi-agent task decomposition and state handoff",
      "Dynamic tool-calling with deterministic fallback safeguards",
      "High-throughput enterprise compliance checking",
      "20% verified reduction in end-to-end cycle times",
    ],
    impact: "+20% Total Team Velocity & 100% Audit Compliance",
    tags: ["Microsoft Agentic Framework", "Python", "Banking AI", "Process Optimization"],
  },
  {
    id: "cs-mcp-testing",
    title: "Model Context Protocol (MCP) Test Engine",
    category: "AI Testing & QA Automation",
    badge: "INNOVATION HARNESS",
    status: "DEPLOYED",
    description: "Spearheaded an automated QA testing engine integrating Anthropic's Model Context Protocol (MCP) to allow generative models and automated scripts to introspect backend services, generate targeted test fixtures, and validate release stability.",
    architecture: [
      "Custom MCP server bridging internal microservices to QA agents",
      "Automated test case generation with edge-case exploration",
      "Direct integration into Git CI/CD automated deployment triggers",
      "Saving up to 2 hours of repetitive manual testing daily",
    ],
    impact: "25% Post-Release Defect Reduction & 2h Daily Savings",
    tags: ["MCP Protocol", "Python", "CI/CD", "Automated QA", "Bash"],
  },
  {
    id: "cs-playwright-automation",
    title: "High-Throughput Web Scraping & Sentiment Matrix",
    category: "Data Engineering & NLP",
    badge: "ANALYTICS ENGINE",
    status: "PRODUCTION",
    description: "Engineered resilient data ingestion pipelines utilizing Playwright, BeautifulSoup, and Pandas to scrape dynamic web portals at scale, paired with PyTorch NLP models to analyze market sentiment trends.",
    architecture: [
      "Headless Playwright clusters bypassing complex anti-bot walls",
      "Structured ETL pipeline loading into PostgreSQL & Neo4j graph nodes",
      "Sentiment classification scoring pipeline with PyTorch",
      "Interactive telemetry and visual analytics reporting",
    ],
    impact: "Eliminated 10+ hours/week of manual web gathering",
    tags: ["PyTorch", "Playwright", "NLP", "Pandas", "PostgreSQL", "Neo4j"],
  },
];

export const TERMINAL_COMMANDS_HELP = [
  { cmd: "help", desc: "Display available telemetry commands" },
  { cmd: "whoami", desc: "Display operator identity & role specifications" },
  { cmd: "skills", desc: "List technical skills and proficiency indices" },
  { cmd: "experience", desc: "Print career timeline missions & achievements" },
  { cmd: "metrics", desc: "Display quantified efficiency telemetry" },
  { cmd: "education", desc: "Output academic degrees & certifications" },
  { cmd: "contact", desc: "Show communications channels and direct links" },
  { cmd: "download-cv", desc: "Initiate download of official PDF Resume" },
  { cmd: "clear", desc: "Flush CRT screen buffer" },
];
