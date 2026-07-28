import {
  UserPlus,
  LogIn,
  BriefcaseBusiness,
  BadgeCheck,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">

      {/* Heading */}
      <div className="text-center">

        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
          HOW IT WORKS
        </p>

        <h2 className="mt-3 text-5xl font-extrabold text-gray-900 dark:text-white">
          Get Your Dream Job in
          <span className="text-blue-600 dark:text-blue-400">
            {" "}4 Easy Steps
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Join JobHub, explore verified opportunities, and apply with confidence.
        </p>

      </div>

      {/* Cards */}

      <div className="mt-16 grid gap-8 md:grid-cols-4">

        {/* Step 1 */}

        <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
            <UserPlus
              className="text-blue-600 dark:text-blue-300"
              size={30}
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Create Account
          </h3>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Register with your basic details and create your JobHub account.
          </p>

        </div>

        {/* Step 2 */}

        <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <LogIn
              className="text-green-600 dark:text-green-300"
              size={30}
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Login
          </h3>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Securely login to access available jobs and your profile.
          </p>

        </div>

        {/* Step 3 */}

        <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
            <BriefcaseBusiness
              className="text-yellow-600 dark:text-yellow-300"
              size={30}
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Apply Jobs
          </h3>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Browse jobs, check details, and apply to the ones that match your skills.
          </p>

        </div>

        {/* Step 4 */}

        <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
            <BadgeCheck
              className="text-purple-600 dark:text-purple-300"
              size={30}
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Get Hired
          </h3>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Connect with recruiters and start your dream career.
          </p>

        </div>

      </div>

    </section>
  );
}