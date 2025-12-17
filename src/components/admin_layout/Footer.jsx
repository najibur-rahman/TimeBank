import React from "react";
import {Mail,Phone,Facebook,Twitter,Instagram,Linkedin,} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1f2235] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* TimeBank */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              TimeBank
            </h2>
            <p className="text-sm leading-relaxed">
              Swap skills, not cash. Join our community of knowledge sharers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">
                How it Works
              </li>
              <li className="hover:text-white cursor-pointer">
                Browse Skills
              </li>
              <li className="hover:text-white cursor-pointer">
                Success Stories
              </li>
              <li className="hover:text-white cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Community
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Events</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Forum</li>
              <li className="hover:text-white cursor-pointer">Partners</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@timebank.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 555 123 4567</span>
              </div>

              <div className="flex gap-4 mt-4">
                <Facebook className="cursor-pointer hover:text-white" />
                <Twitter className="cursor-pointer hover:text-white" />
                <Instagram className="cursor-pointer hover:text-white" />
                <Linkedin className="cursor-pointer hover:text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm">
          © 2025 TimeBank. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
