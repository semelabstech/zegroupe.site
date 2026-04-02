"use client";

import { MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n";

export default function WhatsAppButton() {
  const { dict } = useTranslation();
  const t = dict.whatsapp;
  const phoneNumber = "212631176756";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(t.message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 right-8 rtl:right-auto rtl:left-8 z-50 flex items-center gap-3 px-5 py-3 bg-[#0a0a0a] border border-white/10 text-white rounded-full shadow-2xl hover:border-primary/50 transition-all duration-700 group overflow-hidden backdrop-blur-md ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping pointer-events-none opacity-50"></div>
      <div className="relative flex items-center justify-center">
        <MessageSquare size={16} className="text-white group-hover:text-primary transition-colors duration-500" />
      </div>
      <span className="text-xs font-sans tracking-[0.15em] uppercase text-white/70 group-hover:text-white transition-colors duration-500">
        {t.label}
      </span>
    </a>
  );
}
