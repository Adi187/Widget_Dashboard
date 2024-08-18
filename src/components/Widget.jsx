
import React from 'react';
import { useDashboard } from '../context/DashboardContext';

const Widget = ({ categoryId, widget }) => {
  const { removeWidget} = useDashboard();
  
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <button
        onClick={() => removeWidget(categoryId, widget.id)}
        className="float-right text-red-500"
      >
        &times;
      </button>
      <h3 className="font-bold">{widget.name}</h3>
      <p>{widget.text}</p>
    </div>
  );
};

export default Widget;
