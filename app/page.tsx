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
    <section className="py-32 px-6">
      <div className="max-w-xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }}>
          <span className="text-xs text-black/25 uppercase tracking-[0.25em]">About</span>
          <h2 className="text-4xl md:text-6xl font-black text-black mt-4 mb-8 leading-[1.05] tracking-tighter">
            I build marketing<br />systems that scale.
          </h2>
          <p className="text-sm text-black/45 leading-loose mb-4 max-w-md mx-auto">
            7 years solving hard growth challenges across startups, global B2B brands, government projects, healthcare, real estate, and e-commerce.
          </p>
          <p className="text-sm text-black/28 leading-loose max-w-md mx-auto">
            Strong focus on ROI, AI-driven marketing, and Generative Engine Optimization (GEO) — the next frontier of search.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <MapPin size={10} className="text-black/20" />
            <span className="text-xs text-black/25">Bangalore, India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} className="text-center mb-16">
          <span className="text-xs text-black/25 uppercase tracking-[0.25em]">Experience</span>
          <h2 className="text-4xl md:text-6xl font-black text-black mt-4 leading-[1.05] tracking-tighter">7 years.<br /><span className="text-black/18">No fluff.</span></h2>
        </motion.div>
        <div className="space-y-4">
          {jobs.map((j, i) => (
            <motion.div key={j.co} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ delay: i * 0.1 }}
              className="border border-black/6 rounded-2xl p-7 bg-white/60 hover:bg-white transition-colors">
              <div className="mb-3">
                <div className="text-base font-black text-black">{j.co}</div>
                <div className="text-xs text-black/35 mt-0.5">{j.role} <span className="text-black/18">· {j.period}</span></div>
              </div>
              <p className="text-sm text-black/30 leading-loose mb-4">{j.desc}</p>
              <div className="flex flex-wrap gap-2">
                {j.tags.map(t => <span key={t} className="text-[9px] text-black/35 border border-black/8 px-3 py-1 rounded-full">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ delay: 0.3 }}
          className="mt-4 border border-black/8 rounded-2xl p-7 bg-black text-white">
          <div className="text-[9px] text-white/30 uppercase tracking-widest mb-2">Featured Project</div>
          <div className="text-lg font-black mb-1">Government LPG Campaign — Tier 2 India</div>
          <div className="text-sm text-white/35 leading-loose">Reached 2-3 million people through regional mobile-first campaigns</div>
          <div className="text-6xl font-black text-white/8 mt-3 leading-none">2-3M</div>
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
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-xl mx-auto text-center mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }}>
          <span className="text-xs text-black/25 uppercase tracking-[0.25em]">Proof of Work</span>
          <h2 className="text-4xl md:text-6xl font-black text-black mt-4 leading-[1.05] tracking-tighter">
            Real Campaigns.<br /><span className="text-black/18">Real Numbers.</span>
          </h2>
          <p className="text-sm text-black/28 mt-5 leading-loose">Live dashboards from active campaigns. Not mockups.</p>
        </motion.div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {shots.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ delay: i * 0.12 }}
            whileHover={{ scale: 1.05, rotate: "0deg", zIndex: 10 }}
            className="relative cursor-pointer group flex-shrink-0"
            style={{ rotate: s.rotate, width: 300 } as React.CSSProperties}>
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-black/5">
              <Image src={s.src} alt={s.label} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs text-white font-semibold">{s.label}</span>
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
    <section ref={ref} className="py-32 px-6">
      <div className="max-w-xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} className="text-center mb-16">
          <span className="text-xs text-black/25 uppercase tracking-[0.25em]">Skills</span>
          <h2 className="text-4xl md:text-6xl font-black text-black mt-4 leading-[1.05] tracking-tighter">What I&apos;m<br /><span className="text-black/18">great at.</span></h2>
        </motion.div>
        <div className="space-y-6">
          {skills.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ delay: i * 0.08 }}>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-black/50">{s.label}</span>
                <span className="text-xs text-black/25 font-mono">{s.pct}%</span>
              </div>
              <div className="h-px bg-black/6 relative overflow-visible rounded-full">
                <div className="skill-bar h-full rounded-full absolute inset-0"
                  style={{ "--w": `${s.pct}%`, animationDelay: `${i * 100}ms`, background: "linear-gradient(90deg,#111,#555)" } as React.CSSProperties} />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ delay: 0.4 }} className="mt-14 text-center">
          <p className="text-[10px] text-black/18 uppercase tracking-widest mb-4">Platforms</p>
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
    <section className="py-32 px-6">
      <div className="max-w-xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} className="text-center mb-16">
          <span className="text-xs text-black/25 uppercase tracking-[0.25em]">Results</span>
          <h2 className="text-4xl md:text-6xl font-black text-black mt-4 leading-[1.05] tracking-tighter">Growth that<br /><span className="text-black/18">shows in data.</span></h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-black/5 rounded-2xl overflow-hidden">
          {metrics.map((m, i) => (
            <motion.div key={m.l} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.05 }} transition={{ delay: i * 0.08 }}
              className="bg-[#f7f5f0] p-8 text-center group hover:bg-white transition-colors">
              <div className="text-4xl font-black text-black mb-2">{m.n}</div>
              <div className="text-[10px] text-black/30 uppercase tracking-widest">{m.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarketersMind() {
  const cards = [
    { title: "Client: Cut CAC by 50%", sub: "Me: opens 17 tabs, survives on coffee", bars: [40, 65, 55, 80, 95] },
    { title: "ROAS spikes at 2 AM",    sub: "Scaling campaigns in pyjamas",          bars: [30, 50, 70, 60, 90] },
    { title: "Google Ads at 11 PM",    sub: "\"Limited by budget\" again",            bars: [80, 60, 40, 70, 55] },
    { title: "SEO after 4 months",     sub: "Ranking. Finally.",                      bars: [20, 30, 45, 65, 88] },
  ];
  return (
    <section className="py-32 px-6">
      <div className="max-w-xl mx-auto text-center mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }}>
          <span className="text-xs text-black/25 uppercase tracking-[0.25em]">The Marketer&apos;s Mind</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-4 leading-[1.05] tracking-tighter">
            Always thinking<br /><span className="text-black/18">in growth.</span>
          </h2>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
        {cards.map((c, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ delay: i * 0.1 }}
            className="border border-black/6 rounded-2xl p-6 bg-white/60 hover:bg-white transition-colors">
            <p className="text-sm font-semibold text-black mb-1">{c.title}</p>
            <p className="text-xs text-black/30 mb-5">{c.sub}</p>
            {/* Mini bar chart */}
            <div className="flex items-end gap-1.5 h-10">
              {c.bars.map((h, j) => (
                <motion.div key={j}
                  initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0.05 }}
                  transition={{ delay: i * 0.1 + j * 0.06, duration: 0.4, ease: "easeOut" }}
                  className="flex-1 rounded-sm bg-black/10 origin-bottom"
                  style={{ height: `${h}%` }} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-40 px-6">
      <div className="max-w-xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }}>
          <span className="text-xs text-black/22 uppercase tracking-[0.25em]">Contact</span>
          <h2 className="font-black text-black mt-4 mb-6 leading-[1.0] tracking-tighter" style={{ fontSize: "clamp(2.8rem,8vw,5.5rem)" }}>
            Let&apos;s Build<br />Something<br />That Scales.
          </h2>
          <p className="text-sm text-black/30 mb-12 leading-loose max-w-sm mx-auto">
            B2B brand, startup, or government initiative — if you need growth that actually moves the needle, reach out.
          </p>
          <div className="space-y-3 max-w-sm mx-auto text-left">
            <motion.a href="mailto:Namanworks7@gmail.com" whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 p-5 border border-black/8 hover:border-black/20 bg-white/60 hover:bg-white transition-all rounded-2xl shadow-sm hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0"><Mail size={14} className="text-white" /></div>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] text-black/22 uppercase tracking-widest mb-0.5">Email</div>
                <div className="text-sm font-semibold text-black truncate">Namanworks7@gmail.com</div>
              </div>
              <ArrowUpRight size={14} className="text-black/15 group-hover:text-black/40 transition-colors flex-shrink-0" />
            </motion.a>
            <motion.a href="tel:+919695624105" whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 p-5 border border-black/8 hover:border-black/20 bg-white/60 hover:bg-white transition-all rounded-2xl shadow-sm hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-black/6 flex items-center justify-center flex-shrink-0"><Phone size={14} className="text-black/45" /></div>
              <div className="flex-1">
                <div className="text-[9px] text-black/22 uppercase tracking-widest mb-0.5">Phone</div>
                <div className="text-sm font-semibold text-black">+91 96956 24105</div>
              </div>
              <ArrowUpRight size={14} className="text-black/15 group-hover:text-black/40 transition-colors flex-shrink-0" />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/naman-singh-b87b2920a/" target="_blank" rel="noopener" whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 p-5 border border-black/8 hover:border-black/20 bg-white/60 hover:bg-white transition-all rounded-2xl shadow-sm hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-black/6 flex items-center justify-center flex-shrink-0">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-[9px] text-black/22 uppercase tracking-widest mb-0.5">LinkedIn</div>
                <div className="text-sm font-semibold text-black">linkedin.com/in/naman-singh</div>
              </div>
              <ArrowUpRight size={14} className="text-black/15 group-hover:text-black/40 transition-colors flex-shrink-0" />
            </motion.a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8">
            <MapPin size={10} className="text-black/20" />
            <span className="text-xs text-black/22">Bangalore, India</span>
          </div>
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
      <MarketersMind />
      <Contact />
      <Footer />
    </main>
  );
}
