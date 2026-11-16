import type { Metadata } from "next";
import { Nav, About, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "About Mohd Saquib Mohd Aarif | Software Engineer & Technical SEO Specialist in Mumbai",
  description:
    "Learn about Mohd Saquib Mohd Aarif, Software Engineer at Nexcore Alliance LLP specializing in Technical SEO, AEO, GEO, AIO, and Web Performance on live web apps.",
  alternates: {
    canonical: "/aboutus",
  },
  openGraph: {
    url: "/aboutus",
    title: "About Mohd Saquib Mohd Aarif | Software Engineer & Technical SEO",
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
    title: "About Mohd Saquib Mohd Aarif | Software Engineer",
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
        <About />
      </main>
      <Contact />
    </>
  );
}
