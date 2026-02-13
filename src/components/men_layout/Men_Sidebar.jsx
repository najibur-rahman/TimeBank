import React from 'react';
import { LayoutDashboard, Briefcase, Bell, Calendar, Folder, User, LogOut} from 'lucide-react';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const handleLogout = () => {
    console.log("Logged out successfully");
    navigate("/login"); 
  };

const menuItems = [
  { icon: <LayoutDashboard size={20} />, label: "Dashboard", icon: "🏠", path: "/dashboard" },
  { icon: <Briefcase size={20} />, label: "My Gigs", icon: "💼", path: "/gigs" },
  { icon: <Bell size={20} />, label: "Request", icon: "🔔", path: "/request" },
  { icon: <Calendar size={20} />, label: "Schedule", icon: "📅", path: "/schedule" },
  { icon: <Folder size={20} />, label: "Resources", icon: "📂", path: "/resources" },
  { icon: <Folder size={20} />, label: "Dispute", icon: "⚖️", path: "/dispute" },
  { icon: "👥", label: "Community", path: "/community" },
  { icon: "⚙️", label: "Settings", path: "/settings" },
];


  return (
    <div className="w-80 bg-[#255782] text-white flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
      </div>

      {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                    ${
                      isActive
                        ? "bg-[#255782] text-white"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`
                  }
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>


          <div className="p-4 border-t border-gray-800">
            <button 
              onClick={handleLogout}
              className="flex items-center w-full px-5 py-3.5 text-base font-medium text-red-500 hover:bg-red-50 hover:text-red-600 rounded-md transition-all duration-200 group"
            >
              <LogOut className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
              Logout
            </button>
          </div>
    </div>
  );
};

export default Sidebar;