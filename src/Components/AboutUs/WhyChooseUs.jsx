import React from 'react'
import whychoose from '../../assets/whychoose.png'
import whychoose1 from '../../assets/whychoose1.png'
import whychoose2 from '../../assets/whychoose2.png'
import whychoose3 from '../../assets/whychoose3.png'
import whychoose4 from '../../assets/whychoose4.png'
import leafgrn from "../../assets/leaf-grn.png";

const WhyChooseUs = () => {
    return (
        <div className="bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                        <img
                            src={leafgrn}
                            alt="leaf icon"
                            className="w-5 h-5 object-contain"
                        />
                        <span className="text-black text-[16px] font-medium">Why choose us</span>
                    </div>
                    <div className="flex justify-center items-center text-center px-4">
                        <div className="max-w-3xl text-left">
                            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-medium text-black leading-tight mt-4">
                                Invest with confidence.<br />
                                Grow with nature.
                            </h2>
                        </div>
                    </div>


                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Left Side Image */}
                    <div className="order-1">
                        <div className="relative h-[440px] sm:h-[490px] md:h-[540px] lg:h-[740px] rounded-md overflow-hidden shadow-2xl group">
                            <img
                                src={whychoose}
                                alt="Hands holding plant"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                    </div>

                    {/* Right Side 2x2 Feature Cards */}
                    <div className="order-2 grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Card 1 */}
                        <div className="bg-white rounded-md p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col justify-between h-[320px] sm:h-[360px]

">
                            <div className="mb-4">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden shadow-lg">
                                    <img src={whychoose1} className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-black text-[18px] sm:text-[20px] font-semibold mb-2 leading-tight">
                                    Hassle-Free Ownership
                                </h3>
                                <p className="text-[#585858] font-normal text-[14px] sm:text-[16px] leading-snug">
                                    Own fertile farmland without worrying about day-to-day operations. Our expert team manages everything — from cultivation to maintenance.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-orange-500 rounded-md p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col justify-between h-[320px] sm:h-[360px]
">
                            <div className="mb-4">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden shadow-lg">
                                    <img src={whychoose2} alt="Natural Farming" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white text-[18px] sm:text-[20px] font-semibold mb-2 leading-tight">
                                    100% Natural & Sustainable Farming
                                </h3>
                                <p className="text-white font-normal text-[14px] sm:text-[16px] leading-snug">
                                    Every acre under Arony Farms is cultivated using chemical-free and eco-friendly methods.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-green-600 rounded-md p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col justify-between h-[320px] sm:h-[360px]

">
                            <div className="mb-4">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden shadow-lg">
                                    <img src={whychoose3} alt="Transparency" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white text-[18px] sm:text-[20px] font-semibold mb-2 leading-tight">
                                    Transparency at Every Step
                                </h3>
                                <p className="text-white font-normal text-[14px] sm:text-[16px] leading-snug">
                                    You receive regular updates, progress reports, and open access to visit your farmland anytime — so you're always connected to your investment.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-md p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col justify-between h-[320px] sm:h-[360px]

">
                            <div className="mb-4">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden shadow-lg">
                                    <img src={whychoose4} alt="Diversified Investment" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-black text-[18px] sm:text-[20px] font-semibold mb-2 leading-tight">
                                    Diversified Investment Options
                                </h3>
                                <p className="text-[#585858] font-normal text-[14px] sm:text-[16px] leading-snug">
                                    Choose from a range of farmland projects — from sandalwood plantations to fruit and spice farms — allowing you to diversify your portfolio with long-term eco-positive returns.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
