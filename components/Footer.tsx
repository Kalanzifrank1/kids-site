// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-8 rounded-t-xl shadow-inner">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-yellow-300">KidzJoy Events</h3>
          <p className="text-gray-300">Bringing magical and memorable entertainment to children's parties across Kampala and beyond!</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-yellow-300">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#services" className="hover:text-yellow-300 transition duration-300">Our Services</a></li>
            <li><a href="#packages" className="hover:text-yellow-300 transition duration-300">Party Packages</a></li>
            <li><a href="#gallery" className="hover:text-yellow-300 transition duration-300">Event Gallery</a></li>
            <li><a href="#about" className="hover:text-yellow-300 transition duration-300">About Us</a></li>
            <li><a href="#faq" className="hover:text-yellow-300 transition duration-300">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-yellow-300">Contact Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="tel:+256771234567" className="hover:text-yellow-300 transition duration-300 flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                +256 771 234567
              </a>
            </li>
            <li>
              <a href="mailto:info@kidzjoyevents.com" className="hover:text-yellow-300 transition duration-300 flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                info@kidzjoyevents.com
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
                Kampala, Uganda
            </li>
            <li className="flex items-center justify-center md:justify-start gap-4 pt-2">
                <a href="https://facebook.com/kidzjoyevents" target="_blank" rel="noopener noreferrer" aria-label="Facebook Page" className="text-gray-300 hover:text-blue-600 transition duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href="https://instagram.com/kidzjoyevents" target="_blank" rel="noopener noreferrer" aria-label="Instagram Page" className="text-gray-300 hover:text-pink-600 transition duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.715.056.815.036 1.447.174 2.072.42.637.265 1.18.627 1.637 1.084.456.456.819 1.001 1.084 1.637.246.625.384 1.257.42 2.072.043.93.056 1.286.056 3.715s-.013 2.784-.056 3.715c-.036.815-.174 1.447-.42 2.072-.265.637-.627 1.18-1.084 1.637-.456.456-1.001.819-1.637 1.084-.625.246-1.257.384-2.072.42-.93.043-1.286.056-3.715.056s-2.784-.013-3.715-.056c-.815-.036-1.447-.174-.42-2.072-.265-.637-.627-1.18-1.084-1.637-.456-.456-.819-1.001-1.084-1.637-.246-.625-.384-1.257-.42-2.072-.043-.93-.056-1.286-.056-3.715s.013-2.784.056-3.715c.036-.815.174-1.447.42-2.072.265-.637.627-1.18 1.084-1.637.456-.456 1.001-.819 1.637-1.084.625-.246 1.257-.384 2.072-.42.93-.043 1.286-.056 3.715-.056zm0 2.163c-2.318 0-2.645.01-3.627.054-.702.03-1.157.149-1.52.298-.36.149-.668.355-.953.64-.285.284-.49.592-.64 1.015-.148.423-.267.878-.298 1.58-.044.982-.054 1.309-.054 3.627s.01 2.645.054 3.627c.03 1.144.149 1.599.298 1.962.149.36.355.668.64 1.015.284.354.592.64.953.64.423.148.878.267 1.58.298.982.044 1.309.054 3.627.054s2.645-.01 3.627-.054c.702-.03 1.157-.149 1.52-.298.36-.149.668-.355.953-.64.285-.284.49-.592.64-1.015.148-.423.267-.878.298-1.58.044-.982.054-1.309.054-3.627s-.01-2.645-.054-3.627c-.03-1.144-.149-1.599-.298-1.962-.149-.36-.355-.668-.64-1.015-.284-.354-.592-.64-.953-.64-.423-.148-.878-.267-1.58-.298-.982-.044-1.309-.054-3.627-.054zm0 6.602c-1.602 0-2.902-1.3-2.902-2.902s1.3-2.902 2.902-2.902 2.902 1.3 2.902 2.902-1.3 2.902-2.902 2.902zm0 2.164a5.066 5.066 0 100-10.132 5.066 5.066 0 000 10.132zm6.708-8.814c0 .762-.615 1.377-1.377 1.377s-1.377-.615-1.377-1.377S16.096 4.548 16.858 4.548c.762 0 1.377.615 1.377 1.377z" clipRule="evenodd" /></svg>
                </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} KidzJoy Events. All rights reserved.</p>
        <p>Designed with <span className="text-red-500">&hearts;</span> for joyful moments.</p>
      </div>
    </footer>
  );
};

export default Footer;
