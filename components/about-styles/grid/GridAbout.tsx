"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GridItem {
    id: number;
    title: string;
    content: string | React.ReactNode;
    category: 'about' | 'experience' | 'education' | 'skills';
    image?: string;
}

const gridData: GridItem[] = [
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
        category: 'about',
        image: '/images/profile.jpg'
    },
    {
        id: 2,
        title: "Senior Engineer",
        content: "Led technical teams and drove innovation at Digicel Jamaica",
        category: 'experience',
        image: '/images/experience.jpg'
    },
    {
        id: 3,
        title: "Google Data Analytics",
        content: "Completed comprehensive data analysis certification",
        category: 'education',
        image: '/images/education.jpg'
    },
    {
        id: 4,
        title: "Technical Skills",
        content: "Web Development, Data Analysis, Project Management",
        category: 'skills',
        image: '/images/skills.jpg'
    }
];

const GridAbout = () => {
    const [activeCategory, setActiveCategory] = useState<'about' | 'experience' | 'education' | 'skills'>('about');
    const [selectedItem, setSelectedItem] = useState<GridItem | null>(null);

    const filteredItems = gridData.filter(item => item.category === activeCategory);

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Category Navigation */}
            <div className="flex justify-center gap-4 mb-12">
                {['about', 'experience', 'education', 'skills'].map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category as any)}
                        className={cn(
                            "px-4 py-2 rounded-full transition-all duration-300",
                            activeCategory === category
                                ? "bg-purple-500 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-purple-900"
                        )}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredItems.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setSelectedItem(item)}
                        >
                            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden">
                                {item.image && (
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-gray-700 dark:text-gray-300 line-clamp-3">
                                        {typeof item.content === 'string' ? item.content : 'Click to read more...'}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="text-gray-700 dark:text-gray-300">
                                {selectedItem.content}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GridAbout; 