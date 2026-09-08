import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Cpu, ArrowRight, MessageCircle, Sparkles, Wind } from 'lucide-react';
import type { ProductModel } from '../types';

import { CONTACT_INFO } from '../data/products';

interface ProductModalProps {
  product: ProductModel | null;
  onClose: () => void;
  onSelectForQuote: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onSelectForQuote,
}) => {
  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    const msg = `Merhaba Rüzgar Tente, web sitenizdeki "${product.title}" modeli hakkında detaylı bilgi ve projem için fiyat teklifi almak istiyorum.`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#121318] border border-[#C5A880]/30 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#181920]">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest px-2.5 py-1 rounded-md bg-[#C5A880]/15 text-[#C5A880] font-semibold border border-[#C5A880]/30">
                {product.tag}
              </span>
              <span className="text-xs text-gray-400 font-medium">Model İnceleme</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-6">
            {/* Top Grid: Image + Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Main Image */}
              <div className="space-y-3">
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-white/10 group">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                      {product.warrantyYears} Yıl Garanti
                    </span>
                    <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                      <Cpu className="w-3.5 h-3.5 text-[#C5A880]" />
                      {product.motorType}
                    </span>
                  </div>
                </div>

                {/* Secondary gallery previews */}
                <div className="grid grid-cols-3 gap-2">
                  {product.galleryImages.map((img, idx) => (
                    <div key={idx} className="h-16 rounded-lg overflow-hidden border border-white/10">
                      <img src={img} alt={`${product.title} ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {product.title}
                  </h3>
                  <p className="text-sm font-serif italic text-[#C5A880] mb-3">
                    {product.subtitle}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Ideal For Tags */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
                    Uygulama Alanları:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.idealFor.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="border-t border-white/10 pt-6">
              <h4 className="font-display text-base font-semibold text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A880]" />
                Öne Çıkan Mühendislik Özellikleri
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-300">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 bg-white/5 p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Specs Table */}
            <div className="border-t border-white/10 pt-6">
              <h4 className="font-display text-base font-semibold text-white mb-3 flex items-center gap-2">
                <Wind className="w-4 h-4 text-[#C5A880]" />
                Teknik Özellik Tablosu
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-[#181920] border border-white/5 text-xs">
                    <span className="text-gray-400 font-medium">{spec.label}</span>
                    <span className="text-white font-semibold text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 border-t border-white/10 bg-[#181920]">
            <div className="text-xs text-gray-400 hidden sm:block">
              Özel ölçü projelendirme ve 3D keşif tamamen ücretsizdir.
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#25D366] hover:bg-[#20bd5a] shadow-lg transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp'tan Sor</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectForQuote(product.title);
                  onClose();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0D0E12] bg-gradient-to-r from-[#FFF0DC] via-[#C5A880] to-[#D4AF37] hover:brightness-110 shadow-lg transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <span>Fiyat Teklifi İste</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
