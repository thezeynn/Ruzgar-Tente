import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../data/products';
import { MaskedHeading } from './MaskedHeading';

interface HeroProps {
  onOpenQuote?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="anasayfa"
      className="relative min-h-[82vh] sm:min-h-[96vh] flex items-center justify-center pt-24 sm:pt-36 pb-16 sm:pb-28 overflow-hidden bg-[#08080B] border-b border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] z-10"
    >
      {/* Background Image with Deep Cinematic Gradient & Luxury Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/sasirtma_pergola_1790269026014.jpg"
          alt="Lüks Bioklimatik Pergola ve Açık Hava Yaşam Alanı"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-[0.7] contrast-[1.05]"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080B] via-[#08080B]/70 to-[#08080B]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080B]/80 via-transparent to-[#08080B]" />
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      </div>

      {/* Floating Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#C5A880]/12 blur-[150px] rounded-full pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center py-4 sm:py-10">
        
        {/* Main Headline with Creatix Style Masked Line Reveal */}
        <MaskedHeading
          as="h1"
          className="font-display text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.18] mb-4 sm:mb-6 max-w-4xl mx-auto drop-shadow-md"
          lines={[
            'Açık Alanlarınızı',
            'Dört Mevsim Yaşam Alanına',
            'Dönüştürüyoruz',
          ]}
          isHero
          delay={0.1}
          stagger={0.15}
        />

        {/* Descriptive Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-xs sm:text-base md:text-lg text-gray-300 font-sans font-light leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-10 px-2 sm:px-0"
        >
          Müstakil villalar, teraslar, lüks cafe ve restoranlar için yüksek mühendislik standardında üretilen Somfy motorlu bioklimatik pergolalar, kasetli tenteler ve yalıtımlı kış bahçeleri.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-md mx-auto"
        >
          <a
            href="#modeller"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all cursor-pointer shadow-lg"
          >
            <ArrowRight className="w-4 h-4 text-[#C5A880]" />
            <span>Modelleri İncele</span>
          </a>

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappDefaultMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all cursor-pointer shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Hızlı Teklif</span>
          </a>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#modeller"
        className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 items-center gap-1.5 text-[11px] uppercase tracking-widest text-gray-400 hover:text-[#C5A880] transition-colors z-20"
        aria-label="Aşağı Kaydır"
      >
        <span>Keşfet</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
};
