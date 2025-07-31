import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import TechStackSection from "@/components/TechStackSection";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div className="relative pb-20 -mb-20 w-screen px-6 border-t border-neutral-800 rounded-t-2xl -ml-[50vw] left-1/2" />
        <ExperienceSection />
        <TechStackSection />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
