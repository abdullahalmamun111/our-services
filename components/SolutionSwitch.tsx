"use client";

import React, { useState } from "react";
import Image from "next/image";
import { translations, Language } from "@/lib/translations";
import {
  BookOpen,
  School,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  LayoutDashboard,
} from "lucide-react";

interface SolutionSwitchProps {
  lang: Language;
  onOpenDemo: (edition?: string) => void;
}

export default function SolutionSwitch({ lang, onOpenDemo }: SolutionSwitchProps) {
  const [selectedEdition, setSelectedEdition] = useState<"coaching" | "school">("coaching");
  const t = translations[lang];

  return (
    <section id="solutions" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.solutions.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            {t.solutions.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.solutions.subtitle}
          </p>

          {/* Interactive Switcher Toggle */}
          <div className="pt-4 flex justify-center">
            <div className="p-1.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md inline-flex">
              <button
                onClick={() => setSelectedEdition("coaching")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedEdition === "coaching"
                    ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>{t.solutions.tabCoaching}</span>
              </button>
              <button
                onClick={() => setSelectedEdition("school")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedEdition === "school"
                    ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <School className="w-4 h-4" />
                <span>{t.solutions.tabSchool}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Side by Side Dual Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* CARD 1: COACHINGPRO */}
          <div
            className={`rounded-3xl p-5 sm:p-8 glass-panel border transition-all duration-300 flex flex-col justify-between ${
              selectedEdition === "coaching"
                ? "border-cyan-500 shadow-2xl shadow-cyan-500/15 ring-2 ring-cyan-500/30"
                : "border-slate-200 dark:border-slate-800 opacity-90 hover:opacity-100"
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 to-sky-500 text-white flex items-center justify-center shadow-lg shadow-cyan-600/20">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                      CoachingPro
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300">
                        Batch Edition
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">{t.solutions.coachingTag}</p>
                  </div>
                </div>
              </div>

              {/* Real System Dashboard Image Preview */}
              <div className="mt-5 relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md group aspect-[16/10] bg-slate-950">
                <Image
                  src="/images/fees_finance_dashboard.jpg"
                  alt="CoachingPro Fees and Analytics Monitor"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 font-bold flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{lang === "bn" ? "লাইভ ফি ও ব্যাচ লেজার" : "Live Batch & Fee Ledger"}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-cyan-600/90 text-[11px] font-black">
                    ৳ 18,50,000+ MTD
                  </span>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {t.solutions.coachingTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t.solutions.coachingDesc}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2.5 pt-2">
                  {t.solutions.coachingPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom preview widget & button */}
            <div className="mt-7 pt-5 border-t border-slate-200 dark:border-slate-800 space-y-3.5">
              <div className="p-3.5 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {lang === "bn" ? "প্রাইভেট টিউটর ও বড় কোচিং নেটওয়ার্ক" : "Private Tuition to Multi-Branch Coaching"}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {lang === "bn" ? "আনলিমিটেড ব্যাচ ও ইনস্ট্যান্ট এসএমএস ফি রিমাইন্ডার" : "Unlimited Batches & Automated SMS"}
                  </p>
                </div>
                <button
                  onClick={() => onOpenDemo("CoachingPro")}
                  className="px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1 shrink-0"
                >
                  <span>{lang === "bn" ? "ডেমো" : "Demo"}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={() => onOpenDemo("CoachingPro")}
                className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>{t.solutions.btnStart} (CoachingPro)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CARD 2: SCHOOLPRO */}
          <div
            className={`rounded-3xl p-5 sm:p-8 glass-panel border transition-all duration-300 flex flex-col justify-between ${
              selectedEdition === "school"
                ? "border-emerald-500 shadow-2xl shadow-emerald-500/15 ring-2 ring-emerald-500/30"
                : "border-slate-200 dark:border-slate-800 opacity-90 hover:opacity-100"
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-lg shadow-emerald-600/20">
                    <School className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                      SchoolPro
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                        Campus Edition
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">{t.solutions.schoolTag}</p>
                  </div>
                </div>
              </div>

              {/* Real System Dashboard Image Preview */}
              <div className="mt-5 relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md group aspect-[16/10] bg-slate-950">
                <Image
                  src="/images/school_admin_dashboard.jpg"
                  alt="SchoolPro Master Enterprise ERP Dashboard"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 font-bold flex items-center gap-1.5">
                    <LayoutDashboard className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === "bn" ? "মাস্টার এডমিন ইআরপি প্যানেল" : "Master Admin ERP Suite"}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-600/90 text-[11px] font-black">
                    18 Modules Active
                  </span>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {t.solutions.schoolTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t.solutions.schoolDesc}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2.5 pt-2">
                  {t.solutions.schoolPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom preview widget & button */}
            <div className="mt-7 pt-5 border-t border-slate-200 dark:border-slate-800 space-y-3.5">
              <div className="p-3.5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {lang === "bn" ? "স্কুল, কলেজ ও মাদ্রাসার জন্য পূর্ণাঙ্গ" : "Schools, Colleges & Madrasa Campuses"}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {lang === "bn" ? "১৮টি সমন্বিত মডিউল ও ক্লাউড অটোমেশন" : "18 Integrated Modules & Biometric Gate"}
                  </p>
                </div>
                <button
                  onClick={() => onOpenDemo("SchoolPro")}
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1 shrink-0"
                >
                  <span>{lang === "bn" ? "ডেমো" : "Demo"}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={() => onOpenDemo("SchoolPro")}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25"
              >
                <span>{t.solutions.btnStart} (SchoolPro)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
