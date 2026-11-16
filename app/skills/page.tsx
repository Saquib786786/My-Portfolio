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
        <section className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-ink p-6 bg-paper">
              <h3 className="font-display text-2xl text-cobalt mb-2">Frontend & Performance</h3>
              <p className="text-sm text-ink/80 leading-relaxed">
                I build responsive interfaces using React and Next.js. My goal is fast load times and clean code. I optimize web assets to keep Core Web Vitals in the green zone on mobile devices.
              </p>
            </div>
            <div className="border border-ink p-6 bg-paper">
              <h3 className="font-display text-2xl text-cobalt mb-2">Technical SEO & Schema</h3>
              <p className="text-sm text-ink/80 leading-relaxed">
                I add structured JSON-LD data to every web page. This helps Googlebot and AI models understand page content easily. Clean markup leads to better rankings and faster indexing.
              </p>
            </div>
            <div className="border border-ink p-6 bg-paper">
              <h3 className="font-display text-2xl text-cobalt mb-2">APIs & Automation</h3>
              <p className="text-sm text-ink/80 leading-relaxed">
                I test REST API endpoints using Postman to check status codes and payloads. I also write automated tests in TypeScript to catch defects before users see them.
              </p>
            </div>
          </div>
        </section>
        <Journey />
      </main>
      <Contact title="Looking for a Software Engineer & SEO specialist?" />
    </>
  );
}
