import React, { useState } from 'react'
import aboutmain from '../../assets/aboutmain.png'
import leaf from "../../assets/leaf.png";
import leafgrn from "../../assets/leaf-grn.png";

const AboutMain = () => {
    const [openFaq, setOpenFaq] = useState(0);
    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <div className="bg-neutral-50 py-16  px-4 sm:px-6 lg:px-8">
            {/* ↑ Added pb-32 for more bottom space */}
            <div className="max-w-7xl mx-auto">

                {/* Header Section with Image */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Left - Text Content */}
                    <div className="flex flex-col mt-24 justify-center">
                        <div className="flex items-center gap-2 border mb-6 border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                            <img
                                src={leafgrn}
                                alt="leaf icon"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="text-black text-[16px] font-medium">About us</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-[60px] font-medium text-gray-900 leading-tight mb-6">
                            Rooted in Nature,
                            <br className="hidden sm:block" />
                            Growing with Integrity
                        </h2>

                        <p className="text-[#585858] text-[16px] font-normal leading-relaxed max-w-lg">
                            At Arony Farms, our mission is to make ethical and sustainable farmland ownership accessible to everyone. We believe farmland is more than just an asset — it’s a living ecosystem that must be nurtured responsibly.
                        </p>
                    </div>

                    {/* Right - Image Section */}
                    <div className="relative mt-7 w-[95%] sm:w-[90%] lg:w-[85%] rounded-md overflow-hidden shadow-2xl h-64 sm:h-[360px] lg:h-[420px] ml-auto lg:-mr-8">
                        <img
                            src={aboutmain}
                            alt="Professional"
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center space-x-3">
                            {["Sustainable", "Transparent", "Impactful"].map((label, i) => (
                                <button
                                    key={i}
                                    className="backdrop-blur-md bg-white/20 text-white font-medium px-5 py-2.5 rounded-full hover:bg-white/30 transition-colors shadow-lg flex items-center space-x-2"
                                >
                                    <img
                                        src={leafgrn}
                                        alt="leaf icon"
                                        className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                    />
                                    <span>{label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
        </div>
    );
};

export default AboutMain;
