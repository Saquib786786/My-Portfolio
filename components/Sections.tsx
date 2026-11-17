"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ArrowDown, ChevronDown, MapPin, CheckCircle2 } from "lucide-react";
import { profile, projects, steps, journey, skills, recruiterFaqs, verifiedMetrics, type FAQItem } from "@/lib/data";
import Lab from "./Lab";
import PerformanceDashboard from "./PerformanceDashboard";
function R({ children, className = "", d = 0 }: { children: React.ReactNode; className?: string; d?: number }) { const rm = useReducedMotion(); return <motion.div className={className} initial={rm ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .5, delay: d }}>{children}</motion.div> }
const Pending = ({ t = "To be added" }: { t?: string }) => <span className="text-ink/55 border-b border-dashed border-ink/30">{t}</span>;
function Head({ n, t, sub, as = "h2" }: { n: string; t: string; sub?: string; as?: "h1" | "h2" }) {
  const Tag = as;
  return (
    <R className="mb-10 md:mb-14 grid md:grid-cols-12 gap-4">
      <p className="label text-cobalt md:col-span-2">{n}</p>
      <div className="md:col-span-10">
        <Tag className="font-display text-5xl md:text-7xl leading-[.95]">{t}</Tag>
        {sub && <p className="mt-4 max-w-xl text-ink/70">{sub}</p>}
      </div>
    </R>
  );
}
const links = [["About", "/aboutus"], ["Work", "/projects"], ["Journey", "/skills"], ["FAQ", "/#faq"], ["Contact", "/contactus"]];
export function Nav() {
  const [o, setO] = useState(false); return <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-ink/20"><nav aria-label="Primary" className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">
    <Link href="/" className="font-display text-2xl">Saquib<span className="text-cobalt">.</span></Link>
    <ul className="hidden md:flex gap-8 label">{links.map(([l, h]) => <li key={h}><Link href={h} className="hover:text-cobalt">{l}</Link></li>)}</ul>
    <div className="flex items-center gap-3"><a href={profile.resume} className="label border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition">Resume</a>
      <button className="md:hidden p-2" aria-expanded={o} aria-label="Toggle menu" onClick={() => setO(!o)}>{o ? <X /> : <Menu />}</button></div></nav>
    {o && <ul className="md:hidden border-t border-ink/20 px-5 py-4 space-y-3 bg-paper">{links.map(([l, h]) => <li key={h}><Link href={h} onClick={() => setO(false)} className="font-display text-3xl">{l}</Link></li>)}</ul>}</header>
}
export function Hero() {
  return <section id="top" className="mx-auto max-w-7xl px-5 pt-10 md:pt-16 pb-16">
    <div className="grid md:grid-cols-12 gap-8 items-end">
      <div className="md:col-span-7">
        <div className="inline-flex items-center gap-2 border border-ink bg-paper px-3 py-1.5 text-xs font-mono mb-4">
          <span className="h-2 w-2 rounded-full bg-cobalt animate-pulse" />
          <span className="uppercase tracking-wider">Software Engineer · Technical SEO, AEO/GEO & Web Performance</span>
        </div>
        <h1 className="font-display text-[clamp(3.4rem,10vw,9rem)] leading-[.88] tracking-tight">I <span className="text-cobalt italic underline decoration-peach decoration-[.05em] underline-offset-[.08em]">build</span><br />software<br />to run <em>fast & rank.</em></h1>
        <p className="label text-cobalt mt-4 font-mono">Mohd Saquib Mohd Aarif — Software Engineer | Technical SEO, AEO, GEO, AIO & Web Performance</p>
        <p className="mt-5 max-w-lg text-lg text-ink/80">Software Engineer at Nexcore Alliance LLP (Mumbai). Engineering live production web applications, optimizing sub-second Web Performance & Core Web Vitals, and implementing advanced Technical SEO, AEO, GEO, and AI Engine Optimization.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projects" className="bg-cobalt text-paper px-6 py-3 inline-flex items-center gap-2 hover:bg-ink transition">
            Explore projects <ArrowDown size={16} />
          </Link>
          <a href={profile.resume} className="border border-ink px-6 py-3 inline-flex items-center gap-2 hover:bg-ink hover:text-paper transition">
            View resume <ArrowUpRight size={16} />
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink px-6 py-3 inline-flex items-center gap-2 hover:bg-ink hover:text-paper transition"
            >
              LinkedIn <ArrowUpRight size={16} />
            </a>
          )}
          <a href="#faq" className="border border-ink/50 px-6 py-3 inline-flex items-center gap-2 hover:border-ink transition text-ink">
            Recruiter FAQ
          </a>
        </div>
      </div>
      <div className="md:col-span-5 md:translate-y-4">
        <PerformanceDashboard />
      </div>
    </div>

    {/* Performance, SEO & Engineering Metrics */}
    <R className="mt-14 border border-ink bg-paper divide-y md:divide-y-0 md:divide-x divide-ink grid sm:grid-cols-2 md:grid-cols-4">
      {verifiedMetrics.map((m) => (
        <div key={m.label} className="p-5 flex flex-col justify-between hover:bg-sage/20 transition">
          <span className="font-display text-4xl md:text-5xl text-cobalt">{m.value}</span>
          <div className="mt-2">
            <h3 className="font-medium text-sm text-ink">{m.label}</h3>
            <p className="text-xs text-ink/70 mt-1 leading-relaxed">{m.detail}</p>
          </div>
        </div>
      ))}
    </R>
  </section>;
}
export function About({ isPage = false }: { isPage?: boolean }) {
  return (
    <section id="about" className="bg-sage/40 border-y border-ink/20">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <Head
          n="01 — About"
          t="Engineering for speed, scale & discoverability."
          as={isPage ? "h1" : "h2"}
        />
        <div className="grid md:grid-cols-[4fr_6fr] gap-14 items-center">
          <figure className="max-w-[380px] justify-self-center m-0">
            <div className="relative border border-ink bg-peach aspect-[4/5] shadow-[14px_14px_0_#1F3FD6] transition hover:-translate-x-1 hover:-translate-y-1">
              <img
                src="/saquib.jpg"
                width={520}
                height={650}
                alt="Portrait of Mohd Saquib Mohd Aarif in a dark suit"
                title="Mohd Saquib Mohd Aarif - Software Engineer & Technical SEO Specialist"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-3 bottom-3 label bg-paper border border-ink px-2 py-1 normal-case">
                expect(performance).toBeGreaterThan(99)
              </span>
            </div>
            <figcaption className="label mt-7 text-ink/60">Mohd Saquib · TY BSc IT · Software Engineer</figcaption>
          </figure>
          <R className="space-y-5 text-lg text-ink/85 leading-relaxed">
            <p>
              I build web apps that load fast and rank well on search engines.
            </p>
            <p>
              I work as a Software Engineer at Nexcore Alliance LLP in Mumbai while earning my degree in Information Technology. I build websites with TypeScript, React, and Next.js. My goal is to make every page fast, accessible, and easy to find online.
            </p>
            <p>
              Good websites need clear structure. I use structured data, sitemaps, and clean HTML. This helps search engines like Google and AI bots like ChatGPT understand and index pages quickly.
            </p>
            <p>
              I believe in clean code and quick load times. By combining full-stack development with technical SEO, I help web products reach more people.
            </p>
          </R>
        </div>
      </div>
    </section>
  );
}

export function Work({ isPage = false }: { isPage?: boolean }) {
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <Head
        n="02 — Selected work"
        t="Case studies & applications."
        as={isPage ? "h1" : "h2"}
        sub="Details are added only when verified. Anything missing is marked, not invented."
      />
      {projects.map((p) => (
        <R key={p.id}>
          <article className="grid md:grid-cols-12 gap-6 border-t border-ink py-10">
            <div className="md:col-span-1 font-display text-5xl text-cobalt">{p.id}</div>
            <div className="md:col-span-5">
              <span className="label bg-peach px-2 py-1">{p.status}</span>
              <h3 className="font-display text-4xl md:text-5xl mt-4 leading-none">{p.name}</h3>
              <p className="label mt-3 text-ink/60">{p.kind}</p>
              <p className="mt-4 text-ink/80">{p.context}</p>
            </div>
            <dl className="md:col-span-6 grid sm:grid-cols-2 gap-x-6 gap-y-5 text-sm">
              <div>
                <dt className="label text-ink/60">My role</dt>
                <dd className="mt-1">{p.role ?? <Pending />}</dd>
              </div>
              <div>
                <dt className="label text-ink/60">Stack</dt>
                <dd className="mt-1">{p.stack?.join(" · ") ?? <Pending />}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="label text-ink/60">Test scenarios / implementation</dt>
                <dd className="mt-1">{p.tested ? p.tested.join("; ") : <Pending />}</dd>
              </div>
              <div>
                <dt className="label text-ink/60">Repository</dt>
                <dd className="mt-1">
                  {p.repo ? (
                    <a className="text-cobalt underline" href={p.repo}>
                      View on GitHub
                    </a>
                  ) : (
                    <Pending t="Link coming soon" />
                  )}
                </dd>
              </div>
              <div>
                <dt className="label text-ink/60">Live demo</dt>
                <dd className="mt-1">
                  {p.live ? (
                    <a className="text-cobalt underline" href={p.live}>
                      Open demo
                    </a>
                  ) : (
                    <Pending t="Link coming soon" />
                  )}
                </dd>
              </div>
            </dl>
          </article>
        </R>
      ))}
    </section>
  );
}

export function LabSection({ isPage = false }: { isPage?: boolean }) {
  return (
    <section id="lab" className="bg-peach/40 border-y border-ink/20">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <Head
          n="03 — Diagnostics & Testing Lab"
          t="Live software diagnostics."
          as={isPage ? "h1" : "h2"}
          sub="An interactive diagnostics explorer: filter by severity, step through reproduction scenarios, and inspect deterministic fixes on live software systems."
        />
        <R>
          <Lab />
        </R>
      </div>
    </section>
  );
}
export function Approach() {
  return <section className="mx-auto max-w-7xl px-5 py-20 md:py-28"><Head n="03 — Engineering approach" t="How I engineer, optimize & ship." />
    <ol className="relative border-l border-ink ml-2 md:ml-[16.6%] space-y-8">{steps.map(([t, d], i) => <li key={t}><R><div className="pl-8 relative"><span className="absolute -left-[7px] top-2 h-3 w-3 bg-cobalt" /><span className="label text-cobalt">Step {String(i + 1).padStart(2, "0")}</span><h3 className="font-display text-3xl md:text-4xl">{t}</h3><p className="text-ink/70 max-w-lg">{d}</p></div></R></li>)}</ol></section>
}
export function Journey() {
  const cols: [string, string[], string][] = [["Using now", journey.using, "bg-sage"], ["Learning", journey.learning, "bg-lav"], ["Next", journey.next, "bg-peach"]];
  return <section id="journey" className="mx-auto max-w-7xl px-5 pb-20 md:pb-28"><Head n="04 — Journey" t="From modern web development to AI-driven performance." sub="BSc IT degree and live software engineering in parallel. Technologies I use daily are kept apart from what I'm advancing next." />
    <div className="grid md:grid-cols-3 border border-ink">{cols.map(([t, l, c], i) => <R key={t} d={i * .1} className={`p-6 ${c} ${i ? "md:border-l border-t md:border-t-0 border-ink" : ""}`}><h3 className="font-display text-3xl">{t}</h3><ul className="mt-4 space-y-3">{l.map(x => <li key={x} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 bg-ink shrink-0" />{x}</li>)}</ul></R>)}</div></section>
}
export function Skills({ isPage = false }: { isPage?: boolean }) {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 pb-20 md:pb-28">
      <Head n="05 — Skills" t="Labels, not percentages." as={isPage ? "h1" : "h2"} />
      <div className="divide-y divide-ink/20 border-y border-ink">
        {skills.map((s) => (
          <R key={s.g}>
            <div className="grid md:grid-cols-12 gap-3 py-5">
              <h3 className="label md:col-span-3 pt-1">{s.g}</h3>
              <ul className="md:col-span-9 flex flex-wrap gap-2">
                {s.items.map(([n, st]) => (
                  <li
                    key={n}
                    className={`px-3 py-1.5 border border-ink text-sm ${
                      st === "learning" ? "bg-lav" : "bg-sage/60"
                    }`}
                  >
                    {n}
                    <span className="label ml-2 text-ink/60">{st === "learning" ? "learning" : "in use"}</span>
                  </li>
                ))}
              </ul>
            </div>
          </R>
        ))}
      </div>
      <p className="label mt-4 text-ink/60">
        In use = applied across live production builds and client software. Learning = active advancement.
      </p>
    </section>
  );
}

export function RecruiterFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-paper border-t border-ink/20">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <Head
          n="06 — Recruiter & AI FAQ"
          t="Questions recruiters & tech leads ask."
          sub="Direct, verified answers for engineering managers, tech recruiters, and AI search engines seeking Software Engineers specializing in Technical SEO, AEO, GEO & Web Performance."
        />
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-4">
            <div className="border border-ink p-5 bg-lav/40 space-y-2">
              <span className="label text-cobalt flex items-center gap-1.5 font-mono">
                <MapPin size={14} /> Location Target
              </span>
              <p className="font-display text-2xl">Mumbai, Maharashtra</p>
              <p className="text-sm text-ink/75">
                Open to on-site roles across Mumbai, hybrid setups, and remote Software Engineer opportunities.
              </p>
            </div>
            <div className="border border-ink p-5 bg-sage/40 space-y-2">
              <span className="label text-cobalt flex items-center gap-1.5 font-mono">
                <CheckCircle2 size={14} /> Core Focus
              </span>
              <p className="text-sm text-ink/80 leading-relaxed">
                Software Engineering, Technical SEO, AEO / GEO / AIO, Core Web Vitals, and Web Performance Optimization on live software.
              </p>
            </div>
          </div>
          <div className="md:col-span-8 divide-y divide-ink/20 border-y border-ink">
            {recruiterFaqs.map((faq: FAQItem, idx: number) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full text-left flex items-start justify-between gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-display text-2xl md:text-3xl text-ink group-hover:text-cobalt transition">
                      {faq.q}
                    </h3>
                    <span
                      className={`shrink-0 p-1 border border-ink transition-transform duration-200 mt-1 ${isOpen ? "rotate-180 bg-ink text-paper" : "bg-paper text-ink"
                        }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${idx}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <p className="text-base md:text-lg text-ink/80 leading-relaxed max-w-3xl">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact({
  title = "Have an app that needs to scale & rank?",
  as = "h2",
  isPage = false,
}: {
  title?: React.ReactNode;
  as?: "h1" | "h2";
  isPage?: boolean;
}) {
  const Tag = isPage ? "h1" : as;
  const L = [
    ["Email", profile.email, `mailto:${profile.email}`],
    ["LinkedIn", profile.linkedin, profile.linkedin],
    ["GitHub", profile.github, profile.github],
  ];
  return (
    <footer id="contact" className="bg-cobalt text-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <p className="label opacity-80">07 — Contact</p>
        <Tag className="font-display text-[clamp(3rem,10vw,8rem)] leading-[.9] mt-4">
          {title}
        </Tag>
        <ul className="mt-12 grid sm:grid-cols-3 border border-paper/40">
          {L.map(([l, v, h], i) => (
            <li
              key={l}
              className={i ? "sm:border-l border-t sm:border-t-0 border-paper/40" : ""}
            >
              {v ? (
                <a
                  href={h}
                  target={h.startsWith("http") ? "_blank" : undefined}
                  rel={h.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block p-5 hover:bg-paper hover:text-cobalt transition"
                >
                  <span className="label">{l}</span>
                  <span className="flex items-center justify-between mt-2 text-lg break-all">
                    {v.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              ) : (
                <div className="p-5 opacity-80">
                  <span className="label">{l}</span>
                  <p className="mt-2">Coming soon</p>
                </div>
              )}
            </li>
          ))}
        </ul>
        <p className="label mt-12 opacity-80">
          © {new Date().getFullYear()} {profile.name} · Software Engineer | Technical SEO, AEO/GEO & Web Performance in Mumbai
        </p>
      </div>
    </footer>
  );
}

