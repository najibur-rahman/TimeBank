import React, { useState } from 'react';
import { Navbar } from "./navbar";
import { Footer } from './footer';
import { Link, useLocation } from 'react-router-dom';

export const Bookings = () => {
  const menuItems = [
    { id: 1, name: 'Dashboard', path: '/stu_dashboard' },
    { id: 2, name: 'Find Mentors', path: '/find-mentors' },
    { id: 3, name: 'My Bookings', path: '/my-bookings' },
    { id: 4, name: 'Favorites', path: '/favorites' },
    { id: 5, name: 'Wallet', path: '/wallet' },
    { id: 6, name: 'Settings', path: '/stu_settings' }
  ];

  const location = useLocation();
  const [activeItem, setActiveItem] = useState(() => {
    const currentPath = location.pathname;
    const item = menuItems.find(item => item.path === currentPath);
    return item ? item.id : 3;
  });

  const [activeStatus, setActiveStatus] = useState(null);
  const [bookings] = useState([
    { id: 1, title: 'React Hooks Master Class', status: 'Upcoming', mentor: 'Najibur Rahman', day: 'Wednesday', date: 'December 1, 2023', duration: '25 minutes', credits: '2 credits', color: '#3B82F6' },
    { id: 2, title: 'Node.js API Development', status: 'Completed', mentor: 'Nathan Roy', day: 'Friday', date: 'December 7, 2023', duration: '100 minutes', credits: '4 credits', color: '#10B981' },
    { id: 3, title: 'Node.js API Development', status: 'Canceled', mentor: 'Rony', day: 'Friday', date: 'December 7, 2023', duration: '100 minutes', credits: '4 credits', color: '#EF4444' },
    { id: 4, title: 'Advanced JavaScript Patterns', status: 'Upcoming', mentor: 'Rakib', day: 'Monday', date: 'December 11, 2023', duration: '45 minutes', credits: '3 credits', color: '#3B82F6' },
    { id: 5, title: 'React Performance Optimization', status: 'Completed', mentor: 'Arman', day: 'Tuesday', date: 'November 28, 2023', duration: '90 minutes', credits: '5 credits', color: '#10B981' }
  ]);

  const filteredBookings = activeStatus ? bookings.filter(b => b.status === activeStatus) : bookings;
  const statusOptions = ['Upcoming', 'Completed', 'Canceled'];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] flex-1 max-w-[1400px] mx-auto w-full px-5 gap-8 pt-5">
        
        {/* Main Menu Sidebar */}
        <aside className="bg-white border border-gray-200 rounded-lg h-fit shadow-sm sticky top-[90px]">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
          </div>
          <nav className="py-2">
            <ul className="list-none">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`border-l-4 transition-all ${activeItem === item.id ? 'bg-indigo-50 border-indigo-600' : 'border-transparent hover:bg-gray-50'}`}
                >
                  <Link to={item.path} className={`block py-3.5 px-5 text-base font-medium ${activeItem === item.id ? 'text-indigo-700 font-semibold' : 'text-[#07074e]'}`}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* My Bookings Page Content */}
        <div className="w-full">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
            <p className="text-sm text-gray-500">Manage your upcoming and past class sessions</p>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-8">
            
            {/* Filter Sidebar */}
            <aside className="bg-white border border-gray-200 rounded-lg p-5 h-fit shadow-sm">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>

                {/* Status Filter */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wider text-[11px]">Status</h4>
                  <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      <input type="radio" name="status" className="w-4 h-4 accent-indigo-600" checked={!activeStatus} onChange={() => setActiveStatus(null)} />
                      <span>All status</span>
                    </label>
                    {statusOptions.map(status => (
                      <label key={status} className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        <input type="radio" name="status" className="w-4 h-4 accent-indigo-600" checked={activeStatus === status} onChange={() => setActiveStatus(status)} />
                        <span>{status}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* Date Filter Placeholder */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wider text-[11px]">Date Range</h4>
                  <div className="flex flex-col gap-3">
                    {['All Time', 'Today', 'This week'].map(d => (
                      <label key={d} className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-gray-900">
                        <input type="radio" name="date" className="w-4 h-4 accent-indigo-600" defaultChecked={d === 'All Time'} />
                        <span>{d}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Bookings List Area */}
            <div className="flex flex-col gap-6">
              {/* Tabs */}
              <div className="flex gap-2 border-b border-gray-200 pb-2 overflow-x-auto">
                <button
                  onClick={() => setActiveStatus(null)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${!activeStatus ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  All Bookings
                </button>
                {statusOptions.map(status => (
                  <button
                    key={status}
                    onClick={() => setActiveStatus(status)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${activeStatus === status ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:bg-gray-100 border border-gray-200'}`}
                  >
                    {status}
                  </button>
                ))}
              </div>

              {/* Cards List */}
              <div className="flex flex-col gap-4 min-h-[400px]">
                {filteredBookings.length > 0 ? (
                  filteredBookings.map((booking) => (
                    <div key={booking.id} className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col sm:flex-row gap-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                      <div 
                        className="px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider h-fit text-center min-w-[90px]" 
                        style={{ backgroundColor: booking.color }}
                      >
                        {booking.status}
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">{booking.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400 w-16">Mentor:</span>
                            <span className="text-sm font-semibold text-gray-700">{booking.mentor}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400 w-16">Time:</span>
                            <span className="text-sm font-semibold text-gray-700">{booking.day}, {booking.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400 w-16">Duration:</span>
                            <span className="text-sm font-semibold text-gray-700">{booking.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400 w-16">Credits:</span>
                            <span className="text-sm font-semibold text-gray-700">{booking.credits}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-20 bg-gray-50 border border-dashed border-gray-200 rounded-lg">
                    <p className="text-gray-500">No {activeStatus?.toLowerCase()} bookings found.</p>
                  </div>
                )}
              </div>

              {/* Bottom Info */}
              <div className="pt-4 border-t border-gray-200 text-sm text-gray-500">
                <p>
                  Showing <strong>{filteredBookings.length}</strong> booking{filteredBookings.length !== 1 ? 's' : ''}
                  {activeStatus && ` matching status "${activeStatus}"`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};