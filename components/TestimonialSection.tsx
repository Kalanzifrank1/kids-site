"use client";
import React, { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "KidzJoy Events made my daughter's birthday absolutely magical! The bouncing castle was a hit, and the clown kept everyone laughing. So professional and stress-free!",
    author: "Sarah N.",
    role: "Happy Parent",
    location: "Kampala",
    avatar: "/file.svg",
  },
  {
    quote:
      "The food stations were a huge success at our school fun day. The popcorn and cotton candy were delicious, and the kids loved the variety. Highly recommend!",
    author: "Mr. David O.",
    role: "School Administrator",
    location: "Entebbe",
    avatar: "/globe.svg",
  },
  {
    quote:
      "We hired them for our son's 5th birthday, and they exceeded all expectations. The team was fantastic, and everything was set up perfectly. Truly unforgettable!",
    author: "Grace M.",
    role: "Delighted Client",
    location: "Kira",
    avatar: "/window.svg",
  },
  {
    quote:
      "The bike riding activity was a brilliant addition to our family picnic. The supervisor was patient and great with the kids. So much fun!",
    author: "John P.",
    role: "Event Organizer",
    location: "Mukono",
    avatar: "/vercel.svg",
  },
];

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-[#f7fafc] via-[#e0e7ff] to-[#f0f4ff] text-gray-800"
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] via-[#38bdf8] to-[#5e60ce] mb-6 drop-shadow-xl">
          What Our Clients Say
        </h2>
        <p className="text-xl text-[#5e60ce] mb-12 max-w-2xl mx-auto">
          Real stories from families and organizations who've experienced the
          KidzJoy difference.
        </p>

        <div className="relative flex flex-col items-center">
          <div className="w-full">
            <div className="relative flex flex-col items-center bg-white/90 rounded-3xl shadow-2xl px-8 py-12 min-h-[340px] border-2 border-[#7c3aed]/10 animate-fade-in">
              <div className="flex justify-center mb-4">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].author}
                  className="w-20 h-20 rounded-full border-4 border-[#7c3aed]/30 shadow-lg object-cover bg-white"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-yellow-400 mr-1"
                  />
                ))}
              </div>
              <blockquote className="text-2xl italic text-[#22223b] font-medium mb-6 animate-fade-in">
                “{testimonials[current].quote}”
              </blockquote>
              <div className="flex flex-col items-center gap-1">
                <span className="font-bold text-lg text-[#7c3aed]">
                  {testimonials[current].author}
                </span>
                <span className="text-sm text-[#5e60ce]">
                  {testimonials[current].role} —{" "}
                  {testimonials[current].location}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow-md border border-[#7c3aed]/20 flex items-center justify-center text-[#7c3aed] hover:bg-[#7c3aed]/10 transition"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === current ? "bg-[#7c3aed]" : "bg-[#d1d5db]"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow-md border border-[#7c3aed]/20 flex items-center justify-center text-[#7c3aed] hover:bg-[#7c3aed]/10 transition"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 1.1s cubic-bezier(0.23, 1, 0.32, 1) both;
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

export default TestimonialsSection;
