import React, { useState } from "react";
import { MdPictureAsPdf, MdDelete, MdCloudDownload } from "react-icons/md";

import Men_header from "../../components/men_layout/Men_header"
import Men_Sidebar from "../../components/men_layout/Men_Sidebar"
import Footer from "../../components/stu_layout/Footer"

const initialResources = [
  {
    id: 1,
    title: "Python Cheat Sheet",
    type: "PDF document",
    size: "2.4 MB",
    date: "Dec 10, 2025",
    downloads: 62,
  },
  {
    id: 2,
    title: "Web Scraping Examples",
    type: "PDF document",
    size: "2.4 MB",
    date: "Dec 17, 2025",
    downloads: 82,
  },
];

function MyResourcesPage() {
  const [resources, setResources] = useState(initialResources);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    type: "",
    category: "",
    file: null,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData((prev) => ({ ...prev, file: files?.[0] || null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.type || !formData.file) return;

    setResources((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: formData.title,
        type: formData.type,
        size: "1.2 MB",
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        downloads: 0,
      },
    ]);

    setFormData({
      title: "",
      type: "",
      category: "",
      file: null,
      description: "",
    });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setResources((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      <Men_header/>

      <div className="flex">
        <Men_Sidebar/>

        {/* Main content */}
        <main className="flex-1 px-10 py-8">
          <section className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                My Resources
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Manage your teaching resources and uploads.
              </p>
            </div>
            <button
              onClick={() => setShowForm((prev) => !prev)}
              className="rounded-md bg-purple-600 px-4 py-2 text-xs font-semibold text-white"
            >
              {showForm ? "Close Form" : "+ Add Resources"}
            </button>
          </section>

          <div className="grid grid-cols-3 gap-6">
            {/* Resource cards */}
            <div className={showForm ? "col-span-2 space-y-4" : "col-span-3 space-y-4"}>
              {resources.map((res) => (
                <div
                  key={res.id}
                  className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                      <MdPictureAsPdf className="text-2xl" />
                      <span className="text-[10px] font-semibold">PDF</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {res.title}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {res.type} • {res.date} • {res.size}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        ↳ {res.downloads} downloads
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 rounded-md bg-sky-500 px-3 py-1 text-xs font-semibold text-white">
                      <MdCloudDownload className="text-sm" />
                      Download
                    </button>
                    <button
                      onClick={() => handleDelete(res.id)}
                      className="flex items-center gap-1 rounded-md bg-rose-500 px-3 py-1 text-xs font-semibold text-white"
                    >
                      <MdDelete className="text-sm" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              {resources.length === 0 && (
                <p className="text-xs text-slate-500">
                  No resources yet. Use the button to upload one.
                </p>
              )}
            </div>

            {/* Upload form  */}
            {showForm && (
              <div className="col-span-1 rounded-xl bg-white p-5 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-slate-900">
                  Upload Resource
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="mb-1 block font-semibold text-slate-600">
                      Resource Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="e.g. Python for Beginners"
                      className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-1 block font-semibold text-slate-600">
                      Resource Type
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs text-slate-700 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      required
                    >
                      <option value="">Select type</option>
                      <option value="PDF document">PDF document</option>
                      <option value="Study Notes">Study Notes</option>
                      <option value="Code Sample">Code Sample</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block font-semibold text-slate-600">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs text-slate-700 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    >
                      <option value="">Select category</option>
                      <option value="Programming">Programming</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Web Development">Web Development</option>
                      <option value="UI/UX">UI/UX</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block font-semibold text-slate-600">
                      Upload File
                    </label>
                    <input
                      type="file"
                      name="file"
                      onChange={handleChange}
                      className="w-full rounded-md border border-dashed border-slate-300 px-3 py-2 text-xs file:mr-3 file:rounded-md file:border-0 file:bg-purple-50 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-purple-700 hover:file:bg-purple-100"
                      required
                    />
                    {formData.file && (
                      <p className="mt-1 text-[11px] text-slate-500">
                        Selected: {formData.file.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1 block font-semibold text-slate-600">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Brief description of this resource"
                      className="w-full resize-none rounded-md border border-slate-300 px-3 py-2 text-xs outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    />
                  </div>

                  <div className="mt-4 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({
                          title: "",
                          type: "",
                          category: "",
                          file: null,
                          description: "",
                        });
                        setShowForm(false);
                      }}
                      className="rounded-md px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-purple-600 px-4 py-2 text-xs font-semibold text-white"
                    >
                      Upload Resource
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}


export default MyResourcesPage;
