"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MyJobsPage() {
  const router = useRouter();
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("/api/my-jobs");
      const data = await res.json();

      setJobs(data);
    };

    fetchJobs();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    const response = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    alert(data.message);

    if (response.ok) {
      setJobs(jobs.filter((job) => job._id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-10">
      <h1 className="text-3xl font-bold text-blue-700">
        📄 My Posted Jobs
      </h1>

      <div className="mt-8 grid gap-6">
  {jobs.length === 0 ? (
    <div className="rounded-xl bg-white p-10 text-center shadow-lg">
      <h2 className="text-2xl font-bold text-gray-700">
        No Jobs Posted Yet 😔
      </h2>

      <p className="mt-3 text-gray-500">
        Click on "Post Job" to create your first job listing.
      </p>
    </div>
  ) : (
    jobs.map((job) => (
          <div
            key={job._id}
            className="rounded-xl bg-white p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-blue-700">
              {job.jobTitle}
            </h2>

            <p className="mt-2 text-gray-700">
              {job.companyName}
            </p>

            <p className="text-gray-600">
              📍 {job.location}
            </p>

            <p className="text-green-600 font-semibold">
              ₹ {job.salary}
            </p>

            <div className="mt-5 flex flex-wrap gap-4">

  <button
    onClick={() => router.push(`/edit-job/${job._id}`)}
    className="rounded-lg bg-yellow-500 px-5 py-2 text-white hover:bg-yellow-600"
  >
    ✏️ Edit
  </button>

  <button
    onClick={() => handleDelete(job._id)}
    className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
  >
    🗑 Delete
  </button>

  <button
    onClick={() => router.push(`/applicants/${job._id}`)}
    className="rounded-lg bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700"
  >
    👥 View Applicants
  </button>

</div>
          </div>
               ))
      )}
      </div>
    </div>
  );
}