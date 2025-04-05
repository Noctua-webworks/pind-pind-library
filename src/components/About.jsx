"use client";

import React from "react";
import {
  BookOpen,
  Landmark,
  Users,
  Globe,
  Brain,
  Lightbulb,
  Target,
  BookOpenCheck,
  CalendarCheck,
  Library,
  UsersRound,
  FileCheck,
  GraduationCap,
} from "lucide-react";

const iconComponents = {
  BookOpen,
  Landmark,
  Users,
  Globe,
  Brain,
  Lightbulb,
  Target,
  BookOpenCheck,
  CalendarCheck,
  Library,
  UsersRound,
  FileCheck,
  GraduationCap,
};

export function AboutSection() {
  const keyPoints = [
    { icon: "BookOpen", title: "Promoting Reading Culture" },
    { icon: "Landmark", title: "Libraries in Religious Places" },
    { icon: "Users", title: "Community-Driven Initiative" },
    { icon: "Globe", title: "Impacting 100+ Villages" },
  ];

  const sapiencePoints = [
    { icon: "Brain", label: "Encouraging critical thinking" },
    { icon: "Lightbulb", label: "Developing emotional intelligence" },
    { icon: "Target", label: "Enhancing decision-making ability" },
    { icon: "BookOpenCheck", label: "Fostering lifelong learning habits" },
  ];

  const officerSteps = [
    { icon: "CalendarCheck", label: "Start with self-discipline and daily reading" },
    { icon: "Library", label: "Get access to competitive exam materials" },
    { icon: "UsersRound", label: "Prepare with peers and take mock tests" },
    { icon: "FileCheck", label: "Appear for the exams and interviews" },
    { icon: "GraduationCap", label: "Become an officer" },
  ];

  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        {/* Main Heading */}
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
                {IconComponent && (
                  <IconComponent className="mx-auto text-[#58130a] w-14 h-14" />
                )}
                <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Sapience Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-[#58130a] mb-4">Sapience</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Embrace the power of books and cultivate sapience through the joy of reading.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sapiencePoints.map((point, idx) => {
              const Icon = iconComponents[point.icon];
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-[#58130a] flex flex-col items-center text-center"
                >
                  <Icon className="w-10 h-10 text-[#58130a] mb-4" />
                  <p className="text-gray-800 dark:text-gray-200 font-medium">{point.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Facilitates Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-[#58130a] mb-4">Facilitates</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Promoting the easiest way to become an officer through structured learning and community support.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            {officerSteps.map((step, idx) => {
              const Icon = iconComponents[step.icon];
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border-l-4 border-[#58130a]"
                >
                  <Icon className="w-8 h-8 text-[#58130a] mt-1" />
                  <p className="text-gray-800 dark:text-gray-200">{step.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
