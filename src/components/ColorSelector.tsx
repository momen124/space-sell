import React from 'react';

interface ColorSelectorProps {
  colors: string[];
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors, selectedColor, onSelectColor }) => {
  return (
    <div className="flex space-x-2 mt-2">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onSelectColor(color)}
          className={`w-8 h-8 rounded-full border ${
            selectedColor === color ? 'border-black' : 'border-gray-300'
          }`}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorSelector;
