import React from "react";
import { MdPeople, MdOutlineEvent } from "react-icons/md";
import Men_header from "../../components/men_layout/Men_header";
import Men_Sidebar from "../../components/men_layout/Men_Sidebar";
import Footer from "../../components/Stu_layout/Footer";

const requests = [
  {
    id: 1,
    title: "Md. Najibur Rahman",
    subtitle: "Advanced JavaScript Concepts",
    duration: "1 hour",
    credits: "10 credits",
    time: "Today, 5:00 PM",
  },
  {
    id: 2,
    title: "Md. Nahian",
    subtitle: "UI/UX Design Fundamentals",
    duration: "2 hours",
    credits: "20 credits",
    time: "Tomorrow, 11:00 AM",
  },
  {
    id: 3,
    title: "Sheik Emon",
    subtitle: "Intro to Machine Learning",
    duration: "1.5 hours",
    credits: "15 credits",
    time: "Dec 20, 3:30 PM",
  },
  {
    id: 4,
    title: "Md. Rukon Khan",
    subtitle: "Digital Marketing Strategy",
    duration: "45 mins",
    credits: "8 credits",
    time: "Dec 22, 9:00 AM",
  },
  {
    id: 5,
    title: "Rafi",
    subtitle: "Calculus & Linear Algebra",
    duration: "1 hour",
    credits: "12 credits",
    time: "Dec 24, 6:00 PM",
  }
];

function Request() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      <Men_header />

      {/* Main layout */}
      <div className="flex">
        <Men_Sidebar />

        {/* Content */}
        <main className="flex-1 px-10 py-8">
          {/* Student Requests header */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              Student Requests
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Review and manage incoming class requests from students.
            </p>
          </section>

          {/* Pending approvals card */}
          <section className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <MdPeople className="text-base" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  Pending Approvals
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                {requests.length} pending requests
              </p>
            </div>

            {/* cards directly inside map */}
            <div className="space-y-4">
              {requests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between rounded-lg bg-cyan-50 px-4 py-3"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-400 text-base font-bold text-slate-900">
                      N
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {request.title}
                      </p>
                      <p className="text-xs text-slate-600">
                        {request.subtitle} • {request.duration} •{" "}
                        {request.credits}
                      </p>
                      <p className="mt-1 flex items-center text-xs text-slate-500">
                        <MdOutlineEvent className="mr-1 text-xs text-slate-400" />
                        {request.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="rounded-md bg-emerald-500 px-4 py-1 text-xs font-semibold text-white">
                      Accept
                    </button>
                    <button className="rounded-md bg-rose-500 px-4 py-1 text-xs font-semibold text-white">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Request;
