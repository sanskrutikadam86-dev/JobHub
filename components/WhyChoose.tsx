import { Search, Building2, ShieldCheck } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">

      {/* Heading */}
      <div className="mb-16 text-center">

        <h2 className="mt-3 text-5xl font-extrabold text-gray-900 dark:text-white">
          Why Choose <span className="text-blue-600 dark:text-blue-400">JobHub?</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Everything you need to discover the right opportunities,
          connect with trusted companies, and grow your career.
        </p>

      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">

        {/* Card 1 */}
        <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900">
            <Search
              className="text-blue-600 dark:text-blue-300"
              size={32}
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Fast Job Search
          </h3>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
            Find thousands of jobs instantly using smart search filters
            and an intuitive interface.
          </p>

        </div>

        {/* Card 2 */}
        <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 dark:bg-green-900">
            <Building2
              className="text-green-600 dark:text-green-300"
              size={32}
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Trusted Companies
          </h3>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
            Explore verified opportunities from top companies across
            multiple industries.
          </p>

        </div>

        {/* Card 3 */}
        <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-900">
            <ShieldCheck
              className="text-purple-600 dark:text-purple-300"
              size={32}
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Secure Platform
          </h3>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
            Your profile and applications are protected with secure
            authentication and privacy.
          </p>

        </div>

      </div>

    </section>
  );
}