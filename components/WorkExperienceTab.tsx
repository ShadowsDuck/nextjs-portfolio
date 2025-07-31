"use client";
import { workExperience } from "../data/index";
import Image from "next/image";

export default function WorkExperienceTab() {
  return (
    <div
      role="tabpanel"
      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-neutral-300 rounded-lg"
    >
      {workExperience.length > 0 ? (
        <ul className="ml-13 border-l border-neutral-300 list-none">
          {workExperience.map((item, index) => (
            <li key={index} className="relative ml-10 pr-2 py-5">
              <div className="absolute -left-16 top-5 flex items-center justify-center rounded-full bg-white">
                <div className="w-12 h-12 relative">
                  <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-semibold">
                    <Image
                      src={item.image}
                      alt="Company Logo"
                      fill
                      className="rounded-full transition-transform duration-500 hover:scale-125 hover:-rotate-12 border border-white object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-white">
                <time className="text-xs text-gray-400 inter font-regular">
                  {item.period}
                </time>
                <h2 className="leading-none inter font-semibold">
                  {item.company}
                </h2>
                <p className="text-sm text-gray-400 inter font-regular">
                  {item.position}
                </p>
                <p className="text-sm inter font-regular">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="py-30 flex items-center justify-center">
          <h1 className="text-gray-400  inter font-regular text-base md:text-xl">
            No work experience
          </h1>
        </div>
      )}
    </div>
  );
}
