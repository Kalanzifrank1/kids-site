import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const links = [
  { name: "Our Services", href: "#services" },
  { name: "Party Packages", href: "#packages" },
  { name: "Event Gallery", href: "#gallery" },
  { name: "About Us", href: "#about" },
  { name: "FAQ", href: "#faq" },
];

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com/kidzjoyevents",
    icon: Facebook,
    color: "hover:text-blue-600",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/kidzjoyevents",
    icon: Instagram,
    color: "hover:text-pink-500",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#ede9fe] via-[#f3e8ff] to-[#e0e7ff] text-[#22223b] pt-12 pb-6 border-t border-[#e0e7ff]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Company Info */}
        <div className="flex flex-col gap-3 items-center md:items-start">
          <span className="text-2xl font-extrabold tracking-tight text-[#7c3aed] mb-1">
            KidzJoy
          </span>
          <p className="text-base text-[#5e60ce] max-w-xs text-center md:text-left">
            Playful, safe, and unforgettable kids' events in Uganda.
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col gap-3 items-center md:items-start">
          <span className="text-lg font-semibold text-[#7c3aed] mb-1">
            Quick Links
          </span>
          <ul className="flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.name}>
                <a
                  href={l.href}
                  className="text-[#6c757d] hover:text-[#7c3aed] transition-colors duration-200 text-base"
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col gap-3 items-center md:items-start">
          <span className="text-lg font-semibold text-[#7c3aed] mb-1">
            Contact
          </span>
          <a
            href="tel:+256771234567"
            className="flex items-center gap-2 text-[#6c757d] hover:text-[#7c3aed] transition-colors duration-200"
          >
            <Phone className="w-5 h-5" /> +256 771 234567
          </a>
          <a
            href="mailto:info@kidzjoyevents.com"
            className="flex items-center gap-2 text-[#6c757d] hover:text-[#7c3aed] transition-colors duration-200"
          >
            <Mail className="w-5 h-5" /> info@kidzjoyevents.com
          </a>
          <div className="flex items-center gap-2 text-[#6c757d]">
            <MapPin className="w-5 h-5" /> Kampala, Uganda
          </div>
          <div className="flex gap-3 mt-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className={`text-[#7c3aed] hover:bg-[#f0e7ff] rounded-full p-2 transition-colors duration-200 ${s.color}`}
              >
                <s.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-[#e0e7ff] text-center text-[#6c757d] text-sm">
        <p>&copy; {new Date().getFullYear()} KidzJoy. All rights reserved.</p>
        <p className="mt-1">
          Designed with <span className="text-pink-500">&#10084;</span> for
          joyful moments.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
