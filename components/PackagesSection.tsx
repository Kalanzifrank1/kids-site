// src/components/PackagesSection.tsx
"use client"

import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming shadcn/ui button component
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const packages = [
  {
    name: 'Basic Fun Starter',
    price: 'Starting from UGX 350,000',
    description: 'Perfect for intimate gatherings and smaller celebrations.',
    features: [
      '1 Medium Bouncing Castle (4 hours)',
      'Popcorn Machine (with attendant & supplies)',
      'Standard Sweet Treat Bar',
      'Delivery & Setup within Kampala'
    ],
    themeColor: 'bg-green-100 border-green-500'
  },
  {
    name: 'Super Celebration Package',
    price: 'Starting from UGX 750,000',
    description: 'Our most popular choice for lively birthday parties!',
    features: [
      '1 Large Themed Bouncing Castle (5 hours)',
      'Popcorn & Cotton Candy Machines (with attendants & supplies)',
      'Ice Cream Station (with attendant & supplies)',
      'Professional Clown or Face Painter (2 hours)',
      'Extended Sweet Treat Bar',
      'Delivery & Setup within Kampala'
    ],
    themeColor: 'bg-yellow-100 border-yellow-500'
  },
  {
    name: 'Ultimate Extravaganza',
    price: 'Starting from UGX 1,500,000',
    description: 'The complete package for grand, unforgettable events!',
    features: [
      'Choice of 2 Large Bouncing Castles or 1 Giant Castle (Full Day)',
      'Full Fun Food Buffet (Popcorn, Cotton Candy, Ice Cream, Hot Dogs, Mini Pizzas - with attendants)',
      'Professional Clown AND Face Painter (3 hours)',
      'Bicycle/Trike Riding Zone (with supervisor)',
      'Premium Sweet Treat & Dessert Table',
      'Professional Photographer (2 hours)',
      'Full Logistics & On-site Coordinator',
      'Delivery & Setup for Greater Kampala'
    ],
    themeColor: 'bg-red-100 border-red-500'
  },
];

const PackagesSection: React.FC = () => {
  return (
    <section id="packages" className="py-16 bg-purple-50 text-gray-800 rounded-b-3xl shadow-inner">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-pink-700 mb-6 drop-shadow-md">Choose Your Perfect Party Package!</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          We've crafted special packages to make party planning simple and stress-free. Select one that fits your celebration, or contact us to customize!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <Card key={index} className={`flex flex-col rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 border-4 ${pkg.themeColor}`}>
              <CardHeader className={`p-6 ${pkg.themeColor.split(' ')[0]} rounded-t-xl`}>
                <CardTitle className="text-3xl font-bold text-purple-800 mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-lg text-gray-700">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-6 text-left">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">{pkg.price}</h3>
                <ul className="space-y-2 text-gray-700 text-lg">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Get a Quote for this Package
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
