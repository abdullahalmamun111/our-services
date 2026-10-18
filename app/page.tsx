"use client";

import React, { useState, useEffect } from "react";
import LandingNavbar from "@/components/LandingNavbar";
import LandingHero from "@/components/LandingHero";
import LandingHighlights from "@/components/LandingHighlights";
import LandingSolutions from "@/components/LandingSolutions";
import LandingInteractiveShowcase from "@/components/LandingInteractiveShowcase";
import LandingCtaBanner from "@/components/LandingCtaBanner";
import LandingFooter from "@/components/LandingFooter";
import DemoModal from "@/components/DemoModal";
import MagicCursor from "@/components/MagicCursor";
import { MessageSquare, ArrowUp } from "lucide-react";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [preselectedEdition, setPreselectedEdition] = useState<string | undefined>();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("edutavex_theme") as "dark" | "light" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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

  const handleOpenDemo = (edition?: string) => {
    setPreselectedEdition(edition);
    setDemoModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen selection:bg-[#2A9AD8] selection:text-white transition-colors duration-300 relative ${
        theme === "dark" ? "bg-[#0A111C] text-slate-100" : "bg-white text-slate-900"
      }`}
    >
      {/* Magic Cursor Visual Touch */}
      <MagicCursor />

      {/* Header / Navbar */}
      <LandingNavbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenDemo={handleOpenDemo}
      />

      <main>
        {/* Hero Section */}
        <LandingHero onOpenDemo={handleOpenDemo} />

        {/* 4 Feature Highlights Horizontal Cards */}
        <LandingHighlights />

        {/* Dual Solutions Section: CoachingPro vs SchoolPro (Clicking SchoolPro navigates to /schoolpro) */}
        <LandingSolutions onOpenDemo={handleOpenDemo} />

        {/* Interactive Feature Modules Showcase (Attendance, Fees, Results, Mobile App) */}
        <LandingInteractiveShowcase />

        {/* Bottom Call to Action Dark Banner */}
        <LandingCtaBanner onOpenDemo={handleOpenDemo} />
      </main>

      {/* Footer */}
      <LandingFooter />

      {/* Free Demo Booking Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        lang="bn"
        preselectedModule={preselectedEdition}
      />

      {/* Floating Action Buttons: WhatsApp & Scroll to Top */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/8801986054016"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Support"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white p-3 sm:p-3.5 shadow-xl shadow-emerald-600/30 hover:scale-108 active:scale-95 transition-all flex items-center justify-center group relative"
        >
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute right-16 sm:right-18 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg">
            হোয়াটসঅ্যাপে কথা বলুন
          </span>
        </a>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#2A9AD8] dark:hover:text-[#2A9AD8] border border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center transition-all animate-in fade-in"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
