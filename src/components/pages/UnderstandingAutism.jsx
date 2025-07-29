
const UnderstandingAutism = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-38 py-12 bg-white">

            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src="/images/chart.png"
                    alt="Autism Pattern Chart"
                    className="md:w-[500px] md:h-[300px] w-full h-auto"
                />
            </div>

            <div className="w-full md:w-1/2">
                <h3 className="text-5xl md:text-[5xl] font-semibold text-gray-900 mb-4">
                    Understanding <span className="text-indigo-800">Autism</span> Better
                </h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                    SpectrAble helps identify patterns and trends, leading to more effective interventions and better outcomes.
                </p>
            </div>

        </div>
    );
};

export default UnderstandingAutism;
