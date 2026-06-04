"use client";

import { useState } from "react";
import { pick, type Lang } from "@/lib/i18n";

interface FAQsProps {
  lang: Lang;
}

interface FAQItem {
  questionGR: string;
  questionEN: string;
  questionRU: string;
  answerGR: string;
  answerEN: string;
  answerRU: string;
}

const faqs: FAQItem[] = [
  {
    questionGR: "Τι σημαίνει κοινόκτητη οικοδομή;",
    questionEN: "What is a jointly owned building?",
    questionRU: "Что такое здание в совместной собственности?",
    answerGR: `(α) Κοινόκτητες θεωρούνται οι οικοδομές που αποτελούνται από τουλάχιστον 5 μονάδες. Μονάδα είναι τμήμα της οικοδομής που μπορεί να χρησιμοποιηθεί ανεξάρτητα, ως πλήρης, χωριστή και αυτοτελής ιδιοκτησία.

(β) Οικοδομές που αποτελούνται από δύο (2) μέχρι τέσσερις (4) μονάδες μπορούν να θεωρηθούν, κατά την κρίση του Διευθυντή, κοινόκτητες, ύστερα από αίτηση των ενδιαφερομένων.

(γ) Κοινόκτητες οικοδομές μπορούν να θεωρηθούν και ξεχωριστά οικοδομήματα που βρίσκονται πάνω σε ένα ακίνητο έστω και αν δεν χωρίζονται οριζόντια.`,
    answerEN: `(a) A building with at least 5 units is considered a jointly owned building. A unit is a part of the building that can be used independently as a complete, separate and self-contained property.

(b) Buildings with two (2) to four (4) units may, at the Director’s discretion, be treated as jointly owned after an application by the interested parties.

(c) Separate buildings on the same plot may also be treated as jointly owned, even if they are not divided horizontally.`,
    answerRU: `(а) Зданием в совместной собственности считается здание, состоящее как минимум из 5 единиц. Единица — это часть здания, которая может использоваться самостоятельно как отдельная и полноценная собственность.

(б) Здания с двумя (2) до четырёх (4) единиц также могут быть признаны зданиями в совместной собственности по решению Директора, после заявления заинтересованных сторон.

(в) Отдельные строения на одном участке также могут считаться зданиями в совместной собственности, даже если они не разделены горизонтально.`,
  },
  {
    questionGR: "Πώς η εταιρεία σας κατανέμει τα κοινόχρηστα έξοδα;",
    questionEN: "How are common expenses allocated?",
    questionRU: "Как распределяются общие расходы между владельцами?",
    answerGR: `Οι ιδιοκτήτες καταβάλλουν στη Διαχειριστική Επιτροπή το ποσό που αντιστοιχεί στο μερίδιό τους, σύμφωνα με τον νόμο και τους κανονισμούς της κοινόκτητης οικοδομής.

Το μερίδιο στην κοινόκτητη ιδιοκτησία ήταν μέχρι πρόσφατα, κατά νόμο, ακαθόριστο. Από το 1993 ισχύει ότι:

(α) Για υφιστάμενες οικοδομές (με άδεια οικοδομής πριν το 1993), όπου το μερίδιο δεν συμφωνήθηκε μεταξύ των ιδιοκτητών, αυτό καθορίζεται με βάση την αναλογία που είχαν οι αξίες των διαμερισμάτων στις τιμές της 1.1.1980.

(β) Για νέες οικοδομές (με άδεια οικοδομής μετά το 1993) το μερίδιο καθορίζεται από τον ιδιοκτήτη του ακινήτου, έτσι ώστε κάθε αγοραστής να γνωρίζει εκ των προτέρων τι μερίδιο στην κοινόκτητη οικοδομή αγοράζει.`,
    answerEN: `Owners contribute to common expenses according to their share in the jointly owned property, as defined by law and the relevant regulations.

Since 1993, the share is determined as follows:

(a) For existing buildings with a building permit before 1993, where no share was agreed between owners, the share is calculated according to the proportion of the units’ values as at 1.1.1980.

(b) For new buildings with a building permit after 1993, the share is defined by the property owner so that each buyer knows in advance the share they are purchasing in the jointly owned property.`,
    answerRU: `Владельцы оплачивают общие расходы согласно своей доле в совместной собственности, как это предусмотрено законом и правилами здания.

С 1993 года доля определяется следующим образом:

(а) Для существующих зданий с разрешением на строительство до 1993 года, если доля не была согласована между владельцами, она рассчитывается по соотношению стоимости единиц на 1.1.1980.

(б) Для новых зданий с разрешением на строительство после 1993 года доля определяется владельцем недвижимости заранее, чтобы покупатель знал, какую долю приобретает.`,
  },
  {
    questionGR: "Πώς ενημερωνόμαστε για τις κοινόχρηστες δαπάνες που γίνονται κάθε μήνα;",
    questionEN: "How are we informed about monthly common expenses?",
    questionRU: "Как мы узнаём о ежемесячных общих расходах?",
    answerGR: `Κάθε μήνα αποστέλλεται αναλυτική κατάσταση των κοινόχρηστων εσόδων και εξόδων. Σε αυτή φαίνονται αναλυτικά τα έσοδα (αν υπάρχουν), τα έξοδα και ο βαθμός ανταπόκρισης των ιδιοκτητών στις μηνιαίες υποχρεώσεις τους.`,
    answerEN: `Every month, a detailed statement of common income and expenses is sent out. It shows all income (if any), all expenses and how owners are responding to their monthly obligations.`,
    answerRU: `Каждый месяц отправляется подробный отчёт по общим доходам и расходам. В нём видны все доходы, если они есть, расходы и состояние оплат владельцев по их ежемесячным обязательствам.`,
  },
  {
    questionGR:
      "Αφού τα κοινόχρηστα έξοδα είναι μεταβλητά κάθε μήνα, πώς η εταιρεία σας μας χρεώνει ένα σταθερό ποσό κάθε μήνα;",
    questionEN:
      "If expenses change every month, how can there be a fixed monthly charge?",
    questionRU:
      "Если расходы меняются каждый месяц, как может быть фиксированная сумма?",
    answerGR: `Στην αρχή της συνεργασίας ζητούμε αναλυτική κατάσταση των πάγιων εξόδων της κοινόκτητης οικοδομής, όπως ηλεκτρισμό, νερό, συντήρηση ανελκυστήρα και καθαριότητα. Το σύνολο κατανέμεται σε 12 μηνιαίες πληρωμές, ώστε να υπάρχει ένα προβλέψιμο ποσό κάθε μήνα.`,
    answerEN: `At the start of the cooperation, we request a breakdown of the building’s fixed running costs, such as electricity, water, lift maintenance and cleaning. The total is spread over 12 monthly payments, so there is a predictable amount each month.`,
    answerRU: `В начале сотрудничества мы запрашиваем разбивку постоянных расходов здания, таких как электричество, вода, обслуживание лифта и уборка. Общая сумма распределяется на 12 ежемесячных платежей, чтобы каждый месяц была прогнозируемая сумма.`,
  },
  {
    questionGR: "Τι γίνεται αν κάποιος δεν πληρώνει κοινόχρηστα;",
    questionEN: "What happens if someone does not pay common expenses?",
    questionRU: "Что происходит, если кто-то не оплачивает общие расходы?",
    answerGR: `Αρχικά προσπαθούμε να επικοινωνήσουμε με τον ιδιοκτήτη και να βρεθεί τρόπος τακτοποίησης του οφειλόμενου ποσού.

Αν δεν υπάρξει αποτέλεσμα, τότε η Διαχειριστική Επιτροπή οφείλει να καλύψει τις τρέχουσες ανάγκες του κτιρίου και στη συνέχεια να κινηθεί νομικά εναντίον του ιδιοκτήτη που δεν πληρώνει, σύμφωνα με τη νομοθεσία.`,
    answerEN: `We first try to contact the owner and find a way to settle the outstanding amount.

If this is not successful, the Management Committee must cover the building’s needs and then proceed with legal action against the non-paying owner, in accordance with the law.`,
    answerRU: `Сначала мы стараемся связаться с владельцем и найти практичный способ урегулировать задолженность.

Если результата нет, Управляющий комитет должен покрыть текущие потребности здания, а затем действовать юридически в отношении владельца, который не платит, в соответствии с законом.`,
  },
  {
    questionGR: "Ποιοι χώροι συμπεριλαμβάνονται στον όρο κοινόχρηστοι χώροι;",
    questionEN: "Which areas are considered common areas?",
    questionRU: "Какие зоны считаются общими?",
    answerGR: `Κοινόχρηστοι είναι οι χώροι της κοινόκτητης οικοδομής που χρησιμοποιούνται από όλους, όπως η είσοδος, οι διάδρομοι, τα κλιμακοστάσια, ο ανελκυστήρας, η οροφή και άλλοι αντίστοιχοι χώροι.`,
    answerEN: `Common areas are the parts of the building intended for shared use, such as the entrance, lobbies, staircases, lift, roof and similar areas.`,
    answerRU: `Общие зоны — это части здания, предназначенные для совместного использования: вход, коридоры, лестницы, лифт, крыша и другие подобные пространства.`,
  },
  {
    questionGR: "Είναι υποχρεωτική η ασφάλιση της οικοδομής;",
    questionEN: "Is building insurance compulsory?",
    questionRU: "Обязательно ли страхование здания?",
    answerGR: `Με βάση τον τροποποιητικό Νόμο 6(Ι)/1993, που εντάχθηκε στον Νόμο Κεφ. 224 ως ΜΕΡΟΣ ΙΙΑ:

(α) είναι υποχρεωτική η ασφάλιση της κοινόκτητης οικοδομής για ποσό που αντιστοιχεί στην αξία αντικατάστασής της·

(β) προβλέπονται οι ενέργειες που πρέπει να γίνουν σε περίπτωση μερικής ή ολικής καταστροφής της.`,
    answerEN: `Under amending Law 6(I)/1993, incorporated into Law Cap. 224 as PART IIA:

(a) insurance of the common-hold building is compulsory, for an amount corresponding to its replacement value; and

(b) specific actions are provided for in the event of partial or total destruction of the building.`,
    answerRU: `Согласно поправочному Закону 6(I)/1993, включённому в Закон Cap. 224 как ЧАСТЬ IIA:

(а) страхование совместно принадлежащего здания является обязательным на сумму, соответствующую стоимости его восстановления;

(б) предусмотрены действия, которые необходимо выполнить в случае частичного или полного разрушения здания.`,
  },
];

export default function FAQsSection({ lang }: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faqs"
      className="relative py-12 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-[11px] tracking-[0.25em] text-cyan-700 uppercase font-semibold">
            FAQs
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[#12133c]">
            {pick(lang, {
              gr: "Συχνές ερωτήσεις για κοινόκτητες οικοδομές & κοινόχρηστα",
              en: "Frequently asked questions about jointly owned buildings & common expenses",
              ru: "Частые вопросы о зданиях в совместной собственности и общих расходах",
            })}
          </h2>
          <div className="mt-3 h-[3px] w-24 bg-cyan-400 mx-auto rounded-[6px]" />
          <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
            {pick(lang, {
              gr: "Απαντήσεις σε βασικές απορίες γύρω από τη νομοθεσία, τα κοινόχρηστα έξοδα και τη λειτουργία κοινόκτητων οικοδομών.",
              en: "Answers to key questions about legislation, common expenses and how jointly owned buildings operate.",
              ru: "Ответы на основные вопросы о законодательстве, общих расходах и работе зданий в совместной собственности.",
            })}
          </p>
        </div>

        {/* Accordion list – glassy cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[6px] bg-white/70 backdrop-blur-xl border border-slate-200 shadow-[0_16px_45px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(15,23,42,0.20)]"
              >
                {/* light sweep */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-20 left-0 h-24 w-full bg-gradient-to-r from-white/25 via-white/10 to-transparent rotate-[-8deg]" />
                </div>

                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="relative z-10 flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6"
                >
                  <div className="flex items-center gap-3 text-left">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[6px] bg-cyan-400/15">
                      <i className="fa-regular fa-circle-question text-cyan-500 text-sm" />
                    </div>
                    <span className="text-sm sm:text-[15px] font-semibold text-[#12133c]">
                      {pick(lang, {
                        gr: faq.questionGR,
                        en: faq.questionEN,
                        ru: faq.questionRU,
                      })}
                    </span>
                  </div>
                  <i
                    className={`fa-solid ${ isOpen ? "fa-chevron-up" : "fa-chevron-down" } text-slate-500 text-xs`}
                  />
                </button>

                <div
                  className={`relative z-10 overflow-hidden px-5 sm:px-6 transition-all duration-300 ${ isOpen ? "max-h-[800px] pb-4 opacity-100" : "max-h-0 pb-0 opacity-0" }`}
                >
                  <p className="whitespace-pre-line text-sm text-slate-700 leading-relaxed border-t border-slate-200/70 pt-3">
                    {pick(lang, {
                      gr: faq.answerGR,
                      en: faq.answerEN,
                      ru: faq.answerRU,
                    })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
