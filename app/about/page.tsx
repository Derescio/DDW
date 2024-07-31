"use client";
import React, { useState } from 'react';
import BackGroundComponent from '@/components/BackGroundComponent';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Footer from '@/components/Footer';


const tabs = [
  { 
    label: 'About', 
    content: (
      <>
        <h3 className="text-xl font-semibold mb-4">About Me</h3>
        <p className="mb-4">Hello! I'm Damion, a data analyst and web developer with a unique journey that has shaped my career and personal growth.</p>
        <p>I began my professional life as a Senior Engineer at Digicel Jamaica, where I honed my technical skills and developed a deep understanding of the telecommunications industry. My role involved working on complex projects, leading teams, and driving innovation to deliver exceptional results.</p>
        <p>In search of new opportunities and experiences, I moved to Canada and ventured into the trucking industry. This career shift brought its own set of challenges and rewards, allowing me to expand my skill set and adapt to a different work environment.</p>
        <p>However, life took an unexpected turn when I was involved in an accident that left me a member of the disabled community. This significant event prompted me to reevaluate my career path and led me to discover a new passion: web development. Returning to a desk job, I embraced the opportunity to dive into the world of coding, design, and digital creation.</p>
        <p>Recently, I completed a Data Analyst course from Google, adding another dimension to my skill set. As a certified Data Analyst, I am now equipped with the knowledge and tools to analyze and interpret complex data, providing valuable insights to drive decision-making and optimize business processes..</p>
      <p>Web development and data analysis have become more than just professions for me; they are ways to channel my creativity, problem-solving abilities, and technical expertise. My journey has given me a unique perspective and resilience that I bring to every project. I am dedicated to creating accessible, user-friendly websites and applications that make a positive impact.</p>
<p>Thank you for taking the time to learn about my journey. If you're interested in discussing a project, collaborating, or simply connecting, please feel free to reach out through my contact form. Let's create something amazing together!</p>      </>
    ),
    leftHeading: 'Read about', 
    rightHeading: 'Biography' 
  },
  { 
    label: 'Experience', 
    content: [
      { title: 'Job 1', description: 'Description of job 1' },
      { title: 'Job 2', description: 'Description of job 2' },
      { title: 'Job 3', description: 'Description of job 3' },
      { title: 'Job 4', description: 'Description of job 4' },
    ],
    leftHeading: 'Experience', 
    rightHeading: 'Professional Career' 
  },
  { 
    label: 'Education', 
    content: [
      { title: 'Degree 1', description: 'Description of degree 1' },
      { title: 'Degree 2', description: 'Description of degree 2' },
      { title: 'Certification 1', description: 'Description of certification 1' },
      { title: 'Certification 2', description: 'Description of certification 2' },
    ],
    leftHeading: 'Education', 
    rightHeading: 'Academic Journey' 
  },
  { 
    label: 'Skills', 
    content: [
      { title: 'Skill 1', description: 'Description of skill 1' },
      { title: 'Skill 2', description: 'Description of skill 2' },
      { title: 'Skill 3', description: 'Description of skill 3' },
      { title: 'Skill 4', description: 'Description of skill 4' },
    ],
    leftHeading: 'Skills', 
    rightHeading: 'Expertise' 
  },
];

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const activeTabData = tabs.find(tab => tab.label === activeTab);

  return (
    <BackGroundComponent>
      <div className="container mx-auto px-4 py-16 md:py-24 flex items-center min-h-screen">
        <div className="grid md:grid-cols-2 gap-8 w-full">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">{activeTabData?.leftHeading}</h2>
            <div className="md:flex md:flex-col grid grid-cols-2 gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  className={`p-2 rounded ${activeTab === tab.label ? 'bg-purple-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}
                  onClick={() => setActiveTab(tab.label)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div>
          <h2 className="text-2xl font-semibold mb-4 dark:text-white">{activeTabData?.rightHeading}</h2>
            <div className="bg-white dark:bg-gray-800 p-4 rounded shadow h-96 overflow-y-auto">
              {Array.isArray(activeTabData?.content) ? (
                <div className="flex flex-wrap justify-between gap-4">
                  {activeTabData.content.map((item, index) => (
                    <Card 
                      key={index} 
                      className={cn(
                        "dark:bg-gray-700 w-full sm:w-[calc(50%-0.5rem)]",
                        "bg-[url('/images/Logo.pg')] bg-cover bg-center"
                      )}
                    >
                      <CardHeader>
                        <CardTitle className="dark:text-white">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="dark:text-gray-300">{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="dark:text-white">{activeTabData?.content}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-6 mt-8'>
  <p className="text-lg font-semibold">Download my CV</p>
  {/* <img src="/path-to-cv-icon.png" alt="CV Icon" className="w-12 h-12" /> */}
  <a 
    href="/markdown.pdf" 
    download 
    type='application/pdf'
    className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
  >
    Download CV
  </a>
</div>

      <Footer />
    </BackGroundComponent>
  );
};

export default AboutPage;
