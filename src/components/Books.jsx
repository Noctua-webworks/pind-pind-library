"use client";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { FaBookOpen } from "react-icons/fa";

export function Books() {
  return (
    <section id="books" className="py-16 bg-white/75 dark:bg-gray-900">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h2 className="md:text-5xl text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Why <span className="text-[#58130a]">Books </span>Matter
        </h2>
        <p className="text-gray-900 mt-4 text-lg leading-relaxed">
          Books preserve the wisdom of generations, ignite imagination, and
          inspire innovation. They empower individuals to think critically and
          fuel the progress of societies. A single book can change a life
          forever.
        </p>
      </div>

      <ul className="grid px-16 grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
          title=" Knowledge & Learning"
          description="Books are a vast source of knowledge that help us learn new skills, explore different subjects, and expand our understanding of the world."
        />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={
            <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title=" Mental Stimulation & Creativity"
          description="Reading keeps the brain active, improves memory, and stimulates creativity by introducing new ideas and perspectives."
        />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Personal Growth & Emotional Intelligence"
          description="Books help us develop empathy by allowing us to see the world through different perspectives, enhancing our emotional intelligence and understanding of human nature."
        />
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={
            <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Stress Reduction & Mental Health"
          description="Reading can be a great way to relax and unwind, reducing stress and providing a mental escape from everyday challenges."
        />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Cultural & Historical Awareness"
          description="Books preserve history, culture, and traditions, helping us understand different societies, past events, and diverse viewpoints."
        />
      </ul>
    </section>
  );
}

const GridItem = ({ area, icon, title, description }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-bold -tracking-4 md:text-2xl/[1.875rem] text-balance text-black  dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold text-sm/[1.125rem] 
              md:text-base/[1.375rem] text-black dark:text-neutral-400"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
