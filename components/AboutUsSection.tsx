"use client";

import * as React from "react";
import { Smile, Star, Sparkle } from "lucide-react";

const AboutUsSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-[60vh] py-20 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[420px] h-[420px] bg-gradient-to-br from-[#f0e7ff] via-[#e0f7fa] to-[#fffde4] rounded-full blur-3xl opacity-60 animate-bouncey" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-xl px-4">
        <div className="flex items-center gap-2 mb-2 animate-fadeIn">
          <Smile className="text-[#7c3aed] w-8 h-8" aria-hidden="true" />
          <h2
            id="about-heading"
            className="text-3xl font-bold text-[#22223b] tracking-tight"
          >
            KidzJoy
          </h2>
        </div>
        <p className="text-lg text-[#5e60ce] font-medium text-center animate-fadeIn delay-100">
          Play. Laugh. Celebrate.
        </p>
        <div className="flex flex-row items-center justify-center gap-4 mt-4 animate-fadeIn delay-200">
          <Star className="w-7 h-7 text-[#fbbf24]" aria-hidden="true" />
          <span className="text-base text-[#22223b] font-semibold">
            Minimal. Fun. Safe.
          </span>
          <Sparkle className="w-7 h-7 text-[#38bdf8]" aria-hidden="true" />
        </div>
        <p className="text-base text-[#6c757d] text-center max-w-md mt-6 animate-fadeIn delay-300">
          We create playful, safe, and memorable kids' events in Uganda. Simple.
          Modern. Joyful.
        </p>
      </div>
      <style jsx>{`
        @keyframes bouncey {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-18px) scale(1.04);
          }
        }
        .animate-bouncey {
          animation: bouncey 7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
        .animate-fadeIn {
          animation: fadeIn 1.1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default AboutUsSection;
