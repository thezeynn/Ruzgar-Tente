import type { ProductModel, ProjectShowcase, FAQItem, Testimonial } from '../types';


export const PRODUCTS: ProductModel[] = [
  {
    id: 'bioklimatik-pergola',
    title: 'Bioklimatik Pergola Sistemleri',
    subtitle: 'Akıllı Alüminyum Lamelli Dört Mevsim İklimlendirme',
    tag: 'En Çok Tercih Edilen',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
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
    title: 'Mafsallı & Çift Açılır Tente',
    subtitle: 'Geniş Alanlar İçin Klasik & Güvenilir Gölgelendirme',
    tag: 'Klasik & Güçlü',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Yüksek gerilimli alüminyum yay kolları ve geniş cephe opsiyonlarıyla bahçe, teras ve işletmeler için pratik, ekonomik ve şık bir gölgelendirme standardı oluşturur.',
    features: [
      'Yüksek Mukavemetli Çelik Yaylı Mafsal Kolları',
      'Su İtici & Küf Tutmaz Nano Kumaş Teknolojisi',
      'Eğim Açısı Manuel veya Motorla Kolayca Ayarlanabilir',
      'Çift Açılır (T-Model) Bağımsız Ayaklı Çözüm Opsiyonu',
      'Geniş Renk & Desen Kartelası',
      'Rüzgar Titreşim Sensörü Uyumluluğu'
    ],
    specs: [
      { label: 'Cephe Genişliği', value: '2000 mm - 6000 mm arası' },
      { label: 'İleri Açılım', value: '1500 mm - 3500 mm' },
      { label: 'Kumaş', value: 'Avrupa İthal Akrilik (Solmazlık Garantili)' },
      { label: 'Boya', value: 'Elektrostatik Fırın Boya (İstenilen RAL Rengi)' },
      { label: 'Mekanizma', value: 'Zincirli / Çelik Halatlı Kol Sistemi' }
    ],
    idealFor: ['Müstakil Ev Bahçeleri', 'Ticari Dükkanlar', 'Havuz Kenarları', 'Geniş Teraslar'],
    warrantyYears: 3,
    motorType: 'Somfy / Becker / Manuel Seçenek'
  },
  {
    id: 'giyotin-cam-zip-perde',
    title: 'Otomatik Giyotin Cam & Zip Perde',
    subtitle: 'Dikey Hareketli Akıllı Rüzgar ve Manzara Kalkanı',
    tag: 'Modern Mimari',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Tek bir tuşla yukarıdan aşağıya veya aşağıdan yukarıya kayan silinebilir giyotin cam ve fermuarlı rüzgar kesici Zip Perde sistemleri ile açık alanlarınızı konforlu bir iç mekana çevirin.',
    features: [
      '8mm veya Isıcamlı (4+12+4) Temperli Güvenlik Camı',
      'Triger Kayışlı veya Çelik Zincirli Ağır Yük Taşıma Mekanizması',
      'Silinebilir Cam Tasarımı (Kolay Temizleme Modu)',
      'Zip Perdede 120 km/s Rüzgara Dayanıklı Fermuarlı Kılavuz Kanalları',
      'Isı, Ses ve Yağmur Yalıtımlı Çift Fitil Sistemi',
      'Dokunmatik Buton ve Mobil Uygulama Desteği'
    ],
    specs: [
      { label: 'Cam Seçenekleri', value: '8mm Temperli / 4+16+4 Konfor Isıcam' },
      { label: 'Maksimum Panel Ölçüsü', value: 'Genişlik: 4000 mm | Yükseklik: 3500 mm' },
      { label: 'Zip Kumaş', value: 'Serge Ferrari Soltis / Sunworker Micro Perfore' },
      { label: 'Sızdırmazlık', value: 'EPDM Kauçuk Fitil & Kıl Fitil Kombinasyonu' },
      { label: 'Motor Gücü', value: '120Nm Ağır Hizmet Tipi Somfy Motor' }
    ],
    idealFor: ['Pergola Yan Kapatmaları', 'Restoran & Kafeler', 'Balkon Kapatma', 'Kış Bahçeleri'],
    warrantyYears: 5,
    motorType: 'Somfy Ağır Yük Motoru'
  },
  {
    id: 'rolling-roof-kis-bahcesi',
    title: 'Rolling Roof & Lüks Kış Bahçesi',
    subtitle: 'Tamamen Açılabilir Panoramik Tavan & Yalıtımlı Yaşam Alanı',
    tag: 'Mimari Başyapıt',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Dünyada hem toplanma hem katlanma hareketini bir arada sunan Rolling Roof tavan sistemi ve ısı yalıtımlı alüminyum doğramalarla tasarlanan lüks kış bahçesi projeleri.',
    features: [
      'Hem Dönme (Hava Alma) Hem de Tam Geriye Toplanma Özelliği',
      'Isı Yalıtımlı Alüminyum Gövde ve Çift Camlı Çatı Opsiyonu',
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
    title: 'Bodrum Cennet Koyu Villa Projesi',
    category: 'villa',
    location: 'Bodrum, Muğla',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    system: 'Bioklimatik Pergola & Giyotin Cam'
  },
  {
    id: 'prj-2',
    title: 'Boğaz Manzaralı Lounge & Restoran',
    category: 'restoran',
    location: 'Bebek, İstanbul',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    system: 'Rolling Roof & Dimmable LED'
  },
  {
    id: 'prj-3',
    title: 'Çeşme Marina Residence Terası',
    category: 'teras',
    location: 'Çeşme, İzmir',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    system: 'Tam Kasetli Lüks Tente'
  },
  {
    id: 'prj-4',
    title: 'Beykoz Konakları Kış Bahçesi',
    category: 'villa',
    location: 'Beykoz, İstanbul',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    system: 'Isıcamlı Kış Bahçesi & Zip Perde'
  },
  {
    id: 'prj-5',
    title: 'Göktürk Doğa Evleri Bahçe Gölgelendirme',
    category: 'villa',
    location: 'Eyüp, İstanbul',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    system: 'Bioklimatik Pergola Sistem'
  },
  {
    id: 'prj-6',
    title: 'Karaköy Butik Otel Teras Katı',
    category: 'ticari',
    location: 'Karaköy, İstanbul',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    system: 'Geri Çekilebilir Kaset Tente'
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
  { label: 'Mimari Danışma', phone: '0532 450 60 70', raw: '+905324506070' },
  { label: 'Teknik Destek', phone: '0535 704 33 44', raw: '+905357043344' },
];

export const CONTACT_INFO = {
  phone: '0535 704 33 43',
  phoneRaw: '+905357043343',
  mobile: '0535 704 33 43',
  mobileRaw: '+905357043343',
  whatsapp: '0535 704 33 43',
  whatsappRaw: '905357043343',
  whatsappDefaultMsg: 'Merhaba Rüzgar Tente, tente ve pergola sistemleri hakkında detaylı bilgi ve fiyat teklifi almak istiyorum.',
  email: 'info@ruzgartente.com',
  address: 'Cumhuriyet, 5205 sk no:31, 35920 Selçuk / İzmir',
  factoryAddress: 'Cumhuriyet Mah. 5205 Sok. No: 31, Selçuk / İzmir',
  workingHours: 'Haftanın 7 Günü: 08:30 - 20:00 (Açık)',
  googleRating: '5.0',
  reviewCount: '6'
};

