import React, { useState } from "react";
import Admin_header from "../../components/admin_layout/Admin_header";
import Admin_Sidebar from "../../components/admin_layout/Admin_Sidebar";

// demo data
const demoMentor = {
  id: 1,
  name: "Najibur Rahman",
  email: "najiburr931@gmail.com",
  avatarInitial: "N",
  category: "Programming",
  skills: "React JS, JavaScript, Frontend",
  professional:
    "Senior Software Engineer at XYZ, 5+ years experience in React",
  description:
    "Hello! I'm Najibur Rahman, a Senior React Developer with over 8 years of experience building web applications. I've worked with startups and Fortune 500 companies, and I'm passionate about teaching React in a way that's practical and easy to understand. My teaching style is hands-on and project-based—we'll build real applications together while learning advanced patterns.",
  linkedin: "https://linkedin.com/in/najiburrrahman",
  github: "https://github.com/najiburrrahman",
  cvFile: {
    name: "CV_Resume.pdf",
    uploadedAt: "2025-12-01",
    size: "4MB",
  },
  idFile: {
    name: "NID_Passport.pdf",
    uploadedAt: "2025-12-01",
    size: "4MB",
  },
};

const View_Approval = () => {
  const [showReason, setShowReason] = useState(false);
  const [reason, setReason] = useState("");
  const mentor = demoMentor; // future e ekhane API response boshbe

  const handleRejectClick = () => {
    setShowReason(true);
  };

  const handleCancelReason = () => {
    setShowReason(false);
    setReason("");
  };

  const handleSubmitReason = () => {
    // ekhane API call kore decision send korte paro
    console.log("Reject mentor:", mentor.id, "Reason:", reason);
    setShowReason(false);
    setReason("");
  };

  const handleApprove = () => {
    console.log("Approve mentor:", mentor.id);
  };

  return (
    <div className="min-h-screen bg-[#111318] text-slate-50 flex flex-col">
      <Admin_header />

      <div className="flex flex-1">
        <Admin_Sidebar />

        {/* Main area */}
        <main className="flex-1 bg-[#111318] px-8 py-6 overflow-x-auto">
          {/* page title */}
          <section className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-1">
              Approval Requests
            </h1>
            <p className="text-sm md:text-base text-slate-300">
              Review and manage pending mentor applications
            </p>
          </section>

          {/* main card */}
          <section className="bg-[#f4f7fb] rounded-md shadow-md border border-slate-800/40 overflow-hidden">
            {/* heading row */}
            <div className="px-6 py-4 flex items-center gap-2 border-b border-slate-200">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500 text-white text-sm">
                👥
              </span>
              <h2 className="text-xl font-semibold text-black">
                Pending Mentor Verification Requests
              </h2>
            </div>

            {/* inner content */}
            <div className="px-8 py-6 bg-white">
              {/* profile header – dynamic user info */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#23c3c2] flex items-center justify-center text-lg font-semibold text-white">
                    {mentor.avatarInitial || mentor.name.charAt(0)}
                  </div>
                  <div className="leading-tight text-center md:text-left">
                    <p className="font-semibold text-black">{mentor.name}</p>
                    <p className="text-xs text-slate-600">{mentor.email}</p>
                  </div>
                </div>
              </div>

              {/* uploaded files */}
              <div className="space-y-3 mb-6">
                {/* CV / Resume */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded bg-[#243746] flex items-center justify-center text-white text-lg">
                    📄
                  </div>
                  <div className="flex-1 bg-[#243746] text-left px-4 py-2 text-xs text-slate-100 rounded-sm">
                    <div>Click to Upload CV / Resume</div>
                    <div className="text-[11px] text-slate-300">
                      uploaded {mentor.cvFile.uploadedAt} · size:{" "}
                      {mentor.cvFile.size}
                    </div>
                  </div>
                </div>

                {/* ID / Passport */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded bg-[#243746] flex items-center justify-center text-white text-lg">
                    🪪
                  </div>
                  <div className="flex-1 bg-[#243746] text-left px-4 py-2 text-xs text-slate-100 rounded-sm">
                    <div>Click to Upload student id / NID / Passport</div>
                    <div className="text-[11px] text-slate-300">
                      uploaded {mentor.idFile.uploadedAt} · size:{" "}
                      {mentor.idFile.size}
                    </div>
                  </div>
                </div>
              </div>

              {/* details area – fully dynamic */}
              <div className="text-[11px] text-black mb-4 leading-relaxed">
                <div className="flex flex-wrap gap-x-6 mb-2">
                  <p>
                    <span className="font-semibold">Category:</span>{" "}
                    {mentor.category}
                  </p>
                  <p>
                    <span className="font-semibold">Skills:</span>{" "}
                    {mentor.skills}
                  </p>
                  <p>
                    <span className="font-semibold">Professional:</span>{" "}
                    {mentor.professional}
                  </p>
                </div>

                <p className="mb-2">
                  <span className="font-semibold">Description:</span>{" "}
                  {mentor.description}
                </p>

                <div className="flex flex-wrap gap-y-1 justify-between pr-4">
                  <p className="break-all">
                    <span className="font-semibold">
                      Linkedin Profile Link:
                    </span>{" "}
                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline"
                    >
                      {mentor.linkedin}
                    </a>
                  </p>
                  <p className="break-all">
                    <span className="font-semibold">
                      Github Profile Link:
                    </span>{" "}
                    <a
                      href={mentor.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline"
                    >
                      {mentor.github}
                    </a>
                  </p>
                </div>

                <div className="flex flex-wrap gap-y-1 justify-between pr-4 mt-1">
                  <p className="break-all">
                    <a
                      href={mentor.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline"
                    >
                      {mentor.youtube}
                    </a>
                  </p>
                </div>
              </div>

              {/* approve / reject buttons */}
              <div className="flex justify-center gap-4 mb-4">
                <button
                  onClick={handleApprove}
                  className="px-8 py-1.5 rounded-full bg-[#7ed957] text-sm font-semibold text-black"
                >
                  Approve
                </button>
                <button
                  onClick={handleRejectClick}
                  className="px-8 py-1.5 rounded-full bg-[#ff6b6b] text-sm font-semibold text-white"
                >
                  Reject
                </button>
              </div>

              {/* Reason for Rejection box */}
              {showReason && (
                <div className="bg-[#f2f2f4] border border-gray-300 px-4 py-3 rounded-md max-w-xl mx-auto">
                  <p className="text-[13px] font-semibold text-gray-800 mb-2">
                    Reason for Rejection
                  </p>

                  <div className="bg-[#e5e5e8] border border-gray-300 rounded-sm px-4 py-2 mb-4">
                    <input
                      type="text"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
                      placeholder="Provide reasons for rejection..."
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                    />
                  </div>

                  <div className="flex justify-end gap-3 text-sm">
                    <button
                      onClick={handleSubmitReason}
                      className="px-5 py-2 rounded-full bg-[#7b57e5] text-white font-semibold shadow-sm"
                    >
                      Submit Decision
                    </button>
                    <button
                      onClick={handleCancelReason}
                      className="px-5 py-2 rounded-full bg-[#c9e1f5] text-gray-800 font-semibold shadow-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default View_Approval;
