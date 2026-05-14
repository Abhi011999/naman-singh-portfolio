"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ══ DATA ══════════════════════════════════════════════════ */
const PLATFORMS = [
  { src: "/google.svg",    alt: "Google",     start: "0deg"   },
  { src: "/facebook.svg",  alt: "Meta",       start: "60deg"  },
  { src: "/instagram.svg", alt: "Instagram",  start: "120deg" },
  { src: "/linkedin.svg",  alt: "LinkedIn",   start: "180deg" },
  { src: "/youtube.svg",   alt: "YouTube",    start: "240deg" },
  { src: "/googleads.svg", alt: "Google Ads", start: "300deg" },
];

const STATS = [
  { n: "7+",   l: "Years"          },
  { n: "50+",  l: "Brands Scaled"  },
  { n: "2-3M", l: "People Reached" },
  { n: "₹Cr+", l: "Ad Budget"      },
  { n: "8.4×", l: "Best ROAS"      },
  { n: "42%",  l: "CAC Reduction"  },
];

const SKILLS = [
  { label: "Performance Marketing", pct: 95 },
  { label: "SEO & GEO",             pct: 90 },
  { label: "AI-Driven Growth",      pct: 85 },
  { label: "Meta & Google Ads",     pct: 97 },
  { label: "B2B Growth Strategy",   pct: 88 },
  { label: "Analytics & Reporting", pct: 92 },
];

const JOBS = [
  {
    co: "Social Musketeers", role: "Head of Marketing", period: "2022 – Present",
    tags: ["Govt of India", "SaaS", "B2B", "Healthcare"],
    desc: "Led end-to-end growth for global B2B clients and Government of India campaigns. Managed multi-crore ad budgets across 10+ industries.",
  },
  {
    co: "Vinra Group", role: "Digital Marketing Manager", period: "2020 – 2022",
    tags: ["Google Ads", "Meta Ads", "SEO", "CRO"],
    desc: "Managed paid campaigns across Google, Meta, LinkedIn. Drove organic growth and improved conversions via rigorous A/B testing.",
  },
  {
    co: "Comm8 Digital", role: "Marketing Executive", period: "2019 – 2020",
    tags: ["Lead Gen", "Social Media", "PPC"],
    desc: "Started the growth journey. Lead generation across Facebook, Instagram & LinkedIn. Built execution and optimisation fundamentals.",
  },
];

const RESULTS = [
  { n: "8.4×",  l: "Best ROAS Achieved",   sub: "Google Shopping Campaign"        },
  { n: "42%",   l: "CAC Reduction",         sub: "Via targeting & creative testing" },
  { n: "2–3M",  l: "People Reached",        sub: "Govt LPG Campaign, Tier 2 India" },
  { n: "50+",   l: "Brands Scaled",         sub: "Across 10+ industries"            },
  { n: "₹Cr+",  l: "Ad Budget Managed",     sub: "Multi-crore campaigns"            },
  { n: "14",    l: "Countries",             sub: "India, US, UK and beyond"         },
];

/* ══ HOOK — safe SSR ═══════════════════════════════════════ */
function useInView(ref: React.RefObject<Element | null>) {
  const [visible, setVisible] = useState(false);
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return !client || visible; // true on SSR so nothing hidden
}

/* ══ BACKGROUND ════════════════════════════════════════════ */
function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(rgba(99,102,241,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.035) 1px,transparent 1px)",
        backgroundSize: "64px 64px",
      }} />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(99,102,241,0.07) 0%,transparent 70%)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(168,85,247,0.05) 0%,transparent 70%)" }} />
      {[...Array(18)].map((_, i) => (
        <div key={i} className="absolute w-px h-px rounded-full"
          style={{
            left: `${(i * 41 + 7) % 100}%`, top: `${(i * 59 + 11) % 100}%`,
            background: "rgba(165,180,252,0.4)",
            animation: `float${["A","B","C"][i%3]} ${5 + (i%4)}s ease-in-out infinite`,
            animationDelay: `${(i*0.4)%3}s`,
          }} />
      ))}
    </div>
  );
}

/* ══ GRAPH LINE ════════════════════════════════════════════ */
function GraphLine() {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), 400); return () => clearTimeout(t); }, []);
  return (
    <div className="fixed bottom-0 left-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.15 }}>
      <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        {show && (
          <>
            <path d="M0 860 C200 820,350 740,500 650 C650 560,750 490,880 400 C1010 310,1120 220,1250 140 C1350 75,1400 40,1440 20"
              fill="none" stroke="url(#gg)" strokeWidth="1.5" filter="url(#glow)" className="graph-line" />
            {[[0,860],[500,650],[880,400],[1250,140],[1440,20]].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="4" fill="#6366f1" filter="url(#glow)"
                className="graph-node" style={{ animationDelay: `${i*0.5}s` }} />
            ))}
          </>
        )}
      </svg>
    </div>
  );
}

/* ══ HERO ══════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center z-10">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 py-24">

        {/* Two column: text | photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT — text */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="fade-up fade-up-1 inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-[10px] text-indigo-300/60 uppercase tracking-widest font-medium">
                Available for Work
              </span>
            </div>

            <h1 className="fade-up fade-up-2 font-black tracking-tighter leading-[0.88] mb-4"
              style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)", color: "#e8eaf6" }}>
              NAMAN<br />SINGH
            </h1>

            <div className="fade-up fade-up-3 mb-5">
              <p className="text-base font-semibold text-indigo-300/70">Performance Marketer</p>
              <p className="text-sm text-white/30 mt-0.5">Growth Strategist · 7+ Years</p>
            </div>

            <p className="fade-up fade-up-3 text-sm text-white/25 leading-relaxed max-w-sm mb-8">
              Building brands through scalable digital systems — Google Ads, Meta, SEO, AI marketing &amp; high-ROI campaigns.
            </p>

            <div className="fade-up fade-up-4">
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300"
                style={{ boxShadow: "0 0 24px rgba(99,102,241,0.15)" }}>
                Reach Out
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              </a>
            </div>
          </div>

          {/* RIGHT — photo + orbit */}
          <div className="flex justify-center fade-up fade-up-2">
            <div className="relative" style={{ width: 280, height: 380 }}>
              {/* Orbit rings */}
              {[260, 330, 400].map((d, i) => (
                <div key={i} className="absolute rounded-full border border-dashed pointer-events-none"
                  style={{
                    width: d, height: d,
                    top: "50%", left: "50%",
                    marginTop: -d/2, marginLeft: -d/2,
                    borderColor: `rgba(99,102,241,${0.07 - i*0.02})`,
                  }} />
              ))}
              {/* Orbiting icons */}
              {PLATFORMS.map((p, i) => (
                <div key={i} className="orbit-icon"
                  style={{
                    "--r": "158px", "--start": p.start, "--dur": "22s",
                    "--delay": `${i * -3.6}s`, top: "50%", left: "50%",
                  } as React.CSSProperties}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center p-2"
                    style={{
                      background: "rgba(5,8,22,0.85)",
                      border: "1px solid rgba(99,102,241,0.2)",
                      boxShadow: "0 0 12px rgba(99,102,241,0.15)",
                    }}>
                    <img src={p.src} alt={p.alt} className="w-full h-full object-contain"
                      style={{ filter: "brightness(0) invert(1) opacity(0.65)" }} />
                  </div>
                </div>
              ))}
              {/* Photo */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 0 60px rgba(99,102,241,0.1),0 24px 60px rgba(0,0,0,0.7)" }}>
                <Image src="/naman-cutout.png" alt="Naman Singh" fill
                  className="object-cover object-top" priority />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom,transparent 55%,rgba(5,8,22,0.75) 100%)" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 pt-8 border-t border-white/[0.05] grid grid-cols-3 sm:grid-cols-6 gap-4 text-center fade-up fade-up-4">
          {STATS.map(s => (
            <div key={s.l}>
              <div className="text-xl sm:text-2xl md:text-3xl font-black stat-num tracking-tight">{s.n}</div>
              <div className="text-[9px] text-white/20 uppercase tracking-widest mt-1 leading-tight">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ REVEAL WRAPPER ════════════════════════════════════════ */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  return (
    <div ref={ref} className="reveal"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}>
      {children}
    </div>
  );
}

/* ══ EXPERIENCE ════════════════════════════════════════════ */
function Experience() {
  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="text-[10px] text-indigo-400/40 uppercase tracking-[0.3em]">Career</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white/90 mt-2 mb-12 tracking-tighter leading-tight">
            7 Years.<br />3 Companies.<br />Real Growth.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {JOBS.map((j, i) => (
            <Reveal key={j.co} delay={i * 100}>
              <div className="h-full p-7 rounded-2xl hover:border-indigo-500/25 transition-colors duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                }}>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"
                    style={{ boxShadow: "0 0 8px rgba(99,102,241,0.8)" }} />
                  <span className="text-[10px] text-indigo-400/40 uppercase tracking-widest">{j.period}</span>
                </div>
                <div className="font-black text-white/90 text-base mb-1">{j.co}</div>
                <div className="text-xs text-white/30 mb-4">{j.role}</div>
                <p className="text-sm text-white/35 leading-relaxed mb-5">{j.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {j.tags.map(t => (
                    <span key={t} className="text-[10px] text-indigo-300/40 border px-2.5 py-1 rounded-full"
                      style={{ borderColor: "rgba(99,102,241,0.15)" }}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ SKILLS ════════════════════════════════════════════════ */
function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <span className="text-[10px] text-indigo-400/40 uppercase tracking-[0.3em]">Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white/90 mt-2 mb-12 tracking-tighter">
            What I Do Best
          </h2>
        </Reveal>
        <div ref={ref} className="space-y-7">
          {SKILLS.map((s, i) => (
            <div key={s.label} className="reveal"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-16px)",
                transition: `opacity 0.6s ease ${i*80+200}ms, transform 0.6s ease ${i*80+200}ms`,
              }}>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-white/50">{s.label}</span>
                <span className="text-xs text-indigo-400/40">{s.pct}%</span>
              </div>
              <div className="h-px w-full rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="skill-bar"
                  style={{ width: visible ? `${s.pct}%` : "0%", transitionDelay: `${i*80+400}ms` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ RESULTS ═══════════════════════════════════════════════ */
function Results() {
  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="text-[10px] text-indigo-400/40 uppercase tracking-[0.3em]">Impact</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white/90 mt-2 mb-12 tracking-tighter text-center">
            Numbers Don&apos;t Lie
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {RESULTS.map((m, i) => (
            <Reveal key={m.l} delay={i * 70}>
              <div className="p-6 sm:p-8 rounded-2xl text-center"
                style={{
                  background: "rgba(99,102,241,0.04)",
                  border: "1px solid rgba(99,102,241,0.1)",
                  boxShadow: "0 0 28px rgba(99,102,241,0.04)",
                }}>
                <div className="text-3xl sm:text-4xl font-black stat-num mb-1">{m.n}</div>
                <div className="text-sm font-semibold text-white/50 mb-1">{m.l}</div>
                <div className="text-[11px] text-white/20 leading-snug">{m.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Featured */}
        <Reveal delay={400}>
          <div className="mt-4 p-8 sm:p-10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            style={{
              background: "linear-gradient(135deg,rgba(99,102,241,0.07) 0%,rgba(168,85,247,0.05) 100%)",
              border: "1px solid rgba(99,102,241,0.15)",
            }}>
            <div>
              <div className="text-[9px] text-indigo-400/40 uppercase tracking-widest mb-2">Featured Campaign</div>
              <h3 className="text-xl sm:text-2xl font-black text-white/90 mb-2">
                Government LPG — Tier 2 India
              </h3>
              <p className="text-sm text-white/30 max-w-sm leading-relaxed">
                Regional mobile-first awareness campaign. Reached millions across Tier 2 India.
              </p>
            </div>
            <div className="flex-shrink-0 sm:text-right">
              <div className="text-6xl sm:text-8xl font-black leading-none"
                style={{ color: "rgba(99,102,241,0.12)" }}>2–3M</div>
              <div className="text-xs text-white/20 mt-1">people reached</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══ PROOF OF WORK ═════════════════════════════════════════ */
function ProofOfWork() {
  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="text-[10px] text-indigo-400/40 uppercase tracking-[0.3em]">Proof of Work</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white/90 mt-2 mb-2 tracking-tighter">
            Real campaigns.<br />Real numbers.
          </h2>
          <p className="text-xs text-white/20 mb-10">Live dashboards — not mockups.</p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {["/ss1.jpg","/ss2.jpg","/ss3.jpg","/ss4.jpg","/ss5.jpg"].map((src, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="group relative rounded-xl overflow-hidden aspect-video cursor-pointer"
                style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
                <Image src={src} alt={`Campaign ${i+1}`} fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ CONTACT ═══════════════════════════════════════════════ */
function Contact() {
  return (
    <section id="contact" className="relative z-10 py-32 sm:py-40 px-6 sm:px-10 text-center">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <div className="text-[10px] text-indigo-400/40 uppercase tracking-[0.3em] mb-4">Let&apos;s Work</div>
          <h2 className="font-black text-white/90 tracking-tighter leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem,7vw,5rem)" }}>
            Let&apos;s Build Something<br />That Scales.
          </h2>
          <p className="text-sm text-white/25 leading-relaxed mb-12 max-w-sm mx-auto">
            B2B, startup, or government project — I&apos;m open to new challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
            <a href="mailto:namanworks7@gmail.com"
              className="flex items-center gap-3 px-6 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg,rgba(99,102,241,0.2),rgba(168,85,247,0.15))",
                border: "1px solid rgba(99,102,241,0.3)",
                boxShadow: "0 0 28px rgba(99,102,241,0.15)",
              }}>
              namanworks7@gmail.com
            </a>
            <a href="tel:+919695624105"
              className="flex items-center px-6 py-3.5 rounded-full text-sm text-white/45 transition-all duration-300 hover:text-white/75"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              +91 96956 24105
            </a>
          </div>

          <a href="https://www.linkedin.com/in/naman-singh-b87b2920a/" target="_blank" rel="noopener noreferrer"
            className="text-xs text-indigo-400/35 hover:text-indigo-400/65 transition-colors">
            linkedin.com/in/naman-singh →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ══ FOOTER ════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="relative z-10 py-10 px-6 text-center border-t text-center"
      style={{ borderColor: "rgba(255,255,255,0.04)" }}>
      <div className="text-[9px] text-white/10 uppercase tracking-[0.4em] mb-2">
        Performance Marketer · Bengaluru, India
      </div>
      <div className="text-xs font-black text-white/10 tracking-widest">NAMAN SINGH © 2026</div>
    </footer>
  );
}

/* ══ PAGE ══════════════════════════════════════════════════ */
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
