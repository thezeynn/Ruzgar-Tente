import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';
import { MaskedHeading } from './MaskedHeading';

export const TestimonialsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  // Auto rotation timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, totalPages]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const currentTestimonials = TESTIMONIALS.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-14 sm:py-24 bg-[#0D0E12] relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#C5A880]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#8E6B3B]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <MaskedHeading
            as="h2"
            className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4"
            lines={[
              'Seçkin Mimar ve',
              <span key="gold" className="text-gold-gradient font-serif italic font-normal">
                Müşterilerimizin Yorumları
              </span>,
            ]}
          />
          <p className="text-xs sm:text-base text-gray-400 font-light max-w-2xl mx-auto">
            Tamamladığımız her projede estetik, fonksiyon ve kaliteden ödün vermeden sunduğumuz %100 müşteri memnuniyeti.
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div
          className="relative min-h-[280px] sm:min-h-[380px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
            >
              {currentTestimonials.map((test) => {
                const initials = test.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2);

                return (
                  <div
                    key={test.id}
                    className="p-5 sm:p-7 rounded-2xl bg-[#14151C] border border-white/5 hover:border-[#C5A880]/30 transition-all duration-300 flex flex-col justify-between relative group hover:shadow-xl hover:shadow-[#C5A880]/5"
                  >
                    <Quote className="w-8 h-8 text-[#C5A880]/15 absolute top-6 right-6 pointer-events-none" />

                    <div>
                      {/* Top Bar: Stars + Date */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-1 text-[#C5A880]">
                          {[...Array(test.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        {test.date && (
                          <span className="text-[11px] text-gray-500 font-medium">
                            {test.date}
                          </span>
                        )}
                      </div>

                      {/* Comment Text */}
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light mb-6">
                        "{test.comment}"
                      </p>
                    </div>

                    {/* Author & Verified Tag & Project */}
                    <div className="pt-4 border-t border-white/5 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C5A880]/30 to-[#8E6B3B]/30 border border-[#C5A880]/40 flex items-center justify-center text-white text-xs font-bold shrink-0">
                          {initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-display text-sm font-bold text-white group-hover:text-[#C5A880] transition-colors truncate block">
                            {test.name}
                          </span>
                          <span className="text-[11px] text-gray-400 block truncate">
                            {test.title} • {test.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] text-[#C5A880] font-medium bg-[#0D0E12] px-2.5 py-1 rounded-lg border border-white/5 truncate">
                        <MapPin className="w-3 h-3 text-[#C5A880] shrink-0" />
                        <span className="truncate">{test.project}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Bar (Dots & Arrows) */}
        <div className="mt-10 flex items-center justify-between max-w-xs mx-auto">
          <button
            type="button"
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-white/5 hover:bg-[#C5A880] hover:text-black text-gray-300 transition-all border border-white/10 cursor-pointer"
            aria-label="Önceki Yorumlar"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentPage(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentPage === i
                    ? 'w-7 h-2 bg-[#C5A880]'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/50'
                }`}
                aria-label={`Sayfa ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="p-2.5 rounded-full bg-white/5 hover:bg-[#C5A880] hover:text-black text-gray-300 transition-all border border-white/10 cursor-pointer"
            aria-label="Sonraki Yorumlar"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
