import React from 'react';
import Widget from './Widget';
import WidgetForm from './WidgetForm';

function Category({ category, addWidget, removeWidget }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">{category.name}</h2>
      <div className="grid grid-cols-3 gap-4">
        {category.widgets.map(widget => (
          <Widget 
            key={widget.id} 
            widget={widget} 
            categoryId={category.id} 
            removeWidget={removeWidget} 
          />
        ))}
        <WidgetForm categoryId={category.id} addWidget={addWidget} />
      </div>
    </div>
  );
}

export default Category;
