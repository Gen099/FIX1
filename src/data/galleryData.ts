// File: src/data/galleryData.ts
export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  description: string;
  src: string;
  thumbnail: string;
  category: string;
  tags: string[];
  project: string;
  client: string;
  date: string;
  views: number;
  likes: number;
  featured: boolean;
  aspectRatio: 'square' | 'landscape' | 'portrait';
  duration?: string; // for videos
  resolution?: string;
  size?: string;
}

export const galleryData: GalleryItem[] = [
  // AI SOLUTIONS PROJECTS
  {
    id: 'ai-chatbot-demo',
    type: 'video',
    title: 'AI Chatbot Integration Demo',
    description: 'Demonstration of an intelligent customer service chatbot that can handle complex queries, understand context, and provide personalized responses with 95% accuracy.',
    src: '/videos/gallery/ai-chatbot-demo.mp4',
    thumbnail: '/images/gallery/thumbs/ai-chatbot-demo.jpg',
    category: 'AI Solutions',
    tags: ['AI', 'Chatbot', 'Customer Service', 'NLP', 'Machine Learning'],
    project: 'Smart Customer Support',
    client: 'TechFlow Corporation',
    date: '2024-12-15',
    views: 15420,
    likes: 892,
    featured: true,
    aspectRatio: 'landscape',
    duration: '3:45',
    resolution: '4K UHD',
    size: '398 MB'
  },
  {
    id: 'product-demo-3d',
    type: 'video',
    title: '3D Product Demonstration',
    description: 'Stunning 3D animated product demonstration showcasing smart home devices with photorealistic rendering, dynamic lighting, and smooth camera movements.',
    src: '/videos/gallery/3d-product-demo.mp4',
    thumbnail: '/images/gallery/thumbs/3d-product-demo.jpg',
    category: 'Video Production',
    tags: ['3D Animation', 'Product Demo', 'Blender', 'Rendering', 'Smart Home'],
    project: 'Product Launch Campaign',
    client: 'Smart Device Co',
    date: '2024-11-15',
    views: 22100,
    likes: 1567,
    featured: true,
    aspectRatio: 'landscape',
    duration: '2:20',
    resolution: '4K UHD',
    size: '287 MB'
  },
  {
    id: 'motion-graphics-explainer',
    type: 'video',
    title: 'Animated Explainer Video',
    description: 'Engaging motion graphics explainer video breaking down complex financial concepts into easy-to-understand visual narratives.',
    src: '/videos/gallery/motion-graphics-explainer.mp4',
    thumbnail: '/images/gallery/thumbs/motion-graphics-explainer.jpg',
    category: 'Video Production',
    tags: ['Motion Graphics', 'Explainer', 'After Effects', 'Animation', 'Finance'],
    project: 'Financial Education Series',
    client: 'FinTech Solutions',
    date: '2024-10-25',
    views: 14500,
    likes: 678,
    featured: false,
    aspectRatio: 'landscape',
    duration: '1:45',
    resolution: '1080p HD',
    size: '123 MB'
  },

  // WEB DEVELOPMENT PROJECTS
  {
    id: 'ecommerce-homepage',
    type: 'image',
    title: 'Modern E-commerce Homepage Design',
    description: 'Clean and conversion-optimized e-commerce homepage design featuring intuitive navigation, product showcases, and seamless user experience.',
    src: '/images/gallery/ecommerce-homepage.jpg',
    thumbnail: '/images/gallery/thumbs/ecommerce-homepage.jpg',
    category: 'Web Development',
    tags: ['E-commerce', 'Homepage', 'UI/UX', 'Conversion', 'Responsive'],
    project: 'Online Store Redesign',
    client: 'Fashion Forward',
    date: '2024-11-30',
    views: 9840,
    likes: 445,
    featured: true,
    aspectRatio: 'portrait',
    resolution: '1920x3840',
    size: '8.9 MB'
  },
  {
    id: 'saas-dashboard-ui',
    type: 'image',
    title: 'SaaS Analytics Dashboard',
    description: 'Comprehensive analytics dashboard for SaaS platforms with real-time data visualization, customizable widgets, and dark mode support.',
    src: '/images/gallery/saas-dashboard.jpg',
    thumbnail: '/images/gallery/thumbs/saas-dashboard.jpg',
    category: 'Web Development',
    tags: ['Dashboard', 'SaaS', 'Analytics', 'Data Visualization', 'Dark Mode'],
    project: 'Analytics Platform Redesign',
    client: 'Data Insights Pro',
    date: '2024-10-18',
    views: 11200,
    likes: 523,
    featured: false,
    aspectRatio: 'landscape',
    resolution: '2560x1440',
    size: '6.7 MB'
  },
  {
    id: 'mobile-app-prototype',
    type: 'video',
    title: 'Mobile App UI/UX Prototype',
    description: 'Interactive prototype showcasing smooth animations, intuitive gestures, and seamless navigation for a food delivery mobile application.',
    src: '/videos/gallery/mobile-app-prototype.mp4',
    thumbnail: '/images/gallery/thumbs/mobile-app-prototype.jpg',
    category: 'Web Development',
    tags: ['Mobile App', 'Prototype', 'UI/UX', 'Animation', 'Food Delivery'],
    project: 'Food Delivery App',
    client: 'QuickEats Startup',
    date: '2024-09-22',
    views: 16800,
    likes: 789,
    featured: true,
    aspectRatio: 'portrait',
    duration: '1:15',
    resolution: '1080x1920',
    size: '95 MB'
  },

  // DIGITAL MARKETING PROJECTS
  {
    id: 'social-media-campaign',
    type: 'image',
    title: 'Social Media Campaign Graphics',
    description: 'Eye-catching social media graphics designed for maximum engagement across Instagram, Facebook, and LinkedIn platforms.',
    src: '/images/gallery/social-campaign.jpg',
    thumbnail: '/images/gallery/thumbs/social-campaign.jpg',
    category: 'Digital Marketing',
    tags: ['Social Media', 'Instagram', 'Campaign', 'Graphics', 'Engagement'],
    project: 'Summer Campaign 2024',
    client: 'Lifestyle Brand Co',
    date: '2024-07-15',
    views: 7650,
    likes: 234,
    featured: false,
    aspectRatio: 'square',
    resolution: '1080x1080',
    size: '2.1 MB'
  },
  {
    id: 'brand-identity-package',
    type: 'image',
    title: 'Complete Brand Identity Package',
    description: 'Comprehensive brand identity including logo design, color palette, typography, business cards, and brand guidelines for a tech startup.',
    src: '/images/gallery/brand-identity.jpg',
    thumbnail: '/images/gallery/thumbs/brand-identity.jpg',
    category: 'Digital Marketing',
    tags: ['Brand Identity', 'Logo Design', 'Startup', 'Guidelines', 'Typography'],
    project: 'Brand Strategy Project',
    client: 'Startup Innovate',
    date: '2024-08-30',
    views: 13400,
    likes: 667,
    featured: true,
    aspectRatio: 'landscape',
    resolution: '3000x2000',
    size: '15.2 MB'
  },
  {
    id: 'email-marketing-templates',
    type: 'image',
    title: 'Email Marketing Template Set',
    description: 'Professional email marketing templates designed for high conversion rates, featuring responsive design and compelling call-to-actions.',
    src: '/images/gallery/email-templates.jpg',
    thumbnail: '/images/gallery/thumbs/email-templates.jpg',
    category: 'Digital Marketing',
    tags: ['Email Marketing', 'Templates', 'Conversion', 'Responsive', 'CTA'],
    project: 'Email Campaign Suite',
    client: 'E-learning Platform',
    date: '2024-09-05',
    views: 5890,
    likes: 178,
    featured: false,
    aspectRatio: 'portrait',
    resolution: '600x1200',
    size: '4.3 MB'
  },

  // MOTION GRAPHICS & ANIMATION
  {
    id: 'logo-animation',
    type: 'video',
    title: 'Animated Logo Reveal',
    description: 'Dynamic logo animation with particle effects, smooth transitions, and professional sound design for brand presentations.',
    src: '/videos/gallery/logo-animation.mp4',
    thumbnail: '/images/gallery/thumbs/logo-animation.jpg',
    category: 'Motion Graphics',
    tags: ['Logo Animation', 'After Effects', 'Particles', 'Brand', 'Sound Design'],
    project: 'Brand Animation Package',
    client: 'Creative Agency Pro',
    date: '2024-12-01',
    views: 8920,
    likes: 345,
    featured: false,
    aspectRatio: 'landscape',
    duration: '0:15',
    resolution: '1080p HD',
    size: '45 MB'
  },
  {
    id: 'infographic-animation',
    type: 'video',
    title: 'Animated Infographic Video',
    description: 'Data-driven animated infographic presenting market research findings with smooth chart animations and engaging visual storytelling.',
    src: '/videos/gallery/infographic-animation.mp4',
    thumbnail: '/images/gallery/thumbs/infographic-animation.jpg',
    category: 'Motion Graphics',
    tags: ['Infographic', 'Data Visualization', 'Animation', 'Charts', 'Research'],
    project: 'Market Research Presentation',
    client: 'Business Analytics Corp',
    date: '2024-10-08',
    views: 12750,
    likes: 456,
    featured: true,
    aspectRatio: 'landscape',
    duration: '2:30',
    resolution: '4K UHD',
    size: '189 MB'
  },

  // 3D MODELING & VISUALIZATION
  {
    id: 'architectural-visualization',
    type: 'image',
    title: 'Architectural Visualization',
    description: 'Photorealistic 3D architectural rendering showcasing modern residential building with detailed lighting, materials, and environmental elements.',
    src: '/images/gallery/architectural-viz.jpg',
    thumbnail: '/images/gallery/thumbs/architectural-viz.jpg',
    category: '3D Visualization',
    tags: ['Architecture', '3D Rendering', 'Photorealistic', 'Building', 'Visualization'],
    project: 'Residential Complex Visualization',
    client: 'Urban Development Ltd',
    date: '2024-11-10',
    views: 19200,
    likes: 823,
    featured: true,
    aspectRatio: 'landscape',
    resolution: '4K UHD',
    size: '25.7 MB'
  },
  {
    id: 'product-3d-render',
    type: 'image',
    title: 'Product 3D Rendering',
    description: 'High-quality 3D product rendering for marketing materials, featuring realistic materials, professional lighting, and studio-quality presentation.',
    src: '/images/gallery/product-render.jpg',
    thumbnail: '/images/gallery/thumbs/product-render.jpg',
    category: '3D Visualization',
    tags: ['Product Rendering', '3D Modeling', 'Marketing', 'Studio Lighting', 'Materials'],
    project: 'Product Marketing Assets',
    client: 'Consumer Electronics Brand',
    date: '2024-09-18',
    views: 14300,
    likes: 589,
    featured: false,
    aspectRatio: 'square',
    resolution: '2048x2048',
    size: '8.9 MB'
  },

  // INTERACTIVE MEDIA
  {
    id: 'interactive-presentation',
    type: 'video',
    title: 'Interactive Business Presentation',
    description: 'Engaging interactive presentation with animated charts, clickable elements, and smooth transitions for executive board meetings.',
    src: '/videos/gallery/interactive-presentation.mp4',
    thumbnail: '/images/gallery/thumbs/interactive-presentation.jpg',
    category: 'Interactive Media',
    tags: ['Presentation', 'Interactive', 'Business', 'Charts', 'Executive'],
    project: 'Executive Presentation Suite',
    client: 'Fortune 500 Company',
    date: '2024-12-05',
    views: 6780,
    likes: 267,
    featured: false,
    aspectRatio: 'landscape',
    duration: '3:15',
    resolution: '1080p HD',
    size: '198 MB'
  },
  {
    id: 'vr-experience-demo',
    type: 'video',
    title: 'Virtual Reality Experience Demo',
    description: 'Immersive VR experience demonstration showcasing virtual product showroom with 360-degree interactions and realistic physics.',
    src: '/videos/gallery/vr-experience.mp4',
    thumbnail: '/images/gallery/thumbs/vr-experience.jpg',
    category: 'Interactive Media',
    tags: ['VR', 'Virtual Reality', '360', 'Immersive', 'Product Showroom'],
    project: 'VR Showroom Development',
    client: 'Automotive Manufacturer',
    date: '2024-08-12',
    views: 21500,
    likes: 1234,
    featured: true,
    aspectRatio: 'landscape',
    duration: '4:45',
    resolution: '4K UHD',
    size: '456 MB'
  },

  // PHOTOGRAPHY & VISUAL CONTENT
  {
    id: 'corporate-photography',
    type: 'image',
    title: 'Corporate Photography Session',
    description: 'Professional corporate photography featuring team portraits, office environment shots, and executive headshots with consistent lighting and styling.',
    src: '/images/gallery/corporate-photography.jpg',
    thumbnail: '/images/gallery/thumbs/corporate-photography.jpg',
    category: 'Photography',
    tags: ['Corporate', 'Photography', 'Team', 'Executive', 'Professional'],
    project: 'Corporate Brand Photography',
    client: 'Financial Services Inc',
    date: '2024-09-30',
    views: 10500,
    likes: 378,
    featured: false,
    aspectRatio: 'landscape',
    resolution: '6000x4000',
    size: '18.4 MB'
  },
  {
    id: 'product-photography',
    type: 'image',
    title: 'E-commerce Product Photography',
    description: 'High-quality product photography for e-commerce platforms with consistent white background, multiple angles, and detail shots.',
    src: '/images/gallery/product-photography.jpg',
    thumbnail: '/images/gallery/thumbs/product-photography.jpg',
    category: 'Photography',
    tags: ['Product', 'E-commerce', 'White Background', 'Commercial', 'Retail'],
    project: 'E-commerce Photography Package',
    client: 'Online Retail Store',
    date: '2024-10-20',
    views: 8970,
    likes: 234,
    featured: false,
    aspectRatio: 'square',
    resolution: '3000x3000',
    size: '12.1 MB'
  },

  // ADDITIONAL FEATURED CONTENT
  {
    id: 'annual-report-design',
    type: 'image',
    title: 'Annual Report Design',
    description: 'Modern annual report design featuring clean layouts, data visualizations, and professional typography for corporate communications.',
    src: '/images/gallery/annual-report.jpg',
    thumbnail: '/images/gallery/thumbs/annual-report.jpg',
    category: 'Print Design',
    tags: ['Annual Report', 'Print Design', 'Corporate', 'Data Visualization', 'Typography'],
    project: 'Corporate Communications',
    client: 'Public Listed Company',
    date: '2024-11-25',
    views: 7200,
    likes: 189,
    featured: false,
    aspectRatio: 'portrait',
    resolution: '2480x3508',
    size: '22.5 MB'
  },
  {
    id: 'ai-powered-video-editing',
    type: 'video',
    title: 'AI-Powered Video Editing Showcase',
    description: 'Demonstration of AI-enhanced video editing capabilities including automatic color correction, scene detection, and intelligent transitions.',
    src: '/videos/gallery/ai-video-editing.mp4',
    thumbnail: '/images/gallery/thumbs/ai-video-editing.jpg',
    category: 'AI Solutions',
    tags: ['AI', 'Video Editing', 'Color Correction', 'Automation', 'Machine Learning'],
    project: 'AI Video Production Tools',
    client: 'VizioCraft Design',
    date: '2024-12-10',
    views: 25600,
    likes: 1456,
    featured: true,
    aspectRatio: 'landscape',
    duration: '5:20',
    resolution: '4K UHD',
    size: '523 MB'
  }
];

// Helper functions
export const getGalleryItemById = (id: string): GalleryItem | undefined => {
  return galleryData.find(item => item.id === id);
};

export const getGalleryItemsByCategory = (category: string): GalleryItem[] => {
  return galleryData.filter(item => item.category === category);
};

export const getGalleryItemsByType = (type: 'image' | 'video'): GalleryItem[] => {
  return galleryData.filter(item => item.type === type);
};

export const getFeaturedGalleryItems = (): GalleryItem[] => {
  return galleryData.filter(item => item.featured);
};

export const getGalleryStats = () => {
  return {
    total: galleryData.length,
    images: galleryData.filter(item => item.type === 'image').length,
    videos: galleryData.filter(item => item.type === 'video').length,
    featured: galleryData.filter(item => item.featured).length,
    categories: [...new Set(galleryData.map(item => item.category))],
    totalViews: galleryData.reduce((sum, item) => sum + item.views, 0),
    totalLikes: galleryData.reduce((sum, item) => sum + item.likes, 0)
  };
};

export const searchGalleryItems = (query: string): GalleryItem[] => {
  const searchTerms = query.toLowerCase().split(' ');
  
  return galleryData.filter(item => {
    const searchableText = [
      item.title,
      item.description,
      item.project,
      item.client,
      item.category,
      ...item.tags
    ].join(' ').toLowerCase();
    
    return searchTerms.every(term => searchableText.includes(term));
  });
};: '245 MB'
  },
  {
    id: 'ai-workflow-automation',
    type: 'image',
    title: 'Business Process Automation Dashboard',
    description: 'Modern dashboard interface for AI-powered business process automation, featuring real-time analytics, workflow visualization, and performance metrics.',
    src: '/images/gallery/ai-workflow-dashboard.jpg',
    thumbnail: '/images/gallery/thumbs/ai-workflow-dashboard.jpg',
    category: 'AI Solutions',
    tags: ['Dashboard', 'UI/UX', 'Automation', 'Analytics', 'Business Intelligence'],
    project: 'Enterprise Automation Suite',
    client: 'Global Manufacturing Inc',
    date: '2024-11-28',
    views: 8650,
    likes: 234,
    featured: true,
    aspectRatio: 'landscape',
    resolution: '2560x1440',
    size: '4.2 MB'
  },
  {
    id: 'ai-document-processing',
    type: 'video',
    title: 'Intelligent Document Processing System',
    description: 'AI-powered system that automatically extracts, categorizes, and processes legal documents with 98% accuracy, reducing manual work by 85%.',
    src: '/videos/gallery/ai-document-processing.mp4',
    thumbnail: '/images/gallery/thumbs/ai-document-processing.jpg',
    category: 'AI Solutions',
    tags: ['Document Processing', 'OCR', 'Machine Learning', 'Legal Tech', 'Automation'],
    project: 'Legal Document Automation',
    client: 'Legal Partners Inc',
    date: '2024-10-12',
    views: 12300,
    likes: 567,
    featured: false,
    aspectRatio: 'landscape',
    duration: '2:15',
    resolution: '1080p HD',
    size: '156 MB'
  },

  // VIDEO PRODUCTION PROJECTS
  {
    id: 'corporate-brand-video',
    type: 'video',
    title: 'Corporate Brand Story Video',
    description: 'Cinematic brand story video showcasing company values, culture, and innovation. Features drone footage, employee interviews, and motion graphics.',
    src: '/videos/gallery/corporate-brand-story.mp4',
    thumbnail: '/images/gallery/thumbs/corporate-brand-story.jpg',
    category: 'Video Production',
    tags: ['Brand Video', 'Corporate', 'Storytelling', 'Cinematic', 'Culture'],
    project: 'Brand Identity Campaign',
    client: 'Tech Innovators Ltd',
    date: '2024-12-08',
    views: 18750,
    likes: 1245,
    featured: true,
    aspectRatio: 'landscape',
    duration: '4:30',
    resolution: '4K UHD',
    size
