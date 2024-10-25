import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectInput,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoryService } from "@/service/categoryService";
import { Category } from "@/types/Category";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { getCategoryName } from "../admin/categories/CategoryTable";

type FiltersType = {
  sortOption: string;
  category: string;
  priceRange: { min: string; max: string };
  brand: string;
  fromDate: Date | null;
  toDate: Date | null;
};

const AdvancedFilter: React.FC<{
  onApplyFilters: (filters: FiltersType) => void;
}> = ({ onApplyFilters }) => {
  const [sortOption, setSortOption] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [brand, setBrand] = useState("");
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  const { data: categories } = useQuery(
    categoryService.getQueryOptions("getCategories")
  );

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
    <div className="border p-6 w-full rounded-lg shadow-lg bg-white relative">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-2xl text-gray-800">Advanced Filter</h3>
      </div>

      {/* Category Filter */}
      <div className="mb-6 rounded-lg p-4">
        <label className="block font-semibold text-gray-700 mb-4">
          Category
        </label>

        <SelectInput
          options={categories?.data?.map((i: Category) => ({
            label: getCategoryName(i, categories?.data),
            value: i.id,
          }))}
          value={category}
          onChange={(v) => {
            setCategory(v);
          }}
        />
        <button
          className="text-blue-600 text-sm hover:underline mt-2"
          onClick={() => setCategory("")}
        >
          Clear
        </button>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6 rounded-lg p-4">
        <label className="block font-semibold text-gray-700 mb-4">
          Price Range
        </label>
        <div className="flex items-center space-x-4">
          <Input
            type="number"
            min="0"
            placeholder="Min"
            value={priceRange.min}
            onChange={(e) => {
              const value = e.target.value;
              if (Number(value) >= 0) {
                setPriceRange({ ...priceRange, min: value });
              }
            }}
            className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
          <Input
            type="number"
            min="0"
            placeholder="Max"
            value={priceRange.max}
            onChange={(e) => {
              const value = e.target.value;
              if (Number(value) >= 0) {
                setPriceRange({ ...priceRange, max: value });
              }
            }}
            className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Sort Option */}
      <div className="mb-6 rounded-lg p-4">
        <label className="block font-semibold text-gray-700 mb-4">
          Sort By
        </label>
        <Select value={sortOption} onValueChange={setSortOption}>
          <SelectTrigger className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500">
            <SelectValue placeholder="Select Sort Option" />
          </SelectTrigger>
          <SelectContent className="bg-gray-100 rounded-md shadow-lg z-50">
            <SelectItem value="createdAt">Older First</SelectItem>
            <SelectItem value="-createdAt">Newer First</SelectItem>
            <SelectItem value="price">Price: Low to High</SelectItem>
            <SelectItem value="-price">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <Button
          variant="outline"
          className="w-1/2 mr-2"
          onClick={() => {
            setSortOption("");
            setCategory("");
            setPriceRange({ min: "", max: "" });
            setBrand("");
            setFromDate(null);
            setToDate(null);
            handleApplyFilters()
          }}
        >
          Clear
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
