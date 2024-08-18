import React, { createContext, useContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [categories, setCategoriesState] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Add searchQuery state

  
  
  const addCategory = (name) => {
    setCategoriesState((prevCategories) => [
      ...prevCategories,
      { id: uuidv4(), name, widgets: [] },
    ]);
  };

  const removeCategory = (id) => {
    setCategoriesState((prevCategories) =>
      prevCategories.filter((category) => category.id !== id)
    );
  };

  const addWidget = (categoryId, widget) => {
    setCategoriesState((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: [...category.widgets, { id: uuidv4(), ...widget }],
            }
          : category
      )
    );
  };

  const removeWidget = (categoryId, widgetId) => {
    setCategoriesState((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.id !== widgetId
              ),
            }
          : category
      )
    );
  };

  const searchWidgets = (query) => {
    setSearchQuery(query); // Update searchQuery state
  };

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <DashboardContext.Provider
      value={{
        originalCategories: categories,
        categories: filteredCategories,
        addCategory,
        addWidget,
        removeWidget,
        searchWidgets,
        removeCategory
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};


