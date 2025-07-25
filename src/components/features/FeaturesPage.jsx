
import React from 'react';
import {
    FileText,
    Mic,
    Video,
    Brain,
    BarChart2,
    AlertTriangle,
    CheckCircle2,
    Target,
    Shield,
    Bell,
    PieChart,
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Multimodal Journaling',
        description: 'Text, Audio, Video',
        icon: <FileText className="w-6 h-6 text-indigo-600" />,
    },
    {
        title: 'Daily AI-Powered Suggestions',
        description: 'Personalized behavior insights',
        icon: <Brain className="w-6 h-6 text-indigo-600" />,
    },
    {
        title: 'Trend Charts',
        description: 'Emotional & activity tracking',
        icon: <BarChart2 className="w-6 h-6 text-indigo-600" />,
    },
    {
        title: 'SOS Alert Dashboard',
        description: 'Priority-based routing',
        icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    },
    {
        title: 'Therapist Feedback Loop',
        description: 'Approval logs & feedback',
        icon: <CheckCircle2 className="w-6 h-6 text-green-600" />,
    },
    {
        title: 'Smart Goal Tracker',
        description: 'Therapy targets & progress',
        icon: <Target className="w-6 h-6 text-indigo-600" />,
    },
    {
        title: 'Role-Based Access',
        description: 'Granular secure permissions',
        icon: <Shield className="w-6 h-6 text-indigo-600" />,
    },
    {
        title: 'Real-Time Notifications',
        description: 'Stay instantly updated',
        icon: <Bell className="w-6 h-6 text-indigo-600" />,
    },
    {
        title: 'Admin Analytics Panel',
        description: 'Data-driven decisions',
        icon: <PieChart className="w-6 h-6 text-indigo-600" />,
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

const FeaturesPage = () => {
    return (
        <section className="px-6 md:px-16 py-30 bg-white">
            <motion.h2
                className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Platform Features
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={cardVariants}
                    >
                        <div className="flex items-center space-x-4 mb-3">
                            {feature.icon}
                            <h4 className="text-xl font-semibold text-gray-800">
                                {feature.title}
                            </h4>
                        </div>
                        <p className="text-[16px] text-gray-600">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesPage;
