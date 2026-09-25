import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Menu, X, ArrowUpRight, ClipboardList } from 'lucide-react';
import { CONTACT_INFO, ROTATING_PHONES } from '../data/products';
import { NAV_ITEMS, navigateTo } from '../utils/navigation';

// Clean Architectural Awning / Canopy Icon (Pure White, No Background)
export const AwningIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7 text-white' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.85"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2.5 10L12 4.5l9.5 5.5" />
    <path d="M3 10h18v2a2 2 0 0 1-3.6 1.2 2 2 0 0 1-3.6 0 2 2 0 0 1-3.6 0 2 2 0 0 1-3.6 0 2 2 0 0 1-3.6-1.2V10z" />
    <path d="M5 14v6" />
    <path d="M19 14v6" />
    <path d="M12 14v6" />
  </svg>
);

interface HeaderProps {
  onOpenQuote: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote, activeSection = 'anasayfa' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePhoneIndex, setActivePhoneIndex] = useState(0);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated phone rotator timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoneIndex((prev) => (prev + 1) % ROTATING_PHONES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const currentPhone = ROTATING_PHONES[activePhoneIndex] || ROTATING_PHONES[0];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-2.5 sm:py-3.5 bg-[#0D0E12]/90 backdrop-blur-xl border-b border-[#C5A880]/15 shadow-2xl shadow-black/50'
            : 'py-3 sm:py-6 bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            {/* Left Wing: Brand Logo */}
            <div className="flex-1 flex items-center justify-start min-w-0">
              <a
                href="/anasayfa"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/anasayfa');
                }}
                className="group flex items-center gap-2.5 sm:gap-3 shrink-0"
              >
                <AwningIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:text-[#C5A880] transition-colors shrink-0" />
                <div className="flex flex-col">
                  <span className="font-display text-base sm:text-xl font-bold tracking-wider text-white group-hover:text-[#E8D5B5] transition-colors leading-tight">
                    RÜZGAR TENTE
                  </span>
                  <span className="text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.18em] text-gray-400 font-semibold leading-tight mt-0.5">
                    TENTE & PERGOLA SİSTEMLERİ
                  </span>
                </div>
              </a>
            </div>

            {/* Center Wing: Desktop Navigation (Perfect Dead-Center Alignment) */}
            <nav className="hidden xl:flex items-center gap-6 glass-panel px-6 py-2.5 rounded-full border border-white/5 whitespace-nowrap shrink-0 mx-2">
              {NAV_ITEMS.map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(link.path);
                    }}
                    className={`text-xs font-semibold transition-colors duration-200 relative group py-1 whitespace-nowrap ${
                      isActive ? 'text-[#C5A880]' : 'text-gray-300 hover:text-[#C5A880]'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#C5A880] to-[#E8D5B5] transition-all duration-300 rounded-full ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Right Wing: Desktop Action CTAs (Balanced with Left) */}
            <div className="flex-1 flex items-center justify-end gap-3.5 shrink-0">
              <div className="hidden xl:flex items-center gap-3.5 shrink-0">
                <a
                  href={`tel:${currentPhone.raw}`}
                  className="h-10 flex items-center gap-2.5 px-4 text-xs font-semibold text-gray-200 hover:text-white rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C5A880]/40 transition-all whitespace-nowrap group overflow-hidden"
                  title={`${currentPhone.label}: ${currentPhone.phone}`}
                >
                  <div className="w-5 h-5 rounded-full bg-[#C5A880]/20 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-black transition-colors shrink-0">
                    <Phone className="w-3 h-3 animate-pulse" />
                  </div>
                  <div className="flex flex-col text-left overflow-hidden h-[18px] justify-center relative min-w-[105px]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentPhone.phone}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="tracking-wide text-white block text-xs font-bold"
                      >
                        {currentPhone.phone}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="h-10 inline-flex items-center gap-2.5 px-4 rounded-full text-xs uppercase tracking-wider font-bold text-[#0D0E12] bg-gradient-to-r from-[#FFF0DC] via-[#C5A880] to-[#D4AF37] hover:opacity-95 transition-all duration-300 shadow-lg shadow-[#C5A880]/25 hover:shadow-[#C5A880]/45 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer group"
                >
                  <div className="w-5 h-5 rounded-full bg-black/15 flex items-center justify-center text-[#0D0E12] group-hover:bg-black group-hover:text-[#C5A880] transition-colors shrink-0">
                    <ClipboardList className="w-3 h-3" />
                  </div>
                  <span>Teklif Al</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* Mobile & Tablet Toggle Button */}
              <div className="flex xl:hidden items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white hover:text-[#C5A880] transition-colors cursor-pointer shrink-0 flex items-center justify-center"
                  aria-label="Menüyü Aç/Kapat"
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5 text-[#C5A880]" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#08080B]/98 backdrop-blur-2xl z-50 xl:hidden flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#0D0E12]/80">
              <div className="flex items-center gap-3">
                <AwningIcon className="w-7 h-7 text-white shrink-0" />
                <div className="flex flex-col">
                  <span className="font-display text-lg font-bold text-white tracking-wider leading-tight">RÜZGAR TENTE</span>
                  <span className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold leading-tight mt-0.5">TENTE & PERGOLA SİSTEMLERİ</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white"
                aria-label="Kapat"
              >
                <X className="w-6 h-6 text-[#C5A880]" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="px-6 py-8 space-y-3 flex-1">
              <p className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-3">
                Menü & Navigasyon
              </p>
              {NAV_ITEMS.map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      navigateTo(link.path);
                    }}
                    className={`block text-lg font-medium transition-colors py-3 border-b border-white/5 ${
                      isActive ? 'text-[#C5A880] font-bold pl-2 border-l-2 border-l-[#C5A880]' : 'text-gray-200 hover:text-[#C5A880]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Mobile Footer CTAs */}
            <div className="p-6 border-t border-white/10 bg-[#0D0E12] space-y-3 pb-12">
              <a
                href={`tel:${currentPhone.raw}`}
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm hover:border-[#C5A880]/50 transition-all duration-300 group"
              >
                <div className="w-6 h-6 rounded-full bg-[#C5A880]/20 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-black transition-colors shrink-0">
                  <Phone className="w-3.5 h-3.5 animate-pulse" />
                </div>
                <div className="flex items-center gap-2 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPhone.phone}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-1.5"
                    >
                      <span className="text-gray-400 text-xs">{currentPhone.label}:</span>
                      <span className="font-bold text-white tracking-wide text-sm">{currentPhone.phone}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-sm shadow-lg shadow-emerald-500/20 hover:brightness-105 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Danışma ({CONTACT_INFO.whatsapp})</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};