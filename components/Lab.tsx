"use client";
import {useState} from "react";
import {AnimatePresence,motion} from "framer-motion";
import {bugs,type Sev} from "@/lib/data";
const sevs:(Sev|"All")[]=["All","Critical","High","Medium","Low"];
const tone:Record<Sev,string>={Critical:"bg-[#F3B9A6]",High:"bg-peach",Medium:"bg-lav",Low:"bg-sage"};
export default function Lab(){
const [f,setF]=useState<Sev|"All">("All");const [sel,setSel]=useState(bugs[0].id);const [done,setDone]=useState<Record<string,number>>({});
const list=bugs.filter(b=>f==="All"||b.sev===f);const cur=list.find(b=>b.id===sel)??list[0];const n=cur?done[cur.id]??0:0;
return <div className="border border-ink bg-paper">
<div className="flex flex-wrap items-center gap-2 border-b border-ink p-3"><span className="label bg-ink text-paper px-2 py-1">Demo data</span><span className="label text-ink/60">Fictional task app. Not real results; nothing here ran in CI.</span></div>
<div className="flex flex-wrap gap-2 p-3 border-b border-ink/20" role="group" aria-label="Filter by severity">{sevs.map(s=><button key={s} aria-pressed={f===s} onClick={()=>setF(s)} className={`label px-3 py-2 border transition ${f===s?"bg-cobalt text-paper border-cobalt":"border-ink hover:bg-ink hover:text-paper"}`}>{s}{s!=="All"&&` · ${bugs.filter(b=>b.sev===s).length}`}</button>)}</div>
<div className="grid md:grid-cols-[2fr_3fr]">
<ul className="border-b md:border-b-0 md:border-r border-ink/20">{list.map(b=><li key={b.id}><button onClick={()=>setSel(b.id)} aria-current={cur?.id===b.id} className={`w-full text-left p-4 border-b border-ink/20 transition ${cur?.id===b.id?"bg-lav":"hover:bg-sage/40"}`}><span className="flex gap-2 items-center label"><span className={`px-2 py-0.5 ${tone[b.sev]}`}>{b.sev}</span><span className="text-ink/60">{b.id} · {b.area}</span></span><span className="block mt-2 font-medium">{b.title}</span></button></li>)}</ul>
<AnimatePresence mode="wait">{cur&&<motion.div key={cur.id} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:.2}} className="p-5">
<h3 className="font-display text-3xl">{cur.title}</h3>
<p className="label mt-4 text-ink/60">Steps to reproduce: run them one at a time</p>
<ol className="mt-2 space-y-2">{cur.steps.map((s,i)=><li key={i} className={`flex gap-3 border border-ink/20 p-3 transition ${i<n?"bg-sage/60":"opacity-60"}`}><span className="label text-cobalt">{i+1}</span>{s}</li>)}</ol>
<div className="mt-4 flex gap-3 items-center"><button disabled={n>=cur.steps.length} onClick={()=>setDone(d=>({...d,[cur.id]:n+1}))} className="bg-ink text-paper px-4 py-2 label disabled:opacity-30">Run next step</button><button onClick={()=>setDone(d=>({...d,[cur.id]:0}))} className="label underline underline-offset-4">Reset</button></div>
{n>=cur.steps.length&&<motion.div initial={{opacity:0}} animate={{opacity:1}} className="mt-5 border border-ink p-4 font-mono text-sm"><p className="text-ink/60">expect(actual).toBe(expected)</p><p className="mt-2">Expected: <b>{cur.expected}</b></p><p>Actual: <b className="text-[#C2410C]">{cur.actual}</b></p><p className="mt-2 label text-[#C2410C]">Assertion failed: defect reproduced (demo)</p></motion.div>}
</motion.div>}</AnimatePresence></div></div>}
