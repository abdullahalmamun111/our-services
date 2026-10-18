"use client";

import React from "react";
import Link from "next/link";
import {
  BookOpen,
  School,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface LandingSolutionsProps {
  onOpenDemo: (edition?: string) => void;
}

export default function LandingSolutions({ onOpenDemo }: LandingSolutionsProps) {
  return (
    <section id="coachingpro" className="py-20 sm:py-28 relative bg-white dark:bg-[#0A111C] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF6FD] dark:bg-[#121F33] border border-[#2A9AD8]/30 dark:border-[#1B5E9B]/50 text-[#1B5E9B] dark:text-[#2A9AD8] text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#F47F20]" />
            <span>আপনার প্রয়োজন অনুযায়ী নির্বাচিত সংস্করণ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F2A37] dark:text-white tracking-tight">
            ছোট প্রাইভেট একাডেমি থেকে বৃহৎ ক্যাম্পাস —{" "}
            <span className="text-gradient-hero">
              সঠিক সংস্করণ বেছে নিন
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed font-normal">
            কোচিং সেন্টারের ফ্লেক্সিবল ব্যাচ রুটিন ও ফি কালেকশন কিংবা স্কুলের ১৮টি ডিপার্টমেন্টের সমন্বিত ক্যাম্পাসের জন্য EDUTAVEX নিয়ে এসেছে বিশেষায়িত দুটি আধুনিক সংস্করণ।
          </p>
        </div>

        {/* Dual Side-by-Side Solution Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* ================= CARD 1: COACHINGPRO ================= */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-[#152238] shadow-xl hover:shadow-2xl transition-all duration-300 p-6 sm:p-9 flex flex-col justify-between group">
            <div>
              {/* Product Badge & Header */}
              <div className="flex items-center gap-3.5 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#FBB034] to-[#F47F20] text-white flex items-center justify-center shadow-lg shadow-[#F47F20]/25 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-black text-[#1F2A37] dark:text-white">
                      CoachingPro
                    </h3>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-[#FBB034]/15 text-[#D86B13] dark:text-[#FBB034] border border-[#FBB034]/30">
                      ব্যাচ এডিশন
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] dark:text-[#94A3B8] font-semibold mt-0.5">
                    কোচিং সেন্টার, টিউটোরিয়াল হোম ও প্রাইভেট ব্যাচ
                  </p>
                </div>
              </div>

              {/* Pitch Paragraph */}
              <p className="mt-5 text-sm sm:text-base text-[#1F2A37] dark:text-[#F3F4F6] leading-relaxed">
                কোন ব্যাচে কতজন ছাত্র, কার কয়টি ক্লাস শেষ হলো আর কার ফি বাকি — প্রতিদিন খাতা ঘেঁটে হিসাব মেলানোর দিন শেষ। কোচিংয়ের ব্যাচভিত্তিক ম্যানেজমেন্ট এখন পানির মতো সহজ ও দ্রুত।
              </p>

              {/* Feature Checklist */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "আনলিমিটেড ব্যাচ ও শিডিউল প্ল্যানার",
                  "ক্লাস ভিত্তিক উপস্থিতি ও টেস্ট মার্কস",
                  "বকেয়া ফির অটোমেটিক SMS রিমাইন্ডার",
                  "শিক্ষক পারিশ্রমিক ও কমিশন হিসাব",
                  "ডিজিটাল মানি রিসিট ও মোবাইল প্রিন্ট",
                  "অভিভাবকের ফোনে ফলাফল নোটিফিকেশন",
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#1F2A37] dark:text-[#F3F4F6] font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#F47F20]/15 text-[#F47F20] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button: Button Gradient #FBB034 -> #F47F20 */}
              <div className="mt-7">
                <button
                  onClick={() => onOpenDemo("CoachingPro")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#FBB034] to-[#F47F20] hover:from-[#F47F20] hover:to-[#D86B13] text-white font-bold text-sm shadow-lg shadow-[#F47F20]/25 hover:shadow-xl hover:shadow-[#F47F20]/35 transition-all"
                >
                  <span>CoachingPro ডেমো বুক করুন</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Minimal Clean Metrics Console */}
              <div className="mt-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#EAF6FD]/50 dark:bg-[#0E1B2D] p-4 sm:p-5 overflow-hidden">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F47F20] animate-pulse"></span>
                    <span className="text-xs font-bold text-[#1F2A37] dark:text-[#F3F4F6]">
                      কোচিং একাডেমি — ব্যাচ কনসোল
                    </span>
                  </div>
                  <span className="text-[10px] font-extrabold text-[#F47F20] bg-white dark:bg-[#152238] px-2 py-0.5 rounded shadow-xs">
                    ১২টি সক্রিয় ব্যাচ
                  </span>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#152238] border border-slate-200/70 dark:border-slate-800 text-center">
                    <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8] block font-medium">শিক্ষার্থী</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#1F2A37] dark:text-white">৫২০ জন</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#152238] border border-slate-200/70 dark:border-slate-800 text-center">
                    <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8] block font-medium">আজকের সেশন</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#2A9AD8]">১৮টি ক্লাস</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#152238] border border-slate-200/70 dark:border-slate-800 text-center">
                    <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8] block font-medium">ফি আদায়</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#F47F20]">৳ ১,৪৮,০০০</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#152238] border border-slate-200/70 dark:border-slate-800 text-center">
                    <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8] block font-medium">উপস্থিতি</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#1B5E9B] dark:text-[#2A9AD8]">৯৪%</span>
                  </div>
                </div>

                {/* Progress Visual */}
                <div className="p-3 rounded-xl bg-white dark:bg-[#152238] border border-slate-200/70 dark:border-slate-800">
                  <div className="flex items-center justify-between text-[11px] mb-2 font-bold text-[#1F2A37] dark:text-[#F3F4F6]">
                    <span>চলতি মাসের ব্যাচভিত্তিক ফি কালেকশন</span>
                    <span className="text-[#F47F20] font-extrabold">৯২% সংগৃহীত</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#FBB034] to-[#F47F20] h-full rounded-full w-[92%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CARD 2: SCHOOLPRO ================= */}
          <div className="rounded-3xl border-2 border-[#2A9AD8]/60 dark:border-[#2A9AD8]/80 bg-white dark:bg-[#152238] shadow-2xl transition-all duration-300 p-6 sm:p-9 flex flex-col justify-between group relative overflow-hidden">
            
            {/* Top Right Ribbon */}
            <div className="absolute top-0 right-0">
              <div className="bg-gradient-to-r from-[#2A9AD8] to-[#1B5E9B] text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-2xl tracking-wider shadow-sm">
                সম্পূর্ণ ক্যাম্পাস স্যুট
              </div>
            </div>

            <div>
              {/* Product Badge & Header */}
              <div className="flex items-center gap-3.5 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#2A9AD8] to-[#1B5E9B] text-white flex items-center justify-center shadow-lg shadow-[#1B5E9B]/25 group-hover:scale-105 transition-transform">
                  <School className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-black text-[#1F2A37] dark:text-white">
                      SchoolPro
                    </h3>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-[#EAF6FD] dark:bg-[#1B5E9B]/30 text-[#1B5E9B] dark:text-[#2A9AD8] border border-[#2A9AD8]/30">
                      ফুল একাডেমি
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] dark:text-[#94A3B8] font-semibold mt-0.5">
                    স্কুল, কলেজ ও মাদ্রাসার সার্বিক অটোমেশন
                  </p>
                </div>
              </div>

              {/* Pitch Paragraph */}
              <p className="mt-5 text-sm sm:text-base text-[#1F2A37] dark:text-[#F3F4F6] leading-relaxed">
                নার্সারি থেকে দ্বাদশ শ্রেণি — ভর্তি কার্যক্রম, ডিজিটাল গেট হাজিরা, বার্ষিক পরীক্ষার ফলাফল, শিক্ষক পে-রোল ও অনলাইন ফান্ড কালেকশন সবকিছু পরিচালিত হবে একটি মাত্র সমন্বিত প্ল্যাটফর্ম থেকে।
              </p>

              {/* Feature Checklist */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "শিক্ষার্থী, শিক্ষক ও স্টাফ সমন্বিত ডাটাবেজ",
                  "ডিজিটাল গেট ও RFID কার্ড উপস্থিতি ট্র্যাকিং",
                  "জাতীয় শিক্ষাক্রম অনুযায়ী স্বয়ংক্রিয় রেজাল্ট কার্ড",
                  "বিকাশ, নগদ ও ব্যাংক অটো ফি কালেকশন",
                  "শিক্ষক বেতন পে-রোল ও ফান্ড ম্যানেজমেন্ট",
                  "অভিভাবকদের জন্য ডেডিকেটেড মোবাইল অ্যাপ",
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#1F2A37] dark:text-[#F3F4F6] font-medium">
                    <div className="w-4 h-4 rounded-full bg-[#EAF6FD] dark:bg-[#1B5E9B]/40 text-[#1B5E9B] dark:text-[#2A9AD8] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button: Hero Gradient #2A9AD8 -> #1B5E9B */}
              <div className="mt-7">
                <Link
                  href="/schoolpro"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#2A9AD8] to-[#1B5E9B] hover:from-[#1B5E9B] hover:to-[#134573] text-white font-bold text-sm shadow-xl shadow-[#1B5E9B]/30 hover:shadow-[#1B5E9B]/50 transition-all"
                >
                  <span>SchoolPro বিস্তারিত ঘুরে দেখুন (মূল প্ল্যাটফর্ম)</span>
                  <ArrowRight className="w-4 h-4 text-[#FDF4DC]" />
                </Link>
              </div>

              {/* Minimal Clean Metrics Console for SchoolPro */}
              <div className="mt-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#EAF6FD]/50 dark:bg-[#0E1B2D] p-4 sm:p-5 overflow-hidden">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2A9AD8] animate-pulse"></span>
                    <span className="text-xs font-bold text-[#1F2A37] dark:text-[#F3F4F6]">
                      ক্যাম্পাস সেন্ট্রাল ড্যাশবোর্ড
                    </span>
                  </div>
                  <span className="text-[10px] font-extrabold text-[#1B5E9B] dark:text-[#2A9AD8] bg-white dark:bg-[#152238] px-2 py-0.5 rounded shadow-xs">
                    ১৮টি মডিউল সিঙ্ক
                  </span>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#152238] border border-slate-200/70 dark:border-slate-800 text-center">
                    <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8] block font-medium">শিক্ষার্থী</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#1F2A37] dark:text-white">১,৬৫০ জন</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#152238] border border-slate-200/70 dark:border-slate-800 text-center">
                    <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8] block font-medium">শিক্ষক ও স্টাফ</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#2A9AD8]">৮২ জন</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#152238] border border-slate-200/70 dark:border-slate-800 text-center">
                    <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8] block font-medium">ফান্ড রিজার্ভ</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#F47F20]">৳ ৮,৪৫,০০০</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#152238] border border-slate-200/70 dark:border-slate-800 text-center">
                    <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8] block font-medium">উপস্থিতি</span>
                    <span className="text-sm sm:text-base font-extrabold text-[#1B5E9B] dark:text-[#2A9AD8]">৯৮.২%</span>
                  </div>
                </div>

                {/* Progress Visual */}
                <div className="p-3 rounded-xl bg-white dark:bg-[#152238] border border-slate-200/70 dark:border-slate-800">
                  <div className="flex items-center justify-between text-[11px] mb-2 font-bold text-[#1F2A37] dark:text-[#F3F4F6]">
                    <span>লাইভ ক্যাম্পাস এটেন্ডেন্স ও এসএমএস সিঙ্ক</span>
                    <span className="text-[#2A9AD8] font-extrabold">০.৩ সেকেন্ড রেসপন্স</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#2A9AD8] to-[#1B5E9B] h-full rounded-full w-[98%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
