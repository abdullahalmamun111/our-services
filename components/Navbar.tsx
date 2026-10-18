"use client";

import React, { useState } from "react";
import Image from "next/image";
import { translations, Language } from "@/lib/translations";
import { Sun, Moon, Sparkles, Menu, X, School } from "lucide-react";

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
    <header className="sticky top-0 z-40 w-full bg-white/65 dark:bg-[#0A111C]/65 backdrop-blur-2xl border-b border-white/50 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-2 min-[360px]:px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-1 sm:gap-2">
        {/* Logo - Vertical EDUTAVEX Logo */}
        <a
          href="/"
          className="flex items-center group focus:outline-none shrink-0 py-1"
        >
          <Image
            src="/edutavex-logo-vertical-trimmed.png"
            alt="EDUTAVEX"
            width={64}
            height={64}
            priority
            className="h-11 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105 duration-200 drop-shadow-xs"
          />
        </a>

        {/* Desktop Navigation Links — only xl+ */}
        <nav className="hidden xl:flex items-center gap-5 text-sm font-semibold text-[#1F2A37] dark:text-[#F3F4F6] flex-1 justify-center">
          <a
            href="/"
            className="hover:text-[#2A9AD8] transition-colors whitespace-nowrap text-[#1B5E9B] dark:text-[#2A9AD8] font-bold"
          >
            {lang === "bn" ? "← মূল পাতা" : "← Home"}
          </a>
          <a
            href="#packages"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            {t.nav.solutions}
          </a>
          <a
            href="#highlights"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            {t.nav.features}
          </a>
          <a
            href="#modules"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            {t.nav.modules}
          </a>
          <a
            href="#simulator"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            {t.nav.simulator}
          </a>
          <a
            href="#institutes"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap"
          >
            {t.nav.institutes}
          </a>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
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
            className="hidden md:flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#FBB034] to-[#F47F20] hover:from-[#F47F20] hover:to-[#D86B13] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#F47F20]/25 hover:shadow-[#F47F20]/40 active:scale-95 transition-all duration-200"
          >
            <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
            <span>{t.nav.bookDemo}</span>
          </button>

          {/* Mobile language button */}
          <button
            onClick={() => setLang(lang === "bn" ? "en" : "bn")}
            className="sm:hidden px-2 py-1 text-xs font-bold rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-cyan-600 dark:text-cyan-400"
          >
            {lang === "bn" ? "EN" : "বাং"}
          </button>

          {/* Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/tablet dropdown menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-slate-950/98 backdrop-blur-2xl px-5 py-5 space-y-4">
          <div className="flex flex-col gap-0.5 font-semibold text-slate-700 dark:text-slate-200 text-base">
            {[
              { href: "/", label: lang === "bn" ? "← মূল পাতা" : "← Home" },
              { href: "#packages", label: t.nav.solutions },
              { href: "#highlights", label: t.nav.features },
              { href: "#modules", label: t.nav.modules },
              { href: "#simulator", label: t.nav.simulator },
              { href: "#institutes", label: t.nav.institutes },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-2 border-b border-slate-100 dark:border-slate-800/60 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-slate-300 dark:text-slate-600 text-sm">
                  ›
                </span>
              </a>
            ))}
          </div>

          {/* Mobile language switcher */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
              ভাষা / Language:
            </span>
            <button
              onClick={() => setLang("bn")}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                lang === "bn"
                  ? "bg-cyan-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              }`}
            >
              বাংলা
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                lang === "en"
                  ? "bg-cyan-600 text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
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
  );
}
