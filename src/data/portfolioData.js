export const personalInfo = {
  name: 'Adab Ismail',
  initials: 'AI',
  role: 'Software Engineer & Agentic AI Developer',
  location: 'NIT Srinagar, Jammu & Kashmir, India',
  email: 'adabismail000@gmail.com',
  github: 'https://github.com/adabismail',
  linkedin: 'https://www.linkedin.com/in/adab-ismail-a276a6228',
  resume: 'https://drive.google.com/file/d/1ftMyF-r__0tcWj24-JQuSki4lNUr09G4/view?usp=drivesdk',
  heroSummary:
    'Passionate technologist at NIT Srinagar, building intelligent systems at the intersection of agentic AI, full-stack engineering, and research.',
  aboutText: [
    'I am a Bachelor of Technology student at the National Institute of Technology Srinagar, specializing in Information Technology Engineering. My work sits at the intersection of software engineering, agentic AI, and applied research.',
    'I have a deep interest in designing intelligent systems — from building scalable full-stack applications to architecting RAG pipelines, multi-agent frameworks, and production-ready LLM integrations. I think carefully about both the engineering and the science behind what I build.',
    'My focus areas include Agentic AI, Retrieval-Augmented Generation (RAG), Machine Learning, Deep Learning, and modern web development. I believe in writing clean, purposeful code and in building things that actually work at scale.',
  ],
};

export const roles = [
  'a Software Engineer',
  'an Agentic AI Developer',
  'a Full Stack Developer',
  'a Research Enthusiast',
];

export const experiences = [
  {
    id: 1,
    title: 'Development and Research Assistant',
    company: 'GAASH Lab, NIT Srinagar',
    shortCompany: 'NIT Srinagar',
    duration: 'Jun 2024 — Present',
    type: 'Research',
    color: '#6366f1',
    description: [
      'Researching RAG architectures and multi-agent LLM systems for intelligent information retrieval.',
      'Designing vector embedding pipelines using Pinecone and FAISS for semantic search applications.',
      'Exploring agentic workflows with LangChain and LlamaIndex for autonomous task execution.',
    ],
    tags: ['RAG', 'LangChain', 'Pinecone', 'Python', 'LLMs'],
  },
  {
    id: 2,
    title: 'Computer Vision Research Intern',
    company: 'IIT Roorkee',
    shortCompany: 'IIT Roorkee',
    duration: 'Jan 2025 — Mar 2026',
    type: 'Internship',
    color: '#06b6d4',
    description: [
      'Built and shipped full-stack features across React frontend and Node.js / FastAPI backends.',
      'Designed RESTful APIs and integrated third-party services including payment and auth providers.',
      'Improved application performance by 40% through query optimization and caching strategies.',
    ],
    tags: ['React', 'Node.js', 'FastAPI', 'MongoDB', 'REST API'],
  },
  {
    id: 3,
    title: 'Open Source Contributor',
    company: 'Independent / Community Projects',
    shortCompany: 'Open Source',
    duration: '2023 — Present',
    type: 'Volunteer',
    color: '#10b981',
    description: [
      'Contributing to AI/ML open source repositories including tooling for LLM evaluation and agent testing.',
      'Maintaining personal open source projects with active community engagement on GitHub.',
      'Writing technical documentation and guides for developer-facing AI tools.',
    ],
    tags: ['Python', 'AI/ML', 'GitHub', 'Documentation'],
  },
];

export const projects = [
  {
    id: 1,
    name: 'Personal Memory OS',
    tagline: 'AI-powered memory and knowledge management system',
    description:
      'A personal memory operating system that captures, organizes, and retrieves information intelligently using RAG pipelines, vector embeddings, and an LLM layer for semantic querying.',
    tech: ['React', 'FastAPI', 'LangChain', 'Pinecone', 'OpenAI', 'PostgreSQL'],
    github: 'https://github.com/adabismail',
    demo: null,
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    // Replace with: image: '/media/projects/memory-os.jpg'
    image: null,
  },
  {
    id: 2,
    name: 'CRM Lite',
    tagline: 'Lightweight CRM built for small teams',
    description:
      'A clean, minimal CRM system for small businesses to manage contacts, track deals, log interactions, and get pipeline visibility — all without the complexity of enterprise tools.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/adabismail',
    demo: null,
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
    // Replace with: image: '/media/projects/crm-lite.jpg'
    image: null,
  },
  {
    id: 3,
    name: 'FlightPulse',
    tagline: 'Real-time flight tracking and analytics',
    description:
      'A real-time flight monitoring dashboard that tracks live flight data, visualizes routes on interactive maps, and surfaces analytics around delays, carriers, and airport activity.',
    tech: ['React', 'Python', 'FastAPI', 'WebSockets', 'Leaflet.js', 'Redis'],
    github: 'https://github.com/adabismail',
    demo: null,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    // Replace with: image: '/media/projects/flightpulse.jpg'
    image: null,
  },
  {
    id: 4,
    name: 'Job Tracker + Resume Analyzer',
    tagline: 'AI-assisted job search management',
    description:
      'An intelligent job application tracker that analyzes resumes against job descriptions using NLP, scores match quality, highlights skill gaps, and helps optimize applications.',
    tech: ['React', 'FastAPI', 'OpenAI', 'spaCy', 'SQLite', 'Python'],
    github: 'https://github.com/adabismail',
    demo: null,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    // Replace with: image: '/media/projects/job-tracker.jpg'
    image: null,
  },
  // ── Add more projects below this line ──────────────────────────
  {
    id: 5,
    name: 'Project Name',
    tagline: 'Short tagline here',
    description: 'Description of the project.',
    tech: ['Tech1', 'Tech2'],
    github: 'https://github.com/adabismail',
    demo: null,
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    image: '/media/projects/project5.jpg',
  },
];

export const skills = {
  Frontend: {
    color: '#6366f1',
    // Replace with: iconImg: '/media/skills/frontend.svg'
    iconImg: null,
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  Backend: {
    color: '#06b6d4',
    iconImg: null,
    items: ['Python', 'Django', 'Flask', 'FastAPI', 'REST APIs', 'GraphQL'],
  },
  'Machine Learning': {
    color: '#f59e0b',
    iconImg: null,
    items: ['scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'XGBoost'],
  },
  'Deep Learning': {
    color: '#ef4444',
    iconImg: null,
    items: ['PyTorch', 'TensorFlow', 'Keras', 'Hugging Face', 'Transformers', 'CNNs'],
  },
  'Agentic AI': {
    color: '#8b5cf6',
    iconImg: null,
    items: ['LangChain', 'LlamaIndex', 'AutoGen', 'OpenAI API', 'RAG Systems', 'Vector DBs', 'Prompt Engineering'],
  },
  Databases: {
    color: '#10b981',
    iconImg: null,
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Pinecone', 'FAISS', 'SQLite'],
  },
  Tools: {
    color: '#64748b',
    iconImg: null,
    items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Postman', 'Linux', 'Figma', 'Jupyter'],
  },
};

export const education = [
  {
    id: 1,
    institution: 'National Institute of Technology Srinagar',
    shortName: 'NIT Srinagar',
    degree: 'Bachelor of Technology',
    field: 'Information Technology Engineering (ITE)',
    duration: '2023 — 2027',
    grade: 'In Progress',
    description:
      'Studying core computer science fundamentals, data structures, algorithms, and advanced topics in AI/ML. Actively involved in research projects, coding clubs, and technical communities.',
    color: '#6366f1',
    // Replace with: iconImg: '/media/education/nit-srinagar.png'
    iconImg: null,
  },
  {
    id: 2,
    institution: 'Higher Secondary Education',
    shortName: 'Senior Secondary',
    degree: 'Class XII — Science Stream',
    field: 'Physics, Chemistry, Mathematics & Computer Science',
    duration: '2020 — 2023',
    grade: 'Distinction',
    description:
      'Completed higher secondary education with a focus on Mathematics and Computer Science, building a strong foundation in analytical thinking and problem solving.',
    color: '#06b6d4',
    // Replace with: iconImg: '/media/education/school.png'
    iconImg: null,
  },
];
