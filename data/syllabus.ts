export interface SyllabusModule {
  id: number;
  title: string;
  description: string;
  topics: string[];
}

export const syllabusModules: SyllabusModule[] = [
  {
    id: 1,
    title: "Module 1 — Foundations & Environment Setup",
    description:
      "Start your journey by understanding how the web works and setting up your development environment.",
    topics: [
      "How the web works (HTTP, DNS, browsers)",
      "Command Line basics and navigation",
      "Installing Node.js, VS Code, and Git",
      "Navigating files and directories",
      "Running your first CLI project",
    ],
  },
  {
    id: 2,
    title: "Module 2 — HTML5 & CSS3 Essentials",
    description:
      "Master the building blocks of web pages with modern HTML and CSS techniques.",
    topics: [
      "Semantic HTML5 elements",
      "CSS fundamentals and selectors",
      "Box Model, positioning, and display",
      "Flexbox and CSS Grid layouts",
      "Responsive design and mobile-first approach",
    ],
  },
  {
    id: 3,
    title: "Module 3 — Git & GitHub",
    description:
      "Learn version control and collaboration workflows used by professional developers.",
    topics: [
      "Git basics and local repositories",
      "Commit workflow and best practices",
      "Branching and merging strategies",
      "Pull requests and code reviews",
      "Pushing to GitHub and writing clean commit messages",
    ],
  },
  {
    id: 4,
    title: "Module 4 — Modern JavaScript Essentials",
    description:
      "Build a strong foundation in JavaScript with modern ES6+ features and async programming.",
    topics: [
      "Variables, functions, and scope",
      "Arrays, objects, and destructuring",
      "Array methods: map, filter, reduce",
      "Async/await and Promises",
      "Fetch API and working with JSON",
    ],
  },
  {
    id: 5,
    title: "Module 5 — TypeScript for Web Developers",
    description:
      "Add type safety to your JavaScript code and catch errors before runtime.",
    topics: [
      "Basic types and type annotations",
      "Interfaces and type aliases",
      "Unions, intersections, and narrowing",
      "Function typing and generics",
      "TypeScript with DOM manipulation",
    ],
  },
  {
    id: 6,
    title: "Module 6 — React + TypeScript",
    description:
      "Build interactive user interfaces with React and TypeScript integration.",
    topics: [
      "Components, JSX, and props",
      "State management with useState",
      "Event handling and forms",
      "useEffect and lifecycle methods",
      "Context API and custom hooks",
      "Typing React components properly",
    ],
  },
  {
    id: 7,
    title: "Module 7 — Next.js 14 (App Router)",
    description:
      "Master the most modern React framework with server components and advanced routing.",
    topics: [
      "File-based routing and layouts",
      "Metadata and SEO optimization",
      "Server vs Client Components",
      "Modern data fetching patterns",
      "Caching strategies",
      "API routes and Server Actions",
    ],
  },
  {
    id: 8,
    title: "Module 8 — Tailwind CSS in Next.js",
    description:
      "Create beautiful, responsive designs rapidly with utility-first CSS.",
    topics: [
      "Configuring Tailwind in Next.js",
      "Design system basics (spacing, colors, fonts)",
      "Responsive utilities and breakpoints",
      "Custom configurations and themes",
      "Building reusable UI components",
    ],
  },
  {
    id: 9,
    title: "Module 9 — shadcn/ui Components",
    description:
      "Leverage a modern component library to build professional interfaces quickly.",
    topics: [
      "Installing and configuring shadcn/ui",
      "Theme customization",
      "Using buttons, inputs, and cards",
      "Dialogs, drawers, and modals",
      "Data tables and pagination",
      "Component composition best practices",
    ],
  },
  {
    id: 10,
    title: "Module 10 — Backend Development (Node.js + Express + MongoDB)",
    description:
      "Build robust REST APIs and manage databases for full-stack applications.",
    topics: [
      "REST API design principles",
      "Express routing and controllers",
      "Mongoose models and schemas",
      "CRUD operations",
      "Authentication with JWT",
      "Cookies and security basics",
      "API testing with Postman",
    ],
  },
  {
    id: 11,
    title: "Module 11 — AI Tools for Developers",
    description:
      "Supercharge your development workflow with AI-powered tools and automation.",
    topics: [
      "Figma Make workflows",
      "Generating pages with MGX",
      "Exporting React/Next.js code",
      "AI-powered debugging techniques",
      "Code refactoring with AI assistants",
      "Prompt engineering for developers",
    ],
  },
  {
    id: 12,
    title: "Module 12 — Testing & Clean Code",
    description:
      "Write maintainable, tested code that follows industry best practices.",
    topics: [
      "Clean code principles",
      "ESLint and Prettier configuration",
      "Unit testing with Jest",
      "Component testing with React Testing Library",
      "Introduction to E2E testing (Playwright/Cypress)",
      "Code review best practices",
    ],
  },
  {
    id: 13,
    title: "Module 13 — Deployment & Capstone Project",
    description:
      "Deploy your applications to production and build a complete full-stack SaaS project.",
    topics: [
      "Deploying Next.js to Vercel",
      "Deploying APIs to Railway/Render",
      "Environment variables and secrets",
      "CI/CD pipelines",
      "Building a full-stack SaaS capstone project",
      "Project presentation and portfolio building",
    ],
  },
];
