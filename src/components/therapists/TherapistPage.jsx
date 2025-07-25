
import { motion } from 'framer-motion';
import {
    Mic,
    Smile,
    Eye,
    UserCheck,
    FileSearch
} from 'lucide-react';

const features = [
    {
        icon: <FileSearch className="w-6 h-6 text-indigo-600" />,
        title: 'NLP Sentiment Analysis',
        desc: 'Interpret caregiver-written logs to assess mood and patterns.',
    },
    {
        icon: <Mic className="w-6 h-6 text-indigo-600" />,
        title: 'Audio Emotion Recognition',
        desc: 'Classify tone and energy levels from spoken audio.',
    },
    {
        icon: <Eye className="w-6 h-6 text-indigo-600" />,
        title: 'Pose & Expression AI',
        desc: 'Analyze body language and expressions in video logs.',
    },
    {
        icon: <UserCheck className="w-6 h-6 text-indigo-600" />,
        title: 'Therapist-in-the-Loop',
        desc: 'Human validation and feedback improve AI intelligence.',
    },
    {
        icon: <Smile className="w-6 h-6 text-indigo-600" />,
        title: 'Model Explainability',
        desc: 'Transparent decision trails with override options.',
    },
];

const TherapistPage = () => {
    return (
        <section className="min-h-screen px-6 md:px-16 py-40 bg-gradient-to-tr from-indigo-50 to-white">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Smart AI for Real-Life Therapy Support
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-gray-700 mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    AI That Understands, Supports, and Learns
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                    {features.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="flex items-center space-x-4 mb-3">
                                {item.icon}
                                <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                            </div>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.blockquote
                    className="mt-12 text-center italic text-indigo-800 text-md md:text-lg max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    “SpectrAble’s AI is a support layer — not a replacement for professional care.”
                </motion.blockquote>
            </div>
        </section>
    );
};

export default TherapistPage;
