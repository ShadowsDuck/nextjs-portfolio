import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import TechStackSection from "@/components/TechStackSection";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <div className="relative pb-20 -mb-20 w-screen px-6 border-t border-neutral-800 rounded-t-2xl -ml-[50vw] left-1/2" />
        <ExperienceSection />
        <TechStackSection />
      </div>
    </main>
  );
}
