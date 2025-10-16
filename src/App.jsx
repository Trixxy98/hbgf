import React, { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';
import CakePage from './components/CakePage';
import FlowerPage from './components/FlowerPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('loading');

  // Handle GitHub Pages routing
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('cake')) {
      setCurrentPage('cake');
    } else if (path.includes('flowers')) {
      setCurrentPage('flowers');
    }
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    // Update URL for GitHub Pages
    window.history.pushState({}, '', `/${page}`);
  };

  return (
    <div className="app">
      {currentPage === 'loading' && <LoadingPage onComplete={() => navigateTo('cake')} />}
      {currentPage === 'cake' && <CakePage onComplete={() => navigateTo('flowers')} />}
      {currentPage === 'flowers' && <FlowerPage />}
    </div>
  );
}

export default App;
