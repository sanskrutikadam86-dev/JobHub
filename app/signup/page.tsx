"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Lock,
  BriefcaseBusiness,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("jobseeker");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const handleSignup = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const loginResponse = await fetch(
          "/api/login",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );

        const loginData =
          await loginResponse.json();

        if (loginResponse.ok) {
          if (
            loginData.role ===
            "recruiter"
          ) {
            router.push("/dashboard");
          } else {
            router.push("/dashboard");
          }
        } else {
          router.push("/login");
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center px-6 py-10">

      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-white/20 bg-white/90 dark:bg-slate-900/90 shadow-2xl backdrop-blur-xl md:grid-cols-2">

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
              Join
              <br />
              JobHub 🚀
            </h2>

            <p className="mt-6 text-lg text-blue-100">
              Create your account and start exploring thousands of verified jobs.
            </p>

          </div>

          <div className="space-y-5">

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              ✅ Verified Companies
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              🚀 One Click Apply
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              💼 Thousands of Opportunities
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center justify-center bg-white dark:bg-slate-900 p-10">

          <div className="w-full max-w-md">

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Create Account
            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Join thousands of job seekers today.
            </p>

            <form
              onSubmit={handleSignup}
              className="mt-10 space-y-5"
            >

              <div className="relative">

                <User
                  size={20}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  className="w-full rounded-xl border border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-700 py-4 pl-12 pr-4 text-black dark:text-white outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

              </div>
                            {/* Role */}

              <div>
                <label className="mb-3 block font-semibold text-gray-700 dark:text-gray-200">
                  Choose Your Role
                </label>

                <div className="grid grid-cols-2 gap-4">

                  <button
                    type="button"
                    onClick={() => setRole("jobseeker")}
                    className={`rounded-2xl border-2 p-5 text-left transition ${
                      role === "jobseeker"
                        ? "border-blue-600 bg-blue-50 dark:bg-slate-800"
                        : "border-gray-300 dark:border-slate-700"
                    }`}
                  >
                    <div className="text-3xl">👩‍💻</div>

                    <h3 className="mt-2 font-bold text-gray-900 dark:text-white">
                      Job Seeker
                    </h3>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Find and apply for jobs
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole("recruiter")}
                    className={`rounded-2xl border-2 p-5 text-left transition ${
                      role === "recruiter"
                        ? "border-blue-600 bg-blue-50 dark:bg-slate-800"
                        : "border-gray-300 dark:border-slate-700"
                    }`}
                  >
                    <div className="text-3xl">🏢</div>

                    <h3 className="mt-2 font-bold text-gray-900 dark:text-white">
                      Recruiter
                    </h3>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Hire talented candidates
                    </p>
                  </button>

                </div>
              </div>

              {/* Email */}

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
                  className="w-full rounded-xl border border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-700 py-4 pl-12 pr-4 text-black dark:text-white outline-none focus:border-blue-500"
                />

              </div>

              {/* Password */}

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
                  className="w-full rounded-xl border border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-700 py-4 pl-12 pr-12 text-black dark:text-white outline-none focus:border-blue-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-4 text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

              {/* Confirm Password */}

              <div className="relative">

                <Lock
                  size={20}
                  className="absolute left-4 top-4 text-gray-400"
                />

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  className="w-full rounded-xl border border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-700 py-4 pl-12 pr-12 text-black dark:text-white outline-none focus:border-blue-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-4 top-4 text-gray-500"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

              <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <input type="checkbox" required />
                I agree to the Terms & Conditions
              </label>

              <button
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight size={20} />
                  </>
                )}
              </button>

            </form>

            <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-blue-600 hover:underline"
              >
                Login
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}