import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { CONTACT_INFO, ROTATING_PHONES } from '../data/products';

interface MobileQuickBarProps {
  onOpenQuote: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenQuote }) => {
  const [activePhoneIndex, setActivePhoneIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoneIndex((prev) => (prev + 1) % ROTATING_PHONES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentPhone = ROTATING_PHONES[activePhoneIndex] || ROTATING_PHONES[0];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0D0E12]/95 backdrop-blur-xl border-t border-white/10 p-2 sm:hidden flex items-center gap-2 shadow-2xl">
      {/* Call Button */}
      <a
        href={`tel:${currentPhone.raw}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold hover:border-[#C5A880]/50 transition-colors"
        title={`${currentPhone.label}: ${currentPhone.phone}`}
      >
        <Phone className="w-4 h-4 text-[#C5A880] animate-pulse" />
        <span>Hemen Ara</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappDefaultMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-2 rounded-xl bg-[#25D366] text-black text-xs font-bold shadow-lg shadow-emerald-500/20"
      >
        <MessageCircle className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </a>

      {/* Quote CTA */}
      <button
        type="button"
        onClick={onOpenQuote}
        className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-gradient-to-r from-[#FFF0DC] via-[#C5A880] to-[#D4AF37] text-black text-xs font-bold"
      >
        <FileText className="w-3.5 h-3.5" />
        <span>Teklif Al</span>
      </button>
    </div>
  );
};
