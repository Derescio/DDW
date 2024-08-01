import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import BackGroundComponent from "./BackGroundComponent";
import MagicButton from "./MagicButton";
import { FaArrowCircleRight } from "react-icons/fa";

const Hero = () => {
  
  return (

<div className="pb-2 pt-36 !dark:bg-whte " id="home">
<div>
<Spotlight className="top-40 -left-10 md:-left-32 md:-top-20 h-screen fill=white light:fill-black light:top-40 light:-left-10 light:md:-left-32 light:md:-top-20 light:h-screen"  />
<Spotlight className="top-10 left-full w-[50vw] h-[80vh] fill=purple " />
<Spotlight className="top-28  left-80  w-[50vw] h-[80vh] fill=white " />
 </div>
 <BackGroundComponent>
    <TextGenerateEffect 
    words="Moving you from concept to awesome."
    />

<div className=" mt-6 flex flex-col items-center justify-center gap-y-4">
<h1 className="text-3xl">Hi, My name is Damion Wilson.</h1>
<p className="text-xl mb-4">I am a data analyst and web developer located in Canada.</p>
    </div>
    <Link href="#contact">
 <MagicButton title="Connect" icon={<FaArrowCircleRight />} position="right" />
 </Link>
 </BackGroundComponent>
</div>

        // </div>
  );
};
    // <div className="relative h-screen overflow-hidden">
    //   <BackgroundBeamsDemo />
    //   <div className="relative z-10 flex flex-col items-center justify-center h-full">
    //     <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] text-center">
    //       <p className="uppercase tracking-widest text-xs text-blue-100 mb-4">
    //         Dynamic Web Magic with Next.js
    //       </p>
    //       <TextGenerateEffect
    //         words={`Transforming Concepts into Seamless User Experiences `}
    //         className="text-[40px] md:text-5xl lg:text-6xl font-bold text-white mb-6"
    //         specialWords={specialWords}
    //       />
    //       <p className="text-sm md:text-lg lg:text-2xl text-white">
    //         Hi! I'm Adrian, a Next.js Developer based in Croatia.
    //       </p>
    //     </div>
    //   </div>


export default Hero;
