"use client";
import { useState } from "react";
export default function PostJobPage() {
    const [jobTitle, setJobTitle] = useState("");
const [companyName, setCompanyName] = useState("");
const [location, setLocation] = useState("");
const [salary, setSalary] = useState("");
const [description, setDescription] = useState("");
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold text-blue-700">
          Post a New Job 💼
        </h1>

        <p className="mt-4 text-gray-600">
             Job posting form will be added here.
        </p>
            
            <div className="mt-6">
  <label className="block text-gray-700 font-medium mb-2">
    Job Title
  </label>

 <input
  type="text"
  placeholder="Enter Job Title"
  value={jobTitle}
  onChange={(e) => setJobTitle(e.target.value)}
  className="w-full rounded-lg border p-3 text-black"
/>
</div>
<div className="mt-6">
  <label className="block text-gray-700 font-medium mb-2">
    Company Name
  </label>

  <input
    type="text"
    placeholder="Enter Company Name"
    value={companyName}
    onChange={(e) => setCompanyName(e.target.value)}
    className="w-full rounded-lg border p-3 text-black"
  />
</div>
<div className="mt-6">
  <label className="block text-gray-700 font-medium mb-2">
    Location
  </label>

  <input
    type="text"
    placeholder="Enter Job Location"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
    className="w-full rounded-lg border p-3 text-black"
  />
</div>
<div className="mt-6">
  <label className="block text-gray-700 font-medium mb-2">
    Salary
  </label>

 <input
  type="number"
  placeholder="Enter Salary"
  value={salary}
  onChange={(e) => setSalary(e.target.value)}
  className="w-full rounded-lg border p-3 text-black"
/>
</div>
<div className="mt-6">
  <label className="block text-gray-700 font-medium mb-2">
    Job Description
  </label>

  <textarea
    placeholder="Enter Job Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    rows={5}
    className="w-full rounded-lg border p-3 text-black"
  />
</div>
        <p>  Job posting form will be added here.
        </p>
       <button
  onClick={async () => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobTitle,
        companyName,
        location,
        salary,
        description,
      }),
    });

    const data = await res.json();
    alert(data.message);
  }}
  className="mt-6 w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
>
  Post Job
</button>
      </div>
    </div>
  );
}