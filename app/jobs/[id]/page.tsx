"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function JobDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const [job, setJob] = useState<any>(null);

  useEffect(() => {
    const fetchJob = async () => {
      const res = await fetch(`/api/jobs/${params.id}`);
      const data = await res.json();
      setJob(data);
    };

    fetchJob();
  }, [params.id]);

  if (!job) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <p className="text-2xl font-semibold text-gray-500">
          Loading Job...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">

      <div className="mx-auto max-w-5xl px-6">

        {/* Back Button */}

        <button
          onClick={() => router.back()}
          className="mb-8 rounded-xl border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-600 shadow hover:bg-blue-50"
        >
          ← Back to Jobs
        </button>

        {/* Hero Card */}

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 text-white shadow-2xl">

          <div className="flex flex-col justify-between gap-8 md:flex-row">

            <div>

              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-5xl">
                💼
              </div>

              <h1 className="text-5xl font-extrabold">
                {job.jobTitle}
              </h1>

              <p className="mt-4 text-2xl font-semibold">
                {job.companyName}
              </p>

            </div>

            <div className="flex flex-col gap-4">

              <span className="rounded-full bg-white/20 px-5 py-3 text-lg">
                📍 {job.location}
              </span>

              <span className="rounded-full bg-white/20 px-5 py-3 text-lg">
                💰 ₹ {job.salary}
              </span>

            </div>

          </div>

        </div>

        {/* Description */}

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">

          <h2 className="mb-5 text-3xl font-bold text-gray-900">
            📖 Job Description
          </h2>

          <p className="text-lg leading-8 text-gray-600">
            {job.description}
          </p>

        </div>

        {/* Quick Info */}

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

            <div className="text-5xl">🏢</div>

            <h3 className="mt-4 text-xl font-bold">
              Company
            </h3>

            <p className="mt-2 text-gray-500">
              {job.companyName}
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

            <div className="text-5xl">📍</div>

            <h3 className="mt-4 text-xl font-bold">
              Location
            </h3>

            <p className="mt-2 text-gray-500">
              {job.location}
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

            <div className="text-5xl">💰</div>

            <h3 className="mt-4 text-xl font-bold">
              Salary
            </h3>

            <p className="mt-2 text-gray-500">
              ₹ {job.salary}
            </p>

          </div>

        </div>

        {/* Skills */}

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">

          <h2 className="mb-6 text-3xl font-bold">
            🚀 Skills Required
          </h2>

          <div className="flex flex-wrap gap-4">

            <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
              Communication
            </span>

            <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
              Teamwork
            </span>

            <span className="rounded-full bg-purple-100 px-5 py-2 font-semibold text-purple-700">
              Problem Solving
            </span>

            <span className="rounded-full bg-orange-100 px-5 py-2 font-semibold text-orange-700">
              Technical Skills
            </span>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-12 flex flex-col gap-5 md:flex-row">

          <button
            className="flex-1 rounded-2xl bg-pink-500 py-4 text-xl font-bold text-white transition hover:bg-pink-600"
          >
            ❤️ Save Job
          </button>

          <Link
  href={`/apply/${params.id}`}
  className="flex-1 rounded-2xl bg-green-600 py-4 text-center text-xl font-bold text-white transition hover:bg-green-700"
>
  🚀 Apply Now
</Link>

        </div>

      </div>

    </div>
  );
}