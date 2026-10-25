import type { Metadata } from "next";
import { Nav, About, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "About Mohd Saquib Mohd Aarif | QA Engineer & SDET in Mumbai",
  description:
    "Learn about Mohd Saquib Mohd Aarif, TY BSc IT student & QA intern at Nexcore Alliance LLP specializing in manual QA, Playwright & Postman API testing.",
  alternates: {
    canonical: "/aboutus",
  },
  openGraph: {
    url: "/aboutus",
    title: "About Mohd Saquib Mohd Aarif | QA Engineer & SDET",
    description:
      "Junior Software Developer Intern with live QA testing experience on mobile, web, and APIs in Mumbai, India.",
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
    title: "About Mohd Saquib Mohd Aarif | QA Engineer",
    description:
      "Junior Software Developer Intern at Nexcore Alliance LLP focusing on QA, Playwright, and Postman API testing.",
    images: ["/saquib.jpg"],
  },
};

export default function AboutUsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <About />
      </main>
      <Contact />
    </>
  );
}
