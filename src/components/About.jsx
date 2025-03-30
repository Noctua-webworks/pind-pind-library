"use client";

import React from "react";
import { BookOpen, Landmark, Users, Globe } from "lucide-react";

const iconComponents = { BookOpen, Landmark, Users, Globe };

export function AboutSection() {
  const keyPoints = [
    { icon: "BookOpen", title: "Promoting Reading Culture" },
    { icon: "Landmark", title: "Libraries in Religious Places" },
    { icon: "Users", title: "Community-Driven Initiative" },
    { icon: "Globe", title: "Impacting 100+ Villages" }
  ];

  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="md:text-5xl text-3xl font-bold text-gray-900 dark:text-white mb-6">
          About <span className="text-[#58130a]">Pind Pind Library</span>
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Village Village Library is a movement to bring knowledge closer to people by setting up 
          libraries in religious places. Our mission is to promote a reading culture and 
          make books accessible to everyone, starting with 100+ villages.
        </p>

        {/* Key Points */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyPoints.map((item, index) => {
            const IconComponent = iconComponents[item.icon];
            return (
              <div 
                key={index} 
                className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-t-4 border-[#58130a]"
              >
                {IconComponent && <IconComponent className="mx-auto text-[#58130a] w-14 h-14" />}
                <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}