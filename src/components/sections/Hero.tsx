import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Heart, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { scrollToElement } from '../../utils/scroll';
import { fadeInUp, fadeInLeft, fadeInRight, floatingAnimation, pulseAnimation } from '../../utils/animations';

/**
 * Hero英雄区域组件
 * 展示项目名称、核心定位和视觉效果
 */
export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600" />
      
      {/* 动态背景元素 */}
      <div className="absolute inset-0">
        {/* 浮动圆圈 */}
        <motion.div
          {...floatingAnimation}
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          {...floatingAnimation}
          style={{ animationDelay: '1s' }}
          className="absolute top-40 right-20 w-32 h-32 bg-orange-400/20 rounded-full blur-xl"
        />
        <motion.div
          {...floatingAnimation}
          style={{ animationDelay: '2s' }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"
        />
        
        {/* 装饰性图标 */}
        <motion.div
          {...pulseAnimation}
          className="absolute top-32 right-1/4 text-white/20"
        >
          <Heart size={40} />
        </motion.div>
        <motion.div
          {...pulseAnimation}
          style={{ animationDelay: '1s' }}
          className="absolute bottom-32 right-20 text-orange-300/30"
        >
          <Sparkles size={32} />
        </motion.div>
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左侧文字内容 */}
          <div className="text-left lg:text-left">
            {/* 标签 */}
            <motion.div
              {...fadeInUp}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI情感伙伴的未来
            </motion.div>

            {/* 主标题 */}
            <motion.h1
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              <span className="block">Mulfin</span>
              <span className="block bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                可拥抱的AI伙伴
              </span>
            </motion.h1>

            {/* 副标题 */}
            <motion.p
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
            >
              结合先进AI技术与温暖触感体验，为现代人提供情感陪伴与心理支持，
              <span className="text-orange-300 font-medium">重新定义人机情感交互</span>
            </motion.p>

            {/* 核心数据 */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 mb-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-300">1000亿+</div>
                <div className="text-sm text-white/70">市场规模</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-300">85%</div>
                <div className="text-sm text-white/70">用户满意度</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-300">24/7</div>
                <div className="text-sm text-white/70">情感陪伴</div>
              </div>
            </motion.div>

            {/* 行动按钮 */}
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToElement('product', 80)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-medium group"
              >
                了解产品
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToElement('funding', 80)}
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-medium group"
              >
                <Play className="mr-2 w-5 h-5" />
                投资机会
              </Button>
            </motion.div>
          </div>

          {/* 右侧视觉内容 */}
          <motion.div
            {...fadeInRight}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* 产品展示区域 */}
            <div className="relative">
              {/* 主要产品图片占位 */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-md mx-auto"
              >
                <div className="aspect-square bg-gradient-to-br from-orange-400/20 to-blue-400/20 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <img
                    src="/molfin.avif"
                    alt="Mulfin AI情感伙伴"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                
                {/* 装饰性元素 */}
                <motion.div
                  {...pulseAnimation}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center"
                >
                  <Heart className="w-4 h-4 text-white" />
                </motion.div>
                <motion.div
                  {...pulseAnimation}
                  style={{ animationDelay: '0.5s' }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center"
                >
                  <Sparkles className="w-3 h-3 text-white" />
                </motion.div>
              </motion.div>

              {/* 特性标签 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-8 -right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg"
              >
                <div className="text-sm font-medium text-gray-900">AI智能对话</div>
                <div className="text-xs text-gray-600">24/7情感支持</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-8 -left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg"
              >
                <div className="text-sm font-medium text-gray-900">温暖触感</div>
                <div className="text-xs text-gray-600">可拥抱设计</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 滚动提示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/70 text-sm cursor-pointer"
            onClick={() => scrollToElement('problem', 80)}
          >
            <div className="flex flex-col items-center space-y-2">
              <span>了解更多</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};