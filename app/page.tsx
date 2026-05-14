"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, ExternalLink } from "lucide-react";

// ── PARTICLES ──────────────────────────────────────────────────────────────────
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.3, a: Math.random() * 0.5 + 0.1,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.a})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-60" />;
}

// ── GRID BACKGROUND ────────────────────────────────────────────────────────────
function GridBg() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
      style={{ backgroundImage: "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
  );
}

// ── CURSOR ─────────────────────────────────────────────────────────────────────
function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 28 });
  const sy = useSpring(y, { stiffness: 500, damping: 28 });
  useEffect(() => {
    const fn = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, [x, y]);
  return (
    <>
      <motion.div style={{ left: sx, top: sy, translateX: "-50%", translateY: "-50%" }}
        className="fixed w-4 h-4 rounded-full bg-indigo-500/30 pointer-events-none z-[9999]" />
      <motion.div style={{ left: sx, top: sy, translateX: "-50%", translateY: "-50%" }}
        className="fixed w-8 h-8 rounded-full border border-indigo-400/30 pointer-events-none z-[9998]" />
    </>
  );
}

// ── ORBITAL ICONS ──────────────────────────────────────────────────────────────
const platforms = [
  { src: "/google.svg",    alt: "Google",          r: "170px", start:   "0deg", dur: "18s" },
  { src: "/facebook.svg",  alt: "Meta Ads",        r: "170px", start:  "36deg", dur: "18s" },
  { src: "/instagram.svg", alt: "Instagram",       r: "170px", start:  "72deg", dur: "18s" },
  { src: "/linkedin.svg",  alt: "LinkedIn",        r: "170px", start: "108deg", dur: "18s" },
  { src: "/youtube.svg",   alt: "YouTube",         r: "170px", start: "144deg", dur: "18s" },
  { src: "/googleads.svg", alt: "Google Ads",      r: "170px", start: "180deg", dur: "18s" },
  { src: "/google.svg",    alt: "Analytics",       r: "220px", start:  "20deg", dur: "26s" },
  { src: "/linkedin.svg",  alt: "Bing",            r: "220px", start: "110deg", dur: "26s" },
  { src: "/instagram.svg", alt: "Apple Search",    r: "220px", start: "200deg", dur: "26s" },
  { src: "/googleads.svg", alt: "AI Automation",   r: "220px", start: "290deg", dur: "26s" },
];

// ── HERO ───────────────────────────────────────────────────────────────────────
function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), { stiffness: 100, damping: 20 });
  const rotY = useSpring(useTransform(mouseX, [-400, 400], [-8, 8]), { stiffness: 100, damping: 20 });

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-[1fr_auto] gap-8 items-center min-h-screen py-20">

        {/* LEFT — text */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-indigo-400/40" />
            <span className="text-xs text-indigo-300/50 uppercase tracking-[0.3em]">Portfolio 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-tighter text-white leading-[0.85] mb-6"
            style={{ fontSize: "clamp(4rem,9vw,8rem)" }}
          >
            Naman<br />Singh
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="space-y-1 mb-8">
            {["Performance Marketer", "Growth Strategist", "Building brands through scalable digital systems"].map((line, i) => (
              <motion.p key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className={i < 2 ? "text-lg font-semibold text-indigo-300/80" : "text-sm text-white/30 mt-3 max-w-xs leading-relaxed"}
              >{line}</motion.p>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
            className="grid grid-cols-3 gap-4 max-w-sm mb-8">
            {[{ n: "7+", l: "Years" }, { n: "50+", l: "Clients" }, { n: "200+", l: "Campaigns" }].map((s, i) => (
              <div key={s.l} className="border border-indigo-500/15 rounded-xl p-3 text-center bg-indigo-500/5">
                <div className="text-2xl font-black text-white">{s.n}</div>
                <div className="text-[9px] text-white/30 uppercase tracking-widest">{s.l}</div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}
            className="flex flex-wrap gap-2">
            {["Google Ads", "Meta Ads", "SEO & GEO", "LinkedIn", "AI Marketing", "Govt of India"].map((tag, i) => (
              <span key={tag} className="text-[10px] text-indigo-300/50 border border-indigo-500/15 px-3 py-1 rounded-full bg-indigo-500/5">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — photo + orbits */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ rotateX: rotX, rotateY: rotY, perspective: 1000, width: 320, height: 420 }}
          className="relative flex-shrink-0"
        >
          <div className="relative" style={{ width: 320, height: 420 }}>
            {/* Outer orbit ring */}
            <div className="absolute rounded-full border border-indigo-500/10 pointer-events-none"
              style={{ inset: "-70px", borderRadius: "50%" }} />
            {/* Inner orbit ring */}
            <div className="absolute rounded-full border border-purple-500/8 pointer-events-none"
              style={{ inset: "-20px", borderRadius: "50%" }} />

            {/* Glow behind photo */}
            <div className="absolute inset-0 rounded-2xl"
              style={{ boxShadow: "0 0 80px rgba(99,102,241,0.2), 0 0 40px rgba(139,92,246,0.15)", borderRadius: "16px" }} />

            {/* Platform icons orbiting */}
            {platforms.map((p, i) => (
              <div key={i} className="orbit-icon"
                style={{ "--r": p.r, "--start": p.start, "--dur": p.dur, "--delay": "0s", top: "50%", left: "50%" } as React.CSSProperties}>
                <div className="w-10 h-10 rounded-full bg-[#0a0f2e] border border-indigo-500/25 flex items-center justify-center p-2.5 glow-pulse"
                  style={{ boxShadow: "0 0 12px rgba(99,102,241,0.3)" }}>
                  <img src={p.src} alt={p.alt} className="w-full h-full object-contain opacity-80" />
                </div>
              </div>
            ))}

            {/* Photo */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-indigo-500/15"
              style={{ boxShadow: "inset 0 0 40px rgba(99,102,241,0.1)" }}>
              <Image src="/naman-photo.jpg" alt="Naman Singh" fill className="object-cover object-top" priority
                style={{ mixBlendMode: "luminosity", filter: "contrast(1.05) brightness(0.9)" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/30 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] text-white/20 uppercase tracking-[0.3em]">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-px h-10 bg-gradient-to-b from-indigo-400/40 to-transparent" />
      </motion.div>
    </section>
  );
}

// ── SCROLL GRAPH ───────────────────────────────────────────────────────────────
function ScrollGraph() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="absolute left-12 top-0 bottom-0 w-1 pointer-events-none hidden md:block" style={{ zIndex: 1 }}>
      <svg className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="30%" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <motion.line x1="2" y1="0" x2="2" y2="100%"
          stroke="url(#lineGrad)" strokeWidth="2"
          filter="url(#glow)"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}

// ── TICKER ─────────────────────────────────────────────────────────────────────
function Ticker() {
  const items = ["Performance Marketing","·","Google Ads","·","Meta Ads","·","SEO & GEO","·","LinkedIn","·","CRO","·","GA4","·","AI Marketing","·","Govt of India","·","B2B Global","·","Growth Strategy","·","Marketing Automation","·","Performance Marketing","·","Google Ads","·","Meta Ads","·","SEO & GEO","·","LinkedIn","·","CRO","·","GA4","·","AI Marketing","·","Govt of India","·","B2B Global","·","Growth Strategy","·","Marketing Automation","·"];
  return (
    <div className="py-3 border-y border-indigo-500/8 overflow-hidden bg-indigo-500/[0.02]">
      <div className="flex ticker-track whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="text-[10px] text-indigo-300/25 uppercase tracking-widest mx-4">{t}</span>
        ))}
      </div>
    </div>
  );
}

// ── ABOUT ──────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="relative py-32 px-8 md:px-20">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-indigo-400 glow-pulse" />
            <span className="text-xs text-indigo-300/40 uppercase tracking-[0.3em]">About</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tight">
            I build marketing<br /><span className="text-indigo-400/70">systems that scale.</span>
          </h2>
          <p className="text-base text-white/40 leading-relaxed mb-4">
            I&apos;m Naman Singh — a growth marketer who solves hard growth challenges and builds marketing systems that create real, measurable business impact.
          </p>
          <p className="text-base text-white/25 leading-relaxed mb-4">
            Over 7 years, I&apos;ve worked across startups, global B2B brands, government projects, healthcare, real estate, and e-commerce — managing everything from strategy to execution to scaling.
          </p>
          <p className="text-sm text-white/18 leading-relaxed">
            Strong focus on ROI, AI-driven marketing, and Generative Engine Optimization (GEO) — the next frontier of search.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ── EXPERIENCE ─────────────────────────────────────────────────────────────────
const jobs = [
  { co: "Social Musketeers", role: "Head of Marketing", period: "Feb 2022 – Present", desc: "Led end-to-end marketing for SaaS, healthcare, real estate & e-commerce. Worked on Government of India projects and global B2B clients.", tags: ["Govt of India","SaaS","B2B Global","Healthcare"] },
  { co: "Vinra Group",       role: "Digital Marketing Manager", period: "Jun 2020 – Jan 2022", desc: "Managed Google, Meta, YouTube & LinkedIn Ads. Built conversion funnels and drove organic growth through technical SEO.", tags: ["Google Ads","Meta Ads","SEO","CRO"] },
  { co: "Comm8 Digital",     role: "Marketing Executive", period: "Feb 2019 – May 2020", desc: "Lead generation across Facebook, Instagram & LinkedIn. Optimized Google Ads and SEO campaigns for CTR improvements.", tags: ["Lead Gen","Social","PPC"] },
];

function Experience() {
  return (
    <section className="relative py-24 px-8 md:px-20">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 glow-pulse" />
            <span className="text-xs text-purple-300/40 uppercase tracking-[0.3em]">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            7 years.<br /><span className="text-white/20">No fluff.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {jobs.map((j, i) => (
            <motion.div key={j.co}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="border border-indigo-500/10 rounded-2xl p-6 bg-indigo-500/[0.03] hover:bg-indigo-500/[0.06] transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-base font-black text-white group-hover:text-indigo-200 transition-colors">{j.co}</div>
                  <div className="text-xs text-white/35">{j.role} <span className="text-white/18">· {j.period}</span></div>
                </div>
                <div className="w-2 h-2 rounded-full bg-indigo-400/40 mt-1 group-hover:bg-indigo-400 transition-colors glow-pulse" />
              </div>
              <p className="text-xs text-white/25 leading-relaxed mb-3">{j.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {j.tags.map(t => (
                  <span key={t} className="text-[9px] text-indigo-300/40 border border-indigo-500/15 px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured project */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-4 border border-purple-500/20 rounded-2xl p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
          <div className="text-[9px] text-purple-300/50 uppercase tracking-widest mb-2">Featured Project</div>
          <div className="text-lg font-black text-white mb-1">Government LPG Campaign — Tier 2 India</div>
          <div className="text-sm text-white/35">Reached 2–3 million people through regional mobile-first campaigns</div>
          <div className="text-4xl font-black text-purple-400/20 mt-3">2-3M</div>
        </motion.div>
      </div>
    </section>
  );
}

// ── SKILLS ─────────────────────────────────────────────────────────────────────
const skills = [
  { label: "Performance Marketing", pct: 95 },
  { label: "SEO & GEO", pct: 90 },
  { label: "Paid Social (Meta/LinkedIn)", pct: 88 },
  { label: "B2B Lead Generation", pct: 85 },
  { label: "Marketing Automation", pct: 80 },
  { label: "AI-driven Campaigns", pct: 82 },
  { label: "Analytics & Reporting", pct: 92 },
  { label: "CRO & Funnel Optimization", pct: 87 },
];

function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const bars = el.querySelectorAll<HTMLElement>(".skill-bar");
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        bars.forEach((b, i) => setTimeout(() => b.classList.add("filled"), i * 80));
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 px-8 md:px-20">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-indigo-400 glow-pulse" />
            <span className="text-xs text-indigo-300/40 uppercase tracking-[0.3em]">Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            What I&apos;m<br /><span className="text-white/20">great at.</span>
          </h2>
        </motion.div>

        <div className="space-y-5">
          {skills.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
              <div className="flex justify-between mb-1.5">
                <span className="text-xs text-white/45">{s.label}</span>
                <span className="text-xs text-indigo-300/40 font-mono">{s.pct}%</span>
              </div>
              <div className="h-px bg-white/5 relative overflow-hidden rounded-full">
                <div className="skill-bar h-full rounded-full" style={{ "--w": `${s.pct}%`, animationDelay: `${i * 80}ms`, background: "linear-gradient(90deg, #6366f1, #8b5cf6)" } as React.CSSProperties} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-12">
          <p className="text-xs text-white/18 uppercase tracking-widest mb-4">Platforms</p>
          <div className="flex flex-wrap gap-2">
            {["Google Ads","Meta Ads","LinkedIn Ads","GA4","Search Console","Tag Manager","Looker Studio","WordPress","HubSpot","Shopify"].map(p => (
              <span key={p} className="text-[10px] text-white/30 border border-white/8 px-3 py-1.5 rounded-full bg-white/[0.02] hover:border-indigo-500/30 hover:text-indigo-300/50 transition-colors">{p}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── RESULTS / GROWTH ───────────────────────────────────────────────────────────
const metrics = [
  { n: "8.4×", l: "ROAS", s: "E-commerce, 6-month campaign" },
  { n: "42%",  l: "CAC Reduction", s: "SaaS startup via funnel optimization" },
  { n: "12K+", l: "Leads Generated", s: "Real estate B2B pipeline" },
  { n: "14",   l: "Countries", s: "Across APAC, EU & MENA" },
  { n: "210%", l: "Organic Growth", s: "SEO overhaul, 12 months" },
  { n: "2-3M", l: "People Reached", s: "Govt of India campaign" },
];

function Results() {
  return (
    <section className="relative py-24 px-8 md:px-20">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 glow-pulse" />
            <span className="text-xs text-purple-300/40 uppercase tracking-[0.3em]">Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Growth that<br /><span className="text-white/20">shows in data.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-indigo-500/5">
          {metrics.map((m, i) => (
            <motion.div key={m.l}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#050816] p-6 group hover:bg-indigo-500/[0.05] transition-colors"
            >
              <div className="text-4xl font-black text-white mb-1 group-hover:text-indigo-300 transition-colors">{m.n}</div>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">{m.l}</div>
              <div className="text-[9px] text-white/15">{m.s}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── MEMES ──────────────────────────────────────────────────────────────────────
const memes = [
  { e: "☕", t: "Client: Cut CAC by 50%", p: "Me: opens 17 tabs, survives on coffee" },
  { e: "📈", t: "POV: ROAS spikes at 2 AM", p: "Scaling campaigns in pyjamas" },
  { e: "💸", t: "Google Ads at 11 PM:", p: "\"Limited by budget\"" },
  { e: "🌱", t: "SEO after 4 months of grinding:", p: "Ranking. Finally." },
];

function Memes() {
  return (
    <section className="relative py-24 px-8 md:px-20 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-black text-white/[0.012] tracking-tighter select-none leading-none">MEMES</span>
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">Marketer brain.<br /><span className="text-white/20">Never off.</span></h2>
          <p className="text-xs text-white/18 mt-2">Because data isn&apos;t the only thing that speaks</p>
        </motion.div>
        <div className="grid grid-cols-2 gap-px bg-indigo-500/5">
          {memes.map((m, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#050816] p-6 cursor-default transition-all hover:bg-indigo-500/[0.04]"
            >
              <div className="text-4xl mb-4 float">{m.e}</div>
              <p className="text-xs text-white/35 leading-relaxed mb-3">{m.t}</p>
              <div className="inline-block border border-indigo-500/15 rounded-full px-3 py-1 text-[10px] text-indigo-300/40 bg-indigo-500/[0.04]">{m.p}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── AI SECTION ─────────────────────────────────────────────────────────────────
function AISection() {
  return (
    <section className="relative py-24 px-8 md:px-20">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 glow-pulse" />
            <span className="text-xs text-purple-300/40 uppercase tracking-[0.3em]">AI & Future</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">Marketing is<br /><span className="text-white/20">changing fast.</span></h2>
          <p className="text-sm text-white/35 leading-relaxed mb-3">I believe AI will completely change how marketing works over the next few years.</p>
          <p className="text-sm text-white/20 leading-relaxed mb-8">Deeply interested in AI workflows, Generative Engine Optimization (GEO), automation systems, and product-led growth.</p>
          <div className="flex flex-wrap gap-2">
            {["GEO","AI Workflows","Marketing Automation","Product-led Growth","Predictive Analytics","AI Copywriting"].map(t => (
              <span key={t} className="text-[10px] text-purple-300/40 border border-purple-500/15 px-3 py-1.5 rounded-full bg-purple-500/[0.04] hover:border-purple-400/30 hover:text-purple-300/60 transition-colors cursor-default">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── CONTACT ────────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section className="relative py-32 px-8 md:px-20 min-h-screen flex items-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-indigo-400/30" />
            <div className="w-2 h-2 rounded-full bg-indigo-400 glow-pulse" />
            <div className="w-8 h-px bg-indigo-400/30" />
          </div>

          <h2 className="font-black text-white tracking-tighter leading-none mb-4" style={{ fontSize: "clamp(3rem,8vw,6rem)" }}>
            Let&apos;s Build<br /><span className="text-indigo-400/70">Something</span><br />That Scales.
          </h2>
          <p className="text-sm text-white/25 mb-12 max-w-sm mx-auto leading-relaxed">
            B2B brand, startup, or government initiative — if you need growth that actually moves the needle, reach out.
          </p>

          <div className="flex flex-col items-center gap-3 mb-10">
            <motion.a href="mailto:Namanworks7@gmail.com"
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full transition-all text-sm"
              style={{ boxShadow: "0 0 20px rgba(99,102,241,0.25)" }}
            >
              <Mail size={14} />
              Reach Out — Namanworks7@gmail.com
            </motion.a>

            <motion.a href="tel:+919695624105"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 text-white/30 text-sm hover:text-white/60 transition-colors"
            >
              <Phone size={12} />
              +91 96956 24105
            </motion.a>

            <motion.a href="https://www.linkedin.com/in/naman-singh-b87b2920a/" target="_blank"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 text-indigo-300/30 text-sm hover:text-indigo-300/60 transition-colors"
            >
              <ExternalLink size={12} />
              LinkedIn
            </motion.a>
          </div>

          <p className="text-[10px] text-white/12 uppercase tracking-widest">Bangalore, India</p>
        </motion.div>
      </div>
    </section>
  );
}

// ── FOOTER ─────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-indigo-500/8 py-6 px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="text-xs text-white/12 font-semibold tracking-widest uppercase">Naman Singh</span>
        <span className="text-[10px] text-white/8">© 2026</span>
      </div>
    </footer>
  );
}

// ── PAGE ───────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="bg-[#050816] min-h-screen relative">
      <GridBg />
      <Particles />
      <Cursor />
      <Hero />
      <Ticker />
      <div className="relative">
        <ScrollGraph />
        <About />
        <Experience />
        <Skills />
        <Results />
        <Memes />
        <AISection />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
