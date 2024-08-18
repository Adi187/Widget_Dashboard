// src/components/Dashboard.jsx
import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import Widget from './Widget';
import WidgetForm from './WidgetForm';
import CategoryForm from './CategoryForm';

const Dashboard = () => {
  const { categories } = useDashboard();

  console.log(categories)

  // Function to set data to local storage  

   
  return (
    <div className="p-4">
      <CategoryForm />
      {categories.length === 0 ? (
        <p>No categories available. Add a category to get started.</p>
      ) : (
        categories.map((category) => (
          <div key={category.id} className="mb-6">
            <h2 className="text-xl font-bold mb-4">{category.name}</h2>
            <div className="grid grid-cols-3 gap-4">
              {category.widgets.map((widget) => (
                <Widget key={widget.id} categoryId={category.id} widget={widget} />
              ))}
              <WidgetForm categoryId={category.id} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
