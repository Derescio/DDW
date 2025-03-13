"use client";
import React from 'react';
import { motion } from 'framer-motion';
import MinimalistAbout from './minimalist/MinimalistAbout';

const StyleSelector = () => {
    return (
        <div className="relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <MinimalistAbout />
            </motion.div>
        </div>
    );
};

export default StyleSelector; 