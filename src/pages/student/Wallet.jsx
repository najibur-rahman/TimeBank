import React, { useState } from "react";
import { Footer } from "./footer";
import { Link, useNavigate } from "react-router-dom";

export const Wallet = () => {
  const [selectedPackage, setSelectedPackage] = useState(1000);
  const [transferAmount, setTransferAmount] = useState("1000");
  const [activeSection, setActiveSection] = useState("donation");

  const walletStats = [
    { amount: "$ 2,450", label: "Available Credits", description: "Credits ready to use" },
    { amount: "$ 450", label: "Pending Credit(Escrow)", description: "Awaiting Confirmation" },
    { amount: "$ 8,450", label: "Total Earned", description: "All time earning" },
  ];

  const creditPackages = [
    { credits: 500, price: "$ 500" },
    { credits: 1000, price: "$ 1000" },
    { credits: 5000, price: "$ 15000" },
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#333]">
      {/* Navbar Section */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-5 h-[70px] flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-[#2c3e50]">Wallet</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/stu_dashboard" className="text-gray-500 text-sm border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-all">
              <span>←</span> Back to Dashboard
            </Link>
            <div 
              className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:scale-105 transition-transform"
              onClick={() => navigate("/profile")}
            >
              E
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-[1200px] mx-auto p-5 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column */}
          <div className="flex-1 min-w-[300px]">
            {/* Wallet Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {walletStats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-[10px] shadow-sm text-center border border-gray-100 hover:-translate-y-1 transition-transform">
                  <div className="text-3xl font-bold text-[#3498db] mb-1">{stat.amount}</div>
                  <div className="text-base font-semibold text-[#2c3e50] mb-1">{stat.label}</div>
                  <div className="text-sm text-[#95a5a6]">{stat.description}</div>
                </div>
              ))}
            </div>

            {/* Wallet Action Section - শুধুমাত্র Transfer রাখা হয়েছে */}
            <div className="bg-white p-8 rounded-[10px] shadow-sm border border-gray-100 mb-8">
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h2 className="text-2xl font-bold text-[#2c3e50] mb-6">Transfer Credits to Another User</h2>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#2c3e50]">Recipient User ID:</label>
                    <input 
                      type="text" 
                      className="p-3 border border-gray-200 rounded-lg text-sm focus:border-[#3498db] outline-none placeholder:text-gray-400" 
                      placeholder="Your Recipient's id" 
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#2c3e50]">Recipient Name:</label>
                    <input 
                      type="text" 
                      className="p-3 border border-gray-200 rounded-lg text-sm focus:border-[#3498db] outline-none placeholder:text-gray-400" 
                      placeholder="Your Recipient's Name" 
                    />
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-semibold text-[#2c3e50]">Amount to Transfer:</label>
                      <div className="text-2xl font-black text-[#3498db]">$ {transferAmount}</div>
                    </div>
                    <input 
                      type="range" 
                      min="20" 
                      max="5000" 
                      step="100" 
                      value={transferAmount} 
                      onChange={(e) => setTransferAmount(e.target.value)} 
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#3498db] mt-2" 
                    />
                    <div className="flex justify-between text-[10px] font-bold text-gray-400 px-1 uppercase tracking-tighter">
                      <span>Min: $20</span>
                      <span>Max: $5000</span>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-[#3498db] text-white rounded-lg font-bold hover:bg-[#2980b9] transition-all shadow-md active:scale-[0.99] mt-4"
                  >
                    Confirm & Transfer Credits
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column Sidebar */}
          <div className="w-full lg:w-[350px] space-y-6">
            {/* TimeBank Section */}
            <div className="bg-[#3498db] p-6 rounded-[10px] text-center text-white shadow-md">
              <h3 className="text-xl font-bold mb-2">TimeBank</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Swap skills, not cash. Join our community of knowledge sharers and learn for free!
              </p>
            </div>

            {/* Quick Links Card */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#2c3e50] mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {["How It Works", "Browse Skills", "Success Stories", "FAQ"].map((link, i) => (
                  <li key={i} className="border-b border-gray-50 pb-2 last:border-0">
                    <a href="#" className="text-sm text-[#3498db] hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Card */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#2c3e50] mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span>📧</span>
                  <a href="mailto:hello@timebank.com" className="text-[#3498db] hover:underline font-medium">hello@timebank.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <span>📱</span>
                  <span className="text-[#7f8c8d]">+1 555 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};