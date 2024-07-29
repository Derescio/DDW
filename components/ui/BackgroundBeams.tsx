"use client";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "linear-gradient(to right, #007cf0, #00dfd8, #7928ca, #ff0080, #ff4d4d, #f9cb28)",
          filter: "blur(100px)",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
    </div>
  );
};
