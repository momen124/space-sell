// في components/ui/badge.tsx
import React from 'react';

interface BadgeProps {
  variant?: 'info' | 'warning' | 'destructive';
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ variant = 'info', children, className }) => {
  const variantClasses = {
    info: 'bg-blue-500 text-white',
    warning: 'bg-yellow-500 text-black',
    destructive: 'bg-red-500 text-white',
  };

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
