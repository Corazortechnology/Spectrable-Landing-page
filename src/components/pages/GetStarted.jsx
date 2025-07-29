
const GetStarted = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-38 py-8 bg-white">

            <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 mb-3">
                    Get Started with SpectrAble
                </h2>
                <p className="text-gray-600 text-xl mb-6">
                    Sign up today to be among the first to enhance therapy support with AI-powered insights.
                </p>
                <button className="bg-gradient-to-r from-indigo-600 to-blue-900 text-white px-6 py-3 rounded-full text-xl hover:opacity-90 transition">
                    Request Early Access
                </button>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src="/images/started.jpg"
                    alt="Get Started Graphic"
                    className="w-full max-w-sm"
                />
            </div>
        </div>
    );
};

export default GetStarted;
