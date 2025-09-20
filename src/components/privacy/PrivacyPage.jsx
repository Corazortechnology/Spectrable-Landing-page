
import { motion } from "framer-motion";

const PrivacyPage = () => {
    return (
        <section className="bg-gray-50 px-6 md:px-16 py-40">

            <motion.h1
                className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-6 tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Privacy Policy
            </motion.h1>

            <p className="text-sm text-gray-500 text-center mb-4">
                📅 Last modified: <span className="font-medium">09.09.2025</span>
            </p>

            <div className="max-w-5xl mx-auto p-6 md:p-5">
                <article className="max-w-none text-gray-700">

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Introduction</h2>
                    <p className="mb-5">
                        Kokum Assist LLP ("Company" or "We"), with a registered address at 601 Gopal Vishnu
                        CHS Ltd, Mahant Road, Opposite Ruia School, Vile Parle (East), Vile Parle Police Station,
                        Mumbai-400057, Maharashtra, India operates under the brand name Spectrable and provides
                        a distinct feature with the Spectrable AI Chatbot for better healthcare management. We
                        respect your privacy and are committed to protecting it through our compliance with this policy.
                    </p>
                    <p className="mb-5">
                        This policy describes the types of information we may collect from you or that you may provide
                        when you visit the website [INSERT DOMAIN NAME] (our "Website/App") and our practices
                        for collecting, using, maintaining, protecting and disclosing that information. Any reference
                        to the term “Website” shall be deemed to include the mobile application (“App”), and the
                        two shall be read together, unless the context specifically requires otherwise.
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Applicability</h2>
                    <p className="mb-5">This Privacy Policy applies to:</p>
                    <ul className="list-disc pl-6 mb-5 marker:text-indigo-500">
                        <li>Patients/Users receiving care through the Platform</li>
                        <li>Caregivers inputting daily observations</li>
                        <li>Therapists reviewing and customizing home care plans</li>
                        <li>Any other individual whose data is processed through the Platform</li>
                    </ul>
                    <p className="mb-5">
                        This policy applies to the information we collect:
                    </p>
                    <ul className="list-disc pl-6 mb-5 marker:text-indigo-500">
                        <li>On this Website</li>
                        <li>In email, text, and other electronic messages between you and this Website</li>
                        <li>Through mobile and desktop applications you download from this Website</li>
                        <li>When you interact with our advertising and applications on third-party websites and services if those applications include links to this policy</li>
                    </ul>
                    <p className="mb-5">
                        It does not apply to information collected by us offline or through any other means, including on any other website operated by Company or any third party, including our affiliates and subsidiaries.
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Children Under the Age of 18</h2>
                    <p className="mb-5">
                        Our Website is not intended for children under 18 years of age. No one under age 18 may provide any personal information to or on the Website. We do not knowingly collect personal information from children under 18. If you are under 18, do not use or provide any information on this Website. If we learn we have collected information from a child under 18 without parental consent, we will delete it. Contact us at [Put Website Link] if needed.
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Information We Collect About You</h2>
                    <p className="mb-5">
                        We collect several types of information from and about users of our Website, including:
                    </p>
                    <ul className="list-disc pl-6 mb-5 marker:text-indigo-500">
                        <li>Personal information like name, address, email, phone, social security number</li>
                        <li>About your internet connection, device, and usage details</li>
                    </ul>
                    <p className="mb-5">
                        We collect this information directly from you, automatically as you navigate through the site/app, and from third parties such as business partners.
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Information You Provide to Us</h2>
                    <p className="mb-5">
                        The information you provide may include registration data, caregiver logs, therapist notes, survey responses, support requests, feedback, transactions, and User Contributions (posted publicly at your own risk).
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Automatic Data Collection</h2>
                    <p className="mb-5">
                        As you navigate our Website, we may use cookies, web beacons, and other tracking technologies to collect information about your equipment, browsing actions, and patterns.
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Third-Party Use of Tracking Technologies</h2>
                    <p className="mb-5">
                        Some content or applications, including advertisements, on the Website are served by third parties who may collect information about you. We do not control these third-party tracking technologies.
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
                    <ul className="list-disc pl-6 mb-5 marker:text-indigo-500">
                        <li>To present our Website and its contents</li>
                        <li>To provide requested products, services, or information</li>
                        <li>To fulfill obligations and enforce rights from contracts</li>
                        <li>To notify about changes, interactive features, advertising, and personalization</li>
                    </ul>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Disclosure of Your Information</h2>
                    <ul className="list-disc pl-6 mb-5 marker:text-indigo-500">
                        <li>To subsidiaries, affiliates, contractors, service providers</li>
                        <li>To buyers/successors in mergers or asset transfers</li>
                        <li>To comply with laws, courts, and regulators</li>
                        <li>If disclosure is necessary to protect rights, property, or safety</li>
                    </ul>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Choices About Your Information</h2>
                    <p className="mb-5">
                        You can control cookies, targeted ads, promotional offers, and third-party disclosures via opt-out methods, browser settings, or by emailing [EMAIL].
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Accessing & Correcting Your Information</h2>
                    <p className="mb-5">
                        You may review, correct, or delete your personal information via account settings or by emailing [EMAIL]. Deleting personal data may require account deletion.
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Data Security</h2>
                    <p className="mb-5">
                        We secure data with firewalls, SSL encryption, and restricted access. Transmission over the internet is not 100% secure, so we cannot guarantee complete protection.
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Changes to Our Privacy Policy</h2>
                    <p className="mb-5">
                        Updates will be posted on this page with the revised date. Continued use indicates acceptance of changes.
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Contact Information</h2>
                    <p>
                        To ask questions or comment about this privacy policy, contact us at: <a href="mailto:kokumassist@kokumassist.com">kokumassist@kokumassist.com</a>
                    </p>

                </article>
            </div>
        </section>
    );
};

export default PrivacyPage;
