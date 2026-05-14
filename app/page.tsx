"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ══════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════ */
const PLATFORMS = [
  { src: "/google.svg",    alt: "Google",     start: "0deg",   dur: "22s" },
  { src: "/facebook.svg",  alt: "Meta",       start: "45deg",  dur: "22s" },
  { src: "/instagram.svg", alt: "Instagram",  start: "90deg",  dur: "22s" },
  { src: "/linkedin.svg",  alt: "LinkedIn",   start: "135deg", dur: "22s" },
  { src: "/youtube.svg",   alt: "YouTube",    start: "180deg", dur: "22s" },
  { src: "/googleads.svg", alt: "Google Ads", start: "225deg", dur: "22s" },
  { src: "/google.svg",    alt: "Analytics",  start: "270deg", dur: "22s" },
  { src: "/facebook.svg",  alt: "Shopify",    start: "315deg", dur: "22s" },
];

const SKILLS = [
  { label: "Performance Marketing", pct: 95 },
  { label: "SEO & GEO",             pct: 90 },
  { label: "AI-Driven Growth",      pct: 85 },
  { label: "Meta & Google Ads",     pct: 97 },
  { label: "B2B Growth Strategy",   pct: 88 },
  { label: "Analytics & Reporting", pct: 92 },
];

const STATS = [
  { n: "7+",   l: "Years"          },
  { n: "50+",  l: "Brands Scaled"  },
  { n: "2-3M", l: "People Reached" },
  { n: "₹Cr+", l: "Ad Budget"      },
  { n: "8.4×", l: "Best ROAS"      },
  { n: "42%",  l: "CAC Reduction"  },
];

const EXPERIENCE = [
  {
    co: "Social Musketeers",
    role: "Head of Marketing",
    period: "2022 – Present",
    desc: "Led end-to-end growth for global B2B clients and Government of India campaigns. Managed multi-crore ad budgets across 10+ industries.",
    tags: ["Govt of India", "SaaS", "B2B", "Healthcare"],
  },
  {
    co: "Vinra Group",
    role: "Digital Marketing Manager",
    period: "2020 – 2022",
    desc: "Managed paid campaigns across Google, Meta, LinkedIn. Drove organic growth and improved conversions via rigorous A/B testing.",
    tags: ["Google Ads", "Meta Ads", "SEO", "CRO"],
  },
  {
    co: "Comm8 Digital",
    role: "Marketing Executive",
    period: "2019 – 2020",
    desc: "Started the growth journey. Lead generation across Facebook, Instagram & LinkedIn. Built execution and optimization fundamentals.",
    tags: ["Lead Gen", "Social Media", "PPC"],
  },
];

/* ══════════════════════════════════════════════════════════
   HOOKS
══════════════════════════════════════════════════════════ */
function useInView(ref: React.RefObject<Element | null>, threshold = 0.2) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

/* ══════════════════════════════════════════════════════════
   BACKGROUND — particles + grid
══════════════════════════════════════════════════════════ */
function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)" }} />
      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <div key={i}
          className="absolute w-0.5 h-0.5 rounded-full bg-indigo-400/30"
          style={{
            left: `${(i * 37 + 10) % 100}%`,
            top: `${(i * 53 + 5) % 100}%`,
            animation: `float${(i % 3) + 1} ${6 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${(i * 0.3) % 3}s`,
          }} />
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   GRAPH — decorative SVG growth line
══════════════════════════════════════════════════════════ */
function GraphLine() {
  const ref = useRef<SVGSVGElement>(null);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 300);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="fixed bottom-0 left-0 w-full h-full pointer-events-none z-0 opacity-20">
      <svg ref={ref} className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="graphGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        {drawn && (
          <>
            <path
              d="M 0 850 C 200 820, 300 750, 450 680 C 600 610, 700 560, 800 480 C 900 400, 1000 320, 1100 240 C 1200 160, 1300 100, 1440 50"
              fill="none"
              stroke="url(#graphGrad)"
              strokeWidth="1.5"
              filter="url(#glow)"
              className="graph-line"
            />
            {[
              [0, 850], [450, 680], [800, 480], [1100, 240], [1440, 50]
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="4" fill="#6366f1"
                filter="url(#glow)" className="graph-node"
                style={{ animationDelay: `${i * 0.4}s` }} />
            ))}
          </>
        )}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center z-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 w-full py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-10">

          {/* Left text */}
          <div className="order-2 md:order-1 max-w-xl text-center md:text-left">
            <div className="fade-up fade-up-1 inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-[10px] text-indigo-300/60 uppercase tracking-widest">Available for Work</span>
            </div>

            <h1 className="fade-up fade-up-2 font-black tracking-tighter leading-[0.88] mb-4"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", color: "#e8eaf6" }}>
              NAMAN<br />SINGH
            </h1>

            <div className="fade-up fade-up-3 mb-2">
              <p className="text-base font-semibold text-indigo-300/70">Performance Marketer</p>
              <p className="text-sm text-white/30">Growth Strategist · 7+ Years</p>
            </div>

            <p className="fade-up fade-up-3 text-sm text-white/25 leading-relaxed my-6 max-w-sm mx-auto md:mx-0">
              Building brands through scalable digital systems — Google Ads, Meta, SEO, AI marketing &amp; high-ROI campaigns.
            </p>

            <div className="fade-up fade-up-4">
              <a href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300"
                style={{ boxShadow: "0 0 20px rgba(99,102,241,0.15)" }}>
                Reach Out
                <span className="w-1 h-1 rounded-full bg-indigo-400" />
              </a>
            </div>
          </div>

          {/* Right — photo + orbit */}
          <div className="order-1 md:order-2 flex-shrink-0 fade-up fade-up-2">
            <div className="relative mx-auto" style={{ width: 300, height: 400 }}>
              {/* Orbit rings */}
              {[240, 300, 360].map((d, i) => (
                <div key={i} className="absolute rounded-full border border-dashed pointer-events-none"
                  style={{
                    width: d, height: d,
                    top: "50%", left: "50%",
                    marginTop: -d/2, marginLeft: -d/2,
                    borderColor: `rgba(99,102,241,${0.06 - i * 0.015})`,
                  }} />
              ))}
              {/* Icons */}
              {PLATFORMS.slice(0, 6).map((p, i) => (
                <div key={i} className="orbit-icon"
                  style={{
                    "--r": "155px",
                    "--start": p.start,
                    "--dur": p.dur,
                    "--delay": `${i * -3}s`,
                    top: "50%", left: "50%",
                  } as React.CSSProperties}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center p-2"
                    style={{
                      background: "rgba(5,8,22,0.8)",
                      border: "1px solid rgba(99,102,241,0.2)",
                      boxShadow: "0 0 12px rgba(99,102,241,0.2)",
                    }}>
                    <img src={p.src} alt={p.alt} className="w-full h-full object-contain" style={{ filter: "brightness(0) invert(1) opacity(0.7)" }} />
                  </div>
                </div>
              ))}
              {/* Photo */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 0 60px rgba(99,102,241,0.12), 0 20px 60px rgba(0,0,0,0.6)" }}>
                <Image src="/naman-cutout.png" alt="Naman Singh" fill className="object-cover object-top" priority />
                {/* Dark edge blend */}
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(5,8,22,0.8) 100%)" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 pt-8 border-t border-white/[0.05] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center fade-up fade-up-4">
          {STATS.map(s => (
            <div key={s.l}>
              <div className="text-2xl md:text-3xl font-black stat-num tracking-tight">{s.n}</div>
              <div className="text-[9px] text-white/20 uppercase tracking-widest mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   EXPERIENCE
══════════════════════════════════════════════════════════ */
function Experience() {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref);
  return (
    <section ref={ref} className="relative z-10 py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-[10px] text-indigo-400/40 uppercase tracking-[0.3em]">Career</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white/90 mt-2 tracking-tighter leading-tight">
            7 Years.<br />3 Companies.<br />Real Growth.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {EXPERIENCE.map((j, i) => (
            <div key={j.co}
              className={`relative p-7 rounded-2xl border transition-all duration-700 group hover:border-indigo-500/30`}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                transitionDelay: `${i * 120}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(32px)",
                boxShadow: "0 0 30px rgba(0,0,0,0.3)",
              }}>
              {/* Node indicator */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-indigo-500"
                  style={{ boxShadow: "0 0 8px rgba(99,102,241,0.8)" }} />
                <span className="text-[10px] text-indigo-400/40 uppercase tracking-widest">{j.period}</span>
              </div>
              <div className="font-black text-white/90 text-base mb-1">{j.co}</div>
              <div className="text-xs text-white/30 mb-4">{j.role}</div>
              <p className="text-sm text-white/35 leading-relaxed mb-5">{j.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {j.tags.map(t => (
                  <span key={t}
                    className="text-[10px] text-indigo-300/40 border px-2.5 py-1 rounded-full"
                    style={{ borderColor: "rgba(99,102,241,0.15)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   SKILLS
══════════════════════════════════════════════════════════ */
function Skills() {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref);
  return (
    <section ref={ref} className="relative z-10 py-24 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <div className={`mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-[10px] text-indigo-400/40 uppercase tracking-[0.3em]">Expertise</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white/90 mt-2 tracking-tighter">
            What I Do Best
          </h2>
        </div>

        <div className="space-y-6">
          {SKILLS.map((s, i) => (
            <div key={s.label}
              className="transition-all duration-700"
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-20px)",
              }}>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-white/50">{s.label}</span>
                <span className="text-xs text-indigo-400/50">{s.pct}%</span>
              </div>
              <div className="h-px w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className="skill-bar"
                  style={{
                    "--w": `${s.pct}%`,
                    width: visible ? `${s.pct}%` : "0%",
                    transition: `width 1.2s cubic-bezier(0.16,1,0.3,1) ${i * 0.1 + 0.3}s`,
                  } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   RESULTS / PEAK
══════════════════════════════════════════════════════════ */
function Results() {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref);
  return (
    <section ref={ref} className="relative z-10 py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-14 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-[10px] text-indigo-400/40 uppercase tracking-[0.3em]">Impact</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white/90 mt-2 tracking-tighter">
            Numbers Don&apos;t Lie
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { n: "8.4×",  l: "Best ROAS Achieved",     sub: "Google Shopping Campaign" },
            { n: "42%",   l: "CAC Reduction",           sub: "Via targeting & creative testing" },
            { n: "2–3M",  l: "People Reached",          sub: "Govt LPG Campaign, Tier 2 India" },
            { n: "50+",   l: "Brands Scaled",           sub: "Across 10+ industries" },
            { n: "₹Cr+",  l: "Ad Budget Managed",       sub: "Multi-crore campaigns" },
            { n: "14",    l: "Countries",                sub: "India, US, UK and beyond" },
          ].map((m, i) => (
            <div key={m.l}
              className="p-6 sm:p-8 rounded-2xl text-center transition-all duration-700 group"
              style={{
                background: "rgba(99,102,241,0.04)",
                border: "1px solid rgba(99,102,241,0.1)",
                transitionDelay: `${i * 80}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                boxShadow: "0 0 30px rgba(99,102,241,0.05)",
              }}>
              <div className="text-3xl sm:text-4xl font-black stat-num mb-1">{m.n}</div>
              <div className="text-sm font-semibold text-white/50 mb-1">{m.l}</div>
              <div className="text-[11px] text-white/20">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Featured */}
        <div className={`mt-5 p-8 sm:p-10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.05) 100%)",
            border: "1px solid rgba(99,102,241,0.15)",
            transitionDelay: "500ms",
          }}>
          <div>
            <div className="text-[9px] text-indigo-400/40 uppercase tracking-widest mb-2">Featured Campaign</div>
            <h3 className="text-lg sm:text-2xl font-black text-white/90 mb-2">Government LPG — Tier 2 India</h3>
            <p className="text-sm text-white/30 max-w-sm">Regional mobile-first awareness campaign. Reached millions across Tier 2 India.</p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-6xl sm:text-8xl font-black leading-none"
              style={{ color: "rgba(99,102,241,0.12)" }}>2–3M</div>
            <div className="text-xs text-white/20 mt-1">people reached</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   PROOF OF WORK
══════════════════════════════════════════════════════════ */
function ProofOfWork() {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref);
  return (
    <section ref={ref} className="relative z-10 py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-[10px] text-indigo-400/40 uppercase tracking-[0.3em]">Proof of Work</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white/90 mt-2 tracking-tighter">
            Real campaigns.<br />Real numbers.
          </h2>
          <p className="text-xs text-white/20 mt-2">Live dashboards — not mockups.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {["/ss1.jpg","/ss2.jpg","/ss3.jpg","/ss4.jpg","/ss5.jpg"].map((src, i) => (
            <div key={i}
              className={`group relative rounded-xl overflow-hidden aspect-video cursor-pointer transition-all duration-700`}
              style={{
                border: "1px solid rgba(255,255,255,0.05)",
                transitionDelay: `${i * 80}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
              }}>
              <Image src={src} alt={`Campaign ${i + 1}`} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   CONTACT
══════════════════════════════════════════════════════════ */
function Contact() {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref);
  return (
    <section id="contact" ref={ref} className="relative z-10 py-32 px-6 sm:px-10 text-center">
      <div className="max-w-2xl mx-auto">
        <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="text-[10px] text-indigo-400/40 uppercase tracking-[0.3em] mb-4">Let&apos;s Work</div>
          <h2 className="font-black text-white/90 tracking-tighter leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
            Let&apos;s Build Something<br />That Scales.
          </h2>
          <p className="text-sm text-white/25 leading-relaxed mb-12 max-w-sm mx-auto">
            B2B, startup, or government project — I&apos;m open to new challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
            <a href="mailto:namanworks7@gmail.com"
              className="flex items-center gap-3 px-6 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.15))",
                border: "1px solid rgba(99,102,241,0.3)",
                boxShadow: "0 0 30px rgba(99,102,241,0.15)",
              }}>
              <span>namanworks7@gmail.com</span>
            </a>
            <a href="tel:+919695624105"
              className="flex items-center gap-3 px-6 py-3.5 rounded-full text-sm text-white/50 transition-all duration-300 hover:text-white/80"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              +91 96956 24105
            </a>
          </div>

          <a href="https://www.linkedin.com/in/naman-singh-b87b2920a/" target="_blank" rel="noopener noreferrer"
            className="text-xs text-indigo-400/40 hover:text-indigo-400/70 transition-colors">
            linkedin.com/in/naman-singh →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="relative z-10 py-10 px-6 text-center border-t" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
      <div className="text-[9px] text-white/10 uppercase tracking-[0.4em] mb-2">Performance Marketer · Bengaluru, India</div>
      <div className="text-sm font-black text-white/10 tracking-widest">NAMAN SINGH © 2026</div>
    </footer>
  );
}

/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Background />
      <GraphLine />
      <main className="relative">
        <Hero />
        <Experience />
        <Skills />
        <Results />
        <ProofOfWork />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
