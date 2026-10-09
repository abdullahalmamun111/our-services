"use client";

import React, { useState } from "react";
import { translations, Language } from "@/lib/translations";
import {
  Sun,
  Moon,
  Sparkles,
  Menu,
  X,
  GraduationCap,
} from "lucide-react";

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
  onOpenDemo: () => void;
}

export default function Navbar({
  lang,
  setLang,
  theme,
  toggleTheme,
  onOpenDemo,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 text-center font-medium flex items-center justify-center gap-1.5 sm:gap-2 relative z-40">
        <span className="flex h-2 w-2 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </span>
        <span className="truncate">
          {lang === "bn"
            ? "নতুন: এআই প্রশ্নব্যাংক ও স্বয়ংক্রিয় হোয়াটসঅ্যাপ ২.০ চালু!"
            : "NEW: AI Exam Generator & WhatsApp 2.0 Integration Live!"}
        </span>
        <button
          onClick={onOpenDemo}
          className="underline font-bold hover:text-cyan-100 transition-colors hidden sm:inline shrink-0 ml-1"
        >
          {lang === "bn" ? "দেখুন →" : "Details →"}
        </button>
      </div>

      {/* Main glass sticky navbar */}
      <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-200/80 dark:border-slate-800/80 backdrop-blur-xl transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">

          {/* Logo - ALWAYS visible on every screen */}
          <a href="#" className="flex items-center gap-2 group focus:outline-none shrink-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-cyan-600 via-sky-500 to-blue-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[10px] sm:rounded-[14px] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-base sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                  EduVerse
                </span>
                <span className="text-base sm:text-xl font-extrabold text-cyan-500">360</span>
                <span className="px-1 py-0.2 text-[8px] sm:text-[9px] font-bold uppercase rounded-md bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 border border-cyan-300/40 dark:border-cyan-700/40 hidden sm:inline">
                  OS
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 dark:text-slate-400 tracking-wider hidden sm:block">
                {lang === "bn" ? "স্মার্ট ক্যাম্পাস ম্যানেজমেন্ট" : "Next-Gen Campus Suite"}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links — only xl+ */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-semibold text-slate-600 dark:text-slate-300 flex-1 justify-center">
            <a href="#solutions" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap">
              {t.nav.solutions}
            </a>
            <a href="#highlights" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap">
              {t.nav.features}
            </a>
            <a href="#modules" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap">
              {t.nav.modules}
            </a>
            <a href="#simulator" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap">
              {t.nav.simulator}
            </a>
            <a href="#calculator" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap">
              {t.nav.calculator}
            </a>
            <a href="#institutes" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap">
              {t.nav.institutes}
            </a>
            <a href="#reviews" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap">
              {t.nav.reviews}
            </a>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Language Switcher — desktop / tablet sm+ */}
            <div className="hidden sm:flex items-center p-1 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 text-xs font-bold">
              <button
                onClick={() => setLang("bn")}
                className={`px-2 sm:px-2.5 py-1 rounded-full transition-all duration-200 ${
                  lang === "bn"
                    ? "bg-cyan-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                বাংলা
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2 sm:px-2.5 py-1 rounded-full transition-all duration-200 ${
                  lang === "en"
                    ? "bg-cyan-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 hover:scale-105 active:scale-95 transition-all shadow-sm"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Free Demo Button — desktop */}
            <button
              onClick={onOpenDemo}
              className="hidden md:flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-95 transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-pulse" />
              <span>{t.nav.bookDemo}</span>
            </button>

            {/* Mobile language button */}
            <button
              onClick={() => setLang(lang === "bn" ? "en" : "bn")}
              className="sm:hidden px-2.5 py-1 text-xs font-bold rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-cyan-600 dark:text-cyan-400"
            >
              {lang === "bn" ? "EN" : "বাং"}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile/tablet dropdown menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-slate-950/98 backdrop-blur-2xl px-5 py-5 space-y-4">
            <div className="flex flex-col gap-0.5 font-semibold text-slate-700 dark:text-slate-200 text-base">
              {[
                { href: "#solutions", label: t.nav.solutions },
                { href: "#highlights", label: t.nav.features },
                { href: "#modules", label: t.nav.modules },
                { href: "#simulator", label: t.nav.simulator },
                { href: "#calculator", label: t.nav.calculator },
                { href: "#institutes", label: t.nav.institutes },
                { href: "#reviews", label: t.nav.reviews },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-2 border-b border-slate-100 dark:border-slate-800/60 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-slate-300 dark:text-slate-600 text-sm">›</span>
                </a>
              ))}
            </div>

            {/* Mobile language switcher */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">ভাষা / Language:</span>
              <button
                onClick={() => setLang("bn")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  lang === "bn" ? "bg-cyan-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}
              >
                বাংলা
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  lang === "en" ? "bg-cyan-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}
              >
                English
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-center shadow-lg shadow-cyan-600/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>{t.nav.bookDemo}</span>
            </button>
          </div>
        )}
      </header>
    </>
  );
}
