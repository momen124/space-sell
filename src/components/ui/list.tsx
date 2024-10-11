// components/ui/List.tsx
import React from 'react';

export const List: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ul className="list-none">{children}</ul>;
};

export const ListItem: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <li className={`cursor-pointer ${className}`} onClick={onClick}>
      {children}
    </li>
  );
};
