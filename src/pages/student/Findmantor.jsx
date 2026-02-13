import React from "react";
import { Footer } from "./footer";
import { Link, useNavigate } from "react-router-dom";

export const Findmantor = () => {
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    navigate("/profile");
  };

  const handleAISearchClick = () => {
    navigate("/ai-search");
  };

  const mentors = [
    { id: 1, name: "Nafiur Rahman", title: "Python & Data Science Mentor", rating: 4.7, reviews: 50, skills: ["Python", "Data Science", "Machine Learning", "Pandas"], description: "5+ years industry experience. Hands-on project-based teaching. Worked with startups and enterprises.", price: "3 Credits/hr" },
    { id: 2, name: "Sarah Johnson", title: "Web Development Mentor", rating: 4.9, reviews: 85, skills: ["React", "Node.js", "JavaScript", "CSS"], description: "Full-stack developer with 7+ years experience. Specializes in modern web technologies.", price: "4 Credits/hr" },
    { id: 3, name: "David Chen", title: "UI/UX Design Mentor", rating: 4.8, reviews: 42, skills: ["Figma", "UI Design", "UX Research", "Prototyping"], description: "Design lead at tech company. Focus on user-centered design and product thinking.", price: "5 Credits/hr" },
    { id: 4, name: "Michael Rodriguez", title: "Mobile App Development Mentor", rating: 4.6, reviews: 38, skills: ["React Native", "Flutter", "iOS", "Android"], description: "Mobile app developer with expertise in cross-platform development and native apps.", price: "4 Credits/hr" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] font-sans">
      {/* Navbar Section */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 w-full">
        <div className="flex justify-between items-center px-8 h-[70px] w-full mx-auto">
          <div className="flex items-center">
            <span className="text-xl font-bold text-[#333]">Welcome Back, Emon!</span>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/stu_dashboard" className="flex items-center gap-2 text-[#666] border border-[#ddd] px-4 py-2 rounded transition-all hover:bg-[#f5f5f5] hover:text-[#333] text-sm">
              <span>←</span> Back to Dashboard
            </Link>
            <div 
              className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer"
              onClick={handleAvatarClick}
            >
              E
            </div>
          </div>
        </div>
      </nav>

      <div className="p-4 w-full">
        {/* Hero Section */}
        <div className="text-center py-4">
          <h1 className="text-[2.5rem] text-[#333] font-bold">Find the Perfect Mentor</h1>
          <p className="text-[1.1rem] text-[#666] max-w-[600px] mx-auto mt-2 leading-relaxed">
            Connect with expert mentors in any field. Learn at your own pace.
          </p>
        </div>

        {/* Search Bar Section */}
        <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-xl p-8 mb-8 shadow-[0_4px_20px_rgba(102,126,234,0.3)]">
          <div className="w-[80%] mx-auto flex gap-4 items-center">
            <div className="flex-1 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666]">🔍</span>
              <input
                type="text"
                className="w-full p-4 pl-12 rounded-lg text-base bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] border-none outline-none"
                placeholder="Search by skill (Python, UI/UX, Marketing...)"
              />
            </div>
            <button 
              className="px-6 py-4 bg-sky-400 text-white rounded-lg text-base font-semibold hover:-translate-y-0.5 transition-transform flex items-center gap-2"
              onClick={handleAISearchClick}
            >
              ✨ Try AI-Powered Search
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 max-w-[1400px] mx-auto w-full">
          
          {/* Left Side: Filter Panel */}
          <aside className="bg-sky-200/50 rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.05)] h-fit sticky top-8">
            <h3 className="text-[1.3rem] font-bold mb-6 pb-3 border-b-2 border-[#f0f0f0]">Smart Filters</h3>

            {/* Filter Groups */}
            {[
              { title: "Learning Goals", options: ["Career Advancement", "Project-based Learning", "Skill Foundation", "Speed Problem Solving"] },
              { title: "Category", options: ["Programming & Tech", "Media & Arts", "Language & Finance", "Business & Science"] },
              { title: "Availability", options: ["Availability Today", "Weekend Sessions", "Evening Sessions", "Flexible Schedule"] }
            ].map((group, idx) => (
              <div key={idx} className="mb-6">
                <h4 className="text-base font-bold mb-3">{group.title}</h4>
                <div className="space-y-2">
                  {group.options.map((opt, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer text-[0.95rem]">
                      <input type="checkbox" className="w-[18px] h-[18px] accent-[#667eea]" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            {/* Minimum Rating */}
            <div className="mb-6">
              <h4 className="text-base font-bold mb-3">Minimum Rating</h4>
              <div className="flex items-center gap-3 py-2">
                <span className="text-[1.1rem]">★★★★★</span>
                <span className="text-[0.95rem]">4.0 & above</span>
              </div>
            </div>

            <button className="w-full p-3 bg-[#667eea] text-white rounded-lg font-bold hover:bg-[#5a67d8] transition-colors shadow-md">
              Apply These Filters
            </button>
          </aside>

          {/* Mentor Results */}
          <div className="bg-white rounded-xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-[#f0f0f0]">
              <h2 className="text-2xl font-bold text-[#333]">Available Mentors</h2>
              <div className="relative">
                <select className="appearance-none p-2 px-4 pr-10 border border-[#ddd] rounded-md bg-white text-[0.95rem] text-[#555] cursor-pointer outline-none">
                  <option>Highest Rated</option>
                  <option>Most Reviews</option>
                  <option>Price: Low to High</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-[#555]">▼</div>
              </div>
            </div>

            {/* Mentor Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="bg-white border border-[#e0e0e0] rounded-[10px] p-6 transition-all hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
                  <div className="mb-4">
                    <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center text-white text-[1.8rem] font-bold">
                      {mentor.name.charAt(0)}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-[1.3rem] font-bold text-[#333]">{mentor.name}</h3>
                    <p className="text-[#666] text-[0.95rem]">{mentor.title}</p>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-amber-400">★★★★☆</span>
                    <span className="font-bold text-[#333]">{mentor.rating}</span>
                    <span className="text-[#888] text-[0.9rem]">({mentor.reviews} reviews)</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.skills.map((skill, i) => (
                      <span key={i} className="bg-[#f0f0f0] text-[#555] px-3 py-1 rounded-full text-[0.85rem] border border-[#ddd]">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="text-[#666] text-[0.95rem] leading-relaxed mb-6 h-[4.8rem] overflow-hidden">
                    {mentor.description}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-[#f0f0f0]">
                    <div className="text-[1.2rem] font-bold text-[#667eea]">{mentor.price}</div>
                    <Link
                      to={`/mentor/${mentor.id}`}
                      className="px-6 py-2.5 bg-[#667eea] text-white rounded-md text-[0.95rem] font-semibold hover:bg-[#5a67d8] transition-colors"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};