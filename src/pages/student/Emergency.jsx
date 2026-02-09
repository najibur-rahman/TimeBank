import React, { useState } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export const Emergency = () => {
  const [memberId, setMemberId] = useState("");
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  const [attachments, setAttachments] = useState({
    screenshots: false,
    videos: false,
    audio: false
  });
  const [message, setMessage] = useState("");

  const handleAttachmentChange = (type) => {
    setAttachments(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { memberId, reason, description, attachments, message };
    console.log("Report submitted:", formData);
    alert("Your report has been submitted successfully!");
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel? All entered data will be lost.")) {
      window.history.back();
    }
  };

  const inputClass = "w-full p-3 border border-gray-300 rounded-md text-base focus:outline-none focus:border-[#4a90e2] transition-colors";

  return (
    <div className="bg-[#f5f7fa] min-h-screen font-sans">
      <Navbar />

      <div className="max-w-[1200px] mx-auto p-5 py-8">
        <div className="bg-white rounded-lg p-8 shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
          
          {/* Header Section */}
          <header className="mb-8">
            <h1 className="text-[32px] font-bold text-[#333] mb-5">Welcome back, Najibur!</h1>
            <h2 className="text-2xl font-semibold text-[#333] mb-4">Emergency Help</h2>
            <p className="text-[#666] text-base leading-relaxed">
              If you're experiencing any issues during your session, our support team is here to help.
            </p>
          </header>

          <hr className="border-t-2 border-gray-200 my-8" />

          {/* Contact Support Section */}
          <section className="my-5 p-4 bg-[#f8f9fa] border-l-4 border-[#4a90e2] rounded">
            <h3 className="text-xl font-bold text-[#333] mb-2.5">Contact Support</h3>
            <p className="text-[#555] text-base m-0">
              <strong>Involve the employee with an AI support team</strong>
            </p>
          </section>

          {/* Report Issue Section */}
          <section className="my-5 p-4 bg-[#f8f9fa] border-l-4 border-[#4a90e2] rounded">
            <h3 className="text-xl font-bold text-[#333] mb-2.5">Report an Issue</h3>
            <p className="text-[#555] text-base m-0">
              <strong>File a formal complaint or dispute about a member or violation</strong>
            </p>
          </section>

          {/* Live Support Section */}
          <section className="bg-[#f0f8ff] p-6 rounded-lg my-8 border border-[#d0e7ff]">
            <h3 className="text-2xl font-bold text-[#333] mb-6">All Live Support</h3>
            <div className="mb-5">
              <p className="text-lg text-[#333] mb-4"><strong>Hail! I'm your AI assistant. Have a question?</strong></p>
              <p className="text-[#444] mb-2.5"><strong>You can ask me about:</strong></p>
              <ul className="list-none pl-5 mb-5 space-y-1.5 text-[#555]">
                <li className="relative pl-5 before:content-['•'] before:text-[#4a90e2] before:absolute before:left-0">Technical issues</li>
                <li className="relative pl-5 before:content-['•'] before:text-[#4a90e2] before:absolute before:left-0">Member concerns</li>
                <li className="relative pl-5 before:content-['•'] before:text-[#4a90e2] before:absolute before:left-0">Session scheduling</li>
                <li className="relative pl-5 before:content-['•'] before:text-[#4a90e2] before:absolute before:left-0">Platform features</li>
              </ul>
              <div className="text-[#333] text-base my-5 p-2.5 bg-[#e8f4ff] rounded">
                <strong>Welcome to the SOS online system! Click the buttons above to get help or report issues.</strong>
              </div>
            </div>

            <div className="mt-5">
              <input
                type="text"
                className={inputClass}
                placeholder="Type your message here."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </section>

          {/* Report Form Section */}
          <section className="my-10 p-8 bg-[#f9f9f9] rounded-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-[#333] mb-8">Report an Issue / Dispute</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Member ID */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[#333] text-base">Member Id</label>
                <input
                  type="text"
                  className={inputClass}
                  value={memberId}
                  onChange={(e) => setMemberId(e.target.value)}
                  placeholder="Enter member ID"
                  required
                />
              </div>

              {/* Reason for Report */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[#333] text-base">Reason for Report</label>
                <select
                  className={`${inputClass} bg-white cursor-pointer`}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  required
                >
                  <option value="">Select a reason</option>
                  <option value="inappropriate">Member's actions are inappropriate</option>
                  <option value="harmful">Member's actions are harmful</option>
                  <option value="disruptive">Member's actions are disruptive</option>
                  <option value="other">Other (please explain)</option>
                </select>
              </div>

              {/* Detailed Description */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[#333] text-base">Detailed Description</label>
                <textarea
                  className={`${inputClass} resize-y`}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Please provide detailed information about the issue..."
                  rows={5}
                  required
                />
              </div>

              {/* Attachments */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[#333] text-base">Attachments</label>
                <div className="flex gap-8 flex-wrap">
                  {["screenshots", "videos", "audio"].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer text-[#555] capitalize">
                      <input
                        type="checkbox"
                        className="w-[18px] h-[18px] cursor-pointer accent-[#4a90e2]"
                        checked={attachments[type]}
                        onChange={() => handleAttachmentChange(type)}
                      />
                      {type === "audio" ? "Audio recordings" : type}
                    </label>
                  ))}
                </div>
              </div>

              {/* File Upload Box */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-[#333] text-base">Click to Upload file here</label>
                <div className="mt-2.5">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center bg-[#fafafa] cursor-pointer hover:border-[#4a90e2] hover:bg-[#f0f8ff] transition-all duration-300">
                    <span className="block text-[#666] text-base mb-1.5">Drag & drop files here or click to browse</span>
                    <span className="text-[#999] text-sm">(Optional text field)</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-5 mt-10">
                <button 
                  type="button" 
                  className="flex-1 px-8 py-3 bg-[#f5f5f5] text-[#666] border border-[#ddd] rounded-md text-base font-bold hover:bg-[#e0e0e0] transition-all"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 px-8 py-3 bg-[#4a90e2] text-white rounded-md text-base font-bold hover:bg-[#3a7bc8] transition-all shadow-md"
                >
                  Submit Report
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};