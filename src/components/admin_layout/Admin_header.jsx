import React from "react";
import { Bell, ChevronDown } from "lucide-react"; // CHANGE: Lucide icons
import { useNavigate } from "react-router-dom";

const AdminTopBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between block ml-70 bg-white px-6 py-4">

      <h1 className="text-2xl font-semibold text-slate-900">
        Welcome back, Najibur!
      </h1>

      <div className="flex items-center gap-6">

        <button
          onClick={() => navigate("/admin_notification")} 
          className="relative"
        >
          <div className="h-9 w-9 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-600">

            <Bell className="w-5 h-5" />
          </div>
          <span className="absolute -top-1 -right-1 h-5 min-w-[20px] rounded-full bg-pink-500 px-1.5 text-[11px] font-semibold text-white flex items-center justify-center">
            5
          </span>
        </button>

        <div className="relative flex flex-col items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">
            N
          </div>
          
          <span className="mt-0.5 text-[9px] text-gray-400">
            ID: Najibur-135
          </span>
        </div>

      </div>
    </div>
  );
};

export default AdminTopBar;
