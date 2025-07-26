
const DataAnalysisSection = () => {
    return (
        <>
            <section className="px-6 md:px-16 py-16 bg-white space-y-16">

                <div className="flex flex-col h-[300px] md:flex-row justify-between gap-8">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
                            AI-Powered Data <br /> Analysis
                        </h2>
                        <p className="text-gray-600 text-xl mt-6">
                            Utilize cutting-edge AI to analyze text, images, and videos,
                            providing deeper understanding and actionable insights.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="/images/analysis.jpg"
                            alt="AI Analysis Illustration"
                            className="max-w-[280px] md:h-[400px] md:max-w-[350px] w-full border-6 border-black h-auto rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </section>
            <div className="bg-[#F5F7FF] mt-30 md:mt-1 md:h-[300px] rounded-xl p-6 md:p-10 text-left">
                <h3 className="text-5xl md:text-[5xl] font-semibold text-gray-900 mt-8 mb-2">
                    Understanding <span className="text-indigo-800 text-5xl font-bold">Autism</span><br></br> Better
                </h3>
                <p className="text-gray-600 text-xl mt-6">
                    SpectrAble helps identify patterns and trends, leading to<br></br> more
                    effective interventions and better outcomes.
                </p>
            </div>
        </>
    );
};

export default DataAnalysisSection;
