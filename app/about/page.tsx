"use client";

import * as React from "react";
import { Users, Sparkle, Star, Smile } from "lucide-react";

const values = [
  {
    icon: <Sparkle className="w-7 h-7 text-[#38bdf8]" aria-hidden="true" />,
    title: "Creativity",
    desc: "We design magical, memorable experiences for every child.",
  },
  {
    icon: <Star className="w-7 h-7 text-[#fbbf24]" aria-hidden="true" />,
    title: "Excellence",
    desc: "We deliver top-quality, safe, and joyful events.",
  },
  {
    icon: <Smile className="w-7 h-7 text-[#7c3aed]" aria-hidden="true" />,
    title: "Happiness",
    desc: "We spread smiles and laughter, always.",
  },
];

export default function AboutPage() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-20 bg-gradient-to-br from-[#f7fafc] via-[#f0f4ff] to-[#e0e7ff]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[420px] h-[420px] bg-gradient-to-br from-[#f0e7ff] via-[#e0f7fa] to-[#fffde4] rounded-full blur-3xl opacity-60 animate-bounce" />
      </div>
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col gap-16 items-center px-4">
        {/* Hero */}
        <div className="flex flex-col items-center gap-4 animate-fade-in">
          <Users className="w-10 h-10 text-[#7c3aed] mb-2" aria-hidden="true" />
          <h1 className="text-4xl font-extrabold text-[#22223b] tracking-tight text-center">
            About KidzJoy
          </h1>
          <p className="text-lg text-[#5e60ce] font-medium text-center max-w-xl">
            We create playful, safe, and unforgettable kids' events in Uganda.
            Our mission is simple: make every celebration magical, stress-free,
            and full of joy.
          </p>
        </div>
        {/* Values */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 animate-fade-in delay-200">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex-1 min-w-[220px] max-w-xs flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-7 gap-4 min-h-[220px] h-full justify-between backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group"
            >
              <div className="mb-1 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-[#22223b] text-center flex-shrink-0">
                {v.title}
              </h3>
              <p className="text-base text-[#6c757d] text-center leading-relaxed flex-1 flex items-center justify-center">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
        {/* Team */}
        <div className="flex flex-col items-center gap-4 animate-fade-in delay-300">
          <h2 className="text-2xl font-bold text-[#22223b] mb-2">
            Meet Our Team
          </h2>
          <div className="flex flex-row gap-6 items-center justify-center flex-wrap">
            {/* Example team avatars, replace with real ones if available */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7c3aed]/30 via-[#38bdf8]/30 to-[#fbbf24]/30 flex items-center justify-center shadow-md">
                  <Smile
                    className="w-10 h-10 text-[#7c3aed]"
                    aria-hidden="true"
                  />
                </div>
                <span className="text-base font-semibold text-[#22223b]">
                  Team Member
                </span>
                <span className="text-xs text-[#6c757d]">Entertainer</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
