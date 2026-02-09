import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-[#07074e] text-white p-[40px_20px_20px] mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 max-w-[1400px] mx-auto mb-10">
        <div className="flex flex-col">
          <h2 className="text-[28px] font-bold text-white mb-4">TimeBank</h2>
          <p className="text-sm text-white leading-relaxed max-w-[300px]">
            Swap skills, not cash. Join our community of knowledge sharers.
          </p>
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-base font-semibold text-white mb-4">Quick Links</h3>
          <ul className="list-none p-0 m-0 space-y-2">
            <li><a href="#" className="text-white no-underline text-sm hover:text-gray-300">How it Work</a></li>
            <li><a href="#" className="text-white no-underline text-sm hover:text-gray-300">Browse Skills</a></li>
            <li><a href="#" className="text-white no-underline text-sm hover:text-gray-300">Success</a></li>
            <li><a href="#" className="text-white no-underline text-sm hover:text-gray-300">Stories</a></li>
            <li><a href="#" className="text-white no-underline text-sm hover:text-gray-300">FAQ</a></li>
          </ul>
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-base font-semibold text-white mb-4">Community</h3>
          <ul className="list-none p-0 m-0 space-y-2">
            <li><a href="#" className="text-white no-underline text-sm hover:text-gray-300">Events</a></li>
            <li><a href="#" className="text-white no-underline text-sm hover:text-gray-300">Blog</a></li>
            <li><a href="#" className="text-white no-underline text-sm hover:text-gray-300">Forum</a></li>
            <li><a href="#" className="text-white no-underline text-sm hover:text-gray-300">Partners</a></li>
          </ul>
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-base font-semibold text-white mb-4">Contact Us</h3>
          <ul className="list-none p-0 m-0 space-y-2">
            <li><a href="#" className="text-white no-underline text-sm hover:text-gray-300">hello@timebank.com</a></li>
            <li><a href="#" className="text-white no-underline text-sm hover:text-gray-300">+1 555 123=4567</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/30 pt-5 max-w-[1400px] mx-auto">
        <p className="text-center text-sm text-white/80 m-0">
          © 2025 TimeBank. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;