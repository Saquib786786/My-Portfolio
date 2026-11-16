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
      </main>
      <Contact title="Have an application that needs speed & scale?" />
    </>
  );
}
