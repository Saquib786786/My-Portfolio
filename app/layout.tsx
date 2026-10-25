import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { recruiterFaqs, profile, type FAQItem } from "@/lib/data";
import "./globals.css";

const d = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--f-display" });
const s = Hanken_Grotesk({ subsets: ["latin"], variable: "--f-sans" });
const m = JetBrains_Mono({ subsets: ["latin"], variable: "--f-mono" });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saquib-portfolio-dev.vercel.app";
const defaultTitle = "Mohd Saquib Mohd Aarif | QA Engineer & SDET in Mumbai";
const defaultDesc =
  "Mohd Saquib: QA Engineer & SDET in Mumbai. Junior intern at Nexcore Alliance LLP specializing in manual QA, Playwright automation & Postman API testing.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: defaultTitle,
    template: "%s | Mohd Saquib Mohd Aarif",
  },
  description: defaultDesc,
  keywords: [
    "QA Engineer in Mumbai",
    "SDET in Mumbai",
    "Mohd Saquib Mohd Aarif",
    "Mohd Saquib QA Engineer",
    "Junior SDET Mumbai",
    "QA Tester Mumbai",
    "Software Tester in Mumbai",
    "Nexcore Alliance LLP",
    "Nexcore Alliance QA Intern",
    "Manual Testing Engineer Mumbai",
    "Playwright Automation Tester",
    "Playwright Test Automation",
    "Postman API Testing Mumbai",
    "Functional Testing",
    "Regression Testing",
    "Sanity Testing",
    "Exploratory Testing",
    "Bug Reporting",
    "Software Development Engineer in Test",
    "Hire QA Engineer Mumbai",
    "Hire SDET intern Mumbai",
    "TypeScript QA Tester",
    "Software Testing Portfolio Mumbai",
  ],
  authors: [{ name: "Mohd Saquib Mohd Aarif", url: baseUrl }],
  creator: "Mohd Saquib Mohd Aarif",
  publisher: "Mohd Saquib Mohd Aarif",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDesc,
    url: baseUrl,
    siteName: "Mohd Saquib Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/saquib.jpg",
        width: 1200,
        height: 630,
        alt: "Mohd Saquib Mohd Aarif - QA Engineer & SDET in Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDesc,
    images: ["/saquib.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google64d116c09c752320",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Mohd Saquib Mohd Aarif — QA Engineer & SDET Portfolio",
      description: defaultDesc,
      publisher: {
        "@id": `${baseUrl}/#person`,
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "ProfilePage",
      "@id": `${baseUrl}/#webpage`,
      url: baseUrl,
      name: defaultTitle,
      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },
      about: {
        "@id": `${baseUrl}/#person`,
      },
      mainEntity: {
        "@id": `${baseUrl}/#person`,
      },
      description: defaultDesc,
    },
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Nexcore Alliance LLP",
      legalName: "Nexcore Alliance LLP",
      url: baseUrl,
      logo: `${baseUrl}/saquib.jpg`,
      description: "Software development and IT consulting company based in Mumbai, Maharashtra.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mumbai",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400001",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "technical support",
        email: profile.email,
      },
      sameAs: [
        profile.linkedin,
      ].filter(Boolean),
    },
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Mohd Saquib Mohd Aarif",
      alternateName: ["Mohd Saquib", "Saquib Aarif", "Mohd Saquib QA"],
      jobTitle: "QA Engineer & SDET",
      description: defaultDesc,
      url: baseUrl,
      image: `${baseUrl}/saquib.jpg`,
      email: `mailto:${profile.email}`,
      sameAs: [
        profile.github,
        profile.linkedin,
        baseUrl,
      ].filter(Boolean),
      worksFor: {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Nexcore Alliance LLP",
        legalName: "Nexcore Alliance LLP",
        url: baseUrl,
        logo: `${baseUrl}/saquib.jpg`,
        description: "Software development and IT consulting company based in Mumbai, Maharashtra.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Mumbai",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400001",
          addressCountry: "IN",
        },
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Software Quality Assurance Engineer / SDET",
        occupationalCategory: "15-1253.00",
        skills: "Playwright Automation, Postman API Testing, Manual Testing, Functional Testing, Regression Testing, Defect Lifecycle, TypeScript, Bug Reporting",
      },
      knowsAbout: [
        "Software Quality Assurance (QA)",
        "Software Development Engineer in Test (SDET)",
        "Manual QA Testing",
        "Playwright Test Automation",
        "Postman API Testing",
        "Regression Testing",
        "Functional Testing",
        "Sanity Testing",
        "Exploratory Testing",
        "Defect Lifecycle & Bug Reporting",
        "TypeScript",
        "JavaScript",
        "QA Testing in Mumbai",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/#faq`,
      mainEntity: recruiterFaqs.map((faq: FAQItem) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${d.variable} ${s.variable} ${m.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
