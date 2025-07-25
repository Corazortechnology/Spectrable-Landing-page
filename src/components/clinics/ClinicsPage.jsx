
import React from 'react';
import { Hospital, LayoutGrid, ShieldCheck, Users, HeartHandshake, GaugeCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const clinicFeatures = [
    {
        title: 'Centralized Clinic Dashboard',
        description: 'Monitor all therapist-patient interactions in one secure place.',
        icon: <LayoutGrid className="w-6 h-6 text-indigo-600" />,
    },
    {
        title: 'Role-Based Secure Access',
        description: 'Ensure staff and therapists access only what they need.',
        icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    },
    {
        title: 'Therapist Roster Management',
        description: 'Easily manage multiple therapists and their caseloads.',
        icon: <Users className="w-6 h-6 text-indigo-600" />,
    },
    {
        title: 'Client Progress Reports',
        description: 'Track therapy effectiveness through AI-generated insights.',
        icon: <GaugeCircle className="w-6 h-6 text-indigo-600" />,
    },
    {
        title: 'Collaboration Tools',
        description: 'Enable seamless communication between team members.',
        icon: <HeartHandshake className="w-6 h-6 text-indigo-600" />,
    },
    {
        title: 'HIPAA-Compliant Security',
        description: 'Built to meet clinical data protection standards.',
        icon: <Hospital className="w-6 h-6 text-red-500" />,
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

const ClinicsPage = () => {
    return (
        <section className="bg-white px-6 md:px-16 py-40">
            <motion.h2
                className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                SpectrAble for Clinics
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {clinicFeatures.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition"
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
                        <p className="text-sm text-gray-600">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ClinicsPage;
