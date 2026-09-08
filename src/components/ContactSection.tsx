import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Mail, MapPin, Clock, Send, CheckCircle2, Sparkles, ShieldCheck, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONTACT_INFO, PRODUCTS } from '../data/products';

interface ContactSectionProps {
  preselectedProduct?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedProduct }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    cityDistrict: '',
    selectedModel: preselectedProduct || 'Bioklimatik Pergola Sistemleri',
    approxDimensions: '',
    message: '',
  });

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
      if (!value.trim()) {
        errorMsg = 'Lütfen adınızı ve soyadınızı belirtiniz.';
      } else if (value.trim().length < 3) {
        errorMsg = 'Lütfen geçerli bir ad ve soyad giriniz.';
      }
    }
    if (name === 'phone') {
      const cleaned = value.replace(/\s+/g, '');
      if (!cleaned) {
        errorMsg = 'Lütfen telefon numaranızı belirtiniz.';
      } else if (cleaned.length < 10) {
        errorMsg = 'Lütfen geçerli bir telefon numarası giriniz (Örn: 0535 704 33 43).';
      }
    }
    if (name === 'cityDistrict') {
      if (!value.trim()) {
        errorMsg = 'Lütfen proje konumunu (İl / İlçe) belirtiniz.';
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
          particleCount: 80,
          spread: 70,
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
- *Konum (İl/İlçe):* ${formData.cityDistrict}
- *İlgilenilen Model:* ${formData.selectedModel}
- *Yaklaşık Ölçüler:* ${formData.approxDimensions || 'Belirtilmedi (Yerinde Keşif İstiyor)'}
- *Ek Notlar:* ${formData.message || '-'}`;

    window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="iletisim" className="py-24 bg-[#0D0E12] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C5A880]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181920] border border-[#C5A880]/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="text-xs uppercase tracking-widest text-[#E8D5B5] font-semibold">
              Hemen İletişime Geçin
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Ücretsiz Keşif & <br />
            <span className="text-gold-gradient font-serif italic font-normal">Mimari Fiyat Teklifi Alın</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light max-w-2xl mx-auto">
            Projenizi uzman mühendis ve mimarlarımızla birlikte şekillendirin. Aynı gün içerisinde projelendirme ve teklif hazırlayalım.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Contact Details & Showroom (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#14151C] border border-white/5 space-y-6">
              
              {/* Başlık ve Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  Doğrudan İletişim Hatları
                </h3>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 text-[#E8D5B5] text-xs font-bold shrink-0 whitespace-nowrap">
                  <span className="text-[#C5A880]">★ 5.0</span>
                  <span className="text-[10px] text-gray-400 font-medium">(6 Google Yorumu)</span>
                </div>
              </div>

              <div className="space-y-4">
                {/* Phone 1 */}
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#1A1C24] hover:bg-[#222530] border border-white/5 hover:border-[#C5A880]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#C5A880] group-hover:scale-110 transition-transform shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-gray-400 block truncate">Doğrudan İletişim & Keşif Hattı</span>
                    <span className="font-sans text-base font-extrabold text-white group-hover:text-[#C5A880] transition-colors tracking-wide">
                      {CONTACT_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* Phone 2 Mobile & WhatsApp */}
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#1A1C24] hover:bg-[#222530] border border-[#25D366]/30 hover:border-[#25D366] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-gray-400 block truncate">7/24 WhatsApp Hızlı Danışma</span>
                    <span className="font-sans text-base font-extrabold text-white group-hover:text-[#25D366] transition-colors tracking-wide">
                      {CONTACT_INFO.mobile}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#1A1C24] hover:bg-[#222530] border border-white/5 hover:border-[#C5A880]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C5A880]/15 flex items-center justify-center text-[#C5A880] group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs text-gray-400 block truncate">Kurumsal & Mimari E-Posta</span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#C5A880] transition-colors truncate block">
                      {CONTACT_INFO.email}
                    </span>
                  </div>
                </a>
              </div>

              {/* Showroom Addresses */}
              <div className="pt-4 border-t border-white/10 space-y-4 text-xs text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Adres & Atölye:</strong>
                    <span>{CONTACT_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Çalışma Saatleri:</strong>
                    <span>{CONTACT_INFO.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Interactive Embed */}
            <div className="rounded-3xl overflow-hidden border border-white/10 h-48 bg-[#14151C] relative">
              <iframe
                title="Rüzgar Tente Selçuk İzmir Konum"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12595.642340801704!2d27.359873!3d37.948291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14beaa28a5099f11%3A0x86814234c9df4f4e!2sSel%C3%A7uk%2C%20%C4%B0zmir!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                className="w-full h-full border-0 grayscale invert opacity-75 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Quote & Discovery Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#14151C] border border-[#C5A880]/30 shadow-2xl relative">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      Talebiniz Başarıyla Alındı!
                    </h3>
                    <p className="text-sm text-gray-300 max-w-md mx-auto">
                      Uzman mimarımız {formData.fullName || 'tarafınıza'} en geç 30 dakika içerisinde dönüş yaparak ölçü keşfi ve fiyat detaylarını sunacaktır.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#1A1C24] border border-white/5 max-w-md mx-auto text-left text-xs space-y-1 text-gray-300">
                    <p><strong className="text-white">Seçilen Sistem:</strong> {formData.selectedModel}</p>
                    <p><strong className="text-white">İl / İlçe:</strong> {formData.cityDistrict || 'İzmir'}</p>
                    <p><strong className="text-white">İletişim:</strong> {formData.phone}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleForwardToWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp'tan Hemen Yaz</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold cursor-pointer"
                    >
                      Yeni Talep Formu Doldur
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form noValidate onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-1">
                      Hızlı Keşif & Fiyat Teklifi Formu
                    </h3>
                    <p className="text-xs text-gray-400">
                      Lütfen aşağıdaki alanları doldurun; mimari danışmanımız sizi arayarak net maliyet ve detayları iletsin.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Adınız Soyadınız <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Örn. Selin Yılmaz"
                        className={`w-full px-4 py-3 rounded-xl bg-[#1A1C24] text-white text-sm outline-none transition-all placeholder:text-gray-600 ${
                          errors.fullName
                            ? 'border border-[#C5A880] bg-[#C5A880]/[0.05] ring-1 ring-[#C5A880]'
                            : 'border border-white/10 focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]'
                        }`}
                      />
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
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Telefon Numaranız <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="05XX XXX XX XX"
                        className={`w-full px-4 py-3 rounded-xl bg-[#1A1C24] text-white text-sm outline-none transition-all placeholder:text-gray-600 ${
                          errors.phone
                            ? 'border border-[#C5A880] bg-[#C5A880]/[0.05] ring-1 ring-[#C5A880]'
                            : 'border border-white/10 focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]'
                        }`}
                      />
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* City & District */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Proje Konumu (İl / İlçe) <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="text"
                        name="cityDistrict"
                        value={formData.cityDistrict}
                        onChange={handleChange}
                        placeholder="Örn. İzmir / Çeşme"
                        className={`w-full px-4 py-3 rounded-xl bg-[#1A1C24] text-white text-sm outline-none transition-all placeholder:text-gray-600 ${
                          errors.cityDistrict
                            ? 'border border-[#C5A880] bg-[#C5A880]/[0.05] ring-1 ring-[#C5A880]'
                            : 'border border-white/10 focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880]'
                        }`}
                      />
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

                    {/* Model Select */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        İlgilendiğiniz Model <span className="text-[#C5A880]">*</span>
                      </label>
                      <select
                        name="selectedModel"
                        value={formData.selectedModel}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#1A1C24] border border-white/10 text-white text-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none transition-all cursor-pointer"
                      >
                        {PRODUCTS.map((p) => (
                          <option key={p.id} value={p.title} className="bg-[#14151C] text-white">
                            {p.title}
                          </option>
                        ))}
                        <option value="Özel Mimari Tasarım / Karar Veremedim" className="bg-[#14151C] text-white">
                          Özel Mimari Tasarım / Karar Veremedim
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Approx Dimensions */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Tahmini Ölçüler (Varsa - En x Açılım)
                    </label>
                    <input
                      type="text"
                      name="approxDimensions"
                      value={formData.approxDimensions}
                      onChange={handleChange}
                      placeholder="Örn. 5 metre cephe, 3.5 metre açılım"
                      className="w-full px-4 py-3 rounded-xl bg-[#1A1C24] border border-white/10 text-white text-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none transition-all placeholder:text-gray-600"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Proje Notunuz veya Sorularınız
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Villa terasım için LED ışıklı ve Somfy motorlu bioklimatik sistem düşünmekteyim..."
                      className="w-full px-4 py-3 rounded-xl bg-[#1A1C24] border border-white/10 text-white text-sm focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none transition-all placeholder:text-gray-600 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0D0E12] bg-gradient-to-r from-[#FFF0DC] via-[#C5A880] to-[#D4AF37] hover:brightness-110 shadow-xl shadow-[#C5A880]/20 transition-all duration-300 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Gönderiliyor...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Ücretsiz Keşif & Fiyat Teklifi İste</span>
                      </>
                    )}
                  </button>

                  {/* 2. Görsel Düzeltmesi: İkon yazının hemen başına/kenarına yapışık & tam ortalı */}
                  <div className="text-center pt-2 px-2 max-w-md mx-auto">
                    <p className="text-[11px] text-gray-400 leading-tight inline-flex items-center justify-center flex-wrap gap-1.5 text-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880] shrink-0 inline-block align-middle" />
                      <span>Bilgileriniz KVKK kapsamında korunmakta olup asla 3. şahıslarla paylaşılmaz.</span>
                    </p>
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