import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from 'lucide-react';
import { GradientText } from '../components/ui/GradientText';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  client: string;
  date: string;
  category: string;
  technologies: string[];
  results: string[];
}

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const serviceProjects: Record<string, Project[]> = {
    'ai-solutions': [
      {
        id: '1',
        title: 'Hệ thống Chatbot AI cho Ngân hàng',
        description: 'Phát triển chatbot AI thông minh có khả năng xử lý 95% câu hỏi khách hàng tự động, giảm thời gian chờ đợi và tăng trải nghiệm người dùng.',
        image: '/images/projects/ai-chatbot.jpg',
        client: 'Ngân hàng ABC',
        date: '2024',
        category: 'Intelligent Agents',
        technologies: ['GPT-4', 'Natural Language Processing', 'Machine Learning', 'Python'],
        results: ['Giảm 80% thời gian phản hồi', 'Tăng 95% độ chính xác', 'Tiết kiệm 60% chi phí vận hành']
      },
      {
        id: '2',
        title: 'Tự động hóa quy trình HR',
        description: 'Xây dựng hệ thống AI tự động sàng lọc CV, lên lịch phỏng vấn và đánh giá ứng viên, giúp HR tiết kiệm 70% thời gian.',
        image: '/images/projects/hr-automation.jpg',
        client: 'Công ty XYZ Tech',
        date: '2024',
        category: 'Process Automation',
        technologies: ['RPA', 'AI Analytics', 'OCR', 'Workflow Engine'],
        results: ['Tiết kiệm 70% thời gian HR', 'Tăng 50% chất lượng tuyển dụng', 'Giảm 40% chi phí tuyển dụng']
      },
      {
        id: '3',
        title: 'Hệ thống dự đoán doanh số',
        description: 'Phát triển mô hình AI dự đoán doanh số bán hàng với độ chính xác 92%, giúp doanh nghiệp lập kế hoạch kinh doanh hiệu quả.',
        image: '/images/projects/sales-prediction.jpg',
        client: 'Tập đoàn Retail DEF',
        date: '2023',
        category: 'AI Analytics',
        technologies: ['Machine Learning', 'Time Series Analysis', 'Python', 'TensorFlow'],
        results: ['92% độ chính xác dự đoán', 'Tăng 25% hiệu quả kế hoạch', 'Giảm 30% tồn kho']
      },
      {
        id: '4',
        title: 'Nền tảng No-code cho SME',
        description: 'Xây dựng nền tảng no-code giúp doanh nghiệp nhỏ tạo ứng dụng quản lý mà không cần lập trình viên.',
        image: '/images/projects/nocode-platform.jpg',
        client: 'Startup GHI',
        date: '2023',
        category: 'No-code Solutions',
        technologies: ['Drag & Drop Builder', 'API Integration', 'Cloud Infrastructure'],
        results: ['Giảm 90% thời gian phát triển', 'Tiết kiệm 80% chi phí', 'Tăng 300% năng suất']
      },
      {
        id: '5',
        title: 'AI Phân tích cảm xúc khách hàng',
        description: 'Hệ thống AI phân tích cảm xúc từ feedback khách hàng trên social media và email, giúp cải thiện dịch vụ.',
        image: '/images/projects/sentiment-analysis.jpg',
        client: 'E-commerce JKL',
        date: '2024',
        category: 'AI Analytics',
        technologies: ['Sentiment Analysis', 'Social Media API', 'Real-time Processing'],
        results: ['Phân tích 10,000+ feedback/ngày', 'Tăng 40% satisfaction', 'Giảm 50% complaint']
      }
    ],
    'video-production': [
      {
        id: '1',
        title: 'Video Quảng cáo Sản phẩm AI',
        description: 'Sản xuất video quảng cáo 3D cho sản phẩm công nghệ AI với hiệu ứng motion graphics ấn tượng.',
        image: '/images/projects/ai-product-video.jpg',
        client: 'Tech Startup MNO',
        date: '2024',
        category: 'AI Video Creation',
        technologies: ['After Effects', 'Cinema 4D', 'AI-enhanced Rendering'],
        results: ['5M+ views trên social media', 'Tăng 200% brand awareness', 'Tăng 150% conversion rate']
      },
      {
        id: '2',
        title: 'Phim Hoạt hình 3D Giáo dục',
        description: 'Tạo series phim hoạt hình 3D giáo dục về khoa học cho trẻ em với chất lượng cinema.',
        image: '/images/projects/education-animation.jpg',
        client: 'Trung tâm Giáo dục PQR',
        date: '2023',
        category: '3D Animation',
        technologies: ['Blender', '3D Modeling', 'Character Animation', 'Rendering'],
        results: ['20+ tập phim hoàn thành', '1M+ lượt xem', 'Giải thưởng Animation 2023']
      },
      {
        id: '3',
        title: 'Motion Graphics cho Fintech',
        description: 'Thiết kế motion graphics giải thích sản phẩm fintech phức tạp một cách dễ hiểu và hấp dẫn.',
        image: '/images/projects/fintech-motion.jpg',
        client: 'Fintech STU',
        date: '2024',
        category: 'Motion Graphics',
        technologies: ['After Effects', 'Illustrator', 'Motion Design', 'Infographic'],
        results: ['Tăng 300% user engagement', 'Giảm 60% support tickets', 'Tăng 180% app downloads']
      },
      {
        id: '4',
        title: 'Post-production Phim Doanh nghiệp',
        description: 'Thực hiện post-production cho phim giới thiệu doanh nghiệp với color grading và sound design chuyên nghiệp.',
        image: '/images/projects/corporate-film.jpg',
        client: 'Tập đoàn VWX',
        date: '2023',
        category: 'Post-production',
        technologies: ['DaVinci Resolve', 'Pro Tools', 'Color Grading', 'Sound Design'],
        results: ['Giải thưởng Corporate Video', 'Tăng 250% brand value', 'Viral trên LinkedIn']
      },
      {
        id: '5',
        title: 'Live Streaming Setup cho Event',
        description: 'Thiết lập hệ thống live streaming đa camera cho sự kiện công nghệ lớn với chất lượng broadcast.',
        image: '/images/projects/live-streaming.jpg',
        client: 'Tech Conference YZ',
        date: '2024',
        category: 'Live Production',
        technologies: ['Multi-camera Setup', 'OBS Studio', 'Streaming Technology'],
        results: ['50,000+ viewers đồng thời', '99.9% uptime', 'Zero technical issues']
      }
    ],
    'web-development': [
      {
        id: '1',
        title: 'E-commerce Platform cho Fashion',
        description: 'Phát triển nền tảng e-commerce hoàn chỉnh với AI recommendation và AR try-on cho thương hiệu thời trang.',
        image: '/images/projects/fashion-ecommerce.jpg',
        client: 'Fashion Brand ABC',
        date: '2024',
        category: 'E-commerce',
        technologies: ['React', 'Node.js', 'AI Recommendation', 'AR Technology', 'Payment Gateway'],
        results: ['Tăng 400% online sales', 'Giảm 50% return rate', 'Tăng 300% user engagement']
      },
      {
        id: '2',
        title: 'Progressive Web App cho Logistics',
        description: 'Xây dựng PWA quản lý logistics với real-time tracking và offline capability.',
        image: '/images/projects/logistics-pwa.jpg',
        client: 'Logistics DEF',
        date: '2023',
        category: 'Progressive Web Apps',
        technologies: ['PWA', 'Service Workers', 'Real-time API', 'GPS Integration'],
        results: ['99% uptime', 'Hoạt động offline', 'Tăng 200% productivity']
      },
      {
        id: '3',
        title: 'Custom CRM cho Real Estate',
        description: 'Phát triển hệ thống CRM tùy chỉnh cho công ty bất động sản với tích hợp VR tour.',
        image: '/images/projects/realestate-crm.jpg',
        client: 'Real Estate GHI',
        date: '2024',
        category: 'Custom Web Apps',
        technologies: ['Vue.js', 'Laravel', 'VR Integration', 'CRM Features'],
        results: ['Tăng 250% lead conversion', 'Giảm 60% sales cycle', 'Tăng 180% customer satisfaction']
      },
      {
        id: '4',
        title: 'API Gateway cho Microservices',
        description: 'Thiết kế và triển khai API Gateway cho hệ thống microservices của fintech.',
        image: '/images/projects/api-gateway.jpg',
        client: 'Fintech JKL',
        date: '2023',
        category: 'API Development',
        technologies: ['Kong Gateway', 'Docker', 'Kubernetes', 'Microservices'],
        results: ['99.99% availability', 'Xử lý 1M+ requests/day', 'Giảm 70% latency']
      },
      {
        id: '5',
        title: 'Learning Management System',
        description: 'Phát triển LMS với AI-powered personalized learning cho trường đại học.',
        image: '/images/projects/lms-platform.jpg',
        client: 'Đại học MNO',
        date: '2024',
        category: 'Custom Web Apps',
        technologies: ['React', 'Python', 'AI/ML', 'Video Streaming', 'Assessment Tools'],
        results: ['10,000+ students active', 'Tăng 150% learning outcomes', 'Giảm 40% dropout rate']
      }
    ],
    'digital-marketing': [
      {
        id: '1',
        title: 'Chiến dịch Digital cho Startup',
        description: 'Thực hiện chiến dịch marketing toàn diện cho startup công nghệ từ branding đến performance marketing.',
        image: '/images/projects/startup-marketing.jpg',
        client: 'Tech Startup PQR',
        date: '2024',
        category: 'Brand Strategy',
        technologies: ['Google Ads', 'Facebook Ads', 'SEO', 'Content Marketing', 'Analytics'],
        results: ['Tăng 500% brand awareness', 'ROI 300%', 'Tăng 400% website traffic']
      },
      {
        id: '2',
        title: 'Content Strategy cho B2B SaaS',
        description: 'Phát triển chiến lược content marketing cho công ty SaaS B2B với focus vào thought leadership.',
        image: '/images/projects/b2b-content.jpg',
        client: 'SaaS Company STU',
        date: '2023',
        category: 'Content Creation',
        technologies: ['Content Planning', 'SEO Writing', 'Video Content', 'Webinar Production'],
        results: ['Tăng 600% organic traffic', 'Top 3 industry blog', 'Tăng 250% qualified leads']
      },
      {
        id: '3',
        title: 'Social Media Management cho F&B',
        description: 'Quản lý social media cho chuỗi nhà hàng với user-generated content và influencer marketing.',
        image: '/images/projects/fnb-social.jpg',
        client: 'Restaurant Chain VWX',
        date: '2024',
        category: 'Social Media',
        technologies: ['Instagram Marketing', 'TikTok Ads', 'Influencer Platform', 'UGC Campaigns'],
        results: ['1M+ followers tăng', 'Tăng 300% foot traffic', 'Viral campaigns 10M+ views']
      },
      {
        id: '4',
        title: 'SEO Optimization cho E-commerce',
        description: 'Tối ưu SEO toàn diện cho website e-commerce với technical SEO và content optimization.',
        image: '/images/projects/ecommerce-seo.jpg',
        client: 'E-commerce YZ',
        date: '2023',
        category: 'SEO Optimization',
        technologies: ['Technical SEO', 'Keyword Research', 'Link Building', 'Site Speed Optimization'],
        results: ['Tăng 800% organic traffic', 'Top 1 cho 50+ keywords', 'Tăng 400% organic revenue']
      },
      {
        id: '5',
        title: 'Performance Marketing cho App',
        description: 'Chạy ads performance marketing cho mobile app với focus vào user acquisition và retention.',
        image: '/images/projects/app-marketing.jpg',
        client: 'Mobile App ABC',
        date: '2024',
        category: 'Performance Marketing',
        technologies: ['Google Ads', 'Apple Search Ads', 'Facebook Ads', 'Attribution Tracking'],
        results: ['1M+ app installs', 'CPA giảm 60%', 'Retention rate 85%']
      }
    ]
  };

  const serviceInfo = {
    'ai-solutions': {
      title: 'AI Solutions',
      description: 'Giải pháp AI thông minh giúp tự động hóa quy trình và tối ưu hiệu quả kinh doanh'
    },
    'video-production': {
      title: 'Video Production',
      description: 'Sản xuất video chuyên nghiệp với công nghệ AI và hiệu ứng thị giác ấn tượng'
    },
    'web-development': {
      title: 'Web Development',
      description: 'Phát triển ứng dụng web tùy chỉnh với công nghệ hiện đại và trải nghiệm người dùng tối ưu'
    },
    'digital-marketing': {
      title: 'Digital Marketing',
      description: 'Chiến lược marketing số toàn diện giúp tăng trưởng thương hiệu và doanh số'
    }
  };

  const currentService = serviceInfo[serviceId as keyof typeof serviceInfo];
  const projects = serviceProjects[serviceId as keyof typeof serviceProjects] || [];

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
        <Link 
          to="/#services"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Quay lại dịch vụ
        </Link>

        {/* Service Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <GradientText variant="primary">{currentService.title}</GradientText>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {currentService.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-6xl opacity-20">🚀</div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-400">{project.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {project.client}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Results */}
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-green-400">Kết quả đạt được:</h4>
                  {project.results.slice(0, 2).map((result, resultIndex) => (
                    <div key={resultIndex} className="text-xs text-gray-300 flex items-center">
                      <div className="w-1 h-1 bg-green-400 rounded-full mr-2" />
                      {result}
                    </div>
                  ))}
                </div>
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
          <Link
            to="/#contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
          >
            Liên hệ tư vấn
            <ExternalLink className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;

