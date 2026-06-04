"use client";

import { useEffect, useState } from "react";
import { localizePath, pick, type Lang } from "@/lib/i18n";

interface CookiesProps {
  lang: Lang;
}

type ConsentChoice = "accepted" | "rejected" | "custom";

export default function CookiesSection({ lang }: CookiesProps) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("mpaps-cookies-consent");
    let showTimer: number | undefined;
    if (!stored) {
      showTimer = window.setTimeout(() => setVisible(true), 0);
    }

    const mountTimer = window.setTimeout(() => setMounted(true), 50);
    return () => {
      if (showTimer) window.clearTimeout(showTimer);
      window.clearTimeout(mountTimer);
    };
  }, []);

  const saveConsent = (choice: ConsentChoice) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("mpaps-cookies-consent", choice);

      if (choice === "custom") {
        const prefs = {
          necessary: true,
          analytics: analyticsEnabled,
          marketing: marketingEnabled,
        };
        window.localStorage.setItem(
          "mpaps-cookies-preferences",
          JSON.stringify(prefs)
        );
      }
    }
    setVisible(false);
  };

  const handleAcceptAll = () => {
    setAnalyticsEnabled(true);
    setMarketingEnabled(true);
    saveConsent("accepted");
  };

  const handleRejectAll = () => {
    setAnalyticsEnabled(false);
    setMarketingEnabled(false);
    saveConsent("rejected");
  };

  const handleSavePreferences = () => {
    saveConsent("custom");
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 pointer-events-none">
      <div
        className={`pointer-events-auto transition-all duration-500 ease-out ${ mounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0" }`}
      >
        <div className="mx-auto max-w-6xl px-4 pb-4">
          <div className="rounded-[6px] border border-slate-800 bg-slate-950/95 p-4 text-xs text-slate-200 shadow-2xl shadow-black/70 backdrop-blur-md sm:p-5 sm:text-sm">
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    {pick(lang, {
                      gr: "Ρυθμίσεις cookies",
                      en: "Cookie settings",
                      ru: "Настройки cookies",
                    })}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
                    {pick(lang, {
                      gr: "Χρησιμοποιούμε cookies για τη σωστή λειτουργία της ιστοσελίδας.",
                      en: "We use cookies to keep the website working properly.",
                      ru: "Мы используем cookies для корректной работы сайта.",
                    })}
                  </p>
                  <p className="mt-1 text-slate-300">
                    {pick(lang, {
                      gr: "Μπορείτε να αποδεχτείτε όλα τα cookies, να απορρίψετε τα μη απαραίτητα ή να αλλάξετε τις επιλογές σας.",
                      en: "You can accept all cookies, reject non-essential ones or choose your preferences.",
                      ru: "Вы можете принять все cookies, отклонить необязательные или выбрать свои настройки.",
                    })}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400 sm:text-xs">
                    {pick(lang, {
                      gr: "Τα μη απαραίτητα cookies ενεργοποιούνται μόνο με τη συγκατάθεσή σας.",
                      en: "Non-essential cookies are enabled only with your consent.",
                      ru: "Необязательные cookies включаются только с вашего согласия.",
                    })}
                    <a
                      href={localizePath("/cookies", lang)}
                      className="ml-1 font-semibold text-cyan-300 hover:text-cyan-200"
                    >
                      {pick(lang, {
                        gr: "Πολιτική cookies",
                        en: "Cookie policy",
                        ru: "Политика cookies",
                      })}
                    </a>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowPreferences((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-[6px] border border-slate-700 bg-slate-900 px-3 py-2 text-[11px] font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200 sm:text-xs"
              >
                <span>
                  {pick(lang, {
                    gr: "Προτιμήσεις cookies",
                    en: "Cookie preferences",
                    ru: "Настройки cookies",
                  })}
                </span>
                <span
                  className={`transition-transform ${ showPreferences ? "rotate-90" : "" }`}
                >
                  ›
                </span>
              </button>

              {showPreferences && (
                <div className="space-y-3 rounded-[6px] bg-slate-900/80 p-3 sm:p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-50 sm:text-sm">
                        {pick(lang, {
                          gr: "Απαραίτητα cookies",
                          en: "Strictly necessary cookies",
                          ru: "Необходимые cookies",
                        })}
                      </p>
                      <p className="text-[11px] text-slate-300 sm:text-xs">
                        {pick(lang, {
                          gr: "Απαραίτητα για τη βασική λειτουργία της ιστοσελίδας. Δεν μπορούν να απενεργοποιηθούν.",
                          en: "Required for the basic functioning of the website. These cannot be disabled.",
                          ru: "Нужны для базовой работы сайта. Их нельзя отключить.",
                        })}
                      </p>
                    </div>
                    <span className="rounded-[6px] bg-slate-800 px-3 py-1 text-[11px] text-slate-200">
                      {pick(lang, {
                        gr: "Πάντα ενεργά",
                        en: "Always on",
                        ru: "Всегда включены",
                      })}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-50 sm:text-sm">
                        {pick(lang, {
                          gr: "Στατιστικά cookies",
                          en: "Analytics cookies",
                          ru: "Аналитические cookies",
                        })}
                      </p>
                      <p className="text-[11px] text-slate-300 sm:text-xs">
                        {pick(lang, {
                          gr: "Μας βοηθούν να κατανοήσουμε πώς χρησιμοποιείται η ιστοσελίδα, ώστε να τη βελτιώνουμε.",
                          en: "Help us understand how the website is used so we can improve it.",
                          ru: "Помогают понять, как используется сайт, чтобы мы могли его улучшать.",
                        })}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAnalyticsEnabled((v) => !v)}
                      className={`inline-flex h-6 w-11 items-center rounded-[6px] border transition ${ analyticsEnabled ? "border-cyan-400 bg-cyan-500/80" : "border-slate-600 bg-slate-800" }`}
                      aria-pressed={analyticsEnabled}
                    >
                      <span
                        className={`ml-[2px] h-5 w-5 rounded-[6px] bg-slate-950 shadow transition-transform ${ analyticsEnabled ? "translate-x-[18px]" : "" }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-50 sm:text-sm">
                        {pick(lang, {
                          gr: "Cookies προώθησης",
                          en: "Marketing cookies",
                          ru: "Маркетинговые cookies",
                        })}
                      </p>
                      <p className="text-[11px] text-slate-300 sm:text-xs">
                        {pick(lang, {
                          gr: "Χρησιμοποιούνται για πιο στοχευμένη επικοινωνία και προβολή.",
                          en: "Used for more targeted communication and promotion.",
                          ru: "Используются для более точной коммуникации и продвижения.",
                        })}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setMarketingEnabled((v) => !v)}
                      className={`inline-flex h-6 w-11 items-center rounded-[6px] border transition ${ marketingEnabled ? "border-cyan-400 bg-cyan-500/80" : "border-slate-600 bg-slate-800" }`}
                      aria-pressed={marketingEnabled}
                    >
                      <span
                        className={`ml-[2px] h-5 w-5 rounded-[6px] bg-slate-950 shadow transition-transform ${ marketingEnabled ? "translate-x-[18px]" : "" }`}
                      />
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2 pt-1 sm:flex sm:items-center sm:justify-end">
                <button
                  type="button"
                  onClick={handleRejectAll}
                  className="inline-flex items-center justify-center rounded-[6px] border border-slate-600 bg-slate-900 px-4 py-2 text-[11px] font-semibold text-slate-100 hover:border-slate-400 sm:text-xs"
                >
                  {pick(lang, {
                    gr: "Απόρριψη μη απαραίτητων",
                    en: "Reject non-essential",
                    ru: "Отклонить необязательные",
                  })}
                </button>

                {showPreferences && (
                  <button
                    type="button"
                    onClick={handleSavePreferences}
                    className="col-span-2 inline-flex items-center justify-center rounded-[6px] border border-cyan-500 bg-transparent px-4 py-2 text-[11px] font-semibold text-cyan-300 hover:bg-cyan-500/10 sm:col-span-1 sm:text-xs"
                  >
                    {pick(lang, {
                      gr: "Αποθήκευση προτιμήσεων",
                      en: "Save preferences",
                      ru: "Сохранить настройки",
                    })}
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="inline-flex items-center justify-center rounded-[6px] bg-cyan-500 px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-md shadow-cyan-500/40 hover:bg-cyan-400 sm:text-xs"
                >
                  {pick(lang, {
                    gr: "Αποδοχή όλων",
                    en: "Accept all",
                    ru: "Принять все",
                  })}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
