import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from 'lucide-react';


  const handleLogout = () => {
    console.log("Logged out successfully");
    navigate("/login"); 
  };

const Sidebar = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <aside className="h-full w-64 bg-[#111318] text-slate-100 flex flex-col justify-between">

      <div>
        <div className="px-5 py-4 border-b border-black/40">
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-semibold text-sky-400">
              Admin Panel
            </span>
          </div>
        </div>

        <div className="px-4 pt-4 text-xs text-slate-400 space-y-6">

          <div>
            <p className="uppercase tracking-wide text-[10px] mb-2">
              Core Modules
            </p>
            <nav className="text-sm font-medium space-y-1">
              <button
                onClick={() => handleClick("/admin_dashboard")}
                className="w-full text-left px-3 py-1.5 hover:text-slate-50"
              >
                Dashboard
              </button>
              <button
                onClick={() => handleClick("/approval")}
                className="w-full text-left px-3 py-1.5 hover:text-slate-50"
              >
                Approvals
              </button>
              <button
                onClick={() => handleClick("/management")}
                className="w-full text-left px-3 py-1.5 hover:text-slate-50"
              >
                User Management
              </button>
              <button
                onClick={() => handleClick("/admindispute")}
                className="w-full text-left px-3 py-1.5 hover:text-slate-50"
              >
                Dispute
              </button>
            </nav>

          </div>

          {/* Financial & Economy */}
          <div>
            <p className="uppercase tracking-wide text-[10px] mb-2">
              Financial &amp; Economy
            </p>
            <nav className="text-sm font-medium space-y-1">
              <button
                onClick={() => handleClick("/economy")}
                className="w-full text-left px-3 py-1.5 hover:text-slate-50"
              >
                Financial Economy
              </button>
              <button
                onClick={() => handleClick("/transactions")}
                className="w-full text-left px-3 py-1.5 hover:text-slate-50"
              >
                Total Transaction Log
              </button>
            </nav>
          </div>

          {/* System Settings */}
          <div>
            <p className="uppercase tracking-wide text-[10px] mb-2">
              System Settings
            </p>
            <nav className="text-sm font-medium space-y-1">
              <button
                onClick={() => handleClick("/category")}
                className="w-full text-left px-3 py-1.5 hover:text-slate-50"
              >
                Category Manager
              </button>
              <button
                onClick={() => handleClick("/roles")}
                className="w-full text-left px-3 py-1.5 hover:text-slate-50"
              >
                Administrators Role
              </button>
              <button
                onClick={() => handleClick("/admin_notification")}
                className="w-full text-left px-3 py-1.5 hover:text-slate-50"
              >
                Notification
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-800">
        <button 
          onClick={handleLogout}
            className="flex items-center w-full px-5 py-3.5 text-base font-medium text-red-500 hover:bg-red-50 hover:text-red-600 rounded-md transition-all duration-200 group"
            >
            <LogOut className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
              Logout
         </button>
      </div>
    </aside>
  );
};

export default Sidebar;
