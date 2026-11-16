import type { Metadata } from "next";
import { Nav, Skills, Journey, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Technical Skills & Journey",
  description:
    "Technical stack and engineering toolkit of Mohd Saquib: TypeScript, Next.js, Core Web Vitals, Technical SEO, AEO/GEO, REST APIs, and Postman.",
  alternates: {
    canonical: "https://saquib-portfolio-dev.vercel.app/skills",
  },
  openGraph: {
    url: "https://saquib-portfolio-dev.vercel.app/skills",
    title: "Technical Skills & Journey | Mohd Saquib",
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
    title: "Technical Skills & Journey | Mohd Saquib",
    description: "Detailed breakdown of software engineering, web performance, and Technical SEO skills.",
    images: ["/saquib.jpg"],
  },
};

export default function SkillsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <section className="mx-auto max-w-7xl px-5 pt-12 pb-6">
          <div className="border border-ink bg-paper p-8">
            <h2 className="font-display text-2xl md:text-3xl text-cobalt mb-3">
              Applied Competencies & Technical Stack
            </h2>
            <p className="text-base text-ink/80 max-w-3xl leading-relaxed">
              Below is a transparent overview of technologies used daily in production at Nexcore Alliance LLP versus skills actively being mastered. Every skill listed under &quot;in use&quot; has been applied directly to real-world codebases, API validations, and performance audits.
            </p>
          </div>
        </section>
        <Skills isPage={true} />
        <Journey />
      </main>
      <Contact title="Looking for a Software Engineer & SEO specialist?" />
    </>
  );
}
