import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./footer";

export const AIsearch = () => {
    const [searchInput, setSearchInput] = useState('')
    const [aiResponse, setAiResponse] = useState('')
    
    const aiMentors = [
        { id: 1, name: "Md. Najibur Rahman", title: "Full-stack developer with 5+ years experience", specialization: "Specialized in React and Node.js", price: "3 Credits/hr" },
        { id: 2, name: "Md. Nahlian", title: "UI/UX Designer with expertise in Figma", specialization: "Adobe Creative Suite expert", price: "3 Credits/hr" },
        { id: 3, name: "Md. Eteen", title: "Native Spanish speaker with 5 years teaching", specialization: "Spanish language mentor", price: "3 Credits/hr" }
    ]

    const handleGenerate = () => {
        if (searchInput.trim()) {
            const mockResponse = `Based on your goal to learn React for modern web applications, I recommend these mentors who specialize in:
            
            • React Hooks and Functional Components
            • State Management (Redux, Context API)
            • Performance Optimization
            • Modern React Patterns`
            setAiResponse(mockResponse)
        }
    }

    const handleRegenerate = () => {
        if (searchInput.trim()) {
            const regeneratedResponse = `Based on your goal "${searchInput}", I found mentors with expertise in:
            
                        • Advanced React Techniques
                        • Next.js Framework
                        • React Testing Library
                        • TypeScript with React`
            setAiResponse(regeneratedResponse)
        }
    }

    return (
        <div className="min-h-screen bg-[#f8f9fa] font-sans flex flex-col">
            {/* Navbar */}
            <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-[1400px] mx-auto px-8 h-[70px] flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-800">Welcome Back, Emon!</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link to="/find-mentors" className="flex items-center gap-2 text-gray-500 text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-all">
                            <span>←</span> Back to Find Mentors
                        </Link>
                        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">E</div>
                    </div>
                </div>
            </nav>

            <div className="max-w-[1200px] mx-auto w-full p-8 flex-1">
                {/* Page Header */}
                <header className="text-center mb-8">
                    <h1 className="text-[2.5rem] font-bold text-[#333] mb-2 leading-tight">Advanced Search</h1>
                    <p className="text-[1.1rem] text-[#666] leading-relaxed">
                        Find the perfect mentor with AI-powered recommendations
                    </p>
                </header>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-[#e0e0e0] to-transparent my-8"></div>

                {/* AI Search Assistant Section */}
                <section className="bg-white rounded-xl p-8 shadow-[0_2px_15px_rgba(0,0,0,0.05)] mb-8 border border-gray-100">
                    <h2 className="text-2xl font-semibold text-[#333] mb-4">AI Search Assistant</h2>
                    <p className="text-[#666] mb-6 leading-relaxed">
                        Tell me what you want to learn, and I'll find the best mentors for you.
                    </p>
                    
                    <div className="flex flex-col md:flex-row gap-4 mt-6">
                        <input
                            type="text"
                            className="flex-1 p-4 border-2 border-[#e0e0e0] rounded-lg text-base focus:border-[#667eea] outline-none transition-all"
                            placeholder="e.g., I want to learn React for building modern web apps."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
                        />
                        <button 
                            className="px-8 py-4 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-lg text-base font-bold hover:-translate-y-0.5 transition-transform shadow-lg"
                            onClick={handleGenerate}
                        >
                            Generate
                        </button>
                    </div>
                </section>

                {/* AI Recommendations Results */}
                {aiResponse && (
                    <section className="bg-white rounded-xl p-8 shadow-[0_2px_15px_rgba(0,0,0,0.05)] mb-8 border border-gray-100 animate-in fade-in duration-500">
                        <h2 className="text-2xl font-semibold text-[#333] mb-4">AI Recommendations</h2>
                        <div className="bg-[#f8f9ff] border-l-4 border-[#667eea] p-6 rounded-r-lg mb-6">
                            <p className="text-[#333] leading-[1.8] whitespace-pre-line mb-6 font-medium">
                                {aiResponse}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button 
                                    className="px-6 py-2.5 bg-gray-500 hover:bg-gray-600 text-white rounded-md text-sm font-semibold transition-colors"
                                    onClick={handleRegenerate}
                                >
                                    Regenerate
                                </button>
                                <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-semibold transition-colors">
                                    Apply These Filters
                                </button>
                            </div>
                        </div>

                        {/* Skill Tags */}
                        <div className="flex flex-wrap gap-3">
                            {["React for Beginners", "Python Data Science", "UI/UX Design"].map(tag => (
                                <span key={tag} className="bg-[#f0f0f0] text-[#555] px-4 py-2 rounded-full text-sm border border-[#ddd] font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </section>
                )}

                <div className="h-[1px] bg-gradient-to-r from-transparent via-[#e0e0e0] to-transparent my-8"></div>

                {/* AI Recommended Mentors Container */}
                <section className="bg-white rounded-xl p-8 shadow-[0_2px_15px_rgba(0,0,0,0.05)] mb-8 border border-gray-100">
                    <h2 className="text-2xl font-semibold text-[#333] mb-6">AI Recommendation Mentors</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {aiMentors.map((mentor) => (
                            <div key={mentor.id} className="border border-[#e0e0e0] rounded-lg p-5 hover:border-indigo-200 hover:shadow-md transition-all">
                                <div className="py-4 border-b border-gray-50 mb-4">
                                    <h3 className="text-[1.3rem] font-bold text-[#333] mb-2">{mentor.name}</h3>
                                    <p className="text-[#666] text-[0.95rem] mb-1">{mentor.title}</p>
                                    <p className="text-[#555] text-[0.9rem] italic">{mentor.specialization}</p>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <div className="text-[1.2rem] font-bold text-[#667eea]">{mentor.price}</div>
                                    <Link to={`/mentor/${mentor.id}`} className="px-5 py-2 bg-[#667eea] hover:bg-[#5a67d8] text-white rounded-md text-sm font-semibold transition-colors">
                                        View Profile
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


            </div>

            <Footer />
        </div>
    );
};