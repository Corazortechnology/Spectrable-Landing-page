
import { motion } from "framer-motion";

const ShippingDeliveryPolicy = () => {
    return (
        <section className="bg-gray-50 px-6 md:px-16 py-40">

            <motion.h1
                className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-6 tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Shipping & Delivery Policy
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
                        SpectrAble, operated under Kokum Assist LLP, is a subscription-based digital
                        service platform. We do not ship or deliver any physical products.
                    </p>
                    <br />

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        1. Digital Service Delivery
                    </h2>
                    <ul>
                        <li>
                            Upon successful payment of subscription fees, users receive instant
                            access to the SpectrAble platform via their registered login credentials.
                        </li>
                        <li>
                            All features (journaling, AI suggestions, therapist interactions,
                            reports) are delivered digitally through the app.
                        </li>
                    </ul>
                    <br />

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        2. No Physical Shipping
                    </h2>
                    <ul>
                        <li>
                            As no tangible goods are sold, no shipping, courier, or physical delivery
                            is applicable to our services.
                        </li>
                        <li>
                            Users should ensure they have a compatible device and stable internet
                            connection to access services.
                        </li>
                    </ul>
                    <br />

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        3. Service Access Issues
                    </h2>
                    <ul>
                        <li>
                            If users experience access issues after payment, they must contact
                            support immediately.
                        </li>
                        <li>
                            Technical teams will assist in restoring access or validating subscription
                            activation.
                        </li>
                    </ul>
                    <br />

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        4. Contact
                    </h2>
                    <p>For queries regarding access to services:</p>
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

export default ShippingDeliveryPolicy;
