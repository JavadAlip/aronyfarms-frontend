import React, { useState } from 'react'
import faq1 from '../../assets/faq1.png'
import leaf from "../../assets/leaf.png";
import leafgrn from "../../assets/leaf-grn.png";


const Faq = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqData = [
        {
            id: 0,
            question: "What is Arony Farms?",
            answer: "Arony Farms is a managed farmland investment company that enables individuals to own agricultural land while our expert team handles all farming, maintenance, and management activities."
        },
        {
            id: 1,
            question: "How does the investment process work?",
            answer: "Arony Farms is a managed farmland investment company that enables individuals to own agricultural land while our expert team handles all farming, maintenance, and management activities."
        },
        {
            id: 2,
            question: "Who manages the farming operations?",
            answer: "Arony Farms is a managed farmland investment company that enables individuals to own agricultural land while our expert team handles all farming, maintenance, and management activities."
        },
        {
            id: 3,
            question: "What kind of crops or projects can I invest in?",
            answer: "Arony Farms is a managed farmland investment company that enables individuals to own agricultural land while our expert team handles all farming, maintenance, and management activities."
        },
        {
            id: 4,
            question: "Will I really own the land?",
            answer: "Arony Farms is a managed farmland investment company that enables individuals to own agricultural land while our expert team handles all farming, maintenance, and management activities."
        },
        {
            id: 5,
            question: "Can I visit my farmland?",
            answer: "Arony Farms is a managed farmland investment company that enables individuals to own agricultural land while our expert team handles all farming, maintenance, and management activities."
        },
        {
            id: 6,
            question: "What kind of returns can I expect?",
            answer: "Arony Farms is a managed farmland investment company that enables individuals to own agricultural land while our expert team handles all farming, maintenance, and management activities."
        },
        {
            id: 7,
            question: "Are there any maintenance or hidden fees?",
            answer: "Arony Farms is a managed farmland investment company that enables individuals to own agricultural land while our expert team handles all farming, maintenance, and management activities."
        }
    ];

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    // Split FAQs into two columns
    const leftColumnFaqs = faqData.slice(0, 4);
    const rightColumnFaqs = faqData.slice(4);

    return (
        <div className="bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header Section with Image */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">

                    {/* Left - Text Content */}
                    <div className="flex flex-col justify-center">

                        <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                            <img
                                src={leafgrn}
                                alt="leaf icon"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="text-black text-[16px] font-medium">FAQs</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-[70px] font-medium text-gray-900 leading-tight mb-6">
                            Everything you<br />
                            need to know.
                        </h2>

                        <p className="text-[#585858] text-[16px] font-normal leading-relaxed max-w-lg">
                            Explore answers to the most common queries we receive from farmers, partners, and innovators around the world.
                        </p>
                    </div>

                    {/* Right - Professional Image */}
                    <div className="relative mx-auto w-[95%] sm:w-[90%] lg:w-[85%] rounded-md overflow-hidden shadow-2xl h-64 sm:h-[360px] lg:h-[420px]">
                        <img
                            src={faq1}
                            alt="Professional"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-center space-x-3">
                            <button className="backdrop-blur-md bg-white/20 text-white font-medium px-5 py-2.5 rounded-full hover:bg-white/30 transition-colors shadow-lg flex items-center space-x-2">
                                <img
                                    src={leaf}
                                    alt="leaf icon"
                                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                />
                                <span>Driven</span>
                            </button>

                            <button className="backdrop-blur-md bg-white/20 text-white font-medium px-5 py-2.5 rounded-full hover:bg-white/30 transition-colors shadow-lg flex items-center space-x-2">
                                <img
                                    src={leaf}
                                    alt="leaf icon"
                                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                />
                                <span>Rooted</span>
                            </button>

                            <button className="backdrop-blur-md bg-white/20 text-white font-medium px-5 py-2.5 rounded-full hover:bg-white/30 transition-colors shadow-lg flex items-center space-x-2">
                                <img
                                    src={leaf}
                                    alt="leaf icon"
                                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                />
                                <span>Impactful</span>
                            </button>
                        </div>

                    </div>
                </div>

                {/* FAQ Grid - Two Columns */}
                <div className="grid lg:grid-cols-2 gap-6">

                    {/* Left Column FAQs */}
                    <div className="space-y-4">
                        {leftColumnFaqs.map((faq) => (
                            <div
                                key={faq.id}
                                className={`
                  ${openFaq === faq.id ? 'bg-[#035925]' : 'bg-white'}
                  rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl
                `}
                            >
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                                >
                                    <span className={`
                    ${openFaq === faq.id ? 'text-white' : 'text-gray-900'}
                    font-semibold text-[20px] font-semibold transition-colors
                  `}>
                                        {faq.question}
                                    </span>
                                    <span className={`
                    ${openFaq === faq.id ? 'text-white rotate-45' : 'text-gray-700'}
                    text-2xl font-light transition-all duration-300 flex-shrink-0
                  `}>
                                        +
                                    </span>
                                </button>

                                {openFaq === faq.id && (
                                    <div className="px-6 pb-5 animate-fadeIn">
                                        <p className="text-white text-[16px]  font-normal leading-tight">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Column FAQs */}
                    <div className="space-y-4">
                        {rightColumnFaqs.map((faq) => (
                            <div
                                key={faq.id}
                                className={`
                  ${openFaq === faq.id ? 'bg-[#035925]' : 'bg-white'}
                  rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl
                `}
                            >
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                                >
                                    <span className={`
                    ${openFaq === faq.id ? 'text-white' : 'text-gray-900'}
                    font-semibold text-base sm:text-lg transition-colors
                  `}>
                                        {faq.question}
                                    </span>
                                    <span className={`
                    ${openFaq === faq.id ? 'text-white rotate-45' : 'text-gray-700'}
                    text-2xl font-light transition-all duration-300 flex-shrink-0
                  `}>
                                        +
                                    </span>
                                </button>

                                {openFaq === faq.id && (
                                    <div className="px-6 pb-5 animate-fadeIn">
                                        <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

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
    )
}

export default Faq