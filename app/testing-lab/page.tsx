import type { Metadata } from "next";
import { Nav, LabSection, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Diagnostics & Testing Lab | Mohd Saquib Mohd Aarif",
  description:
    "Interactive software diagnostics and edge-case testing lab demonstrating defect analysis, assertion verification, and deterministic engineering fixes.",
  alternates: {
    canonical: "/testing-lab",
  },
  openGraph: {
    url: "/testing-lab",
    title: "Diagnostics & Testing Lab | Mohd Saquib Mohd Aarif",
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
        <LabSection />
      </main>
      <Contact />
    </>
  );
}
