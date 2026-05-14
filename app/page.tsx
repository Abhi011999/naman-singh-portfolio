"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, ArrowUpRight, Download, TrendingUp, MapPin, Brain, Globe2, BarChart3, Target, Zap } from "lucide-react";

const tickerItems = [
  "Performance Marketing","·","Google Ads","·","B2B Global","·","SEO & GEO","·","Meta Ads","·","Lead Generation","·","CRO","·","GA4","·","App Campaigns","·","Government of India","·","LinkedIn Ads","·","AI Marketing","·",
  "Performance Marketing","·","Google Ads","·","B2B Global","·","SEO & GEO","·","Meta Ads","·","Lead Generation","·","CRO","·","GA4","·","App Campaigns","·","Government of India","·","LinkedIn Ads","·","AI Marketing","·",
];
const jobs = [
  { co: "Social Musketeers", role: "Head of Marketing", period: "Feb 2022 – Present", tags: ["Govt of India","SaaS","B2B Global","Healthcare","Real Estate"] },
  { co: "Vinra Group", role: "Digital Marketing Manager", period: "Jun 2020 – Jan 2022", tags: ["Google Ads","SEO","Meta","CRO"] },
  { co: "Comm8 Digital", role: "Marketing Executive", period: "Feb 2019 – May 2020", tags: ["Lead Gen","Social","PPC"] },
];
const memes = [
  { e: "☕", t: "Client: Cut CAC by 50%", p: "Me: opens 17 tabs, survives on coffee" },
  { e: "📈", t: "POV: ROAS spikes at 2 AM", p: "Scaling campaigns in pyjamas" },
  { e: "💸", t: "Google Ads at 11 PM:", p: "\"Limited by budget\"" },
  { e: "🌱", t: "SEO after 4 months of grinding:", p: "Ranking. Finally." },
];
const chartBars = [22,32,26,48,42,60,55,72,68,85,100];
const screenshots = [
  { src: "/ss1.jpg", label: "Google Ads" },
  { src: "/ss2.jpg", label: "Meta Ads" },
  { src: "/ss3.jpg", label: "Analytics" },
  { src: "/ss4.jpg", label: "Campaign" },
  { src: "/ss5.jpg", label: "Report" },
];

function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x,{stiffness:600,damping:30}), sy = useSpring(y,{stiffness:600,damping:30});
  useEffect(()=>{
    const fn=(e:MouseEvent)=>{x.set(e.clientX);y.set(e.clientY);};
    window.addEventListener("mousemove",fn);
    return ()=>window.removeEventListener("mousemove",fn);
  },[x,y]);
  return <motion.div style={{left:sx,top:sy,translateX:"-50%",translateY:"-50%"}} className="fixed w-6 h-6 rounded-full border border-black/25 pointer-events-none z-[9999] mix-blend-multiply"/>;
}

function Nav() {
  const [s,setS]=useState(false);
  useEffect(()=>{const fn=()=>setS(window.scrollY>60);window.addEventListener("scroll",fn);return()=>window.removeEventListener("scroll",fn);},[]);
  return (
    <motion.nav initial={{y:-60,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${s?"bg-white/85 backdrop-blur-xl border-b border-black/5":""}`}>
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <span className="text-xs font-black tracking-[0.35em] text-black/30 uppercase">NS</span>
        <div className="hidden md:flex items-center gap-8">
          {["Work","Proof","Contact"].map(i=>(
            <a key={i} href={`#${i.toLowerCase()}`} className="text-xs text-black/30 hover:text-black transition-colors uppercase tracking-widest">{i}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse"/>
          <span className="text-xs text-black/25">Available</span>
        </div>
      </div>
    </motion.nav>
  );
}


// Hero — centered photo, NAMAN above / SINGH below, platform icons orbiting around
function Hero() {
  const platforms = [
    { src: "/google.svg",    alt: "Google",     r: "160px", start: "0deg",   dur: "14s" },
    { src: "/facebook.svg",  alt: "Facebook",   r: "160px", start: "60deg",  dur: "14s" },
    { src: "/instagram.svg", alt: "Instagram",  r: "160px", start: "120deg", dur: "14s" },
    { src: "/linkedin.svg",  alt: "LinkedIn",   r: "160px", start: "180deg", dur: "14s" },
    { src: "/youtube.svg",   alt: "YouTube",    r: "160px", start: "240deg", dur: "14s" },
    { src: "/googleads.svg", alt: "Google Ads", r: "160px", start: "300deg", dur: "14s" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f4f0]">
      {/* Ghost background word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[22vw] font-black text-black/[0.028] tracking-tighter leading-none">GROWTH</span>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto px-6 py-24">

        {/* NAMAN — top */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-black tracking-tighter text-black leading-none relative z-20"
          style={{ fontSize: "clamp(3.8rem,13vw,10rem)", marginBottom: "-16px" }}
        >
          NAMAN
        </motion.h1>

        {/* Photo + orbit ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
          style={{ width: 240, height: 240 }}
        >
          {/* Dashed orbit ring */}
          <div
            className="absolute rounded-full border border-dashed border-black/12 pointer-events-none"
            style={{ inset: "-40px" }}
          />

          {/* Platform icons orbiting */}
          {platforms.map((p) => (
            <div
              key={p.alt}
              className="orbit-icon"
              style={{ "--r": p.r, "--start": p.start, "--dur": p.dur, "--delay": "0s" } as React.CSSProperties}
            >
              <div className="w-11 h-11 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.10)] border border-black/5 flex items-center justify-center p-2.5">
                <img src={p.src} alt={p.alt} className="w-full h-full object-contain" />
              </div>
            </div>
          ))}

          {/* Photo circle */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-[0_20px_60px_rgba(0,0,0,0.16)]">
            <Image src="/naman-photo.jpg" alt="Naman Singh" fill className="object-cover object-top" priority />
          </div>
        </motion.div>

        {/* SINGH — bottom */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-black tracking-tighter text-black leading-none relative z-20"
          style={{ fontSize: "clamp(3.8rem,13vw,10rem)", marginTop: "-16px" }}
        >
          SINGH
        </motion.h1>

        {/* Role + tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="text-xs md:text-sm text-black/38 text-center mt-5 mb-1 tracking-wide"
        >
          Growth Marketer · Performance Marketing · SEO · GEO · AI-driven Growth
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="text-xs text-black/22 italic text-center mb-8 max-w-sm"
        >
          &ldquo;Calm mind. Sharp strategy. The best growth comes when you stop chasing and start thinking.&rdquo;
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <a href="#work" className="inline-flex items-center gap-2 bg-black text-white text-xs font-semibold px-6 py-3 rounded-full hover:bg-black/75 transition-all">
            View Work <ArrowUpRight size={11} />
          </a>
          <a href="/naman-resume.pdf" target="_blank" className="inline-flex items-center gap-2 bg-white border border-black/10 text-black/50 text-xs px-6 py-3 rounded-full hover:border-black/25 hover:text-black transition-all shadow-sm">
            <Download size={11} /> Resume
          </a>
          <a href="mailto:Namanworks7@gmail.com" className="inline-flex items-center gap-2 bg-white border border-black/10 text-black/50 text-xs px-6 py-3 rounded-full hover:border-black/25 hover:text-black transition-all shadow-sm">
            <Mail size={11} /> Let&apos;s Build Growth
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ scaleY: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
      </motion.div>
    </section>
  );
}

function Ticker() {
  return (
    <div className="py-3.5 border-y border-black/6 overflow-hidden bg-black/[0.01]">
      <div className="flex ticker-track whitespace-nowrap">
        {tickerItems.map((t,i)=>(
          <span key={i} className="text-[10px] text-black/22 uppercase tracking-widest mx-3">{t}</span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  const items = [
    {n:"7+",l:"Years"},{n:"50+",l:"Clients"},{n:"3×",l:"ROI"},{n:"2-3M",l:"Reached"},{n:"14",l:"Countries"},{n:"200+",l:"Campaigns"}
  ];
  return (
    <section className="relative py-20 overflow-hidden border-b border-black/5">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-black text-black/[0.02] tracking-tighter select-none leading-none">RESULTS</span>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-black/5">
          {items.map((s,i)=>(
            <motion.div key={s.l} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.07}}
              className="bg-[#f5f4f0] py-10 px-4 text-center group hover:bg-white transition-colors cursor-default">
              <div className="text-3xl md:text-4xl font-black text-black mb-1.5 group-hover:scale-110 transition-transform duration-300 origin-bottom">{s.n}</div>
              <div className="text-[9px] text-black/28 uppercase tracking-widest">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-24 px-6 border-b border-black/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <span className="text-xs text-black/22 uppercase tracking-[0.2em]">About</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-2 mb-6 leading-none tracking-tight">Who I am.<br/><span className="text-black/22">What I do.</span></h2>
          <p className="text-sm text-black/50 leading-relaxed mb-4">I&apos;m Naman Singh — a growth marketer who solves growth challenges and builds marketing systems that create real business impact.</p>
          <p className="text-sm text-black/35 leading-relaxed mb-4">7 years across startups, global clients, government projects, healthcare, real estate, and B2B businesses — handling strategy, execution, optimization, and scaling.</p>
          <p className="text-sm text-black/25 leading-relaxed">Strong focus on ROI, AI-driven marketing, and Generative Engine Optimization (GEO).</p>
        </motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.15}}>
          <div className="grid grid-cols-2 gap-px bg-black/5">
            {[{icon:BarChart3,l:"Performance Marketing"},{icon:Globe2,l:"SEO & GEO"},{icon:Target,l:"CRO & Lead Gen"},{icon:TrendingUp,l:"Growth Strategy"},{icon:Brain,l:"AI Marketing"},{icon:Zap,l:"Automation"}].map((sk,i)=>(
              <motion.div key={sk.l} initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:i*0.07}}
                className="bg-[#f5f4f0] p-5 group hover:bg-white transition-colors">
                <sk.icon size={15} className="text-black/22 mb-3 group-hover:text-black/50 transition-colors"/>
                <div className="text-xs font-semibold text-black/50">{sk.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Screenshots() {
  const rots = [-4,3,-2,4,-3];
  const floats = ["float-a","float-b","float-a","float-b","float-a"];
  const positions = [
    {left:"0%",top:"8%"},{left:"20%",top:"40%"},{left:"40%",top:"4%"},
    {left:"60%",top:"32%"},{left:"78%",top:"12%"}
  ];
  return (
    <section id="proof" className="py-24 px-6 border-b border-black/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-16">
          <span className="text-xs text-black/22 uppercase tracking-[0.2em]">Proof of Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-2 leading-none tracking-tight">Real campaigns,<br/><span className="text-black/22">real results.</span></h2>
        </motion.div>
        <div className="relative h-[340px] md:h-[320px]">
          {screenshots.map((ss,i)=>(
            <motion.div key={i}
              initial={{opacity:0,y:60}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:i*0.1,duration:0.7,ease:[0.16,1,0.3,1]}}
              whileHover={{scale:1.08,zIndex:20}}
              className={`${floats[i]} absolute group cursor-pointer`}
              style={{"--rot":`${rots[i]}deg`,...positions[i],zIndex:i+1} as React.CSSProperties}
            >
              <motion.div animate={{rotate:rots[i]}} className="w-40 md:w-48 rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-black/6 bg-white">
                <Image src={ss.src} alt={ss.label} width={192} height={120} className="w-full h-28 object-cover object-top grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"/>
                <div className="px-3 py-2"><span className="text-[9px] text-black/35 uppercase tracking-widest">{ss.label}</span></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChartBars() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el=ref.current;if(!el)return;
    const bars=el.querySelectorAll<HTMLElement>(".bar");
    const obs=new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting){bars.forEach((b,i)=>setTimeout(()=>b.classList.add("visible"),i*55));obs.disconnect();}
    },{threshold:0.35});
    obs.observe(el);return()=>obs.disconnect();
  },[]);
  return (
    <div ref={ref}>
      <div className="flex items-end gap-1.5 h-24 border-b border-black/8">
        {chartBars.map((h,i)=>(
          <div key={i} className={`bar flex-1 rounded-t-sm ${i===chartBars.length-1?"bg-black":"bg-black/14 hover:bg-black/28 transition-colors"}`}
            style={{height:`${h}%`,animationDelay:`${i*55}ms`}}/>
        ))}
      </div>
      <div className="flex items-center gap-1.5 mt-2">
        <TrendingUp size={10} className="text-black/18"/>
        <span className="text-[9px] text-black/18 uppercase tracking-widest">Campaign ROI growth — last bar is now</span>
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="py-24 px-6 border-b border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-14 items-end">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <span className="text-xs text-black/22 uppercase tracking-[0.2em]">Experience</span>
            <h2 className="text-4xl md:text-5xl font-black text-black mt-2 leading-none tracking-tight">7 years.<br/><span className="text-black/22">No fluff.</span></h2>
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.2}}>
            <ChartBars/>
          </motion.div>
        </div>
        <div className="space-y-px bg-black/5">
          {jobs.map((j,i)=>(
            <motion.div key={j.co} initial={{opacity:0,x:-16}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.1}}
              className="bg-[#f5f4f0] px-7 py-6 flex flex-col md:flex-row md:items-center gap-4 hover:bg-white transition-colors group">
              <div className="flex-1">
                <div className="text-sm font-black text-black mb-0.5">{j.co}</div>
                <div className="text-xs text-black/32">{j.role} <span className="text-black/18">· {j.period}</span></div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {j.tags.map(t=>(
                  <span key={t} className="text-[9px] text-black/28 border border-black/8 px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <ArrowUpRight size={14} className="text-black/8 group-hover:text-black/30 transition-colors hidden md:block flex-shrink-0"/>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}} className="mt-px">
          <div className="bg-black px-7 py-6 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <div className="text-[9px] text-white/40 uppercase tracking-widest mb-1">Featured Project</div>
              <div className="text-sm font-black text-white mb-0.5">Government LPG Campaign — Tier 2 India</div>
              <div className="text-xs text-white/45">Reached 2–3 million people through regional mobile-friendly campaigns</div>
            </div>
            <div className="text-3xl font-black text-white/18 flex-shrink-0">2-3M</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Memes() {
  return (
    <section className="py-24 px-6 border-b border-black/5 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[18vw] font-black text-black/[0.016] tracking-tighter select-none leading-none">MEMES</span>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-12">
          <span className="text-xs text-black/22 uppercase tracking-[0.2em]">Because why not</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-2 leading-none tracking-tight">Marketer brain.<br/><span className="text-black/22">Never off.</span></h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/5">
          {memes.map((m,i)=>(
            <motion.div key={i} initial={{opacity:0,scale:0.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.08}}
              whileHover={{scale:1.02,backgroundColor:"rgba(255,255,255,0.8)"}}
              className="bg-[#f5f4f0] p-6 cursor-default transition-all duration-300">
              <div className="text-4xl mb-4 float-a">{m.e}</div>
              <p className="text-xs text-black/40 leading-relaxed mb-3">{m.t}</p>
              <div className="inline-block border border-black/8 rounded-full px-3 py-1 text-[10px] text-black/48 bg-white/60">{m.p}</div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-[9px] text-black/14 mt-5 italic">* No client KPIs were harmed in the making of these memes.</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-end">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <span className="text-xs text-black/22 uppercase tracking-[0.2em]">Let&apos;s talk</span>
            <h2 className="text-5xl md:text-7xl font-black text-black mt-2 leading-none tracking-tighter">Hit<br/>me up.</h2>
            <p className="text-black/30 text-sm mt-5 max-w-xs leading-relaxed">
              B2B, startup, or government project — if you need growth, you need me.<br/>
              <span className="text-black/18">If not... still reach out 😄</span>
            </p>
            <div className="flex items-center gap-2 mt-4"><MapPin size={10} className="text-black/22"/><span className="text-xs text-black/22">Bangalore, India</span></div>
          </motion.div>
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.15}} className="space-y-3">
            <motion.a href="mailto:Namanworks7@gmail.com" whileHover={{scale:1.015}} whileTap={{scale:0.985}}
              className="group flex items-center gap-4 p-5 border border-black/8 hover:border-black/18 bg-white/60 hover:bg-white transition-all rounded-2xl">
              <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center flex-shrink-0"><Mail size={13} className="text-white"/></div>
              <div>
                <div className="text-[9px] text-black/22 uppercase tracking-widest mb-0.5">Email</div>
                <div className="text-sm font-semibold text-black">Namanworks7@gmail.com</div>
              </div>
              <ArrowUpRight size={13} className="ml-auto text-black/12 group-hover:text-black/35 transition-colors"/>
            </motion.a>
            <motion.a href="tel:+919695624105" whileHover={{scale:1.015}} whileTap={{scale:0.985}}
              className="group flex items-center gap-4 p-5 border border-black/8 hover:border-black/18 bg-white/60 hover:bg-white transition-all rounded-2xl">
              <div className="w-9 h-9 rounded-full bg-black/6 flex items-center justify-center flex-shrink-0"><Phone size={13} className="text-black/45"/></div>
              <div>
                <div className="text-[9px] text-black/22 uppercase tracking-widest mb-0.5">Phone</div>
                <div className="text-sm font-semibold text-black">+91 96956 24105</div>
              </div>
              <ArrowUpRight size={13} className="ml-auto text-black/12 group-hover:text-black/35 transition-colors"/>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 py-6 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="text-xs text-black/14 font-semibold tracking-widest uppercase">Naman Singh</span>
        <span className="text-[10px] text-black/10">© 2026</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="bg-[#f5f4f0] min-h-screen grain">
      <Cursor/>
      <Nav/>
      <Hero/>
      <Ticker/>
      <Stats/>
      <About/>
      <Screenshots/>
      <Work/>
      <Memes/>
      <Contact/>
      <Footer/>
    </main>
  );
}
