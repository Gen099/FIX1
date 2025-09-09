// File: src/components/sections/GallerySection.tsx
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { 
  Play, Image as ImageIcon, Video, Filter,
  Calendar, Eye, Heart, Share2, Download,
  ChevronLeft, ChevronRight, X, ZoomIn,
  ExternalLink, ArrowRight, Grid, List
} from 'lucide-react';

interface GalleryItem {
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

interface GalleryItemCardProps {
  item: GalleryItem;
  onView: (item: GalleryItem) => void;
  onLike: (id: string) => void;
  isLiked: boolean;
  index: number;
}

const GalleryItemCard: React.FC<GalleryItemCardProps> = ({ 
  item, onView, onLike, isLiked, index 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getAspectRatioClass = () => {
    switch (item.aspectRatio) {
      case 'square': return 'aspect-square';
      case 'portrait': return 'aspect-[3/4]';
      case 'landscape': return 'aspect-video';
      default: return 'aspect-video';
    }
  };

  return (
    <div 
      className="group relative bg-gray-900/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
      style={{ animationDelay: `${index * 50}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Content */}
      <div className={`relative ${getAspectRatioClass()} overflow-hidden cursor-pointer`}>
        {/* Thumbnail */}
        <img 
          src={item.thumbnail} 
          alt={item.title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoad={() => setImageLoaded(true)}
          onClick={() => onView(item)}
        />
        
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse" />
        )}

        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />

        {/* Type indicator */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-black/80 rounded-full text-xs">
            {item.type === 'video' ? (
              <>
                <Video className="w-4 h-4 text-red-400" />
                <span className="text-white font-semibold">Video</span>
                {item.duration && <span className="text-gray-300">{item.duration}</span>}
              </>
            ) : (
              <>
                <ImageIcon className="w-4 h-4 text-blue-400" />
                <span className="text-white font-semibold">Image</span>
              </>
            )}
          </div>
        </div>

        {/* Featured badge */}
        {item.featured && (
          <div className="absolute top-4 right-4">
            <div className="px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded">
              FEATURED
            </div>
          </div>
        )}

        {/* Play button for videos */}
        {item.type === 'video' && (
          <button 
            onClick={() => onView(item)}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              isHovered ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`}
          >
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
              <Play className="w-8 h-8 text-gray-900 ml-1" />
            </div>
          </button>
        )}

        {/* Zoom icon for images */}
        {item.type === 'image' && isHovered && (
          <button 
            onClick={() => onView(item)}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <ZoomIn className="w-6 h-6 text-gray-900" />
          </button>
        )}

        {/* Action buttons */}
        <div className={`absolute bottom-4 right-4 flex gap-2 transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onLike(item.id);
            }}
            className={`p-2 rounded-full transition-colors ${
              isLiked ? 'bg-red-500 text-white' : 'bg-black/60 text-white hover:bg-red-500'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          
          <button className="p-2 bg-black/60 text-white rounded-full hover:bg-gray-700 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        {/* Category and Date */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
            {item.category}
          </span>
          <span className="text-xs text-gray-500">{item.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
          {item.title}
        </h3>

        {/* Project info */}
        <p className="text-sm text-gray-400 mb-3">
          <span className="text-gray-300 font-medium">{item.project}</span>
          <span className="mx-2">•</span>
          <span>{item.client}</span>
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{item.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{item.likes}</span>
            </div>
          </div>
          
          {item.resolution && (
            <span className="text-gray-400">{item.resolution}</span>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {item.tags.slice(0, 3).map((tag, tagIndex) => (
            <span 
              key={tagIndex}
              className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-600"
            >
              {tag}
            </span>
          ))}
          {item.tags.length > 3 && (
            <span className="text-xs text-gray-500">+{item.tags.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const GalleryModal: React.FC<{
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}> = ({ item, isOpen, onClose, onNext, onPrev }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2 bg-gray-900/80 text-white rounded-full hover:bg-gray-800 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation buttons */}
      <button 
        onClick={onPrev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-50 p-3 bg-gray-900/80 text-white rounded-full hover:bg-gray-800 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={onNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-50 p-3 bg-gray-900/80 text-white rounded-full hover:bg-gray-800 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="max-w-7xl w-full max-h-full flex flex-col lg:flex-row gap-6">
        {/* Media */}
        <div className="flex-1 flex items-center justify-center">
          {item.type === 'video' ? (
            <video 
              ref={videoRef}
              src={item.src}
              controls
              autoPlay
              className="max-w-full max-h-full rounded-lg"
              style={{ maxHeight: '80vh' }}
            />
          ) : (
            <img 
              src={item.src}
              alt={item.title}
              className="max-w-full max-h-full object-contain rounded-lg"
              style={{ maxHeight: '80vh' }}
            />
          )}
        </div>

        {/* Info Panel */}
        <div className="lg:w-96 bg-gray-900/80 rounded-xl p-6 max-h-[80vh] overflow-y-auto">
          <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-2">Project Details</h3>
              <p className="text-white"><span className="text-gray-400">Project:</span> {item.project}</p>
              <p className="text-white"><span className="text-gray-400">Client:</span> {item.client}</p>
              <p className="text-white"><span className="text-gray-400">Date:</span> {item.date}</p>
              <p className="text-white"><span className="text-gray-400">Category:</span> {item.category}</p>
            </div>

            {item.description && (
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Description</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            )}

            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-2">Technical Info</h3>
              {item.resolution && <p className="text-white"><span className="text-gray-400">Resolution:</span> {item.resolution}</p>}
              {item.duration && <p className="text-white"><span className="text-gray-400">Duration:</span> {item.duration}</p>}
              {item.size && <p className="text-white"><span className="text-gray-400">File Size:</span> {item.size}</p>}
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button className="flex-1 py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                <Download className="w-4 h-4 mr-2 inline" />
                Download
              </button>
              <button className="flex-1 py-2 px-4 border border-gray-600 text-white rounded-lg hover:border-cyan-400 transition-colors">
                <Share2 className="w-4 h-4 mr-2 inline" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GallerySection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());

  // Mock data - sẽ được thay thế bằng API call
  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      type: 'video',
      title: 'AI-Powered Product Demo Video',
      description: 'Engaging product demonstration video created with AI-enhanced editing techniques and 3D animations.',
      src: '/videos/gallery/ai-product-demo.mp4',
      thumbnail: '/images/gallery/ai-product-demo-thumb.jpg',
      category: 'Video Production',
      tags: ['AI', '3D Animation', 'Product Demo', 'Marketing'],
      project: 'Smart Home Solutions',
      client: 'TechFlow Corp',
      date: 'Dec 2024',
      views: 12500,
      likes: 456,
      featured: true,
      aspectRatio: 'landscape',
      duration: '2:45',
      resolution: '4K UHD',
      size: '156 MB'
    },
    {
      id: '2',
      type: 'image',
      title: 'Corporate Brand Identity Design',
      description: 'Complete brand identity package including logo, color palette, and visual guidelines.',
      src: '/images/gallery/brand-identity-full.jpg',
      thumbnail: '/images/gallery/brand-identity-thumb.jpg',
      category: 'Brand Design',
      tags: ['Logo Design', 'Branding', 'Visual Identity', 'Corporate'],
      project: 'Brand Redesign Project',
      client: 'Startup Innovate',
      date: 'Nov 2024',
      views: 8900,
      likes: 234,
      featured: true,
      aspectRatio: 'landscape',
      resolution: '300 DPI',
      size: '12 MB'
    },
    {
      id: '3',
      type: 'video',
      title: 'Motion Graphics Showreel',
      description: 'A collection of stunning motion graphics and animations created for various client projects.',
      src: '/videos/gallery/motion-graphics-reel.mp4',
      thumbnail: '/images/gallery/motion-graphics-thumb.jpg',
      category: 'Motion Graphics',
      tags: ['Motion Graphics', 'Animation', 'After Effects', 'Showreel'],
      project: 'Creative Showcase',
      client: 'VizioCraft Design',
      date: 'Oct 2024',
      views: 15600,
      likes: 678,
      featured: false,
      aspectRatio: 'landscape',
      duration: '1:30',
      resolution: '4K UHD',
      size: '89 MB'
    },
    {
      id: '4',
      type: 'image',
      title: 'E-commerce Website Design',
      description: 'Modern and responsive e-commerce website design with focus on user experience and conversion optimization.',
      src: '/images/gallery/ecommerce-design-full.jpg',
      thumbnail: '/images/gallery/ecommerce-design-thumb.jpg',
      category: 'Web Design',
      tags: ['Web Design', 'E-commerce', 'UI/UX', 'Responsive'],
      project: 'Online Store Redesign',
      client: 'Fashion Forward',
      date: 'Sep 2024',
      views: 7200,
      likes: 189,
      featured: false,
      aspectRatio: 'portrait',
      resolution: '1920x1080',
      size: '8 MB'
    },
    {
      id: '5',
      type: 'video',
      title: '3D Product Visualization',
      description: 'Photorealistic 3D product visualization with dynamic camera movements and lighting effects.',
      src: '/videos/gallery/3d-product-viz.mp4',
      thumbnail: '/images/gallery/3d-product-thumb.jpg',
      category: '3D Animation',
      tags: ['3D Modeling', 'Product Visualization', 'Blender', 'Rendering'],
      project: 'Product Launch Campaign',
      client: 'Smart Device Co',
      date: 'Aug 2024',
      views: 9800,
      likes: 345,
      featured: true,
      aspectRatio: 'square',
      duration: '0:45',
      resolution: '4K UHD',
      size: '67 MB'
    },
    {
      id: '6',
      type: 'image',
      title: 'Social Media Campaign Graphics',
      description: 'Eye-catching social media graphics designed for maximum engagement across multiple platforms.',
      src: '/images/gallery/social-campaign-full.jpg',
      thumbnail: '/images/gallery/social-campaign-thumb.jpg',
      category: 'Social Media',
      tags: ['Social Media', 'Instagram', 'Facebook', 'Campaign'],
      project: 'Digital Marketing Campaign',
      client: 'Lifestyle Brand',
      date: 'Jul 2024',
      views: 5400,
      likes: 123,
      featured: false,
      aspectRatio: 'square',
      resolution: '1080x1080',
      size: '3 MB'
    }
  ];

  const categories = ['all', 'Video Production', 'Brand Design', 'Motion Graphics', 'Web Design', '3D Animation', 'Social Media'];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const handleViewItem = useCallback((item: GalleryItem) => {
    setSelectedItem(item);
  }, []);

  const handleLike = useCallback((id: string) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  const handleNext = useCallback(() => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  }, [selectedItem, filteredItems]);

  const handlePrev = useCallback(() => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const prevIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setSelectedItem(filteredItems[prevIndex]);
  }, [selectedItem, filteredItems]);

  return (
    <section id="gallery" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Our Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of creative work, from AI-powered videos to stunning visual designs
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>

          {/* View Mode and Actions */}
          <div className="flex items-center gap-4">
            <div className="flex bg-gray-800 rounded-full p-1">
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === 'masonry' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            <button 
              onClick={() => navigate('/gallery')}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              View All
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`grid gap-6 mb-16 ${
          viewMode === 'masonry' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {filteredItems.slice(0, 8).map((item, index) => (
            <GalleryItemCard
              key={item.id}
              item={item}
              onView={handleViewItem}
              onLike={handleLike}
              isLiked={likedItems.has(item.id)}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-400/20 p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our creative expertise and cutting-edge technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/#contact')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('/gallery')}
              className="px-8 py-4 border-2 border-gray-600 text-white rounded-full font-semibold text-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
            >
              Explore Full Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <GalleryModal
        item={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};

export default GallerySection;
