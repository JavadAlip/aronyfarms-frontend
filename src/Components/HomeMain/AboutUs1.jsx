// import React, { useState, useRef, useEffect } from 'react';
// import layerMain from '../../assets/layer-main.png';
// import leaf from "../../assets/leaf.png";
// import leafgrn from "../../assets/leaf-grn.png";
// import leafsgrn from "../../assets/leafs.png";

// const AboutUs1 = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isScrolling, setIsScrolling] = useState(false);
//     const containerRef = useRef(null);

//     const projects = [
//         {
//             title: 'Arony Coffee Farm1',
//             description1: 'Arony Coffee Farm offers investors a rare opportunity to own and profit from managed coffee cultivation in India\'s most sought-after agro-forestry corridor.',
//             description2: 'Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.'
//         },
//         {
//             title: 'Arony Coffee Farm2',
//             description1: 'Arony Coffee Farm offers investors a rare opportunity to own and profit from managed coffee cultivation in India\'s most sought-after agro-forestry corridor.',
//             description2: 'Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.'
//         },
//         {
//             title: 'Arony Coffee Farm3',
//             description1: 'Arony Coffee Farm offers investors a rare opportunity to own and profit from managed coffee cultivation in India\'s most sought-after agro-forestry corridor.',
//             description2: 'Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.'
//         },
//     ];

//     const stats = [
//         {
//             icon: leafsgrn,
//             value: '98%',
//             label: 'Client satisfaction rate',
//             description: 'Transparent operations and consistent updates ensure our investors stay confident and connected.',
//         },
//         {
//             icon: leafsgrn,
//             value: '5+',
//             label: 'Farming projects managed',
//             description: 'Across diverse regions and climates, our projects embody sustainable growth and long-term value.',
//         },
//         {
//             icon: leafsgrn,
//             value: '500+ Acres',
//             label: 'Cultivated organically',
//             description: 'Every acre under Arony Farms is nurtured using 100% natural and chemical-free farming practices.',
//         },
//     ];

//     //  Infinite looping scroll logic
//     const handleWheel = (e) => {
//         e.preventDefault();
//         if (isScrolling) return;

//         const delta = e.deltaY;

//         if (Math.abs(delta) > 10) {
//             setIsScrolling(true);
//             setTimeout(() => setIsScrolling(false), 800);

//             if (delta > 0) {
//                 // Scroll down → move to next or loop to first
//                 setCurrentIndex((prev) => (prev + 1) % projects.length);
//             } else {
//                 // Scroll up → move to previous or loop to last
//                 setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
//             }
//         }
//     };

//     useEffect(() => {
//         const container = containerRef.current;
//         if (container) {
//             container.addEventListener('wheel', handleWheel, { passive: false });
//             return () => container.removeEventListener('wheel', handleWheel);
//         }
//     }, [isScrolling]);

//     //  Card stacking logic
//     const getCardStyle = (index) => {
//         const diff = index - currentIndex;

//         // Normalize difference for looping visual effect
//         const normalizedDiff = ((diff % projects.length) + projects.length) % projects.length;

//         if (normalizedDiff === 0) {
//             // Current card
//             return {
//                 transform: 'translateY(0%) scale(1)',
//                 opacity: 1,
//                 pointerEvents: 'auto',
//                 zIndex: 30,
//             };
//         } else if (normalizedDiff === 1) {
//             // Next card
//             return {
//                 transform: 'translateY(-8%) scale(0.95)',
//                 opacity: 1,
//                 pointerEvents: 'none',
//                 zIndex: 20,
//             };
//         } else if (normalizedDiff === 2) {
//             // Card after next
//             return {
//                 transform: 'translateY(-16%) scale(0.9)',
//                 opacity: 0.7,
//                 pointerEvents: 'none',
//                 zIndex: 10,
//             };
//         } else {
//             // Hidden cards
//             return {
//                 transform: 'translateY(-24%) scale(0.85)',
//                 opacity: 0,
//                 pointerEvents: 'none',
//                 zIndex: 0,
//             };
//         }
//     };

//     return (
//         <div className="min-h-screen bg-white py-0 px-3 sm:py-6 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto space-y-0 sm:space-y-10">
//                 {/* Stats Section */}
//                 <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-2 sm:mb-0">
//                     {stats.map((stat, index) => (
//                         <div
//                             key={index}
//                             className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 hover:shadow-md transition-shadow"
//                         >
//                             <div className="space-y-3">
//                                 <img
//                                     src={stat.icon}
//                                     alt="Leaf icon"
//                                     className="w-5 h-5 object-contain"
//                                 />
//                                 <h3 className="text-[46px] font-medium text-black whitespace-nowrap">{stat.value}</h3>
//                                 <p className="text-[18px] font-semibold text-black">{stat.label}</p>
//                                 <p className="text-[15px] text-[#585858] leading-tight">{stat.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Stacking Cards Section */}
//                 <div
//                     ref={containerRef}
//                     className="relative flex justify-center -mt-12 sm:pt-16 lg:pt-24"
//                     style={{ minHeight: window.innerWidth < 640 ? '400px' : '600px', perspective: '1000px' }}
//                 >

//                     <div className="relative w-full max-w-6xl sm:h-[550px]" style={{ height: '400px' }}>
//                         {projects.map((project, index) => (
//                             <div
//                                 key={index}
//                                 className="absolute top-0 left-0 w-full transition-all duration-700 ease-in-out"
//                                 style={getCardStyle(index)}
//                             >
//                                 <div className="relative w-full">
//                                     {/* Main Card */}
//                                     <div
//                                         className="relative bg-white rounded-2xl shadow-xl overflow-hidden z-20"
//                                         style={{ marginTop: '0' }}
//                                     >
//                                         {/* Project image */}
//                                         <div className="relative h-56 sm:h-[400px] lg:h-[460px] overflow-hidden">
//                                             <img
//                                                 src={layerMain}
//                                                 alt={project.title}
//                                                 className="w-full h-full object-cover"
//                                             />

//                                             {/* Overlay */}
//                                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
//                                                 {/* Top tag */}
//                                                 <div className="hidden sm:flex absolute top-16 left-5 z-30">
//                                                     <span className="bg-white text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium inline-flex items-center gap-2 shadow-md">
//                                                         <img
//                                                             src={leafgrn}
//                                                             alt="Leaf icon"
//                                                             className="w-4 h-4 object-contain"
//                                                         />
//                                                         <span className="text-[14px] font-medium">Projects</span>
//                                                     </span>
//                                                 </div>

//                                                 {/* Text and button */}
//                                                 <div className="absolute bottom-3 sm:bottom-5 lg:bottom-16 left-3 right-3 sm:left-4 sm:right-4 text-white z-20 transition-all duration-300">
//                                                     <div className="max-w-full sm:max-w-[50%] space-y-1.5 sm:space-y-3">
//                                                         <h2 className="text-[18px] sm:text-[34px] md:text-[42px] font-semibold leading-tight sm:leading-snug">
//                                                             {project.title}
//                                                         </h2>
//                                                         <p className="text-[11px] sm:text-[16px] md:text-[18px] text-white leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
//                                                             {project.description1}
//                                                         </p>
//                                                         <p className="text-[11px] sm:text-[16px] md:text-[18px] text-white leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
//                                                             {project.description2}
//                                                         </p>
//                                                         <button className="bg-[#4BA625] hover:bg-green-700 text-white font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full inline-flex items-center gap-1.5 sm:gap-2 transition-colors mt-1 sm:mt-2">
//                                                             <img
//                                                                 src={leaf}
//                                                                 alt="Leaf icon"
//                                                                 className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
//                                                             />
//                                                             <span className="text-[11px] sm:text-[14px] font-medium">View Project Details</span>
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );


// };

// export default AboutUs1;












import React, { useState, useRef, useEffect } from 'react';
import layerMain from '../../assets/layer-main.png';
import leaf from "../../assets/leaf.png";
import leafgrn from "../../assets/leaf-grn.png";
import leafsgrn from "../../assets/leafs.png";

const AboutUs1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const containerRef = useRef(null);

   

    const projects = [
        {
            title: 'Arony Coffee Farm1',
            description1: 'Arony Coffee Farm offers investors a rare opportunity to own and profit from managed coffee cultivation in India\'s most sought-after agro-forestry corridor.',
            description2: 'Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.'
        },
        {
            title: 'Arony Coffee Farm2',
            description1: 'Arony Coffee Farm offers investors a rare opportunity to own and profit from managed coffee cultivation in India\'s most sought-after agro-forestry corridor.',
            description2: 'Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.'
        },
        {
            title: 'Arony Coffee Farm3',
            description1: 'Arony Coffee Farm offers investors a rare opportunity to own and profit from managed coffee cultivation in India\'s most sought-after agro-forestry corridor.',
            description2: 'Our expert team ensures 100% hassle-free, ecologically resilient plantation management and transparent reporting from the day you invest to the day of harvest.'
        },
    ];

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

    const handleWheel = (e) => {
        e.preventDefault();
        if (isScrolling) return;

        const delta = e.deltaY;

        if (Math.abs(delta) > 10) {
            setIsScrolling(true);
            setTimeout(() => setIsScrolling(false), 800);

            if (delta > 0) {
                setCurrentIndex((prev) => (prev + 1) % projects.length);
            } else {
                setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
            }
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
            return () => container.removeEventListener('wheel', handleWheel);
        }
    }, [isScrolling]);

    const getCardStyle = (index) => {
        const diff = index - currentIndex;
        const normalizedDiff = ((diff % projects.length) + projects.length) % projects.length;

        if (normalizedDiff === 0) {
            return {
                transform: 'translateY(0%) scale(1)',
                opacity: 1,
                pointerEvents: 'auto',
                zIndex: 30,
            };
        } else if (normalizedDiff === 1) {
            return {
                transform: 'translateY(-8%) scale(0.95)',
                opacity: 1,
                pointerEvents: 'none',
                zIndex: 20,
            };
        } else if (normalizedDiff === 2) {
            return {
                transform: 'translateY(-16%) scale(0.9)',
                opacity: 0.7,
                pointerEvents: 'none',
                zIndex: 10,
            };
        } else {
            return {
                transform: 'translateY(-24%) scale(0.85)',
                opacity: 0,
                pointerEvents: 'none',
                zIndex: 0,
            };
        }
    };

    return (
        <div className="min-h-screen bg-white py-0 px-3 sm:py-6 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-0 sm:space-y-10">
                {/* Stats Section */}
                <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-24 sm:mb-0">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 hover:shadow-md transition-shadow"
                        >
                            <div className="space-y-3">
                                <img
                                    src={stat.icon}
                                    alt="Leaf icon"
                                    className="w-5 h-5 object-contain"
                                />
                                <h3 className="text-[46px] font-medium text-black whitespace-nowrap">{stat.value}</h3>
                                <p className="text-[18px] font-semibold text-black">{stat.label}</p>
                                <p className="text-[15px] text-[#585858] leading-tight">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stacking Cards Section */}
                <div
                    ref={containerRef}
                    className="relative flex justify-center pt-0 sm:pt-16 lg:pt-24"
                    style={{ minHeight: window.innerWidth < 640 ? '400px' : '600px', perspective: '1000px' }}
                >
                    <div className="relative w-full max-w-6xl sm:h-[550px]" style={{ height: '400px' }}>
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="absolute top-0 left-0 w-full transition-all duration-700 ease-in-out"
                                style={getCardStyle(index)}
                            >
                                <div className="relative w-full">
                                    <div
                                        className="relative bg-white rounded-2xl shadow-xl overflow-hidden z-20"
                                        style={{ marginTop: '0' }}
                                    >
                                        <div className="relative h-56 sm:h-[400px] lg:h-[460px] overflow-hidden">
                                            <img
                                                src={layerMain}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                                                <div className="hidden sm:flex absolute top-16 left-5 z-30">
                                                    <span className="bg-white text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium inline-flex items-center gap-2 shadow-md">
                                                        <img
                                                            src={leafgrn}
                                                            alt="Leaf icon"
                                                            className="w-4 h-4 object-contain"
                                                        />
                                                        <span className="text-[14px] font-medium">Projects</span>
                                                    </span>
                                                </div>

                                                <div className="absolute bottom-3 sm:bottom-5 lg:bottom-16 left-3 right-3 sm:left-4 sm:right-4 text-white z-20 transition-all duration-300">
                                                    <div className="max-w-full sm:max-w-[50%] space-y-1.5 sm:space-y-3">
                                                        <h2 className="text-[18px] sm:text-[34px] md:text-[42px] font-semibold leading-tight sm:leading-snug">
                                                            {project.title}
                                                        </h2>
                                                        <p className="text-[11px] sm:text-[16px] md:text-[18px] text-white leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
                                                            {project.description1}
                                                        </p>
                                                        <p className="text-[11px] sm:text-[16px] md:text-[18px] text-white leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
                                                            {project.description2}
                                                        </p>
                                                        <button className="bg-[#4BA625] hover:bg-green-700 text-white font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full inline-flex items-center gap-1.5 sm:gap-2 transition-colors mt-1 sm:mt-2">
                                                            <img
                                                                src={leaf}
                                                                alt="Leaf icon"
                                                                className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                                                            />
                                                            <span className="text-[11px] sm:text-[14px] font-medium">View Project Details</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs1;