import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const d = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--f-display" });
const s = Hanken_Grotesk({ subsets: ["latin"], variable: "--f-sans" });
const m = JetBrains_Mono({ subsets: ["latin"], variable: "--f-mono" });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saquib-portfolio-dev.vercel.app";
const defaultTitle = "Mohd Saquib Mohd Aarif — QA Engineer & SDET Portfolio";
const defaultDesc =
  "Portfolio of Mohd Saquib Mohd Aarif, Junior Software Developer Intern at Nexcore Alliance LLP (Mumbai). Specializing in manual QA testing, Playwright automation, Postman API testing, and defect tracking.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: defaultTitle,
    template: "%s | Mohd Saquib Mohd Aarif",
  },
  description: defaultDesc,
  keywords: [
    "Mohd Saquib Mohd Aarif",
    "Mohd Saquib",
    "QA Engineer",
    "SDET Intern",
    "Software Development Engineer in Test",
    "QA Tester Mumbai",
    "Nexcore Alliance LLP",
    "Manual Testing",
    "Playwright Automation",
    "Postman API Testing",
    "Functional Testing",
    "Regression Testing",
    "Bug Reporting",
    "Software Testing Portfolio",
    "Mumbai Software Tester",
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
        alt: "Mohd Saquib Mohd Aarif - QA Engineer & SDET",
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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohd Saquib Mohd Aarif",
  alternateName: "Mohd Saquib",
  jobTitle: "Junior Software Developer Intern & QA Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Nexcore Alliance LLP",
  },
  url: baseUrl,
  image: `${baseUrl}/saquib.jpg`,
  description: defaultDesc,
  knowsAbout: [
    "Software Quality Assurance (QA)",
    "Manual Testing",
    "Playwright Test Automation",
    "Postman API Testing",
    "Regression Testing",
    "Defect Reproduction",
    "TypeScript",
    "JavaScript",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${d.variable} ${s.variable} ${m.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
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
