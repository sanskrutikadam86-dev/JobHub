"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function JobsPage() {
  const [user, setUser] = useState<any>(null);
  const [jobs, setJobs] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
const jobsPerPage = 5;

  useEffect(() => {
    const fetchJobs = async () => {
      const userRes = await fetch("/api/me");

if (userRes.ok) {
  const userData = await userRes.json();
  setUser(userData);
}
      const res = await fetch("/api/jobs");
      const data = await res.json();
      setJobs(data);
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
  const searchText = search.toLowerCase();

  const matchesSearch =
    job.jobTitle.toLowerCase().includes(searchText) ||
    job.companyName.toLowerCase().includes(searchText) ||
    job.location.toLowerCase().includes(searchText);

  const matchesLocation =
    locationFilter === "All" || job.location === locationFilter;

  return matchesSearch && matchesLocation;
});

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-8 py-12">

    <div className="mx-auto max-w-7xl">

      {/* Heading */}

      <div className="mb-10">

        <h1 className="text-5xl font-extrabold text-gray-900">
          Find Your <span className="text-blue-600">Dream Job</span>
        </h1>

        <p className="mt-3 text-lg text-gray-500">
          Browse 1200+ verified opportunities from top companies.
        </p>

      </div>

      {/* Search */}

      <div className="mb-10 rounded-3xl bg-white p-6 shadow-xl">

        <input
          type="text"
          placeholder="🔍 Search by Job Title, Company or Location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 p-4 text-black focus:border-blue-500 focus:outline-none"
        />

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="mt-4 w-full rounded-xl border border-gray-300 p-4 text-black"
        >
          <option value="All">All Locations</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Vashi">Vashi</option>
        </select>

      </div>

      {/* Jobs */}

      <div className="space-y-8">

        {filteredJobs.length === 0 && (

          <div className="rounded-3xl bg-white p-20 text-center shadow-xl">

            <div className="text-7xl">😔</div>

            <h2 className="mt-5 text-3xl font-bold">
              No Jobs Found
            </h2>

            <p className="mt-3 text-gray-500">
              Try changing your filters.
            </p>

          </div>

        )}

        {filteredJobs.map((job) => (

          <div
            key={job._id}
            className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

            <div className="flex flex-col justify-between gap-6 md:flex-row">

              {/* Left */}

              <div>

                <div className="flex items-center gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl">
                    💼
                  </div>

                  <div>

                    <h2 className="text-3xl font-bold text-gray-900">
                      {job.jobTitle}
                    </h2>

                    <p className="text-lg text-blue-600 font-semibold">
                      {job.companyName}
                    </p>

                  </div>

                </div>

                <div className="mt-6 flex flex-wrap gap-3">

                  <span className="rounded-full bg-blue-100 px-4 py-2 text-blue-700">
                    📍 {job.location}
                  </span>

                  <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">
                    💰 ₹ {job.salary}
                  </span>

                </div>

                <p className="mt-6 text-gray-600">
                  {job.description}
                </p>

              </div>

              {/* Right */}

              <div className="flex flex-col justify-end gap-3">

                <Link
                  href={`/jobs/${job._id}`}
                  className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  View Details
                </Link>

                {user?.role === "jobseeker" && (

                  <button
                    className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                  >
                    Apply Now
                  </button>

                )}

                {user?.role === "recruiter" && (

                  <>
                    <Link
                      href={`/edit-job/${job._id}`}
                      className="rounded-xl bg-yellow-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-yellow-600"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={async () => {
                        const res = await fetch(`/api/jobs/${job._id}`, {
                          method: "DELETE",
                        });

                        const data = await res.json();

                        alert(data.message);

                        window.location.reload();
                      }}
                      className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </>

                )}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>
);
}