import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="dark:bg-black dark:text-white bg-white bg-primary relative flex flex-col items-center justify-start min-h-screen overflow-hidden mx-auto px-5 sm:px-10">
  <div className="max-w-7xl w-full flex-grow flex flex-col">  
    <Hero />
    <h1 className="text-purple-500 tracking-wide shadow-lg  dark:shadow-lg text-4xl font-bold text-center mt-10 sm:mt-20 dark:text-purple z-10">PROJECTS</h1>
    <Experience />
    <Contact />
  </div>
</main>
  );
}
