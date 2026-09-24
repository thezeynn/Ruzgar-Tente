import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, Eye } from 'lucide-react';
import { SHOWCASE_PROJECTS, CONTACT_INFO } from '../data/products';
import type { ProjectShowcase } from '../types';
import { MaskedHeading } from './MaskedHeading';


export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxProject, setLightboxProject] = useState<ProjectShowcase | null>(null);

  const categories = [
    { id: 'all', label: 'Tüm Projeler' },
    { id: 'villa', label: 'Lüks Villalar' },
    { id: 'restoran', label: 'Cafe & Restoranlar' },
    { id: 'teras', label: 'Teras & Penthouse' },
    { id: 'ticari', label: 'Ticari & Otel' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? SHOWCASE_PROJECTS
    : SHOWCASE_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projeler" className="py-24 bg-[#08080B] relative overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <MaskedHeading
            as="h2"
            className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4"
            lines={[
              'Uyguladığımız',
              <span key="gold" className="text-gold-gradient font-serif italic font-normal">
                Mimari Başyapıtlar
              </span>,
            ]}
          />
          <p className="text-sm sm:text-base text-gray-400 font-light max-w-2xl mx-auto">
            Türkiye'nin dört bir yanındaki seçkin villa, otel, teras ve restoran projelerimizden ilham verici uygulamalar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#C5A880] to-[#D4AF37] text-black shadow-lg shadow-[#C5A880]/20 scale-105'
                  : 'bg-[#181920] text-gray-400 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative h-80 rounded-2xl overflow-hidden border border-white/10 bg-[#14151C] cursor-pointer"
                onClick={() => setLightboxProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Hover Eye Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Eye className="w-5 h-5 text-[#C5A880]" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="flex items-center gap-1.5 text-xs text-[#C5A880] font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-light">
                    {project.system}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightboxProject(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-[#121318] border border-[#C5A880]/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxProject(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 border border-white/10"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={lightboxProject.image}
              alt={lightboxProject.title}
              className="w-full h-[450px] object-cover"
            />

            <div className="p-6 bg-[#181920] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#C5A880] font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{lightboxProject.location}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">{lightboxProject.title}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{lightboxProject.system}</p>
              </div>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(`Merhaba Rüzgar Tente, ${lightboxProject.title} projenize benzer bir uygulama için keşif ve fiyat teklifi rica ediyorum.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FFF0DC] to-[#C5A880] text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all cursor-pointer"
              >
                Bu Projeden Fiyat İste
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
