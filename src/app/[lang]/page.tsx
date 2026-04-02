"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export default function Home() {
  const { dict, lang } = useTranslation();
  const t = dict.home;
  const packs = dict.packs;

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="flex flex-col w-full bg-background selection:bg-primary selection:text-black">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img 
          src="/meknes-bg.png" 
          alt="" 
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/85 to-[#030303]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80"></div>
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <motion.div 
          initial={{ scaleY: 0 }} 
          animate={{ scaleY: 1 }} 
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent origin-top hidden lg:block"
        ></motion.div>
        <motion.div 
          initial={{ scaleX: 0 }} 
          animate={{ scaleX: 1 }} 
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent origin-left hidden lg:block"
        ></motion.div>

        <div className="container mx-auto px-6 md:px-12 max-w-[1200px] relative z-10 pt-28 pb-20 md:pt-32 md:pb-24 lg:py-0">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8 md:mb-14">
                <div className="w-8 md:w-12 h-px bg-primary/60"></div>
                <h2 className="text-[9px] md:text-xs font-sans tracking-[0.3em] md:tracking-[0.4em] uppercase text-primary/80">
                  {t.hero.subtitle}
                </h2>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-6xl md:text-[110px] lg:text-[130px] leading-[0.9] font-serif font-light text-white tracking-wider mb-4 md:mb-8">
                ZEG
                <span className="block text-xl md:text-4xl font-serif italic text-white/40 tracking-normal mt-1 md:mt-4">
                  Groupe
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-base md:text-xl font-light text-white/60 max-w-md leading-relaxed mb-8 md:mb-12 border-l-2 border-primary/30 pl-5 md:pl-6 text-left rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-5 md:rtl:pr-6 rtl:text-right">
                {t.hero.tagline}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-stretch gap-4 w-full sm:w-auto">
                <Link 
                  href={`/${lang}/diagnostic`} 
                  className="group relative px-10 py-5 overflow-hidden bg-primary text-xs font-sans tracking-[0.2em] uppercase text-black font-medium transition-all duration-500 w-full sm:w-auto text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {t.hero.ctaPrimary}
                    <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform duration-500 rtl:rotate-180 rtl:group-hover:-translate-x-2" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </Link>
                
                <Link 
                  href={`/${lang}/programmes`} 
                  className="group relative px-10 py-5 overflow-hidden border border-white/20 hover:border-white/50 backdrop-blur-sm text-xs font-sans tracking-[0.2em] uppercase text-white/80 hover:text-white transition-all duration-500 w-full sm:w-auto text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {t.hero.ctaSecondary}
                    <ArrowRight size={14} className="transform group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 rtl:rotate-180 rtl:group-hover:-translate-x-2" />
                  </span>
                  <div className="absolute inset-0 bg-white/5 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/5 w-full">
                <div className="text-center">
                  <p className="text-2xl font-serif font-light text-white">{t.hero.statsClients}</p>
                  <p className="text-[9px] font-sans tracking-[0.15em] uppercase text-white/30 mt-1">{t.hero.statsClientsLabel}</p>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="text-center">
                  <p className="text-2xl font-serif font-light text-primary">{t.hero.statsCustom}</p>
                  <p className="text-[9px] font-sans tracking-[0.15em] uppercase text-white/30 mt-1">{t.hero.statsCustomLabel}</p>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div className="text-center">
                  <p className="text-2xl font-serif font-light text-white">{t.hero.statsLocation}</p>
                  <p className="text-[9px] font-sans tracking-[0.15em] uppercase text-white/30 mt-1">{t.hero.statsLocationLabel}</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              variants={fadeInUp}
              className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-4 lg:mb-0"
            >
              <div className="relative group">
                <div className="absolute -inset-4 rounded-full border border-primary/20 group-hover:border-primary/50 transition-all duration-1000 group-hover:scale-[1.03]"></div>
                <div className="absolute -inset-1 rounded-full border-2 border-primary/30 group-hover:border-primary transition-all duration-700"></div>
                <div className="absolute -inset-10 rounded-full bg-primary/8 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <img 
                  src="/hamza-essaadaoui.jpg" 
                  alt={`${t.hero.directorName} — ${t.hero.directorTitle}`}
                  className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px] object-cover object-top rounded-full shadow-2xl shadow-black/50 ring-1 ring-white/10"
                />
                
                <div className="absolute -bottom-10 lg:-bottom-12 left-1/2 -translate-x-1/2 text-center backdrop-blur-sm bg-black/30 px-4 md:px-6 py-2 md:py-3 border border-white/5 whitespace-nowrap">
                  <p className="text-xs md:text-base font-serif font-light text-white tracking-widest">{t.hero.directorName}</p>
                  <p className="text-[8px] md:text-[10px] font-sans tracking-[0.3em] uppercase text-primary/70 mt-0.5 md:mt-1">{t.hero.directorTitle}</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
      </section>

      {/* VISION */}
      <section className="py-32 md:py-48 hairline-t">
        <div className="container mx-auto px-8 md:px-12 max-w-[1200px]">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24"
          >
            <div className="lg:col-span-4">
              <motion.h3 variants={fadeInUp} className="text-[10px] font-sans tracking-[0.3em] uppercase text-white/40 sticky top-32">
                {t.vision.label}
              </motion.h3>
            </div>
            
            <div className="lg:col-span-8 space-y-12 md:space-y-16">
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-light text-white leading-[1.2]">
                {t.vision.title}<br/>
                <span className="text-white/30 italic">{t.vision.titleAccent}</span>
              </motion.h2>
              
              <motion.div variants={fadeInUp} className="space-y-8 text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                <p>{t.vision.p1}</p>
                <p>{t.vision.p2}</p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link href={`/${lang}/a-propos`} className="group inline-flex items-center gap-4 text-xs font-sans tracking-[0.2em] uppercase text-primary transition-colors duration-500">
                  <span className="border-b border-primary/30 pb-1 group-hover:border-primary transition-colors duration-500">
                    {t.vision.cta}
                  </span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform duration-500 rtl:rotate-180 rtl:group-hover:-translate-x-2" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-32 md:py-48 relative overflow-hidden bg-[#050505]">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Royal_Palace%2C_Meknes.jpg" 
          alt="Royal Palace Meknes" 
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale pointer-events-none" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#050505]/90 to-[#030303] pointer-events-none"></div>
        <div className="container mx-auto px-8 md:px-12 max-w-[1200px] relative z-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.h3 variants={fadeInUp} className="text-[10px] font-sans tracking-[0.3em] uppercase text-white/40 mb-6">
              {t.pillars.label}
            </motion.h3>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-light text-white">
              {t.pillars.title}
            </motion.h2>
          </motion.div>

          <div className="flex flex-col">
            {t.pillars.items.map((pillar, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 md:py-16 hairline-t hover:bg-white/[0.02] transition-colors duration-700 cursor-default px-4 -mx-4"
              >
                <div className="flex items-center gap-8 md:gap-16 mb-4 md:mb-0">
                  <span className="text-sm font-sans tracking-widest text-primary/60 group-hover:text-primary transition-colors duration-500">
                    {pillar.num}
                  </span>
                  <h4 className="text-3xl md:text-5xl font-serif font-light text-white group-hover:translate-x-4 rtl:group-hover:-translate-x-4 rtl:group-hover:translate-x-0 transition-transform duration-700">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-white/50 text-base md:text-lg font-light max-w-sm md:text-right rtl:md:text-left group-hover:text-white/80 transition-colors duration-500">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
            <div className="hairline-t w-full"></div>
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="py-32 md:py-48">
        <div className="container mx-auto px-8 md:px-12 max-w-[1200px]">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12"
          >
            <div>
              <motion.h3 variants={fadeInUp} className="text-[10px] font-sans tracking-[0.3em] uppercase text-white/40 mb-6">
                {t.programmesSection.label}
              </motion.h3>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif font-light text-white">
                {t.programmesSection.title} <br/> 
                <span className="text-white/30 italic">{t.programmesSection.titleAccent}</span>
              </motion.h2>
            </div>
            <motion.div variants={fadeInUp}>
              <Link href={`/${lang}/programmes`} className="group flex items-center gap-4 text-xs font-sans tracking-[0.2em] uppercase text-primary">
                {t.programmesSection.cta}
                <span className="w-12 h-[1px] bg-primary group-hover:w-24 transition-all duration-700"></span>
              </Link>
            </motion.div>
          </motion.div>

          <div className="flex flex-col">
            {packs.map((pack, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="border-t border-white/10 group"
              >
                <div className="py-12 md:py-20">
                  <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-primary/60 group-hover:text-primary transition-colors duration-500 mb-4 md:mb-6 block">
                    {t.programmesSection.programmeLabel} 0{index + 1}
                  </span>
                  
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-16 mb-8 md:mb-12">
                    <h4 className="text-2xl md:text-4xl lg:text-5xl font-serif font-light text-white leading-[1.15] lg:max-w-[50%]">
                      {pack.title}
                    </h4>
                    <p className="text-base md:text-lg font-light text-white/50 italic leading-relaxed lg:max-w-[45%]">
                      &quot;{pack.shortDesc}&quot;
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
                    <div className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5">
                      <Clock size={16} className="text-primary/60 mt-0.5 shrink-0" strokeWidth={1.5} />
                      <div>
                        <h5 className="text-[9px] md:text-[10px] font-sans tracking-[0.2em] uppercase text-white/30 mb-1">{t.programmesSection.realisation}</h5>
                        <p className="text-sm font-light text-white/80">{pack.deadline}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5">
                      <Shield size={16} className="text-primary/60 mt-0.5 shrink-0" strokeWidth={1.5} />
                      <div>
                        <h5 className="text-[9px] md:text-[10px] font-sans tracking-[0.2em] uppercase text-white/30 mb-1">{t.programmesSection.maintenance}</h5>
                        <p className="text-sm font-light text-white/80">{pack.maintenance}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8 md:mb-12">
                    <h5 className="text-[9px] md:text-[10px] font-sans tracking-[0.2em] uppercase text-white/30 mb-5 md:mb-6">
                      {t.programmesSection.included}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {pack.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm md:text-base font-light text-white/60 group-hover:text-white/80 transition-colors duration-500">
                          <CheckCircle2 className="text-primary/50 mt-0.5 shrink-0" strokeWidth={1.5} size={16} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href={`/${lang}/contact`} 
                    className="group/btn relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 overflow-hidden bg-white/[0.03] border border-white/10 hover:border-primary/50 text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-white/80 hover:text-primary transition-all duration-500 w-full sm:w-auto"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {t.programmesSection.requestPack}
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

      {/* POSITIONING */}
      <section className="py-32 md:py-48 hairline-t bg-[#030303] overflow-hidden">
        <div className="container mx-auto px-8 md:px-12 max-w-[1200px]">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-24 md:mb-40"
          >
            <motion.h3 variants={fadeInUp} className="text-[10px] font-sans tracking-[0.3em] uppercase text-white/40 mb-6">
              {t.positioning.label}
            </motion.h3>
            <motion.p variants={fadeInUp} className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-light">
              {t.positioning.intro}
            </motion.p>
          </motion.div>
          
          <div className="flex flex-col gap-24 md:gap-32">
            {t.positioning.items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-24 group"
              >
                <div className="text-[120px] md:text-[200px] leading-none font-serif font-light text-white/5 group-hover:text-primary/10 transition-colors duration-700 select-none">
                  {item.step}
                </div>
                <div className="text-center md:text-left rtl:md:text-right">
                  <h4 className="text-3xl md:text-5xl font-serif font-light text-white mb-6 tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-white/50 text-lg md:text-xl font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-40 md:py-64 relative flex flex-col items-center justify-center text-center hairline-t bg-[#050505] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-8 max-w-4xl relative z-10"
        >
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-8xl font-serif font-light text-white mb-10 leading-[1.1]">
            {t.cta.title} <br/>
            <span className="italic text-white/50">{t.cta.titleAccent}</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/50 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            {t.cta.desc}
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link 
              href={`/${lang}/contact`} 
              className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden border border-primary/40 text-xs font-sans tracking-[0.2em] uppercase text-primary hover:text-black transition-colors duration-500 rounded-none w-full sm:w-auto"
            >
              <span className="relative z-10">{t.cta.button}</span>
              <div className="absolute inset-0 bg-primary transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
