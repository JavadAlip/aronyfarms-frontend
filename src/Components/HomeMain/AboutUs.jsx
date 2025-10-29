import React from 'react'
import leaf from "../../assets/leaf.png";
import leafgrn from "../../assets/leaf-grn.png";

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
    ]

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

                        <h1 className="text-[40px] font-medium text-black" style={{ lineHeight: "1.1" }}>
                            Pioneering Managed Farmland Investments
                        </h1>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`${tag.bg} ${tag.text} px-4 py-2 rounded-md text-sm font-medium text-center`}
                                >
                                    {tag.text1}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <p className="text-gray-700 leading-relaxed">
                            At Arony Farms, we redefine what it means to own agricultural land. Our model combines the security of land ownership with the benefits of expert-managed organic farming. You invest in fertile, eco-sustainable land, and we ensure your farm thrives — naturally, profitably, and ethically.
                        </p>

                        <button className="bg-[#4BA625] hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-colors">
                            <img
                                src={leaf}
                                alt="leaf icon"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="text-[16px]">About Arony Farms</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
