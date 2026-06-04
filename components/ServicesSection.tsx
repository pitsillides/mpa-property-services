"use client";

import { pick, type Lang } from "@/lib/i18n";

interface ServicesProps {
  lang: Lang;
}

export default function ServicesSection({ lang }: ServicesProps) {
  const services = [
    {
      icon: "fa-solid fa-building",
      grTitle: "Καθημερινή λειτουργία",
      enTitle: "Daily operations",
      ruTitle: "Ежедневная работа здания",
      grText:
        "Οργάνωση της καθημερινής λειτουργίας, επικοινωνία με ιδιοκτήτες και ενοίκους, διαχείριση θεμάτων κοινοχρήστων και εφαρμογή αποφάσεων Γενικών Συνελεύσεων.",
      enText:
        "Coordination of daily operations, communication with owners and tenants, handling of common-area issues and implementation of General Assembly decisions.",
      ruText:
        "Ежедневная координация, связь с владельцами и жильцами, вопросы общих зон и выполнение решений общих собраний.",
    },
    {
      icon: "fa-solid fa-coins",
      grTitle: "Οικονομική διαχείριση & κοινόχρηστα",
      enTitle: "Financial administration & common expenses",
      ruTitle: "Финансы и общие расходы",
      grText:
        "Έκδοση και αποστολή κοινοχρήστων, παρακολούθηση εισπράξεων, διαφάνεια στα έξοδα και αναλυτικές οικονομικές καταστάσεις προς την Επιτροπή και τους ιδιοκτήτες.",
      enText:
        "Issuing and sending common expense statements, monitoring collections, full transparency of costs and detailed financial reporting to Committees and owners.",
      ruText:
        "Подготовка и отправка счетов по общим расходам, контроль оплат, прозрачность затрат и понятные финансовые отчёты для комитета и владельцев.",
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      grTitle: "Συντήρηση & τεχνικές εργασίες",
      enTitle: "Maintenance & technical works",
      ruTitle: "Обслуживание и технические работы",
      grText:
        "Προγραμματισμός προληπτικής συντήρησης, διαχείριση βλαβών, συντονισμός συνεργείων και επίβλεψη εργασιών για την καλή κατάσταση του κτιρίου.",
      enText:
        "Preventive maintenance planning, incident handling, coordination of contractors and supervision of works to keep the building in optimal condition.",
      ruText:
        "Плановое обслуживание, обработка заявок на ремонт, координация подрядчиков и контроль работ, чтобы здание оставалось в хорошем состоянии.",
    },
    {
      icon: "fa-solid fa-clipboard-list",
      grTitle: "Συντονισμός έργων & βελτιώσεων",
      enTitle: "Project & improvement coordination",
      ruTitle: "Работы по улучшению здания",
      grText:
        "Οργάνωση εργασιών αναβάθμισης, προτάσεις βελτιώσεων σε κοινόχρηστους χώρους και υποστήριξη Επιτροπών σε διαδικασίες λήψης αποφάσεων.",
      enText:
        "Organisation of upgrade projects, improvement proposals for common areas and support to Committees in the decision-making process.",
      ruText:
        "Организация работ по обновлению общих зон, предложения по улучшениям и помощь комитетам при принятии решений.",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0b0c23] py-12 sm:py-14"
    >
      <div className="relative mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-[11px] font-semibold tracking-[0.25em] text-cyan-200 uppercase">
            {pick(lang, { gr: "ΥΠΗΡΕΣΙΕΣ", en: "SERVICES", ru: "УСЛУГИ" })}
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
            {pick(lang, {
              gr: "Οι υπηρεσίες που κρατούν το κτίριο οργανωμένο",
              en: "Services that keep your building running smoothly",
              ru: "Услуги, которые помогают зданию работать стабильно",
            })}
          </h2>
          <p className="mt-3 text-sm sm:text-[15px] text-slate-200/80 max-w-2xl mx-auto">
            {pick(lang, {
              gr: "Καλύπτουμε την καθημερινή λειτουργία, τα οικονομικά, τις τεχνικές ανάγκες και τα έργα βελτίωσης, με καθαρές διαδικασίες και τακτική ενημέρωση.",
              en: "We cover daily operations, accounts, technical needs and improvement works, with clear processes and regular updates.",
              ru: "Мы берём на себя ежедневные вопросы, финансы, технические задачи и улучшения, объясняя каждый шаг простым языком.",
            })}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.enTitle}
              className="group relative overflow-hidden rounded-[6px] border border-white/12 bg-white/6 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.35)] px-5 py-5 sm:px-6 sm:py-6 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* subtle light sweep */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-24 left-0 h-40 w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent rotate-[-6deg]" />
              </div>

              <div className="relative z-10 flex gap-4">
                {/* Icon circle */}
                <div className="mt-1 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[6px] bg-cyan-400/15">
                  <i
                    className={`${service.icon} text-cyan-300 text-lg`}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2 text-sm">
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-slate-50">
                    {pick(lang, {
                      gr: service.grTitle,
                      en: service.enTitle,
                      ru: service.ruTitle,
                    })}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] leading-relaxed text-slate-200/85">
                    {pick(lang, {
                      gr: service.grText,
                      en: service.enText,
                      ru: service.ruText,
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
