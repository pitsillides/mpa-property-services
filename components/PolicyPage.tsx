"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import OpenInBrowser from "@/components/OpenInBrowser";
import { htmlLangByLang, pick, type Lang, type LocalizedText } from "@/lib/i18n";

type PolicyKind = "privacy" | "cookies";

type PolicySection = {
  title: LocalizedText;
  body: LocalizedText;
};

interface PolicyPageProps {
  kind: PolicyKind;
}

const updatedAt: LocalizedText = {
  gr: "Τελευταία ενημέρωση: 4 Ιουνίου 2026",
  en: "Last updated: 4 June 2026",
  ru: "Последнее обновление: 4 июня 2026",
};

const policyContent: Record<
  PolicyKind,
  {
    eyebrow: LocalizedText;
    title: LocalizedText;
    intro: LocalizedText;
    sections: PolicySection[];
  }
> = {
  privacy: {
    eyebrow: {
      gr: "ΠΟΛΙΤΙΚΗ ΑΠΟΡΡΗΤΟΥ",
      en: "PRIVACY POLICY",
      ru: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ",
    },
    title: {
      gr: "Πώς χρησιμοποιούμε τα στοιχεία που μας στέλνετε",
      en: "How we use the details you send us",
      ru: "Как мы используем данные, которые вы нам отправляете",
    },
    intro: {
      gr: "Η MPA Property Services Ltd σέβεται την ιδιωτικότητά σας. Η πολιτική αυτή εξηγεί με απλό τρόπο ποια στοιχεία συλλέγουμε μέσω της ιστοσελίδας και για ποιο σκοπό.",
      en: "MPA Property Services Ltd respects your privacy. This policy explains, in plain language, what details we collect through the website and why.",
      ru: "MPA Property Services Ltd уважает вашу конфиденциальность. В этой политике простым языком объясняется, какие данные мы собираем через сайт и зачем.",
    },
    sections: [
      {
        title: {
          gr: "Ποια στοιχεία συλλέγουμε",
          en: "What we collect",
          ru: "Какие данные мы собираем",
        },
        body: {
          gr: "Όταν συμπληρώνετε φόρμα επικοινωνίας ή αίτηση προσφοράς, μπορεί να μας στείλετε όνομα, τηλέφωνο, email, περιοχή, στοιχεία κτιρίου και το μήνυμά σας.",
          en: "When you complete a contact form or quote request, you may send us your name, phone number, email, area, building details and message.",
          ru: "Когда вы заполняете форму связи или запрос расчёта, вы можете отправить нам имя, телефон, email, район, сведения о здании и сообщение.",
        },
      },
      {
        title: {
          gr: "Γιατί τα χρησιμοποιούμε",
          en: "Why we use them",
          ru: "Зачем мы используем данные",
        },
        body: {
          gr: "Χρησιμοποιούμε τα στοιχεία μόνο για να απαντήσουμε στο αίτημά σας, να επικοινωνήσουμε μαζί σας και να αξιολογήσουμε τις ανάγκες του κτιρίου ή της ιδιοκτησίας σας.",
          en: "We use these details only to respond to your request, contact you and assess the needs of your building or property.",
          ru: "Мы используем эти данные только для ответа на ваш запрос, связи с вами и оценки потребностей вашего здания или объекта.",
        },
      },
      {
        title: {
          gr: "Με ποιον μοιραζόμαστε στοιχεία",
          en: "Who we share details with",
          ru: "Кому мы можем передавать данные",
        },
        body: {
          gr: "Δεν πουλάμε τα στοιχεία σας. Μπορεί να τα μοιραστούμε μόνο όταν χρειάζεται για να απαντήσουμε στο αίτημά σας, για νόμιμη υποχρέωση ή με συνεργάτες που μας υποστηρίζουν επαγγελματικά.",
          en: "We do not sell your details. We may share them only where needed to respond to your request, meet a legal obligation or work with professional partners supporting our services.",
          ru: "Мы не продаём ваши данные. Мы можем передать их только если это нужно для ответа на ваш запрос, выполнения законной обязанности или работы с профессиональными партнёрами, которые поддерживают наши услуги.",
        },
      },
      {
        title: {
          gr: "Πόσο καιρό τα κρατάμε",
          en: "How long we keep them",
          ru: "Как долго мы храним данные",
        },
        body: {
          gr: "Κρατάμε τα στοιχεία μόνο για όσο χρειάζεται για τον σκοπό για τον οποίο στάλθηκαν ή για όσο απαιτείται από νόμιμες, λογιστικές ή επαγγελματικές υποχρεώσεις.",
          en: "We keep details only for as long as needed for the purpose for which they were sent, or as required by legal, accounting or professional obligations.",
          ru: "Мы храним данные только столько, сколько нужно для цели, с которой они были отправлены, либо сколько требуется по законным, бухгалтерским или профессиональным обязанностям.",
        },
      },
      {
        title: {
          gr: "Τα δικαιώματά σας",
          en: "Your rights",
          ru: "Ваши права",
        },
        body: {
          gr: "Μπορείτε να ζητήσετε πρόσβαση, διόρθωση ή διαγραφή των προσωπικών σας στοιχείων, όπου αυτό επιτρέπεται από τη νομοθεσία. Για σχετικά αιτήματα, επικοινωνήστε στο services@mpa.cy.",
          en: "You may request access, correction or deletion of your personal details where permitted by law. For privacy requests, contact services@mpa.cy.",
          ru: "Вы можете запросить доступ, исправление или удаление своих персональных данных, если это допускается законом. По таким вопросам пишите на services@mpa.cy.",
        },
      },
    ],
  },
  cookies: {
    eyebrow: {
      gr: "ΠΟΛΙΤΙΚΗ COOKIES",
      en: "COOKIE POLICY",
      ru: "ПОЛИТИКА COOKIES",
    },
    title: {
      gr: "Πώς χρησιμοποιούνται τα cookies στην ιστοσελίδα",
      en: "How cookies are used on this website",
      ru: "Как cookies используются на этом сайте",
    },
    intro: {
      gr: "Τα cookies βοηθούν την ιστοσελίδα να λειτουργεί σωστά και, όταν δώσετε συγκατάθεση, να κατανοούμε πώς χρησιμοποιείται ώστε να τη βελτιώνουμε.",
      en: "Cookies help the website work properly and, when you give consent, help us understand how it is used so we can improve it.",
      ru: "Cookies помогают сайту работать корректно, а при вашем согласии помогают нам понять, как используется сайт, чтобы улучшать его.",
    },
    sections: [
      {
        title: {
          gr: "Απαραίτητα cookies",
          en: "Strictly necessary cookies",
          ru: "Необходимые cookies",
        },
        body: {
          gr: "Χρησιμοποιούνται για βασικές λειτουργίες, όπως η αποθήκευση της επιλογής σας στο banner cookies. Δεν μπορούν να απενεργοποιηθούν από την ιστοσελίδα.",
          en: "These support core functions, such as remembering your cookie banner choice. They cannot be disabled by the website.",
          ru: "Они нужны для базовых функций, например для запоминания вашего выбора в cookie-баннере. Сайт не может их отключить.",
        },
      },
      {
        title: {
          gr: "Στατιστικά cookies",
          en: "Analytics cookies",
          ru: "Аналитические cookies",
        },
        body: {
          gr: "Ενεργοποιούνται μόνο αν τα αποδεχτείτε. Μας βοηθούν να κατανοούμε τη χρήση της ιστοσελίδας και να βελτιώνουμε το περιεχόμενο και την εμπειρία.",
          en: "These are enabled only if you accept them. They help us understand website usage and improve content and experience.",
          ru: "Они включаются только если вы их принимаете. Они помогают нам понимать использование сайта и улучшать содержание и удобство.",
        },
      },
      {
        title: {
          gr: "Cookies προώθησης",
          en: "Marketing cookies",
          ru: "Маркетинговые cookies",
        },
        body: {
          gr: "Ενεργοποιούνται μόνο με τη συγκατάθεσή σας και μπορούν να χρησιμοποιηθούν για πιο σχετική επικοινωνία ή προβολή.",
          en: "These are enabled only with your consent and may be used for more relevant communication or promotion.",
          ru: "Они включаются только с вашего согласия и могут использоваться для более релевантной коммуникации или продвижения.",
        },
      },
      {
        title: {
          gr: "Πώς αλλάζετε επιλογές",
          en: "How to change choices",
          ru: "Как изменить выбор",
        },
        body: {
          gr: "Μπορείτε να διαγράψετε την επιλογή cookies από τις ρυθμίσεις του browser σας και να εμφανιστεί ξανά το banner. Μπορείτε επίσης να μπλοκάρετε cookies από τον browser.",
          en: "You can delete your cookie choice in your browser settings so the banner appears again. You can also block cookies through your browser.",
          ru: "Вы можете удалить свой выбор cookies в настройках браузера, чтобы баннер появился снова. Также cookies можно блокировать через браузер.",
        },
      },
    ],
  },
};

export default function PolicyPage({ kind }: PolicyPageProps) {
  const [lang, setLang] = useState<Lang>("gr");
  const content = policyContent[kind];

  useEffect(() => {
    document.documentElement.lang = htmlLangByLang[lang];
  }, [lang]);

  return (
    <main
      id="top"
      className="min-h-screen w-full max-w-full overflow-x-hidden bg-slate-50 text-slate-900"
    >
      <OpenInBrowser lang={lang} />
      <Header lang={lang} setLang={setLang} />

      <section className="bg-[#12133c] px-4 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
            {pick(lang, content.eyebrow)}
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            {pick(lang, content.title)}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-200/85 sm:text-base">
            {pick(lang, content.intro)}
          </p>
          <p className="mt-4 text-xs text-slate-300">{pick(lang, updatedAt)}</p>
        </div>
      </section>

      <section className="px-4 py-10 sm:py-12">
        <div className="mx-auto grid max-w-4xl gap-4">
          {content.sections.map((section) => (
            <article
              key={section.title.en}
              className="rounded-[6px] border border-slate-200 bg-white p-5 shadow-[0_14px_35px_rgba(15,23,42,0.08)] sm:p-6"
            >
              <h2 className="text-lg font-semibold text-[#12133c]">
                {pick(lang, section.title)}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {pick(lang, section.body)}
              </p>
            </article>
          ))}

          <div className="rounded-[6px] border border-cyan-200 bg-cyan-50 p-5 text-sm leading-relaxed text-slate-700">
            {pick(lang, {
              gr: "Για οποιαδήποτε απορία σχετικά με προσωπικά δεδομένα ή cookies, επικοινωνήστε στο services@mpa.cy.",
              en: "For any question about personal data or cookies, contact services@mpa.cy.",
              ru: "По вопросам персональных данных или cookies пишите на services@mpa.cy.",
            })}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
      <BackToTopButton />
    </main>
  );
}
