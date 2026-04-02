"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Mail, ArrowRight, Globe } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { usePathname } from "next/navigation";

export default function Header() {
  const { dict, lang } = useTranslation();
  const t = dict.nav;
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navItems = [
    { label: t.home, href: `/${lang}` },
    { label: t.about, href: `/${lang}/a-propos` },
    { label: t.programmes, href: `/${lang}/programmes` },
    { label: t.diagnostic, href: `/${lang}/diagnostic` },
    { label: t.contact, href: `/${lang}/contact` },
  ];

  // Get the path without the locale prefix for language switching
  const pathWithoutLocale = pathname.replace(/^\/(fr|en|ar)/, "") || "/";

  const locales = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-[#030303]/90 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-5 md:py-8"
      }`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-[1400px]">

          {/* Logo */}
          <Link href={`/${lang}`} className="group flex items-center gap-3 z-10 relative">
            <div className="flex flex-col">
              <span className="text-[22px] md:text-[26px] font-serif font-light text-white tracking-wider group-hover:text-primary transition-colors duration-500">
                ZEG
              </span>
              <span className="text-[6px] md:text-[7px] font-sans tracking-[0.35em] uppercase text-white/30 -mt-0.5">
                Groupe
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[10px] font-sans tracking-[0.2em] uppercase transition-all duration-500 group ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-500 ${
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 border border-white/10 rounded-sm overflow-hidden">
              {locales.map((locale) => (
                <Link
                  key={locale.code}
                  href={`/${locale.code}${pathWithoutLocale}`}
                  className={`px-2.5 py-1.5 text-[9px] font-sans tracking-[0.15em] uppercase transition-all duration-300 ${
                    lang === locale.code
                      ? "bg-primary/20 text-primary"
                      : "text-white/40 hover:text-white/80 hover:bg-white/5"
                  }`}
                >
                  {locale.label}
                </Link>
              ))}
            </div>

            <Link
              href={`/${lang}/diagnostic`}
              className="group relative px-8 py-3.5 overflow-hidden bg-primary text-[9px] font-sans tracking-[0.2em] uppercase text-black font-medium transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                {t.auditFlash}
                <ArrowRight size={12} className="transform group-hover:translate-x-1.5 transition-transform duration-500 rtl:rotate-180 rtl:group-hover:-translate-x-1.5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-50 flex flex-col justify-center items-center w-10 h-10"
            aria-label={menuOpen ? t.closeMenu : t.openMenu}
          >
            <span className={`block w-6 h-[1px] bg-white transition-all duration-500 origin-center ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`}></span>
            <span className={`block w-6 h-[1px] bg-white mt-[5px] transition-all duration-500 origin-center ${menuOpen ? "-rotate-45 -translate-y-[2px]" : ""}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-700 ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="absolute inset-0 bg-[#030303]/98 backdrop-blur-2xl"></div>
        
        <div className={`relative h-full flex flex-col justify-between px-8 pt-28 pb-10 transition-transform duration-700 ${
          menuOpen ? "translate-y-0" : "-translate-y-8"
        }`}>
          <nav className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between py-5 border-b border-white/5 group transition-all duration-500 ${
                  pathname === item.href ? "text-primary" : "text-white/80 hover:text-white"
                }`}
                style={{ transitionDelay: menuOpen ? `${index * 80}ms` : "0ms" }}
              >
                <span className="text-2xl font-serif font-light tracking-wide">{item.label}</span>
                <ArrowRight size={16} className="text-white/20 group-hover:text-primary group-hover:translate-x-2 transition-all duration-500 rtl:rotate-180 rtl:group-hover:-translate-x-2" />
              </Link>
            ))}
          </nav>
          
          <div className="mt-10 space-y-8">
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-white/30" />
              <div className="flex items-center gap-1">
                {locales.map((locale) => (
                  <Link
                    key={locale.code}
                    href={`/${locale.code}${pathWithoutLocale}`}
                    onClick={() => setMenuOpen(false)}
                    className={`px-3 py-2 text-xs font-sans tracking-[0.15em] uppercase transition-all duration-300 ${
                      lang === locale.code
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "text-white/40 hover:text-white/80 border border-white/10"
                    }`}
                  >
                    {locale.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a href="tel:+212631176756" className="flex items-center gap-3 text-sm text-white/40 hover:text-white transition-colors">
                <Phone size={14} className="text-primary/60" />+212 631-17-67-56
              </a>
              <a href="mailto:contact.ste.zeg@gmail.com" className="flex items-center gap-3 text-sm text-white/40 hover:text-white transition-colors">
                <Mail size={14} className="text-primary/60" />contact.ste.zeg@gmail.com
              </a>
            </div>

            <Link
              href={`/${lang}/diagnostic`}
              onClick={() => setMenuOpen(false)}
              className="group relative flex items-center justify-center gap-3 px-8 py-4 overflow-hidden bg-primary text-xs font-sans tracking-[0.2em] uppercase text-black font-medium transition-all duration-500"
            >
              <span className="relative z-10">{t.requestAudit}</span>
              <ArrowRight size={14} className="relative z-10 rtl:rotate-180" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
