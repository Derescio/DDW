"use client";
import React from "react";
import { FloatingNavBar } from "./FloatingNavBar";
import { IconHome, IconMessage, IconUser, IconBriefcase, IconSchool, IconTools } from "@tabler/icons-react";
import { usePathname } from 'next/navigation';

export function FloatingNavDemo() {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';

  const navItems = isAboutPage ? [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "/#experience",
      icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "/#skills",
      icon: <IconTools className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/#contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ] : [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/#contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNavBar navItems={navItems} />
      {/* <DummyContent /> */}
    </div>
  );
}

