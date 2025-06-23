// src/components/ContactSection.tsx
"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label'; // Assuming shadcn/ui Label component
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-red-100 to-yellow-100 text-gray-800 rounded-xl shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6 drop-shadow-md">Get in Touch with KidzJoy!</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Ready to plan an unforgettable party? Contact us today for inquiries, custom quotes, or any questions you may have. We're here to help!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <Card className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
            <CardHeader className="mb-6">
              <CardTitle className="text-3xl font-bold text-blue-700">Reach Out Directly</CardTitle>
            </CardHeader>
            <CardContent className="text-left space-y-6">
              {/* Corrected structure: div directly inside CardContent, then ul, then li */}
              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Phone:</h3>
                <a href="tel:+256771234567" className="text-lg text-gray-700 hover:text-blue-500 transition duration-300 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                  +256 771 234567
                </a>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Email:</h3>
                <a href="mailto:info@kidzjoyevents.com" className="text-lg text-gray-700 hover:text-blue-500 transition duration-300 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  info@kidzjoyevents.com
                </a>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">WhatsApp:</h3>
                <a href="https://wa.me/256771234567" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-blue-500 transition duration-300 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.04 2C6.58 2 2 6.47 2 12.04c0 1.51.38 2.94 1.05 4.2L2 22l6.04-1.56a9.98 9.98 0 004 1.02c5.46 0 9.92-4.47 9.92-10.04C22 6.47 17.54 2 12.04 2zM17.47 15.65c-.09.15-.5.3-.95.38a4.04 4.04 0 01-2.45-.66c-.66-.46-1.57-1.46-2.1-2.26-.53-.8-1.07-1.63-1.43-2.19-.36-.56-.7-1.12-1.04-1.68-.34-.56-.67-1.09-1-1.6-.33-.5-.65-1-1.03-1.55a.3.3 0 01-.06-.11c0-.06 0-.12-.06-.17-.05-.09-.12-.13-.23-.13-.06 0-.12 0-.18.02-.06.01-.12.03-.18.06-.06.03-.12.06-.18.09-.17.09-.32.22-.44.38-.12.16-.23.36-.34.58-.11.22-.2.45-.29.7-.09.25-.17.52-.25.8-.08.28-.15.58-.2 1-.05.42-.08.85-.08 1.28a.33.33 0 00.06.18c.03.06.06.12.09.18.06.12.12.25.2.38.08.13.16.27.25.4.09.13.18.27.29.41.1.14.22.28.34.42.12.14.25.29.39.42.14.13.29.28.44.4.15.12.31.25.48.37.17.12.35.24.53.36.18.12.37.24.57.34.2.1.4.19.62.28.22.09.45.16.7.23.25.07.5.12.77.16.27.04.54.06.82.06.28 0 .56-.02.83-.06.27-.04.54-.09.8-.16.26-.07.51-.15.75-.25.24-.1-.48-1.59-.83-2.18z" clipRule="evenodd"></path></svg>
                  Chat with us on WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <a href="https://facebook.com/kidzjoyevents" target="_blank" rel="noopener noreferrer" aria-label="Facebook Page" className="text-gray-700 hover:text-blue-600 transition duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="https://instagram.com/kidzjoyevents" target="_blank" rel="noopener noreferrer" aria-label="Instagram Page" className="text-gray-700 hover:text-pink-600 transition duration-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.715.056.815.036 1.447.174 2.072.42.637.265 1.18.627 1.637 1.084.456.456.819 1.001 1.084 1.637.246.625.384 1.257.42 2.072.043.93.056 1.286.056 3.715s-.013 2.784-.056 3.715c-.036.815-.174 1.447-.42 2.072-.265.637-.627 1.18-1.084 1.637-.456.456-1.001.819-1.637 1.084-.625.246-1.257.384-2.072.42-.93.043-1.286.056-3.715.056s-2.784-.013-3.715-.056c-.815-.036-1.447-.174-.42-2.072-.265-.637-.627-1.18-1.084-1.637-.456-.456-.819-1.001-1.084-1.637-.246-.625-.384-1.257-.42-2.072-.043-.93-.056-1.286-.056-3.715s.013-2.784.056-3.715c.036-.815.174-1.447.42-2.072.265-.637.627-1.18 1.084-1.637.456-.456 1.001-.819 1.637-1.084.625-.246 1.257-.384 2.072-.42.93-.043 1.286-.056 3.715-.056zm0 2.163c-2.318 0-2.645.01-3.627.054-.702.03-1.157.149-1.52.298-.36.149-.668.355-.953.64-.285.284-.49.592-.64 1.015-.148.423-.267.878-.298 1.58-.044.982-.054 1.309-.054 3.627s.01 2.645.054 3.627c.03 1.144.149 1.599.298 1.962.149.36.355.668.64 1.015.284.354.592.64.953.64.423.148.878.267 1.58.298.982.044 1.309.054 3.627.054s2.645-.01 3.627-.054c.702-.03 1.157-.149 1.52-.298.36-.149.668-.355.953-.64.285-.284.49-.592.64-1.015.148-.423.267-.878.298-1.58.044-.982.054-1.309.054-3.627s-.01-2.645-.054-3.627c-.03-1.144-.149-1.599-.298-1.962-.149-.36-.355-.668-.64-1.015-.284-.354-.592-.64-.953-.64-.423-.148-.878-.267-1.58-.298-.982-.044-1.309-.054-3.627-.054zm0 6.602c-1.602 0-2.902-1.3-2.902-2.902s1.3-2.902 2.902-2.902 2.902 1.3 2.902 2.902-1.3 2.902-2.902 2.902zm0 2.164a5.066 5.066 0 100-10.132 5.066 5.066 0 000 10.132zm6.708-8.814c0 .762-.615 1.377-1.377 1.377s-1.377-.615-1.377-1.377S16.096 4.548 16.858 4.548c.762 0 1.377.615 1.377 1.377z" clipRule="evenodd" /></svg>
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-500">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Office Hours:</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-white rounded-2xl shadow-xl p-8 border-r-4 border-yellow-500">
            <CardHeader className="mb-6">
              <CardTitle className="text-3xl font-bold text-yellow-700">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg font-semibold text-gray-700 mb-2 block">Your Name</Label>
                  <Input type="text" id="name" placeholder="John Doe" className="rounded-lg p-3 text-lg" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-lg font-semibold text-gray-700 mb-2 block">Your Email</Label>
                  <Input type="email" id="email" placeholder="john.doe@example.com" className="rounded-lg p-3 text-lg" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-lg font-semibold text-gray-700 mb-2 block">Phone Number (Optional)</Label>
                  <Input type="tel" id="phone" placeholder="+256 7XX XXX XXX" className="rounded-lg p-3 text-lg" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-lg font-semibold text-gray-700 mb-2 block">Your Message</Label>
                  <Textarea id="message" rows={5} placeholder="Tell us about your event! Date, services interested in, number of children, etc." className="rounded-lg p-3 text-lg" />
                </div>
                <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
