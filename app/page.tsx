import type { Metadata } from "next";
import { Nav, Hero, About, Work, LabSection, Approach, Journey, Skills, RecruiterFAQ, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Mohd Saquib Mohd Aarif | Software Engineer | Technical SEO, AEO, GEO & Web Performance",
  description:
    "Mohd Saquib: Software Engineer at Nexcore Alliance LLP (Mumbai). Engineering live production applications with sub-second Web Performance, Technical SEO, AEO, GEO & AIO.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mohd Saquib Mohd Aarif | Software Engineer | Technical SEO, AEO, GEO & Web Performance",
    description:
      "Software Engineer at Nexcore Alliance LLP (Mumbai). Building scalable web applications, optimizing Core Web Vitals, and implementing Technical SEO, AEO & GEO.",
    url: "/",
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
    title: "Mohd Saquib Mohd Aarif | Software Engineer | Technical SEO, AEO, GEO & Web Performance",
    description:
      "Software Engineer at Nexcore Alliance LLP. Specializing in high-performance web systems, Core Web Vitals, Technical SEO, AEO, and GEO.",
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
