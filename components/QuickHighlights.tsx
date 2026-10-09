"use client";

import React from "react";
import { translations, Language } from "@/lib/translations";
import {
  UserCheck,
  CreditCard,
  Fingerprint,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface QuickHighlightsProps {
  lang: Language;
}

export default function QuickHighlights({ lang }: QuickHighlightsProps) {
  const t = translations[lang];

  const cards = [
    {
      icon: UserCheck,
      color: "from-cyan-500 to-blue-500",
      lightBg: "bg-cyan-50 dark:bg-cyan-950/40",
      borderColor: "border-cyan-200 dark:border-cyan-800/60",
      title: t.highlights.card1Title,
      desc: t.highlights.card1Desc,
      metric: lang === "bn" ? "১-ক্লিক প্রোফাইল সার্চ" : "1-Click Search",
    },
    {
      icon: CreditCard,
      color: "from-emerald-500 to-teal-500",
      lightBg: "bg-emerald-50 dark:bg-emerald-950/40",
      borderColor: "border-emerald-200 dark:border-emerald-800/60",
      title: t.highlights.card2Title,
      desc: t.highlights.card2Desc,
      metric: lang === "bn" ? "বিকাশ ও নগদ অটো লেজার" : "bKash & Nagad Auto",
    },
    {
      icon: Fingerprint,
      color: "from-sky-500 to-indigo-500",
      lightBg: "bg-sky-50 dark:bg-sky-950/40",
      borderColor: "border-sky-200 dark:border-sky-800/60",
      title: t.highlights.card3Title,
      desc: t.highlights.card3Desc,
      metric: lang === "bn" ? "০.৩ সেকেন্ড গেট রেসপন্স" : "0.3s RFID Punch",
    },
    {
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
      lightBg: "bg-purple-50 dark:bg-purple-950/40",
      borderColor: "border-purple-200 dark:border-purple-800/60",
      title: t.highlights.card4Title,
      desc: t.highlights.card4Desc,
      metric: lang === "bn" ? "অটো GPA ও গ্রেডশিট" : "Auto GPA Calculation",
    },
  ];

  return (
    <section id="highlights" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.highlights.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t.highlights.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-6 glass-panel border ${card.borderColor} glass-card-hover group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${card.color} text-white flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {card.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs font-bold text-cyan-600 dark:text-cyan-400">
                  <span>{lang === "bn" ? "ফিচার অন্বেষণ" : "Explore Feature"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
