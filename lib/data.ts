// EDIT ME: leave a value empty ("") and the site shows it as "coming soon" instead of a fake link.
export const profile = {
  name: "Mohd Saquib Mohd Aarif",
  email: "mohdsaqib9253@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohd-saquib-ab49b438a",
  github: "https://github.com/Saquib786786",
  resume: "/Saquib_resume.pdf",
  location: "Mumbai, Maharashtra, India",
  headline: "QA Engineer & SDET in Mumbai | Manual & Automation Tester",
  currentRole: "Junior Software Developer Intern at Nexcore Alliance LLP (Mumbai)",
  education: "TY BSc IT (Third Year Bachelor of Science in Information Technology)",
  availability: "Available for QA Engineer, SDET Intern & Junior QA roles in Mumbai & Remote",
};

export type FAQItem = {
  q: string;
  a: string;
};

export const recruiterFaqs: FAQItem[] = [
  {
    q: "Who is Mohd Saquib Mohd Aarif?",
    a: "Mohd Saquib Mohd Aarif is a Software QA Engineer & SDET based in Mumbai, Maharashtra, India. He currently works as a Junior Software Developer Intern at Nexcore Alliance LLP (Mumbai), specializing in manual QA testing, Playwright test automation with TypeScript, Postman API testing, and defect tracking.",
  },
  {
    q: "Is Mohd Saquib available for QA Engineer or SDET roles in Mumbai?",
    a: "Yes. Mohd Saquib is actively open to QA Engineer, SDET Intern, and Junior Software Tester roles in Mumbai (on-site or hybrid) as well as remote opportunities.",
  },
  {
    q: "What testing methodologies and tools does Mohd Saquib specialize in?",
    a: "His core competencies include Manual QA (Functional, Sanity, Regression, and Exploratory testing), API Testing with Postman (HTTP methods, response validation, status codes), Test Automation with Playwright and TypeScript, Defect Lifecycle Management, Git, GitHub, and VS Code.",
  },
  {
    q: "What is Mohd Saquib's testing experience at Nexcore Alliance LLP?",
    a: "At Nexcore Alliance LLP (Mumbai), Saquib performs QA testing on live software projects, executing manual testing passes on web and mobile platforms, validating REST APIs with Postman, and documenting detailed, reproducible bug reports.",
  },
  {
    q: "How does Mohd Saquib approach software testing and bug reporting?",
    a: "He follows a systematic 7-step engineering methodology: Understand requirements -> Identify user risks -> Design comprehensive test scenarios -> Execute functional/regression passes on real builds -> Report defects with clear steps and assertions -> Automate stable checks with Playwright -> Tighten feedback loops toward CI/CD.",
  },
  {
    q: "How can recruiters and engineering managers contact Mohd Saquib?",
    a: "You can reach Mohd Saquib via email at mohdsaqib9253@gmail.com, connect on LinkedIn (linkedin.com/in/mohd-saquib-ab49b438a), or inspect his code and repositories on GitHub (@Saquib786786).",
  },
];
export type Project = { id: string; name: string; status: string; kind: string; context: string; role?: string; stack?: string[]; tested?: string[]; repo?: string; live?: string };
// Fields left undefined render as "To be added". Fill only what is verified.
export const projects: Project[] = [
    { id: "01", name: "Workflow", status: "Project", kind: "Web · Backend · Mobile", context: "A task-tracking application with web, backend and mobile components." },
    { id: "02", name: "Mandi Rate Tracker / Kisan Rate Saathi", status: "Project", kind: "Information access", context: "Explores mandi rates and farmer-focused access to information." },
    { id: "03", name: "Playwright Automation Lab", status: "Work in progress · Learning", kind: "Test automation", context: "A growing collection of automated tests and reports, built while learning Playwright.", role: "Author — learning project", stack: ["Playwright", "TypeScript"] }];
export type Sev = "Critical" | "High" | "Medium" | "Low";
export type Bug = { id: string; sev: Sev; title: string; area: string; steps: string[]; expected: string; actual: string };
// DEMO DATA: illustrative bugs for a fictional task app. Not from any real project.
export const bugs: Bug[] = [
    { id: "DEMO-101", sev: "Critical", title: "Tasks vanish after app resumes from background", area: "Mobile", steps: ["Log in and create 3 tasks", "Send the app to background for 2 minutes", "Reopen the app"], expected: "All 3 tasks are still listed", actual: "Task list is empty until manual refresh" },
    { id: "DEMO-102", sev: "High", title: "Duplicate task created on double-tap of Save", area: "Web", steps: ["Open 'New task'", "Enter a title", "Double-click Save quickly"], expected: "One task is created", actual: "Two identical tasks are created" },
    { id: "DEMO-103", sev: "High", title: "API returns 200 with empty body for unknown task id", area: "API", steps: ["Send GET /tasks/999999 in Postman", "Inspect status code and body"], expected: "404 with an error message", actual: "200 OK with an empty body" },
    { id: "DEMO-104", sev: "Medium", title
        : "Due date shows previous day in some time zones", area: "Web", steps: ["Set due date to 1 Jan", "Change device time zone to UTC-8", "Reload the task"], expected: "Due date remains 1 Jan", actual: "Due date displays 31 Dec" },
    { id: "DEMO-105", sev: "Medium", title: "Search ignores trailing spaces in query", area: "Web", steps: ["Create task 'Buy milk'", "Search for 'milk ' (trailing space)"], expected: "'Buy milk' is returned", actual: "No results" },
    { id: "DEMO-106", sev: "Low", title: "Button label truncated on small screens", area: "Mobile", steps: ["Open the app on a 320px-wide screen", "Open the task form"], expected: "Full label 'Add attachment' visible", actual: "Label shows 'Add attach…'" }];
export const steps = [["Understand", "Read the requirement until I can restate it. Ask what 'done' means."], ["Find risks", "Where would this hurt users most if it broke? Test there first."], ["Design scenarios", "Happy path, edge cases, bad input, interrupted flows."], ["Execute", "Functional, sanity, regression and exploratory passes on real web and mobile builds."], ["Report defects", "Clear title, numbered steps, expected vs actual, environment."], ["Automate", "Turn stable, repeatable checks into code (learning Playwright + TypeScript)."], ["Improve reliability", "Remove flaky checks, tighten feedback loops, move toward CI/CD."]];
export const journey = { using: ["Manual QA: functional, sanity, regression, exploratory", "Bug reproduction, documentation, reporting", "API testing with Postman", "Git, GitHub, VS Code"], learning: ["JavaScript", "TypeScript", "Playwright test automation"], next: ["CI/CD pipelines for tests", "AI-assisted testing", "AI agents, once I have real projects to show"] };
export const skills: { g: string; items: [string, "using" | "learning"][] }[] = [
    { g: "QA & Testing", items: [["Functional testing", "using"], ["Sanity testing", "using"], ["Regression testing", "using"], ["Exploratory testing", "using"], ["Bug reporting", "using"]] },
    { g: "API Testing", items: [["Postman", "using"]] },
    { g: "Programming", items: [["JavaScript", "learning"], ["TypeScript", "learning"]] },
    { g: "Tools", items: [["Git", "using"], ["GitHub", "using"], ["VS Code", "using"]] },
    { g: "Currently Learning", items: [["Playwright", "learning"], ["CI/CD", "learning"]] }];
