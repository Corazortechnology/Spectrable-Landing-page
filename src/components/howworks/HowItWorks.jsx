
import React from 'react';
import { motion } from 'framer-motion';
import { NotebookText, BrainCog, CheckCircle2, BarChart2 } from 'lucide-react';
import TherapistPage from "../therapists/TherapistPage";
import ClinicsPage from "../clinics/ClinicsPage"
const timeline = [
    {
        icon: <NotebookText className="w-6 h-6 text-indigo-600" />,
        title: 'Caregiver logs daily behavior',
        description: 'Quick entries using text, audio, or video via the app.',
    },
    {
        icon: <BrainCog className="w-6 h-6 text-indigo-600" />,
        title: 'AI analyzes inputs & suggests activities',
        description: 'AI provides daily guidance based on emotional trends.',
    },
    {
        icon: <CheckCircle2 className="w-6 h-6 text-indigo-600" />,
        title: 'Therapist reviews, approves, or customizes plans',
        description: 'A human-in-the-loop validates and adapts suggestions.',
    },
    {
        icon: <BarChart2 className="w-6 h-6 text-indigo-600" />,
        title: 'Progress reports & insights shared in real-time',
        description: 'Clients, caregivers, and therapists stay aligned.',
    },
];

const screenshots = [
    { src: "/images/timeline.png", label: "Daily Log Screen with Timeline View" },
    { src: "/images/started.jpg", label: "Smart Activity Suggestion Cards" },
    { src: "/images/review.png", label: "Therapist Review Workflow" },
    { src: "/images/event.png", label: "SOS Event Log with Response Times" },
    { src: "/images/dashboard.png", label: "Admin Dashboard with Key Metrics" },
    { src: "/images/timeline.png", label: "Daily Log Screen with Timeline View" },
];

const HowItWorks = () => {
    return (
        <section className="bg-gray-50 px-6 md:px-16 py-40">
            {/* Timeline Title */}
            <motion.h2
                className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-14"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                How It Works
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 md:ml-22 gap-10 mb-16">
                {timeline.map((step, index) => (
                    <motion.div
                        key={index}
                        className="flex space-x-4"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div>{step.icon}</div>
                        <div>
                            <h4 className="text-xl font-semibold text-gray-800">{step.title}</h4>
                            <p className="text-[16px] text-gray-600">{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mb-24">
                <a
                    href="#demo"
                    className="inline-block bg-[#3883F5] text-white px-6 py-3 rounded-full text-xl font-medium hover:opacity-90 transition"
                >
                    Try an Interactive Demo Journal
                </a>
            </div>

            <motion.h3
                className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                What the Platform Looks Like in Action
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {screenshots.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white shadow hover:shadow-md p-4 rounded-lg transition"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                    >
                        <img
                            src={item.src}
                            alt={item.label}
                            className="h-40 w-full object-cover rounded mb-3"
                        />
                        <p className="text-xl text-gray-700 text-center">{item.label}</p>
                    </motion.div>
                ))}
            </div>

            <TherapistPage />
            <ClinicsPage />
        </section>
    );
};

export default HowItWorks;
