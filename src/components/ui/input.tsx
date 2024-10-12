// src/components/ui/input.tsx

import React from 'react';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  customProp?: string;
}


  const Input: React.FC<InputProps> = ({ ...props }) => {
    return (
      <input
        className="border rounded p-2" // Tailwind CSS classes for styling
        {...props} // Spread the props onto the input element
      />
    );
  };
  
// Default export
export default Input;
