import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [endorsement, setEndorsement] = useState("");

  return (
    <div className="font-sans">
      {/* Navbar Section */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-8 h-[70px] flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">Student Feedback</span>
          </div>
          <div className="flex items-center gap-5">
            <Link 
              to="/find-mentors" 
              className="flex items-center gap-2 text-gray-500 text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-all"
            >
              <span>←</span> Back to Find Mentors
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Container with Gradient Background */}
      <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] flex justify-center items-center p-5 md:p-10">
        
        {/* Feedback Form Card */}
        <div className="bg-white rounded-[20px] p-8 md:p-10 w-full max-w-[800px] shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
          
          <header className="mb-8">
            <h1 className="text-[32px] font-bold text-[#333] mb-2.5 border-b-[3px] border-[#764ba2] pb-4">
              Post-Class Feedback & Rating
            </h1>
            <p className="text-[18px] text-[#666] leading-relaxed">
              Provide feedback after your class to help improve the learning experience
            </p>
          </header>

          {/* Student Header Section */}
          <div className="bg-[#f8f9fa] p-5 rounded-[10px] my-5 border-l-4 border-[#764ba2]">
            <h2 className="text-2xl font-semibold text-[#333] pl-2.5 border-l-4 border-[#667eea]">Student</h2>
            <h3 className="text-xl font-medium text-[#555] mt-4">Rate your mentor</h3>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* Mentor Rating Section */}
            <div className="mb-8">

              <div className="flex gap-4 mb-6 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`text-[50px] transition-all hover:scale-125 focus:outline-none ${
                      rating >= star 
                      ? "text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" 
                      : "text-gray-300"
                    }`}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </button>
                ))}
              </div>

              {/* Dots Progress Container */}
              <div className="flex gap-4 justify-center my-8">
                <div className="w-3 h-3 rounded-full bg-[#667eea] scale-125 transition-all"></div>
                <div className="w-3 h-3 rounded-full bg-[#e9ecef]"></div>
                <div className="w-3 h-3 rounded-full bg-[#e9ecef]"></div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mb-8">
              <h3 className="text-xl font-medium text-[#444] mb-2.5">
                How was the Mentor ?
              </h3>
              <p className="text-[#666] text-base mb-4 leading-relaxed">
                Share your thoughts about the class, what worked well, and areas for improvement.
              </p>
              <textarea
                className="w-full p-4 border-2 border-[#e9ecef] rounded-[10px] text-base focus:outline-none focus:border-[#667eea] transition-all"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Type your comments here..."
                rows={4}
              />
            </div>

            {/* Endorsement Section */}
            <div className="mb-8">
              <h3 className="text-xl font-medium text-[#444] mb-4">
                Endorsement: Did the communication work?
              </h3>
              <div className="flex gap-8">
                {["yes", "no"].map((option) => (
                  <label key={option} className="flex items-center gap-2.5 cursor-pointer text-lg text-[#555] capitalize">
                    <input
                      type="radio"
                      name="endorsement"
                      value={option}
                      checked={endorsement === option}
                      onChange={(e) => setEndorsement(e.target.value)}
                      className="w-5 h-5 accent-[#667eea] cursor-pointer"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full p-4 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-[10px] text-lg font-semibold tracking-wider hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(102,126,234,0.3)] transition-all duration-300 active:scale-95"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

