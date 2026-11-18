export interface Project {
  id: string;
  title: string;
  tagline: string;
  chips: string[];
  description: string;
  problem: string;
  approach: string;
  result: string;
  repoUrl: string;
  demoUrl?: string;
  imageAlt: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Brain' | 'Sparkles' | 'BarChart3' | 'Layout';
  highlights: string[];
}

export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'experience' | 'education';
  score?: string;
  bullets?: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badgeText?: string;
}

export interface ActivityItem {
  id: string;
  role: string;
  club: string;
  period: string;
  detail: string;
}

export const portfolioData = {
  profile: {
    name: "Kajal Mohapatra",
    shortName: "Kajal",
    logoMark: "K.",
    roleTagline: "AI/ML Engineer in the making",
    heroTitleLine1: "HI! I'M KAJAL.",
    heroTitleLine2: "I BUILD ML & GEN-AI APPS.",
    heroSubcopy: "CS undergrad (AI & ML) at VSSUT building machine learning apps, RAG systems and data dashboards with Python. Open to AI/ML, Data Science & Software internships.",
    aboutHeading: "I TURN DATA INTO WORKING AI PRODUCTS",
    aboutSummary: "Computer Science Engineering undergraduate (AI & ML specialization) at VSSUT Burla with hands-on experience developing end-to-end machine learning web applications, building local RAG tutoring systems, and conducting defence computational imaging research during a DRDO internship. Focused on building practical, high-impact intelligent systems.",
    email: "kajal.mohapatraa@gmail.com",
    phone: "+91-8917385557",
    location: "Odisha, India",
    resumePdfUrl: "/Kajal_Mohapatra_Resume.pdf",
    githubUrl: "https://github.com/Kajal-0311",
    linkedinUrl: "https://linkedin.com/in/kajal-mohapatra-286554308",
    avatarUrl: "/kajal-photo.jpg",
  },

  stats: [
    {
      value: "8.53",
      label: "CGPA at VSSUT Burla",
      subtext: "B.Tech CSE (AI & ML)",
    },
    {
      value: "3",
      label: "Engineered Projects",
      subtext: "ML, RAG & Quantum Simulation",
    },
    {
      value: "11",
      label: "Course IBM Certificate",
      subtext: "Data Analyst Professional",
    },
  ],

  techMarquee: [
    "Python",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "SQL",
    "LangChain",
    "Ollama",
    "ChromaDB",
    "Streamlit",
    "Git/GitHub",
    "Llama 3",
    "SciPy",
    "Matplotlib",
    "MySQL",
    "Joblib",
  ],

  projects: [
    {
      id: "vendor-invoice-intelligence",
      title: "Vendor Invoice Intelligence Portal",
      tagline: "Freight cost regression + Random Forest invoice-risk flagging with interactive Streamlit dashboard.",
      chips: ["Scikit-learn", "Pandas", "SQL", "Streamlit", "Joblib", "Python"],
      badge: "Full-Stack ML App",
      description: "End-to-end machine learning application that predicts freight shipping costs via regression and classifies invoice anomaly risks with a tuned Random Forest model.",
      problem: "Logistics companies face revenue leaks and delays from manual invoice verification and volatile, unstandardized freight costs.",
      approach: "Engineered invoice-risk labels from invoice-value discrepancies and receiving-delay rules; implemented preprocessing, standardization, and train-test validation. Tuned Random Forest with GridSearchCV (F1-score-based cross-validation) and evaluated models with regression & classification metrics.",
      result: "Architected a full-stack ML pipeline: backend serialization with Joblib for models and scalers, wired directly to a real-time Streamlit dashboard.",
      repoUrl: "https://github.com/Kajal-0311/vendor-invoice-intelligence-portal", // TODO(kajal): update repository URL if different
      demoUrl: "https://vendor-invoice-portal.streamlit.app/", // TODO(kajal): update live Streamlit URL
      imageAlt: "Vendor Invoice Intelligence Portal architecture and dashboard preview",
    },
    {
      id: "agentic-rag-tutor",
      title: "Agentic AI-Powered RAG Tutor",
      tagline: "Fully offline AI tutor on Llama 3 via Ollama, LangChain + ChromaDB semantic retrieval.",
      chips: ["LangChain", "Ollama", "ChromaDB", "Streamlit", "PyPDF", "nomic-embed-text"],
      badge: "Local Gen-AI",
      description: "Zero-cloud, privacy-preserving Retrieval-Augmented Generation tutoring system answering complex queries from Python course materials completely on local hardware.",
      problem: "Cloud-hosted LLMs compromise privacy, incur recurrent API costs, and require internet access for educational environments.",
      approach: "Extracted and structured course textbooks with PyPDF, generated dense vector embeddings using nomic-embed-text, indexed vectors in ChromaDB, and orchestrated prompt retrieval through LangChain into a local Llama 3 instance via Ollama.",
      result: "Delivered context-aware technical explanations and coding hints via a responsive Streamlit UI with zero external network dependencies.",
      repoUrl: "https://github.com/Kajal-0311/agentic-rag-tutor", // TODO(kajal): update repository URL if different
      demoUrl: "https://github.com/Kajal-0311/agentic-rag-tutor#demo", // TODO(kajal): update demo URL
      imageAlt: "Agentic AI-Powered RAG Tutor retrieval pipeline and interface",
    },
    {
      id: "quantum-imaging-rescue",
      title: "Quantum Imaging for Disaster Search & Rescue",
      tagline: "Computational ghost-imaging simulation under weak, noisy signals in low-visibility environments.",
      chips: ["Python", "NumPy", "SciPy", "Matplotlib", "Statistical Correlation"],
      badge: "Research Simulation",
      description: "Python-based computational ghost-imaging framework to reconstruct images under degraded signal conditions using random illumination patterns and correlation algorithms.",
      problem: "Optical sensors fail in smoke, dust, and heavy fog during disaster recovery operations due to intense light scattering.",
      approach: "Simulated spatial light modulation patterns, collected bucket detector single-pixel measurements, and reconstructed 2D spatial objects using second-order Pearson correlation algorithms across noisy signals.",
      result: "Evaluated reconstruction fidelity versus measurement count curves, providing computational verification for emergency vision systems.",
      repoUrl: "https://github.com/Kajal-0311/quantum-imaging-rescue", // TODO(kajal): update repository URL if different
      demoUrl: "https://github.com/Kajal-0311/quantum-imaging-rescue#results", // TODO(kajal): update demo/report URL
      imageAlt: "Quantum Ghost Imaging correlation reconstruction simulation",
    },
  ] as Project[],

  services: [
    {
      id: "ml",
      title: "Machine Learning",
      iconName: "Brain",
      description: "Developing robust predictive models with rigorous data preprocessing, feature engineering, and hyperparameter optimization.",
      highlights: [
        "Regression & Classification",
        "GridSearchCV & Cross-Validation",
        "Feature Scaling & Preprocessing",
        "Scikit-learn & Joblib Serialization",
      ],
    },
    {
      id: "gen-ai",
      title: "Generative AI & RAG",
      iconName: "Sparkles",
      description: "Architecting local and production-grade Retrieval-Augmented Generation pipelines with vector databases and prompt engineering.",
      highlights: [
        "Offline RAG with Ollama & Llama 3",
        "Vector Search with ChromaDB",
        "LangChain Pipeline Orchestration",
        "Embedding Models (nomic-embed-text)",
      ],
    },
    {
      id: "analytics",
      title: "Data Analytics & SQL",
      iconName: "BarChart3",
      description: "Transforming raw data into clear business intelligence with SQL queries, statistical validation, and clean visualizations.",
      highlights: [
        "IBM Certified Data Analyst (11 Courses)",
        "Complex SQL Queries & Joins",
        "Data Wrangling with Pandas & NumPy",
        "Statistical Testing & Correlation",
      ],
    },
    {
      id: "web-apps",
      title: "Python Web Apps",
      iconName: "Layout",
      description: "Building interactive, user-facing data applications and model inference interfaces with rapid deployment workflows.",
      highlights: [
        "Streamlit Application Dashboards",
        "Model Inference Integration",
        "Clean, Intuitive UI Layouts",
        "Full-Stack Python Prototyping",
      ],
    },
  ] as ServiceItem[],

  timeline: [
    {
      id: "drdo",
      period: "18 May 2026 – 17 Jun 2026",
      role: "DRDO Intern – Virtual Reality Team",
      organization: "Defence Research and Development Organisation (DRDO) — PXE",
      location: "Chandipur, Odisha",
      type: "experience",
      bullets: [
        "Gained research exposure at a premier defence research establishment while working on Quantum Illumination and Image Reconstruction using Correlation Analysis.",
        "Implemented and analyzed Python-based image reconstruction simulations, using correlation analysis to assess reconstruction quality.",
      ],
    },
    {
      id: "btech",
      period: "2024 – 2028",
      role: "B.Tech in Computer Science & Engineering (AI & ML)",
      organization: "Veer Surendra Sai University of Technology (VSSUT)",
      location: "Burla, Odisha",
      type: "education",
      score: "CGPA: 8.53",
      bullets: [
        "Specializing in Artificial Intelligence and Machine Learning.",
        "Core coursework: Data Structures, Machine Learning, Operating Systems, Database Management Systems, Theory of Computation.",
      ],
    },
    {
      id: "intermediate",
      period: "2023",
      role: "Higher Secondary / Intermediate (CHSE, Odisha)",
      organization: "Council of Higher Secondary Education",
      location: "Odisha, India",
      type: "education",
      score: "89.67%",
    },
    {
      id: "secondary",
      period: "2021",
      role: "Secondary School Examination (BSE, Odisha)",
      organization: "Board of Secondary Education",
      location: "Odisha, India",
      type: "education",
      score: "90.67%",
    },
  ] as TimelineItem[],

  skillGroups: [
    {
      category: "Programming Languages",
      skills: ["Python", "SQL", "C", "C++", "JavaScript"],
    },
    {
      category: "ML & Data Science",
      skills: [
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Regression",
        "Classification",
        "Data Preprocessing",
        "Feature Scaling",
        "Model Evaluation",
        "GridSearchCV",
      ],
    },
    {
      category: "Generative AI & RAG",
      skills: [
        "Retrieval-Augmented Generation (RAG)",
        "LangChain",
        "Ollama",
        "Llama 3",
        "ChromaDB",
        "PyPDF",
        "Embeddings (nomic-embed-text)",
      ],
    },
    {
      category: "Tools & Deployment",
      skills: ["Streamlit", "Git", "GitHub", "VS Code", "Joblib"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "SQL", "ChromaDB"],
    },
    {
      category: "Computational Research",
      skills: [
        "Computational Ghost Imaging",
        "Statistical Correlation",
        "Pearson Correlation",
        "Matplotlib",
        "SciPy",
      ],
    },
  ] as SkillGroup[],

  certifications: [
    {
      id: "ibm-data-analyst",
      title: "IBM Data Analyst Professional Certificate",
      issuer: "Coursera · IBM",
      date: "Feb 2026",
      badgeText: "11-Course Specialization",
      credentialUrl: "https://www.coursera.org/professional-certificates/ibm-data-analyst", // TODO(kajal): update with your personal certificate verification link
    },
    {
      id: "drdo-cert",
      title: "Internship Training Certificate",
      issuer: "DRDO PXE Chandipur, Government of India",
      date: "Jun 2026",
      badgeText: "Defence Research",
    },
  ] as CertificationItem[],

  activities: [
    {
      id: "enigma",
      role: "AI/ML Domain Member",
      club: "ENIGMA — The Coding Club, VSSUT",
      period: "2025 – Present",
      detail: "Active member in the Machine Learning domain, collaborating on AI workshops, competitive coding, and peer mentorship.",
    },
    {
      id: "ieee",
      role: "Web Development Member",
      club: "IEEE Student Branch VSSUT",
      period: "2025 – Present",
      detail: "Co-hosted and organized the 'Binary Battle' flagship competitive technical event during IEEE Day celebration.",
    },
  ] as ActivityItem[],

  contact: {
    heading: "LET'S BUILD SOMETHING TOGETHER",
    subheading: "Whether you have an internship opportunity, a project to collaborate on, or just want to chat about AI/ML and RAG pipelines — my inbox is always open.",
    formspreeEndpoint: "https://formspree.io/f/kajal-contact", // TODO(kajal): replace with your Formspree ID or VITE_FORMSPREE_ID
  },
};
