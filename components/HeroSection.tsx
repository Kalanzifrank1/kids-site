// src/components/HeroSection.tsx
"use client"

import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming shadcn/ui button component

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 rounded-b-3xl shadow-xl">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline // Ensures video plays automatically on iOS
      >
        {/*
          IMPORTANT: Replace 'https://www.w3schools.com/tags/movie.mp4' with your actual video URL.
          For a production site, it's highly recommended to host your video locally in your
          Next.js public directory (e.g., /public/videos/party-bg.mp4) and use a relative path
          like '/videos/party-bg.mp4'. Using external URLs might have performance or CORS issues.
        */}
        <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to ensure text readability on top of video, with transparency */}
      <div className="absolute inset-0 z-10 bg-black opacity-30"></div> {/* Dark overlay for better text contrast */}


      <div className="relative z-20 p-6 sm:p-10 md:p-16 bg-white bg-opacity-30 rounded-3xl shadow-2xl max-w-4xl mx-auto backdrop-blur-sm transform hover:scale-105 transition-transform duration-500 ease-in-out">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-700 leading-tight mb-4 drop-shadow-lg">
          <span className="text-pink-600">Unforgettable Fun</span> for Every Child's Celebration!
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          From exhilarating bouncing castles to delicious treats and lively clowns, KidzJoy Events brings the magic to your kids' parties in Kampala and beyond.
        </p>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-purple-800 font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          Explore Our Magical Packages
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
