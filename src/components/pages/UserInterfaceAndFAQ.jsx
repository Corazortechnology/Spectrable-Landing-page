
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const UserInterfaceAndFAQ = () => {
    const faqData = [
        {
            question: 'Who can use SpectrAble?',
            answer: 'SpectrAble is designed for caregivers, therapists, and clinic admins involved in supporting neurodivergent children.'
        },
        {
            question: 'How does the platform use AI?',
            answer: 'SpectrAble uses AI to analyze behavior patterns from daily inputs, offering smart suggestions and progress tracking.'
        },
        {
            question: 'Is my data safe with SpectrAble?',
            answer: 'Yes. We use end-to-end encryption and strict access controls to protect all user data.'
        },
        {
            question: 'How do I request early access?',
            answer: 'You can request early access by clicking the "Request Early Access" button at the top of the page.'
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="px-6 md:px-16 py-16 bg-white space-y-16">

            <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 mb-2">
                        User-Friendly Interface
                    </h2>
                    <p className="text-gray-600 text-xl">
                        Access SpectrAble on any device through<br></br> a simple, intuitive interface designed for ease of use.
                    </p>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="/images/interface.PNG"
                        alt="User Interface Illustration"
                        className="w-full max-w-sm"
                    />
                </div>
            </div>


            <div>
                <h3 className="text-2xl md:text-5xl font-semibold text-gray-900 mt-6 mb-16">
                    Frequently Asked Questions
                </h3>
                <ul className="space-y-4">
                    {faqData.map((faq, idx) => (
                        <li key={idx} className="border-b border-gray-200 pb-3">
                            <button
                                className="w-full flex items-center justify-between text-left hover:text-indigo-800 transition"
                                onClick={() => toggleFAQ(idx)}
                            >
                                <span className="text-sm md:text-base text-gray-800 font-medium">{faq.question}</span>
                                {openIndex === idx ? (
                                    <ChevronDown size={18} className="text-gray-500" />
                                ) : (
                                    <ChevronRight size={18} className="text-gray-500" />
                                )}
                            </button>

                            {openIndex === idx && (
                                <p className="mt-3 text-sm text-gray-600 transition-all duration-300">
                                    {faq.answer}
                                </p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default UserInterfaceAndFAQ;
