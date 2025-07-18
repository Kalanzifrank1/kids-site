// src/components/GallerySection.tsx
"use client";
import React from "react";

const images = [
  {
    src: "https://placehold.co/600x400/FFCCEE/FF3399?text=Happy+Kids+1",
    alt: "Children playing joyfully in a vibrant party setting",
  },
  {
    src: "https://placehold.co/600x400/CCEEFF/3399FF?text=Bouncy+Castle+Fun",
    alt: "Kids jumping and laughing on a large inflatable bouncing castle",
  },
  {
    src: "https://placehold.co/600x400/FFEEDD/FF9900?text=Popcorn+Delight",
    alt: "A child happily eating popcorn from a fun food station",
  },
  {
    src: "https://placehold.co/600x400/DDEEFF/6666FF?text=Clown+Show+Laughs",
    alt: "A professional clown entertaining children with balloon animals",
  },
  {
    src: "https://placehold.co/600x400/EEFFDD/99FF33?text=Face+Painting+Art",
    alt: "A child with beautifully painted face enjoying a party",
  },
  {
    src: "https://placehold.co/600x400/FFDDCC/FF6666?text=Cotton+Candy+Joy",
    alt: "Kids holding colorful cotton candy sticks with big smiles",
  },
  {
    src: "https://placehold.co/600x400/CCFFDD/33FF66?text=Bike+Riding+Adventure",
    alt: "Children learning to ride bicycles in a safe outdoor area",
  },
  {
    src: "https://placehold.co/600x400/DDFFAA/AAFF00?text=Party+Setup",
    alt: "A beautifully decorated party venue with various entertainment setups",
  },
];

const GallerySection: React.FC = () => {
  return (
    <section
      id="gallery"
      className="relative py-20 bg-gradient-to-br from-[#f7fafc] via-[#e0e7ff] to-[#f0f4ff] text-gray-800 overflow-hidden rounded-3xl shadow-2xl"
    >
      {/* Decorative blurred blobs */}
      <div className="absolute -top-24 -left-24 w-[320px] h-[320px] bg-gradient-to-br from-[#7c3aed]/20 via-[#38bdf8]/10 to-[#fbbf24]/10 rounded-full blur-3xl opacity-60 z-0" />
      <div className="absolute -bottom-24 -right-24 w-[320px] h-[320px] bg-gradient-to-tr from-[#fbbf24]/10 via-[#38bdf8]/10 to-[#7c3aed]/20 rounded-full blur-3xl opacity-60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] via-[#38bdf8] to-[#fbbf24] mb-6 drop-shadow-xl animate-fade-in">
          Our Moments of Magic!
        </h2>
        <p className="text-xl text-[#5e60ce] mb-14 max-w-3xl mx-auto animate-fade-in delay-150">
          See the joy we bring to every event! Browse our gallery of happy
          faces, vibrant setups, and unforgettable memories.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl shadow-xl group bg-white/70 backdrop-blur-xl border-2 border-transparent hover:border-[#7c3aed] transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/600x400/${
                    [
                      "FFCCEE",
                      "CCEEFF",
                      "FFEEDD",
                      "DDEEFF",
                      "EEFFDD",
                      "FFDDCC",
                      "CCFFDD",
                      "DDFFAA",
                    ][index]
                  }/${
                    [
                      "FF3399",
                      "3399FF",
                      "FF9900",
                      "6666FF",
                      "99FF33",
                      "FF6666",
                      "33FF66",
                      "AAFF00",
                    ][index]
                  }?text=${image.alt.replace(/\s/g, "+")}`;
                }}
              />
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[#7c3aed] text-lg font-extrabold px-4 drop-shadow-md animate-fade-in delay-150">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
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

export default GallerySection;
