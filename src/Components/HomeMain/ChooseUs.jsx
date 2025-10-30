import choose1 from "../../assets/choosee1.png";
import choose2 from "../../assets/Avatar.png";
import choose3 from "../../assets/choosee2.png";
import leafgrn from "../../assets/leaf-grn.png";
import leaf from "../../assets/leaf.png";
import Man from "../../assets/Man.png";

const ChooseUs = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
              <img
                src={leafgrn}
                alt="leaf icon"
                className="w-5 h-5 object-contain"
              />
              <span className="text-black text-[16px] font-medium">Why choose us</span>
            </div>
          </div>

          <h2 className="text-[32px] sm:text-[40px] font-medium text-black leading-tight mt-4">
            Why Investors Trust<br />Arony Farms
          </h2>
        </div>


        {/* Feature Cards */}
        <div className="relative h-auto mb-16 flex flex-col sm:flex-row flex-wrap items-center justify-center sm:gap-6 gap-10">
        
          <div className="relative w-full sm:w-64 md:w-72 lg:w-80 h-80 sm:h-[350px] lg:h-[300px] sm:-rotate-6 transition-transform hover:scale-105 hover:-rotate-3 duration-300"
            style={{ transformOrigin: 'center center' }}>
            <div className="rounded-3xl shadow-2xl overflow-hidden h-full bg-orange-500 p-8 flex flex-col justify-between">
              <div className="w-20 h-40 rounded-xl overflow-hidden mb-4">
                <img src={choose1} alt="Sustainable Practices" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-white text-[20px] font-semibold mb-3">Sustainable Practices</h3>
                <p className="text-white text-[16px] font-normal leading-relaxed">
                  We follow eco-based natural farming with modern innovation for long-term ecological balance.
                </p>
              </div>
            </div>
          </div>

        
          <div className="relative w-full sm:w-64 md:w-72 lg:w-80 h-80 sm:h-[350px] lg:h-[300px] sm:rotate-0 transition-transform hover:scale-105 duration-300 z-10"
            style={{ transformOrigin: 'center center' }}>
            <div className="rounded-3xl shadow-2xl overflow-hidden h-full bg-white p-8 flex flex-col justify-between">
              <div className="w-20 h-40 rounded-xl overflow-hidden mb-4">
                <img src={choose2} alt="Transparent Ownership" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-black text-[20px] font-semibold mb-3">Transparent Ownership</h3>
                <p className="text-[#585858] text-[16px] font-normal leading-relaxed">
                  Every investor receives real-time updates, complete documentation, and open access to their farmland.
                </p>
              </div>
            </div>
          </div>

     
          <div className="relative w-full sm:w-64 md:w-72 lg:w-80 h-80 sm:h-[350px] lg:h-[300px] sm:rotate-6 transition-transform hover:scale-105 hover:rotate-3 duration-300"
            style={{ transformOrigin: 'center center' }}>
            <div className="rounded-3xl shadow-2xl overflow-hidden h-full bg-green-600 p-8 flex flex-col justify-between">
              <div className="w-14 h-36 overflow-hidden mb-4">
                <img src={choose3} alt="Expert Management" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-white text-[20px] font-semibold mb-3">Expert Management</h3>
                <p className="text-white text-[16px] font-normal leading-relaxed">
                  Our experienced agronomists and on-ground teams ensure every crop is nurtured with care and precision.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 rounded-md overflow-hidden shadow-2xl">
            {/* Left - Image */}
            <div className="relative h-64 sm:h-80 lg:h-[600px]">
              <img
                src={Man}
                alt="Founder CEO"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="text-white font-normal text-[14px]">Founder, CEO</span>
              </div>
            </div>

            {/* Right - Quote */}
            <div className="bg-[#4BA625] p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="space-y-6 pt-8 sm:pt-12">
                <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
                  <span className="text-white/80 text-4xl sm:text-5xl md:text-6xl leading-none">"</span>
                  Arony Farms was built on a simple belief — that land can yield both prosperity and purpose. We're creating a new path where investors and farmers thrive together, sustainably.
                </p>

                <div className="pt-10 sm:pt-20 md:pt-32 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-end">
                  <h4 className="text-white text-[24px] sm:text-[32px] md:text-[36px] leading-tight font-medium">
                    James <br /> Der Linden
                  </h4>
                  <div>
                    <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-full inline-flex items-center gap-2 transition-colors text-sm sm:text-base">
                      <img
                        src={leaf}
                        alt="leaf icon"
                        className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                      />
                      <span>Meet our team</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ChooseUs
