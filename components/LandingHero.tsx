"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface LandingHeroProps {
  onOpenDemo: (edition?: string) => void;
}

export default function LandingHero({ onOpenDemo }: LandingHeroProps) {
  return (
    <section className="relative pt-8 pb-14 sm:pt-16 sm:pb-24 overflow-hidden bg-white dark:bg-[#0A111C] transition-colors duration-300">
      {/* Background Soft Glow Spots using brand palette */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[550px] h-[350px] bg-[#2A9AD8]/12 dark:bg-[#2A9AD8]/8 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-28 right-10 w-[450px] h-[350px] bg-[#FBB034]/10 dark:bg-[#F47F20]/8 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Subtitle & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Minimal Brand Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF6FD] dark:bg-[#121F33] border border-[#2A9AD8]/30 dark:border-[#1B5E9B]/50 text-[#1B5E9B] dark:text-[#2A9AD8] text-xs sm:text-sm font-bold tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#F47F20]" />
              <span>শিক্ষা প্রতিষ্ঠান পরিচালনায় আধুনিক ক্লাউড প্ল্যাটফর্ম</span>
            </div>

            {/* Main Headline with Brand Hero Gradient (#2A9AD8 -> #1B5E9B) */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-[#1F2A37] dark:text-white tracking-tight leading-[1.2] sm:leading-[1.18]">
              কাগজ-কলমের দিন শেষ,{" "}
              <span className="text-gradient-hero block sm:inline">
                স্মার্ট ক্যাম্পাসে গড়ুন আগামীর শিক্ষা।
              </span>
            </h1>

            {/* Subheading / Value Proposition */}
            <p className="text-base sm:text-lg lg:text-xl text-[#64748B] dark:text-[#94A3B8] max-w-2xl leading-relaxed">
              শিক্ষার্থী ভর্তি, স্মার্ট গেট হাজিরা, অনলাইন ফি আদায় এবং এক ক্লিকে মার্কশিট তৈরি — <strong className="font-bold text-[#1F2A37] dark:text-white">EDUTAVEX</strong> আপনার প্রতিষ্ঠানকে করে তোলে শতভাগ স্বয়ংক্রিয় ও ঝামেলামুক্ত।
            </p>

            {/* Action Buttons with Palette Gradient (#FBB034 -> #F47F20) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              {/* Primary Action Button (Gold -> Orange Button Gradient from Palette) */}
              <button
                onClick={() => onOpenDemo("CoachingPro")}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#FBB034] to-[#F47F20] hover:from-[#F47F20] hover:to-[#D86B13] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#F47F20]/25 hover:shadow-xl hover:shadow-[#F47F20]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>কোচিং স্যুট (CoachingPro)</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              {/* Secondary Button - SchoolPro (Primary Dark #1B5E9B) */}
              <Link
                href="/schoolpro"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#1B5E9B] hover:bg-[#2A9AD8] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#1B5E9B]/20 hover:shadow-xl hover:shadow-[#2A9AD8]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>স্কুল ও ক্যাম্পাস (SchoolPro)</span>
                <ArrowRight className="w-4 h-4 text-[#FDF4DC]" />
              </Link>
            </div>

            {/* Minimal Trust Strip with Brand Accent Colors */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-semibold text-[#64748B] dark:text-[#94A3B8] border-t border-[#2A9AD8]/15 dark:border-[#1B5E9B]/30">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#F47F20] shrink-0" />
                <span>০.৩ সেকেন্ডে গেট রেসপন্স</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2A9AD8] shrink-0" />
                <span>নিরাপদ ক্লাউড ব্যাকআপ</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FBB034] shrink-0" />
                <span>ইনস্ট্যান্ট অভিভাবক SMS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Minimal Image Frame (UNNECESSARY OVERLAYS REMOVED AS REQUESTED) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Minimal Clean Image Frame with subtle brand border */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3.2] rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-[#2A9AD8]/30 dark:border-[#1B5E9B]/60 bg-[#EAF6FD] dark:bg-[#121F33]">
                <Image
                  src="/classroom.webp"
                  alt="শিক্ষার্থী ও শিক্ষক পাঠদান"
                  fill
                  priority
                  className="object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 550px"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
