"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight, Download } from "lucide-react";

const FADE = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const TRANS = { duration: 0.7, ease: "easeOut" as const };

const platforms = [
  { src: "/google.svg",    alt: "Google",    r: "160px", start:   "0deg", dur: "18s" },
  { src: "/facebook.svg",  alt: "Meta",      r: "160px", start:  "60deg", dur: "18s" },
  { src: "/instagram.svg", alt: "Instagram", r: "160px", start: "120deg", dur: "18s" },
  { src: "/linkedin.svg",  alt: "LinkedIn",  r: "160px", start: "180deg", dur: "18s" },
  { src: "/youtube.svg",   alt: "YouTube",   r: "160px", start: "240deg", dur: "18s" },
  { src: "/googleads.svg", alt: "Google Ads",r: "160px", start: "300deg", dur: "18s" },
];

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f6]/90 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm font-black text-black">Naman Singh</span>
        <div className="flex items-center gap-6">
          <a href="#about" className="text-xs text-black/40 hover:text-black transition-colors hidden md:block">About</a>
          <a href="#work" className="text-xs text-black/40 hover:text-black transition-colors hidden md:block">Work</a>
          <a href="#contact" className="text-xs text-black/40 hover:text-black transition-colors hidden md:block">Contact</a>
          <a href="mailto:Namanworks7@gmail.com" className="text-xs bg-black text-white px-4 py-2 rounded-full hover:bg-black/75 transition-all">Hire Me</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen bg-[#faf9f6] pt-14 flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full py-16">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_320px_1fr] md:gap-10 items-center gap-12">

          {/* LEFT */}
          <motion.div variants={FADE} initial="hidden" animate="show" transition={TRANS}
            className="flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-black/5 rounded-full px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[10px] text-black/45 uppercase tracking-widest">Available for work</span>
            </div>
            <h1 className="font-black text-black tracking-tighter leading-[0.88] mb-5" style={{ fontSize:"clamp(3rem,7vw,5.5rem)" }}>
              NAMAN<br />SINGH
            </h1>
            <p className="text-base font-semibold text-black/50 mb-1">Performance Marketer</p>
            <p className="text-sm text-black/30 mb-6">Growth Strategist · 7+ Years</p>
            <p className="text-sm text-black/35 leading-relaxed mb-8 max-w-xs">
              Building brands through scalable digital systems — Google Ads, Meta, SEO, AI marketing &amp; high-ROI campaigns.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#work" className="bg-black text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-black/80 transition-all inline-flex items-center gap-1.5">
                View Work <ArrowUpRight size={11} />
              </a>
              <a href="/naman-resume.pdf" target="_blank" className="border border-black/12 text-black/40 text-xs px-5 py-2.5 rounded-full hover:border-black/25 hover:text-black transition-all inline-flex items-center gap-1.5">
                <Download size={11} /> Resume
              </a>
            </div>
          </motion.div>

          {/* CENTER */}
          <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }}
            transition={{ delay:0.2, duration:1, ease:[0.16,1,0.3,1] }}
            className="order-1 md:order-2 flex-shrink-0 mx-auto">
            <div className="relative" style={{ width:300, height:420 }}>
              <div className="absolute rounded-full border border-dashed border-black/8 pointer-events-none"
                style={{ inset:"-60px", borderRadius:"50%" }} />
              {platforms.map((p,i) => (
                <div key={i} className="orbit-icon"
                  style={{ "--r":p.r, "--start":p.start, "--dur":p.dur, "--delay":"0s", top:"50%", left:"50%" } as React.CSSProperties}>
                  <div className="w-10 h-10 rounded-full bg-white shadow-lg border border-black/5 flex items-center justify-center p-2.5">
                    <img src={p.src} alt={p.alt} className="w-full h-full object-contain" />
                  </div>
                </div>
              ))}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.13)]">
                <Image src="/naman-cutout.png" alt="Naman Singh" fill className="object-cover object-top" priority />
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={FADE} initial="hidden" animate="show" transition={{ delay:0.3 }}
            className="flex flex-col items-center md:items-start gap-2.5 order-3">
            <p className="text-[10px] text-black/25 uppercase tracking-widest mb-2">Platforms</p>
            {["Google Ads","Meta Ads","SEO & GEO","LinkedIn Ads","GA4","AI Marketing","Govt of India","B2B Global"].map(tag => (
              <span key={tag} className="text-xs text-black/45 border border-black/8 rounded-full px-4 py-1.5 bg-white/60 w-fit">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ delay:0.6 }}
          className="mt-16 pt-8 border-t border-black/6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{n:"7+",l:"Years"},{n:"50+",l:"Clients"},{n:"200+",l:"Campaigns"},{n:"2-3M",l:"Reached"}].map(m => (
            <div key={m.l}>
              <div className="text-3xl md:text-4xl font-black text-black">{m.n}</div>
              <div className="text-[10px] text-black/28 uppercase tracking-widest mt-1">{m.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity:1 }} animate={{ opacity:1 }}>
          <span className="text-[10px] text-black/25 uppercase tracking-[0.3em]">About</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-3 mb-6 leading-tight tracking-tighter">
            I build growth<br />systems that scale.
          </h2>
          <p className="text-base text-black/45 leading-relaxed mb-4">
            7 years solving hard growth problems across startups, global B2B brands, government projects, healthcare, real estate, and e-commerce.
          </p>
          <p className="text-sm text-black/30 leading-relaxed mb-5">
            Strong focus on ROI, AI-driven marketing, and Generative Engine Optimization (GEO).
          </p>
          <div className="flex items-center gap-2">
            <MapPin size={11} className="text-black/25" />
            <span className="text-xs text-black/30">Bangalore, India</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity:1 }} animate={{ opacity:1 }} transition={{ delay:0.15 }}>
          <div className="grid grid-cols-2 gap-3">
            {[{n:"8.4×",l:"Best ROAS"},{n:"14",l:"Countries"},{n:"42%",l:"CAC Reduction"},{n:"200+",l:"Campaigns"}].map(m => (
              <div key={m.l} className="border border-black/6 rounded-2xl p-6 bg-[#faf9f6]">
                <div className="text-3xl font-black text-black mb-1">{m.n}</div>
                <div className="text-xs text-black/30">{m.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Work() {
  const jobs = [
    { co:"Social Musketeers", role:"Head of Marketing", period:"2022–Present", tags:["Govt of India","SaaS","B2B","Healthcare"], desc:"Led full-funnel marketing for global B2B clients and Government of India campaigns. Reached 2–3M people." },
    { co:"Vinra Group", role:"Digital Marketing Manager", period:"2020–2022", tags:["Google Ads","Meta","SEO","CRO"], desc:"Managed paid campaigns, built conversion funnels, drove organic growth." },
    { co:"Comm8 Digital", role:"Marketing Executive", period:"2019–2020", tags:["Lead Gen","Social","PPC"], desc:"Lead generation across Facebook, Instagram & LinkedIn." },
  ];
  return (
    <section id="work" className="py-24 px-6 bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity:1 }} animate={{ opacity:1 }} className="mb-12">
          <span className="text-[10px] text-black/25 uppercase tracking-[0.3em]">Experience</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-3 leading-tight tracking-tighter">7 years. No fluff.</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {jobs.map((j,i) => (
            <motion.div key={j.co} initial={{ opacity:1 }} animate={{ opacity:1 }} transition={{ delay:i*0.1 }}
              className="bg-white border border-black/6 rounded-2xl p-7 hover:shadow-md transition-all">
              <div className="font-black text-black text-base mb-0.5">{j.co}</div>
              <div className="text-xs text-black/35 mb-4">{j.role} · {j.period}</div>
              <p className="text-sm text-black/35 leading-relaxed mb-5">{j.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {j.tags.map(t => <span key={t} className="text-[9px] text-black/30 border border-black/8 px-2.5 py-1 rounded-full">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity:1 }} animate={{ opacity:1 }}
          className="bg-black text-white rounded-2xl p-8 md:p-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="text-[9px] text-white/30 uppercase tracking-widest mb-2">Featured Project</div>
            <h3 className="text-xl font-black mb-2">Government LPG Campaign — Tier 2 India</h3>
            <p className="text-sm text-white/40 leading-relaxed">Regional mobile-first campaign. Reached 2–3 million people nationwide.</p>
          </div>
          <div className="text-right">
            <div className="text-7xl font-black text-white/10 leading-none">2-3M</div>
            <div className="text-sm text-white/25">people reached</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Campaigns() {
  const shots = [
    { src:"/ss1.jpg", label:"Google Ads Campaign" },
    { src:"/ss2.jpg", label:"Meta Ads Results" },
    { src:"/ss3.jpg", label:"Analytics Report" },
    { src:"/ss4.jpg", label:"Campaign Dashboard" },
    { src:"/ss5.jpg", label:"Performance Report" },
  ];
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity:1 }} animate={{ opacity:1 }} className="mb-12">
          <span className="text-[10px] text-black/25 uppercase tracking-[0.3em]">Proof of Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-3 leading-tight tracking-tighter">Real campaigns.<br />Real numbers.</h2>
          <p className="text-sm text-black/30 mt-2">Live dashboards. Not mockups.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {shots.map((s,i) => (
            <motion.div key={i} initial={{ opacity:1 }} animate={{ opacity:1 }} transition={{ delay:i*0.08 }}
              whileHover={{ y:-4 }}
              className="group relative rounded-2xl overflow-hidden border border-black/5 aspect-video cursor-pointer shadow-sm">
              <Image src={s.src} alt={s.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-white font-semibold">{s.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity:1 }} animate={{ opacity:1 }}>
          <span className="text-[10px] text-black/25 uppercase tracking-[0.3em]">Contact</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-3 leading-tight tracking-tighter">
            Let&apos;s build<br />something<br />that scales.
          </h2>
          <p className="text-sm text-black/35 mt-5 leading-relaxed max-w-sm">
            B2B, startup, or government project — reach out and let&apos;s talk growth.
          </p>
        </motion.div>
        <motion.div initial={{ opacity:1 }} animate={{ opacity:1 }} transition={{ delay:0.15 }} className="space-y-3">
          <motion.a href="mailto:Namanworks7@gmail.com" whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }}
            className="flex items-center gap-4 p-5 bg-black text-white rounded-2xl group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0"><Mail size={14} className="text-white" /></div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] text-white/35 uppercase tracking-widest mb-0.5">Email</div>
              <div className="text-sm font-semibold text-white truncate">Namanworks7@gmail.com</div>
            </div>
            <ArrowUpRight size={14} className="text-white/30 flex-shrink-0" />
          </motion.a>
          <motion.a href="tel:+919695624105" whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }}
            className="flex items-center gap-4 p-5 bg-white border border-black/8 rounded-2xl group hover:border-black/20 transition-all">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0"><Phone size={14} className="text-black/40" /></div>
            <div className="flex-1">
              <div className="text-[9px] text-black/22 uppercase tracking-widest mb-0.5">Phone</div>
              <div className="text-sm font-semibold text-black">+91 96956 24105</div>
            </div>
            <ArrowUpRight size={14} className="text-black/15 group-hover:text-black/35 transition-colors flex-shrink-0" />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/naman-singh-b87b2920a/" target="_blank" rel="noopener" whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }}
            className="flex items-center gap-4 p-5 bg-white border border-black/8 rounded-2xl group hover:border-black/20 transition-all">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0"><img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" /></div>
            <div className="flex-1">
              <div className="text-[9px] text-black/22 uppercase tracking-widest mb-0.5">LinkedIn</div>
              <div className="text-sm font-semibold text-black">linkedin.com/in/naman-singh</div>
            </div>
            <ArrowUpRight size={14} className="text-black/15 group-hover:text-black/35 transition-colors flex-shrink-0" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-[10px] text-white/20 uppercase tracking-[0.4em] mb-3">Performance Marketer · Bangalore</div>
        <h2 className="font-black text-white tracking-tighter leading-none mb-6" style={{ fontSize:"clamp(3rem,8vw,7rem)" }}>NAMAN SINGH</h2>
        <div className="flex justify-center gap-6 text-xs text-white/25 flex-wrap">
          <a href="mailto:Namanworks7@gmail.com" className="hover:text-white transition-colors">Namanworks7@gmail.com</a>
          <span className="text-white/10">·</span>
          <a href="tel:+919695624105" className="hover:text-white transition-colors">+91 96956 24105</a>
          <span className="text-white/10">·</span>
          <a href="https://www.linkedin.com/in/naman-singh-b87b2920a/" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
        <div className="mt-10 text-[10px] text-white/10">© 2026</div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Campaigns />
      <Contact />
      <Footer />
    </main>
  );
}
