import React, { ReactNode } from 'react';

interface DropdownMenuProps {
  children: ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  return (
    <div className="relative inline-block text-left">
      {children}
    </div>
  );
};

interface DropdownMenuTriggerProps {
  children: ReactNode;
}

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ children }) => (
  <button className="p-2">{children}</button>
);

interface DropdownMenuContentProps {
  children: ReactNode;
}

export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({ children }) => (
  <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md">
    {children}
  </div>
);

interface DropdownMenuItemProps {
  children: ReactNode;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ children }) => (
  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
    {children}
  </a>
);

interface DropdownMenuLabelProps {
  children: ReactNode;
}

export const DropdownMenuLabel: React.FC<DropdownMenuLabelProps> = ({ children }) => (
  <div className="px-4 py-2 text-xs text-gray-500">{children}</div>
);

export const DropdownMenuSeparator: React.FC = () => (
  <div className="border-t border-gray-200 my-1" />
);
