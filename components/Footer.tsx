import Image from "next/image";
import { localizePath, pick, type Lang } from "@/lib/i18n";

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="bg-[#12133c] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* LEFT */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="MPA Property Services"
                width={160}
                height={55}
                className="h-10 w-auto opacity-95"
              />
            </div>

            <p className="text-sm text-white/80 leading-relaxed">
              {pick(lang, {
                gr: "Σταθερή υποστήριξη σε Επιτροπές, ιδιοκτήτες και ενοίκους, με συνέπεια, διαφάνεια και υπευθυνότητα.",
                en: "Steady support for Committees, owners and tenants, delivered with consistency, transparency and responsibility.",
                ru: "Надёжная поддержка комитетов, владельцев и жильцов с последовательностью, прозрачностью и ответственностью.",
              })}
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="mb-4 text-sm font-semibold tracking-wider uppercase text-white">
              {pick(lang, { gr: "Επικοινωνία", en: "Contact", ru: "Контакты" })}
            </h2>

            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-0.5 text-white/80" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Santa+Rosa+1,+2035+Strovolos,+Nicosia,+Cyprus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Santa Rosa 1, 2035 Strovolos, Nicosia, Cyprus
                </a>
              </li>

              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-white/80" />
                <a
                  href="tel:+35770088832"
                  className="hover:text-white transition"
                >
                  700 888 32
                </a>
              </li>

              <li className="flex items-center gap-3">
                <i className="fa-brands fa-whatsapp text-white/80" />
                <a
                  href="https://wa.me/35796848481"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  +357 96 848 481
                </a>
              </li>

              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-white/80" />
                <a
                  href="mailto:services@mpa.cy"
                  className="hover:text-white transition"
                >
                  services@mpa.cy
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="md:text-right">
            <h2 className="mb-4 text-sm font-semibold tracking-wider uppercase text-white">
              {pick(lang, {
                gr: "Ακολουθήστε μας",
                en: "Follow us",
                ru: "Мы в соцсетях",
              })}
            </h2>

            <div className="flex gap-6 md:justify-end">
              <a
                href="https://www.facebook.com/mpapropertyservices"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MPA Property Services on Facebook"
                className="text-white/80 text-xl transition-all duration-200 hover:text-white hover:-translate-y-0.5"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>

              <a
                href="https://www.instagram.com/mpa_services/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MPA Property Services on Instagram"
                className="text-white/80 text-xl transition-all duration-200 hover:text-white hover:-translate-y-0.5"
              >
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-relaxed text-white/55">
          {pick(lang, {
            gr: "Τα στοιχεία που αποστέλλονται μέσω των φορμών χρησιμοποιούνται μόνο για επικοινωνία σχετικά με το αίτημά σας. Οι πληροφορίες της ιστοσελίδας είναι γενικές και δεν αποτελούν νομική συμβουλή.",
            en: "Details submitted through the forms are used only to respond to your request. Information on this website is general and does not constitute legal advice.",
            ru: "Данные, отправленные через формы, используются только для ответа на ваш запрос. Информация на сайте носит общий характер и не является юридической консультацией.",
          })}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-white/70">
          <a href={localizePath("/privacy", lang)} className="transition hover:text-white">
            {pick(lang, {
              gr: "Πολιτική απορρήτου",
              en: "Privacy policy",
              ru: "Политика конфиденциальности",
            })}
          </a>
          <a href={localizePath("/cookies", lang)} className="transition hover:text-white">
            {pick(lang, {
              gr: "Πολιτική cookies",
              en: "Cookie policy",
              ru: "Политика cookies",
            })}
          </a>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} MPA Property Services Ltd.{" "}
          {pick(lang, {
            gr: "Με επιφύλαξη παντός δικαιώματος.",
            en: "All rights reserved.",
            ru: "Все права защищены.",
          })}
        </div>
      </div>
    </footer>
  );
}
