"use client";

import Link from "next/link";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-2">Student Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Welcome back! Track your performance and attempt new exams.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Exams Attempted</h3>
            <p className="text-2xl font-bold mt-2">3</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Average Score</h3>
            <p className="text-2xl font-bold mt-2">72%</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Best Rank</h3>
            <p className="text-2xl font-bold mt-2">#12</p>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row gap-4">
          <Link
            href="/student/test/123"
            className="bg-blue-600 text-white px-6 py-3 rounded text-center hover:bg-blue-700"
          >
            Start New Exam
          </Link>

          <Link
            href="/student/exams"
            className="border border-gray-300 px-6 py-3 rounded text-center hover:bg-gray-50"
          >
            View Past Exams
          </Link>
        </div>
      </div>
    </div>
  );
}
