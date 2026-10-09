"use client";

import React, { useState } from "react";
import { translations, Language } from "@/lib/translations";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

interface FAQSectionProps {
  lang: Language;
}

export default function FAQSection({ lang }: FAQSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      qBn: "আমাদের পুরোনো এক্সেল বা পূর্বের সফটওয়্যার থেকে সব ডাটা মাইগ্রেট করা যাবে কি?",
      qEn: "Can we migrate data from our existing Excel sheets or previous software?",
      aBn: "হ্যাঁ, সম্পূর্ণ ফ্রিতে! আমাদের ডেডিকেটেড টেকনিক্যাল টিম আপনার পুরোনো সকল শিক্ষার্থীর তথ্য, রোল, অভিভাবকের নম্বর এবং বকেয়া হিসাব কোনো ঝামেলা ছাড়াই নতুন সিস্টেমে ইমপোর্ট করে দেবে।",
      aEn: "Yes, 100% free of cost! Our technical onboarding team will cleanly import all your existing student rosters, guardian phone numbers, and historical fee balances into the system.",
    },
    {
      qBn: "বায়োমেট্রিক ও আরএফআইডি গেট ডিভাইস কি আপনারা সরবরাহ ও ইনস্টল করে দেন?",
      qEn: "Do you supply and configure the biometric and RFID gate hardware?",
      aBn: "জি, আমরা ZKTeco ও উচ্চমানের ক্লাউড-ইন্টিগ্রেটেড আরএফআইডি ও ফিঙ্গারপ্রিন্ট ডিভাইস সরবরাহ করি। আমাদের ইঞ্জিনিয়াররা আপনার ক্যাম্পাসে সরাসরি এসে ডিভাইস সেটআপ এবং টেস্ট রান করিয়ে দেন।",
      aEn: "Yes, we provide industry-standard ZKTeco biometric and cloud-enabled RFID gate scanners. Our technical field engineers handle on-site installation and testing.",
    },
    {
      qBn: "অভিভাবকদের কাছে পাঠানো এসএমএস-এ কি আমাদের প্রতিষ্ঠানের নাম (Sender ID) প্রদর্শিত হবে?",
      qEn: "Will SMS messages show our school's official branded name as the sender?",
      aBn: "অবশ্যই! বিটিআরসি (BTRC) অনুমোদিত অফিশিয়াল মাস্কিং এসএমএস সুবিধা রয়েছে। প্রতিটি নোটিফিকেশনে আপনার প্রতিষ্ঠানের নাম (যেমন: MODEL SCHOOL) প্রেরক হিসেবে শো করবে।",
      aEn: "Absolutely! We provide BTRC-approved branded sender ID (masking SMS). Guardians receive messages clearly showing your institution's name on their phone screen.",
    },
    {
      qBn: "ইন্টারনেট সাময়িক না থাকলে বা বিদ্যুৎ চলে গেলে সিস্টেম কীভাবে কাজ করবে?",
      qEn: "How does the system operate if there is temporary internet disruption or power outage?",
      aBn: "আমাদের বায়োমেট্রিক গেট ডিভাইসগুলোতে অফলাইন মেমরি ও ব্যাকআপ ব্যাটারি থাকে। ইন্টারনেট ফিরে আসতেই সকল পঞ্চ স্বয়ংক্রিয়ভাবে ক্লাউড সার্ভারের সাথে সিঙ্ক হয়ে যায়। কোনো ডাটা মিস হয় না।",
      aEn: "Our biometric gate hardware stores thousands of punches in offline memory with battery backup. The moment internet connectivity restores, everything syncs automatically to the cloud.",
    },
    {
      qBn: "আমাদের শিক্ষক ও অফিস কর্মচারীদের কি আপনারা পর্যাপ্ত ট্রেনিং দেবেন?",
      qEn: "Do you provide hands-on training for our teachers and administrative staff?",
      aBn: "হ্যাঁ! অন-সাইট ক্যাম্পাসে এসে অথবা ভিডিও কলে আপনার শিক্ষক, হিসাবরক্ষক ও প্রধান শিক্ষককে ধাপে ধাপে সহজ ভাষায় প্রশিক্ষণ দেওয়া হয়। এছাড়াও আমাদের ২৪/৭ হোয়াটসঅ্যাপ সাপোর্ট সর্বদা উন্মুক্ত।",
      aEn: "Yes! We provide complete hands-on training sessions for your teachers, accounts officers, and administrative leadership. Plus, our dedicated support hotline is available 24/7.",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === "bn" ? "সাধারণ জিজ্ঞাসা" : "Frequently Asked Questions"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            {lang === "bn" ? "প্রতিষ্ঠান পরিচালকদের সাধারণ কিছু প্রশ্ন" : "Answers to Your Key Inquiries"}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            {lang === "bn"
              ? "সফটওয়্যার নিয়ে কোনো প্রশ্ন থাকলে নিচে দেখে নিন অথবা সরাসরি আমাদের ফোন করুন।"
              : "Everything you need to know about setup, biometric devices, and seamless migration."}
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const q = lang === "bn" ? faq.qBn : faq.qEn;
            const a = lang === "bn" ? faq.aBn : faq.aEn;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 glass-panel overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 dark:text-white flex items-center justify-between gap-4 text-sm sm:text-base hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span>{q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 animate-in fade-in duration-200">
                    <p>{a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
