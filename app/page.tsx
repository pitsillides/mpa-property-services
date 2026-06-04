"use client";

import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import LawsSection from "@/components/LawsSection";
import FAQsSection from "@/components/FAQsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import CookiesSection from "@/components/CookiesSection";
import OpenInBrowser from "@/components/OpenInBrowser";
import { htmlLangByLang, type Lang } from "@/lib/i18n";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("gr");

  useEffect(() => {
    document.documentElement.lang = htmlLangByLang[lang];
  }, [lang]);

  return (
    <main
      id="top"
      className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-50 text-slate-900"
    >
      {/* 👉 Fix για Facebook / Messenger in-app browser */}
      <OpenInBrowser lang={lang} />

      {/* HEADER */}
      <Header lang={lang} setLang={setLang} />

      {/* HERO */}
      <Hero lang={lang} />

      {/* SERVICES */}
      <ServicesSection lang={lang} />

      {/* ABOUT */}
      <AboutSection lang={lang} />

      {/* WHY US */}
      <WhyUsSection lang={lang} />

      {/* TEAM */}
      <TeamSection lang={lang} />

      {/* TESTIMONIALS */}
      <TestimonialsSection lang={lang} />

      {/* OFFER */}
      <section id="offer">
        <OfferSection lang={lang} />
      </section>

      {/* LEGISLATION */}
      <LawsSection lang={lang} />

      {/* FAQ */}
      <FAQsSection lang={lang} />

      {/* CONTACT */}
      <ContactSection lang={lang} />

      {/* FOOTER */}
      <Footer lang={lang} />

      {/* FLOATING UI */}
      <BackToTopButton />
      <CookiesSection lang={lang} />
    </main>
  );
}
