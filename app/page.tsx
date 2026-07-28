

  "use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChoose from "@/components/WhyChoose";
import WhoCanUse from "@/components/WhoCanUse";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <Navbar />

      <Hero />
      <Stats />
     <WhyChoose />
     <HowItWorks />
     <WhoCanUse />
     <Footer /> 

    </main>
    
  );
}
