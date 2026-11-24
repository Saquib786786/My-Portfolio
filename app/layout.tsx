import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { recruiterFaqs, profile, type FAQItem } from "@/lib/data";
import "./globals.css";

const d = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--f-display" });
const s = Hanken_Grotesk({ subsets: ["latin"], variable: "--f-sans" });
const m = JetBrains_Mono({ subsets: ["latin"], variable: "--f-mono" });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saquib-portfolio-dev.vercel.app";
const defaultTitle = "Mohd Saquib | Technical SEO Specialist & Web Performance Engineer in Mumbai";
const defaultDesc =
  "Mohd Saquib Mohd Aarif: Technical SEO Engineer & Generative Engine Optimization (GEO/AEO) Specialist in Mumbai. Specializing in sub-second Next.js web systems, 100/100 Core Web Vitals, and JSON-LD Schema graphs.";

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
    canonical: `${baseUrl}/`,
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
      alternateName: ["Mohd Saquib", "Saquib Aarif", "Mohd Saquib Technical SEO"],
      jobTitle: "Technical SEO & Web Performance Engineer | GEO & AEO Specialist",
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
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Mumbai",
        containedIn: "Maharashtra, India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Technical SEO & Web Performance Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technical SEO & Schema.org JSON-LD Architecture in Mumbai",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Generative Engine Optimization (GEO & AEO)",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Next.js Core Web Vitals & Web Performance Tuning",
            },
          },
        ],
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Technical SEO Engineer & Web Performance Specialist",
        occupationalCategory: "15-1252.00",
        skills: "Technical SEO, Generative Engine Optimization (GEO), AEO, Core Web Vitals, Next.js, React, TypeScript, Schema.org JSON-LD, REST APIs",
      },
      knowsAbout: [
        "Technical SEO Specialist in Mumbai",
        "Generative Engine Optimization Specialist Mumbai",
        "GEO AEO Specialist Mumbai",
        "Next.js Core Web Vitals Optimization",
        "Technical SEO Engineer Next.js",
        "Web Performance Engineer in Mumbai",
        "Schema.org JSON-LD Expert Mumbai",
        "Software Engineering",
        "Answer Engine Optimization (AEO)",
        "Core Web Vitals (LCP, CLS, INP)",
        "Semantic Web & llms.txt",
        "Next.js & React",
        "TypeScript & JavaScript",
        "REST API Optimization & Postman",
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
