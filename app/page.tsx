"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, ArrowUpRight, TrendingUp, MapPin, Download, Brain, Globe2, BarChart3, Target, Zap } from "lucide-react";

const tickerItems = [
  "Performance Marketing","·","Google Ads","·","B2B Global","·","SEO & GEO","·",
  "Meta Ads","·","Lead Generation","·","CRO","·","GA4","·","App Campaigns","·",
  "Govt of India Projects","·","LinkedIn Ads","·","AI Marketing","·",
  "Performance Marketing","·","Google Ads","·","B2B Global","·","SEO & GEO","·",
  "Meta Ads","·","Lead Generation","·","CRO","·","GA4","·","App Campaigns","·",
  "Govt of India Projects","·","LinkedIn Ads","·","AI Marketing","·",
];
const stats = [
  { n: "7+", l: "Years" },{ n: "50+", l: "Clients" },{ n: "3×", l: "Avg ROI" },
  { n: "2-3M", l: "Reached" },{ n: "14", l: "Countries" },{ n: "200+", l: "Campaigns" },
];
const chartBars = [22,32,26,48,42,60,55,72,68,85,100];
const screenshots = [
  { src: "/ss1.jpg", label: "Google Ads",  rot: -4, fi: 0, left: "1%",  top: "5%"  },
  { src: "/ss2.jpg", label: "Meta Ads",    rot:  3, fi: 1, left: "21%", top: "38%" },
  { src: "/ss3.jpg", label: "Analytics",   rot: -2, fi: 0, left: "41%", top: "2%"  },
  { src: "/ss4.jpg", label: "Campaign",    rot:  4, fi: 1, left: "60%", top: "30%" },
  { src: "/ss5.jpg", label: "Report",      rot: -3, fi: 0, left: "78%", top: "10%" },
];
const jobs = [
  { co: "Social Musketeers", role: "Head of Marketing",         period: "Feb 2022 – Present",  tags: ["Govt of India","SaaS","B2B Global","Healthcare","Real Estate"] },
  { co: "Vinra Group",       role: "Digital Marketing Manager", period: "Jun 2020 – Jan 2022", tags: ["Google Ads","SEO","Meta","CRO"] },
  { co: "Comm8 Digital",     role: "Marketing Executive",       period: "Feb 2019 – May 2020", tags: ["Lead Gen","Social","PPC"] },
];
const skills = [
  { icon: BarChart3,  label: "Performance Marketing" },
  { icon: Globe2,     label: "SEO & GEO" },
  { icon: Target,     label: "CRO & Lead Gen" },
  { icon: TrendingUp, label: "Growth Strategy" },
  { icon: Brain,      label: "AI-driven Marketing" },
  { icon: Zap,        label: "Marketing Automation" },
];
const memes = [
  { emoji: "☕", top: "Client: Cut CAC by 50%", punch: "Me: opens 17 tabs, survives on coffee" },
  { emoji: "📈", top: "POV: ROAS spikes at 2 AM", punch: "Scaling campaigns in pyjamas" },
  { emoji: "💸", top: "Google Ads at 11 PM:", punch: "\"Limited by budget\"" },
  { emoji: "🌱", top: "SEO after 4 months of grinding:", punch: "Ranking. Finally." },
];

function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 30 });
  const sy = useSpring(y, { stiffness: 600, damping: 30 });
  useEffect(() => {
    const fn = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, [x, y]);
  return (
    <motion.div
      style={{ left: sx, top: sy, translateX: "-50%", translateY: "-50%" }}
      className="fixed w-5 h-5 rounded-full border border-black/20 pointer-events-none z-[9999] mix-blend-multiply"
    />
  );
}

function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${solid ? "bg-[#f8f7f4]/92 backdrop-blur-xl border-b border-black/5" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xs font-black tracking-[0.3em] text-black/30 uppercase">NS</span>
        <div className="flex items-center gap-6">
          {["About","Work","Proof","Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs text-black/25 hover:text-black transition-colors uppercase tracking-widest">{item}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse" />
          <span className="text-xs text-black/25">Available</span>
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const textOp = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div style={{ scale: photoScale }} className="absolute right-0 top-0 bottom-0 w-[52%] origin-center">
        <Image src="/naman-photo.jpg" alt="" fill className="object-cover object-top opacity-90" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f7f4] via-[#f8f7f4]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8f7f4] via-transparent to-transparent" />
      </motion.div>
      <motion.div style={{ y: textY, opacity: textOp }} className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-black/18" />
            <span className="text-xs text-black/35 uppercase tracking-[0.2em]">Head of Marketing · Bangalore</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-black leading-[0.88] tracking-tighter text-black mb-6"
            style={{ fontSize: "clamp(3.5rem,11vw,8rem)" }}
          >
            Naman<br />Singh
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="text-sm md:text-base text-black/45 max-w-sm leading-relaxed mb-3 font-medium">
            Growth Marketer scaling brands through performance marketing, SEO, GEO and AI-driven growth.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-sm text-black/30 max-w-sm leading-relaxed mb-8 font-light italic">
            &ldquo;Calm mind. Sharp strategy. The best growth comes when you stop chasing and start thinking.&rdquo;
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.72 }} className="flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-black/80 transition-all">
              View Work <ArrowUpRight size={11} />
            </a>
            <a href="/naman-resume.pdf" target="_blank" className="inline-flex items-center gap-2 border border-black/12 text-black/55 text-xs px-5 py-2.5 rounded-full hover:border-black/28 hover:text-black transition-all">
              <Download size={11} /> Download Resume
            </a>
            <a href="mailto:Namanworks7@gmail.com" className="group inline-flex items-center gap-2 border border-black/12 text-black/55 text-xs px-5 py-2.5 rounded-full hover:border-black/28 hover:text-black transition-all">
              <Mail size={11} /> Let&apos;s Build Growth
            </a>
          </motion.div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div animate={{ scaleY: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-transparent via-black/25 to-transparent" />
      </motion.div>
    </section>
  );
}

function Ticker() {
  return (
    <div className="py-4 border-y border-black/6 overflow-hidden">
      <div className="flex ticker-track whitespace-nowrap">
        {tickerItems.map((t, i) => (
          <span key={i} className="text-[10px] text-black/22 uppercase tracking-widest mx-4">{t}</span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="relative py-20 overflow-hidden border-b border-black/5">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[22vw] font-black text-black/[0.022] tracking-tighter select-none leading-none">GROWTH</span>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-black/5">
          {stats.map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="bg-[#f8f7f4] py-10 px-4 text-center group hover:bg-black/[0.02] transition-colors cursor-default">
              <div className="text-3xl md:text-4xl font-black text-black mb-1.5 group-hover:scale-110 transition-transform duration-300 origin-bottom">{s.n}</div>
              <div className="text-[9px] text-black/28 uppercase tracking-widest">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 border-b border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs text-black/22 uppercase tracking-[0.2em]">About</span>
            <h2 className="text-4xl md:text-5xl font-black text-black mt-2 mb-6 leading-none tracking-tight">
              Who I am.<br /><span className="text-black/22">What I do.</span>
            </h2>
            <p className="text-sm text-black/50 leading-relaxed mb-4">
              I&apos;m Naman Singh — a growth marketer who enjoys solving growth challenges and building marketing systems that create real business impact.
            </p>
            <p className="text-sm text-black/38 leading-relaxed mb-4">
              Over the last 7 years I&apos;ve worked in fast-paced agency environments managing campaigns for startups, global clients, government projects, healthcare brands, real estate companies, and B2B businesses.
            </p>
            <p className="text-sm text-black/30 leading-relaxed">
              I&apos;ve handled everything from strategy and execution to optimization, reporting, and scaling — with a strong focus on ROI at every step.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="grid grid-cols-2 gap-px bg-black/5">
              {skills.map((sk, i) => (
                <motion.div key={sk.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="bg-[#f8f7f4] p-5 group hover:bg-black/[0.025] transition-colors">
                  <sk.icon size={16} className="text-black/25 mb-3 group-hover:text-black/50 transition-colors" />
                  <div className="text-xs font-semibold text-black/55">{sk.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Screenshots() {
  return (
    <section id="proof" className="py-24 px-6 border-b border-black/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="text-xs text-black/22 uppercase tracking-[0.2em]">Proof of Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-2 leading-none tracking-tight">
            Real campaigns,<br /><span className="text-black/22">real results.</span>
          </h2>
        </motion.div>
        <div className="relative h-[360px]">
          {screenshots.map((ss, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.08, rotate: 0, zIndex: 20 }}
              className={`${ss.fi === 0 ? "float-a" : "float-b"} absolute group cursor-pointer`}
              style={{ "--rot": `${ss.rot}deg`, left: ss.left, top: ss.top, zIndex: i + 1 } as React.CSSProperties}
            >
              <motion.div animate={{ rotate: ss.rot }} className="w-40 md:w-48 rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.10)] border border-black/6 bg-white">
                <Image src={ss.src} alt={ss.label} width={192} height={120} className="w-full h-28 object-cover object-top grayscale-[15%] group-hover:grayscale-0 transition-all duration-500" />
                <div className="px-3 py-2"><span className="text-[9px] text-black/35 uppercase tracking-widest">{ss.label}</span></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChartBars() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const bars = el.querySelectorAll<HTMLElement>(".bar");
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        bars.forEach((b, i) => setTimeout(() => b.classList.add("visible"), i * 55));
        obs.disconnect();
      }
    }, { threshold: 0.35 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref}>
      <div className="flex items-end gap-1.5 h-24 border-b border-black/8">
        {chartBars.map((h, i) => (
          <div key={i} className={`bar flex-1 rounded-t-sm ${i === chartBars.length - 1 ? "bg-black" : "bg-black/14 hover:bg-black/28 transition-colors"}`}
            style={{ height: `${h}%`, animationDelay: `${i * 55}ms` }} />
        ))}
      </div>
      <div className="flex items-center gap-1.5 mt-2">
        <TrendingUp size={10} className="text-black/18" />
        <span className="text-[9px] text-black/18 uppercase tracking-widest">Campaign ROI growth — last bar is now</span>
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="py-24 px-6 border-b border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-16 items-end">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs text-black/22 uppercase tracking-[0.2em]">Experience</span>
            <h2 className="text-4xl md:text-5xl font-black text-black mt-2 leading-none tracking-tight">
              7 years.<br /><span className="text-black/22">No fluff.</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <ChartBars />
          </motion.div>
        </div>
        <div className="space-y-px bg-black/5">
          {jobs.map((j, i) => (
            <motion.div key={j.co} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-[#f8f7f4] px-7 py-6 flex flex-col md:flex-row md:items-center gap-4 hover:bg-black/[0.018] transition-colors group">
              <div className="flex-1">
                <div className="text-sm font-black text-black mb-0.5">{j.co}</div>
                <div className="text-xs text-black/32">{j.role} <span className="text-black/18">· {j.period}</span></div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {j.tags.map(t => (
                  <span key={t} className="text-[9px] text-black/28 border border-black/8 px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <ArrowUpRight size={14} className="text-black/8 group-hover:text-black/30 transition-colors hidden md:block flex-shrink-0" />
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-4">
          <div className="bg-black text-white px-7 py-6 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <div className="text-[9px] text-white/40 uppercase tracking-widest mb-1">Featured Project</div>
              <div className="text-sm font-black mb-0.5">Government LPG Campaign — Tier 2 India</div>
              <div className="text-xs text-white/50">Reached 2–3 million people through regional mobile-friendly campaigns</div>
            </div>
            <div className="text-3xl font-black text-white/20">2-3M</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Memes() {
  return (
    <section className="py-24 px-6 border-b border-black/5 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[18vw] font-black text-black/[0.018] tracking-tighter select-none leading-none">MEMES</span>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <span className="text-xs text-black/22 uppercase tracking-[0.2em]">Because why not</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-2 leading-none tracking-tight">
            Marketer brain.<br /><span className="text-black/22">Never off.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/5">
          {memes.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.02)" }}
              className="bg-[#f8f7f4] p-6 cursor-default transition-all duration-300">
              <div className="text-4xl mb-4 float-a">{m.emoji}</div>
              <p className="text-xs text-black/40 leading-relaxed mb-3">{m.top}</p>
              <div className="inline-block border border-black/8 rounded-full px-3 py-1 text-[10px] text-black/50 bg-white/60">{m.punch}</div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-[9px] text-black/15 mt-6 italic">* No client KPIs were harmed in the making of these memes.</p>
      </div>
    </section>
  );
}

function AISection() {
  return (
    <section className="py-20 px-6 border-b border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs text-black/22 uppercase tracking-[0.2em]">AI & Future</span>
            <h2 className="text-3xl md:text-4xl font-black text-black mt-2 mb-5 leading-none tracking-tight">
              Marketing is<br /><span className="text-black/22">changing fast.</span>
            </h2>
            <p className="text-sm text-black/42 leading-relaxed mb-3">
              I believe AI will completely change how marketing works over the next few years.
            </p>
            <p className="text-sm text-black/30 leading-relaxed">
              Deeply interested in AI workflows, Generative Engine Optimization (GEO), automation systems, and product-led growth.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="grid grid-cols-2 gap-3">
            {["GEO","AI Workflows","Automation","Product-led Growth","Predictive Analytics","AI Copywriting"].map((t, i) => (
              <motion.div key={t} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="border border-black/8 rounded-xl px-4 py-3 text-xs text-black/40 bg-white/40 hover:bg-white hover:text-black/60 transition-all">
                {t}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-end">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs text-black/22 uppercase tracking-[0.2em]">Let&apos;s talk</span>
            <h2 className="text-5xl md:text-7xl font-black text-black mt-2 leading-none tracking-tighter">Hit<br />me up.</h2>
            <p className="text-black/32 text-sm mt-5 max-w-xs leading-relaxed">
              B2B, startup, or government project — if you need growth, you need me.<br />
              <span className="text-black/20">If not... still reach out 😄</span>
            </p>
            <div className="flex items-center gap-2 mt-4">
              <MapPin size={10} className="text-black/22" />
              <span className="text-xs text-black/22">Bangalore, India</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="space-y-3">
            <motion.a href="mailto:Namanworks7@gmail.com" whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }}
              className="group flex items-center gap-4 p-5 border border-black/8 hover:border-black/18 bg-white/50 hover:bg-white transition-all rounded-2xl">
              <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                <Mail size={13} className="text-white" />
              </div>
              <div>
                <div className="text-[9px] text-black/22 uppercase tracking-widest mb-0.5">Email</div>
                <div className="text-sm font-semibold text-black">Namanworks7@gmail.com</div>
              </div>
              <ArrowUpRight size={13} className="ml-auto text-black/12 group-hover:text-black/35 transition-colors" />
            </motion.a>
            <motion.a href="tel:+919695624105" whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }}
              className="group flex items-center gap-4 p-5 border border-black/8 hover:border-black/18 bg-white/50 hover:bg-white transition-all rounded-2xl">
              <div className="w-9 h-9 rounded-full bg-black/6 flex items-center justify-center flex-shrink-0">
                <Phone size={13} className="text-black/45" />
              </div>
              <div>
                <div className="text-[9px] text-black/22 uppercase tracking-widest mb-0.5">Phone</div>
                <div className="text-sm font-semibold text-black">+91 96956 24105</div>
              </div>
              <ArrowUpRight size={13} className="ml-auto text-black/12 group-hover:text-black/35 transition-colors" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 py-6 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="text-xs text-black/14 font-semibold tracking-widest uppercase">Naman Singh</span>
        <span className="text-[10px] text-black/10">© 2026</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="bg-[#f8f7f4] min-h-screen grain">
      <Cursor />
      <Nav />
      <Hero />
      <Ticker />
      <Stats />
      <About />
      <Screenshots />
      <Work />
      <Memes />
      <AISection />
      <Contact />
      <Footer />
    </main>
  );
}
