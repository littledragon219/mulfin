import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Heart, 
  Mic, 
  Eye, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap,
  Play,
  Pause,
  Volume2,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { fadeInUp, staggerChildren, scaleIn } from '../../utils/animations';

/**
 * Product产品详解组件
 * 包含硬件功能和软件生态介绍
 */
export const Product: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hardware' | 'software'>('hardware');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 硬件特性
  const hardwareFeatures = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: '情感感知系统',
      description: '内置多传感器阵列，实时感知用户情绪状态',
      specs: ['心率检测', '语音情感分析', '面部表情识别', '环境感知']
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: '智能显示屏',
      description: '高清OLED显示屏，展现丰富的表情和交互界面',
      specs: ['3.5英寸OLED', '1080P分辨率', '触控支持', '护眼模式']
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: '语音交互系统',
      description: '先进的语音识别和合成技术，自然对话体验',
      specs: ['360°拾音', '降噪处理', '多语言支持', '情感语调']
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: '触感反馈',
      description: '柔软的触感材质和震动反馈，提供真实的陪伴感受',
      specs: ['柔软外壳', '温度调节', '震动反馈', '压力感应']
    }
  ];

  // 软件功能
  const softwareFeatures = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI情感引擎',
      description: '基于深度学习的情感理解和响应系统',
      capabilities: ['情绪识别', '个性化学习', '智能对话', '情感建模']
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: '移动应用生态',
      description: '配套移动应用，扩展更多功能和服务',
      capabilities: ['远程控制', '数据同步', '社区功能', '健康报告']
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: '云端服务',
      description: '云端AI服务和数据备份，持续优化体验',
      capabilities: ['云端AI', '数据备份', '远程更新', '跨设备同步']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: '隐私保护',
      description: '端到端加密和本地处理，保护用户隐私',
      capabilities: ['本地AI', '数据加密', '隐私模式', '安全认证']
    }
  ];

  // 产品图片
  const productImages = [
    {
      url: '/molfin.avif',
      title: 'Mulfin产品展示',
      description: 'Mulfin AI情感伙伴的真实产品照片'
    },
    {
      url: '/molfin',
      title: 'Mulfin产品细节',
      description: 'Mulfin产品的详细展示'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <section id="product" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            产品
            <span className="text-orange-600">详细介绍</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mulfin结合了先进的AI技术和精心设计的硬件，为用户提供前所未有的情感陪伴体验。
          </p>
        </motion.div>

        {/* 产品展示区域 */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* 产品图片轮播 */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="relative h-96 overflow-hidden rounded-xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={productImages[currentImageIndex].url}
                    alt={productImages[currentImageIndex].title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                
                {/* 导航按钮 */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              
              {/* 图片信息 */}
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {productImages[currentImageIndex].title}
                </h4>
                <p className="text-gray-600">
                  {productImages[currentImageIndex].description}
                </p>
              </div>
              
              {/* 指示器 */}
              <div className="flex justify-center space-x-2 mt-4">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-orange-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* 产品规格 */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                技术规格
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">尺寸</div>
                    <div className="font-semibold">15 × 12 × 8 cm</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">重量</div>
                    <div className="font-semibold">350g</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">电池续航</div>
                    <div className="font-semibold">12小时</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">充电时间</div>
                    <div className="font-semibold">2小时</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">连接方式</div>
                    <div className="font-semibold">WiFi + 蓝牙</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">操作系统</div>
                    <div className="font-semibold">MulfinOS 1.0</div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">核心功能</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {[
                      '情感识别', '语音交互', '触感反馈', '表情显示',
                      '健康监测', '音乐播放', '提醒功能', '学习能力'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* 功能选项卡 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('hardware')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === 'hardware'
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                硬件特性
              </button>
              <button
                onClick={() => setActiveTab('software')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === 'software'
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                软件生态
              </button>
            </div>
          </div>

          {/* 功能内容 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {(activeTab === 'hardware' ? hardwareFeatures : softwareFeatures).map((feature, index) => (
                <motion.div
                  key={index}
                  {...staggerChildren(index, 0.1)}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow group">
                    <div className="text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 mb-4 text-sm">
                      {feature.description}
                    </p>
                    <ul className="space-y-1">
                      {(activeTab === 'hardware' ? feature.specs : feature.capabilities).map((item, itemIndex) => (
                        <li key={itemIndex} className="text-xs text-gray-500 flex items-center">
                          <div className="w-1 h-1 bg-orange-600 rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* 产品亮点 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-orange-600 to-blue-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            革命性的情感陪伴体验
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Mulfin不仅是一个产品，更是一个能够理解、学习和成长的AI伙伴。
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">99.5%</div>
              <div className="text-sm opacity-80">情感识别准确率</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">&lt;100ms</div>
              <div className="text-sm opacity-80">响应延迟</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-80">全天候陪伴</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};