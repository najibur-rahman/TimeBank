import React, { useState } from 'react';
import { Navbar } from "./navbar";
import { Footer } from './footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

export const Favourite = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { id: 1, name: 'Dashboard', path: '/stu_dashboard' },
        { id: 2, name: 'Find Mentors', path: '/find-mentors' },
        { id: 3, name: 'My Bookings', path: '/my-bookings' },
        { id: 4, name: 'Favorites', path: '/favorites' },
        { id: 5, name: 'Wallet', path: '/wallet' },
        { id: 6, name: 'Settings', path: '/stu_settings' }
    ];

    const [activeItem, setActiveItem] = useState(() => {
        const currentPath = location.pathname;
        const item = menuItems.find(item => item.path === currentPath);
        return item ? item.id : 4; 
    });

    const [favoriteMentors, setFavoriteMentors] = useState([
        { id: 1, name: 'Md. Najibur Rahman', title: 'React & Rust Expert', rating: '4.9', reviews: '1200', specialty: "Advanced React Patterns", price: "$ 40/hour" },
        { id: 2, name: 'Nahian', title: 'Frontend Architect', rating: '4.8', reviews: '980', specialty: "System Design", price: "$ 55/hour" },
        { id: 3, name: 'Emon', title: 'Full Stack Developer', rating: '4.7', reviews: '750', specialty: "Node.js & AWS", price: "$ 50/hour" },
        { id: 4, name: 'Rakib', title: 'UI/UX Designer', rating: '4.9', reviews: '1100', specialty: "Figma & Research", price: "$ 45/hour" },
    ]);

    const toggleFavorite = (id) => {
        console.log("Toggled favorite for:", id);
    };

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
                                    <Link to={item.path} className={`block py-3.5 px-5 text-base font-medium ${activeItem === item.id ? 'text-indigo-700 font-semibold' : 'text-[#07074e]'}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Main Content Area */}
                <main className="pb-8">
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Favorite Mentors</h1>
                        <p className="text-sm text-gray-500">Your saved mentors for quick access</p>
                    </header>

                    {/* Mentors Grid with Updated Design */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {favoriteMentors.map((mentor) => (
                            <div key={mentor.id} className="relative bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:border-gray-200 transition-all group">
                                
                                {/* Avatar & Initials */}
                                <div className="mb-4">
                                    <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center text-white text-[1.8rem] font-bold">
                                        {mentor.name.charAt(0)}
                                    </div>
                                </div>

                                {/* Favorite Button */}
                                <button 
                                    className="absolute top-2 right-4 p-2 rounded-full text-red-500 hover:bg-red-50 hover:scale-110 transition-all duration-200 z-20"
                                    onClick={() => toggleFavorite(mentor.id)}
                                >
                                    <Heart className="w-5 h-5 fill-red-500" />
                                </button>
                                
                                {/* Rate Mentor Button */}
                                <button 
                                    className="absolute top-14 right-6 flex items-center gap-1.5 bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-xs font-bold border border-amber-200 hover:bg-amber-600 hover:text-white transition-all shadow-sm z-10"
                                    onClick={() => navigate('/feedback', { state: { mentorName: mentor.name } })}
                                >
                                    <span className="text-sm">★</span> Rate Mentor
                                </button>

                                {/* Profile Header Info */}
                                <div className="flex items-start mb-5 pt-2">
                                    <div className="flex-1 pr-20">
                                        <h3 className="text-base font-semibold text-black leading-tight">{mentor.name}</h3>
                                        <p className="text-sm text-gray-500 mb-2">{mentor.title}</p>
                                        <div className="flex items-center gap-1 text-sm">
                                            <span className="text-pink-400">★</span>
                                            <span className="font-semibold">{mentor.rating}</span>
                                            <span className="text-gray-400 ml-1">({mentor.reviews} reviews)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4 space-y-1">
                                    <div className="text-sm">
                                        <span className="text-gray-500 font-medium">Specializes in: </span>
                                        <span className="text-gray-800">{mentor.specialty}</span>
                                    </div>
                                    <div className="text-sm">
                                        <span className="text-gray-500 font-medium">Rate: </span>
                                        <span className="text-gray-800 font-semibold">{mentor.price}</span>
                                    </div>
                                </div>

                                {/* View Profile */}
                                <Link
                                    to={`/mentor/${mentor.id}`}
                                    className="block w-full bg-black text-white text-center rounded-md py-2.5 text-sm font-medium hover:bg-indigo-700 transition-colors"
                                >
                                    View Profile
                                </Link>
                            </div>
                        ))}
                    </div>

                    {favoriteMentors.length === 0 && (
                        <div className="text-center py-20 bg-white border border-dashed border-gray-300 rounded-lg">
                            <p className="text-gray-500">No favorite mentors found.</p>
                        </div>
                    )}
                </main>
            </div>

            <Footer />
        </div>
    );
};