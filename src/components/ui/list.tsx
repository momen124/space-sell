// List.tsx
import React from 'react';

export const List: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="list-disc pl-5">{children}</ul>
);

export const ListItem: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <li className={className}>{children}</li>
);
