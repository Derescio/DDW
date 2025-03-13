"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from "@/lib/utils";

interface Card3D {
    id: string;
    title: string;
    content: string | React.ReactNode;
    category: 'about' | 'experience' | 'education' | 'skills';
    color: string;
}

const cards: Card3D[] = [
    {
        id: 'about',
        title: "About Me",
        content: (
            <div className="space-y-4 text-lg">
                <p>Hello! I'm Damion, a data analyst and web developer with a unique journey that has shaped my career and personal growth.</p>
                <p>I began my professional life as a Senior Engineer at Digicel Jamaica, where I honed my technical skills and developed a deep understanding of the telecommunications industry.</p>
                <p>In search of new opportunities and experiences, I moved to Canada and ventured into the trucking industry.</p>
                <p>However, life took an unexpected turn when I was involved in an accident that left me a member of the disabled community. This significant event prompted me to reevaluate my career path and led me to discover a new passion: web development.</p>
                <p>Recently, I completed a Data Analyst course from Google, adding another dimension to my skill set.</p>
            </div>
        ),
        category: 'about',
        color: 'from-purple-500 to-pink-500'
    },
    {
        id: 'experience',
        title: "Experience",
        content: (
            <div className="space-y-6">
                <div className="space-y-2">
                    <h3 className="text-xl font-medium">Senior Engineer</h3>
                    <p className="text-gray-600 dark:text-gray-400">Digicel Jamaica • 2015-2018</p>
                    <p>Led technical teams and drove innovation in telecommunications.</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-medium">Web Developer</h3>
                    <p className="text-gray-600 dark:text-gray-400">Freelance • 2020-Present</p>
                    <p>Creating accessible and user-friendly web applications.</p>
                </div>
            </div>
        ),
        category: 'experience',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        id: 'education',
        title: "Education",
        content: (
            <div className="space-y-6">
                <div className="space-y-2">
                    <h3 className="text-xl font-medium">Google Data Analytics</h3>
                    <p className="text-gray-600 dark:text-gray-400">2023</p>
                    <p>Comprehensive data analysis certification.</p>
                </div>
            </div>
        ),
        category: 'education',
        color: 'from-green-500 to-emerald-500'
    },
    {
        id: 'skills',
        title: "Skills",
        content: (
            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <h3 className="text-xl font-medium">Technical</h3>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                        <li>Web Development</li>
                        <li>Data Analysis</li>
                        <li>Project Management</li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-medium">Tools</h3>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                        <li>React/Next.js</li>
                        <li>Python</li>
                        <li>SQL</li>
                    </ul>
                </div>
            </div>
        ),
        category: 'skills',
        color: 'from-orange-500 to-red-500'
    }
];

const Interactive3DAbout = () => {
    const [activeCard, setActiveCard] = useState<string>('about');
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
    const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const currentCard = cards.find(card => card.id === activeCard);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-16">
            {/* Navigation */}
            <div className="container mx-auto px-4 mb-12">
                <div className="flex justify-center gap-4">
                    {cards.map((card) => (
                        <button
                            key={card.id}
                            onClick={() => setActiveCard(card.id)}
                            className={cn(
                                "px-4 py-2 rounded-full transition-all duration-300",
                                activeCard === card.id
                                    ? "bg-white text-gray-900"
                                    : "bg-gray-800 text-white hover:bg-gray-700"
                            )}
                        >
                            {card.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* 3D Card */}
            <div className="container mx-auto px-4">
                <div
                    ref={containerRef}
                    className="max-w-4xl mx-auto aspect-[4/3] relative"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div
                        className={cn(
                            "absolute inset-0 rounded-2xl bg-gradient-to-br p-8 text-white",
                            currentCard?.color
                        )}
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                            transform: "perspective(1000px)",
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <div className="h-full flex flex-col">
                            <h2 className="text-3xl font-bold mb-6">{currentCard?.title}</h2>
                            <div className="flex-1 overflow-y-auto">
                                <div className="prose prose-invert max-w-none">
                                    {currentCard?.content}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Particles */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: 0,
                            opacity: 0,
                        }}
                        animate={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Interactive3DAbout; 