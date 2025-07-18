"use client";
import Link from "next/link";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve Kampala and its surrounding districts. For events outside this area, please contact us for a custom quote and to confirm availability.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "To ensure availability, especially for popular items like bouncing castles and specific entertainers, we recommend booking at least 4-6 weeks in advance. However, feel free to inquire for last-minute bookings – we'll do our best to accommodate you!",
  },
  {
    question: "What are your safety measures for equipment?",
    answer:
      "All our bouncing castles and other play equipment are regularly inspected, cleaned, and maintained to the highest safety standards. Our staff are trained in safe setup, operation, and supervision to ensure a secure environment for all children.",
  },
  {
    question: "Do you provide attendants for the machines/activities?",
    answer:
      "Yes, for most of our food machines (popcorn, cotton candy, ice cream) and certain activities like bike riding, a trained attendant/supervisor is included in the package to ensure smooth operation and safety.",
  },
  {
    question: "Can I customize a package?",
    answer:
      "Absolutely! Our pre-defined packages are a great starting point, but we love creating custom experiences. Contact us with your specific needs and ideas, and we'll craft a perfect package just for your event.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our cancellation policy varies based on the booking lead time. Please refer to your booking agreement or contact us directly for specific details.",
  },
  {
    question: "Are your entertainers child-friendly?",
    answer:
      "Yes, all our entertainers are experienced, professional, and passionate about working with children. They undergo thorough background checks and are trained to interact positively and safely with kids of all ages.",
  },
];

const FaqSection: React.FC = () => {
  return (
    <section
      id="faq"
      className="relative py-20 bg-gradient-to-br from-[#f7fafc] via-[#e0e7ff] to-[#f0f4ff] text-gray-800 overflow-hidden rounded-3xl shadow-2xl"
    >
      {/* Decorative blurred blobs */}
      <div className="absolute -top-24 -left-24 w-[320px] h-[320px] bg-gradient-to-br from-[#7c3aed]/20 via-[#38bdf8]/10 to-[#fbbf24]/10 rounded-full blur-3xl opacity-60 z-0" />
      <div className="absolute -bottom-24 -right-24 w-[320px] h-[320px] bg-gradient-to-tr from-[#fbbf24]/10 via-[#38bdf8]/10 to-[#7c3aed]/20 rounded-full blur-3xl opacity-60 z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] via-[#7c3aed] to-[#38bdf8] mb-6 drop-shadow-xl animate-fade-in">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-[#5e60ce] mb-14 max-w-2xl mx-auto animate-fade-in delay-150">
          Have questions? We've got answers! Find quick info about our services,
          booking, and safety.
        </p>

        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto text-left bg-white/80 rounded-2xl shadow-xl backdrop-blur-xl border-2 border-[#7c3aed]/10 animate-fade-in"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-[#e0e7ff] last:border-b-0"
            >
              <AccordionTrigger className="text-lg md:text-xl font-semibold text-[#7c3aed] hover:no-underline px-6 py-4 transition-colors duration-200">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-gray-700 pb-4 px-6 bg-white/60 rounded-b-xl">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-14">
          <p className="text-xl text-[#22223b] font-semibold">
            Can't find your answer?{" "}
            <Link
              href="/contact"
              className="text-[#7c3aed] hover:underline font-bold"
            >
              Contact us directly!
            </Link>
          </p>
        </div>
      </div>
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 1.1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .delay-150 {
          animation-delay: 0.15s;
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
      `}</style>
    </section>
  );
};

export default FaqSection;
