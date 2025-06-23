// src/components/FaqSection.tsx
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'; // Assuming shadcn/ui accordion component

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We primarily serve Kampala and its surrounding districts. For events outside this area, please contact us for a custom quote and to confirm availability."
  },
  {
    question: "How far in advance should I book?",
    answer: "To ensure availability, especially for popular items like bouncing castles and specific entertainers, we recommend booking at least 4-6 weeks in advance. However, feel free to inquire for last-minute bookings – we'll do our best to accommodate you!"
  },
  {
    question: "What are your safety measures for equipment?",
    answer: "All our bouncing castles and other play equipment are regularly inspected, cleaned, and maintained to the highest safety standards. Our staff are trained in safe setup, operation, and supervision to ensure a secure environment for all children."
  },
  {
    question: "Do you provide attendants for the machines/activities?",
    answer: "Yes, for most of our food machines (popcorn, cotton candy, ice cream) and certain activities like bike riding, a trained attendant/supervisor is included in the package to ensure smooth operation and safety."
  },
  {
    question: "Can I customize a package?",
    answer: "Absolutely! Our pre-defined packages are a great starting point, but we love creating custom experiences. Contact us with your specific needs and ideas, and we'll craft a perfect package just for your event."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Our cancellation policy varies based on the booking lead time. Please refer to your booking agreement or contact us directly for specific details."
  },
  {
    question: "Are your entertainers child-friendly?",
    answer: "Yes, all our entertainers are experienced, professional, and passionate about working with children. They undergo thorough background checks and are trained to interact positively and safely with kids of all ages."
  },
];

const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-16 bg-blue-50 text-gray-800 rounded-xl shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-orange-700 mb-6 drop-shadow-md">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Have questions? We've got answers! Find quick information about our services, booking, and safety.
        </p>

        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto text-left">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-purple-200">
              <AccordionTrigger className="text-xl font-semibold text-purple-700 hover:no-underline px-4 py-3">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-700 pb-4 px-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12">
          <p className="text-xl text-gray-700 font-semibold">
            Can't find your answer? Don't hesitate to <a href="#contact" className="text-pink-600 hover:underline">contact us directly!</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
