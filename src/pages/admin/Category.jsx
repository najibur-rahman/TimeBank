import React, { useState } from "react";

import Admin_header from "../../components/admin_layout/Admin_header";
import Admin_Sidebar from "../../components/admin_layout/Admin_Sidebar";
import Footer from "../../components/stu_layout/Footer"

const categories = [
  {
    id: 1,
    title: "Design",
    desc: "UI/UX design, graphic design, and prototyping",
    tags: ["UI Design", "UX Research", "Wireframing", "Prototyping", "Figma"],
  },
  {
    id: 2,
    title: "Development",
    desc: "Web and mobile application development",
    tags: ["JavaScript", "React", "Node.js", "Python", "HTML/CSS"],
  },
  {
    id: 3,
    title: "Marketing",
    desc: "Digital marketing and social media strategies",
    tags: ["SEO", "Social Media", "Content Marketing", "Email Marketing"],
  },
  {
    id: 4,
    title: "Business",
    desc: "Entrepreneurship and business management",
    tags: ["Business Strategy", "Finance", "Project Management", "Leadership"],
  },
];


const cmsCards = [
  {
    id: 1,
    title: "Terms of Service",
    desc: "Edit the terms and conditions for using your platform.",
    btn: "Edit Page",
  },
  {
    id: 2,
    title: "Privacy Policy",
    desc: "Update your privacy policy to inform users how you use their data.",
    btn: "Edit Page",
  },
  {
    id: 3,
    title: "FAQ Page",
    desc: "Manage frequently asked questions to help users find answers.",
    btn: "Edit Page",
  },
  {
    id: 4,
    title: "Banner Ads / Sliders",
    desc: "Manage homepage banner advertisements and sliders.",
    btn: "Manage Banners",
  },
];


const audienceOptions = [
  "All Users",
  "Web Users Only",
  "App Users Only",
  "New Users Only",
];


const CategoryManager = () => {
  const [activeTab, setActiveTab] = useState("category");
  const [audience, setAudience] = useState(audienceOptions[0]);
  const [showAddModal, setShowAddModal] = useState(false);

  const tabClasses = (tab) =>
    `flex-1 text-center py-3 text-sm font-medium rounded-t-lg border-b-2 ${
      activeTab === tab
        ? "bg-white text-indigo-600 border-indigo-500 shadow-sm"
        : "bg-transparent text-slate-500 border-transparent hover:bg-white"
    }`;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top header full width */}
      <Admin_header />

      {/* Main area: sidebar + content */}
      <div className="flex flex-1">
        {/* Left sidebar column */}
        <div className="w-64 border-r border-slate-200 bg-white">
          <Admin_Sidebar />
        </div>

        {/* Right content column */}
        <div className="flex-1 px-6 py-8">
          {/* Top title + buttons (starts from sidebar right border) */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-semibold text-slate-900">
              Content & System Settings
            </h1>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-sm rounded-md border border-slate-300 bg-white hover:bg-slate-50">
                Export
              </button>
              <button className="px-4 py-2 text-sm rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-500">
                Save Changes
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 mb-6">
            <div className="flex">
              <button
                onClick={() => setActiveTab("category")}
                className={tabClasses("category")}
              >
                Category Manager
              </button>
              <button
                onClick={() => setActiveTab("cms")}
                className={tabClasses("cms")}
              >
                CMS
              </button>
              <button
                onClick={() => setActiveTab("notification")}
                className={tabClasses("notification")}
              >
                Notification Center
              </button>
            </div>
          </div>

          {/* Content box */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-10">
            {activeTab === "category" && (
              <>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">
                    Manage Categories & Skills
                  </h2>
                  <p className="text-sm text-slate-500">
                    Organize learning categories and skill tags for your
                    platform.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
                  {categories.map((cat) => (
                    <div
                      key={cat.id}
                      className="bg-slate-50 border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-lg">
                          🎨
                        </div>
                        <div className="flex gap-2 text-slate-400 text-sm">
                          <button className="hover:text-indigo-500">✏️</button>
                          <button className="hover:text-rose-500">🗑️</button>
                        </div>
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-slate-500 mb-3">
                        {cat.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cat.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-white text-xs border border-slate-200 text-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setShowAddModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-sky-500 text-white text-sm font-medium hover:bg-sky-400"
                >
                  + Add New Category
                </button>
              </>
            )}

            {activeTab === "cms" && (
              <>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">
                    Content Management System
                  </h2>
                  <p className="text-sm text-slate-500">
                    Manage legal pages and important content shown to your
                    users.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {cmsCards.map((card) => (
                    <div
                      key={card.id}
                      className="bg-slate-50 border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-lg mb-4">
                        📄
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-slate-500 mb-4">
                        {card.desc}
                      </p>
                      <button className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500">
                        {card.btn}
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === "notification" && (
              <>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">
                    Push Notifications
                  </h2>
                  <p className="text-sm text-slate-500">
                    Create and preview notifications for different user
                    segments.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Notification Title
                    </label>
                    <input
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                      placeholder="Eid Offer! 50% Bonus Credits"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Message Content
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                      placeholder="Send a promotional message to all users..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 items-start">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Notification Type
                      </label>
                      <select className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent">
                        <option>Promotional</option>
                        <option>System</option>
                        <option>Reminder</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Audience
                      </label>
                      <select
                        value={audience}
                        onChange={(e) => setAudience(e.target.value)}
                        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                      >
                        {audienceOptions.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-2">
                    <button className="px-4 py-2 rounded-md bg-sky-500 text-white text-sm font-medium hover:bg-sky-400">
                      Send Notification
                    </button>
                    <button className="px-4 py-2 rounded-md bg-slate-100 text-sm font-medium text-slate-700 hover:bg-slate-200">
                      Preview
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-2">
                    Notification Preview
                  </h3>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex gap-3 text-sm">
                    <div className="mt-1 text-sky-500">📣</div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        Eid Offer! 50% Bonus Credits
                      </p>
                      <p className="text-slate-600 text-sm">
                        Celebrate Eid with us! Get 50% bonus credits on your
                        next recharge. Offer valid until June 30th. Don&apos;t miss
                        out!
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Just now • Promotional • {audience}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer/>

      {/* Add Category Modal */}
      {showAddModal && (
        <AddCategoryModal onClose={() => setShowAddModal(false)} />
      )}
    </div>
  );
};

/* Modal component same as before */
const AddCategoryModal = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    skills: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setForm((prev) => ({ ...prev, file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New category:", form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-slate-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            Add New Category
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-xl leading-none"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-800 mb-1">
              Category Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-800 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows={3}
              value={form.description}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-800 mb-1">
              Skills (comma separated)
            </label>
            <input
              name="skills"
              value={form.skills}
              onChange={handleChange}
              placeholder="Design, Development, Marketing"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-800 mb-1">
              Category Icon/Image
            </label>
            <label className="mt-1 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500 cursor-pointer hover:border-indigo-400 hover:bg-indigo-50">
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
              <div className="mb-2 text-3xl text-slate-400">☁️</div>
              {form.file ? (
                <p className="text-xs text-slate-700">
                  Selected: {form.file.name}
                </p>
              ) : (
                <>
                  <p>Click to upload category icon or image</p>
                  <p className="text-xs text-slate-400">
                    Recommended size: 200x200px
                  </p>
                </>
              )}
            </label>
          </div>

          <div className="mt-4 flex justify-end gap-3 border-t border-slate-200 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-slate-100 text-sm font-medium text-slate-700 hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-500"
            >
              Save Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryManager;
