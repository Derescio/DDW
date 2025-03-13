"use client";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./MagicButton";
import { FaArrowCircleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Spotlight Effects */}
      <div className="absolute inset-0">
        <Spotlight className="top-40 -left-10 md:-left-32 md:-top-20 h-screen fill-white dark:fill-black" />
        <Spotlight className="top-10 left-full w-[50vw] h-[80vh] fill-purple" />
        <Spotlight className="top-28 left-80 w-[50vw] h-[80vh] fill-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <TextGenerateEffect
          words="Moving you from concept to awesome."
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        />

        <div className="mt-6 flex flex-col items-center justify-center gap-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold">Hi, My name is Damion Wilson.</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            I am a data analyst and web developer located in Canada.
          </p>
          <Link href="#contact">
            <MagicButton
              title="Connect"
              icon={<FaArrowCircleRight />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
