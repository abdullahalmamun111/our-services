import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EdutaVex | All-in-One Cloud Campus & Coaching Management System",
  description:
    "The ultimate institutional operating system. Manage SIS, Biometric Attendance, Online Fees, SMS, Exams and AI analytics from one unified dashboard.",
  icons: {
    icon: "/icon.svg",
  },
  keywords: [
    "School Management Software Bangladesh",
    "Coaching Management System",
    "EdutaVex",
    "EdutaVex Cloud OS",
    "Biometric Attendance School",
    "Result Processing Software",
    "bKash Fee Collection",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#070b14] dark:text-slate-100 selection:bg-cyan-500 selection:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
