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
    <div className="min-h-screen bg-slate-900 text-slate-100 flex">
      {/* Left sidebar (chao to nijer Admin_Sidebar use koro) */}
      <aside className="w-64 bg-slate-950 border-r border-slate-800">
        <Admin_Sidebar/>
      </aside>

      {/* Right side: header + content */}
      <div className="flex-1 flex flex-col">
        <Admin_header/>
        

        {/* Content */}
        <main className="flex-1 bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 py-6">
            {/* Page title */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">
                Administrators & Roles
              </h2>
              <p className="text-sm text-slate-400">
                Manage admin users and their permissions
              </p>
            </div>

            {/* Role Permissions card */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl mb-8">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                <h3 className="text-sm font-semibold text-slate-100">
                  Existing Admins
                </h3>
                <button
                  onClick={() => setShowAddAdmin(true)}
                  className="px-4 py-1.5 rounded-full bg-emerald-500 text-xs font-semibold text-slate-900 hover:bg-emerald-400"
                >
                  + Add Admin
                </button>
              </div>

             {/* Admin table */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl">
              <div className="overflow-x-auto text-xs">
                <table className="min-w-full divide-y divide-slate-800">
                  <thead className="bg-slate-900">
                    <tr>
                      <th className="px-4 py-2 text-left text-slate-300">
                        Admin id
                      </th>
                      <th className="px-4 py-2 text-left text-slate-300">
                        Name
                      </th>
                      <th className="px-4 py-2 text-left text-slate-300">
                        Email
                      </th>
                      <th className="px-4 py-2 text-left text-slate-300">
                        Role
                      </th>
                      <th className="px-4 py-2 text-left text-slate-300">
                        Permission
                      </th>
                      <th className="px-4 py-2 text-left text-slate-300">
                        Status
                      </th>
                      <th className="px-4 py-2 text-left text-slate-300">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 bg-slate-950">
                    {admins.map((admin) => (
                      <tr key={admin.id}>
                        <td className="px-4 py-2 text-slate-100">
                          {admin.id}
                        </td>
                        <td className="px-4 py-2 text-slate-100">
                          {admin.name}
                        </td>
                        <td className="px-4 py-2 text-slate-200">
                          {admin.email}
                        </td>
                        <td className="px-4 py-2 text-slate-200">
                          {admin.role}
                        </td>
                        <td className="px-4 py-2 text-slate-200">
                          {admin.permission}
                        </td>
                        <td className="px-4 py-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500 text-[11px] font-semibold text-slate-900">
                            {admin.status}
                          </span>
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex gap-2">
                            <button className="w-7 h-7 rounded-md bg-amber-400 flex items-center justify-center hover:bg-amber-300">
                              ✏️
                            </button>
                            <button className="w-7 h-7 rounded-md bg-rose-500 flex items-center justify-center hover:bg-rose-400">
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


          </div>
        </main>
        <Footer/>
      </div>

      {/* Add Admin Modal */}
      {showAddAdmin && (
        <AddAdminModal onClose={() => setShowAddAdmin(false)} />
      )}

      
    </div>
    
  );
};

/* -------- Add Admin Modal -------- */

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
    // future: API call kore backend e pathabe
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <h2 className="text-lg font-semibold text-slate-50">
            Add New Admin
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 text-xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-4 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Admin Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              placeholder="Md. Najibur Rahman"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              placeholder="admin@example.com"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Role
              </label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              >
                <option value="">Select role</option>
                <option value="Super Admin">Super Admin</option>
                <option value="Support Staff">Support Staff</option>
                <option value="Moderator">Moderator</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Permission
              </label>
              <select
                name="permission"
                value={form.permission}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              >
                <option value="">Select permission</option>
                <option value="All Permission">All Permission</option>
                <option value="Transaction Log">Transaction Log</option>
                <option value="Users Management">Users Management</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Status
            </label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-40 rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
            >
              <option value="Active">Active</option>
              <option value="Disabled">Disabled</option>
            </select>
          </div>

          {/* Footer buttons */}
          <div className="mt-4 flex justify-end gap-3 border-t border-slate-800 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-slate-800 text-xs font-medium text-slate-200 hover:bg-slate-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-emerald-500 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
            >
              Save Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminRolesPage;
