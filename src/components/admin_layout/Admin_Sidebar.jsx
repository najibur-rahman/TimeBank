import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <aside className="h-full w-64 bg-[#111318] text-slate-100 flex flex-col justify-between">
      {/* Top brand + menus */}
      <div>
        <div className="px-5 py-4 border-b border-black/40">
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-semibold text-sky-400">
              Admin Panel
            </span>
          </div>
        </div>

        {/* Menu groups */}
        <div className="px-4 pt-4 text-xs text-slate-400 space-y-6">
          {/* Core Modules */}
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

      {/* Bottom profile */}
      <div className="px-4 py-5 border-t border-black/40">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#23c3c2] flex items-center justify-center text-base font-semibold text-white">
            N
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Najibur Rahman</p>
            <p className="text-[11px] text-slate-300">
              Paython &amp; Data Science
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
