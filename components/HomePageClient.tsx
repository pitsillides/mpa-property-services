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
import { type Lang } from "@/lib/i18n";

interface HomePageClientProps {
  initialLang: Lang;
}

export default function HomePageClient({ initialLang }: HomePageClientProps) {
  const lang = initialLang;

  return (
    <main
      id="top"
      className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-50 text-slate-900"
    >
      <OpenInBrowser lang={lang} />
      <Header lang={lang} />
      <Hero lang={lang} />
      <ServicesSection lang={lang} />
      <AboutSection lang={lang} />
      <WhyUsSection lang={lang} />
      <TeamSection lang={lang} />
      <TestimonialsSection lang={lang} />
      <section id="offer">
        <OfferSection lang={lang} />
      </section>
      <LawsSection lang={lang} />
      <FAQsSection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />
      <BackToTopButton />
      <CookiesSection lang={lang} />
    </main>
  );
}
