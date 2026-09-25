import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, MessageCircle, ArrowUpRight, Check } from 'lucide-react';
import { CONTACT_INFO } from '../data/products';
import { useProducts } from '../hooks/useProducts';
import { ProductModal } from './ProductModal';
import { MaskedHeading } from './MaskedHeading';

interface ProductCatalogProps {
  onSelectProductForQuote: (productName: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProductForQuote }) => {
  const { products } = useProducts();
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const selectedProduct = selectedProductId ? products.find((p) => p.id === selectedProductId) || null : null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="modeller" className="py-14 sm:py-24 bg-[#0D0E12] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A880]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8E6B3B]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <MaskedHeading
            as="h2"
            className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4"
            lines={[
              'Üstün Mühendislik &',
              <span key="gold" className="text-gold-gradient font-serif italic font-normal">
                Mimari Estetik
              </span>,
            ]}
          />
          <p className="text-xs sm:text-base text-gray-400 font-light max-w-2xl mx-auto">
            Her mekana özel milimetrik projelendirilen, birinci sınıf alüminyum ve Somfy motor güvencesiyle uzun yıllar ilk günkü konforu sunan tente ve gölgelendirme sistemleri.
          </p>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative rounded-2xl bg-[#14151C] border border-white/5 hover:border-[#C5A880]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-[#C5A880]/10"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-52 sm:h-64 overflow-hidden bg-black/40">
                <img
                  src={product.image}
                  alt={product.title}
                  referrerPolicy="no-referrer"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14151C] via-[#14151C]/30 to-transparent" />

                {/* Quick Hover Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                  <button
                    onClick={() => setSelectedProductId(product.id)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase shadow-xl hover:bg-[#C5A880] transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>İncele & Teknik Detay</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#E8D5B5] transition-colors leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-xs font-serif italic text-[#C5A880] mt-0.5 mb-2 sm:mb-3">
                    {product.subtitle}
                  </p>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Key Highlights list */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  {product.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-gray-300">
                      <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProductId(product.id)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-all cursor-pointer"
                  >
                    <span>Detayları Gör</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
                  </button>

                  <button
                    onClick={() => {
                      const msg = `Merhaba Rüzgar Tente, ${product.title} modeli için ölçüme özel fiyat teklifi almak istiyorum.`;
                      window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`, '_blank');
                    }}
                    className="p-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/30 transition-all"
                    title="WhatsApp'tan Fiyat Sor"
                    aria-label="WhatsApp Fiyat Sor"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        key={selectedProduct?.id}
        product={selectedProduct}
        onClose={() => setSelectedProductId(null)}
        onSelectForQuote={onSelectProductForQuote}
      />
    </section>
  );
};
