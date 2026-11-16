import type { Metadata } from "next";
import { Nav, LabSection, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Diagnostics & Testing Lab",
  description:
    "Interactive software diagnostics and testing lab demonstrating reproducible bug fixes, assertion validations, and deterministic edge-case checks.",
  alternates: {
    canonical: "https://saquib-portfolio-dev.vercel.app/testing-lab",
  },
  openGraph: {
    url: "https://saquib-portfolio-dev.vercel.app/testing-lab",
    title: "Diagnostics & Testing Lab | Mohd Saquib",
    description:
      "Interactive software diagnostics explorer demonstrating systematic edge-case reproduction and root-cause analysis.",
    siteName: "Mohd Saquib Portfolio",
    images: [
      {
        url: "/saquib.jpg",
        width: 1200,
        height: 630,
        alt: "Diagnostics Lab - Mohd Saquib",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnostics & Testing Lab | Mohd Saquib",
    description:
      "Interactive diagnostics explorer demonstrating systematic edge-case analysis.",
    images: ["/saquib.jpg"],
  },
};

export default function LabPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <LabSection isPage={true} />
        <section className="mx-auto max-w-7xl px-5 py-16 border-t border-ink/20">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <h2 className="font-display text-3xl md:text-4xl text-ink">
                Defect Diagnostics & Root Cause Analysis
              </h2>
              <p className="mt-3 text-sm text-ink/70">
                How systematic debugging protects live production reliability.
              </p>
            </div>
            <div className="md:col-span-8 space-y-6 text-base text-ink/80 leading-relaxed">
              <p>
                In production web environments, intermittent glitches and unhandled edge cases degrade user experience and hurt search rankings. A bug reported without exact steps to reproduce is difficult to diagnose and impossible to reliably verify.
              </p>
              <p>
                The interactive lab above demonstrates the disciplined engineering workflow I follow: identifying the exact system state, isolating API payload discrepancies or timezone anomalies, asserting expected vs. actual outcomes, and writing automated checks to ensure regressions never return.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="border border-ink p-4 bg-lav/30">
                  <h3 className="font-display text-xl mb-1">Deterministic Reproduction</h3>
                  <p className="text-xs text-ink/75">
                    Clear, numbered reproduction steps eliminate guesswork between development and deployment teams.
                  </p>
                </div>
                <div className="border border-ink p-4 bg-sage/30">
                  <h3 className="font-display text-xl mb-1">Automated Assertions</h3>
                  <p className="text-xs text-ink/75">
                    Stable assertions are converted into Playwright test scripts to protect critical user workflows in CI/CD.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact title="Need reliable software diagnostics & systems?" />
    </>
  );
}
