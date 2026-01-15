import React, { useState, useMemo } from "react";
import { MdPeople, MdSchedule } from "react-icons/md";

import Men_header from "../../components/men_layout/Men_header"
import Men_Sidebar from "../../components/men_layout/Men_Sidebar"
import Footer from "../../components/Stu_layout/Footer"

function getDaysInMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const daysArray = [];
  for (let i = 0; i < firstDay.getDay(); i++) {
    daysArray.push(null);
  }
  for (let d = 1; d <= lastDay.getDate(); d++) {
    daysArray.push(new Date(year, month, d));
  }
  return daysArray;
}

function parseTimeToMinutes(timeStr) {
  if (!timeStr) return 0;
  const [time, meridiem] = timeStr.split(" ");
  const [hStr, mStr] = time.split(":");
  let h = parseInt(hStr, 10);
  const m = parseInt(mStr, 10);
  if (meridiem?.toUpperCase() === "PM" && h !== 12) h += 12;
  if (meridiem?.toUpperCase() === "AM" && h === 12) h = 0;
  return h * 60 + m;
}

const initialClasses = [
  // example
  {
    id: 1,
    date: "2025-12-29",
    time: "5:00 PM",
    title: "Python for Data Science",
    students: "Team A",
    duration: "1.5 hours",
    status: "Confirmed",
  },
];

function SchedulePage() {
  const [classes, setClasses] = useState(initialClasses);
  const [showForm, setShowForm] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    title: "",
    students: "",
    duration: "",
    status: "Confirmed",
  });

  const days = useMemo(() => getDaysInMonth(currentMonth), [currentMonth]);

  // date + time diye sort
  const sortedClasses = useMemo(() => {
    return [...classes].sort((a, b) => {
      const dA = new Date(a.date);
      const dB = new Date(b.date);
      const diffDate = dA.getTime() - dB.getTime();
      if (diffDate !== 0) return diffDate;

      const tA = parseTimeToMinutes(a.time);
      const tB = parseTimeToMinutes(b.time);
      return tA - tB;
    });
  }, [classes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.time || !formData.title) return;

    setClasses((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...formData,
      },
    ]);

    setFormData({
      date: "",
      time: "",
      title: "",
      students: "",
      duration: "",
      status: "Confirmed",
    });
    setShowForm(false);
  };

  // oi date e kono class ache kina
  const hasClassOnDate = (dateObj) => {
    if (!dateObj) return false;
    const iso = dateObj.toISOString().slice(0, 10);
    return classes.some((c) => c.date === iso);
  };

  const monthLabel = currentMonth.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const goMonth = (offset) => {
    setCurrentMonth((prev) => {
      const d = new Date(prev);
      d.setMonth(prev.getMonth() + offset);
      return d;
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      
      <Men_header/>

      <div className="flex">
        <Men_Sidebar/>

        <main className="flex-1 px-10 py-8">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              My Schedule
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Manage your availability and upcoming classes.
            </p>
          </section>

          {/* Calendar */}
          <section className="rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => goMonth(-1)}
                  className="rounded-full border border-slate-200 px-2 py-1 text-xs"
                >
                  ◀
                </button>
                <h3 className="text-sm font-semibold text-slate-900">
                  {monthLabel}
                </h3>
                <button
                  onClick={() => goMonth(1)}
                  className="rounded-full border border-slate-200 px-2 py-1 text-xs"
                >
                  ▶
                </button>
              </div>
              <button
                onClick={() => setShowForm(true)}
                className="rounded-md bg-purple-600 px-4 py-2 text-xs font-semibold text-white"
              >
                + Add Schedule
              </button>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-200">
              <div className="grid grid-cols-7 bg-slate-50 text-center text-xs font-semibold text-slate-500">
                <span className="py-2">Sun</span>
                <span className="py-2">Mon</span>
                <span className="py-2">Tue</span>
                <span className="py-2">Wed</span>
                <span className="py-2">Thu</span>
                <span className="py-2">Fri</span>
                <span className="py-2">Sat</span>
              </div>
              <div className="grid grid-cols-7 gap-px bg-slate-200 text-xs">
                {days.map((dateObj, idx) =>
                  dateObj ? (
                    <div
                      key={idx}
                      className={`flex h-16 flex-col items-center justify-center bg-rose-50 text-slate-700 ${
                        hasClassOnDate(dateObj)
                          ? "border-2 border-emerald-400"
                          : ""
                      }`}
                    >
                      <span className="font-medium">
                        {dateObj.getDate()}
                      </span>
                      {hasClassOnDate(dateObj) && (
                        <span className="mt-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] text-emerald-700">
                          Class
                        </span>
                      )}
                    </div>
                  ) : (
                    <div key={idx} className="h-16 bg-slate-50" />
                  )
                )}
              </div>
            </div>
          </section>

          {/* Upcoming classes – date+time sorted */}
          <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <MdPeople className="text-base" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                Upcoming Classes
              </h3>
            </div>

            <div className="space-y-3">
              {sortedClasses.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg bg-teal-50 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                      {item.time}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-600">
                        Date: {item.date} • Students: {item.students || "N/A"} •
                        Duration: {item.duration || "N/A"}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold ${
                      item.status === "Confirmed"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    <MdSchedule className="text-xs" />
                    {item.status}
                  </span>
                </div>
              ))}
              {sortedClasses.length === 0 && (
                <p className="text-xs text-slate-500">
                  No classes scheduled yet.
                </p>
              )}
            </div>
          </section>
        </main>
      </div>

      {/* Modal form same as age */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Add Schedule
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600">
                  Time (e.g. 2:00 PM)
                </label>
                <input
                  type="text"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600">
                  Topic / Class Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  required
                />
              </div>

              {/* students & duration same as age */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600">
                    Students / Group
                  </label>
                  <input
                    type="text"
                    name="students"
                    value={formData.students}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600">
                    Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-md px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-purple-600 px-4 py-2 text-xs font-semibold text-white"
                >
                  Save Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer/>
    </div>
  );
}

export default SchedulePage;
