import React, { useState, useEffect } from 'react';
import { DollarSign, Users, Star, Clock, Award, Play, ChevronRight } from 'lucide-react';

import { useNavigate } from "react-router-dom";
import Men_Sidebar from "../../components/men_layout/Men_Sidebar"
import Footer from '../../components/stu_layout/Footer';
import Men_header from "../../components/men_layout/Men_header"


const Dashboard = () => {

  const navigate = useNavigate();
  const handleStartClass = () => {
    navigate("/classroom"); // classroom.jsx route path
  };

  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 41,
    seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#e9f3f6] relative overflow-hidden">
      
      <div className="max-w-8xl mx-auto">
            <Men_header/>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
              <Men_Sidebar/>          

          {/* Right Column  */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mt-10">
              {/* Total Earnings Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-50 rounded-xl">
                    <DollarSign className="text-green-600" size={24} />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">$8,250</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-medium">Total Earnings</p>
                <div className="mt-2 flex items-center text-green-600 text-sm">
                  <ChevronRight size={16} />
                  <span>+12% from last month</span>
                </div>
              </div>

              {/* Total Students Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">742</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-medium">Total Students</p>
                <div className="mt-2 flex items-center text-blue-600 text-sm">
                  <ChevronRight size={16} />
                  <span>+32 new this week</span>
                </div>
              </div>

              {/* Average Rating Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-yellow-50 rounded-xl">
                    <Star className="text-yellow-600" size={24} />
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">4.9</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm font-medium">Average Rating</p>
                <div className="mt-2 flex items-center text-yellow-600 text-sm">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <span className="ml-2">(128 reviews)</span>
                </div>
              </div>
            </div>

            {/* Upcoming Class Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Upcoming Class</h2>
                </div>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                  Next Teaching Session
                </span>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left - Class Details */}
                <div className="lg:col-span-2">
                  {/* Mentor Name */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Najibur Rahman</h3>
                  </div>

                  {/* Course Title */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800">Paython for Data Science</h4>
                  </div>

                  {/* Duration and Credits */}
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock size={18} />
                      <span className="text-sm">1.5 hours</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Award size={18} />
                      <span className="text-sm">12 credits</span>
                    </div>
                  </div>

                  {/* Topic */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-sm text-gray-500 mb-2">Topic:</p>
                    <p className="text-gray-900 font-medium">
                      Pandas Data Manipulation and Visualization with Maigluitib
                    </p>
                  </div>

                  {/* Start Button */}
                  <button 
                  onClick={handleStartClass} // navigation handler
                  className="w-full lg:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                    <Play size={20} />
                    <span>Start Class</span>
                  </button>
                </div>

                {/* Right - Countdown Timer */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
                    <p className="text-sm font-medium text-blue-100 mb-4">Start in:</p>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="text-center">
                        <div className="text-4xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                        <div className="text-sm text-blue-200 mt-1">hours</div>
                      </div>
                      <div className="text-3xl font-bold">:</div>
                      <div className="text-center">
                        <div className="text-4xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                        <div className="text-sm text-blue-200 mt-1">minutes</div>
                      </div>
                      <div className="text-3xl font-bold">:</div>
                      <div className="text-center">
                        <div className="text-4xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                        <div className="text-sm text-blue-200 mt-1">seconds</div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Session will be recorded automatically</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;