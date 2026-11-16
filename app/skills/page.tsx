import type { Metadata } from "next";
import { Nav, Skills, Journey, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Engineering Skills & Journey | Mohd Saquib Mohd Aarif",
  description:
    "Explore technical skills of Mohd Saquib Mohd Aarif: Software Engineering, Technical SEO, AEO, GEO, AIO, Web Performance, Core Web Vitals, Next.js, and TypeScript.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    url: "/skills",
    title: "Engineering Skills & Journey | Mohd Saquib Mohd Aarif",
    description:
      "Detailed breakdown of software engineering, technical SEO, web performance, and modern web stack in use on live builds.",
    siteName: "Mohd Saquib Portfolio",
    images: [
      {
        url: "/saquib.jpg",
        width: 1200,
        height: 630,
        alt: "Software Engineering Skills - Mohd Saquib",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills & Journey | Mohd Saquib",
    description: "Detailed breakdown of software engineering, web performance, and Technical SEO skills.",
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
