import React from 'react';
import layerMain from '../../assets/layer-main1.png';
import leaf from "../../assets/leaf.png";
import leafgrn from "../../assets/leaf-grn.png";
import leafsgrn from "../../assets/leafs.png";
import { Link } from "react-router-dom";
const AboutMain1 = () => {
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
            value: '300+ Acres',
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
                        <div
                            className="relative bg-white rounded-2xl shadow-xl overflow-hidden z-20"
                            style={{ marginTop: '5rem' }}
                        >
                            {/* Main project image */}
                            <div className="relative h-[400px] sm:h-[420px] md:h-[500px] lg:h-[600px] overflow-hidden">
                                <img
                                    src={layerMain}
                                    alt="Arony Coffee Farm"
                                    className="w-full h-full object-cover"
                                />
                                {/* Slight black opacity overlay */}
                                <div className="absolute inset-0 bg-black/30"></div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 z-20">
                                    {/* Top tag */}
                                    <div className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 z-30">
                                        <span className="bg-white text-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium inline-flex items-center gap-2 shadow-md">
                                            <img
                                                src={leafgrn}
                                                alt="Leaf icon"
                                                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                            />
                                            <span>Who We Are</span>
                                        </span>
                                    </div>

                                    {/* Centered text and button */}
                                    <div className="max-w-3xl space-y-3 sm:space-y-5">
                                        <h2 className="text-[18px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-medium leading-snug">
                                            We are a team of farm management experts, agronomists, and sustainability
                                            professionals dedicated to responsible and natural farming.
                                        </h2>

                                        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal text-white leading-snug">
                                            Our expert team ensures 100% hassle-free, ecologically resilient plantation
                                            management and transparent reporting from the day you invest to the day of harvest.
                                        </p>

                                        <Link
                                            to="/project-page"
                                            className="bg-[#035925] text-white font-medium px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full inline-flex items-center gap-2 transition-colors"
                                        >
                                            <img
                                                src={leaf}
                                                alt="Leaf icon"
                                                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                            />
                                            <span className="text-[14px] sm:text-[16px]">Explore Our Projects</span>
                                        </Link>
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

export default AboutMain1;
