import type { Metadata } from "next";
import { Nav, Contact } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Contact Mohd Saquib | QA Engineer & SDET in Mumbai",
  description:
    "Contact Mohd Saquib Mohd Aarif for QA Engineer and SDET Intern roles in Mumbai. Open to manual testing, Playwright automation, and API QA opportunities.",
  alternates: {
    canonical: "/contactus",
  },
  openGraph: {
    url: "/contactus",
    title: "Contact Mohd Saquib Mohd Aarif | QA Engineer",
    description:
      "Get in touch with Mohd Saquib Mohd Aarif for QA Engineer and SDET opportunities in Mumbai. Have a build that needs breaking? Let's connect.",
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
    title: "Contact Mohd Saquib Mohd Aarif | QA Engineer",
    description:
      "Get in touch with Mohd Saquib for QA Engineer & SDET internships and roles in Mumbai.",
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
