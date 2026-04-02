"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export default function DiagnosticPage() {
  const { dict } = useTranslation();
  const t = dict.diagnostic;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = { type: "diagnostic", name: formData.get("name"), company: formData.get("company"), email: formData.get("email"), phone: formData.get("phone"), needs: formData.get("needs") };
    try {
      const res = await fetch("/api/send", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error("Server error");
      const data = await res.json();
      window.open(data.whatsappUrl, "_blank");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg(t.errorMsg);
    }
  }

  const inputClass = "w-full bg-transparent border-b border-white/20 px-0 py-4 text-white font-light text-base md:text-lg focus:outline-none focus:border-primary transition-colors duration-500 peer";
  const labelClass = "absolute left-0 rtl:left-auto rtl:right-0 top-4 text-white/30 font-light text-sm md:text-lg transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-white/50 cursor-text";

  return (
    <div className="flex flex-col w-full bg-[#030303] selection:bg-primary selection:text-black min-h-screen pt-28 pb-24 md:pt-32 md:pb-40">
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-6 flex flex-col justify-start">
            <motion.h3 variants={fadeInUp} className="text-[10px] md:text-xs font-sans tracking-[0.4em] uppercase text-primary/80 mb-6 md:mb-8">{t.label}</motion.h3>
            <motion.h1 variants={fadeInUp} className="text-3xl md:text-6xl font-serif font-light text-white mb-8 md:mb-10 leading-[1.15]">
              {t.title} <br/><span className="italic text-white/50">{t.titleAccent}</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base md:text-lg font-light text-white/60 leading-relaxed mb-12 md:mb-16 max-w-lg">{t.desc}</motion.p>
            <motion.div variants={fadeInUp} className="mb-12 md:mb-16">
              <h4 className="text-[10px] font-sans tracking-[0.2em] uppercase text-white/30 mb-6 md:mb-8 border-b border-white/10 pb-2 inline-block">{t.reportTitle}</h4>
              <ul className="space-y-5 md:space-y-6">
                {t.reportItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 md:gap-4">
                    <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-primary/60 mt-1">{item.num}</span>
                    <div>
                      <strong className="block text-white font-serif font-light text-base md:text-lg mb-1">{item.title}</strong>
                      <span className="text-xs md:text-sm font-light text-white/50">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white/[0.02] border border-white/5 p-6 md:p-8 relative hidden md:block">
              <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 w-1 h-full bg-primary/30"></div>
              <p className="text-sm md:text-base font-serif italic text-white/60 leading-relaxed">&quot;{t.quote}&quot;</p>
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative">
            <motion.div variants={fadeInUp} className="lg:sticky lg:top-32 bg-[#050505] border border-white/5 p-6 md:p-12 shadow-2xl">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 size={48} className="text-primary mb-6" strokeWidth={1} />
                  <h3 className="text-2xl font-serif font-light text-white mb-4">{t.successTitle}</h3>
                  <p className="text-sm font-light text-white/50 max-w-sm">{t.successDesc}</p>
                  <button onClick={() => setStatus("idle")} className="mt-8 text-[10px] font-sans tracking-[0.2em] uppercase text-primary/70 hover:text-primary transition-colors duration-500">{t.successNew}</button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl md:text-2xl font-serif font-light text-white mb-2">{t.formTitle}</h2>
                  <p className="text-xs md:text-sm font-light text-white/40 mb-8 md:mb-12">{t.formDesc}</p>
                  <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                    <div className="relative group"><input type="text" name="name" id="diag-name" className={inputClass} placeholder=" " required /><label htmlFor="diag-name" className={labelClass}>{t.fieldName}</label></div>
                    <div className="relative group"><input type="text" name="company" id="diag-company" className={inputClass} placeholder=" " required /><label htmlFor="diag-company" className={labelClass}>{t.fieldCompany}</label></div>
                    <div className="relative group"><input type="email" name="email" id="diag-email" className={inputClass} placeholder=" " required /><label htmlFor="diag-email" className={labelClass}>{t.fieldEmail}</label></div>
                    <div className="relative group"><input type="tel" name="phone" id="diag-phone" className={inputClass} placeholder=" " required /><label htmlFor="diag-phone" className={labelClass}>{t.fieldPhone}</label></div>
                    <div className="relative group mt-8 md:mt-12 mb-6 md:mb-8">
                      <label htmlFor="diag-needs" className="block text-[10px] font-sans tracking-[0.2em] uppercase text-white/30 mb-4">{t.fieldNeeds}</label>
                      <textarea name="needs" id="diag-needs" rows={3} className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white font-light text-base md:text-lg focus:outline-none focus:border-primary transition-colors duration-500 placeholder-white/20 resize-none" placeholder={t.fieldNeedsPlaceholder}></textarea>
                    </div>
                    {errorMsg && <p className="text-red-400/80 text-sm font-light">{errorMsg}</p>}
                    <button type="submit" disabled={status === "loading"} className="group relative w-full inline-flex items-center justify-center px-10 py-5 overflow-hidden bg-primary text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-black font-medium transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed">
                      <span className="relative z-10 flex items-center gap-3">
                        {status === "loading" ? (<><Loader2 size={14} className="animate-spin" />{t.submitting}</>) : (<>{t.submitButton}<ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform duration-500 rtl:rotate-180 rtl:group-hover:-translate-x-2" /></>)}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
