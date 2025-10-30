import testimonial1 from "../../assets/Man.png";
import testimonial2 from "../../assets/Man.png";
import testimonial3 from "../../assets/Man.png";
import testimonial4 from "../../assets/Man.png";
import leafgrn from "../../assets/leaf-grn.png";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            image: testimonial1,
            name: "Amit Sharma",
            role: "Sandalwood Farm Owner",
            bgColor: "bg-blue-400"
        },
        {
            id: 2,
            image: testimonial2,
            name: "Amit Sharma",
            role: "Sandalwood Farm Owner",
            bgColor: "bg-green-600"
        },
        {
            id: 3,
            image: testimonial3,
            name: "Amit Sharma",
            role: "Sandalwood Farm Owner",
            bgColor: "bg-amber-700"
        },
        {
            id: 4,
            image: testimonial4,
            name: "Amit Sharma",
            role: "Sandalwood Farm Owner",
            bgColor: "bg-green-700"
        }
    ];

    return (
        <div className="w-full bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                        <img
                            src={leafgrn}
                            alt="leaf icon"
                            className="w-5 h-5 object-contain"
                        />
                        <span className="text-black text-[16px] font-medium">Watch Our Testimonials</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <h2 className="text-[40px]  font-medium text-gray-900 leading-tight">
                            Check out our testimonial<br />
                            videos, Trusted by landowners
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

                {/* Testimonial Cards - Horizontal Scroll */}
                <div className="relative">
                    <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                        <div className="flex gap-6 pb-4">
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-none w-[280px] sm:w-[320px] lg:w-[360px]"
                                >
                                    <div className={`relative ${testimonial.bgColor} rounded-3xl overflow-hidden h-[480px] sm:h-[520px] group cursor-pointer`}>
                                        {/* Background Image */}
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>

                                        {/* Top Left - Expand Button */}
                                        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                            </svg>
                                        </button>

                                        {/* Top Right - Sound Button */}
                                        <button className="absolute top-4 right-4 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                                            </svg>
                                        </button>

                                        {/* Center - Play Button */}
                                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                                            <svg className="w-7 h-7 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </button>

                                        {/* Bottom - User Info */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                                                    <p className="text-white/90 text-sm">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Navigation Dots */}
                    <div className="flex lg:hidden items-center justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 rounded-full transition-all ${index === 0 ? 'w-8 bg-green-600' : 'w-2 bg-gray-300'
                                    }`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

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

export default Testimonials