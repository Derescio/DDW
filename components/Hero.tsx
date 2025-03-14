"use client";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import MagicButton from "./MagicButton";
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

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
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TextGenerateEffect
            words="Transforming Ideas into Digital Excellence"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text"
          />
        </motion.div>

        <div className="mt-8 flex flex-col items-center justify-center gap-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-semibold">
              Hello, I'm <span className="text-purple-600 dark:text-purple-400">Damion Wilson</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Crafting data-driven web solutions that make an impact
            </p>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
              From telecommunications engineering to web development, I bring a unique perspective
              to every project. Specializing in creating accessible, user-centric applications
              powered by data analytics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 mt-4"
          >
            <Link href="#contact">
              <MagicButton
                title="Let's Collaborate"
                icon={<FaArrowCircleRight />}
                position="right"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
