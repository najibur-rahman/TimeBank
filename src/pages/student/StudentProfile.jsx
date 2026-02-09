import React from "react";
import { Footer } from "./footer";
import { Link } from "react-router-dom";

export const StudentProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar Section */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-[70px] flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">
              Welcome Back, Emon!
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex gap-4 items-center">
              <Link
                to="/stu_dashboard"
                className="flex items-center gap-2 text-gray-600 text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 transition-all duration-300"
              >
                <span>←</span> Back to Dashboard
              </Link>
              <Link
                to="/edit-profile"
                className="bg-blue-600 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-all duration-300"
              >
                Edit Profile
              </Link>
            </div>
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
              E
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">User Profile</h1>
        </div>

        {/* Profile Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          
          {/* Left Main Content */}
          <div className="flex flex-col gap-8">
            
            {/* About Me Section */}
            <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                About Me
              </h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  I am a Senior Software Engineer with over 7 years of
                  experience in full-stack development. Currently working at
                  Google, I specialize in Python, React, and cloud
                  technologies. My passion is about teaching and mentoring
                  aspiring developers to help them accelerate their careers.
                </p>
                <p>
                  I believe in practical, hands-on learning and focus on
                  real-world projects rather than just theory. My mentoring
                  approach is personalized to each student's goals and
                  learning style.
                </p>
              </div>
            </section>

            {/* Skills Section */}
            <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                Skills & Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React", "Node.js", "LLVM Design", "Cloud Computing",
                  "Machine Learning", "Python", "Data Visualization"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                STUDENT STATS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-gray-50 text-center p-6 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">15 hours</div>
                  <div className="text-sm text-gray-500">Total Learned</div>
                </div>
                <div className="bg-gray-50 text-center p-6 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">16 Courses</div>
                  <div className="text-sm text-gray-500">Complete Course</div>
                </div>
                <div className="bg-gray-50 text-center p-6 border border-gray-200 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-500">Attendance</div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="flex flex-col gap-6">
            
            {/* TimeBank Widget */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100 uppercase tracking-wider text-sm">
                TimeBank
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Swap skills, not cash. Join our community of knowledge sharers.
              </p>
            </div>

            {/* Quick Links Widget */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {["How it Work", "Browse Skills", "Success Stories", "FAQ"].map((link) => (
                  <li key={link} className="text-sm text-gray-600 py-2 border-b border-gray-50 last:border-0 hover:text-blue-600 cursor-pointer transition-colors">
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Widget */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                Community
              </h3>
              <ul className="space-y-2">
                {["Events", "Blog Forum", "Partners"].map((link) => (
                  <li key={link} className="text-sm text-gray-600 py-2 border-b border-gray-50 last:border-0 hover:text-blue-600 cursor-pointer transition-colors">
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency Widget */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                Emergency
              </h3>
              <Link
                to="/emergency"
                className="block w-full text-center bg-red-50 text-red-600 border border-red-100 py-3 rounded-md font-medium hover:bg-red-100 transition-all duration-300 text-sm"
              >
                Emergency & Issues Report
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StudentProfile;