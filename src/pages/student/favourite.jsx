import React, { useState } from 'react';
import { Navbar } from "./navbar";
import { Footer } from './footer';
import { Link, useLocation } from 'react-router-dom';

export const Favourite = () => {
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
        return item ? item.id : 5; // Default to Favorites
    });

    const favoriteMentors = [
        { id: 1, name: 'Md. Najibur Rahman', title: 'React & Rust Expert', rating: '4.9', reviews: '1200', isFavorite: true, avatarColor: '#6366F1' },
        { id: 2, name: 'Sarah Johnson', title: 'Frontend Architect', rating: '4.8', reviews: '980', isFavorite: true, avatarColor: '#10B981' },
        { id: 3, name: 'Alex Chen', title: 'Full Stack Developer', rating: '4.7', reviews: '750', isFavorite: true, avatarColor: '#F59E0B' },
        { id: 4, name: 'Maria Garcia', title: 'UI/UX Designer', rating: '4.9', reviews: '1100', isFavorite: true, avatarColor: '#EF4444' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
            <Navbar />

            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] flex-1 max-w-[1400px] mx-auto w-full px-5 gap-8 pt-5">
                
                {/* Sidebar Menu */}
                <aside className="bg-white border border-gray-200 rounded-lg h-fit shadow-sm sticky top-[90px]">
                    <div className="p-5 border-b border-gray-100">
                        <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
                    </div>
                    <nav className="py-2">
                        <ul className="list-none">
                            {menuItems.map((item) => (
                                <li
                                    key={item.id}
                                    className={`border-l-4 transition-all cursor-pointer ${
                                        activeItem === item.id 
                                        ? 'bg-indigo-50 border-indigo-600' 
                                        : 'border-transparent hover:bg-gray-50'
                                    }`}
                                    onClick={() => setActiveItem(item.id)}
                                >
                                    <Link to={item.path} className={`block py-3.5 px-5 text-base font-medium ${activeItem === item.id ? 'text-indigo-700' : 'text-[#07074e]'}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Main Favorites Content */}
                <div className="w-full pb-8">
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Favorite Mentors</h1>
                        <p className="text-sm text-gray-500">Your saved mentors for quick access</p>
                    </header>

                    {/* Mentor Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {favoriteMentors.map((mentor) => (
                            <div 
                                key={mentor.id} 
                                className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                            >
                                <div className="flex items-start mb-5 relative">
                                    {/* Avatar */}
                                    <div
                                        className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-white font-semibold text-2xl mr-3 shrink-0 shadow-inner"
                                        style={{ backgroundColor: mentor.avatarColor }}
                                    >
                                        {mentor.name.charAt(0)}
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 pr-8">
                                        <h3 className="text-base font-bold text-gray-900 mb-1 leading-tight">{mentor.name}</h3>
                                        <p className="text-sm text-gray-500 mb-2">{mentor.title}</p>
                                        <div className="flex items-center gap-1">
                                            <span className="text-sm font-bold text-gray-900">{mentor.rating}</span>
                                            <span className="text-sm text-amber-400">★</span>
                                            <span className="text-sm text-gray-400 ml-1">({mentor.reviews})</span>
                                        </div>
                                    </div>

                                    {/* Heart Button */}
                                    <button className="absolute top-0 right-0 p-1 text-red-500 hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <Link
                                        to={`/session-booking/${mentor.id}`}
                                        className="flex-1 bg-gray-900 text-white text-center rounded-md py-2.5 px-4 text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
                                    >
                                        Book Session
                                    </Link>
                                    <button className="flex-1 bg-white text-gray-900 border border-gray-200 rounded-md py-2.5 px-4 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                                        Message
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};