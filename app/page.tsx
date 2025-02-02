import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Approach from "@/components/Approcah";
import AboutPage from "@/components/About";

export default function Home() {
  return (
    <main className="dark:bg-black dark:text-white bg-white bg-primary relative flex flex-col items-center justify-start min-h-screen overflow-hidden mx-auto px-5 sm:px-10">
  <div className="max-w-7xl w-full flex-grow flex flex-col">  
    <Hero />

    <Experience />
    <Approach />
    <Contact />
    <AboutPage />
   <Footer />
  </div>
</main>
  );
}
