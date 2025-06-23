// src/components/Header.tsx
import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming shadcn/ui button component

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-pink-400 to-purple-500 text-white p-4 shadow-lg sticky top-0 z-50 rounded-b-xl">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo or Company Name */}
        <div className="text-3xl font-extrabold flex items-center gap-2">
          {/* Using a simple SVG for a playful logo */}
          <svg className="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-2a1 1 0 10-2 0 1 1 0 002 0zm-7 4a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zm3 0a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zm3 0a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1z" clipRule="evenodd" />
            <path d="M10 12.5a2.5 2.5 0 00-5 0c0 .72.29 1.4.78 1.9L5.5 14h9l-.28-.6c.49-.5.78-1.18.78-1.9a2.5 2.5 0 00-5 0z" />
          </svg>
          <span className="drop-shadow-md">KidzJoy Events</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-lg font-semibold">
          <a href="#services" className="hover:text-yellow-300 transition duration-300">Services</a>
          <a href="#packages" className="hover:text-yellow-300 transition duration-300">Packages</a>
          <a href="#gallery" className="hover:text-yellow-300 transition duration-300">Gallery</a>
          <a href="#about" className="hover:text-yellow-300 transition duration-300">About Us</a>
          <a href="#faq" className="hover:text-yellow-300 transition duration-300">FAQ</a>
          <a href="#contact" className="hover:text-yellow-300 transition duration-300">Contact</a>
        </nav>

        {/* Mobile Navigation Button (Hamburger Icon) */}
        <div className="md:hidden">
          <Button variant="ghost" className="text-white hover:bg-white/20">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </Button>
          {/* You would typically implement a mobile menu overlay/drawer here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
