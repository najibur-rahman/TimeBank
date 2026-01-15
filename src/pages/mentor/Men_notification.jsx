import React, { useState, useMemo } from "react";
import { MdFiberManualRecord } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Men_Sidebar from "../../components/men_layout/Men_Sidebar"
import Footer from "../../components/stu_layout/Footer"

const initialNotifications = [
  {
    id: 1,
    type: "system",
    title: "System Update",
    message: "New feature: You can now upload resources directly from your dashboard.",
    time: "5 hours ago",
    read: false,
  },
  {
    id: 2,
    type: "payment",
    title: "Payment Received",
    message: "You have received 1,200 for the Data Science class with Lisa Wang.",
    time: "8 hours ago",
    read: false,
  },
  {
    id: 3,
    type: "requests",
    title: "New Class Request",
    message:
      "Alex Johnston has requested a Python for Data Science class for tomorrow at 3:00 PM.",
    time: "9 hours ago",
    read: false,
  },
  {
    id: 4,
    type: "messages",
    title: "Student Feedback",
    message:
      "Ryan Cooper left a 5-star review for your Machine Learning class. 3 days ago.",
    time: "3 days ago",
    read: true,
  },
];

const FILTERS = [
  { key: "all", label: "All Notification" },
  { key: "unread", label: "Unread" },
  { key: "requests", label: "Requests" },
  { key: "payment", label: "Payment" },
  { key: "messages", label: "Messages" },
  { key: "system", label: "System" },
];

function NotificationsPage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [items, setItems] = useState(initialNotifications);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return items;
    if (activeFilter === "unread") return items.filter((n) => !n.read);
    return items.filter((n) => n.type === activeFilter);
  }, [items, activeFilter]);

  const markAllRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setItems([]);
  };

  const backToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-sky-50 font-sans">
      {/* Top bar */}
      <header className="flex items-center justify-between bg-white px-8 py-4 shadow-sm">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="font-semibold text-slate-900">TimeBank</span>
          <button
            onClick={backToDashboard}
            className="ml-6 text-xs font-semibold text-sky-500 hover:underline"
          >
            &lt; Back to Dashboard
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right text-xs">
            <p className="font-semibold text-slate-900">Najibur Rahman</p>
            <p className="text-[11px] text-slate-400">Student</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-white">
            N
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">
        
        {/* Title + actions */}
        <div className="mb-4 flex items-center justify-between">
            
          <div>
            <h1 className="text-xl font-semibold text-slate-900">
              Notifications
            </h1>
            <p className="mt-1 text-xs text-slate-500">
              Stay updated with your mentoring activities.
            </p>
          </div>
          <div className="flex gap-2 text-xs">
            <button
              onClick={markAllRead}
              className="rounded-full bg-slate-100 px-4 py-1.5 font-semibold text-slate-600 hover:bg-slate-200"
            >
              Mark All as Read
            </button>
            <button
              onClick={clearAll}
              className="rounded-full bg-rose-100 px-4 py-1.5 font-semibold text-rose-500 hover:bg-rose-200"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="mb-4 flex flex-wrap gap-2 text-xs">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`rounded-full px-4 py-1.5 font-semibold ${
                activeFilter === f.key
                  ? "bg-sky-500 text-white"
                  : "bg-white text-slate-600 shadow-sm hover:bg-slate-50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Notification list */}
        <section className="rounded-xl bg-white p-4 shadow-sm">
          {filtered.length === 0 ? (
            <p className="text-xs text-slate-500">No notifications.</p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {filtered.map((n) => (
                <li
                  key={n.id}
                  className="flex items-start justify-between gap-4 py-4"
                >
                  <div className="flex items-start gap-3">
                    {/* left status dot */}
                    <span className="mt-1">
                      <MdFiberManualRecord
                        className={`text-xs ${
                          n.read ? "text-slate-300" : "text-emerald-400"
                        }`}
                      />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {n.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-600">
                        {n.message}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">
                        {n.time}
                      </p>
                    </div>
                  </div>

                  {/* small delete icon */}
                  <button
                    onClick={() =>
                      setItems((prev) => prev.filter((x) => x.id !== n.id))
                    }
                    className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-rose-50 text-[13px] text-rose-400 hover:bg-rose-100"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <Footer/>
    </div>
  );
}

export default NotificationsPage;
