"use client";

import React from "react";
import { CheckCircle, Star, Sparkle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "UGX 350,000",
    highlight: false,
    features: [
      "Medium Bouncing Castle (4h)",
      "Popcorn Machine (attendant & supplies)",
      "Standard Sweet Treat Bar",
      "Delivery & Setup (Kampala)",
    ],
  },
  {
    name: "Super",
    price: "UGX 600,000",
    highlight: true,
    features: [
      "Large Themed Bouncing Castle (5h)",
      "Popcorn & Cotton Candy Machines",
      "Ice Cream Station (attendant & supplies)",
      "Clown or Face Painter (2h)",
      "Extended Sweet Treat Bar",
      "Delivery & Setup (Kampala)",
    ],
  },
  {
    name: "Extravaganza",
    price: "UGX 1,200,000",
    highlight: false,
    features: [
      "2 Large or 1 Giant Castle (Full Day)",
      "Full Fun Food Buffet (Popcorn, Cotton Candy, Ice Cream, Hot Dogs, Mini Pizzas)",
      "Clown & Face Painter (3h)",
      "Bicycle/Trike Riding Zone",
      "Premium Sweet Treat & Dessert Table",
      "Delivery & Setup (Greater Kampala)",
    ],
  },
];

export default function PricingPage() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-20 bg-gradient-to-br from-[#f7fafc] via-[#f0f4ff] to-[#e0e7ff] w-full">
      {/* Decorative Gradient Blobs */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[90vw] max-w-[420px] h-[320px] md:h-[420px] bg-gradient-to-br from-[#7c3aed]/20 via-[#38bdf8]/10 to-[#fbbf24]/10 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90vw] max-w-[420px] h-[320px] md:h-[420px] bg-gradient-to-tr from-[#fbbf24]/10 via-[#38bdf8]/10 to-[#7c3aed]/20 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center gap-12 px-4">
        <div className="flex flex-col items-center gap-3 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#22223b] text-center drop-shadow-xl">
            Party Packages & Pricing
          </h1>
          <p className="text-lg md:text-xl text-[#5e60ce] font-medium text-center max-w-2xl">
            Choose the perfect package for your celebration. All plans include
            setup, delivery, and a magical experience!
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 animate-fade-in delay-200">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`flex-1 max-w-sm w-full flex flex-col items-center rounded-3xl shadow-xl px-7 py-10 bg-white/90 backdrop-blur-md border-2 min-h-[520px] h-full transition-transform duration-300 hover:scale-105 ${
                plan.highlight
                  ? "border-[#7c3aed] ring-2 ring-[#7c3aed]/30 shadow-2xl"
                  : "border-transparent"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {plan.highlight ? (
                  <Star className="w-7 h-7 text-[#7c3aed] animate-bounce-slow" />
                ) : (
                  <Sparkle className="w-6 h-6 text-[#38bdf8]" />
                )}
                <h2
                  className={`text-2xl font-bold ${
                    plan.highlight ? "text-[#7c3aed]" : "text-[#22223b]"
                  }`}
                >
                  {plan.name}
                </h2>
              </div>
              <div className="text-3xl font-extrabold text-[#22223b] mb-4">
                {plan.price}
              </div>
              <ul className="flex flex-col gap-3 mb-8 w-full">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-[#374151] text-base"
                  >
                    <CheckCircle className="w-5 h-5 text-[#7c3aed] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto w-full py-4 rounded-full font-semibold text-lg shadow-md transition-all duration-300 bg-gradient-to-r from-[#7c3aed] via-[#38bdf8] to-[#5e60ce] text-white hover:from-[#38bdf8] hover:to-[#7c3aed] hover:shadow-xl active:scale-95 ${
                  plan.highlight ? "ring-2 ring-[#7c3aed]/40" : ""
                }`}
              >
                GET QUOTE
              </button>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 1.1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .delay-200 {
          animation-delay: 0.2s;
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
        .animate-bounce-slow {
          animation: bounceSlow 2.5s infinite alternate
            cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes bounceSlow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-14px);
          }
        }
      `}</style>
    </section>
  );
}
