// import React from 'react';
// import leafgrn from "../../assets/leaf-grn.png";

// const Configuration = () => {
//   const plotData = [
//     {
//       configuration: '10 Guntas',
//       sba: '10,890 Sq.Ft',
//       price: 'Unlock Price'
//     },
//     {
//       configuration: '20 Guntas',
//       sba: '21,789 Sq. Ft',
//       price: 'Unlock Price'
//     }
//   ];

//   return (
//     <div className=" py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">

//           {/* Left Column - Text Content */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
//               <img
//                 src={leafgrn}
//                 alt="leaf icon"
//                 className="w-5 h-5 object-contain"
//               />
//               <span className="text-black text-[15px] sm:text-[16px] font-medium">
//                 Configurations
//               </span>
//             </div>

//             <h2 className="text-[26px] sm:text-[30px] lg:text-[34px] font-medium text-black leading-tight">
//               Tailored Plot Sizes to Match Your Investment Goals
//             </h2>

//             <p className="text-[#585858] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
//               Arony Sandalwood Farm offers flexible plot size options designed to accommodate both first-time investors and seasoned agroforestry enthusiasts. Choose the ideal plot size that fits your investment scale and long-term vision.
//             </p>
//           </div>

//           {/* Right Column - Table */}
//           <div className="lg:w-[200%] mt-8 lg:mt-20">
//             <div className=" shadow-lg overflow-hidden border border-[#CF7A19] rounded-md">

//               {/* Table Header */}
//               <div className="grid grid-cols-3 bg-[#FFF6EC] border-b-2 border-[#CF7A19]">
//                 <div className="px-4 sm:px-6 py-4 text-center">
//                   <span className="text-[#CF7A19] font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[28px]">
//                     Configuration
//                   </span>
//                 </div>
//                 <div className="px-4 sm:px-6 py-4 text-center border-l-2 border-[#CF7A19]">
//                   <span className="text-[#CF7A19] font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[28px]">
//                     SBA (Sq. Ft)
//                   </span>
//                 </div>
//                 <div className="px-4 sm:px-6 py-4 text-center border-l-2 border-[#CF7A19]">
//                   <span className="text-[#CF7A19] font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[28px]">
//                     Price
//                   </span>
//                 </div>
//               </div>

//               {/* Table Body */}
//               {plotData.map((plot, index) => (
//                 <div
//                   key={index}
//                   className={`grid grid-cols-3 ${
//                     index !== plotData.length - 1 ? 'border-b border-[#CF7A19]' : ''
//                   }`}
//                 >
//                   <div className="px-4 sm:px-6 py-5 text-center">
//                     <span className="text-black font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[28px]">
//                       {plot.configuration}
//                     </span>
//                   </div>
//                   <div className="px-4 sm:px-6 py-5 text-center border-l-2 border-[#CF7A19]">
//                     <span className="text-black font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[28px]">
//                       {plot.sba}
//                     </span>
//                   </div>
//                   <div className="px-4 sm:px-6 py-5 text-center border-l-2 border-[#CF7A19]">
//                     <span className="text-black font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[28px]">
//                       {plot.price}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Configuration;








import React, { useState } from "react";
import leafgrn from "../../assets/leaf-grn.png";

const Configuration = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlot, setSelectedPlot] = useState(null);

  const plotData = [
    {
      configuration: "10 Guntas",
      sba: "10,890 Sq.Ft",
      price: "Unlock Price",
    },
    {
      configuration: "20 Guntas",
      sba: "21,789 Sq. Ft",
      price: "Unlock Price",
    },
  ];

  const handleUnlockClick = (plot) => {
    setSelectedPlot(plot);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPlot(null);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
              <img
                src={leafgrn}
                alt="leaf icon"
                className="w-5 h-5 object-contain"
              />
              <span className="text-black text-[15px] sm:text-[16px] font-medium">
                Configurations
              </span>
            </div>

            <h2 className="text-[26px] sm:text-[30px] lg:text-[34px] font-medium text-black leading-tight">
              Tailored Plot Sizes to Match Your Investment Goals
            </h2>

            <p className="text-[#585858] text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
              Arony Sandalwood Farm offers flexible plot size options designed
              to accommodate both first-time investors and seasoned agroforestry
              enthusiasts. Choose the ideal plot size that fits your investment
              scale and long-term vision.
            </p>
          </div>

          {/* Right Column - Table */}
          <div className="lg:w-[200%] mt-8 lg:mt-20">
            <div className="shadow-lg overflow-hidden border border-[#CF7A19] rounded-md">
              {/* Table Header */}
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-[#FFF6EC] border-b-2 border-[#CF7A19]">
                <div className="px-2 sm:px-4 py-3 text-center">
                  <span className="text-[#CF7A19] font-bold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                    Configuration
                  </span>
                </div>
                <div className="px-2 sm:px-4 py-3 text-center border-l-2 border-[#CF7A19]">
                  <span className="text-[#CF7A19] font-bold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                    SBA (Sq. Ft)
                  </span>
                </div>
                <div className="px-2 sm:px-4 py-3 text-center border-l-2 border-[#CF7A19]">
                  <span className="text-[#CF7A19] font-bold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                    Price
                  </span>
                </div>
              </div>

              {/* Table Body */}
              {plotData.map((plot, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 ${index !== plotData.length - 1 ? "border-b border-[#CF7A19]" : ""
                    }`}
                >
                  <div className="px-2 sm:px-4 py-4 text-center">
                    <span className="text-black font-medium text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                      {plot.configuration}
                    </span>
                  </div>
                  <div className="px-2 sm:px-4 py-4 text-center border-l-2 border-[#CF7A19]">
                    <span className="text-black font-medium text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px]">
                      {plot.sba}
                    </span>
                  </div>
                  <div className="px-2 sm:px-4 py-4 text-center border-l-2 border-[#CF7A19]">
                    <button
                      onClick={() => handleUnlockClick(plot)}
                      className="text-black underline hover:text-[#a55f14] font-semibold text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] transition-colors"
                    >
                      {plot.price}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <h3 className="text-[#CF7A19] text-[22px] font-semibold mb-4 text-center">
              Unlock Price
            </h3>

            <p className="text-gray-700 text-center mb-4">
              You are viewing details for{" "}
              <span className="font-semibold text-black">
                {selectedPlot?.configuration}
              </span>{" "}
              plot.
            </p>

            <p className="text-gray-600 text-center text-[15px] mb-6">
              Please contact our sales team your interest to unlock
              the best price for this configuration.
            </p>

            {/* <div className="flex justify-center">
              <button
                onClick={handleCloseModal}
                className="bg-[#CF7A19] text-white px-6 py-2 rounded-full hover:bg-[#b86b16] transition-colors"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Configuration;
