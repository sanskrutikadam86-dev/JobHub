import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <BriefcaseBusiness
  size={34}
  className="text-blue-600 transition-transform duration-300 hover:rotate-12"
/>

          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-blue-700">
              JobHub
            </h1>

            <p className="text-sm text-black">
              Find • Apply • Grow
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-8">

          <div className="flex items-center gap-8">

  <Link
    href="/"
    className="font-medium text-black hover:text-blue-600 transition"
  >
    Home
  </Link>

  <Link
    href="/jobs"
    className="font-medium text-black hover:text-blue-600 transition"
  >
    Jobs
  </Link>

  <div className="flex items-center gap-5">
    <Link
      href="/login"
      className="rounded-lg px-4 py-2 font-medium text-black transition hover:bg-gray-100 hover:text-blue-600"
    >
      Login
    </Link>

    <Link
      href="/signup"
      className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
    >
      Sign Up
    </Link>
  </div>
<div className="flex items-center gap-5">

  <ThemeToggle />

  
</div>
</div>

        </div>

      </div>
    </header>
  );
}