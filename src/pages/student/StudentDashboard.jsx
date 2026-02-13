import React, { useState } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Heart, LogOut } from "lucide-react"; 

export const StudentDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (mentorId) => {
    setFavorites(prev => ({ 
      ...prev, 
      [mentorId]: !prev[mentorId] 
    }));
  };
const handleLogout = () => {
    console.log("Logged out successfully");
    navigate("/login"); 
  };
  const menuItems = [
    { id: 1, name: "Dashboard", path: "/stu_dashboard" },
    { id: 2, name: "Find Mentors", path: "/find-mentors" },
    { id: 3, name: "My Bookings", path: "/my-bookings" },
    { id: 4, name: "Favorites", path: "/favorites" },
    { id: 5, name: "Wallet", path: "/wallet" },
    { id: 6, name: "Settings", path: "/stu_settings" },
  ];

  const mentors = [
    {
      id: 1,
      name: "Md. Najibur Rahman",
      title: "React & Rust Developer",
      rating: "4.9",
      reviews: "1200",
      specialty: "Advanced React Patterns",
      price: "$ 40/hour",
    },
    {
      id: 2,
      name: "Mahmudur Rahman Rakib",
      title: "Full Stack Developer",
      rating: "4.8",
      reviews: "850",
      specialty: "Web Development",
      price: "$ 90/hour",
    },
  ];

  const [activeItem, setActiveItem] = useState(() => {
    const currentPath = location.pathname;
    const item = menuItems.find((item) => item.path === currentPath);
    return item ? item.id : 1;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Navbar />

      {/* Main Dashboard  */}
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] flex-1 max-w-[1400px] mx-auto w-full px-5 gap-8 pt-5">

        <aside className="bg-white border border-gray-100 rounded-lg h-fit shadow-sm sticky top-[90px]">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-black">Menu</h2>
          </div>
          <nav className="py-2">
            <ul className="list-none">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`border-l-4 transition-all cursor-pointer ${
                    activeItem === item.id 
                      ? "bg-gray-50 border-custom-switch" 
                      : "border-transparent hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveItem(item.id)}
                >
                  <Link 
                    to={item.path} 
                    className={`block py-3.5 px-5 text-base font-medium ${
                      activeItem === item.id ? "text-black font-semibold" : "text-custom-blue"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Logout Section added at the bottom */}
          <div className="p-4 border-t border-gray-100">
            <button 
              onClick={handleLogout}
              className="flex items-center w-full px-5 py-3.5 text-base font-medium text-red-500 hover:bg-red-50 hover:text-red-600 rounded-md transition-all duration-200 group"
            >
              <LogOut className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="pb-8">
          <div className="flex flex-col gap-8">
            
            {/* Upcoming Class */}
            <section className="w-full bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-white px-5 py-4 border-b border-gray-100">
                <span className="text-sm font-bold text-custom-blue uppercase tracking-wider">
                  Upcoming Class
                </span>
              </div>
              <div className="p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-black mb-4 leading-tight">
                    Advance React pattern
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <span className="text-gray-500 w-[80px]">with:</span>
                      <span className="text-black font-medium">Rukon</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-gray-500 w-[80px]">Duration:</span>
                      <span className="text-black font-medium">60 minutes</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 min-w-[280px]">
                  <div>
                    <span className="text-sm text-gray-500 block mb-2">Starts in:</span>
                    <div className="flex items-center gap-1">
                      <div className="flex flex-col items-center bg-gray-50 border border-gray-100 rounded p-2 flex-1">
                        <span className="text-xl font-bold">01</span>
                        <span className="text-xs text-gray-500">h</span>
                      </div>
                      <span className="text-xl font-bold pb-4">:</span>
                      <div className="flex flex-col items-center bg-gray-50 border border-gray-100 rounded p-2 flex-1">
                        <span className="text-xl font-bold">41</span>
                        <span className="text-xs text-gray-500">m</span>
                      </div>
                      <span className="text-xl font-bold pb-4">:</span>
                      <div className="flex flex-col items-center bg-gray-50 border border-gray-100 rounded p-2 flex-1">
                        <span className="text-xl font-bold">35</span>
                        <span className="text-xs text-gray-500">s</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-black text-white rounded-md py-3 px-4 font-medium hover:bg-gray-800 transition-colors">
                    Join Class
                  </button>
                </div>
              </div>
            </section>

            {/* Mentors section */}
            <section className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-black">Booked Mentors</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mentors.map((mentor) => {
                  const isFavorite = favorites[mentor.id];

                  return (
                    <div key={mentor.id} className="relative border border-gray-100 rounded-lg p-5 hover:border-gray-200 transition-all group">

                    <div className="mb-4">
                      <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center text-white text-[1.8rem] font-bold">
                        {mentor.name.charAt(0)}
                      </div>
                    </div>

                      {/* Favorite*/}
                      <button 
                        className="absolute top-2 right-4 p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 hover:scale-110 transition-all duration-200 z-20"
                        onClick={() => toggleFavorite(mentor.id)}
                      >
                        <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                      </button>
                      
                      {/* Mentor */}
                      <button 
                        className="absolute top-14 right-6 flex items-center gap-1.5 bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-xs font-bold border border-amber-200 hover:bg-amber-600 hover:text-white transition-all shadow-sm z-10"
                        onClick={() => navigate('/feedback', { state: { mentorName: mentor.name } })}
                      >
                        <span className="text-sm">★</span> Rate Mentor
                      </button>

                      {/* Profile Header */}
                      <div className="flex items-start mb-5 pt-2">
                        <div className="w-12 h-12 bg-custom-blue rounded-full flex items-center justify-center text-white font-bold text-lg mr-3 shrink-0">
                          
                        </div>
                        <div className="flex-1 pr-20">
                          <h3 className="text-base font-semibold text-black leading-tight">{mentor.name}</h3>
                          <p className="text-sm text-gray-500 mb-2">{mentor.title}</p>
                          <div className="flex items-center gap-1 text-sm">
                            <span className="text-pink-400">★</span>
                            <span className="font-semibold">{mentor.rating}</span>
                            <span className="text-gray-400">({mentor.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="mb-4 space-y-1">
                        <div className="text-sm">
                          <span className="text-gray-500">Specializes in: </span>
                          <span className="font-medium">{mentor.specialty}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Rate: </span>
                          <span className="font-medium">{mentor.price}</span>
                        </div>
                      </div>

                      <Link
                        to={`/mentor/${mentor.id}`}
                        className="block w-full bg-black text-white text-center rounded-md py-2.5 text-sm font-medium hover:bg-custom-blue transition-colors"
                      >
                        View Profile
                      </Link>
                    </div>
                  );
                })}
              </div>
              
              <Link className="text-sm text-gray-500 hover:underline mt-4 inline-block">
                View All →
              </Link>
            </section>

            {/* Stats Section */}
            <section className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="border border-gray-100 rounded-lg p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-custom-blue lowercase">Completed Classes</span>
                    <span className="text-gray-400">«</span>
                  </div>
                  <div className="text-3xl font-bold text-black">2</div>
                </div>

                <div className="border border-gray-100 rounded-lg p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-custom-blue lowercase">Hours Learned</span>
                  </div>
                  <div className="text-3xl font-bold text-black">8</div>
                </div>

                <div className="border border-gray-100 rounded-lg p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-custom-blue lowercase">Learning streak</span>
                  </div>
                  <div className="text-3xl font-bold text-black">15 days</div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};
