"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from "@/lib/utils";
import { usePathname, useSearchParams } from 'next/navigation';
import { FloatingNavDemo } from '@/components/ui/FloatingNav';

interface Section {
    id: string;
    title: string;
    content: string | React.ReactNode;
    category: 'about' | 'experience' | 'education' | 'skills';
}

const sections: Section[] = [
    {
        id: 'about',
        title: "About Me",
        content: (
            <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-2xl font-light italic">"A journey of transformation through technology"</p>
                <p>Hello! I'm Damion, a data analyst and web developer with a unique journey that has shaped my career and personal growth.</p>
                <p>I began my professional life as a Senior Engineer at Digicel Jamaica, where I honed my technical skills and developed a deep understanding of the telecommunications industry.</p>
                <p>In search of new opportunities and experiences, I moved to Canada and ventured into the trucking industry.</p>
                <p>However, life took an unexpected turn when I was involved in an accident that left me a member of the disabled community. This significant event prompted me to reevaluate my career path and led me to discover a new passion: web development.</p>
                <p>Recently, I completed a Data Analyst course from Google, adding another dimension to my skill set.</p>
            </div>
        ),
        category: 'about'
    },
    {
        id: 'experience',
        title: "Experience",
        content: (
            <div className="space-y-8">
                <div className="space-y-2">
                    <h3 className="text-xl font-medium">Senior Engineer</h3>
                    <p className="text-gray-600 dark:text-gray-400">Digicel Jamaica • 2015-2018</p>
                    <p>Led technical teams and drove innovation in telecommunications.</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                        <li>Managed a team of 10+ engineers</li>
                        <li>Implemented new network infrastructure</li>
                        <li>Reduced system downtime by 40%</li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-medium">Web Developer</h3>
                    <p className="text-gray-600 dark:text-gray-400">Freelance • 2020-Present</p>
                    <p>Creating accessible and user-friendly web applications.</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                        <li>Developed responsive web applications</li>
                        <li>Implemented accessibility features</li>
                        <li>Optimized performance and SEO</li>
                    </ul>
                </div>
            </div>
        ),
        category: 'experience'
    },
    {
        id: 'education',
        title: "Education",
        content: (
            <div className="space-y-8">
                <div className="space-y-2">
                    <h3 className="text-xl font-medium">Google Data Analytics</h3>
                    <p className="text-gray-600 dark:text-gray-400">2023</p>
                    <p>Comprehensive data analysis certification.</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                        <li>Data cleaning and preparation</li>
                        <li>Data visualization</li>
                        <li>Statistical analysis</li>
                    </ul>
                </div>
            </div>
        ),
        category: 'education'
    },
    {
        id: 'skills',
        title: "Skills",
        content: (
            <div className="space-y-8">
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-medium mb-2">Technical Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'SQL'].map((skill, idx) => (
                                <span key={idx} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium mb-2">Soft Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Team Leadership', 'Problem Solving', 'Communication', 'Project Management'].map((skill, idx) => (
                                <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),
        category: 'skills'
    }
];

interface MinimalistAboutProps {
    showNavigation?: boolean;
    initialSection?: string;
}

const MinimalistAboutContent = ({ showNavigation = true, initialSection = 'about' }: MinimalistAboutProps) => {
    const [activeSection, setActiveSection] = useState<string>(initialSection);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const section = searchParams.get('section');
        if (section && sections.some(s => s.id === section)) {
            setActiveSection(section);
        }
    }, [searchParams]);

    const currentSection = sections.find(section => section.id === activeSection);

    return (
        <div className="min-h-screen bg-white dark:bg-black" id="about">
            {showNavigation && <FloatingNavDemo />}

            {/* Content */}
            <main className="container mx-auto px-4 pt-24 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl font-light mb-12 text-center">
                        {currentSection?.title}
                    </h1>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        {currentSection?.content}
                    </div>
                </motion.div>
            </main>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-600"
            >
                <div className="animate-bounce">↓</div>
            </motion.div>
        </div>
    );
};

const MinimalistAbout = ({ showNavigation = true, initialSection = "about" }: MinimalistAboutProps) => {
    return (
        <div className="relative min-h-screen">
            {showNavigation && <FloatingNavDemo />}
            <Suspense fallback={<div>Loading...</div>}>
                <MinimalistAboutContent initialSection={initialSection} />
            </Suspense>
        </div>
    );
};

export default MinimalistAbout; 