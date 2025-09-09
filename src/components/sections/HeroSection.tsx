// Hero Section Optimization Plan
// File: src/components/sections/HeroSection.tsx

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Play, Star, Award, Users, Code } from 'lucide-react';

interface HeroSectionProps {
  className?: string;
}

// Dynamic stats counter component
const AnimatedCounter: React.FC<{ 
  target: number; 
  suffix: string; 
  duration?: number 
}> = ({ target, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev + increment >= target) {
          clearInterval(timer);
          return target;
        }
        return prev + increment;
      });
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{Math.floor(count)}{suffix}</span>;
};

// Trust indicators component
const TrustIndicators: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-400">
      <div className="flex items-center gap-2">
        <Star className="w-4 h-4 text-yellow-400" />
        <span>5.0 Rating</span>
      </div>
      <div className="flex items-center gap-2">
        <Award className="w-4 h-4 text-cyan-400" />
        <span>ISO Certified</span>
      </div>
      <div className="flex items-center gap-2">
        <Users className="w-4 h-4 text-green-400" />
        <span>500+ Clients</span>
      </div>
      <div className="flex items-center gap-2">
        <Code className="w-4 h-4 text-purple-400" />
        <span>AI Powered</span>
      </div>
    </div>
  );
};

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  
  // Value propositions for A/B testing
  const valueProps = [
    {
      title: t('hero.title'),
      tagline: t('hero.tagline'),
      description: t('hero.description')
    },
    {
      title: "Transform Your Business with AI",
      tagline: "Next-Generation Digital Solutions",
      description: "We accelerate business growth through cutting-edge AI automation, professional media production, and intelligent digital transformation strategies."
    },
    {
      title: "Your AI Transformation Partner", 
      tagline: "Innovation • Automation • Excellence",
      description: "From concept to deployment, we deliver enterprise-grade AI solutions that revolutionize how you work, create, and scale your business operations."
    }
  ];

  const currentProp = valueProps[activeTab];

  // Auto-rotate value propositions for A/B testing
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % valueProps.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative min-h-screen flex items-center justify-center px-4 ${className}`}>
      {/* Background enhancement */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Main content with enhanced animations */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent animate-pulse">
              {currentProp.title}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-cyan-400 font-semibold mb-6 tracking-wide">
            {currentProp.tagline}
          </p>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              {currentProp.description}
            </p>
          </div>
        </div>

        {/* Enhanced stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-700">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
              <AnimatedCounter target={150} suffix="+" />
            </div>
            <p className="text-sm text-gray-400">{t('hero.stats.projectsCompleted')}</p>
          </div>
          
          <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-700">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
              <AnimatedCounter target={95} suffix="%" />
            </div>
            <p className="text-sm text-gray-400">Client Satisfaction</p>
          </div>
          
          <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-700">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
              <AnimatedCounter target={5} suffix="+" />
            </div>
            <p className="text-sm text-gray-400">{t('hero.stats.yearsExperience')}</p>
          </div>
          
          <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-700">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
              24/7
            </div>
            <p className="text-sm text-gray-400">{t('hero.stats.teamMembers')}</p>
          </div>
        </div>

        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-3">
            {t('hero.cta.exploreServices')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group px-8 py-4 border-2 border-gray-600 text-white rounded-full font-semibold text-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-3">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>

        {/* Trust indicators */}
        <TrustIndicators />

        {/* Social proof */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Trusted by innovative companies</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            {/* Add client logos here */}
            <div className="w-20 h-8 bg-gray-700 rounded"></div>
            <div className="w-20 h-8 bg-gray-700 rounded"></div>
            <div className="w-20 h-8 bg-gray-700 rounded"></div>
            <div className="w-20 h-8 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
