import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { recruiterFaqs, profile, type FAQItem } from "@/lib/data";
import "./globals.css";

const d = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--f-display" });
const s = Hanken_Grotesk({ subsets: ["latin"], variable: "--f-sans" });
const m = JetBrains_Mono({ subsets: ["latin"], variable: "--f-mono" });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saquib-portfolio-dev.vercel.app";
const defaultTitle = "Mohd Saquib | Software Engineer & Technical SEO";
const defaultDesc =
  "Mohd Saquib: Software Engineer in Mumbai. Specializing in high-performance web systems, Core Web Vitals, Technical SEO, AEO, and GEO architecture.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: defaultTitle,
    template: "%s | Mohd Saquib",
  },
  description: defaultDesc,
  authors: [{ name: "Mohd Saquib Mohd Aarif", url: baseUrl }],
  creator: "Mohd Saquib Mohd Aarif",
  publisher: "Mohd Saquib Mohd Aarif",
  alternates: {
    canonical: baseUrl,
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
        alt: "Mohd Saquib Mohd Aarif - Software Engineer in Mumbai",
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
      name: "Mohd Saquib Mohd Aarif — Software Engineer, Technical SEO & Web Performance",
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
      description: "Software engineering and digital product development company based in Mumbai, Maharashtra.",
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
      alternateName: ["Mohd Saquib", "Saquib Aarif", "Mohd Saquib Software Engineer"],
      jobTitle: "Software Engineer | Technical SEO, AEO, GEO, AIO & Web Performance",
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
        description: "Software engineering and digital product development company based in Mumbai, Maharashtra.",
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
        name: "Software Engineer / Web Performance & Technical SEO Specialist",
        occupationalCategory: "15-1252.00",
        skills: "Software Engineering, Next.js, React, TypeScript, Technical SEO, AEO, GEO, AIO, Core Web Vitals, Web Performance, Schema.org, REST APIs",
      },
      knowsAbout: [
        "Software Engineering",
        "Technical SEO",
        "Answer Engine Optimization (AEO)",
        "Generative Engine Optimization (GEO)",
        "AI Engine Optimization (AIO)",
        "Web Performance Engineering",
        "Core Web Vitals (LCP, CLS, INP)",
        "JSON-LD Schema.org Architecture",
        "Semantic Web & llms.txt",
        "Next.js & React",
        "TypeScript & JavaScript",
        "REST API Optimization & Postman",
        "Web Performance in Mumbai",
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
    <html lang="en-IN" className={`${d.variable} ${s.variable} ${m.variable}`}>
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
