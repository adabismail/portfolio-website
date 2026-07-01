export const personalInfo = {
  name: 'Adab Ismail',
  initials: 'AI',
  role: 'Software & Agentic AI Developer',
  location: 'NIT Srinagar, Jammu & Kashmir, India',
  email: 'adabismail000@gmail.com',
  github: 'https://github.com/adabismail',
  letterboxd: 'https://boxd.it/gZfLX',  
  linkedin: 'https://www.linkedin.com/in/adab-ismail-a276a6228',
  resume: 'https://drive.google.com/file/d/1PPkgTEUbtV18VGxWQXWtliyr0ylL6-Oh/view?usp=drivesdk',
  heroSummary:
    'Passionate technologist at NIT Srinagar, building intelligent systems at the intersection of agentic AI, full-stack engineering, and research.',
  aboutText: [
    'I am a Bachelor of Technology student at the National Institute of Technology Srinagar, specializing in Information Technology Engineering. My work sits at the intersection of software engineering, agentic AI, and applied research.',
    'I have a deep interest in designing intelligent systems — from building scalable full-stack applications to architecting RAG pipelines, multi-agent frameworks, and production-ready LLM integrations. I think carefully about both the engineering and the science behind what I build.',
    'My focus areas include Agentic AI, Retrieval-Augmented Generation (RAG), Machine Learning, Deep Learning, and modern web development. I believe in writing clean, purposeful code and in building things that actually work at scale.',
  ],
};

export const roles = [
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
    duration: 'Feb 2026 — Present',
    type: 'Internship',
    color: '#10b981',
    description: [
      'Built and maintained scalable Django + PostgreSQL applications, including an ERP system serving 500+ scholars and institutional staff.',
      'Developed a Django REST Framework admission platform that streamlined application processing for 4,000+ applicants through automated workflows and RESTful APIs',
      'Contributed to deep learning and computer vision research by developing, evaluating, and deploying machine learning models to support ongoing research initiatives.',
    ],
    tags: ['Python', 'Django', 'ReactJS', 'PosgreSQL', 'REST API Development', 'System Design', 'PyTorch', 'LLMs', 'Computer Vision'],
    iconImg: '/media/experience/gaash.jpg',
  },
  {
    id: 2,
    title: 'Computer Vision Research Intern',
    company: 'IIT Roorkee',
    shortCompany: 'IIT Roorkee',
    duration: 'Jan 2025 — Mar 2026',
    type: 'Internship',
    color: '#10b981',
    description: [
      'Designed and implemented a hybrid object detection model integrating ResNet-50 feature extraction with Vision Transformer (ViT) attention mechanisms.',
      'Improved detection performance to 0.813 mAP@0.5 and 88.4% precision, achieving stronger feature representation and classification accuracy.',
      'Outperformed the YOLOv5 baseline by +5.8% mAP and +4.2% F1-score through architecture optimization, training, and evaluation experiments.',
    ],
    tags: ['Deep Learning', 'Computer Vision', 'PyTorch', 'ViT', 'CNNs'],
    iconImg: '/media/experience/iit.jpg',
  },
  {
    id: 3,
    title: 'Frontend Development Intern',
    company: 'Traxevo Web Limited',
    shortCompany: 'Traxevo',
    duration: 'May 2026 — Present',
    type: 'Internship',
    color: '#10b981',
    description: [
      'Built high-performance React.js applications serving 15,000+ monthly users, reducing page load times by 40% through optimized Hooks, lazy loading, and efficient API integration.',
      'Developed reusable UI components and frontend architecture that improved development efficiency by 30% and accelerated feature delivery.',
      'Collaborated in Agile development cycles while ensuring responsive design, cross-browser compatibility, and a consistent user experience.',
    ],
    tags: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Performance Optimization'],
    iconImg: 'media/experience/traxevo.jpg',
  },
];

export const projects = [

      {
    id: 1,
    name: 'Hydra - MapReduce',
    tagline: 'Fault-Tolerant Distributed Processing Engine',
    description: 'A distributed MapReduce framework built in Python that processes large text datasets using a Master-Worker architecture. The system supports parallel task execution, heartbeat-based worker monitoring, automatic task reassignment on failures, file-based shuffle and reduce operations, and a React dashboard for real-time cluster monitoring and job tracking.',
    tech: ['Python', 'FastAPI', 'Uvicorn', 'Pydantic', 'React', 'Threading'],
    github: 'https://github.com/adabismail/hydra',
    demo: null,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    // Replace with: image: 
    image: '/media/projects/hydra.jpg',
  },

  {
    id: 2,
    name: 'ReviewFlow-AI',
    tagline: 'AI-Powered Review Automation',
    description:
      'AI Review Agent is a LangGraph-powered AI workflow that processes customer reviews, performs sentiment analysis, generates personalized responses, extracts key complaints from negative feedback, and automatically sends alert emails to businesses. The system uses conditional graph routing to dynamically choose execution paths based on sentiment, maintains audit logs for traceability, and leverages HuggingFace language models for cost-effective inference.',
    tech: ['Python', 'LangGraph', 'LangChain', 'LCEL', 'SMPT', 'HuggingFace'],
    github: 'https://github.com/adabismail/ReviewFlow-AI',
    demo: null,
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
    // Replace with: image: 
    image: '/media/projects/review.jpg',
  },

    {
    id: 3,
    name: 'LRU-cache',
    tagline: 'O(1) cache. HashMap + Doubly Linked List.',
    description: 'Implementation of a Least Recently Used (LRU) Cache in Python achieving O(1) time complexity for both get() and put() operations. Uses a HashMap for fast lookup and a Doubly Linked List to maintain usage order. Includes eviction logic, thread-safe extension, 15 unit tests, and a step-by-step visual demo tracing every cache operation.',
    tech: ['Python', 'HashMap', 'pytest', 'LRU Eviction', 'Thread safety'],
    github: 'https://github.com/adabismail/lru_cache',
    demo: null,
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
    image: '/media/projects/lru.jpg',
  },

  {
    id: 4,
    name: 'RISC-V Assembly Simulator',
    tagline: 'Visual RISC-V Simulation and Debugging',
    description: 'A lightweight RISC-V (RV32I) simulator built in Python with an integrated Tkinter GUI for writing, executing, and debugging assembly programs. The simulator supports core arithmetic, memory, and control-flow instructions, while providing instruction tracing, register visualization, memory state monitoring, and label-based branching to help users understand CPU execution and computer architecture concepts.',
    tech: [ 'Assembly', 'Python', 'RV32I', 'Tkinter'],
    github: 'https://github.com/adabismail/rv32i-simulator',
    demo: null,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    // Replace with: image: 
    image: '/media/projects/riscv.jpg',
  },

  {
    id: 5,
    name: 'FlightPulse',
    tagline: 'Real-time flight tracking and analytics',
    description:
      'A real-time flight monitoring dashboard that tracks live flight data, visualizes routes on interactive maps, and surfaces analytics around delays, carriers, and airport activity.',
    tech: ['Python', 'React18' , 'Django', 'PostgreSQL', 'Celery', 'Redis', 'Docker', 'Nginx'],
    github: 'https://github.com/adabismail',
    demo: null,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    image: '/media/projects/flightpulse.jpg',
  },

    {
    id: 6,
    name: 'Airline Fuel Optimization Agent',
    tagline: 'AI-driven flight optimization',
    description:
      'An AI-powered airline fuel optimization agent built with AWS Strands SDK and MCP that analyzes flight plans and live weather conditions to recommend fuel-efficient route and altitude adjustments. The system combines weather-aware reasoning, fuel consumption modeling, and agent-driven tool orchestration to generate actionable optimization recommendations and structured flight reports.',
    tech: ['Python', 'AWS Strands SDK', 'MCP', 'Ollama', 'Llama 3.1', 'Docker'],
    github: 'https://github.com/adabismail/Airline_optimization_Agent',
    demo: null,
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
    image: '/media/projects/airline.jpg',
  },



];

export const skills = {
  Frontend: {
    color: '#3b82f6',
    // Replace with: iconImg: '/media/skills/frontend.svg'
    iconImg: null,
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  Backend: {
    color: '#06b6d4',
    iconImg: null,
    items: ['Python', 'Django', 'Flask', 'FastAPI', 'REST APIs'],
  },
  'ML/DL': {
    color: '#f59e0b',
    iconImg: null,
    items: ['scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'PyTorch', 'Hugging Face', 'Transformers', 'CNNs'],
  },
  'Agentic AI': {
    color: '#f97316',
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
    color: '#10b981',
    iconImg: '/media/education/nit.jpg',
  },
  {
    id: 2,
    institution: 'Higher Secondary School, Nawakadal',
    shortName: 'Senior Secondary',
    degree: 'Class XII — Science Stream',
    field: 'Physics, Chemistry, Mathematics & Computer Science',
    duration: '2021 — 2023',
    grade: 'Distinction',
    description:
      'Completed higher secondary education with a focus on Mathematics and Computer Science, building a strong foundation in analytical thinking and problem solving.',
    color: '#10b981',
    iconImg: null,
  },
];
