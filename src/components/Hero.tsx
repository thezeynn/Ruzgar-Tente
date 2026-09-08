import { motion } from 'framer-motion';
import { ShieldCheck, MessageCircle, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/products';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center justify-center pt-32 sm:pt-44 md:pt-48 pb-20 sm:pb-24 overflow-hidden bg-[#08080B]">
      {/* Background Image with Parallax-feel & Luxury Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Lüks Bioklimatik Pergola & Modern Tente Sistemleri"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transform animate-pulse duration-[10000ms]"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080B] via-[#08080B]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080B] via-[#08080B]/60 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
        {/* Subtle Luxury Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      {/* Floating Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C5A880]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[250px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col justify-center min-h-[85vh]">
        <div className="max-w-3xl mx-auto sm:mx-0 w-full flex flex-col items-center sm:items-start">
          {/* Slogan & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6 text-center sm:text-left"
          >
            Açık Alanlarınızı <br />
            <span className="text-gold-gradient font-extrabold">Dört Mevsim</span>{' '}
            Yaşam Alanına Dönüştürüyoruz.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-lg lg:text-xl text-gray-300 font-light leading-relaxed mb-8 max-w-2xl text-center sm:text-left"
          >
            Müstakil villalar, teraslar, lüks cafe ve restoranlar için yüksek mühendislik standardında üretilen Somfy motorlu bioklimatik pergolalar, kasetli tenteler ve yalıtımlı kış bahçeleri.
          </motion.p>

          {/* Trust Highlights Checklist (1. Görsel Üst Kısım: Sağ-Sol Eşit Boşluklu, Tam Ortalı) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="w-full max-w-[340px] sm:max-w-xl mx-auto sm:mx-0 grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3.5 mb-10 text-xs sm:text-sm text-gray-300 font-medium"
          >
            <div className="flex items-center gap-2 text-left">
              <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span className="leading-snug truncate">5 Yıl Somfy Garantisi</span>
            </div>
            <div className="flex items-center gap-2 text-left">
              <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span className="leading-snug truncate">120 km/s Rüzgar Direnci</span>
            </div>
            <div className="flex items-center gap-2 text-left">
              <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span className="leading-snug truncate">Avrupa Dickson Kumaş</span>
            </div>
            <div className="flex items-center gap-2 text-left">
              <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span className="leading-snug truncate">Ücretsiz 3D Keşif</span>
            </div>
          </motion.div>

          {/* Dual Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full max-w-[340px] sm:max-w-none mx-auto sm:mx-0"
          >
            <a
              href="#modeller"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D0E12] bg-gradient-to-r from-[#FFF0DC] via-[#C5A880] to-[#D4AF37] hover:brightness-110 shadow-xl shadow-[#C5A880]/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Modelleri İncele</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#1E2029] hover:bg-[#252834] border border-white/10 hover:border-[#C5A880]/40 shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>WhatsApp Hızlı Teklif</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-all cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              <span>Hızlı Keşif Formu</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Floating Stats Bar (1. Görsel Alt Kısım: Sağ-Sol Eşit Boşluklu, Tam Ortalı) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-12 sm:mt-20 pt-7 sm:pt-8 border-t border-white/10 w-full max-w-[340px] sm:max-w-none mx-auto sm:mx-0 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 sm:gap-6"
        >
          <div className="flex flex-col text-left">
            <span className="font-sans text-2xl sm:text-3xl font-extrabold text-gold-gradient tracking-tight">15+ Yıl</span>
            <span className="text-xs text-gray-400 mt-1 leading-snug">Sektörel Mimari Tecrübe</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight">1.250+</span>
            <span className="text-xs text-gray-400 mt-1 leading-snug">Tamamlanan Prestijli Proje</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans text-2xl sm:text-3xl font-extrabold text-gold-gradient tracking-tight">%100</span>
            <span className="text-xs text-gray-400 mt-1 leading-snug">Müşteri Memnuniyeti</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight">5 Yıl</span>
            <span className="text-xs text-gray-400 mt-1 leading-snug">Somfy Parça & Motor Garantisi</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#modeller"
        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-[#C5A880] transition-colors"
        aria-label="Aşağı Kaydır"
      >
        <span>Keşfet</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};