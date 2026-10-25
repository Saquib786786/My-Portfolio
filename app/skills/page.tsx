import type { Metadata } from "next";
import { Nav, Skills, Journey, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "QA Skills & Journey | Mohd Saquib Mohd Aarif",
  description:
    "Explore technical skills of Mohd Saquib Mohd Aarif: Manual QA, Postman API testing, Playwright automation, TypeScript, and engineering workflow.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    url: "/skills",
    title: "Skills & Journey | Mohd Saquib Mohd Aarif",
    description:
      "Detailed breakdown of QA testing skills in use and automation technologies in progress.",
    siteName: "Mohd Saquib Portfolio",
    images: [
      {
        url: "/saquib.jpg",
        width: 1200,
        height: 630,
        alt: "QA Skills - Mohd Saquib",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills & Journey | Mohd Saquib",
    description: "Detailed breakdown of QA testing skills and automation tools.",
    images: ["/saquib.jpg"],
  },
};

export default function SkillsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Skills />
        <Journey />
      </main>
      <Contact />
    </>
  );
}
