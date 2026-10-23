import type {Metadata} from "next";
import {Instrument_Serif,Hanken_Grotesk,JetBrains_Mono} from "next/font/google";
import "./globals.css";
const d=Instrument_Serif({weight:"400",style:["normal","italic"],subsets:["latin"],variable:"--f-display"});
const s=Hanken_Grotesk({subsets:["latin"],variable:"--f-sans"});
const m=JetBrains_Mono({subsets:["latin"],variable:"--f-mono"});
const desc="QA engineer in progress, building toward SDET through real-world testing, automation and better engineering practices.";
export const metadata:Metadata={title:"Mohd Saquib Mohd Aarif — QA Engineer in progress",description:desc,openGraph:{title:"Mohd Saquib Mohd Aarif — I break software to make it better",description:desc,type:"website"}};
export default function L({children}:{children:React.ReactNode}){return <html lang="en" className={`${d.variable} ${s.variable} ${m.variable}`}><body>{children}</body></html>}
