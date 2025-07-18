"use client";
import React from "react";

const services = [
  {
    title: "Bouncing Castles Galore!",
    description:
      "Jump, bounce, and play all day! Our vibrant, safe castles come in all sizes and themes—always sparkling clean and ready for fun.",
    altText: "Vibrant bouncing castle for rent",
    image: "https://placehold.co/400x250/FFDDC1/FF6F61?text=Bouncing+Castle",
    gradient: "from-[#fbbf24]/80 via-[#7c3aed]/40 to-[#38bdf8]/30",
  },
  {
    title: "Delicious Fun Food Stations",
    description:
      "Treat your guests to popcorn, cotton candy, ice cream, and a dazzling sweet bar. Always fresh, always a hit!",
    altText: "Popcorn, cotton candy, and ice cream machines",
    image: "https://placehold.co/400x250/C8E6C9/4CAF50?text=Fun+Food",
    gradient: "from-[#38bdf8]/60 via-[#fbbf24]/30 to-[#7c3aed]/20",
  },
  {
    title: "Engaging Live Entertainment",
    description:
      "Laughter and wonder with pro clowns, magicians, and face painters. Interactive shows, balloon twisting, and endless smiles!",
    altText: "Clown entertaining children at a party",
    image: "https://placehold.co/400x250/B3E5FC/2196F3?text=Clown+Show",
    gradient: "from-[#7c3aed]/60 via-[#fbbf24]/30 to-[#38bdf8]/20",
  },
  {
    title: "Exciting Rides & Activities",
    description:
      "Supervised bike and trike rides for adventurous kids. Safe, active fun in a vibrant, controlled environment.",
    altText: "Kids riding bicycles and tricycles at an event",
    image: "https://placehold.co/400x250/FFE0B2/FF9800?text=Bike+Rides",
    gradient: "from-[#38bdf8]/60 via-[#7c3aed]/30 to-[#fbbf24]/20",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-br from-[#f7fafc] via-[#e0e7ff] to-[#f0f4ff] text-gray-800 overflow-hidden"
    >
      {/* Decorative blurred blobs */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-gradient-to-br from-[#7c3aed]/20 via-[#38bdf8]/10 to-[#fbbf24]/10 rounded-full blur-3xl opacity-60 z-0" />
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-gradient-to-tr from-[#fbbf24]/10 via-[#38bdf8]/10 to-[#7c3aed]/20 rounded-full blur-3xl opacity-60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] via-[#38bdf8] to-[#fbbf24] mb-6 drop-shadow-xl animate-fade-in">
          Our Spectrum of Joyful Services
        </h2>
        <p className="text-xl text-[#5e60ce] mb-14 max-w-3xl mx-auto animate-fade-in delay-150">
          Everything you need for an unforgettable party—delivered with
          creativity, care, and a touch of magic.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group relative flex flex-col items-center justify-between min-h-[420px] bg-white/80 rounded-3xl shadow-2xl border-2 border-transparent hover:border-[#7c3aed] transition-all duration-500 overflow-hidden backdrop-blur-xl hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-3xl">
                <img
                  src={service.image}
                  alt={service.altText}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-80 group-hover:opacity-90 transition-all duration-500`}
                />
              </div>
              <div className="flex flex-col flex-1 justify-between p-7 w-full">
                <h3 className="text-2xl font-bold text-[#7c3aed] mb-3 drop-shadow-sm group-hover:text-[#22223b] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-base font-medium mb-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 1.1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .delay-150 {
          animation-delay: 0.15s;
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

export default ServicesSection;
