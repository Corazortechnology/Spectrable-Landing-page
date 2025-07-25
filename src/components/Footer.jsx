
import React from 'react';
import { Mail, Phone, Linkedin, Instagram, Youtube } from 'lucide-react'; // Optional: Lucide icons

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-gray-700 px-6 md:px-16 py-12 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                <div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-xl">Quick Links:</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms of Use</a></li>
                        <li><a href="#" className="hover:underline">Help Center</a></li>
                        <li><a href="#" className="hover:underline">Request Partnership</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-xl">Contact Info:</h3>
                    <ul className="space-y-2">
                        <li><Mail className="inline-block mr-2" size={14} /> hello@spectrable.com</li>
                        <li><Phone className="inline-block mr-2" size={14} /> +91-XXXXXXXXXX</li>
                        <li>Legal Name: <span className="font-medium">KOKUM Assist LLP</span></li>
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
                © 2025 <span className="font-medium">SpectrAble</span> by KOKUM Assist LLP. All Rights Reserved.
            </p>

            <div className="text-center text-xs text-gray-400 space-y-1">
                <p>💼 Built by <a href="#" className="underline hover:text-gray-600">Corazor Technology Pvt. Ltd.</a></p>
                <p>Eligible for Google Cloud for Startups</p>
                <p>Designed for Therapist-Approved Use Only</p>
            </div>
        </footer>
    );
};

export default Footer;
