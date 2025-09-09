// About Section Optimization
// File: src/components/sections/AboutSection.tsx

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Users, Award, Target, Heart, 
  Calendar, MapPin, Mail, Linkedin,
  Star, Quote, ChevronLeft, ChevronRight,
  Code, Palette, Brain, Rocket
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
  experience: string;
  social: {
    linkedin?: string;
    email?: string;
  };
  achievements: string[];
}

interface Certification {
  name: string;
  issuer: string;
  year: number;
  image: string;
}

interface Testimonial {
  id: string;
  client: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  project: string;
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700 p-8 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
      {/* Avatar and basic info */}
      <div className="text-center mb-6">
        <div className="relative mx-auto w-24 h-24 mb-4">
          <img 
            src={member.avatar} 
            alt={member.name}
            className="w-full h-full rounded-full object-cover border-4 border-gray-600 group-hover:border-cyan-400 transition-colors"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-cyan-400 font-semibold mb-2">{member.role}</p>
        <p className="text-gray-400 text-sm">{member.experience} experience</p>
      </div>

      {/* Bio */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
        {member.bio}
      </p>

      {/* Skills */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-400 mb-3">Expertise:</h4>
        <div className="flex flex-wrap gap-2">
          {member.skills.slice(0, 4).map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs bg-gray-800 border border-gray-600 rounded-full text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

      {/* Achievements */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-400 mb-3">Recent Achievements:</h4>
        <div className="space-y-2">
          {member.achievements.slice(0, 2).map((achievement, index) => (
            <div key={index} className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-300 text-xs">{achievement}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Social links */}
      <div className="flex justify-center gap-4">
        {member.social.linkedin && (
          <a 
            href={member.social.linkedin}
            className="p-2 bg-gray-800 rounded-lg hover:bg-cyan-600 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-gray-300" />
          </a>
        )}
        {member.social.email && (
          <a 
            href={`mailto:${member.social.email}`}
            className="p-2 bg-gray-800 rounded-lg hover:bg-cyan-600 transition-colors"
          >
            <Mail className="w-5 h-5 text-gray-300" />
          </a>
        )}
      </div>
    </div>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700 p-8">
      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
          />
        ))}
      </div>

      {/* Content */}
      <Quote className="w-8 h-8 text-cyan-400 mb-4" />
      <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
        "{testimonial.content}"
      </blockquote>

      {/* Client info */}
      <div className="flex items-center gap-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.client}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-white font-semibold">{testimonial.client}</h4>
          <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
          <p className="text-cyan-400 text-xs">{testimonial.project}</p>
        </div>
      </div>
    </div>
  );
};

const CompanyTimeline: React.FC = () => {
  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started as a small creative studio focusing on video production',
      icon: Rocket
    },
    {
      year: '2020',
      title: 'AI Integration',
      description: 'Began incorporating AI tools into our workflow and services',
      icon: Brain
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew to 10+ specialists across different domains',
      icon: Users
    },
    {
      year: '2022',
      title: 'International Clients',
      description: 'Expanded to serve clients across Asia-Pacific region',
      icon: MapPin
    },
    {
      year: '2023',
      title: 'AI Automation Focus',
      description: 'Specialized in AI-driven business process automation',
      icon: Code
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Received multiple awards for innovation in AI solutions',
      icon: Award
    }
  ];

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>
      
      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative flex items-center gap-8">
            {/* Timeline dot */}
            <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center border-4 border-gray-900">
              <milestone.icon className="w-8 h-8 text-white" />
            </div>
            
            {/* Content */}
            <div className="flex-1 bg-gray-900/50 rounded-xl border border-gray-700 p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-2xl font-bold text-cyan-400">{milestone.year}</span>
                <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
              </div>
              <p className="text-gray-300">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const teamMembers: TeamMember[] = [
    {
      id: 'son-pham',
      name: 'Son Pham',
      role: 'Founder & CEO',
      bio: 'Digital creator and visual storytelling expert with 5+ years in technology and media. Leads VizioCraft Design with passion for innovation and client success.',
      avatar: '/images/team/son-pham.jpg',
      skills: ['AI Strategy', 'Business Development', 'Creative Direction', 'Project Management'],
      experience: '5+ years',
      social: {
        linkedin: 'https://linkedin.com/in/sonpham',
        email: 'son@viziocraft.design'
      },
      achievements: [
        'Led 150+ successful projects',
        'AI innovation award 2024',
        'Certified Google AI Partner'
      ]
    },
    {
      id: 'ai-specialist',
      name: 'Dr. Minh Nguyen',
      role: 'AI Solutions Architect',
      bio: 'PhD in Machine Learning with expertise in NLP and computer vision. Specialized in building enterprise-grade AI systems.',
      avatar: '/images/team/minh-nguyen.jpg',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Cloud Architecture'],
      experience: '8+ years',
      social: {
        linkedin: 'https://linkedin.com/in/minhnguyen',
        email: 'minh@viziocraft.design'
      },
      achievements: [
        'Published 15+ AI research papers',
        'Google Cloud AI certified',
        'AWS ML Specialty certified'
      ]
    },
    {
      id: 'creative-director',
      name: 'Linh Tran',
      role: 'Creative Director',
      bio: 'Award-winning designer and video producer with expertise in motion graphics and 3D animation. Creates stunning visuals that tell compelling stories.',
      avatar: '/images/team/linh-tran.jpg',
      skills: ['3D Animation', 'Motion Graphics', 'Video Editing', 'UI/UX Design'],
      experience: '6+ years',
      social: {
        linkedin: 'https://linkedin.com/in/linhtran',
        email: 'linh@viziocraft.design'
      },
      achievements: [
        'Adobe Certified Expert',
        'Vietnam Design Awards 2023',
        'Created 500+ marketing videos'
      ]
    },
    {
      id: 'tech-lead',
      name: 'Duc Le',
      role: 'Technical Lead',
      bio: 'Full-stack developer with passion for creating scalable web applications and APIs. Expert in modern JavaScript frameworks and cloud technologies.',
      avatar: '/images/team/duc-le.jpg',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'DevOps'],
      experience: '7+ years',
      social: {
        linkedin: 'https://linkedin.com/in/ducle',
        email: 'duc@viziocraft.design'
      },
      achievements: [
        'Built 50+ web applications',
        'AWS Solutions Architect',
        'Open source contributor'
      ]
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      client: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechFlow Corp',
      content: 'VizioCraft transformed our customer service with their AI chatbot. Response times improved by 80% and customer satisfaction reached an all-time high.',
      rating: 5,
      avatar: '/images/testimonials/sarah.jpg',
      project: 'AI Customer Service Solution'
    },
    {
      id: '2',
      client: 'Michael Chen',
      role: 'CEO',
      company: 'StartupGrow',
      content: 'Their digital marketing strategy helped us scale from zero to $1M ARR in just 8 months. The ROI has been incredible.',
      rating: 5,
      avatar: '/images/testimonials/michael.jpg',
      project: 'Digital Marketing Campaign'
    },
    {
      id: '3',
      client: 'Emma Rodriguez',
      role: 'Creative Lead',
      company: 'Global Marketing Agency',
      content: 'The AI-enhanced video production pipeline revolutionized our workflow. We now produce 3x more content with the same team.',
      rating: 5,
      avatar: '/images/testimonials/emma.jpg',
      project: 'Video Production Automation'
    }
  ];

  const certifications: Certification[] = [
    { name: 'Google Cloud AI Certified', issuer: 'Google', year: 2024, image: '/images/certs/google-ai.png' },
    { name: 'AWS ML Specialty', issuer: 'Amazon', year: 2024, image: '/images/certs/aws-ml.png' },
    { name: 'Adobe Certified Expert', issuer: 'Adobe', year: 2023, image: '/images/certs/adobe.png' },
    { name: 'ISO 9001 Quality Management', issuer: 'ISO', year: 2023, image: '/images/certs/iso.png' }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {t('about.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Company story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">{t('about.story.title')}</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              {t('about.story.description')}
            </p>
            
            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-400/20 p-6">
                <Target className="w-8 h-8 text-cyan-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-3">{t('about.mission.title')}</h4>
                <p className="text-gray-300 text-sm">{t('about.mission.description')}</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-xl border border-purple-400/20 p-6">
                <Heart className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-3">{t('about.vision.title')}</h4>
                <p className="text-gray-300 text-sm">{t('about.vision.description')}</p>
              </div>
            </div>
          </div>

          {/* Company stats */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Company Highlights</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">150+</div>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <p className="text-gray-400">Support</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4 text-center">Certifications</h4>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg mx-auto mb-2"></div>
                    <p className="text-xs text-gray-300 font-semibold">{cert.name}</p>
                    <p className="text-xs text-gray-500">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Our Journey</h3>
          <CompanyTimeline />
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Meet Our Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">What Our Clients Say</h3>
          
          <div className="relative max-w-4xl mx-auto">
            <TestimonialCard testimonial={testimonials[activeTestimonial]} />
            
            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button 
                onClick={() => setActiveTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-300" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeTestimonial ? 'bg-cyan-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
                className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-300" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-400/20 p-12">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 150+ satisfied clients who have transformed their business with our AI and media solutions.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105">
            Start Your Project Today
          </button>
        </div>
      </div>
