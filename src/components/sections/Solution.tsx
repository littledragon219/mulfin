import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Heart, Zap, Shield, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { fadeInUp, staggerChildren, scaleIn } from '../../utils/animations';
import { scrollToElement } from '../../utils/scroll';

/**
 * Solution解决方案组件
 * 展示产品愿景和核心价值
 */
export const Solution: React.FC = () => {
  // 核心解决方案特性
  const solutionFeatures = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'AI情感陪伴',
      description: '基于先进AI技术，提供24/7全天候情感支持和陪伴',
      benefits: ['智能情感识别', '个性化对话', '情绪调节指导']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '智能硬件集成',
      description: '结合可爱的硬件形态，提供触觉和视觉的真实陪伴体验',
      benefits: ['触感反馈', '表情显示', '语音交互']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '隐私安全保护',
      description: '采用端到端加密，确保用户隐私和情感数据安全',
      benefits: ['本地处理', '数据加密', '隐私保护']
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '全时段可用',
      description: '不受时间和地点限制，随时随地提供情感支持',
      benefits: ['24/7在线', '即时响应', '无地域限制']
    }
  ];

  // 解决方案优势
  const advantages = [
    {
      title: '成本效益',
      description: '相比传统心理咨询，成本降低80%以上',
      value: '80%+',
      color: 'text-green-600'
    },
    {
      title: '可及性',
      description: '24/7全天候服务，无需预约等待',
      value: '24/7',
      color: 'text-blue-600'
    },
    {
      title: '个性化',
      description: '基于用户数据提供定制化情感支持',
      value: '100%',
      color: 'text-orange-600'
    },
    {
      title: '隐私性',
      description: '无需面对面交流，保护用户隐私',
      value: '完全',
      color: 'text-purple-600'
    }
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            <Lightbulb className="w-4 h-4 mr-2" />
            创新解决方案
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Mulfin：
            <span className="text-orange-600">AI情感伙伴</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            通过先进的AI技术和可爱的硬件设计，Mulfin为现代人提供全天候的情感陪伴和心理支持，
            让每个人都能拥有一个贴心的AI伙伴。
          </p>
        </motion.div>

        {/* 产品愿景展示 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                重新定义情感陪伴
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Mulfin不仅仅是一个AI助手，更是一个能够理解、关怀和陪伴的情感伙伴。
                我们相信技术应该让人们的生活更加温暖和有意义。
              </p>
              <div className="space-y-4">
                {[
                  '智能情感识别与响应',
                  '个性化陪伴体验',
                  '全方位心理健康支持',
                  '可爱的硬件交互形态'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    {...staggerChildren(index, 0.1)}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div
                {...scaleIn}
                transition={{ delay: 0.4 }}
                className="relative z-10"
              >
                <img
                  src="/molfin.avif"
                  alt="Mulfin AI伙伴"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </motion.div>
              {/* 装饰性元素 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </motion.div>

        {/* 核心解决方案特性 */}
        <motion.div
          {...staggerChildren(0, 0.1)}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {solutionFeatures.map((feature, index) => (
            <motion.div
              key={index}
              {...staggerChildren(index, 0.1)}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 group">
                <div className="text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* 解决方案优势对比 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            相比传统方案的
            <span className="text-orange-600">显著优势</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                {...staggerChildren(index, 0.1)}
                className="text-center"
              >
                <div className={`text-4xl font-bold ${advantage.color} mb-2`}>
                  {advantage.value}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 行动号召 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-orange-600 to-blue-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            让AI成为每个人的情感伙伴
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Mulfin正在重新定义人机情感交互，为孤独的现代人带来温暖的陪伴体验。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToElement('product')}
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              了解产品详情
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToElement('contact')}
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              联系我们
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};