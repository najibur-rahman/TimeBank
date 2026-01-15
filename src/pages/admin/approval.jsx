import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Admin_header from "../../components/admin_layout/Admin_header";
import Admin_Sidebar from "../../components/admin_layout/Admin_Sidebar";
import Footer from "../../components/stu_layout/Footer"

const rows = [
  { id: 1, name: "Najibur Rahman", 
    email: "najiburr931@gmail.com", 
    skills: "Python, Machine Learning, Data Science", 
    date: "2023-10-15", 
    status: "Pending" 
},
  { id: 2, name: "Najibur Rahman", 
    email: "najiburr931@gmail.com", 
    skills: "Python, Machine Learning, Data Science", 
    date: "2023-10-15", 
    status: "Pending" 
},
  { id: 3, name: "Najibur Rahman", 
    email: "najiburr931@gmail.com", 
    skills: "Python, Machine Learning, Data Science", 
    date: "2023-10-15", 
    status: "Pending" 
},
  { id: 4, name: "Najibur Rahman", 
    email: "najiburr931@gmail.com", 
    skills: "Python, Machine Learning, Data Science", 
    date: "2023-10-15", 
    status: "Pending" 
},
];

const Admin_Approval = () => {
  const navigate = useNavigate();

  // View Details click
  const handleViewDetails = (id) => {
    navigate("/details");
    };


  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 flex flex-col">
      <Admin_header />

      <div className="flex flex-1">
        <Admin_Sidebar />

        <main className="flex-1 bg-slate-900 px-8 py-6 overflow-x-auto">
          {/* Page title */}
          <section className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-1">
              Approval Requests
            </h1>
            <p className="text-sm md:text-base text-slate-300">
              Review and manage pending mentor applications
            </p>
          </section>

          {/* Pending Request card */}
          <section className="bg-slate-950 rounded-lg shadow border border-slate-800 overflow-hidden">
            <div className="px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500 text-white text-sm">
                  👥
                </span>
                Pending Request
              </h3>
            </div>

            {/* Table head */}
            <section className="bg-[#243746] text-white">
              <div className="px-7 py-3 grid grid-cols-5 gap-4 text-xs md:text-sm font-semibold">
                <span>Application</span>
                <span>Skills</span>
                <span>Applied Date</span>
                <span>Status</span>
                <span className="text-center">Action</span>
              </div>
            </section>

            {/* Rows */}
            <div className="divide-y divide-slate-800">
              {rows.map((row) => (
                <React.Fragment key={row.id}>
                  <div className="px-6 py-3 grid grid-cols-5 gap-4 text-xs md:text-sm items-center bg-slate-950">
                    {/* Applicant (avatar + name + email) */}
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-cyan-500 flex items-center justify-center text-base font-semibold">
                        {row.name?.charAt(0)}
                      </div>
                      <div className="text-xs leading-tight">
                        <p className="font-semibold text-slate-100">
                          {row.name}
                        </p>
                        <p className="text-slate-400">{row.email}</p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="text-xs text-slate-200">{row.skills}</div>

                    {/* Date */}
                    <div className="text-xs text-slate-200">{row.date}</div>

                    {/* Status */}
                    <div>
                      <span className="inline-flex px-3 py-1 rounded-full bg-yellow-500/15 text-yellow-400 text-[11px] font-semibold">
                        {row.status}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleViewDetails(row.id)} 
                        className="px-9 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/40 text-[11px] font-semibold"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default Admin_Approval;
