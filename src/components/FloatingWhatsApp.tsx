import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Building2, Umbrella } from 'lucide-react';
import { CONTACT_INFO } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = customMsg.trim() || CONTACT_INFO.whatsappDefaultMsg;
    window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(finalMsg)}`, '_blank');
    setIsOpen(false);
    setCustomMsg('');
  };

  return (
    <div className="hidden sm:block fixed bottom-8 right-6 z-40">
      {/* Pop-up Chat Card */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 rounded-2xl bg-[#121318] border border-[#25D366]/40 shadow-2xl shadow-black/80 overflow-hidden mb-2 animate-fadeIn">
          {/* Header */}
          <div className="bg-[#1A1C24] p-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-black flex items-center justify-center font-bold">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 ring-2 ring-[#121318]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Rüzgar Tente Canlı Danışma</h4>
                <span className="text-[10px] text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Şu an çevrimiçi
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1 cursor-pointer"
              aria-label="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body message */}
          <div className="p-4 bg-[#0D0E12]/90 text-xs space-y-3">
            <div className="p-3 rounded-xl bg-[#181920] border border-white/5 text-gray-300 leading-relaxed flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
              <span>Merhaba! Tente, bioklimatik pergola veya kış bahçesi projeniz için ücretsiz ölçü keşfi ve fiyat almak için mesajınızı yazabilirsiniz.</span>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5">
              <button
                type="button"
                onClick={() => {
                  window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('Merhaba, bioklimatik pergola için fiyat teklifi almak istiyorum.')}`, '_blank');
                  setIsOpen(false);
                }}
                className="w-full text-left text-[11px] p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Building2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>Bioklimatik pergola fiyatı istiyorum</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('Merhaba, kasetli tente ölçü ve keşif talebim var.')}`, '_blank');
                  setIsOpen(false);
                }}
                className="w-full text-left text-[11px] p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Umbrella className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>Kasetli tente ücretsiz keşif istiyorum</span>
              </button>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="pt-2 flex items-center gap-2">
              <input
                type="text"
                placeholder="Mesajınızı yazın..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl bg-[#181920] border border-white/10 text-white text-xs focus:border-[#25D366] outline-none placeholder:text-gray-600"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl bg-[#25D366] text-black hover:bg-[#20bd5a] transition-colors cursor-pointer"
                aria-label="Gönder"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Pulse Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-3 px-4 py-3.5 rounded-full bg-[#25D366] text-black font-bold shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all duration-300 cursor-pointer"
        aria-label="WhatsApp İletişim"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10" />

        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="text-xs uppercase tracking-wider font-extrabold">
          WhatsApp'tan Yazın
        </span>
      </button>
    </div>
  );
};
