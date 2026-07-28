"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/me");

      if (res.ok) {
        const data = await res.json();
        setUser(data);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-10">
      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 text-center">
          👤 My Profile
        </h1>

        {user ? (
          <div className="mt-8 space-y-4 text-lg">
            <p className="text-black">
              <strong>Name:</strong> {user.name}
            </p>

            <p className="text-black">
              <strong>Email:</strong> {user.email}
            </p>

            <p className="text-black">
              <strong>Role:</strong> {user.role}
            </p>
          </div>
        ) : (
          <p className="mt-6 text-center text-gray-500">
            Loading...
          </p>
        )}
      </div>
    </div>
  );
}