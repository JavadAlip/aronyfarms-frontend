import React from 'react'
import leaf from "../../assets/leaf.png";
import leafgrn from "../../assets/leaf-grn.png";
import { Link } from "react-router-dom";
const AboutUs = () => {
    const tags = [
        { text1: 'Sustainable', bg: 'bg-[#F2E0CD]', text: 'text-[#585858]' },
        { text1: 'Innovative', bg: 'bg-[#D7E9CF]', text: 'text-[#585858]' },
        { text1: 'Global', bg: 'bg-[#F2E0CD]', text: 'text-[#585858]' },
        { text1: 'Reliable', bg: 'bg-[#D7E9CF]', text: 'text-[#585858]' },
        { text1: 'Efficient', bg: 'bg-[#F2E0CD]', text: 'text-[#585858]' },
        { text1: 'Impactful', bg: 'bg-[#D7E9CF]', text: 'text-[#585858]' },
        { text1: 'Adaptive', bg: 'bg-[#F2E0CD]', text: 'text-[#585858]' },
        { text1: 'Collaborative', bg: 'bg-[#D7E9CF]', text: 'text-[#585858]' },
        { text1: 'Visionary', bg: 'bg-[#F2E0CD]', text: 'text-[#585858]' }
    ];

    return (
        <div className="min-h-screen bg-[#FAFAFA] py-12 px-4 sm:px-6 lg:px-8 pt-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* About Us Tag */}
                        <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                            <img
                                src={leafgrn}
                                alt="leaf icon"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="text-black text-[16px] font-medium">About us</span>
                        </div>

                        <h1 className="text-[46px] font-medium text-black leading-tight">
                            Pioneering Managed Farmland Investments
                        </h1>

                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`${tag.bg} ${tag.text} px-3 py-1 rounded-md text-[16px] font-medium text-center`}
                                >
                                    {tag.text1}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Section 1 */}
                        <p className="text-[#585858]  text-justify text-[18px] leading-relaxed">
                            From Engineering Dreams to Cultivating Nature — a team of engineers driven by logic, deadlines, and city lights. Our days were filled with code, calculations, and caffeine. But amidst the race to build the future, we realized we were losing touch with something far more essential - Nature.
                        </p>

                        {/* Section 2 */}
                        <p className="text-[#585858]  text-justify text-[18px] leading-relaxed">
                            The peace of open skies. The rhythm of rain. The quiet satisfaction of watching something grow.
                        </p>

                        {/* Section 3 */}
                        <p className="text-[#585858]  text-justify text-[18px] leading-relaxed">
                            That realization sparked a transformation. One by one, we traded our desks for the fields, our blueprints for soil maps, and our deadlines for harvest seasons. What started as a shared weekend escape into the countryside soon became a mission — to build a bridge between urban lives and the healing power of the land. And so, Arony was born — a managed farmland company created by engineers who believe that innovation and nature can thrive together.
                        </p>

                        <Link
                            to="/about"
                            className="bg-[#4BA625] hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-colors w-fit"
                        >
                            <img
                                src={leaf}
                                alt="leaf icon"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="text-[16px]">About Arony Farms</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
