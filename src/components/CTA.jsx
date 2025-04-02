"use client";

import React from "react";
import Link from "next/link";

export function JoinMissionSection() {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="md:text-5xl text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Join the Mission Be a Part of the {" "}
          <span className="text-[#58130a]">Change!</span>
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          📖 Every book has the power to transform lives. Help us make knowledge
          accessible to every village by contributing, volunteering, or starting
          a library in your community.
        </p>
        <p className="mt-2 text-lg text-gray-700">
          💡 Together, we can create a future where knowledge is within
          everyone’s reach.
        </p>
        <Link href="/contact">
          <button className="cursor-pointer mt-6 px-6 py-3 bg-[#58130a] text-white font-semibold rounded-lg shadow-md hover:bg-[#741300] transition-all">
            👉 Join the Mission Today!
          </button>
        </Link>
      </div>
    </section>
  );
}
