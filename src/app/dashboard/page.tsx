"use client";

import { logout } from "@/server/actions";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6 text-indigo-700">Dashboard</h1>
        <button
          onClick={() => logout()}
          className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
