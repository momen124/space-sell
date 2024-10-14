// components/ui/scroll-area.tsx
import React from 'react';

interface ScrollAreaProps {
  className?: string;
  children: React.ReactNode;
}

const ScrollArea: React.FC<ScrollAreaProps> = ({ className, children }) => {
  return (
    <div className={`overflow-y-auto ${className}`} style={{ maxHeight: '100%' }}>
      {children}
    </div>
  );
};

export default ScrollArea;
