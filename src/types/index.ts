export interface ProductModel {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
  galleryImages: string[];
  description: string;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  idealFor: string[];
  warrantyYears: number;
  motorType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProjectShowcase {
  id: string;
  title: string;
  category: 'villa' | 'restoran' | 'teras' | 'ticari';
  location: string;
  image: string;
  system: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  location: string;
  comment: string;
  rating: number;
  project: string;
  date?: string;
  verified?: boolean;
}
