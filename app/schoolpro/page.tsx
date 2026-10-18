"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import MagicCursor from "@/components/MagicCursor";
import Hero from "@/components/Hero";
import QuickHighlights from "@/components/QuickHighlights";
import PricingPackages from "@/components/PricingPackages";
import DailyOperationsPillars from "@/components/DailyOperationsPillars";
import ModulesShowcase from "@/components/ModulesShowcase";
import InstitutionTypes from "@/components/InstitutionTypes";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import { Language } from "@/lib/translations";
import { MessageSquare, ArrowUp, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function SchoolProPage() {
  const [lang, setLang] = useState<Language>("bn");
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [preselectedModule, setPreselectedModule] = useState<string | undefined>();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize theme and language on mount
  useEffect(() => {
    const savedTheme = (localStorage.getItem("edutavex_theme") ||
      localStorage.getItem("eduverse_theme")) as "dark" | "light" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const savedLang = (localStorage.getItem("edutavex_lang") ||
      localStorage.getItem("eduverse_lang")) as Language | null;
    if (savedLang) {
      setLang(savedLang);
    }

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("edutavex_theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("edutavex_lang", newLang);
  };

  const handleOpenDemo = (moduleName?: string) => {
    setPreselectedModule(moduleName);
    setDemoModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen selection:bg-cyan-500 selection:text-white transition-colors duration-300 relative ${
        theme === "dark" ? "bg-[#070b14] text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Magic Cursor Aura Effect */}
      <MagicCursor />

      {/* Top Banner with back-to-home navigation */}
      <div className="bg-gradient-to-r from-[#2A9AD8] to-[#1B5E9B] text-white text-xs sm:text-sm py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-bold hover:underline text-[#FDF4DC] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === "bn" ? "মূল পাতায় ফিরে যান" : "Back to Home"}</span>
          </Link>
          <div className="flex items-center gap-2 text-xs">
            <span className="hidden sm:inline opacity-80">
              {lang === "bn"
                ? "স্কুল ও কলেজ সম্পূর্ণ অটোমেশনের জন্য নিবেদিত পোর্টাল"
                : "Dedicated School & College Management Edition"}
            </span>
            <span className="bg-white/20 px-2 py-0.5 rounded-full font-bold">SchoolPro Active</span>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={handleSetLang}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenDemo={() => handleOpenDemo()}
      />

      <main>
        {/* Hero Section with Live Interactive Preview */}
        <Hero lang={lang} onOpenDemo={() => handleOpenDemo()} />

        {/* 4 Pillars Bar */}
        <QuickHighlights lang={lang} />

        {/* 3 Modern Packages (Basic, Standard, Premium) */}
        <PricingPackages lang={lang} onOpenDemo={handleOpenDemo} />

        {/* 4 Daily Operations That Matter Most */}
        <DailyOperationsPillars lang={lang} onOpenDemo={() => handleOpenDemo()} />

        {/* 18 Integrated Enterprise Modules with search & category filters */}
        <ModulesShowcase lang={lang} />

        {/* One Platform for Every Institution Type */}
        <InstitutionTypes lang={lang} onOpenDemo={handleOpenDemo} />

        {/* Side-by-side Comparison Matrix */}
        <ComparisonTable lang={lang} />

        {/* FAQ Section */}
        <FAQSection lang={lang} />
      </main>

      {/* Comprehensive Footer */}
      <Footer lang={lang} onOpenDemo={() => handleOpenDemo()} />

      {/* Interactive Free Demo Booking Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        lang={lang}
        preselectedModule={preselectedModule}
      />

      {/* Floating Action Buttons (WhatsApp & Scroll Top) */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/8801986054016"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Support"
          className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white p-2.5 sm:p-3.5 shadow-xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all flex items-center justify-center group relative"
        >
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute right-14 sm:right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg">
            {lang === "bn" ? "হোয়াটসঅ্যাপে কথা বলুন" : "Chat on WhatsApp"}
          </span>
        </a>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 shadow-lg flex items-center justify-center transition-all animate-in fade-in"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
