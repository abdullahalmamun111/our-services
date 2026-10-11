export type Language = "bn" | "en";

export interface Translations {
  nav: {
    features: string;
    solutions: string;
    modules: string;
    simulator: string;
    calculator: string;
    institutes: string;
    login: string;
    bookDemo: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    subtitle: string;
    btnDemo: string;
    btnTour: string;
    btnCall: string;
    statStudents: string;
    statInstitutes: string;
    statModules: string;
    statUptime: string;
    simBadge: string;
    simTitle: string;
    simTabOverview: string;
    simTabGate: string;
    simTabFees: string;
    simTabResult: string;
  };
  highlights: {
    tag: string;
    title: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
  };
  solutions: {
    tag: string;
    title: string;
    subtitle: string;
    tabCoaching: string;
    tabSchool: string;
    coachingTag: string;
    coachingTitle: string;
    coachingDesc: string;
    coachingPoints: string[];
    schoolTag: string;
    schoolTitle: string;
    schoolDesc: string;
    schoolPoints: string[];
    btnStart: string;
  };
  operations: {
    tag: string;
    title: string;
    subtitle: string;
    op1Title: string;
    op1Desc: string;
    op1Points: string[];
    op2Title: string;
    op2Desc: string;
    op2Points: string[];
    op3Title: string;
    op3Desc: string;
    op3Points: string[];
    op4Title: string;
    op4Desc: string;
    op4Points: string[];
    simGateBtn: string;
    simGateSuccess: string;
    simSmsPhone: string;
    simSmsMsg: string;
  };
  modules: {
    tag: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterAll: string;
    filterAcademic: string;
    filterFinance: string;
    filterOperations: string;
    filterComm: string;
    filterAI: string;
  };
  institutes: {
    tag: string;
    title: string;
    subtitle: string;
  };
  calculator: {
    tag: string;
    title: string;
    subtitle: string;
    studentsLabel: string;
    feeLabel: string;
    hoursSaved: string;
    duesRecovered: string;
    paperSaved: string;
    efficiencyScore: string;
  };
  comparison: {
    tag: string;
    title: string;
    subtitle: string;
    thFeature: string;
    thManual: string;
    thGeneric: string;
    thOurApp: string;
  };
  cta: {
    tag: string;
    title: string;
    subtitle: string;
    btnDemo: string;
    btnWhatsapp: string;
  };
  demoModal: {
    title: string;
    subtitle: string;
    nameLabel: string;
    phoneLabel: string;
    instNameLabel: string;
    instTypeLabel: string;
    studentsLabel: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
  };
}

export const translations: Record<Language, Translations> = {
  bn: {
    nav: {
      features: "সুবিধাসমূহ",
      solutions: "প্যাকেজ সমূহ",
      modules: "সকল ফিচার",
      simulator: "লাইভ সিমুলেটর",
      calculator: "হিসাব ক্যালকুলেটর",
      institutes: "প্রতিষ্ঠান ধরন",
      login: "লগইন",
      bookDemo: "ফ্রি ডেমো বুক করুন",
    },
    hero: {
      badge: "🚀 আধুনিক শিক্ষাপ্রতিষ্ঠান ও কোচিংয়ের অল-ইন-ওয়ান ক্লাউড ওএস",
      titleLine1: "হিসাবের ঝামেলা কমুক, পড়াশোনায় মন থাকুক —",
      titleHighlight: "একটি ড্যাশবোর্ড থেকেই",
      titleLine2: "পরিচালনা করুন আপনার সমগ্র প্রতিষ্ঠান",
      subtitle:
        "অনলাইন ভর্তি, বায়োমেট্রিক গেট হাজিরা, স্বয়ংক্রিয় গার্ডিয়ান এসএমএস, বিকাশ ও নগদ ফি কালেকশন, জিপিএ রেজাল্ট শিট এবং মোবাইল অ্যাপ—প্রতিটি কার্যক্রম এখন ১০০% অটোমেটেড ও নির্ভুল।",
      btnDemo: "ফ্রি ডেমো বুক করুন",
      btnTour: "লাইভ ড্যাশবোর্ড টেস্ট করুন",
      btnCall: "সরাসরি হোয়াটসঅ্যাপ করুন",
      statStudents: "ক্যাম্পাস প্রতি ৫,০০০+ শিক্ষার্থী সক্ষম",
      statInstitutes: "১০০+ ছোট ও বড় প্রতিষ্ঠান শুরু করেছে",
      statModules: "১৮টি সমন্বিত মডিউল এক সিস্টেমে",
      statUptime: "৯৯.৯% ক্লাউড আপটাইম ও এনক্রিপশন",
      simBadge: "লাইভ ইন্টারেক্টিভ সিমুলেটর",
      simTitle: "স্কুল ও কোচিং ড্যাশবোর্ড প্রিভিউ",
      simTabOverview: "ওভারভিউ ও মেট্রিক্স",
      simTabGate: "ডিজিটাল গেট ও এসএমএস",
      simTabFees: "ফি ও ক্যাশলেস কালেকশন",
      simTabResult: "পরীক্ষা ও মার্কশিট",
    },
    highlights: {
      tag: "এক নজরে মূল শক্তি",
      title: "যে চারটি প্রধান স্তম্ভ প্রতিষ্ঠানকে করে তোলে সম্পূর্ণ আধুনিক",
      card1Title: "শিক্ষার্থীর সম্পূর্ণ তথ্য",
      card1Desc:
        "অনলাইন ভর্তি থেকে শুরু করে রোল, বিভাগ, রক্তগ্রুপ ও একাডেমিক হিস্ট্রি—সব তথ্য মিলবে এক ক্লিকেই।",
      card2Title: "স্বয়ংক্রিয় হিসাব",
      card2Desc:
        "বকেয়া ট্র্যাকিং, বিকাশ-নগদ পেমেন্ট গেটওয়ে ও মুহূর্তেই স্বয়ংক্রিয় প্রিন্টযোগ্য ভাউচার রসিদ।",
      card3Title: "ডিজিটাল ও বায়োমেট্রিক হাজিরা",
      card3Desc:
        "গেট দিয়ে প্রবেশ করামাত্র বায়োমেট্রিক/RFID রিডিং এবং অভিভাবকের মোবাইলে রিয়েল-টাইম কনফার্মেশন এসএমএস।",
      card4Title: "পরীক্ষা ও ফলাফল প্রসেসিং",
      card4Desc:
        "শিক্ষা বোর্ড অনুযায়ী গ্রেডিং, অটোমেটেড GPA/CGPA ক্যালকুলেশন এবং একক ক্লিকে আকর্ষণীয় মার্কশিট প্রিন্ট।",
    },
    solutions: {
      tag: "আপনার জন্য কোনটি উপযোগী?",
      title: "আপনার প্রতিষ্ঠান, আপনার মতো আধুনিক সমাধান",
      subtitle:
        "কোচিংয়ের ব্যাচভিত্তিক ক্লাস হোক বা স্কুল-কলেজ-মাদ্রাসার পূর্ণাঙ্গ প্রশাসন—সবকিছু পরিচালনা করুন নিখুঁতভাবে।",
      tabCoaching: "CoachingPro (কোচিং সেন্টার)",
      tabSchool: "SchoolPro (স্কুল, কলেজ ও মাদ্রাসা)",
      coachingTag: "কোচিং সেন্টার ও টিউশন ব্যাচের জন্য বিশেষায়িত",
      coachingTitle:
        "CoachingPro — ব্যাচ পরিচালনা ও দ্রুত ফি আদায়ের সেরা সমাধান",
      coachingDesc:
        "কোন ব্যাচে কার ক্লাস, কে ফি দিয়েছে, কার কত বকেয়া—সব তথ্য হাতের নাগালে। প্রতিদিনের খাতা ঘাঁটার ঝামেলা চিরতরে বন্ধ।",
      coachingPoints: [
        "ব্যাচভিত্তিক শিক্ষার্থী ও টাইম-স্লট ম্যানেজমেন্ট",
        "স্বয়ংক্রিয় বকেয়া ফি রিমাইন্ডার এসএমএস অভিভাবকদের কাছে",
        "প্রতিটি ব্যাচের কুইক এটেন্ডেন্স ও প্রগ্রেস গ্রাফ",
        "মোবাইল থেকেই দ্রুত পেমেন্ট এন্ট্রি ও ইনস্ট্যান্ট ডিজিটাল রসিদ",
        "শিক্ষার্থীর মেধা ও উপস্থিতি ট্র্যাকিং রিপোর্ট",
      ],
      schoolTag: "স্কুল, কলেজ ও মাদ্রাসার পূর্ণাঙ্গ অটোমেশন",
      schoolTitle: "SchoolPro — অ্যাডমিশন থেকে অ্যালামনাই, এক সমন্বিত সিস্টেমে",
      schoolDesc:
        "ভর্তি থেকে পরীক্ষার ফল, ডিজিটাল হাজিরা থেকে শিক্ষকদের বেতন—স্কুলের শত শত রেজিস্টার খাতার কাজ এখন একটি মাত্র সফটওয়্যারে।",
      schoolPoints: [
        "বায়োমেট্রিক ও আরএফআইডি গেট এটেন্ডেন্স সাথে ইনস্ট্যান্ট প্যারেন্ট অ্যালার্ট",
        "জাতীয় শিক্ষাক্রম ও বোর্ড নির্দেশিত মার্কশিট এবং অ্যাডমিট কার্ড জেনারেটর",
        "অনলাইন ফি কালেকশন (বিকাশ, নগদ, রকেট, কার্ড) ও দৈনিক ক্যাশ লেজার",
        "হস্টেল, পরিবহন (GPS ট্র্যাকিং), লাইব্রেরি ও সম্পদ ব্যবস্থাপনা",
        "শিক্ষক ও কর্মচারীদের স্যালারি-রোল ও ছুটি অনুমোদন ম্যানেজমেন্ট",
      ],
      btnStart: "এই সংস্করণটি দিয়ে শুরু করুন",
    },
    operations: {
      tag: "দৈনন্দিন কাজের আধুনিক রূপান্তর",
      title: "যে কাজগুলো প্রতিদিন ঘটে, সেগুলো এখন চলবে অটো-পাইলটে",
      subtitle:
        "প্রতিটি ক্ষেত্রে সময় বাঁচবে ঘণ্টার পর ঘণ্টা, কমবে ভুলের পরিমাণ এবং অভিভাবক থাকবেন শতভাগ আস্থায়।",
      op1Title: "বায়োমেট্রিক হাজিরা ও ইনস্ট্যান্ট অভিভাবক নোটিফিকেশন",
      op1Desc:
        "শিক্ষার্থী ক্যাম্পাসে পা রাখা মাত্রই ফিঙ্গারপ্রিন্ট বা ফেস ডিটেকশনে হাজিরা নিশ্চিত হয় এবং সাথে সাথে অভিভাবকের ফোনে নোটিফিকেশন পৌঁছে যায়।",
      op1Points: [
        "গেট এন্ট্রি ও এক্সিট টাইম স্ট্যাম্পিং",
        "অনুপস্থিত শিক্ষার্থীদের তালিকা থেকে এক ক্লিকে বাল্ক এসএমএস",
        "শিক্ষক ও কর্মচারীদের নির্ভুল ডিউটি টাইম লগ",
      ],
      op2Title: "বিকাশ ও নগদ পেমেন্ট গেটওয়েতে স্বয়ংক্রিয় ফি কালেকশন",
      op2Desc:
        "অভিভাবকরা বাড়ি বসেই স্কুলের ফি পরিশোধ করতে পারেন। ফি জমা হওয়া মাত্রই সিস্টেমে স্বয়ংক্রিয় লেজার আপডেট এবং ডিজিটাল রসিদ তৈরি হয়।",
      op2Points: [
        "মাসিক টিউশন ফি, পরীক্ষার ফি ও বাস ভাড়ার পৃথক হেড",
        "নির্ধারিত তারিখের পূর্বে স্বয়ংক্রিয় ডিউ রিমাইন্ডার এসএমএস",
        "ম্যানেজমেন্টের জন্য রিয়েল-টাইম লাভ-ক্ষতি ও ক্যাশ ব্যালেন্স সামারি",
      ],
      op3Title: "পরীক্ষার রুটিন থেকে গ্রেডশিট ও মার্কশিট—মুহূর্তেই রেডি",
      op3Desc:
        "নম্বর এন্ট্রি করলেই সিস্টেম অটোমেটিক জিপিএ, লেটার গ্রেড, পজিশন ও মেধা তালিকা প্রস্তুত করে। সাথে সাথে প্রিন্ট দেওয়া যায় আকর্ষণীয় মার্কশিট।",
      op3Points: [
        "এমসিকিউ ও সৃজনশীল পরীক্ষার নম্বর বিভাজন",
        "কাস্টম ডিজাইন অ্যাডমিট কার্ড ও ট্রান্সক্রিপ্ট প্রিন্টিং",
        "অনলাইন পোর্টাল থেকে অভিভাবক ও শিক্ষার্থীদের রেজাল্ট ভিউ",
      ],
      op4Title: "অভিভাবক ও শিক্ষকদের জন্য স্মার্ট মোবাইল অ্যাপ ও PWA",
      op4Desc:
        "কোনো অ্যাপস্টোরে খোঁজাখুঁজি ছাড়াই যেকোনো মোবাইলে ইনস্টলযোগ্য আধুনিক অ্যাপ। অভিভাবকরা পাবেন সন্তানের পড়ালেখার রিয়েল-টাইম আপডেট।",
      op4Points: [
        "হোমওয়ার্ক, ক্লাস নোটিশ ও পরীক্ষার সিলেবাস এক নজরে",
        "ছুটির আবেদন ও সরাসরি শিক্ষকদের সাথে যোগাযোগ",
        "অফলাইন সিঙ্ক ও লাইটওয়েট ফাস্ট লোডিং টেকনোলজি",
      ],
      simGateBtn: "সিমুলেট করুন: গেট পাঞ্চ টেস্ট",
      simGateSuccess: "সফলভাবে পাঞ্চ সম্পন্ন! তানভীর হাসান (রোল ১২, ক্লাস ৯)",
      simSmsPhone: "গার্ডিয়ানের মোবাইল (+880 1711-XXXXXX)",
      simSmsMsg:
        "সম্মানিত অভিভাবক, আপনার সন্তান তানভীর হাসান সকাল ০৮:০২ মিনিটে নিরাপদে মডেল স্কুলে প্রবেশ করেছে। - মডেল স্কুল",
    },
    modules: {
      tag: "সম্পূর্ণ এন্টারপ্রাইজ সক্ষমতা",
      title: "সকল ফিচার — এক প্ল্যাটফর্মে",
      subtitle:
        "শিক্ষার্থীর তথ্য ও পরীক্ষা থেকে হিসাব, লাইব্রেরি ও ক্যাম্পাস নিরাপত্তা—সব এক প্ল্যাটফর্মে।",
      searchPlaceholder:
        "মডিউল খুঁজুন (যেমন: ফি, হাজিরা, লাইব্রেরি, এসএমএস)...",
      filterAll: "সব ফিচার (১১)",
      filterAcademic: "একাডেমিক ও শিক্ষার্থী",
      filterFinance: "ফি ও ফিন্যান্স",
      filterOperations: "লজিস্টিকস ও অপারেশনস",
      filterComm: "কমিউনিকেশন ও পোর্টাল",
      filterAI: "এআই ও অ্যাডভান্সড",
    },
    institutes: {
      tag: "প্রতিষ্ঠানের ধরন",
      title: "আপনার প্রতিষ্ঠানের জন্য উপযোগী সমাধান",
      subtitle:
        "মাধ্যমিক বিদ্যালয়, কলেজ, কোচিং, প্রাইভেট একাডেমি, মাদ্রাসা, প্রশিক্ষণ ও কারিগরি ইনস্টিটিউট, বিশ্ববিদ্যালয় এবং কিন্ডারগার্টেনের জন্য।",
    },
    calculator: {
      tag: "কর্মদক্ষতা ও সেভিংস ক্যালকুলেটর",
      title: "দেখুন EduVerse 360 আপনার কত টাকা ও সময় বাঁচাতে পারে",
      subtitle:
        "আপনার প্রতিষ্ঠানের আনুমানিক শিক্ষার্থী সংখ্যা ও ফি নির্ধারণ করে তাৎক্ষণিক রেজাল্ট দেখুন।",
      studentsLabel: "শিক্ষার্থী সংখ্যা",
      feeLabel: "গড় মাসিক ফি (টাকা)",
      hoursSaved: "প্রতি মাসে কর্মচারীদের বাঁচবে",
      duesRecovered: "অতিরিক্ত বকেয়া ফি আদায় হবে",
      paperSaved: "কাগজ ও প্রিন্টিং খরচ বাঁচবে",
      efficiencyScore: "প্রশাসনিক কর্মদক্ষতা বৃদ্ধি",
    },
    comparison: {
      tag: "তুলনামূলক বিশ্লেষণ",
      title: "কেন পুরোনো খাতা বা সাধারণ সফটওয়্যার বাদ দিয়ে আমাদের বেছে নেবেন?",
      subtitle: "দেখুন আপনার প্রতিষ্ঠান কিভাবে এক লাফে ১০ বছর এগিয়ে যাবে।",
      thFeature: "বৈশিষ্ট্য",
      thManual: "খাতা ও এক্সেল শিট",
      thGeneric: "সাধারণ সফটওয়্যার",
      thOurApp: "EdutaVex (Next-Gen)",
    },
    cta: {
      tag: "এখনই শুরু করার সময়",
      title: "আপনার প্রতিষ্ঠানকে আজই নিয়ে আসুন ডিজিটাল যুগে",
      subtitle:
        "আমাদের এক্সপার্ট টিমের সাথে কথা বলুন এবং আপনার প্রতিষ্ঠানের জন্য সম্পূর্ণ ফ্রি কাস্টমাইজড ডেমো উপভোগ করুন।",
      btnDemo: "ফ্রি লাইভ ডেমো বুক করুন",
      btnWhatsapp: "হোয়াটসঅ্যাপে সরাসরি যোগাযোগ",
    },
    demoModal: {
      title: "ফ্রি লাইভ ডেমো শিডিউল করুন",
      subtitle:
        "আমাদের এডু-টেক এক্সপার্ট আপনার প্রতিষ্ঠানে বা অনলাইনে পূর্ণাঙ্গ সিস্টেমটি প্রদর্শন করবেন।",
      nameLabel: "আপনার পূর্ণ নাম",
      phoneLabel: "মোবাইল নম্বর (হোয়াটসঅ্যাপ)",
      instNameLabel: "প্রতিষ্ঠানের নাম",
      instTypeLabel: "প্রতিষ্ঠানের ধরন",
      studentsLabel: "আনুমানিক শিক্ষার্থী সংখ্যা",
      submitBtn: "ডেমো নিশ্চিত করুন 🚀",
      successTitle: "ধন্যবাদ! আপনার ডেমো সফলভাবে বুক করা হয়েছে",
      successDesc:
        "আমাদের টিম খুব শীঘ্রই আপনার সাথে ফোনে যোগাযোগ করবে এবং সিস্টেমের অ্যাক্সেস প্রদান করবে।",
    },
  },
  en: {
    nav: {
      features: "Features",
      solutions: "Editions",
      modules: "All Features",
      simulator: "Live Simulator",
      calculator: "ROI Calculator",
      institutes: "Institutes",
      login: "Login",
      bookDemo: "Request Free Demo",
    },
    hero: {
      badge: "🚀 Next-Gen All-in-One Cloud Campus OS",
      titleLine1: "Save Time. Reduce Paperwork.",
      titleHighlight: "Run Your Entire Institution",
      titleLine2: "from One Intelligent Dashboard",
      subtitle:
        "From online admissions and biometric RFID gate attendance to automated bKash fees, instant guardian SMS, Board-compliant marksheets and mobile apps—everything digitized seamlessly.",
      btnDemo: "Request a Free Demo",
      btnTour: "Explore Live Mockup",
      btnCall: "Direct WhatsApp Chat",
      statStudents: "5000+ Students per campus supported",
      statInstitutes: "100+ Small to large campuses live",
      statModules: "18 Integrated enterprise modules",
      statUptime: "99.9% Uptime with enterprise security",
      simBadge: "Interactive Live Simulator",
      simTitle: "School & Coaching Dashboard Preview",
      simTabOverview: "Overview & Metrics",
      simTabGate: "Biometric Gate & SMS",
      simTabFees: "Cashless Fees & bKash",
      simTabResult: "Exams & Marksheets",
    },
    highlights: {
      tag: "Core Value Pillars",
      title: "Four Foundational Pillars Transforming Modern Campuses",
      card1Title: "Student Information System",
      card1Desc:
        "Online admission, roll allocation, parent KYC, medical details and academic journey in a single profile.",
      card2Title: "Automated Accounting",
      card2Desc:
        "Multi-head fee collection, bKash & Nagad gateway, automated ledger and instant printable digital vouchers.",
      card3Title: "Biometric & RFID Gate Attendance",
      card3Desc:
        "Sub-second punch recognition triggering instant automated SMS alerts to guardians upon gate entry & exit.",
      card4Title: "Exams & Smart Marksheet Engine",
      card4Desc:
        "Customizable question bank, MCQ & written grading, auto GPA/CGPA calculation and instant marksheet generation.",
    },
    solutions: {
      tag: "Choose What Fits Your Workflow",
      title: "Tailored Solutions Built for Your Exact Needs",
      subtitle:
        "Whether you run private coaching batches or a large school, college, or madrasa—scale effortlessly.",
      tabCoaching: "CoachingPro (Coaching & Tuition)",
      tabSchool: "SchoolPro (School, College & Madrasa)",
      coachingTag: "Tailored for Coaching Centers & Private Batches",
      coachingTitle: "CoachingPro — Batch Scheduling & Rapid Fee Recovery",
      coachingDesc:
        "Know instantly which student belongs to which batch, who paid, and who owes fees. Eliminate spreadsheet headaches forever.",
      coachingPoints: [
        "Batch-wise student enrollment and time-slot scheduling",
        "Automated fee due reminder SMS to guardians",
        "Quick batch attendance with visual student progress graphs",
        "Mobile-first fee entry with instant digital receipt generation",
        "Student performance tracking and mock test evaluation",
      ],
      schoolTag: "Complete Institutional Automation",
      schoolTitle: "SchoolPro — Admission to Alumni in One Unified System",
      schoolDesc:
        "Admissions, biometric gates, teacher payroll, library, hostel and Board-standard marksheets—replace filing cabinets with modern cloud efficiency.",
      schoolPoints: [
        "Biometric & RFID gate attendance with instant guardian SMS alerts",
        "National Curriculum & Education Board compliant marksheet generator",
        "Integrated online payment gateway (bKash, Nagad, Cards) & daily cashbook",
        "Hostel, GPS fleet transport, library & asset inventory management",
        "Teacher & staff payroll, duty logs, and leave approval workflows",
      ],
      btnStart: "Get Started with This Edition",
    },
    operations: {
      tag: "Day-to-Day Operations in Action",
      title: "The Daily Operations That Matter Most — on Autopilot",
      subtitle:
        "Save hours every single day, eliminate human mistakes, and give parents complete transparency.",
      op1Title: "Biometric Attendance & Real-Time Guardian SMS",
      op1Desc:
        "The moment a student scans their fingerprint or RFID card at the campus gate, attendance is logged and parents receive an instant SMS.",
      op1Points: [
        "Instant gate entry and exit timestamping",
        "One-click absentee SMS blast to parents within 15 minutes of school start",
        "Biometric duty hours tracking for teachers and staff members",
      ],
      op2Title: "Cashless Online Fee Collection via bKash & Nagad",
      op2Desc:
        "Parents pay tuition fees directly from their mobile wallets. The software reconciles payments automatically and generates instant invoices.",
      op2Points: [
        "Individual fee heads for tuition, lab, exam, transport and session charges",
        "Automated scheduled reminder SMS before due dates",
        "Real-time profit & loss, monthly income-expense, and bank statements",
      ],
      op3Title: "Exam Schedules, Automated GPA & 1-Click Marksheets",
      op3Desc:
        "Input marks and let the engine compute GPA, letter grades, position ranks, and generate ready-to-print branded marksheets.",
      op3Points: [
        "MCQ and written marks division with auto pass/fail thresholds",
        "Custom admit card & marksheet layout designer with school crest",
        "Secure parent portal for instant online result viewing",
      ],
      op4Title: "Guardian & Staff Mobile PWA Portal",
      op4Desc:
        "Lightweight, ultra-fast progressive web app installable on any Android or iPhone without app store delays.",
      op4Points: [
        "Homework assignments, syllabus tracking, and notice board",
        "Digital leave requests and direct parent-teacher communications",
        "Offline-ready architecture with instant cloud data synchronization",
      ],
      simGateBtn: "Simulate: Tap Student RFID Card",
      simGateSuccess: "Gate punch confirmed! Tanvir Hasan (Roll 12, Class 9)",
      simSmsPhone: "Guardian Phone (+880 1711-XXXXXX)",
      simSmsMsg:
        "Dear Guardian, Tanvir Hasan entered campus safely at 08:02 AM. - Scholars Model School",
    },
    modules: {
      tag: "Comprehensive Capabilities",
      title: "All Features — One Unified Platform",
      subtitle:
        "From student information and exams to accounting, library, and campus security, everything works in one place.",
      searchPlaceholder:
        "Search modules (e.g. fees, biometric, library, exams)...",
      filterAll: "All Features (11)",
      filterAcademic: "Academic & SIS",
      filterFinance: "Finance & Fees",
      filterOperations: "Logistics & Ops",
      filterComm: "Communication",
      filterAI: "AI & Security",
    },
    institutes: {
      tag: "Institution Types",
      title: "A tailored fit for every institution",
      subtitle:
        "For secondary schools, colleges, coaching centers, private academies, madrasas, training and technical institutes, universities, and kindergartens.",
    },
    calculator: {
      tag: "ROI & Productivity Calculator",
      title: "Calculate How Much Time and Money You Will Save",
      subtitle:
        "Adjust your student count and monthly fee to see measurable efficiency improvements.",
      studentsLabel: "Total Students",
      feeLabel: "Avg Monthly Fee (BDT)",
      hoursSaved: "Staff Hours Saved Monthly",
      duesRecovered: "Overdue Fees Recovered",
      paperSaved: "Paper & Printing Cost Cut",
      efficiencyScore: "Admin Efficiency Boost",
    },
    comparison: {
      tag: "Clear Advantage",
      title: "Why Switch from Traditional Registers or Outdated Software?",
      subtitle:
        "See how your institution leaps 10 years ahead in speed, professionalism, and reliability.",
      thFeature: "Feature",
      thManual: "Paper Registers & Excel",
      thGeneric: "Generic Software",
      thOurApp: "EdutaVex (Next-Gen)",
    },
    cta: {
      tag: "Get Started Today",
      title: "Ready to Digitize Your Institution to the Highest Standard?",
      subtitle:
        "Book a personalized demo with our education technology consultants and see the live system in action.",
      btnDemo: "Schedule a Free Demo",
      btnWhatsapp: "Chat on WhatsApp",
    },
    demoModal: {
      title: "Schedule Your Free Live Demo",
      subtitle:
        "Our edtech specialist will walk you through a live walkthrough customized for your institution.",
      nameLabel: "Your Full Name",
      phoneLabel: "Phone Number (WhatsApp)",
      instNameLabel: "Institution Name",
      instTypeLabel: "Institution Type",
      studentsLabel: "Approximate Number of Students",
      submitBtn: "Confirm Demo Request 🚀",
      successTitle: "Success! Demo Scheduled",
      successDesc:
        "Our team will reach out via WhatsApp/Phone shortly with your personalized demo access credentials.",
    },
  },
};
