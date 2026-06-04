"use client";

import { useState } from "react";
import { pick, type Lang } from "@/lib/i18n";

interface TestimonialsProps {
  lang: Lang;
}

export default function TestimonialsSection({ lang }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      nameGR: "Επιτροπή Διαμερισμάτων – Στρόβολος",
      nameEN: "Apartments Committee – Strovolos",
      nameRU: "Комитет дома — Строволос",
      textGR:
        "Με την MPA Property Services νιώθουμε ότι η πολυκατοικία μας είναι σε καλά χέρια. Υπάρχει οργάνωση, διαφάνεια και άμεση ανταπόκριση στα θέματα που προκύπτουν.",
      textEN:
        "With MPA Property Services we feel our building is in good hands. There is structure, transparency and very fast response whenever issues arise.",
      textRU:
        "С MPA Property Services мы чувствуем, что наш дом в надёжных руках. Есть порядок, прозрачность и быстрая реакция на вопросы.",
    },
    {
      nameGR: "Διαχειριστική Επιτροπή Συγκροτήματος – Λεμεσός",
      nameEN: "Complex Management Committee – Limassol",
      nameRU: "Комитет жилого комплекса — Лимасол",
      textGR:
        "Η συνεργασία μας μάς βοήθησε να βάλουμε τάξη στα κοινόχρηστα και να εξηγήσουμε ξεκάθαρα σε όλους πού πηγαίνουν τα χρήματα.",
      textEN:
        "Our collaboration helped us put real order in the common expenses and clearly explain to everyone where their money goes.",
      textRU:
        "Сотрудничество помогло навести порядок в общих расходах и понятно объяснить владельцам, куда идут деньги.",
    },
    {
      nameGR: "Ιδιοκτήτης διαμερίσματος",
      nameEN: "Apartment owner",
      nameRU: "Владелец квартиры",
      textGR:
        "Πολύ καλή επικοινωνία, επαγγελματισμός και συνέπεια. Οι αναφορές που λαμβάνουμε για τα οικονομικά είναι πάντα αναλυτικές και κατανοητές.",
      textEN:
        "Excellent communication, professionalism and consistency. The financial reports we receive are always detailed and easy to understand.",
      textRU:
        "Хорошая связь, профессиональный подход и последовательность. Финансовые отчёты всегда подробные и понятные.",
    },
    {
      nameGR: "Συγκρότημα κατοικιών – Λευκωσία",
      nameEN: "Residential complex – Nicosia",
      nameRU: "Жилой комплекс — Никосия",
      textGR:
        "Από την πρώτη στιγμή φάνηκε η εμπειρία τους στη διαχείριση κτιρίων. Μας βοήθησαν να οργανώσουμε καλύτερα τη συντήρηση και τις βλάβες.",
      textEN:
        "From day one their experience in building management was obvious. They helped us organise maintenance and incident handling much better.",
      textRU:
        "С первого дня было видно, что у команды есть опыт. Они помогли лучше организовать обслуживание и заявки на ремонт.",
    },
    {
      nameGR: "Ιδιοκτήτες καταστημάτων",
      nameEN: "Retail unit owners",
      nameRU: "Владельцы коммерческих помещений",
      textGR:
        "Η MPA μας δίνει σιγουριά ότι οι κοινόχρηστοι χώροι παραμένουν καθαροί, ασφαλείς και σωστά διαχειριζόμενοι.",
      textEN:
        "MPA gives us confidence that common areas remain clean, safe and professionally managed.",
      textRU:
        "MPA даёт уверенность, что общие зоны остаются чистыми, безопасными и хорошо управляемыми.",
    },
    {
      nameGR: "Επιχείρηση σε επαγγελματικό κτίριο",
      nameEN: "Business in an office building",
      nameRU: "Компания в офисном здании",
      textGR:
        "Η παρουσία τους στο κτίριο έχει βελτιώσει σημαντικά την καθημερινή λειτουργία και την εικόνα του χώρου προς τους πελάτες μας.",
      textEN:
        "Their presence in the building significantly improved daily operations and the overall image of the space towards our clients.",
      textRU:
        "Их присутствие в здании заметно улучшило ежедневную работу и общее впечатление от пространства для наших клиентов.",
    },
  ];

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const visibleDesktop = [0, 1, 2].map(
    (offset) => testimonials[(activeIndex + offset) % testimonials.length]
  );
  const activeTestimonial = testimonials[activeIndex];

  const renderCard = (t: (typeof testimonials)[number]) => (
    <div className="group relative overflow-hidden rounded-[6px] bg-white/70 backdrop-blur-xl border border-slate-200 shadow-[0_16px_45px_rgba(15,23,42,0.14)] px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(15,23,42,0.20)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -top-24 left-0 h-32 w-full bg-gradient-to-r from-white/35 via-white/10 to-transparent rotate-[-8deg]" />
      </div>

      <div className="relative z-10">
        <div className="mb-3 text-cyan-500">
          <i className="fa-solid fa-quote-left text-lg" aria-hidden="true" />
        </div>

        <p className="min-h-[104px] text-[14px] leading-relaxed text-slate-700">
          {pick(lang, { gr: t.textGR, en: t.textEN, ru: t.textRU })}
        </p>

        <div className="mt-4">
          <p className="text-[13px] font-semibold text-[#12133c]">
            {pick(lang, { gr: t.nameGR, en: t.nameEN, ru: t.nameRU })}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="testimonials"
      className="relative py-12 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-[11px] tracking-[0.25em] text-cyan-700 uppercase font-semibold">
            {pick(lang, {
              gr: "ΤΙ ΛΕΝΕ ΟΙ ΠΕΛΑΤΕΣ ΜΑΣ",
              en: "WHAT OUR CLIENTS SAY",
              ru: "ЧТО ГОВОРЯТ КЛИЕНТЫ",
            })}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[#12133c]">
            {pick(lang, {
              gr: "Σχέσεις εμπιστοσύνης με τους πελάτες μας",
              en: "Trusted relationships with our clients",
              ru: "Доверие строится в ежедневной работе",
            })}
          </h2>
          <div className="mt-3 h-[3px] w-24 bg-cyan-400 mx-auto rounded-[6px]" />
          <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
            {pick(lang, {
              gr: "Ενδεικτικά σχόλια από Επιτροπές και ιδιοκτήτες για την καθημερινή οργάνωση, τα κοινόχρηστα και την επικοινωνία.",
              en: "A selection of comments from Committees and owners about daily organisation, common expenses and communication.",
              ru: "Отзывы комитетов и владельцев о ежедневной организации, общих расходах и коммуникации.",
            })}
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="md:hidden">{renderCard(activeTestimonial)}</div>

          <div className="hidden gap-5 md:grid md:grid-cols-3">
            {visibleDesktop.map((testimonial, index) => (
              <div key={`${testimonial.nameEN}-${index}`}>{renderCard(testimonial)}</div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#12133c] text-white shadow-[0_10px_24px_rgba(18,19,60,0.25)] transition hover:bg-[#1b1d55]"
            >
              <i className="fa-solid fa-chevron-left text-sm" aria-hidden="true" />
            </button>
            <span className="min-w-12 text-center text-xs font-semibold text-slate-500">
              {activeIndex + 1}/{testimonials.length}
            </span>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#12133c] text-white shadow-[0_10px_24px_rgba(18,19,60,0.25)] transition hover:bg-[#1b1d55]"
            >
              <i className="fa-solid fa-chevron-right text-sm" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
