import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, PRODUCTS } from '../data/products';
import { AwningIcon } from './Header';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08080A] text-gray-400 text-xs border-t border-white/10 pt-16 pb-28 sm:pb-12 relative">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12 border-b border-white/5 text-center sm:text-left">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4 flex flex-col items-center sm:items-start">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <AwningIcon className="w-8 h-8 text-white shrink-0" />
              <div className="flex flex-col text-left">
                <span className="font-display text-xl font-bold tracking-wider text-white leading-tight">
                  RÜZGAR TENTE
                </span>
                <span className="text-[9px] uppercase tracking-[0.18em] text-gray-400 font-semibold leading-tight mt-0.5">
                  TENTE & PERGOLA SİSTEMLERİ
                </span>
              </div>
            </div>

            <p className="text-gray-400 font-light leading-relaxed max-w-sm mx-auto sm:mx-0">
              15 yılı aşkın süredir villa, teras, lüks kafe ve restoranlar için premium bioklimatik pergolalar, motorlu kasetli tenteler ve yalıtımlı kış bahçeleri üretiyoruz.
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-3 pt-2">
              <a
                href="https://www.instagram.com/ruzgar.tente/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#C5A880] hover:text-black flex items-center justify-center transition-all text-gray-300 border border-white/10 hover:border-[#C5A880] group cursor-pointer"
                aria-label="Instagram'da Takip Edin"
                title="Instagram: @ruzgar.tente"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Shading Models (3 cols) */}
          <div className="lg:col-span-3 space-y-3 flex flex-col items-center sm:items-start">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Ürün & Modeller
            </h4>
            <ul className="space-y-2.5">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <a href="#modeller" className="hover:text-[#C5A880] transition-colors block">
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links & S.S.S. (2 cols) */}
          <div className="lg:col-span-2 space-y-3 flex flex-col items-center sm:items-start">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Hızlı Erişim
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#anasayfa" className="hover:text-[#C5A880] transition-colors block">Ana Sayfa</a></li>
              <li><a href="#modeller" className="hover:text-[#C5A880] transition-colors block">Modellerimiz</a></li>
              <li><a href="#neden-biz" className="hover:text-[#C5A880] transition-colors block">Neden Biz?</a></li>
              <li><a href="#projeler" className="hover:text-[#C5A880] transition-colors block">Mimari Projeler</a></li>
              <li><a href="#sss" className="hover:text-[#C5A880] transition-colors block">Sıkça Sorulan Sorular</a></li>
              <li><a href="#iletisim" className="hover:text-[#C5A880] transition-colors block">İletişim & Keşif</a></li>
            </ul>
          </div>

          {/* Col 4: Contact info (3 cols) */}
          <div className="lg:col-span-3 space-y-3 flex flex-col items-center sm:items-start">
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              İletişim & Fabrika
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start justify-center sm:justify-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Rüzgar Tente Sistemleri Ltd. Şti. Tüm Hakları Saklıdır.
          </p>

          <div className="flex items-center justify-center gap-6">
            <span className="text-gray-500 hover:text-gray-400 cursor-pointer">Gizlilik & KVKK</span>
            <span className="text-gray-500 hover:text-gray-400 cursor-pointer">Garanti Koşulları</span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-[#C5A880] text-gray-400 hover:text-black transition-colors cursor-pointer"
              aria-label="Sayfanın Başına Dön"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
