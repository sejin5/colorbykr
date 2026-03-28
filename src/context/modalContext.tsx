import { createContext, useContext, useState, useCallback } from "react";

export interface ColorInfo {
  id?: number;
  name: string;
  hex: string;
  rgb?: { r: number; g: number; b: number };
  description?: string;
}

interface ModalContextValue {
  isOpen: boolean;
  selectedColor: ColorInfo | null;
  openModal: (color: ColorInfo) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<ColorInfo | null>(null);

  const openModal = useCallback((color: ColorInfo) => {
    setSelectedColor(color);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => setSelectedColor(null), 300);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, selectedColor, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}
