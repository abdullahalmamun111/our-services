"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LandingFooter() {
  return (
    <footer className="bg-[#FDF4DC]/50 dark:bg-[#0A111C] border-t border-[#2A9AD8]/15 dark:border-[#1B5E9B]/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          
          {/* Logo & Tagline - Clean Official Horizontal Logo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="inline-block focus:outline-none">
              <Image
                src="/edutavex-logo-horizontal-trimmed.png"
                alt="EDUTAVEX"
                width={200}
                height={56}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] mt-2 font-medium">
              স্মার্ট ক্যাম্পাস ও একাডেমি অটোমেশন ক্লাউড প্ল্যাটফর্ম।
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-bold text-[#1F2A37] dark:text-[#F3F4F6]">
            <a
              href="#features-overview"
              className="hover:text-[#2A9AD8] transition-colors"
            >
              ফিচারসমূহ
            </a>
            <a
              href="#coachingpro"
              className="hover:text-[#F47F20] transition-colors"
            >
              CoachingPro
            </a>
            <Link
              href="/schoolpro"
              className="text-[#1B5E9B] dark:text-[#2A9AD8] hover:underline font-extrabold transition-colors flex items-center gap-1.5"
            >
              <span>SchoolPro (ক্যাম্পাস)</span>
              <span className="text-[10px] bg-[#2A9AD8]/15 text-[#1B5E9B] dark:text-[#2A9AD8] px-2 py-0.5 rounded-full">
                ১৮টি মডিউল
              </span>
            </Link>
            <a
              href="https://wa.me/8801986054016"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F47F20] transition-colors"
            >
              সরাসরি সহায়তা ও ডেমো
            </a>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B] dark:text-[#94A3B8]">
          <p>© 2026 EDUTAVEX. সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="font-semibold text-[#1B5E9B] dark:text-[#2A9AD8]">
            স্মার্ট বাংলাদেশের আধুনিক শিক্ষা ইকোসিস্টেমের বিশ্বস্ত সারথী
          </p>
        </div>
      </div>
    </footer>
  );
}
