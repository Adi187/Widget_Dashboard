// src/components/WidgetForm.jsx

import React, { useState } from 'react';
import { useDashboard } from '../context/DashboardContext';

const WidgetForm = ({ categoryId }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const { addWidget } = useDashboard();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text) {
      addWidget(categoryId, { name, text });
      setName('');
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded-lg shadow-lg">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Widget Name"
        className="border p-2 w-full mb-2"
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Widget Text"
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Widget
      </button>
    </form>
  );
};

export default WidgetForm;
