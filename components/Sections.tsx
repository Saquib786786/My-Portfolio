"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ArrowDown, ChevronDown, MapPin, CheckCircle2 } from "lucide-react";
import { profile, projects, steps, journey, skills, recruiterFaqs, type FAQItem } from "@/lib/data";
import Lab from "./Lab";
const Scanner = dynamic(() => import("./Scanner"), { ssr: false, loading: () => <div className="aspect-square" /> });
function R({ children, className = "", d = 0 }: { children: React.ReactNode; className?: string; d?: number }) { const rm = useReducedMotion(); return <motion.div className={className} initial={rm ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .5, delay: d }}>{children}</motion.div> }
const Pending = ({ t = "To be added" }: { t?: string }) => <span className="text-ink/55 border-b border-dashed border-ink/30">{t}</span>;
function Head({ n, t, sub }: { n: string; t: string; sub?: string }) { return <R className="mb-10 md:mb-14 grid md:grid-cols-12 gap-4"><p className="label text-cobalt md:col-span-2">{n}</p><div className="md:col-span-10"><h2 className="font-display text-5xl md:text-7xl leading-[.95]">{t}</h2>{sub && <p className="mt-4 max-w-xl text-ink/70">{sub}</p>}</div></R> }
const links = [["About", "/aboutus"], ["Work", "/projects"], ["Testing Lab", "/testing-lab"], ["Journey", "/skills"], ["FAQ", "/#faq"], ["Contact", "/contactus"]];
export function Nav() {
  const [o, setO] = useState(false); return <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-ink/20"><nav aria-label="Primary" className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">
    <Link href="/" className="font-display text-2xl">Saquib<span className="text-cobalt">.</span></Link>
    <ul className="hidden md:flex gap-8 label">{links.map(([l, h]) => <li key={h}><Link href={h} className="hover:text-cobalt">{l}</Link></li>)}</ul>
    <div className="flex items-center gap-3"><a href={profile.resume} className="label border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition">Resume</a>
      <button className="md:hidden p-2" aria-expanded={o} aria-label="Toggle menu" onClick={() => setO(!o)}>{o ? <X /> : <Menu />}</button></div></nav>
    {o && <ul className="md:hidden border-t border-ink/20 px-5 py-4 space-y-3 bg-paper">{links.map(([l, h]) => <li key={h}><Link href={h} onClick={() => setO(false)} className="font-display text-3xl">{l}</Link></li>)}</ul>}</header>
}
export function Hero() {
  return <section id="top" className="mx-auto max-w-7xl px-5 pt-10 md:pt-16 pb-20 grid md:grid-cols-12 gap-8 items-end">
    <div className="md:col-span-7">
      <div className="inline-flex items-center gap-2 border border-ink bg-paper px-3 py-1.5 text-xs font-mono mb-4">
        <span className="h-2 w-2 rounded-full bg-cobalt animate-pulse" />
        <span className="uppercase tracking-wider">QA Engineer & SDET in Mumbai · Open to Roles</span>
      </div>
      <h1 className="font-display text-[clamp(3.4rem,10vw,9rem)] leading-[.88] tracking-tight">I <span className="text-cobalt italic underline decoration-peach decoration-[.05em] underline-offset-[.08em]">break</span><br />software<br />to make it <em>better.</em></h1>
      <p className="label text-cobalt mt-4 font-mono">Mohd Saquib Mohd Aarif — QA Engineer & SDET in Mumbai</p>
      <p className="mt-5 max-w-lg text-lg text-ink/80">Junior Software Developer Intern at Nexcore Alliance LLP (Mumbai). Specializing in manual QA testing passes, Playwright test automation with TypeScript, Postman API testing, and defect tracking.</p>
      <div className="mt-8 flex flex-wrap gap-3"><Link href="/projects" className="bg-cobalt text-paper px-6 py-3 inline-flex items-center gap-2 hover:bg-ink transition">Explore projects <ArrowDown size={16} /></Link><a href={profile.resume} className="border border-ink px-6 py-3 inline-flex items-center gap-2 hover:bg-ink hover:text-paper transition">View resume <ArrowUpRight size={16} /></a><a href="#faq" className="border border-ink/50 px-6 py-3 inline-flex items-center gap-2 hover:border-ink transition text-ink">Recruiter FAQ</a></div></div>
    <div className="md:col-span-5 md:translate-y-6 bg-lav/50 border border-ink p-4"><Scanner /></div></section>
}
export function About() {
  return <section id="about" className="bg-sage/40 border-y border-ink/20"><div className="mx-auto max-w-7xl px-5 py-20 md:py-28"><Head n="01 — About" t="Testing is how I learn software." />
    <div className="grid md:grid-cols-[4fr_6fr] gap-14 items-center"><figure className="max-w-[380px] justify-self-center m-0"><div className="relative border border-ink bg-peach aspect-[4/5] shadow-[14px_14px_0_#1F3FD6] transition hover:-translate-x-1 hover:-translate-y-1"><img src="/saquib.jpg" width={520} height={650} alt="Portrait of Mohd Saquib Mohd Aarif in a dark suit, arms crossed" className="h-full w-full object-cover" /><span className="absolute left-3 bottom-3 label bg-paper border border-ink px-2 py-1 normal-case">expect(curiosity).toBeTruthy()</span></div><figcaption className="label mt-7 text-ink/60">Mohd Saquib · TY BSc IT · QA intern</figcaption></figure><R className="space-y-4 text-lg"><p>I'm Mohd Saquib Mohd Aarif, a TY BSc IT student pursuing my degree while working as a Junior Software Developer Intern at Nexcore Alliance LLP.</p><p>There I'm on a live software project with QA testing responsibilities: functional, sanity, regression and exploratory testing on real mobile and web applications, plus API testing with Postman.</p><p>I'm aiming for QA Engineer / SDET Intern / Junior SDET roles, with test automation, CI/CD and AI-assisted testing as the long-term direction.</p></R></div></div></section>
}
export function Work() {
  return <section id="work" className="mx-auto max-w-7xl px-5 py-20 md:py-28"><Head n="02 — Selected work" t="Case studies, honestly labelled." sub="Details are added only when verified. Anything missing is marked, not invented." />
    {projects.map(p => <R key={p.id}><article className="grid md:grid-cols-12 gap-6 border-t border-ink py-10">
      <div className="md:col-span-1 font-display text-5xl text-cobalt">{p.id}</div>
      <div className="md:col-span-5"><span className="label bg-peach px-2 py-1">{p.status}</span><h3 className="font-display text-4xl md:text-5xl mt-4 leading-none">{p.name}</h3><p className="label mt-3 text-ink/60">{p.kind}</p><p className="mt-4 text-ink/80">{p.context}</p></div>
      <dl className="md:col-span-6 grid sm:grid-cols-2 gap-x-6 gap-y-5 text-sm">
        <div><dt className="label text-ink/60">My role</dt><dd className="mt-1">{p.role ?? <Pending />}</dd></div>
        <div><dt className="label text-ink/60">Stack</dt><dd className="mt-1">{p.stack?.join(" · ") ?? <Pending />}</dd></div>
        <div className="sm:col-span-2"><dt className="label text-ink/60">Test scenarios / implementation</dt><dd className="mt-1">{p.tested ? p.tested.join("; ") : <Pending />}</dd></div>
        <div><dt className="label text-ink/60">Repository</dt><dd className="mt-1">{p.repo ? <a className="text-cobalt underline" href={p.repo}>View on GitHub</a> : <Pending t="Link coming soon" />}</dd></div>
        <div><dt className="label text-ink/60">Live demo</dt><dd className="mt-1">{p.live ? <a className="text-cobalt underline" href={p.live}>Open demo</a> : <Pending t="Link coming soon" />}</dd></div></dl></article></R>)}</section>
}
export function LabSection() { return <section id="lab" className="bg-peach/40 border-y border-ink/20"><div className="mx-auto max-w-7xl px-5 py-20 md:py-28"><Head n="03 — Testing Lab" t="Reproduce a bug yourself." sub="A bug-report explorer: filter by severity, open a report, step through the reproduction and watch the assertion fail." /><R><Lab /></R></div></section> }
export function Approach() {
  return <section className="mx-auto max-w-7xl px-5 py-20 md:py-28"><Head n="04 — Engineering approach" t="How I work a feature." />
    <ol className="relative border-l border-ink ml-2 md:ml-[16.6%] space-y-8">{steps.map(([t, d], i) => <li key={t}><R><div className="pl-8 relative"><span className="absolute -left-[7px] top-2 h-3 w-3 bg-cobalt" /><span className="label text-cobalt">Step {String(i + 1).padStart(2, "0")}</span><h3 className="font-display text-3xl md:text-4xl">{t}</h3><p className="text-ink/70 max-w-lg">{d}</p></div></R></li>)}</ol></section>
}
export function Journey() {
  const cols: [string, string[], string][] = [["Using now", journey.using, "bg-sage"], ["Learning", journey.learning, "bg-lav"], ["Next", journey.next, "bg-peach"]];
  return <section id="journey" className="mx-auto max-w-7xl px-5 pb-20 md:pb-28"><Head n="05 — Journey" t="From manual QA toward automation." sub="BSc IT degree and internship in parallel. Skills I use today are kept apart from what I'm learning and what I'm aiming for." />
    <div className="grid md:grid-cols-3 border border-ink">{cols.map(([t, l, c], i) => <R key={t} d={i * .1} className={`p-6 ${c} ${i ? "md:border-l border-t md:border-t-0 border-ink" : ""}`}><h3 className="font-display text-3xl">{t}</h3><ul className="mt-4 space-y-3">{l.map(x => <li key={x} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 bg-ink shrink-0" />{x}</li>)}</ul></R>)}</div></section>
}
export function Skills() {
  return <section className="mx-auto max-w-7xl px-5 pb-20 md:pb-28"><Head n="06 — Skills" t="Labels, not percentages." />
    <div className="divide-y divide-ink/20 border-y border-ink">{skills.map(s => <R key={s.g}><div className="grid md:grid-cols-12 gap-3 py-5"><h3 className="label md:col-span-3 pt-1">{s.g}</h3><ul className="md:col-span-9 flex flex-wrap gap-2">{s.items.map(([n, st]) => <li key={n} className={`px-3 py-1.5 border border-ink text-sm ${st === "learning" ? "bg-lav" : "bg-sage/60"}`}>{n}<span className="label ml-2 text-ink/60">{st === "learning" ? "learning" : "in use"}</span></li>)}</ul></div></R>)}</div>
    <p className="label mt-4 text-ink/60">In use = applied on my internship project. Learning = in progress.</p></section>
}

export function RecruiterFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-paper border-t border-ink/20">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <Head
          n="07 — Recruiter & AI FAQ"
          t="Questions recruiters ask."
          sub="Direct, verified answers for tech recruiters, engineering managers, and AI search engines seeking QA engineers in Mumbai."
        />
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-4">
            <div className="border border-ink p-5 bg-lav/40 space-y-2">
              <span className="label text-cobalt flex items-center gap-1.5 font-mono">
                <MapPin size={14} /> Location Target
              </span>
              <p className="font-display text-2xl">Mumbai, Maharashtra</p>
              <p className="text-sm text-ink/75">
                Open to on-site roles across Mumbai, hybrid setups, and remote QA opportunities.
              </p>
            </div>
            <div className="border border-ink p-5 bg-sage/40 space-y-2">
              <span className="label text-cobalt flex items-center gap-1.5 font-mono">
                <CheckCircle2 size={14} /> Core Focus
              </span>
              <p className="text-sm text-ink/80 leading-relaxed">
                Manual QA passes, Playwright test automation with TypeScript, Postman API testing, and reproducible bug reports.
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
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pt-4 text-base md:text-lg text-ink/80 leading-relaxed max-w-3xl"
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const L = [["Email", profile.email, `mailto:${profile.email}`], ["LinkedIn", profile.linkedin, profile.linkedin], ["GitHub", profile.github, profile.github]];
  return <footer id="contact" className="bg-cobalt text-paper"><div className="mx-auto max-w-7xl px-5 py-20 md:py-28"><p className="label opacity-80">08 — Contact</p><h2 className="font-display text-[clamp(3rem,10vw,8rem)] leading-[.9] mt-4">Have a build<br />that needs <em>breaking?</em></h2>
    <ul className="mt-12 grid sm:grid-cols-3 border border-paper/40">{L.map(([l, v, h], i) => <li key={l} className={i ? "sm:border-l border-t sm:border-t-0 border-paper/40" : ""}>{v ? <a href={h} className="block p-5 hover:bg-paper hover:text-cobalt transition"><span className="label">{l}</span><span className="flex items-center justify-between mt-2 text-lg break-all">{v.replace(/^https?:\/\//, "")}<ArrowUpRight size={18} /></span></a> : <div className="p-5 opacity-80"><span className="label">{l}</span><p className="mt-2">Coming soon</p></div>}</li>)}</ul>
    <p className="label mt-12 opacity-80">© {new Date().getFullYear()} {profile.name} · QA Engineer & SDET in Mumbai</p></div></footer>
}

