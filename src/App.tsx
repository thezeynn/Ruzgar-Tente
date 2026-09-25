import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { WhyUs } from './components/WhyUs';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileQuickBar } from './components/MobileQuickBar';
import { useNavigationRouter } from './hooks/useNavigationRouter';
import { navigateTo } from './utils/navigation';

export function App() {
  const [preselectedProduct, setPreselectedProduct] = useState<string>('Bioklimatik Pergola Sistemleri');
  const { activeSection } = useNavigationRouter();

  // Sayfa kaydırma animasyonu (Smooth Scrolling Engine)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Sitedeki tüm görsellerin fare ile sürüklenmesini (ghost drag) engelle
  useEffect(() => {
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'IMG' || (e.target as HTMLElement)?.closest('img')) {
        e.preventDefault();
      }
    };
    window.addEventListener('dragstart', handleDragStart);
    return () => window.removeEventListener('dragstart', handleDragStart);
  }, []);

  const handleOpenQuote = (productName?: string) => {
    if (productName) {
      setPreselectedProduct(productName);
    }
    navigateTo('/iletisim');
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#08080B] text-[#F3F4F6] flex flex-col selection:bg-[#C5A880] selection:text-[#08080B]">
      {/* Header */}
      <Header onOpenQuote={() => handleOpenQuote()} activeSection={activeSection} />

      {/* Main Content */}
      <main className="flex-grow w-full bg-[#08080B]">
        <Hero onOpenQuote={() => handleOpenQuote()} />
        <ProductCatalog onSelectProductForQuote={handleOpenQuote} />
        <WhyUs />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection preselectedProduct={preselectedProduct} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <FloatingWhatsApp />
      <MobileQuickBar onOpenQuote={() => handleOpenQuote()} />
    </div>
  );
}

export default App;