"use client";

import React, { useState, useMemo } from "react";
import { translations, Language } from "@/lib/translations";
import {
  GraduationCap,
  Users,
  Fingerprint,
  FileCheck2,
  CreditCard,
  MessageSquare,
  BookOpen,
  Laptop,
  Library,
  Building2,
  Bus,
  Package,
  Award,
  PhoneForwarded,
  Globe2,
  BarChart3,
  ShieldCheck,
  Bot,
  Search,
  Sparkles,
  Check,
} from "lucide-react";

interface ModulesShowcaseProps {
  lang: Language;
  onOpenDemo: (moduleName?: string) => void;
}

export default function ModulesShowcase({ lang, onOpenDemo }: ModulesShowcaseProps) {
  const t = translations[lang];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "academic" | "finance" | "operations" | "comm" | "ai"
  >("all");

  const modulesList = useMemo(() => {
    return [
      {
        id: "academic",
        category: "academic",
        icon: GraduationCap,
        titleEn: "Academic Management",
        titleBn: "একাডেমিক ম্যানেজমেন্ট",
        descEn: "Classes, sections, subjects, timetables, and conflict-free teacher schedules.",
        descBn: "আনলিমিটেড ক্লাস, সেকশন, বিষয় ও রুটিন নির্ধারণ এবং এক ক্লিকে বাল্ক প্রমোশন।",
        featuresEn: ["Timetable scheduler", "Conflict detection", "Bulk class promotion", "Teacher allocations"],
        featuresBn: ["রুটিন ও শিডিউলার", "টিচার কনফ্লিক্ট ডিটেকশন", "১-ক্লিকে নতুন ক্লাসে প্রমোশন", "বিষয়ভিত্তিক শিক্ষক বণ্টন"],
      },
      {
        id: "student",
        category: "academic",
        icon: Users,
        titleEn: "Student Management (SIS)",
        titleBn: "শিক্ষার্থী তথ্য সিস্টেম (SIS)",
        descEn: "Complete lifecycle tracking from online admission to digital ID cards.",
        descBn: "ভর্তি থেকে শুরু করে রক্তের গ্রুপ, অভিভাবকের তথ্য, ডিজিটাল আইডি কার্ড ও সার্টিফিকেট।",
        featuresEn: ["Online admission portal", "Student 360° profile", "Printable ID cards", "Custom certificates"],
        featuresBn: ["অনলাইন ভর্তি আবেদন", "শিক্ষার্থীর ৩৬০° প্রোফাইল", "প্রিন্টযোগ্য স্মার্ট আইডি কার্ড", "প্রশংসাপত্র ও ট্রান্সক্রিপ্ট"],
      },
      {
        id: "attendance",
        category: "academic",
        icon: Fingerprint,
        titleEn: "Attendance & Biometric Gate",
        titleBn: "ডিজিটাল ও বায়োমেট্রিক হাজিরা",
        descEn: "Sub-second RFID & biometric gate punching with instant parent alerts.",
        descBn: "গেট দিয়ে প্রবেশ করামাত্র ফিঙ্গারপ্রিন্ট/RFID স্ক্যান এবং অভিভাবকের মোবাইলে কনফার্মেশন।",
        featuresEn: ["Biometric & RFID sync", "Absentee auto SMS blast", "Teacher duty logs", "Monthly reports"],
        featuresBn: ["আরএফআইডি ও ফিঙ্গারপ্রিন্ট সিঙ্ক", "অনুপস্থিতির অটো এসএমএস", "শিক্ষকদের পাঞ্চ টাইম রেকর্ড", "মাসিক উপস্থিতি রিপোর্ট"],
      },
      {
        id: "exams",
        category: "academic",
        icon: FileCheck2,
        titleEn: "Examination & Results",
        titleBn: "পরীক্ষা ও ফলাফল প্রসেসিং",
        descEn: "Schedule exams, input marks, compute automated GPA/CGPA and print marksheets.",
        descBn: "পরীক্ষার রুটিন, নম্বর এন্ট্রি, অটোমেটিক জিপিএ গণনা এবং বোর্ড ফরম্যাটে আকর্ষণীয় মার্কশিট।",
        featuresEn: ["Auto GPA/CGPA engine", "Admit card generator", "Printable marksheets", "Merit position lists"],
        featuresBn: ["অটো জিপিএ ও গ্রেডিং", "অ্যাডমিট কার্ড জেনারেটর", "বোর্ড স্ট্যান্ডার্ড মার্কশিট", "মেধা তালিকা প্রস্তুতকরণ"],
      },
      {
        id: "finance",
        category: "finance",
        icon: CreditCard,
        titleEn: "Fees & Accounts Management",
        titleBn: "ফি ও ফিন্যান্স অ্যাকাউন্টিং",
        descEn: "Collect tuition fees via bKash/Nagad, track dues, manage income & expenses.",
        descBn: "বিকাশ-নগদ গেটওয়েতে ক্যাশলেস ফি কালেকশন, বকেয়া ট্র্যাকিং ও দৈনিক আয়-ব্যয় লেজার।",
        featuresEn: ["bKash, Nagad & Cards", "Dues tracking & waivers", "Income/expense ledger", "Profit & Loss reports"],
        featuresBn: ["বিকাশ, নগদ ও কার্ড পেমেন্ট", "বকেয়া ট্র্যাকিং ও ছাড়", "আয়-ব্যয় দৈনিক খতিয়ান", "মাসিক লাভ-ক্ষতি রিপোর্ট"],
      },
      {
        id: "comm",
        category: "comm",
        icon: MessageSquare,
        titleEn: "Multi-Channel Communication",
        titleBn: "এসএমএস ও মাল্টি-চ্যানেল যোগাযোগ",
        descEn: "Instant bulk SMS to parents, WhatsApp gateway, notice board and event alerts.",
        descBn: "অভিভাবকদের ফোনে বাল্ক এসএমএস, হোয়াটসঅ্যাপ এপিআই, জরুরি নোটিশ ও ইভেন্ট আপডেট।",
        featuresEn: ["Masking / Non-masking SMS", "WhatsApp API gateway", "Reusable templates", "Digital notice board"],
        featuresBn: ["মাস্কিং ও নন-মাস্কিং এসএমএস", "হোয়াটসঅ্যাপ নোটিফিকেশন", "রেডিমেড এসএমএস টেমপ্লেট", "ডিজিটাল নোটিশ বোর্ড"],
      },
      {
        id: "homework",
        category: "academic",
        icon: BookOpen,
        titleEn: "Homework & Lesson Planning",
        titleBn: "হোমওয়ার্ক ও লেসন প্ল্যানিং",
        descEn: "Subject-wise daily homework, syllabus milestones, and lesson progression.",
        descBn: "বিষয়ভিত্তিক প্রতিদিনের হোমওয়ার্ক, সিলেবাস ট্র্যাকিং ও পাঠপরিকল্পনা মনিটরিং।",
        featuresEn: ["Daily homework tasks", "Syllabus tracking", "Teacher notes sharing", "Guardian review"],
        featuresBn: ["প্রতিদিনের বাড়ির কাজ", "সিলেবাস অগ্রগতি ট্র্যাকিং", "ক্লাস নোট ও স্টাডি মেটেরিয়াল", "অভিভাবক রিভিউ"],
      },
      {
        id: "cbt",
        category: "academic",
        icon: Laptop,
        titleEn: "Online CBT Examination",
        titleBn: "অনলাইন সিবিটি পরীক্ষা",
        descEn: "Conduct online assessments with MCQ question banks and instant auto-grading.",
        descBn: "প্রশ্নব্যাংক থেকে স্বয়ংক্রিয় এমসিকিউ অনলাইন পরীক্ষা এবং তাৎক্ষণিক স্বয়ংক্রিয় রেজাল্ট।",
        featuresEn: ["Question bank library", "Timed online quizzes", "Auto MCQ evaluation", "Instant leaderboard"],
        featuresBn: ["প্রশ্নব্যাংক আর্কাইভ", "টাইম-বেসড অনলাইন কুইজ", "স্বয়ংক্রিয় এমসিকিউ মূল্যায়ন", "তাৎক্ষণিক মেরিট লিস্ট"],
      },
      {
        id: "library",
        category: "operations",
        icon: Library,
        titleEn: "Library Management",
        titleBn: "ডিজিটাল লাইব্রেরি ম্যানেজমেন্ট",
        descEn: "Barcode-enabled book catalog, borrowing ledger, and late fine calculation.",
        descBn: "বারকোড দিয়ে বইয়ের তালিকা, ইস্যু-রিটার্ন ট্র্যাকিং ও বিলম্ব ফি হিসাব।",
        featuresEn: ["Barcode book scanning", "Issue & return ledger", "Late fee calculator", "Digital book catalog"],
        featuresBn: ["বারকোড বই স্ক্যানিং", "ইস্যু ও জমা খতিয়ান", "বিলম্ব ফি অটো ক্যালকুলেশন", "ডিজিটাল ক্যাটালগ"],
      },
      {
        id: "hostel",
        category: "operations",
        icon: Building2,
        titleEn: "Hostel & Resident Management",
        titleBn: "হোস্টেল ও আবাসন ব্যবস্থা",
        descEn: "Rooms, bed allocation, student check-in, mess management and hostel dues.",
        descBn: "রুম ও সিট বরাদ্দ, শিক্ষার্থীদের আবাসন তথ্য, মেস মিল ও হোস্টেল ফি ব্যবস্থাপনা।",
        featuresEn: ["Room & bed allocation", "Mess meal tracking", "Hostel fee invoicing", "Visitor gate register"],
        featuresBn: ["রুম ও সিট বণ্টন", "মেস মিল ও ডাইনিং ট্র্যাকিং", "হোস্টেল ফি ভাউচার", "ভিজিটর গেট খাতা"],
      },
      {
        id: "transport",
        category: "operations",
        icon: Bus,
        titleEn: "Transport & Fleet GPS",
        titleBn: "পরিবহন ও বাস ট্র্যাকিং",
        descEn: "Manage buses, student routes, pickup points, driver logs and transport billing.",
        descBn: "স্কুল বাস, রুট ও স্টপেজ নির্ধারণ, জিপিএস ট্র্যাকিং এবং মাসিক বাস ভাড়া আদায়।",
        featuresEn: ["Route & stop mapping", "Student bus pass", "Transport fee collection", "Driver & vehicle logs"],
        featuresBn: ["রুট ও স্টপ ম্যাপিং", "ডিজিটাল বাস পাস", "পরিবহন ফি কালেকশন", "চালক ও গাড়ির হিস্ট্রি"],
      },
      {
        id: "inventory",
        category: "operations",
        icon: Package,
        titleEn: "Inventory & Assets",
        titleBn: "ইনভেন্টরি ও সম্পদ ব্যবস্থাপনা",
        descEn: "Track lab equipment, uniform stocks, office supplies, and supplier requisitions.",
        descBn: "ল্যাব সরঞ্জাম, বই-খাতা ও ইউনিফর্ম স্টক, সাপ্লায়ার অর্ডার ও মালামাল ইস্যু খতিয়ান।",
        featuresEn: ["Stock replenishment alerts", "Item issuance logs", "Vendor & PO management", "Asset depreciation"],
        featuresBn: ["স্টক অ্যালার্ট", "মালামাল ইস্যু খতিয়ান", "সাপ্লায়ার ম্যানেজমেন্ট", "স্থায়ী সম্পদ রেজিস্টার"],
      },
      {
        id: "alumni",
        category: "comm",
        icon: Award,
        titleEn: "Alumni & Graduate Network",
        titleBn: "প্রাক্তন শিক্ষার্থী (অ্যালামনাই)",
        descEn: "Keep past graduates connected, manage alumni reunions, and donations.",
        descBn: "প্রাক্তন শিক্ষার্থীদের ডাটাবেজ, অ্যালামনাই রিইউনিয়ন ও ক্যারিয়ার নেটওয়ার্ক।",
        featuresEn: ["Graduate directory", "Reunion registrations", "Donation tracking", "Mentorship channel"],
        featuresBn: ["গ্র্যাজুয়েট ডিরেক্টরি", "রিইউনিয়ন রেজিস্ট্রেশন", "অনুদান ট্র্যাকিং", "ক্যারিয়ার মেন্টরশিপ"],
      },
      {
        id: "frontoffice",
        category: "operations",
        icon: PhoneForwarded,
        titleEn: "Front Office & Reception",
        titleBn: "ফ্রন্ট অফিস ও অভ্যর্থনা",
        descEn: "Digital visitor logbook, admission inquiries, call logs, and postal dispatch.",
        descBn: "ডিজিটাল ভিজিটর পাস, ভর্তি অনুসন্ধান রেজিস্টার, ফোন কল লগ ও ডাক আদান-প্রদান।",
        featuresEn: ["Digital visitor pass", "Admission enquiries", "Phone & inquiry logs", "Postal dispatch tracking"],
        featuresBn: ["ডিজিটাল ভিজিটর পাস", "ভর্তি অনুসন্ধান ট্র্যাকিং", "ইনকোয়ারি ও ফোন কল হিস্ট্রি", "চিঠিপত্র রেজিস্টার"],
      },
      {
        id: "frontcms",
        category: "comm",
        icon: Globe2,
        titleEn: "Public Website CMS",
        titleBn: "প্রতিষ্ঠানের নিজস্ব ওয়েবসাইট CMS",
        descEn: "Modern public website for your institution with news, notices and gallery.",
        descBn: "প্রতিষ্ঠানটির জন্য আকর্ষণীয় ওয়েবসাইট, যাতে নোটিশ, ফটো গ্যালারি ও ফলাফল প্রকাশ করা যায়।",
        featuresEn: ["Dynamic banner slider", "Photo & video gallery", "Online admission form", "Instant notice board"],
        featuresBn: ["ডাইনামিক ব্যানার স্লাইডার", "ফটো ও ভিডিও গ্যালারি", "অনলাইন ভর্তি ফর্ম", "লাইভ নোটিশ বোর্ড"],
      },
      {
        id: "reports",
        category: "finance",
        icon: BarChart3,
        titleEn: "Reports & Ministry Compliance",
        titleBn: "রিপোর্ট ও অডিট ট্রেইল",
        descEn: "50+ real-time academic, finance, and attendance reports for management.",
        descBn: "বোর্ড ও মন্ত্রণালয়ের জন্য প্রয়োজনীয় ৫০+ ধরনের প্রিন্টযোগ্য স্বয়ংক্রিয় রিপোর্ট।",
        featuresEn: ["Government board formats", "User activity audit logs", "Financial summaries", "Export to PDF/Excel"],
        featuresBn: ["সরকারি বোর্ড ফরম্যাট", "ইউজার অ্যাক্টিভিটি অডিট", "আর্থিক সারাংশ রিপোর্ট", "পিডিএফ ও এক্সেল এক্সপোর্ট"],
      },
      {
        id: "security",
        category: "ai",
        icon: ShieldCheck,
        titleEn: "Security & Role-Based Access",
        titleBn: "নিরাপত্তা ও ইউজার পারমিশন",
        descEn: "Enterprise bank-grade security, automated cloud backups, and fine-grained roles.",
        descBn: "ব্যাংক-লেভেল ডাটা সিকিউরিটি, স্বয়ংক্রিয় ক্লাউড ব্যাকআপ এবং পদবি অনুযায়ী অ্যাক্সেস।",
        featuresEn: ["Granular role permissions", "Daily automated backup", "Captcha & SSL encryption", "Multi-branch support"],
        featuresBn: ["পদবি অনুযায়ী নির্দিষ্ট অনুমতি", "স্বয়ংক্রিয় ক্লাউড ব্যাকআপ", "ক্যাপচা ও এসএসএল সিকিউরিটি", "একাধিক শাখা ব্যবস্থাপনা"],
      },
      {
        id: "ai",
        category: "ai",
        icon: Bot,
        titleEn: "AI Copilot & Smart Insights",
        titleBn: "এআই কোপাইলট ও স্মার্ট অ্যানালিটিক্স",
        descEn: "Next-gen AI assistant to generate exam questions and forecast student performance.",
        descBn: "প্রশ্ন তৈরি, শিক্ষার্থীদের দুর্বলতা চিহ্নিতকরণ ও ড্রপআউট রোধে আধুনিক এআই অ্যালগরিদম।",
        featuresEn: ["AI question generation", "Student grade forecasting", "Auto SMS draft writer", "AI study tutor"],
        featuresBn: ["এআই প্রশ্নপত্র তৈরি", "গ্রেড পূর্বাভাস ও পরামর্শ", "অটো এসএমএস ড্রাফটিং", "স্মার্ট স্টাডি অ্যাসিস্ট্যান্ট"],
      },
    ];
  }, []);

  const filteredModules = useMemo(() => {
    return modulesList.filter((m) => {
      const matchesCategory =
        selectedCategory === "all" || m.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const title = (lang === "bn" ? m.titleBn : m.titleEn).toLowerCase();
      const desc = (lang === "bn" ? m.descBn : m.descEn).toLowerCase();
      const matchesSearch = title.includes(query) || desc.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [modulesList, selectedCategory, searchQuery, lang]);

  return (
    <section id="modules" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.modules.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            {t.modules.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.modules.subtitle}
          </p>
        </div>

        {/* Search Bar + Filter Pills */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.modules.searchPlaceholder}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl glass-panel border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900 dark:text-white placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "all"
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/25"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
              }`}
            >
              {t.modules.filterAll}
            </button>
            <button
              onClick={() => setSelectedCategory("academic")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "academic"
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/25"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
              }`}
            >
              {t.modules.filterAcademic}
            </button>
            <button
              onClick={() => setSelectedCategory("finance")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "finance"
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/25"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
              }`}
            >
              {t.modules.filterFinance}
            </button>
            <button
              onClick={() => setSelectedCategory("operations")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "operations"
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/25"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
              }`}
            >
              {t.modules.filterOperations}
            </button>
            <button
              onClick={() => setSelectedCategory("comm")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "comm"
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/25"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
              }`}
            >
              {t.modules.filterComm}
            </button>
            <button
              onClick={() => setSelectedCategory("ai")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "ai"
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/25"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200"
              }`}
            >
              {t.modules.filterAI}
            </button>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((item) => {
            const Icon = item.icon;
            const title = lang === "bn" ? item.titleBn : item.titleEn;
            const desc = lang === "bn" ? item.descBn : item.descEn;
            const features = lang === "bn" ? item.featuresBn : item.featuresEn;

            return (
              <div
                key={item.id}
                className="rounded-3xl p-6 glass-panel border border-slate-200/80 dark:border-slate-800/80 glass-card-hover group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {desc}
                  </p>

                  {/* 4 bullet micro features */}
                  <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
                    {features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3">
                  <button
                    onClick={() => onOpenDemo(title)}
                    className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-600 dark:hover:text-white text-xs font-bold text-slate-700 dark:text-slate-300 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>{lang === "bn" ? "মডিউল ডেমো রিকোয়েস্ট" : "Request Module Demo"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
