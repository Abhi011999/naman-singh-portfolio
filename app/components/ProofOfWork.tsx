"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const screenshots = [
  { src: "/ss1.jpg", label: "Google Ads Dashboard", rotate: "-2deg", delay: 0 },
  { src: "/ss2.jpg", label: "Meta Ads Manager", rotate: "1.5deg", delay: 0.1 },
  { src: "/ss3.jpg", label: "Analytics Overview", rotate: "-1deg", delay: 0.2 },
  { src: "/ss4.jpg", label: "Campaign Performance", rotate: "2deg", delay: 0.3 },
  { src: "/ss5.jpg", label: "Growth Report", rotate: "-1.5deg", delay: 0.4 },
];

const bars = [
  { label: "Performance Marketing", pct: 95 },
  { label: "SEO & GEO", pct: 90 },
  { label: "Paid Social (Meta/LinkedIn)", pct: 88 },
  { label: "B2B Lead Generation", pct: 85 },
  { label: "Marketing Automation", pct: 80 },
  { label: "Analytics & Reporting", pct: 92 },
];

function AnimatedBar({ label, pct, delay }: { label: string; pct: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs text-white/40 group-hover:text-white/70 transition-colors">{label}</span>
        <span className="text-xs text-white/20 font-mono">{pct}%</span>
      </div>
      <div className="h-px bg-white/5 w-full relative overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.9, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="absolute inset-0 bg-white/30 h-full"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: pct / 100 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.25, duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="absolute inset-0 bg-white h-full"
        />
      </div>
    </motion.div>
  );
}

export default function ProofOfWork() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const x2 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} className="py-24 px-6 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-xs text-white/20 uppercase tracking-widest">Proof of Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
            Real campaigns,<br />
            <span className="text-white/30">real results</span>
          </h2>
        </motion.div>

        {/* Screenshots — staggered floating row */}
        <div className="relative mb-24">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          <motion.div style={{ x: x1 }} className="flex gap-6 pb-4">
            {screenshots.slice(0, 3).map((ss, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ss.delay, duration: 0.7 }}
                whileHover={{ scale: 1.03, zIndex: 20 }}
                style={{ rotate: ss.rotate }}
                className="relative flex-shrink-0 w-72 md:w-80 group cursor-default"
              >
                {/* Dark overlay — screenshots are subtle, not loud */}
                <div className="relative rounded-lg overflow-hidden border border-white/5 shadow-2xl">
                  <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/20 transition-all duration-500" />
                  <Image
                    src={ss.src}
                    alt={ss.label}
                    width={320}
                    height={200}
                    className="w-full h-48 object-cover object-top"
                  />
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-xs text-white/40 group-hover:text-white/70 transition-colors">{ss.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second row offset */}
          <motion.div style={{ x: x2 }} className="flex gap-6 mt-4 pl-20">
            {screenshots.slice(3).map((ss, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ss.delay + 0.1, duration: 0.7 }}
                whileHover={{ scale: 1.03, zIndex: 20 }}
                style={{ rotate: ss.rotate }}
                className="relative flex-shrink-0 w-72 md:w-80 group cursor-default"
              >
                <div className="relative rounded-lg overflow-hidden border border-white/5 shadow-2xl">
                  <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/20 transition-all duration-500" />
                  <Image
                    src={ss.src}
                    alt={ss.label}
                    width={320}
                    height={200}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-xs text-white/40 group-hover:text-white/70 transition-colors">{ss.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
          {bars.map((b, i) => (
            <AnimatedBar key={b.label} label={b.label} pct={b.pct} delay={i * 0.07} />
          ))}
        </div>

      </div>
    </section>
  );
}
