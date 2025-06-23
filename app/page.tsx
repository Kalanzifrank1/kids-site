


import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PackagesSection from '@/components/PackagesSection';
import GallerySection from '@/components/GallarySection';
import TestimonialsSection from '@/components/TestimonialSection';
import AboutUsSection from '@/components/AboutUsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// You can add meta tags for SEO in Next.js's layout.tsx or directly here for the specific page
// For example:
// export const metadata = {
//   title: 'KidzJoy Events - Unforgettable Kids Parties in Kampala',
//   description: 'Hiring bouncing castles, fun food, clowns, and exciting activities for children\'s parties in Kampala, Uganda. Make your child\'s day magical!',
// };

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-900">
      {/* Header component for navigation */}
      <Header />

      <main className="space-y-24 py-8"> {/* Increased vertical spacing between sections */}
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Packages Section */}
        <PackagesSection />

        {/* Gallery Section */}
        <GallerySection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* About Us Section */}
        <AboutUsSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

