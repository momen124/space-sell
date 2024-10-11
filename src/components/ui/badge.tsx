import React, { ReactNode } from 'react';

interface BadgeProps {
  variant?: 'default' | 'warning' | 'destructive';
  children: ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'default', children }) => {
  const variantClasses = {
    default: 'bg-gray-200 text-gray-800',
    warning: 'bg-yellow-300 text-yellow-800',
    destructive: 'bg-red-500 text-white',
  };

  return (
    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${variantClasses[variant]}`}>
      {children}
    </span>
  );
};
