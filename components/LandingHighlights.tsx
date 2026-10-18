"use client";

import React from "react";
import {
  FolderArchive,
  WalletCards,
  ScanFace,
  FileCheck2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function LandingHighlights() {
  const highlights = [
    {
      icon: FolderArchive,
      badge: "একক ডাটাবেজ",
      title: "স্মার্ট শিক্ষার্থী প্রোফাইল ও রেকর্ড",
      desc: "ভর্তি রোল, রক্তের গ্রুপ, পারিবারিক কন্টাক্ট এবং বিগত বছরের পারফরম্যান্স রেকর্ড — মুহূর্তেই খুঁজে পান যেকোনো তথ্য।",
      iconBg: "bg-[#2A9AD8] text-white",
      pill: "bg-[#EAF6FD] text-[#1B5E9B] dark:bg-[#1B5E9B]/30 dark:text-[#2A9AD8]",
      borderHover: "hover:border-[#2A9AD8]",
    },
    {
      icon: WalletCards,
      badge: "অটো পেমেন্ট",
      title: "ডিজিটাল ফি আদায় ও লেজার সিঙ্ক",
      desc: "বিকাশ, নগদ কিংবা ব্যাংকিং ফি আদায় সরাসরি অ্যাকাউন্টে জমা হয়। প্রতি ট্রানজ্যাকশনে তৈরি হয় স্বয়ংক্রিয় ডিজিটাল ভাউচার ও রসিদ।",
      iconBg: "bg-[#F47F20] text-white",
      pill: "bg-[#F47F20]/10 text-[#F47F20]",
      borderHover: "hover:border-[#F47F20]",
    },
    {
      icon: ScanFace,
      badge: "০.৩ সেকেন্ড",
      title: "RFID ও স্মার্ট গেট অটোমেশন",
      desc: "শিক্ষার্থী ক্যাম্পাসে প্রবেশের সাথে সাথে গেট স্ক্যানারে উপস্থিতি নথিভুক্ত হয় এবং অভিভাবকের মোবাইলে চলে যায় তাৎক্ষণিক প্রবেশ নোটিফিকেশন।",
      iconBg: "bg-[#1B5E9B] text-white",
      pill: "bg-[#EAF6FD] text-[#1B5E9B] dark:bg-[#1B5E9B]/30 dark:text-[#2A9AD8]",
      borderHover: "hover:border-[#1B5E9B]",
    },
    {
      icon: FileCheck2,
      badge: "অটো জিপিএ",
      title: "স্বয়ংক্রিয় রেজাল্ট ও গ্রেডিং ইঞ্জিন",
      desc: "শিক্ষকদের নম্বর এন্ট্রির সাথে সাথেই জাতীয় শিক্ষাক্রম অনুযায়ী স্বয়ংক্রিয় জিপিএ, মেধা ক্রম এবং কালারফুল ট্রান্সক্রিপ্ট প্রস্তুত হয়।",
      iconBg: "bg-[#FBB034] text-white",
      pill: "bg-[#FBB034]/15 text-[#D86B13] dark:text-[#FBB034]",
      borderHover: "hover:border-[#FBB034]",
    },
  ];

  return (
    <section id="features-overview" className="py-14 sm:py-20 bg-[#FDF4DC] dark:bg-[#121F33] border-y border-[#2A9AD8]/15 dark:border-[#1B5E9B]/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-[#0A111C] border border-[#2A9AD8]/30 text-[#1B5E9B] dark:text-[#2A9AD8] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F47F20]" />
            <span>মূল সুবিধা ও সক্ষমতা</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F2A37] dark:text-white">
            দৈনন্দিন কার্যক্রমকে সহজ ও দ্রুত করার ৪টি ভিত্তি
          </h2>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group p-6 rounded-3xl bg-white dark:bg-[#152238] border border-slate-200/90 dark:border-slate-800 ${item.borderHover} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${item.pill}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1F2A37] dark:text-white group-hover:text-[#2A9AD8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#64748B] dark:text-[#94A3B8] group-hover:text-[#2A9AD8] transition-colors">
                  <span>স্মার্ট অটোমেশন</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
