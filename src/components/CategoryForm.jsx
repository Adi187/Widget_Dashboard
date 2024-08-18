// src/components/CategoryForm.jsx

import React, { useState } from 'react';
import { useDashboard } from '../context/DashboardContext';

const CategoryForm = () => {
  const [name, setName] = useState('');
  const { addCategory } = useDashboard();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      addCategory(name);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" border p-4 rounded-lg  mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Category Name"
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded">
        Add Category
      </button>
    </form>
  );
};

export default CategoryForm;
