import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Cpu,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Wind,
  Maximize2,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
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
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Consolidate all unique product images
  const allImages = useMemo(() => {
    if (!product) return [];
    const list = [product.image, ...(product.galleryImages || [])];
    return Array.from(new Set(list)).filter(Boolean);
  }, [product]);

  // Prev & Next navigation for lightbox
  const handlePrevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsZoomed(false);
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
  }, [allImages.length]);

  const handleNextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsZoomed(false);
    setActiveImageIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
  }, [allImages.length]);

  // Keyboard navigation (Esc, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
          setIsZoomed(false);
        } else {
          onClose();
        }
      } else if (isLightboxOpen) {
        if (e.key === 'ArrowLeft') {
          handlePrevImage();
        } else if (e.key === 'ArrowRight') {
          handleNextImage();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, handlePrevImage, handleNextImage, onClose]);

  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    const msg = `Merhaba Rüzgar Tente, web sitenizdeki "${product.title}" modeli hakkında detaylı bilgi ve projem için fiyat teklifi almak istiyorum.`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const currentImage = allImages[activeImageIndex] || product.image;

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 overflow-y-auto">
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
                <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">Model İnceleme</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Top Grid: Image + Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Main Image with Enlarge Feature */}
                <div className="space-y-3">
                  <div
                    onClick={() => {
                      setIsLightboxOpen(true);
                      setIsZoomed(false);
                    }}
                    className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-white/10 group cursor-zoom-in bg-black/40 select-none"
                    title="Fotoğrafı büyük boyutta incelemek için tıklayın"
                  >
                    <img
                      src={currentImage}
                      alt={product.title}
                      referrerPolicy="no-referrer"
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    {/* Top Floating Badge: Click to Enlarge */}
                    <div className="absolute top-3 right-3 z-10 opacity-90 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-[#C5A880]/40 text-[#E8D5B5] text-xs font-medium shadow-lg group-hover:bg-[#C5A880] group-hover:text-black group-hover:border-[#C5A880] transition-colors">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Fotoğrafı Büyüt</span>
                      </div>
                    </div>

                    {/* Bottom Info: Motor Specs */}
                    <div className="absolute bottom-3 right-3 flex items-center text-xs text-white pointer-events-none">
                      <span className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                        <Cpu className="w-3.5 h-3.5 text-[#C5A880]" />
                        {product.motorType}
                      </span>
                    </div>

                    {/* Bottom Left: Photo Counter */}
                    <div className="absolute bottom-3 left-3 flex items-center text-xs text-gray-300 pointer-events-none">
                      <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[11px]">
                        {activeImageIndex + 1} / {allImages.length} Fotoğraf
                      </span>
                    </div>
                  </div>

                  {/* Secondary gallery previews */}
                  <div className="grid grid-cols-4 gap-2">
                    {allImages.map((img, idx) => {
                      const isActive = activeImageIndex === idx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setActiveImageIndex(idx);
                          }}
                          className={`relative h-16 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                            isActive
                              ? 'border-[#C5A880] ring-2 ring-[#C5A880]/60 scale-[1.02]'
                              : 'border-white/10 hover:border-white/30 opacity-70 hover:opacity-100'
                          }`}
                          title={`Görsel ${idx + 1}'i göster`}
                        >
                          <img
                            src={img}
                            alt={`${product.title} ${idx + 1}`}
                            referrerPolicy="no-referrer"
                            draggable={false}
                            onDragStart={(e) => e.preventDefault()}
                            className="w-full h-full object-cover pointer-events-none"
                          />
                        </button>
                      );
                    })}
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

      {/* FULLSCREEN PHOTO ZOOM LIGHTBOX SYSTEM (Fotoğraflı Büyütme Sistemi) */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-2xl select-none">
            {/* Top Toolbar */}
            <div className="relative z-10 flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10 bg-[#08080B]/80 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="hidden sm:block">
                  <span className="text-[11px] uppercase tracking-widest text-[#C5A880] font-semibold block">
                    {product.title}
                  </span>
                  <span className="text-xs text-gray-400">Yüksek Çözünürlüklü Model İnceleme</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/10 text-xs text-[#E8D5B5] font-medium border border-white/10">
                  {activeImageIndex + 1} / {allImages.length}
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                {/* Zoom Toggle Button */}
                <button
                  type="button"
                  onClick={() => setIsZoomed((prev) => !prev)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                    isZoomed
                      ? 'bg-[#C5A880] text-black border-[#C5A880]'
                      : 'bg-white/5 hover:bg-white/10 text-gray-200 border-white/10'
                  }`}
                  title={isZoomed ? 'Varsayılan boyuta dön' : 'Yakınlaştır (%150)'}
                >
                  {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                  <span className="hidden sm:inline">{isZoomed ? 'Sığdır' : 'Yakınlaştır'}</span>
                </button>

                {/* Close Lightbox */}
                <button
                  type="button"
                  onClick={() => {
                    setIsLightboxOpen(false);
                    setIsZoomed(false);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-red-500/80 text-white transition-colors cursor-pointer border border-white/10"
                  aria-label="Fotoğrafı Kapat"
                  title="Kapat (Esc)"
                >
                  <X className="w-4 h-4" />
                  <span className="text-xs hidden sm:inline">Kapat</span>
                </button>
              </div>
            </div>

            {/* Main Stage (Enlarged Image & Navigation Arrows) */}
            <div
              className="relative flex-1 flex items-center justify-center p-3 sm:p-6 overflow-hidden cursor-default"
              onClick={() => {
                // If clicked on backdrop outside image, close or unzoom
                if (isZoomed) setIsZoomed(false);
              }}
            >
              {/* Previous Image Button */}
              {allImages.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-3 sm:left-6 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#C5A880] text-white hover:text-black border border-white/15 hover:border-[#C5A880] transition-all backdrop-blur-md cursor-pointer shadow-2xl active:scale-95"
                  aria-label="Önceki Görsel"
                  title="Önceki (Sol Ok)"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Enlarged Photo Container */}
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative max-w-full max-h-full flex items-center justify-center overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentImage}
                  alt={`${product.title} Büyütülmüş Görünüm`}
                  referrerPolicy="no-referrer"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  onClick={() => setIsZoomed((prev) => !prev)}
                  className={`max-h-[68vh] sm:max-h-[74vh] max-w-[94vw] w-auto h-auto object-contain rounded-2xl border border-white/10 shadow-2xl transition-transform duration-300 pointer-events-auto ${
                    isZoomed
                      ? 'scale-150 cursor-zoom-out sm:my-10'
                      : 'scale-100 cursor-zoom-in hover:brightness-105'
                  }`}
                  title={isZoomed ? 'Küçültmek için tıklayın' : 'Daha fazla yakınlaştırmak için tıklayın'}
                />
              </motion.div>

              {/* Next Image Button */}
              {allImages.length > 1 && (
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-3 sm:right-6 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#C5A880] text-white hover:text-black border border-white/15 hover:border-[#C5A880] transition-all backdrop-blur-md cursor-pointer shadow-2xl active:scale-95"
                  aria-label="Sonraki Görsel"
                  title="Sonraki (Sağ Ok)"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Bottom Thumbnail Strip */}
            <div className="relative z-10 px-4 py-3 border-t border-white/10 bg-[#08080B]/80 backdrop-blur-md flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto">
              {allImages.map((img, idx) => {
                const isActive = activeImageIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setActiveImageIndex(idx);
                      setIsZoomed(false);
                    }}
                    className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border transition-all shrink-0 cursor-pointer ${
                      isActive
                        ? 'border-[#C5A880] ring-2 ring-[#C5A880]/70 scale-105 opacity-100'
                        : 'border-white/15 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Önizleme ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
