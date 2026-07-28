"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Lock,
  BriefcaseBusiness,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {

  if (data.role === "recruiter") {
    router.push("/recruiter/dashboard");
  } else {
    router.push("/dashboard");
  }

} else {
  alert(data.message);
}
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
    finally {
   setLoading(false);
}
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 py-10">

      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/20 bg-white/90 shadow-2xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/90 md:grid-cols-2">

        {/* LEFT */}

        <div className="hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-12 text-white md:flex md:flex-col md:justify-between">

          <div>

            <div className="flex items-center gap-3">
              <BriefcaseBusiness size={40} />
              <h1 className="text-4xl font-bold">
                JobHub
              </h1>
            </div>

            <h2 className="mt-10 text-5xl font-black leading-tight">
              Welcome
              <br />
              Back 👋
            </h2>

            <p className="mt-6 text-lg text-blue-100">
              Login to discover thousands of verified jobs from India's top companies.
            </p>

          </div>

          <div className="space-y-5">

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              ⚡ Search jobs faster with smart filters
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              🏢 Connect with trusted companies
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              🚀 Apply instantly with one click
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-10">

          <div className="w-full max-w-md">

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Login
            </h2>

            <p className="mt-2 text-gray-500">
              Sign in to continue your journey.
            </p>

            <form
              onSubmit={handleLogin}
              className="mt-10 space-y-6"
            >

              <div className="relative">

                <Mail
                  size={20}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-700 py-4 pl-12 pr-4 text-black dark:text-white outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900"/>

              </div>

              <div className="relative">

                <Lock
                  size={20}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
  type={showPassword ? "text" : "password"}
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full rounded-xl border border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-700 py-4 pl-12 pr-12 text-black dark:text-white outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900"
/>

<button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  className="absolute right-4 top-4 text-gray-500 dark:text-gray-400"
>
  {showPassword ? (
    <EyeOff size={20} />
  ) : (
    <Eye size={20} />
  )}
</button>

              </div>

              <div className="flex justify-end">

                <Link
                  href="#"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </Link>

              </div>

              <button
  disabled={loading}
  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
>
  {loading ? "Logging in..." : "Login"}

  {!loading && <ArrowRight size={20} />}
</button>

            </form>

            <p className="mt-8 text-center text-gray-600">
              Don't have an account?{" "}

              <Link
                href="/signup"
                className="font-semibold text-blue-600 hover:underline"
              >
                Create Account
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}