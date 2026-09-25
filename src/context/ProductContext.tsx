import React, { useState, useEffect, useCallback, type ReactNode } from 'react';
import type { ProductModel, ProjectShowcase } from '../types';
import { PRODUCTS as DEFAULT_PRODUCTS, SHOWCASE_PROJECTS as DEFAULT_PROJECTS } from '../data/products';
import { ProductContext } from './productContextCore';

const PRODUCTS_STORAGE_KEY = 'ruzgar_tente_products_v1';
const GALLERY_STORAGE_KEY = 'ruzgar_tente_gallery_projects_v1';

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<ProductModel[]>(() => {
    try {
      const stored = localStorage.getItem(PRODUCTS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge with DEFAULT_PRODUCTS to ensure any schema updates or new specs remain
          return DEFAULT_PRODUCTS.map((def) => {
            const saved = parsed.find((p: ProductModel) => p.id === def.id);
            if (saved) {
              return {
                ...def,
                image: saved.image || def.image,
                galleryImages: Array.isArray(saved.galleryImages) ? saved.galleryImages : def.galleryImages,
              };
            }
            return def;
          });
        }
      }
    } catch (e) {
      console.error('Failed to load products from localStorage:', e);
    }
    return DEFAULT_PRODUCTS;
  });

  const [galleryProjects, setGalleryProjects] = useState<ProjectShowcase[]>(() => {
    try {
      const stored = localStorage.getItem(GALLERY_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((item) => ({
            ...item,
            visible: item.visible !== false,
          }));
        }
      }
    } catch (e) {
      console.error('Failed to load gallery projects from localStorage:', e);
    }
    return DEFAULT_PROJECTS.map((p) => ({ ...p, visible: true }));
  });

  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);
  const [adminSelectedProductId, setAdminSelectedProductId] = useState<string | null>(null);
  const [adminActiveTab, setAdminActiveTab] = useState<'products' | 'gallery'>('products');

  // Save products to localStorage whenever products change
  useEffect(() => {
    try {
      const toSave = products.map((p) => ({
        id: p.id,
        image: p.image,
        galleryImages: p.galleryImages,
      }));
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      console.error('Failed to save products to localStorage:', e);
    }
  }, [products]);

  // Save gallery projects to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(GALLERY_STORAGE_KEY, JSON.stringify(galleryProjects));
    } catch (e) {
      console.error('Failed to save gallery projects to localStorage:', e);
    }
  }, [galleryProjects]);

  // Open admin panel helper
  const openAdminPanel = useCallback((productId?: string, tab?: 'products' | 'gallery') => {
    if (tab) {
      setAdminActiveTab(tab);
    }
    if (productId) {
      setAdminSelectedProductId(productId);
    } else if (products.length > 0) {
      setAdminSelectedProductId(products[0].id);
    }
    setIsAdminOpen(true);
  }, [products]);

  const getProductById = useCallback((id: string) => {
    return products.find((p) => p.id === id);
  }, [products]);

  // Add new photo to a product
  const addProductImage = useCallback((productId: string, imageUrl: string, setAsMain = false) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id !== productId) return p;
        const currentGallery = Array.isArray(p.galleryImages) ? p.galleryImages : [p.image];
        const updatedGallery = currentGallery.includes(imageUrl)
          ? currentGallery
          : [...currentGallery, imageUrl];

        return {
          ...p,
          image: setAsMain ? imageUrl : p.image,
          galleryImages: updatedGallery,
        };
      })
    );
  }, []);

  // Remove photo from a product
  const removeProductImage = useCallback((productId: string, imageUrl: string) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id !== productId) return p;
        const currentGallery = Array.isArray(p.galleryImages) ? p.galleryImages : [p.image];
        const filtered = currentGallery.filter((img) => img !== imageUrl);
        
        let newMain = p.image;
        if (p.image === imageUrl) {
          newMain = filtered.length > 0 ? filtered[0] : (DEFAULT_PRODUCTS.find((d) => d.id === productId)?.image || '');
        }

        return {
          ...p,
          image: newMain,
          galleryImages: filtered.length > 0 ? filtered : [newMain],
        };
      })
    );
  }, []);

  // Set an image as the main cover photo
  const setMainProductImage = useCallback((productId: string, imageUrl: string) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id !== productId) return p;
        const currentGallery = Array.isArray(p.galleryImages) ? p.galleryImages : [p.image];
        const updatedGallery = currentGallery.includes(imageUrl)
          ? currentGallery
          : [imageUrl, ...currentGallery];

        return {
          ...p,
          image: imageUrl,
          galleryImages: updatedGallery,
        };
      })
    );
  }, []);

  // Reorder product gallery images
  const reorderProductImages = useCallback((productId: string, images: string[]) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id !== productId) return p;
        return {
          ...p,
          galleryImages: images,
        };
      })
    );
  }, []);

  // Reset single product to default factory images
  const resetProductToDefault = useCallback((productId: string) => {
    const defaultProduct = DEFAULT_PRODUCTS.find((d) => d.id === productId);
    if (!defaultProduct) return;

    setProducts((prev) =>
      prev.map((p) => {
        if (p.id !== productId) return p;
        return {
          ...p,
          image: defaultProduct.image,
          galleryImages: defaultProduct.galleryImages,
        };
      })
    );
  }, []);

  // Reset all products to default factory images
  const resetAllToDefault = useCallback(() => {
    setProducts(DEFAULT_PRODUCTS);
    localStorage.removeItem(PRODUCTS_STORAGE_KEY);
  }, []);

  // Mimari Başyapıtlar Gallery Handlers
  const addGalleryProject = useCallback((project: Omit<ProjectShowcase, 'id'>) => {
    const newProject: ProjectShowcase = {
      ...project,
      id: `prj-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      visible: project.visible !== false,
    };
    setGalleryProjects((prev) => [newProject, ...prev]);
  }, []);

  const removeGalleryProject = useCallback((id: string) => {
    setGalleryProjects((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const toggleGalleryProjectVisibility = useCallback((id: string) => {
    setGalleryProjects((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        return {
          ...p,
          visible: p.visible === false ? true : false,
        };
      })
    );
  }, []);

  const resetGalleryProjectsToDefault = useCallback(() => {
    const defaults = DEFAULT_PROJECTS.map((p) => ({ ...p, visible: true }));
    setGalleryProjects(defaults);
    localStorage.removeItem(GALLERY_STORAGE_KEY);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        getProductById,
        addProductImage,
        removeProductImage,
        setMainProductImage,
        reorderProductImages,
        resetProductToDefault,
        resetAllToDefault,
        galleryProjects,
        addGalleryProject,
        removeGalleryProject,
        toggleGalleryProjectVisibility,
        resetGalleryProjectsToDefault,
        isAdminOpen,
        setIsAdminOpen,
        adminSelectedProductId,
        setAdminSelectedProductId,
        adminActiveTab,
        setAdminActiveTab,
        openAdminPanel,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
