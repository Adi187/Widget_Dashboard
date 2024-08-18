import React, { useState } from 'react';
import { useDashboard } from '../context/DashboardContext';
import Modal from './modal';

const CategoryModal = ({ isOpen, onClose }) => {
  const { categories, removeCategory, removeWidget,originalCategories } = useDashboard();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCheckboxChange = (categoryId, widgetId) => {
    removeWidget(categoryId, widgetId);
  };

  const handleCategoryRemove = (categoryId) => {
    removeCategory(categoryId);
    if (categoryId === selectedCategoryId) {
      setSelectedCategoryId(null);
    }
  };

  const selectedCategory = originalCategories.find(
    (category) => category.id === selectedCategoryId
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">Manage Widgets</h2>
      <select
        value={selectedCategoryId || ''}
        onChange={(e) => setSelectedCategoryId(e.target.value)}
        className="border p-2 w-full mb-4"
      >
        <option value="">Select a Category</option>
        {originalCategories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">{selectedCategory.name}</h3>
            <button
              onClick={() => handleCategoryRemove(selectedCategoryId)}
              className="text-red-500 text-xl border-2 border-black p-1 rounded"
              style={{
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              &times;
            </button>
          </div>

          {selectedCategory.widgets.length > 0 ? (
            selectedCategory.widgets.map((widget) => (
              <div key={widget.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={true}
                  onChange={() => handleCheckboxChange(selectedCategoryId, widget.id)}
                />
                <span className="ml-2">{widget.name}</span>
              </div>
            ))
          ) : (
            <p>No widgets in this category.</p>
          )}
        </div>
      )}
    </Modal>
  );
};

export default CategoryModal;
