import type { Metadata } from "next";
import { Nav, LabSection, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Interactive Testing Lab & Bug Reproduction | Mohd Saquib",
  description:
    "Interactive QA testing lab: filter by severity, step through reproduction steps, and inspect QA assertions by Mohd Saquib Mohd Aarif.",
  keywords: [
    "QA Testing Lab",
    "Bug Reproduction Explorer",
    "Defect Tracking",
    "Interactive Bug Lab",
    "Severity Classification QA",
    "Assertion Verification",
    "Software Defect Reproduction",
  ],
  alternates: {
    canonical: "/testing-lab",
  },
  openGraph: {
    url: "/testing-lab",
    title: "Interactive Testing Lab | Mohd Saquib Mohd Aarif",
    description:
      "Interactive bug report explorer demonstrating rigorous QA defect reproduction methodology.",
    siteName: "Mohd Saquib Portfolio",
    images: [
      {
        url: "/saquib.jpg",
        width: 1200,
        height: 630,
        alt: "QA Testing Lab - Mohd Saquib",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Testing Lab | Mohd Saquib",
    description:
      "Interactive bug reproduction explorer demonstrating systematic defect analysis.",
    images: ["/saquib.jpg"],
  },
};

export default function LabPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <LabSection />
      </main>
      <Contact />
    </>
  );
}
