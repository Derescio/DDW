"use client";
import React from 'react';
import BackGroundComponent from '@/components/BackGroundComponent';
import Hero from "@/components/Hero";
import MinimalistAbout from '@/components/about-styles/minimalist/MinimalistAbout';
import Experience from '@/components/Experience';
import WorkExperience from '@/components/WorkExperience';
import Approach from "@/components/Approcah";
import Contact from "@/components/Contact";
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <BackGroundComponent>
      <main className="dark:bg-black dark:text-white bg-white bg-primary relative flex flex-col items-center justify-start min-h-screen overflow-hidden mx-auto px-5 sm:px-10">
        <div className="max-w-7xl w-full flex-grow flex flex-col">
          <Hero />
          <Experience />
          <MinimalistAbout showNavigation={false} initialSection="about" />
          <Approach />
          <WorkExperience />
          <Contact />
          <Footer />
        </div>
      </main>
    </BackGroundComponent>
  );
};

export default HomePage;
