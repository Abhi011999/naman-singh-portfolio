"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, Download, MapPin, ArrowUpRight } from "lucide-react";

const platforms = [
  { src: "/google.svg",    alt: "Google",    r: "150px", start:   "0deg", dur: "16s" },
  { src: "/facebook.svg",  alt: "Meta",      r: "150px", start:  "60deg", dur: "16s" },
  { src: "/instagram.svg", alt: "Instagram", r: "150px", start: "120deg", dur: "16s" },
  { src: "/linkedin.svg",  alt: "LinkedIn",  r: "150px", start: "180deg", dur: "16s" },
  { src: "/youtube.svg",   alt: "YouTube",   r: "150px", start: "240deg", dur: "16s" },
  { src: "/googleads.svg", alt: "Google Ads",r: "150px", start: "300deg", dur: "16s" },
];

const jobs = [
  { co: "Social Musketeers", role: "Head of Marketing", period: "Feb 2022 – Present", desc: "Led end-to-end marketing for SaaS, healthcare, real estate & e-commerce. Government of India projects and global B2B clients.", tags: ["Govt of India","SaaS","B2B","Healthcare"] },
  { co: "Vinra Group", role: "Digital Marketing Manager", period: "Jun 2020 – Jan 2022", desc: "Managed Google, Meta, YouTube & LinkedIn Ads. Built conversion funnels and drove organic growth through technical SEO.", tags: ["Google Ads","Meta Ads","SEO","CRO"] },
  { co: "Comm8 Digital", role: "Marketing Executive", period: "Feb 2019 – May 2020", desc: "Lead generation across Facebook, Instagram & LinkedIn. Optimized Google Ads and SEO campaigns.", tags: ["Lead Gen","Social","PPC"] },
];

const skills = [
  { label: "Performance Marketing", pct: 95 },
  { label: "SEO & GEO", pct: 90 },
  { label: "Paid Social — Meta / LinkedIn", pct: 88 },
  { label: "B2B Lead Generation", pct: 85 },
  { label: "Analytics & Reporting", pct: 92 },
  { label: "Marketing Automation & AI", pct: 82 },
];

const metrics = [
  { n: "7+",   l: "Years Experience" },
  { n: "50+",  l: "Global Clients" },
  { n: "8.4x", l: "Best ROAS" },
  { n: "2-3M", l: "People Reached" },
  { n: "14",   l: "Countries" },
  { n: "200+", l: "Campaigns" },
];

const memes = [
  { e: "coffee", t: "Client: Cut CAC by 50%", p: "Me: opens 17 tabs, survives on coffee" },
  { e: "chart",  t: "ROAS spikes at 2 AM",    p: "Scaling campaigns in pyjamas" },
  { e: "money",  t: "Google Ads at 11 PM:",    p: "Limited by budget" },
  { e: "plant",  t: "SEO after 4 months:",     p: "Ranking. Finally." },
];

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-[#f7f5f0]">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9, ease: [0.16,1,0.3,1] }}>
          <span className="font-black text-black tracking-tighter leading-none select-none" style={{ fontSize: "clamp(3.5rem,10vw,8rem)", letterSpacing: "-0.04em" }}>NAMAN</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 1, ease: [0.16,1,0.3,1] }}
          className="relative my-2" style={{ width: 220, height: 280 }}>
          <div className="absolute rounded-full border border-dashed border-black/10 pointer-events-none"
            style={{ inset: "-60px", borderRadius: "50%" }} />
          {platforms.map((p, i) => (
            <div key={i} className="orbit-icon"
              style={{ "--r": p.r, "--start": p.start, "--dur": p.dur, "--delay": "0s", top: "50%", left: "50%" } as React.CSSProperties}>
              <div className="w-10 h-10 rounded-full bg-white shadow-md border border-black/5 flex items-center justify-center p-2.5">
                <img src={p.src} alt={p.alt} className="w-full h-full object-contain" />
              </div>
            </div>
          ))}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <Image src="/naman-photo.jpg" alt="Naman Singh" fill className="object-cover object-top" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9, ease: [0.16,1,0.3,1] }}>
          <span className="font-black text-black tracking-tighter leading-none select-none" style={{ fontSize: "clamp(3.5rem,10vw,8rem)", letterSpacing: "-0.04em" }}>SINGH</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-5 space-y-1">
          <p className="text-base font-semibold text-black/55">Performance Marketer · Growth Strategist</p>
          <p className="text-sm text-black/28 max-w-xs mx-auto leading-relaxed">Building brands through scalable digital systems</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-7 flex flex-wrap justify-center gap-2">
          <a href="#work" className="inline-flex items-center gap-2 bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-black/75 transition-all">View Work <ArrowUpRight size={11} /></a>
          <a href="/naman-resume.pdf" target="_blank" className="inline-flex items-center gap-2 border border-black/15 text-black/45 text-xs px-5 py-2.5 rounded-full hover:border-black/30 hover:text-black transition-all"><Download size={11} /> Download Resume</a>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
          className="mt-8 grid grid-cols-4 gap-4">
          {[{ n:"7+",l:"Years" },{ n:"50+",l:"Clients" },{ n:"200+",l:"Campaigns" },{ n:"14",l:"Countries" }].map((m) => (
            <div key={m.l} className="text-center px-4">
              <div className="text-2xl font-black text-black">{m.n}</div>
              <div className="text-[9px] text-black/30 uppercase tracking-widest mt-0.5">{m.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <span className="text-[8px] text-black/18 uppercase tracking-[0.3em]">scroll</span>
        <motion.div animate={{ y: [0,6,0] }} transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-px h-8 bg-gradient-to-b from-black/20 to-transparent" />
      </motion.div>
    </section>
  );
}

function Ticker() {
  const items = Array(2).fill(["Performance Marketing","·","Google Ads","·","Meta Ads","·","SEO","·","LinkedIn","·","GA4","·","AI Marketing","·","Govt of India","·","14 Countries","·","200+ Campaigns","·"]).flat();
  return (
    <div className="py-3 border-y border-black/5 overflow-hidden bg-black/[0.02]">
      <div className="flex ticker-track whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="text-[10px] text-black/25 uppercase tracking-widest mx-4">{t}</span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs text-black/25 uppercase tracking-[0.25em]">About</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-3 mb-6 leading-tight tracking-tighter">I build marketing<br />systems that scale.</h2>
          <p className="text-sm text-black/45 leading-relaxed mb-3">7 years solving hard growth challenges across startups, global B2B brands, government projects, healthcare, real estate, and e-commerce.</p>
          <p className="text-sm text-black/28 leading-relaxed">Strong focus on ROI, AI-driven marketing, and Generative Engine Optimization (GEO) — the next frontier of search.</p>
          <div className="flex items-center justify-center gap-2 mt-5"><MapPin size={10} className="text-black/20" /><span className="text-xs text-black/25">Bangalore, India</span></div>
        </motion.div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-xs text-black/25 uppercase tracking-[0.25em]">Experience</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-3 leading-tight tracking-tighter">7 years.<br /><span className="text-black/18">No fluff.</span></h2>
        </motion.div>
        <div className="space-y-3">
          {jobs.map((j, i) => (
            <motion.div key={j.co} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="border border-black/6 rounded-2xl p-6 bg-white/60 hover:bg-white transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-sm font-black text-black">{j.co}</div>
                  <div className="text-xs text-black/35">{j.role} <span className="text-black/18">· {j.period}</span></div>
                </div>
              </div>
              <p className="text-xs text-black/30 leading-relaxed mb-3">{j.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {j.tags.map(t => <span key={t} className="text-[9px] text-black/35 border border-black/8 px-2.5 py-1 rounded-full">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-3 border border-black/8 rounded-2xl p-6 bg-black text-white">
          <div className="text-[9px] text-white/30 uppercase tracking-widest mb-1">Featured Project</div>
          <div className="text-base font-black mb-1">Government LPG Campaign — Tier 2 India</div>
          <div className="text-xs text-white/35">Reached 2-3 million people through regional mobile-first campaigns</div>
          <div className="text-5xl font-black text-white/10 mt-2 leading-none">2-3M</div>
        </motion.div>
      </div>
    </section>
  );
}

function Screenshots() {
  const shots = [
    { src: "/ss1.jpg", label: "Google Ads Campaign", rotate: "-2deg" },
    { src: "/ss2.jpg", label: "Meta Ads Results",    rotate: "1.5deg" },
    { src: "/ss3.jpg", label: "Analytics Report",    rotate: "-1deg" },
    { src: "/ss4.jpg", label: "Campaign Dashboard",  rotate: "2.5deg" },
    { src: "/ss5.jpg", label: "Performance Report",  rotate: "-1.5deg" },
  ];
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs text-black/25 uppercase tracking-[0.25em]">Proof of Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-3 leading-tight tracking-tighter">Real Campaigns.<br /><span className="text-black/18">Real Numbers.</span></h2>
        </motion.div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {shots.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.04, rotate: "0deg", zIndex: 10 }}
            className="relative cursor-pointer group"
            style={{ rotate: s.rotate, width: 280 } as React.CSSProperties}>
            <div className="relative h-44 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.10)] border border-black/5">
              <Image src={s.src} alt={s.label} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] text-white font-semibold">{s.label}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const bars = el.querySelectorAll<HTMLElement>(".skill-bar");
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        bars.forEach((b, i) => setTimeout(() => b.classList.add("filled"), i * 100));
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-xs text-black/25 uppercase tracking-[0.25em]">Skills</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-3 leading-tight tracking-tighter">What I am<br /><span className="text-black/18">great at.</span></h2>
        </motion.div>
        <div className="space-y-5">
          {skills.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div className="flex justify-between mb-1.5">
                <span className="text-xs text-black/45">{s.label}</span>
                <span className="text-xs text-black/25 font-mono">{s.pct}%</span>
              </div>
              <div className="h-px bg-black/6 relative overflow-visible rounded-full">
                <div className="skill-bar h-full rounded-full absolute inset-0"
                  style={{ "--w": `${s.pct}%`, animationDelay: `${i * 100}ms`, background: "linear-gradient(90deg,#111,#555)" } as React.CSSProperties} />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-10 text-center">
          <p className="text-[10px] text-black/18 uppercase tracking-widest mb-3">Platforms</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Google Ads","Meta Ads","LinkedIn Ads","GA4","Search Console","Tag Manager","Looker Studio","WordPress","HubSpot","Shopify"].map(p => (
              <span key={p} className="text-[10px] text-black/30 border border-black/6 px-3 py-1.5 rounded-full bg-white/60">{p}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-xs text-black/25 uppercase tracking-[0.25em]">Results</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-3 leading-tight tracking-tighter">Growth that<br /><span className="text-black/18">shows in data.</span></h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-black/5">
          {metrics.map((m, i) => (
            <motion.div key={m.l} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-[#f7f5f0] p-6 text-center group hover:bg-white transition-colors">
              <div className="text-4xl font-black text-black mb-1">{m.n}</div>
              <div className="text-[10px] text-black/30 uppercase tracking-widest">{m.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Memes() {
  const icons = ["☕","📈","💸","🌱"];
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-xs text-black/25 uppercase tracking-[0.25em]">Memes</span>
          <h2 className="text-4xl font-black text-black mt-3 leading-tight tracking-tighter">Marketer brain.<br /><span className="text-black/18">Never off.</span></h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-px bg-black/5">
          {memes.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }} className="bg-[#f7f5f0] p-6 text-center hover:bg-white transition-colors cursor-default">
              <div className="text-4xl mb-4">{icons[i]}</div>
              <p className="text-xs text-black/35 leading-relaxed mb-3">{m.t}</p>
              <span className="inline-block border border-black/8 rounded-full px-3 py-1 text-[10px] text-black/28 bg-white/60">{m.p}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-lg mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs text-black/22 uppercase tracking-[0.2em]">Contact</span>
          <h2 className="font-black text-black mt-2 mb-4 leading-none tracking-tighter" style={{ fontSize: "clamp(2.5rem,8vw,5rem)" }}>
            Lets Build<br />Something<br />That Scales.
          </h2>
          <p className="text-sm text-black/28 mb-8 leading-relaxed">B2B, startup, or government project — reach out.</p>
          <div className="space-y-3 text-left">
            <motion.a href="mailto:Namanworks7@gmail.com" whileHover={{ scale: 1.015 }} className="group flex items-center gap-4 p-5 border border-black/8 hover:border-black/18 bg-white/60 hover:bg-white transition-all rounded-2xl">
              <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center flex-shrink-0"><Mail size={13} className="text-white" /></div>
              <div><div className="text-[9px] text-black/22 uppercase tracking-widest mb-0.5">Email</div><div className="text-sm font-semibold text-black">Namanworks7@gmail.com</div></div>
              <ArrowUpRight size={13} className="ml-auto text-black/12 group-hover:text-black/35 transition-colors" />
            </motion.a>
            <motion.a href="tel:+919695624105" whileHover={{ scale: 1.015 }} className="group flex items-center gap-4 p-5 border border-black/8 hover:border-black/18 bg-white/60 hover:bg-white transition-all rounded-2xl">
              <div className="w-9 h-9 rounded-full bg-black/6 flex items-center justify-center flex-shrink-0"><Phone size={13} className="text-black/45" /></div>
              <div><div className="text-[9px] text-black/22 uppercase tracking-widest mb-0.5">Phone</div><div className="text-sm font-semibold text-black">+91 96956 24105</div></div>
              <ArrowUpRight size={13} className="ml-auto text-black/12 group-hover:text-black/35 transition-colors" />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/naman-singh-b87b2920a/" target="_blank" whileHover={{ scale: 1.015 }} className="group flex items-center gap-4 p-5 border border-black/8 hover:border-black/18 bg-white/60 hover:bg-white transition-all rounded-2xl">
              <div className="w-9 h-9 rounded-full bg-black/6 flex items-center justify-center flex-shrink-0"><img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" /></div>
              <div><div className="text-[9px] text-black/22 uppercase tracking-widest mb-0.5">LinkedIn</div><div className="text-sm font-semibold text-black">linkedin.com/in/naman-singh</div></div>
              <ArrowUpRight size={13} className="ml-auto text-black/12 group-hover:text-black/35 transition-colors" />
            </motion.a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6"><MapPin size={10} className="text-black/22" /><span className="text-xs text-black/22">Bangalore, India</span></div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 py-6 px-6">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <span className="text-xs text-black/18 font-black tracking-widest uppercase">Naman Singh</span>
        <span className="text-[10px] text-black/12">2026</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="bg-[#f7f5f0] min-h-screen">
      <Hero />
      <Ticker />
      <About />
      <Work />
      <Screenshots />
      <Skills />
      <Results />
      <Memes />
      <Contact />
      <Footer />
    </main>
  );
}
