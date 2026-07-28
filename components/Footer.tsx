import Link from "next/link";
import {
  BriefcaseBusiness,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-950">

      <div className="mx-auto grid max-w-7xl gap-12 px-8 py-16 md:grid-cols-4">

        {/* Logo */}
        <div>

          <div className="flex items-center gap-3">

            <BriefcaseBusiness
              size={34}
              className="text-blue-600 dark:text-blue-400"
            />

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              JobHub
            </h2>

          </div>

          <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
            Find your dream job, connect with trusted companies,
            and build your future with JobHub.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">

            <Link
              href="/"
              className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Home
            </Link>

            <Link
              href="/login"
              className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Sign Up
            </Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
            Contact
          </h3>

          <div className="space-y-4 text-gray-600 dark:text-gray-300">

            <div className="flex items-center gap-3">
              <Mail size={18} />
              support@jobhub.com
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              +91 98765 43210
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              Navi Mumbai, India
            </div>

          </div>

        </div>

        {/* CTA */}

        <div>

          <h3 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
            Ready to Start?
          </h3>

          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Create your free account and begin your job search today.
          </p>

          <Link
            href="/signup"
            className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg"
          >
            Get Started
          </Link>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-200 py-6 text-center text-gray-500 dark:border-slate-800 dark:text-gray-400">

        © 2026 <span className="font-semibold text-blue-600 dark:text-blue-400">JobHub</span>. All Rights Reserved.

      </div>

    </footer>
  );
}