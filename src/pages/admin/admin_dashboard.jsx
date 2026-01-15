import React from "react";
import { FiLogOut } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

import Admin_header from "../../components/admin_layout/Admin_header";
import Admin_Sidebar from "../../components/admin_layout/Admin_Sidebar";
import Footer from "../../components/stu_layout/Footer"

const menuItems = [
  { label: "Dashboard", active: true },
  { label: "Approvals" },
  { label: "User Management" },
  { label: "Dispute" },
];

const financeItems = [
  "Financial Economy",
  "Total Transaction Log",
];

const settingsItems = [
  "Category Manager",
  "Administrators Role",
  "Notification",
];

const statsCards = [
  {
    id: 1,
    label: "Total Credit Circulation",
    value: "৳ 124,580",
    iconBg: "bg-emerald-500",
  },
  {
    id: 2,
    label: "Active Sessions Now",
    value: "449",
    iconBg: "bg-rose-500",
  },
  {
    id: 3,
    label: "Total Users",
    value: "742",
    iconBg: "bg-pink-500",
  },
  {
    id: 4,
    label: "Total Mentors",
    value: "642",
    iconBg: "bg-violet-500",
  },
];

const Admin_Dashboard = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-slate-100 flex flex-col">
      {/* Top bar background strip */}
      <Admin_header/>

      {/* Main content area */}
      <div className="flex-1 bg-neutral-900 px-6 pb-8">
        <div className="mx-auto max-w-8xl flex gap-6 mr-40">
          <Admin_Sidebar/>

          {/* Right main card */}
          <main className="flex-1">
            <div className="bg-neutral-950 rounded-xl p-6 shadow-lg">


              {/* System overview */}
              <section>
                <div className="mb-4">
                  <h2 className="text-lg font-semibold">System Overview</h2>
                  <p className="text-xs text-neutral-400">
                    Monitor platform statistics and recent activities.
                  </p>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {statsCards.map((card) => (
                    <div
                      key={card.id}
                      className="bg-neutral-900 rounded-lg p-4 shadow-md flex flex-col gap-2"
                    >
                      <div className={`h-9 w-9 rounded-md ${card.iconBg} flex items-center justify-center text-white`}>
                        <FaUsers className="text-lg" />
                      </div>
                      <div className="text-lg font-semibold">
                        {card.value}
                      </div>
                      <div className="text-xs text-neutral-400">
                        {card.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Graph card */}
                <div className="bg-neutral-900 rounded-lg p-4 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-semibold">
                      User Registration Graph
                    </p>
                    <div className="inline-flex rounded-full bg-neutral-800 p-1 text-xs">
                      <button className="px-3 py-1 rounded-full bg-neutral-900">
                        Weekly
                      </button>
                      <button className="px-3 py-1 rounded-full text-neutral-400">
                        Monthly
                      </button>
                    </div>
                  </div>
                  <div className="h-40 flex items-center justify-center text-xs text-neutral-500">
                    User Registration Chart (Weekly/Monthly)  
                    <br />
                    In a real system, this area shows a line/bar chart.
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
      <Footer/>

    </div>
  );
};

export default Admin_Dashboard;
