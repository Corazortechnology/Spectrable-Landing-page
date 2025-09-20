
import { Mail, Phone, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, UserCheck, ShieldCheck, Server, CheckCircle } from 'lucide-react';
import { useState } from 'react';

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
const Footer = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <footer className="bg-gray-50 text-gray-700 px-6 md:px-26 py-12 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-3 text-xl">Quick Links:</h3>
                        <ul className="space-y-2">
                            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                            <li><Link to="/terms-and-conditions" className="hover:underline">Terms of Use</Link></li>
                            <li><Link to="#" className="hover:underline">Help Center</Link></li>
                            <li><Link to="#" className="hover:underline">Request Partnership</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-3 text-xl">Contact Info:</h3>
                        <ul className="space-y-2">
                            <li><Mail className="inline-block mr-2" size={14} /> kokumassist@kokumassist.com</li>
                            <li>Legal Name: <span className="font-medium">Kokum assist LLP</span></li>
                            <li>LLPIN: <span className="font-medium">ACL-1013</span></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-3 text-xl">Social:</h3>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="LinkedIn"><Linkedin size={25} className="hover:text-indigo-600" /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={25} className="hover:text-pink-500" /></a>
                            <a href="#" aria-label="YouTube"><Youtube size={25} className="hover:text-red-500" /></a>
                        </div>
                    </div>
                </div>

                <div className="my-8 border-t border-gray-200"></div>

                <p className="text-center text-xm text-gray-500 mb-6">
                    © 2025 <span className="font-medium">SpectrAble</span> by KOKUM assist LLP. All Rights Reserved.
                </p>

                <div className="text-center text-xs text-gray-400 space-y-1">
                    <p>💼 Built by <a href="#" className="underline hover:text-gray-600">Corazor Technology Pvt. Ltd.</a></p>
                    <p>Eligible for Google Cloud for Startups</p>
                    <p>Designed for Therapist-Approved Use Only</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
