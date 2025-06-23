// src/components/ServicesSection.tsx
"use client"

import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming shadcn/ui card component

const services = [
  {
    icon: '🎈', // Balloon emoji for Bouncing Castles
    title: 'Bouncing Castles Galore!',
    description: 'Jump, bounce, and play all day! Our diverse range of safe and vibrant bouncing castles comes in various sizes and exciting themes to fit any party. Fully inspected and always sparkling clean!',
    altText: 'Vibrant bouncing castle for rent',
    image: 'https://placehold.co/400x250/FFDDC1/FF6F61?text=Bouncing+Castle'
  },
  {
    icon: '🍦', // Ice Cream emoji for Fun Food
    title: 'Delicious Fun Food Stations',
    description: 'Treat your guests to delightful snacks! We offer mouth-watering popcorn, sweet cotton candy, refreshing ice cream, and a dazzling array of delicious sweets and treats. Freshly prepared for maximum joy!',
    altText: 'Popcorn, cotton candy, and ice cream machines',
    image: 'https://placehold.co/400x250/C8E6C9/4CAF50?text=Fun+Food'
  },
  {
    icon: '🤡', // Clown emoji for Live Entertainment
    title: 'Engaging Live Entertainment',
    description: 'Bring laughter and wonder to your event with our professional clowns, captivating magicians, and talented face painters. Interactive shows, balloon twisting, and endless smiles guaranteed!',
    altText: 'Clown entertaining children at a party',
    image: 'https://placehold.co/400x250/B3E5FC/2196F3?text=Clown+Show'
  },
  {
    icon: '🚲', // Bicycle emoji for Rides & Activities
    title: 'Exciting Rides & Activities',
    description: 'Add an adventurous twist with our supervised bicycle and bike riding experiences! Perfect for older kids to enjoy active fun in a safe, controlled environment.',
    altText: 'Kids riding bicycles and tricycles at an event',
    image: 'https://placehold.co/400x250/FFE0B2/FF9800?text=Bike+Rides'
  },
];

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when the section enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Optional: reset animation if it scrolls out of view, set to true for "once: true" behavior
          // setIsVisible(false);
        }
      },
      {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section id="services" className="py-16 bg-blue-50 text-gray-800 rounded-t-3xl shadow-inner">
      <div className="container mx-auto px-4 text-center" ref={sectionRef}>
        {/* Animate the heading and paragraph separately */}
        <h2
          className={`text-4xl font-extrabold text-purple-700 mb-6 drop-shadow-md transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
          `}
        >
          Our Spectrum of Joyful Services
        </h2>
        <p
          className={`text-xl text-gray-600 mb-12 max-w-3xl mx-auto transition-all duration-700 ease-out delay-150
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
          `}
        >
          At KidzJoy Events, we offer a comprehensive range of services to make every child's party an unforgettable adventure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              // Apply animation classes with staggered delay
              // Staggered delay applied based on index for a cascading effect
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`
                bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 transform group
                ${isVisible ? 'opacity-100 translate-y-0 hover:-translate-y-2' : 'opacity-0 translate-y-20'}
              `}
            >
              <Card className="h-full flex flex-col"> {/* Ensure card takes full height for consistent look */}
                <CardHeader className="relative h-48 rounded-t-2xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.altText}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.src = `https://placehold.co/400x250/${['FFDDC1', 'C8E6C9', 'B3E5FC', 'FFE0B2'][index]}/${['FF6F61', '4CAF50', '2196F3', 'FF9800'][index]}?text=${service.title.replace(/\s/g, '+')}`; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className="text-5xl leading-none">{service.icon}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow"> {/* Use flex-grow to push footer to bottom if any */}
                  <CardTitle className="text-2xl font-bold text-purple-700 mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
