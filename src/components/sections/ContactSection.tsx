import React, { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { GradientText } from '../ui/GradientText';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactSectionProps {
  data: any;
}

const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'contact@viziocraft.design',
      link: 'mailto:contact@viziocraft.design'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Điện thoại',
      value: '+848 68 68 99 12',
      link: 'tel:+84868689912'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Địa chỉ',
      value: 'Hà Nội, Cầu Giấy, Việt Nam',
      link: null
    }
  ];

  return (
    <section 
      ref={ref}
      id="contact" 
      className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`
          text-center mb-16
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <GradientText variant="primary">Liên hệ với chúng tôi</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sẵn sàng bắt đầu dự án của bạn? Hãy liên hệ với chúng tôi để được tư vấn miễn phí
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`
            transition-all duration-1000 delay-200
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Gửi tin nhắn cho chúng tôi
              </h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-green-400">Tin nhắn đã được gửi thành công! Chúng tôi sẽ phản hồi sớm nhất.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-gray-300 text-sm font-medium mb-2">
                    Công ty / Tổ chức
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Tên công ty hoặc tổ chức"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    Tin nhắn *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    placeholder="Mô tả dự án hoặc yêu cầu của bạn..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full inline-flex items-center justify-center px-6 py-4 text-lg font-semibold
                    text-white bg-gradient-to-r from-cyan-500 to-blue-600
                    rounded-lg shadow-2xl shadow-cyan-500/25
                    hover:shadow-cyan-500/40 transition-all duration-300
                    hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed
                    ${isSubmitting ? 'scale-95' : ''}
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3" />
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Gửi tin nhắn
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`
            transition-all duration-1000 delay-400
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          `}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Thông tin liên hệ
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-gray-300 text-sm font-medium mb-1">
                          {info.label}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white hover:text-cyan-400 transition-colors text-lg"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-white text-lg">
                            {info.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700">
                <h4 className="text-xl font-bold text-white mb-4">
                  Giờ làm việc
                </h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Thứ 2 - Thứ 6:</span>
                    <span>8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thứ 7:</span>
                    <span>9:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chủ nhật:</span>
                    <span>Nghỉ</span>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
