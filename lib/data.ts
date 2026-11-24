// EDIT ME: leave a value empty ("") and the site shows it as "coming soon" instead of a fake link.
export const profile = {
  name: "Mohd Saquib Mohd Aarif",
  email: "mohdsaqib9253@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohd-saquib-ab49b438a/",
  github: "https://github.com/Saquib786786",
  resume: "/Saquib_resume.pdf",
  location: "Mumbai, Maharashtra, India",
  headline: "Technical SEO & Web Performance Engineer | Generative Engine Optimization (GEO & AEO) Specialist in Mumbai",
  currentRole: "Software Engineer at Nexcore Alliance LLP (Mumbai)",
  education: "TY BSc IT (Third Year Bachelor of Science in Information Technology)",
  availability: "Available for full-time Technical SEO / Software Engineering roles & select consulting (Core Web Vitals tuning, GEO/AEO implementation & Technical Audits) in Mumbai & Remote",
};

export type StatMetric = {
  value: string;
  label: string;
  detail: string;
};

export const verifiedMetrics: StatMetric[] = [
  {
    value: "95+",
    label: "Core Web Vitals & Lighthouse Scores",
    detail: "Optimized LCP, CLS, and INP metrics across live production builds, eliminating render-blocking bottlenecks.",
  },
  {
    value: "100%",
    label: "Structured Data & Schema Coverage",
    detail: "Architected comprehensive JSON-LD graphs, semantic HTML, and llms.txt manifests for deep AEO & GEO indexation.",
  },
  {
    value: "45+",
    label: "Optimized REST API Endpoints",
    detail: "Streamlined payload schemas, response latencies, and edge caching strategies tested with Postman collections.",
  },
  {
    value: "3.5x",
    label: "Organic Visibility & AI Discoverability",
    detail: "Implemented end-to-end Technical SEO, Generative Engine (GEO), and Answer Engine (AEO) optimizations on live apps.",
  },
];

export type FAQItem = {
  q: string;
  a: string;
};

export const recruiterFaqs: FAQItem[] = [
  {
    q: "Who is Mohd Saquib Mohd Aarif?",
    a: "Mohd Saquib Mohd Aarif is a Mumbai-based Technical SEO & Web Performance Engineer and Generative Engine Optimization (GEO/AEO) specialist. Currently engineering at Nexcore Alliance LLP (Mumbai), he builds fast Next.js applications with 100/100 Core Web Vitals, rich Schema.org JSON-LD graphs, and deep search indexability across Google and AI search engines.",
  },
  {
    q: "Looking for a Technical SEO and Web Performance Specialist in Mumbai?",
    a: "Yes. Mohd Saquib specializes in Technical SEO, Core Web Vitals (sub-second LCP, zero CLS), and modern Generative Engine Optimization (GEO/AEO) for businesses, startups, and agencies in Mumbai and remote globally. He implements structured JSON-LD schemas, robots.txt directives, and llms.txt manifests.",
  },
  {
    q: "What is Generative Engine Optimization (GEO) & AEO, and how does Mohd Saquib implement it?",
    a: "GEO and AEO optimize web content and data structures so AI search engines (like Google AI Overviews, Perplexity, ChatGPT, and Claude) cite the business as a direct authoritative source. Saquib implements this through entity-disambiguated Schema.org graphs, llms.txt manifests, semantic HTML, and bot crawl budget governance.",
  },
  {
    q: "What technical competencies and tools does Mohd Saquib specialize in?",
    a: "He specializes in Next.js (App Router, SSR, SSG), TypeScript, React, Tailwind CSS, Core Web Vitals (LCP, CLS, INP, TTFB), Schema.org JSON-LD architecture, RESTful API design, Postman validation, and modern technical search analytics.",
  },
  {
    q: "Can Mohd Saquib audit or optimize my existing website for speed and Google AI visibility?",
    a: "Yes. Saquib offers technical audits covering Core Web Vitals profiling, render-blocking elimination, Schema.org entity graphs, crawl budget optimization, and GEO/AEO readiness for Google AI Overviews and Perplexity.",
  },
  {
    q: "How can recruiters and engineering managers contact Mohd Saquib?",
    a: "You can reach him directly via email at mohdsaqib9253@gmail.com, via LinkedIn at linkedin.com/in/mohd-saquib-ab49b438a, or on GitHub at github.com/Saquib786786.",
  },
];
export type Project = { id: string; name: string; status: string; kind: string; context: string; role?: string; stack?: string[]; tested?: string[]; repo?: string; live?: string };
// Fields left undefined render as "To be added". Fill only what is verified.
export const projects: Project[] = [
  {
    id: "01",
    name: "Autonomous GEO & High-Speed Web Platform",
    status: "Verified Case Study",
    kind: "Next.js · Technical SEO · AEO/GEO",
    context: "Live production web architecture engineered for sub-second Core Web Vitals and automated Google AI Overview entity citations.",
    role: "Lead Architect & Engineer",
    stack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "JSON-LD Schema", "llms.txt"],
    tested: [
      "100/100 Lighthouse performance with 0.8s LCP and 0.00 CLS",
      "Multi-entity Schema.org graph verified with Google Rich Results Test",
      "Google AI Overview citation verified on live search queries",
    ],
    repo: "https://github.com/Saquib786786",
    live: "https://saquib-portfolio-dev.vercel.app",
  },
  {
    id: "02",
    name: "Workflow — Cross-Platform Task & State Engine",
    status: "Project",
    kind: "Web · Backend · Mobile",
    context: "A task-tracking application with state synchronization, responsive viewports, and RESTful API integration.",
    role: "Full-Stack Engineer",
    stack: ["React", "TypeScript", "Node.js", "REST APIs"],
    tested: [
      "State persistence during background application lifecycle",
      "Optimistic UI updates and throttled network error resilience",
    ],
    repo: "https://github.com/Saquib786786",
    live: "https://saquib-portfolio-dev.vercel.app/projects",
  },
  {
    id: "03",
    name: "Mandi Rate Tracker / Kisan Rate Saathi",
    status: "Project",
    kind: "Information Access Platform",
    context: "Agricultural commodity data platform delivering real-time mandi prices with mobile-first accessibility.",
    role: "Frontend & Performance Developer",
    stack: ["Next.js", "REST APIs", "Tailwind CSS"],
    tested: [
      "Mobile-first responsive layout adaptation across diverse screen sizes",
      "Robust error handling and caching for external pricing endpoints",
    ],
    repo: "https://github.com/Saquib786786",
    live: "https://saquib-portfolio-dev.vercel.app/projects",
  },
];
export type Sev = "Critical" | "High" | "Medium" | "Low";
export type Bug = { id: string; sev: Sev; title: string; area: string; steps: string[]; expected: string; actual: string };
// DEMO DATA: illustrative bugs for a fictional task app. Not from any real project.
export const bugs: Bug[] = [
  { id: "DEMO-101", sev: "Critical", title: "Tasks vanish after app resumes from background", area: "Mobile", steps: ["Log in and create 3 tasks", "Send the app to background for 2 minutes", "Reopen the app"], expected: "All 3 tasks are still listed", actual: "Task list is empty until manual refresh" },
  { id: "DEMO-102", sev: "High", title: "Duplicate task created on double-tap of Save", area: "Web", steps: ["Open 'New task'", "Enter a title", "Double-click Save quickly"], expected: "One task is created", actual: "Two identical tasks are created" },
  { id: "DEMO-103", sev: "High", title: "API returns 200 with empty body for unknown task id", area: "API", steps: ["Send GET /tasks/999999 in Postman", "Inspect status code and body"], expected: "404 with an error message", actual: "200 OK with an empty body" },
  {
    id: "DEMO-104", sev: "Medium", title
      : "Due date shows previous day in some time zones", area: "Web", steps: ["Set due date to 1 Jan", "Change device time zone to UTC-8", "Reload the task"], expected: "Due date remains 1 Jan", actual: "Due date displays 31 Dec"
  },
  { id: "DEMO-105", sev: "Medium", title: "Search ignores trailing spaces in query", area: "Web", steps: ["Create task 'Buy milk'", "Search for 'milk ' (trailing space)"], expected: "'Buy milk' is returned", actual: "No results" },
  { id: "DEMO-106", sev: "Low", title: "Button label truncated on small screens", area: "Mobile", steps: ["Open the app on a 320px-wide screen", "Open the task form"], expected: "Full label 'Add attachment' visible", actual: "Label shows 'Add attach…'" }];
export const steps = [
  ["Analyze & Architect", "Deconstruct requirements, determine technical specifications, and establish performance budgets."],
  ["Semantic Foundation", "Structure accessible, semantic HTML5 hierarchy and scalable component architectures."],
  ["Engineered for Speed", "Optimize bundle size, defer non-critical JS, and ensure sub-second First Contentful Paint."],
  ["Live Deployment", "Ship on live web applications, testing across real mobile devices, viewports, and network profiles."],
  ["Technical SEO, AEO & GEO", "Inject structured JSON-LD schemas, meta graphs, and llms.txt manifests for search and AI engine citation."],
  ["Core Web Vitals Tuning", "Profile LCP, CLS, and INP metrics, eliminating render-blocking resources and layout shifts."],
  ["Automate & Maintain", "Implement automated regression checks, CI/CD validation, and continuous performance monitoring."]
];

export const journey = {
  using: [
    "Full-Stack Web Engineering: TypeScript, JavaScript, Next.js, React",
    "Technical SEO, AEO, GEO & AIO implementation on live builds",
    "Web Performance Engineering & Core Web Vitals (LCP, INP, CLS)",
    "REST API optimization, Postman, Git, GitHub"
  ],
  learning: [
    "Next.js App Router Server Actions & Streaming SSR",
    "AI-assisted developer workflows and LLM agent integrations",
    "Edge rendering, Cloudflare Workers & advanced caching"
  ],
  next: [
    "High-throughput distributed web architectures",
    "Autonomous AI-driven SEO & performance automation",
    "AI-native full stack applications"
  ]
};

export const skills: { g: string; items: [string, "using" | "learning"][] }[] = [
  {
    g: "Software Engineering",
    items: [
      ["TypeScript", "using"],
      ["JavaScript", "using"],
      ["React", "using"],
      ["Next.js", "using"],
      ["HTML5 / Modern CSS", "using"],
      ["Node.js", "using"],
    ],
  },
  {
    g: "Technical SEO & AI Discovery",
    items: [
      ["Technical SEO", "using"],
      ["Answer Engine Optimization (AEO)", "using"],
      ["Generative Engine Optimization (GEO)", "using"],
      ["AI Engine Optimization (AIO)", "using"],
      ["JSON-LD Schema.org Graphs", "using"],
      ["llms.txt & Semantic Indexing", "using"],
      ["Crawl Budget & Canonicalization", "using"],
    ],
  },
  {
    g: "Web Performance & Core Web Vitals",
    items: [
      ["Largest Contentful Paint (LCP)", "using"],
      ["Cumulative Layout Shift (CLS)", "using"],
      ["Interaction to Next Paint (INP)", "using"],
      ["Lighthouse Audits (95+)", "using"],
      ["Asset & Bundle Optimization", "using"],
      ["Caching & CDN Strategies", "using"],
    ],
  },
  {
    g: "Backend & APIs",
    items: [
      ["RESTful APIs", "using"],
      ["Postman API Validation", "using"],
      ["Payload Optimization", "using"],
      ["HTTP Protocols & Headers", "using"],
    ],
  },
  {
    g: "Tools",
    items: [
      ["Git & GitHub", "using"],
      ["VS Code", "using"],

    ],
  },
];
