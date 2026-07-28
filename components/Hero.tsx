import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";

export default function Hero() {
  return (
   <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center justify-between px-8 py-20 transition-colors duration-300">
      {/* Left Content */}
      <div className="max-w-2xl">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          🚀 India's Smart Job Portal
        </span>

        <h1 className="mt-6 text-7xl font-black leading-tight text-gray-900 dark:text-white">
          Find Your
          <span className="block text-blue-600 dark:text-blue-400">
            Dream Job
          </span>
          Faster.
        </h1>

        <p className="mt-8 max-w-lg text-xl leading-9 text-gray-600 dark:text-gray-300">
          Discover thousands of verified job opportunities from India's
          leading companies. Whether you're a fresher or an experienced
          professional, JobHub helps you find the perfect career faster.
        </p>

        <div className="mt-10 flex items-center gap-6">

          
          <Link
            href="/signup"
            className="rounded-xl border-2 border-blue-600 px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg dark:border-blue-400 dark:text-blue-300 dark:hover:bg-slate-800"
          >
            Get Started
          </Link>

        </div>

        <div className="mt-10 flex items-center gap-4">

          <div className="flex text-2xl text-yellow-400">
            ⭐⭐⭐⭐⭐
          </div>

          <div>

            <p className="font-semibold text-gray-900 dark:text-white">
              Trusted by 10,000+ Job Seekers
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              4.9/5 Average User Rating
            </p>

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex h-[470px] w-[470px] items-center justify-center rounded-[30px] bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 shadow-[0_30px_80px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-105 dark:shadow-[0_30px_80px_rgba(59,130,246,0.20)]">

        <BriefcaseBusiness
          size={190}
          className="text-white"
        />

      </div>

    </section>
  );
}