"use client";

import { useState } from "react";
import { workExperience, studiesData } from "../data/index";
import Image from "next/image";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("work");

  const currentData = activeTab === "work" ? workExperience : studiesData;

  return (
    <>
      <section className="relative pt-10 mx-auto container max-w-3xl px-4 md:px-0 md:pt-20 z-50 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
        {/* Header */}
        <p className="text-[22px] font-light text-neutral-300 mb-5 tracking-widest text-left">
          Experience
        </p>

        {/* Tab Navigation */}
        <div
          className="h-9 items-center justify-center rounded-lg bg-neutral-950/30 text-muted-foreground mb-2 grid w-full grid-cols-2"
          role="tablist"
          aria-orientation="horizontal"
        >
          <button
            role="tab"
            aria-selected={activeTab === "work"}
            onClick={() => setActiveTab("work")}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
              activeTab === "work"
                ? "shadow bg-white text-black"
                : "text-neutral-300"
            }`}
          >
            Work
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "studies"}
            onClick={() => setActiveTab("studies")}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
              activeTab === "studies"
                ? "shadow bg-white text-black"
                : "text-neutral-300"
            }`}
          >
            Studies
          </button>
        </div>

        {/* Content */}
        <div
          role="tabpanel"
          className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-neutral-300 rounded-lg"
        >
          <ul className="ml-10 border-l border-neutral-300 list-none">
            {currentData.map((item, index) => (
              <li key={index} className="relative ml-10 pr-2 py-4">
                {/* Profile Image */}
                <div className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                  <div className="w-12 h-12 relative">
                    <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-semibold">
                      <Image
                        src={item.image}
                        alt="Logo"
                        fill
                        className="rounded-full transition-transform duration-500 hover:scale-125 hover:-rotate-12 border border-white object-cover"
                        sizes="100vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1 text-white">
                  <time className="text-xs text-gray-400">{item.period}</time>
                  <h2 className="font-semibold leading-none">{item.company}</h2>
                  <p className="text-sm text-gray-400">{item.position}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
