import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { Product } from './components/sections/Product';
import { Market } from './components/sections/Market';
import { Competition } from './components/sections/Competition';
import { Business } from './components/sections/Business';
import { Team } from './components/sections/Team';
import { Roadmap } from './components/sections/Roadmap';
import { Funding } from './components/sections/Funding';
import { Contact } from './components/sections/Contact';

/**
 * Mulfin AI情绪伙伴投资人展示网站主应用组件
 * 整合所有页面区域，提供完整的投资人展示体验
 */
function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <Header />
      
      {/* 主要内容区域 */}
      <main>
        {/* 首页英雄区 */}
        <Hero />
        
        {/* 问题分析区 */}
        <Problem />
        
        {/* 解决方案区 */}
        <Solution />
        
        {/* 产品详解区 */}
        <Product />
        
        {/* 市场机会区 */}
        <Market />
        
        {/* 竞争分析区 */}
        <Competition />
        
        {/* 商业模式区 */}
        <Business />
        
        {/* 团队介绍区 */}
        <Team />
        
        {/* 发展规划区 */}
        <Roadmap />
        
        {/* 融资需求区 */}
        <Funding />
        
        {/* 联系我们区 */}
        <Contact />
      </main>
      
      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Mulfin</h3>
            <p className="text-gray-400 mb-4">
              AI情绪伙伴，温暖每一个心灵
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 Mulfin. All rights reserved.</span>
              <span>|</span>
              <span>隐私政策</span>
              <span>|</span>
              <span>服务条款</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
