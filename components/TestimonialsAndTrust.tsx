"use client";

import React from "react";
import { translations, Language } from "@/lib/translations";
import { Star, Quote, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

interface TestimonialsAndTrustProps {
  lang: Language;
}

export default function TestimonialsAndTrust({ lang }: TestimonialsAndTrustProps) {
  const t = translations[lang];

  const reviews = [
    {
      name: "প্রফেসর ড. আব্দুল কাদের",
      title: "অধ্যক্ষ, ঢাকা আইডিয়াল মডেল কলেজ",
      quoteBn:
        "আগে পরীক্ষার সময় মার্কশিট তৈরি আর গার্ডিয়ানদের এসএমএস পাঠানো নিয়ে আমাদের ৩ দিন নির্ঘুম কাটত। EduVerse 360 আসার পর পুরো কাজটি এখন মাত্র আধা ঘণ্টায় সম্পন্ন হয়।",
      quoteEn:
        "Earlier, marksheet generation and sending SMS used to take 3 sleepless days. With this software, our entire exam grading is published within 30 minutes.",
      rating: 5,
      campusSize: "২,২০০ শিক্ষার্থী",
    },
    {
      name: "ইঞ্জি. মাহবুবুল আলম",
      title: "পরিচালক, এপেক্স ইঞ্জিনিয়ারিং কোচিং হোম",
      quoteBn:
        "কোচিংয়ে ব্যাচ অনুযায়ী শিক্ষার্থীদের ফি ম্যানেজ করা সবচেয়ে বড় প্যারা ছিল। CoachingPro মোড দিয়ে এখন কোন ব্যাচে কার ফি বাকি সব অটো এসএমএস হয়ে যায়, আদায় বেড়েছে ৯৫%!",
      quoteEn:
        "Tracking batch tuition fees was our biggest challenge. With CoachingPro mode, overdue reminders are sent automatically. Collection jumped to 95%!",
      rating: 5,
      campusSize: "৫৫০ শিক্ষার্থী (ব্যাচ ভিত্তিক)",
    },
    {
      name: "মুফতি মাওলানা শামসুল হক",
      title: "মুহতামিম, দারুল উলুম মাদানিয়া মাদ্রাসা ও এতিমখানা",
      quoteBn:
        "আমাদের কিতাব বিভাগ এবং হিফজুল কুরআনের ছাত্রদের হাজিরা ও লিল্লাহ ফান্ড কালেকশন অনেক গোছালো হয়েছে। অভিভাবকরা অনেক খুশি সময়মতো আপডেট পেয়ে।",
      quoteEn:
        "Our resident student tracking, mess accounts, and exam reports are now fully streamlined. Guardians love the timely updates.",
      rating: 5,
      campusSize: "৮০০ শিক্ষার্থী",
    },
  ];

  const gateways = [
    "bKash (বিকাশ মার্চেন্ট)",
    "Nagad (নগদ পেমেন্ট)",
    "Rocket (রকেট)",
    "SSLCommerz Payment Gateway",
    "Grameenphone SMS API",
    "Teletalk SMS Gateway",
    "Banglalink Bulk SMS",
    "Robi Axiata SMS",
  ];

  return (
    <section id="reviews" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.testimonials.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            {t.testimonials.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-7 glass-panel border border-slate-200 dark:border-slate-800 glass-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                    {rev.campusSize}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-cyan-500/20 mb-3" />
                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                  &ldquo;{lang === "bn" ? rev.quoteBn : rev.quoteEn}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
                  {rev.name}
                </h4>
                <p className="text-xs text-slate-500 font-medium">{rev.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ecosystem Integrations Bar */}
        <div className="rounded-3xl p-8 glass-panel border border-slate-200 dark:border-slate-800 text-center space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-500 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>
              {lang === "bn"
                ? "বাংলাদেশের শীর্ষ পেমেন্ট গেটওয়ে ও মোবাইল টেলিকম নেটওয়ার্কে ১০০% পরীক্ষিত"
                : "Seamlessly Integrated with Leading Bangladeshi Gateways & Telecoms"}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {gateways.map((gw, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm"
              >
                {gw}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
