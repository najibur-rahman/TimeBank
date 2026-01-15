import React from 'react';
import { LayoutDashboard, Briefcase, Bell, Calendar, Folder, User} from 'lucide-react';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
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


      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <User size={20} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Najbur Rahman</span>
              <span className="px-2 py-1 text-xs bg-gray-700 rounded">MEN-01</span>
            </div>
            <div className="mt-1">
              <span className="px-3 py-1 text-xs bg-gray-800 rounded-full">Paython & Data</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;