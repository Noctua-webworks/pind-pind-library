"use client";

import React from "react";
import {
  FaBook,
  FaHandsHelping,
  FaRegLightbulb,
  FaUsers,
} from "react-icons/fa";

const steps = [
  {
    title: "Donate Books",
    description:
      "Contribute books you no longer need. Every book can inspire and educate someone.",
    icon: FaBook,
  },
  {
    title: "Set Up a Library",
    description:
      "Start a small library in a religious place in your village. Our team will guide you.",
    icon: FaRegLightbulb,
  },
  {
    title: "Volunteer with Us",
    description:
      "Help in organizing, collecting, and distributing books to villages.",
    icon: FaHandsHelping,
  },
  {
    title: "Spread the Word",
    description:
      "Share our mission with friends, family, and communities to grow this initiative.",
    icon: FaUsers,
  },
];

export function ContributeSection() {
  return (
    <section id="contribute" className="py-24 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="md:text-5xl text-3xl font-bold text-gray-900 dark:text-white mb-6">
          How Can You <span className="text-[#58130a]">Contribute</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Join us in building a network of village libraries and making books
          accessible to everyone.
        </p>

        {/* Steps Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-t-4 border-[#58130a] flex flex-col items-center"
            >
              <div className="p-4 bg-[#58130a] rounded-full shadow-md flex items-center justify-center">
                <step.icon className="text-white w-12 h-12" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
