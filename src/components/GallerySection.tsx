import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/products';
import type { ProjectShowcase } from '../types';
import { MaskedHeading } from './MaskedHeading';
import { useProducts } from '../hooks/useProducts';

const ITEMS_PER_PAGE = 9;

export const GallerySection: React.FC = () => {
  const { galleryProjects } = useProducts();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxProject, setLightboxProject] = useState<ProjectShowcase | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = [
    { id: 'all', label: 'Tüm Projeler' },
    { id: 'villa', label: 'Lüks Villalar' },
    { id: 'restoran', label: 'Cafe & Restoranlar' },
    { id: 'teras', label: 'Teras & Penthouse' },
    { id: 'ticari', label: 'Ticari & Otel' },
  ];

  // Only show projects marked as visible (or default true)
  const visibleProjects = galleryProjects.filter((p) => p.visible !== false);

  const filteredProjects = activeCategory === 'all'
    ? visibleProjects
    : visibleProjects.filter((p) => p.category === activeCategory);

  // Total pages calculation
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  // Paginated items
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    const sectionEl = document.getElementById('projeler');
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projeler" className="py-14 sm:py-24 bg-[#08080B] relative overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <MaskedHeading
            as="h2"
            className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4"
            lines={[
              'Uyguladığımız',
              <span key="gold" className="text-gold-gradient font-serif italic font-normal">
                Mimari Başyapıtlar
              </span>,
            ]}
          />
          <p className="text-xs sm:text-base text-gray-400 font-light max-w-2xl mx-auto">
            Türkiye'nin dört bir yanındaki seçkin villa, otel, teras ve restoran projelerimizden ilham verici uygulamalar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setCurrentPage(1);
              }}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {paginatedProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-[#14151C] cursor-pointer"
                onClick={() => setLightboxProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out pointer-events-none"
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

        {/* Empty state if category has no projects */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-sm">Bu kategoride henüz yayınlanmış proje bulunmamaktadır.</p>
          </div>
        )}

        {/* Yan Sayfa (Pagination) Controls - 9 Fotoğraftan Sonra */}
        {totalPages > 1 && (
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
            <p className="text-xs text-gray-400">
              Toplam <span className="text-[#C5A880] font-semibold">{filteredProjects.length}</span> projeden{' '}
              <span className="text-white font-medium">
                {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length)}
              </span>{' '}
              arası gösteriliyor
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2.5 rounded-xl bg-[#14151C] border border-white/10 text-gray-300 hover:text-white hover:border-[#C5A880]/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                aria-label="Önceki Sayfa"
                title="Önceki Sayfa"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => {
                  const isActive = currentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => handlePageChange(pageNum)}
                      className={`min-w-9 h-9 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-[#C5A880] to-[#D4AF37] text-black font-bold shadow-md shadow-[#C5A880]/20'
                          : 'bg-[#14151C] border border-white/10 text-gray-300 hover:text-white hover:border-[#C5A880]/40'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2.5 rounded-xl bg-[#14151C] border border-white/10 text-gray-300 hover:text-white hover:border-[#C5A880]/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                aria-label="Sonraki Sayfa"
                title="Sonraki Sayfa"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
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
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 border border-white/10 cursor-pointer"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={lightboxProject.image}
              alt={lightboxProject.title}
              referrerPolicy="no-referrer"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              className="w-full h-[450px] object-cover pointer-events-none"
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
