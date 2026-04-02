"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export default function AboutPage() {
  const { dict, lang } = useTranslation();
  const t = dict.about;

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="flex flex-col w-full bg-[#030303] selection:bg-primary selection:text-black">
      <section className="min-h-screen flex items-center pt-24 pb-20 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10 translate-x-1/2"></div>
        <div className="container mx-auto px-8 md:px-12 max-w-[1200px]">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.h3 variants={fadeInUp} className="text-[10px] md:text-xs font-sans tracking-[0.4em] uppercase text-primary/80 mb-8 md:mb-12">
              {t.hero.label}
            </motion.h3>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-serif font-light text-white mb-12 leading-[1.1]">
              {t.hero.title} <br/>
              <span className="italic text-white/50">{t.hero.titleAccent}</span>
            </motion.h1>
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
              <div className="text-lg md:text-xl font-light text-white/60 leading-relaxed">
                <p className="mb-6">{t.hero.p1}</p>
                <p>{t.hero.p2}</p>
              </div>
              <div className="text-lg md:text-xl font-light text-white/40 leading-relaxed">
                <p className="mb-6">{t.hero.p3}</p>
                <p>{t.hero.p4}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 hairline-t relative">
        <div className="container mx-auto px-8 md:px-12 max-w-[1200px]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="w-full h-[50vh] md:h-[70vh] bg-white/[0.02] border border-white/5 relative flex items-center justify-center overflow-hidden mb-24 group">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/00/Meknes_Grand_Mosque_courtyard.jpg" alt="Meknes Grand Mosque Architecture" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-black/40 to-[#030303] opacity-90 z-10"></div>
            <div className="absolute inset-0 z-10 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <p className="absolute bottom-8 left-8 rtl:left-auto rtl:right-8 z-20 text-[10px] font-sans tracking-[0.2em] uppercase text-white/40">
              {t.image.label}
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="flex flex-col md:flex-row justify-between gap-16 md:gap-24">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-serif font-light text-white leading-snug md:w-1/2">
              {t.image.quote}
            </motion.h2>
            <motion.div variants={fadeInUp} className="md:w-1/2">
              <p className="text-lg font-light text-white/50 leading-relaxed mb-12">{t.image.quoteBody}</p>
              <Link href={`/${lang}/programmes`} className="group inline-flex items-center gap-4 text-xs font-sans tracking-[0.2em] uppercase text-primary transition-colors duration-500">
                <span className="border-b border-primary/30 pb-1 group-hover:border-primary transition-colors duration-500">{t.image.cta}</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform duration-500 rtl:rotate-180 rtl:group-hover:-translate-x-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 md:py-48 bg-[#050505] hairline-t">
        <div className="container mx-auto px-8 md:px-12 max-w-[1200px] text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-2xl mx-auto">
            <motion.h3 variants={fadeInUp} className="text-[10px] font-sans tracking-[0.3em] uppercase text-white/30 mb-8">{t.director.label}</motion.h3>
            <motion.div variants={fadeInUp} className="relative w-40 h-40 md:w-52 md:h-52 mx-auto mb-10 group">
              <div className="absolute inset-0 rounded-full border border-primary/40 group-hover:border-primary transition-colors duration-700"></div>
              <div className="absolute -inset-2 rounded-full bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img src="/hamza-essaadaoui.jpg" alt={`${t.director.name} — ${t.director.title}`}
                className="w-full h-full object-cover object-top rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-[0.92]" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-light text-white mb-4">{t.director.name}</motion.h2>
            <motion.p variants={fadeInUp} className="text-sm font-sans tracking-[0.2em] uppercase text-primary/80 mb-16">{t.director.title}</motion.p>
            <motion.div variants={fadeInUp} className="flex justify-center">
              <Link href={`/${lang}/contact`} className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden border border-white/20 hover:border-white text-xs font-sans tracking-[0.2em] uppercase text-white transition-colors duration-500 rounded-none w-full sm:w-auto">
                <span className="relative z-10">{t.director.cta}</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0 mix-blend-difference"></div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
