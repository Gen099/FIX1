import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Download, ExternalLink } from 'lucide-react';

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  features: string[];
  gallery: {
    type: 'image' | 'video';
    url: string;
    title: string;
    description: string;
  }[];
  pricing: {
    basic: string;
    premium: string;
    enterprise: string;
  };
}

const serviceDetails: Record<string, ServiceDetail> = {
  'ai-solutions': {
    id: 'ai-solutions',
    title: 'AI Solutions & Automation',
    description: 'Tự động hóa quy trình kinh doanh với giải pháp AI thông minh, từ chatbots đến hệ thống quản lý tự động.',
    features: [
      'Intelligent Agents',
      'Business Process Automation',
      'No-code/Low-code Solutions',
      'AI-powered Analytics',
      'Custom AI Model Training',
      'Integration with Existing Systems'
    ],
    gallery: [
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        title: 'AI Chatbot Demo',
        description: 'Demonstration of our intelligent chatbot system'
      },
      {
        type: 'image',
        url: '/images/ai-dashboard.jpg',
        title: 'AI Analytics Dashboard',
        description: 'Real-time analytics and insights dashboard'
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        title: 'Process Automation',
        description: 'Automated workflow management system'
      }
    ],
    pricing: {
      basic: '$299/month',
      premium: '$599/month',
      enterprise: 'Custom pricing'
    }
  },
  'video-production': {
    id: 'video-production',
    title: 'Video Production & Animation',
    description: 'Sản xuất video chuyên nghiệp với công nghệ AI tiên tiến, từ concept đến thành phẩm hoàn chỉnh.',
    features: [
      'AI-enhanced Video Creation',
      '3D Animation',
      'Motion Graphics',
      'Post-production Services',
      'Color Grading',
      'Sound Design'
    ],
    gallery: [
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        title: 'Corporate Video Sample',
        description: 'Professional corporate video production'
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        title: '3D Animation Showcase',
        description: 'Advanced 3D animation and visual effects'
      },
      {
        type: 'image',
        url: '/images/video-studio.jpg',
        title: 'Production Studio',
        description: 'State-of-the-art video production facility'
      }
    ],
    pricing: {
      basic: '$199/project',
      premium: '$499/project',
      enterprise: 'Custom pricing'
    }
  },
  'visual-effects': {
    id: 'visual-effects',
    title: 'Visual Effects & Design',
    description: 'Tạo ra những hiệu ứng thị giác ấn tượng và thiết kế sáng tạo cho mọi dự án media.',
    features: [
      'Advanced VFX',
      'UI/UX Design',
      'Brand Identity',
      'Digital Art Creation',
      'Compositing',
      'CGI Integration'
    ],
    gallery: [
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        title: 'VFX Breakdown',
        description: 'Behind the scenes of visual effects creation'
      },
      {
        type: 'image',
        url: '/images/vfx-work.jpg',
        title: 'VFX Portfolio',
        description: 'Collection of our visual effects work'
      }
    ],
    pricing: {
      basic: '$149/hour',
      premium: '$249/hour',
      enterprise: 'Custom pricing'
    }
  },
  'media-production': {
    id: 'media-production',
    title: 'Media Production',
    description: 'Dịch vụ sản xuất media toàn diện từ ý tưởng đến triển khai, phù hợp mọi quy mô dự án.',
    features: [
      'Content Strategy',
      'Photography & Videography',
      'Social Media Content',
      'Marketing Campaigns',
      'Live Streaming',
      'Event Coverage'
    ],
    gallery: [
      {
        type: 'image',
        url: '/images/photo-shoot.jpg',
        title: 'Professional Photography',
        description: 'High-quality photography services'
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        title: 'Event Coverage',
        description: 'Professional event documentation'
      }
    ],
    pricing: {
      basic: '$99/hour',
      premium: '$199/hour',
      enterprise: 'Custom pricing'
    }
  },
  'saas-solutions': {
    id: 'saas-solutions',
    title: 'SaaS Solutions',
    description: 'Phát triển và triển khai các giải pháp phần mềm như dịch vụ, tối ưu cho doanh nghiệp hiện đại.',
    features: [
      'Custom Software Development',
      'Cloud Solutions',
      'API Integration',
      'Scalable Architecture',
      'Database Management',
      'Security Implementation'
    ],
    gallery: [
      {
        type: 'image',
        url: '/images/saas-dashboard.jpg',
        title: 'SaaS Dashboard',
        description: 'Modern web application interface'
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        title: 'Platform Demo',
        description: 'Demonstration of our SaaS platform'
      }
    ],
    pricing: {
      basic: '$499/month',
      premium: '$999/month',
      enterprise: 'Custom pricing'
    }
  }
};

const ServicesPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // CRITICAL FIX: Always render something, even if serviceId is invalid
  const service = serviceId && serviceDetails[serviceId] ? serviceDetails[serviceId] : null;
  
  // Mobile Debug Info
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-900 text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our comprehensive range of AI and media solutions
            </p>
            
            {/* Service List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {Object.values(serviceDetails).map((svc) => (
                <div key={svc.id} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
                  <p className="text-gray-400 mb-4">{svc.description}</p>
                  <Link 
                    to={`/services/${svc.id}`}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
            
            <Link to="/" className="inline-block mt-8 text-cyan-400 hover:text-cyan-300">
              ← Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        {/* Service Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {service.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl">
            {service.description}
          </p>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors"
              >
                <div className="text-cyan-400 mb-2">✓</div>
                <h3 className="text-lg font-semibold">{feature}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Portfolio & Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.gallery.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                {item.type === 'video' ? (
                  <div className="aspect-video">
                    <iframe
                      src={item.url}
                      title={item.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="mx-auto mb-2 text-cyan-400" size={48} />
                      <p className="text-gray-400">Image Preview</p>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Basic</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">{service.pricing.basic}</div>
              <p className="text-gray-400 mb-6">Perfect for small projects</p>
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border-2 border-cyan-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">{service.pricing.premium}</div>
              <p className="text-gray-400 mb-6">Best for growing businesses</p>
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">{service.pricing.enterprise}</div>
              <p className="text-gray-400 mb-6">Tailored for large organizations</p>
              <button className="w-full bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-6">
            Let's discuss your project and see how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg transition-colors">
              Start Your Project
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-lg transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

