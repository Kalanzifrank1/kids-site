// src/components/GallerySection.tsx
"use client"
import React from 'react';

const images = [
  { src: 'https://placehold.co/600x400/FFCCEE/FF3399?text=Happy+Kids+1', alt: 'Children playing joyfully in a vibrant party setting' },
  { src: 'https://placehold.co/600x400/CCEEFF/3399FF?text=Bouncy+Castle+Fun', alt: 'Kids jumping and laughing on a large inflatable bouncing castle' },
  { src: 'https://placehold.co/600x400/FFEEDD/FF9900?text=Popcorn+Delight', alt: 'A child happily eating popcorn from a fun food station' },
  { src: 'https://placehold.co/600x400/DDEEFF/6666FF?text=Clown+Show+Laughs', alt: 'A professional clown entertaining children with balloon animals' },
  { src: 'https://placehold.co/600x400/EEFFDD/99FF33?text=Face+Painting+Art', alt: 'A child with beautifully painted face enjoying a party' },
  { src: 'https://placehold.co/600x400/FFDDCC/FF6666?text=Cotton+Candy+Joy', alt: 'Kids holding colorful cotton candy sticks with big smiles' },
  { src: 'https://placehold.co/600x400/CCFFDD/33FF66?text=Bike+Riding+Adventure', alt: 'Children learning to ride bicycles in a safe outdoor area' },
  { src: 'https://placehold.co/600x400/DDFFAA/AAFF00?text=Party+Setup', alt: 'A beautifully decorated party venue with various entertainment setups' },
];

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-16 bg-blue-100 text-gray-800 rounded-xl shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-6 drop-shadow-md">Our Moments of Magic!</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          See the joy we bring to every event! Browse through our gallery of happy faces, vibrant setups, and unforgettable memories.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                // Fallback image in case the placeholder fails or needs dynamic text
                onError={(e) => { e.currentTarget.src = `https://placehold.co/600x400/${['FFCCEE', 'CCEEFF', 'FFEEDD', 'DDEEFF', 'EEFFDD', 'FFDDCC', 'CCFFDD', 'DDFFAA'][index]}/${['FF3399', '3399FF', 'FF9900', '6666FF', '99FF33', 'FF6666', '33FF66', 'AAFF00'][index]}?text=${image.alt.replace(/\s/g, '+')}`; }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold px-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
