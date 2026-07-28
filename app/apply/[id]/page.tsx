"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function ApplyPage() {
  const params = useParams();
  const router = useRouter();

  const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [qualification, setQualification] = useState("");
const [experience, setExperience] = useState("");
const [coverLetter, setCoverLetter] = useState("");
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobId: params.id,
        fullName,
        email,
        phone,
        qualification,
        experience,
        coverLetter,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8">
        <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-2xl">
          <div className="text-7xl">🎉</div>

          <h1 className="mt-6 text-4xl font-bold text-green-600">
            Application Submitted!
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Thank you for applying. Our recruiter will contact you if you're shortlisted.
          </p>

          <button
            onClick={() => router.push("/dashboard")}
            className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">

      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-2xl">

        <h1 className="text-center text-4xl font-extrabold text-blue-700">
          Apply for this Job 💼
        </h1>

        <p className="mt-3 text-center text-gray-500">
          Job ID: {params.id}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
         <input
  type="text"
  placeholder="👤 Full Name"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  required
  className="w-full rounded-xl border border-gray-300 p-4 text-black focus:border-blue-500 focus:outline-none"
/>

          <input
  type="email"
  placeholder="📧 Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  className="w-full rounded-xl border border-gray-300 p-4 text-black focus:border-blue-500 focus:outline-none"
/>

         <input
  type="tel"
  placeholder="📱 Phone Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  required
  className="w-full rounded-xl border border-gray-300 p-4 text-black focus:border-blue-500 focus:outline-none"
/>

          <input
  type="text"
  placeholder="🎓 Highest Qualification"
  value={qualification}
  onChange={(e) => setQualification(e.target.value)}
  required
  className="w-full rounded-xl border border-gray-300 p-4 text-black focus:border-blue-500 focus:outline-none"
/>

         <select
  value={experience}
  onChange={(e) => setExperience(e.target.value)}
  required
  className="w-full rounded-xl border border-gray-300 p-4 text-black"
>
  <option value="">💼 Select Experience</option>
  <option>Fresher</option>
  <option>1 Year</option>
  <option>2 Years</option>
  <option>3+ Years</option>
</select>

          <input
            type="file"
            required
            className="w-full rounded-xl border border-gray-300 p-4 text-black"
          />

         <textarea
  rows={5}
  placeholder="✍ Cover Letter (Optional)"
  value={coverLetter}
  onChange={(e) => setCoverLetter(e.target.value)}
  className="w-full rounded-xl border border-gray-300 p-4 text-black focus:border-blue-500 focus:outline-none"
/>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-4 text-lg font-bold text-white transition hover:bg-blue-700"
          >
            🚀 Submit Application
          </button>

        </form>

      </div>

    </div>
  );
}