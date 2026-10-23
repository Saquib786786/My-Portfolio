"use client";
import {useEffect,useRef,useState} from "react";
import * as THREE from "three";
const N=11,DEFECTS=5;
export default function Scanner(){
const ref=useRef<HTMLDivElement>(null);const [found,setFound]=useState(0);const [round,setRound]=useState(0);const [covered,setCovered]=useState(0);
useEffect(()=>{
const el=ref.current!;const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const scene=new THREE.Scene();const cam=new THREE.PerspectiveCamera(32,1,.1,100);cam.position.set(0,0,24);
const r=new THREE.WebGLRenderer({antialias:true,alpha:true});r.setPixelRatio(Math.min(devicePixelRatio,2));el.appendChild(r.domElement);
r.domElement.style.touchAction="pan-y";r.domElement.style.display="block";
const g=new THREE.Group();g.rotation.set(-.8,0,.55);scene.add(g);
const mesh=new THREE.InstancedMesh(new THREE.BoxGeometry(.82,.82,.3),new THREE.MeshBasicMaterial(),N*N);g.add(mesh);
const bad=new Set<number>();while(bad.size<DEFECTS)bad.add(Math.floor(Math.random()*N*N));
const seen:boolean[]=new Array(N*N).fill(false),lift:number[]=new Array(N*N).fill(0),target:number[]=new Array(N*N).fill(0);
const base=new THREE.Color("#E9E4D6"),ok=new THREE.Color("#B7CCB2"),hit=new THREE.Color("#E8643C"),blue=new THREE.Color("#1F3FD6");
const m4=new THREE.Matrix4();
const paint=()=>{for(let i=0;i<N*N;i++){const x=i%N-(N-1)/2,y=Math.floor(i/N)-(N-1)/2;m4.makeTranslation(x,y,lift[i]);mesh.setMatrixAt(i,m4);mesh.setColorAt(i,seen[i]?(bad.has(i)?hit:ok):(target[i]?blue:base))}mesh.instanceMatrix.needsUpdate=true;if(mesh.instanceColor)mesh.instanceColor.needsUpdate=true;r.render(scene,cam)};
const size=()=>{const w=el.clientWidth;r.setSize(w,w);paint()};size();const ro=new ResizeObserver(size);ro.observe(el);
const ray=new THREE.Raycaster(),pt=new THREE.Vector2();let last=-1;
const move=(e:PointerEvent)=>{const b=r.domElement.getBoundingClientRect();pt.set(((e.clientX-b.left)/b.width)*2-1,-((e.clientY-b.top)/b.height)*2+1);ray.setFromCamera(pt,cam);
const h=ray.intersectObject(mesh)[0];const id=h?.instanceId??-1;if(id===last)return;if(last>=0)target[last]=0;last=id;
if(id>=0){target[id]=1;seen[id]=true;setFound([...bad].filter(i=>seen[i]).length);setCovered(seen.filter(Boolean).length)}paint()};
const leave=()=>{if(last>=0)target[last]=0;last=-1};
r.domElement.addEventListener("pointermove",move);r.domElement.addEventListener("pointerleave",leave);
let raf=0;const loop=()=>{let d=false;for(let i=0;i<N*N;i++){const t=target[i]*.9,n=reduce?t:lift[i]+(t-lift[i])*.2;if(Math.abs(n-lift[i])>.001){lift[i]=n;d=true}}if(d)paint();raf=requestAnimationFrame(loop)};
loop();paint();
return()=>{cancelAnimationFrame(raf);ro.disconnect();r.domElement.removeEventListener("pointermove",move);r.domElement.removeEventListener("pointerleave",leave);mesh.geometry.dispose();(mesh.material as THREE.Material).dispose();r.dispose();r.domElement.remove();setFound(0);setCovered(0)};
},[round]);
return <figure className="w-full"><div ref={ref} aria-hidden className="w-full aspect-square cursor-crosshair"/>
<figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-ink/20 pt-3 label"><span aria-live="polite">Defects found {found}/{DEFECTS} · Coverage {Math.round(covered/(N*N)*100)}%</span><button onClick={()=>setRound(x=>x+1)} className="underline underline-offset-4 hover:text-cobalt">New build</button></figcaption>
<p className="label text-ink/60 mt-1">{found===DEFECTS?"All defects found. Real coverage is never this easy.":"Hover or drag across the grid. Find the hidden defects."}</p></figure>}
