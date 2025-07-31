import Image from "next/image";
import { techStack } from "../data/index";

export default function TechStackSection() {
  return (
    <div className="relative">
      <section className="pt-10 mx-auto container max-w-[54rem] px-4 md:px-0 md:pt-20 z-50">
        {/* Blurry Background */}
        <div
          className="absolute -top-120 left-[-550px] w-[570px] h-[180px] blur-[150px] z-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at center, rgba(63, 100, 233, .6), transparent)",
          }}
        />
        <div
          className="absolute bottom-20 right-[-500px] w-[570px] h-[264px] blur-[130px] z-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at center, rgba(63, 233, 196, .6), transparent)",
          }}
        />

        {/* Animated Content */}
        <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.7s_forwards]">
          {/* Header */}
          <p className="text-[22px] inter font-extralight text-neutral-300 mb-5 tracking-widest text-left">
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
                <p className="ml-2 mr-1 text-sm text-neutral-300 inter font-light">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
