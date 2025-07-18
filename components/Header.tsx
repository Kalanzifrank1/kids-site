"use client";
import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="bg-gradient-to-b from-[#ede9fe] via-[#f3e8ff] to-[#e0e7ff] text-[#22223b] shadow-lg sticky top-0 z-50 rounded-b-3xl border-b-0 p-0 m-0">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#7c3aed] via-[#38bdf8] to-[#fbbf24] shadow-md group-hover:scale-105 transition-transform duration-200">
            {/* Modern minimal star icon for logo */}
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon
                points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="text-2xl font-extrabold tracking-tight group-hover:text-[#7c3aed] transition-colors duration-200">
            KidzJoy
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-3 py-1.5 rounded-lg font-semibold text-base text-[#5e60ce] hover:text-[#7c3aed] transition-colors duration-200 focus:outline-none group"
            >
              <span>{link.name}</span>
              <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-[#7c3aed] rounded-full transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8" />
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="text-[#7c3aed] hover:bg-[#e0e7ff] p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </Button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex flex-col items-end md:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-3/4 max-w-xs bg-white rounded-l-2xl shadow-2xl h-full flex flex-col py-8 px-6 gap-6 animate-[slideIn_0.3s_cubic-bezier(0.4,0,0.2,1)_both]"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              href="/"
              className="flex items-center gap-2 mb-6"
              onClick={() => setOpen(false)}
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#7c3aed] via-[#38bdf8] to-[#fbbf24] shadow-md">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="#fbbf24"
                  />
                  <circle cx="9" cy="10" r="1" fill="#7c3aed" />
                  <circle cx="15" cy="10" r="1" fill="#7c3aed" />
                  <path
                    d="M8.5 15c1.5-1 5.5-1 7 0"
                    stroke="#7c3aed"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-xl font-extrabold tracking-tight text-[#7c3aed]">
                KidzJoy
              </span>
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-2 py-3 rounded-lg font-semibold text-lg text-[#5e60ce] hover:text-[#7c3aed] transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
