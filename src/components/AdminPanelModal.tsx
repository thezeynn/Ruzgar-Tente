import React, { useState, useRef, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Upload,
  Plus,
  Trash2,
  Star,
  Lock,
  Unlock,
  CheckCircle,
  AlertCircle,
  Eye,
  RotateCcw,
  Image as ImageIcon,
  ShieldCheck,
  Link as LinkIcon,
  Sparkles,
} from 'lucide-react';
import { useProducts } from '../hooks/useProducts';

const DEFAULT_PIN = '1993';
const AUTH_STORAGE_KEY = 'ruzgar_tente_admin_auth';

// Helper to compress and convert file to Data URL
function processImageFile(file: File, maxWidth = 1400, quality = 0.85): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = reject;
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

interface AdminPanelModalProps {
  onPreviewProduct?: (productId: string) => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({ onPreviewProduct }) => {
  const {
    products,
    isAdminOpen,
    setIsAdminOpen,
    adminSelectedProductId,
    setAdminSelectedProductId,
    addProductImage,
    removeProductImage,
    setMainProductImage,
    resetProductToDefault,
  } = useProducts();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true';
  });
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string>('');

  // Photo addition inputs
  const [imageUrlInput, setImageUrlInput] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [feedbackMsg, setFeedbackMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileInputId = useId();

  // Active product
  const selectedProduct = products.find((p) => p.id === adminSelectedProductId) || products[0];

  const showFeedback = (text: string, type: 'success' | 'error' = 'success') => {
    setFeedbackMsg({ type, text });
    setTimeout(() => {
      setFeedbackMsg(null);
    }, 3500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === DEFAULT_PIN || pinInput.trim().toLowerCase() === 'admin') {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
      setPinError('');
      setPinInput('');
    } else {
      setPinError('Geçersiz şifre! (Varsayılan PIN: 1993)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  };

  // Add from File Upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0 || !selectedProduct) return;

    setIsUploading(true);
    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.type.startsWith('image/')) continue;
        const compressedBase64 = await processImageFile(file);
        addProductImage(selectedProduct.id, compressedBase64);
      }
      showFeedback(`${files.length} adet fotoğraf başarıyla eklendi!`);
    } catch (err) {
      console.error('File upload error:', err);
      showFeedback('Fotoğraf yüklenirken bir hata oluştu.', 'error');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  // Add from URL
  const handleAddUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrlInput.trim() || !selectedProduct) return;

    try {
      const url = imageUrlInput.trim();
      addProductImage(selectedProduct.id, url);
      setImageUrlInput('');
      showFeedback('Görsel bağlantısı başarıyla eklendi!');
    } catch {
      showFeedback('Geçersiz görsel bağlantısı.', 'error');
    }
  };

  if (!isAdminOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsAdminOpen(false)}
        className="fixed inset-0 bg-black/90 backdrop-blur-xl transition-opacity"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-[#101116] border border-[#C5A880]/30 rounded-2xl shadow-2xl shadow-black/90 overflow-hidden z-10 flex flex-col max-h-[92vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/10 bg-[#15161D]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#C5A880]/15 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                  Rüzgar Tente
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium">
                  Yönetici Paneli
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Model Fotoğraf & Galeri Yönetimi
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                type="button"
                onClick={handleLogout}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                title="Yönetici oturumunu kapat"
              >
                <Unlock className="w-3.5 h-3.5" />
                <span>Çıkış Yap</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsAdminOpen(false)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* LOGIN SCREEN IF NOT AUTHENTICATED */}
          {!isAuthenticated ? (
            <div className="max-w-md mx-auto py-12 px-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] mx-auto mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Yönetici Girişi Gerekli</h4>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Model fotoğraflarını yönetmek, yeni fotoğraf aktarmak veya silmek için lütfen yönetici PIN kodunuzu girin.
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={pinInput}
                    onChange={(e) => {
                      setPinInput(e.target.value);
                      setPinError('');
                    }}
                    placeholder="PIN Kodu (Varsayılan: 1993)"
                    autoFocus
                    className="w-full text-center tracking-widest text-lg px-4 py-3 rounded-xl bg-[#181922] border border-white/15 focus:border-[#C5A880] text-white placeholder-gray-500 focus:outline-none transition-colors"
                  />
                  {pinError && <p className="text-xs text-red-400 mt-2">{pinError}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-[#C5A880] hover:bg-[#D4AF37] transition-all cursor-pointer shadow-lg active:scale-[0.98]"
                >
                  Giriş Yap
                </button>
              </form>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-gray-500">
                Varsayılan Yönetici PIN Kodu: <span className="text-[#C5A880] font-mono font-bold">1993</span>
              </div>
            </div>
          ) : (
            /* AUTHENTICATED ADMIN PANEL DASHBOARD */
            <div className="space-y-6">
              {/* Toast Feedback Message */}
              <AnimatePresence>
                {feedbackMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-center gap-2 p-3 rounded-xl text-xs font-medium ${
                      feedbackMsg.type === 'success'
                        ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                        : 'bg-red-500/15 border border-red-500/30 text-red-300'
                    }`}
                  >
                    {feedbackMsg.type === 'success' ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    )}
                    <span>{feedbackMsg.text}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 1. Model Selector Tabs */}
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                  Düzenlenecek Modeli Seçin:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {products.map((p) => {
                    const isSelected = selectedProduct?.id === p.id;
                    const photoCount = Array.from(new Set([p.image, ...(p.galleryImages || [])])).filter(Boolean).length;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setAdminSelectedProductId(p.id)}
                        className={`text-left p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#C5A880]/15 border-[#C5A880] text-white shadow-md'
                            : 'bg-[#15161D] border-white/10 text-gray-300 hover:border-white/25 hover:text-white'
                        }`}
                      >
                        <span className="text-xs font-medium line-clamp-1 leading-snug">{p.title}</span>
                        <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/5">
                          <span className="text-[10px] text-gray-400 font-serif italic line-clamp-1">
                            {p.subtitle.split(' ')[0]}
                          </span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold ${
                            photoCount > 1 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/10 text-gray-400'
                          }`}>
                            {photoCount} Görsel
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Active Model Details & Actions Bar */}
              {selectedProduct && (
                <div className="p-4 rounded-xl bg-[#161720] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      draggable={false}
                      className="w-12 h-12 rounded-lg object-cover border border-white/10 shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white">{selectedProduct.title}</h4>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#C5A880] border border-[#C5A880]/20 font-medium">
                          {selectedProduct.tag}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">{selectedProduct.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {onPreviewProduct && (
                      <button
                        type="button"
                        onClick={() => {
                          onPreviewProduct(selectedProduct.id);
                          setIsAdminOpen(false);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#E8D5B5] text-xs font-medium border border-white/10 transition-colors cursor-pointer"
                        title="Bu modelin müşteri penceresini önizle"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#C5A880]" />
                        <span>Canlı İncele</span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`"${selectedProduct.title}" modelinin fotoğraflarını fabrika varsayılanına sıfırlamak istiyor musunuz?`)) {
                          resetProductToDefault(selectedProduct.id);
                          showFeedback('Model fotoğrafları varsayılan haline döndürüldü.');
                        }
                      }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-300 text-xs transition-colors cursor-pointer"
                      title="Fabrika varsayılan fotoğrafına geri dön"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Varsayılana Sıfırla</span>
                    </button>
                  </div>
                </div>
              )}

              {/* 3. Upload & Add Photos Area */}
              {selectedProduct && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* File Upload Box */}
                  <div className="p-4 rounded-xl bg-[#14151C] border border-dashed border-[#C5A880]/40 hover:border-[#C5A880] transition-colors flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                        <Upload className="w-4 h-4 text-[#C5A880]" />
                        <span>Cihazdan Fotoğraf Yükle</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mb-3">
                        Bilgisayarınızdan veya telefonunuzdan dilediğiniz tente fotoğrafını (PNG, JPG, WebP) seçip bu modele aktarın.
                      </p>
                    </div>

                    <div>
                      <input
                        ref={fileInputRef}
                        id={fileInputId}
                        type="file"
                        accept="image/png, image/jpeg, image/webp"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <label
                        htmlFor={fileInputId}
                        className={`w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold cursor-pointer transition-all ${
                          isUploading
                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                            : 'bg-[#C5A880]/20 hover:bg-[#C5A880] text-[#E8D5B5] hover:text-black border border-[#C5A880]/50'
                        }`}
                      >
                        {isUploading ? (
                          <>
                            <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            <span>Yükleniyor...</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>Fotoğraf Dosyası Seç & Aktar</span>
                          </>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* URL Add Box */}
                  <div className="p-4 rounded-xl bg-[#14151C] border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                        <LinkIcon className="w-4 h-4 text-[#C5A880]" />
                        <span>Resim Bağlantısı (URL) ile Ekle</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mb-3">
                        İnternet üzerindeki veya ibb.co gibi sitelerdeki görsel linkini doğrudan yapıştırarak aktarın.
                      </p>
                    </div>

                    <form onSubmit={handleAddUrl} className="flex gap-2">
                      <input
                        type="url"
                        value={imageUrlInput}
                        onChange={(e) => setImageUrlInput(e.target.value)}
                        placeholder="https://i.ibb.co/... veya görsel linki"
                        className="flex-1 px-3 py-2 text-xs rounded-xl bg-[#191A23] border border-white/15 focus:border-[#C5A880] text-white placeholder-gray-500 focus:outline-none"
                      />
                      <button
                        type="submit"
                        disabled={!imageUrlInput.trim()}
                        className="px-3 py-2 rounded-xl text-xs font-semibold bg-[#C5A880] hover:bg-[#D4AF37] disabled:bg-gray-800 disabled:text-gray-500 text-black transition-colors shrink-0 cursor-pointer"
                      >
                        Ekle
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {/* 4. Current Photo Gallery Cards */}
              {selectedProduct && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-[#C5A880]" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                        {selectedProduct.title} - Mevcut Fotoğraflar
                      </h4>
                    </div>
                    <span className="text-xs text-gray-400">
                      {Array.from(new Set([selectedProduct.image, ...(selectedProduct.galleryImages || [])])).filter(Boolean).length} adet görsel
                    </span>
                  </div>

                  {/* Photos Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {Array.from(new Set([selectedProduct.image, ...(selectedProduct.galleryImages || [])])).filter(Boolean).map((imgUrl, idx) => {
                      const isMain = selectedProduct.image === imgUrl;
                      return (
                        <div
                          key={`${imgUrl}-${idx}`}
                          className={`relative rounded-xl overflow-hidden border bg-[#14151C] group flex flex-col justify-between ${
                            isMain ? 'border-[#C5A880] ring-2 ring-[#C5A880]/30' : 'border-white/10 hover:border-white/30'
                          }`}
                        >
                          {/* Image preview */}
                          <div className="relative h-32 sm:h-36 overflow-hidden bg-black/40">
                            <img
                              src={imgUrl}
                              alt={`Model Fotoğraf ${idx + 1}`}
                              draggable={false}
                              onDragStart={(e) => e.preventDefault()}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                            />

                            {/* Badge: Main Cover */}
                            {isMain ? (
                              <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#C5A880] text-black text-[10px] font-bold flex items-center gap-1 shadow-md">
                                <Star className="w-3 h-3 fill-black text-black" />
                                <span>Ana Kapak</span>
                              </div>
                            ) : (
                              <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-gray-300 text-[10px] font-medium border border-white/10">
                                Galeri #{idx + 1}
                              </div>
                            )}
                          </div>

                          {/* Action Buttons under each image */}
                          <div className="p-2 bg-[#171822] border-t border-white/5 flex items-center justify-between gap-1.5">
                            {!isMain ? (
                              <button
                                type="button"
                                onClick={() => {
                                  setMainProductImage(selectedProduct.id, imgUrl);
                                  showFeedback('Ana kapak fotoğrafı güncellendi!');
                                }}
                                className="flex-1 py-1.5 px-2 rounded-lg bg-white/5 hover:bg-[#C5A880]/20 text-[#E8D5B5] hover:text-[#C5A880] text-[11px] font-medium transition-colors text-center cursor-pointer"
                                title="Bu fotoğrafı ana vitrin görseli yap"
                              >
                                Ana Görsel Yap
                              </button>
                            ) : (
                              <span className="flex-1 py-1.5 px-2 text-[11px] text-[#C5A880] font-semibold text-center">
                                Varsayılan Kapak
                              </span>
                            )}

                            <button
                              type="button"
                              onClick={() => {
                                if (confirm('Bu fotoğrafı bu modelden silmek istediğinize emin misiniz?')) {
                                  removeProductImage(selectedProduct.id, imgUrl);
                                  showFeedback('Fotoğraf modelden silindi.');
                                }
                              }}
                              className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-colors cursor-pointer shrink-0"
                              title="Bu fotoğrafı sil"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Informative Note for Single Image */}
                  {Array.from(new Set([selectedProduct.image, ...(selectedProduct.galleryImages || [])])).filter(Boolean).length <= 1 && (
                    <div className="mt-3 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200 text-xs flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>
                        Bu modelde şu an sadece 1 adet fotoğraf bulunmaktadır. Sitedeki <strong>"Model İnceleme"</strong> penceresinde başka model fotoğrafı çıkmaz; yalnızca bu fotoğraf görüntülenir. Yeni fotoğraflar eklediğinizde müşterileriniz fotoğraflar arasında geçiş yapabilecektir.
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-7 py-3.5 border-t border-white/10 bg-[#15161D] flex items-center justify-between text-xs text-gray-400">
          <span>Rüzgar Tente &copy; {new Date().getFullYear()} İç Yönetim Sistemi</span>
          <button
            type="button"
            onClick={() => setIsAdminOpen(false)}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium transition-colors cursor-pointer"
          >
            Paneli Kapat
          </button>
        </div>
      </motion.div>
    </div>
  );
};
