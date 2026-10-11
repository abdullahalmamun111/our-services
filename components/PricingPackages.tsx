"use client";

import React, { useState } from "react";
import { Language } from "@/lib/translations";
import {
  Check,
  Sparkles,
  Zap,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  GraduationCap,
  Users,
  Database,
  Cpu,
  Star,
  Award,
} from "lucide-react";

interface PricingPackagesProps {
  lang: Language;
  onOpenDemo: (packageName?: string) => void;
}

export default function PricingPackages({ lang, onOpenDemo }: PricingPackagesProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleExpand = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const isBn = lang === "bn";

  const packages = [
    {
      id: "basic",
      name: isBn ? "বেসিক" : "Basic",
      tagline: isBn
        ? "ছোট প্রতিষ্ঠান ও নতুন কোচিংয়ের জন্য উপযুক্ত"
        : "Ideal for small schools & tuition coaching",
      tierBadge: isBn ? "স্টার্টার প্যাক" : "Starter Pack",
      students: isBn ? "২৫০ শিক্ষার্থী পর্যন্ত" : "Up to 250 Students",
      monthlyPrice: "১,৫০০",
      monthlyPriceEn: "1,500",
      yearlyPrice: "১,২০০",
      yearlyPriceEn: "1,200",
      yearlyTotal: "১৪,৪00",
      yearlyTotalEn: "14,400",
      onboarding: isBn ? "৳৪,০০০ এককালীন অনবোর্ডিং" : "৳4,000 One-time Onboarding",
      popular: false,
      color: "cyan",
      cardBg: "from-slate-900/90 via-slate-900/60 to-slate-950/90 dark:from-[#0d1424] dark:via-[#090d18] dark:to-[#050811]",
      borderClass: "border-slate-200 dark:border-slate-800 hover:border-cyan-500/50",
      badgeColor: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700",
      accentBg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
      btnClass:
        "bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700/60",
      features: [
        isBn ? "শিক্ষার্থী প্রোফাইল ও অনলাইন অ্যাডমিশন" : "Student Profiles & Online Admission",
        isBn ? "ডিজিটাল ও ম্যানুয়াল হাজিরা ট্র্যাকিং" : "Digital & Manual Attendance Tracking",
        isBn ? "মাসিক ফি লেজার ও ইনস্ট্যান্ট ভাউচার রসিদ" : "Fee Collection & Instant Digital Receipts",
        isBn ? "পরীক্ষার রুটিন, গ্রেডিং ও মার্কশিট প্রিন্টিং" : "Exam Schedules, Grading & Marksheet Printing",
        isBn ? "অভিভাবকদের জন্য ওয়েব পোর্টাল অ্যাক্সেস" : "Guardian & Student Web Portal Access",
        isBn ? "স্ট্যান্ডার্ড এসএমএস গেটওয়ে ইন্টিগ্রেশন" : "Standard SMS Gateway Integration",
      ],
      allFeatures: [
        isBn ? "প্রতিষ্ঠান ব্র্যান্ডিং ও লোগো যুক্ত রসিদ" : "Custom Institute Crest & Branded Receipts",
        isBn ? "ক্লাস ও সেকশন অনুযায়ী আনলিমিটেড শিক্ষক আইডি" : "Unlimited Teacher Accounts per Section",
        isBn ? "দৈনিক ক্যাশ কালেকশন সামারি রিপোর্ট" : "Daily Cash Collection Summary Report",
        isBn ? "ক্লাউড ডেটা ব্যাকআপ ও রিস্টোর" : "Automated Cloud Backup & Recovery",
        isBn ? "টেলিফোন ও হোয়াটসঅ্যাপ সাপোর্ট" : "Phone & WhatsApp Support",
      ],
    },
    {
      id: "standard",
      name: isBn ? "স্ট্যান্ডার্ড" : "Standard",
      tagline: isBn
        ? "ক্রমবর্ধমান স্কুল, মাদ্রাসা ও বড় কোচিংয়ের সেরা চয়েস"
        : "Best fit for growing schools, madrasas & coaching academies",
      tierBadge: isBn ? "সবচেয়ে জনপ্রিয়" : "Most Popular",
      students: isBn ? "২৫১ – ৭০০ শিক্ষার্থী" : "251 – 700 Students",
      monthlyPrice: "৩,৫০০",
      monthlyPriceEn: "3,500",
      yearlyPrice: "২,৯০০",
      yearlyPriceEn: "2,900",
      yearlyTotal: "৩৪,৮00",
      yearlyTotalEn: "34,800",
      onboarding: isBn ? "৳৬,০০০ এককালীন অনবোর্ডিং ও ট্রেনিং" : "৳6,000 One-time Setup & Staff Training",
      popular: true,
      color: "emerald",
      cardBg: "from-[#062428] via-[#051c24] to-[#04121a] dark:from-[#062428] dark:via-[#051c24] dark:to-[#04121a]",
      borderClass: "border-cyan-500/50 shadow-2xl shadow-cyan-500/15 ring-1 ring-cyan-400/40",
      badgeColor: "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/30",
      accentBg: "bg-emerald-500/15 text-emerald-400",
      btnClass:
        "bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-black shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50",
      features: [
        isBn ? "বেসিক প্যাকেজের সমস্ত ফিচার অন্তর্ভুক্ত" : "Everything included in Basic package",
        isBn ? "বায়োমেট্রিক ও RFID গেট পাঞ্চ + অটো এসএমএস" : "Biometric & RFID Gate Punch with Instant SMS",
        isBn ? "বিকাশ ও নগদ ডিজিটাল ক্যাশলেস ফি গেটওয়ে" : "bKash & Nagad Online Fee Payment Gateway",
        isBn ? "বোর্ড কারিকুলাম ও BANBEIS মানসম্পন্ন মার্কশিট" : "Board Standard & BANBEIS Compliant Marksheets",
        isBn ? "অভিভাবক ও শিক্ষকদের জন্য আধুনিক PWA মোবাইল অ্যাপ" : "Modern PWA Mobile App for Parents & Staff",
        isBn ? "এআই স্মার্ট প্রশ্নব্যাংক ২.০ (মডেল টেস্ট মেকার)" : "AI Smart Question Bank 2.0 (Auto Exam Creator)",
      ],
      allFeatures: [
        isBn ? "শিক্ষক ও কর্মকর্তা পেরোল এবং ছুটি অনুমোদন" : "Teacher & Staff Payroll with Leave Approvals",
        isBn ? "বকেয়া ফি অটো রিমাইন্ডার ও কিউআর রসিদ" : "Automated Due Reminders & QR-code Receipts",
        isBn ? "লাইব্রেরি ও বুক ইস্যু-রিটার্ন মডিউল" : "Library & Book Issue-Return Tracking",
        isBn ? "ফ্রি অনসাইট অথবা জুম স্টাফ ট্রেনিং সেশন" : "Free Onsite or Zoom Staff Training Sessions",
        isBn ? "প্রায়োরিটি ডেডিকেটেড কাস্টমার সাপোর্ট" : "Priority Dedicated Customer Support",
      ],
    },
    {
      id: "premium",
      name: isBn ? "প্রিমিয়াম" : "Premium",
      tagline: isBn
        ? "বৃহৎ শিক্ষাপ্রতিষ্ঠান, কলেজ ও মাল্টি-ক্যাম্পাস নেটওয়ার্ক"
        : "For large colleges, high schools & multi-campus networks",
      tierBadge: isBn ? "এন্টারপ্রাইজ লেভেল" : "Enterprise Level",
      students: isBn ? "৭০১ – ১,৫০০+ শিক্ষার্থী" : "701 – 1,500+ Students",
      monthlyPrice: "৬,৫০০",
      monthlyPriceEn: "6,500",
      yearlyPrice: "৫,৪০০",
      yearlyPriceEn: "5,400",
      yearlyTotal: "৬৪,৮00",
      yearlyTotalEn: "64,800",
      onboarding: isBn ? "৳৮,০০০ ভিআইপি সেটআপ ও ফুল টিম ট্রেনিং" : "৳8,000 VIP Setup & Full Team Training",
      popular: false,
      color: "indigo",
      cardBg: "from-slate-900/90 via-[#0e122b]/80 to-slate-950/90 dark:from-[#0d102a] dark:via-[#090b1c] dark:to-[#050611]",
      borderClass: "border-slate-200 dark:border-indigo-900/60 hover:border-indigo-500/50",
      badgeColor: "bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-300/40 dark:border-indigo-700/40",
      accentBg: "bg-indigo-500/15 text-indigo-400",
      btnClass:
        "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-600/30",
      features: [
        isBn ? "স্ট্যান্ডার্ড প্যাকেজের সমস্ত অ্যাডভান্সড সুবিধা" : "All Standard package features included",
        isBn ? "মাল্টি-ক্যাম্পাস ও একাধিক ব্রাঞ্চ সেন্ট্রাল কন্ট্রোল" : "Multi-Campus & Multi-Branch Central Dashboard",
        isBn ? "জিপিএস লাইভ স্কুল বাস ট্র্যাকিং ও হোস্টেল" : "GPS Live School Bus Tracking & Hostel Module",
        isBn ? "এআই রেজাল্ট প্রেডিকশন ও মেধা অ্যানালিটিক্স" : "AI Student Performance & Grade Prediction",
        isBn ? "কাস্টম ডোমেইন (e.g. yourschool.edu.bd)" : "Custom Domain Integration (e.g. yourschool.edu.bd)",
        isBn ? "২৪/৭ ডেডিকেটেড একাউন্ট ম্যানেজার ও সাপোর্ট" : "24/7 Dedicated Account Manager & VIP Support",
      ],
      allFeatures: [
        isBn ? "অ্যাক্যাডেমিক ক্যালেন্ডার ও ইভেন্ট ম্যানেজমেন্ট" : "Academic Calendar & Event Management Portal",
        isBn ? "কাস্টম এসএমএস সেন্ডার আইডি (মাস্কিং এসএমএস)" : "Official Masking SMS Sender ID Support",
        isBn ? "পুরোনো খাতা ও এক্সেল শিট থেকে ১০০% ফ্রি ডেটা মাইগ্রেশন" : "100% Free Data Migration from Legacy Registers",
        isBn ? "সর্বোচ্চ লেভেল SLA ও ৯৯.৯৯% আপটাইম গ্যারান্টি" : "Tier-1 Enterprise SLA with 99.99% Cloud Uptime",
        isBn ? "আনলিমিটেড ক্লাউড স্টোরেজ ও ডকুমেন্ট ভল্ট" : "Unlimited Document & Student File Storage",
      ],
    },
  ];

  return (
    <section id="packages" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl opacity-60 dark:opacity-40" />
        <div className="absolute -top-32 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-300/40 dark:border-cyan-700/40">
            <Sparkles className="w-4 h-4 text-cyan-500 animate-pulse" />
            <span>{isBn ? "সহজ, স্বচ্ছ ও সাশ্রয়ী প্যাকেজ" : "Simple, Transparent & Fair Pricing"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {isBn ? (
              <>
                শিক্ষার্থী সংখ্যার ভিত্তিতে{" "}
                <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">
                  সহজ ও আধুনিক মূল্য
                </span>
              </>
            ) : (
              <>
                Modern Pricing Scaled to{" "}
                <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400 bg-clip-text text-transparent">
                  Your Student Count
                </span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isBn
              ? "একটি প্রতিষ্ঠানের জন্য অল-ইন-ওয়ান পূর্ণাঙ্গ ক্লাউড সিস্টেম। কোনো লুকানো চার্জ বা আলাদা মডিউল ফি নেই—আপনার প্রতিষ্ঠানের শিক্ষার্থী ধারণক্ষমতা অনুযায়ী উপযুক্ত প্যাকেজটি বেছে নিন।"
              : "One complete cloud operating system for your entire campus. No hidden add-ons or module locks—choose the perfect tier crafted for your student capacity."}
          </p>

          {/* Billing Cycle Switcher */}
          <div className="pt-4 flex items-center justify-center">
            <div className="p-1.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-md inline-flex items-center gap-1.5">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  billingCycle === "monthly"
                    ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {isBn ? "মাসিক বিলিং" : "Monthly Billing"}
              </button>

              <button
                onClick={() => setBillingCycle("yearly")}
                className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  billingCycle === "yearly"
                    ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span>{isBn ? "বাৎসরিক বিলিং" : "Annual Billing"}</span>
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-black text-[10px] uppercase tracking-wider">
                  {isBn ? "২ মাস ফ্রি" : "2 Mo Free"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Modern Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-2">
          {packages.map((pkg) => {
            const isExpanded = expandedCard === pkg.id;
            const price =
              billingCycle === "monthly"
                ? isBn
                  ? pkg.monthlyPrice
                  : pkg.monthlyPriceEn
                : isBn
                ? pkg.yearlyPrice
                : pkg.yearlyPriceEn;

            return (
              <div
                key={pkg.id}
                className={`group relative rounded-3xl transition-all duration-300 flex flex-col justify-between overflow-hidden backdrop-blur-xl ${
                  pkg.popular
                    ? "lg:-translate-y-3 z-20 bg-slate-900 text-white shadow-2xl"
                    : "bg-white/80 dark:bg-slate-900/80 text-slate-900 dark:text-slate-100 shadow-xl"
                } border ${pkg.borderClass}`}
              >
                {/* Modern High-Tech Background Artwork Layer (Superior to plain watermarks) */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
                  {/* Futuristic Mesh Gradient Aura */}
                  <div
                    className={`absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-25 transition-opacity group-hover:opacity-40 ${
                      pkg.id === "standard"
                        ? "bg-emerald-400"
                        : pkg.id === "premium"
                        ? "bg-indigo-500"
                        : "bg-cyan-400"
                    }`}
                  />

                  {/* High-Tech Isometric Graphic SVG Layer */}
                  <svg
                    className={`absolute bottom-0 right-0 w-64 h-64 transition-transform duration-700 group-hover:scale-110 pointer-events-none ${
                      pkg.popular ? "opacity-15" : "opacity-[0.07] dark:opacity-[0.12]"
                    }`}
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {pkg.id === "basic" && (
                      <>
                        {/* Modern Cyber Grid & Education Cube */}
                        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                        <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M70 100L100 70L130 100L100 130Z" stroke="currentColor" strokeWidth="2" />
                        <path d="M100 70V130M70 100H130" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                        <path d="M60 140L100 120L140 140" stroke="currentColor" strokeWidth="2" />
                      </>
                    )}

                    {pkg.id === "standard" && (
                      <>
                        {/* Futuristic Shield & Neural Pulse Architecture */}
                        <path
                          d="M100 20L160 50V110C160 150 100 180 100 180C100 180 40 150 40 110V50L100 20Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <circle cx="100" cy="100" r="35" stroke="currentColor" strokeWidth="2" />
                        <path d="M100 40V160M40 100H160" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                        <circle cx="100" cy="70" r="6" fill="currentColor" />
                        <circle cx="70" cy="115" r="6" fill="currentColor" />
                        <circle cx="130" cy="115" r="6" fill="currentColor" />
                        <path d="M100 70L70 115H130L100 70Z" stroke="currentColor" strokeWidth="1.5" />
                      </>
                    )}

                    {pkg.id === "premium" && (
                      <>
                        {/* Enterprise AI Core & Constellation Node Network */}
                        <rect x="50" y="50" width="100" height="100" rx="20" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
                        <circle cx="100" cy="100" r="10" fill="currentColor" />
                        <path d="M50 50L150 150M150 50L50 150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
                        <circle cx="50" cy="50" r="5" fill="currentColor" />
                        <circle cx="150" cy="50" r="5" fill="currentColor" />
                        <circle cx="150" cy="150" r="5" fill="currentColor" />
                        <circle cx="50" cy="150" r="5" fill="currentColor" />
                      </>
                    )}
                  </svg>
                </div>

                {/* Popular Ribbon / Floating Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-gradient-to-l from-emerald-500 to-cyan-500 text-slate-950 text-[11px] font-black uppercase tracking-wider py-1.5 px-4 rounded-bl-2xl shadow-md flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{pkg.tierBadge}</span>
                    </div>
                  </div>
                )}

                {/* Card Main Body */}
                <div className="p-6 sm:p-8 relative z-10 space-y-6 flex-1">
                  {/* Header Tier */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black tracking-widest uppercase text-cyan-600 dark:text-cyan-400">
                        {pkg.id.toUpperCase()}
                      </span>
                      {!pkg.popular && (
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${pkg.badgeColor}`}>
                          {pkg.tierBadge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black">{pkg.name}</h3>

                    <p
                      className={`text-xs leading-relaxed ${
                        pkg.popular ? "text-slate-300" : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Student Capacity Highlight Badge */}
                  <div
                    className={`flex items-center gap-2.5 p-3 rounded-2xl border ${
                      pkg.popular
                        ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-300"
                        : "bg-slate-100 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60 text-slate-800 dark:text-slate-200"
                    }`}
                  >
                    <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500 shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                        {isBn ? "শিক্ষার্থী ধারণক্ষমতা" : "Capacity"}
                      </p>
                      <p className="text-sm font-black">{pkg.students}</p>
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/80">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-5xl font-black tracking-tight">৳{price}</span>
                      <span
                        className={`text-xs sm:text-sm font-semibold ${
                          pkg.popular ? "text-slate-300" : "text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        {isBn ? "/ মাস" : "/ month"}
                      </span>
                    </div>

                    {billingCycle === "yearly" ? (
                      <p
                        className={`text-xs mt-1 font-semibold ${
                          pkg.popular ? "text-emerald-300" : "text-cyan-600 dark:text-cyan-400"
                        }`}
                      >
                        {isBn
                          ? `৳${pkg.yearlyTotal} / বছর (বাৎসরিক বিলিংয়ে ২ মাস ফ্রি)`
                          : `৳${pkg.yearlyTotalEn} / year (Billed annually, 2 mo free)`}
                      </p>
                    ) : (
                      <p
                        className={`text-xs mt-1 ${
                          pkg.popular ? "text-slate-400" : "text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        {isBn ? "প্রতি মাসে নিয়মিত পরিশোধযোগ্য" : "Billed monthly without lock-in"}
                      </p>
                    )}

                    <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-[11px] font-bold text-slate-600 dark:text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{pkg.onboarding}</span>
                    </div>
                  </div>

                  {/* Primary Feature Checklist */}
                  <div className="space-y-3 pt-2">
                    <p
                      className={`text-[11px] font-bold uppercase tracking-wider ${
                        pkg.popular ? "text-slate-300" : "text-slate-400"
                      }`}
                    >
                      {isBn ? "প্যাকেজের প্রধান সুবিধাসমূহ:" : "Key Included Modules:"}
                    </p>

                    <ul className="space-y-2.5 text-xs sm:text-sm">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              pkg.popular
                                ? "bg-emerald-400 text-slate-950 font-black"
                                : "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400"
                            }`}
                          >
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span
                            className={
                              pkg.popular ? "text-slate-100 font-medium" : "text-slate-700 dark:text-slate-300"
                            }
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Expandable all features accordion */}
                    {isExpanded && (
                      <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/80 space-y-2 animate-in fade-in duration-300">
                        <p
                          className={`text-[11px] font-bold uppercase tracking-wider ${
                            pkg.popular ? "text-cyan-300" : "text-cyan-600 dark:text-cyan-400"
                          }`}
                        >
                          {isBn ? "অতিরিক্ত অ্যাডভান্সড স্পেকস:" : "Full Technical Specifications:"}
                        </p>
                        <ul className="space-y-2 text-xs">
                          {pkg.allFeatures.map((extFeat, eIdx) => (
                            <li key={eIdx} className="flex items-start gap-2">
                              <span className="text-cyan-500 font-bold shrink-0">✦</span>
                              <span
                                className={
                                  pkg.popular ? "text-slate-200" : "text-slate-600 dark:text-slate-400"
                                }
                              >
                                {extFeat}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Toggle expand button */}
                    <button
                      onClick={() => toggleExpand(pkg.id)}
                      className={`text-xs font-bold flex items-center gap-1 hover:underline transition-all pt-1 ${
                        pkg.popular
                          ? "text-cyan-300 hover:text-white"
                          : "text-cyan-600 dark:text-cyan-400 hover:text-cyan-700"
                      }`}
                    >
                      <span>
                        {isExpanded
                          ? isBn
                            ? "কম ফিচার দেখুন"
                            : "Show Less"
                          : isBn
                          ? "সকল ফিচার বিস্তারিত দেখুন"
                          : "View All Specs"}
                      </span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Card Bottom CTA Button */}
                <div className="p-6 sm:p-8 pt-0 relative z-10">
                  <button
                    onClick={() => onOpenDemo(`${pkg.name} Package`)}
                    className={`w-full py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${pkg.btnClass}`}
                  >
                    <span>{isBn ? "এই প্যাকেজটি বেছে নিন / ডেমো" : "Choose This Plan / Get Demo"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust & Peace of Mind Highlights */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {isBn ? "কোনো লুকানো চার্জ নেই" : "No Hidden Fees"}
              </h4>
              <p className="text-xs text-slate-500">
                {isBn ? "মাসিক ফি অনুযায়ী পরিষ্কার বিলিং" : "Clear monthly or annual subscription"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {isBn ? "ফ্রি ডেটা মাইগ্রেশন" : "Free Data Migration"}
              </h4>
              <p className="text-xs text-slate-500">
                {isBn ? "পুরোনো এক্সেল ও খাতা থেকে ফ্রি এন্ট্রি" : "Zero downtime switch from old Excel"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {isBn ? "হ্যান্ডস-অন স্টাফ ট্রেনিং" : "Hands-on Staff Training"}
              </h4>
              <p className="text-xs text-slate-500">
                {isBn ? "শিক্ষক ও অফিস স্টাফদের প্রশিক্ষণ" : "Onsite or Zoom sessions included"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {isBn ? "২৪/৭ বাংলা হেল্পলাইন" : "24/7 Bangla Support"}
              </h4>
              <p className="text-xs text-slate-500">
                {isBn ? "ফোন ও হোয়াটসঅ্যাপে সার্বক্ষণিক সেবা" : "Instant assistance whenever needed"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
