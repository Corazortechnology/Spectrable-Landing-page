
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, MessageSquare } from 'lucide-react';

const contactMethods = [
    {
        label: 'Email Us',
        href: 'mailto:hello@spectrable.com',
        icon: <Mail className="w-5 h-5 text-indigo-600" />,
    },
    {
        label: 'WhatsApp',
        href: 'https://wa.me/91XXXXXXXXXX',
        icon: <MessageSquare className="w-5 h-5 text-green-600" />,
    },
    {
        label: 'Book a Call',
        href: 'https://calendly.com/your-link',
        icon: <Calendar className="w-5 h-5 text-blue-600" />,
    },
];

const ContactPage = () => {
    return (
        <section className="px-6 md:px-16 py-40 bg-white">

            <motion.h2
                className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Get in Touch
            </motion.h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
                {contactMethods.map((method, i) => (
                    <motion.a
                        key={i}
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 px-5 py-3 border border-gray-200 rounded-full shadow-sm hover:shadow-md transition hover:bg-gray-50"
                        whileHover={{ scale: 1.03 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        {method.icon}
                        <span className="text-sm font-medium text-gray-700">{method.label}</span>
                    </motion.a>
                ))}
            </div>

            <motion.div
                className="max-w-xl mx-auto p-6 rounded-xl shadow"
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert('Submitted! (Integrate backend/email)');
                    }}
                >
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            rows="4"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default ContactPage;
