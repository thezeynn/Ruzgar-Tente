import React, { useState } from 'react';
import { Calculator, Send, Sliders, ShieldCheck, Building2, Umbrella, Tent, Sparkles, Layers } from 'lucide-react';
import { CONTACT_INFO } from '../data/products';

export const PriceEstimator: React.FC = () => {
  const [modelType, setModelType] = useState('bioklimatik');
  const [width, setWidth] = useState(5); // meters
  const [projection, setProjection] = useState(3.5); // meters
  const [hasLedLighting, setHasLedLighting] = useState(true);
  const [hasGlassEnclosure, setHasGlassEnclosure] = useState(false);
  const [hasSomfyMotor, setHasSomfyMotor] = useState(true);

  // Model base square-meter price coefficient
  const modelRates: Record<
    string,
    { title: string; baseM2: number; icon: React.ComponentType<{ className?: string }> }
  > = {
    bioklimatik: { title: 'Bioklimatik Pergola', baseM2: 7500, icon: Building2 },
    kasetli: { title: 'Tam Kasetli Lüks Tente', baseM2: 4200, icon: Umbrella },
    mafsalli: { title: 'Mafsallı Tente', baseM2: 2800, icon: Tent },
    rolling: { title: 'Rolling Roof & Kış Bahçesi', baseM2: 9200, icon: Sparkles },
    giyotin: { title: 'Giyotin Cam Sistemi', baseM2: 5800, icon: Layers },
  };

  const totalArea = Number((width * projection).toFixed(1));
  const currentModel = modelRates[modelType] || modelRates.bioklimatik;

  // Base Calculation
  let estimatedTotal = totalArea * currentModel.baseM2;

  // Option Addons
  if (hasLedLighting) estimatedTotal += totalArea * 450;
  if (hasSomfyMotor) estimatedTotal += 8500;
  if (hasGlassEnclosure) estimatedTotal += totalArea * 3200;

  const minEstimate = Math.round(estimatedTotal * 0.95);
  const maxEstimate = Math.round(estimatedTotal * 1.1);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(val);
  };

  const handleSendEstimateToWhatsApp = () => {
    const message = `Merhaba Rüzgar Tente, web sitenizdeki Fiyat Hesaplama Simülatöründen teklif oluşturdum:
- *Model:* ${currentModel.title}
- *Ölçüler:* ${width}m Genişlik x ${projection}m Açılım (${totalArea} m²)
- *LED Aydınlatma:* ${hasLedLighting ? 'Evet (Dimmable)' : 'Hayır'}
- *Somfy Motor Sistemi:* ${hasSomfyMotor ? 'Evet (Akıllı Kumandalı)' : 'Standart'}
- *Giyotin Cam Kapatma:* ${hasGlassEnclosure ? 'Evet' : 'Hayır'}
- *Tahmini Bütçe:* ${formatCurrency(minEstimate)} - ${formatCurrency(maxEstimate)}

Mekanım için yerinde ücretsiz 3D keşif ve kesin teklif rica ediyorum.`;

    window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="fiyat-hesapla" className="py-24 bg-[#0D0E12] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#C5A880]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181920] border border-[#C5A880]/20 mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="text-xs uppercase tracking-widest text-[#E8D5B5] font-semibold">
              İnteraktif Fiyat & Keşif Simülatörü
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Ölçülerinizi Seçin, <br />
            <span className="text-gold-gradient font-serif italic font-normal">Anında Tahmini Teklif Alın</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light max-w-2xl mx-auto">
            Projenizin boyutlarına ve tercih ettiğiniz opsiyonlara göre anında yaklaşık maliyet hesaplayın, tek tıkla mimari ekibimize WhatsApp üzerinden iletin.
          </p>
        </div>

        {/* Configurator Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#14151C] border border-[#C5A880]/30 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Inputs Column (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-8">
            {/* Step 1: Model Selection */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#C5A880] font-semibold mb-3">
                1. Tente & Pergola Modelini Seçin
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {Object.entries(modelRates).map(([key, data]) => {
                  const IconComponent = data.icon;
                  const isSelected = modelType === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setModelType(key)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between gap-3 cursor-pointer ${
                        isSelected
                          ? 'bg-[#1E202B] border-[#C5A880] shadow-lg shadow-[#C5A880]/15'
                          : 'bg-[#181920] border-white/5 hover:border-[#C5A880]/30 text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-[#C5A880]/20 text-[#C5A880]' : 'bg-white/5 text-gray-400'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className={`text-xs font-semibold ${isSelected ? 'text-white font-bold' : 'text-gray-300'}`}>
                        {data.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Dimensions Slider */}
            <div className="space-y-6 pt-2 border-t border-white/5">
              <div className="flex items-center justify-between">
                <label className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" />
                  2. Ölçüleri Belirleyin
                </label>
                <span className="text-xs font-bold text-white bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                  Toplam Alan: <span className="text-[#C5A880]">{totalArea} m²</span>
                </span>
              </div>

              {/* Width Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-300">
                  <span>Cephe Genişliği (Metre)</span>
                  <span className="font-bold text-white text-sm">{width} m</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="12"
                  step="0.5"
                  value={width}
                  onChange={(e) => setWidth(parseFloat(e.target.value))}
                  className="w-full h-2 bg-[#22242F] rounded-lg appearance-none cursor-pointer accent-[#C5A880]"
                />
                <div className="flex justify-between text-[10px] text-gray-500">
                  <span>2m</span>
                  <span>6m</span>
                  <span>12m</span>
                </div>
              </div>

              {/* Projection Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-300">
                  <span>İleri Açılım / Derinlik (Metre)</span>
                  <span className="font-bold text-white text-sm">{projection} m</span>
                </div>
                <input
                  type="range"
                  min="1.5"
                  max="8"
                  step="0.5"
                  value={projection}
                  onChange={(e) => setProjection(parseFloat(e.target.value))}
                  className="w-full h-2 bg-[#22242F] rounded-lg appearance-none cursor-pointer accent-[#C5A880]"
                />
                <div className="flex justify-between text-[10px] text-gray-500">
                  <span>1.5m</span>
                  <span>4m</span>
                  <span>8m</span>
                </div>
              </div>
            </div>

            {/* Step 3: Add-on Options */}
            <div className="pt-2 border-t border-white/5 space-y-3">
              <label className="block text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                3. Ek Donanım & Konfor Seçenekleri
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    hasLedLighting ? 'bg-[#1E202B] border-[#C5A880]/50' : 'bg-[#181920] border-white/5'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={hasLedLighting}
                    onChange={(e) => setHasLedLighting(e.target.checked)}
                    className="w-4 h-4 rounded text-[#C5A880] focus:ring-0 accent-[#C5A880]"
                  />
                  <div>
                    <span className="text-xs font-semibold text-white block">Dimmable LED Işık</span>
                    <span className="text-[10px] text-gray-400">Gizli lineer spot aydınlatma</span>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    hasSomfyMotor ? 'bg-[#1E202B] border-[#C5A880]/50' : 'bg-[#181920] border-white/5'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={hasSomfyMotor}
                    onChange={(e) => setHasSomfyMotor(e.target.checked)}
                    className="w-4 h-4 rounded text-[#C5A880] focus:ring-0 accent-[#C5A880]"
                  />
                  <div>
                    <span className="text-xs font-semibold text-white block">Somfy Motor Paketi</span>
                    <span className="text-[10px] text-gray-400">5 Yıl Garantili Akıllı Motor</span>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all sm:col-span-2 ${
                    hasGlassEnclosure ? 'bg-[#1E202B] border-[#C5A880]/50' : 'bg-[#181920] border-white/5'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={hasGlassEnclosure}
                    onChange={(e) => setHasGlassEnclosure(e.target.checked)}
                    className="w-4 h-4 rounded text-[#C5A880] focus:ring-0 accent-[#C5A880]"
                  />
                  <div>
                    <span className="text-xs font-semibold text-white block">Giyotin Cam / Yan Kapatma Ekle</span>
                    <span className="text-[10px] text-gray-400">Dört mevsim rüzgar ve yağmur koruması</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Summary Column (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#181A24] to-[#0E0F14] p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                  Hesaplama Özeti
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded bg-[#25D366]/10 text-[#25D366] font-semibold border border-[#25D366]/20">
                  Tahmini Fiyat
                </span>
              </div>

              {/* Price Display */}
              <div className="p-6 rounded-2xl bg-[#0D0E12] border border-[#C5A880]/30 shadow-inner mb-6 text-center">
                <span className="text-xs text-gray-400 block mb-1">Yaklaşık Proje Tutarı</span>
                <div className="font-sans font-black text-2xl sm:text-3xl text-gold-gradient tracking-tight tabular-nums">
                  {formatCurrency(minEstimate)} - {formatCurrency(maxEstimate)}
                </div>
                <span className="text-[10px] text-gray-500 block mt-2">
                  *KDV, yerinde ücretsiz keşif ve standart montaj dahildir.
                </span>
              </div>

              {/* Breakdown details */}
              <div className="space-y-2.5 text-xs text-gray-300">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Seçilen Sistem:</span>
                  <span className="font-semibold text-white">{currentModel.title}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Ölçü & Yüzey:</span>
                  <span className="font-semibold text-white">{width}m x {projection}m ({totalArea} m²)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Aydınlatma:</span>
                  <span className="font-semibold text-white">{hasLedLighting ? 'Entegre LED Dahil' : 'Yok'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Motor & Kumanda:</span>
                  <span className="font-semibold text-white">{hasSomfyMotor ? 'Somfy IO Akıllı Motor' : 'Standart'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-gray-400">Yan Cam Kapama:</span>
                  <span className="font-semibold text-white">{hasGlassEnclosure ? 'Giyotin Cam Dahil' : 'Açık Sistem'}</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="pt-6 space-y-3">
              <button
                type="button"
                onClick={handleSendEstimateToWhatsApp}
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#25D366] hover:bg-[#20be5b] shadow-xl shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Bu Teklifi WhatsApp'a Aktar</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 text-center">
                <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                <span>Lazerli yerinde keşif sonrasında net teklif verilir.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
