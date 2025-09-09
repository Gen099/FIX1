// Contact Section Optimization
// File: src/components/sections/ContactSection.tsx

import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Phone, Mail, MapPin, Clock, 
  Send, CheckCircle, AlertCircle,
  MessageCircle, Calendar, Globe,
  Zap, Shield, Users, Star
} from 'lucide-react';

interface ContactMethod {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  value: string;
  action: string;
  available: boolean;
  responseTime: string;
}

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

const ContactMethodCard: React.FC<{ method: ContactMethod }> = ({ method }) => {
  const handleAction = () => {
    if (method.title === 'Phone') {
      window.open(`tel:${method.value}`);
    } else if (method.title === 'Email') {
      window.open(`mailto:${method.value}`);
    } else if (method.title === 'Live Chat') {
      // Trigger chat widget
      console.log('Open chat widget');
    }
  };

  return (
    <div className={`
      relative group cursor-pointer transition-all duration-500 hover:scale-105
      ${method.available 
        ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 hover:border-cyan-400/50' 
        : 'bg-gray-900/30 border-gray-800'
      }
      rounded-2xl border p-8
    `} onClick={handleAction}>
      
      {/* Availability indicator */}
      <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
        method.available ? 'bg-green-400 animate-pulse' : 'bg-gray-600'
      }`} />

      {/* Icon */}
      <div className={`
        p-4 rounded-xl mb-6 transition-all duration-300
        ${method.available 
          ? 'bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30' 
          : 'bg-gray-800 text-gray-600'
        }
      `}>
        <method.icon className="w-8 h-8" />
      </div>

      {/* Content */}
      <h3 className={`text-xl font-bold mb-2 ${
        method.available ? 'text-white' : 'text-gray-500'
      }`}>
        {method.title}
      </h3>
      
      <p className={`text-sm mb-4 ${
        method.available ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {method.description}
      </p>

      <div className={`font-semibold mb-4 ${
        method.available ? 'text-cyan-400' : 'text-gray-600'
      }`}>
        {method.value}
      </div>

      {/* Response time */}
      <div className={`text-xs flex items-center gap-2 mb-4 ${
        method.available ? 'text-gray-400' : 'text-gray-600'
      }`}>
        <Clock className="w-4 h-4" />
        {method.responseTime}
      </div>

      {/* Action button */}
      <button 
        disabled={!method.available}
        className={`
          w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2
          ${method.available 
            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:scale-105' 
            : 'bg-gray-800 text-gray-600 cursor-not-allowed'
          }
        `}
      >
        {method.action}
        <Send className="w-4 h-4" />
      </button>
    </div>
  );
};

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would normally send to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            {t('contact.form.name')} <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`w-full px-4 py-3 bg-gray-800 border rounded-xl text-white focus:outline-none focus:ring-2 transition-colors ${
              errors.name ? 'border-red-400 focus:ring-red-400/50' : 'border-gray-600 focus:ring-cyan-400/50'
            }`}
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            {t('contact.form.email')} <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`w-full px-4 py-3 bg-gray-800 border rounded-xl text-white focus:outline-none focus:ring-2 transition-colors ${
              errors.email ? 'border-red-400 focus:ring-red-400/50' : 'border-gray-600 focus:ring-cyan-400/50'
            }`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Company and Service */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            {t('contact.form.company')}
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-colors"
            placeholder="Your company name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            {t('contact.form.service')} <span className="text-red-400">*</span>
          </label>
          <select
            value={formData.service}
            onChange={(e) => handleChange('service', e.target.value)}
            className={`w-full px-4 py-3 bg-gray-800 border rounded-xl text-white focus:outline-none focus:ring-2 transition-colors ${
              errors.service ? 'border-red-400 focus:ring-red-400/50' : 'border-gray-600 focus:ring-cyan-400/50'
            }`}
          >
            <option value="">Select a service</option>
            <option value="ai-solutions">AI Solutions</option>
            <option value="video-production">Video Production</option>
            <option value="web-development">Web Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="consultation">Free Consultation</option>
          </select>
          {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
        </div>
      </div>

      {/* Budget and Timeline */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Project Budget
          </label>
          <select
            value={formData.budget}
            onChange={(e) => handleChange('budget', e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-colors"
          >
            <option value="">Select budget range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-15k">$5,000 - $15,000</option>
            <option value="15k-50k">$15,000 - $50,000</option>
            <option value="50k-plus">$50,000+</option>
            <option value="discuss">Let's discuss</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => handleChange('timeline', e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-colors"
          >
            <option value="">Select timeline</option>
            <option value="asap">ASAP (Rush)</option>
            <option value="1-month">1 Month</option>
            <option value="2-3-months">2-3 Months</option>
            <option value="3-6-months">3-6 Months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-300 mb-2">
          {t('contact.form.message')} <span className="text-red-400">*</span>
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          rows={6}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-xl text-white focus:outline-none focus:ring-2 transition-colors resize-none ${
            errors.message ? 'border-red-400 focus:ring-red-400/50' : 'border-gray-600 focus:ring-cyan-400/50'
          }`}
          placeholder="Tell us about your project, goals, and any specific requirements..."
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mx-auto"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              {t('contact.form.submit')}
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-500/20 border border-green-400 rounded-xl p-4 flex items-center gap-3 text-green-400">
          <CheckCircle className="w-6 h-6" />
          <p>Message sent successfully! We'll get back to you within 24 hours.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-500/20 border border-red-400 rounded-xl p-4 flex items-center gap-3 text-red-400">
          <AlertCircle className="w-6 h-6" />
          <p>Failed to send message. Please try again or contact us directly.</p>
        </div>
      )}
    </form>
  );
};

const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqCategories = ['general', 'services', 'pricing', 'process'];
  
  const faqs: FAQ[] = [
    {
      question: 'How long does a typical AI project take?',
      answer: 'AI projects typically range from 2-6 months depending on complexity. Simple chatbots can be deployed in 2-4 weeks, while complex automation systems may take 3-6 months.',
      category: 'general'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We offer comprehensive support plans including 24/7 monitoring, regular updates, performance optimization, and feature enhancements.',
      category: 'services'
    },
    {
      question: 'What is included in your pricing?',
      answer: 'Our pricing includes project planning, development, testing, deployment, training, and 3 months of free support. Additional services like ongoing maintenance are available separately.',
      category: 'pricing'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow an agile methodology: Discovery & Planning → Design & Prototyping → Development & Testing → Deployment & Training → Support & Optimization.',
      category: 'process'
    },
    {
      question: 'Can you work with our existing systems?',
      answer: 'Absolutely! We specialize in integrating AI solutions with existing business systems including CRMs, databases, APIs, and third-party tools.',
      category: 'services'
    },
    {
      question: 'Do you offer fixed-price projects?',
      answer: 'Yes, we offer both fixed-price and hourly billing options. Fixed-price is available for well-defined projects, while hourly billing works better for evolving requirements.',
      category: 'pricing'
    }
  ];

  const filteredFAQs = faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="bg-gray-900/50 rounded-2xl border border-gray-700 p-8">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>
      
      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {faqCategories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === category
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* FAQ items */}
      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <div key={index} className="border border-gray-700 rounded-xl overflow-hidden">
            <button
              onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
              className="w-full px-6 py-4 text-left hover:bg-gray-800/50 transition-colors flex items-center justify-between"
            >
              <span className="text-white font-semibold">{faq.question}</span>
              <span className={`text-cyan-400 transition-transform ${
                expandedFAQ === index ? 'rotate-180' : ''
              }`}>
                ▼
              </span>
            </button>
            
            {expandedFAQ === index && (
              <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  const contactMethods: ContactMethod[] = [
    {
      icon: Phone,
      title: 'Phone',
      description: 'Call us for immediate assistance',
      value: '+848 68 68 99 12',
      action: 'Call Now',
      available: true,
      responseTime: 'Immediate response'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us a detailed message',
      value: 'contact@viziocraft.design',
      action: 'Send Email',
      available: true,
      responseTime: 'Response within 4 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our AI assistant',
      value: 'Available 24/7',
      action: 'Start Chat',
      available: true,
      responseTime: 'Instant response'
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      description: 'Book a consultation call',
      value: 'Free 30-min consultation',
      action: 'Book Now',
      available: true,
      responseTime: 'Next available slot'
    }
  ];

  // Get current Vietnam time
  const currentTime = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const currentHour = parseInt(currentTime.split(':')[0]);
  const isBusinessHours = currentHour >= 8 && currentHour < 18;

  return (
    <section id="contact" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {t('contact.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
          
          {/* Business hours indicator */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className={`w-3 h-3 rounded-full ${isBusinessHours ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'}`} />
            <span className="text-gray-400 text-sm">
              {isBusinessHours ? 'We\'re online now!' : 'Outside business hours - We\'ll respond soon!'}
              <span className="ml-2 text-cyan-400">Vietnam time: {currentTime}</span>
            </span>
          </div>
        </div>

        {/* Contact methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <ContactMethodCard key={index} method={method} />
          ))}
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact form */}
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Send className="w-6 h-6 text-cyan-400" />
              {t('contact.form.title')}
            </h3>
            <ContactForm />
          </div>

          {/* Contact info and office hours */}
          <div className="space-y-8">
            {/* Contact information */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.info.title')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Office Location</h4>
                    <p className="text-gray-300">{t('contact.info.address')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t('contact.info.hours')}</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">{t('contact.info.schedule.weekdays')}</span>
                        <span className="text-gray-300">{t('contact.info.schedule.weekdaysTime')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">{t('contact.info.schedule.saturday')}</span>
                        <span className="text-gray-300">{t('contact.info.schedule.saturdayTime')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">{t('contact.info.schedule.sunday')}</span>
                        <span className="text-gray-300">{t('contact.info.schedule.sundayTime')}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Time Zones We Serve</h4>
                    <p className="text-gray-300 text-sm">Asia-Pacific • Europe • Americas</p>
                    <p className="text-cyan-400 text-xs mt-1">Remote collaboration worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why choose us */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-400/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose VizioCraft?</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">Quick Response</h4>
                  <p className="text-gray-300 text-sm">24/7 support with response within 4 hours</p>
                </div>
                
                <div className="text-center">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">Guaranteed Quality</h4>
                  <p className="text-gray-300 text-sm">100% satisfaction guarantee on all projects</p>
                </div>
                
                <div className="text-center">
                  <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">Expert Team</h4>
                  <p className="text-gray-300 text-sm">5+ years experience in AI & media</p>
                </div>
                
                <div className="text-center">
                  <Star className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">5-Star Rating</h4>
                  <p className="text-gray-300 text-sm">95% client satisfaction rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection />
      </div>
    </section>
  );
};

export default ContactSection;
