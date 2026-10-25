import type { Metadata } from "next";
import { Nav, Hero, About, Work, LabSection, Approach, Journey, Skills, RecruiterFAQ, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Mohd Saquib Mohd Aarif | QA Engineer & SDET in Mumbai",
  description:
    "Mohd Saquib: QA Engineer & SDET in Mumbai. Junior intern at Nexcore Alliance LLP specializing in manual QA, Playwright automation & Postman API testing.",
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
