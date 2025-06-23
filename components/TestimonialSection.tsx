// src/components/TestimonialsSection.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card'; // Assuming shadcn/ui card component

const testimonials = [
  {
    quote: "KidzJoy Events made my daughter's birthday absolutely magical! The bouncing castle was a hit, and the clown kept everyone laughing. So professional and stress-free!",
    author: "Sarah N., Happy Parent",
    location: "Kampala"
  },
  {
    quote: "The food stations were a huge success at our school fun day. The popcorn and cotton candy were delicious, and the kids loved the variety. Highly recommend!",
    author: "Mr. David O., School Administrator",
    location: "Entebbe"
  },
  {
    quote: "We hired them for our son's 5th birthday, and they exceeded all expectations. The team was fantastic, and everything was set up perfectly. Truly unforgettable!",
    author: "Grace M., Delighted Client",
    location: "Kira"
  },
  {
    quote: "The bike riding activity was a brilliant addition to our family picnic. The supervisor was patient and great with the kids. So much fun!",
    author: "John P., Event Organizer",
    location: "Mukono"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-purple-100 text-gray-800 rounded-xl shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6 drop-shadow-md">What Our Happy Parents Say</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Don't just take our word for it – hear from the families and organizations who've experienced the KidzJoy difference!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 flex flex-col items-center p-6 border-b-4 border-yellow-400">
              <CardContent className="text-center">
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  " {testimonial.quote} "
                </blockquote>
                <p className="font-semibold text-purple-700 text-lg">- {testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <p className="text-xl text-gray-700 font-semibold">
            Ready to create your own amazing memories? <a href="#contact" className="text-pink-600 hover:underline">Contact us today!</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
