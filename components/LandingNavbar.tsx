"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sun,
  Moon,
  ArrowRight,
  Menu,
  X,
  BookOpen,
  School,
  Layers,
  Sparkles,
} from "lucide-react";

interface LandingNavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
  onOpenDemo: (edition?: string) => void;
}

export default function LandingNavbar({
  theme,
  toggleTheme,
  onOpenDemo,
}: LandingNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/65 dark:bg-[#0A111C]/65 backdrop-blur-2xl border-b border-white/50 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo - Vertical EDUTAVEX Logo properly sized and transparent */}
        <Link
          href="/"
          className="flex items-center group focus:outline-none shrink-0 py-1"
        >
          <Image
            src="/edutavex-logo-vertical-trimmed.png"
            alt="EDUTAVEX"
            width={64}
            height={64}
            priority
            className="h-12 sm:h-15 w-auto object-contain transition-transform group-hover:scale-105 duration-200 drop-shadow-xs"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#1F2A37] dark:text-[#F3F4F6]">
          <a
            href="#features-overview"
            className="hover:text-[#2A9AD8] transition-colors flex items-center gap-1.5"
          >
            <Layers className="w-4 h-4 text-[#2A9AD8]" />
            <span>ফিচারসমূহ</span>
          </a>

          <a
            href="#coachingpro"
            className="hover:text-[#F47F20] transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4 text-[#F47F20]" />
            <span>CoachingPro</span>
          </a>

          {/* SchoolPro Navigation Link - Navigates to /schoolpro */}
          <Link
            href="/schoolpro"
            className="group relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#EAF6FD] dark:bg-[#1B5E9B]/25 text-[#1B5E9B] dark:text-[#2A9AD8] hover:bg-[#2A9AD8]/15 font-bold transition-all border border-[#2A9AD8]/30 shadow-xs"
          >
            <School className="w-4 h-4 text-[#2A9AD8]" />
            <span>SchoolPro</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#1B5E9B] text-white font-extrabold uppercase ml-1">
              ক্যাম্পাস
            </span>
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-[#EAF6FD] dark:bg-[#152238] border border-[#2A9AD8]/20 dark:border-[#1B5E9B]/40 hover:scale-105 active:scale-95 transition-all text-[#1B5E9B] dark:text-[#2A9AD8] shadow-xs"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-[#FBB034]" />
            ) : (
              <Moon className="w-4 h-4 text-[#1B5E9B]" />
            )}
          </button>

          {/* Primary CTA Button: Button Gradient #FBB034 -> #F47F20 from Image */}
          <button
            onClick={() => onOpenDemo()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FBB034] to-[#F47F20] hover:from-[#F47F20] hover:to-[#D86B13] active:scale-95 text-white text-sm font-bold shadow-md shadow-[#F47F20]/25 hover:shadow-lg hover:shadow-[#F47F20]/35 transition-all duration-200"
          >
            <span>ফ্রি ডেমো দেখুন</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center bg-[#EAF6FD] dark:bg-[#152238] text-[#1B5E9B] dark:text-white border border-[#2A9AD8]/20"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#2A9AD8]/15 dark:border-[#1B5E9B]/30 bg-white/98 dark:bg-[#0A111C]/98 backdrop-blur-2xl px-5 py-5 space-y-4 shadow-2xl">
          <div className="flex flex-col gap-1 font-semibold text-[#1F2A37] dark:text-[#F3F4F6] text-base">
            <a
              href="#features-overview"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-xl hover:bg-[#EAF6FD] dark:hover:bg-[#152238] transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-[#2A9AD8]" />
                <span>ফিচারসমূহ</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#64748B]" />
            </a>

            <a
              href="#coachingpro"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-xl hover:bg-[#EAF6FD] dark:hover:bg-[#152238] transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[#F47F20]" />
                <span>CoachingPro (কোচিং ব্যাচ)</span>
              </div>
              <span className="text-xs bg-[#F47F20]/10 text-[#F47F20] px-2 py-0.5 rounded font-bold">
                ব্যাচ
              </span>
            </a>

            <Link
              href="/schoolpro"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-3 rounded-xl bg-[#EAF6FD] dark:bg-[#152238] text-[#1B5E9B] dark:text-[#2A9AD8] font-bold transition-colors flex items-center justify-between border border-[#2A9AD8]/30"
            >
              <div className="flex items-center gap-2.5">
                <School className="w-4 h-4 text-[#2A9AD8]" />
                <span>SchoolPro (ফুল ক্যাম্পাস)</span>
              </div>
              <span className="text-xs bg-[#1B5E9B] text-white px-2 py-0.5 rounded-full font-bold">
                ক্লিক করুন →
              </span>
            </Link>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#FBB034] to-[#F47F20] text-white font-bold text-sm shadow-md shadow-[#F47F20]/25"
            >
              <span>ফ্রি ডেমো বুক করুন</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
