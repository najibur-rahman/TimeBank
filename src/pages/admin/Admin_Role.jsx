import React, { useState } from "react";
import Admin_header from "../../components/admin_layout/Admin_header";
import Admin_Sidebar from "../../components/admin_layout/Admin_Sidebar";
import Footer from "../../components/stu_layout/Footer";

const admins = [
  {
    id: "#ADM-01",
    name: "Md. Najibur Rahman",
    email: "najibur031@gmail.com",
    role: "Super Admin",
    permission: "All Permission",
    status: "Active",
  },
  {
    id: "#ADM-02",
    name: "Md. Rakib Khan",
    email: "rakib@example.com",
    role: "Support Staff",
    permission: "Transaction Log",
    status: "Active",
  },
];

const AdminRolesPage = () => {
  const [showAddAdmin, setShowAddAdmin] = useState(false);

  return (
    // DisputePage এর মতো লেআউট স্ট্রাকচার
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Admin_header />

      <div className="flex flex-1">
        <Admin_Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 p-6 w-full">
          <div className="max-w-6xl mx-auto">
            {/* Page title */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">
                Administrators & Roles
              </h2>
              <p className="text-sm text-slate-400">
                Manage admin users and their permissions
              </p>
            </div>

            {/* Admin Table Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
              {/* Card Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-800/50">
                <h3 className="text-sm font-semibold text-slate-100">
                  Existing Admins
                </h3>
                <button
                  onClick={() => setShowAddAdmin(true)}
                  className="px-4 py-1.5 rounded-full bg-emerald-500 text-xs font-semibold text-slate-900 hover:bg-emerald-400 transition"
                >
                  + Add Admin
                </button>
              </div>

              {/* Table section */}
              <div className="overflow-x-auto">
                <table className="min-w-full text-xs text-left">
                  <thead className="bg-slate-900 text-slate-300">
                    <tr>
                      <th className="px-6 py-3 font-semibold border-b border-slate-800">Admin ID</th>
                      <th className="px-6 py-3 font-semibold border-b border-slate-800">Name</th>
                      <th className="px-6 py-3 font-semibold border-b border-slate-800">Email</th>
                      <th className="px-6 py-3 font-semibold border-b border-slate-800">Role</th>
                      <th className="px-6 py-3 font-semibold border-b border-slate-800">Permission</th>
                      <th className="px-6 py-3 font-semibold border-b border-slate-800">Status</th>
                      <th className="px-6 py-3 font-semibold border-b border-slate-800 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {admins.map((admin) => (
                      <tr key={admin.id} className="hover:bg-slate-800/40 transition-colors bg-slate-950">
                        <td className="px-6 py-4 text-slate-300">{admin.id}</td>
                        <td className="px-6 py-4 text-slate-100 font-medium">{admin.name}</td>
                        <td className="px-6 py-4 text-slate-300">{admin.email}</td>
                        <td className="px-6 py-4 text-slate-300">{admin.role}</td>
                        <td className="px-6 py-4 text-slate-300">
                          <span className="px-2 py-1 rounded bg-slate-800 border border-slate-700">
                            {admin.permission}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold text-[10px]">
                            {admin.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-2">
                            <button className="p-1.5 rounded bg-amber-400 hover:bg-amber-300 transition text-slate-900">
                              ✏️
                            </button>
                            <button className="p-1.5 rounded bg-rose-500 hover:bg-rose-400 transition text-white">
                              ✕
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />

      {/* Add Admin Modal */}
      {showAddAdmin && (
        <AddAdminModal onClose={() => setShowAddAdmin(false)} />
      )}
    </div>
  );
};

/* -------- Add Admin Modal (স্টাইল একই রাখা হয়েছে) -------- */
const AddAdminModal = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    permission: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New admin:", form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
          <h2 className="text-lg font-semibold text-slate-50">Add New Admin</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-200 text-2xl">&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
          <div className="grid grid-cols-1 gap-4 text-xs">
            <div>
              <label className="block mb-1.5 text-slate-300 font-medium">Admin Name</label>
              <input
                name="name"
                onChange={handleChange}
                className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="block mb-1.5 text-slate-300 font-medium">Email Address</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                placeholder="admin@example.com"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block mb-1.5 text-slate-300 font-medium">Role</label>
                    <select name="role" onChange={handleChange} className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                        <option value="">Select role</option>
                        <option value="Super Admin">Super Admin</option>
                        <option value="Support Staff">Support Staff</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1.5 text-slate-300 font-medium">Permission</label>
                    <select name="permission" onChange={handleChange} className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500">
                        <option value="">Select permission</option>
                        <option value="All Permission">All Permission</option>
                        <option value="Transaction Log">Transaction Log</option>
                    </select>
                </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700 transition">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded-md bg-emerald-500 text-slate-900 font-bold hover:bg-emerald-400 transition">Save Admin</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminRolesPage;