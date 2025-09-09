// File: src/pages/HomePage.tsx
import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import GallerySection from '../components/sections/GallerySection';
import AboutSection from '../components/sections/AboutSection';
import LearningSection from '../components/sections/LearningSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <LearningSection />
      <ContactSection />
    </>
  );
};

export default HomePage;

// File: src/pages/NotFoundPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Visual */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
        </div>
        
        {/* Error Message */}
        <h2 className="text-3xl font-bold text-white mb-4">
          Trang không tồn tại
        </h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. 
          Có thể đường dẫn đã thay đổi hoặc trang đã bị xóa.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Về trang chủ
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-600 text-white rounded-xl font-semibold hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Quay lại
          </button>
        </div>
        
        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm mb-4">Hoặc bạn có thể:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/#services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Xem dịch vụ
            </Link>
            <Link to="/#about" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Về chúng tôi
            </Link>
            <Link to="/#contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Liên hệ
            </Link>
            <Link to="/#learning" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Học tập
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
