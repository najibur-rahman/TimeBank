
import React, { useState } from "react";

import Men_header from "../../components/men_layout/Men_header"
import Men_Sidebar from "../../components/men_layout/Men_Sidebar"
import Footer from "../../components/stu_layout/Footer"

// simple toggle component
const Toggle = ({ checked, onChange }) => (
  <button
    type="button"
    onClick={() => onChange(!checked)}
    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
      checked ? "bg-purple-500" : "bg-slate-300"
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
        checked ? "translate-x-4" : "translate-x-1"
      }`}
    />
  </button>
);

const Settings = () => {
  const [emailNotif, setEmailNotif] = useState(true);
  const [classReminders, setClassReminders] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [mentorNotif, setMentorNotif] = useState(false);

  return (
    <div className="min-h-screen bg-sky-50">
        <Men_header/>

      <div className="mx-auto flex max-w-8xl gap-16 ">
        <Men_Sidebar/>

        {/* Main settings content */}
        <main className="flex-1 space-y-6 mr-50">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              Account Settings
            </h2>
            <p className="text-sm text-slate-500">
              Manage your account preferences and information.
            </p>
          </section>

          {/* Notifications + Password + Danger */}
          <section className="space-y-4">
            {/* Notifications card */}
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-xs text-sky-600">
                  🔔
                </span>
                <span>Notifications</span>
              </div>

              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-center justify-between">
                  <span>Email Notifications</span>
                  <Toggle checked={emailNotif} onChange={setEmailNotif} />
                </div>
                <div className="flex items-center justify-between">
                  <span>Class Reminders</span>
                  <Toggle checked={classReminders} onChange={setClassReminders} />
                </div>
                <div className="flex items-center justify-between">
                  <span>SMS Notifications</span>
                  <Toggle checked={smsNotif} onChange={setSmsNotif} />
                </div>
                <div className="flex items-center justify-between">
                  <span>New Mentor Recommendation</span>
                  <Toggle checked={mentorNotif} onChange={setMentorNotif} />
                </div>
              </div>
            </div>

            {/* Privacy & security */}
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs text-slate-700">
                  🔒
                </span>
                <span>Privacy &amp; Security</span>
              </div>

              <p className="mb-3 text-xs text-slate-500">Change Password</p>

              <div className="space-y-3 text-sm">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs focus:border-sky-400 focus:bg-white focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs focus:border-sky-400 focus:bg-white focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs focus:border-sky-400 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="mt-4">
                <button className="rounded-full bg-purple-600 px-5 py-2 text-xs font-semibold text-white hover:bg-purple-700">
                  Change Password
                </button>
              </div>
            </div>

            {/* Danger zone */}
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <h3 className="mb-1 text-sm font-semibold text-red-600">
                Danger Zone
              </h3>
              <p className="mb-3 text-xs text-slate-500 max-w-md">
                Once you delete your account, there is no going back. Please be
                certain.
              </p>
              <button className="rounded-full bg-red-500 px-5 py-2 text-xs font-semibold text-white hover:bg-red-600">
                Delete Account
              </button>
            </div>
          </section>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default Settings;
