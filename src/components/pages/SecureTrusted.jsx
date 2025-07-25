

import { Lock, ShieldCheck } from 'lucide-react';

const SecureTrusted = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-2 bg-white">

            <div className="w-full md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-6">
                    Secure & Trusted
                </h2>

                <div className="space-y-6">

                    <div className="flex items-start space-x-4">
                        <div className="text-indigo-600">
                            <Lock size={40} />
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-gray-900">Data Encryption</h4>
                            <p className="text-[16px] text-gray-600">
                                Behavioral data is protected with end-to-end encryption
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="text-indigo-600">
                            <ShieldCheck size={40} />
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-gray-900">Access Controls</h4>
                            <p className="text-[16px] text-gray-600">
                                Granular roles and permissions ensure data privacy
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src="/images/security.jpg"
                    alt="Secure and Trusted Illustration"
                    className="w-full max-w-sm md:max-w-md"
                />
            </div>
        </section>
    );
};

export default SecureTrusted;
