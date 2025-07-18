"use client";

import * as React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/kidzjoyug",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/kidzjoyug",
    icon: Facebook,
  },
];

export default function ContactPage() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-20 bg-gradient-to-br from-[#f7fafc] via-[#f0f4ff] to-[#e0e7ff]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[420px] h-[420px] bg-gradient-to-br from-[#f0e7ff] via-[#e0f7fa] to-[#fffde4] rounded-full blur-3xl opacity-60 animate-bouncey" />
      </div>
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center px-4">
        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-8 items-center md:items-start animate-fadeIn">
          <h1 className="text-4xl font-extrabold text-[#22223b] mb-2 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg text-[#5e60ce] mb-4 max-w-xs text-center md:text-left">
            Let's make your next kids' event magical. Reach out to us!
          </p>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-3">
              <Mail className="text-[#7c3aed] w-6 h-6" aria-hidden="true" />
              <span className="text-base text-[#22223b]">hello@kidzjoy.ug</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#38bdf8] w-6 h-6" aria-hidden="true" />
              <span className="text-base text-[#22223b]">+256 700 000 000</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#fbbf24] w-6 h-6" aria-hidden="true" />
              <span className="text-base text-[#22223b]">Kampala, Uganda</span>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/80 hover:bg-[#f0e7ff] p-3 shadow-md transition-colors duration-200"
                aria-label={s.name}
              >
                <s.icon className="w-6 h-6 text-[#7c3aed]" />
              </a>
            ))}
          </div>
        </div>
        {/* Contact Form */}
        <form
          className="flex-1 bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col gap-6 w-full max-w-md animate-fadeIn delay-200 backdrop-blur-md"
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault(); /* handle submit */
          }}
        >
          <h2 className="text-2xl font-bold text-[#22223b] mb-2">
            Send a Message
          </h2>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-[#f7fafc] border-0 focus:ring-2 focus:ring-[#7c3aed]/40 text-[#22223b]"
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-[#f7fafc] border-0 focus:ring-2 focus:ring-[#7c3aed]/40 text-[#22223b]"
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="bg-[#f7fafc] border-0 focus:ring-2 focus:ring-[#7c3aed]/40 text-[#22223b] resize-none"
          />
          <Button
            type="submit"
            className="mt-2 bg-[#7c3aed] hover:bg-[#5e60ce] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg flex items-center gap-2 transition-all duration-300"
          >
            <Send className="w-5 h-5" /> Send
          </Button>
        </form>
      </div>
      <style jsx>{`
        @keyframes bouncey {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-18px) scale(1.04);
          }
        }
        .animate-bouncey {
          animation: bouncey 7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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
        .animate-fadeIn {
          animation: fadeIn 1.1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}
