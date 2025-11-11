
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import leaf from "../../assets/leaf.png";
import leafgrn from "../../assets/leaf-grn.png";
import expertise1 from "../../assets/expertise1.png";
import expertise2 from "../../assets/approach3.png";
import expertise3 from "../../assets/approach1.png";

const Expertise = () => {
  const expertiseItems = [
    {
      title: "Precision Farm Management",
      description:
        "Data-driven techniques that maximize productivity while preserving soil health.",
    },
    {
      title: "Sustainable Irrigation Systems",
      description:
        "Smart water management ensures efficient hydration without wastage.",
    },
    {
      title: "Eco-Focused Cultivation",
      description:
        "100% natural, chemical-free farming that restores biodiversity and soil vitality.",
    },
  ];

  const images = [expertise1, expertise2, expertise3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    //  Show each image for 2 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );
    }, 2000); // 2000ms = 2 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-[70px] font-medium text-black leading-tight">
                Our
                <br />
                Expertise
              </h2>

              <p className="text-[#585858] text-[16px] font-regular">
                We're committed to farming that respects the land,
                <br />
                preserves resources, and supports future generations.
              </p>
            </div>

            <div className="space-y-6">
              {expertiseItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start gap-3">
                    <img
                      src={leafgrn}
                      alt="leaf icon"
                      className="w-5 h-5 object-contain"
                    />
                    <div className="space-y-1">
                      <h3 className="text-[20px] font-semibold text-black">
                        {item.title}
                      </h3>
                      <p className="text-[#585858] text-[14px] font-normal leading-tight">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Button with Link to /project-page */}
            <Link
              to="/project-page"
              className="bg-[#4BA625] hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
            >
              <img src={leaf} alt="leaf icon" className="w-5 h-5 object-contain" />
              <span>Discover Our Projects</span>
            </Link>
          </div>

          {/* Right Column - Auto Image Scroll */}
          <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`expertise-${i}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
