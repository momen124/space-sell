// components/ui/use-toast.tsx

import React, { createContext, useContext, useState } from 'react';

interface Toast {
  title: string;
  description: string;
}

interface ToastContextType {
  toast: (toast: Toast) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (newToast: Toast) => {
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t !== newToast));
    }, 3000); // Adjust duration as needed
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed top-0 right-0 p-4">
        {toasts.map((t, index) => (
          <div key={index} className="bg-green-500 text-white p-2 rounded mb-2">
            <strong>{t.title}</strong>
            <p>{t.description}</p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context.toast;
};
