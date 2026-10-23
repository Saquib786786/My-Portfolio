import type { Metadata } from "next";
import { Nav, Work, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Selected QA Projects & Case Studies | Mohd Saquib Mohd Aarif",
  description:
    "Explore QA testing projects, Playwright test automation labs, API tests, and verified bug reproductions authored by Mohd Saquib Mohd Aarif.",
  keywords: [
    "QA Projects",
    "Playwright Automation Lab",
    "Workflow Task App Testing",
    "Kisan Rate Saathi Testing",
    "Postman API Test Scenarios",
    "Test Automation Case Studies",
    "Bug Reproduction Reports",
    "Mohd Saquib Projects",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    url: "/projects",
    title: "Selected QA Projects | Mohd Saquib Mohd Aarif",
    description:
      "Real-world testing scenarios, Playwright automation labs, and verified bug reproductions.",
    siteName: "Mohd Saquib Portfolio",
    images: [
      {
        url: "/saquib.jpg",
        width: 1200,
        height: 630,
        alt: "Mohd Saquib QA Projects",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected QA Projects | Mohd Saquib Mohd Aarif",
    description:
      "Real-world testing scenarios, Playwright automation labs, and verified bug reproductions.",
    images: ["/saquib.jpg"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Work />
      </main>
      <Contact />
    </>
  );
}
