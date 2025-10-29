import React from 'react'

const Approach = () => {
  const features = [
    {
      title: 'Precision farming',
      description: 'We use data-driven insights and smart technology to help farmers monitor soil health.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80'
    },
    {
      title: 'Sustainable irrigation',
      description: 'Our advanced irrigation systems reduce water waste and support efficient crop hydration.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80'
    },
    {
      title: 'Supply chain support',
      description: 'Smarter post-harvest logistics and digital tracking systems for fresher, better-quality products.',
      image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80'
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:sticky lg:top-8">
            <div className="flex items-center gap-2">
              {/* <span className="text-green-600 text-xl">🌱</span> */}
              <span className="text-gray-700 font-medium">Our Approach</span>
            </div>
            
            <h2 className="text-[34px] sm:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight">
              Redefining farmland <br /> ownership for modern investors
            </h2>
            
            <p className="text-[#585858] leading-relaxed text-base sm:text-lg">
              At Arony Farms, we deliver end-to-end <br /> farmland investment solutions, making land <br /> ownership seamless, secure, and profitable.
            </p>
            
            <p className="text-[#585858] leading-relaxed text-base sm:text-lg">
              From soil preparation to harvest, our team <br /> handles everything while you enjoy <br /> transparent, tax-efficient returns from your <br /> natural asset.
            </p>
            
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors">
              {/* <span>🌱</span> */}
              <span>Discover our solutions</span>
            </button>
          </div>

          {/* Right Column - Feature Cards with Horizontal Scroll */}
          <div className="w-full overflow-x-auto scrollbar-hide mt-12 lg:mt-20">
            <div className="flex gap-4 sm:gap-6 pb-4 min-w-max">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group flex-shrink-0 w-72 sm:w-80 lg:w-[450px] xl:w-[500px] h-80 sm:h-96 lg:h-[450px]"
                >
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors">
                        <span className="text-gray-900 text-xl">+</span>
                      </button>
                    </div>
                    
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white space-y-2">
                      <h3 className="text-[20px] font-semibold">{feature.title}</h3>
                      <p className="text-[14px] font-normal leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

export default Approach