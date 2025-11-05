import React, { useState, useRef } from 'react';
import { X, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import proGlyCoffee1 from "../../assets/Gallerys/coffee1.JPG";
import proGlyCoffee2 from "../../assets/Gallerys/coffee2.JPG";
import proGlyCoffee3 from "../../assets/Gallerys/coffee3.JPG";
import proGlyCoffee4 from "../../assets/Gallerys/coffee4.JPG";
import proGlyCoffee5 from "../../assets/Gallerys/coffee5.JPG";
import proGlyCoffee6 from "../../assets/Gallerys/coffee6.JPG";
import proGlyCoffee7 from "../../assets/Gallerys/coffee7.JPG";
import proGlyCoffee8 from "../../assets/Gallerys/coffee8.JPG";
import proGlyCoffee9 from "../../assets/Gallerys/coffee9.JPG";
import proGlyCoffee10 from "../../assets/Gallerys/coffee10.JPG";
import leafgrn from "../../assets/leaf-grn.png";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const galleryImages = [
        {
            id: 1,
            src: proGlyCoffee2,
            alt: 'Mountain landscape with farm',
            size: 'small'
        },
        {
            id: 2,
            src: proGlyCoffee1,
            alt: 'Green leafy vegetables',
            size: 'large'
        },
        {
            id: 3,
            src: proGlyCoffee3,
            alt: 'Agricultural farm rows',
            size: 'small'
        },
        {
            id: 4,
            src: proGlyCoffee4,
            alt: 'Rice paddy fields',
            size: 'large'
        },
        {
            id: 5,
            src: proGlyCoffee5,
            alt: 'Forest plantation',
            size: 'small'
        },
         {
            id: 6,
            src: proGlyCoffee6,
            alt: 'Forest plantation',
            size: 'large'
        },
         {
            id: 7,
            src: proGlyCoffee7,
            alt: 'Forest plantation',
            size: 'small'
        },
         {
            id: 8,
            src: proGlyCoffee8,
            alt: 'Forest plantation',
            size: 'large'
        },
         {
            id: 9,
            src: proGlyCoffee9,
            alt: 'Forest plantation',
            size: 'small'
        },
         {
            id: 10,
            src: proGlyCoffee10,
            alt: 'Forest plantation',
            size: 'large'
        }
    ];

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 400;
            const newScrollLeft = direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(
                container.scrollLeft < container.scrollWidth - container.offsetWidth - 10
            );
        }
    };

    return (
        <div className="w-full bg-gray-50 py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 md:mb-8">
                    {/* Left section with Gallery label + heading below it */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                            <img
                                src={leafgrn}
                                alt="leaf icon"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="text-black text-[16px] font-medium">Gallery</span>
                        </div>

                        <h2 className="text-[34px] md:text-2xl lg:text-[34px] font-medium text-black mt-2">
                            Project Gallery
                        </h2>
                    </div>

                    {/* Navigation Buttons - Desktop */}
                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${canScrollLeft
                                    ? 'bg-green-600 text-white hover:bg-green-700'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${canScrollRight
                                    ? 'bg-green-600 text-white hover:bg-green-700'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>


                {/* Horizontal Scrollable Gallery */}
                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex items-center gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        {galleryImages.map((image) => (
                            <div
                                key={image.id}
                                onClick={() => openLightbox(image)}
                                className={`flex-shrink-0 cursor-pointer group relative overflow-hidden ${image.size === 'large'
                                    ? 'w-[80vw] sm:w-[65vw] md:w-[450px] lg:w-[550px] h-60 md:h-[300px] lg:h-[380px]'
                                    : 'w-[65vw] sm:w-[50vw] md:w-[350px] lg:w-[420px] h-56 md:h-[280px] lg:h-[340px]'
                                    }`}
                            >

                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                    <Eye className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Indicator */}
                    <div className="flex justify-center gap-2 mt-4 md:hidden">
                        {galleryImages.map((_, index) => (
                            <div
                                key={index}
                                className="w-2 h-2 rounded-full bg-gray-300"
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
                    >
                        <X className="w-6 h-6 text-gray-900" />
                    </button>
                    <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        className="max-w-full max-h-full object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    );
};

export default Gallery;