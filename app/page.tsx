"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, ArrowUpRight, TrendingUp } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────

const chartBars = [
  { h: 28 }, { h: 42 }, { h: 36 }, { h: 58 }, { h: 50 },
  { h: 72 }, { h: 65 }, { h: 84 }, { h: 78 }, { h: 92 }, { h: 100 },
];

const tickerItems = [
  "Performance Marketing", "·", "Google Ads", "·", "SEO", "·", "GEO", "·",
  "Meta Ads", "·", "B2B Strategy", "·", "Lead Gen", "·", "CRO", "·",
  "GA4", "·", "App Campaigns", "·", "LinkedIn Ads", "·", "AI Marketing", "·",
  "Performance Marketing", "·", "Google Ads", "·", "SEO", "·", "GEO", "·",
  "Meta Ads", "·", "B2B Strategy", "·", "Lead Gen", "·", "CRO", "·",
];

const stats = [
  { n: "7+", l: "Years" },
  { n: "50+", l: "Clients" },
  { n: "3x", l: "Avg ROI" },
  { n: "₹10Cr+", l: "Ad Spend" },
  { n: "14", l: "Countries" },
  { n: "200+", l: "Campaigns" },
];

const screenshots = [
  { src: "/ss1.jpg", tag: "Google Ads" },
  { src: "/ss2.jpg", tag: "Meta Ads" },
  { src: "/ss3.jpg", tag: "Analytics" },
  { src: "/ss4.jpg", tag: "Campaign Data" },
  { src: "/ss5.jpg", tag: "Growth Report" },
];

const jobs = [
  { co: "Social Musketeers", role: "Head of Marketing", period: "2022 – Present", tags: ["Govt of India", "SaaS", "B2B Global", "Healthcare"] },
  { co: "Vinra Group", role: "Digital Marketing Manager", period: "2020 – 2022", tags: ["Google Ads", "SEO", "Meta", "CRO"] },
  { co: "Comm8", role: "Digital Marketing Executive", period: "2019 – 2020", tags: ["Lead Gen", "Social", "PPC"] },
];

const memes = [
  { emoji: "📊", top: "Me: 'We need to reduce CAC'\nAlso me:", punch: "builds a 47-step funnel" },
  { emoji: "📈", top: "My ROAS after 3 months of optimization:", punch: "stonks only go up" },
  { emoji: "🧠", top: "Client: 'Can we go viral?'\nMe (B2B SaaS marketer):", punch: "Sir, this is a LinkedIn ad" },
];

// ─── Nav ──────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/5" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xs font-bold tracking-[0.25em] text-white/40 uppercase">Naman Singh</span>
        <div className="flex items-center gap-6">
          {["Work", "Proof", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs text-white/25 hover:text-white transition-colors uppercase tracking-widest">{item}</a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const txtY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const op = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-end overflow-hidden">
      <motion.div style={{ y: imgY }} className="absolute inset-0">
        <Image src="/naman-photo.jpg" alt="Naman Singh" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/55 to-[#080808]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/75 via-[#080808]/20 to-transparent" />
      </motion.div>

      <motion.div style={{ y: txtY, opacity: op }} className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 border border-white/10 rounded-full px-3 py-1 text-xs text-white/40 mb-6"
        >
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full pulse-dot" />
          Open to opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-7xl md:text-[9rem] font-black leading-none tracking-tighter text-white mb-5"
        >
          Naman<br />Singh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white/45 text-base md:text-lg max-w-md mb-3 leading-relaxed font-light italic"
        >
          &ldquo;Calm mind. Sharp strategy.<br />The best growth comes when you stop chasing and start thinking.&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white/20 text-xs uppercase tracking-widest mb-8"
        >
          Head of Marketing · 7+ Years · Bangalore
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href="mailto:Namanworks7@gmail.com"
            className="group flex items-center gap-2 bg-white text-black text-xs font-bold px-6 py-3 rounded-full hover:bg-white/90 transition-all"
          >
            <Mail size={11} />
            Namanworks7@gmail.com
            <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="tel:+919695624105"
            className="flex items-center gap-2 border border-white/15 text-white/50 text-xs px-6 py-3 rounded-full hover:border-white/35 hover:text-white transition-all"
          >
            <Phone size={11} />
            +91 96956 24105
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Ticker ───────────────────────────────────────────────────────────────

function Ticker() {
  return (
    <div className="py-3.5 border-y border-white/5 overflow-hidden bg-white/[0.008]">
      <div className="flex ticker-track whitespace-nowrap">
        {tickerItems.map((t, i) => (
          <span key={i} className="text-[10px] text-white/18 uppercase tracking-widest mx-3">{t}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────

function StatsBar() {
  return (
    <section className="relative py-16 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[22vw] font-black text-white/[0.013] tracking-tighter select-none leading-none">GROWTH</span>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-white/5">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-[#080808] py-8 px-4 text-center group hover:bg-white/[0.03] transition-colors cursor-default"
            >
              <div className="text-3xl md:text-4xl font-black text-white mb-1.5 group-hover:scale-110 transition-transform duration-300 origin-bottom">{s.n}</div>
              <div className="text-[9px] text-white/22 uppercase tracking-widest">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Proof / Screenshots ──────────────────────────────────────────────────

function ProofSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const x2 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="proof" ref={ref} className="py-24 px-6 border-b border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs text-white/18 uppercase tracking-widest">The receipts</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-2 leading-none tracking-tight">
            Growth.<br /><span className="text-white/28">Measured.</span>
          </h2>
        </motion.div>

        {/* Animated bar chart */}
        <div className="mb-14">
          <div className="flex items-end gap-1.5 h-28 border-b border-white/5 pb-0">
            {chartBars.map((b, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.55, ease: "easeOut" }}
                style={{ height: `${b.h}%`, transformOrigin: "bottom" }}
                className={`flex-1 rounded-t-sm ${i === chartBars.length - 1 ? "bg-white" : "bg-white/18 hover:bg-white/35 transition-colors"}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-1.5 mt-2">
            <TrendingUp size={11} className="text-white/18" />
            <span className="text-[10px] text-white/18">Campaign ROI growth over time — last bar is now</span>
          </div>
        </div>

        {/* Screenshots row 1 */}
        <div className="space-y-4">
          <motion.div style={{ x: x1 }} className="flex gap-4">
            {screenshots.slice(0, 3).map((ss, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.025, zIndex: 10 }}
                className="relative flex-shrink-0 w-60 md:w-72 group"
              >
                <div className="relative rounded-lg overflow-hidden border border-white/[0.07]">
                  <Image src={ss.src} alt={ss.tag} width={288} height={170} className="w-full h-40 object-cover object-top" />
                  <div className="absolute inset-0 bg-black/52 group-hover:bg-black/15 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/75 to-transparent">
                    <span className="text-[9px] text-white/45 uppercase tracking-widest">{ss.tag}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Screenshots row 2 */}
          <motion.div style={{ x: x2 }} className="flex gap-4 pl-12">
            {screenshots.slice(3).map((ss, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.1 }}
                whileHover={{ scale: 1.025, zIndex: 10 }}
                className="relative flex-shrink-0 w-60 md:w-72 group"
              >
                <div className="relative rounded-lg overflow-hidden border border-white/[0.07]">
                  <Image src={ss.src} alt={ss.tag} width={288} height={170} className="w-full h-40 object-cover object-top" />
                  <div className="absolute inset-0 bg-black/52 group-hover:bg-black/15 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/75 to-transparent">
                    <span className="text-[9px] text-white/45 uppercase tracking-widest">{ss.tag}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

// ─── Work ─────────────────────────────────────────────────────────────────

function WorkSection() {
  return (
    <section id="work" className="py-24 px-6 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <span className="text-xs text-white/18 uppercase tracking-widest">Experience</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-2 leading-none tracking-tight">7 years.<br /><span className="text-white/28">No fluff.</span></h2>
        </motion.div>
        <div className="space-y-px bg-white/5">
          {jobs.map((j, i) => (
            <motion.div
              key={j.co}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#080808] p-7 flex flex-col md:flex-row md:items-center gap-4 hover:bg-white/[0.025] transition-colors group"
            >
              <div className="flex-1">
                <div className="text-base font-black text-white mb-0.5">{j.co}</div>
                <div className="text-sm text-white/35">{j.role} <span className="text-white/18 text-xs">· {j.period}</span></div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {j.tags.map(t => (
                  <span key={t} className="text-[10px] text-white/28 border border-white/[0.07] px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <ArrowUpRight size={15} className="text-white/8 group-hover:text-white/35 transition-colors flex-shrink-0 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Memes ────────────────────────────────────────────────────────────────

function MemeSection() {
  return (
    <section className="py-24 px-6 border-b border-white/5 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[18vw] font-black text-white/[0.01] tracking-tighter select-none leading-none">MEMES</span>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <span className="text-xs text-white/18 uppercase tracking-widest">Because why not</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2 leading-none tracking-tight">
            Marketer brain.<br /><span className="text-white/28">Never off.</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {memes.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.025)" }}
              className="bg-[#080808] p-8 cursor-default transition-all duration-300"
            >
              <div className="text-5xl mb-5 float">{m.emoji}</div>
              <p className="text-sm text-white/40 leading-relaxed mb-5 whitespace-pre-line">{m.top}</p>
              <div className="inline-block border border-white/8 rounded-full px-3 py-1.5 text-xs text-white/55 bg-white/[0.025]">
                {m.punch}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-[10px] text-white/12 mt-6 italic">* No client KPIs were harmed in the making of these memes.</p>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-xs text-white/18 uppercase tracking-widest">Let&apos;s talk</span>
          <h2 className="text-6xl md:text-8xl font-black text-white mt-4 mb-5 leading-none tracking-tighter">
            Hit me up
          </h2>
          <p className="text-white/28 text-sm mb-12 max-w-sm mx-auto leading-relaxed">
            B2B brand, startup, or government project — if you need growth, I&apos;m your person.<br />
            <span className="text-white/18">If you don&apos;t need growth... still reach out, we&apos;ll figure it out 😄</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="mailto:Namanworks7@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2.5 bg-white text-black font-bold px-8 py-4 rounded-full text-sm hover:bg-white/92 transition-all"
            >
              <Mail size={14} />
              Namanworks7@gmail.com
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
            <motion.a
              href="tel:+919695624105"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 border border-white/12 text-white/50 text-sm px-8 py-4 rounded-full hover:border-white/35 hover:text-white transition-all"
            >
              <Phone size={13} />
              +91 96956 24105
            </motion.a>
          </div>
          <p className="text-white/10 text-xs mt-8">📍 Bangalore, India</p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-white/5 py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <span className="text-xs text-white/12">© 2026 Naman Singh</span>
        <span className="text-xs text-white/8">Performance Marketing · SEO · GEO · Growth</span>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-[#080808] min-h-screen">
      <Nav />
      <Hero />
      <Ticker />
      <StatsBar />
      <ProofSection />
      <WorkSection />
      <MemeSection />
      <Contact />
      <Footer />
    </main>
  );
}
