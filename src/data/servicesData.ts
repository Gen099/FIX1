// File: src/data/servicesData.ts
// Cập nhật để đồng bộ với ServiceDetailPage

export interface Project {
  id: string;
  name: string;
  partner: string;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  projects: Project[];
  // Thêm các fields mới cho Services Section
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

export const servicesData: Service[] = [
  {
    id: 'ai-solutions', // ID này sẽ được dùng trong URL: /services/ai-solutions
    name: 'AI Solutions',
    description: 'Intelligent Agents, Business Process Automation, No-code/Low-code Solutions',
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
    },
    projects: [
      {
        id: 'ai-chatbot-ecommerce',
        name: 'E-commerce AI Assistant',
        partner: 'ShopSmart Vietnam',
        image: '/images/projects/ai-chatbot-ecommerce.jpg',
        description: 'Intelligent shopping assistant that helps customers find products, answers questions, and provides personalized recommendations.'
      },
      {
        id: 'ai-document-processing',
        name: 'Document Processing System',
        partner: 'Legal Partners Inc',
        image: '/images/projects/ai-document.jpg',
        description: 'Automated legal document analysis and classification system using advanced NLP and machine learning.'
      },
      {
        id: 'ai-predictive-maintenance',
        name: 'Predictive Maintenance Platform',
        partner: 'Manufacturing Co',
        image: '/images/projects/ai-maintenance.jpg',
        description: 'IoT-powered predictive maintenance system that reduces equipment downtime by 40% using machine learning algorithms.'
      }
    ]
  },
  {
    id: 'video-production', // URL: /services/video-production
    name: 'Video Production',
    description: 'AI-enhanced Video Creation, 3D Animation, Motion Graphics, Post-production Services',
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
    },
    projects: [
      {
        id: 'corporate-brand-video',
        name: 'Corporate Brand Video Series',
        partner: 'Tech Innovators Ltd',
        image: '/images/projects/corporate-video.jpg',
        description: 'Professional brand video series showcasing company culture, values, and innovative solutions.'
      },
      {
        id: 'product-demo-3d',
        name: '3D Product Demonstration',
        partner: 'Smart Device Co',
        image: '/images/projects/3d-product.jpg',
        description: 'Stunning 3D animated product demonstrations for smart home devices with realistic rendering and physics.'
      },
      {
        id: 'social-media-campaign',
        name: 'Social Media Video Campaign',
        partner: 'Fashion Forward',
        image: '/images/projects/social-campaign.jpg',
        description: 'Dynamic social media video campaign with motion graphics and engaging animations for fashion brand.'
      }
    ]
  },
  {
    id: 'web-development', // URL: /services/web-development
    name: 'Web Development',
    description: 'Custom Web Applications, E-commerce Solutions, Progressive Web Apps',
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
    },
    projects: [
      {
        id: 'ecommerce-platform',
        name: 'Modern E-commerce Platform',
        partner: 'Online Retail Store',
        image: '/images/projects/ecommerce.jpg',
        description: 'Full-featured e-commerce platform with payment integration, inventory management, and customer analytics.'
      },
      {
        id: 'saas-dashboard',
        name: 'SaaS Analytics Dashboard',
        partner: 'Data Insights Pro',
        image: '/images/projects/saas-dashboard.jpg',
        description: 'Comprehensive analytics dashboard for SaaS platforms with real-time data visualization and reporting.'
      },
      {
        id: 'pwa-mobile-app',
        name: 'Progressive Web Application',
        partner: 'Mobile First Company',
        image: '/images/projects/pwa.jpg',
        description: 'Cross-platform PWA with native app features, offline functionality, and push notifications.'
      }
    ]
  },
  {
    id: 'digital-marketing', // URL: /services/digital-marketing
    name: 'Digital Marketing',
    description: 'Brand Strategy, Content Creation, Social Media Management, SEO Optimization',
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
    },
    projects: [
      {
        id: 'brand-strategy-campaign',
        name: 'Complete Brand Strategy',
        partner: 'Startup Innovate',
        image: '/images/projects/brand-strategy.jpg',
        description: 'Comprehensive brand strategy including logo design, messaging, and market positioning for tech startup.'
      },
      {
        id: 'seo-optimization',
        name: 'SEO & Content Marketing',
        partner: 'Service Business Pro',
        image: '/images/projects/seo.jpg',
        description: 'Complete SEO overhaul and content marketing strategy resulting in 300% increase in organic traffic.'
      },
      {
        id: 'social-media-automation',
        name: 'Social Media Automation',
        partner: 'E-learning Platform',
        image: '/images/projects/social-automation.jpg',
        description: 'AI-powered social media automation system with content scheduling, engagement tracking, and analytics.'
      }
    ]
  }
];

// Helper function để get service by ID
export const getServiceById = (id: string): Service | undefined => {
  return servicesData.find(service => service.id === id);
};

// Helper function để get all service IDs (useful for routing)
export const getAllServiceIds = (): string[] => {
  return servicesData.map(service => service.id);
};
