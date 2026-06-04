"use client";

import { useState } from "react";
import { pick, type Lang } from "@/lib/i18n";

interface OfferProps {
  lang: Lang;
}

export default function OfferSection({ lang }: OfferProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const subject = pick(lang, {
      gr: "Νέα αίτηση προσφοράς για διαχείριση κτιρίου",
      en: "New building management quote request",
      ru: "Новый запрос расчёта по управлению зданием",
    });
    const body = [
      `Building / Complex: ${formData.get("building_name") ?? ""}`,
      `Location / Area: ${formData.get("location") ?? ""}`,
      `Units: ${formData.get("units") ?? ""}`,
      `Building type: ${formData.get("building_type") ?? ""}`,
      "",
      `Contact person: ${formData.get("contact_name") ?? ""}`,
      `Role / Capacity: ${formData.get("role") ?? ""}`,
      `Email: ${formData.get("email") ?? ""}`,
      `Phone: ${formData.get("phone") ?? ""}`,
      "",
      `Additional information:`,
      `${formData.get("extra_info") ?? ""}`,
    ].join("\n");

    window.location.href = `mailto:services@mpa.cy?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="offer"
      className="relative py-12 bg-gradient-to-b from-slate-50 to-slate-100"
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-[11px] tracking-[0.25em] text-cyan-700 uppercase font-semibold">
            {pick(lang, { gr: "ΑΙΤΗΣΗ ΠΡΟΣΦΟΡΑΣ", en: "REQUEST A QUOTE", ru: "ЗАПРОС РАСЧЁТА" })}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[#12133c]">
            {pick(lang, {
              gr: "Ζητήστε προσφορά για διαχείριση κτιρίου ή πολυκατοικίας",
              en: "Request a quote for building or apartment block management",
              ru: "Запросите расчёт по управлению зданием или домом",
            })}
          </h2>
          <div className="mt-3 h-[3px] w-24 bg-cyan-400 mx-auto rounded-[6px]" />
          <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
            {pick(lang, {
              gr: "Συμπληρώστε τα βασικά στοιχεία του κτιρίου σε Λευκωσία, Λεμεσό ή άλλη περιοχή της Κύπρου και θα επικοινωνήσουμε μαζί σας για τις ανάγκες σας.",
              en: "Share a few details about your building in Nicosia, Limassol or another area of Cyprus, and we will contact you to discuss what you need.",
              ru: "Оставьте несколько деталей о здании в Никосии, Лимасоле или другом районе Кипра, и мы свяжемся с вами, чтобы обсудить ваши потребности.",
            })}
          </p>
        </div>

        {/* Glassy wrapper */}
        <div className="rounded-[6px] bg-white/60 backdrop-blur-xl border border-slate-200 shadow-[0_18px_55px_rgba(15,23,42,0.18)] px-5 py-6 sm:px-7 sm:py-7">
          {/* Toggle line */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-cyan-400/15">
                <i className="fa-solid fa-file-signature text-cyan-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#12133c]">
                  {pick(lang, {
                    gr: "Σύντομη φόρμα ενδιαφέροντος",
                    en: "Quick request form",
                    ru: "Короткая форма заявки",
                  })}
                </p>
                <p className="text-xs text-slate-600">
                  {pick(lang, {
                    gr: "Χωρίς δέσμευση, για μια πρώτη εκτίμηση.",
                    en: "No commitment, just an initial assessment.",
                    ru: "Без обязательств, только для первичной оценки.",
                  })}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="mt-2 inline-flex items-center justify-center rounded-[6px] border border-cyan-400 bg-cyan-400 px-4 py-2 text-xs font-semibold text-[#12133c] shadow-sm hover:bg-cyan-300 transition sm:mt-0"
            >
              <span className="mr-2">
                {open
                  ? pick(lang, {
                      gr: "Κλείσιμο φόρμας",
                      en: "Close form",
                      ru: "Закрыть форму",
                    })
                  : pick(lang, {
                      gr: "Άνοιγμα φόρμας",
                      en: "Open form",
                      ru: "Открыть форму",
                    })}
              </span>
              <i
                className={`fa-solid ${ open ? "fa-chevron-up" : "fa-chevron-down" } text-[11px]`}
              />
            </button>
          </div>

          {/* Animated collapse */}
          <div
            className={`overflow-hidden transition-all duration-400 ${open ? "mt-6 max-h-[1600px] opacity-100" : "max-h-0 opacity-0"}`}
          >
            <form
              onSubmit={handleSubmit}
              className="mt-2 grid gap-5 text-sm text-slate-800"
            >
              {/* Building details */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="quote-building-name" className="text-xs font-semibold text-slate-700">
                    {pick(lang, {
                      gr: "Ονομασία κτιρίου / συγκροτήματος",
                      en: "Building / complex name",
                      ru: "Название здания / комплекса",
                    })}
                  </label>
                  <input
                    id="quote-building-name"
                    required
                    name="building_name"
                    className="w-full rounded-[6px] border border-slate-300 bg-white/80 px-3 py-2 text-sm shadow-inner focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-location" className="text-xs font-semibold text-slate-700">
                    {pick(lang, {
                      gr: "Τοποθεσία / Περιοχή",
                      en: "Location / Area",
                      ru: "Район / местоположение",
                    })}
                  </label>
                  <input
                    id="quote-location"
                    required
                    name="location"
                    className="w-full rounded-[6px] border border-slate-300 bg-white/80 px-3 py-2 text-sm shadow-inner focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-units" className="text-xs font-semibold text-slate-700">
                    {pick(lang, {
                      gr: "Αριθμός διαμερισμάτων / μονάδων",
                      en: "Number of apartments / units",
                      ru: "Количество квартир / помещений",
                    })}
                  </label>
                  <input
                    id="quote-units"
                    required
                    name="units"
                    type="number"
                    min={1}
                    className="w-full rounded-[6px] border border-slate-300 bg-white/80 px-3 py-2 text-sm shadow-inner focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-building-type" className="text-xs font-semibold text-slate-700">
                    {pick(lang, {
                      gr: "Είδος κτιρίου",
                      en: "Building type",
                      ru: "Тип здания",
                    })}
                  </label>
                  <select
                    id="quote-building-type"
                    name="building_type"
                    className="w-full rounded-[6px] border border-slate-300 bg-white/80 px-3 py-2 text-sm shadow-inner focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="">
                      {pick(lang, { gr: "Επιλέξτε...", en: "Select...", ru: "Выберите..." })}
                    </option>
                    <option value="residential">
                      {pick(lang, { gr: "Οικιστικό", en: "Residential", ru: "Жилое" })}
                    </option>
                    <option value="mixed">
                      {pick(lang, { gr: "Μικτή χρήση", en: "Mixed use", ru: "Смешанное" })}
                    </option>
                    <option value="commercial">
                      {pick(lang, { gr: "Εμπορικό / Γραφεία", en: "Commercial / Offices", ru: "Коммерческое / офисы" })}
                    </option>
                  </select>
                </div>
              </div>

              {/* Contact person */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="quote-contact-name" className="text-xs font-semibold text-slate-700">
                    {pick(lang, {
                      gr: "Ονοματεπώνυμο υπεύθυνου επικοινωνίας",
                      en: "Contact person full name",
                      ru: "Имя контактного лица",
                    })}
                  </label>
                  <input
                    id="quote-contact-name"
                    required
                    name="contact_name"
                    className="w-full rounded-[6px] border border-slate-300 bg-white/80 px-3 py-2 text-sm shadow-inner focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-role" className="text-xs font-semibold text-slate-700">
                    {pick(lang, { gr: "Ιδιότητα", en: "Role / Capacity", ru: "Роль" })}
                  </label>
                  <input
                    id="quote-role"
                    name="role"
                    className="w-full rounded-[6px] border border-slate-300 bg-white/80 px-3 py-2 text-sm shadow-inner focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-email" className="text-xs font-semibold text-slate-700">
                    Email
                  </label>
                  <input
                    id="quote-email"
                    required
                    name="email"
                    type="email"
                    className="w-full rounded-[6px] border border-slate-300 bg-white/80 px-3 py-2 text-sm shadow-inner focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-phone" className="text-xs font-semibold text-slate-700">
                    {pick(lang, { gr: "Τηλέφωνο επικοινωνίας", en: "Contact phone", ru: "Телефон" })}
                  </label>
                  <input
                    id="quote-phone"
                    required
                    name="phone"
                    className="w-full rounded-[6px] border border-slate-300 bg-white/80 px-3 py-2 text-sm shadow-inner focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Extra info */}
              <div className="space-y-1.5">
                <label htmlFor="quote-extra-info" className="text-xs font-semibold text-slate-700">
                  {pick(lang, {
                    gr: "Πρόσθετες πληροφορίες / ιδιαιτερότητες κτιρίου",
                    en: "Additional information / special notes",
                    ru: "Дополнительная информация / особенности здания",
                  })}
                </label>
                <textarea
                  id="quote-extra-info"
                  name="extra_info"
                  rows={4}
                  className="w-full rounded-[6px] border border-slate-300 bg-white/80 px-3 py-2 text-sm shadow-inner focus:border-cyan-500 focus:outline-none resize-y"
                />
              </div>

              {/* Consent */}
              <div className="mt-2 flex items-start gap-2 text-[11px] text-slate-600">
                <input
                  id="quote-consent"
                  type="checkbox"
                  required
                  className="mt-1 h-3.5 w-3.5 rounded border-slate-300 text-cyan-500"
                />
                <label htmlFor="quote-consent">
                  {pick(lang, {
                    gr: "Επιβεβαιώνω ότι τα στοιχεία είναι σωστά και συμφωνώ να χρησιμοποιηθούν αποκλειστικά για να επικοινωνήσει μαζί μου η MPA Property Services Ltd σχετικά με την αίτησή μου.",
                    en: "I confirm that the details are correct and agree that they may be used only so MPA Property Services Ltd can contact me about my request.",
                    ru: "Я подтверждаю, что данные указаны верно, и согласен, что они будут использованы только для связи MPA Property Services Ltd по моему запросу.",
                  })}
                </label>
              </div>

              {/* Submit */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-[6px] bg-[#1db3c8] px-5 py-2.5 text-sm font-semibold text-[#12133c] shadow-md hover:bg-cyan-400 transition"
                >
                  {pick(lang, {
                    gr: "Αποστολή αίτησης",
                    en: "Submit request",
                    ru: "Отправить заявку",
                  })}
                </button>
                {submitted && (
                  <span className="text-xs text-emerald-600">
                    {pick(lang, {
                      gr: "Άνοιξε email με τα στοιχεία σας, έτοιμο για αποστολή.",
                      en: "An email draft has opened with your details, ready to send.",
                      ru: "Открылось письмо с вашими данными, готовое к отправке.",
                    })}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
