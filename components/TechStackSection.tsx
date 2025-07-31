import Image from "next/image";
import { techStack } from "../data/index";

export default function TechStackSection() {
  return (
    <section className="pt-10 mx-auto container max-w-3xl px-4 md:px-0 md:pt-20 z-50 animate-fade-up animate-once animate-delay-[300ms]">
      {/* Blurry Background */}
      <div
        className="absolute top-[650px] left-[-250px] w-[570px] h-[300px] blur-[130px] z-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(106, 47, 216, .7), transparent)",
        }}
      />
      <div
        className="absolute top-[1000px] right-[-200px] w-[570px] h-[264px] blur-[130px] z-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(63,233,196, .7), transparent)",
        }}
      />

      {/* Header */}
      <p className="text-[22px] font-light text-neutral-300 mb-5 tracking-widest text-left">
        Tech Stack
      </p>

      {/* Tech Stack Grid */}
      <div className="flex flex-wrap gap-2 items-center">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center p-2 bg-neutral-950/30 rounded-xl hover:bg-neutral-900/50 transition-all duration-200"
          >
            <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={24}
                height={24}
                className="w-full h-full object-contain filter invert"
              />
            </div>
            <p className="ml-2 mr-1 text-sm text-neutral-300">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
