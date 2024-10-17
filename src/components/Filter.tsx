// src/components/AdvancedFilter.tsx
import React, { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, X } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AdvancedFilter: React.FC = () => {
  const [sortOption, setSortOption] = useState("");
  const [clientType, setClientType] = useState("");
  const [status, setStatus] = useState("");
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  return (
    <div className="border p-4 w-full rounded-lg shadow-lg bg-white relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg">Advance Filter</h3>
        <button className="text-gray-500 hover:text-gray-800">
          <X size={20} />
        </button>
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
        <button className="text-blue-600 text-sm hover:underline mb-4">Clear</button>
      </div>

      {/* Client Type Filter */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-2">Client Type</label>
        <Select value={clientType} onValueChange={setClientType}>
          <SelectTrigger className="w-full border p-2 rounded-md">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="individual">Individual</SelectItem>
            <SelectItem value="company">Company</SelectItem>
          </SelectContent>
        </Select>
        <button className="text-blue-600 text-sm hover:underline mt-2">Clear</button>
      </div>

      {/* Status Filter */}
      <div className="mb-4">
        <label className="block font-semibold text-gray-700 mb-2">Status</label>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-full border p-2 rounded-md">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
        <button className="text-blue-600 text-sm hover:underline mt-2">Clear</button>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <Button variant="outline" className="w-1/2 mr-2">Cancel</Button>
        <Button type="button" className="w-1/2 bg-blue-500 text-white hover:bg-blue-600">Apply</Button>
      </div>
    </div>
  );
};

export default AdvancedFilter;
