import React, { useState } from "react";
import Men_header from "../../components/men_layout/Men_header";
import Men_Sidebar from "../../components/men_layout/Men_Sidebar";
import Footer from "../../components/stu_layout/Footer";

const sessions = [
  {
    id: "#5402",
    student: "Rukon-105",
    datetime: "12 Dec 2025 | 10:00 PM",
    status: "Dispute",
  },
  {
    id: "#5402",
    student: "Rukon-105",
    datetime: "12 Dec 2025 | 10:00 PM",
    status: "Completed",
  },
];

const Dispute = () => {
  
  const [activeDisputeId, setActiveDisputeId] = useState(null);

  const handleReportClick = (sessionId) => {
    setActiveDisputeId(sessionId);
  };

  const handleCancel = () => {
    setActiveDisputeId(null);
  };

  return (
    <div className="min-h-screen bg-sky-50">
      <Men_header />

      <div className="mx-auto flex max-w-8xl gap-6 h-full">
        <Men_Sidebar />

        {/* Main column */}
        <main className="flex-1 space-y-6">
          {/* Page title */}
          <section className="mt-6">
            <h2 className="text-xl font-semibold text-slate-900">Disputed</h2>
            <p className="text-sm text-slate-500">
              Review and manage incoming class requests from students.
            </p>
          </section>

          {/* Pending Approvals card */}
          <section className="rounded-3xl bg-white shadow-sm">
            <header className="flex items-center gap-2 border-b border-slate-200 bg-sky-50 px-6 py-4">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-sky-600 text-sm">
                👤
              </span>
              <h3 className="text-base font-semibold text-slate-900">
                All Disputed
              </h3>
            </header>

            {/* table */}
            <div className="overflow-x-auto px-6 pt-4">
              <table className="min-w-full text-left text-xs">
                <thead>
                  <tr className="bg-sky-900 text-[11px] uppercase tracking-wide text-white">
                    <th className="px-3 py-2 font-semibold">Session id</th>
                    <th className="px-3 py-2 font-semibold">Student</th>
                    <th className="px-3 py-2 font-semibold">Date &amp; Time</th>
                    <th className="px-3 py-2 font-semibold">Status</th>
                    <th className="px-3 py-2 font-semibold text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[11px]">
                  {sessions.map((s, idx) => (
                    <tr
                      key={s.id + idx}
                      className={idx % 2 === 0 ? "bg-sky-50" : "bg-white"}
                    >
                      <td className="px-3 py-2">{s.id}</td>
                      <td className="px-3 py-2">{s.student}</td>
                      <td className="px-3 py-2">{s.datetime}</td>
                      <td className="px-3 py-2">
                        {s.status === "Dispute" ? (
                          <span className="rounded-full bg-pink-100 px-3 py-1 text-[10px] font-medium text-pink-700">
                            Dispute
                          </span>
                        ) : (
                          <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-medium text-emerald-700">
                            Completed
                          </span>
                        )}
                      </td>
                      <td className="px-3 py-2 text-right">
                        {s.status === "Dispute" ? (
                          <button
                            onClick={() => handleReportClick(s.id)}
                            className="rounded-full bg-red-100 px-3 py-1 text-[10px] font-medium text-pink-700"
                          >
                            Report to Dispute
                          </button>
                        ) : (
                          <button className="rounded-full bg-slate-800 px-3 py-1 text-[10px] font-medium text-white">
                            Completed
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Dispute details panel → শুধু যখন activeDisputeId আছে তখন */}
            {activeDisputeId && (
              <div className="mt-6 border-t border-slate-200 bg-slate-50 px-6 py-5">
                <div className="rounded-t-2xl bg-red-500 px-4 py-2 text-center text-xs font-semibold text-white">
                  Dispute Report Required (Session {activeDisputeId})
                </div>

                <div className="space-y-4 rounded-b-2xl bg-[#e9f7f5] p-4 text-xs text-slate-700">
                  {/* Booking info */}
                  <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
                    <div>
                      <p className="font-semibold">Booking ID:</p>
                      <p>{activeDisputeId}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Reported By:</p>
                      <p>Rukon</p>
                    </div>
                    <div>
                      <p className="font-semibold">Reason:</p>
                      <p>Mentor Absent</p>
                    </div>
                    <div>
                      <p className="font-semibold">Date &amp; Time:</p>
                      <p>12 Dec, 2025 | 10:00 PM</p>
                    </div>
                  </div>

                  {/* Complaint */}
                  <div>
                    <p className="mb-1 text-[11px] font-semibold">
                      Student&apos;s Complaint
                    </p>
                    <p className="rounded-md bg-white px-3 py-2 text-[11px] leading-relaxed">
                      &quot;I waited for 20 minutes but the mentor didn&apos;t join the
                      session. I tried to contact through messages but got no
                      response. This is very unprofessional behavior.&quot;
                    </p>
                  </div>

                  {/* Attachments from student */}
                  <div>
                    <p className="mb-1 text-[11px] font-semibold">
                      Attachments from Student:
                    </p>
                    <div className="flex flex-wrap gap-2 text-[11px]">
                      <button className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">
                        Screenshot01.jpg
                      </button>
                      <button className="rounded-full bg-sky-100 px-3 py-1 text-sky-700">
                        Chat_Log.txt
                      </button>
                    </div>
                  </div>

                  {/* Mentor response */}
                  <div>
                    <p className="mb-1 text-[11px] font-semibold">
                      Your Response
                    </p>
                    <textarea
                      rows={3}
                      placeholder="Please provide your explanation what happened during the session"
                      className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-[11px] focus:border-sky-400 focus:outline-none"
                    />
                  </div>

                  {/* Upload attachments */}
                  <div>
                    <p className="mb-1 text-[11px] font-semibold">
                      Attachments (Screenshots, evidence, etc.)
                    </p>
                    <div className="flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 bg-white px-4 py-6 text-center">
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                        ⬆
                      </div>
                      <p className="text-[11px] font-medium text-slate-700">
                        Click to Upload file here
                      </p>
                      <p className="text-[10px] text-slate-400">
                        PDF format only, max 5MB
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-3 flex items-center justify-end gap-3">
                    <button
                      onClick={handleCancel}
                      className="rounded-full bg-slate-200 px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-300"
                    >
                      Cancel
                    </button>
                    <button className="rounded-full bg-sky-600 px-5 py-2 text-xs font-semibold text-white hover:bg-sky-700">
                      Submit Response
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Dispute;
