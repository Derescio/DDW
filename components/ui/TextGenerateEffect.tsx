"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.95,
  specialWords =[]
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  specialWords?: React.ReactNode;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          //const isSpecial = specialWords.includes(word);
          return (
            <motion.span
              key={word + idx}
              className={`${idx >4 ? 'text-purple-600':'dark:text-white text-black opacity-0'}`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="capitalize dark:text-white text-black text-3xl sm:text-5xl md:text-6xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
