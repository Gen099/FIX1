import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
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

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const currentService: Service | undefined = servicesData.find(service => service.id === serviceId);
  const projects: Project[] = currentService ? currentService.projects : [];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!currentService) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Dịch vụ không tồn tại</h1>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300">
            Quay về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button 
          onClick={() => {
            window.location.href = '/#services';
          }}
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Quay lại dịch vụ
        </button>

        {/* Service Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <GradientText variant="primary">{currentService.name}</GradientText>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {currentService.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                    {project.partner}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-400/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bạn có dự án tương tự?
          </h2>
          <p className="text-gray-300 mb-6">
            Hãy liên hệ với chúng tôi để thảo luận về dự án của bạn và nhận tư vấn miễn phí
          </p>
          <button
            onClick={() => {
              window.location.href = '/#contact';
            }}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
          >
            Liên hệ tư vấn
            <ExternalLink className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;


