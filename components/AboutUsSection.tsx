// src/components/AboutUsSection.tsx
"use client"

import React from 'react';

const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-pink-50 text-gray-800 rounded-xl shadow-lg">
      <div className="container mx-auto px-4 text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-green-700 mb-6 drop-shadow-md text-center">About KidzJoy Events</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          Learn more about our passion for creating joyful, safe, and unforgettable experiences for children's parties across Uganda.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://placehold.co/600x400/98FB98/2E8B57?text=Our+Team"
              alt="KidzJoy Events team members ensuring quality and safety"
              className="rounded-3xl shadow-2xl object-cover w-full h-auto transform hover:scale-105 transition-transform duration-500 ease-in-out"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/98FB98/2E8B57?text=Team+Photo'; }}
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-purple-700 mb-4">Our Story & Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded with a dream to bring unparalleled joy to children's celebrations, KidzJoy Events has grown to become Kampala's trusted partner for memorable parties. We believe every child deserves a magical day, and every parent deserves a stress-free planning experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              **Our Mission:** To create vibrant, safe, and engaging entertainment experiences that foster happiness, laughter, and cherished memories for children and families.
            </p>
            <h3 className="text-3xl font-bold text-purple-700 mb-4">Commitment to Safety & Quality</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Your child's safety is our highest priority. All our equipment, from bouncing castles to food machines, undergoes rigorous safety checks and regular maintenance. Our staff are highly trained, professional, and dedicated to ensuring a secure and fun environment at every event. We adhere to strict hygiene standards for all food items.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We pride ourselves on providing top-quality, well-maintained equipment and highly professional, child-friendly entertainers who genuinely love what they do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
