// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import leafgrn from "../../assets/leaf-grn.png";
// import tourist from "../../assets/tourist.png";

// const Tourist = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const touristPlaces = [
//     {
//       id: 1,
//       image: tourist,
//       title: 'Lorem ipsum dolor sit amet consectetur.',
//       description: 'Lorem ipsum dolor sit amet consectetur. Porttitor amet magna nulla ac imperdiet. Dignissim interdum imperdiet dignissim aliquet nisl. Oras habitant tempor aliquam eu turpis. Phasellus sed faucibus aliquet donec ultrices quisque ornare vestibulum. Nullam maecenas egestas elit vitae purus vitae accumsan porta. Malesuada amet imperdiet velit nunc eget a vitae.',
//     },
//     {
//       id: 2,
//       image: tourist,
//       title: 'Lorem ipsum dolor sit amet consectetur2.',
//       description: 'Lorem ipsum dolor sit amet consectetur. Porttitor amet magna nulla ac imperdiet. Dignissim interdum imperdiet dignissim aliquet nisl. Oras habitant tempor aliquam eu turpis. Phasellus sed faucibus aliquet donec ultrices quisque ornare vestibulum. Nullam maecenas egestas elit vitae purus vitae accumsan porta. Malesuada amet imperdiet velit nunc eget a vitae.',
//     },
//     {
//       id: 3,
//       image: tourist,
//       title: 'Lorem ipsum dolor sit amet consectetur3.',
//       description: 'Lorem ipsum dolor sit amet consectetur. Porttitor amet magna nulla ac imperdiet. Dignissim interdum imperdiet dignissim aliquet nisl. Oras habitant tempor aliquam eu turpis. Phasellus sed faucibus aliquet donec ultrices quisque ornare vestibulum. Nullam maecenas egestas elit vitae purus vitae accumsan porta. Malesuada amet imperdiet velit nunc eget a vitae.',
//     },
//   ];

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => (prev === 0 ? touristPlaces.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === touristPlaces.length - 1 ? 0 : prev + 1));
//   };

//   const currentPlace = touristPlaces[currentIndex];

//   return (
//     <div className="w-full bg-[#F3F3F3] py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6 md:mb-10">
//           <div></div>
//           {/* Navigation Buttons */}
//           <div className="flex gap-2">
//             <button
//               onClick={handlePrevious}
//               className="w-10 h-10 rounded-full bg-[#4BA625] text-white hover:bg-green-700 flex items-center justify-center transition-all"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={handleNext}
//               className="w-10 h-10 rounded-full bg-[#4BA625] text-white hover:bg-green-700 flex items-center justify-center transition-all"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="flex flex-col md:flex-row gap-10 md:gap-14 lg:gap-20">
//           {/* Image Section */}
//           <div className="w-full md:w-1/2">
//             <div className="relative overflow-hidden shadow-lg h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
//               <img
//                 src={currentPlace.image}
//                 alt={currentPlace.title}
//                 className="w-full h-full object-cover transition-opacity duration-300"
//               />
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="w-full md:w-1/2 flex flex-col justify-center">
//             <div className="space-y-3 mb-28">
//               <div className="flex items-center gap-2 border bg-white border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
//                 <img
//                   src={leafgrn}
//                   alt="leaf icon"
//                   className="w-5 h-5 object-contain"
//                 />
//                 <span className="text-black text-[16px] font-medium">Tourist</span>
//               </div>

//               <h2 className="text-[34px] md:text-2xl lg:text-[34px] font-medium text-black">
//                 Nearby Tourist Places
//               </h2>
//             </div>

//             {/* Title */}
//             <h3 className="text-[36px] sm:text-[48px] lg:text-[60px] font-semibold text-black mb-4 md:mb-6 leading-none">
//               {currentPlace.title}
//             </h3>

//             {/* Description */}
//             <p className="text-[20px] sm:text-[22px] lg:text-[20px] text-[#585858] leading-tight">
//               {currentPlace.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tourist;


import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import leafgrn from "../../assets/leaf-grn.png";
import tourist from "../../assets/tourist.png";

const Tourist = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const touristPlaces = [
    {
      id: 1,
      image: tourist,
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Porttitor amet magna nulla ac imperdiet. Dignissim interdum imperdiet dignissim aliquet nisl. Oras habitant tempor aliquam eu turpis. Phasellus sed faucibus aliquet donec ultrices quisque ornare vestibulum. Nullam maecenas egestas elit vitae purus vitae accumsan porta. Malesuada amet imperdiet velit nunc eget a vitae.',
    },
    {
      id: 2,
      image: tourist,
      title: 'Lorem ipsum dolor sit amet consectetur2.',
      description: 'Lorem ipsum dolor sit amet consectetur. Porttitor amet magna nulla ac imperdiet. Dignissim interdum imperdiet dignissim aliquet nisl. Oras habitant tempor aliquam eu turpis. Phasellus sed faucibus aliquet donec ultrices quisque ornare vestibulum. Nullam maecenas egestas elit vitae purus vitae accumsan porta. Malesuada amet imperdiet velit nunc eget a vitae.',
    },
    {
      id: 3,
      image: tourist,
      title: 'Lorem ipsum dolor sit amet consectetur3.',
      description: 'Lorem ipsum dolor sit amet consectetur. Porttitor amet magna nulla ac imperdiet. Dignissim interdum imperdiet dignissim aliquet nisl. Oras habitant tempor aliquam eu turpis. Phasellus sed faucibus aliquet donec ultrices quisque ornare vestibulum. Nullam maecenas egestas elit vitae purus vitae accumsan porta. Malesuada amet imperdiet velit nunc eget a vitae.',
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? touristPlaces.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === touristPlaces.length - 1 ? 0 : prev + 1));
  };

  const currentPlace = touristPlaces[currentIndex];

  return (
    <div className="w-full bg-[#F3F3F3] py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-10">
          <div></div>
          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full bg-[#4BA625] text-white hover:bg-green-700 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#4BA625] text-white hover:bg-green-700 flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 lg:gap-20">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden shadow-lg h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
              <img
                src={currentPlace.image}
                alt={currentPlace.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="space-y-3 mb-28">
              <div className="flex items-center gap-2 border bg-white border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                <img
                  src={leafgrn}
                  alt="leaf icon"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-black text-[16px] font-medium">Tourist</span>
              </div>

              <h2 className="text-[34px] md:text-2xl lg:text-[34px] font-medium text-black">
                Nearby Tourist Places
              </h2>
            </div>

            {/* Title */}
            <h3 className="text-[36px] sm:text-[48px] lg:text-[60px] font-semibold text-black mb-4 md:mb-6 leading-none">
              {currentPlace.title}
            </h3>

            {/* Description */}
            <p className="text-[20px] sm:text-[22px] lg:text-[20px] text-[#585858] leading-relaxed text-justify">
              {currentPlace.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourist;