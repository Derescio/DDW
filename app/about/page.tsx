"use client";
import React from 'react';
import BackGroundComponent from '@/components/BackGroundComponent';
import MinimalistAbout from '@/components/about-styles/minimalist/MinimalistAbout';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <BackGroundComponent>
      <main className="dark:bg-black dark:text-white bg-white bg-primary relative flex flex-col items-center justify-start min-h-screen overflow-hidden mx-auto px-5 sm:px-10">
        <div className="max-w-7xl w-full flex-grow flex flex-col">
          <MinimalistAbout showNavigation={true} initialSection="about" />
          <div className='flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 mb-16'>
            <p className="text-lg font-semibold">Download my CV</p>
            <a
              href="/rmarkdown.pdf"
              download
              type='application/pdf'
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
            >
              Download CV
            </a>
          </div>
          <Footer />
        </div>
      </main>
    </BackGroundComponent>
  );
};

export default AboutPage;