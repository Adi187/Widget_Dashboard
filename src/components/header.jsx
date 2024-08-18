
// src/components/Header.jsx
import React, { useState } from 'react';
import { useDashboard } from '../context/DashboardContext';
import SearchWidget from './SearchWidget';
import CategoryModal from './CategoryModal'; // Import the CategoryModal

const Header = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const { searchWidgets } = useDashboard();

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    searchWidgets(query);
  };

  return (
    <>
      <header className="bg-blue-600 text-black p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <SearchWidget query={searchQuery} onQueryChange={handleSearchChange} />
          <button
            onClick={() => setIsModalOpen(true)} // Open modal on button click
            className="bg-gray-700 text-white p-2 rounded"
          >
            Manage Categories
          </button>
        
        </div>
      </header>
      <CategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Close modal
      />
    </>
  );
};

export default Header;
