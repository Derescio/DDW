"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TimelineItem {
    id: number;
    title: string;
    content: string | React.ReactNode;
    date?: string;
    category: 'about' | 'experience' | 'education' | 'skills';
}

const timelineData: TimelineItem[] = [
    {
        id: 1,
        title: "About Me",
        content: (
            <div className="space-y-4">
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
        id: 2,
        title: "Senior Engineer",
        content: "Led technical teams and drove innovation at Digicel Jamaica",
        date: "2015-2018",
        category: 'experience'
    },
    {
        id: 3,
        title: "Google Data Analytics",
        content: "Completed comprehensive data analysis certification",
        date: "2023",
        category: 'education'
    },
    {
        id: 4,
        title: "Technical Skills",
        content: "Web Development, Data Analysis, Project Management",
        category: 'skills'
    }
];

const TimelineAbout = () => {
    const [activeCategory, setActiveCategory] = useState<'about' | 'experience' | 'education' | 'skills'>('about');
    const [visibleItems, setVisibleItems] = useState<number[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleItems((prev) => [...prev, Number(entry.target.id)]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.timeline-item').forEach((item) => observer.observe(item));
        return () => observer.disconnect();
    }, []);

    const filteredItems = timelineData.filter(item => item.category === activeCategory);

    return (
        <div className="container mx-auto px-4 py-8 sm:py-16">
            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
                {['about', 'experience', 'education', 'skills'].map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category as any)}
                        className={cn(
                            "px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full transition-all duration-300",
                            activeCategory === category
                                ? "bg-purple-500 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-purple-900"
                        )}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
                {/* Timeline Line */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-500"></div>

                {/* Timeline Items */}
                <div className="space-y-8 sm:space-y-12">
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            id={item.id.toString()}
                            className={cn(
                                "timeline-item relative",
                                index % 2 === 0 ? "ml-auto" : "mr-auto",
                                "w-[calc(100%-2rem)] sm:w-5/12"
                            )}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            animate={
                                visibleItems.includes(item.id)
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }
                            }
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                                <CardContent className="p-4 sm:p-6">
                                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-500"></div>
                                        <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                                    </div>
                                    {item.date && (
                                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">{item.date}</p>
                                    )}
                                    <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{item.content}</div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimelineAbout; 