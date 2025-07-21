import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Send, X, Minimize2, Maximize2, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface AIAssistantProps {
  isOpen: boolean;
  onToggle: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onToggle }) => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Xin chào! Tôi là Hoàng Anh, trợ lý ảo của VizioCraft Design. Tôi có thể giúp bạn tìm hiểu về dịch vụ của chúng tôi và trả lời các câu hỏi. Bạn cần hỗ trợ gì không?',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestedQuestions = [
    'Dịch vụ AI Solutions của bạn bao gồm những gì?',
    'Chi phí sản xuất video như thế nào?',
    'Tôi có thể học các khóa học online không?',
    'Làm thế nào để liên hệ với team?',
    'Thời gian hoàn thành dự án thường là bao lâu?'
  ];

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputText.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Call Vercel API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText,
          sessionId: Date.now().toString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Xin lỗi, tôi gặp sự cố kỹ thuật. Vui lòng thử lại sau hoặc liên hệ trực tiếp với team qua email: contact@viziocraft.design',
        sender: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const simulateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('ai') || lowerMessage.includes('automation')) {
      return 'Dịch vụ AI Solutions của chúng tôi bao gồm: Intelligent Agents, Business Process Automation, No-code/Low-code Solutions, và AI-powered Analytics. Chúng tôi có thể giúp bạn tự động hóa quy trình kinh doanh và tích hợp AI vào hệ thống hiện tại. Bạn có muốn tìm hiểu chi tiết về dịch vụ nào không?';
    }
    
    if (lowerMessage.includes('video') || lowerMessage.includes('sản xuất')) {
      return 'Dịch vụ Video Production của chúng tôi bao gồm: AI-enhanced Video Creation, 3D Animation, Motion Graphics, và Post-production Services. Chi phí sẽ phụ thuộc vào độ phức tạp và thời lượng video. Bạn có thể chia sẻ thêm về dự án để tôi tư vấn cụ thể hơn không?';
    }
    
    if (lowerMessage.includes('học') || lowerMessage.includes('course') || lowerMessage.includes('tutorial')) {
      return 'Chúng tôi có Learning Center với nhiều khóa học và tutorial về AI, Video Production, Web Development, và Marketing. Bạn có thể truy cập phần Learning để xem các khóa học miễn phí và trả phí. Bạn quan tâm đến lĩnh vực nào nhất?';
    }
    
    if (lowerMessage.includes('liên hệ') || lowerMessage.includes('contact')) {
      return 'Bạn có thể liên hệ với chúng tôi qua: Email: contact@viziocraft.design, Phone: +848 68 68 99 12, hoặc điền form liên hệ trên website. Chúng tôi sẽ phản hồi trong vòng 24 giờ. Bạn muốn tôi hỗ trợ điền form liên hệ không?';
    }
    
    if (lowerMessage.includes('thời gian') || lowerMessage.includes('bao lâu')) {
      return 'Thời gian hoàn thành dự án phụ thuộc vào quy mô và độ phức tạp: AI Solutions (2-6 tháng), Video Production (2-8 tuần), Web Development (1-4 tháng). Chúng tôi sẽ đưa ra timeline cụ thể sau khi tìm hiểu yêu cầu của bạn. Bạn có dự án cụ thể nào cần tư vấn không?';
    }
    
    return 'Cảm ơn bạn đã liên hệ! Tôi hiểu bạn quan tâm đến dịch vụ của chúng tôi. Để tư vấn chính xác nhất, bạn có thể chia sẻ thêm về dự án hoặc nhu cầu cụ thể. Hoặc bạn có thể liên hệ trực tiếp với team qua email: contact@viziocraft.design để được hỗ trợ chi tiết hơn.';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gradient-to-r from-purple-700/20 to-indigo-800/20 rounded-t-xl">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
              <Bot className="text-white" size={20} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800"></div>
          </div>
          <div>
            <h3 className="text-white font-semibold">Hoàng Anh</h3>
            <p className="text-gray-400 text-xs">Trợ lý ảo • Online</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
          </button>
          <button
            onClick={onToggle}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-purple-500' 
                      : 'bg-gradient-to-r from-purple-500 to-indigo-600'
                  }`}>
                    {message.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-700 text-gray-100'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString('vi-VN', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <Bot size={12} />
                  </div>
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-400 mb-2">Câu hỏi gợi ý:</p>
              <div className="space-y-1">
                {suggestedQuestions.slice(0, 2).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="w-full text-left text-xs text-gray-300 hover:text-purple-400 p-2 rounded bg-gray-700/50 hover:bg-gray-700 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Nhập tin nhắn..."
                className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-purple-400 focus:outline-none text-sm"
                disabled={isLoading}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim() || isLoading}
                className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white p-2 rounded-lg transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AIAssistant;

