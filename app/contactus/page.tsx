import type { Metadata } from "next";
import { Nav, Contact } from "@/components/Sections";
import { profile } from "@/lib/data";
import { Mail, Linkedin, Github, MapPin, Clock, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Collaboration",
  description:
    "Get in touch with Mohd Saquib for software engineering, web performance tuning, and technical SEO opportunities in Mumbai and remote worldwide.",
  alternates: {
    canonical: "https://saquib-portfolio-dev.vercel.app/contactus",
  },
  openGraph: {
    url: "https://saquib-portfolio-dev.vercel.app/contactus",
    title: "Contact & Collaboration | Mohd Saquib",
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
    title: "Contact & Collaboration | Mohd Saquib",
    description:
      "Get in touch with Mohd Saquib for Software Engineering, Technical SEO, and Web Performance roles in Mumbai and Remote.",
    images: ["/saquib.jpg"],
  },
};

export default function ContactUsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-paper">
        <section className="mx-auto max-w-7xl px-5 py-16 md:py-24 border-b border-ink/20">
          <div className="max-w-4xl">
            <span className="label text-cobalt font-mono uppercase tracking-wider">
              Available For Roles & Inquiries
            </span>
            <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[.95]">
              Let&apos;s build something <em className="text-cobalt">fast & discoverable.</em>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink/80 leading-relaxed max-w-2xl">
              "Available for full-time Technical SEO / Software Engineering roles & select freelance consulting (Core Web Vitals tuning, GEO/AEO implementation & Technical Audits)."
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-ink p-6 bg-lav/30 space-y-3">
              <span className="label text-cobalt flex items-center gap-2 font-mono">
                <Briefcase size={16} /> Open To Roles
              </span>
              <h2 className="font-display text-2xl">Full-Time & Contract</h2>
              <p className="text-sm text-ink/80 leading-relaxed">
                Full-time jobs and contract work. I build fast web apps and optimize page speed.
              </p>
            </div>

            <div className="border border-ink p-6 bg-sage/30 space-y-3">
              <span className="label text-cobalt flex items-center gap-2 font-mono">
                <MapPin size={16} /> Work Preferences
              </span>
              <h2 className="font-display text-2xl">Mumbai & Remote</h2>
              <p className="text-sm text-ink/80 leading-relaxed">
                I work in Mumbai and can work on-site or hybrid. I also work with remote teams worldwide.
              </p>
            </div>

            <div className="border border-ink p-6 bg-peach/30 space-y-3 sm:col-span-2 lg:col-span-1">
              <span className="label text-cobalt flex items-center gap-2 font-mono">
                <Clock size={16} /> Direct Response
              </span>
              <h2 className="font-display text-2xl">Quick SLA</h2>
              <p className="text-sm text-ink/80 leading-relaxed">
                I reply to emails and LinkedIn messages within 24 hours.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16">
          <h2 className="font-display text-3xl md:text-4xl mb-8">Direct Communication Channels</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="border border-ink p-6 hover:bg-cobalt hover:text-paper transition group"
            >
              <div className="flex items-center gap-3">
                <Mail size={22} className="text-cobalt group-hover:text-paper" />
                <span className="label text-xs uppercase">Primary Email</span>
              </div>
              <p className="font-display text-xl mt-3 break-all">{profile.email}</p>
              <p className="text-xs text-ink/60 group-hover:text-paper/80 mt-2">
                Click to send email directly
              </p>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink p-6 hover:bg-cobalt hover:text-paper transition group"
            >
              <div className="flex items-center gap-3">
                <Linkedin size={22} className="text-cobalt group-hover:text-paper" />
                <span className="label text-xs uppercase">LinkedIn Profile</span>
              </div>
              <p className="font-display text-xl mt-3">Connect on LinkedIn</p>
              <p className="text-xs text-ink/60 group-hover:text-paper/80 mt-2">
                Direct messaging & networking
              </p>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink p-6 hover:bg-cobalt hover:text-paper transition group"
            >
              <div className="flex items-center gap-3">
                <Github size={22} className="text-cobalt group-hover:text-paper" />
                <span className="label text-xs uppercase">GitHub Repos</span>
              </div>
              <p className="font-display text-xl mt-3">@Saquib786786</p>
              <p className="text-xs text-ink/60 group-hover:text-paper/80 mt-2">
                Code repositories & labs
              </p>
            </a>
          </div>

          <div className="mt-12 border border-ink p-8 bg-paper">
            <h3 className="font-display text-2xl text-cobalt mb-3">Hiring & Next Steps</h3>
            <p className="text-sm text-ink/80 leading-relaxed mb-4">
              I am open to new job offers. I can start right away. If you have an open role, please send me an email. I am happy to share code samples and talk through my past work.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4 border-t border-ink/20">
              <div>
                <h4 className="font-medium text-sm text-ink">Ready to Start</h4>
                <p className="text-xs text-ink/70 mt-1">I can join your engineering team as soon as needed.</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-ink">Live Interviews</h4>
                <p className="text-xs text-ink/70 mt-1">I am happy to take technical tests and walk through live code.</p>
              </div>
              <div>
                <h4 className="font-medium text-sm text-ink">Flexible Hours</h4>
                <p className="text-xs text-ink/70 mt-1">I live in Mumbai and can easily match your team work hours.</p>
              </div>
            </div>
            <p className="text-xs text-ink/70 mt-6 pt-4 border-t border-ink/20">
              You can also check my code on GitHub. Every project has a clear README file with setup steps.
            </p>
          </div>
        </section>
      </main>
      <Contact title="Ready to discuss engineering or hiring?" />
    </>
  );
}
