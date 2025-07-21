import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { GradientText } from '../ui/GradientText';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

interface AboutSectionProps {
  data: any;
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const { ref, isVisible } = useScrollAnimation();

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Đổi mới sáng tạo',
      description: 'Chúng tôi luôn tiên phong trong việc áp dụng công nghệ mới nhất để tạo ra những giải pháp đột phá.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Chất lượng cao',
      description: 'Cam kết mang đến sản phẩm và dịch vụ chất lượng cao nhất, đáp ứng mọi yêu cầu của khách hàng.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Hợp tác bền vững',
      description: 'Xây dựng mối quan hệ đối tác lâu dài dựa trên sự tin tượng và giá trị đôi bên cùng có lợi.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Xuất sắc',
      description: 'Không ngừng nỗ lực để đạt được sự xuất sắc trong mọi dự án và dịch vụ mà chúng tôi cung cấp.'
    }
  ];

  return (
    <section 
      ref={ref}
      id="about" 
      className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`
          text-center mb-16
          transition-all duration-1000 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <GradientText variant="primary">Về VizioCraft Design</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Chúng tôi là đội ngũ chuyên gia đam mê công nghệ, cam kết mang đến những giải pháp AI và media sáng tạo nhất
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Company Story */}
          <div className={`
            transition-all duration-1000 delay-200
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
          `}>
            <h3 className="text-3xl font-bold text-white mb-6">
              Câu chuyện của chúng tôi
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                VizioCraft Design được thành lập với tầm nhìn trở thành đối tác công nghệ đáng tin cậy 
                cho các doanh nghiệp muốn chuyển đổi số và áp dụng AI vào hoạt động kinh doanh.
              </p>
              <p>
                Với đội ngũ chuyên gia giàu kinh nghiệm trong lĩnh vực AI, sản xuất media và phát triển web, 
                chúng tôi đã giúp hàng trăm doanh nghiệp tối ưu hóa quy trình và tăng hiệu quả hoạt động.
              </p>
              <p>
                Chúng tôi tin rằng công nghệ AI sẽ thay đổi cách thức hoạt động của mọi ngành nghề, 
                và sứ mệnh của chúng tôi là làm cho công nghệ này trở nên dễ tiếp cận và hữu ích cho mọi người.
              </p>
            </div>
          </div>

          {/* Right: Stats */}
          <div className={`
            transition-all duration-1000 delay-400
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
          `}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Thành tựu của chúng tôi
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                  <div className="text-gray-400">Dự án hoàn thành</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-400">Khách hàng hài lòng</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
                  <div className="text-gray-400">Năm kinh nghiệm</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-gray-400">Hỗ trợ khách hàng</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className={`
          transition-all duration-1000 delay-600
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Giá trị cốt lõi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`
                  text-center p-6 rounded-xl border border-gray-700
                  bg-gradient-to-br from-gray-800/30 to-gray-900/30
                  hover:border-cyan-400/50 transition-all duration-300
                  hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ 
                  transitionDelay: `${600 + index * 100}ms` 
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
