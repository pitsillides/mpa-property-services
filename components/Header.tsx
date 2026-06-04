"use client";

import Image from "next/image";
import { useState } from "react";
import type { Lang } from "@/lib/i18n";

interface HeaderProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const navItems = [
    { id: "services", gr: "Υπηρεσίες", en: "Services", ru: "Услуги" },
    { id: "about", gr: "Σχετικά", en: "About", ru: "О нас" },
    { id: "why-us", gr: "Γιατί εμείς", en: "Why us", ru: "Почему мы" },
    { id: "team", gr: "Ομάδα", en: "Team", ru: "Команда" },
    { id: "offer", gr: "Προσφορά", en: "Quote", ru: "Заявка" },
    { id: "laws", gr: "Νομοθεσία", en: "Laws", ru: "Правовая база" },
    { id: "faqs", gr: "FAQs", en: "FAQs", ru: "FAQ" },
    { id: "contact", gr: "Επικοινωνία", en: "Contact", ru: "Контакты" },
  ];

  const languages: Array<{ code: Lang; label: string; native: string }> = [
    { code: "gr", label: "Greek", native: "Ελληνικά" },
    { code: "en", label: "English", native: "English" },
    { code: "ru", label: "Russian", native: "Русский" },
  ];

  const activeLanguage = languages.find((item) => item.code === lang) ?? languages[0];

  const changeLanguage = (code: Lang) => {
    setLang(code);
    setLanguageOpen(false);
  };

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
    setLanguageOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-40 bg-[#12133c]/95 backdrop-blur-xl border-b border-slate-700/40 shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="flex items-center gap-0.5" aria-label="Go to top">
          <Image
            src="/logo.svg"
            alt="MPA Property Services"
            width={180}
            height={62}
            priority
            className="h-10 w-auto object-contain drop-shadow-lg sm:h-12"
          />
          <span className="-ml-1.5 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.06em] text-white/90 sm:-ml-2 sm:text-[12px] sm:tracking-[0.1em]">
            Property Services
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-xs font-medium text-white md:flex">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative pb-1 border-b-2 border-transparent hover:border-cyan-400 transition-colors"
            >
              {item[lang]}
            </button>
          ))}

          <div className="relative ml-3">
            <button
              type="button"
              onClick={() => setLanguageOpen((value) => !value)}
              aria-label={`Language: ${activeLanguage.label}`}
              aria-expanded={languageOpen}
              className="relative flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#1a1c4a] text-white shadow-[0_8px_18px_rgba(0,0,0,0.22)] transition hover:bg-[#20235a]"
            >
              <i className="fa-solid fa-globe text-[17px] text-cyan-100" aria-hidden="true" />
              <span className="absolute -right-1 -top-1 rounded-[6px] bg-cyan-400 px-1.5 py-0.5 text-[9px] font-bold uppercase leading-none text-[#12133c]">
                {lang}
              </span>
            </button>

            {languageOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-[6px] bg-white p-1.5 text-slate-800 shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
                {languages.map((item) => (
                  <button
                    type="button"
                    key={item.code}
                    onClick={() => changeLanguage(item.code)}
                    className={`flex w-full items-center justify-between rounded-[6px] px-3 py-2 text-left text-xs transition ${ lang === item.code ? "bg-cyan-50 font-semibold text-[#12133c]" : "hover:bg-slate-100" }`}
                  >
                    <span>{item.native}</span>
                    {lang === item.code && (
                      <i className="fa-solid fa-check text-[11px] text-cyan-600" aria-hidden="true" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageOpen((value) => !value)}
              aria-label={`Language: ${activeLanguage.label}`}
              aria-expanded={languageOpen}
              className="relative flex h-9 w-9 items-center justify-center rounded-[6px] bg-[#1a1c4a] text-white"
            >
              <i className="fa-solid fa-globe text-[16px] text-cyan-100" aria-hidden="true" />
              <span className="absolute -right-1 -top-1 rounded-[6px] bg-cyan-400 px-1 py-0.5 text-[8px] font-bold uppercase leading-none text-[#12133c]">
                {lang}
              </span>
            </button>

            {languageOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-[6px] bg-white p-1.5 text-slate-800 shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
                {languages.map((item) => (
                  <button
                    type="button"
                    key={item.code}
                    onClick={() => changeLanguage(item.code)}
                    className={`flex w-full items-center justify-between rounded-[6px] px-3 py-2 text-left text-xs transition ${ lang === item.code ? "bg-cyan-50 font-semibold text-[#12133c]" : "hover:bg-slate-100" }`}
                  >
                    <span>{item.native}</span>
                    {lang === item.code && (
                      <i className="fa-solid fa-check text-[11px] text-cyan-600" aria-hidden="true" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              setOpen((v) => !v);
              setLanguageOpen(false);
            }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="h-9 w-9 flex items-center justify-center rounded-[6px] bg-[#1a1c4a] text-white"
          >
            <i
              className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-700 bg-[#12133c] md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm text-white">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left py-2 hover:text-cyan-300 transition"
              >
                {item[lang]}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
