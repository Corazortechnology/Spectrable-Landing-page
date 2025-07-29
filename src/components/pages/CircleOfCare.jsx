
const CircleOfCare = () => {
    return (
<<<<<<< HEAD
        <section className="px-6 md:px-16 py-16 bg-white">
=======
        <section className="px-6 md:px-16 bg-white">
>>>>>>> 87666aa (modification in css)
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-10">
                Made for the Circle of Care
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                    {
                        img: "/images/caregivers.jpg",
                        title: "Caregivers",
                        desc: "Log daily routines, emotions & behaviors via mobile,\nReceive activity suggestions tailored by AI,\nTrigger real-time SOS alerts for immediate therapist review"
                    },
                    {
                        img: "/images/doctor.png",
                        title: "Therapists",
                        desc: "Track behavior trends and progress timelines,\nValidate and tailor AI-generated activities,\nSecure communication and session summaries"
                    },
                    {
                        img: "/images/admin.png",
                        title: "Clinic Admins",
                        desc: "Monitor system-wide usage and therapist activity,\nGenerate downloadable compliance reports,\nManage therapist and caregiver roles"
                    }
                ].map((card, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 hover:border-indigo-600 hover:shadow-xl transition-all duration-300 rounded-xl p-6 text-center group"
                    >
                        <img src={card.img} alt={card.title} className="mx-auto mb-4 h-30" />
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-blue-600 transition-all duration-300">
                            {card.title}
                        </h3>
                        <p className="text-gray-600 text-[16px] mt-2 whitespace-pre-line">
                            {card.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CircleOfCare;


// const CircleOfCare = () => {
//     return (
//         <section className="px-6 md:px-16 bg-white">
//             <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-10">
//                 Made for the Circle of Care
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

//                 <div className="bg-white shadow-lg rounded-xl p-6 text-center">
//                     <img src="/images/caregivers.jpg" alt="Caregivers" className="mx-auto mb-4 h-30" />
//                     <h3 className="text-xl font-bold text-gray-900">Caregivers</h3>
//                     <p className="text-gray-600 text-[16px] mt-2">
//                         Log daily routines, emotions & behaviors via mobile,<br />
//                         Receive activity suggestions tailored by AI,<br />
//                         Trigger real-time SOS alerts for immediate therapist review
//                     </p>
//                 </div>

//                 <div className="bg-white shadow-lg rounded-xl p-6 text-center">
//                     <img src="/images/doctor.png" alt="Therapists" className="mx-auto mb-4 h-30" />
//                     <h3 className="text-xl font-bold text-gray-900">Therapists</h3>
//                     <p className="text-gray-600 text-[16px] mt-2">
//                         Track behavior trends and progress timelines,<br />
//                         Validate and tailor AI-generated activities,<br />
//                         Secure communication and session summaries
//                     </p>
//                 </div>

//                 <div className="bg-white shadow-lg rounded-xl p-6 text-center">
//                     <img src="/images/admin.png" alt="Clinic Admins" className="mx-auto mb-4 h-30" />
//                     <h3 className="text-xl font-bold text-gray-900">Clinic Admins</h3>
//                     <p className="text-gray-600 text-[16px] mt-2">
//                         Monitor system-wide usage and therapist activity,<br />
//                         Generate downloadable compliance reports,<br />
//                         Manage therapist and caregiver roles
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CircleOfCare;
