"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Headphones, Zap } from "lucide-react";

interface LandingCtaBannerProps {
  onOpenDemo: (edition?: string) => void;
}

export default function LandingCtaBanner({ onOpenDemo }: LandingCtaBannerProps) {
  return (
    <section className="py-16 sm:py-24 relative bg-white dark:bg-[#0A111C] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-width High-Impact Curved Container with Exact Hero Gradient (#2A9AD8 -> #1B5E9B) */}
        <div className="relative rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-br from-[#2A9AD8] via-[#1F7DBA] to-[#1B5E9B] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-white/20">
          
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FBB034]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1B5E9B]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Eyebrow tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[#FDF4DC] text-xs sm:text-sm font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#FBB034]" />
                <span>স্মার্ট শিক্ষাব্যবস্থায় ডিজিটাল রূপান্তর</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug">
                প্রতিষ্ঠান পরিচালনাকে করুন{" "}
                <span className="text-[#FDF4DC] block sm:inline">
                  গতিশীল, আধুনিক ও নির্ভরযোগ্য।
                </span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#EAF6FD] max-w-xl leading-relaxed">
                কাগজের রেজিস্টার ও ম্যানুয়াল হিসাবের ভুলভ্রান্তি এড়িয়ে আপনার স্কুল বা কোচিংকে সাজিয়ে নিন আন্তর্জাতিক মানের সফটওয়্যার দিয়ে। আমাদের এক্সপার্ট টিম রয়েছে ফ্রি অনবোর্ডিং ও সার্বক্ষণিক সহায়তায়।
              </p>

              {/* Dual Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                {/* CoachingPro Button: Button Gradient #FBB034 -> #F47F20 */}
                <button
                  onClick={() => onOpenDemo("CoachingPro")}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#FBB034] to-[#F47F20] hover:from-[#F47F20] hover:to-[#D86B13] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-200"
                >
                  <span>CoachingPro ফ্রি ডেমো</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                {/* SchoolPro Button: Clean White */}
                <Link
                  href="/schoolpro"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#FDF4DC] text-[#1B5E9B] font-bold text-sm sm:text-base shadow-lg transition-all duration-200"
                >
                  <span>SchoolPro সরাসরি শুরু করুন</span>
                  <ArrowRight className="w-4 h-4 text-[#1B5E9B]" />
                </Link>
              </div>

              {/* Trust checklist */}
              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#EAF6FD] font-medium">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#FBB034]" />
                  ফ্রি ডাটা মাইগ্রেশন ও ট্রেনিং
                </span>
                <span className="flex items-center gap-1.5">
                  <Headphones className="w-4 h-4 text-[#FBB034]" />
                  ২৪/৭ সরাসরি ফোন ও হোয়াটসঅ্যাপ সাপোর্ট
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#FBB034]" />
                  ১০০% সুরক্ষিত ক্লাউড অবকাঠামো
                </span>
              </div>
            </div>

            {/* Right Side Visual Thumbnail */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <Image
                  src="/classroom.webp"
                  alt="শিক্ষার্থীদের পাঠদান"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
