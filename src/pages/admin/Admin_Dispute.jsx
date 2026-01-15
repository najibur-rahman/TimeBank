import React from "react";
import { useNavigate } from "react-router-dom";

import Admin_header from "../../components/admin_layout/Admin_header";
import Admin_Sidebar from "../../components/admin_layout/Admin_Sidebar";
import Footer from "../../components/stu_layout/Footer"

const disputes = [
  {
    id: "#DSP-2025-001",
    bookingId: "#BK-5402",
    student: "Rukon-105",
    mentor: "Najibur-505",
    reason: "Mentor absent",
    status: "New",
  },
  {
    id: "#DSP-2025-001",
    bookingId: "#BK-5402",
    student: "Rukon-105",
    mentor: "Najibur-505",
    reason: "Mentor absent",
    status: "New",
  },
  {
    id: "#DSP-2025-001",
    bookingId: "#BK-5402",
    student: "Rukon-105",
    mentor: "Najibur-505",
    reason: "Mentor absent",
    status: "Pending",
  },
  {
    id: "#DSP-2025-001",
    bookingId: "#BK-5402",
    student: "Rukon-105",
    mentor: "Najibur-505",
    reason: "Mentor absent",
    status: "New",
  },
  {
    id: "#DSP-2025-001",
    bookingId: "#BK-5402",
    student: "Rukon-105",
    mentor: "Najibur-505",
    reason: "Mentor absent",
    status: "Under Review",
  },
];

const statusColor = (status) => {
  if (status === "New") return "bg-emerald-500 text-slate-900";
  if (status === "Pending") return "bg-rose-500 text-white";
  if (status === "Under Review") return "bg-amber-400 text-slate-900";
  return "bg-slate-600 text-white";
};

const DisputePage = () => {
  const navigate = useNavigate();

  const handleReview = (disputeId) => {
  navigate("/casedetails");
};


  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex">
      {/* Sidebar */}
      <Admin_Sidebar/>

      <div className="flex-1 flex flex-col">
        {/* Header */}
       <Admin_header/>

        {/* Content */}
        <main className="flex-1 bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 py-6">
            {/* Page title */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Active Disputes</h2>
              <p className="text-sm text-slate-400">
                Review and manage pending mentor applications
              </p>
            </div>

            {/* Table card */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto text-xs">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-800">
                      <th className="px-4 py-3 text-left font-semibold text-slate-200 border-b border-slate-700">
                        Dispute ID
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-200 border-b border-slate-700">
                        Booking ID
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-200 border-b border-slate-700">
                        Reporter (Student)
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-200 border-b border-slate-700">
                        Accused (Mentor)
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-200 border-b border-slate-700">
                        Reason
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-200 border-b border-slate-700">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-200 border-b border-slate-700">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {disputes.map((d, idx) => (
                      <tr
                        key={idx}
                        className={`${
                          idx % 2 === 0 ? "bg-slate-900" : "bg-slate-900/80"
                        }`}
                      >
                        <td className="px-4 py-3 border-t border-slate-800 text-slate-100">
                          {d.id}
                        </td>
                        <td className="px-4 py-3 border-t border-slate-800 text-slate-100">
                          {d.bookingId}
                        </td>
                        <td className="px-4 py-3 border-t border-slate-800 text-slate-100">
                          {d.student}
                        </td>
                        <td className="px-4 py-3 border-t border-slate-800 text-slate-100">
                          {d.mentor}
                        </td>
                        <td className="px-4 py-3 border-t border-slate-800 text-slate-100">
                          {d.reason}
                        </td>
                        <td className="px-4 py-3 border-t border-slate-800">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold ${statusColor(
                              d.status
                            )}`}
                          >
                            {d.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 border-t border-slate-800">
                          <button
                            onClick={() => handleReview(d.id)}
                            className="px-4 py-1.5 rounded-full bg-sky-500 text-[11px] font-semibold text-white hover:bg-sky-400"
                          >
                            {d.status === "Under Review"
                              ? "Continue Review"
                              : "Review"}
                          </button>
                        </td>
                      </tr>
                    ))}

                    {/* last empty row like screenshot */}
                    <tr>
                      <td
                        colSpan={7}
                        className="h-10 border-t border-slate-800 bg-slate-900"
                      ></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default DisputePage;
