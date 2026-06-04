import { pick, type Lang } from "@/lib/i18n";

interface HeroProps {
  lang: Lang;
}

interface CounterStatProps {
  target: number;
  suffix?: string;
  label: string;
  className?: string;
}

function CounterStat({
  target,
  suffix = "",
  label,
  className = "",
}: CounterStatProps) {
  return (
    <div
      className={`rounded-[6px] border border-white/15 bg-white/6 px-3 py-3 backdrop-blur-sm shadow-[0_10px_28px_rgba(0,0,0,0.35)] sm:px-5 sm:py-4 ${className}`}
    >
      <p className="text-3xl font-semibold text-cyan-300">
        {target}
        {suffix}
      </p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-slate-200/85 sm:text-[11px] sm:tracking-[0.18em]">
        {label}
      </p>
    </div>
  );
}

export default function Hero({ lang }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#12133c] text-slate-50">
      {/* Background image */}
      <div className="absolute inset-0">
        <picture className="absolute inset-0 block">
          <source
            media="(max-width: 640px)"
            srcSet="/modern-waveshaped-building-facade-900.webp"
          />
          <source
            media="(max-width: 1024px)"
            srcSet="/modern-waveshaped-building-facade-1400.webp"
          />
          <img
            src="/modern-waveshaped-building-facade-2400.webp"
            alt=""
            aria-hidden="true"
            width={900}
            height={373}
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            className="h-full w-full object-cover"
          />
        </picture>
        {/* Dark overlay για να δένει με το header */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#12133c]/94 via-[#12133c]/90 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-14 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          {/* LEFT – text & CTAs */}
          <div className="space-y-6">
            <div className="space-y-4 max-w-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                {lang === "gr" ? (
                  <>
                    Το κτίριό σας σωστά οργανωμένο, με{" "}
                    <span className="text-cyan-300">καθαρά οικονομικά</span>{" "}
                    και άμεση υποστήριξη.
                  </>
                ) : lang === "ru" ? (
                  <>
                    Ваш дом в порядке:{" "}
                    <span className="text-cyan-300">понятные расходы</span> и
                    быстрая поддержка.
                  </>
                ) : (
                  <>
                    A well-run building, with{" "}
                    <span className="text-cyan-300">clear accounts</span> and
                    support when you need it.
                  </>
                )}
              </h1>

              <p className="text-sm sm:text-base text-slate-200/85">
                {pick(lang, {
                  gr: "Αναλαμβάνουμε κοινόχρηστα, εισπράξεις, συντηρήσεις, βλάβες και καθημερινή επικοινωνία με Επιτροπές, ιδιοκτήτες και ενοίκους.",
                  en: "We take care of common expenses, collections, maintenance, repairs and day-to-day communication with Committees, owners and tenants.",
                  ru: "Мы ведём общие расходы, сбор взносов, обслуживание, заявки на ремонт и ежедневную связь с комитетами, владельцами и жильцами.",
                })}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#offer"
                className="inline-flex items-center justify-center rounded-[6px] bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#12133c] shadow-md hover:bg-cyan-300 transition"
              >
                {pick(lang, {
                  gr: "Αίτηση προσφοράς",
                  en: "Request a quote",
                  ru: "Запросить расчёт",
                })}
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-[6px] border border-cyan-200/60 bg-transparent px-5 py-2.5 text-sm font-semibold text-slate-50 hover:border-cyan-300 hover:text-cyan-100 transition"
              >
                {pick(lang, {
                  gr: "Επικοινωνία",
                  en: "Contact us",
                  ru: "Связаться",
                })}
              </a>
            </div>
          </div>

          {/* RIGHT – animated stats */}
          <div className="w-full max-w-xl space-y-4 lg:justify-self-end lg:space-y-5">
            <div className="max-w-full text-sm text-slate-200/85">
              {lang === "gr" ? (
                <p>
                  Από πολυκατοικίες μέχρι οικιστικά συγκροτήματα, η ομάδα μας
                  κρατά τις διαδικασίες καθαρές και την ανταπόκριση άμεση.
                </p>
              ) : lang === "ru" ? (
                <p>
                  Мы работаем с многоквартирными домами и жилыми комплексами,
                  чтобы процессы были понятными, а реакция на вопросы — быстрой.
                </p>
              ) : (
                <p>
                  From apartment buildings to residential complexes, our team
                  keeps procedures clear and response times fast.
                </p>
              )}
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:grid-cols-1">
              <CounterStat
                target={150}
                suffix="+"
                label={
                  pick(lang, {
                    gr: "ΚΤΙΡΙΑ ΥΠΟ ΔΙΑΧΕΙΡΙΣΗ",
                    en: "BUILDINGS UNDER MANAGEMENT",
                    ru: "ЗДАНИЙ В УПРАВЛЕНИИ",
                  })
                }
              />
              <CounterStat
                target={1700}
                suffix="+"
                label={
                  pick(lang, {
                    gr: "ΔΙΑΜΕΡΙΣΜΑΤΑ & ΜΟΝΑΔΕΣ",
                    en: "APARTMENTS & UNITS",
                    ru: "КВАРТИР И ПОМЕЩЕНИЙ",
                  })
                }
              />
              <CounterStat
                target={12}
                label={
                  pick(lang, {
                    gr: "ΑΤΟΜΑ ΣΤΗΝ ΟΜΑΔΑ ΜΑΣ",
                    en: "PEOPLE IN OUR TEAM",
                    ru: "ЧЕЛОВЕК В КОМАНДЕ",
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
