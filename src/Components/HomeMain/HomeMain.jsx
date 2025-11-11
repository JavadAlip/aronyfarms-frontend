

import React, { useState, useEffect } from "react";
import leaf from "../../assets/leaf.png";
import arrow from "../../assets/arrow.png";

import img1 from "../../assets/layer-main.png";
import img2 from "../../assets/ProjectViewMain2.png";
import img3 from "../../assets/ProjectViewMain1.png";

const HomeMain = () => {
  const images = [img1, img2, img3]; 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative 
        w-full 
        bg-cover 
        bg-center 
        font-instrument 
        min-h-[90vh]        
        md:h-screen        
        flex 
        items-center
        transition-all duration-1000 ease-in-out
      "
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 transition-opacity duration-700"></div>

      {/* Content Wrapper */}
      <div
        className="
          relative z-10 
          flex flex-col md:flex-row 
          justify-between md:justify-end  
          items-start 
          w-full 
          px-6 md:px-16 
          text-white 
          py-12 md:py-0 
          md:pb-24 lg:pt-96
        "
      >
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-end items-start gap-6 md:w-1/2 pb-10 md:pb-20 order-2 md:order-1 text-center md:text-left mx-auto md:mx-0">
          {/* Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-[14px] md:text-[16px] font-medium">
            {["Sustainable", "Transparent", "Impactful"].map((item, idx) => (
              <span key={idx} className="flex items-center gap-2 px-3 py-1">
                <img src={leaf} alt="leaf" className="w-3 h-5" />
                {item}
              </span>
            ))}
          </div>

          <h1 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] font-medium max-w-2xl leading-snug md:leading-tight text-center md:text-left mx-auto md:mx-0">
            Own the Land. <br /> We Farm It Naturally.
          </h1>

          {/* CTA */}
          <button className="flex items-center justify-center md:justify-start gap-3 md:gap-6 text-white text-[14px] md:text-[16px] font-normal border-b border-white pb-1 hover:gap-4 transition-all duration-300 mx-auto md:mx-0">
            Start your farmland journey today
            <img src={arrow} alt="arrow" className="w-4 h-4" />
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col justify-end text-center md:text-right md:w-1/2 mt-8 md:mt-0 order-1 md:order-2">
          <p
            className="text-[20px] sm:text-[26px] md:text-[34px] lg:text-[44px] font-medium max-w-xl mb-6 md:mb-16 mx-auto md:mx-0"
            style={{ lineHeight: "1.1" }}
          >
            Arony Farms makes <br /> farmland ownership effortless, transparent, and rewarding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
