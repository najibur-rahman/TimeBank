import React, { useState } from "react";

import Men_header from "../../components/men_layout/Men_header"
import Men_Sidebar from "../../components/men_layout/Men_Sidebar";
import Footer from "../../components/stu_layout/Footer";


const gigs = [
  { id: 1, title: "Python for Beginners", category: "Programming", price: "8 credits/hr", rating: "4.9 rating", students: "24 students", duration: "1.5 hours" },
  { id: 2, title: "Data Science with Python", category: "Data Science", price: "12 credits/hr", rating: "4.8 rating", students: "18 students", duration: "2 hours" },
];

const App = () => {
  const [showForm, setShowForm] = useState(false); 

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top bar */}
      <div className=" block mt-4">
          <Men_header/>
      </div>
      

      <div className="flex flex-1">
        <Men_Sidebar />

        {/* Main content */}
        <main className="flex-1 p-5 flex gap-8">
          {/* Left: gigs list */}
          <section className="flex-1">
            <h2 className="text-base font-semibold text-slate-900 ">
              My Gigs
            </h2>
            <label className="block mb-4">
              Manage your teaching services and pricing
            </label>

            <div className="space-y-4"> {/* grid grid-cols-2 gap-4 */}
              {gigs.map((gig) => (
                <article
                  key={gig.id}
                  className="bg-white rounded-lg shadow-sm p-4 flex flex-col gap-2"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {gig.title}
                      </h3>
                      <p className="text-xs text-slate-500">{gig.category}</p>
                    </div>
                    <p className="text-xs font-semibold text-indigo-600">
                      {gig.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span>★ {gig.rating}</span>
                    <span>👥 {gig.students}</span>
                  </div>

                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        ⏱ <span>{gig.duration}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <button className="px-3 py-1 rounded-md border border-slate-200 text-slate-600">
                        Edit
                      </button>
                      <button className="px-3 py-1 rounded-md bg-rose-500 text-white">
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Right: create gig form */}
          <section className="w-80">
            {/* toggle button */}
            <button
              onClick={() => setShowForm((prev) => !prev)}
              className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium mb-4"
            >
              {showForm ? "Close" : "+ Create New Gigs"}
            </button>

            {/* form শুধু showForm true হলে দেখা যাবে */}
            {showForm && (
              <form className="bg-white rounded-lg shadow-sm p-4 space-y-4">
                <div>
                  <h2 className="text-base font-semibold text-slate-900 mb-4">
                    Create New Gigs
                  </h2>
                  <input
                    type="text"
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter gig title"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Category
                  </label>
                  <select className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Select a category</option>
                    <option>Programming</option>
                    <option>Data Science</option>
                    <option>Music</option>
                    <option>Language</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Price (credits/hr)
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="8"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Duration (hours)
                  </label>
                  <select className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>1 hour</option>
                    <option>1.5 hours</option>
                    <option>2 hours</option>
                    <option>2.5 hours</option>
                    <option>3 hours</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    Description
                  </label>
                  <textarea
                    rows="3"
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Write a short description..."
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-3 py-2 text-xs rounded-md border border-slate-200 text-slate-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs rounded-md bg-indigo-600 text-white font-medium"
                  >
                    Create Gigs
                  </button>
                </div>
              </form>
            )}
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default App;
