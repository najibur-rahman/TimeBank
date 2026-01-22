
import React, { useState } from "react";

const communitiesMentor = [
  { name: "Python Mentors", members: 12, iconBg: "bg-cyan-500" },
  { name: "Data Science Team", members: 22, iconBg: "bg-purple-500" },
  { name: "Web Dev Mentors", members: 20, iconBg: "bg-teal-500" },
];

const communitiesPublic = [
  { name: "Python Learners", members: 112, iconBg: "bg-orange-400" },
  { name: "Data Science Hub", members: 212, iconBg: "bg-blue-500" },
  { name: "Coding Beginners", members: 492, iconBg: "bg-emerald-500" },
];

const messages = [
  {
    id: 1,
    from: "Najbur",
    initial: "N",
    type: "outgoing",
    text:
      "Hi everyone! I just uploaded the new Python curriculum for intermediate students.\nPlease review it when you have time.",
  },
  {
    id: 2,
    from: "Kobita",
    initial: "K",
    type: "incoming",
    text:
      "Thanks, I’ve reviewed the curriculum and added some exercises for data visualization.\nThe pandas section looks great!",
  },
];

const community = () => {

  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <header className="flex items-center justify-between px-8 py-4 border-b bg-white">
        <h1 className="text-lg font-semibold text-slate-800">
          Learning Community
        </h1>
        <button className="text-sm text-sky-500 hover:underline">
          &lt; Back to Dashboard
        </button>
      </header>

      {/* Main*/}
      <main className="relative grid grid-cols-[320px_minmax(0,1fr)] gap-6 px-8 py-6">
        {/* Sidebar */}
        <aside className="bg-white rounded-2xl shadow-sm p-4 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-slate-800">Communities</h2>
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white text-2xl leading-none"
              onClick={() => setIsCreateOpen(true)} >
              +
            </button>
          </div>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Search community"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
            />
          </div>

          {/* Mentor Teams */}
          <section className="mb-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Mentor Teams
            </p>
            <div className="space-y-1">
              {communitiesMentor.map((c, idx) => (
                <button
                  key={idx}
                  className={`flex w-full items-center rounded-xl px-3 py-2 text-left text-sm hover:bg-sky-50 ${
                    idx === 0 ? "bg-sky-100" : ""
                  }`}
                >
                  <span
                    className={`mr-3 flex h-8 w-8 items-center justify-center rounded-lg ${c.iconBg} text-white text-lg`}
                  >
                    <span className="material-symbols-outlined">groups</span>
                  </span>
                  <div>
                    <div className="font-medium text-slate-800">{c.name}</div>
                    <div className="text-xs text-slate-500">
                      {c.members} Members
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Public Communities */}
          <section className="mt-2">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
              Public Communities
            </p>
            <div className="space-y-1">
              {communitiesPublic.map((c, idx) => (
                <button
                  key={idx}
                  className="flex w-full items-center rounded-xl px-3 py-2 text-left text-sm hover:bg-sky-50"
                >
                  <span
                    className={`mr-3 flex h-8 w-8 items-center justify-center rounded-lg ${c.iconBg} text-white text-lg`}
                  >
                    <span className="material-symbols-outlined">group</span>
                  </span>
                  <div>
                    <div className="font-medium text-slate-800">{c.name}</div>
                    <div className="text-xs text-slate-500">
                      {c.members} Members
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Footer profile */}
          <div className="mt-auto pt-4 border-t">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white text-lg font-semibold">
                N
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Najbur Rahman
                </p>
                <p className="text-xs text-slate-500">
                  Python &amp; Data Science
                </p>
              </div>
            </div>
          </div>
        </aside>
        
        {/* Chat Section */}
        <section className="bg-white rounded-2xl shadow-sm flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.type === "outgoing" ? "justify-end" : "justify-start"
                }`}
              >
                {/*  avatar + bubble */}
                <div
                  className={`flex items-start gap-3 ${
                    msg.type === "outgoing"
                      ? "flex-row-reverse" // outgoing: avatar right, text left
                      : "flex-row"         // incoming: avatar left, text right
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white ${
                      msg.type === "outgoing"
                        ? "bg-sky-500"     // outgoing color
                        : "bg-purple-500"  // incoming color
                    }`}
                  >
                    {msg.initial}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-xl rounded-2xl px-4 py-3 text-sm whitespace-pre-line ${
                      msg.type === "outgoing"
                        ? "bg-sky-100 text-slate-800"
                        : "bg-slate-100 text-slate-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chat input (unchanged) */}
            <div className="px-3 py-2 border-t border-slate-800">
              <form className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-white-900/60 border border-slate-700 rounded-md px-3 py-2 text-[11px] placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                />
                <button
                  type="submit"
                  className="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 rounded-lg flex items-center justify-center shrink-0 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </form>
            </div>
        </section>


        {/* Center modal + blur background */}
        {isCreateOpen && (
          <div className="fixed inset-0 z-20 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setIsCreateOpen(false)}
            />
            {/* Modal box */}
            <div className="relative z-30 w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-slate-800">
                  Create New Community
                </h2>
                <button
                  type="button"
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
                  onClick={() => setIsCreateOpen(false)}
                >
                  ✕
                </button>
              </div>

              {/* modal with community form*/}
              <form className="space-y-5">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Community Name
                  </label>
                  <input
                    type="text"
                    placeholder="E.g. Advanced Python mentors"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="What is this community about?"
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 resize-none"
                  />
                </div>

                <div>
                  <p className="mb-1 text-sm font-medium text-slate-700">
                    Community Type
                  </p>
                  <div className="flex gap-6 text-sm">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="communityType"
                        className="h-4 w-4 text-sky-500"
                        defaultChecked
                      />
                      <span>Mentor Only</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="communityType"
                        className="h-4 w-4 text-sky-500"
                      />
                      <span>Public (students &amp; mentor)</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Category
                  </label>
                  <select className="w-60 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400">
                    <option>Programming</option>
                    <option>Data Science</option>
                    <option>Web Development</option>
                    <option>Language</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Resource Type
                  </label>
                  <select className="w-60 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400">
                    <option>Private (invite only)</option>
                    <option>Public (anyone join)</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="rounded-full bg-violet-600 px-5 py-2 text-sm font-medium text-white hover:bg-violet-700"
                  >
                    Create Community
                  </button>
                  <button
                    type="button"
                    className="rounded-full bg-slate-100 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
                    onClick={() => setIsCreateOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default community;
