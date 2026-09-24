import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle,
  User,
  Maximize2,
  ArrowRight,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONTACT_INFO, PRODUCTS } from '../data/products';
import { MaskedHeading } from './MaskedHeading';

interface ContactSectionProps {
  preselectedProduct?: string;
}

const POPULAR_MODELS = [
  'Bioklimatik Pergola Sistemleri',
  'Tam Kasetli Lüks Tente',
  'Giyotin Cam Balkon & Küpeşte',
  'Rolling Roof (Katlanan Tavan)',
  'Zip Perde & Dış Stor',
  'Kış Bahçesi & Çevre Kapatma',
  'Özel Mimari Tasarım'
];

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedProduct }) => {
  const [prevPreselected, setPrevPreselected] = useState(preselectedProduct);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    cityDistrict: '',
    selectedModel: preselectedProduct || 'Bioklimatik Pergola Sistemleri',
    approxDimensions: '',
    message: '',
  });

  if (preselectedProduct && preselectedProduct !== prevPreselected) {
    setPrevPreselected(preselectedProduct);
    setFormData((prev) => ({
      ...prev,
      selectedModel: preselectedProduct,
    }));
  }

  const [errors, setErrors] = useState<{
    fullName?: string;
    phone?: string;
    cityDistrict?: string;
  }>({});

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string) => {
    let errorMsg = '';
    if (name === 'fullName') {
      if (!value.trim() || value.trim().length < 3) {
        errorMsg = 'Lütfen belirli alanları doldurun';
      }
    }
    if (name === 'phone') {
      const cleaned = value.replace(/\s+/g, '');
      if (!cleaned || cleaned.length < 10) {
        errorMsg = 'Lütfen belirli alanları doldurun';
      }
    }
    if (name === 'cityDistrict') {
      if (!value.trim()) {
        errorMsg = 'Lütfen belirli alanları doldurun';
      }
    }
    return errorMsg;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSelectModel = (model: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedModel: model,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameErr = validateField('fullName', formData.fullName);
    const phoneErr = validateField('phone', formData.phone);
    const cityErr = validateField('cityDistrict', formData.cityDistrict);

    if (nameErr || phoneErr || cityErr) {
      setErrors({
        fullName: nameErr || undefined,
        phone: phoneErr || undefined,
        cityDistrict: cityErr || undefined,
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#C5A880', '#D4AF37', '#FFF0DC', '#10B981'],
        });
      } catch (err) {
        console.log(err);
      }
    }, 600);
  };

  const handleForwardToWhatsApp = () => {
    const text = `*Yeni Keşif & Teklif Talebi (Web Sitesi):*
- *Ad Soyad:* ${formData.fullName}
- *Telefon:* ${formData.phone}
- *E-posta:* ${formData.email || 'Belirtilmedi'}
- *Konum (İl/İlçe):* ${formData.cityDistrict}
- *İlgilenilen Model:* ${formData.selectedModel}
- *Yaklaşık Ölçüler:* ${formData.approxDimensions || 'Belirtilmedi (Yerinde Keşif İstiyor)'}
- *Ek Notlar:* ${formData.message || '-'}`;

    window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="iletisim" className="py-24 bg-[#08080B] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#C5A880]/8 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-[500px] h-[500px] bg-[#C5A880]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <MaskedHeading
            as="h2"
            className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4"
            lines={[
              'Ücretsiz Keşif &',
              <span key="gold" className="text-gold-gradient font-serif italic font-normal">
                Mimari Fiyat Teklifi Alın
              </span>,
            ]}
          />
          <p className="text-sm sm:text-base text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Projenizi uzman mimarlarımızla birlikte şekillendirin. İster formu doldurarak hemen teklif isteyin, ister doğrudan arayarak ücretsiz yerinde keşif randevusu oluşturun.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Contact & Map (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#12131A] border border-white/10 shadow-xl space-y-6 relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A880]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Title */}
              <div className="relative z-10">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  Doğrudan İletişim Hatları
                </h3>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-3 relative z-10">
                {/* Phone */}
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#181A24] hover:bg-[#1F2230] border border-white/5 hover:border-[#C5A880]/40 transition-colors duration-200 group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 border border-[#C5A880]/20 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880]/25 transition-colors duration-200 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-gray-400 block">Doğrudan Keşif & Danışma</span>
                    <span className="font-sans text-base font-bold text-white group-hover:text-[#C5A880] transition-colors tracking-wide">
                      {CONTACT_INFO.phone}
                    </span>
                  </div>
                  <div className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Hemen Ara</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#181A24] hover:bg-[#1F2230] border border-[#25D366]/25 hover:border-[#25D366] transition-colors duration-200 group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366]/25 transition-colors duration-200 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 block">7/24 WhatsApp Hızlı Danışma</span>
                      <span className="inline-block w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                    </div>
                    <span className="font-sans text-base font-bold text-white group-hover:text-[#25D366] transition-colors tracking-wide">
                      {CONTACT_INFO.mobile}
                    </span>
                  </div>
                  <div className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Mesaj Yaz</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#181A24] hover:bg-[#1F2230] border border-white/5 hover:border-[#C5A880]/40 transition-colors duration-200 group shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 border border-[#C5A880]/20 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880]/25 transition-colors duration-200 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-gray-400 block">Kurumsal & Mimari E-Posta</span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#C5A880] transition-colors truncate block">
                      {CONTACT_INFO.email}
                    </span>
                  </div>
                  <div className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>E-Posta</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </a>
              </div>

              {/* Showroom & Working Hours */}
              <div className="pt-4 border-t border-white/10 space-y-3.5 text-xs text-gray-300 relative z-10">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#C5A880]/10 text-[#C5A880] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Adres & Üretim Atölyesi:</strong>
                    <span className="text-gray-400">{CONTACT_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#C5A880]/10 text-[#C5A880] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold mb-0.5">Çalışma Saatleri:</strong>
                    <span className="text-gray-400">{CONTACT_INFO.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Interactive Embed (Kept & Stylized as requested) */}
            <div className="rounded-3xl overflow-hidden border border-white/10 h-52 bg-[#12131A] relative shadow-lg group">
              <iframe
                title="Rüzgar Tente Selçuk İzmir Konum"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12595.642340801704!2d27.359873!3d37.948291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14beaa28a5099f11%3A0x86814234c9df4f4e!2sSel%C3%A7uk%2C%20%C4%B0zmir!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                className="w-full h-full border-0 grayscale invert contrast-125 opacity-80 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-[#08080B]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] text-[#E8D5B5] font-medium pointer-events-none flex items-center gap-1.5 shadow">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Selçuk / İzmir Konumu</span>
              </div>
            </div>
          </div>

          {/* Right Column: New Form Design Inspired by Image 2 (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#12131A] border border-[#C5A880]/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden backdrop-blur-xl">
              {/* Decorative top ambient glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6 relative z-10"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center mx-auto shadow-lg shadow-[#25D366]/10">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-[#C5A880] block mb-1">
                      Talep Onaylandı
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                      Talebiniz Başarıyla Alındı!
                    </h3>
                    <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                      Sayın <strong className="text-white">{formData.fullName}</strong>, talebiniz teknik ekibimize iletildi. Uzman mimarımız en geç 30 dakika içerisinde sizi arayarak net maliyet ve keşif detaylarını sunacaktır.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#181A24] border border-white/5 max-w-md mx-auto text-left text-xs space-y-2 text-gray-300 shadow-inner">
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-gray-400">İlgilenilen Model:</span>
                      <span className="text-[#E8D5B5] font-semibold">{formData.selectedModel}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-gray-400">İl / İlçe:</span>
                      <span className="text-white font-medium">{formData.cityDistrict || 'İzmir'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">İletişim Telefonu:</span>
                      <span className="text-white font-medium">{formData.phone}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleForwardToWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#25D366]/30 transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp'tan Hemen Yaz</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold cursor-pointer transition-colors"
                    >
                      Yeni Talep Formu Doldur
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form noValidate onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  {/* Form Header */}
                  <div className="border-b border-white/10 pb-5">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1.5">
                      Projeniz İçin Teklif Alın
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 font-light">
                      Aşağıdaki bilgileri doldurun; mimari ekibimiz ölçülerinize uygun en doğru sistemi ve maliyet tablosunu hazırlasın.
                    </p>
                  </div>

                  {/* Field Row 1: Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Adınız Soyadınız <span className="text-[#C5A880]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <User className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Ad Soyad giriniz"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#181A24] text-white text-sm outline-none transition-all placeholder:text-gray-500 ${
                            errors.fullName
                              ? 'border border-[#C5A880] bg-[#C5A880]/[0.06] ring-1 ring-[#C5A880]'
                              : 'border border-white/10 hover:border-white/20 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20'
                          }`}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.fullName && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="flex items-center gap-1.5 text-[11px] text-[#E8D5B5] mt-1.5 font-medium"
                          >
                            <AlertCircle className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                            <span>{errors.fullName}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Telefon Numaranız <span className="text-[#C5A880]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <Phone className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="05XX XXX XX XX"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#181A24] text-white text-sm outline-none transition-all placeholder:text-gray-500 ${
                            errors.phone
                              ? 'border border-[#C5A880] bg-[#C5A880]/[0.06] ring-1 ring-[#C5A880]'
                              : 'border border-white/10 hover:border-white/20 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20'
                          }`}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.phone && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="flex items-center gap-1.5 text-[11px] text-[#E8D5B5] mt-1.5 font-medium"
                          >
                            <AlertCircle className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                            <span>{errors.phone}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Field Row 2: City/District & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* City & District */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Proje Konumu (İl / İlçe) <span className="text-[#C5A880]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <MapPin className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="cityDistrict"
                          value={formData.cityDistrict}
                          onChange={handleChange}
                          placeholder="Örn: İzmir / Çeşme veya Kuşadası"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#181A24] text-white text-sm outline-none transition-all placeholder:text-gray-500 ${
                            errors.cityDistrict
                              ? 'border border-[#C5A880] bg-[#C5A880]/[0.06] ring-1 ring-[#C5A880]'
                              : 'border border-white/10 hover:border-white/20 focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20'
                          }`}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.cityDistrict && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="flex items-center gap-1.5 text-[11px] text-[#E8D5B5] mt-1.5 font-medium"
                          >
                            <AlertCircle className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                            <span>{errors.cityDistrict}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Email (Optional) */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        E-posta Adresi <span className="text-gray-500 text-[10px]">(Opsiyonel)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                          <Mail className="w-4 h-4 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ornek@mail.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#181A24] border border-white/10 hover:border-white/20 text-white text-sm focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 outline-none transition-all placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Field 3: Service / Model Selection (Modern interactive pills & styled selector) */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2">
                      İlgilendiğiniz Sistem & Model <span className="text-[#C5A880]">*</span>
                    </label>

                    {/* Interactive Selection Chips */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {POPULAR_MODELS.map((model) => {
                        const isSelected = formData.selectedModel === model;
                        return (
                          <button
                            key={model}
                            type="button"
                            onClick={() => handleSelectModel(model)}
                            className={`px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer text-left flex items-center gap-1.5 ${
                              isSelected
                                ? 'bg-[#C5A880]/20 border border-[#C5A880] text-[#E8D5B5] shadow-[0_0_12px_rgba(197,168,128,0.2)]'
                                : 'bg-[#181A24] border border-white/10 text-gray-300 hover:border-white/20 hover:text-white'
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#C5A880]' : 'bg-gray-500'}`} />
                            <span>{model}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Fallback Select Dropdown for all catalog models */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Layers className="w-4 h-4 text-gray-400" />
                      </div>
                      <select
                        name="selectedModel"
                        value={formData.selectedModel}
                        onChange={handleChange}
                        aria-label="İlgilendiğiniz Sistem & Model"
                        className="w-full pl-10 pr-8 py-3 rounded-xl bg-[#181A24] border border-white/10 hover:border-white/20 text-white text-xs sm:text-sm focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 outline-none transition-all cursor-pointer appearance-none"
                      >
                        {PRODUCTS.map((p) => (
                          <option key={p.id} value={p.title} className="bg-[#14151C] text-white">
                            {p.title}
                          </option>
                        ))}
                        <option value="Rolling Roof (Katlanan Tavan)" className="bg-[#14151C] text-white">
                          Rolling Roof (Katlanan Tavan)
                        </option>
                        <option value="Giyotin Cam Balkon & Küpeşte" className="bg-[#14151C] text-white">
                          Giyotin Cam Balkon & Küpeşte
                        </option>
                        <option value="Zip Perde & Dış Stor" className="bg-[#14151C] text-white">
                          Zip Perde & Dış Stor
                        </option>
                        <option value="Kış Bahçesi & Çevre Kapatma" className="bg-[#14151C] text-white">
                          Kış Bahçesi & Çevre Kapatma
                        </option>
                        <option value="Özel Mimari Tasarım" className="bg-[#14151C] text-white">
                          Özel Mimari Tasarım / Diğer
                        </option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400">
                        <span className="text-xs">▼</span>
                      </div>
                    </div>
                  </div>

                  {/* Field 4: Approximate Dimensions */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Tahmini Ölçüler (Varsa - Cephe x Açılım veya m²)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Maximize2 className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="approxDimensions"
                        value={formData.approxDimensions}
                        onChange={handleChange}
                        placeholder="Örn: 6m cephe x 4m açılım (veya ~25 m² teras)"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#181A24] border border-white/10 hover:border-white/20 text-white text-sm focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 outline-none transition-all placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  {/* Field 5: Message / Project Notes */}
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Proje Notunuz veya Özel Talepleriniz
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Villa terasım için LED aydınlatmalı, Somfy motorlu bioklimatik sistem düşünmekteyim. Yerinde keşif rica ediyorum..."
                      className="w-full px-4 py-3 rounded-xl bg-[#181A24] border border-white/10 hover:border-white/20 text-white text-sm focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 outline-none transition-all placeholder:text-gray-500 resize-none"
                    />
                  </div>

                  {/* Submit Button (Image 2 style with luxury gold styling) */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#08080B] bg-gradient-to-r from-[#ECD1A5] via-[#C5A880] to-[#9E7B44] hover:from-[#F5DFB8] hover:via-[#D1B58C] hover:to-[#B08B52] shadow-xl shadow-[#C5A880]/20 hover:shadow-[#C5A880]/35 hover:scale-[1.008] active:scale-[0.995] transition-all duration-300 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Talebiniz Gönderiliyor...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Ücretsiz Keşif & Fiyat Teklifi İste</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {/* Trust & Guarantee Indicator */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 px-1 text-[11px] text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                        <span>KVKK Uyumlu • 256-Bit SSL Şifreli Güvenlik</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#E8D5B5]">
                        <Clock className="w-3 h-3 text-[#C5A880] shrink-0" />
                        <span>Ortalama Yanıt Süresi: <strong>30 Dakika</strong></span>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
