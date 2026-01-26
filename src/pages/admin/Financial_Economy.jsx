import React from "react";
import { ChevronDown, Edit3, X } from "lucide-react";

import Admin_header from "../../components/admin_layout/Admin_header";
import Admin_Sidebar from "../../components/admin_layout/Admin_Sidebar";
import Footer from "../../components/stu_layout/Footer";

const creditPackages = [
  { id: "#PKG-001", name: "Basic", credit: 1000, price: "100$", bonus: 0, status: "Active" },
  { id: "#PKG-002", name: "Popular", credit: 5000, price: "460$", bonus: 0, status: "Active" },
  { id: "#PKG-003", name: "Premium", credit: 10000, price: "700$", bonus: 0, status: "Active" },
];

const Admin_Economy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <Admin_header />

      <div className="flex flex-1">
        <Admin_Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 w-full">
          <div className="max-w-6xl mx-auto">
 
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-100">
                Financial & Economy
              </h2>
              <p className="text-sm text-slate-400">
                Manage platform economy, credit pricing, and transaction logs
              </p>
            </div>

            {/* Main Table/Form Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-lg">

              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-800/50">
                <h3 className="text-sm font-semibold text-slate-100">
                  Credit Packages Management
                </h3>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-violet-600 hover:bg-violet-500 text-xs font-medium transition">
                  <span>Export</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Form container */}
              <div className="p-6 bg-slate-900/40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block mb-1.5 text-slate-300 font-medium">Package Name</label>
                      <input
                        className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-sky-500"
                        placeholder="e.g., Basic, Premium"
                      />
                    </div>
                    <div>
                      <label className="block mb-1.5 text-slate-300 font-medium">Price (৳)</label>
                      <input
                        className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-sky-500"
                        placeholder="e.g., 100"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block mb-1.5 text-slate-300 font-medium">Credit Amount</label>
                      <input
                        className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-sky-500"
                        placeholder="e.g., 1000"
                      />
                    </div>
                    <div>
                      <label className="block mb-1.5 text-slate-300 font-medium">Bonus Credits</label>
                      <input
                        className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-sky-500"
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                </div>

                {/* Form actions */}
                <div className="flex gap-3">
                  <button className="px-5 py-2 rounded-md bg-slate-700 text-xs font-medium hover:bg-slate-600 transition">
                    Reset
                  </button>
                  <button className="px-5 py-2 rounded-md bg-violet-600 text-xs font-medium hover:bg-violet-500 transition">
                    Create Package
                  </button>
                </div>
              </div>

              {/* Table section */}
              <div className="border-t border-slate-800">
                <div className="px-6 py-4 flex justify-between items-center bg-slate-800/30">
                  <h4 className="text-sm font-semibold text-slate-100">Existing Packages</h4>
                  <button className="px-3 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-xs font-bold text-slate-900 transition">
                    + Apply Action
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-left">
                    <thead className="bg-slate-800/80 text-slate-300">
                      <tr>
                        <th className="px-6 py-3 font-semibold border-b border-slate-700">ID</th>
                        <th className="px-6 py-3 font-semibold border-b border-slate-700">Name</th>
                        <th className="px-6 py-3 font-semibold border-b border-slate-700">Credit</th>
                        <th className="px-6 py-3 font-semibold border-b border-slate-700">Price</th>
                        <th className="px-6 py-3 font-semibold border-b border-slate-700">Bonus</th>
                        <th className="px-6 py-3 font-semibold border-b border-slate-700">Status</th>
                        <th className="px-6 py-3 font-semibold border-b border-slate-700 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {creditPackages.map((pkg, idx) => (
                        <tr key={pkg.id} className="hover:bg-slate-800/40 transition-colors">
                          <td className="px-6 py-4 text-slate-300">{pkg.id}</td>
                          <td className="px-6 py-4 text-slate-100 font-medium">{pkg.name}</td>
                          <td className="px-6 py-4 text-slate-300">{pkg.credit}</td>
                          <td className="px-6 py-4 text-slate-300">{pkg.price}</td>
                          <td className="px-6 py-4 text-slate-300">{pkg.bonus}</td>
                          <td className="px-6 py-4">
                            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                              {pkg.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-center gap-2">
                              <button className="p-1.5 rounded bg-amber-400 hover:bg-amber-300 transition text-slate-900">
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>
                              <button className="p-1.5 rounded bg-rose-500 hover:bg-rose-400 transition text-white">
                                <X className="w-3.5 h-3.5" />
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
      </div>

      <Footer />
    </div>
  );
};

export default Admin_Economy;