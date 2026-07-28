import { BriefcaseBusiness, Building2, Users } from "lucide-react";

export default function Stats() {
  return (
    <section className="mx-auto -mt-8 grid max-w-7xl grid-cols-1 gap-8 px-8 pb-24 md:grid-cols-3">

      {/* Jobs */}
      <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
          <BriefcaseBusiness
            size={30}
            className="text-blue-600 dark:text-blue-300"
          />
        </div>

        <h2 className="text-5xl font-extrabold text-blue-700 dark:text-blue-400">
          1000+
        </h2>

        <p className="mt-3 text-lg font-medium text-gray-600 dark:text-gray-300">
          Jobs Available
        </p>

      </div>

      {/* Companies */}
      <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <Building2
            size={30}
            className="text-green-600 dark:text-green-300"
          />
        </div>

        <h2 className="text-5xl font-extrabold text-green-600 dark:text-green-400">
          500+
        </h2>

        <p className="mt-3 text-lg font-medium text-gray-600 dark:text-gray-300">
          Companies
        </p>

      </div>

      {/* Job Seekers */}
      <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
          <Users
            size={30}
            className="text-purple-600 dark:text-purple-300"
          />
        </div>

        <h2 className="text-5xl font-extrabold text-purple-600 dark:text-purple-400">
          10K+
        </h2>

        <p className="mt-3 text-lg font-medium text-gray-600 dark:text-gray-300">
          Job Seekers
        </p>

      </div>

    </section>
  );
}