import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Users, Star, BookOpen, Video, FileText } from 'lucide-react';

interface Tutorial {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'article';
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  author: string;
  publishDate: string;
  tags: string[];
}

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  price: string;
  thumbnail: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
}

const mockTutorials: Tutorial[] = [
  {
    id: '1',
    title: 'Getting Started with AI Automation',
    description: 'Learn the basics of implementing AI automation in your business workflow.',
    type: 'video',
    duration: '15 min',
    difficulty: 'Beginner',
    thumbnail: '/images/tutorial-ai-basics.jpg',
    author: 'Son Pham',
    publishDate: '2024-01-15',
    tags: ['AI', 'Automation', 'Business']
  },
  {
    id: '2',
    title: 'Advanced Video Editing Techniques',
    description: 'Master professional video editing with advanced techniques and tools.',
    type: 'video',
    duration: '25 min',
    difficulty: 'Advanced',
    thumbnail: '/images/tutorial-video-editing.jpg',
    author: 'Creative Team',
    publishDate: '2024-01-10',
    tags: ['Video', 'Editing', 'Production']
  },
  {
    id: '3',
    title: '3D Animation Fundamentals',
    description: 'Complete guide to 3D animation principles and best practices.',
    type: 'article',
    duration: '10 min read',
    difficulty: 'Intermediate',
    thumbnail: '/images/tutorial-3d-animation.jpg',
    author: '3D Team',
    publishDate: '2024-01-08',
    tags: ['3D', 'Animation', 'Design']
  },
  {
    id: '4',
    title: 'Building Responsive Web Applications',
    description: 'Learn how to create modern, responsive web applications from scratch.',
    type: 'video',
    duration: '30 min',
    difficulty: 'Intermediate',
    thumbnail: '/images/tutorial-web-dev.jpg',
    author: 'Dev Team',
    publishDate: '2024-01-05',
    tags: ['Web Development', 'React', 'CSS']
  },
  {
    id: '5',
    title: 'Visual Effects Compositing',
    description: 'Master the art of compositing visual effects for film and video.',
    type: 'video',
    duration: '20 min',
    difficulty: 'Advanced',
    thumbnail: '/images/tutorial-vfx.jpg',
    author: 'VFX Team',
    publishDate: '2024-01-03',
    tags: ['VFX', 'Compositing', 'Post-production']
  }
];

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Complete AI Solutions Mastery',
    description: 'Comprehensive course covering AI implementation, automation, and business integration.',
    instructor: 'Son Pham',
    duration: '12 hours',
    lessons: 24,
    students: 1250,
    rating: 4.8,
    price: '$199',
    thumbnail: '/images/course-ai-mastery.jpg',
    level: 'Intermediate',
    category: 'AI & Automation'
  },
  {
    id: '2',
    title: 'Professional Video Production',
    description: 'Learn professional video production from pre-production to final delivery.',
    instructor: 'Creative Director',
    duration: '18 hours',
    lessons: 36,
    students: 890,
    rating: 4.9,
    price: '$299',
    thumbnail: '/images/course-video-production.jpg',
    level: 'Beginner',
    category: 'Video Production'
  },
  {
    id: '3',
    title: 'Advanced 3D Animation & VFX',
    description: 'Master advanced 3D animation techniques and visual effects creation.',
    instructor: '3D Specialist',
    duration: '25 hours',
    lessons: 45,
    students: 650,
    rating: 4.7,
    price: '$399',
    thumbnail: '/images/course-3d-vfx.jpg',
    level: 'Advanced',
    category: 'Animation & VFX'
  },
  {
    id: '4',
    title: 'Full-Stack Web Development',
    description: 'Complete web development course covering frontend and backend technologies.',
    instructor: 'Lead Developer',
    duration: '30 hours',
    lessons: 60,
    students: 2100,
    rating: 4.6,
    price: '$249',
    thumbnail: '/images/course-web-dev.jpg',
    level: 'Intermediate',
    category: 'Web Development'
  },
  {
    id: '5',
    title: 'Digital Marketing & Content Strategy',
    description: 'Learn effective digital marketing strategies and content creation techniques.',
    instructor: 'Marketing Expert',
    duration: '15 hours',
    lessons: 30,
    students: 1800,
    rating: 4.5,
    price: '$149',
    thumbnail: '/images/course-marketing.jpg',
    level: 'Beginner',
    category: 'Marketing'
  }
];

const LearningPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tutorials' | 'courses'>('tutorials');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'AI & Automation', 'Video Production', 'Animation & VFX', 'Web Development', 'Marketing'];

  const filteredTutorials = selectedCategory === 'all' 
    ? mockTutorials 
    : mockTutorials.filter(tutorial => 
        tutorial.tags.some(tag => 
          categories.find(cat => cat.toLowerCase().includes(tag.toLowerCase()))
        )
      );

  const filteredCourses = selectedCategory === 'all'
    ? mockCourses
    : mockCourses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Learning Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expand your skills with our comprehensive tutorials and courses. Learn from industry experts and master the latest technologies.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('tutorials')}
              className={`px-6 py-3 rounded-md transition-colors ${
                activeTab === 'tutorials'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <BookOpen className="inline mr-2" size={20} />
              Tutorials
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-6 py-3 rounded-md transition-colors ${
                activeTab === 'courses'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Video className="inline mr-2" size={20} />
              Courses
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {category === 'all' ? 'All Categories' : category}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'tutorials' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map(tutorial => (
              <div key={tutorial.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gray-700 flex items-center justify-center relative">
                  <Play className="text-cyan-400" size={48} />
                  <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-sm">
                    {tutorial.type === 'video' ? <Video size={16} /> : <FileText size={16} />}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-sm">
                    {tutorial.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      tutorial.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      tutorial.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {tutorial.difficulty}
                    </span>
                    <span className="text-gray-400 text-sm">{tutorial.publishDate}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                  <p className="text-gray-400 mb-4">{tutorial.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">by {tutorial.author}</span>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      Watch Now →
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {tutorial.tags.map(tag => (
                      <span key={tag} className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <div key={course.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gray-700 flex items-center justify-center relative">
                  <Play className="text-cyan-400" size={48} />
                  <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-sm">
                    {course.level}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-cyan-500 px-2 py-1 rounded text-sm font-semibold">
                    {course.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-400 text-sm">{course.category}</span>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 mr-1" size={16} />
                      <span className="text-sm">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="mr-2" size={16} />
                      {course.duration} • {course.lessons} lessons
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Users className="mr-2" size={16} />
                      {course.students.toLocaleString()} students
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">by {course.instructor}</span>
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Create Your Own Content?</h2>
          <p className="text-xl text-gray-300 mb-6">
            Join our content creator program and share your expertise with our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg transition-colors">
              Become an Instructor
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-lg transition-colors">
              Submit Tutorial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;

