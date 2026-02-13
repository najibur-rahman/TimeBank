import React from "react";
import Admin_header from "../../components/admin_layout/Admin_header";
import Admin_Sidebar from "../../components/admin_layout/Admin_Sidebar";
import Footer from "../../components/stu_layout/Footer"

const timeline = [
  "10:00 PM - Booking Start Time",
  "10:02 PM - Student joined room",
  "10:05 PM - Mentor joined room (Evidence: Mentor was present)",
  "10:07 PM - Video connection established",
  "10:10 PM - Audio issues detected (Student side)",
  "10:15 PM - Screen sharing started by Mentor",
];

const CaseDetails = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Admin_header />
      
      <div className="flex flex-1">
        <Admin_Sidebar />
        {/* Content */}
        <main className="flex-1 bg-slate-900 p-6">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-2">
                case #DSP-2025-001: Student vs Mentor dispute
              </h2>
              <div className="flex flex-wrap gap-4 text-xs">
                <div className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2">
                  <p className="text-slate-400">Dispute id</p>
                  <p className="font-semibold text-slate-100">#DSP-2025-001</p>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2">
                  <p className="text-slate-400">Booking id</p>
                  <p className="font-semibold text-slate-100">#BK-5402</p>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2">
                  <p className="text-slate-400">Current status</p>
                  <p className="font-semibold text-emerald-400">Open</p>
                </div>
              </div>
            </div>

            {/* Main white card */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
              {/* Comparison */}
              <div className="px-6 py-4 border-b border-slate-800">
                <p className="text-sm font-semibold text-slate-100 mb-3">
                  The Comparison - Plaintiff vs Defendant
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Student */}
                  <div className="bg-slate-900/80 rounded-lg border border-slate-800 p-4 text-xs">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-sky-500/80 flex items-center justify-center font-semibold text-slate-900">
                        R
                      </div>
                      <div>
                        <p className="font-semibold text-slate-100">Rukon-105</p>
                        <p className="text-[11px] text-slate-400">Plaintiff • Student</p>
                      </div>
                    </div>
                    <dl className="space-y-2">
                      <div>
                        <dt className="font-semibold text-slate-200">Accusation:</dt>
                        <dd className="text-slate-300">"Mentor Absent"</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-200">Description:</dt>
                        <dd className="text-slate-300">
                          "I waited for 15 minutes but the mentor didn't join the session. I tried contacting through messages but got no response."
                        </dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-200">Evidence:</dt>
                        <dd className="text-sky-400 underline cursor-pointer">Screenshot_1.jpg</dd>
                        <dd className="text-sky-400 underline cursor-pointer">Chat_Log.txt</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-200">History:</dt>
                        <dd className="text-slate-300">2 previous cases</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Mentor */}
                  <div className="bg-slate-900/80 rounded-lg border border-slate-800 p-4 text-xs">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/80 flex items-center justify-center font-semibold text-slate-900">
                        N
                      </div>
                      <div>
                        <p className="font-semibold text-slate-100">Najibur-505</p>
                        <p className="text-[11px] text-slate-400">Defendant • Mentor</p>
                      </div>
                    </div>
                    <dl className="space-y-2">
                      <div>
                        <dt className="font-semibold text-slate-200">Response:</dt>
                        <dd className="text-slate-300">"I was present"</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-200">Description:</dt>
                        <dd className="text-slate-300">
                          "My internet had issues, but I joined just 5 minutes late. The student's network was also unstable. We completed 25 minutes of the 30-minute session."
                        </dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-200">Evidence:</dt>
                        <dd className="text-sky-400 underline cursor-pointer">Screenshot_1.jpg</dd>
                        <dd className="text-sky-400 underline cursor-pointer">Chat_Log.txt</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-200">History:</dt>
                        <dd className="text-slate-300">No previous cases</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>

              {/* System evidence */}
              <div className="border-b border-slate-800">
                <div className="px-6 py-2 bg-emerald-600/80 text-xs font-semibold text-slate-900">
                  System Evidence - The Truth (Automated Logs)
                </div>
                <div className="px-6 py-3 bg-slate-900 text-[11px] font-mono space-y-1">
                  {timeline.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              {/* Final decision */}
              <div className="px-6 py-4 bg-slate-950">
                <div className="mb-3">
                  <h3 className="text-sm font-semibold text-slate-100">
                    Final Decision - Admin Verdict
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Based on the evidence presented by both parties and system logs, make your final judgment:
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-xs">
                  <div className="rounded-lg border border-slate-700 bg-slate-900/80 p-4">
                    <h4 className="font-semibold text-slate-100 mb-1">Refund Student</h4>
                    <p className="text-slate-300">
                      <span className="font-semibold">User Wins</span> – If mentor truly was absent or session was severely compromised. Action: Credits will be refunded to student's wallet from escrow.
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-700 bg-slate-900/80 p-4">
                    <h4 className="font-semibold text-slate-100 mb-1">Release Payment to Mentor</h4>
                    <p className="text-slate-300">
                      <span className="font-semibold">Mentor Wins</span> – If session happened as described and accusation claims are false. Action: Escrow released to mentor's wallet. Student doesn't get refund.
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-700 bg-slate-900/80 p-4">
                    <h4 className="font-semibold text-slate-100 mb-1">Issue Warning</h4>
                    <p className="text-slate-300">
                      <span className="font-semibold">Partial Fault</span> – Both parties share responsibility. Action: Send issue warning emails, split payment or partial refund.
                    </p>
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="flex justify-end gap-3 mt-6">
                  <button className="px-6 py-2 rounded-full bg-slate-800 text-sm font-medium text-slate-100 hover:bg-slate-700">
                    Cancel
                  </button>
                  <button className="px-6 py-2 rounded-full bg-violet-500 text-sm font-medium text-slate-50 hover:bg-violet-400">
                    Close case
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* Footer moved inside flex-1 container - proper layout */}
      <Footer />
    </div>
  );
};

export default CaseDetails;
