import { ModalProps } from "@/types/hooks/modals";
import React, { createContext, ReactNode, useContext, useState } from "react";
import Modal from "./components/Modal";
import { modals as modalsService } from "./modals";
import { generateModalId } from "./utils/generateModalId";

// Modal context type definition
export type ModalContextType = {
  open: (options: ModalProps) => string; // Return id when opening
  closeAll: () => void;
  close: (id: string) => void;
};

// Create ModalContext
const ModalContext = createContext<ModalContextType | null>(null);

// Hook to use the modal context
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

// ModalProvider component
export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modals, setModals] = useState<ModalProps[]>([]);

  // Open a custom modal using ModalProps
  const open = (options: ModalProps): string => {
    const id = options?.id || generateModalId();
    setModals((prev) => [...prev, { ...options, id }]);
    return id;
  };

  // Close all modals
  const closeAll = () => {
    setModals([]);
  };

  // Close a specific modal by id
  const close = (id: string) => {
    setModals((prev) => prev.filter((modal) => modal.id !== id));
  };

  const value = {
    open,
    closeAll,
    close,
  };

  // Set the modal context to the modals service
  modalsService.setModalContext(value);

  return (
    <ModalContext.Provider value={value}>
      {children}
      {/* Render all open modals */}
      {modals.map((modal) => (
        <Modal key={generateModalId()} modal={modal} close={close} />
      ))}
    </ModalContext.Provider>
  );
};
