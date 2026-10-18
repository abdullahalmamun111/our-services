"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CreditCard,
  Award,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function LandingInteractiveShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const modules = [
    {
      id: "attendance",
      title: "ডিজিটাল হাজিরা ও স্মার্ট গেট",
      short: "স্মার্ট হাজিরা",
      icon: CalendarCheck,
      color: "bg-[#2A9AD8]",
      headline: "০.৩ সেকেন্ডে কার্ড পাঞ্চ, সাথে সাথে অভিভাবকের ফোনে SMS",
      desc: "শিক্ষার্থী স্কুলে ঢোকার সাথে সাথে স্মার্ট গেট দিয়ে প্রবেশ করবে এবং অভিভাবক ফোনে নোটিফিকেশন পাবেন। শিক্ষক ও কর্মচারীদের জন্যও রয়েছে বায়োমেট্রিক হাজিরা।",
      features: [
        "RFID কার্ড ও ফিঙ্গারপ্রিন্ট সাপোর্ট",
        "অনুপস্থিত শিক্ষার্থীদের অটো SMS অ্যালার্ট",
        "ক্লাসওয়ারি রিয়েলটাইম হাজিরা রিপোর্ট",
        "অফলাইন সিঙ্ক সুবিধা",
      ],
      image: "/hajira.png",
      statValue: "৯৮.৬%",
      statLabel: "গড় নিয়মিত উপস্থিতি",
    },
    {
      id: "fees",
      title: "ফি ও স্বয়ংক্রিয় ফাইন্যান্স",
      short: "ফি কালেকশন",
      icon: CreditCard,
      color: "bg-[#F47F20]",
      headline: "বিকাশ, নগদ ও ব্যাংকে ফি কালেকশন — অটো রসিদ ও লেজার",
      desc: "মাসিক টিউশন ফি, পরীক্ষার ফি ও সেশন চার্জ আদায় করুন সহজে। প্রতিটি পেমেন্টের সাথে সাথেই তৈরি হবে ডিজিটাল মানি রিসিট।",
      features: [
        "বিকাশ ও নগদ অটোমেটেড পেমেন্ট গেটওয়ে",
        "বকেয়া থাকলে স্বয়ংক্রিয় এসএমএস রিমাইন্ডার",
        "শিক্ষক ও স্টাফ বেতন পে-রোল ম্যানেজমেন্ট",
        "দৈনিক ও বার্ষিক অডিট রেডি রিপোর্ট",
      ],
      image: "/fee.jpg",
      statValue: "৳ ৩.৭৫ লাখ+",
      statLabel: "মাসিক অটো কালেকশন",
    },
    {
      id: "results",
      title: "পরীক্ষা ও আধুনিক রেজাল্ট শিট",
      short: "রেজাল্ট কার্ড",
      icon: Award,
      color: "bg-[#1B5E9B]",
      headline: "জাতীয় কারিকুলাম ও জিপিএ অনুযায়ী আকর্ষণীয় মার্কশিট",
      desc: "শিক্ষকদের দেওয়া নম্বর ইনপুট হতেই মুহূর্তেই প্রস্তুত হবে মেধা তালিকা, গ্রেড পয়েন্ট, পাস-ফেল বিশ্লেষণ ও প্রিন্ট উপযোগী ফলাফল কার্ড।",
      features: [
        "স্বয়ংক্রিয় GPA ও CGPA হিসাব",
        "প্রতিষ্ঠান লোগোসহ কালারফুল মার্কশিট প্রিন্ট",
        "এসএমএস এর মাধ্যমে ফল প্রকাশ",
        "বিগত পরীক্ষার সাথে তুলনামূলক গ্রাফ",
      ],
      image: "/result-card.png",
      statValue: "১-ক্লিকে",
      statLabel: "সম্পূর্ণ ক্লাসের রেজাল্ট",
    },
    {
      id: "app",
      title: "অভিভাবক ও শিক্ষক মোবাইল অ্যাপ",
      short: "মোবাইল পোর্টাল",
      icon: Smartphone,
      color: "bg-[#FBB034]",
      headline: "অভিভাবকের হাতের মুঠোয় সন্তানের প্রতিদিনের তথ্য",
      desc: "সন্তান কখন স্কুলে গেলো, কত মার্ক পেলো, কোনো ফি বাকি আছে কিনা — অভিভাবক সহজেই নিজের স্মার্টফোনে দেখতে পারেন।",
      features: [
        "অ্যান্ড্রয়েড ও আইওএস সাপোর্টেড",
        "ক্লাস রুটিন ও পরীক্ষার সূচি",
        "শিক্ষকের সরাসরি হোমওয়ার্ক ও নোটিশ প্রদান",
        "ছুটির আবেদন ও শিক্ষক চ্যাট",
      ],
      image: "/admin-mobile.png",
      statValue: "১০০%",
      statLabel: "অভিভাবক সন্তুষ্টি",
    },
  ];

  const current = modules[activeTab];

  return (
    <section id="features-overview" className="py-20 bg-[#FDF4DC] dark:bg-[#121F33] border-t border-[#2A9AD8]/15 dark:border-[#1B5E9B]/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0A111C] border border-[#2A9AD8]/30 text-[#1B5E9B] dark:text-[#2A9AD8] text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F47F20]" />
            <span>সমন্বিত মডিউলসমূহ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2A37] dark:text-white">
            প্রতিটি কাজ নিখুঁতভাবে করার স্মার্ট প্রযুক্তি
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8]">
            স্কুল বা কোচিংয়ের দৈনন্দিন প্রতিটি প্রশাসনিক দায়িত্ব এখন কয়েক ক্লিকেই সম্পন্ন হবে।
          </p>
        </div>

        {/* Interactive Tabs Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {modules.map((m, idx) => {
            const Icon = m.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={m.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isSelected
                    ? "bg-gradient-to-r from-[#2A9AD8] to-[#1B5E9B] text-white shadow-lg shadow-[#1B5E9B]/25 scale-102"
                    : "bg-white dark:bg-[#152238] text-[#1F2A37] dark:text-[#F3F4F6] border border-slate-200 dark:border-slate-800 hover:border-[#2A9AD8] hover:bg-[#EAF6FD]/50"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-[#FDF4DC]" : "text-[#2A9AD8]"}`} />
                <span>{m.short}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Detailed View Container */}
        <div className="bg-white dark:bg-[#152238] rounded-3xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-xl transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#EAF6FD] dark:bg-[#1B5E9B]/30 text-[#1B5E9B] dark:text-[#2A9AD8] text-xs font-bold">
                <span>{current.title}</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#1F2A37] dark:text-white leading-snug">
                {current.headline}
              </h3>

              <p className="text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                {current.desc}
              </p>

              {/* Feature Bullet Points */}
              <div className="space-y-2.5 pt-2">
                {current.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#1F2A37] dark:text-[#F3F4F6]">
                    <div className="w-4 h-4 rounded-full bg-[#EAF6FD] dark:bg-[#1B5E9B]/40 text-[#1B5E9B] dark:text-[#2A9AD8] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/schoolpro"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FBB034] to-[#F47F20] hover:from-[#F47F20] hover:to-[#D86B13] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#F47F20]/25 transition-all"
                >
                  <span>সব ১৮টি মডিউল দেখুন (SchoolPro)</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
                <div className="text-left pl-3 border-l border-slate-200 dark:border-slate-800">
                  <span className="text-lg font-black text-[#1B5E9B] dark:text-[#2A9AD8] block leading-tight">
                    {current.statValue}
                  </span>
                  <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8] font-medium">
                    {current.statLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border-2 border-[#2A9AD8]/20 dark:border-[#1B5E9B]/40 shadow-md bg-[#EAF6FD]/50 dark:bg-[#0A111C]">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-contain p-2 hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
