import React from "react";
import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const EditProfile = () => {

const skills = [
    "Python",
    "Data Science",
    "Scikit-learn",
    "SQL",
    "Machine Learning",
    "Pandas",
    "Data Visualization",
  ];

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-sky-50">
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
                <span>Back to Profile</span>
              </button>

            </div>

            {/* Right: switch button */}
            <button className="rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700">
              Switch to Students
            </button>
          </div>
        </header>


      <main className="mx-auto flex max-w-5xl flex-col px-4 py-8">

        {/* Centered form card */}
        <section className="mx-auto w-full max-w-3xl rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="mb-8 text-center text-2xl font-semibold text-slate-900">
            Edit Profile Overview
          </h1>

          <form className="space-y-5">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-slate-800">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Md. Najibur Rahman"
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 focus:border-sky-400 focus:bg-white focus:outline-none"
              />
            </div>

            {/* Professional Title */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-slate-800">
                Professional Title
              </label>
              <input
                type="text"
                defaultValue="Senior Data Scientist & Python Mentor"
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 focus:border-sky-400 focus:bg-white focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-slate-800">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="najiburr913@gmail.com"
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 focus:border-sky-400 focus:bg-white focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-slate-800">
                Phone Number
              </label>
              <input
                type="text"
                defaultValue="+8801750896525"
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 focus:border-sky-400 focus:bg-white focus:outline-none"
              />
            </div>

            {/* Language */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-slate-800">
                Language
              </label>
              <input
                type="text"
                defaultValue="Bangla"
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 focus:border-sky-400 focus:bg-white focus:outline-none"
              />
            </div>

            {/* Location */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-slate-800">
                Location
              </label>
              <input
                type="text"
                defaultValue="Kazi Elias road, Zindabazar, Sylhet, Bangladesh"
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 focus:border-sky-400 focus:bg-white focus:outline-none"
              />
            </div>

            {/* Bio */}
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-slate-800">
                Bio
              </label>
              <textarea
                rows={4}
                defaultValue={`Hello! I'm Najibur Rahman, a Senior React Developer with over 8 years of experience building web applications...`}
                className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 focus:border-sky-400 focus:bg-white focus:outline-none"
              />
            </div>

            {/* Helper text */}
            <p className="pt-2 text-center text-xs text-slate-500">
              Write a brief introduction about yourself and your teaching
              approach.
            </p>

            {/* Buttons */}
            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                type="submit"
                className="rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="rounded-full bg-sky-100 px-6 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </section>

         <section className="mt-8 mx-auto w-full max-w-3xl rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-center text-2xl font-semibold text-slate-900">
            Edit Profile Overview
          </h2>

      {/* Skills */}
      <div className="mb-8 space-y-3">
        <h3 className="text-sm font-semibold text-slate-800">Skills</h3>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <button
              key={skill}
              type="button"
              className="flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1 text-xs font-medium text-sky-800"
            >
              <span>{skill}</span>
              <span className="text-[11px] text-sky-500">×</span>
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-[2fr,1fr]">
          <input
            type="text"
            placeholder="Add new skill"
            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 focus:border-sky-400 focus:bg-white focus:outline-none"
          />
          <button
            type="button"
            className="rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500"
          >
            + Add skill
          </button>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-8 space-y-3">
        <h3 className="text-sm font-semibold text-slate-800">Experience</h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Job Title"
            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-sky-400 focus:bg-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Company"
            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-sky-400 focus:bg-white focus:outline-none"
          />
        </div>

        <input
          type="text"
          placeholder="Duration (e.g., 2019 - Present)"
          className="mt-2 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-sky-400 focus:bg-white focus:outline-none"
        />

        <textarea
          rows={3}
          placeholder="Description"
          className="mt-2 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-sky-400 focus:bg-white focus:outline-none"
        />

        <div className="mt-3 flex items-center gap-4 text-xs">
          <button
            type="button"
            className="rounded-full bg-sky-100 px-3 py-1 font-semibold text-sky-700 hover:bg-sky-200"
          >
            Remove
          </button>
          <button
            type="button"
            className="font-semibold text-sky-600 hover:underline"
          >
            + Add Experience
          </button>
        </div>
      </div>

      {/* Education */}
      <div className="mb-8 space-y-3">
        <h3 className="text-sm font-semibold text-slate-800">Education</h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Degree"
            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-sky-400 focus:bg-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Institution"
            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-sky-400 focus:bg-white focus:outline-none"
          />
        </div>

        <input
          type="text"
          placeholder="Duration"
          className="mt-2 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-sky-400 focus:bg-white focus:outline-none"
        />

        <textarea
          rows={3}
          placeholder="Description"
          className="mt-2 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-sky-400 focus:bg-white focus:outline-none"
        />

        <div className="mt-3 flex items-center gap-4 text-xs">
          <button
            type="button"
            className="rounded-full bg-sky-100 px-3 py-1 font-semibold text-sky-700 hover:bg-sky-200"
          >
            Remove
          </button>
          <button
            type="button"
            className="font-semibold text-sky-600 hover:underline"
          >
            + Add Experience
          </button>
        </div>
      </div>

      {/* Social Links */}
      <div className="mb-8 space-y-4">
        <h3 className="text-sm font-semibold text-slate-800">Social Links</h3>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-3 text-sm">
            <p className="font-semibold text-slate-900">LinkedIn</p>
            <input
              type="text"
              placeholder="Profile URL"
              className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-sky-400 focus:bg-white focus:outline-none"
            />

            <p className="mt-4 font-semibold text-sky-700">Twitter</p>
            <input
              type="text"
              placeholder="Profile URL"
              className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-sky-400 focus:bg-white focus:outline-none"
            />
          </div>

          <div className="space-y-3 text-sm">
            <p className="font-semibold text-slate-900">GitHub</p>
            <input
              type="text"
              placeholder="Profile URL"
              className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-sky-400 focus:bg-white focus:outline-none"
            />

            <p className="mt-4 font-semibold text-sky-700">Facebook</p>
            <input
              type="text"
              placeholder="Profile URL"
              className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-sky-400 focus:bg-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Footer buttons */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="submit"
          className="rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700"
        >
          Save Changes
        </button>
        <button
          type="button"
          className="rounded-full bg-sky-100 px-6 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-200"
        >
          Cancel
        </button>
      </div>
    </section>

      </main>
    </div>
  );
};

export default EditProfile;
