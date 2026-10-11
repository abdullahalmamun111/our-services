"use client";

import React, { useState } from "react";
import Image from "next/image";
import { translations, Language } from "@/lib/translations";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  FileSpreadsheet,
  Fingerprint,
  GraduationCap,
  LayoutDashboard,
  Library,
  MessageSquare,
  Play,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

interface HeroProps {
  lang: Language;
  onOpenDemo: () => void;
}

const dashboardScreens: {
  id: string;
  image: string;
  icon: LucideIcon;
  titleEn: string;
  titleBn: string;
  descriptionEn: string;
  descriptionBn: string;
}[] = [
  {
    id: "overview",
    image: "/admin.jpg",
    icon: LayoutDashboard,
    titleEn: "Admin",
    titleBn: "অ্যাডমিন",
    descriptionEn:
      "A clear view of the day, from collections to campus activity.",
    descriptionBn: "আয়-ব্যয় থেকে ক্যাম্পাসের দৈনন্দিন কার্যক্রম, সব এক নজরে।",
  },
  {
    id: "fees",
    image: "/fee.jpg",
    icon: CreditCard,
    titleEn: "Fee",
    titleBn: "ফি",
    descriptionEn:
      "Track fee collection, outstanding balances, and account activity.",
    descriptionBn: "ফি আদায়, বকেয়া ও হিসাবের লেনদেন সহজে দেখুন।",
  },
  {
    id: "attendance",
    image: "/hajira.png",
    icon: Fingerprint,
    titleEn: "Hajira",
    titleBn: "হাজিরা",
    descriptionEn: "Review attendance records and keep each class up to date.",
    descriptionBn:
      "হাজিরার রেকর্ড দেখুন এবং প্রতিটি ক্লাসের তথ্য হালনাগাদ রাখুন।",
  },
  {
    id: "results",
    image: "/results.png",
    icon: FileSpreadsheet,
    titleEn: "Results",
    titleBn: "ফলাফল",
    descriptionEn:
      "See exam summaries, student results, and academic progress.",
    descriptionBn:
      "পরীক্ষার সারাংশ, শিক্ষার্থীর ফলাফল ও অগ্রগতি একসঙ্গে দেখুন।",
  },
  {
    id: "routine",
    image: "/routine.png",
    icon: CalendarDays,
    titleEn: "Routine",
    titleBn: "রুটিন",
    descriptionEn:
      "Keep class periods, teachers, and weekly schedules organised.",
    descriptionBn: "ক্লাসের পিরিয়ড, শিক্ষক ও সাপ্তাহিক সময়সূচি গুছিয়ে রাখুন।",
  },
  {
    id: "library",
    image: "/library.png",
    icon: Library,
    titleEn: "Library",
    titleBn: "লাইব্রেরি",
    descriptionEn:
      "Manage the book register, issues, returns, and overdue items.",
    descriptionBn: "বইয়ের তালিকা, ইস্যু-রিটার্ন ও বিলম্বিত বইয়ের হিসাব রাখুন।",
  },
  {
    id: "parent",
    image: "/parent.png",
    icon: Users,
    titleEn: "Parent",
    titleBn: "অভিভাবক",
    descriptionEn:
      "Give families a simple view of attendance, notices, and dues.",
    descriptionBn: "হাজিরা, নোটিশ ও বকেয়ার তথ্য সহজে পৌঁছে দিন অভিভাবকের কাছে।",
  },
  {
    id: "student",
    image: "/student.png",
    icon: GraduationCap,
    titleEn: "Student",
    titleBn: "শিক্ষার্থী",
    descriptionEn:
      "Let students keep up with classes, results, and assignments.",
    descriptionBn: "ক্লাস, ফলাফল ও পড়ার কাজের সঙ্গে শিক্ষার্থীদের যুক্ত রাখুন।",
  },
];

export default function Hero({ lang, onOpenDemo }: HeroProps) {
  const t = translations[lang];
  const [activeScreenId, setActiveScreenId] = useState("overview");
  const activeScreen =
    dashboardScreens.find((screen) => screen.id === activeScreenId) ??
    dashboardScreens[0];
  const ActiveIcon = activeScreen.icon;

  return (
    <section className="relative overflow-hidden pt-8 pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[460px] w-[980px] -translate-x-1/2 rounded-full bg-cyan-300/15 blur-3xl dark:bg-cyan-500/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex justify-center">
          <div className="glass-panel inline-flex items-center gap-2.5 rounded-full border border-cyan-500/25 px-4 py-2 text-xs font-semibold text-slate-800 dark:text-cyan-100 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_0_4px_rgba(6,182,212,0.12)]" />
            <span>{t.hero.badge}</span>
            <span className="ml-1 hidden font-bold text-cyan-600 dark:text-cyan-300 sm:inline">
              2026 Edition
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            <span>{t.hero.titleLine1} </span>
            <span className="text-gradient-primary">
              {t.hero.titleHighlight}
            </span>{" "}
            <span>{t.hero.titleLine2}</span>
          </h1>

          <p className="mx-auto max-w-3xl text-base font-normal leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col items-center justify-center gap-3 pt-1 sm:flex-row">
            <button
              onClick={onOpenDemo}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-cyan-700/20 transition hover:-translate-y-0.5 hover:shadow-cyan-700/30 sm:w-auto sm:text-base"
            >
              <Sparkles className="h-5 w-5 text-cyan-100" />
              <span>{t.hero.btnDemo}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#simulator"
              className="glass-panel flex w-full items-center justify-center gap-2.5 rounded-2xl border border-slate-300 px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:border-cyan-500/50 hover:text-cyan-700 dark:border-slate-700 dark:text-slate-200 dark:hover:text-cyan-300 sm:w-auto sm:text-base"
            >
              <Play className="h-4 w-4 fill-cyan-500 text-cyan-500" />
              <span>{t.hero.btnTour}</span>
            </a>
            <a
              href="https://wa.me/8801986054016"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-500/25 bg-emerald-500/5 px-5 py-3.5 text-sm font-bold text-emerald-700 transition hover:bg-emerald-500/10 dark:text-emerald-300 sm:w-auto sm:text-base"
            >
              <MessageSquare className="h-5 w-5 text-emerald-500" />
              <span>{t.hero.btnCall}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 sm:text-sm">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              {lang === "bn"
                ? "জাতীয় কারিকুলাম ও বোর্ড অনুসারী"
                : "Board & Curriculum Compliant"}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              {lang === "bn"
                ? "বিকাশ, নগদ ও রকেট পেমেন্ট রেডি"
                : "bKash & Nagad Cashless Ready"}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              {lang === "bn"
                ? "বায়োমেট্রিক গেট ও এসএমএস ডিভাইস সাপোর্টেড"
                : "Biometric Device Supported"}
            </span>
          </div>
        </div>

        <section id="simulator" className="mt-16 scroll-mt-24">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase text-cyan-700 dark:text-cyan-300">
                <span className="h-px w-7 bg-cyan-500" />
                <span>
                  {lang === "bn"
                    ? "এক নজরে আপনার ক্যাম্পাস"
                    : "A closer look at your campus"}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
                {lang === "bn"
                  ? "প্রতিষ্ঠানের প্রতিটি কাজ, এক স্মার্ট ড্যাশবোর্ডে"
                  : "Every campus workflow, one clear dashboard"}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                {lang === "bn"
                  ? "হাজিরা, হিসাব, ফলাফল থেকে অভিভাবক পোর্টাল—বাস্তব স্ক্রিনগুলো ঘুরে দেখুন।"
                  : "Explore the real screens for attendance, accounts, results, and the family portals."}
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-xs font-bold text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {lang === "bn"
                ? "ইন্টার‍্যাক্টিভ প্রিভিউ"
                : "Interactive preview"}
            </div>
          </div>

          <div className="mb-4">
            <div
              className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-8"
              role="tablist"
              aria-label={
                lang === "bn"
                  ? "ড্যাশবোর্ড স্ক্রিন বেছে নিন"
                  : "Choose a dashboard screen"
              }
            >
              {dashboardScreens.map((screen) => {
                const Icon = screen.icon;
                const isActive = screen.id === activeScreenId;
                return (
                  <button
                    key={screen.id}
                    id={`simulator-tab-${screen.id}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="simulator-preview"
                    onClick={() => setActiveScreenId(screen.id)}
                    className={`flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-xl border px-2.5 py-2 text-center text-xs font-bold transition sm:text-sm ${
                      isActive
                        ? "border-slate-900 bg-slate-900 text-white shadow-md dark:border-cyan-500 dark:bg-cyan-600"
                        : "border-slate-200 bg-white/75 text-slate-600 hover:border-cyan-500/50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-white"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${isActive ? "text-cyan-300" : "text-slate-400"}`}
                    />
                    <span>
                      {lang === "bn" ? screen.titleBn : screen.titleEn}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_-34px_rgba(15,23,42,0.35)] dark:border-slate-700 dark:bg-slate-950 sm:rounded-3xl">
            <div className="flex h-12 items-center justify-between border-b border-slate-200 bg-slate-50 px-3 dark:border-slate-800 dark:bg-slate-900 sm:px-5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="hidden h-5 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
                <div className="hidden items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1 text-[11px] text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400 sm:flex">
                  <span className="text-emerald-500">●</span>{" "}
                  portal.edutavex.com / {activeScreen.id}
                </div>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200 sm:hidden">
                  EdutaVex
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-500 dark:text-slate-400 sm:text-xs">
                <span className="hidden sm:inline">
                  {lang === "bn" ? "ড্যাশবোর্ড প্রিভিউ" : "Dashboard preview"}
                </span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>{lang === "bn" ? "নিরাপদ" : "Secure"}</span>
              </div>
            </div>

            <div
              id="simulator-preview"
              role="tabpanel"
              aria-labelledby={`simulator-tab-${activeScreen.id}`}
              className="relative bg-[#edf2f4] dark:bg-slate-900"
              style={{
                aspectRatio: activeScreen.id === "overview" ? "1 / 1" : "4 / 3",
              }}
            >
              <Image
                key={activeScreen.image}
                src={activeScreen.image}
                alt={`${lang === "bn" ? activeScreen.titleBn : activeScreen.titleEn} dashboard`}
                fill
                priority={activeScreen.id === "overview"}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1200px"
                className="object-contain"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/10 to-transparent" />
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-200 px-4 py-3 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
                  <ActiveIcon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-slate-900 dark:text-white">
                    {lang === "bn"
                      ? activeScreen.titleBn
                      : activeScreen.titleEn}
                  </p>
                  <p className="line-clamp-2 text-xs text-slate-500 dark:text-slate-400 sm:truncate">
                    {lang === "bn"
                      ? activeScreen.descriptionBn
                      : activeScreen.descriptionEn}
                  </p>
                </div>
              </div>
              <span className="shrink-0 text-[11px] font-semibold tabular-nums text-slate-400">
                {String(
                  dashboardScreens.findIndex(
                    (screen) => screen.id === activeScreenId,
                  ) + 1,
                ).padStart(2, "0")}{" "}
                / 08
              </span>
            </div>
          </div>
        </section>

        <div className="mt-12 grid grid-cols-1 gap-3 min-[320px]:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          <div className="glass-panel rounded-2xl p-4 text-center sm:p-5">
            <Users className="mx-auto h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <p className="mt-2 text-2xl font-black text-cyan-700 dark:text-cyan-300 sm:text-3xl">
              5,000+
            </p>
            <p className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-400 sm:text-sm">
              {t.hero.statStudents}
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-4 text-center sm:p-5">
            <LayoutDashboard className="mx-auto h-5 w-5 text-sky-600 dark:text-sky-400" />
            <p className="mt-2 text-2xl font-black text-sky-700 dark:text-sky-300 sm:text-3xl">
              100+
            </p>
            <p className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-400 sm:text-sm">
              {t.hero.statInstitutes}
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-4 text-center sm:p-5">
            <Sparkles className="mx-auto h-5 w-5 text-amber-600 dark:text-amber-400" />
            <p className="mt-2 text-2xl font-black text-amber-700 dark:text-amber-300 sm:text-3xl">
              18+
            </p>
            <p className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-400 sm:text-sm">
              {t.hero.statModules}
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-4 text-center sm:p-5">
            <CheckCircle2 className="mx-auto h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <p className="mt-2 text-2xl font-black text-emerald-700 dark:text-emerald-300 sm:text-3xl">
              99.9%
            </p>
            <p className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-400 sm:text-sm">
              {t.hero.statUptime}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
