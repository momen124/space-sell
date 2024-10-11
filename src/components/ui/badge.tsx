// components/ui/badge.tsx
import React, { ReactNode } from 'react';

interface BadgeProps {
  variant: 'info' | 'warning' | 'destructive';
  children: ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ variant, children, className }) => {
  const baseStyles = 'inline-flex items-center px-2 py-1 rounded-full text-sm font-medium';
  const variantStyles = {
    info: 'bg-blue-500 text-white',
    warning: 'bg-yellow-500 text-black',
    destructive: 'bg-red-500 text-white',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
