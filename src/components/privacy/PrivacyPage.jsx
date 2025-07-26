
import { motion } from 'framer-motion';
import { Lock, UserCheck, ShieldCheck, Server, CheckCircle } from 'lucide-react';

const policies = [
    {
        title: 'End-to-End Encryption',
        description: 'All user data is encrypted both in transit and at rest.',
        icon: <Lock className="w-6 h-6 text-indigo-600" />,
    },
    {
        title: 'Role-Based Access Control',
        description: 'Only authorized users can access relevant information.',
        icon: <UserCheck className="w-6 h-6 text-indigo-600" />,
    },
    {
        title: 'DPDP & GDPR Compliance',
        description: 'Compliant with India’s DPDP Act and GDPR for EU users.',
        icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    },
    {
        title: 'Secure Cloud Storage',
        description: 'Data hosted on secure, region-specific cloud infrastructure.',
        icon: <Server className="w-6 h-6 text-indigo-600" />,
    },
    {
        title: 'Consent-Based AI Training',
        description: 'AI models trained only on anonymized and approved logs.',
        icon: <CheckCircle className="w-6 h-6 text-indigo-600" />,
    },
];

const PrivacyPage = () => {
    return (
        <section className="px-6 md:px-16 py-40 bg-white">
            <motion.h2
                className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-12"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Security, Privacy & Compliance
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                {policies.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center space-x-4 mb-3">
                            {item.icon}
                            <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="max-w-3xl mx-auto text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                    <strong className="font-semibold text-gray-900">Note:</strong> SpectrAble is <span className="underline">not</span> a diagnostic tool. It is a clinical decision-support system reviewed and approved by licensed human therapists and experts.
                </p>
            </motion.div>
        </section>
    );
};

export default PrivacyPage;
