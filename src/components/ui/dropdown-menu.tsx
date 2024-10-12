import React from 'react';

interface DropdownMenuProps {
    items: string[];
    onSelect: (item: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, onSelect }) => {
    return (
        <div className="dropdown-menu">
            {items.map((item) => (
                <div key={item} onClick={() => onSelect(item)}>
                    {item}
                </div>
            ))}
        </div>
    );
};

export default DropdownMenu;
