import type { Metadata } from "next";
import { Nav, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Contact Mohd Saquib | Software Engineer & Performance Specialist in Mumbai",
  description:
    "Contact Mohd Saquib Mohd Aarif for Software Engineer, Technical SEO, AEO/GEO, and Web Performance opportunities in Mumbai and Remote.",
  alternates: {
    canonical: "/contactus",
  },
  openGraph: {
    url: "/contactus",
    title: "Contact Mohd Saquib Mohd Aarif | Software Engineer",
    description:
      "Get in touch with Mohd Saquib Mohd Aarif for Software Engineering, Web Performance, and Technical SEO opportunities in Mumbai and Remote.",
    siteName: "Mohd Saquib Portfolio",
    images: [
      {
        url: "/saquib.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Mohd Saquib Mohd Aarif",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mohd Saquib Mohd Aarif | Software Engineer",
    description:
      "Get in touch with Mohd Saquib for Software Engineering, Technical SEO, and Web Performance roles in Mumbai and Remote.",
    images: ["/saquib.jpg"],
  },
};

export default function ContactUsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-[70vh]">
        <Contact />
      </main>
    </>
  );
}
