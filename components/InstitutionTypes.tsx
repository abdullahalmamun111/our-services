"use client";

import React from "react";
import Image from "next/image";
import { translations, Language } from "@/lib/translations";
import {
  School,
  Building,
  GraduationCap,
  BookOpen,
  Award,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface InstitutionTypesProps {
  lang: Language;
  onOpenDemo: (instType?: string) => void;
}

export default function InstitutionTypes({ lang, onOpenDemo }: InstitutionTypesProps) {
  const t = translations[lang];

  const types = [
    {
      icon: School,
      titleEn: "Schools & Academies",
      titleBn: "স্কুল ও বিদ্যাপীঠ",
      subEn: "Primary & High Schools (Bangla / English Version / English Medium)",
      subBn: "প্রাথমিক ও মাধ্যমিক বিদ্যালয় (বাংলা ভার্সন ও ইংলিশ মিডিয়াম)",
      pointsEn: [
        "Digital admission & online tuition fees",
        "Biometric gate attendance & absentee SMS",
        "Board-compliant GPA 5.00 marksheets",
      ],
      pointsBn: [
        "ডিজিটাল ভর্তি ও অনলাইন টিউশন ফি আদায়",
        "বায়োমেট্রিক গেট হাজিরা ও অনুপস্থিতি এসএমএস",
        "বোর্ড কারিকুলাম অনুযায়ী স্বয়ংক্রিয় মার্কশিট",
      ],
      accent: "from-cyan-500 to-blue-600",
    },
    {
      icon: BookOpen,
      titleEn: "Coaching Centers & Tuition",
      titleBn: "কোচিং সেন্টার ও প্রাইভেট একাডেমি",
      subEn: "Admission, BCS, Academic & Medical Coaching Networks",
      subBn: "বিশ্ববিদ্যালয় ভর্তি, মেডিকেল, বিসিএস ও একাডেমিক কোচিং",
      pointsEn: [
        "Batch-wise student enrollment & schedules",
        "Fast fee collection & automatic SMS reminders",
        "Weekly model test ranking & parent updates",
      ],
      pointsBn: [
        "ব্যাচভিত্তিক শিক্ষার্থী ভর্তি ও ক্লাস রুটিন",
        "দ্রুত ফি এন্ট্রি ও স্বয়ংক্রিয় এসএমএস রিমাইন্ডার",
        "মডেল টেস্ট মেধা তালিকা ও অভিভাবক রিপোর্ট",
      ],
      accent: "from-emerald-500 to-teal-600",
    },
    {
      icon: Building,
      titleEn: "Madrasas & Islamic Institutions",
      titleBn: "মাদ্রাসা ও এতিমখানা",
      subEn: "Alia, Qawmi, Hifzul Quran & Orphanage Management",
      subBn: "আলিয়া, কওমি, হিফজুল কুরআন ও আবাসিক মাদ্রাসা",
      pointsEn: [
        "Board & Kitab curriculum exam processing",
        "Hostel & Mess meal daily tracking",
        "Donation & Lillah Boarding accounting ledger",
      ],
      pointsBn: [
        "কিতাব ও আলিয়া বোর্ড অনুযায়ী ফলাফল প্রস্তুত",
        "আবাসিক হোস্টেল ও মেস ডাইনিং হিসাব",
        "অনুদান ও লিল্লাহ ফান্ড স্বচ্ছ অ্যাকাউন্টিং",
      ],
      accent: "from-sky-500 to-indigo-600",
    },
    {
      icon: GraduationCap,
      titleEn: "Colleges & Higher Secondary",
      titleBn: "কলেজ ও উচ্চমাধ্যমিক",
      subEn: "HSC, Intermediate & Degree Honors Campuses",
      subBn: "একাদশ-দ্বাদশ শ্রেণি ও অনার্স-ডিগ্রি কলেজ",
      pointsEn: [
        "Science, Arts & Commerce group-wise tracking",
        "Semester & Term GPA calculation engine",
        "Teacher duty hours & monthly payroll integration",
      ],
      pointsBn: [
        "বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা গ্রুপ ট্র্যাকিং",
        "সেমিস্টার ও টার্ম জিপিএ ক্যালকুলেটর",
        "শিক্ষক হাজিরা ও স্বয়ংক্রিয় বেতন শীট",
      ],
      accent: "from-purple-500 to-pink-600",
    },
    {
      icon: Award,
      titleEn: "Training & Vocational Institutes",
      titleBn: "প্রশিক্ষণ ও কারিগরি ইনস্টিটিউট",
      subEn: "IT, Skill Development, Language & Polytechnic Centers",
      subBn: "আইটি ট্রেনিং, কারিগরি ডিপ্লোমা ও ল্যাঙ্গুয়েজ একাডেমি",
      pointsEn: [
        "Course & batch enrollment management",
        "Automated digital certificate generation with QR verification",
        "Online test assessments & assignment submission",
      ],
      pointsBn: [
        "কোর্স ও ব্যাচ অনুযায়ী শিক্ষার্থী এনরোলমেন্ট",
        "কিউআর ভেরিফায়েড ডিজিটাল সার্টিফিকেট জেনারেটর",
        "অনলাইন পরীক্ষা ও অ্যাসাইনমেন্ট সাবমিশন",
      ],
      accent: "from-amber-500 to-orange-600",
    },
    {
      icon: Layers,
      titleEn: "Universities & Multi-Campus Networks",
      titleBn: "বিশ্ববিদ্যালয় ও মাল্টি-ক্যাম্পাস নেটওয়ার্ক",
      subEn: "Private Universities, Trusts & Educational Chains",
      subBn: "বেসরকারি বিশ্ববিদ্যালয়, ট্রাস্ট ও শিক্ষা চেইন",
      pointsEn: [
        "Departmental hierarchies & credit hour billing",
        "Granular role-based security & central financial audit",
        "High-scale cloud infrastructure with zero downtime",
      ],
      pointsBn: [
        "ক্রেডিট আওয়ার ও ডিপার্টমেন্টাল টিউশন ফি",
        "সেন্ট্রাল ফিন্যান্সিয়াল অডিট ও সিকিউরিটি রুলস",
        "হাই-স্কেল ক্লাউড আর্কিটেকচার ও জিরো ডাউনটাইম",
      ],
      accent: "from-rose-500 to-red-600",
    },
  ];

  return (
    <section id="institutes" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.institutes.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            {t.institutes.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.institutes.subtitle}
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((item, idx) => {
            const Icon = item.icon;
            const title = lang === "bn" ? item.titleBn : item.titleEn;
            const sub = lang === "bn" ? item.subBn : item.subEn;
            const points = lang === "bn" ? item.pointsBn : item.pointsEn;

            return (
              <div
                key={idx}
                className="rounded-3xl p-7 glass-panel border border-slate-200 dark:border-slate-800 glass-card-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div
                      className={`w-13 h-13 rounded-2xl bg-gradient-to-tr ${item.accent} text-white flex items-center justify-center p-3 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">{sub}</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    {points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-2" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                  <button
                    onClick={() => onOpenDemo(title)}
                    className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-600 dark:hover:text-white text-xs font-bold text-slate-700 dark:text-slate-300 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{lang === "bn" ? "এই ক্যাটাগরির ডেমো নিন" : "View Tailored Demo"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile App PWA Showcase Banner */}
        <div className="mt-16 rounded-3xl p-6 sm:p-10 glass-panel border border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === "bn" ? "প্রগ্রেসিভ ওয়েব অ্যাপ (PWA)" : "Progressive Web App"}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {lang === "bn"
                  ? "অভিভাবক ও শিক্ষকদের জন্য স্মার্ট মোবাইল অ্যাপ"
                  : "Smart Mobile App Experience for Parents & Staff"}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === "bn"
                  ? "প্লে-স্টোর বা অ্যাপ-স্টোর ছাড়াই যেকোনো ফোনে ইনস্ট্যান্ট ইনস্টলযোগ্য। ফি জমা, সন্তানের রিয়েল-টাইম গেট হাজিরা, পরীক্ষার রিপোর্ট কার্ড ও নোটিশ—সবকিছু এখন হাতের মুঠোয়।"
                  : "Instant install on iOS & Android devices. Digital fee payments, real-time gate attendance alerts, exam marksheets, and notices right at your fingertips."}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>{lang === "bn" ? "ইনস্ট্যান্ট পুশ নোটিফিকেশন" : "Instant Push Alerts"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>{lang === "bn" ? "মোবাইলে সরাসরি ফি পেমেন্ট" : "In-App Fee Payments"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>{lang === "bn" ? "শিক্ষার্থীর লাইভ উপস্থিতি রেকর্ড" : "Real-time Attendance"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>{lang === "bn" ? "১০০% অফলাইন ক্যাশিং রেডি" : "Offline Cache Enabled"}</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenDemo("Mobile PWA")}
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-cyan-600/30 flex items-center gap-2"
                >
                  <span>{lang === "bn" ? "মোবাইল অ্যাপ ডেমো দেখুন" : "Explore Mobile App Demo"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile App Screen Frame Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-72 rounded-[40px] p-2.5 bg-slate-900 border-4 border-slate-700/80 shadow-2xl group">
                <div className="relative rounded-[32px] overflow-hidden aspect-[9/18] w-full bg-slate-950">
                  <Image
                    src="/images/guardian_mobile_app.png"
                    alt="Dhaka Dream School Guardian & Staff Mobile App"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="320px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
