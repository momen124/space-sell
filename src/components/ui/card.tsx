import React, { ReactNode } from 'react';

// Define the props for the Card component
interface CardProps {
  children: ReactNode; // Specify that children can be any valid React node
}

// Card component
export const Card: React.FC<CardProps> = ({ children }) => (
  <div className="card">{children}</div>
);

// Define the props for CardContent
export const CardContent: React.FC<CardProps> = ({ children }) => (
  <div className="card-content">{children}</div>
);

// Define the props for CardDescription
export const CardDescription: React.FC<CardProps> = ({ children }) => (
  <p className="card-description">{children}</p>
);

// Define the props for CardFooter
export const CardFooter: React.FC<CardProps> = ({ children }) => (
  <div className="card-footer">{children}</div>
);

// Define the props for CardHeader
export const CardHeader: React.FC<CardProps> = ({ children }) => (
  <div className="card-header">{children}</div>
);

// Define the props for CardTitle
export const CardTitle: React.FC<CardProps> = ({ children }) => (
  <h2 className="card-title">{children}</h2>
);
