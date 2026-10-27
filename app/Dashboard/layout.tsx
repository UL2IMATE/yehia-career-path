import React from "react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full flex flex-col">
      {/* Shared Dashboard Navigation */}
      <nav className="w-full bg-gray-100 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-12 flex gap-8 items-center text-md font-medium text-gray-700">
          <Link
            href="/dashboard"
            className="hover:text-blue-600 transition-colors"
          >
            Overview
          </Link>
          <Link
            href="/dashboard/applications"
            className="hover:text-blue-600 transition-colors"
          >
            Applications
          </Link>
        </div>
      </nav>

      <div className="w-full">{children}</div>
    </section>
  );
}
