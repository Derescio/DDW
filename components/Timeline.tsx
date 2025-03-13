"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface TimelineItem {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
    skills?: string[];
}

const timelineData: TimelineItem[] = [
    {
        id: 1,
        title: "Senior Engineer",
        company: "Digicel Jamaica",
        period: "2015-2018",
        description: "Led technical teams and drove innovation in telecommunications.",
        skills: ["Team Leadership", "Technical Strategy", "Network Infrastructure"]
    },
    {
        id: 2,
        title: "Web Developer",
        company: "Freelance",
        period: "2020-Present",
        description: "Creating accessible and user-friendly web applications.",
        skills: ["React", "Next.js", "TypeScript", "Accessibility"]
    }
];

const Timeline = () => {
    return (
        <div className="relative max-w-4xl mx-auto px-4 py-16">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-500"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
                {timelineData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className={cn(
                            "relative",
                            index % 2 === 0 ? "ml-auto" : "mr-auto",
                            "w-[calc(100%-2rem)] sm:w-5/12"
                        )}
                    >
                        <div className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 rounded-lg p-6">
                            {/* Timeline Dot */}
                            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>

                            {/* Content */}
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-gray-600 dark:text-gray-400">{item.company}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-500">{item.period}</p>
                                    <p className="text-gray-700 dark:text-gray-300">{item.description}</p>

                                    {item.skills && (
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {item.skills.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Timeline; 