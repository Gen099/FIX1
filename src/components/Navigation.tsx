// File: src/components/Navigation.tsx
// Updated để include Gallery navigation

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Camera } from 'lucide-react';

const Navigation: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const languages = [
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { key: 'home', label: t('nav.home'), href: '/' },
    { key: 'services', label: t('nav.services'), href: '/#services' },
    { key: 'gallery', label: 'Gallery', href: '/gallery' }, // New gallery item
    { key: 'learning', label: t('nav.learning'), href: '/#learning' },
    { key: 'about', label: t('nav.about'), href: '/#about' },
    { key: 'contact', label: t('nav.contact'), href: '/#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith('/#')) {
      // Handle anchor links
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href.substring(1));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Handle regular routes
      navigate(href);
    }
  };

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">VC</span>
              </div>
              <span className="text-white font-bold text-xl group-hover:text-cyan-400 transition-colors">
                VizioCraft
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    (location.pathname === item.href || 
                     (item.href.startsWith('/#') && location.pathname === '/' && location.hash === item.href.substring(1)))
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.key === 'gallery' && <Camera className="w-4 h-4 inline mr-2" />}
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right side controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white rounded-md transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm">
                  {languages.find(lang => lang.code === i18n.language)?.flag || '🌐'}
                </span>
              </button>
              
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center gap-3 ${
                      i18n.language === lang.code
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => handleNavClick('/#contact')}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {t('nav.contactNow')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md border-t border-gray-800">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.href)}
              className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center gap-3 ${
                (location.pathname === item.href || 
                 (item.href.startsWith('/#') && location.pathname === '/' && location.hash === item.href.substring(1)))
                  ? 'text-cyan-400 bg-cyan-400/10'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              {item.key === 'gallery' && <Camera className="w-5 h-5" />}
              {item.label}
            </button>
          ))}
          
          {/* Mobile Language Selector */}
          <div className="px-3 py-2">
            <div className="text-gray-400 text-sm mb-2">Language</div>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`px-3 py-2 text-sm rounded-md transition-colors flex items-center justify-center gap-2 ${
                    i18n.language === lang.code
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span className="text-xs">{lang.code.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="px-3 pt-4">
            <button 
              onClick={() => handleNavClick('/#contact')}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              {t('nav.contactNow')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
