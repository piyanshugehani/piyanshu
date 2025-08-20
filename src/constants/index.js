import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];
const technologies = {
  languages: [
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Django",
      icon: "/assets/tech/django.svg",
      link: "https://django.com/",
    },
    {
      name: "Flask",
      icon: "/assets/tech/flask.svg",
      link: "https://flask.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/three.png",
      link: "https://threejs.org",
    },
    {
      name: "Framer",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "Auth",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    }
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Gitlab",
      icon: "/assets/tech/gitlab.svg",
      link: "https://gitlab.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "Yarn",
      icon: "/assets/tech/yarn.svg",
      link: "https://yarnpkg.com/",
    },
    {
      name: "Vite",
      icon: "/assets/tech/vite.svg",
      link: "https://yarnpkg.com/",
    },
  ],
  databases: [
    {
      name: "Postgres",
      icon: "/assets/tech/postgresql.svg",
      link: "https://www.postgres.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
  ],
  aiml: [
    {
      name: "NumPy",
      icon: "/assets/tech/numpy.svg",
      link: "https://numpy.org/",
    },
    {
      name: "Pandas",
      icon: "/assets/tech/pandas.svg", 
      link: "https://pandas.pydata.org/",
    },
    {
      name: "scikit-learn",
      icon: "/assets/tech/scikit-learn.svg",
      link: "https://scikit-learn.org/",
    },
    {
      name: "Seaborn",
      icon: "/assets/tech/seaborn.svg",
      link: "https://seaborn.pydata.org/",
    },
    {
      name: "PyTorch",
      icon: "/assets/tech/pytorch.svg",
      link: "https://pytorch.org/",
    },
    {
      name: "TensorFlow",
      icon: "/assets/tech/tensorflow.svg",
      link: "https://www.tensorflow.org/",
    },
    {
      name: "Transformers",
      icon: "/assets/tech/transformers.png",
      link: "https://huggingface.co/docs/transformers/",
    },
    {
      name: "LangChain",
      icon: "/assets/tech/langchain.svg",
      link: "https://www.langchain.com/",
    },
    {
      name: "OpenCV",
      icon: "/assets/tech/opencv.svg",
      link: "https://opencv.org/",
    }
  ]
};

const experiences = [
  {
    title: "Lead Software Developer Engineer (Hybrid)",
    company_name: "KothariTech Pvt Ltd",
    // icon: kotharitech, // You might need to provide this icon or adjust accordingly
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Solely developed Lofaz's seller and admin panels using React.js, Redux Toolkit, and Material-UI, supporting 3000+ active users",
      "Integrated 25+ data pipelines and implemented OTP-based login via Firebase, improving system reliability by 40% with features like pagination and URL syncing",
      "Built live analytics dashboard using Recharts and Thunk Middleware with loading skeletons and periodic API polling for real-time stats, and optimized product catalog views with MUI tables and advanced filtering capabilities to handle high monthly order volumes",
      "Reduced load times by 55% through bug fixes, lazy-loading implementation, and API call optimization while managing agile sprints via Slack and GitLab"
    ],
  },
  {
    title: "Web Development (Internship)",
    company_name: "Cognifyz Technologies",
    // icon: cognifyz, // Adjust accordingly for the icon
    iconBg: "#E6DEDD",
    date: "March 2024 - April 2024",
    points: [
      "Contributed to multiple projects as a frontend developer, including creation of landing pages.",
      "Leveraged expertise in CSS and JavaScript to develop visually appealing and responsive UIs.",
      "Demonstrated strong problem-solving skills and attention to detail in UI development and project execution."
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const projects = [
{
    name: "Gyaansarthi.ai",
    description:
      "EdConnect platform enabling volunteer-student connections with live video sessions, interactive whiteboards, and recommendation engine, and an automated meeting notes generation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "zegocloud",
        color: "yellow-text-gradient",
      },
    ],
    image: '/assets/proj/gyaansarthi.png',
    source_code_link: "https://github.com/piyanshugehani/ubs-hack",
  },
{
    name: "CARE - Critical AI Response Engine App",
    description:
      "Built an emergency response system (mobile app) with WebSocket integration, map-based tracking and real-time emergency analytics.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: '/assets/proj/care.png',
    source_code_link: "https://github.com/piyanshugehani/care",
  },
  {
    name: "Lofaz Sellers",
    description:
      "A robust e-commerce platform developed for a startup, offering comprehensive solutions for product management, order handling, and sales analytics, similar to Shopify.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest-framework",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
    ],
    image: '/assets/proj/lofaz.png', // Replace with your actual image variable
    source_code_link: "https://seller.lofaz.com", // Add your actual link here
  },
   {
    name: "AI-PrepGem",
    description:
      "An AI-driven interviewer platform for students and professionals to practice real-time interviews tailored to specific roles, with instant feedback and detailed performance analysis.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
      {
        name: "drizzle",
        color: "pink-text-gradient",
      },
    ],
    image: '/assets/proj/prepgem.png', // Replace with your actual image variable
    source_code_link: "https://github.com/piyanshugehani/AI-PrepGem", // Add your actual link here
  },
  {
    name: "Dazzle Consultancy",
    description: "A freelance project delivering a modern consultancy website with engaging Framer Motion and GSAP animations, built with Next.js and integrated SMTP email functionality.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "framer",
        color: "green-text-gradient"
      },
      {
        name: "gsap",
        color: "pink-text-gradient"
      },
      {
        name: "vercel",
        color: "yellow-text-gradient"
      }
    ],
    image: "/assets/proj/dazzle.png", // Replace with your actual image variable
    source_code_link: "https://www.dazzleconsultancy.com/" // Add your actual link here
  },
   {
    name: "SplitIt",
    description:
      "An open-source Progressive Web App designed to simplify expense management with features like unequal/equal splitting, expense tracking, and integrated payment gateways.",
    tags: [
      {
        name: "pwa",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "xampp",
        color: "yellow-text-gradient",
      },
    ],
    image: '/assets/proj/split.png', // Replace with your actual image variable
    source_code_link: "https://github.com/piyanshugehani/SplitIt", // Add your actual link here
  },
  {
    name: "PetSmart",
    description:
      "An all-in-one app that simplifies pet ownership by providing intuitive pet profiles, booking vet appointments, tracking pet locations, and finding nearby pet stores.",
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "mongoose",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: '/assets/proj/pet.png', // Replace with your actual image variable
    source_code_link: "https://github.com/piyanshugehani/petSmart", // Add your actual link here
  },
 
  
 
{
    name: "Hybrid API Logs Classification",
    description:
      "A hybrid log classification system using Regex, BERT, and LLM-based prompts to classify structured and ambiguous logs.",
    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "bert",
        color: "green-text-gradient",
      },
      {
        name: "llama",
        color: "pink-text-gradient",
      },
      {
        name: "streamlit",
        color: "yellow-text-gradient",
      },
    ],
    image: '/assets/proj/api.png',
    source_code_link: "https://github.com/piyanshugehani/hybrid-logs-classification",
  },
  {
    name: "Resto",
    description:
      "A food restaurant website developed using Django, offering seamless browsing, detailed menus, online reservations, and integrated customer reviews.",
    tags: [
      {
        name: "rest-framework",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
    ],
    image: '/assets/proj/resto.png', // Replace with your actual image variable
    source_code_link: "https://github.com/piyanshugehani/Restro", // Add your actual link here
  },
  
  
];


export { services, technologies, experiences, testimonials, projects };
