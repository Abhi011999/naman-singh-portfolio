"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight, TrendingUp, Globe2, BarChart3, Zap, Users, Target, ChevronDown } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "50+", label: "Global Clients" },
  { value: "3x", label: "Avg. ROI Delivered" },
  { value: "₹10Cr+", label: "Ad Spend Managed" },
];

const skills = [
  "Performance Marketing", "PPC", "SEO", "GEO", "App Marketing",
  "Lead Generation", "CRO", "Marketing Automation", "GA4", "Team Leadership",
  "B2B Strategy", "Programmatic Ads", "AI-driven Campaigns", "User Acquisition",
];

const marqueeItems = [...skills, ...skills];

const experiences = [
  {
    company: "Social Musketeers",
    role: "Head of Marketing",
    period: "Feb 2022 — Present",
    location: "Bangalore",
    highlights: [
      "Partnered with Government of India projects and pan-India brands",
      "Owned end-to-end strategy for SaaS, healthcare, real estate & e-commerce",
      "Led high-performing marketing team across design, tech, and sales",
      "Built repeatable frameworks reducing CAC and improving LTV",
      "Implemented AI-driven optimization + Generative Engine Optimization (GEO)",
    ],
    tags: ["Government of India", "SaaS", "Healthcare", "Real Estate"],
  },
  {
    company: "Vinra Group",
    role: "Digital Marketing Manager",
    period: "Jun 2020 — Jan 2022",
    location: "Bangalore",
    highlights: [
      "Managed Google, Meta, YouTube, LinkedIn & Pinterest Ads",
      "Drove organic rankings via on-page, off-page & technical SEO",
      "Built conversion funnels and CRO strategies from scratch",
      "Tracked ROI, CTR, CPA via GA, Tag Manager & Looker Studio",
    ],
    tags: ["Google Ads", "Meta Ads", "SEO", "CRO"],
  },
  {
    company: "Comm8",
    role: "Digital Marketing Executive",
    period: "Feb 2019 — May 2020",
    location: "Bangalore",
    highlights: [
      "Lead gen campaigns across Facebook, Instagram, Twitter & LinkedIn",
      "Optimized SEO + Google Ads for CTR and conversion improvements",
      "Designed creatives for brand campaigns and social media",
    ],
    tags: ["Lead Gen", "Social Media", "Google Ads"],
  },
];

const metrics = [
  { icon: TrendingUp, label: "ROAS Achieved", value: "8.4x", sub: "E-commerce client, 6-month campaign" },
  { icon: Target, label: "CAC Reduction", value: "42%", sub: "SaaS startup via funnel optimization" },
  { icon: Users, label: "Leads Generated", value: "12K+", sub: "Real estate B2B pipeline, FY23" },
  { icon: Globe2, label: "Markets Reached", value: "14", sub: "Countries across APAC, EU & MENA" },
  { icon: BarChart3, label: "Organic Growth", value: "210%", sub: "Traffic increase via SEO overhaul" },
  { icon: Zap, label: "Campaigns Run", value: "200+", sub: "Across Google, Meta, LinkedIn & more" },
];

const clientTypes = [
  { label: "Government of India", icon: "🏛️", desc: "National digital campaigns & citizen engagement" },
  { label: "Global B2B Brands", icon: "🌐", desc: "Lead gen & demand gen for international clients" },
  { label: "SaaS Startups", icon: "⚡", desc: "Growth-focused acquisition + retention funnels" },
  { label: "Real Estate", icon: "🏢", desc: "High-intent lead campaigns across India" },
  { label: "Healthcare", icon: "🩺", desc: "Sensitive sector performance marketing" },
  { label: "E-commerce", icon: "🛒", desc: "Full-funnel ROAS-driven scaling" },
];

// ─── Components ──────────────────────────────────────────────────────────────

function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-white/30 pointer-events-none z-[9999] mix-blend-difference"
      animate={{ x: pos.x - 12, y: pos.y - 12, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-widest text-white/50 uppercase">NS</span>
        <div className="flex items-center gap-8">
          {["Work", "Clients", "Metrics", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-white/40 hover:text-white transition-colors duration-200">
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-3xl float-slow" style={{ animationDelay: "3s" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/50 mb-8"
            >
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full glow-dot" />
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-7xl font-black tracking-tight text-white mb-4 leading-none"
            >
              Naman<br />Singh
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-white/40 font-light mb-6"
            >
              Growth & Performance Marketing Leader
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-sm text-white/25 max-w-sm mb-10 leading-relaxed"
            >
              7+ years driving measurable growth for B2B brands, Government of India projects, and global clients through performance marketing, SEO, and AI-powered strategies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <a
                href="mailto:Namanworks7@gmail.com"
                className="group flex items-center gap-2 bg-white text-black text-sm font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-all duration-200"
              >
                Get in touch
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="tel:+919695624105"
                className="flex items-center gap-2 border border-white/10 text-white/60 text-sm px-6 py-3 rounded-full hover:border-white/30 hover:text-white transition-all duration-200"
              >
                <Phone size={13} />
                +91 96956 24105
              </a>
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl scale-110" />
              {/* Border ring */}
              <div className="absolute inset-0 rounded-full border border-white/10" />
              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
                <Image
                  src="/naman-photo.jpg"
                  alt="Naman Singh"
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-3 -right-3 bg-black border border-white/10 px-3 py-2 rounded-xl text-xs text-white/60 backdrop-blur-sm"
              >
                📍 Bangalore, India
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-12 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black p-8 text-center"
            >
              <div className="text-4xl font-black text-white mb-1">{s.value}</div>
              <div className="text-xs text-white/30 uppercase tracking-widest">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsMarquee() {
  return (
    <section className="py-10 overflow-hidden border-b border-white/5">
      <div className="flex">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {marqueeItems.map((skill, i) => (
            <span key={i} className="text-xs font-medium text-white/20 uppercase tracking-widest flex items-center gap-8">
              {skill}
              <span className="w-1 h-1 bg-white/10 rounded-full" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section id="clients" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs text-white/20 uppercase tracking-widest">Client Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            Worked with the<br />
            <span className="text-white/30">best across the globe</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {clientTypes.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              className="bg-black p-8 group cursor-default transition-colors duration-300"
            >
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3 className="text-sm font-semibold text-white mb-2">{c.label}</h3>
              <p className="text-xs text-white/30 leading-relaxed">{c.desc}</p>
              <div className="mt-6 w-6 h-px bg-white/10 group-hover:w-12 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 p-6 border border-white/5 flex items-center gap-4"
        >
          <Globe2 size={20} className="text-white/20 flex-shrink-0" />
          <p className="text-sm text-white/30">
            Delivered campaigns across{" "}
            <span className="text-white/60">India, UAE, UK, Australia, USA, Singapore</span>{" "}
            and more — with measurable ROI at every step.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section id="metrics" className="py-24 px-6 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs text-white/20 uppercase tracking-widest">Impact by Numbers</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            Growth that<br />
            <span className="text-white/30">shows up in data</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#0a0a0a] p-8 group"
            >
              <div className="flex items-start justify-between mb-6">
                <m.icon size={18} className="text-white/20 group-hover:text-white/40 transition-colors" />
                <ArrowUpRight size={14} className="text-white/10 group-hover:text-white/30 transition-colors" />
              </div>
              <div className="text-5xl font-black text-white mb-2">{m.value}</div>
              <div className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">{m.label}</div>
              <div className="text-xs text-white/20">{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs text-white/20 uppercase tracking-widest">Experience</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            7 years of<br />
            <span className="text-white/30">building growth engines</span>
          </h2>
        </motion.div>

        <div className="space-y-px bg-white/5">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black"
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left group hover:bg-white/[0.02] transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-lg font-black text-white">{exp.company}</span>
                    <span className="text-xs text-white/20 border border-white/10 px-2 py-0.5 rounded-full">{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-white/40">{exp.role}</span>
                    <span className="text-xs text-white/20">·</span>
                    <span className="text-xs text-white/20">{exp.period}</span>
                  </div>
                </div>
                <motion.div animate={{ rotate: active === i ? 45 : 0 }} transition={{ duration: 0.2 }}>
                  <ArrowUpRight size={18} className="text-white/20 group-hover:text-white/50 transition-colors" />
                </motion.div>
              </button>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 space-y-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.tags.map(tag => (
                          <span key={tag} className="text-xs text-white/40 border border-white/10 px-3 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                      <div className="space-y-3">
                        {exp.highlights.map((h, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.05 }}
                            className="flex items-start gap-3 text-sm text-white/40 leading-relaxed"
                          >
                            <span className="w-1 h-1 bg-white/20 rounded-full mt-2 flex-shrink-0" />
                            {h}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs text-white/20 uppercase tracking-widest">Let&apos;s Talk</span>
            <h2 className="text-5xl md:text-6xl font-black text-white mt-4 leading-tight">
              Ready to<br />
              grow your<br />
              <span className="text-white/30">business?</span>
            </h2>
            <p className="text-white/30 text-sm leading-relaxed mt-6 max-w-xs">
              Whether you&apos;re a B2B brand, a startup, or a government initiative — let&apos;s build something that moves the needle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-4"
          >
            {[
              { icon: Mail, label: "Email", value: "Namanworks7@gmail.com", href: "mailto:Namanworks7@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 96956 24105", href: "tel:+919695624105" },
              { icon: MapPin, label: "Location", value: "Bangalore, India", href: null },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="group flex items-center gap-5 p-5 border border-white/5 hover:border-white/15 transition-all duration-300 hover:bg-white/[0.02]"
                  >
                    <item.icon size={16} className="text-white/30 group-hover:text-white/60 transition-colors" />
                    <div>
                      <div className="text-xs text-white/20 uppercase tracking-widest mb-0.5">{item.label}</div>
                      <div className="text-sm text-white/70 group-hover:text-white transition-colors">{item.value}</div>
                    </div>
                    <ArrowUpRight size={14} className="ml-auto text-white/10 group-hover:text-white/40 transition-colors" />
                  </a>
                ) : (
                  <div className="flex items-center gap-5 p-5 border border-white/5">
                    <item.icon size={16} className="text-white/30" />
                    <div>
                      <div className="text-xs text-white/20 uppercase tracking-widest mb-0.5">{item.label}</div>
                      <div className="text-sm text-white/50">{item.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs text-white/15">© 2026 Naman Singh. All rights reserved.</span>
        <span className="text-xs text-white/10">Performance Marketing · SEO · Growth · GEO</span>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Cursor />
      <Nav />
      <Hero />
      <Stats />
      <SkillsMarquee />
      <Clients />
      <Metrics />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
