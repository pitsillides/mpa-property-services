import { pick, type Lang } from "@/lib/i18n";

interface WhyUsSectionProps {
  lang: Lang;
}

export default function WhyUsSection({ lang }: WhyUsSectionProps) {
  return (
    <section id="why-us" className="bg-slate-900 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-[1.1fr,1fr] items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300">
            {pick(lang, {
              gr: "ΓΙΑΤΙ ΝΑ ΜΑΣ ΕΠΙΛΕΞΕΤΕ",
              en: "WHY CHOOSE US",
              ru: "ПОЧЕМУ МЫ",
            })}
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">
            {pick(lang, {
              gr: "Εμπειρία, διαφάνεια και προσωπική επαφή",
              en: "Experience, transparency & personal contact",
              ru: "Опыт, прозрачность и личный контакт",
            })}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-200/90">
            {pick(lang, {
              gr: "Κάθε κτίριο έχει τις δικές του ανάγκες. Εμείς φροντίζουμε να υπάρχουν ξεκάθαρες διαδικασίες, σωστή ενημέρωση και άνθρωποι που απαντούν.",
              en: "Every building has its own needs. We make sure there are clear processes, proper updates and people who actually respond.",
              ru: "У каждого здания свои потребности. Мы выстраиваем понятные процессы, даём своевременные обновления и остаёмся на связи.",
            })}
          </p>
        </div>

        <div className="space-y-4 text-sm">
          <div className="rounded-[6px] bg-slate-800/70 border border-slate-700 px-4 py-3">
            <p className="text-xs font-semibold text-cyan-300 mb-1">
              {pick(lang, {
                gr: "ΠΡΟΣΩΠΙΚΗ ΕΞΥΠΗΡΕΤΗΣΗ",
                en: "PERSONAL SERVICE",
                ru: "ЛИЧНЫЙ ПОДХОД",
              })}
            </p>
            <p className="text-slate-100">
              {pick(lang, {
                gr: "Γνωρίζουμε τους ιδιοκτήτες και τα κτίρια που εξυπηρετούμε. Η επικοινωνία παραμένει προσωπική.",
                en: "We know the owners and the buildings we serve. Communication stays personal.",
                ru: "Мы знаем владельцев и здания, с которыми работаем. Общение остаётся личным.",
              })}
            </p>
          </div>

          <div className="rounded-[6px] bg-slate-800/70 border border-slate-700 px-4 py-3">
            <p className="text-xs font-semibold text-cyan-300 mb-1">
              {pick(lang, {
                gr: "ΔΙΑΦΑΝΕΙΑ ΣΤΑ ΟΙΚΟΝΟΜΙΚΑ",
                en: "FINANCIAL TRANSPARENCY",
                ru: "ПРОЗРАЧНЫЕ ФИНАНСЫ",
              })}
            </p>
            <p className="text-slate-100">
              {pick(lang, {
                gr: "Σαφείς καταστάσεις κοινοχρήστων, πρόσβαση στα στοιχεία και ξεκάθαρη ενημέρωση.",
                en: "Clear common expense statements, access to information and straightforward communication.",
                ru: "Понятные отчёты по общим расходам, доступ к данным и ясные обновления.",
              })}
            </p>
          </div>

          <div className="rounded-[6px] bg-slate-800/70 border border-slate-700 px-4 py-3">
            <p className="text-xs font-semibold text-cyan-300 mb-1">
              {pick(lang, { gr: "ΣΥΝΕΠΕΙΑ", en: "CONSISTENCY", ru: "НАДЁЖНОСТЬ" })}
            </p>
            <p className="text-slate-100">
              {pick(lang, {
                gr: "Συνεχής παρακολούθηση, σταθερή ομάδα και οργανωμένες διαδικασίες.",
                en: "Continuous follow-up, a stable team and well-organised internal processes.",
                ru: "Постоянное наблюдение, стабильная команда и хорошо организованные процессы.",
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
