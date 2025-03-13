"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from "@/lib/utils";
import { usePathname, useSearchParams } from 'next/navigation';

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
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-medium">Web Developer</h3>
                    <p className="text-gray-600 dark:text-gray-400">Freelance • 2020-Present</p>
                    <p>Creating accessible and user-friendly web applications.</p>
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
                <div className="space-y-2">
                    <h3 className="text-xl font-medium">Technical Skills</h3>
                    <p className="text-gray-600 dark:text-gray-400">Web Development, Data Analysis, Project Management</p>
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

const MinimalistAbout = ({ showNavigation = true, initialSection = 'about' }: MinimalistAboutProps) => {
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
        <div className="min-h-screen bg-white dark:bg-gray-900" id="about">
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

export default MinimalistAbout; 