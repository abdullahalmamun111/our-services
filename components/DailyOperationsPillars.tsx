"use client";

import React, { useState } from "react";
import Image from "next/image";
import { translations, Language } from "@/lib/translations";
import {
  Fingerprint,
  CreditCard,
  FileCheck2,
  Smartphone,
  Sparkles,
  Check,
  ArrowRight,
  Eye,
} from "lucide-react";

interface DailyOperationsProps {
  lang: Language;
  onOpenDemo: () => void;
}

export default function DailyOperationsPillars({ lang, onOpenDemo }: DailyOperationsProps) {
  const t = translations[lang];

  const pillars = [
    {
      icon: Fingerprint,
      badge: lang === "bn" ? "অপারেশন ১" : "Operation 1",
      title: t.operations.op1Title,
      desc: t.operations.op1Desc,
      points: t.operations.op1Points,
      color: "from-cyan-500 to-blue-600",
      accent: "text-cyan-500",
      image: "/images/smart_gate_attendance.jpg",
      imageAlt: "Student tapping RFID ID Card on wall-mounted smart gate access control terminal",
      imageBadge: lang === "bn" ? "বাস্তব আরএফআইডি গেট ডিভাইস" : "Real RFID Gate Device",
      imageHighlight: lang === "bn" ? "০.৩ সেকেন্ডে পাঞ্চ ও অটো এসএমএস" : "0.3s Punch & Auto SMS",
    },
    {
      icon: CreditCard,
      badge: lang === "bn" ? "অপারেশন ২" : "Operation 2",
      title: t.operations.op2Title,
      desc: t.operations.op2Desc,
      points: t.operations.op2Points,
      color: "from-emerald-500 to-teal-600",
      accent: "text-emerald-500",
      image: "/images/fees_finance_dashboard.jpg",
      imageAlt: "Live Fees & Finance Desktop Dashboard with bKash collections and analytics",
      imageBadge: lang === "bn" ? "লাইভ ফি কালেকশন মনিটর" : "Live Fees Monitor",
      imageHighlight: lang === "bn" ? "বিকাশ ও নগদ অটো লেজার" : "bKash & Nagad Auto Ledger",
    },
    {
      icon: FileCheck2,
      badge: lang === "bn" ? "অপারেশন ৩" : "Operation 3",
      title: t.operations.op3Title,
      desc: t.operations.op3Desc,
      points: t.operations.op3Points,
      color: "from-purple-500 to-indigo-600",
      accent: "text-purple-500",
      image: "/images/school_admin_dashboard.jpg",
      imageAlt: "Dhaka Dream School Master ERP Dashboard with collection trends and academic records",
      imageBadge: lang === "bn" ? "মাস্টার এডমিন ড্যাশবোর্ড" : "Master Admin Dashboard",
      imageHighlight: lang === "bn" ? "অটো জিপিএ ও বোর্ড মার্কশিট" : "Auto GPA & Board Marksheets",
    },
    {
      icon: Smartphone,
      badge: lang === "bn" ? "অপারেশন ৪" : "Operation 4",
      title: t.operations.op4Title,
      desc: t.operations.op4Desc,
      points: t.operations.op4Points,
      color: "from-amber-500 to-orange-600",
      accent: "text-amber-500",
      image: "/images/guardian_mobile_app.png",
      imageAlt: "Guardian and Staff Mobile Progressive Web App on smartphone",
      imageBadge: lang === "bn" ? "স্মার্ট মোবাইল অ্যাপ (PWA)" : "Smart Mobile App (PWA)",
      imageHighlight: lang === "bn" ? "অভিভাবক ও শিক্ষকদের জন্য" : "For Guardians & Staff",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.operations.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            {t.operations.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.operations.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid with Real Visual Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-5 sm:p-7 glass-panel border border-slate-200 dark:border-slate-800 glass-card-hover flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${pillar.color} text-white flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>

                  {/* Real Photo / System Screenshot Preview */}
                  <div className="mt-5 relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-md group/img aspect-video bg-slate-100 dark:bg-slate-900">
                    <Image
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      fill
                      className="object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    {/* Floating Badges over Photo */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 text-white">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span>{pillar.imageBadge}</span>
                      </span>
                      <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-lg bg-cyan-600/90 text-white backdrop-blur-md shadow-sm truncate">
                        {pillar.imageHighlight}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <div className="mt-5 space-y-2.5">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <Check className={`w-4 h-4 ${pillar.accent} shrink-0 mt-0.5`} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-interactive action */}
                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="text-xs text-slate-500 font-medium">
                    {lang === "bn" ? "অটোমেটেড ক্লাউড প্রসেস" : "Automated Cloud Process"}
                  </div>
                  <button
                    onClick={onOpenDemo}
                    className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 group/btn"
                  >
                    <span>{lang === "bn" ? "লাইভ ডেমো দেখুন" : "View Live Demo"}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
