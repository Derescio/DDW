"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { IconBriefcase, IconCalendar, IconMapPin } from '@tabler/icons-react';

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string;
    achievements: string[];
    skills: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: "Senior Engineer",
        company: "Digicel Jamaica",
        period: "2015-2018",
        location: "Kingston, Jamaica",
        description: "Led technical teams and drove innovation in telecommunications.",
        achievements: [
            "Managed a team of 10+ engineers",
            "Implemented new network infrastructure",
            "Reduced system downtime by 40%",
            "Led successful migration of legacy systems"
        ],
        skills: ["Team Leadership", "Network Infrastructure", "System Architecture", "Project Management"]
    },
    {
        title: "Web Developer",
        company: "Freelance",
        period: "2020-Present",
        location: "Toronto, Canada",
        description: "Creating accessible and user-friendly web applications.",
        achievements: [
            "Developed responsive web applications",
            "Implemented accessibility features",
            "Optimized performance and SEO",
            "Built custom CMS solutions"
        ],
        skills: ["React", "Next.js", "TypeScript", "Accessibility", "SEO"]
    }
];

const WorkExperience = () => {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-black">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-light text-center mb-16">Professional Experience</h2>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <div className="relative bg-white dark:bg-black rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-800">
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-8 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2"></div>

                                    {/* Content */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-purple-500">
                                            <IconBriefcase className="w-5 h-5" />
                                            <h3 className="text-2xl font-semibold">{exp.title}</h3>
                                        </div>

                                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                                            <div className="flex items-center gap-1">
                                                <IconCalendar className="w-4 h-4" />
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <IconMapPin className="w-4 h-4" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>

                                        <div className="space-y-2">
                                            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Key Achievements:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                                                {exp.achievements.map((achievement, idx) => (
                                                    <li key={idx}>{achievement}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {exp.skills.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkExperience; 