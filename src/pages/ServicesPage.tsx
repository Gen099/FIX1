import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { GradientText } from '../components/ui/GradientText';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <GradientText variant="primary">Dịch vụ của chúng tôi</GradientText>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Chúng tôi cung cấp các giải pháp công nghệ tiên tiến để giúp doanh nghiệp của bạn phát triển.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Tìm hiểu thêm →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;


