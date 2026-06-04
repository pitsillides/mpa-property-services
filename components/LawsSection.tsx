"use client";

import { pick, type Lang } from "@/lib/i18n";

interface LawsProps {
  lang: Lang;
}

export default function LawsSection({ lang }: LawsProps) {
  const laws = [
    {
      icon: "fa-solid fa-scale-balanced",
      titleGR: "Νομοθεσία οριζόντιας ιδιοκτησίας",
      titleEN: "Horizontal Property Law",
      titleRU: "Закон о горизонтальной собственности",
      textGR:
        "Ρυθμίζει την ιδιοκτησία ορόφων και διαμερισμάτων, τα ποσοστά συνιδιοκτησίας και τα δικαιώματα και υποχρεώσεις των ιδιοκτητών στους κοινόχρηστους χώρους.",
      textEN:
        "Regulates ownership of floors and apartments, co-ownership shares and the rights and obligations of owners in common areas.",
      textRU:
        "Регулирует собственность на этажи и квартиры, доли совместной собственности, а также права и обязанности владельцев в общих зонах.",
    },
    {
      icon: "fa-solid fa-gavel",
      titleGR: "Κανονισμοί κοινοχρήστων και Επιτροπών",
      titleEN: "Common areas & Committees regulations",
      titleRU: "Правила общих зон и комитетов",
      textGR:
        "Καθορίζει τον τρόπο λειτουργίας των Διαχειριστικών Επιτροπών, τη διαδικασία λήψης αποφάσεων και τη διαχείριση των κοινόχρηστων εξόδων.",
      textEN:
        "Defines how Management Committees operate, how decisions are taken and how common expenses are administered.",
      textRU:
        "Определяет работу управляющих комитетов, порядок принятия решений и администрирование общих расходов.",
    },
    {
      icon: "fa-solid fa-file-contract",
      titleGR: "Συμβάσεις και πρακτικά Γενικών Συνελεύσεων",
      titleEN: "Contracts & General Meeting minutes",
      titleRU: "Договоры и протоколы собраний",
      textGR:
        "Οι αποφάσεις των Γενικών Συνελεύσεων και οι συμβάσεις με παρόχους υπηρεσιών πρέπει να τηρούνται γραπτώς για διαφάνεια και σωστή ενημέρωση όλων των ιδιοκτητών.",
      textEN:
        "General Meeting decisions and service provider contracts should be kept in writing to ensure transparency and proper information for all owners.",
      textRU:
        "Решения общих собраний и договоры с поставщиками услуг важно хранить письменно, чтобы все владельцы были правильно информированы.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      titleGR: "Ασφάλεια κτιρίου & ευθύνη",
      titleEN: "Building safety & liability",
      titleRU: "Безопасность здания и ответственность",
      textGR:
        "Η σωστή συντήρηση και η συμμόρφωση με τις σχετικές πρόνοιες συμβάλλουν στη μείωση κινδύνων και στην προστασία της Επιτροπής και των ιδιοκτητών.",
      textEN:
        "Proper maintenance and compliance with relevant provisions help reduce risks and protect both the Committee and the owners.",
      textRU:
        "Правильное обслуживание и соблюдение требований помогают снизить риски и защитить комитет и владельцев.",
    },
  ];

  return (
    <section
      id="laws"
      className="relative py-12 bg-[#10122f]"
    >
      <div className="relative mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-[11px] tracking-[0.25em] text-cyan-200 uppercase font-semibold">
            {pick(lang, { gr: "ΝΟΜΟΘΕΣΙΑ", en: "LEGISLATION", ru: "ПРАВОВАЯ БАЗА" })}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-50">
            {pick(lang, {
              gr: "Βάση λειτουργίας και διαφάνειας",
              en: "A clear basis for transparent operations",
              ru: "Понятная основа для прозрачной работы",
            })}
          </h2>
          <div className="mt-3 h-[3px] w-24 bg-cyan-400 mx-auto rounded-[6px]" />
          <p className="mt-3 text-sm text-slate-200/85 max-w-3xl mx-auto">
            {pick(lang, {
              gr: "Κοινόχρηστα, αποφάσεις Επιτροπών, πρακτικά και συμβάσεις χρειάζονται σωστή τεκμηρίωση. Η ομάδα μας βοηθά ώστε οι διαδικασίες να παραμένουν οργανωμένες και συμβατές με το πλαίσιο λειτουργίας.",
              en: "Common expenses, Committee decisions, minutes and contracts need proper documentation. Our team helps keep procedures organised and aligned with the operating framework.",
              ru: "Общие расходы, решения комитетов, протоколы и договоры требуют правильной документации. Мы помогаем держать процессы организованными и понятными.",
            })}
          </p>
        </div>

        {/* Laws cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {laws.map((law) => (
            <div
              key={law.titleEN}
              className="group relative overflow-hidden rounded-[6px] border border-white/14 bg-white/7 backdrop-blur-xl shadow-[0_18px_55px_rgba(0,0,0,0.55)] px-5 py-6 sm:px-6 sm:py-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_75px_rgba(0,0,0,0.75)]"
            >
              {/* light sweep */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-24 left-0 h-32 w-full bg-gradient-to-r from-white/25 via-white/8 to-transparent rotate-[-10deg]" />
              </div>

              <div className="relative z-10 flex gap-4">
                <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[6px] bg-cyan-400/16">
                  <i
                    className={`${law.icon} text-cyan-200 text-lg`}
                    aria-hidden="true"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-slate-50">
                    {pick(lang, {
                      gr: law.titleGR,
                      en: law.titleEN,
                      ru: law.titleRU,
                    })}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] leading-relaxed text-slate-200/85">
                    {pick(lang, {
                      gr: law.textGR,
                      en: law.textEN,
                      ru: law.textRU,
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* small disclaimer */}
        <p className="mt-6 text-[11px] text-slate-300/80 text-center max-w-3xl mx-auto">
          {pick(lang, {
            gr: "Οι πιο πάνω πληροφορίες δίνονται σε γενικό ενημερωτικό επίπεδο και δεν αποτελούν νομική συμβουλή. Για εξειδικευμένη καθοδήγηση, οι ιδιοκτήτες θα πρέπει να απευθύνονται σε νομικό σύμβουλο.",
            en: "The above information is provided for general guidance only and does not constitute legal advice. For specialised guidance, owners should consult their legal advisor.",
            ru: "Информация выше носит общий ознакомительный характер и не является юридической консультацией. За специализированной консультацией владельцам следует обращаться к юристу.",
          })}
        </p>
      </div>
    </section>
  );
}
