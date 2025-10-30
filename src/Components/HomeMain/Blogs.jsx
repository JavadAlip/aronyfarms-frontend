import React, { useState } from 'react'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import leafgrn from "../../assets/leaf-grn.png";
import leaf from "../../assets/leaf.png";

const Blogs = () => {
    const [expandedBlog, setExpandedBlog] = useState(null);

    const blogs = [
        {
            id: 1,
            category: "Sustainable Farming",
            title: "Building agricultural supply chains",
            description:
                "Explore how smart logistics and farm-to-market tools boost global market reach and reduce losses.",
            image: blog1,
            categoryColor: "bg-green-600",
        },
        {
            id: 2,
            category: "Technology & Innovation",
            title: "Sustainable irrigation techniques",
            description:
                "Discover cost-effective and eco-friendly irrigation systems that waste while improving crop output.",
            image: blog2,
            categoryColor: "bg-green-700",
        },
        {
            id: 3,
            category: "Climate & Environment",
            title: "The future-proof climate farming",
            description:
                "Explore how climate-smart strategies are helping farmers thrive even as weather patterns shift.",
            image: blog3,
            categoryColor: "bg-green-500",
        },
    ];

    const toggleExpand = (id) => {
        setExpandedBlog(expandedBlog === id ? null : id);
    };

    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:border-green-500 transition-colors w-fit">
                            <img
                                src={leafgrn}
                                alt="leaf icon"
                                className="w-5 h-5 object-contain"
                            />
                            <span className="text-black text-[16px] font-medium">Blogs</span>
                        </div>
                        <h2 className="text-[40px]  font-medium text-black">
                            Our Latest Blogs
                        </h2>
                    </div>
                    <button className="bg-[#4BA625] hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors">
                        <img
                            src={leaf}
                            alt="leaf icon"
                            className="w-5 h-5 object-contain"
                        />
                        <span>Discover our blog</span>
                    </button>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* First two blogs */}
                    {blogs.slice(0, 2).map((blog) => (
                        <div
                            key={blog.id}
                            className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
                        >
                            {/* Image */}
                            <div className="relative h-64 sm:h-72 overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span
                                        className={`backdrop-blur-md bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/30`}
                                    >
                                        {blog.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-[20px] font-semibold text-black mb-3 group-hover:text-green-700 transition-colors">
                                            {blog.title}
                                        </h3>
                                        <p className="text-[#585858] text-[16px] font-normal leading-tight">
                                            {blog.description}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => toggleExpand(blog.id)}
                                        className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 hover:bg-green-100 flex items-center justify-center transition-colors group-hover:bg-green-100"
                                    >
                                        <span className="text-gray-700 group-hover:text-green-700 text-xl font-light">
                                            {expandedBlog === blog.id ? "−" : "+"}
                                        </span>
                                    </button>
                                </div>

                                {/* Expanded content */}
                                {expandedBlog === blog.id && (
                                    <div className="mt-6 pt-6 border-t border-gray-200 animate-fadeIn">
                                        <p className="text-gray-700 leading-relaxed">
                                            Learn more about {blog.title.toLowerCase()} and how it's
                                            transforming agriculture. Our experts share insights and
                                            practical strategies for sustainable farming practices.
                                        </p>
                                        <button className="mt-4 text-green-700 font-semibold hover:text-green-800 inline-flex items-center gap-2 transition-colors">
                                            Read full article
                                            <span>→</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    {/* Third blog */}
                    <div className="lg:col-span-2">
                        <div className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                            <div className="relative h-64 sm:h-80 lg:h-64 overflow-hidden">
                                <img
                                    src={blogs[2].image}
                                    alt={blogs[2].title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span
                                        className={`backdrop-blur-md bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/30`}
                                    >
                                        {blogs[2].category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 sm:p-8">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-[20px] font-semibold text-black mb-3 group-hover:text-green-700 transition-colors">
                                            {blogs[2].title}
                                        </h3>
                                        <p className="text-[#585858] text-[16px] font-normal leading-relaxed max-w-3xl">
                                            {blogs[2].description}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => toggleExpand(blogs[2].id)}
                                        className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 hover:bg-green-100 flex items-center justify-center transition-colors group-hover:bg-green-100"
                                    >
                                        <span className="text-gray-700 group-hover:text-green-700 text-xl font-light">
                                            {expandedBlog === blogs[2].id ? "−" : "+"}
                                        </span>
                                    </button>
                                </div>

                                {expandedBlog === blogs[2].id && (
                                    <div className="mt-6 pt-6 border-t border-gray-200 animate-fadeIn">
                                        <p className="text-gray-700 leading-relaxed max-w-3xl">
                                            Learn more about {blogs[2].title.toLowerCase()} and how
                                            it's transforming agriculture. Our experts share insights
                                            and practical strategies for sustainable farming practices.
                                        </p>
                                        <button className="mt-4 text-green-700 font-semibold hover:text-green-800 inline-flex items-center gap-2 transition-colors">
                                            Read full article
                                            <span>→</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fade-in animation */}
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
        </div>
    );
};

export default Blogs;
