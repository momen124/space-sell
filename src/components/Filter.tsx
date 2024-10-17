// src/components/AdvancedFilter.tsx
import React, { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, X } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AdvancedFilter: React.FC<{ onApplyFilters: (filters: any) => void }> = ({ onApplyFilters }) => {
  const [sortOption, setSortOption] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [brand, setBrand] = useState("");
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  const handleApplyFilters = () => {
    const filters = {
      sortOption,
      category,
      priceRange,
      brand,
      fromDate,
      toDate,
    };
    onApplyFilters(filters);
  };

  return (
    <div className="border p-4 w-full rounded-lg shadow-lg bg-white relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg">Advanced Filter</h3>
      </div>

      {/* Date Range */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-2">Date Range</label>
        <div className="flex items-center space-x-2 mb-2">
          <div className="relative flex-1">
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              placeholderText="From"
              className="w-full p-2 border rounded-md"
            />
            <Calendar size={18} className="absolute top-2 right-2 text-gray-400" />
          </div>
          <div className="relative flex-1">
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              placeholderText="To"
              className="w-full p-2 border rounded-md"
            />
            <Calendar size={18} className="absolute top-2 right-2 text-gray-400" />
          </div>
        </div>
        <button className="text-blue-600 text-sm hover:underline mb-4" onClick={() => { setFromDate(null); setToDate(null); }}>Clear</button>
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-2">Category</label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full border p-2 rounded-md">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="furniture">Furniture</SelectItem>
            <SelectItem value="vehicles">Vehicles</SelectItem>
            <SelectItem value="gaming">Gaming</SelectItem>
          </SelectContent>
        </Select>
        <button className="text-blue-600 text-sm hover:underline mt-2" onClick={() => setCategory("")}>Clear</button>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-2">Price Range</label>
        <div className="flex items-center space-x-2">
          <Input
            type="number"
            placeholder="Min"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
            className="w-full border p-2 rounded-md"
          />
          <Input
            type="number"
            placeholder="Max"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
            className="w-full border p-2 rounded-md"
          />
        </div>
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-2">Brand</label>
        <Select value={brand} onValueChange={setBrand}>
          <SelectTrigger className="w-full border p-2 rounded-md">
            <SelectValue placeholder="Select Brand" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sony">Sony</SelectItem>
            <SelectItem value="samsung">Samsung</SelectItem>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="lg">LG</SelectItem>
          </SelectContent>
        </Select>
        <button className="text-blue-600 text-sm hover:underline mt-2" onClick={() => setBrand("")}>Clear</button>
      </div>

      {/* Sort Option */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-2">Sort By</label>
        <Select value={sortOption} onValueChange={setSortOption}>
          <SelectTrigger className="w-full border p-2 rounded-md">
            <SelectValue placeholder="Select Sort Option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="title">Title</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <Button variant="outline" className="w-1/2 mr-2" onClick={() => {
          // Reset all filters
          setSortOption("");
          setCategory("");
          setPriceRange({ min: "", max: "" });
          setBrand("");
          setFromDate(null);
          setToDate(null);
        }}>
          Cancel
        </Button>
        <Button
          type="button"
          className="w-1/2 bg-blue-500 text-white hover:bg-blue-600"
          onClick={handleApplyFilters}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default AdvancedFilter;
