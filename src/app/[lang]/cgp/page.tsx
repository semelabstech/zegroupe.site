"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export default function CGPPage() {
  const { dict } = useTranslation();
  const t = dict.cgp;
  const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

  return (
    <div className="flex flex-col w-full bg-[#030303] selection:bg-primary selection:text-black min-h-screen">
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      <section className="pt-40 pb-20 md:pt-56 md:pb-32">
        <div className="container mx-auto px-8 md:px-12 max-w-[1000px]">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h3 variants={fadeInUp} className="text-[10px] md:text-xs font-sans tracking-[0.4em] uppercase text-primary/80 mb-8">{t.label}</motion.h3>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-7xl font-serif font-light text-white mb-8 leading-[1.1]">
              {t.title} <br/><span className="italic text-white/40">{t.titleAccent}</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg font-light text-white/40 max-w-xl leading-relaxed">{t.desc}</motion.p>
          </motion.div>
        </div>
      </section>
      <section className="pb-32 md:pb-48">
        <div className="container mx-auto px-8 md:px-12 max-w-[1000px]">
          <div className="flex flex-col hairline-t">
            {t.sections.map((section, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, margin: "-50px" }} className="py-12 md:py-16 hairline-b group">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                  <div className="md:col-span-4 flex items-start gap-6">
                    <span className="text-sm font-sans tracking-widest text-primary/40 group-hover:text-primary/80 transition-colors duration-500 shrink-0 mt-1">{section.num}</span>
                    <h2 className="text-2xl md:text-3xl font-serif font-light text-white leading-snug">{section.title}</h2>
                  </div>
                  <div className="md:col-span-8 text-base font-light text-white/60 leading-relaxed">
                    <p className={section.items && section.items.length > 0 ? "mb-6" : ""}>{section.content}</p>
                    {section.items && section.items.length > 0 && (
                      <ul className="space-y-3">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex gap-3"><span className="text-primary/60 shrink-0">—</span><span>{item}</span></li>
                        ))}
                      </ul>
                    )}
                    {"note" in section && section.note && (
                      <p className="text-sm italic text-white/40 mt-6">{section.note as string}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
