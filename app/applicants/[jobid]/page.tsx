"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ApplicantsPage() {
  const params = useParams();
  const [applicants, setApplicants] = useState<any[]>([]);

  useEffect(() => {
    const fetchApplicants = async () => {
      const res = await fetch(`/api/applicants/${params.jobId}`);
      const data = await res.json();

      setApplicants(data);
    };

    fetchApplicants();
  }, [params.jobId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-10">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-5xl font-extrabold text-blue-700">
          👥 Job Applicants
        </h1>

        <p className="mt-3 text-lg text-gray-500">
          Candidates who applied for this job.
        </p>

        <div className="mt-10 space-y-6">

          {applicants.length === 0 ? (
            <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
              <div className="text-7xl">📭</div>

              <h2 className="mt-5 text-3xl font-bold text-gray-700">
                No Applicants Yet
              </h2>

              <p className="mt-3 text-gray-500">
                Once someone applies, they'll appear here.
              </p>
            </div>
          ) : (
            applicants.map((applicant) => (
              <div
                key={applicant._id}
                className="rounded-3xl bg-white p-8 shadow-xl"
              >
                <div className="flex items-center justify-between">

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {applicant.name}
                    </h2>

                    <p className="mt-2 text-gray-500">
                      📧 {applicant.email}
                    </p>

                    <p className="mt-2 text-gray-500">
                      📱 {applicant.phone}
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
                    New Applicant
                  </span>

                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2">

                  <div className="rounded-xl bg-gray-50 p-5">
                    <p className="text-sm text-gray-500">
                      Qualification
                    </p>

                    <h3 className="mt-2 font-bold">
                      {applicant.qualification}
                    </h3>
                  </div>

                  <div className="rounded-xl bg-gray-50 p-5">
                    <p className="text-sm text-gray-500">
                      Experience
                    </p>

                    <h3 className="mt-2 font-bold">
                      {applicant.experience}
                    </h3>
                  </div>

                </div>

                <div className="mt-6 rounded-xl bg-blue-50 p-5">
                  <p className="text-sm text-gray-500">
                    Cover Letter
                  </p>

                  <p className="mt-3">
                    {applicant.coverLetter || "No cover letter provided."}
                  </p>
                </div>

                <div className="mt-8 flex gap-4">

                  <button className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700">
                    ✅ Accept
                  </button>

                  <button className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">
                    ❌ Reject
                  </button>

                </div>

              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
}