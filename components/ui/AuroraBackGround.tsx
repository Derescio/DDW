"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const AuroraBackground = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="aurora-bg-gradient absolute -inset-[10px] opacity-50"></div>
      </div>
      {children}
    </div>
  );
};
