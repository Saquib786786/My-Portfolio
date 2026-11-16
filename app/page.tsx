import type { Metadata } from "next";
import { Nav, Hero, About, Work, LabSection, Approach, Journey, Skills, RecruiterFAQ, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Mohd Saquib | Software Engineer & Technical SEO",
  description:
    "Mohd Saquib: Software Engineer in Mumbai. Specializing in high-performance web systems, Core Web Vitals, Technical SEO, AEO, and GEO architecture.",
  alternates: {
    canonical: "https://saquib-portfolio-dev.vercel.app/",
  },
  openGraph: {
    title: "Mohd Saquib | Software Engineer & Technical SEO",
    description:
      "Software Engineer at Nexcore Alliance LLP (Mumbai). Building scalable web applications, optimizing Core Web Vitals, and implementing Technical SEO, AEO & GEO.",
    url: "https://saquib-portfolio-dev.vercel.app/",
    siteName: "Mohd Saquib Portfolio",
    images: [
      {
        url: "/saquib.jpg",
        width: 1200,
        height: 630,
        alt: "Mohd Saquib Mohd Aarif - Software Engineer in Mumbai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohd Saquib | Software Engineer & Technical SEO",
    description:
      "Software Engineer in Mumbai. Specializing in high-performance web systems, Core Web Vitals, Technical SEO, and GEO architecture.",
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
