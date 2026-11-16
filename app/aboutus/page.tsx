import type { Metadata } from "next";
import { Nav, About, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "About Me & Engineering",
  description:
    "Explore Mohd Saquib's background in software engineering, sub-second web performance, Core Web Vitals, and Technical SEO at Nexcore Alliance.",
  alternates: {
    canonical: "https://saquib-portfolio-dev.vercel.app/aboutus",
  },
  openGraph: {
    url: "https://saquib-portfolio-dev.vercel.app/aboutus",
    title: "About Mohd Saquib | Software Engineer & Technical SEO",
    description:
      "Software Engineer with live experience in scalable web applications, Core Web Vitals, and Technical SEO/AEO/GEO in Mumbai, India.",
    siteName: "Mohd Saquib Portfolio",
    images: [
      {
        url: "/saquib.jpg",
        width: 1200,
        height: 630,
        alt: "About Mohd Saquib Mohd Aarif",
      },
    ],
    locale: "en_IN",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mohd Saquib | Software Engineer",
    description:
      "Software Engineer at Nexcore Alliance LLP focusing on Web Performance, Core Web Vitals, Technical SEO, AEO & GEO.",
    images: ["/saquib.jpg"],
  },
};

export default function AboutUsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <About isPage={true} />
        <section className="mx-auto max-w-7xl px-5 py-16 border-b border-ink/20">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h2 className="font-display text-3xl md:text-4xl text-ink">
                Engineering Pillars & Standards
              </h2>
              <p className="mt-3 text-sm text-ink/70">
                Core development principles applied daily to live production applications.
              </p>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              <div className="border border-ink p-6 bg-paper space-y-3">
                <span className="label text-cobalt font-mono">01 — Speed & Vitals</span>
                <h3 className="font-display text-2xl">Sub-Second Execution</h3>
                <p className="text-sm text-ink/80 leading-relaxed">
                  Fast sites keep visitors happy. I optimize page speed and Core Web Vitals on mobile devices. This keeps bundle sizes small and clicks fast.
                </p>
              </div>
              <div className="border border-ink p-6 bg-paper space-y-3">
                <span className="label text-cobalt font-mono">02 — Discoverability</span>
                <h3 className="font-display text-2xl">Search & AI Discovery</h3>
                <p className="text-sm text-ink/80 leading-relaxed">
                  Search engines need clean structure. I add JSON-LD schemas and meta tags to every page. This helps Google and AI tools index content without errors.
                </p>
              </div>
              <div className="border border-ink p-6 bg-paper space-y-3">
                <span className="label text-cobalt font-mono">03 — Maintainability</span>
                <h3 className="font-display text-2xl">Clean Code</h3>
                <p className="text-sm text-ink/80 leading-relaxed">
                  I write clean, type-safe code using TypeScript and Next.js. Clear code is easy to read and maintain as projects grow.
                </p>
              </div>
              <div className="border border-ink p-6 bg-paper space-y-3">
                <span className="label text-cobalt font-mono">04 — Reliability</span>
                <h3 className="font-display text-2xl">Cross-Device Testing</h3>
                <p className="text-sm text-ink/80 leading-relaxed">
                  I test every page on phones, tablets, and laptops. I also test APIs to make sure data loads correctly under all network conditions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact title="Ready to build fast, discoverable software?" />
    </>
  );
}
