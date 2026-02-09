import React, { useState } from 'react'
import { Navbar } from "./navbar";
import { Footer } from './footer';
import { Link, useLocation } from 'react-router-dom';

export const StudentSettings = () => {

    const menuItems = [
        { id: 1, name: 'Dashboard', path: '/stu_dashboard' },
        { id: 2, name: 'Find Mentors', path: '/find-mentors' },
        { id: 3, name: 'My Bookings', path: '/my-bookings' },
        { id: 4, name: 'Favorites', path: '/favorites' },
        { id: 5, name: 'Wallet', path: '/wallet' },
        { id: 6, name: 'Settings', path: '/stu_settings' } 
    ];

    const location = useLocation();
    const [activeItem] = useState(7);

    return (
        <div className="flex flex-col min-h-screen bg-[#f8f9fa] font-sans">
            <Navbar />

            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] flex-1 max-w-[1400px] mx-auto w-full px-5 gap-8 pt-5">
                
                {/* Sidebar Menu */}
                <aside className="bg-white border border-gray-200 rounded-lg h-fit shadow-sm lg:sticky lg:top-[90px]">
                    <div className="p-5 border-b border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
                    </div>
                    <nav className="py-2">
                        <ul className="list-none">
                            {menuItems.map((item) => (
                                <li
                                    key={item.id}
                                    className={`border-l-4 transition-all ${
                                        activeItem === item.id 
                                        ? 'bg-indigo-50 border-indigo-600' 
                                        : 'border-transparent hover:bg-gray-50'
                                    }`}
                                >
                                    <Link to={item.path} className={`block py-3.5 px-5 text-base font-medium ${activeItem === item.id ? 'text-indigo-700 font-semibold' : 'text-[#07074e]'}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 pb-10">
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h1>
                        <p className="text-lg text-gray-500">Manage your account preferences and information</p>
                    </header>

                    <div className="bg-white rounded-[10px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] p-8">
                        <div className="flex flex-col gap-8 max-w-3xl mx-auto lg:mx-0">
                            
                            {/* Notification Section */}
                            <section className="bg-white border border-[#e0e0e0] rounded-lg p-6">
                                <h3 className="text-[1.2rem] font-semibold text-[#333] mb-4 pb-2 border-b border-[#f0f0f0]">Notification</h3>
                                <div className="flex flex-col gap-3.5">
                                    {['Email Notifications', 'Class Reminders', 'SMS Notifications', 'New Mentor Recommendation'].map((label, idx) => (
                                        <div key={idx} className="flex items-center">
                                            <label className="flex items-center gap-3.5 cursor-pointer group">
                                                <div className="relative flex items-center">
                                                    {/* Tailwind custom checkbox logic */}
                                                    <input type="checkbox" className="peer sr-only" />
                                                    <div className="w-5 h-5 border-2 border-[#ddd] rounded bg-white peer-checked:bg-[#007bff] peer-checked:border-[#007bff] transition-all"></div>
                                                    <span className="absolute text-white text-[14px] left-[3.5px] opacity-0 peer-checked:opacity-100 transition-opacity">✓</span>
                                                </div>
                                                <span className="text-[0.95rem] text-[#555] group-hover:text-gray-900 transition-colors">{label}</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <button className="mt-6 bg-[#007bff] hover:bg-[#0056b3] text-white text-[0.9rem] font-medium py-2 px-6 rounded transition-colors shadow-sm">
                                    Save Notification Settings
                                </button>
                            </section>

                            {/* Privacy & Security Section */}
                            <section className="bg-white border border-[#e0e0e0] rounded-lg p-6">
                                <h3 className="text-[1.2rem] font-semibold text-[#333] mb-4 pb-2 border-b border-[#f0f0f0]">Privacy & Security</h3>
                                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[0.9rem] font-medium text-[#555]">Current Password</label>
                                        <input 
                                            type="password" 
                                            className="p-[0.8rem] border border-[#ddd] rounded focus:border-[#007bff] outline-none text-[0.95rem] transition-all"
                                            placeholder="Enter current password" 
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[0.9rem] font-medium text-[#555]">New Password</label>
                                        <input 
                                            type="password" 
                                            className="p-[0.8rem] border border-[#ddd] rounded focus:border-[#007bff] outline-none text-[0.95rem] transition-all"
                                            placeholder="Enter new password" 
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[0.9rem] font-medium text-[#555]">Confirm New Password</label>
                                        <input 
                                            type="password" 
                                            className="p-[0.8rem] border border-[#ddd] rounded focus:border-[#007bff] outline-none text-[0.95rem] transition-all"
                                            placeholder="Confirm new password" 
                                        />
                                    </div>
                                    <button type="submit" className="mt-2 bg-[#007bff] hover:bg-[#0056b3] text-white text-[0.95rem] font-medium py-[0.8rem] px-6 rounded transition-colors w-fit shadow-md">
                                        Change Password
                                    </button>
                                </form>
                            </section>

                            {/* Danger Zone Section */}
                            <section className="bg-white border border-[#ff6b6b] rounded-lg p-6">
                                <h3 className="text-[1.2rem] font-semibold text-[#ff6b6b] mb-4 pb-2 border-b border-[#f0f0f0]">Danger Zone</h3>
                                <p className="text-[0.9rem] text-[#666] mb-4 leading-relaxed">
                                    Once you delete your account, there is no going back. Please be certain.
                                </p>
                                <button className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white text-[0.95rem] font-medium py-[0.8rem] px-6 rounded transition-all shadow-sm hover:shadow-md">
                                    Delete Account
                                </button>
                            </section>

                        </div>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    )
}