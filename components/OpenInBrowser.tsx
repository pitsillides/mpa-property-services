"use client";

import { useEffect, useState } from "react";
import { pick, type Lang } from "@/lib/i18n";

interface OpenInBrowserProps {
  lang: Lang;
}

export default function OpenInBrowser({ lang }: OpenInBrowserProps) {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const ua = navigator.userAgent || navigator.vendor;
      const isSocialBrowser =
        ua.includes("FBAN") ||
        ua.includes("FBAV") ||
        ua.includes("Instagram") ||
        ua.includes("Messenger");

      setShowNotice(isSocialBrowser);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  if (!showNotice) return null;

  const openExternalBrowser = () => {
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
      const path = `${window.location.host}${window.location.pathname}${window.location.search}`;
      window.location.href = `intent://${path}#Intent;scheme=https;package=com.android.chrome;end;`;
      return;
    }

    window.open(window.location.href, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-x-3 bottom-3 z-[9999] rounded-[6px] bg-[#12133c] p-3 text-white shadow-2xl shadow-black/30 sm:left-auto sm:max-w-sm">
      <div className="flex items-start gap-3">
        <i className="fa-solid fa-arrow-up-right-from-square mt-0.5 text-cyan-300" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold">
            {pick(lang, {
              gr: "Άνοιγμα σε browser",
              en: "Open in browser",
              ru: "Открыть в браузере",
            })}
          </p>
          <p className="mt-1 text-xs text-white/75">
            {pick(lang, {
              gr: "Αν το Messenger ή το Instagram μπλοκάρει τη σελίδα, ανοίξτε την από τον κανονικό browser.",
              en: "If Messenger or Instagram blocks the page, open it in your normal browser.",
              ru: "Если Messenger или Instagram блокирует страницу, откройте её в обычном браузере.",
            })}
          </p>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={openExternalBrowser}
              className="rounded-[6px] bg-cyan-400 px-3 py-2 text-xs font-semibold text-[#12133c]"
            >
              {pick(lang, { gr: "Άνοιγμα", en: "Open", ru: "Открыть" })}
            </button>
            <button
              type="button"
              onClick={() => setShowNotice(false)}
              className="rounded-[6px] bg-white/10 px-3 py-2 text-xs font-semibold text-white"
            >
              {pick(lang, { gr: "Κλείσιμο", en: "Close", ru: "Закрыть" })}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
