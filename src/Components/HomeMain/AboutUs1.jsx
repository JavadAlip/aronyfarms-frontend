import React from 'react';
import layerMain from '../../assets/layer-main.png';
import layer2 from '../../assets/layer2.png';
import layer3 from '../../assets/layer3.png';
import leaf from "../../assets/leaf.png";
import leafgrn from "../../assets/leaf-grn.png";
import leafsgrn from "../../assets/leafs.png";

const AboutUs1 = () => {
    const stats = [
        {
            icon: leafsgrn,
            value: '98%',
            label: 'Client satisfaction rate',
            description: 'Transparent operations and consistent updates ensure our investors stay confident and connected.',
        },
        {
            icon: leafsgrn,
            value: '5+',
            label: 'Farming projects managed',
            description: 'Across diverse regions and climates, our projects embody sustainable growth and long-term value.',
        },
        {
            icon: leafsgrn,
            value: '500+ Acres',
            label: 'Cultivated organically',
            description: 'Every acre under Arony Farms is nurtured using 100% natural and chemical-free farming practices.',
        },
    ];

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Stats Section */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 lg:p-8 hover:shadow-md transition-shadow"
                        >
                            <div className="space-y-4">
                                <img
                                    src={stat.icon}
                                    alt="Leaf icon"
                                    className="w-5 h-5 object-contain"
                                />
                                <h3 className="text-[60px] font-medium text-black whitespace-nowrap">{stat.value}</h3>
                                <p className="text-[20px] font-semibold text-black">{stat.label}</p>
                                <p className="text-[16px] font-normal text-[#585858] leading-tight">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="relative flex justify-center">
                    <div className="relative w-full max-w-6xl">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-40 sm:h-52 rounded-2xl overflow-hidden shadow-md z-0 -translate-y-3">
                            <img
                                src={layer3}
                                alt="Background farm"
                                className="w-full h-full object-cover opacity-90"
                            />
                        </div>

                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[93%] h-44 sm:h-56 rounded-2xl overflow-hidden shadow-lg z-10 -translate-y-2">
                            <img
                                src={layer2}
                                alt="Middle layer"
                                className="w-full h-full object-cover opacity-95"
                            />
                        </div>

                        {/* Main Card */}
                        <div
                            className="relative bg-white rounded-2xl shadow-xl overflow-hidden z-20"
                            style={{ marginTop: '5rem' }}
                        >
                            {/* Main project image */}
                            <div className="relative h-80 sm:h-[420px] lg:h-[480px] overflow-hidden">
                                <img
                                    src={layerMain}
                                    alt="Arony Coffee Farm"
                                    className="w-full h-full object-cover"
                                />

                                {/* Overlay content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                                    <div className="hidden sm:flex absolute top-20 left-6 z-30">
                                        <span className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2 shadow-md">
                                            <img
                                                src={leafgrn}
                                                alt="Leaf icon"
                                                className="w-5 h-5 object-contain"
                                            />
                                            <span className="text-[16px] font-medium">Projects</span>
                                        </span>
                                    </div>

                                    {/* Text and button content */}
                                    <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 right-4 sm:right-6 text-white space-y-3 sm:space-y-4 z-20">
                                        <h2 className="text-[26px] sm:text-[36px] md:text-[48px] font-semibold leading-snug">
                                            Arony Coffee Farm
                                        </h2>
                                        <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal text-white leading-tight">
                                            <span className="block sm:hidden">
                                                Arony Coffee Farm offers investors a rare opportunity to own and profit from managed coffee cultivation in India's most sought-after agro-forestry corridor.
                                            </span>
                                            <span className="hidden sm:block">
                                                Arony Coffee Farm offers investors a rare opportunity to <br />
                                                own and profit from managed coffee cultivation in India's <br />
                                                most sought-after agro-forestry corridor.
                                            </span>
                                        </p>
                                        <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal text-white leading-tight">
                                            <span className="block sm:hidden">
                                                Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.
                                            </span>
                                            <span className="hidden sm:block">
                                                Our expert team ensures 100% hassle-free, ecologically <br />
                                                resilient plantation management and transparent reporting <br />
                                                from the day you invest to the day of harvest.
                                            </span>
                                        </p>
                                        <button className="bg-[#4BA625] hover:bg-green-700 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-full inline-flex items-center gap-2 transition-colors mt-3 sm:mt-4">
                                            <img
                                                src={leaf}
                                                alt="Leaf icon"
                                                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                            />
                                            <span className="text-[14px] sm:text-[16px] font-medium">View Project Details</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs1;