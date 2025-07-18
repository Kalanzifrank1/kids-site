"use client";

import React from "react";
import Link from "next/link";
import { Sparkle, Star, Smile } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-t from-[#e0e7ff] via-[#f3e8ff] to-[#ede9fe] rounded-b-3xl shadow-xl pt-0 mt-0"
    >
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-gradient-to-br from-[#fbbf24]/30 via-[#7c3aed]/20 to-[#38bdf8]/20 rounded-full blur-3xl opacity-70 animate-blob1" />
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-gradient-to-tr from-[#38bdf8]/20 via-[#fbbf24]/20 to-[#7c3aed]/30 rounded-full blur-3xl opacity-70 animate-blob2" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4 pt-20 pb-20 md:pt-28 md:pb-28">
        {/* Left: Textual Content */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-7 animate-fade-in">
          <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#7c3aed] via-[#38bdf8] to-[#5e60ce] shadow-lg mb-2 animate-bounce-slow">
            <Smile className="w-10 h-10 text-white" aria-hidden="true" />
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#22223b] text-center md:text-left leading-tight drop-shadow-xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] via-[#38bdf8] to-[#5e60ce]">
              KidzJoy
            </span>{" "}
            Events
          </h1>
          <p className="text-xl md:text-2xl text-[#5e60ce] font-medium text-center md:text-left max-w-xl">
            Playful, safe, and unforgettable kids' parties in Uganda. We turn
            every celebration into a magical memory.
          </p>
          <div className="flex flex-row gap-4 mt-2">
            <div className="flex flex-col items-center gap-2 bg-white/80 rounded-2xl shadow-md px-5 py-3 backdrop-blur-md min-w-[140px] hover:scale-105 transition-transform duration-300">
              <Sparkle className="w-6 h-6 text-[#38bdf8] mb-1" />
              <span className="text-sm font-semibold text-[#22223b]">
                Creative Themes
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-white/80 rounded-2xl shadow-md px-5 py-3 backdrop-blur-md min-w-[140px] hover:scale-105 transition-transform duration-300">
              <Star className="w-6 h-6 text-[#7c3aed] mb-1" />
              <span className="text-sm font-semibold text-[#22223b]">
                Premium Service
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-white/80 rounded-2xl shadow-md px-5 py-3 backdrop-blur-md min-w-[140px] hover:scale-105 transition-transform duration-300">
              <Smile className="w-6 h-6 text-[#38bdf8] mb-1" />
              <span className="text-sm font-semibold text-[#22223b]">
                Happy Memories
              </span>
            </div>
          </div>
          <Link
            href="/pricing"
            className="mt-8 text-lg md:text-xl font-bold px-10 py-5 rounded-full shadow-xl transition-all duration-300 bg-gradient-to-r from-[#7c3aed] via-[#38bdf8] to-[#5e60ce] text-white hover:from-[#38bdf8] hover:to-[#7c3aed] hover:shadow-2xl active:scale-95 flex items-center gap-3 group border-0 no-underline"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:animate-bounce-slow">
              <Star className="w-6 h-6 text-white drop-shadow" />
            </span>
            <span className="drop-shadow">Explore Packages</span>
          </Link>
        </div>
        {/* Right: Illustration or Visual */}
        <div className="flex-1 flex items-center justify-center animate-fade-in delay-200">
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7c3aed]/20 via-[#38bdf8]/10 to-[#fbbf24]/10 blur-2xl" />
            <img
              src="/globe.svg"
              alt="Kids party illustration"
              className="relative z-10 w-4/5 max-w-xs drop-shadow-xl animate-bounce-slow"
              draggable="false"
            />
          </div>
        </div>
      </div>
      {/* Animations */}
      <style jsx global>{`
        .animate-blob1 {
          animation: blob1 8s ease-in-out infinite alternate;
        }
        .animate-blob2 {
          animation: blob2 10s ease-in-out infinite alternate;
        }
        @keyframes blob1 {
          0% {
            transform: scale(1) translateY(0);
          }
          100% {
            transform: scale(1.08) translateY(20px);
          }
        }
        @keyframes blob2 {
          0% {
            transform: scale(1) translateY(0);
          }
          100% {
            transform: scale(1.05) translateY(-20px);
          }
        }
        .animate-bounce-slow {
          animation: bounceSlow 2.5s infinite alternate
            cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes bounceSlow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-18px);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1.1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
