import React from "react";
import { Bell, LogOut } from "lucide-react";

import Admin_header from "../../components/admin_layout/Admin_header";
import Admin_Sidebar from "../../components/admin_layout/Admin_Sidebar";
import Footer from "../../components/stu_layout/Footer"

const transactions = [
  {
    id: "TXN001",
    date: "Nov 30, 2025",
    description: "Credit Purchase",
    credits: "+10 Credits",
    amount: "$25.00",
    balance: "2,450",
    status: "Success",
  },
  {
    id: "TXN001",
    date: "Nov 30, 2025",
    description: "Credit Purchase",
    credits: "+43 Credits",
    amount: "$7.50",
    balance: "2,450",
    status: "Success",
  },
  {
    id: "TXN001",
    date: "Nov 30, 2025",
    description: "Credit Purchase",
    credits: "+10 Credits",
    amount: "$25.00",
    balance: "2,450",
    status: "Success",
  },
  {
    id: "TXN001",
    date: "Nov 30, 2025",
    description: "Credit Purchase",
    credits: "+10 Credits",
    amount: "$25.00",
    balance: "2,450",
    status: "Success",
  },
  {
    id: "TXN001",
    date: "Nov 30, 2025",
    description: "Credit Purchase",
    credits: "+10 Credits",
    amount: "$25.00",
    balance: "2,450",
    status: "Success",
  },
  {
    id: "TXN001",
    date: "Nov 30, 2025",
    description: "Credit Purchase",
    credits: "+10 Credits",
    amount: "$25.00",
    balance: "2,450",
    status: "Success",
  },
  {
    id: "TXN001",
    date: "Nov 30, 2025",
    description: "Credit Purchase",
    credits: "+10 Credits",
    amount: "$25.00",
    balance: "2,450",
    status: "Success",
  },
  {
    id: "TXN001",
    date: "Nov 30, 2025",
    description: "Credit Purchase",
    credits: "+10 Credits",
    amount: "$25.00",
    balance: "2,450",
    status: "Success",
  },
];

const menuCore = ["Dashboard", "Approvals", "User Management", "Dispute"];
const menuFinancial = ["Financial Economy", "Total Transaction Log"];
const menuSystem = ["Category Manager", "Administrators Role", "Notification"];

const TransactionLog = () => {
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
                Transaction Logs
              </h2>
              <p className="text-sm text-slate-400">
                Detailed view of all platform transactions
              </p>
            </div>

            {/* Card */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl overflow-hidden">
              {/* Card header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                <h3 className="text-sm font-semibold text-slate-100">
                  All Transaction
                </h3>
              </div>

              {/* Table */}
              <div className="px-6 py-4 bg-slate-950">
                <div className="overflow-x-auto rounded-lg border border-slate-800 text-xs">
                  <table className="min-w-full divide-y divide-slate-800">
                    <thead className="bg-slate-900">
                      <tr>
                        <th className="px-4 py-2 text-left font-semibold text-slate-300">
                          Transaction ID
                        </th>
                        <th className="px-4 py-2 text-left font-semibold text-slate-300">
                          Date
                        </th>
                        <th className="px-4 py-2 text-left font-semibold text-slate-300">
                          Description
                        </th>
                        <th className="px-4 py-2 text-left font-semibold text-slate-300">
                          Amount
                        </th>
                        <th className="px-4 py-2 text-left font-semibold text-slate-300">
                          Balance
                        </th>
                        <th className="px-4 py-2 text-left font-semibold text-slate-300">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 bg-slate-950">
                      {transactions.map((txn, index) => (
                        <tr key={index}>
                          <td className="px-4 py-2 whitespace-nowrap text-slate-200">
                            {txn.id}
                          </td>
                          <td className="px-4 py-2 text-slate-200">
                            {txn.date}
                          </td>
                          <td className="px-4 py-2 text-slate-200">
                            {txn.description}
                          </td>
                          <td className="px-4 py-2">
                            <div className="flex flex-col">
                              <span className="text-emerald-500 font-semibold">
                                {txn.credits}
                              </span>
                              <span className="text-slate-200">
                                {txn.amount}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-slate-200">
                            {txn.balance}
                          </td>
                          <td className="px-4 py-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-400/90 text-[11px] font-semibold text-slate-900">
                              {txn.status}
                            </span>
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

export default TransactionLog;
