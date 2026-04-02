"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export default function ProgrammesPage() {
  const { dict, lang } = useTranslation();
  const t = dict.programmesPage;
  const packs = dict.packs;

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="flex flex-col w-full bg-[#030303] selection:bg-primary selection:text-black">
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-10 md:w-16 h-px bg-primary/60"></div>
              <h3 className="text-[9px] md:text-xs font-sans tracking-[0.3em] md:tracking-[0.4em] uppercase text-primary/80">{t.hero.label}</h3>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl lg:text-8xl font-serif font-light text-white mb-6 md:mb-10 leading-[1.1]">
              {t.hero.title} <br/> <span className="italic text-white/50">{t.hero.titleAccent}</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base md:text-xl font-light text-white/50 max-w-2xl leading-relaxed">{t.hero.desc}</motion.p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
          <div className="flex flex-col">
            {packs.map((pack, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }} className="border-t border-white/10 group">
                <div className="py-12 md:py-20">
                  <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-primary/60 group-hover:text-primary transition-colors duration-500 mb-4 md:mb-6 block">
                    {t.programmeLabel} 0{index + 1}
                  </span>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-16 mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-light text-white leading-[1.15] lg:max-w-[50%]">{pack.title}</h2>
                    <p className="text-base md:text-lg font-light text-white/50 italic leading-relaxed lg:max-w-[45%]">&quot;{pack.shortDesc}&quot;</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
                    <div className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5">
                      <Clock size={16} className="text-primary/60 mt-0.5 shrink-0" strokeWidth={1.5} />
                      <div>
                        <h4 className="text-[9px] md:text-[10px] font-sans tracking-[0.2em] uppercase text-white/30 mb-1">{t.realisation}</h4>
                        <p className="text-sm font-light text-white/80">{pack.deadline}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5">
                      <Shield size={16} className="text-primary/60 mt-0.5 shrink-0" strokeWidth={1.5} />
                      <div>
                        <h4 className="text-[9px] md:text-[10px] font-sans tracking-[0.2em] uppercase text-white/30 mb-1">{t.maintenance}</h4>
                        <p className="text-sm font-light text-white/80">{pack.maintenance}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-8 md:mb-12">
                    <h4 className="text-[9px] md:text-[10px] font-sans tracking-[0.2em] uppercase text-white/30 mb-5 md:mb-6">{t.included}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {pack.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm md:text-base font-light text-white/60 group-hover:text-white/80 transition-colors duration-500">
                          <CheckCircle2 className="text-primary/50 mt-0.5 shrink-0" strokeWidth={1.5} size={16} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link href={`/${lang}/contact`} className="group/btn relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 overflow-hidden bg-white/[0.03] border border-white/10 hover:border-primary/50 text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-white/80 hover:text-primary transition-all duration-500 w-full sm:w-auto">
                    <span className="relative z-10 flex items-center gap-3">
                      {t.requestPack}
                      <ArrowRight size={14} className="transform group-hover/btn:translate-x-2 transition-transform duration-500 rtl:rotate-180 rtl:group-hover/btn:-translate-x-2" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-white/10"></div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-[#050505] text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-primary/5 blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 max-w-3xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-white mb-6 md:mb-8">{t.footer.title}</h2>
            <p className="text-base md:text-lg font-light text-white/50 mb-10 md:mb-12 leading-relaxed">{t.footer.desc}</p>
            <Link href={`/${lang}/diagnostic`} className="group relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 overflow-hidden bg-primary text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-black font-medium transition-all duration-500 w-full sm:w-auto">
              <span className="relative z-10 flex items-center gap-3">
                {t.footer.cta}
                <ArrowRight size={14} className="rtl:rotate-180" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
