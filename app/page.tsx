import type { Metadata } from "next";
import { Nav, Hero, About, Work, LabSection, Approach, Journey, Skills, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Mohd Saquib Mohd Aarif | QA Engineer & SDET in Mumbai",
  description:
    "Mohd Saquib Mohd Aarif — QA Engineer & Junior Software Developer Intern at Nexcore Alliance LLP (Mumbai). Specializing in manual QA, Playwright test automation, Postman API testing, and defect tracking.",
  keywords: [
    "Mohd Saquib Mohd Aarif",
    "Mohd Saquib",
    "Mohd Saquib QA Engineer",
    "Mohd Saquib SDET",
    "Mohd Saquib portfolio",
    "QA Engineer in Mumbai",
    "SDET Intern in Mumbai",
    "Junior SDET Mumbai",
    "Software Tester in Mumbai",
    "QA Tester in Mumbai",
    "Nexcore Alliance LLP",
    "Nexcore Alliance QA Intern",
    "Manual Testing Engineer",
    "Playwright Automation Tester",
    "Playwright Test Automation",
    "Postman API Testing",
    "API Testing Engineer Mumbai",
    "Functional Testing",
    "Sanity Testing",
    "Regression Testing",
    "Exploratory Testing",
    "Bug Reporting",
    "Software Development Engineer in Test",
    "hire QA Engineer Mumbai",
    "hire SDET intern",
    "Software QA Intern",
    "TypeScript QA",
    "JavaScript Testing",
    "QA Portfolio",
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
      "I break software to make it better. QA Engineer in progress, building toward SDET with real-world testing, Playwright automation, and Postman API testing.",
    url: "/",
    siteName: "Mohd Saquib Portfolio",
    images: [
      {
        url: "/saquib.jpg",
        width: 1200,
        height: 630,
        alt: "Mohd Saquib Mohd Aarif - QA Engineer & SDET",
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
      </main>
      <Contact />
    </>
  );
}
