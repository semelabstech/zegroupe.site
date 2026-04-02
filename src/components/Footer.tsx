"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function Footer() {
  const { dict, lang } = useTranslation();
  const t = dict.footer;

  return (
    <footer className="bg-[#030303] border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto px-8 md:px-12 max-w-[1300px]">

        {/* Top */}
        <div className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">

          <div className="lg:col-span-5">
            <Link href={`/${lang}`} className="group inline-block mb-6">
              <span className="text-3xl font-serif font-light text-white group-hover:text-primary transition-colors duration-500 tracking-wider">
                ZEG
              </span>
              <span className="block text-[7px] font-sans tracking-[0.4em] uppercase text-white/30 -mt-0.5">
                Groupe
              </span>
            </Link>
            <p className="text-base md:text-lg font-serif italic text-white/50 leading-relaxed max-w-sm">
              &quot;{t.tagline}&quot;
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {[t.service1, t.service2, t.service3].map((service, i) => (
                <span key={i} className="text-[9px] font-sans tracking-[0.15em] uppercase text-white/30 border border-white/10 px-3 py-1.5">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h5 className="text-[10px] font-sans tracking-[0.3em] uppercase text-primary/60 mb-6 md:mb-8">
              {t.explore}
            </h5>
            <nav className="flex flex-col gap-4">
              {[
                { label: dict.nav.about, href: `/${lang}/a-propos` },
                { label: dict.nav.programmes, href: `/${lang}/programmes` },
                { label: dict.nav.diagnostic, href: `/${lang}/diagnostic` },
                { label: dict.nav.contact, href: `/${lang}/contact` },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 text-sm font-light text-white/50 hover:text-white transition-colors duration-500"
                >
                  <ArrowUpRight size={12} className="text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all duration-500 rtl:rotate-90 rtl:group-hover:-translate-x-1" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-4">
            <h5 className="text-[10px] font-sans tracking-[0.3em] uppercase text-primary/60 mb-6 md:mb-8">
              {t.office}
            </h5>
            <ul className="space-y-5">
              <li>
                <span className="block text-[9px] font-sans tracking-[0.2em] uppercase text-white/30 mb-1">{t.location}</span>
                <span className="text-sm font-light text-white/60">{t.locationValue}</span>
              </li>
              <li>
                <span className="block text-[9px] font-sans tracking-[0.2em] uppercase text-white/30 mb-1">{t.phone}</span>
                <a href="tel:+212631176756" className="text-sm font-light text-white/60 hover:text-primary transition-colors duration-500">
                  +212 631-17-67-56
                </a>
              </li>
              <li>
                <span className="block text-[9px] font-sans tracking-[0.2em] uppercase text-white/30 mb-1">{t.email}</span>
                <a href="mailto:contact.ste.zeg@gmail.com" className="text-sm font-light text-white/60 hover:text-primary transition-colors duration-500">
                  contact.ste.zeg@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 md:py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[9px] font-sans tracking-[0.15em] uppercase text-white/25">
            © {new Date().getFullYear()} {t.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link href={`/${lang}/mentions-legales`} className="text-[9px] font-sans tracking-[0.15em] uppercase text-white/25 hover:text-white/60 transition-colors duration-500">
              {t.mentions}
            </Link>
            <Link href={`/${lang}/confidentialite`} className="text-[9px] font-sans tracking-[0.15em] uppercase text-white/25 hover:text-white/60 transition-colors duration-500">
              {t.privacy}
            </Link>
            <Link href={`/${lang}/cgp`} className="text-[9px] font-sans tracking-[0.15em] uppercase text-white/25 hover:text-white/60 transition-colors duration-500">
              {t.cgp}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
