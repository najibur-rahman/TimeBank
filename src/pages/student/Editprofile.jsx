import React from 'react'
import { Footer } from './footer';
import { Link } from 'react-router-dom';

export const Editprofile = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar Section */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-8 h-[70px] flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">Welcome Back, Emon!</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/profile" className="flex items-center gap-2 text-gray-500 text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-all">
              <span>←</span> Back to Profile
            </Link>
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
              E
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="max-w-[900px] mx-auto p-8">
        <header className="mb-8">
          <h1 className="text-[2rem] font-bold text-[#333]">Edit Profile</h1>
        </header>

        {/* Edit Profile Form Card */}
        <div className="bg-white rounded-[10px] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
          
          {/* Personal Information Section */}
          <section className="mb-6">
            <h3 className="text-[1.2rem] font-semibold text-[#333] mb-4">Personal Information</h3>
            
            <div className="flex items-center gap-4 mb-6">
              <label className="font-semibold text-[#555] min-w-[120px]">Profile Picture</label>
              <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-white text-[1.5rem] font-bold">
                N
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <label className="font-semibold text-[#555] min-w-[120px]">Full Name</label>
              <div className="flex-1 p-[0.8rem] bg-[#f8f9fa] border border-[#e0e0e0] rounded-[4px] text-[#333]">
                Md. Najibur Rahman
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <label className="font-semibold text-[#555] min-w-[120px]">Location</label>
              <div className="flex-1 p-[0.8rem] bg-[#f8f9fa] border border-[#e0e0e0] rounded-[4px] text-[#333]">
                Sylhet, Bangladesh
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <label className="font-semibold text-[#555] min-w-[120px]">Timezone</label>
              <div className="flex-1 min-h-[40px] bg-[#f0f0f0] border border-dashed border-[#ccc] rounded-[4px]"></div>
            </div>
          </section>

          <div className="h-[1px] bg-[#e0e0e0] my-8"></div>

          {/* About Me Section */}
          <section className="mb-6">
            <h3 className="text-[1.2rem] font-semibold text-[#333] mb-4">About Me</h3>
            <div className="p-[0.8rem] bg-[#f8f9fa] border border-[#e0e0e0] rounded-[4px] text-[#333]">
              Enter your self
            </div>
          </section>

          <div className="h-[1px] bg-[#e0e0e0] my-8"></div>

          {/* Social Links Section */}
          <section className="mb-6">
            <h3 className="text-[1.2rem] font-semibold text-[#333] mb-4">Social Links</h3>
            <div className="flex items-center gap-4">
              <label className="font-semibold text-[#555] min-w-[120px]">LinkedIn Link</label>
              <div className="flex-1 p-[0.8rem] bg-[#f8f9fa] border border-[#e0e0e0] rounded-[4px] text-[#333]">
                https://linkedin.com/in/nahidnashreed
              </div>
            </div>
          </section>

          <div className="h-[1px] bg-[#e0e0e0] my-8"></div>

          {/* Stats Section */}
          <section className="flex flex-col sm:flex-row gap-8 my-6">
            <div className="flex-1 text-center p-6 bg-[#f8f9fa] border border-[#e0e0e0] rounded-lg">
              <div className="text-[0.9rem] text-[#666] mb-2">Total Learned</div>
              <div className="text-[1.5rem] font-bold text-[#007bff]">15 hours</div>
            </div>
            
            <div className="flex-1 text-center p-6 bg-[#f8f9fa] border border-[#e0e0e0] rounded-lg">
              <div className="text-[0.9rem] text-[#666] mb-2">Attendance</div>
              <div className="text-[1.5rem] font-bold text-[#007bff]">100%</div>
            </div>
          </section>

          <div className="h-[1px] bg-[#e0e0e0] my-8"></div>

          {/* Headline/Tagline Section */}
          <section className="mb-6">
            <h3 className="text-[1.2rem] font-semibold text-[#333] mb-4">Headline / Tagline</h3>
            <div className="p-[0.8rem] bg-[#f8f9fa] border border-[#e0e0e0] rounded-[4px] text-[#333]">
              Senior Software Engineer @ Google | Python & React Expert
            </div>
          </section>

          <div className="h-[1px] bg-[#e0e0e0] my-8"></div>

          {/* Action Buttons */}
          <section className="flex gap-4 my-6">
            <Link to="/stu_dashboard" className="flex-1 p-[0.8rem] bg-[#6c757d] hover:bg-[#5a6268] text-white rounded-[4px] text-center text-[0.95rem] transition-colors">
              Back to Dashboard
            </Link>
            <button className="flex-1 p-[0.8rem] bg-[#007bff] hover:bg-[#0056b3] text-white rounded-[4px] text-[0.95rem] transition-colors">
              Save Profile
            </button>
          </section>

          <div className="h-[1px] bg-[#e0e0e0] my-8"></div>

          {/* Timezone Selection Section */}
          <section className="mb-6">
            <h3 className="text-[1.2rem] font-semibold text-[#333] mb-4 text-[#07074e]">Asia/Dhaka (GMT+6)</h3>
            <div className="flex flex-col gap-2">
              <div className="p-[0.8rem] bg-[#f8f9fa] border border-[#e0e0e0] rounded-[4px] text-[#333]">Asia/Singapore (GMT+6)</div>
              <div className="p-[0.8rem] bg-[#f8f9fa] border border-[#e0e0e0] rounded-[4px] text-[#333]">America/New York (GMT+6)</div>
              <div className="p-[0.8rem] bg-[#f8f9fa] border border-[#e0e0e0] rounded-[4px] text-[#333]">Europe/London (GMT+6)</div>
            </div>
          </section>

          <div className="h-[1px] bg-[#e0e0e0] my-8"></div>

          {/* GitHub & Course Progress */}
          <section className="space-y-6">
            <div>
              <h3 className="text-[1.2rem] font-semibold text-[#333] mb-4">Github Link</h3>
              <div className="p-[0.8rem] bg-[#f8f9fa] border border-[#e0e0e0] rounded-[4px] text-[#333]">
                https://github.com/nahidnashreed
              </div>
            </div>
            
            <div className="h-[1px] bg-[#e0e0e0]"></div>

            <div>
              <h3 className="text-[1.2rem] font-semibold text-[#333] mb-4">Complete Courses</h3>
              <div className="p-[0.8rem] bg-[#f8f9fa] border border-[#e0e0e0] rounded-[4px] text-[#333]">
                16 Courses
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}