import React, { useState, useEffect } from 'react';
import SearchResultItem from './SearchResultItem';

interface SearchResultsProps {
  filters: Filters;
}

interface Filters {
  category: string;
  minPrice: number | null;
  maxPrice: number | null;
  location: string;
  datePosted: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ filters }) => {
  const allResults = [
    { imageUrl: 'https://via.placeholder.com/300x200', title: 'iPhone 12 Pro', price: 899, location: 'New York, NY', datePosted: 'Last 7 days' },
    { imageUrl: 'https://via.placeholder.com/300x200', title: '2018 Toyota Camry', price: 15500, location: 'Los Angeles, CA', datePosted: 'Last 30 days' },
    { imageUrl: 'https://via.placeholder.com/300x200', title: 'Leather Sofa', price: 650, location: 'Chicago, IL', datePosted: 'Last 24 hours' },
    { imageUrl: 'https://via.placeholder.com/300x200', title: 'MacBook Pro 2021', price: 1299, location: 'San Francisco, CA', datePosted: 'Last 7 days' },
    { imageUrl: 'https://via.placeholder.com/300x200', title: 'Mountain Bike', price: 450, location: 'Denver, CO', datePosted: 'Last 30 days' },
    { imageUrl: 'https://via.placeholder.com/300x200', title: 'Studio Apartment', price: 1200, location: 'Seattle, WA', datePosted: 'Last 24 hours' },
  ];

  const [filteredResults, setFilteredResults] = useState(allResults);

  useEffect(() => {
    const filterResults = () => {
      let results = allResults;

      if (filters.category !== 'All Categories') {
        results = results.filter(item => item.title.toLowerCase().includes(filters.category.toLowerCase()));
      }

      if (filters.minPrice != null) {
        results = results.filter(item => item.price >= filters.minPrice!);
      }
      
      if (filters.maxPrice != null) {
        results = results.filter(item => item.price <= filters.maxPrice!);
      }
      
      

      if (filters.location) {
        results = results.filter(item => item.location.toLowerCase().includes(filters.location.toLowerCase()));
      }

      if (filters.datePosted !== 'Any time') {
        results = results.filter(item => item.datePosted === filters.datePosted);
      }

      setFilteredResults(results);
    };

    filterResults();
  }, [filters]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredResults.map((item, index) => (
        <SearchResultItem key={index} imageUrl={item.imageUrl} title={item.title} price={`$${item.price}`} location={item.location} />
      ))}
    </div>
  );
};

export default SearchResults;
