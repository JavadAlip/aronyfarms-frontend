import React from 'react'
import { Plus } from 'lucide-react'

const Blogs = () => {
  const blogs = [
    {
      category: 'Modern & Progressive',
      title: 'Growing Smarter, Farming Better.',
      description: 'Dive into insights on agri-innovation, sustainability, and modern farmland ownership — curated by experts shaping the next generation of farming.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
      categoryColor: 'bg-green-100 text-green-800'
    },
    {
      category: 'Earthy & Inspirational',
      title: 'Stories from the Soil.',
      description: 'Explore how nature, technology, and people come together to grow a more sustainable and rewarding future in agriculture.',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
      categoryColor: 'bg-orange-100 text-orange-800'
    },
    {
      category: 'Green & Fresh',
      title: 'Where Nature Meets Opportunity.',
      description: 'Discover how sustainable farming, green investments, and innovation are reshaping growth — for the planet and for you.',
      image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&q=80',
      categoryColor: 'bg-blue-100 text-blue-800'
    },
    {
      category: 'Climate & Environment',
      title: 'The future-proof climate farming.',
      description: 'Explore how climate-smart strategies are helping farmers thrive even as weather patterns shift.',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
      categoryColor: 'bg-green-100 text-green-800'
    },
    {
      category: 'Climate & Environment',
      title: 'The future-proof climate farming.',
      description: 'Explore how climate-smart strategies are helping farmers thrive even as weather patterns shift.',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
      categoryColor: 'bg-green-100 text-green-800'
    },
    {
      category: 'Why owning farmland is smarter than ever',
      title: 'Investing in Farmland: A Green Asset for the Future',
      description: 'Farmland is one of the most stable and appreciating assets. Find out how Arony Farms makes ownership effortless — blending natural growth with long-term financial and ecological returns.',
      image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800&q=80',
      categoryColor: 'bg-green-100 text-green-800'
    }
  ]

  return (
    <div className="bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Blog Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`${blog.categoryColor} px-4 py-2 rounded-full text-xs sm:text-sm font-medium`}>
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight flex-1">
                    {blog.title}
                  </h3>
                  
                  {/* Plus Icon Button */}
                  <button className="flex-shrink-0 w-10 h-10 bg-gray-100 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors group">
                    <Plus className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                  </button>
                </div>
                
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs