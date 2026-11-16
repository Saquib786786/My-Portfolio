import type { Metadata } from "next";
import { Nav, Work, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Projects & Applications",
  description:
    "Discover software engineering projects, web applications, and performance optimizations built for speed and discoverability by Mohd Saquib.",
  alternates: {
    canonical: "https://saquib-portfolio-dev.vercel.app/projects",
  },
  openGraph: {
    url: "https://saquib-portfolio-dev.vercel.app/projects",
    title: "Projects & Applications | Mohd Saquib",
    description:
      "Real-world application architectures, web performance optimizations, and technical engineering projects.",
    siteName: "Mohd Saquib Portfolio",
    images: [
      {
        url: "/saquib.jpg",
        width: 1200,
        height: 630,
        alt: "Mohd Saquib Projects",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Applications | Mohd Saquib",
    description:
      "Real-world application architectures, web performance optimizations, and technical engineering projects.",
    images: ["/saquib.jpg"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <section className="mx-auto max-w-7xl px-5 pt-12 pb-6">
          <div className="border border-ink bg-paper p-8">
            <h2 className="font-display text-2xl md:text-3xl text-cobalt mb-3">
              Application Development & Technical Architecture
            </h2>
            <p className="text-base text-ink/80 max-w-3xl leading-relaxed">
              Below are verified software builds, tools, and technical labs. Each application is developed with a strict focus on mobile responsiveness, accessible semantic markup, fast load times, and clean API integration. Missing features or in-progress repositories are transparently marked.
            </p>
          </div>
        </section>
        <Work isPage={true} />
        <section className="mx-auto max-w-7xl px-5 py-12 border-t border-ink/20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-ink p-6 bg-lav/20">
              <h3 className="font-display text-2xl mb-2">Built for Performance</h3>
              <p className="text-sm text-ink/80 leading-relaxed">
                Every project is built to load under two seconds. Assets are compressed, images are modern web formats, and JavaScript is split for quick loading.
              </p>
            </div>
            <div className="border border-ink p-6 bg-sage/20">
              <h3 className="font-display text-2xl mb-2">Mobile First Design</h3>
              <p className="text-sm text-ink/80 leading-relaxed">
                All interfaces work smoothly on phones, tablets, and desktop screens. Touch targets are large and layouts adapt to any screen width.
              </p>
            </div>
            <div className="border border-ink p-6 bg-peach/20">
              <h3 className="font-display text-2xl mb-2">Search Engine Friendly</h3>
              <p className="text-sm text-ink/80 leading-relaxed">
                Pages use semantic HTML tags and meta descriptions. This allows Google and AI crawlers to discover and rank content without friction.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Contact title="Have an application that needs speed & scale?" />
    </>
  );
}
