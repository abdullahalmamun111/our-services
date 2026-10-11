"use client";

import React from "react";
import { translations, Language } from "@/lib/translations";
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Sparkles,
  Heart,
} from "lucide-react";

interface FooterProps {
  lang: Language;
  onOpenDemo: () => void;
}

export default function Footer({ lang, onOpenDemo }: FooterProps) {
  const t = translations[lang];

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
      {/* Top CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 text-white shadow-2xl shadow-cyan-600/30 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 text-white inline-block">
              {t.cta.tag}
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold leading-tight">
              {t.cta.title}
            </h3>
            <p className="text-cyan-100 text-sm leading-relaxed">
              {t.cta.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={onOpenDemo}
              className="px-8 py-4 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span>{t.cta.btnDemo}</span>
            </button>
            <a
              href="https://wa.me/8801986054016"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-sm shadow-xl flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.cta.btnWhatsapp}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 p-[2px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white">
                Eduta<span className="text-cyan-500">Vex</span>
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              {lang === "bn"
                ? "বাংলাদেশের স্কুল, কলেজ, মাদ্রাসা ও কোচিং সেন্টারের জন্য তৈরি ক্লাউড-বেসড পূর্ণাঙ্গ শিক্ষাপ্রতিষ্ঠান ব্যবস্থাপনা ইকোসিস্টেম।"
                : "The ultimate institutional cloud OS powering modern schools, colleges, madrasas, and coaching networks across Bangladesh."}
            </p>

            <div className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>+880 1986-054016 / +880 1700-000000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>info@edutavex.com / support@edutavex.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>Banani & Uttara, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Column 1: Editions */}
          <div>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-sm mb-4">
              {lang === "bn" ? "প্যাকেজ ও সংস্করণ" : "Editions"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#solutions" className="hover:text-cyan-500 transition-colors">
                  CoachingPro (ব্যাচ এডিশন)
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-500 transition-colors">
                  SchoolPro (স্কুল ও কলেজ)
                </a>
              </li>
              <li>
                <a href="#institutes" className="hover:text-cyan-500 transition-colors">
                  Madrasa Suite (মাদ্রাসা)
                </a>
              </li>
              <li>
                <a href="#institutes" className="hover:text-cyan-500 transition-colors">
                  University & Polytechnic
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Key Modules */}
          <div>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-sm mb-4">
              {lang === "bn" ? "জনপ্রিয় মডিউল" : "Top Modules"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#modules" className="hover:text-cyan-500 transition-colors">
                  বায়োমেট্রিক গেট ও এসএমএস
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-cyan-500 transition-colors">
                  বিকাশ ও নগদ ফি গেটওয়ে
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-cyan-500 transition-colors">
                  অটো জিপিএ ও মার্কশিট
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-cyan-500 transition-colors">
                  অভিভাবক মোবাইল অ্যাপ
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-cyan-500 transition-colors">
                  এআই প্রশ্নব্যাংক জেনারেটর
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Compliance */}
          <div>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-sm mb-4">
              {lang === "bn" ? "সিকিউরিটি ও ট্রাস্ট" : "Security & SLA"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-emerald-500 font-bold">✓ ৯৯.৯% আপটাইম গ্যারান্টি</span>
              </li>
              <li>
                <span className="text-emerald-500 font-bold">✓ BTRC অনুমোদিত মাস্কিং এসএমএস</span>
              </li>
              <li>
                <span className="text-emerald-500 font-bold">✓ ২৫৬-বিট এসএসএল এনক্রিপশন</span>
              </li>
              <li>
                <span className="text-emerald-500 font-bold">✓ দৈনিক অটোমেটিক ক্লাউড ব্যাকআপ</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 EdutaVex Inc. All rights reserved. Designed for Bangladesh Educational Excellence.
          </div>
          <div className="flex items-center gap-1">
            <span>Made with precision for</span>
            <span className="text-rose-500 font-bold">Educators</span>
            <span>across Bangladesh 🇧🇩</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
