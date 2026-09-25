import type { ProductModel, ProjectShowcase, FAQItem, Testimonial } from '../types';


export const PRODUCTS: ProductModel[] = [
  {
    id: 'bioklimatik-pergola',
    title: 'Bioklimatik Pergola Sistemleri',
    subtitle: 'Akıllı Alüminyum Lamelli Dört Mevsim İklimlendirme',
    tag: 'En Çok Tercih Edilen',
    image: '/images/sasirtma_pergola_1790269026014.jpg',
    galleryImages: [
      '/images/sasirtma_pergola_1790269026014.jpg'
    ],
    description: '0-120° açıyla dönebilen ve geriye doğru toplanabilen alüminyum panelleriyle güneş ışığını, havalandırmayı ve yağmur korumasını parmaklarınızın ucuna getirir. Entegre gizli su tahliye kanalları ve kısılamaz lüks LED aydınlatma ile donatılmıştır.',
    features: [
      '0°-120° Dönüş ve Tam Toplanma Özelliği (Rolling & Retractable)',
      'Entegre Kısılamaz (Dimmable) Çevre & Spot LED Aydınlatma',
      'Gizli Entegre Yağmur Suyu Drenaj Kanalları',
      'Rüzgar, Yağmur ve Kar Akıllı Otomasyon Sensörleri',
      'Elektrostatik Toz Boya (Qualicoat Belgeli, Solmaz)',
      'Somfy / Becker Akıllı Motor & Uzaktan Kumanda Entegrasyonu'
    ],
    specs: [
      { label: 'Gövde Materyali', value: '6063 T6 Yüksek Mukavemetli Alüminyum' },
      { label: 'Maksimum Açılım', value: 'Tek modülde 7000 mm x 10000 mm' },
      { label: 'Rüzgar Dayanımı', value: '120 km/s (Beaufort Skalası Sınıf 6+)' },
      { label: 'Kar Yükü Kapasitesi', value: '180 kg / m²' },
      { label: 'Aydınlatma', value: 'Samsung 24V Lineer LED & RGB Opsiyonu' },
      { label: 'Motor & Kontrol', value: 'Somfy IO / Becker / RTS Akıllı Ev Uyumlu' }
    ],
    idealFor: ['Lüks Villalar', 'Teras & Bahçeler', 'Prestijli Restoran & Cafeler', 'Otel Açık Alanları'],
    warrantyYears: 5,
    motorType: 'Somfy / Becker Akıllı Motor'
  },
  {
    id: 'kasetli-tente',
    title: 'Tam Kasetli Lüks Tente',
    subtitle: 'Kumaş ve Mekanizmayı Tamamen Gizleyen Kompakt Tasarım',
    tag: 'Premium Seri',
    image: '/images/kasetli_tente_1790268955447.jpg',
    galleryImages: [
      '/images/kasetli_tente_1790268955447.jpg'
    ],
    description: 'Kapandığında kumaşını ve hareketli kollarını tamamen içine hapseden alüminyum kaset kutusu sayesinde kumaş ömrünü iki katına çıkarır. Dış etkenlerden, kirden ve tozdan etkilenmeyen mimari estetik.',
    features: [
      'Tam Kapalı Alüminyum Kaset Gövdesi',
      'İthal Dickson Constant / Serge Ferrari Akrilik Kumaş',
      'Kollara Entegre Lineer LED Işık Şeritleri',
      'Titreşim ve Rüzgar Güvenlik Sensörü (Eolis 3D)',
      '0-45 Derece Ayarlanabilir Eğim Açısı',
      'Sessiz ve Pürüzsüz Çalışan Çift Çelik Halatlı Kol Mekanizması'
    ],
    specs: [
      { label: 'Gövde Materyali', value: 'Ekstrüzyon Alüminyum Kaset Profili' },
      { label: 'Maksimum Cephe', value: '7000 mm (Tek Parça) / 3500 mm Açılım' },
      { label: 'Kumaş Türü', value: '100% Solmaz İthal Akrilik (300gr/m²)' },
      { label: 'UV Koruması', value: 'UPF 50+ (%98 Güneş Işını Engelleme)' },
      { label: 'Aydınlatma', value: 'Kollara Gömme LED Aydınlatma (Opsiyonel)' },
      { label: 'Motor Sistemi', value: 'Somfy Motorlu veya Manuel Acil Açma Kolu' }
    ],
    idealFor: ['Villa Verandaları', 'Rezidans Balkonları', 'Lüks Butik Önleri', 'Cafe Terasları'],
    warrantyYears: 5,
    motorType: 'Somfy Radyo Alıcılı Motor'
  },
  {
    id: 'mafsalli-tente',
    title: 'Klasik & Motorlu Mafsallı Tente',
    subtitle: 'Dükkan, Cafe ve Teraslar İçin Estetik Gölgelendirme',
    tag: 'Klasik & Güçlü',
    image: '/images/kahvecin_mafsalli_tente.jpg',
    galleryImages: [
      '/images/kahvecin_mafsalli_tente.jpg'
    ],
    description: 'Yüksek gerilimli alüminyum enjeksiyon kollar ve birinci sınıf solmaz akrilik kumaş ile üretilen mafsallı tente sistemleri, dükkan önleri, restoranlar ve geniş teraslar için en pratik ve güvenilir çözümdür.',
    features: [
      'Yüksek Mukavemetli Çift Çelik Halatlı Mafsal Kolları',
      'Su İtici, Solmaz İthal Dickson Akrilik Kumaş Teknolojisi',
      '0-45 Derece Ayarlanabilir Kademeli Eğim Açısı',
      'Manuel Kol veya Somfy Motor & Uzaktan Kumanda Seçeneği',
      'Geniş Renk & Çizgili / Düz Desen Kartelası',
      'Rüzgar Titreşim Güvenlik Sensörü Entegrasyonu'
    ],
    specs: [
      { label: 'Cephe Genişliği', value: '2000 mm - 7000 mm (Tek Parça)' },
      { label: 'İleri Açılım', value: '1500 mm - 3500 mm' },
      { label: 'Kumaş', value: 'Avrupa İthal Akrilik (300 gr/m², 5 Yıl Garantili)' },
      { label: 'Boya', value: 'Elektrostatik Toz Fırın Boya (Tüm RAL Kodları)' },
      { label: 'Mekanizma', value: 'Çelik Halatlı / Zincirli Güçlendirilmiş Kol' },
      { label: 'Motor & Kontrol', value: 'Somfy / Becker Motor ve Acil Durum Redüktörü' }
    ],
    idealFor: ['Ticari Dükkan ve Mağaza Önleri', 'Cafe & Restoran Girişleri', 'Müstakil Villa Verandaları', 'Geniş Balkonlar'],
    warrantyYears: 5,
    motorType: 'Somfy / Becker Akıllı Motor veya Manuel'
  },
  {
    id: 'motorlu-stor-perde',
    title: 'Motorlu Dış Cephe Stor & Zip Perde',
    subtitle: 'Dikey Güneş Kırıcı, Rüzgar ve Mahremiyet Kalkanı',
    tag: 'Yeni Nesil Çözüm',
    image: '/images/motorlu_store_perde_1790269405082.jpg',
    galleryImages: [
      '/images/motorlu_store_perde_1790269405082.jpg'
    ],
    description: 'Bina dış cephelerine, pergola yanlarına ve geniş cam pencerelere uygulanan motorlu dikey stor perde sistemleri; güneşin yakıcı ısısını dışarıda tutar, rüzgarı keser ve içeriden dışarısının net görünmesini sağlarken mahremiyet kazandırır.',
    features: [
      'Somfy / Becker Akıllı Motor ve Uzaktan Kumanda Entegrasyonu',
      'Serge Ferrari Soltis Mikro Perfore Güneş Kırıcı Kumaş',
      'Fermuarlı (Zip) Yan Kılavuz Kanalları ile 120 km/s Rüzgara Dayanım',
      'Kompakt Ekstrüzyon Alüminyum Üst Kaset Kutusu',
      'İçeriden Manzarayı Kapatmayan, Dışarıdan Görünümü Engelleyen Doku',
      'Güneş & Rüzgar Otomasyon Sensörleri ile Otomatik Çalışma'
    ],
    specs: [
      { label: 'Kumaş Türü', value: 'Serge Ferrari Soltis 86 / 92 & Serge Ferrari Mikro Perfore' },
      { label: 'Maksimum Ebat', value: 'Genişlik: 5500 mm | Yükseklik: 4500 mm' },
      { label: 'Rüzgar Direnci', value: '120 km/s (Fermuarlı Kilit Sistemi)' },
      { label: 'Isı Yalıtımı', value: '%85-92 Güneş Isısı Engelleme (Enerji Tasarrufu)' },
      { label: 'Kaset Ölçüsü', value: '95 mm / 125 mm Yuvarlak veya Köşeli Alüminyum Kaset' },
      { label: 'Kontrol', value: 'Somfy IO / RTS Uzaktan Kumanda ve Akıllı Ev Entegrasyonu' }
    ],
    idealFor: ['Villa Teras & Balkon Kapatma', 'Pergola & Kamelya Yanları', 'Plaza & Ofis Cam Cepheleri', 'Restoran & Cafe Bahçeleri'],
    warrantyYears: 5,
    motorType: 'Somfy Radyo Alıcılı Dikey Motor'
  },
  {
    id: 'koruklu-tente',
    title: 'Dekoratif Körüklü & Karpuz Tente',
    subtitle: 'Nostaljik ve Şık Fransız Tarzı Pencere & Kapı Gölgeliği',
    tag: 'Zarif & Estetik',
    image: '/images/koruklu_tente_1790268976928.jpg',
    galleryImages: [
      '/images/koruklu_tente_1790268976928.jpg'
    ],
    description: 'Pencereler, butik girişleri, tiny house ve oteller için yanlardan gelen eğimli güneş ışınlarını da kesen akordeon körük mekanizmalı zarif tente mimarisi.',
    features: [
      'Akordeon Katlanabilir Alüminyum İskelet Sistemi',
      'Yan Açılardan Gelen Güneşi ve Yağmuru %100 Engelleme',
      'İpli Manuel veya Motorlu Açma / Kapama Mekanizması',
      'Özel Saçak ve Kurumsal Logo Baskı Seçeneği',
      'Solmaz İthal Akrilik veya Su Geçirmez Branda Kumaş',
      'Paslanmaz Bağlantı Elemanları ve Mafsal Parçaları'
    ],
    specs: [
      { label: 'Genişlik Ölçüsü', value: '1000 mm - 5000 mm arası özel üretim' },
      { label: 'Açılım Mesafesi', value: '600 mm - 1400 mm' },
      { label: 'Kumaş Seçenekleri', value: 'Avrupa Akrilik / PVC Kaplamalı İthal Branda' },
      { label: 'İskelet', value: 'Ekstrüzyon Alüminyum Körük Profilleri' },
      { label: 'Kontrol', value: 'İpli Çekme Sistemi veya Somfy Tüp Motor' }
    ],
    idealFor: ['Butik Otel & Cafe Pencereleri', 'Tiny House & Ahşap Evler', 'Villa Giriş Kapıları', 'Mağaza Vitrinleri'],
    warrantyYears: 3,
    motorType: 'Manuel İpli veya Somfy Motorlu'
  },
  {
    id: 'giyotin-cam-zip-perde',
    title: 'Otomatik Giyotin Cam & Şeffaf Kış Kapama',
    subtitle: 'Dikey Hareketli Akıllı Rüzgar ve Manzara Kalkanı',
    tag: 'Modern Mimari',
    image: '/images/seffaf_kaplama_1790269014129.jpg',
    galleryImages: [
      '/images/seffaf_kaplama_1790269014129.jpg'
    ],
    description: 'Tek bir tuşla yukarıdan aşağıya veya aşağıdan yukarıya kayan silinebilir giyotin cam ve fermuarlı kış koruma sistemleri ile açık alanlarınızı konforlu bir iç mekana çevirin.',
    features: [
      '8mm veya Isıcamlı (4+12+4) Temperli Güvenlik Camı',
      'Triger Kayışlı veya Çelik Zincirli Ağır Yük Taşıma Mekanizması',
      'Silinebilir Cam Tasarımı (Kolay Temizleme Modu)',
      'Şeffaf Mika ve Fermuarlı Kış Bahçesi Yalıtım Çözümleri',
      'Isı, Ses ve Yağmur Yalıtımlı Çift Fitil Sistemi',
      'Dokunmatik Buton ve Mobil Uygulama Desteği'
    ],
    specs: [
      { label: 'Cam Seçenekleri', value: '8mm Temperli / 4+16+4 Konfor Isıcam' },
      { label: 'Maksimum Panel Ölçüsü', value: 'Genişlik: 4000 mm | Yükseklik: 3500 mm' },
      { label: 'Kumaş / Mika', value: 'Japon Şeffaf Kristal Mika & Serge Ferrari Kumaş' },
      { label: 'Sızdırmazlık', value: 'EPDM Kauçuk Fitil & Kıl Fitil Kombinasyonu' },
      { label: 'Motor Gücü', value: '120Nm Ağır Hizmet Tipi Somfy Motor' }
    ],
    idealFor: ['Pergola Yan Kapatmaları', 'Restoran & Kafeler', 'Balkon Kapatma', 'Kış Bahçeleri'],
    warrantyYears: 5,
    motorType: 'Somfy Ağır Yük Motoru'
  },
  {
    id: 'rolling-roof-kis-bahcesi',
    title: 'Rolling Roof & Jüt Gölgelendirme',
    subtitle: 'Tamamen Açılabilir Panoramik Tavan & Yalıtımlı Yaşam Alanı',
    tag: 'Mimari Başyapıt',
    image: '/images/jut_sasirtma_1790269003627.jpg',
    galleryImages: [
      '/images/jut_sasirtma_1790269003627.jpg'
    ],
    description: 'Dünyada hem toplanma hem katlanma hareketini bir arada sunan Rolling Roof tavan sistemi ve ahşap pergola üzeri jüt şaşırtma kumaş uygulamalarıyla tasarlanan ayrıcalıklı yaşam alanları.',
    features: [
      'Hem Dönme (Hava Alma) Hem de Tam Geriye Toplanma Özelliği',
      'Doğal Jüt Kumaş ve Şaşırtma Gölgelendirme Opsiyonları',
      'Çatı Üstü Temizliğini İçeriden Kolayca Yapabilme İmkânı',
      'Gizli Entegre Isıtma (Infrared) ve Akıllı Ses Sistemi Yuvaları',
      'Özel Renk Seçenekleri (Ahşap Desen Transferi veya Özel RAL)',
      'Dört Mevsim Tam İklim Kontrolü'
    ],
    specs: [
      { label: 'Panel Malzemesi', value: 'İçi Poliüretan Dolgulu Yalıtımlı Alüminyum Panel' },
      { label: 'Modül Boyutu', value: 'Sınırsız modül birleşimi ile devasa alanlar' },
      { label: 'Su Sızdırmazlık', value: '%100 Pozitif Eğimli Gizli Drenaj Olukları' },
      { label: 'Otomasyon', value: 'Akıllı Telefon, Sesli Asistan (Alexa/Google) ve Somfy' },
      { label: 'Cam Opsiyonu', value: 'Lamine Temperli Çift Isıcam' }
    ],
    idealFor: ['Müstakil Villalar', 'Çatı Katı Penthouse', 'Lüks Restoran & Lounge', 'Otel Terasları'],
    warrantyYears: 5,
    motorType: 'Endüstriyel Senkron Somfy Motor'
  }
];

export const SHOWCASE_PROJECTS: ProjectShowcase[] = [
  {
    id: 'prj-1',
    title: 'Bodrum Sahil Şaşırtma Tavan Projesi',
    category: 'villa',
    location: 'Bodrum, Muğla',
    image: '/images/sasirtma_pergola_1790269026014.jpg',
    system: 'Şaşırtma Kumaş Tavan Gölgelendirme'
  },
  {
    id: 'prj-2',
    title: 'Alaçatı Havuz Başı Jüt Şaşırtma Pergola',
    category: 'villa',
    location: 'Alaçatı, İzmir',
    image: '/images/jut_sasirtma_1790269003627.jpg',
    system: 'Ahşap Pergola & Jüt Şaşırtma'
  },
  {
    id: 'prj-3',
    title: 'Kuşadası Sahil Rezidans Kasetli Tente',
    category: 'teras',
    location: 'Kuşadası, Aydın',
    image: '/images/kasetli_tente_1790268955447.jpg',
    system: 'Tam Kasetli Motorlu Tente'
  },
  {
    id: 'prj-4',
    title: 'Bahçe Kamelya Şeffaf Kış Kaplama',
    category: 'teras',
    location: 'Selçuk, İzmir',
    image: '/images/seffaf_kaplama_1790269014129.jpg',
    system: 'Şeffaf Mika Branda Kış Bahçesi'
  },
  {
    id: 'prj-5',
    title: 'Tiny House Özel Körüklü Karpuz Tente',
    category: 'villa',
    location: 'Urla, İzmir',
    image: '/images/koruklu_tente_1790268976928.jpg',
    system: 'Pencere & Kapı Üstü Körüklü Tente'
  },
  {
    id: 'prj-6',
    title: 'Havuz Başı Asma Germe Gölgelendirme',
    category: 'ticari',
    location: 'Çeşme, İzmir',
    image: '/images/golgelendirme_yelken_1790268989436.jpg',
    system: 'Yelken Kumaş Mimari Gölgelik'
  },
  {
    id: 'prj-7',
    title: 'Kahvecin Cafe Mafsallı Tente',
    category: 'restoran',
    location: 'Namık Kemal Caddesi, İzmir',
    image: '/images/kahvecin_mafsalli_tente.jpg',
    system: 'Özel Logolu Klasik Mafsallı Tente'
  },
  {
    id: 'prj-8',
    title: 'Modern Villa Dış Cephe Stor & Zip Perde',
    category: 'villa',
    location: 'Urla / Kekliktepe, İzmir',
    image: '/images/motorlu_store_perde_1790269405082.jpg',
    system: 'Motorlu Dış Cephe Stor Perde'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Ürün & Kalite',
    question: 'Tente ve pergola sistemlerinde hangi kumaş ve malzemeleri kullanıyorsunuz?',
    answer: 'Ürünlerimizde Avrupa standartlarında üretilen, %100 su geçirmez, solmazlık garantili Dickson Constant (Fransa) ve Serge Ferrari (Fransa) akrilik ve PVC membran kumaşlar kullanıyoruz. Tüm metal aksamlar ise paslanmaz elektrostatik toz fırın boyalı 6063 T6 ekstrüzyon alüminyum profillerden oluşur.'
  },
  {
    id: 'faq-2',
    category: 'Motor & Garanti',
    question: 'Motor ve otomasyon sistemlerinizin garantisi ne kadar süredir?',
    answer: 'Tüm motorlu mekanizmalarımızda dünyanın 1 numarası Fransız Somfy ve Alman Becker motor teknolojilerini tercih ediyoruz. Motor ve mekanik aksamlarımız 5 yıl tam değişim ve servis garantisi altındadır. Ayrıca opsiyonel akıllı ev entegrasyonu (Somfy TaHoma) sunmaktayız.'
  },
  {
    id: 'faq-3',
    category: 'Dayanıklılık',
    question: 'Bioklimatik pergola ve kasetli tenteler şiddetli rüzgara ve kar yüküne ne kadar dayanıklıdır?',
    answer: 'Bioklimatik pergola sistemlerimiz 120 km/s hızındaki fırtına rüzgarlarına ve metrekarede 180 kg kar yüküne dayanacak şekilde mühendislik hesaplamalarıyla üretilir. Kasetli ve mafsallı tentelerimize entegre ettiğimiz titreşim/rüzgar sensörleri (Eolis 3D), tehlikeli rüzgar hızlarında sistemi otomatik olarak kapatarak korumaya alır.'
  },
  {
    id: 'faq-4',
    category: 'Keşif & Montaj',
    question: 'Ücretsiz keşif ve projelendirme hizmetiniz var mı? Montaj ne kadar sürer?',
    answer: 'Evet! İstanbul ve çevre illerde yerinde lazer ölçüm, 3D mimari modelleme ve projelendirme keşif hizmetimiz tamamen ücretsizdir. Sipariş onayının ardından özel ölçü üretimimiz ortalama 7-12 iş günü sürmekte; yerinde montaj ise uzman ekibimiz tarafından 1-2 iş günü içerisinde anahtar teslim tamamlanmaktadır.'
  },
  {
    id: 'faq-5',
    category: 'Fiyatlandırma',
    question: 'Fiyatlar nasıl hesaplanır ve ödeme koşullarınız nasıldır?',
    answer: 'Fiyatlar alanın en x boy (açılım) metrajına, seçilen alüminyum profil kalınlığına, motor markasına, LED ışık ve giyotin cam gibi ek donanımlara göre şeffaf biçimde hesaplanır. Kredi kartına taksit, kurumsal faturalandırma ve avantajlı nakit indirim opsiyonları sunuyoruz.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mimar Selin Korkmaz',
    title: 'Korkmaz Mimarlık & Tasarım',
    location: 'Bodrum, Muğla',
    comment: 'Cennet Koyu projemizdeki 3 müstakil villanın terası için Somfy motorlu bioklimatik pergola ve giyotin cam uygulaması yaptırdık. Milimetrik üretim, kusursuz gizli su tahliyesi ve montaj ekibinin titizliği hayran bıraktı. Mimari çizimlerimize %100 sadık kaldılar.',
    rating: 5,
    project: 'Bodrum Cennet Koyu Villa Projesi',
    date: '2 Hafta Önce',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Ahmet Eren Güngör',
    title: 'İşletme Sahibi • Riva Lounge',
    location: 'Kordon, İzmir',
    comment: 'Restoranımızın 140 m² sahil terasına Rolling Roof ve kademeli LED aydınlatma uygulandı. Kışın fırtınada ve şiddetli yağmurda gram sızdırma veya rüzgar sesi yaşamadık. Kış aylarındaki masa kapasitemiz ikiye katlandı, ciromuz belirgin şekilde arttı.',
    rating: 5,
    project: 'Riva Lounge Panoramik Tavan',
    date: '1 Ay Önce',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Dr. Mehmet Yaşar',
    title: 'Müstakil Villa Sahibi',
    location: 'Çeşme / Alaçatı, İzmir',
    comment: 'Çeşme’nin meşhur sert rüzgarlarına dayanacak bir sistem arıyorduk. Dickson kumaşlı tam kasetli tente ve rüzgar titreşim sensörü kurdular. Rüzgar belirli bir hızı aşınca tente kendini otomatik kapatıyor. 2 yıldır sorunsuz kullanıyoruz, servis ihtiyacında da anında ulaştılar.',
    rating: 5,
    project: 'Alaçatı Taş Ev Veranda Kapama',
    date: '3 Ay Önce',
    verified: true
  },
  {
    id: 'test-4',
    name: 'Ece & Barış Tanrıkulu',
    title: 'Rezidans Teras Sahibi',
    location: 'Bebek, İstanbul',
    comment: 'Penthouse dairemizin Boğaz manzaralı terası için motorlu giyotin cam ve bioklimatik pergola yaptırdık. Keşiften 10 gün sonra montaj tamamlandı. Akıllı telefon uygulamasıyla evin içinden tek tuşla çatıyı açıp kapatabiliyoruz. Kesinlikle birinci sınıf işçilik.',
    rating: 5,
    project: 'Boğaz Manzaralı Penthouse Terası',
    date: 'Geçen Ay',
    verified: true
  },
  {
    id: 'test-5',
    name: 'Kemal Vardarlı',
    title: 'Genel Koordinatör • Blue Bay Hotel',
    location: 'Kuşadası, Aydın',
    comment: 'Otelimizin havuz başı lounge alanı için 220 m² genişliğinde çift açılır mafsallı tente ve yan zip perde sistemi kuruldu. Hem güneş kırıcı performansı hem de kurumsal teslimat hızı için Rüzgar Tente mühendislik ekibine teşekkür ederiz.',
    rating: 5,
    project: 'Blue Bay Hotel Lounge Gölgelendirme',
    date: '2 Ay Önce',
    verified: true
  },
  {
    id: 'test-6',
    name: 'Serkan Aydoğan',
    title: 'Villa Sahibi',
    location: 'Urla Kekliktepe, İzmir',
    comment: 'Kış bahçesi projemiz için 4 farklı firmadan teklif aldık; Rüzgar Tente hem 3D lazer keşif simülasyonuyla projeyi önceden görmemizi sağladı hem de 5 yıl motor parça garantisiyle güven verdi. Beklentimizin çok üzerinde bir yaşam alanı oldu.',
    rating: 5,
    project: 'Urla Kekliktepe Kış Bahçesi',
    date: '3 Hafta Önce',
    verified: true
  },
  {
    id: 'test-7',
    name: 'Mühendis Tolga Çelik',
    title: 'Çelik İnşaat & Gayrimenkul',
    location: 'Alsancak, İzmir',
    comment: 'Ticari cafe ve restoran projelerimizde tek tercihimiz Rüzgar Tente. Alüminyum et kalınlığı, elektrostatik fırın boyanın kusursuzluğu ve Somfy motor entegrasyonu gerçekten Avrupa standartlarında. Satış sonrası servis destekleri mükemmel.',
    rating: 5,
    project: 'Alsancak Butik Cafe Cephe Tentesi',
    date: '1 Hafta Önce',
    verified: true
  },
  {
    id: 'test-8',
    name: 'Hande Erdem',
    title: 'Müstakil Konut Sahibi',
    location: 'Sığacık / Seferihisar, İzmir',
    comment: 'Bahçemizdeki veranda için özel ölçü bioklimatik pergola yaptırdık. Yağmurlu günlerde çatıyı kapatıp terasımızda oturabiliyoruz, su tahliyesi gizli kanallardan akıp gidiyor. İşçilik ve ilgi alaka için çok teşekkür ederiz.',
    rating: 5,
    project: 'Sığacık Bahçe Veranda Pergola',
    date: 'Geçen Hafta',
    verified: true
  },
  {
    id: 'test-9',
    name: 'Bülent Karahan',
    title: 'Restoran İşletmecisi • Marina Lounge',
    location: 'Yat Limanı, Marmaris',
    comment: 'Deniz kenarındaki tuzlu nemli havaya ve fırtınaya dayanıklı sistem gerekiyordu. Paslanmaz elektrostatik boyalı kasetli tenteler tam aradığımız kaliteyi sundu. Kumaş rengi güneşte hiç solmadı, mekanın prestijini katladı.',
    rating: 5,
    project: 'Marmaris Marina Teras Kapama',
    date: '1 Ay Önce',
    verified: true
  },
  {
    id: 'test-10',
    name: 'Canan & Murat Özkan',
    title: 'Yazlık Konut Sahibi',
    location: 'Akbük / Didim, Aydın',
    comment: 'Yazlığımızın geniş terası yazın sıcaktan kullanılamıyordu. Rüzgar Tente ekibi gelip ölçü aldı ve 1 hafta içinde montajı tamamladı. Dimmable LED spotları akşamları harika bir ortam sunuyor.',
    rating: 5,
    project: 'Didim Akbük Teras Gölgelendirme',
    date: '3 Hafta Önce',
    verified: true
  },
  {
    id: 'test-11',
    name: 'Av. Ceyda Karataş',
    title: 'Taş Konak Sahibi',
    location: 'Cunda Adası / Ayvalık',
    comment: 'Tarihi dokuya uygun özel antrasit-gold tonlarında tam kasetli tente üretildi. Tarihi binamızın estetiğini bozmadan son derece şık ve modern bir gölge alanı kazandık. Ekipler temiz ve profesyonel çalıştı.',
    rating: 5,
    project: 'Cunda Adası Taş Konak Verandası',
    date: '2 Ay Önce',
    verified: true
  },
  {
    id: 'test-12',
    name: 'Hakan Demirbilek',
    title: 'Müstakil Ev Sahibi',
    location: 'Göktürk, İstanbul',
    comment: 'Bahçemize kış bahçesi ve ısı yalıtımlı giyotin cam sistemi yaptırdık. Kışın ortasında şömineli sıcak bir oturma odası gibi kullanıyoruz. İzolasyon performansı ve motor sessizliği kusursuz.',
    rating: 5,
    project: 'Göktürk Doğa Evleri Kış Bahçesi',
    date: '1 Ay Önce',
    verified: true
  }
];

export const STATS = [
  { value: 15, suffix: '+', label: 'Yıllık Sektör Tecrübesi', desc: 'Mimari gölgelendirmede lider' },
  { value: 1250, suffix: '+', label: 'Tamamlanan Lüks Proje', desc: 'Villa, otel & işletme referansı' },
  { value: 100, suffix: '%', label: 'Müşteri Memnuniyeti', desc: 'Kusursuz işçilik & satış sonrası destek' },
  { value: 5, suffix: ' Yıl', label: 'Tam Parça & Motor Garantisi', desc: 'Somfy & Becker onaylı güvence' }
];

export const ROTATING_PHONES = [
  { label: 'İletişim & Keşif', phone: '0535 704 33 43', raw: '+905357043343' },
  { label: 'Danışma & Sipariş', phone: '0553 891 55 19', raw: '+905538915519' },
];

export const CONTACT_INFO = {
  phone: '0535 704 33 43',
  phoneRaw: '+905357043343',
  phone2: '0553 891 55 19',
  phone2Raw: '+905538915519',
  mobile: '0535 704 33 43',
  mobileRaw: '+905357043343',
  whatsapp: '0535 704 33 43',
  whatsappRaw: '905357043343',
  whatsapp2: '0553 891 55 19',
  whatsapp2Raw: '905538915519',
  whatsappDefaultMsg: 'Merhaba Rüzgar Tente, tente ve pergola sistemleri hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.',
  email: 'info@ruzgartente.com',
  address: 'Cumhuriyet, 5205 sk no:31, 35920 Selçuk / İzmir',
  factoryAddress: 'Cumhuriyet Mah. 5205 Sok. No: 31, Selçuk / İzmir',
  workingHours: 'Pzt - Cmt: 08:30 - 18:00 (Pazar: Kapalı)',
  googleRating: '5.0',
  reviewCount: '6'
};

