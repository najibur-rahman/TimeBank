import React from "react";
import { Bell, LogOut, ChevronDown, Edit3, X } from "lucide-react";

import Admin_header from "../../components/admin_layout/Admin_header";
import Admin_Sidebar from "../../components/admin_layout/Admin_Sidebar";
import Footer from "../../components/stu_layout/Footer"

const creditPackages = [
  { id: "#PKG-001", name: "Basic", credit: 1000, price: "100৳", bonus: 0, status: "Active" },
  { id: "#PKG-002", name: "Popular", credit: 5000, price: "460৳", bonus: 0, status: "Active" },
  { id: "#PKG-003", name: "Premium", credit: 10000, price: "700৳", bonus: 0, status: "Active" },
];

const menuCore = [
  "Dashboard",
  "Approvals",
  "User Management",
  "Dispute",
];

const menuFinancial = [
  "Financial Economy",
  "Total Transaction Log",
];

const menuSystem = [
  "Category Manager",
  "Administrators Role",
  "Notification",
];

const Admin_Economy = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex">
      {/* Sidebar */}
      <Admin_Sidebar/>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Top header */}
        <Admin_header/>

        {/* Content */}
        <main className="flex-1 bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 py-6">
            {/* Page title */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-100">
                Financial & Economy
              </h2>
              <p className="text-sm text-slate-400">
                Manage platform economy, credit pricing, and transaction logs
              </p>
            </div>

            {/* Card */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden">
              {/* Card header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                <h3 className="text-sm font-semibold text-slate-100">
                  All Users
                </h3>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-violet-600 hover:bg-violet-500 text-xs font-medium">
                  <span>Export</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Form + table container */}
              <div className="bg-slate-800/60 px-6 pt-6 pb-4">
                {/* Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Left form */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-slate-100 tracking-wide">
                      Credit Packages Management
                    </p>
                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block mb-1 text-slate-200">
                          Package Name
                        </label>
                        <input
                          className="w-full rounded-md border border-slate-600 bg-slate-700/80 px-3 py-2 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                          placeholder="e.g., Basic Premium Pro"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-slate-200">
                          Price (৳)
                        </label>
                        <input
                          className="w-full rounded-md border border-slate-600 bg-slate-700/80 px-3 py-2 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                          placeholder="e.g., 100, 450, 500"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-slate-200">
                          Description
                        </label>
                        <input
                          className="w-full rounded-md border border-slate-600 bg-slate-700/80 px-3 py-2 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                          placeholder="Package description for users..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right form */}
                  <div className="space-y-3 text-xs">
                    <div className="mt-6">
                      <label className="block mb-1 text-slate-200">
                        Credit Amount
                      </label>
                      <input
                        className="w-full rounded-md border border-slate-600 bg-slate-700/80 px-3 py-2 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                        placeholder="e.g., 1000, 5000, 10000"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-slate-200">
                        Bonus Credits
                      </label>
                      <input
                        className="w-full rounded-md border border-slate-600 bg-slate-700/80 px-3 py-2 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
                        placeholder="Optional bonus credit"
                      />
                    </div>
                  </div>
                </div>

                {/* Form actions */}
                <div className="flex justify-between items-center mb-2">
                  <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-md bg-slate-700 text-xs font-medium hover:bg-slate-600">
                      Reset
                    </button>
                    <button className="px-4 py-2 rounded-md bg-violet-600 text-xs font-medium hover:bg-violet-500">
                      Create Package
                    </button>
                  </div>
                </div>
              </div>

              {/* Existing packages */}
              <div className="px-6 py-4 bg-slate-950">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-sm font-semibold text-slate-100">
                    Existing Credit Packages
                  </h4>
                  <button className="px-3 py-1.5 rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-xs font-semibold text-slate-900">
                    + Apply Action
                  </button>
                </div>

                <div className="overflow-x-auto rounded-lg border border-slate-800 text-xs">
                  <table className="min-w-full divide-y divide-slate-800">
                    <thead className="bg-slate-900">
                      <tr>
                        <th className="px-4 py-2 text-left font-semibold text-slate-300">
                          Package id
                        </th>
                        <th className="px-4 py-2 text-left font-semibold text-slate-300">
                          Name
                        </th>
                        <th className="px-4 py-2 text-left font-semibold text-slate-300">
                          Credit
                        </th>
                        <th className="px-4 py-2 text-left font-semibold text-slate-300">
                          Price
                        </th>
                        <th className="px-4 py-2 text-left font-semibold text-slate-300">
                          Bonus
                        </th>
                        <th className="px-4 py-2 text-left font-semibold text-slate-300">
                          Status
                        </th>
                        <th className="px-4 py-2 text-left font-semibold text-slate-300">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 bg-slate-950">
                      {creditPackages.map((pkg) => (
                        <tr key={pkg.id}>
                          <td className="px-4 py-2 whitespace-nowrap text-slate-200">
                            {pkg.id}
                          </td>
                          <td className="px-4 py-2 text-slate-200">
                            {pkg.name}
                          </td>
                          <td className="px-4 py-2 text-slate-200">
                            {pkg.credit}
                          </td>
                          <td className="px-4 py-2 text-slate-200">
                            {pkg.price}
                          </td>
                          <td className="px-4 py-2 text-slate-200">
                            {pkg.bonus}
                          </td>
                          <td className="px-4 py-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/90 text-[11px] font-semibold text-slate-900">
                              {pkg.status}
                            </span>
                          </td>
                          <td className="px-4 py-2">
                            <div className="flex items-center gap-2">
                              <button className="w-7 h-7 rounded-md bg-amber-400/90 flex items-center justify-center hover:bg-amber-300">
                                <Edit3 className="w-3.5 h-3.5 text-slate-900" />
                              </button>
                              <button className="w-7 h-7 rounded-md bg-rose-500/90 flex items-center justify-center hover:bg-rose-400">
                                <X className="w-3.5 h-3.5 text-white" />
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
    </div>
  );
};

export default Admin_Economy;
