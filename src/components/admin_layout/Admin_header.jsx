import React from "react";
import { FiLogOut } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const AdminTopBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between block  ml-70  bg-white px-6 py-4">

      <h1 className="text-2xl font-semibold text-slate-900">
        Welcome back, Najibur!
      </h1>

      <div className="flex items-center gap-6">
        {/* Notification bell */}
        <button
        onClick={() => navigate("/admin_notification")} 
        className="relative">
          <div className="h-9 w-9 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-600">
            <IoNotifications className="text-xl" />
          </div>
          <span className="absolute -top-1 -right-1 h-5 min-w-[20px] rounded-full bg-pink-500 px-1.5 text-[11px] font-semibold text-white flex items-center justify-center">
            5
          </span>
        </button>

        {/* Logout button */}
        <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800">
          <FiLogOut className="text-base" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminTopBar;
