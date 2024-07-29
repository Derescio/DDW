import { AuroraBackground } from "@/components/ui/AuroraBackGround";
import { GlobeWithText } from "@/components/GlobeWithtext";
import { GlobeDemo } from "@/components/GitHubGlobe";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import { FloatingNavDemo } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className="dark:bg-black dark:text-white bg-white bg-primary relative flex flex-col items-center justify-center overflow-hidden   mx-auto px-5 sm:px-10">
     <div className="max-w-7xl w-full">  
     {/* </AuroraBackground> */}
     {/* <AuroraBackground> */}
      {/* Your main content goes here */}
      {/* <GlobeWithText /> */}
      {/* <GlobeDemo /> */}
      {/* <FloatingNavDemo /> */}
      <Hero />
      <Experience />
      <Experience />
      </div>
    </main>
  );
}
