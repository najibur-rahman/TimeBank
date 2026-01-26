import React, { useState } from "react";
import Admin_header from "../../components/admin_layout/Admin_header";
import Admin_Sidebar from "../../components/admin_layout/Admin_Sidebar";
import Footer from "../../components/stu_layout/Footer";

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
    // কনসিস্টেন্ট লেআউট স্ট্রাকচার
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Admin_header />

      <div className="flex flex-1">
        <Admin_Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 w-full">
          <div className="max-w-6xl mx-auto">
            {/* Title Section */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Notification Center</h2>
              <p className="text-sm text-slate-400">
                Manage and view all system notifications
              </p>
            </div>

            {/* Notification Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
              {/* Filters Header */}
              <div className="px-6 py-4 border-b border-slate-800 bg-slate-800/30">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-slate-400 mr-2 font-medium">Filter By:</span>
                  {FILTERS.map((filter) => {
                    const active = activeFilter === filter;
                    return (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
                          active
                            ? "bg-sky-500 text-white font-semibold shadow-md shadow-sky-500/20"
                            : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                        }`}
                      >
                        {filter}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notification list container */}
              <div className="p-6 space-y-3 bg-slate-950">
                {filtered.length === 0 ? (
                  <div className="py-10 text-center">
                    <p className="text-sm text-slate-500 italic">
                      No notifications found for this filter.
                    </p>
                  </div>
                ) : (
                  filtered.map((n) => (
                    <div
                      key={n.id}
                      className={`flex items-center justify-between rounded-xl border p-4 transition-all hover:border-slate-600 ${
                        n.unread 
                          ? "bg-slate-900/50 border-sky-500/30" 
                          : "bg-slate-900/20 border-slate-800"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon/Avatar Placeholder */}
                        <div className={`mt-1 w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
                            n.unread ? "bg-sky-500/20 text-sky-400" : "bg-slate-800 text-slate-500"
                        }`}>
                          {n.type === "System" ? "⚙️" : "👤"}
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-semibold text-slate-50">
                              {n.title}
                            </h4>
                            {n.unread && (
                              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {n.message}
                          </p>
                          <p className="text-[10px] text-slate-500 mt-2 font-medium uppercase tracking-wider">
                            {n.type} • {n.time}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDelete(n.id)}
                        className="p-2 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-400/10 transition-colors"
                        title="Delete notification"
                      >
                        <span className="text-lg">🗑</span>
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AdminNotificationCenter;