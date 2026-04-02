"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export default function NotFound() {
  const { dict, lang } = useTranslation();
  const t = dict.notFound;

  const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  return (
    <div className="flex flex-col w-full bg-[#030303] selection:bg-primary selection:text-black min-h-screen items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center relative z-10 px-8">
        <motion.div variants={fadeInUp} className="mb-12">
          <span className="text-[200px] md:text-[300px] font-serif font-light text-white/[0.03] leading-none select-none block">404</span>
        </motion.div>
        <motion.h3 variants={fadeInUp} className="text-[10px] md:text-xs font-sans tracking-[0.4em] uppercase text-primary/80 mb-6 -mt-32 md:-mt-48">{t.label}</motion.h3>
        <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl font-serif font-light text-white mb-8 leading-snug">
          {t.title} <br/><span className="italic text-white/40">{t.titleAccent}</span>
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-base md:text-lg font-light text-white/40 mb-16 max-w-lg mx-auto leading-relaxed">{t.desc}</motion.p>
        <motion.div variants={fadeInUp}>
          <Link href={`/${lang}`} className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 overflow-hidden border border-primary/40 text-xs font-sans tracking-[0.2em] uppercase text-primary hover:text-black transition-colors duration-500 rounded-none">
            <ArrowLeft size={14} className="transform group-hover:-translate-x-2 transition-transform duration-500 relative z-10 rtl:rotate-180 rtl:group-hover:translate-x-2" />
            <span className="relative z-10">{t.cta}</span>
            <div className="absolute inset-0 bg-primary transform scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
