"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, Download, MapPin, ArrowUpRight } from "lucide-react";

const platforms = [
  { src: "/google.svg",    alt: "Google",    r: "155px", start:   "0deg", dur: "16s" },
  { src: "/facebook.svg",  alt: "Meta",      r: "155px", start:  "60deg", dur: "16s" },
  { src: "/instagram.svg", alt: "Instagram", r: "155px", start: "120deg", dur: "16s" },
  { src: "/linkedin.svg",  alt: "LinkedIn",  r: "155px", start: "180deg", dur: "16s" },
  { src: "/youtube.svg",   alt: "YouTube",   r: "155px", start: "240deg", dur: "16s" },
  { src: "/googleads.svg", alt: "Google Ads",r: "155px", start: "300deg", dur: "16s" },
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
  { n: "8.4×", l: "Best ROAS" },
  { n: "2-3M", l: "People Reached" },
  { n: "14",   l: "Countries" },
  { n: "200+", l: "Campaigns" },
];

/* ── HERO ─────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen bg-[#f5f3ee] overflow-hidden flex items-center">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-10 py-20">
        {/* Top label row */}
        <div className="flex items-center justify-between mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="flex items-center gap-3">
            <div className="w-6 h-px bg-black/20" />
            <span className="text-[10px] text-black/30 uppercase tracking-[0.35em]">Portfolio 2026</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="flex items-center gap-3">
            <span className="text-[10px] text-black/30 uppercase tracking-[0.35em]">Bangalore, India</span>
            <div className="w-6 h-px bg-black/20" />
          </motion.div>
        </div>

        {/* Main hero grid: LEFT TEXT | CENTER PHOTO | RIGHT TEXT */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center">

          {/* LEFT */}
          <div className="flex flex-col items-center text-center md:items-end md:text-right">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.9, ease: [0.16,1,0.3,1] }}>
              <h1 className="font-black text-black tracking-tighter leading-[0.85]" style={{ fontSize: "clamp(4rem,8vw,8rem)" }}>
                NAMAN
              </h1>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
              className="mt-6 space-y-2">
              <p className="text-lg font-semibold text-black/50">Performance Marketer</p>
              <p className="text-base text-black/30">Growth Strategist</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
              className="mt-6 text-sm text-black/25 leading-loose max-w-xs">
              Building brands through scalable digital systems — SEO, paid media, AI marketing, high-ROI campaigns.
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
              className="mt-8 flex flex-col gap-3 items-center md:items-end">
              <a href="#work" className="inline-flex items-center gap-2 bg-black text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-black/75 transition-all">
                View Work <ArrowUpRight size={12} />
              </a>
              <a href="/naman-resume.pdf" target="_blank" className="inline-flex items-center gap-2 border border-black/12 text-black/40 text-xs px-6 py-3 rounded-full hover:border-black/25 hover:text-black transition-all">
                <Download size={12} /> Resume
              </a>
            </motion.div>
          </div>

          {/* CENTER — cutout photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.1, ease: [0.16,1,0.3,1] }}
            className="relative flex-shrink-0 flex flex-col items-center justify-self-center"
            style={{ width: 340 }}>

            {/* Orbiting platform icons */}
            <div className="relative" style={{ width: 340, height: 500 }}>
              {/* Orbit ring */}
              <div className="absolute rounded-full border border-dashed border-black/8 pointer-events-none"
                style={{ inset: "-55px", borderRadius: "50%" }} />

              {platforms.map((p, i) => (
                <div key={i} className="orbit-icon"
                  style={{ "--r": p.r, "--start": p.start, "--dur": p.dur, "--delay": "0s", top: "50%", left: "50%" } as React.CSSProperties}>
                  <div className="w-11 h-11 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.10)] border border-black/6 flex items-center justify-center p-2.5">
                    <img src={p.src} alt={p.alt} className="w-full h-full object-contain" />
                  </div>
                </div>
              ))}

              {/* Photo cutout — transparent PNG floats naturally on white bg */}
              <div className="absolute inset-0 flex items-end justify-center">
                <img
                  src="/naman-cutout.png"
                  alt="Naman Singh"
                  className="h-full w-auto object-contain object-bottom"
                  style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.12))" }}
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.9, ease: [0.16,1,0.3,1] }}>
              <h1 className="font-black text-black tracking-tighter leading-[0.85]" style={{ fontSize: "clamp(4rem,8vw,8rem)" }}>
                SINGH
              </h1>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
              className="mt-6 space-y-2.5">
              {["Google Ads","Meta Ads","SEO & GEO","LinkedIn Ads","GA4","AI Marketing"].map((tag, i) => (
                <motion.div key={tag} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.08 }}
                  className="border border-black/8 rounded-full px-4 py-1.5 text-xs text-black/40 font-medium bg-black/[0.02] w-fit hover:border-black/18 hover:text-black/60 transition-all">
                  {tag}
                </motion.div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 }}
              className="mt-8 border border-black/8 rounded-2xl p-5 bg-black text-white w-fit">
              <div className="text-[8px] text-white/30 uppercase tracking-widest mb-1">Featured</div>
              <div className="text-sm font-black leading-tight">Govt of India<br />Campaign</div>
              <div className="text-4xl font-black text-white/12 mt-1 leading-none">2-3M</div>
              <div className="text-[9px] text-white/30 mt-0.5">people reached</div>
            </motion.div>
          </div>
        </div>

        {/* Bottom stats row */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
          className="mt-16 pt-8 border-t border-black/5 grid grid-cols-4 gap-8">
          {[{ n:"7+",l:"Years Experience" },{ n:"50+",l:"Global Clients" },{ n:"200+",l:"Campaigns Managed" },{ n:"14",l:"Countries" }].map(m => (
            <div key={m.l} className="text-center">
              <div className="text-3xl font-black text-black">{m.n}</div>
              <div className="text-[9px] text-black/25 uppercase tracking-widest mt-1">{m.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <span className="text-[8px] text-black/18 uppercase tracking-[0.3em]">scroll</span>
        <motion.div animate={{ y: [0,6,0] }} transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-px h-8 bg-gradient-to-b from-black/20 to-transparent" />
      </motion.div>
    </section>
  );
}
function Ticker() {
  const items = Array(2).fill(["Performance Marketing","·","Google Ads","·","Meta Ads","·","SEO & GEO","·","LinkedIn","·","GA4","·","AI Marketing","·","Govt of India","·","14 Countries","·","200+ Campaigns","·"]).flat();
  return (
    <div className="py-3 border-y border-black/5 overflow-hidden bg-black/[0.015]">
      <div className="flex ticker-track whitespace-nowrap">
        {items.map((t, i) => <span key={i} className="text-[10px] text-black/22 uppercase tracking-widest mx-5">{t}</span>)}
      </div>
    </div>
  );
}

/* ── ABOUT ────────────────────────────────────────────────────────── */
function About() {
  return (
    <section className="py-40 px-12 bg-[#f5f3ee]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }}>
          <span className="text-[10px] text-black/25 uppercase tracking-[0.3em]">About</span>
          <h2 className="text-5xl md:text-7xl font-black text-black mt-4 mb-10 leading-[1.0] tracking-tighter">
            I build marketing<br />systems that scale.
          </h2>
          <p className="text-base text-black/45 leading-loose mb-4 max-w-2xl mx-auto">
            7 years solving hard growth challenges across startups, global B2B brands, government projects, healthcare, real estate, and e-commerce.
          </p>
          <p className="text-base text-black/28 leading-loose mb-8 max-w-2xl mx-auto">
            Strong focus on ROI, AI-driven marketing, and Generative Engine Optimization (GEO) — the next frontier of search.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Performance Marketing","SEO & GEO","B2B Growth","AI Marketing","CRO","Analytics"].map(t => (
              <span key={t} className="text-xs text-black/35 border border-black/8 px-4 py-1.5 rounded-full bg-white/70">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── WORK ─────────────────────────────────────────────────────────── */
function Work() {
  return (
    <section id="work" className="py-40 px-12 bg-[#f5f3ee]/60">
      <div className="max-w-7xl mx-auto">
        <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} className="mb-16 text-center">
          <span className="text-[10px] text-black/25 uppercase tracking-[0.3em]">Experience</span>
          <h2 className="text-5xl md:text-7xl font-black text-black mt-4 leading-[1.0] tracking-tighter">
            7 years.<br /><span className="text-black/15">No fluff.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-3 gap-6 mb-6">
          {jobs.map((j, i) => (
            <motion.div key={j.co} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ delay: i * 0.1 }}
              className="border border-black/6 rounded-2xl p-8 bg-white/70 hover:bg-white transition-colors flex flex-col">
              <div className="mb-4">
                <div className="text-base font-black text-black">{j.co}</div>
                <div className="text-xs text-black/35 mt-1">{j.role}</div>
                <div className="text-xs text-black/18 mt-0.5">{j.period}</div>
              </div>
              <p className="text-sm text-black/30 leading-loose flex-1 mb-4">{j.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {j.tags.map(t => <span key={t} className="text-[9px] text-black/30 border border-black/6 px-2.5 py-1 rounded-full">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }}
          className="border border-black/8 rounded-2xl p-10 bg-black text-white grid grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-[9px] text-white/30 uppercase tracking-widest mb-3">Featured Project</div>
            <div className="text-2xl font-black mb-2">Government LPG Campaign — Tier 2 India</div>
            <div className="text-sm text-white/35 leading-loose">Regional mobile-first campaign targeting underserved Tier 2 cities across India. Reached 2–3 million people.</div>
          </div>
          <div className="text-right">
            <div className="text-8xl font-black text-white/10 leading-none">2-3M</div>
            <div className="text-sm text-white/25 mt-1">people reached</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── SCREENSHOTS ─────────────────────────────────────────────────── */
function Screenshots() {
  const shots = [
    { src: "/ss1.jpg", label: "Google Ads Campaign", rotate: "-2deg" },
    { src: "/ss2.jpg", label: "Meta Ads Results",    rotate: "1.5deg" },
    { src: "/ss3.jpg", label: "Analytics Report",    rotate: "-1deg" },
    { src: "/ss4.jpg", label: "Campaign Dashboard",  rotate: "2.5deg" },
    { src: "/ss5.jpg", label: "Performance Report",  rotate: "-1.5deg" },
  ];
  return (
    <section className="py-32 px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} className="mb-16 text-center">
          <span className="text-[10px] text-black/25 uppercase tracking-[0.3em]">Proof of Work</span>
          <h2 className="text-5xl md:text-7xl font-black text-black mt-4 leading-[1.0] tracking-tighter">
            Real Campaigns.<br /><span className="text-black/15">Real Numbers.</span>
          </h2>
          <p className="text-sm text-black/28 mt-4 max-w-sm leading-loose">Live dashboards. Not mockups.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {shots.map((s, i) => (
            <motion.div key={i}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className="relative cursor-pointer group"
              style={{ rotate: s.rotate } as React.CSSProperties}>
              <div className="relative h-56 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-black/5">
                <Image src={s.src} alt={s.label} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm text-white font-semibold">{s.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SKILLS ───────────────────────────────────────────────────────── */
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
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} className="py-40 px-12 bg-[#f5f3ee]/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] text-black/25 uppercase tracking-[0.3em]">Skills</span>
          <h2 className="text-5xl md:text-6xl font-black text-black mt-4 leading-[1.0] tracking-tighter">
            What I&apos;m great at.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-24 items-start max-w-7xl mx-auto">
        <div>
          <div className="space-y-7">
            {skills.map((s, i) => (
              <div key={s.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-black/45">{s.label}</span>
                  <span className="text-xs text-black/25 font-mono">{s.pct}%</span>
                </div>
                <div className="h-1.5 bg-black/6 relative rounded-full overflow-hidden">
                  <div className="skill-bar h-full rounded-full"
                    style={{ "--w": `${s.pct}%`, animationDelay: `${i * 100}ms`, background: "linear-gradient(90deg,#111,#666)" } as React.CSSProperties} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="text-[10px] text-black/25 uppercase tracking-[0.3em]">Platforms</span>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {["Google Ads","Meta Ads","LinkedIn Ads","GA4","Search Console","Tag Manager","Looker Studio","WordPress","HubSpot","Shopify"].map(p => (
              <div key={p} className="border border-black/6 rounded-xl px-4 py-3 bg-white/70 text-xs text-black/40 font-medium hover:border-black/15 transition-all">
                {p}
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

/* ── RESULTS ──────────────────────────────────────────────────────── */
function Results() {
  return (
    <section className="py-32 px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} className="mb-16 text-center">
          <span className="text-[10px] text-black/25 uppercase tracking-[0.3em]">Results</span>
          <h2 className="text-5xl md:text-7xl font-black text-black mt-4 leading-[1.0] tracking-tighter">
            Growth that<br /><span className="text-black/15">shows in data.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-black/5 rounded-2xl overflow-hidden">
          {metrics.map((m, i) => (
            <motion.div key={m.l} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0 }} transition={{ delay: i * 0.07 }}
              className="bg-white p-8 group hover:bg-white transition-colors">
              <div className="text-4xl font-black text-black mb-2">{m.n}</div>
              <div className="text-[9px] text-black/28 uppercase tracking-widest">{m.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── MARKETER'S MIND ──────────────────────────────────────────────── */
function MarketersMind() {
  const cards = [
    { title: "Client: Cut CAC by 50%", sub: "Me: opens 17 tabs, survives on coffee", bars: [40, 65, 55, 80, 95] },
    { title: "ROAS spikes at 2 AM",    sub: "Scaling campaigns in pyjamas",          bars: [30, 50, 70, 60, 90] },
    { title: "Google Ads at 11 PM",    sub: "\"Limited by budget\" again",            bars: [80, 60, 40, 70, 55] },
    { title: "SEO after 4 months",     sub: "Ranking. Finally.",                      bars: [20, 30, 45, 65, 88] },
  ];
  return (
    <section className="py-40 px-12 bg-[#f5f3ee]/60">
      <div className="max-w-7xl mx-auto">
        <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} className="mb-16 text-center">
          <span className="text-[10px] text-black/25 uppercase tracking-[0.3em]">The Marketer&apos;s Mind</span>
          <h2 className="text-5xl md:text-7xl font-black text-black mt-4 leading-[1.0] tracking-tighter">
            Always thinking<br /><span className="text-black/15">in growth.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ delay: i * 0.1 }}
              className="border border-black/6 rounded-2xl p-7 bg-white/70 hover:bg-white transition-colors">
              <p className="text-sm font-bold text-black mb-1.5">{c.title}</p>
              <p className="text-xs text-black/30 mb-6 leading-loose">{c.sub}</p>
              <div className="flex items-end gap-1.5 h-14">
                {c.bars.map((h, j) => (
                  <motion.div key={j}
                    whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0 }}
                    transition={{ delay: i * 0.1 + j * 0.06, duration: 0.5, ease: "easeOut" }}
                    className="flex-1 rounded-sm origin-bottom"
                    style={{ height: `${h}%`, background: "linear-gradient(to top, #111, #666)" }} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT ──────────────────────────────────────────────────────── */
function Contact() {
  return (
    <section className="py-40 px-10 bg-[#f5f3ee]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }}>
          <span className="text-[10px] text-black/22 uppercase tracking-[0.3em]">Contact</span>
          <h2 className="font-black text-black mt-4 mb-4 leading-[0.95] tracking-tighter" style={{ fontSize: "clamp(3rem,7vw,6rem)" }}>
            Let&apos;s Build<br />Something<br />That Scales.
          </h2>
          <p className="text-base text-black/30 mb-12 leading-loose max-w-md mx-auto">
            B2B brand, startup, or government initiative — if you need growth that actually moves the needle, reach out.
          </p>
          <div className="space-y-4 text-left max-w-lg mx-auto">
            <motion.a href="mailto:Namanworks7@gmail.com" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-5 p-6 border border-black/8 hover:border-black/18 bg-white/70 hover:bg-white transition-all rounded-2xl shadow-sm hover:shadow-md">
              <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center flex-shrink-0"><Mail size={15} className="text-white" /></div>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] text-black/22 uppercase tracking-widest mb-1">Email</div>
                <div className="text-base font-semibold text-black">Namanworks7@gmail.com</div>
              </div>
              <ArrowUpRight size={15} className="text-black/12 group-hover:text-black/35 transition-colors" />
            </motion.a>
            <motion.a href="tel:+919695624105" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-5 p-6 border border-black/8 hover:border-black/18 bg-white/70 hover:bg-white transition-all rounded-2xl shadow-sm hover:shadow-md">
              <div className="w-11 h-11 rounded-full bg-black/6 flex items-center justify-center flex-shrink-0"><Phone size={15} className="text-black/45" /></div>
              <div className="flex-1">
                <div className="text-[9px] text-black/22 uppercase tracking-widest mb-1">Phone</div>
                <div className="text-base font-semibold text-black">+91 96956 24105</div>
              </div>
              <ArrowUpRight size={15} className="text-black/12 group-hover:text-black/35 transition-colors" />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/naman-singh-b87b2920a/" target="_blank" rel="noopener" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-5 p-6 border border-black/8 hover:border-black/18 bg-white/70 hover:bg-white transition-all rounded-2xl shadow-sm hover:shadow-md">
              <div className="w-11 h-11 rounded-full bg-black/6 flex items-center justify-center flex-shrink-0"><img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" /></div>
              <div className="flex-1">
                <div className="text-[9px] text-black/22 uppercase tracking-widest mb-1">LinkedIn</div>
                <div className="text-base font-semibold text-black">linkedin.com/in/naman-singh</div>
              </div>
              <ArrowUpRight size={15} className="text-black/12 group-hover:text-black/35 transition-colors" />
            </motion.a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8">
            <MapPin size={11} className="text-black/20" />
            <span className="text-xs text-black/28">Bangalore, India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-12 py-20 text-center">
        <div className="text-[10px] text-white/20 uppercase tracking-[0.4em] mb-4">Performance Marketer · Growth Strategist</div>
        <h2 className="font-black text-white tracking-tighter leading-none mb-2" style={{ fontSize: "clamp(3rem,8vw,8rem)" }}>
          NAMAN SINGH
        </h2>
        <div className="text-sm text-white/25 mb-10">Bangalore, India · Available for projects</div>
        <div className="flex items-center justify-center gap-6 text-xs text-white/30">
          <a href="mailto:Namanworks7@gmail.com" className="hover:text-white transition-colors">Namanworks7@gmail.com</a>
          <span className="text-white/10">·</span>
          <a href="tel:+919695624105" className="hover:text-white transition-colors">+91 96956 24105</a>
          <span className="text-white/10">·</span>
          <a href="https://www.linkedin.com/in/naman-singh-b87b2920a/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
        <div className="mt-12 pt-6 border-t border-white/5 text-[10px] text-white/12">© 2026</div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="bg-[#f5f3ee] min-h-screen">
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
