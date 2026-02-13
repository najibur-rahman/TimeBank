import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Stu_header() {
  const navigate = useNavigate();

  const goToNotifications = () => {
    navigate("/notification");
  };
  const goToProfile = () => {
    navigate("/profile");
  }

  return (
    <div className="w-full rounded-b-xl bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">
            Welcome back, Najibur!
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={goToNotifications}
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 shadow-sm hover:bg-indigo-100 transition-colors"
          >
            <MdNotificationsNone className="text-xl" />
            <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-pink-500 border-2 border-white" />
          </button>

          <button className="rounded-full bg-purple-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-purple-700 transition-colors">
            Mentor to Student
          </button>

          <div className="relative flex flex-col items-center">
            <div
            onClick={goToProfile} 
            className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">
              
              N
            </div>
            <span className="mt-0.5 text-[9px] text-gray-400">
              ID: Najibur-135
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stu_header;
