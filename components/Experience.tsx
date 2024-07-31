"use client";
import React, { useContext, useState } from "react";
import BackGroundComponent from './BackGroundComponent'
import { Carousel, Card, CarouselContext } from './ui/AppleCarousel'
import Image from 'next/image'
import Link from 'next/link'
import { dummyContentData } from "@/data/index";
import MagicButton from "./MagicButton";
import { FaArrowCircleRight } from "react-icons/fa";

const Experience = () => {
 
  const renderContent = (contentType: string) => {
    switch (contentType) {
      case 'DummyContent':
        return <DummyContent />;
      // Add more cases for other content types if needed
      default:
        return null;
    }
  };

  const data = [
    {
      category: "Web Application",
      title: "Movie Flixx",
      src: "https://res.cloudinary.com/dw4ev5whz/image/upload/v1722277420/portfolio/Screenshot_New.jpg",
      content: renderContent('DummyContent'),
    },
    {
      category: "Web Application",
      title: "Budget Tracker",
      src: "https://res.cloudinary.com/dw4ev5whz/image/upload/v1722313933/portfolio/expense_tracker_kj3clv.png",
      content: renderContent('DummyContent'),
    },
    {
      category: "Web Application",
      title: "Toronto Sauna Company",
      src: "https://res.cloudinary.com/dw4ev5whz/image/upload/v1722313934/portfolio/tsco_ys9vpi.png",
      content: renderContent('DummyContent'),
    },
   
    {
      category: "Web Application",
      title: "Bernadette Home Care Services",
      src: "https://res.cloudinary.com/dw4ev5whz/image/upload/v1722314116/portfolio/bernadette_ttco29.png",
      content: renderContent('DummyContent'),
    },
    {
      category: "Web Application",
      title: "Property Listing App",
      src: "https://res.cloudinary.com/dw4ev5whz/image/upload/v1722313934/portfolio/property_app_oblr0z.png",
      content: renderContent('DummyContent'),
    },
    // {
    //   category: "Hiring",
    //   title: "Hiring for a Staff Software Engineer",
    //   src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   content: renderContent('DummyContent'),
    // },
  ];


  const cards = data.map((card, index) => (
    
    <Card key={card.src} card={card} index={index} layout={true} />
  ));
 
  
 

  return (
    <div>
    
      <BackGroundComponent>
        <Carousel items={cards} autoplay={true} autoplayInterval={5000}/>
      </BackGroundComponent>
    </div>
  )
}

export default Experience


const DummyContent = () => {

  const { currentIndex } = useContext(CarouselContext);
 // console.log(currentIndex)
  
 
  //   {
  //     heading: "AI-Powered Assistant",
  //     description: "An intelligent assistant that uses cutting-edge AI to help users with daily tasks and complex problem-solving.",
  //     imageUrl: "https://res.cloudinary.com/dw4ev5whz/image/upload/v1722277420/portfolio/Screenshot_New.jpg",
  //     projectUrl: "https://ai-assistant-project.com"
  //   },
  //   {
  //     heading: "Productivity Tracker",
  //     description: "A comprehensive tool that helps users monitor and improve their productivity across various tasks and projects.",
  //     imageUrl: "https://res.cloudinary.com/dw4ev5whz/image/upload/v1722277420/portfolio/Screenshot_New.jpg",
  //     projectUrl: "https://productivity-tracker-app.com"
  //   },
  //   {
  //     heading: "Apple Vision Pro Showcase",
  //     description: "An interactive showcase of the groundbreaking features and capabilities of the new Apple Vision Pro.",
  //     imageUrl: "https://res.cloudinary.com/dw4ev5whz/image/upload/v1722277420/portfolio/Screenshot_New.jpg",
  //     projectUrl: "https://apple-vision-pro-showcase.com"
  //   },
  //   {
  //     heading: "iPhone 15 Pro Max Maps Integration",
  //     description: "A demonstration of the advanced mapping capabilities integrated into the iPhone 15 Pro Max.",
  //     imageUrl: "https://res.cloudinary.com/dw4ev5whz/image/upload/v1722277420/portfolio/Screenshot_New.jpg",
  //     projectUrl: "https://iphone15-maps-demo.com"
  //   },
  //   {
  //     heading: "iOS Photography Suite",
  //     description: "A collection of powerful photography tools and features designed for the latest iOS devices.",
  //     imageUrl: "https://res.cloudinary.com/dw4ev5whz/image/upload/v1722277420/portfolio/Screenshot_New.jpg",
  //     projectUrl: "https://ios-photography-suite.com"
  //   },
  //   {
  //     heading: "Tech Talent Hub",
  //     description: "A platform showcasing opportunities for software engineers and highlighting the innovative work environment.",
  //     imageUrl: "https://res.cloudinary.com/dw4ev5whz/image/upload/v1722277420/portfolio/Screenshot_New.jpg",
  //     projectUrl: "https://tech-talent-hub.com"
  //   }
  // ];

  const item = dummyContentData[currentIndex];
 // console.log(item)

  
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 dark:bg-black dark:text-white">
    
      {/* <h2 className="text-2xl font-bold mb-4 dark:text-black">{item.heading}</h2> */}
      <p className="text-neutral-800 text-base md:text-2xl font-sans max-w-3xl mx-auto dark:text-white">
        {item.description}
      </p>
      <h3 className="text-xl text-neutral-800 font-semibold mb-2 dark:text-white">Technology Stack:</h3>
      <ul className="list-disc list-inside mb-4 ">
        {item.techStack.map((tech, index) => (
          <li key={index} className="text-neutral-600 dark:text-white">{tech}</li>
        ))}
      </ul>
      <Image
        src={item.imageUrl}
        alt={item.heading}
        height={500}
        width={500}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
        <Link href={item.projectUrl} ><MagicButton title="View Webpage" icon={<FaArrowCircleRight />} position="right" /></Link>
    </div>
);
};