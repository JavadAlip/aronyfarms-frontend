import React, { useState } from "react";
import { Menu, X, ChevronDown, Plus } from "lucide-react";
import logo from "../../assets/logo1.png";
import navbarLast from "../../assets/Container.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/1 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex space-x-8 font-medium text-white">
            <a href="#" className="hover:text-green-400 text-[16px]">
              Home
            </a>
            <a href="#" className="hover:text-green-400 text-[16px]">
              About Us
            </a>

            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center hover:text-green-400 text-[16px]">
                Projects <Plus size={16} className="ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white/90 text-gray-800 rounded-md shadow-lg backdrop-blur-md">
                  <a
                    href="#"
                    className="block px-4 py-2 text-[16px] hover:bg-gray-100"
                  >
                    Project 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-[16px] hover:bg-gray-100"
                  >
                    Project 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-[16px] hover:bg-gray-100"
                  >
                    Project 3
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-green-400 text-[16px]">
              Blog
            </a>
            <a href="#" className="hover:text-green-400 text-[16px]">
              Contact Us
            </a>
          </div>

          <div className="flex items-center">
            <Link to="/">
              <img
                src={navbarLast}
                alt="Right"
                className="h-12 w-auto hidden md:block"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md border-t border-white/20 text-gray-800">
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Home
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            About Us
          </a>

          {/* Project Dropdown (Mobile) */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-100"
          >
            Projects <Plus size={16} />
          </button>
          {isDropdownOpen && (
            <div className="pl-6">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Project 1
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Project 2
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Project 3
              </a>
            </div>
          )}

          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Blog
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">
            Contact Us
          </a>

          <div className="flex justify-center py-3">
            <Link to="/">
              <img src={navbarLast} alt="Right" className="h-10 w-auto" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
