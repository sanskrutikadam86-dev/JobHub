"use client";

import { useEffect, useState } from "react";

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<any[]>([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const res = await fetch("/api/my-applications");
      const data = await res.json();

      setApplications(data);
    };

    fetchApplications();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">

      <div className="mx-auto max-w-6xl">

        <h1 className="text-5xl font-extrabold text-gray-900">
          📋 My Applications
        </h1>

        <p className="mt-3 text-lg text-gray-500">
          Track all your job applications.
        </p>

        <div className="mt-10 grid gap-6">

          {applications.length === 0 && (
            <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
              <h2 className="text-2xl font-bold text-gray-700">
                No Applications Yet 😔
              </h2>

              <p className="mt-3 text-gray-500">
                Apply for your first job to see it here.
              </p>
            </div>
          )}

          {applications.map((application) => (

            <div
              key={application._id}
              className="rounded-3xl bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="flex items-start justify-between">

                <div>

                  <h2 className="text-3xl font-bold text-blue-700">
                    {application.jobTitle}
                  </h2>

                  <p className="mt-2 text-lg text-gray-600">
                    🏢 {application.companyName}
                  </p>

                  <p className="mt-1 text-gray-500">
                    📍 {application.location}
                  </p>

                  <p className="mt-1 font-semibold text-green-600">
                    💰 ₹ {application.salary}
                  </p>

                </div>

                <span
                  className={`rounded-full px-5 py-2 font-semibold text-white
                    ${
                      application.status === "Pending"
                        ? "bg-yellow-500"
                        : application.status === "Accepted"
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                >
                  {application.status}
                </span>

              </div>

              <div className="mt-8 border-t pt-5">

                <p className="text-gray-500">
                  📅 Applied On :
                </p>

                <p className="font-semibold">
                  {new Date(application.appliedAt).toLocaleDateString()}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}