import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { GradientText } from '../ui/GradientText';
import { Brain, Video, Code, Megaphone, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  data: any;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ data }) => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      id: 'ai-solutions',
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Solutions',
      description: 'Intelligent Agents, Business Process Automation, No-code/Low-code Solutions',
      features: ['Intelligent Agents', 'Process Automation', 'AI Analytics', 'No-code Solutions'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'video-production',
      icon: <Video className="w-8 h-8" />,
      title: 'Video Production',
      description: 'AI-enhanced Video Creation, 3D Animation, Motion Graphics, Post-production Services',
      features: ['AI Video Creation', '3D Animation', 'Motion Graphics', 'Post-production'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 'web-development',
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom Web Applications, E-commerce Solutions, Progressive Web Apps',
      features: ['Custom Web Apps', 'E-commerce', 'Progressive Web Apps', 'API Development'],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 'digital-marketing',
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'Brand Strategy, Content Creation, Social Media Management, SEO Optimization',
      features: ['Brand Strategy', 'Content Creation', 'Social Media', 'SEO Optimization'],
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section 
      ref={ref}
      id="services" 
      className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`
          text-center mb-16
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <GradientText variant="primary">Dịch vụ của chúng tôi</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Chúng tôi cung cấp giải pháp toàn diện từ AI, sản xuất video đến phát triển web và marketing
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`
                group relative p-8 rounded-2xl border border-gray-700 
                bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm
                hover:border-cyan-400/50 transition-all duration-500
                hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ 
                transitionDelay: `${index * 200}ms` 
              }}
            >
              {/* Service Icon */}
              <div className={`
                inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6
                bg-gradient-to-r ${service.gradient} text-white
                group-hover:scale-110 transition-all duration-300
              `}>
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <Link
                to={`/services/${service.id}`}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group relative z-10"
              >
                {t('services.learnMore')}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Hover Gradient Overlay */}
              <div className={`
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10
                bg-gradient-to-r ${service.gradient} transition-opacity duration-500 pointer-events-none
              `} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`
          text-center mt-16
          transition-all duration-1000 delay-800
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <p className="text-xl text-gray-300 mb-8">
            Bạn cần tư vấn dịch vụ phù hợp cho dự án của mình?
          </p>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="
            inline-flex items-center px-8 py-4 text-lg font-semibold
            text-white bg-gradient-to-r from-cyan-500 to-blue-600
            rounded-full shadow-2xl shadow-cyan-500/25
            hover:shadow-cyan-500/40 transition-all duration-300
            hover:scale-105 transform
          ">
            Liên hệ tư vấn miễn phí
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

