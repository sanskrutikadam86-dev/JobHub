"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function DashboardPage() {
  const [stats, setStats] = useState<any>(null);
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const handleLogout = async () => {
  await fetch("/api/logout", {
    method: "POST",
  });

  router.push("/login");
};

useEffect(() => {
  const fetchData = async () => {
    const userRes = await fetch("/api/me");

    if (userRes.ok) {
      const userData = await userRes.json();
      setUser(userData);
    }

    const statsRes = await fetch("/api/dashboard");

    if (statsRes.ok) {
      const statsData = await statsRes.json();
      setStats(statsData);
    }
  };

  fetchData();
}, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="w-full max-w-7xl rounded-3xl bg-white p-10 shadow-xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

  <div>

    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
      Welcome back, {user?.name} 👋
    </h1>

    <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
      Ready to take the next step in your career today?
    </p>

  </div>

  <button
    onClick={handleLogout}
    className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-red-600 hover:shadow-lg"
  >
    Logout
  </button>

</div>
       {user && (

<div className="mt-10 rounded-3xl border border-gray-200 bg-gradient-to-r from-blue-50 to-white p-8 shadow-sm">

  <div className="grid gap-6 md:grid-cols-3">

    <div>
      <p className="text-sm text-gray-500">
        Full Name
      </p>

      <h3 className="mt-1 text-xl font-bold text-gray-900">
        {user.name}
      </h3>
    </div>

    <div>
      <p className="text-sm text-gray-500">
        Email
      </p>

      <h3 className="mt-1 text-lg font-semibold text-gray-900">
        {user.email}
      </h3>
    </div>

    <div>
      <p className="text-sm text-gray-500">
        Account Type
      </p>

      <span className="mt-2 inline-block rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
        {user.role === "recruiter"
          ? "Recruiter"
          : "Job Seeker"}
      </span>
    </div>

  </div>

</div>

)}
{/* Stats Cards */}

{user?.role === "jobseeker" && (
  <div className="mt-10 grid gap-6 md:grid-cols-4">

    {/* Available Jobs */}
    <div
      onClick={() => router.push("/jobs")}
      className="cursor-pointer rounded-3xl bg-white p-6 shadow-xl border transition hover:-translate-y-2"
    >
      <div className="text-4xl">💼</div>
      <h2 className="mt-4 text-5xl font-bold text-blue-600">1200+</h2>
      <p className="mt-2 text-gray-500">Available Jobs</p>
    </div>

    {/* Companies */}
    <div className="rounded-3xl bg-white p-6 shadow-xl border">
      <div className="text-4xl">🏢</div>
      <h2 className="mt-4 text-5xl font-bold text-green-600">500+</h2>
      <p className="mt-2 text-gray-500">Companies</p>
    </div>

    {/* Applications */}
    <div
      onClick={() => router.push("/applications")}
      className="cursor-pointer rounded-3xl bg-white p-6 shadow-xl border transition hover:-translate-y-2"
    >
      <div className="text-4xl">📋</div>
      <h2 className="mt-4 text-5xl font-bold text-purple-600">{stats?.totalApplications || 0}</h2>
      <p className="mt-2 text-gray-500">Applications</p>
    </div>

    {/* Saved */}
    <div
      onClick={() => router.push("/saved-jobs")}
      className="cursor-pointer rounded-3xl bg-white p-6 shadow-xl border transition hover:-translate-y-2"
    >
      <div className="text-4xl">❤️</div>
      <h2 className="mt-4 text-5xl font-bold text-orange-500">{stats?.totalSavedJobs || 0}</h2>
      <p className="mt-2 text-gray-500">Saved Jobs</p>
    </div>

  </div>
)}
{user?.role === "recruiter" && (
  <div className="mt-10 grid gap-6 md:grid-cols-4">

    {/* Jobs Posted */}
    <div
      onClick={() => router.push("/my-jobs")}
      className="cursor-pointer rounded-3xl bg-white p-6 shadow-xl border transition hover:-translate-y-2"
    >
      <div className="text-4xl">📄</div>
      <h2 className="mt-4 text-5xl font-bold text-indigo-600">{stats?.jobsPosted || 0}</h2>
      <p className="mt-2 text-gray-500">Jobs Posted</p>
    </div>

    {/* Applicants */}
    <div
      onClick={() => router.push("/applicants")}
      className="cursor-pointer rounded-3xl bg-white p-6 shadow-xl border transition hover:-translate-y-2"
    >
      <div className="text-4xl">👥</div>
      <h2 className="mt-4 text-5xl font-bold text-green-600">{stats?.applicants || 0}</h2>
      <p className="mt-2 text-gray-500">Applicants</p>
    </div>

    {/* Pending */}
    <div className="rounded-3xl bg-white p-6 shadow-xl border">
      <div className="text-4xl">⏳</div>
      <h2 className="mt-4 text-5xl font-bold text-yellow-500">{stats?.pending || 0}</h2>
      <p className="mt-2 text-gray-500">Pending Review</p>
    </div>

    {/* Hired */}
    <div className="rounded-3xl bg-white p-6 shadow-xl border">
      <div className="text-4xl">✅</div>
      <h2 className="mt-4 text-5xl font-bold text-emerald-600">{stats?.hired || 0}</h2>
      <p className="mt-2 text-gray-500">Hired</p>
    </div>
    

  </div>
)}
{user?.role === "recruiter" && (
  <div className="mt-8 grid gap-6 md:grid-cols-2">

    <button
      onClick={() => router.push("/post-job")}
      className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl w-full">
      <div className="text-5xl">➕</div>

      <h2 className="mt-4 text-3xl font-bold">
        Post New Job
      </h2>

      <p className="mt-2 text-blue-100">
        Create a new job listing.
      </p>
    </button>

    <button
      onClick={() => router.push("/my-jobs")}
      className="rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 p-8 text-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl w-full">
      <div className="text-5xl">📄</div>

      <h2 className="mt-4 text-3xl font-bold">
        Manage Jobs
      </h2>

      <p className="mt-2 text-green-100">
        Edit jobs & view applicants.
      </p>
    </button>

  </div>
)}
 

      </div>
    </div>
  );
}