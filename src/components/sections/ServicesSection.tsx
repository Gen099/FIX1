// Services Section Optimization 
// File: src/components/sections/ServicesSection.tsx

import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Bot, Video, Globe, TrendingUp, 
  ArrowRight, Check, Star, Clock,
  DollarSign, Users, Zap, Award
} from 'lucide-react';

interface Service {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  priceRange: string;
  timeline: string;
  caseStudy: {
    client: string;
    challenge: string;
    solution: string;
    results: string[];
    testimonial: string;
    rating: number;
  };
  beforeAfter?: {
    before: string;
    after: string;
    improvement: string;
  };
}

const ServiceCard: React.FC<{ 
  service: Service; 
  isActive: boolean; 
  onClick: () => void 
}> = ({ service, isActive, onClick }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-500 ${
        isActive 
          ? 'scale-105 z-10' 
          : 'hover:scale-102 hover:z-5'
      }`}
      onClick={onClick}
    >
      <div className={`
        p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500
        ${isActive 
          ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-400 shadow-2xl shadow-cyan-500/25' 
          : 'bg-gray-900/50 border-gray-700 hover:border-cyan-400/50 hover:bg-gray-900/70'
        }
      `}>
        {/* Service header */}
        <div className="flex items-center justify-between mb-6">
          <div className={`
            p-4 rounded-xl transition-all duration-300
            ${isActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-gray-800 text-gray-400 group-hover:text-cyan-400'}
          `}>
            <service.icon className="w-8 h-8" />
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-green-400">{service.priceRange}</div>
            <div className="text-sm text-gray-500 flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {service.timeline}
            </div>
          </div>
        </div>

        {/* Service content */}
        <h3 className={`text-2xl font-bold mb-4 transition-colors ${
          isActive ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'
        }`}>
          {service.title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
          <div className="grid grid-cols-1 gap-2">
            {service.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-green-400'}`} />
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech, index) => (
              <span 
                key={index}
                className={`px-3 py-1 text-xs rounded-full border ${
                  isActive 
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' 
                    : 'bg-gray-800 border-gray-600 text-gray-400'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button className={`
          w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2
          ${isActive 
            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg' 
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
          }
        `}>
          {t('services.learnMore')}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const CaseStudyModal: React.FC<{ 
  service: Service | null; 
  isOpen: boolean; 
  onClose: () => void 
}> = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-2xl border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{service.title} Case Study</h2>
              <p className="text-cyan-400 font-semibold">{service.caseStudy.client}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>

          {/* Case study content */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Challenge</h3>
              <p className="text-gray-300 mb-6">{service.caseStudy.challenge}</p>
              
              <h3 className="text-xl font-semibold text-white mb-3">Solution</h3>
              <p className="text-gray-300 mb-6">{service.caseStudy.solution}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Results</h3>
              <div className="space-y-3 mb-6">
                {service.caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">{result}</span>
                  </div>
                ))}
              </div>

              {/* Before/After if available */}
              {service.beforeAfter && (
                <div className="bg-gray-800 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Before vs After</h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-red-400 font-semibold mb-2">Before</p>
                      <p className="text-gray-300 text-sm">{service.beforeAfter.before}</p>
                    </div>
                    <div>
                      <p className="text-green-400 font-semibold mb-2">After</p>
                      <p className="text-gray-300 text-sm">{service.beforeAfter.after}</p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-cyan-400 font-bold text-lg">{service.beforeAfter.improvement}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl p-6 border border-cyan-400/20">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < service.caseStudy.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                />
              ))}
            </div>
            <blockquote className="text-gray-300 italic text-lg leading-relaxed">
              "{service.caseStudy.testimonial}"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState(0);
  const [showCaseStudy, setShowCaseStudy] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 'ai-solutions',
      icon: Bot,
      title: t('services.aiSolutions.title'),
      description: t('services.aiSolutions.description'),
      features: [
        'Custom AI Chatbots & Virtual Assistants',
        'Intelligent Document Processing',
        'Predictive Analytics & Machine Learning',
        'Natural Language Processing',
        'Computer Vision & Image Recognition',
        'Automated Workflow Optimization'
      ],
      technologies: ['Python', 'TensorFlow', 'OpenAI', 'LangChain', 'FastAPI', 'Docker'],
      priceRange: '$5K - $50K',
      timeline: '2-6 months',
      caseStudy: {
        client: 'TechFlow Corporation',
        challenge: 'Manual customer support was consuming 60% of staff time, leading to delayed responses and customer dissatisfaction.',
        solution: 'Implemented AI-powered chatbot with natural language understanding, integrated with existing CRM and knowledge base.',
        results: [
          '80% reduction in response time',
          '65% decrease in support tickets',
          '45% improvement in customer satisfaction',
          '$200K annual cost savings'
        ],
        testimonial: 'VizioCraft transformed our customer service. The AI assistant handles complex queries better than we expected!',
        rating: 5
      },
      beforeAfter: {
        before: 'Average response time: 4 hours',
        after: 'Average response time: 30 seconds',
        improvement: '88% faster response time'
      }
    },
    {
      id: 'video-production',
      icon: Video,
      title: t('services.videoProduction.title'),
      description: t('services.videoProduction.description'),
      features: [
        'AI-Enhanced Video Editing',
        'Professional 3D Animation',
        'Motion Graphics & VFX',
        'Corporate Video Production',
        'Social Media Content Creation',
        'Live Streaming Solutions'
      ],
      technologies: ['After Effects', 'Blender', 'DaVinci Resolve', 'Cinema 4D', 'Premiere Pro', 'AI Tools'],
      priceRange: '$2K - $25K',
      timeline: '1-4 months',
      caseStudy: {
        client: 'Global Marketing Agency',
        challenge: 'Needed to produce 50+ marketing videos monthly while maintaining high quality and meeting tight deadlines.',
        solution: 'Developed AI-assisted video production pipeline with automated editing, template-based creation, and streamlined workflow.',
        results: [
          '300% increase in video output',
          '50% reduction in production time',
          '40% cost savings per video',
          '95% client approval rate'
        ],
        testimonial: 'The AI-enhanced workflow revolutionized our video production. We now deliver more content faster than ever!',
        rating: 5
      },
      beforeAfter: {
        before: '15 videos per month',
        after: '50+ videos per month',
        improvement: '233% increase in output'
      }
    },
    {
      id: 'web-development',
      icon: Globe,
      title: t('services.webDevelopment.title'),
      description: t('services.webDevelopment.description'),
      features: [
        'Custom Web Applications',
        'E-commerce Platforms',
        'Progressive Web Apps (PWA)',
        'API Development & Integration',
        'Database Design & Optimization',
        'Cloud Deployment & DevOps'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'AWS'],
      priceRange: '$3K - $30K',
      timeline: '1-5 months',
      caseStudy: {
        client: 'RetailMax E-commerce',
        challenge: 'Legacy website had slow loading times, poor mobile experience, and low conversion rates.',
        solution: 'Built modern React-based e-commerce platform with PWA capabilities, optimized performance, and integrated analytics.',
        results: [
          '75% faster page load times',
          '120% increase in mobile conversions',
          '45% improvement in SEO rankings',
          '$500K additional revenue in first quarter'
        ],
        testimonial: 'Our new website not only looks amazing but performs incredibly well. Sales have doubled since launch!',
        rating: 5
      },
      beforeAfter: {
        before: 'Page load time: 8 seconds',
        after: 'Page load time: 2 seconds',
        improvement: '75% performance improvement'
      }
    },
    {
      id: 'digital-marketing',
      icon: TrendingUp,
      title: t('services.digitalMarketing.title'),
      description: t('services.digitalMarketing.description'),
      features: [
        'AI-Driven Marketing Automation',
        'Content Strategy & Creation',
        'Social Media Management',
        'SEO & Performance Marketing',
        'Brand Identity & Design',
        'Analytics & Conversion Optimization'
      ],
      technologies: ['Google Analytics', 'Facebook Ads', 'HubSpot', 'Mailchimp', 'Canva Pro', 'SEMrush'],
      priceRange: '$1K - $15K',
      timeline: '2-6 months',
      caseStudy: {
        client: 'StartupGrow SaaS',
        challenge: 'New SaaS product struggling with low brand awareness and customer acquisition costs exceeding $500 per user.',
        solution: 'Implemented comprehensive digital marketing strategy with AI-powered content creation, targeted ads, and conversion optimization.',
        results: [
          '85% reduction in customer acquisition cost',
          '250% increase in organic traffic',
          '180% improvement in conversion rate',
          '$1M ARR achieved in 8 months'
        ],
        testimonial: 'VizioCraft helped us scale from zero to $1M ARR. Their marketing automation is game-changing!',
        rating: 5
      },
      beforeAfter: {
        before: 'CAC: $500 per customer',
        after: 'CAC: $75 per customer',
        improvement: '85% cost reduction'
      }
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {t('services.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              isActive={activeService === index}
              onClick={() => setActiveService(index)}
              onLearnMore={handleLearnMore}
            />
          ))}
        </div>

        {/* Featured service spotlight */}
        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700 p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Featured Case Study</h3>
              <h4 className="text-xl text-cyan-400 mb-4">{services[activeService].title}</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {services[activeService].caseStudy.challenge}
              </p>
              <button 
                onClick={() => setShowCaseStudy(services[activeService])}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                View Full Case Study
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {services[activeService].caseStudy.results.slice(0, 4).map((result, index) => (
                <div key={index} className="text-center p-4 bg-gray-800/50 rounded-xl">
                  <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing overview */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">Transparent Pricing</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={service.id} className="bg-gray-900/50 rounded-xl border border-gray-700 p-6">
                <service.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                <div className="text-2xl font-bold text-green-400 mb-2">{service.priceRange}</div>
                <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                  <Clock className="w-4 h-4" />
                  {service.timeline}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-400/20 p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            {t('services.cta.title')}
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('services.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              {t('services.cta.button')}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 text-white rounded-full font-semibold text-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal 
        service={showCaseStudy}
        isOpen={!!showCaseStudy}
        onClose={() => setShowCaseStudy(null)}
      />
    </section>
  );
};

export default ServicesSection;
