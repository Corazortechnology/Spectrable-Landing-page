

const Hero = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between pl-6 md:pl-12 py-16 md:py-20 bg-white">

            <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Revolutionizing <br></br> Therapy Support <br />with AI-Powered Daily <br></br>Insights
                </h1>
                <p className="text-gray-600 mt-4 text-base md:text-lg">
                    Helping families and professionals nurture neurodivergent children through intelligent behavior tracking and therapist-led care.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <button className="bg-gradient-to-r from-indigo-600 to-blue-900 text-white px-6 py-3 rounded-full text-xl hover:opacity-90 transition">
                        Request Early Access
                    </button>
                    <button className="text-black bg-gray-100 px-6 py-3 rounded-full font-semibold text-xl">
                        Explore How It Works
                    </button>
                </div>
            </div>


            <div className="w-full md:w-1/2 flex justify-center">
                <img src="/images/hero.PNG" alt="AI Therapy Support Graphic" className="w-full max-w-md md:max-w-full" />
            </div>
        </section>
    );
};

export default Hero;
