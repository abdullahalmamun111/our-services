"use client";

import React, { useState } from "react";
import Image from "next/image";
import { translations, Language } from "@/lib/translations";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  CreditCard,
  Fingerprint,
  FileSpreadsheet,
  Layers,
  MessageSquare,
  TrendingUp,
  Download,
  School,
  BookOpen,
  Check,
  Clock,
  Play,
} from "lucide-react";

interface HeroProps {
  lang: Language;
  onOpenDemo: () => void;
}

export default function Hero({ lang, onOpenDemo }: HeroProps) {
  const t = translations[lang];

  // Hero interactive simulator state
  const [activeEdition, setActiveEdition] = useState<"school" | "coaching">("school");
  const [activeTab, setActiveTab] = useState<"overview" | "gate" | "fees" | "result">("overview");
  const [overviewMediaType, setOverviewMediaType] = useState<"software" | "campus">("software");

  // Gate simulation state
  const [gateLogged, setGateLogged] = useState(false);
  const [simulatingGate, setSimulatingGate] = useState(false);

  // Fee simulation state
  const [feePaid, setFeePaid] = useState(false);

  const handleSimulateGate = () => {
    setSimulatingGate(true);
    setTimeout(() => {
      setSimulatingGate(false);
      setGateLogged(true);
    }, 800);
  };

  return (
    <section className="relative pt-8 pb-20 overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] glow-spot-blue pointer-events-none -z-10 blur-3xl opacity-70 dark:opacity-40" />
      <div className="absolute top-48 left-10 w-96 h-96 glow-spot-emerald pointer-events-none -z-10 blur-3xl opacity-50 dark:opacity-30" />
      <div className="absolute top-72 right-10 w-96 h-96 glow-spot-purple pointer-events-none -z-10 blur-3xl opacity-50 dark:opacity-30" />

      {/* Grid texture overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-10 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top announcement pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel shadow-sm border border-cyan-500/30 text-xs sm:text-sm font-semibold text-slate-800 dark:text-cyan-200">
            <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
            <span>{t.hero.badge}</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold ml-1">★ 2026 Edition</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
            <span>{t.hero.titleLine1} </span>
            <span className="text-gradient-primary relative inline-block">
              {t.hero.titleHighlight}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-cyan-500/40 -z-10"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>{" "}
            <span>{t.hero.titleLine2}</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>

          {/* Dual Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-cyan-600/30 hover:shadow-cyan-600/50 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 group"
            >
              <Sparkles className="w-5 h-5 text-cyan-200" />
              <span>{t.hero.btnDemo}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#simulator"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl glass-panel hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-base border border-slate-300 dark:border-slate-700/80 transition-all flex items-center justify-center gap-2.5"
            >
              <Play className="w-4 h-4 text-cyan-500 fill-cyan-500" />
              <span>{t.hero.btnTour}</span>
            </a>

            <a
              href="https://wa.me/8801986054016"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 font-bold text-base border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5 text-emerald-500" />
              <span>{t.hero.btnCall}</span>
            </a>
          </div>

          {/* Quick trust micro badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              {lang === "bn" ? "জাতীয় কারিকুলাম ও বোর্ড অনুসারী" : "Board & Curriculum Compliant"}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              {lang === "bn" ? "বিকাশ, নগদ ও রকেট পেমেন্ট রেডি" : "bKash & Nagad Cashless Ready"}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              {lang === "bn" ? "বায়োমেট্রিক গেট ও এসএমএস ডিভাইস সাপোর্টেড" : "Biometric Device Supported"}
            </span>
          </div>
        </div>

        {/* Photo + Interactive Live Mockup Showcase */}
        <div className="mt-14 relative" id="simulator">
          {/* Glowing frame container */}
          <div className="rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-cyan-500/20 via-sky-500/10 to-transparent border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
            <div className="rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl">
              
              {/* Mockup Window Header */}
              <div className="bg-slate-100 dark:bg-slate-900/90 px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700 mx-2 hidden sm:block" />
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 hidden sm:inline">
                    app.eduverse360.com / {activeEdition === "school" ? "SchoolPro" : "CoachingPro"}
                  </span>
                </div>

                {/* Edition switcher tabs */}
                <div className="flex items-center bg-slate-200/80 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
                  <button
                    onClick={() => setActiveEdition("school")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                      activeEdition === "school"
                        ? "bg-white dark:bg-cyan-600 text-cyan-700 dark:text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:white"
                    }`}
                  >
                    <School className="w-3.5 h-3.5" />
                    <span>SchoolPro Mode</span>
                  </button>
                  <button
                    onClick={() => setActiveEdition("coaching")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                      activeEdition === "coaching"
                        ? "bg-white dark:bg-cyan-600 text-cyan-700 dark:text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:white"
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>CoachingPro Mode</span>
                  </button>
                </div>

                {/* Live System Online indicator */}
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="hidden md:inline">
                    {lang === "bn" ? "লাইভ ক্লাউড সিঙ্ক: সক্রিয়" : "Live Cloud: 100% Synced"}
                  </span>
                </div>
              </div>

              {/* Sub-navigation tabs inside the simulator */}
              <div className="bg-slate-50 dark:bg-slate-900/50 px-3 sm:px-6 py-2.5 sm:py-3 border-b border-slate-200 dark:border-slate-800/80 flex items-center overflow-x-auto gap-2 sm:gap-3 scrollbar-none">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 sm:gap-2 shrink-0 ${
                    activeTab === "overview"
                      ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/25"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-cyan-500"
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{t.hero.simTabOverview}</span>
                </button>

                <button
                  onClick={() => setActiveTab("gate")}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 sm:gap-2 shrink-0 ${
                    activeTab === "gate"
                      ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/25"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-cyan-500"
                  }`}
                >
                  <Fingerprint className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  <span>{t.hero.simTabGate}</span>
                </button>

                <button
                  onClick={() => setActiveTab("fees")}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 sm:gap-2 shrink-0 ${
                    activeTab === "fees"
                      ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/25"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-cyan-500"
                  }`}
                >
                  <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
                  <span>{t.hero.simTabFees}</span>
                </button>

                <button
                  onClick={() => setActiveTab("result")}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 sm:gap-2 shrink-0 ${
                    activeTab === "result"
                      ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/25"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-cyan-500"
                  }`}
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                  <span>{t.hero.simTabResult}</span>
                </button>
              </div>

              {/* Live Interactive Tab Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                {/* TAB 1: OVERVIEW METRICS */}
                {activeTab === "overview" && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    {/* Top 4 Stat Widgets */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Metric 1: Students */}
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 dark:bg-slate-900/60">
                        <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
                          <span>{lang === "bn" ? "মোট শিক্ষার্থী" : "Total Students"}</span>
                          <Users className="w-4 h-4 text-cyan-500" />
                        </div>
                        <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                          {activeEdition === "school" ? "1,450" : "420"}
                        </div>
                        <div className="mt-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <span>+12% {lang === "bn" ? "নতুন ভর্তি" : "new admissions"}</span>
                          <span className="text-slate-400 font-normal">{lang === "bn" ? "এই সেশনে" : "this session"}</span>
                        </div>
                      </div>

                      {/* Metric 2: Today Attendance */}
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 dark:bg-slate-900/60">
                        <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
                          <span>{lang === "bn" ? "আজকের উপস্থিতি" : "Today Attendance"}</span>
                          <Fingerprint className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                          96.8%
                        </div>
                        <div className="mt-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                          {activeEdition === "school" ? (lang === "bn" ? "১,৩৯৮ জন উপস্থিত" : "1,398 present") : (lang === "bn" ? "৪০৬ জন উপস্থিত" : "406 present")}
                        </div>
                      </div>

                      {/* Metric 3: Fees Collected */}
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-500/10 to-transparent border border-sky-500/20 dark:bg-slate-900/60">
                        <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
                          <span>{lang === "bn" ? "চলতি মাসে আদায়" : "Fees Collected"}</span>
                          <CreditCard className="w-4 h-4 text-sky-500" />
                        </div>
                        <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                          ৳ ৮,৭২,০০০
                        </div>
                        <div className="mt-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                          ৮৫% আদায় সম্পন্ন
                        </div>
                      </div>

                      {/* Metric 4: Pending Dues */}
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 dark:bg-slate-900/60">
                        <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs font-semibold">
                          <span>{lang === "bn" ? "বকেয়া ফি রিমাইন্ডার" : "Pending Dues"}</span>
                          <Clock className="w-4 h-4 text-amber-500" />
                        </div>
                        <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400">
                          ৳ 42,500
                        </div>
                        <div className="mt-1 text-[11px] font-semibold text-cyan-600 dark:text-cyan-400">
                          {lang === "bn" ? "অটো এসএমএস শিডিউল্ড" : "Auto SMS scheduled"}
                        </div>
                      </div>
                    </div>

                    {/* Middle split: Photo of campus students / Real Software UI + Interactive Operations preview */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      {/* Left: Authentic System Dashboard / Student Photography */}
                      <div className="lg:col-span-7 relative rounded-2xl overflow-hidden group shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-950">
                        {/* Media switcher pills */}
                        <div className="absolute top-3 right-3 z-20 flex items-center p-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold text-white">
                          <button
                            onClick={() => setOverviewMediaType("software")}
                            className={`px-2.5 py-1 rounded-lg transition-all ${
                              overviewMediaType === "software"
                                ? "bg-cyan-600 text-white shadow-sm"
                                : "text-slate-300 hover:text-white"
                            }`}
                          >
                            {lang === "bn" ? "💻 সফটওয়্যার প্রিভিউ" : "💻 ERP UI"}
                          </button>
                          <button
                            onClick={() => setOverviewMediaType("campus")}
                            className={`px-2.5 py-1 rounded-lg transition-all ${
                              overviewMediaType === "campus"
                                ? "bg-cyan-600 text-white shadow-sm"
                                : "text-slate-300 hover:text-white"
                            }`}
                          >
                            {lang === "bn" ? "🏫 ক্যাম্পাস লাইফ" : "🏫 Campus"}
                          </button>
                        </div>

                        <div className="relative h-64 sm:h-80 w-full">
                          <Image
                            src={
                              overviewMediaType === "software"
                                ? (activeEdition === "school"
                                    ? "/images/school_admin_dashboard.jpg"
                                    : "/images/fees_finance_dashboard.jpg")
                                : (activeEdition === "school"
                                    ? "/images/campus_students.jpg"
                                    : "/images/teacher_classroom.jpg")
                            }
                            alt="EduVerse 360 Educational Management System"
                            fill
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Floating Glass Badges over image */}
                        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-white">
                          <div className="glass-panel px-3.5 py-1.5 rounded-xl border border-white/20 text-xs font-bold flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>
                              {activeEdition === "school"
                                ? (lang === "bn" ? "ঢাকা ড্রিম স্কুল (SchoolPro মাস্টার এডমিন)" : "Dhaka Dream School (SchoolPro ERP)")
                                : (lang === "bn" ? "কোচিং ও একাডেমিয়া (CoachingPro লাইভ লেজার)" : "Oxford Academy (CoachingPro Live)")}
                            </span>
                          </div>
                          <span className="text-[11px] font-medium bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg">
                            {lang === "bn"
                              ? "রিয়েল-টাইম ক্লাউড মনিটরিং"
                              : "Real-time Cloud Monitoring"}
                          </span>
                        </div>
                      </div>

                      {/* Right: Quick Live Action Activity Stream */}
                      <div className="lg:col-span-5 space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                            {lang === "bn"
                              ? "আজকের লাইভ অপারেশন স্ট্যাটাস"
                              : "Today's Live Operations Feed"}
                          </h4>
                          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                            Live Stream
                          </span>
                        </div>

                        <div className="space-y-2 text-xs">
                          {/* Feed item 1 */}
                          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                              <Fingerprint className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-slate-800 dark:text-slate-200 truncate">
                                {lang === "bn"
                                  ? "গেট বায়োমেট্রিক হাজিরা কনফার্ম"
                                  : "Gate RFID Punch Confirmed"}
                              </p>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                {lang === "bn" ? "তানভীর হাসান (রোল ১২, ক্লাস ৯) • ০৮:০২ AM" : "Tanvir Hasan (Roll 12, Class 9) • 08:02 AM"}
                              </p>
                            </div>
                            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                              SMS Sent
                            </span>
                          </div>

                          {/* Feed item 2 */}
                          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-500 flex items-center justify-center shrink-0">
                              <CreditCard className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-slate-800 dark:text-slate-200 truncate">
                                {lang === "bn"
                                  ? "বিকাশ ক্যাশলেস ফি রিসিভ"
                                  : "bKash Online Tuition Fee"}
                              </p>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                ৳ 2,500 • {lang === "bn" ? "রসিদ নং" : "Receipt"}: #INV-9821
                              </p>
                            </div>
                            <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400">
                              Auto Ledger
                            </span>
                          </div>

                          {/* Feed item 3 */}
                          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                              <FileSpreadsheet className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-slate-800 dark:text-slate-200 truncate">
                                {lang === "bn"
                                  ? "টার্ম পরীক্ষার মেধা তালিকা প্রস্তুত"
                                  : "Mid-Term Result Published"}
                              </p>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                {lang === "bn" ? "ক্লাস ১০ • জিপিএ ৫.০০: ৪২ জন" : "Class 10 • GPA 5.00: 42 students"}
                              </p>
                            </div>
                            <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">
                              Published
                            </span>
                          </div>
                        </div>

                        {/* Interactive trigger */}
                        <div className="pt-1">
                          <button
                            onClick={() => setActiveTab("gate")}
                            className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-cyan-600/10 dark:bg-cyan-500/10 hover:bg-cyan-600/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 transition-all flex items-center justify-center gap-1.5"
                          >
                            <span>
                              {lang === "bn"
                                ? "গেট হাজিরা ও এসএমএস সিমুলেট করুন"
                                : "Simulate Gate Punch & Instant SMS"}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: BIOMETRIC GATE & GUARDIAN SMS SIMULATOR */}
                {activeTab === "gate" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                        <Fingerprint className="w-4 h-4" />
                        <span>RFID & Biometric Gate Simulation</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                        {lang === "bn"
                          ? "গেটে পাঞ্চ করলেই অভিভাবকের ফোনে ইনস্ট্যান্ট এসএমএস"
                          : "Student Punches In → Parent Gets Instant SMS Alert"}
                      </h3>

                      {/* Real Photo of student tapping RFID card on gate reader */}
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md aspect-[16/9] w-full bg-slate-950 group">
                        <Image
                          src="/images/smart_gate_attendance.jpg"
                          alt="Student tapping RFID card on gate access control reader"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                          <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 font-bold flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            <span>{lang === "bn" ? "আরএফআইডি টার্মিনাল সক্রিয়" : "RFID Terminal Active"}</span>
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-emerald-600/90 font-black">
                            {lang === "bn" ? "০.৩ সেকেন্ড রেসপন্স" : "0.3s Instant Alert"}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {lang === "bn"
                          ? "কোনো ম্যানুয়াল খাতা বা সময় নষ্ট নয়। গেটে আরএফআইডি কার্ড স্পর্শ বা ফিঙ্গারপ্রিন্ট দেওয়া মাত্রই স্বয়ংক্রিয়ভাবে প্রবেশ ও প্রস্থানের সময় রেকর্ড হয়।"
                          : "No paper registers. The millisecond the student taps their RFID smart card or biometric sensor at the school gate, parents receive instant peace of mind."}
                      </p>

                      <div className="space-y-3 pt-1">
                        <button
                          onClick={handleSimulateGate}
                          disabled={simulatingGate}
                          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 active:scale-95 transition-all flex items-center gap-2.5 disabled:opacity-50"
                        >
                          <Fingerprint className="w-5 h-5" />
                          <span>
                            {simulatingGate
                              ? lang === "bn"
                                ? "পাঞ্চ প্রসেস হচ্ছে..."
                                : "Processing Punch..."
                              : t.operations.simGateBtn}
                          </span>
                        </button>

                        {gateLogged && (
                          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-2">
                            <Check className="w-4 h-4 shrink-0" />
                            <span>{t.operations.simGateSuccess}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Simulated Mobile Phone Screen */}
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="w-72 rounded-[36px] bg-slate-900 p-3 shadow-2xl border-4 border-slate-700/80 text-white">
                        {/* Phone notch */}
                        <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <span className="w-2.5 h-2.5 rounded-full bg-slate-950 inline-block" />
                        </div>

                        {/* Phone Screen Content */}
                        <div className="bg-slate-950 rounded-[24px] p-4 min-h-[340px] flex flex-col justify-between">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800">
                              <span>Messages</span>
                              <span>08:02 AM</span>
                            </div>

                            <div className="text-center">
                              <span className="text-xs font-bold text-slate-300">
                                EduVerse SMS Gateway
                              </span>
                              <p className="text-[10px] text-slate-500">
                                {t.operations.simSmsPhone}
                              </p>
                            </div>

                            {/* SMS Bubble */}
                            <div className="p-3.5 rounded-2xl bg-cyan-600 text-white text-xs leading-relaxed shadow-lg">
                              <p>{t.operations.simSmsMsg}</p>
                              <div className="mt-2 text-[9px] text-cyan-200 text-right flex items-center justify-end gap-1">
                                <span>08:02 AM</span>
                                <Check className="w-3 h-3" />
                              </div>
                            </div>

                            {/* Live Badge */}
                            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                              <span>
                                {lang === "bn"
                                  ? "গেট স্ট্যাটাস: ইন (Gate #1)"
                                  : "Gate Log: IN (Main Gate #1)"}
                              </span>
                            </div>
                          </div>

                          <div className="text-center text-[10px] text-slate-500 pt-3">
                            {lang === "bn"
                              ? "টেলিটক, গ্রামীণফোন, রবি ও বাংলালিংক এপিআই ইন্টিগ্রেটেড"
                              : "Telecom API Gateway Integrated"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: FEES & BKASH PAYMENT VOUCHER */}
                {activeTab === "fees" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-bold">
                        <CreditCard className="w-4 h-4" />
                        <span>Cashless Automated Invoicing</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                        {lang === "bn"
                          ? "বিকাশ ও নগদ পেমেন্ট গেটওয়েতে মুহূর্তেই ফি আদায়"
                          : "Collect Fees via bKash, Nagad & Generate Instant Receipts"}
                      </h3>

                      {/* Real Desktop Monitor Screenshot */}
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md aspect-[16/9] w-full bg-slate-950 group">
                        <Image
                          src="/images/fees_finance_dashboard.jpg"
                          alt="Live Fees & Finance Desktop Dashboard"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                          <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 font-bold flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                            <span>{lang === "bn" ? "লাইভ ফি কালেকশন লেজার" : "Real-time Fee Ledger"}</span>
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-sky-600/90 font-black">
                            {lang === "bn" ? "বিকাশ ও নগদ অটো সিঙ্ক" : "bKash & Nagad Auto Sync"}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {lang === "bn"
                          ? "টিউশন ফি, সেশন চার্জ বা পরীক্ষার ফি সরাসরি অভিভাবকদের বিকাশ অ্যাপ থেকে পরিশোধ করা যায়। সাথে সাথে সিস্টেম স্বয়ংক্রিয়ভাবে অ্যাকাউন্টসে টাকা ক্রেডিট করে।"
                          : "Parents pay tuition or exam fees right from their bKash or Nagad wallet. The ledger updates in real-time, eliminating manual reconciliation errors."}
                      </p>

                      <div className="pt-1">
                        <button
                          onClick={() => setFeePaid(!feePaid)}
                          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-bold text-sm shadow-lg shadow-pink-600/25 active:scale-95 transition-all flex items-center gap-2.5"
                        >
                          <CreditCard className="w-4 h-4" />
                          <span>
                            {feePaid
                              ? lang === "bn"
                                ? "পেমেন্ট রিসেট করুন"
                                : "Reset Demo Payment"
                              : lang === "bn"
                              ? "বিকাশ দিয়ে ফি পে করুন (সিমুলেশন)"
                              : "Simulate bKash Payment (৳ 2,500)"}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Simulated Money Receipt Voucher */}
                    <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-dashed border-slate-300 dark:border-slate-700">
                        <div>
                          <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
                            OFFICIAL MONEY RECEIPT
                          </h4>
                          <p className="text-[11px] text-slate-500">
                            Inv #EV-2026-98124 • 10 Oct 2026
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            feePaid
                              ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300"
                              : "bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300"
                          }`}
                        >
                          {feePaid ? "PAID (bKash)" : "DUE / PENDING"}
                        </span>
                      </div>

                      <div className="text-xs space-y-1.5 text-slate-600 dark:text-slate-300">
                        <div className="flex justify-between">
                          <span className="font-medium text-slate-400">Student:</span>
                          <span className="font-bold">Tanvir Hasan (Roll 12)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-slate-400">Class / Batch:</span>
                          <span className="font-bold">Class 9 (Science - A)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-slate-400">Tuition Fee:</span>
                          <span className="font-bold">৳ 2,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-slate-400">Lab & Exam Fee:</span>
                          <span className="font-bold">৳ 500</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-slate-200 dark:border-slate-800 text-sm font-extrabold text-slate-900 dark:text-white">
                          <span>Total Amount:</span>
                          <span className="text-cyan-600 dark:text-cyan-400">৳ 2,500</span>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                        <span>Digital Signature: Verified ✓</span>
                        <button className="flex items-center gap-1 font-bold text-cyan-600 dark:text-cyan-400 hover:underline">
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF Download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: EXAM & MARKSHEET GENERATOR */}
                {activeTab === "result" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-in fade-in duration-300">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold">
                        <FileSpreadsheet className="w-4 h-4" />
                        <span>Auto Grading & Transcript Engine</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                        {lang === "bn"
                          ? "বোর্ড স্ট্যান্ডার্ড জিপিএ ও স্বয়ংক্রিয় মার্কশিট প্রিন্টিং"
                          : "Automated GPA, CGPA & 1-Click Printable Marksheets"}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {lang === "bn"
                          ? "শিক্ষকরা নম্বর ইনপুট করলেই সিস্টেম স্বয়ংক্রিয়ভাবে লেটার গ্রেড (A+, A, B), জিপিএ পয়েন্ট ও মেধা তালিকা তৈরি করে। কোনো ক্যালকুলেটরের প্রয়োজন নেই।"
                          : "Teachers enter test scores and our engine computes grades, GPA points, class positions, and generates Board-compliant printable transcripts."}
                      </p>

                      <div className="pt-2">
                        <button
                          onClick={onOpenDemo}
                          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-purple-600/25 active:scale-95 transition-all flex items-center gap-2"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>{lang === "bn" ? "মার্কশিট ডিজাইনার ডেমো দেখুন" : "View Marksheet Designer Demo"}</span>
                        </button>
                      </div>
                    </div>

                    {/* Simulated Student Marksheet Card */}
                    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-3">
                      <div className="text-center pb-2 border-b border-slate-200 dark:border-slate-800">
                        <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">
                          ACADEMIC TRANSCRIPT • MID-TERM
                        </h4>
                        <p className="text-[11px] text-slate-500">
                          Student: Sadia Islam | Roll: 01 | Class: 10
                        </p>
                      </div>

                      <div className="text-xs space-y-2">
                        <div className="grid grid-cols-4 font-bold text-slate-400 text-[11px] pb-1 border-b border-slate-200 dark:border-slate-800">
                          <span>Subject</span>
                          <span className="text-center">Marks</span>
                          <span className="text-center">Grade</span>
                          <span className="text-right">Point</span>
                        </div>
                        <div className="grid grid-cols-4 text-slate-700 dark:text-slate-300">
                          <span className="font-semibold">Bangla</span>
                          <span className="text-center">88</span>
                          <span className="text-center font-bold text-emerald-500">A+</span>
                          <span className="text-right font-bold">5.00</span>
                        </div>
                        <div className="grid grid-cols-4 text-slate-700 dark:text-slate-300">
                          <span className="font-semibold">English</span>
                          <span className="text-center">84</span>
                          <span className="text-center font-bold text-emerald-500">A+</span>
                          <span className="text-right font-bold">5.00</span>
                        </div>
                        <div className="grid grid-cols-4 text-slate-700 dark:text-slate-300">
                          <span className="font-semibold">Mathematics</span>
                          <span className="text-center">95</span>
                          <span className="text-center font-bold text-emerald-500">A+</span>
                          <span className="text-right font-bold">5.00</span>
                        </div>
                        <div className="grid grid-cols-4 text-slate-700 dark:text-slate-300">
                          <span className="font-semibold">Physics</span>
                          <span className="text-center">91</span>
                          <span className="text-center font-bold text-emerald-500">A+</span>
                          <span className="text-right font-bold">5.00</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-slate-400">Calculated GPA:</p>
                          <p className="text-xl font-black text-emerald-500">5.00 (Golden)</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] text-slate-400">Class Position:</p>
                          <p className="text-base font-extrabold text-cyan-500">1st Place</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Metric Counters from EduPilot360 */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-2xl glass-panel text-center border border-slate-200/80 dark:border-slate-800/80">
            <p className="text-3xl sm:text-4xl font-black text-cyan-600 dark:text-cyan-400">5,000+</p>
            <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">{t.hero.statStudents}</p>
          </div>
          <div className="p-5 rounded-2xl glass-panel text-center border border-slate-200/80 dark:border-slate-800/80">
            <p className="text-3xl sm:text-4xl font-black text-sky-600 dark:text-sky-400">100+</p>
            <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">{t.hero.statInstitutes}</p>
          </div>
          <div className="p-5 rounded-2xl glass-panel text-center border border-slate-200/80 dark:border-slate-800/80">
            <p className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400">18+</p>
            <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">{t.hero.statModules}</p>
          </div>
          <div className="p-5 rounded-2xl glass-panel text-center border border-slate-200/80 dark:border-slate-800/80">
            <p className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400">99.9%</p>
            <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">{t.hero.statUptime}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
