
import React from "react";
import { useNavigate } from "react-router-dom";
import { MdAccountCircle, MdInfo,MdChevronLeft } from "react-icons/md";


const stats = [
  { label: "Teaching hours", value: 42, icon: "⏱️", color: "bg-emerald-100 text-emerald-700" },
  { label: "Classes Taught", value: 68, icon: "👨‍🏫", color: "bg-pink-100 text-pink-700" },
  { label: "Total Students", value: 742, icon: "👥", color: "bg-purple-100 text-purple-700" },
  { label: "Average Rating", value: "4.9", icon: "⭐", color: "bg-indigo-100 text-indigo-700" },
];

const reviews = [
  {
    id: 1,
    name: "Najibur Rahman",
    initials: "N",
    rating: 5,
    text: "Najibur is an amazing mentor who explained complex React patterns in a way that finally made sense.",
  },
  {
    id: 2,
    name: "Najibur Rahman",
    initials: "N",
    rating: 4,
    text: "I took the 5‑hour crash course and it was worth every credit. The custom hooks patterns are now part of my workflow.",
  },
];

const StarRow = ({ rating }) => (
  <div className="flex items-center gap-1 text-yellow-400 text-sm">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i}>{i < rating ? "★" : "☆"}</span>
    ))}
  </div>
);

export default function App() {
    const navigate = useNavigate();

    const handleEditClick = () => {
    navigate("/editprofile");
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#e6f2f7]">

      {/* Top bar */}
        <header className="w-full border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            {/* Left: brand + back */}
            <div className="flex items-center gap-6">
              <span className="text-sm font-semibold text-slate-900">
                TimeBank
              </span>

              <button 
              onClick={handleBack}
              className="flex items-center gap-1 text-xs font-medium text-sky-600 hover:text-sky-700 hover:underline">
                <MdChevronLeft className="h-4 w-4" />
                <span>Back to dashboard</span>
              </button>

            </div>

            {/* Right: switch button */}
            <button className="rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700">
              Switch to Students
            </button>
          </div>
        </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 pb-10 ">
        {/* Title row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 mt-6 gap-3">
          <div>
            <h1 className="text-xl font-semibold text-slate-900">My Profile</h1>
            <p className="text-sm text-slate-500">
              Manage your profile information and settings.
            </p>
          </div>
          <button 
            onClick={handleEditClick}
            className="flex items-center gap-2 rounded-full bg-sky-500 text-white text-sm px-4 py-2 shadow">
            <span>✏️</span>
            Edit Profile
          </button>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl shadow-sm px-4 py-4 flex items-center gap-3"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}>
                <span className="text-lg">{item.icon}</span>
              </div>
              <div>
                <div className="text-xl font-semibold text-slate-900">
                  {item.value}
                </div>
                <div className="text-xs text-slate-500">{item.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* White main card */}
        <section className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
          {/* Header row */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                <MdAccountCircle className="w-4 h-4" />
               </span>

              Profile Overview
            </h2>
            <button className="flex items-center gap-2 rounded-full bg-slate-100 text-xs px-3 py-1.5 text-slate-700 hover:bg-slate-200">
              <span>✏️</span>
              Edit
            </button>
          </div>

          {/* Profile header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-full bg-sky-500 text-white flex items-center justify-center text-2xl font-semibold">
                N
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Najibur Rahman - 505
                </h3>
                <p className="text-sm text-slate-500">
                  Senior React Developer at TechCorp • 5+ years teaching experience
                </p>
                <div className="mt-3 flex flex-wrap gap-5 text-xs text-slate-600">
                  <div>
                    <div className="font-semibold text-sky-600">4.9</div>
                    <div className="text-[11px]">Rating</div>
                  </div>
                  <div>
                    <div className="font-semibold">347</div>
                    <div className="text-[11px]">Students</div>
                  </div>
                  <div>
                    <div className="font-semibold">2 years</div>
                    <div className="text-[11px]">Mentoring</div>
                  </div>
                  <div>
                    <div className="font-semibold">98%</div>
                    <div className="text-[11px]">Satisfaction</div>
                  </div>
                  <div>
                    <div className="font-semibold">৳ 8,250</div>
                    <div className="text-[11px]">Earned</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side quick info */}
            <div className="space-y-2 text-sm text-slate-600">
              <div>
                <span className="font-medium">Language: </span>
                <span>English • Spanish</span>
              </div>
              <div className="flex flex-col gap-1">
                <span>najibur931@gmail.com</span>
                <span>+8801750896525</span>
                <span>Sylhet, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            Hello! I&apos;m Najibur Rahman, a Senior React Developer with over 6 years of experience
            building web applications. My teaching style is hands‑on and project‑based, helping you
            build real applications while learning advanced patterns.
          </p>

          {/* Reviews header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <h3 className="text-base font-semibold text-slate-900">
              Student Reviews
            </h3>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-xl font-semibold text-slate-900">4.9</span>
              <StarRow rating={5} />
              <span className="text-xs text-slate-500">Based on 247 reviews</span>
            </div>
          </div>

          {/* Reviews list */}
          <div className="space-y-4 mb-4">
            {reviews.map((r) => (
              <article
                key={r.id}
                className="flex items-start gap-4 border border-slate-100 rounded-2xl p-4"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white font-semibold">
                  {r.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-semibold text-slate-900">
                      {r.name}
                    </h4>
                    <StarRow rating={r.rating} />
                  </div>
                  <p className="text-sm text-slate-600">{r.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="text-xs px-4 py-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50">
              View All 247 Reviews
            </button>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm md:p-8">
          {/* Tabs + Edit "*/}
          <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-6 text-sm font-medium">
          <button className="flex items-center gap-2 text-slate-500">
            <MdInfo className="h-4 w-4 text-sky-500" />
            <span>About Me</span>
          </button>
        </div>


    <button className="flex items-center gap-2 rounded-full bg-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-600">
      <span>✏️</span>
      Edit
    </button>
  </div>

  {/* 2-column grid */}
  <div className="grid gap-6 md:grid-cols-2">
    {/* Left column */}
    <div className="space-y-6">
      {/* Skills */}
      <div className="rounded-2xl bg-sky-50 p-5">
        <h3 className="mb-4 text-sm font-semibold text-slate-800">
          Skills
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Python",
            "Data Science",
            "Machine Learning",
            "Pandas",
            "Data Visualization",
            "SQL",
            "Scikit-learn",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-sky-100 px-4 py-1 text-xs font-medium text-sky-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="rounded-2xl bg-sky-50 p-5">
        <h3 className="mb-3 text-sm font-semibold text-slate-800">
          Education
        </h3>

        <div className="space-y-4 text-sm text-slate-700">
          <div>
            <p className="font-semibold">PhD in Computer Science</p>
            <p>Stanford University</p>
            <p className="text-xs text-slate-500">2012 - 2016</p>
            <p className="mt-1 text-xs">
              Specialized in machine learning and data mining.
            </p>
          </div>

          <div>
            <p className="font-semibold">MSc in Data Science</p>
            <p>MIT</p>
            <p className="text-xs text-slate-500">2010 - 2012</p>
          </div>
        </div>
      </div>
    </div>

    {/* Right column */}
    <div className="space-y-6">
      {/* Experience */}
      <div className="rounded-2xl bg-sky-50 p-5">
        <h3 className="mb-3 text-sm font-semibold text-slate-800">
          Experience
        </h3>

        <div className="space-y-4 text-sm text-slate-800">
          <div>
            <p className="text-sm font-semibold">Senior Data Scientist</p>
            <p className="text-sm">TechSolutions Inc.</p>
            <p className="text-xs text-slate-500">2019 - Present</p>
            <p className="mt-1 text-xs text-slate-700">
              Leading data science projects, building machine learning models,
              and mentoring junior data scientists.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Data Analyst</p>
            <p className="text-sm">DataCorp</p>
            <p className="text-xs text-slate-500">2020 - 2025</p>
            <p className="mt-1 text-xs text-slate-700">
              Performed data analysis, created reports and dashboards, and
              implemented data‑driven solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="rounded-2xl bg-sky-50 p-5">
        <h3 className="mb-3 text-sm font-semibold text-slate-800">
          Social Links
        </h3>
        <div className="mb-3 flex items-center gap-3">
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-white text-sm">
            in
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white text-sm">
            f
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-white text-sm">
            o
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white text-sm">
            x
          </button>
        </div>
        <p className="text-xs text-slate-600">
          Add your social media profiles to connect with students.
        </p>
      </div>
    </div>
  </div>
</section>

      </main>
    </div>
  );
}
