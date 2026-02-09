import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()

  const handleAvatarClick = () => {
    navigate('/Stu_profile')
  }

  const handleSwitchClick = () => {
    navigate('/mentor-form')
  }

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-[1000] w-full">
      <div className="flex justify-between items-center px-4 md:px-8 h-[70px] mx-auto w-full">
        <div className="flex items-center gap-5">
          <div className="flex items-center font-bold text-xl cursor-pointer">
            <span className="text-black">Welcome Back, Najibur Rahman!</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            <button className="border-none text-white cursor-pointer py-1.5 px-4 flex items-center justify-center rounded-[20px] bg-[#ffc0cb]"> 
              100 Credits 
            </button>
            <button 
              className="border-none text-white cursor-pointer py-1.5 px-4 flex items-center justify-center rounded-[20px] bg-purple-600" 
              onClick={handleSwitchClick}
            > 
              Switch to Mentor 
            </button>
            <div className="flex items-center justify-center" onClick={handleAvatarClick}>
              <div className="w-[38px] h-[38px] bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-full flex items-center justify-center font-semibold text-base text-white cursor-pointer transition-transform hover:scale-105">
                E
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;