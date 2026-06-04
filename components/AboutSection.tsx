"use client";

import { useState } from "react";
import { pick, type Lang } from "@/lib/i18n";

interface AboutProps {
  lang: Lang;
}

type Item = {
  key: "vision" | "mission" | "what";
  titleGR: string;
  titleEN: string;
  textGR: string;
  textEN: string;
  textRU: string;
  icon: string;
};

export default function AboutSection({ lang }: AboutProps) {
  // ✅ όλα κλειστά by default
  const [openKey, setOpenKey] = useState<Item["key"] | null>(null);

  const items: Item[] = [
    {
      key: "vision",
      titleGR: "Το όραμά μας",
      titleEN: "Our vision",
      textGR:
        "Η MPA Property Services Ltd δημιουργήθηκε με στόχο να προσφέρει στους πελάτες της σταθερή φροντίδα, αποτελεσματική οργάνωση και επαγγελματική υποστήριξη για την ιδιοκτησία τους.",
      textEN:
        "MPA Property Services Ltd was created to offer clients steady care, effective organisation and professional support for their property.",
      textRU:
        "MPA Property Services Ltd была создана для того, чтобы владельцы получали стабильную заботу, понятную организацию и профессиональную поддержку по своему объекту.",
      icon: "fa-solid fa-eye",
    },
    {
      key: "mission",
      titleGR: "Η αποστολή μας",
      titleEN: "Our mission",
      textGR:
        "Στόχος μας είναι να ξεπερνάμε τις προσδοκίες των πελατών με εξατομικευμένες λύσεις, καθαρή επικοινωνία και μακροχρόνιες σχέσεις εμπιστοσύνης.",
      textEN:
        "Our goal is to exceed client expectations through tailored solutions, clear communication and long-term relationships built on trust.",
      textRU:
        "Наша цель — предлагать решения под конкретные потребности, говорить с клиентами ясно и строить долгосрочные отношения на доверии.",
      icon: "fa-solid fa-bullseye",
    },
    {
      key: "what",
      titleGR: "Τι κάνουμε",
      titleEN: "What we do",
      textGR:
        "Συντονίζουμε οικονομική διαχείριση, κοινόχρηστα, ενοίκια, συντηρήσεις και άμεση υποστήριξη, επιλέγοντας για κάθε ανάγκη την κατάλληλη ομάδα συνεργατών.",
      textEN:
        "We coordinate financial administration, common expenses, rent collection, maintenance and immediate support, matching each need with the right team of partners.",
      textRU:
        "Мы координируем финансы, общие расходы, сбор арендных платежей, обслуживание и срочную поддержку, подбирая подходящих специалистов под каждую задачу.",
      icon: "fa-solid fa-building-circle-check",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-12 bg-gradient-to-b from-slate-100 to-white"
    >
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.25em] text-cyan-700 uppercase font-semibold">
              {pick(lang, { gr: "Σχετικά με εμάς", en: "About us", ru: "О нас" })}
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-[#12133c] leading-tight">
              {pick(lang, {
                gr: "Προσωπική φροντίδα με επαγγελματική οργάνωση",
                en: "Personal care with professional structure",
                ru: "Личный подход и профессиональная организация",
              })}
            </h2>

            <div className="mt-4 h-[3px] w-20 bg-cyan-400 rounded-[6px]" />

            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              {pick(lang, {
                gr: "Κρατάμε τις διαδικασίες απλές, την ενημέρωση καθαρή και την επικοινωνία άμεση.",
                en: "We keep the process simple, the updates clear and the communication direct.",
                ru: "Мы держим процессы простыми, обновления понятными, а связь быстрой и прямой.",
              })}
            </p>
          </div>

          {/* RIGHT – accordion */}
          <div className="lg:col-span-7 space-y-4">
            {items.map((item) => {
              const isOpen = openKey === item.key;

              return (
                <div
                  key={item.key}
                  className="group relative overflow-hidden rounded-[6px] border border-slate-200 bg-white/70 backdrop-blur-xl shadow-[0_18px_55px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_85px_rgba(15,23,42,0.18)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenKey(isOpen ? null : item.key)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[6px] bg-cyan-400/15 text-cyan-700">
                        <i className={`${item.icon} text-lg`} />
                      </div>
                      <span className="text-[16px] font-semibold text-[#12133c]">
                        {pick(lang, {
                          gr: item.titleGR,
                          en: item.titleEN,
                          ru:
                            item.key === "vision"
                              ? "Наш подход"
                              : item.key === "mission"
                              ? "Наша цель"
                              : "Что мы делаем",
                        })}
                      </span>
                    </div>

                    <i
                      className={`fa-solid ${ isOpen ? "fa-minus" : "fa-plus" } text-slate-500`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[900px] pb-5" : "max-h-0"}`}
                  >
                    <p className="px-5 text-sm text-slate-700 leading-relaxed whitespace-pre-line border-t border-slate-200/70 pt-4">
                      {pick(lang, {
                        gr: item.textGR,
                        en: item.textEN,
                        ru: item.textRU,
                      })}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
