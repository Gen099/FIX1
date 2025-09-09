import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Loader2, AlertCircle, Image as ImageIcon } from 'lucide-react';
import { GradientText } from '../components/ui/GradientText';
import { servicesData } from '../data/servicesData';

interface Project {
  id: string;
  name: string;
  partner: string;
  image: string;
  description: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  projects: Project[];
}

// Loading skeleton component
const ProjectSkeleton: React.FC = () => (
  <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 overflow-hidden animate-pulse">
    <div className="aspect-video bg-gray-700/50" />
    <div className="p-6">
      <div className="w-20 h-4 bg-gray-700/50 rounded-full mb-3" />
      <div className="w-3/4 h-6 bg-gray-700/50 rounded mb-3" />
      <div className="space-y-2">
        <div className="w-full h-4 bg-gray-700/50 rounded" />
        <div className="w-2/3 h-4 bg-gray-700/50 rounded" />
      </div>
    </div>
  </div>
);

// Lazy loading image component
const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = useCallback(() => {
    setLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setLoading(false);
    setError(true);
  }, []);

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
        </div>
      )}
      {error ? (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 to-gray-800/50 flex items-center justify-center">
          <ImageIcon className="w-12 h-12 text-gray-500" />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      )}
    </div>
  );
};

// Project card component
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <div
    className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 focus-within:ring-2 focus-within:ring-cyan-400/50"
    style={{
      animationDelay: `${index * 100}ms`,
    }}
  >
    {/* Project Image */}
    <div className="aspect-video overflow-hidden">
      <LazyImage
        src={project.image}
        alt={`Dự án ${project.name}`}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>

    {/* Project Content */}
    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full font-medium">
          {project.partner}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
        {project.name}
      </h3>

      <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
        {project.description}
      </p>
    </div>
  </div>
);

// Error boundary component
const ErrorFallback: React.FC<{ error: string; onRetry: () => void }> = ({ error, onRetry }) => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center max-w-md mx-auto px-4">
      <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
      <h1 className="text-2xl font-bold mb-4">Đã xảy ra lỗi</h1>
      <p className="text-gray-300 mb-6">{error}</p>
      <button
        onClick={onRetry}
        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
      >
        Thử lại
      </button>
    </div>
  </div>
);

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  // State management
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Memoized service data
  const currentService: Service | undefined = useMemo(() => 
    servicesData.find(service => service.id === serviceId), 
    [serviceId]
  );

  const projects: Project[] = useMemo(() => 
    currentService ? currentService.projects : [], 
    [currentService]
  );

  // Navigation handlers
  const handleBackClick = useCallback(() => {
    navigate('/#services', { replace: false });
  }, [navigate]);

  const handleContactClick = useCallback(() => {
    navigate('/#contact');
  }, [navigate]);

  // Loading simulation and error handling
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!currentService) {
        setError('Dịch vụ không tồn tại hoặc đã bị xóa');
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentService]);

  // Scroll to top when service changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  // Set page title
  useEffect(() => {
    if (currentService) {
      document.title = `${currentService.name} - Chi tiết dịch vụ`;
    }
    
    return () => {
      document.title = 'Dịch vụ của chúng tôi';
    };
  }, [currentService]);

  // Retry handler
  const handleRetry = useCallback(() => {
    setError(null);
    setLoading(true);
    window.location.reload();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center mb-8">
            <div className="w-20 h-6 bg-gray-700/50 rounded animate-pulse" />
          </div>
          
          <div className="text-center mb-16">
            <div className="w-96 h-12 bg-gray-700/50 rounded mx-auto mb-6 animate-pulse" />
            <div className="w-2/3 h-6 bg-gray-700/50 rounded mx-auto animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <ProjectSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !currentService) {
    return <ErrorFallback error={error || 'Dịch vụ không tồn tại'} onRetry={handleRetry} />;
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors group focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-lg p-2 -m-2"
          aria-label="Quay lại trang dịch vụ"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Quay lại dịch vụ
        </button>

        {/* Service Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            <GradientText variant="primary">{currentService.name}</GradientText>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            {currentService.description}
          </p>
        </header>

        {/* Projects Section */}
        <section aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="sr-only">
            Danh sách dự án của {currentService.name}
          </h2>
          
          {projects.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-400 mb-4">Chưa có dự án</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Hiện tại chưa có dự án nào được thực hiện cho dịch vụ này. 
                Hãy liên hệ với chúng tôi để trở thành khách hàng đầu tiên!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-400">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section 
          className="text-center mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-400/20 animate-fade-in-up animation-delay-600"
          aria-labelledby="cta-heading"
        >
          <h2 id="cta-heading" className="text-3xl font-bold text-white mb-4">
            Bạn có dự án tương tự?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Hãy liên hệ với chúng tôi để thảo luận về dự án của bạn và nhận tư vấn miễn phí từ các chuyên gia hàng đầu
          </p>
          <button
            onClick={handleContactClick}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 group"
            aria-label="Liên hệ để được tư vấn miễn phí"
          >
            Liên hệ tư vấn
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </section>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ServiceDetailPage;
