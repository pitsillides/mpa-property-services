import { pick, type Lang } from "@/lib/i18n";

interface StatsSectionProps {
  lang: Lang;
}

export default function StatsSection({ lang }: StatsSectionProps) {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-slate-50 py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="text-center border border-white/10 rounded-[6px] py-5 bg-white/5">
            <p className="text-3xl sm:text-4xl font-semibold">150+</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-slate-200">
              {pick(lang, {
                gr: "ΚΤΙΡΙΑ ΥΠΟ ΔΙΑΧΕΙΡΙΣΗ",
                en: "BUILDINGS UNDER MANAGEMENT",
                ru: "ЗДАНИЙ В УПРАВЛЕНИИ",
              })}
            </p>
          </div>

          <div className="text-center border border-white/10 rounded-[6px] py-5 bg-white/5">
            <p className="text-3xl sm:text-4xl font-semibold">1700+</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-slate-200">
              {pick(lang, {
                gr: "ΔΙΑΜΕΡΙΣΜΑΤΑ & ΜΟΝΑΔΕΣ",
                en: "APARTMENTS & UNITS",
                ru: "КВАРТИР И ПОМЕЩЕНИЙ",
              })}
            </p>
          </div>

          <div className="text-center border border-white/10 rounded-[6px] py-5 bg-white/5">
            <p className="text-3xl sm:text-4xl font-semibold">12</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-slate-200">
              {pick(lang, {
                gr: "ΑΤΟΜΑ ΣΤΗΝ ΟΜΑΔΑ",
                en: "PEOPLE IN OUR TEAM",
                ru: "ЧЕЛОВЕК В КОМАНДЕ",
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
