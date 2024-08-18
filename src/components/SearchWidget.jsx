

import React from 'react';
import { useDashboard } from '../context/DashboardContext';

const SearchWidget = ({ query, onQueryChange }) => {
  
 
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    onQueryChange(newValue); 
  };
  
  
  return (
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      placeholder="Search widgets..."
      className="border border-gray-300 rounded-lg px-3 py-2 text-gray-900 bg-white"
    />
  );
};

export default SearchWidget;
