import Image from "next/image";
import { projects } from "../data/index";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="relative">
      <section
        className="pt-10 mx-auto container max-w-[54rem] px-4 md:px-0 md:pt-20 z-50"
        id="projects"
      >
        {/* Header */}
        <p className="text-[22px] inter font-extralight text-neutral-300 -mb-4 tracking-widest text-left">
          Projects
        </p>
      </section>

      {/* Blurry Background */}
      <div
        className="absolute top-10 left-[-550px] w-[570px] h-[264px] blur-[130px] z-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(106, 47, 216, .6), transparent)",
        }}
      />
      <div
        className="absolute bottom-90 right-[-500px] w-[570px] h-[264px] blur-[130px] z-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(106, 47, 216, .6), transparent)",
        }}
      />

      <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
        {/* Content */}
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-4">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <Image
                      src={img}
                      alt={title}
                      width={1000}
                      height={1000}
                      className="z-10 object-cover w-full h-full rounded-md"
                    />
                  </div>
                </div>
                <h3 className="text-gray-50 text-lg mb-4 inter font-light">
                  {title}
                </h3>
                <p className="text-neutral-400 text-sm inter font-extralight">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-9 lg:h-9 w-8 h-8 flex items-center justify-center"
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt={icon}
                          width={1000}
                          height={1000}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex text-sm text-purple font-avantgarde font-bold">
                      View More
                    </p>
                    <FaLocationArrow className="ms-2" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
