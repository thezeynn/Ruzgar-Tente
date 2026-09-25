import { createContext } from 'react';
import type { ProductModel } from '../types';

export interface ProductContextType {
  products: ProductModel[];
  getProductById: (id: string) => ProductModel | undefined;
  addProductImage: (productId: string, imageUrl: string, setAsMain?: boolean) => void;
  removeProductImage: (productId: string, imageUrl: string) => void;
  setMainProductImage: (productId: string, imageUrl: string) => void;
  reorderProductImages: (productId: string, images: string[]) => void;
  resetProductToDefault: (productId: string) => void;
  resetAllToDefault: () => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  adminSelectedProductId: string | null;
  setAdminSelectedProductId: (id: string | null) => void;
  openAdminPanel: (productId?: string) => void;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);
