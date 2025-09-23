
import { motion } from "framer-motion";

const CancellationRefundPolicy = () => {
    return (
        <section className="bg-gray-50 px-6 md:px-16 py-40">

            <motion.h1
                className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-6 tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Cancellation & Refund Policy
            </motion.h1>

            <p className="text-sm text-gray-500 text-center mb-4">
                📅 Effective Date: <span className="font-medium">09.09.2025</span>
            </p>

            <div className="max-w-5xl mx-auto p-6 md:p-5">
                <article
                    className="prose prose-gray prose-sm md:prose-base lg:prose-lg max-w-none 
          prose-headings:font-semibold prose-headings:text-gray-900 
          prose-p:text-gray-700 prose-li:marker:text-indigo-500"
                >
                    <p>
                        SpectrAble, operated under Kokum Assist LLP, provides a subscription-based
                        digital platform for caregivers, therapists, and clinics. This policy
                        governs cancellations and refunds for payments made through our platform.
                    </p>
                    <br />

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        1. Cancellation of Subscription
                    </h2>
                    <ul>
                        <li>
                            Users (caregivers) may cancel their subscription at any time through the
                            account settings within the SpectrAble app or by contacting support at{" "}
                            <span className="font-medium">[insert support email]</span>.
                        </li>
                        <li>Cancellations stop all future auto-renewals.</li>
                        <li>
                            Users will continue to have access to the platform until the end of the
                            current billing cycle.
                        </li>
                    </ul>
                    <br />

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        2. Refunds
                    </h2>
                    <ul>
                        <li>All subscription payments are non-refundable once successfully charged.</li>
                        <li>Exceptions:</li>
                        <ul>
                            <li>Duplicate transactions due to technical error.</li>
                            <li>Erroneous or unauthorized charge confirmed after investigation.</li>
                            <li>
                                In such cases, refunds will be initiated back to the original payment method.
                            </li>
                        </ul>
                    </ul>
                    <br />

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        3. Refund Timeline
                    </h2>
                    <ul>
                        <li>Approved refunds will be processed within 7–10 business days.</li>
                        <li>
                            Timelines may vary depending on the user’s bank or payment provider.
                        </li>
                    </ul>
                    <br />

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        4. No Pro-Rata Refunds
                    </h2>
                    <p>
                        Mid-cycle cancellation does not entitle users to a pro-rata refund for unused
                        days.
                    </p>
                    <br />

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        5. Contact
                    </h2>
                    <p>For cancellations or refund-related queries, users may contact:</p>
                    <ul>
                        <li>
                            📧 Email:{" "}
                            <a
                                href="mailto:support@spectrable.com"
                                className="text-indigo-600 font-medium"
                            >
                                kokumassist@kokumassist.com
                            </a>
                        </li>
                        <li>📞 Phone: +91-XXXXXXXXXX</li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default CancellationRefundPolicy;
