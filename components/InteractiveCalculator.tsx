"use client";

import React, { useState } from "react";
import { translations, Language } from "@/lib/translations";
import {
  Calculator,
  Clock,
  Coins,
  FileText,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface InteractiveCalculatorProps {
  lang: Language;
  onOpenDemo: () => void;
}

export default function InteractiveCalculator({ lang, onOpenDemo }: InteractiveCalculatorProps) {
  const t = translations[lang];
  const [studentCount, setStudentCount] = useState<number>(650);
  const [avgFee, setAvgFee] = useState<number>(1800);

  // Dynamic calculations based on industry benchmarks
  const hoursSavedPerMonth = Math.round((studentCount * 0.18) + 40);
  const estimatedUncollectedRecovery = Math.round(studentCount * avgFee * 0.055);
  const paperPrintingSaved = Math.round((studentCount * 22) + 2500);

  return (
    <section id="calculator" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.calculator.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            {t.calculator.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-10 glass-panel border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-6 space-y-8">
              {/* Slider 1: Students */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-extrabold text-slate-800 dark:text-slate-200">
                    {t.calculator.studentsLabel}
                  </label>
                  <span className="px-3 py-1 rounded-xl bg-cyan-600 text-white font-black text-sm">
                    {studentCount.toLocaleString()}{" "}
                    {lang === "bn" ? "জন" : "Students"}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="5000"
                  step="25"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>{lang === "bn" ? "৫০ জন" : "50"}</span>
                  <span>{lang === "bn" ? "২,৫০০ জন" : "2,500"}</span>
                  <span>{lang === "bn" ? "৫,০০০+ জন" : "5,000+"}</span>
                </div>
              </div>

              {/* Slider 2: Average Monthly Fee */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-extrabold text-slate-800 dark:text-slate-200">
                    {t.calculator.feeLabel}
                  </label>
                  <span className="px-3 py-1 rounded-xl bg-emerald-600 text-white font-black text-sm">
                    ৳ {avgFee.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="10000"
                  step="100"
                  value={avgFee}
                  onChange={(e) => setAvgFee(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>৳ {lang === "bn" ? "৩০০" : "300"}</span>
                  <span>৳ {lang === "bn" ? "৫,০০০" : "5,000"}</span>
                  <span>৳ {lang === "bn" ? "১০,০০০+" : "10,000+"}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <p>
                  {lang === "bn"
                    ? "পরিসংখ্যানে প্রমাণিত: স্বয়ংক্রিয় এসএমএস ও অনলাইন ফি সিস্টেম ব্যবহারের পর প্রথম ৩ মাসেই বকেয়া আদায়ের হার ৮৭% বৃদ্ধি পায়।"
                    : "Proven analytics: Institutions using automated SMS reminders experience an average 87% increase in on-time tuition fee clearance within 90 days."}
                </p>
              </div>
            </div>

            {/* Right Output Dashboard */}
            <div className="lg:col-span-6 bg-slate-100/80 dark:bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-5">
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <span>{lang === "bn" ? "আনুমানিক মাসিক সেভিংস" : "Estimated Monthly Impact"}</span>
                <span className="text-xs font-bold text-emerald-500">Real-time Calculation</span>
              </h3>

              {/* Output metric 1 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{t.calculator.hoursSaved}</p>
                    <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                      {hoursSavedPerMonth.toLocaleString()} {lang === "bn" ? "ঘণ্টা / মাস" : "Hours / mo"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Output metric 2 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <Coins className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{t.calculator.duesRecovered}</p>
                    <p className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                      ৳ {estimatedUncollectedRecovery.toLocaleString()} {lang === "bn" ? "/ মাস" : "/ mo"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Output metric 3 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{t.calculator.paperSaved}</p>
                    <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                      ৳ {paperPrintingSaved.toLocaleString()} {lang === "bn" ? "/ মাস" : "/ mo"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Final action */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={onOpenDemo}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold text-sm shadow-lg shadow-cyan-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>{lang === "bn" ? "এই সুবিধা উপভোগ করতে ফ্রি ডেমো নিন" : "Start Saving with a Free Demo"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
