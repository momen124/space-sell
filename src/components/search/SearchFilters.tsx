import React, { useState } from 'react';

interface SearchFiltersProps {
  onFilterChange: (filters: Filters) => void;
}

interface Filters {
  category: string;
  minPrice: number | null;
  maxPrice: number | null;
  location: string;
  datePosted: string;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onFilterChange }) => {
  const [category, setCategory] = useState('All Categories');
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [location, setLocation] = useState('');
  const [datePosted, setDatePosted] = useState('Any time');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({
      category,
      minPrice,
      maxPrice,
      location,
      datePosted,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Vehicles</option>
            <option>Real Estate</option>
            <option>Furniture</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price-range">
            Price Range
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="min-price"
              placeholder="Min"
              value={minPrice || ''}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-1/2 px-3 py-2 border rounded-l-md"
            />
            <input
              type="number"
              id="max-price"
              placeholder="Max"
              value={maxPrice || ''}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-1/2 px-3 py-2 border rounded-r-md"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date-posted">
            Date Posted
          </label>
          <select
            id="date-posted"
            value={datePosted}
            onChange={(e) => setDatePosted(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option>Any time</option>
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Apply Filters
        </button>
      </form>
    </div>
  );
};

export default SearchFilters;
