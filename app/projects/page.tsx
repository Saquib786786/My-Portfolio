import type { Metadata } from "next";
import { Nav, Work, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Projects & Engineering Builds | Mohd Saquib Mohd Aarif",
  description:
    "Explore software engineering projects, web applications, API optimizations, and technical labs authored by Mohd Saquib Mohd Aarif.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    url: "/projects",
    title: "Projects & Engineering Builds | Mohd Saquib Mohd Aarif",
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
    title: "Projects & Engineering Builds | Mohd Saquib Mohd Aarif",
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
        <Work />
      </main>
      <Contact />
    </>
  );
}
