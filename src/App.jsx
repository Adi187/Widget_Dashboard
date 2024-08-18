// src/App.js
import React from 'react';
import { DashboardProvider } from './context/DashboardContext';
import Dashboard from './components/Dashboard';
import Header from './components/header';
import CategoryModal from './components/CategoryModal';
import Modal from './components/modal';

function App() {
  return (
    <DashboardProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto p-4">
          <Dashboard />
        </div>
      </div>
    </DashboardProvider>
  );
}

export default App;
