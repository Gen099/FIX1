// Learning Center Optimization
// File: src/components/sections/LearningSection.tsx

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Play, BookOpen, Clock, Star, 
  User, Calendar, Award, Download,
  Filter, Search, ChevronRight,
  Video, FileText, Code, Palette,
  Brain, TrendingUp, Users, Check
} from 'lucide-react';

interface LearningContent {
  id: string;
  type: 'tutorial' | 'course';
  title: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  thumbnail: string;
  rating: number;
  enrolled: number;
  lessons?: number;
  price?: number;
  isFree: boolean;
  tags: string[];
  lastUpdated: string;
  prerequisites?: string[];
  certificate: boolean;
  downloadable: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  count: number;
}

const ContentCard: React.FC<{ 
  content: LearningContent; 
  onAction: (content: LearningContent) => void 
}> = ({ content, onAction }) => {
  const { t } = useTranslation();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400 bg-green-400/20';
      case 'intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTypeIcon = () => {
    return content.type === 'tutorial' ? Video : BookOpen;
  };

  const TypeIcon = getTypeIcon();

  return (
    <div className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
        <img 
          src={content.thumbnail} 
          alt={content.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay with play button */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
          <button 
            onClick={() => onAction(content)}
            className="w-16 h-16 bg-cyan-500/90 rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors transform group-hover:scale-110"
          >
            <Play className="w-8 h-8 text-white ml-1" />
          </button>
        </div>

        {/* Type badge */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-black/80 rounded-full text-xs">
            <TypeIcon className="w-4 h-4 text-cyan-400" />
            <span className="text-white font-semibold">
              {content.type === 'tutorial' ? 'Tutorial' : 'Course'}
            </span>
          </div>
        </div>

        {/* Duration */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 px-2 py-1 bg-black/80 rounded text-xs text-white">
            <Clock className="w-3 h-3" />
            {content.duration}
          </div>
        </div>

        {/* Price badge */}
        <div className="absolute bottom-4 right-4">
          {content.isFree ? (
            <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
              FREE
            </span>
          ) : (
            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full">
              ${content.price}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category and Difficulty */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
            {content.category}
          </span>
          <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(content.difficulty)}`}>
            {t(`learning.difficulty.${content.difficulty}`)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
          {content.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
          {content.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>{content.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{content.enrolled.toLocaleString()}</span>
          </div>
          {content.lessons && (
            <div className="flex items-center gap-1">
              <FileText className="w-4 h-4" />
              <span>{content.lessons} lessons</span>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {content.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Instructor */}
        <div className="flex items-center gap-3 mb-4">
          <img 
            src={content.instructorAvatar} 
            alt={content.instructor}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-white text-sm font-semibold">{content.instructor}</p>
            <p className="text-gray-400 text-xs">Updated {content.lastUpdated}</p>
          </div>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 mb-6 text-xs text-gray-400">
          {content.certificate && (
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>Certificate</span>
            </div>
          )}
          {content.downloadable && (
            <div className="flex items-center gap-1">
              <Download className="w-4 h-4 text-green-400" />
              <span>Download</span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <button 
          onClick={() => onAction(content)}
          className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
        >
          {content.type === 'tutorial' ? t('learning.actions.watchNow') : t('learning.actions.enrollNow')}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const FilterBar: React.FC<{
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  activeDifficulty: string;
  setActiveDifficulty: (difficulty: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  categories: Category[];
}> = ({ 
  activeTab, setActiveTab, 
  activeCategory, setActiveCategory,
  activeDifficulty, setActiveDifficulty,
  searchTerm, setSearchTerm,
  categories 
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-900/50 rounded-2xl border border-gray-700 p-6 mb-8">
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-800 rounded-full p-1 inline-flex">
          <button
            onClick={() => setActiveTab('tutorials')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'tutorials' 
                ? 'bg-cyan-500 text-white shadow-lg' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            {t('learning.tabs.tutorials')}
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'courses' 
                ? 'bg-cyan-500 text-white shadow-lg' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            {t('learning.tabs.courses')}
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search tutorials and courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-colors"
        />
      </div>

      {/* Filters */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Categories
          </h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                activeCategory === 'all'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {t('learning.categories.all')}
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-2 text-sm rounded-lg transition-colors flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className={`text-xs px-1.5 py-0.5 rounded ${category.color}`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div>
          <h4 className="text-white font-semibold mb-3">Difficulty Level</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveDifficulty('all')}
              className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                activeDifficulty === 'all'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Levels
            </button>
            {['beginner', 'intermediate', 'advanced'].map(level => (
              <button
                key={level}
                onClick={() => setActiveDifficulty(level)}
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                  activeDifficulty === level
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {t(`learning.difficulty.${level}`)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const LearningSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('tutorials');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDifficulty, setActiveDifficulty] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories: Category[] = [
    {
      id: 'aiAutomation',
      name: t('learning.categories.aiAutomation'),
      icon: Brain,
      color: 'bg-purple-400/20 text-purple-400',
      count: 12
    },
    {
      id: 'videoProduction',
      name: t('learning.categories.videoProduction'),
      icon: Video,
      color: 'bg-red-400/20 text-red-400',
      count: 8
    },
    {
      id: 'animationVfx',
      name: t('learning.categories.animationVfx'),
      icon: Palette,
      color: 'bg-pink-400/20 text-pink-400',
      count: 6
    },
    {
      id: 'webDevelopment',
      name: t('learning.categories.webDevelopment'),
      icon: Code,
      color: 'bg-blue-400/20 text-blue-400',
      count: 10
    },
    {
      id: 'marketing',
      name: t('learning.categories.marketing'),
      icon: TrendingUp,
      color: 'bg-green-400/20 text-green-400',
      count: 7
    }
  ];

  const learningContent: LearningContent[] = [
    {
      id: '1',
      type: 'tutorial',
      title: 'Building Your First AI Chatbot with Python',
      description: 'Learn how to create an intelligent chatbot using Python, OpenAI API, and natural language processing techniques.',
      instructor: 'Dr. Minh Nguyen',
      instructorAvatar: '/images/instructors/minh.jpg',
      duration: '45 min',
      difficulty: 'beginner',
      category: 'AI & Automation',
      thumbnail: '/images/tutorials/ai-chatbot.jpg',
      rating: 4.8,
      enrolled: 1250,
      isFree: true,
      tags: ['Python', 'OpenAI', 'NLP', 'Chatbot'],
      lastUpdated: '2 days ago',
      certificate: false,
      downloadable: true
    },
    {
      id: '2',
      type: 'course',
      title: 'Complete AI Automation Mastery',
      description: 'Comprehensive course covering AI automation from basics to advanced implementation for business processes.',
      instructor: 'Son Pham',
      instructorAvatar: '/images/instructors/son.jpg',
      duration: '12 hours',
      difficulty: 'intermediate',
      category: 'AI & Automation',
      thumbnail: '/images/courses/ai-automation.jpg',
      rating: 4.9,
      enrolled: 890,
      lessons: 24,
      price: 149,
      isFree: false,
      tags: ['AI', 'Automation', 'Business Process', 'Machine Learning'],
      lastUpdated: '1 week ago',
      prerequisites: ['Basic programming knowledge', 'Understanding of APIs'],
      certificate: true,
      downloadable: true
    },
    {
      id: '3',
      type: 'tutorial',
      title: 'Creating Stunning Motion Graphics with After Effects',
      description: 'Step-by-step guide to creating professional motion graphics and animations using Adobe After Effects.',
      instructor: 'Linh Tran',
      instructorAvatar: '/images/instructors/linh.jpg',
      duration: '1.5 hours',
      difficulty: 'intermediate',
      category: 'Video Production',
      thumbnail: '/images/tutorials/motion-graphics.jpg',
      rating: 4.7,
      enrolled: 2100,
      isFree: true,
      tags: ['After Effects', 'Motion Graphics', 'Animation', 'Design'],
      lastUpdated: '3 days ago',
      certificate: false,
      downloadable: false
    },
    {
      id: '4',
      type: 'course',
      title: 'React & TypeScript Development Bootcamp',
      description: 'Master modern web development with React, TypeScript, and cutting-edge tools and techniques.',
      instructor: 'Duc Le',
      instructorAvatar: '/images/instructors/duc.jpg',
      duration: '20 hours',
      difficulty: 'advanced',
      category: 'Web Development',
      thumbnail: '/images/courses/react-typescript.jpg',
      rating: 4.9,
      enrolled: 1450,
      lessons: 40,
      price: 199,
      isFree: false,
      tags: ['React', 'TypeScript', 'JavaScript', 'Frontend'],
      lastUpdated: '5 days ago',
      prerequisites: ['HTML/CSS knowledge', 'JavaScript fundamentals'],
      certificate: true,
      downloadable: true
    },
    {
      id: '5',
      type: 'tutorial',
      title: 'AI-Powered Video Editing Techniques',
      description: 'Discover how to leverage AI tools to speed up your video editing workflow and create professional content.',
      instructor: 'Linh Tran',
      instructorAvatar: '/images/instructors/linh.jpg',
      duration: '35 min',
      difficulty: 'beginner',
      category: 'Video Production',
      thumbnail: '/images/tutorials/ai-video-editing.jpg',
      rating: 4.6,
      enrolled: 980,
      isFree: true,
      tags: ['AI', 'Video Editing', 'Automation', 'Premiere Pro'],
      lastUpdated: '1 week ago',
      certificate: false,
      downloadable: true
    },
    {
      id: '6',
      type: 'course',
      title: 'Digital Marketing with AI Tools',
      description: 'Learn how to leverage AI for content creation, social media management, and performance optimization.',
      instructor: 'Marketing Team',
      instructorAvatar: '/images/instructors/marketing.jpg',
      duration: '8 hours',
      difficulty: 'intermediate',
      category: 'Marketing',
      thumbnail: '/images/courses/ai-marketing.jpg',
      rating: 4.8,
      enrolled: 1120,
      lessons: 16,
      price: 99,
      isFree: false,
      tags: ['Digital Marketing', 'AI Tools', 'Content Creation', 'Analytics'],
      lastUpdated: '4 days ago',
      prerequisites: ['Basic marketing knowledge'],
      certificate: true,
      downloadable: false
    }
  ];

  // Filter content based on active filters
  const filteredContent = learningContent.filter(content => {
    const matchesTab = content.type === (activeTab === 'tutorials' ? 'tutorial' : 'course');
    const matchesCategory = activeCategory === 'all' || content.category.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesDifficulty = activeDifficulty === 'all' || content.difficulty === activeDifficulty;
    const matchesSearch = searchTerm === '' || 
      content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesTab && matchesCategory && matchesDifficulty && matchesSearch;
  });

  const handleAction = (content: LearningContent) => {
    console.log('Action triggered for:', content.title);
    // Here you would navigate to the content or open a modal
  };

  return (
    <section id="learning" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {t('learning.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('learning.subtitle')}
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeDifficulty={activeDifficulty}
          setActiveDifficulty={setActiveDifficulty}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categories={categories}
        />

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map(content => (
            <ContentCard 
              key={content.id} 
              content={content} 
              onAction={handleAction}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredContent.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-24 h-24 text-gray-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-400 mb-4">No content found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Try adjusting your filters or search terms to find the content you're looking for.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-400/20 p-12">
          <h3 className="text-3xl font-bold text-white mb-4">Become an Instructor</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Share your expertise with our community. Create tutorials and courses to help others learn and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105">
              Become an Instructor
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 text-white rounded-full font-semibold text-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300">
              Submit Tutorial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
