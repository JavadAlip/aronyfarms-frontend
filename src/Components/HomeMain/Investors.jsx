import leafgrn from "../../assets/leaf-grn.png";

const Investors = () => {
    const testimonials = [
        {
            id: 1,
            name: "Radhika N.",
            role: "Investor",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
            quote: "Owning farmland felt complicated until I found Arony Farms. They made it effortless — now I receive updates, see my land grow, and know it's farmed naturally.",
            bg: "bg-[#FAFAFA]",
            textColor: "text-black",
            size: "large"
        },
        {
            id: 2,
            name: "Amit Sharma",
            role: "Investor",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
            quote: "A transparent, reliable, and sustainable investment platform. I feel part of something bigger than profit.",
            bg: "bg-[#D07A17]",
            textColor: "text-white",
            size: "medium"
        },
        {
            id: 3,
            name: "Vijay K.",
            role: "Investor",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
            quote: "They've truly redefined what it means to invest responsibly — every step is transparent and meaningful.",
            bg: "bg-[#FAFAFA]",
            textColor: "text-black",
            size: "medium"
        },
        {
            id: 4,
            name: "Priya S.",
            role: "Investor",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
            quote: "The best decision I made was investing in sustainable farmland with Arony Farms. It's an investment in our future.",
            bg: "bg-[#4BA324]",
            textColor: "text-white",
            size: "large"
        }
    ];

    return (
        <div className="bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                        <img
                            src={leafgrn}
                            alt="leaf icon"
                            className="w-5 h-5 object-contain"
                        />
                        <span className="text-black text-[16px] font-medium">What Our Investors Told Us</span>
                    </div>
                  
                    <div className="flex items-center justify-between">
                        <h2 className="text-[40px]  leading-tight font-medium max-w-3xl">
                            Trusted by landowners and nature enthusiasts nationwide.
                        </h2>
                        <div className="hidden lg:flex items-center gap-3">
                            <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>

                {/* Horizontal Scroll Container */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none hidden sm:block"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none hidden sm:block"></div>

                    {/* Scrollable Content */}
                    <div className="overflow-x-auto scrollbar-hide pb-4">
                        <div className="flex gap-6 min-w-max px-1">
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className={`
                    ${testimonial.bg} 
                    ${testimonial.textColor}
                    ${testimonial.size === 'large' ? 'w-[320px] sm:w-[380px] lg:w-[420px] h-[380px] sm:h-[420px]' : 'w-[280px] sm:w-[320px] lg:w-[360px] h-[320px] sm:h-[360px]'}
                    rounded-3xl p-8 shadow-xl flex flex-col justify-between
                    transition-transform hover:scale-105 duration-300 flex-shrink-0
                  `}
                                >
                                    {/* Quote */}
                                    <div>
                                        <div className={`text-4xl sm:text-5xl mb-4 ${testimonial.textColor === 'text-white' ? 'text-white/60' : 'text-gray-400'}`}>

                                        </div>
                                        <p className={`text-[20px] font-semibold leading-relaxed ${testimonial.textColor === 'text-white' ? 'text-white/95' : 'text-gray-700'}`}>
                                            {testimonial.quote}
                                        </p>
                                    </div>

                                    {/* Author */}
                                    <div className="flex items-center gap-3 mt-6">
                                        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className={`font-semibold text-base ${testimonial.textColor}`}>
                                                {testimonial.name}
                                            </div>
                                            <div className={`text-sm ${testimonial.textColor === 'text-white' ? 'text-white/70' : 'text-gray-600'}`}>
                                                {testimonial.role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hide scrollbar CSS */}
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    )
}

export default Investors