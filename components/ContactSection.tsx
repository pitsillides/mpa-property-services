"use client";

import { useState } from "react";
import { pick, type Lang } from "@/lib/i18n";

interface ContactSectionProps {
  lang: Lang;
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const [open, setOpen] = useState(false);

  const mapsUrl =
    "https://www.google.com/maps?q=Santa%20Rosa%201,%202035%20Strovolos,%20Nicosia,%20Cyprus&output=embed";
  const mapsLink =
    "https://www.google.com/maps?q=Santa%20Rosa%201,%202035%20Strovolos,%20Nicosia,%20Cyprus";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fields = {
      name: formData.get("name")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      city: formData.get("city")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
    };

    const subject = pick(lang, {
      gr: "Νέο μήνυμα από τη φόρμα επικοινωνίας",
      en: "New message from the contact form",
      ru: "Новое сообщение с формы сайта",
    });
    const body = [
      `Name / Company: ${fields.name}`,
      `Phone: ${fields.phone}`,
      `Email: ${fields.email}`,
      `City: ${fields.city}`,
      "",
      fields.message,
    ].join("\n");

    window.location.href = `mailto:services@mpa.cy?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 space-y-6">
        {/* Title */}
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold tracking-[0.25em] text-cyan-700">
            {pick(lang, { gr: "ΕΠΙΚΟΙΝΩΝΙΑ", en: "CONTACT", ru: "КОНТАКТЫ" })}
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            {pick(lang, {
              gr: "Μιλήστε μαζί μας για το κτίριό σας",
              en: "Talk to us about your building",
              ru: "Расскажите нам о вашем здании",
            })}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {pick(lang, {
              gr: "Δείτε τα στοιχεία επικοινωνίας μας και ανοίξτε τη φόρμα για να μας στείλετε μήνυμα.",
              en: "View our contact details and open the form to send us a message.",
              ru: "Посмотрите наши контакты или откройте форму, чтобы отправить сообщение.",
            })}
          </p>
        </div>

        {/* Info + map */}
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Left: info + collapsible form */}
          <div className="space-y-4">
            {/* Contact info card */}
            <div className="rounded-[6px] bg-white border border-slate-200 p-4 sm:p-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-cyan-700 mb-3">
                {pick(lang, {
                  gr: "ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ",
                  en: "CONTACT DETAILS",
                  ru: "КОНТАКТНАЯ ИНФОРМАЦИЯ",
                })}
              </p>

              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-phone text-cyan-600 text-sm" />
                  <p>
                    Tel:&nbsp;
                    <a href="tel:70088832" className="hover:text-cyan-600">
                      700 888 32
                    </a>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-mobile-screen-button text-cyan-600 text-sm" />
                  <p>
                    Mobile:&nbsp;
                    <a
                      href="tel:+35796848481"
                      className="hover:text-cyan-600"
                    >
                      +357 96 848 481
                    </a>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <i className="fa-regular fa-envelope text-cyan-600 text-sm" />
                  <p className="break-all">
                    Email:&nbsp;
                    <a
                      href="mailto:services@mpa.cy"
                      className="hover:text-cyan-600"
                    >
                      services@mpa.cy
                    </a>
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <i className="fa-solid fa-location-dot text-cyan-600 text-sm mt-0.5" />
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-600 text-sm"
                  >
                    Santa Rosa 1, 2035 Strovolos, Nicosia, Cyprus
                  </a>
                </div>
              </div>

              {/* WhatsApp / Viber icons */}
              <div className="mt-4">
                <p className="text-xs font-semibold text-slate-700 mb-2">
                  {pick(lang, {
                    gr: "Άμεση επικοινωνία",
                    en: "Instant messaging",
                    ru: "Быстрая связь",
                  })}
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/35796848481"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-[6px] bg-[#25D366] text-white"
                  >
                    <i className="fa-brands fa-whatsapp text-lg" />
                  </a>
                  <a
                    href="viber://chat?number=+35796848481"
                    aria-label="Viber"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-[6px] bg-[#7360F2] text-white"
                  >
                    <i className="fa-brands fa-viber text-lg" />
                  </a>
                </div>
              </div>
            </div>

            {/* Collapsible form */}
            <div className="rounded-[6px] bg-white border border-slate-200">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex w-full items-center justify-between px-5 py-4 text-sm font-semibold text-slate-900"
              >
                <span>
                  {pick(lang, {
                    gr: "Φόρμα επικοινωνίας",
                    en: "Contact form",
                    ru: "Форма связи",
                  })}
                </span>
                <span className="text-lg">{open ? "−" : "+"}</span>
              </button>

              {open && (
                <div className="border-t border-slate-200 px-5 py-5 sm:px-6 sm:py-6">
                  <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-slate-700">
                          {pick(lang, {
                            gr: "Όνομα / Εταιρεία",
                            en: "Name / Company",
                            ru: "Имя / компания",
                          })}
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          className="w-full rounded-[6px] border border-slate-300 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-cyan-500"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-slate-700">
                          {pick(lang, { gr: "Τηλέφωνο", en: "Phone", ru: "Телефон" })}
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          className="w-full rounded-[6px] border border-slate-300 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-cyan-500"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-slate-700">
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          className="w-full rounded-[6px] border border-slate-300 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-cyan-500"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-semibold text-slate-700">
                          {pick(lang, { gr: "Πόλη", en: "City", ru: "Город" })}
                        </label>
                        <input
                          name="city"
                          type="text"
                          className="w-full rounded-[6px] border border-slate-300 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-cyan-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-slate-700">
                        {pick(lang, { gr: "Μήνυμα", en: "Message", ru: "Сообщение" })}
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        className="w-full rounded-[6px] border border-slate-300 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-cyan-500"
                      />
                    </div>

                    <label className="flex items-start gap-2 text-[11px] leading-relaxed text-slate-600">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 h-3.5 w-3.5 rounded border-slate-300 text-cyan-500"
                      />
                      <span>
                        {pick(lang, {
                          gr: "Συμφωνώ να χρησιμοποιηθούν τα στοιχεία μου αποκλειστικά για να απαντήσει η MPA Property Services Ltd στο μήνυμά μου.",
                          en: "I agree that my details may be used only so MPA Property Services Ltd can reply to my message.",
                          ru: "Я согласен, что мои данные будут использованы только для ответа MPA Property Services Ltd на моё сообщение.",
                        })}
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="mt-2 inline-flex items-center justify-center rounded-[6px] bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-cyan-400"
                    >
                      {pick(lang, { gr: "Αποστολή", en: "Send", ru: "Отправить" })}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Right: map */}
          <div className="rounded-[6px] overflow-hidden border border-slate-200 bg-slate-100 h-[260px] sm:h-[320px] lg:h-full min-h-[260px]">
            <iframe
              title="MPA Property Services location"
              src={mapsUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
