import Image from "next/image";
import { GridBackground } from "./ui/GridBackground";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import SocialLink from "./SocialLink";

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <GridBackground />

      <div className="flex flex-col justify-center relative mb-40 z-10 opacity-0 translate-y-8 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
        {/* Picture & Name & Country */}
        <div className="pt-2 text-center flex items-center justify-center gap-4">
          <div className="relative inline-block w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/user-icon.png"
              alt="User Profile"
              fill
              className="rounded-full transition-transform duration-500 hover:scale-125 hover:-rotate-12 border border-white object-cover"
              sizes="100vw"
            />
          </div>
          <div className="text-gray-50 text-left flex flex-col">
            <span className="text-[22px] font-avantgarde font-bold">
              Tanaphat Partoom.
            </span>
            <span className="text-[14px] ml-0.5">
              <Image
                src="/thailand-flag.png"
                alt="Thailand"
                width={20}
                height={20}
                className="inline-block mr-1 -mt-1 rounded-xs"
                priority
              />
              <span>Based in Thailand</span>
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex items-center justify-center">
            <h1 className="text-5xl text-gray-50 font-avantgarde font-bold md:text-6xl lg:text-8xl tracking-wide">
              FULLSTACK
            </h1>
          </div>
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex items-center justify-center">
            <h1 className="text-4xl text-gray-50 font-avantgarde font-bold md:text-6xl lg:text-8xl tracking-wide">
              DEVELOPER
            </h1>
            <div className="relative ml-2 min-w-fit mt-1">
              <a href="#projects">
                <MagicButton
                  title="Show my work"
                  icon={<FaLocationArrow />}
                  position="right"
                  otherClasses="font-avantgarde font-bold"
                />
              </a>
            </div>
          </div>
          <SocialLink />
        </div>
      </div>
    </div>
  );
};

export default Hero;
