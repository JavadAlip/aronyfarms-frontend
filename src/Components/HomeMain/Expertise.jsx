import leaf from "../../assets/leaf.png";
import leafgrn from "../../assets/leaf-grn.png";
import expertise1 from "../../assets/expertise1.png";

const Expertise = () => {
    const expertiseItems = [
        {
            title: 'Precision Farm Management',
            description: 'Data-driven techniques that maximize productivity while preserving soil health.'
        },
        {
            title: 'Sustainable Irrigation Systems',
            description: 'Smart water management ensures efficient hydration without wastage.'
        },
        {
            title: 'Eco-Focused Cultivation',
            description: '100% natural, chemical-free farming that restores biodiversity and soil vitality.'
        }
    ]

    return (
        <div className="min-h-screen bg-[#fafafa] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-[70px]  font-medium text-black leading-tight">
                                Our<br />Expertise
                            </h2>

                            <p className="text-[#585858] text-[16px] font-regular">
                                We're committed to farming that respects the land,<br />
                                preserves resources, and supports future generations.
                            </p>
                        </div>

                        {/* Expertise List */}
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

                        <button className="bg-[#4BA625] hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors">
                            <img
                                src={leaf}
                                alt="leaf icon"
                                className="w-5 h-5 object-contain"
                            />
                            <span>Discover Our Projects</span>
                        </button>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={expertise1}
                                alt="Green tea plantation"
                                className="w-full h-[500px] lg:h-[600px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise