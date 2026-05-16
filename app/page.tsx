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
];

const SKILLS = [
  { label: "Performance Marketing", pct: 95 },
  { label: "SEO & GEO",             pct: 90 },
  { label: "Growth Strategy",       pct: 88 },
  { label: "User Acquisition",      pct: 85 },
  { label: "CRO",                   pct: 82 },
  { label: "Marketing Automation",  pct: 80 },
  { label: "Funnel Optimization",   pct: 88 },
  { label: "Analytics & Attribution", pct: 85 },
  { label: "AI-Driven Marketing",   pct: 78 },
  { label: "B2B SaaS Growth",       pct: 80 },
];

const PLATFORMS_GRID = [
  { name: "Google Ads",     sub: "Paid Search" },
  { name: "Meta Ads",       sub: "Social Ads"  },
  { name: "LinkedIn Ads",   sub: "B2B Ads"     },
  { name: "GA4",            sub: "Analytics"    },
  { name: "Search Console", sub: "SEO"         },
  { name: "Tag Manager",    sub: "Tracking"    },
  { name: "Looker Studio",  sub: "Reporting"   },
  { name: "WordPress",      sub: "CMS"         },
  { name: "HubSpot",        sub: "CRM"         },
  { name: "YouTube Ads",    sub: "Video"       },
  { name: "Semrush",        sub: "SEO Tools"   },
  { name: "ChatGPT/AI",     sub: "AI Tools"    },
];

const JOBS = [
  {
    co: "Social Musketeers", abbr: "SM", role: "Head of Marketing", period: "Feb 2022 – Present",
    color: "#6366f1",
    desc: "Led end-to-end growth marketing for startups, real estate brands, healthcare companies, government campaigns and international clients across the US and UK markets.",
    responsibilities: [
      "Led performance marketing across Meta, Google, YouTube & LinkedIn",
      "Managed multi-crore ad budgets end-to-end",
      "Built lead generation funnels & growth systems",
      "Handled US & UK client campaigns",
      "Led SEO & GEO strategies",
      "Created marketing automation workflows",
      "Improved ROI & reduced CAC significantly",
      "Managed full client relationships & scaling",
    ],
    industries: ["Government", "Real Estate", "Healthcare", "B2B SaaS", "E-commerce", "Education", "Lifestyle"],
  },
  {
    co: "Vinra Group", abbr: "VG", role: "Digital Marketing Manager", period: "Jun 2020 – Jan 2022",
    color: "#a855f7",
    desc: "",
    responsibilities: [
      "Managed Google Ads, Meta Ads, LinkedIn & YouTube campaigns",
      "Improved SEO rankings through keyword strategy",
      "Worked on WordPress websites & landing page optimization",
      "Managed analytics, reporting & conversion tracking",
      "Improved conversion rates through rigorous CRO testing",
    ],
    industries: [],
  },
  {
    co: "Comm8 Digital", abbr: "C8", role: "Marketing Executive", period: "Feb 2019 – May 2020",
    color: "#10b981",
    desc: "",
    responsibilities: [
      "Started growth marketing journey here",
      "Lead generation campaigns & social media marketing",
      "Built speed, execution & optimization skills",
      "Creative testing & client communication",
    ],
    industries: [],
  },
];

const IMPACT = [
  { label: "CAC", desc: "Reduced acquisition costs through targeting & creative testing" },
  { label: "ROI", desc: "Improved return on investment across multiple campaigns" },
  { label: "Systems", desc: "Built repeatable growth systems for 10+ industries" },
  { label: "Scale", desc: "Increased campaign scalability through smart automation" },
];

const QUIRKY_THINGS = [
  "Checking dashboards at midnight",
  "Testing ad creatives obsessively",
  "Finding growth loopholes",
  "Reading about AI workflows",
  "Looking at competitor funnels",
];

/* ══ ABOUT ME ═════════════════════════════════════════════ */
function AboutMe() {
  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="02 / About Me" title={<>The person behind<br /><span className="gradient-text">the campaigns.</span></>} />

        <Reveal delay={100}>
          <div className="glass p-8 sm:p-10 mb-10">
            <p className="text-sm sm:text-base text-white/50 leading-relaxed mb-4">
              I&apos;m Naman Singh, a growth marketer who enjoys solving growth challenges and building
              marketing systems that create real business impact. Over the last 7 years, I&apos;ve worked in
              fast-paced agency environments managing campaigns for startups, global clients,
              government projects, healthcare brands, real estate companies, and B2B businesses.
            </p>
            <p className="text-sm sm:text-base text-white/40 leading-relaxed">
              I&apos;ve handled everything from strategy and execution to optimization, reporting, and
              scaling, working with clients across India, the US, and the UK.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <Reveal delay={150}>
            <div className="glass-hover p-7">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-xs font-bold text-white/70">Currently Obsessed With</span>
              </div>
              <ul className="space-y-2.5">
                {["AI-driven marketing","B2B SaaS growth","Product-led growth","GEO (Generative Engine Optimization)","Conversion-focused funnels","Growth systems & automation"].map(item => (
                  <li key={item} className="text-sm text-white/35 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-indigo-400/50" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={250}>
            <div className="glass-hover p-7">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="text-xs font-bold text-white/70">Things I Enjoy</span>
              </div>
              <ul className="space-y-2.5">
                {["Building campaigns that scale","Testing new ideas relentlessly","Solving growth bottlenecks","Understanding user behavior","Working with ambitious teams","Reading about AI marketing"].map(item => (
                  <li key={item} className="text-sm text-white/35 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-purple-400/50" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Career Timeline */}
        <Reveal delay={300}>
          <h3 className="text-xl font-black text-white/80 mb-8">Career at a Glance</h3>
          <div className="relative pl-8 border-l border-white/10 space-y-8">
            {[
              { year: "2019", title: "Marketing Executive", sub: "Comm8 Digital · Started the journey: lead gen, social, ads" },
              { year: "2020", title: "Digital Marketing Manager", sub: "Vinra Group · Performance marketing, SEO, CRO, WordPress" },
              { year: "2022", title: "Head of Marketing", sub: "Social Musketeers · End-to-end growth across 10+ industries" },
            ].map((t, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[2.15rem] top-1 w-3 h-3 rounded-full bg-indigo-500 timeline-dot" />
                <span className="text-xs text-indigo-400/60 font-mono">{t.year}</span>
                <div className="font-bold text-white/80 text-sm mt-0.5">{t.title}</div>
                <div className="text-xs text-white/30 mt-0.5">{t.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Quirky quote */}
        <Reveal delay={400}>
          <div className="mt-12 p-5 rounded-xl" style={{ background: "rgba(234,179,8,0.05)", border: "1px solid rgba(234,179,8,0.15)" }}>
            <p className="text-sm italic text-yellow-300/60">
              &ldquo;POV: Scaling campaigns at 2 AM because ROAS suddenly jumped.&rdquo;
            </p>
            <p className="text-[10px] text-white/20 mt-1">A Tuesday, probably</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

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
  return !client || visible;
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

/* ══ SECTION HEADER — unified ══════════════════════════════ */
function SectionHeader({
  label, title, center = false,
}: { label: string; title: React.ReactNode; center?: boolean }) {
  return (
    <Reveal>
      <div className={`w-full ${center ? "text-center" : ""}`}>
        <span className="text-[10px] text-indigo-400/40 uppercase tracking-[0.3em]">{label}</span>
        <h2 className="text-4xl sm:text-5xl font-black text-white/90 mt-2 mb-12 tracking-tighter leading-tight">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}

/* ══ HERO ══════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center z-10">
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-24">

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
              Building brands through scalable digital systems: Google Ads, Meta, SEO, AI marketing &amp; high-ROI campaigns.
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
              {[260, 330, 400].map((d, i) => (
                <div key={i} className="absolute rounded-full border border-dashed pointer-events-none"
                  style={{
                    width: d, height: d,
                    top: "50%", left: "50%",
                    marginTop: -d/2, marginLeft: -d/2,
                    borderColor: `rgba(99,102,241,${0.07 - i*0.02})`,
                  }} />
              ))}
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
        <div className="mt-20 pt-8 border-t border-white/[0.05] grid grid-cols-2 sm:grid-cols-4 gap-6 text-center fade-up fade-up-4">
          {STATS.map(s => (
            <div key={s.l}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black stat-num tracking-tight">{s.n}</div>
              <div className="text-[9px] text-white/20 uppercase tracking-widest mt-1 leading-tight">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══ EXPERIENCE ════════════════════════════════════════════ */
function Experience() {
  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="03 / Experience" title={<>7 Years. 3 Companies.<br /><span className="gradient-text">Real Growth.</span></>} />

        <div className="space-y-6">
          {JOBS.map((j, i) => (
            <Reveal key={j.co} delay={i * 120}>
              <div className="glass-hover p-0 overflow-hidden">
                {/* Header bar */}
                <div className="p-6 pb-4 flex items-center gap-4" style={{ background: `linear-gradient(135deg, ${j.color}15 0%, transparent 60%)` }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm text-white"
                    style={{ background: j.color }}>
                    {j.abbr}
                  </div>
                  <div>
                    <div className="font-black text-white/90 text-lg">{j.co}</div>
                    <div className="text-xs text-white/40">{j.role} · {j.period}</div>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  {j.desc && <p className="text-sm text-white/40 leading-relaxed mb-5 mt-2">{j.desc}</p>}

                  {j.responsibilities.length > 0 && (
                    <div className={`grid ${j.industries.length > 0 ? "md:grid-cols-2" : "grid-cols-1"} gap-6`}>
                      <div>
                        <span className="text-[10px] text-white/30 uppercase tracking-widest">Key Responsibilities</span>
                        <ul className="mt-3 space-y-2">
                          {j.responsibilities.map((r, ri) => (
                            <li key={ri} className="text-xs text-white/35 flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-indigo-400/50 mt-1.5 flex-shrink-0" />{r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {j.industries.length > 0 && (
                        <div>
                          <span className="text-[10px] text-white/30 uppercase tracking-widest">Industries Served</span>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {j.industries.map(ind => (
                              <span key={ind} className="text-[11px] text-white/40 px-3 py-1.5 rounded-lg"
                                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                {ind}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Impact */}
        <Reveal delay={300}>
          <h3 className="text-lg font-black text-white/70 mt-14 mb-6">Impact & Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {IMPACT.map((item, i) => (
              <div key={i} className="tilt-card glass p-5 text-center">
                <div className="text-xl font-black gradient-text mb-2">{item.label}</div>
                <p className="text-[11px] text-white/30 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Banner */}
        <Reveal delay={400}>
          <div className="mt-10 p-6 sm:p-8 rounded-2xl text-center"
            style={{ background: "linear-gradient(135deg, #050816 0%, rgba(99,102,241,0.1) 100%)", border: "1px solid rgba(99,102,241,0.2)" }}>
            <h3 className="text-lg sm:text-xl font-black text-white/80 mb-2">
              7 Years. 3 Companies. 10+ Industries. One Focus:
            </h3>
            <p className="text-base sm:text-lg font-black gradient-text">
              Real business growth, not just metrics.
            </p>
            <p className="text-xs text-white/25 mt-2">From government awareness campaigns to SaaS pipelines. Growth is the constant.</p>
          </div>
        </Reveal>

        <Reveal delay={450}>
          <div className="mt-8 p-5 rounded-xl" style={{ background: "rgba(234,179,8,0.05)", border: "1px solid rgba(234,179,8,0.15)" }}>
            <p className="text-sm italic text-yellow-300/60">
              &ldquo;Client: Can we reduce CAC by 50%? Me: opens 17 tabs and survives on coffee.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══ FEATURED PROJECT ═════════════════════════════════════ */
function FeaturedProject() {
  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="04 / Featured Project" title={<>LPG Awareness<br /><span className="gradient-text">Campaign</span></>} />

        {/* Hero banner with Indian flag gradient top */}
        <Reveal>
          <div className="rounded-2xl overflow-hidden mb-8" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="h-1.5" style={{ background: "linear-gradient(90deg, #FF9933 33%, white 33% 66%, #138808 66%)" }} />
            <div className="p-8 sm:p-10" style={{ background: "linear-gradient(135deg, rgba(20,20,30,0.95) 0%, rgba(5,8,22,0.98) 100%)" }}>
              <span className="text-[10px] text-emerald-400/60 uppercase tracking-widest bg-emerald-400/10 px-2.5 py-1 rounded-full">Government Campaign</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white/90 mt-4 mb-2">LPG Awareness Campaign</h3>
              <p className="text-sm text-white/35">Tier 2 India · BPL Families · 2–3 Million Reached</p>
            </div>
          </div>
        </Reveal>

        {/* 3 columns */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            { title: "The Challenge", color: "#ef4444", items: ["Many users were not active digital users", "Low-end mobile devices & limited internet", "Language & trust barriers", "Very simple messaging needed"] },
            { title: "What We Did", color: "#6366f1", items: ["Mobile-friendly campaigns", "Regional targeting strategy", "Simplified messaging", "Continuous creative testing", "Regional language assets"] },
            { title: "Impact", color: "#10b981", items: ["2–3 Million people reached", "Improved awareness at scale", "Helped families access LPG benefits", "Meaningful social impact"] },
          ].map((col, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="tilt-card glass p-6 h-full" style={{ borderTopColor: col.color, borderTopWidth: "2px" }}>
                <h4 className="font-bold text-sm mb-4" style={{ color: col.color }}>{col.title}</h4>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="text-xs text-white/35 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: col.color }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Why it mattered */}
        <Reveal delay={350}>
          <div className="glass p-7 mb-8">
            <h4 className="font-bold text-sm text-white/70 mb-3">Why This Project Mattered</h4>
            <p className="text-sm text-white/35 leading-relaxed italic">
              This project felt bigger than marketing. Seeing how campaigns could genuinely help families
              improve their daily lives, accessing clean cooking fuel. It was deeply rewarding and a
              reminder that marketing, done right, creates real human impact.
            </p>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "2–3M+", l: "People Reached" },
              { n: "Tier 2", l: "India Focus" },
              { n: "BPL", l: "Target Families" },
              { n: "Regional", l: "Language Assets" },
            ].map((s, i) => (
              <div key={i} className="tilt-card glass p-5 text-center">
                <div className="text-xl sm:text-2xl font-black gradient-text">{s.n}</div>
                <div className="text-[10px] text-white/25 uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══ SKILLS ════════════════════════════════════════════════ */
function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="05 / Skills & Platforms" title={<>Tools, Skills &amp;<br /><span className="gradient-text">Platforms</span></>} />

        {/* Core Competencies */}
        <Reveal>
          <h3 className="text-base font-bold text-white/60 mb-6">Core Competencies</h3>
        </Reveal>
        <div ref={ref} className="space-y-3 mb-14">
          {SKILLS.map((s, i) => (
            <div key={s.label} className="relative rounded-lg overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.05)",
                height: 36,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.5s ease ${i*60+100}ms, transform 0.5s ease ${i*60+100}ms`,
              }}>
              <div className="skill-bar-v2" style={{ width: visible ? `${s.pct}%` : "0%", transitionDelay: `${i*60+200}ms` }}>
                {s.label}
              </div>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-bold text-indigo-300/60">{s.pct}%</span>
            </div>
          ))}
        </div>

        {/* Platforms Grid */}
        <Reveal delay={200}>
          <h3 className="text-base font-bold text-white/60 mb-6">Platforms & Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {PLATFORMS_GRID.map((p, i) => (
              <div key={i} className="tilt-card glass p-4 text-center">
                <div className="font-bold text-sm text-white/70">{p.name}</div>
                <div className="text-[10px] text-white/25 mt-0.5">{p.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Things marquee */}
        <Reveal delay={350}>
          <div className="mt-12 rounded-xl overflow-hidden py-4 px-0" style={{ background: "rgba(5,5,15,0.9)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-[10px] text-white/30 uppercase tracking-widest text-center mb-3">Things You&apos;ll Find Me Doing</p>
            <div className="overflow-hidden">
              <div className="marquee-track flex gap-6 whitespace-nowrap">
                {[...QUIRKY_THINGS, ...QUIRKY_THINGS].map((t, i) => (
                  <span key={i} className="text-xs text-white/30 px-4 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.04)" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══ AI & FUTURE ══════════════════════════════════════════ */
function AIFuture() {
  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="06 / AI & Future of Marketing" title={<>Why I&apos;m Excited About<br /><span className="gradient-text">AI-Driven Marketing.</span></>} />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <Reveal>
              <p className="text-sm text-white/40 leading-relaxed mb-8">
                I believe AI will completely change how marketing works over the next few years. Marketing teams that
                embrace AI tools will move faster, optimize better, and create more human experiences, not less.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-3">
              {[
                { title: "AI Workflows", desc: "Automating repetitive tasks and enabling faster execution", color: "#6366f1" },
                { title: "GEO", desc: "Generative Engine Optimization for AI search behavior", color: "#a855f7" },
                { title: "B2B SaaS", desc: "Product-led growth loops and pipeline automation", color: "#6366f1" },
                { title: "AI Search", desc: "Understanding new buyer behavior in AI-first search", color: "#a855f7" },
              ].map((card, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="tilt-card glass p-4" style={{ borderLeft: `3px solid ${card.color}` }}>
                    <div className="text-xs font-bold text-white/70 mb-1">{card.title}</div>
                    <p className="text-[11px] text-white/30 leading-relaxed">{card.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — How I Work */}
          <div>
            <Reveal delay={100}>
              <h3 className="text-base font-bold text-white/70 mb-5">How I Work</h3>
              <div className="space-y-4">
                {[
                  { title: "Fast Execution", desc: "No bureaucracy. Ship and learn." },
                  { title: "Testing Mindset", desc: "Every assumption gets questioned." },
                  { title: "ROI-Focused", desc: "Growth that matters to business." },
                  { title: "Data + Creativity", desc: "Numbers inform; ideas inspire." },
                  { title: "Ownership", desc: "I treat every campaign as my own." },
                  { title: "Long-term Vision", desc: "Sustainable growth, not hacks." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-white/70">{item.title}</div>
                      <div className="text-xs text-white/30">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Slack testimonial */}
            <Reveal delay={300}>
              <div className="mt-8 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="px-4 py-2 flex items-center gap-2" style={{ background: "rgba(30,30,40,0.9)" }}>
                  <span className="text-[10px] text-white/40 font-mono"># client-love</span>
                  <span className="text-[10px] text-white/20 ml-auto">Slack</span>
                </div>
                <div className="p-4" style={{ background: "rgba(15,15,25,0.8)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-[9px] font-bold text-emerald-400">CL</div>
                    <span className="text-xs font-bold text-white/60">Client Lead</span>
                    <span className="text-[10px] text-white/20">Today 11:42 PM</span>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed">
                    Naman brought strong ownership and helped us improve campaign performance while scaling efficiently. Best hire we made.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══ PROOF OF WORK — Glass floating screenshots ══════════ */
function ScreenshotCard({ src, index, visibleGrid }: { src: string; index: number; visibleGrid: boolean }) {
  const [tapped, setTapped] = useState(false);
  return (
    <div
      className={`ss-float group relative rounded-2xl overflow-hidden aspect-video cursor-pointer ${visibleGrid ? "visible" : ""} ${tapped ? "tapped" : ""}`}
      style={{
        "--rot": `${(index % 2 === 0 ? 1 : -1) * (1 + index * 0.5)}deg`,
        animationDelay: `${index * 0.6}s`,
        background: "rgba(255,255,255,0.02)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
      } as React.CSSProperties}
      onClick={() => setTapped(t => !t)}
    >
      <Image src={src} alt={`Campaign ${index + 1}`} fill
        className="object-cover transition-opacity duration-500 scale-[1.02] opacity-0 group-hover:opacity-90 ss-img" />
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0 ss-hint">
        <div className="text-center">
          <div className="w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2"
            style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)" }}>
            <span className="text-indigo-300/60 text-xs">↗</span>
          </div>
          <span className="text-[10px] text-white/20 hidden md:inline">hover to reveal</span>
          <span className="text-[10px] text-white/20 md:hidden">tap to reveal</span>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ss-overlay" />
    </div>
  );
}

function ProofOfWork() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  return (
    <section className="relative z-10 py-24 sm:py-32 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="text-[10px] text-indigo-400/40 uppercase tracking-[0.3em]">Proof of Work</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white/90 mt-2 mb-2 tracking-tighter leading-tight">
            Real campaigns.<br /><span className="gradient-text">Real numbers.</span>
          </h2>
          <p className="text-xs text-white/20 mb-12">
            Live dashboards, not mockups.{" "}
            <span className="hidden md:inline">Hover to peek.</span>
            <span className="md:hidden">Tap to reveal.</span>
          </p>
        </Reveal>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {["/ss1.jpg","/ss2.jpg","/ss3.jpg","/ss4.jpg","/ss5.jpg"].map((src, i) => (
            <ScreenshotCard key={i} src={src} index={i} visibleGrid={visible} />
          ))}
          <div className={`ss-float rounded-2xl aspect-video flex flex-col items-center justify-center gap-2 ${visible ? "visible" : ""}`}
            style={{
              "--rot": "-1deg",
              animationDelay: "3s",
              border: "1px dashed rgba(99,102,241,0.2)",
              background: "rgba(99,102,241,0.03)",
              backdropFilter: "blur(8px)",
            } as React.CSSProperties}>
            <span className="text-xs text-indigo-400/40 font-bold">+ More</span>
            <span className="text-[10px] text-white/15">Case studies on request</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══ CONTACT ══════════════════════════════════════════════ */
function Contact() {
  return (
    <section id="contact" className="relative z-10 py-32 sm:py-40 px-6 sm:px-10 lg:px-20 text-center">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="text-[10px] text-indigo-400/40 uppercase tracking-[0.3em] mb-4">07 / Let&apos;s Build Something</div>
          <h2 className="font-black text-white/90 tracking-tighter leading-tight mb-4"
            style={{ fontSize: "clamp(2.5rem,7vw,4.5rem)" }}>
            Let&apos;s build something<br /><span className="gradient-text">that grows.</span>
          </h2>
          <p className="text-sm text-white/30 leading-relaxed mb-12 max-w-md mx-auto">
            I&apos;m always excited to work with ambitious teams building products that solve real problems.
          </p>
        </Reveal>

        {/* Contact cards */}
        <Reveal delay={200}>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <a href="mailto:namanworks7@gmail.com" className="tilt-card glass-hover p-5 group">
              <div className="text-xs font-bold text-indigo-400/60 mb-1">Email</div>
              <div className="text-sm text-white/60 group-hover:text-white/90 transition-colors">namanworks7@gmail.com</div>
            </a>
            <a href="https://www.linkedin.com/in/naman-singh-b87b2920a/" target="_blank" rel="noopener noreferrer" className="tilt-card glass-hover p-5 group">
              <div className="text-xs font-bold text-indigo-400/60 mb-1">LinkedIn</div>
              <div className="text-sm text-white/60 group-hover:text-white/90 transition-colors">linkedin.com/in/namansingh</div>
            </a>
            <a href="tel:+919695624105" className="tilt-card glass-hover p-5 group">
              <div className="text-xs font-bold text-indigo-400/60 mb-1">Phone</div>
              <div className="text-sm text-white/60 group-hover:text-white/90 transition-colors">+91 96956 24105</div>
            </a>
          </div>
        </Reveal>

        <Reveal delay={350}>
          <a href="mailto:namanworks7@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
              boxShadow: "0 0 40px rgba(99,102,241,0.3), 0 8px 24px rgba(99,102,241,0.2)",
            }}>
            Start a Conversation
            <span className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
          </a>
        </Reveal>

        <Reveal delay={450}>
          <p className="mt-8 text-[11px] text-white/15 italic">
            &ldquo;Marketing would be easy if attribution worked perfectly.&rdquo; Me, every Monday
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ══ FOOTER ════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="relative z-10 py-10 px-6 text-center border-t"
      style={{ borderColor: "rgba(255,255,255,0.04)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <a href="mailto:namanworks7@gmail.com" className="text-xs text-white/30 hover:text-indigo-400/70 transition-colors">
            namanworks7@gmail.com
          </a>
          <span className="hidden sm:inline text-white/10">·</span>
          <a href="tel:+919695624105" className="text-xs text-white/30 hover:text-indigo-400/70 transition-colors">
            +91 96956 24105
          </a>
          <span className="hidden sm:inline text-white/10">·</span>
          <span className="text-xs text-white/20">Bengaluru, India</span>
        </div>
        <div className="text-[9px] text-white/10 uppercase tracking-[0.4em] mb-2">
          Reach out, let&apos;s make something great together
        </div>
        <div className="text-xs font-black text-white/10 tracking-widest">NAMAN SINGH © 2026</div>
      </div>
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
        <AboutMe />
        <Experience />
        <FeaturedProject />
        <Skills />
        <AIFuture />
        <ProofOfWork />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
