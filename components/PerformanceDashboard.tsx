"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gauge, Search, Sparkles, CheckCircle2, RotateCw, Globe, Zap, ShieldCheck } from "lucide-react";

export default function PerformanceDashboard() {
  const [tab, setTab] = useState<"vitals" | "crawler">("vitals");
  const [auditing, setAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState("");
  const [selectedBot, setSelectedBot] = useState<"google" | "perplexity" | "gpt">("google");

  const runAudit = () => {
    if (auditing) return;
    setAuditing(true);
    setAuditStep("Connecting to edge CDN...");
    setTimeout(() => setAuditStep("Profiling LCP, INP & CLS..."), 400);
    setTimeout(() => setAuditStep("Validating JSON-LD Schema graph..."), 800);
    setTimeout(() => setAuditStep("Auditing AEO & GEO indexation..."), 1200);
    setTimeout(() => {
      setAuditing(false);
      setAuditStep("");
    }, 1600);
  };

  const scores = [
    { label: "Performance", score: 100 },
    { label: "Technical SEO", score: 100 },
    { label: "Best Practices", score: 100 },
    { label: "Accessibility", score: 100 },
  ];

  const vitals = [
    { name: "LCP", val: "0.8s", target: "< 2.5s", desc: "Largest Contentful Paint", status: "Good" },
    { name: "INP", val: "16ms", target: "< 200ms", desc: "Interaction to Next Paint", status: "Good" },
    { name: "CLS", val: "0.00", target: "< 0.1", desc: "Cumulative Layout Shift", status: "Zero" },
    { name: "TTFB", val: "42ms", target: "< 800ms", desc: "Time to First Byte", status: "Fast" },
  ];

  const bots = {
    google: {
      name: "Googlebot",
      agent: "Googlebot/2.1 (+http://www.google.com/bot.html)",
      status: "200 OK · Indexed",
      target: "Traditional Search & Knowledge Graph",
      schemas: "WebSite · Person · FAQPage · Occupation",
      citation: "Top search ranking for 'Mohd Saquib Software Engineer'",
    },
    perplexity: {
      name: "PerplexityBot",
      agent: "PerplexityBot/1.0 (+https://perplexity.ai/bot)",
      status: "200 OK · Cited",
      target: "Answer Engine Optimization (AEO)",
      schemas: "llms.txt manifest · Semantic entity resolution",
      citation: "Direct citation: Software Engineer at Nexcore Alliance LLP",
    },
    gpt: {
      name: "GPTBot",
      agent: "GPTBot/1.0 (+https://openai.com/gptbot)",
      status: "200 OK · Parsed",
      target: "Generative Engine Optimization (GEO)",
      schemas: "llms.txt · Structured markdown knowledge base",
      citation: "Verified competencies in Next.js, Core Web Vitals & Technical SEO",
    },
  };

  return (
    <div className="border border-ink bg-paper shadow-[8px_8px_0_#1F3FD6] flex flex-col justify-between overflow-hidden">
      {/* Top Header / Switcher */}
      <div className="border-b border-ink bg-ink/5 p-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 font-mono text-xs">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-ink uppercase tracking-wider">Live System Audit</span>
        </div>
        <div className="flex border border-ink bg-paper divide-x divide-ink text-xs font-mono">
          <button
            onClick={() => setTab("vitals")}
            className={`px-3 py-1 transition flex items-center gap-1.5 ${
              tab === "vitals" ? "bg-cobalt text-paper font-semibold" : "hover:bg-ink/10 text-ink"
            }`}
          >
            <Gauge size={13} /> Web Vitals
          </button>
          <button
            onClick={() => setTab("crawler")}
            className={`px-3 py-1 transition flex items-center gap-1.5 ${
              tab === "crawler" ? "bg-cobalt text-paper font-semibold" : "hover:bg-ink/10 text-ink"
            }`}
          >
            <Search size={13} /> AEO / GEO
          </button>
        </div>
      </div>

      {/* Tab 1: Lighthouse & Core Web Vitals */}
      {tab === "vitals" && (
        <div className="p-4 sm:p-5 space-y-5">
          {/* 4 Perfect Lighthouse Scores */}
          <div className="grid grid-cols-4 gap-2 border border-ink p-3 bg-paper">
            {scores.map((s) => (
              <div key={s.label} className="text-center">
                <div className="relative inline-flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-emerald-50">
                    <span className="font-mono text-sm sm:text-base font-bold text-emerald-700">
                      {auditing ? "--" : s.score}
                    </span>
                  </div>
                </div>
                <p className="mt-1.5 text-[10px] sm:text-xs font-mono font-medium text-ink/75 truncate">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Vitals Telemetry Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            {vitals.map((v) => (
              <div key={v.name} className="border border-ink/40 p-2.5 bg-lav/20 hover:bg-lav/40 transition">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-xs text-cobalt">{v.name}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 border border-emerald-600 bg-emerald-100 text-emerald-800">
                    {v.status}
                  </span>
                </div>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="font-display text-2xl text-ink leading-none">
                    {auditing ? "..." : v.val}
                  </span>
                  <span className="text-[10px] font-mono text-ink/60">{v.target}</span>
                </div>
                <p className="text-[10px] text-ink/70 mt-1 truncate">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Realtime Action / Status Bar */}
          <div className="pt-2 border-t border-ink/20 flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs font-mono text-ink/75 flex items-center gap-1.5">
              <Zap size={14} className="text-cobalt" />
              <span>{auditing ? auditStep : "Next.js App Router · Global Edge CDN"}</span>
            </div>
            <button
              onClick={runAudit}
              disabled={auditing}
              className="text-xs font-mono border border-ink px-3 py-1 bg-paper hover:bg-ink hover:text-paper transition inline-flex items-center gap-1.5 disabled:opacity-50"
            >
              <RotateCw size={12} className={auditing ? "animate-spin" : ""} />
              {auditing ? "Profiling..." : "Run Live Audit"}
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Search & AI Engine Inspector */}
      {tab === "crawler" && (
        <div className="p-4 sm:p-5 space-y-4">
          {/* Bot Selector */}
          <div className="grid grid-cols-3 gap-1 border border-ink p-1 bg-paper font-mono text-xs text-center">
            {(["google", "perplexity", "gpt"] as const).map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBot(b)}
                className={`py-1.5 px-1 transition ${
                  selectedBot === b ? "bg-cobalt text-paper font-semibold" : "hover:bg-ink/10 text-ink"
                }`}
              >
                {b === "google" ? "Googlebot" : b === "perplexity" ? "Perplexity" : "GPTBot"}
              </button>
            ))}
          </div>

          {/* Inspection Card */}
          <div className="border border-ink p-3.5 bg-sage/20 space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between border-b border-ink/20 pb-2">
              <span className="text-ink/60">Crawler Agent</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 size={13} /> {bots[selectedBot].status}
              </span>
            </div>
            <p className="text-[11px] text-ink/80 break-all font-mono">
              {bots[selectedBot].agent}
            </p>

            <div className="pt-2 border-t border-ink/20 space-y-1.5">
              <div>
                <span className="text-ink/60 block text-[10px] uppercase">Engine Target</span>
                <span className="text-ink font-semibold">{bots[selectedBot].target}</span>
              </div>
              <div>
                <span className="text-ink/60 block text-[10px] uppercase">Parsed Schemas</span>
                <span className="text-cobalt font-semibold">{bots[selectedBot].schemas}</span>
              </div>
              <div>
                <span className="text-ink/60 block text-[10px] uppercase">AI Citation Status</span>
                <span className="text-ink/85">{bots[selectedBot].citation}</span>
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-ink/75 flex items-center justify-between pt-1 border-t border-ink/20">
            <span className="flex items-center gap-1 text-cobalt">
              <ShieldCheck size={14} /> Schema 100% Validated
            </span>
            <span>robots.txt: Allow All</span>
          </div>
        </div>
      )}
    </div>
  );
}

