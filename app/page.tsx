"use client";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight, Download } from "lucide-react";

/* ─── Data ───────────────────────────────────────────────── */
const PLATFORMS = [
  { src: "/google.svg",    alt: "Google",     start: "0deg"   },
  { src: "/facebook.svg",  alt: "Meta",       start: "60deg"  },
  { src: "/instagram.svg", alt: "Instagram",  start: "120deg" },
  { src: "/linkedin.svg",  alt: "LinkedIn",   start: "180deg" },
  { src: "/youtube.svg",   alt: "YouTube",    start: "240deg" },
  { src: "/googleads.svg", alt: "Google Ads", start: "300deg" },
];

const STATS = [
  { n: "7+",   l: "Years"         },
  { n: "50+",  l: "Brands Scaled" },
  { n: "2-3M", l: "People Reached"},
  { n: "₹Cr+", l: "Ad Budget"     },
];

const EXPERTISE = [
  "Google Ads", "Meta Ads", "SEO & GEO",
  "LinkedIn Ads", "GA4 Analytics", "AI Marketing",
  "B2B Growth", "Govt Campaigns",
];

const METRICS = [
  { n: "8.4×", l: "Best ROAS Achieved" },
  { n: "42%",  l: "CAC Reduction"      },
  { n: "14",   l: "Countries"          },
  { n: "200+", l: "Campaigns Run"      },
];

const JOBS = [
  {
    co: "Social Musketeers",
    role: "Head of Marketing",
    period: "Feb 2022 – Present",
    tags: ["Govt of India", "SaaS", "B2B", "Healthcare", "Real Estate"],
    desc: "Led end-to-end growth for global B2B clients and Government of India campaigns. Managed multi-crore ad budgets, built repeatable growth systems across 10+ industries.",
  },
  {
    co: "Vinra Group",
    role: "Digital Marketing Manager",
    period: "Jun 2020 – Jan 2022",
    tags: ["Google Ads", "Meta Ads", "SEO", "CRO", "WordPress"],
    desc: "Managed paid campaigns across Google, Meta, and LinkedIn. Drove organic growth through keyword strategy and improved conversions via rigorous A/B testing.",
  },
  {
    co: "Comm8 Digital",
    role: "Marketing Executive",
    period: "Feb 2019 – May 2020",
    tags: ["Lead Gen", "Social Media", "PPC"],
    desc: "Started the growth marketing journey. Lead generation across Facebook, Instagram & LinkedIn. Built speed, execution, and optimisation skills from the ground up.",
  },
];

const SCREENSHOTS = [
  { src: "/ss1.jpg", label: "Google Ads Campaign" },
  { src: "/ss2.jpg", label: "Meta Ads Results"    },
  { src: "/ss3.jpg", label: "Analytics Report"    },
  { src: "/ss4.jpg", label: "Campaign Dashboard"  },
  { src: "/ss5.jpg", label: "Performance Report"  },
];

/* ─── Nav ────────────────────────────────────────────────── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8f7f4]/90 backdrop-blur-md border-b border-black/[0.06]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <span className="text-sm font-black tracking-tight text-black">NS</span>
        <div className="hidden md:flex items-center gap-8">
          {["About", "Work", "Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-xs text-black/40 hover:text-black transition-colors duration-200">
              {l}
            </a>
          ))}
        </div>
        <a href="mailto:Namanworks7@gmail.com"
          className="text-xs font-semibold bg-black text-white px-4 py-2 rounded-full hover:bg-black/80 transition-all duration-200">
          Hire Me
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="min-h-screen bg-[#f8f7f4] pt-14 flex items-center">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 w-full py-16 sm:py-20">

        {/* Top: text + photo */}
        <div className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left gap-12 md:gap-10">

          {/* Text */}
          <div className="order-2 md:order-1 max-w-lg fade-up fade-up-1">
            <div className="inline-flex items-center gap-2 bg-black/[0.05] rounded-full px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-black/40 uppercase tracking-widest font-medium">
                Available for Work
              </span>
            </div>
            <h1
              className="font-black text-black tracking-tighter leading-[0.9] mb-4"
              style={{ fontSize: "clamp(3.2rem, 8vw, 6rem)" }}
            >
              NAMAN<br />SINGH
            </h1>
            <p className="text-sm font-semibold text-black/50 mb-1">
              Growth Marketer · Performance · SEO · AI
            </p>
            <p className="text-sm text-black/30 mb-6">
              Scaling brands through data-driven digital systems.
            </p>
            <div className="flex items-center gap-2 justify-center md:justify-start text-xs text-black/30 mb-8">
              <MapPin size={11} />
              <span>Bengaluru, India</span>
            </div>
            <div className="flex gap-3 justify-center md:justify-start flex-wrap">
              <a href="#work"
                className="inline-flex items-center gap-1.5 bg-black text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-black/80 transition-all duration-200">
                View Work <ArrowUpRight size={11} />
              </a>
              <a href="/naman-resume.pdf" target="_blank"
                className="inline-flex items-center gap-1.5 border border-black/12 text-black/40 text-xs px-5 py-2.5 rounded-full hover:border-black/25 hover:text-black/70 transition-all duration-200">
                <Download size={11} /> Resume
              </a>
            </div>
          </div>

          {/* Photo + orbit */}
          <div className="order-1 md:order-2 flex-shrink-0 fade-up fade-up-2">
            <div className="relative mx-auto" style={{ width: 260, height: 360 }}>
              {/* orbit ring */}
              <div
                className="absolute rounded-full border border-dashed border-black/[0.07] pointer-events-none"
                style={{ inset: "-56px", borderRadius: "50%" }}
              />
              {/* orbiting icons */}
              {PLATFORMS.map((p, i) => (
                <div
                  key={i}
                  className="orbit-icon"
                  style={{
                    "--r": "148px",
                    "--start": p.start,
                    "--dur": "20s",
                    "--delay": "0s",
                    top: "50%",
                    left: "50%",
                  } as React.CSSProperties}
                >
                  <div className="w-9 h-9 rounded-full bg-white shadow-md border border-black/[0.05] flex items-center justify-center p-2">
                    <img src={p.src} alt={p.alt} className="w-full h-full object-contain" />
                  </div>
                </div>
              ))}
              {/* Photo */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <Image
                  src="/naman-cutout.png"
                  alt="Naman Singh"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 pt-8 border-t border-black/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-6 text-center fade-up fade-up-4">
          {STATS.map(s => (
            <div key={s.l}>
              <div className="text-3xl sm:text-4xl font-black text-black tracking-tight">{s.n}</div>
              <div className="text-[10px] text-black/25 uppercase tracking-widest mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About ──────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-5 sm:px-8 bg-white">
      <div className="max-w-5xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Left copy */}
          <div>
            <span className="text-[10px] text-black/25 uppercase tracking-[0.3em] font-medium">About</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mt-3 mb-6 leading-tight tracking-tighter">
              I build growth<br />systems that scale.
            </h2>
            <p className="text-base text-black/45 leading-relaxed mb-4">
              7 years solving hard growth challenges for startups, global B2B brands, government projects, healthcare, real estate, and e-commerce — across India, the US, and the UK.
            </p>
            <p className="text-sm text-black/30 leading-relaxed mb-8">
              Currently deep into AI-driven marketing, GEO (Generative Engine Optimization), and building conversion-focused growth systems.
            </p>
            <div className="flex flex-wrap gap-2">
              {EXPERTISE.map(tag => (
                <span key={tag}
                  className="text-[11px] text-black/40 border border-black/8 rounded-full px-3 py-1.5 bg-[#f8f7f4]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right metrics */}
          <div className="grid grid-cols-2 gap-3">
            {METRICS.map(m => (
              <div key={m.l} className="border border-black/[0.06] rounded-2xl p-5 sm:p-6 bg-[#f8f7f4]">
                <div className="text-2xl sm:text-3xl font-black text-black mb-1">{m.n}</div>
                <div className="text-xs text-black/30 leading-snug">{m.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-14 border-l-2 border-black/10 pl-6">
          <p className="text-base sm:text-lg text-black/25 italic leading-relaxed">
            &ldquo;Marketing would be easy if attribution worked perfectly.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Work ───────────────────────────────────────────────── */
function Work() {
  return (
    <section id="work" className="py-20 sm:py-28 px-5 sm:px-8 bg-[#f8f7f4]">
      <div className="max-w-5xl mx-auto">

        <div className="mb-12">
          <span className="text-[10px] text-black/25 uppercase tracking-[0.3em] font-medium">Experience</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mt-3 leading-tight tracking-tighter">
            7 years. No fluff.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {JOBS.map(j => (
            <div key={j.co}
              className="bg-white border border-black/[0.06] rounded-2xl p-6 sm:p-7 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-shadow duration-300">
              <div className="font-black text-black text-sm mb-0.5">{j.co}</div>
              <div className="text-[11px] text-black/30 mb-4">{j.role} · {j.period}</div>
              <p className="text-sm text-black/40 leading-relaxed mb-5">{j.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {j.tags.map(t => (
                  <span key={t}
                    className="text-[10px] text-black/25 border border-black/[0.07] px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured callout */}
        <div className="bg-black text-white rounded-2xl p-7 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-[9px] text-white/30 uppercase tracking-widest mb-2">Featured Campaign</div>
            <h3 className="text-lg sm:text-xl font-black mb-2 leading-snug">
              Government LPG Campaign — Tier 2 India
            </h3>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm">
              Regional mobile-first awareness campaign across Tier 2 India.
            </p>
          </div>
          <div className="flex-shrink-0 sm:text-right">
            <div className="text-5xl sm:text-7xl font-black text-white/10 leading-none">2–3M</div>
            <div className="text-xs text-white/25 mt-1">people reached</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Proof of Work ──────────────────────────────────────── */
function ProofOfWork() {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 bg-white">
      <div className="max-w-5xl mx-auto">

        <div className="mb-10">
          <span className="text-[10px] text-black/25 uppercase tracking-[0.3em] font-medium">Proof of Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mt-3 leading-tight tracking-tighter">
            Real campaigns.<br />Real numbers.
          </h2>
          <p className="text-sm text-black/30 mt-2">Live dashboards — not mockups.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {SCREENSHOTS.map((s, i) => (
            <div
              key={i}
              className={`group relative rounded-xl sm:rounded-2xl overflow-hidden border border-black/[0.05] cursor-pointer bg-[#f8f7f4] aspect-video${i === 0 ? " col-span-2 md:col-span-1" : ""}`}
            >
              <Image
                src={s.src}
                alt={s.label}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-white font-semibold">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8 bg-[#f8f7f4]">
      <div className="max-w-5xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Left */}
          <div>
            <span className="text-[10px] text-black/25 uppercase tracking-[0.3em] font-medium">Contact</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mt-3 mb-5 leading-tight tracking-tighter">
              Let&apos;s build<br />something<br />that scales.
            </h2>
            <p className="text-sm text-black/35 leading-relaxed max-w-xs">
              B2B, startup, or government project — I&apos;m open to new challenges. Let&apos;s talk growth.
            </p>
          </div>

          {/* Contact cards */}
          <div className="flex flex-col gap-3">
            <a
              href="mailto:Namanworks7@gmail.com"
              className="flex items-center gap-4 p-5 bg-black text-white rounded-2xl group hover:bg-black/85 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Mail size={14} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] text-white/35 uppercase tracking-widest mb-0.5">Email</div>
                <div className="text-sm font-semibold truncate">Namanworks7@gmail.com</div>
              </div>
              <ArrowUpRight size={14} className="text-white/40 flex-shrink-0" />
            </a>

            <a
              href="tel:+919695624105"
              className="flex items-center gap-4 p-5 bg-white border border-black/[0.07] rounded-2xl group hover:border-black/20 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-black/[0.04] flex items-center justify-center flex-shrink-0">
                <Phone size={14} className="text-black/40" />
              </div>
              <div className="flex-1">
                <div className="text-[9px] text-black/20 uppercase tracking-widest mb-0.5">Phone</div>
                <div className="text-sm font-semibold text-black">+91 96956 24105</div>
              </div>
              <ArrowUpRight size={14} className="text-black/15 group-hover:text-black/40 transition-colors flex-shrink-0" />
            </a>

            <a
              href="https://www.linkedin.com/in/naman-singh-b87b2920a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white border border-black/[0.07] rounded-2xl group hover:border-black/20 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-black/[0.04] flex items-center justify-center flex-shrink-0">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-[9px] text-black/20 uppercase tracking-widest mb-0.5">LinkedIn</div>
                <div className="text-sm font-semibold text-black">linkedin.com/in/naman-singh</div>
              </div>
              <ArrowUpRight size={14} className="text-black/15 group-hover:text-black/40 transition-colors flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-black text-white py-16 sm:py-20 px-5 sm:px-8 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="text-[9px] text-white/20 uppercase tracking-[0.4em] mb-3">
          Performance Marketer · Bengaluru, India
        </div>
        <h2
          className="font-black text-white tracking-tighter leading-none mb-8"
          style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
        >
          NAMAN SINGH
        </h2>
        <div className="flex justify-center gap-5 sm:gap-8 text-xs text-white/25 flex-wrap">
          <a href="mailto:Namanworks7@gmail.com" className="hover:text-white/70 transition-colors">
            Namanworks7@gmail.com
          </a>
          <span className="text-white/10 hidden sm:inline">·</span>
          <a href="tel:+919695624105" className="hover:text-white/70 transition-colors">
            +91 96956 24105
          </a>
          <span className="text-white/10 hidden sm:inline">·</span>
          <a
            href="https://www.linkedin.com/in/naman-singh-b87b2920a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70 transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <div className="mt-10 text-[10px] text-white/10">© 2026 Naman Singh</div>
      </div>
    </footer>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Work />
      <ProofOfWork />
      <Contact />
      <Footer />
    </main>
  );
}
