"use client";

import { pick, type Lang } from "@/lib/i18n";

interface TeamProps {
  lang: Lang;
}

type TeamMember = {
  nameGR: string;
  nameEN: string;
  nameRU: string;
  roleGR: string;
  roleEN: string;
  roleRU: string;
  coFounder: boolean;
};

export default function TeamSection({ lang }: TeamProps) {
  // ✅ Founders will be shown first (sorted below) + alphabetic inside groups
  const team: TeamMember[] = [
    {
      nameGR: "Χάρα Ιωάννου",
      nameEN: "Chara Ioannou",
      nameRU: "Хара Иоанну",
      roleGR: "Υπεύθυνη Διαχείρισης Κτιρίων",
      roleEN: "Buildings Manager",
      roleRU: "Менеджер по управлению зданиями",
      coFounder: false,
    },
    {
      nameGR: "Κώστας Κωνσταντίνου",
      nameEN: "Costas Constantinou",
      nameRU: "Костас Константину",
      roleGR: "Γενικός Διευθυντής",
      roleEN: "General Manager",
      roleRU: "Генеральный директор",
      coFounder: true,
    },
    {
      nameGR: "Δήμητρα Δημητριάδου",
      nameEN: "Demetra Demetriadou",
      nameRU: "Деметра Димитриаду",
      roleGR: "Υπεύθυνη Μάρκετινγκ",
      roleEN: "Marketing Manager",
      roleRU: "Менеджер по маркетингу",
      coFounder: false,
    },
    {
      nameGR: "Μιχάλης Πιτσιλλίδης",
      nameEN: "Michalis Pitsillides",
      nameRU: "Михалис Питсиллидис",
      roleGR: "Υπεύθυνος Εταιρικής Ταυτότητας",
      roleEN: "Brand Manager",
      roleRU: "Бренд-менеджер",
      coFounder: true,
    },
    {
      nameGR: "Νικόλας Ρούσσος",
      nameEN: "Nicholas Roussos",
      nameRU: "Николас Руссос",
      roleGR: "Οικονομικός Διευθυντής",
      roleEN: "Financial Manager",
      roleRU: "Финансовый менеджер",
      coFounder: false,
    },
    {
      nameGR: "Τάσος Μπιλιανίδης",
      nameEN: "Tasos Bilianides",
      nameRU: "Тасос Билианидис",
      roleGR: "Ανάπτυξη Επιχειρηματικών Σχέσεων",
      roleEN: "Business Development",
      roleRU: "Развитие деловых отношений",
      coFounder: true,
    },
  ];

  const sortedTeam = [...team].sort((a, b) => {
    // founders first
    const founderDiff = Number(b.coFounder) - Number(a.coFounder);
    if (founderDiff !== 0) return founderDiff;

    // alphabetic inside each group (use EN name for stable sorting)
    return a.nameEN.localeCompare(b.nameEN, "en", { sensitivity: "base" });
  });

  return (
    <section id="team" className="relative py-12 bg-[#0b0c23]">
      <div className="relative mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-[11px] tracking-[0.25em] text-cyan-200 uppercase font-semibold">
            {pick(lang, { gr: "Η ΟΜΑΔΑ ΜΑΣ", en: "OUR TEAM", ru: "НАША КОМАНДА" })}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-50">
            {pick(lang, {
              gr: "Επαγγελματισμός, εμπειρία και συνεργασία",
              en: "Professionalism, experience and collaboration",
              ru: "Профессионализм, опыт и командная работа",
            })}
          </h2>
          <div className="mt-3 h-[3px] w-24 bg-cyan-400 mx-auto rounded-[6px]" />
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          {sortedTeam.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[6px] border border-white/14 bg-white/7 backdrop-blur-xl shadow-[0_16px_50px_rgba(0,0,0,0.45)] px-3 py-5 text-center sm:px-5 sm:py-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_70px_rgba(0,0,0,0.6)]"
            >
              {/* light sweep */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-24 left-0 h-32 w-full bg-gradient-to-r from-white/18 via-white/6 to-transparent rotate-[-8deg]" />
              </div>

              {/* Profile icon */}
              <div className="relative z-10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-[6px] bg-[#12133c] shadow-[0_12px_28px_rgba(0,0,0,0.28)] transition-transform duration-300 group-hover:scale-[1.05] sm:mb-4 sm:h-16 sm:w-16">
                <div className="absolute left-1 top-1 h-2 w-2 rounded-[6px] bg-cyan-300" />
                <i className="fa-solid fa-user text-white text-lg sm:text-xl" aria-hidden="true" />
              </div>

              {/* Name */}
              <h3 className="relative z-10 text-slate-50 font-semibold text-[16px]">
                {pick(lang, {
                  gr: member.nameGR,
                  en: member.nameEN,
                  ru: member.nameRU,
                })}
              </h3>

              {/* Role */}
              <p className="relative z-10 text-[13px] text-slate-200/85 mt-1">
                {pick(lang, {
                  gr: member.roleGR,
                  en: member.roleEN,
                  ru: member.roleRU,
                })}
              </p>

              {member.coFounder && (
                <p className="relative z-10 mx-auto mt-3 inline-flex items-center gap-1 rounded-[6px] bg-cyan-400/12 px-2 py-1 text-[10px] font-semibold text-cyan-100 sm:text-[11px]">
                  <i className="fa-solid fa-crown text-[10px]" aria-hidden="true" />
                  {pick(lang, {
                    gr: "Συνιδρυτής",
                    en: "Co-Founder",
                    ru: "Сооснователь",
                  })}
                </p>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
