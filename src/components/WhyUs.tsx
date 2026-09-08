import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ShieldCheck, Cpu, Layers, Sparkles, ThumbsUp } from 'lucide-react';
import { STATS } from '../data/products';

// Ekrana girince akıcı sayan Sayaç Bileşeni
const CounterNumber: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target,
  suffix = '',
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing out quadratic
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentVal = Math.floor(easeOutQuad * target);
      
      setCount(currentVal);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString('tr-TR')}
      {suffix}
    </span>
  );
};

export const WhyUs: React.FC = () => {
  return (
    <section id="neden-biz" className="py-24 bg-[#08080B] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] bg-[#C5A880]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181920] border border-[#C5A880]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="text-xs uppercase tracking-widest text-[#E8D5B5] font-semibold">
              Prestige & Güven
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Neden <span className="text-gold-gradient">Rüzgar Tente</span>?
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light max-w-2xl mx-auto">
            15 yılı aşkın mimari üretim deneyimimiz, Avrupa standartlarındaki hammadde tercihimiz ve kusursuz montaj anlayışımızla yaşam alanlarınıza değer katıyoruz.
          </p>
        </div>

        {/* Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Workshop & Engineering Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#C5A880]/30 shadow-2xl shadow-black/80 group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Rüzgar Tente Üretim ve Mimari İşçilik"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Floating Quality Badge on Image */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3.5 sm:p-4 rounded-xl bg-[#0D0E12]/90 backdrop-blur-md border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#C5A880]/20 flex items-center justify-center text-[#C5A880] shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">Avrupa Normlarında Üretim</h4>
                    <p className="text-[11px] sm:text-xs text-gray-400">Qualicoat & CE Sertifikalı Alüminyum Profiller</p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-xs font-bold text-[#C5A880] px-2.5 py-1 bg-[#C5A880]/10 rounded-md border border-[#C5A880]/20 shrink-0">
                  ISO 9001
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                Kusursuz Hizmet Süreci
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 mb-4">
                Mimari Çözüm Ortaklığı & Anahtar Teslim Güvence
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Her mekanın rüzgar yükü, güneş açısı ve mimari dokusu farklıdır. Rüzgar Tente mühendislik ekibi mekanınıza gelerek lazerli 3D simülasyon çıkarır, en doğru ürünü sıfır hata toleransıyla üretir ve montajlar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#14151C] border border-white/5 hover:border-[#C5A880]/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Somfy & Becker Otomasyon</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Sessiz çalışan akıllı motorlar, uzaktan kumanda ve akıllı ev / telefon entegrasyonu.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#14151C] border border-white/5 hover:border-[#C5A880]/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">İthal Dickson Kumaş</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Güneşte solmayan, su itici ve küf tutmayan nano yüzey kaplamalı Fransız kumaşlar.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#14151C] border border-white/5 hover:border-[#C5A880]/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">5 Yıl Koşulsuz Garanti</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Mekanik gövde ve motor sistemlerimizde 5 yıl boyunca parça değişim ve teknik servis garantisi.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#14151C] border border-white/5 hover:border-[#C5A880]/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] mb-3">
                  <ThumbsUp className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Ücretsiz 3D Lazer Keşif</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  İzmir, Aydın, Muğla ve çevre illerde yerinde ölçüm, 3 boyutlu mimari modelleme ve projelendirme.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Animated Statistics Bar (1. Görseldeki Alan - Canlı Sayaç) */}
        <div className="p-5 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-br from-[#14151C] via-[#181920] to-[#101117] border border-[#C5A880]/20 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C5A880]/30 transition-all duration-300"
              >
                <div className="font-sans text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gold-gradient tracking-tight min-h-[36px] sm:min-h-[52px] flex items-center justify-center">
                  <CounterNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white mt-2 mb-1 leading-snug">{stat.label}</h4>
                <p className="text-[10px] sm:text-xs text-gray-400 leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};