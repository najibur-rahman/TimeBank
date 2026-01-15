import React, { useMemo, useState } from "react";
import Admin_header from "../../components/admin_layout/Admin_header";
import Admin_Sidebar from "../../components/admin_layout/Admin_Sidebar";
import Footer from "../../components/stu_layout/Footer"

const usersData = [
  {
    id: "#STU-1245",
    name: "Najibur Rahman",
    email: "najiburr931@gmail.com",
    role: "Student",
    wallet: "৳ 564",
    joined: "2023-10-15",
    status: "warned",
  },
  {
    id: "#MEN-245",
    name: "Najibur Rahman",
    email: "najiburr931@gmail.com",
    role: "Mentor",
    wallet: "৳ 564",
    joined: "2023-10-15",
    status: "active",
  },
  {
    id: "#STU-1235",
    name: "Najibur Rahman",
    email: "najiburr931@gmail.com",
    role: "Student",
    wallet: "৳ 564",
    joined: "2023-10-15",
    status: "suspended",
  },
];

const statusOrder = {
  suspended: 0,
  warned: 1,
  active: 2,
};

const UserManagement = () => {
  const [selectedUserId, setSelectedUserId] = useState("");

  // suspended/warned upore, baki niche
  const sortedUsers = useMemo(
    () =>
      [...usersData].sort(
        (a, b) => statusOrder[a.status] - statusOrder[b.status]
      ),
    []
  );

  const handleUserClick = (user) => {
    setSelectedUserId(user.id);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 flex flex-col">
      <Admin_header />

      <div className="flex flex-1">
        <Admin_Sidebar />

        <main className="flex-1 bg-slate-900 px-8 py-6 overflow-x-auto">
          {/* Page title + search (Approval er moto) */}
          <section className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-1">
                Approval Requests
              </h1>
              <p className="text-sm md:text-base text-slate-300">
                Review and manage pending mentor applications
              </p>
            </div>

            <div className="flex items-center bg-white/5 border border-slate-700 rounded-full px-4 py-2 w-full md:w-72">
              <input
                type="text"
                placeholder="Search user"
                className="bg-transparent flex-1 text-sm outline-none text-slate-100 placeholder:text-slate-400"
              />
              <span className="ml-2 text-slate-400 text-lg">🔍</span>
            </div>
          </section>

          {/* All Users card – Admin_Approval er card style follow */}
          <section className="bg-slate-950 rounded-lg shadow border border-slate-800 overflow-hidden">
            {/* header row */}
            <div className="px-6 py-4 flex items-center justify-between bg-[#243746]">
              <h2 className="text-lg font-semibold">All Users</h2>
              <button className="px-3 py-1 text-xs rounded bg-violet-500 text-white">
                Export
              </button>
            </div>

            {/* table header */}
            <section className="bg-[#243746] text-white">
              <div className="px-9 py-2 grid grid-cols-7 gap-19 text-xs md:text-sm font-semibold">
                <span className="capitalize">user id</span>
                <span className="capitalize">user</span>
                <span className="capitalize">Email</span>
                <span className="capitalize">Role</span>
                <span className="capitalize">Wallet</span>
                <span className="capitalize">joined</span>
                <span className="capitalize">Status</span>
              </div>
            </section>


            {/* user rows */}
            <div>
              {sortedUsers.map((user, idx) => (

                <button
                  key={user.id}
                  type="button"
                  onClick={() => handleUserClick(user)}
                  className={`w-full px-6 py-3 grid grid-cols-[1.3fr,2fr,2fr,1fr,1fr,1.2fr,1.2fr] gap-3 items-center text-xs bg-[#233639] hover:bg-[#2a4044] transition-colors border-t border-black/30 ${
                    idx === 0 ? "border-t-0" : ""
                  }`}
                >
                  <div className="px-9 py-2 grid grid-cols-7 gap-19 text-xs md:text-sm items-center bg-slate-950"> 
                  {/* user id */}
                  <span className="font-semibold text-slate-100">
                    {user.id}
                  </span>

                  {/* user profile */}
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-cyan-500 flex items-center justify-center text-[13px] font-semibold text-white">
                      {user.name.charAt(0)}
                    </div>
                    <span className="font-medium text-slate-100">
                      {user.name}
                    </span>
                  </div>

                  {/* email */}
                  <span className="text-slate-200">{user.email}</span>

                  {/* role */}
                  <span className="text-slate-200">{user.role}</span>

                  {/* wallet */}
                  <span className="text-slate-100">{user.wallet}</span>

                  {/* joined */}
                  <span className="text-slate-200">{user.joined}</span>

                  {/* status pill */}
                  <span className="flex justify-start">
                    {user.status === "active" && (
                      <span className="px-3 py-1 rounded-full bg-emerald-500 text-[11px] text-white font-semibold">
                        Active
                      </span>
                    )}
                    {user.status === "warned" && (
                      <span className="px-3 py-1 rounded-full bg-yellow-400 text-[11px] text-black font-semibold">
                        Warned
                      </span>
                    )}
                    {user.status === "suspended" && (
                      <span className="px-3 py-1 rounded-full bg-rose-500 text-[11px] text-white font-semibold">
                        Suspended
                      </span>
                    )}
                  </span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* User actions panel – niche card */}
          <section className="mt-6 bg-[#3b4a4d] rounded-md border border-slate-700 px-6 py-5">
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              {/* Select user */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold mb-3">User Actions</h3>
                <label className="block text-xs text-slate-200 mb-1">
                  Select User
                </label>
                <input
                  type="text"
                  value={selectedUserId}
                  readOnly
                  placeholder="Select a user..."
                  className="w-full bg-slate-100 text-slate-900 text-sm px-3 py-2 rounded-sm outline-none"
                />
              </div>

              {/* Action dropdown */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold mb-3 invisible md:visible">
                  &nbsp;
                </h3>
                <label className="block text-xs text-slate-200 mb-1">
                  Action
                </label>
                <select className="w-full bg-slate-100 text-slate-900 text-sm px-3 py-2 rounded-sm outline-none">
                  <option>Choose an action...</option>
                  <option>Ban / Suspend</option>
                  <option>Un-Suspend</option>
                  <option>Manual credit adjustment</option>
                  <option>Send warning</option>
                </select>
              </div>
            </div>

            {/* buttons */}
            <div className="mt-6 flex justify-center gap-4">
              <button
                type="button"
                onClick={() => setSelectedUserId("")}
                className="px-8 py-1.5 rounded-full bg-slate-600 text-sm font-semibold text-white"
              >
                Reset
              </button>
              <button
                type="button"
                className="px-8 py-1.5 rounded-full bg-[#7b57e5] text-sm font-semibold text-white"
              >
                Apply Action
              </button>
            </div>
          </section>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default UserManagement;
