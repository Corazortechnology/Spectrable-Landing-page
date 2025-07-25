
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm fixed">

            <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-pink-500 via-purple-500 to-green-400 rounded-full" />
                <span className="text-2xl font-semibold text-gray-900">SpectrAble</span>
            </div>

            <div className="hidden md:flex font-semibold items-center space-x-6 text-[18px] text-black">
                <Link to="/" className="hover:text-gray-900">Home</Link>
                <Link to="/features" className="hover:text-gray-900">Features</Link>
                <Link to="/how-it-works" className="hover:text-gray-900">How it Works</Link>
                <Link to="/therapists" className="hover:text-gray-900">For Therapists</Link>
                <Link to="/clinics" className="hover:text-gray-900">For Clinics</Link>
                <Link to="/privacy" className="hover:text-gray-900">Privacy</Link>
                <Link to="/contact" className="hover:text-gray-900">Contact</Link>
                <button className="bg-gradient-to-r from-indigo-600 to-blue-900 text-white px-5 py-2 rounded-full text-[18px] hover:opacity-90 transition">
                    Request Early Access
                </button>
            </div>

            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {menuOpen && (
                <div className="absolute top-full right-6 mt-2 w-[90vw] max-w-xs bg-white shadow-md rounded-lg flex flex-col items-start p-4 space-y-4 md:hidden text-sm text-gray-700 z-50">
                    <Link to="/" className="hover:text-gray-900">Home</Link>
                    <Link to="/features" className="hover:text-gray-900">Features</Link>
                    <Link to="/how-it-works" className="hover:text-gray-900">How it Works</Link>
                    <Link to="/therapists" className="hover:text-gray-900">For Therapists</Link>
                    <Link to="/clinics" className="hover:text-gray-900">For Clinics</Link>
                    <Link to="/privacy" className="hover:text-gray-900">Privacy</Link>
                    <Link to="/contact" className="hover:text-gray-900">Contact</Link>
                    <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-900 text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition">
                        Request Early Access
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
