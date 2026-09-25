import { createContext } from 'react';
import type { ProductModel, ProjectShowcase } from '../types';

export interface ProductContextType {
  products: ProductModel[];
  getProductById: (id: string) => ProductModel | undefined;
  addProductImage: (productId: string, imageUrl: string, setAsMain?: boolean) => void;
  removeProductImage: (productId: string, imageUrl: string) => void;
  setMainProductImage: (productId: string, imageUrl: string) => void;
  reorderProductImages: (productId: string, images: string[]) => void;
  resetProductToDefault: (productId: string) => void;
  resetAllToDefault: () => void;

  // Mimari Başyapıtlar Gallery Management
  galleryProjects: ProjectShowcase[];
  addGalleryProject: (project: Omit<ProjectShowcase, 'id'>) => void;
  removeGalleryProject: (id: string) => void;
  toggleGalleryProjectVisibility: (id: string) => void;
  resetGalleryProjectsToDefault: () => void;

  // Admin Modal Controls
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  adminSelectedProductId: string | null;
  setAdminSelectedProductId: (id: string | null) => void;
  adminActiveTab: 'products' | 'gallery';
  setAdminActiveTab: (tab: 'products' | 'gallery') => void;
  openAdminPanel: (productId?: string, tab?: 'products' | 'gallery') => void;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);
