import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

import { FAQS, CONTACT_INFO } from '../data/products';
import { MaskedHeading } from './MaskedHeading';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-14 sm:py-24 bg-[#08080B] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#C5A880]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <MaskedHeading
            as="h2"
            className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4"
            lines={[
              'Sıkça Sorulan',
              <span key="gold" className="text-gold-gradient font-serif italic font-normal">
                Sorular & Yanıtlar
              </span>,
            ]}
          />
          <p className="text-xs sm:text-base text-gray-400 font-light max-w-xl mx-auto">
            Tente, pergola kumaşları, Somfy motor garantisi ve yerinde montaj süreci hakkında en çok yöneltilen sorular.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-[#14151C] border-[#C5A880]/40 shadow-xl shadow-[#C5A880]/5'
                    : 'bg-[#101117] border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 sm:p-6 text-left flex items-start sm:items-center justify-between gap-3 sm:gap-4 transition-colors cursor-pointer group"
                >
                  <div className="flex-1">
                    <span className="font-display text-sm sm:text-base md:text-lg font-semibold text-white group-hover:text-[#E8D5B5] transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 mt-0.5 sm:mt-0 ${
                      isOpen ? 'bg-[#C5A880] text-black rotate-180' : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-gray-300 leading-relaxed font-light border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Help CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-[#14151C] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-display text-base font-bold text-white">Başka bir sorunuz mu var?</h4>
            <p className="text-xs text-gray-400">Teknik uzmanlarımız projenizle ilgili tüm detayları yanıtlamaktan memnuniyet duyar.</p>
          </div>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('Merhaba, web sitenizdeki S.S.S. haricinde özel bir konuda danışmak istiyorum.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#20be5a] transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Uzmana WhatsApp'tan Danış</span>
          </a>
        </div>
      </div>
    </section>
  );
};
