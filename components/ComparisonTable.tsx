"use client";

import React, { useState } from "react";
import { translations, Language } from "@/lib/translations";
import {
  Check,
  X,
  Sparkles,
  Award,
  ArrowRight,
  Layers,
  Table as TableIcon,
} from "lucide-react";

interface ComparisonTableProps {
  lang: Language;
}

export default function ComparisonTable({ lang }: ComparisonTableProps) {
  const t = translations[lang];
  const [mobileCompareTarget, setMobileCompareTarget] = useState<
    "generic" | "manual"
  >("generic");
  const [mobileViewStyle, setMobileViewStyle] = useState<"cards" | "table">(
    "cards",
  );

  const rows = [
    {
      featureEn: "Biometric & RFID Gate Punch with Instant SMS",
      featureBn: "বায়োমেট্রিক গেট পাঞ্চ ও মুহূর্তেই অভিভাবককে এসএমএস",
      manualBn: false,
      manualEn: false,
      genericBn: "আংশিক / থার্ড পার্টি",
      genericEn: "Partial / 3rd Party",
      ourApp: true,
      ourDetailBn: "১০০% বিল্ট-ইন ও ০.৩ সেকেন্ডে এসএমএস",
      ourDetailEn: "100% built-in with 0.3s auto SMS",
    },
    {
      featureEn: "bKash & Nagad Online Fee Gateway Integration",
      featureBn: "বিকাশ ও নগদ ডিজিটাল ক্যাশলেস ফি কালেকশন",
      manualBn: false,
      manualEn: false,
      genericBn: false,
      genericEn: false,
      ourApp: true,
      ourDetailBn: "স্বয়ংক্রিয় লেজার ও ইনস্ট্যান্ট ভাউচার",
      ourDetailEn: "Auto ledger & instant receipts",
    },
    {
      featureEn: "Auto GPA/CGPA & Board Compliant Marksheet Designer",
      featureBn: "স্বয়ংক্রিয় জিপিএ ক্যালকুলেশন ও বোর্ড মার্কশিট প্রিন্টিং",
      manualBn: "ম্যানুয়াল খাতা / ভুল সম্ভাবনা",
      manualEn: "Manual registers / Error-prone",
      genericBn: "সীমাবদ্ধ ফরম্যাট",
      genericEn: "Limited formats only",
      ourApp: true,
      ourDetailBn: "১-ক্লিক বোর্ড গ্রেড ও প্রিন্ট রেডি",
      ourDetailEn: "1-click board grades & print-ready",
    },
    {
      featureEn: "Integrated Mobile PWA App for Guardians & Staff",
      featureBn: "অভিভাবক ও শিক্ষকদের জন্য স্মার্ট প্রগ্রেসিভ ওয়েব অ্যাপ",
      manualBn: false,
      manualEn: false,
      genericBn: "অতিরিক্ত ফি প্রয়োজন",
      genericEn: "Extra cost required",
      ourApp: true,
      ourDetailBn: "সকল ডিভাইসে ফ্রি ও স্মুথ অ্যাপ",
      ourDetailEn: "Free & ultra smooth across all devices",
    },
    {
      featureEn: "18 Integrated Modules in One System (No multiple tools)",
      featureBn: "১৮টি মডিউল এক ছাতার নিচে (আলাদা সফটওয়্যারের ঝামেলা নেই)",
      manualBn: false,
      manualEn: false,
      genericBn: "আলাদা আলাদা বিলিং",
      genericEn: "Separate billing per module",
      ourApp: true,
      ourDetailBn: "এক সাবস্ক্রিপশনে সব আনলিমিটেড",
      ourDetailEn: "All-in-one unified dashboard",
    },
    {
      featureEn: "Cloud Backup, Multi-Branch & Granular RBAC Permissions",
      featureBn: "দৈনিক ক্লাউড ব্যাকআপ ও পদবি অনুযায়ী নিরাপদ অ্যাক্সেস",
      manualBn: "হারানোর উচ্চ ঝুঁকি",
      manualEn: "High risk of data loss",
      genericBn: "ল্যাপটপ ক্র্যাশ হলে ডাটা লস্ট",
      genericEn: "Lost if laptop crashes",
      ourApp: true,
      ourDetailBn: "দৈনিক অটো ব্যাকআপ ও ব্যাংক-গ্রেড সিকিউরিটি",
      ourDetailEn: "Automated daily cloud backup & SSL",
    },
    {
      featureEn: "AI Exam Question Generator & Student Grade Forecasting",
      featureBn: "এআই দিয়ে প্রশ্নপত্র তৈরি ও ফলাফলের ভবিষ্যৎ বিশ্লেষণ",
      manualBn: false,
      manualEn: false,
      genericBn: false,
      genericEn: false,
      ourApp: true,
      ourDetailBn: "আধুনিক এআই মডেল ইন্টিগ্রেশন",
      ourDetailEn: "Next-gen AI assistant embedded",
    },
  ];

  return (
    <section className="py-16 sm:py-20 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.comparison.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {t.comparison.title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300">
            {t.comparison.subtitle}
          </p>
        </div>

        {/* MOBILE VIEW TOGGLE CONTROLS (Only visible on screens < md) */}
        <div className="md:hidden mb-6 space-y-3">
          <div className="flex items-center justify-between gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="text-xs font-bold text-slate-500 pl-2">
              {lang === "bn" ? "কার সাথে তুলনা:" : "Compare against:"}
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setMobileCompareTarget("generic")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  mobileCompareTarget === "generic"
                    ? "bg-cyan-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {lang === "bn" ? "সাধারণ সফটওয়্যার" : "Generic Tools"}
              </button>
              <button
                onClick={() => setMobileCompareTarget("manual")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  mobileCompareTarget === "manual"
                    ? "bg-cyan-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {lang === "bn" ? "খাতা ও এক্সেল" : "Manual / Excel"}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between px-1 text-xs text-slate-500 font-medium">
            <span>
              {lang === "bn"
                ? "EdutaVex এর শ্রেষ্ঠত্ব"
                : "EdutaVex Superiority"}
            </span>
            <button
              onClick={() =>
                setMobileViewStyle(
                  mobileViewStyle === "cards" ? "table" : "cards",
                )
              }
              className="text-cyan-600 dark:text-cyan-400 font-bold hover:underline flex items-center gap-1"
            >
              {mobileViewStyle === "cards" ? (
                <>
                  <TableIcon className="w-3.5 h-3.5" />
                  <span>{lang === "bn" ? "ফুল টেবিল ভিউ" : "Table View"}</span>
                </>
              ) : (
                <>
                  <Layers className="w-3.5 h-3.5" />
                  <span>{lang === "bn" ? "কার্ড ভিউ" : "Card View"}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 1. MOBILE RESPONSIVE CARDS (Active when < md and cards mode) */}
        {mobileViewStyle === "cards" && (
          <div className="md:hidden space-y-3.5">
            {rows.map((row, idx) => {
              const feature = lang === "bn" ? row.featureBn : row.featureEn;
              const competitorVal =
                mobileCompareTarget === "generic"
                  ? lang === "bn"
                    ? row.genericBn
                    : row.genericEn
                  : lang === "bn"
                    ? row.manualBn
                    : row.manualEn;
              const competitorLabel =
                mobileCompareTarget === "generic"
                  ? lang === "bn"
                    ? "সাধারণ সফটওয়্যার"
                    : "Generic Tool"
                  : lang === "bn"
                    ? "খাতা ও এক্সেল"
                    : "Manual / Excel";
              const ourDetail =
                lang === "bn" ? row.ourDetailBn : row.ourDetailEn;

              return (
                <div
                  key={idx}
                  className="rounded-2xl p-4 glass-panel border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
                >
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white leading-snug">
                    {feature}
                  </h3>

                  {/* Comparison Side-by-side on mobile */}
                  <div className="grid grid-cols-1 gap-2.5 pt-1 text-xs min-[420px]:grid-cols-2">
                    {/* Competitor / Old Way */}
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                        {competitorLabel}
                      </p>
                      <div className="mt-1.5 flex min-w-0 items-start gap-1 font-semibold">
                        {competitorVal === false ? (
                          <span className="text-rose-500 flex items-center gap-1 text-xs font-bold">
                            <X className="w-4 h-4 shrink-0" />
                            <span>
                              {lang === "bn"
                                ? "নেই / অনুপস্থিত"
                                : "Not Available"}
                            </span>
                          </span>
                        ) : (
                          <span className="min-w-0 break-words text-amber-500 text-xs font-semibold leading-tight">
                            {competitorVal}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* EdutaVex */}
                    <div className="p-3 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30">
                      <p className="text-[10px] font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-wide flex items-center gap-1">
                        <Award className="w-3 h-3 text-cyan-500" />
                        <span>EdutaVex</span>
                      </p>
                      <div className="mt-1.5 flex min-w-0 items-start gap-1 text-cyan-700 dark:text-cyan-300 font-bold text-xs">
                        <Check className="w-4 h-4 text-cyan-500 shrink-0" />
                        <span className="min-w-0 break-words leading-tight">
                          {ourDetail}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 2. MASTER 4-COLUMN TABLE (Visible on md+ always, or mobile when table view is selected) */}
        <div
          className={`${
            mobileViewStyle === "table" ? "block" : "hidden md:block"
          } overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 glass-panel shadow-xl`}
        >
          {/* Scroll hint on mobile */}
          <div className="md:hidden py-2 px-4 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-semibold flex items-center justify-between border-b border-cyan-500/20">
            <span>
              {lang === "bn"
                ? "← ডানে বামে স্ক্রোল করে তুলনা দেখুন →"
                : "← Swipe sideways to compare →"}
            </span>
          </div>

          <table className="w-full text-left border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-extrabold text-slate-500 uppercase tracking-wider bg-slate-50/70 dark:bg-slate-900/70">
                <th className="py-5 px-4 sm:px-6">{t.comparison.thFeature}</th>
                <th className="py-5 px-4 sm:px-6 text-center text-slate-400">
                  {t.comparison.thManual}
                </th>
                <th className="py-5 px-4 sm:px-6 text-center text-slate-500">
                  {t.comparison.thGeneric}
                </th>
                <th className="py-5 px-4 sm:px-6 text-center text-cyan-600 dark:text-cyan-400 bg-cyan-500/10">
                  <span className="flex items-center justify-center gap-1.5">
                    <Award className="w-4 h-4 text-cyan-500" />
                    <span>{t.comparison.thOurApp}</span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70 text-xs sm:text-sm">
              {rows.map((row, idx) => {
                const feature = lang === "bn" ? row.featureBn : row.featureEn;
                const manualVal = lang === "bn" ? row.manualBn : row.manualEn;
                const genericVal =
                  lang === "bn" ? row.genericBn : row.genericEn;

                return (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-800 dark:text-slate-200">
                      {feature}
                    </td>

                    {/* Manual */}
                    <td className="py-4 px-4 sm:px-6 text-center text-slate-400">
                      {manualVal === false ? (
                        <X className="w-5 h-5 text-rose-400 mx-auto" />
                      ) : (
                        <span className="text-xs text-rose-500 font-medium">
                          {manualVal}
                        </span>
                      )}
                    </td>

                    {/* Generic */}
                    <td className="py-4 px-4 sm:px-6 text-center text-slate-500">
                      {genericVal === false ? (
                        <X className="w-5 h-5 text-slate-400 mx-auto" />
                      ) : (
                        <span className="text-xs text-amber-500 font-medium">
                          {genericVal}
                        </span>
                      )}
                    </td>

                    {/* Our App */}
                    <td className="py-4 px-4 sm:px-6 text-center bg-cyan-500/5">
                      <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mx-auto shadow-sm">
                        <Check className="w-4 h-4" />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
