import {
  GraduationCap,
  BriefcaseBusiness,
  Building2,
} from "lucide-react";

export default function WhoCanUse() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">

      {/* Heading */}

      <div className="text-center">

        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
          WHO CAN USE JOBHUB
        </p>

        <h2 className="mt-3 text-5xl font-extrabold text-gray-900 dark:text-white">
          Built For <span className="text-blue-600 dark:text-blue-400">Everyone</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Whether you're starting your career or hiring great talent,
          JobHub is designed to make the process simple and efficient.
        </p>

      </div>

      {/* Cards */}

      <div className="mt-16 grid gap-8 md:grid-cols-3">

        {/* Freshers */}

        <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
            <GraduationCap
              className="text-blue-600 dark:text-blue-300"
              size={32}
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Freshers
          </h3>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
            Kick-start your career with entry-level opportunities and internships.
          </p>

        </div>

        {/* Professionals */}

        <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <BriefcaseBusiness
              className="text-green-600 dark:text-green-300"
              size={32}
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Professionals
          </h3>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
            Discover better roles, higher salaries, and exciting career opportunities.
          </p>

        </div>

        {/* Recruiters */}

        <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
            <Building2
              className="text-purple-600 dark:text-purple-300"
              size={32}
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Recruiters
          </h3>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
            Find skilled candidates quickly and streamline your hiring process.
          </p>

        </div>

      </div>

    </section>
  );
}