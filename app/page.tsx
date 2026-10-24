import type { Metadata } from "next";
import { Nav, Hero, About, Work, LabSection, Approach, Journey, Skills, RecruiterFAQ, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Mohd Saquib Mohd Aarif | QA Engineer & SDET in Mumbai (Manual & Automation Tester)",
  description:
    "Mohd Saquib Mohd Aarif — QA Engineer & Junior Software Developer Intern at Nexcore Alliance LLP (Mumbai). Specializing in manual QA testing passes, Playwright test automation with TypeScript, Postman API testing, and defect reproduction.",
  keywords: [
    "QA Engineer in Mumbai",
    "SDET in Mumbai",
    "Mohd Saquib Mohd Aarif",
    "Mohd Saquib",
    "Mohd Saquib QA Engineer",
    "Mohd Saquib SDET",
    "Junior SDET Mumbai",
    "QA Tester in Mumbai",
    "Software Tester in Mumbai",
    "Nexcore Alliance LLP",
    "Nexcore Alliance QA Intern",
    "Manual Testing Engineer Mumbai",
    "Playwright Automation Tester Mumbai",
    "Playwright Test Automation",
    "Postman API Testing Mumbai",
    "API Testing Engineer Mumbai",
    "Functional Testing",
    "Sanity Testing",
    "Regression Testing",
    "Exploratory Testing",
    "Bug Reporting",
    "Software Development Engineer in Test",
    "Hire QA Engineer Mumbai",
    "Hire SDET intern Mumbai",
    "TypeScript QA Tester",
    "QA Portfolio Mumbai",
    "Mohd Saquib resume",
    "Mohd Saquib GitHub",
    "Mohd Saquib LinkedIn",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mohd Saquib Mohd Aarif | QA Engineer & SDET in Mumbai",
    description:
      "QA Engineer & Junior Software Developer Intern at Nexcore Alliance LLP (Mumbai). Manual QA testing, Playwright automation, Postman API testing, and bug tracking.",
    url: "/",
    siteName: "Mohd Saquib Portfolio",
    images: [
      {
        url: "/saquib.jpg",
        width: 1200,
        height: 630,
        alt: "Mohd Saquib Mohd Aarif - QA Engineer & SDET in Mumbai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohd Saquib Mohd Aarif | QA Engineer & SDET in Mumbai",
    description:
      "QA Engineer & Junior Software Developer Intern at Nexcore Alliance LLP. Specializing in manual testing, Playwright automation, and API testing.",
    images: ["/saquib.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <LabSection />
        <Approach />
        <Journey />
        <Skills />
        <RecruiterFAQ />
      </main>
      <Contact />
    </>
  );
}
