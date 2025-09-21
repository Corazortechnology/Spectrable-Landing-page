import { motion } from "framer-motion";
import { Mail, Calendar, MessageSquare } from "lucide-react";
import { useState } from "react";

const contactMethods = [
    {
        label: "Email Us",
        href: "mailto:kokumassist@kokumassist.com",
        icon: <Mail className="w-5 h-5 text-indigo-600" />,
    }
];

const ContactPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/suhanachaudhary212@gmail.com",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                    },
                    body: formData,
                }
            );

            const result = await response.json();
            if (result.success === "true") {
                setIsSubmitted(true);
                e.target.reset(); // reset form after submission
            } else {
                console.log("form not submitted");
                alert("There was an error. Please try again.");
            }
        } catch (err) {
            console.error("Form error:", err);
        }
    };

    return (
        <section className="px-6 md:px-16 py-40 bg-white">
            {/* Heading */}
            <motion.h2
                className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Get in Touch
            </motion.h2>

            {/* Contact Links */}
            <div className="flex justify-center items-center">
                <div className="flex flex-col md:flex-row justify-center items-center mb-2 w-[300px]">
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
                            <span className="text-sm font-medium text-gray-700">
                                {method.label}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Form */}
            <motion.div
                className="max-w-xl mx-auto p-6 rounded-xl shadow"
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
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
                            name="email"
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
                            name="message"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#3883F5] text-white py-2 rounded-md hover:bg-[#2c6de6] transition"
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>

            {/* Modal */}
            {isSubmitted && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-opacity-30 backdrop-blur-sm"></div>

                    {/* Modal Box */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full text-center z-10"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            🎉 Form Submitted!
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Thank you for reaching out. We will get back to you soon.
                        </p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="bg-[#3883F5] text-white px-6 py-2 rounded-md hover:bg-[#2c6de6] transition"
                        >
                            OK
                        </button>
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default ContactPage;
