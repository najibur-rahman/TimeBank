import React, { useState } from "react";
import Admin_header from "../../components/admin_layout/Admin_header";
import Admin_Sidebar from "../../components/admin_layout/Admin_Sidebar";
import Footer from "../../components/stu_layout/Footer"


const FILTERS = ["All", "Unread", "Mentors", "System", "Users", "Security"];

const NOTIFICATIONS = [
  {
    id: 1,
    type: "Users",
    title: "New User Registered",
    message: "A new user has registered on the platform",
    time: "Just now",
    unread: true,
  },
  {
    id: 2,
    type: "Security",
    title: "Security Check",
    message: "Security audit completed successful",
    time: "1 min ago",
    unread: true,
  },
  {
    id: 3,
    type: "Users",
    title: "New User Registered",
    message: "A new user has registered on the platform",
    time: "2 min ago",
    unread: false,
  },
  {
    id: 4,
    type: "System",
    title: "System Alert",
    message: "System performance is optimal",
    time: "3 min ago",
    unread: false,
  },
  {
    id: 5,
    type: "Mentors",
    title: "Student request for mentor",
    message: "A user send request to be mentor on the platform",
    time: "1 hour ago",
    unread: false,
  },
];

const AdminNotificationCenter = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [items, setItems] = useState(NOTIFICATIONS);

  const filtered = items.filter((n) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Unread") return n.unread;
    return n.type === activeFilter;
  });

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex">
      {/* Sidebar */}
      <Admin_Sidebar/>

      {/* Right side: header + content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Admin_header/>

        {/* Content */}
        <main className="flex-1 bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 py-6">
            {/* Title */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Notification Center</h2>
              <p className="text-sm text-slate-400">
                Manage and view all system notifications
              </p>
            </div>

            {/* Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
              {/* Filters */}
              <div className="px-6 py-4 border-b border-slate-800">
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-slate-300 mr-4">
                    All Notifications
                  </span>
                  {FILTERS.map((filter) => {
                    const active = activeFilter === filter;
                    return (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-1.5 rounded-full ${
                          active
                            ? "bg-sky-500 text-white"
                            : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                        }`}
                      >
                        {filter}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notification list */}
              <div className="p-4 space-y-3 bg-slate-900">
                {filtered.length === 0 && (
                  <p className="text-xs text-slate-400">
                    No notifications found for this filter.
                  </p>
                )}

                {filtered.map((n) => (
                  <div
                    key={n.id}
                    className="flex items-center justify-between rounded-lg bg-slate-900/80 border border-slate-800 px-4 py-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-8 h-8 rounded-md bg-indigo-500/30 flex items-center justify-center text-indigo-300 text-lg">
                        {n.type === "System" ? "=" : "✦"}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-50">
                          {n.title}
                        </h4>
                        <p className="text-xs text-slate-400">
                          {n.message}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-1">
                          {n.time}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDelete(n.id)}
                      className="text-rose-400 hover:text-rose-300 text-lg"
                      aria-label="Delete notification"
                    >
                      🗑
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default AdminNotificationCenter;
