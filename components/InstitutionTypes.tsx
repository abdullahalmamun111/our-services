"use client";

import React from "react";
import Image from "next/image";
import { translations, Language } from "@/lib/translations";
import {
  School,
  GraduationCap,
  BookOpen,
  Award,
  Layers,
  Wrench,
  University,
  Baby,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface InstitutionTypesProps {
  lang: Language;
  onOpenDemo: (instType?: string) => void;
}

export default function InstitutionTypes({
  lang,
  onOpenDemo,
}: InstitutionTypesProps) {
  const t = translations[lang];

  const types = [
    {
      icon: School,
      titleEn: "Secondary School",
      titleBn: "মাধ্যমিক বিদ্যালয়",
      subEn: "Secondary education, classes 6-10",
      subBn: "ষষ্ঠ থেকে দশম শ্রেণির শিক্ষা",
      pointsEn: [
        "Class, section, and student records",
        "Attendance and guardian updates",
        "Board-ready exams and results",
      ],
      pointsBn: [
        "শ্রেণি, শাখা ও শিক্ষার্থীর তথ্য",
        "হাজিরা এবং অভিভাবককে আপডেট",
        "বোর্ড উপযোগী পরীক্ষা ও ফলাফল",
      ],
      accent: "from-cyan-500 to-blue-600",
    },
    {
      icon: GraduationCap,
      titleEn: "College (Higher Secondary)",
      titleBn: "কলেজ (উচ্চমাধ্যমিক)",
      subEn: "HSC groups, subjects, and academic sessions",
      subBn: "এইচএসসি বিভাগ, বিষয় ও শিক্ষাবর্ষ",
      pointsEn: [
        "Science, humanities, and business groups",
        "Exam schedules and GPA processing",
        "Student accounts and notices",
      ],
      pointsBn: [
        "বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা বিভাগ",
        "পরীক্ষার রুটিন ও জিপিএ প্রসেসিং",
        "শিক্ষার্থীর হিসাব ও নোটিশ",
      ],
      accent: "from-blue-500 to-indigo-600",
    },
    {
      icon: BookOpen,
      titleEn: "Coaching",
      titleBn: "কোচিং",
      subEn: "Academic, admission, and test-prep batches",
      subBn: "একাডেমিক, ভর্তি ও পরীক্ষার প্রস্তুতি ব্যাচ",
      pointsEn: [
        "Batch-wise classes and attendance",
        "Fee tracking with due reminders",
        "Tests, scores, and progress reports",
      ],
      pointsBn: [
        "ব্যাচভিত্তিক ক্লাস ও হাজিরা",
        "বকেয়া নোটিশসহ ফি ব্যবস্থাপনা",
        "পরীক্ষা, নম্বর ও অগ্রগতির রিপোর্ট",
      ],
      accent: "from-emerald-500 to-teal-600",
    },
    {
      icon: Award,
      titleEn: "Private Academy",
      titleBn: "প্রাইভেট একাডেমি",
      subEn: "Independent learning and specialist academies",
      subBn: "স্বতন্ত্র শিক্ষা ও বিশেষায়িত একাডেমি",
      pointsEn: [
        "Custom courses and learner profiles",
        "Flexible schedules and attendance",
        "Tuition records and achievement reports",
      ],
      pointsBn: [
        "নিজস্ব কোর্স ও শিক্ষার্থীর প্রোফাইল",
        "নমনীয় রুটিন ও হাজিরা ব্যবস্থাপনা",
        "বেতন হিসাব ও অর্জনের রিপোর্ট",
      ],
      accent: "from-violet-500 to-fuchsia-600",
    },
    {
      icon: Layers,
      titleEn: "Madrasa",
      titleBn: "মাদ্রাসা",
      subEn: "Alia, Qawmi, and Hifz education",
      subBn: "আলিয়া, কওমি ও হিফজ শিক্ষা",
      pointsEn: [
        "Curriculum, class, and exam records",
        "Residential attendance and fee tracking",
        "Guardian communication and notices",
      ],
      pointsBn: [
        "পাঠ্যক্রম, শ্রেণি ও পরীক্ষার তথ্য",
        "আবাসিক হাজিরা ও ফি ব্যবস্থাপনা",
        "অভিভাবক যোগাযোগ ও নোটিশ",
      ],
      accent: "from-sky-500 to-indigo-600",
    },
    {
      icon: Award,
      titleEn: "Training Institute",
      titleBn: "প্রশিক্ষণ ইনস্টিটিউট",
      subEn: "Professional, language, and skills courses",
      subBn: "পেশাগত, ভাষা ও দক্ষতাভিত্তিক কোর্স",
      pointsEn: [
        "Course enrollment and session schedules",
        "Assessments and certificate records",
        "Learner progress and fee reports",
      ],
      pointsBn: [
        "কোর্সে ভর্তি ও সেশনের সময়সূচি",
        "মূল্যায়ন ও সনদের তথ্য",
        "শিক্ষার্থীর অগ্রগতি ও ফি রিপোর্ট",
      ],
      accent: "from-amber-500 to-orange-600",
    },
    {
      icon: Wrench,
      titleEn: "Technical Institute",
      titleBn: "কারিগরি ইনস্টিটিউট",
      subEn: "Polytechnic, vocational, and applied technology",
      subBn: "পলিটেকনিক, কারিগরি ও ব্যবহারিক প্রযুক্তি শিক্ষা",
      pointsEn: [
        "Department and trade-based student records",
        "Practical class and lab schedules",
        "Term results and skills assessments",
      ],
      pointsBn: [
        "বিভাগ ও ট্রেডভিত্তিক শিক্ষার্থীর তথ্য",
        "ব্যবহারিক ক্লাস ও ল্যাবের রুটিন",
        "টার্ম ফলাফল ও দক্ষতার মূল্যায়ন",
      ],
      accent: "from-orange-500 to-rose-600",
    },
    {
      icon: University,
      titleEn: "University",
      titleBn: "বিশ্ববিদ্যালয়",
      subEn: "Higher education, departments, and academic terms",
      subBn: "উচ্চশিক্ষা, বিভাগ ও একাডেমিক টার্ম",
      pointsEn: [
        "Department and semester management",
        "Credit, courses, and exam results",
        "Student services and account records",
      ],
      pointsBn: [
        "বিভাগ ও সেমিস্টার ব্যবস্থাপনা",
        "ক্রেডিট, কোর্স ও পরীক্ষার ফলাফল",
        "শিক্ষার্থী সেবা ও হিসাবের তথ্য",
      ],
      accent: "from-indigo-500 to-blue-700",
    },
    {
      icon: Baby,
      titleEn: "Kindergarten",
      titleBn: "কিন্ডারগার্টেন",
      subEn: "Early learning and child-friendly school routines",
      subBn: "শিশুদের প্রারম্ভিক শিক্ষা ও উপযোগী স্কুল রুটিন",
      pointsEn: [
        "Simple class and student profiles",
        "Daily attendance and parent notices",
        "Activity, fee, and progress updates",
      ],
      pointsBn: [
        "সহজ শ্রেণি ও শিক্ষার্থী প্রোফাইল",
        "দৈনিক হাজিরা ও অভিভাবক নোটিশ",
        "কার্যক্রম, ফি ও অগ্রগতির আপডেট",
      ],
      accent: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section
      id="institutes"
      className="py-20 relative bg-slate-100/50 dark:bg-slate-900/30"
    >
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

        {/* Institution Type Cards */}
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
                      className={`w-13 h-13 shrink-0 rounded-2xl bg-gradient-to-tr ${item.accent} text-white flex items-center justify-center p-3 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="break-words text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors sm:text-xl">
                        {title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {sub}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    {points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                      >
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
                    <span>
                      {lang === "bn"
                        ? "এই ক্যাটাগরির ডেমো নিন"
                        : "View Tailored Demo"}
                    </span>
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
                <span>
                  {lang === "bn"
                    ? "প্রগ্রেসিভ ওয়েব অ্যাপ (PWA)"
                    : "Progressive Web App"}
                </span>
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
                  <span>
                    {lang === "bn"
                      ? "ইনস্ট্যান্ট পুশ নোটিফিকেশন"
                      : "Instant Push Alerts"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>
                    {lang === "bn"
                      ? "মোবাইলে সরাসরি ফি পেমেন্ট"
                      : "In-App Fee Payments"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>
                    {lang === "bn"
                      ? "শিক্ষার্থীর লাইভ উপস্থিতি রেকর্ড"
                      : "Real-time Attendance"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>
                    {lang === "bn"
                      ? "১০০% অফলাইন ক্যাশিং রেডি"
                      : "Offline Cache Enabled"}
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenDemo("Mobile PWA")}
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-cyan-600/30 flex items-center gap-2"
                >
                  <span>
                    {lang === "bn"
                      ? "মোবাইল অ্যাপ ডেমো দেখুন"
                      : "Explore Mobile App Demo"}
                  </span>
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
