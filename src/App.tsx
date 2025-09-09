// File: src/App.tsx
// Updated routing setup để support service detail pages

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import P5Background from './components/P5Background';

// Pages
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import NotFoundPage from './pages/NotFoundPage';

// Styles
import './App.css';
import './mobile-fix.css';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="App relative min-h-screen bg-black text-white overflow-x-hidden">
          {/* Background Animation */}
          <P5Background />
          
          {/* Navigation */}
          <Navigation />
          
          {/* Main Content */}
          <main className="relative z-10">
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<HomePage />} />
              
              {/* Service Detail Pages */}
              <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
              
              {/* 404 Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* AI Assistant */}
          <AIAssistant />
        </div>
      </Router>
    </I18nextProvider>
  );
};

export default App;
