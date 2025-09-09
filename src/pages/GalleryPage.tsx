// File: src/pages/GalleryPage.tsx
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  Search, Filter, SlidersHorizontal, Download, Share2,
  Grid, List, Calendar, Eye, Heart, Star, ArrowLeft,
  ChevronDown, X, Check, Image as ImageIcon, Video
} from 'lucide-react';
import { galleryData, GalleryItem } from '../data/galleryData';

interface FilterOptions {
  categories: string[];
  types: ('image' | 'video')[];
  dateRange: {
    start: string;
    end: string;
  };
  featured: boolean | null;
  sortBy: 'date' | 'views' | 'likes' | 'title';
  sortOrder: 'asc' | 'desc';
}

const GalleryPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // State management
// File: src/pages/GalleryPage.tsx
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  Search, Filter, SlidersHorizontal, Download, Share2,
  Grid, List, Calendar, Eye, Heart, Star, ArrowLeft,
  ChevronDown, X, Check, Image as ImageIcon, Video
} from 'lucide-react';
import { galleryData, GalleryItem } from '../data/galleryData';

interface FilterOptions {
  categories: string[];
  types: ('image' | 'video')[];
  dateRange: {
    start: string;
    end: string;
  };
  featured: boolean | null;
  sortBy: 'date' | 'views' | 'likes' | 'title';
  sortOrder: 'asc' | 'desc';
}

const GalleryPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // State management
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    types: [],
    dateRange: { start: '', end: '' },
    featured: null,
    sortBy: 'date',
    sortOrder: 'desc'
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Get unique categories and stats
  const { categories, totalItems, stats } = useMemo(() => {
    const cats = [...new Set(galleryData.map(item => item.category))];
    const total = galleryData.length;
    const videoCount = galleryData.filter(item => item.type === 'video').length;
    const imageCount = galleryData.filter(item => item.type === 'image').length;
    const featuredCount = galleryData.filter(item => item.featured).length;
    
    return {
      categories: cats,
      totalItems: total,
      stats: {
        videos: videoCount,
        images: imageCount,
        featured: featuredCount,
        totalViews: galleryData.reduce((sum, item) => sum + item.views, 0),
        totalLikes: galleryData.reduce((sum, item) => sum + item.likes, 0)
      }
    };
  }, []);

  // Filter and search logic
  const filteredItems = useMemo(() => {
    let items = galleryData;

    // Text search
    if (searchTerm) {
      items = items.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.client.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (filters.categories.length > 0) {
      items = items.filter(item => filters.categories.includes(item.category));
    }

    // Type filter
    if (filters.types.length > 0) {
      items = items.filter(item => filters.types.includes(item.type));
    }

    // Featured filter
    if (filters.featured !== null) {
      items = items.filter(item => item.featured === filters.featured);
    }

    // Date range filter
    if (filters.dateRange.start || filters.dateRange.end) {
      items = items.filter(item => {
        const itemDate = new Date(item.date);
        const startDate = filters.dateRange.start ? new Date(filters.dateRange.start) : null;
        const endDate = filters.dateRange.end ? new Date(filters.dateRange.end) : null;
        
        if (startDate && itemDate < startDate) return false;
        if (endDate && itemDate > endDate) return false;
        return true;
      });
    }

    // Sorting
    items.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (filters.sortBy) {
        case 'date':
          aValue = new Date(a.date);
          bValue = new Date(b.date);
          break;
        case 'views':
          aValue = a.views;
          bValue = b.views;
          break;
        case 'likes':
          aValue = a.likes;
          bValue = b.likes;
          break;
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        default:
          return 0;
      }

      if (filters.sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return items;
  }, [searchTerm, filters]);

  // Pagination
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredItems, currentPage]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Update URL params
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (filters.categories.length > 0) params.set('categories', filters.categories.join(','));
    if (filters.types.length > 0) params.set('types', filters.types.join(','));
    if (filters.featured !== null) params.set('featured', filters.featured.toString());
    if (filters.sortBy !== 'date') params.set('sort', filters.sortBy);
    if (filters.sortOrder !== 'desc') params.set('order', filters.sortOrder);
    if (currentPage > 1) params.set('page', currentPage.toString());
    
    setSearchParams(params);
  }, [searchTerm, filters, currentPage, setSearchParams]);

  // Filter handlers
  const handleFilterChange = useCallback((key: keyof FilterOptions, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  }, []);

  const handleCategoryToggle = useCallback((category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
    setCurrentPage(1);
  }, []);

  const handleTypeToggle = useCallback((type: 'image' | 'video') => {
    setFilters(prev => ({
      ...prev,
      types: prev.types.includes(type)
        ? prev.types.filter(t => t !== type)
        : [...prev.types, type]
    }));
    setCurrentPage(1);
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({
      categories: [],
      types: [],
      dateRange: { start: '', end: '' },
      featured: null,
      sortBy: 'date',
      sortOrder: 'desc'
    });
    setSearchTerm('');
    setCurrentPage(1);
  }, []);

  const handleBulkAction = useCallback((action: 'download' | 'share') => {
    console.log(`Bulk ${action} for items:`, selectedItems);
    // Implement bulk actions
  }, [selectedItems]);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate('/')}
            className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Creative Gallery
              </span>
            </h1>
            <p className="text-gray-400">
              {filteredItems.length} of {totalItems} items
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-4 text-center">
            <div className="text-2xl font-bold text-cyan-400">{stats.images}</div>
            <div className="text-sm text-gray-400">Images</div>
          </div>
          <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-4 text-center">
            <div className="text-2xl font-bold text-red-400">{stats.videos}</div>
            <div className="text-sm text-gray-400">Videos</div>
          </div>
          <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">{stats.featured}</div>
            <div className="text-sm text-gray-400">Featured</div>
          </div>
          <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-4 text-center">
            <div className="text-2xl font-bold text-green-400">{(stats.totalViews / 1000).toFixed(1)}K</div>
            <div className="text-sm text-gray-400">Total Views</div>
          </div>
          <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">{stats.totalLikes}</div>
            <div className="text-sm text-gray-400">Total Likes</div>
          </div>
        </div>

        {/* Search and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, description, tags, project, or client..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-colors"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                showFilters || filters.categories.length > 0 || filters.types.length > 0 || filters.featured !== null
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Filter className="w-5 h-5" />
              Filters
              {(filters.categories.length > 0 || filters.types.length > 0 || filters.featured !== null) && (
                <span className="bg-white text-cyan-500 text-xs px-2 py-1 rounded-full font-bold">
                  {filters.categories.length + filters.types.length + (filters.featured !== null ? 1 : 0)}
                </span>
              )}
            </button>

            {/* View Mode */}
            <div className="flex bg-gray-800 rounded-xl p-1">
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'masonry' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Bulk Actions */}
            {selectedItems.size > 0 && (
              <div className="flex gap-2">
                <button 
                  onClick={() => handleBulkAction('download')}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download ({selectedItems.size})
                </button>
                <button 
                  onClick={() => handleBulkAction('share')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Advanced Filters Panel */}
        {showFilters && (
          <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-white">Advanced Filters</h3>
              <button 
                onClick={clearFilters}
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Clear All
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Categories */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-400 focus:ring-2"
                      />
                      <span className="text-gray-300 text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Content Type */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Content Type</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.types.includes('image')}
                      onChange={() => handleTypeToggle('image')}
                      className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-400 focus:ring-2"
                    />
                    <ImageIcon className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">Images</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.types.includes('video')}
                      onChange={() => handleTypeToggle('video')}
                      className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-400 focus:ring-2"
                    />
                    <Video className="w-4 h-4 text-red-400" />
                    <span className="text-gray-300 text-sm">Videos</span>
                  </label>
                </div>
              </div>

              {/* Featured Filter */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Featured</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="featured"
                      checked={filters.featured === null}
                      onChange={() => handleFilterChange('featured', null)}
                      className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 focus:ring-cyan-400 focus:ring-2"
                    />
                    <span className="text-gray-300 text-sm">All</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="featured"
                      checked={filters.featured === true}
                      onChange={() => handleFilterChange('featured', true)}
                      className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 focus:ring-cyan-400 focus:ring-2"
                    />
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">Featured Only</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="featured"
                      checked={filters.featured === false}
                      onChange={() => handleFilterChange('featured', false)}
                      className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 focus:ring-cyan-400 focus:ring-2"
                    />
                    <span className="text-gray-300 text-sm">Regular Only</span>
                  </label>
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Sort By</h4>
                <div className="space-y-3">
                  <select
                    value={filters.sortBy}
                    onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  >
                    <option value="date">Date</option>
                    <option value="views">Views</option>
                    <option value="likes">Likes</option>
                    <option value="title">Title</option>
                  </select>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleFilterChange('sortOrder', 'desc')}
                      className={`flex-1 px-3 py-2 text-xs rounded-lg transition-colors ${
                        filters.sortOrder === 'desc'
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      Newest First
                    </button>
                    <button
                      onClick={() => handleFilterChange('sortOrder', 'asc')}
                      className={`flex-1 px-3 py-2 text-xs rounded-lg transition-colors ${
                        filters.sortOrder === 'asc'
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      Oldest First
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        {paginatedItems.length > 0 ? (
          <div className={`grid gap-6 mb-12 ${
            viewMode === 'masonry' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {paginatedItems.map((item, index) => (
              <div key={item.id} className="gallery-item">
                {/* Gallery item card component would go here */}
                {/* This would reuse the GalleryItemCard from the section */}
                <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-4">
                  <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                    {item.type === 'video' ? (
                      <Video className="w-8 h-8 text-gray-600" />
                    ) : (
                      <ImageIcon className="w-8 h-8 text-gray-600" />
                    )}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.client}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-400 mb-4">No items found</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button 
              onClick={clearFilters}
              className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
