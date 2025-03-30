"use client"

import { AboutSection } from "@/components/About";
import { Banner } from "@/components/Banner";
import { Books } from "@/components/Books";
import { ContributeSection } from "@/components/Contribution";
import { JoinMissionSection } from "@/components/CTA";
import Scholars from "@/components/Scholars";

export default function Home() {
  return (
    <div >
      <Banner />
      <AboutSection />
      <Books />
      <Scholars />
      <ContributeSection />
      <JoinMissionSection />
    </div>
  );
}
