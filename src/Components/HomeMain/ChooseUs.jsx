import choose1 from "../../assets/choose1.png";
import choose2 from "../../assets/choose2.png";
import choose3 from "../../assets/choose3.png";
import leafgrn from "../../assets/leaf-grn.png";
import leaf from "../../assets/leaf.png";
import cofounder1 from "../../assets/cofounder1.png";
import cofounder2 from "../../assets/cofounder2.png";

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


        <div className="flex flex-col sm:flex-row items-center justify-center relative gap-4 sm:gap-0">
          {/* Left image */}
          <div className="relative z-0 sm:-mr-2">
            <img
              src={choose1}
              alt=""
              className="w-72 h-72 sm:w-96 sm:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Center image */}
          <div className="relative z-40 sm:-mt-4">
            <img
              src={choose2}
              alt=""
              className="w-72 h-72 sm:w-96 sm:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Right image */}
          <div className="relative z-0 sm:-ml-2">
            <img
              src={choose3}
              alt=""
              className="w-72 h-72 sm:w-96 sm:h-96 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Testimonial Section1 */}
        <div className="mt-16">
          <div className="max-w-6xl mx-auto lg:max-w-7xl lg:ml-auto lg:pr-0">
            <div className="grid lg:grid-cols-2 gap-0 rounded-md overflow-hidden">
              {/* Left - Image */}
              <div className="relative flex justify-center items-center">
                <img
                  src={cofounder1}
                  alt="Co-Founder"
                  className="w-full h-auto object-contain"
                />

                {/* Black gradient overlay only at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

                {/* Text badge */}
                <div className="absolute bottom-3 left-3 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-white font-normal text-[14px]">Co-Founder</span>
                </div>
              </div>

              {/* Right - Quote */}
              <div className="bg-[#4BA625] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                {/* Top content - slightly pushed down */}
                <div className="mt-6 sm:mt-10">
                  <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
                    <span className="text-white/80 text-4xl sm:text-5xl md:text-6xl leading-none">"</span>
                    Arony Farms was built on a simple belief — that land can yield both prosperity and purpose. We're creating a new path where investors and farmers thrive together, sustainably.
                  </p>
                </div>

                {/* Bottom content - slightly moved up */}
                <div className="flex items-center justify-between mb-6 sm:mb-10">
                  <h4 className="text-white text-[24px] sm:text-[32px] md:text-[36px] leading-tight font-medium">
                    Raj
                  </h4>
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



        <div className="mt-16">
          <div className="max-w-6xl mx-auto lg:max-w-7xl lg:ml-auto lg:pr-0">
            <div className="grid lg:grid-cols-2 gap-0 rounded-md overflow-hidden">


              {/* Right - Quote */}
              <div className="bg-[#4BA625] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                {/* Top content - slightly pushed down */}
                <div className="mt-6 sm:mt-10">
                  <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
                    <span className="text-white/80 text-4xl sm:text-5xl md:text-6xl leading-none">"</span>
                    Arony Farms was built on a simple belief — that land can yield both prosperity and purpose. We're creating a new path where investors and farmers thrive together, sustainably.
                  </p>
                </div>

                {/* Bottom content - slightly moved up */}
                <div className="flex items-center justify-between mb-6 sm:mb-10">
                  <h4 className="text-white text-[24px] sm:text-[32px] md:text-[36px] leading-tight font-medium">
                     Shwetha R<br />  Gowda
                  </h4>
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
              {/* Left - Image */}
              <div className="relative flex justify-center items-center">
                <img
                  src={cofounder2}
                  alt="Co-Founder"
                  className="w-full h-auto object-contain"
                />

                {/* Black gradient overlay only at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

                {/* Text badge */}
                <div className="absolute bottom-3 left-3 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-white font-normal text-[14px]">Co-Founder</span>
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