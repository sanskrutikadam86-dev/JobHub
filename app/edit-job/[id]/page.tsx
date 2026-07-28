"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditJobPage()
 {
  const router = useRouter();
    const params = useParams();
const [job, setJob] = useState<any>(null);
useEffect(() => {
  const fetchJob = async () => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();

    setJob(data);
    setJobTitle(data.jobTitle);
setCompanyName(data.companyName);
setLocation(data.location);
setSalary(data.salary);
setDescription(data.description);
  };

  fetchJob();
}, []);
const [jobTitle, setJobTitle] = useState("");
const [companyName, setCompanyName] = useState("");
const [location, setLocation] = useState("");
const [salary, setSalary] = useState("");
const [description, setDescription] = useState("");
  return (
    <div className="min-h-screen bg-blue-50 p-10">
      <h1 className="text-3xl font-bold text-blue-700">
        Edit Job ✏️
      </h1>

      <div className="mt-6 space-y-4">
  <input
   className="w-full p-3 border rounded text-black placeholder:text-gray-500"
    placeholder="Job Title"
    value={jobTitle}
    onChange={(e) => setJobTitle(e.target.value)}
  />

  <input
    className="w-full p-3 border rounded text-black placeholder:text-gray-500"
    placeholder="Company Name"
    value={companyName}
    onChange={(e) => setCompanyName(e.target.value)}
  />

  <input
    className="w-full p-3 border rounded text-black placeholder:text-gray-500"
    placeholder="Location"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
  />

  <input
    className="w-full p-3 border rounded text-black placeholder:text-gray-500"
    placeholder="Salary"
    value={salary}
    onChange={(e) => setSalary(e.target.value)}
  />

  <textarea
    className="w-full p-3 border rounded text-black placeholder:text-gray-500"
    placeholder="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />

 <button
  onClick={async () => {
    const res = await fetch(`/api/jobs/${params.id}`, {
      method: "PUT",
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

if (res.ok) {
  router.push("/my-jobs");
}
  }}
  className="bg-blue-600 text-white px-6 py-3 rounded"
>
  Update Job
</button>
</div>
    </div>
  );
}