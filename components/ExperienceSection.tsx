"use client";
import { useState } from "react";
import WorkExperienceTab from "./WorkExperienceTab";
import StudiesTab from "./StudiesTab";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <section
      className="relative pt-10 mx-auto container max-w-[54rem] px-4 md:px-0 md:pt-20 z-50 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]"
      id="about"
    >
      <p className="text-[22px] inter font-extralight text-neutral-300 mb-5 tracking-widest text-left">
        Experience
      </p>

      <div
        className="h-9 items-center justify-center rounded-lg bg-neutral-950/30 text-muted-foreground mb-2 grid w-full grid-cols-2"
        role="tablist"
        aria-orientation="horizontal"
      >
        <button
          role="tab"
          aria-selected={activeTab === "work"}
          onClick={() => setActiveTab("work")}
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm  transition-all cursor-pointer inter font-regular ${
            activeTab === "work"
              ? "shadow bg-white text-neutral-500"
              : "text-neutral-300"
          }`}
        >
          Work
        </button>
        <button
          role="tab"
          aria-selected={activeTab === "studies"}
          onClick={() => setActiveTab("studies")}
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm transition-all cursor-pointer inter font-regular ${
            activeTab === "studies"
              ? "shadow bg-white text-neutral-500"
              : "text-neutral-300"
          }`}
        >
          Studies
        </button>
      </div>

      {activeTab === "work" ? <WorkExperienceTab /> : <StudiesTab />}
    </section>
  );
}
