import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { scrollToElement, useScrollSpy } from '../utils/scroll';
import { cn } from '../lib/utils';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: '首页', href: '#hero' },
  { id: 'problem', label: '问题分析', href: '#problem' },
  { id: 'solution', label: '解决方案', href: '#solution' },
  { id: 'product', label: '产品详解', href: '#product' },
  { id: 'market', label: '市场机会', href: '#market' },
  { id: 'competition', label: '竞争分析', href: '#competition' },
  { id: 'business', label: '商业模式', href: '#business' },
  { id: 'team', label: '团队介绍', href: '#team' },
  { id: 'roadmap', label: '发展规划', href: '#roadmap' },
  { id: 'funding', label: '融资需求', href: '#funding' },
  { id: 'contact', label: '联系我们', href: '#contact' }
];

/**
 * Header导航组件
 * 支持锚点跳转、平滑滚动、响应式设计和滚动监听
 */
export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 滚动监听，更新活跃导航项
  useEffect(() => {
    const sections = navItems.map(item => item.id);
    const cleanup = useScrollSpy(sections, setActiveSection, 100);
    return cleanup;
  }, []);

  // 处理导航点击
  const handleNavClick = (href: string) => {
    const elementId = href.replace('#', '');
    scrollToElement(elementId, 80);
    setIsMobileMenuOpen(false);
  };

  // 切换移动端菜单
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick('#hero')}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className={cn(
              'text-xl font-bold transition-colors duration-300',
              isScrolled ? 'text-gray-900' : 'text-white'
            )}>
              Mulfin
            </span>
          </motion.div>

          {/* 桌面端导航 */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-orange-50',
                  activeSection === item.id
                    ? 'text-orange-600 bg-orange-50'
                    : isScrolled
                    ? 'text-gray-700 hover:text-orange-600'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                )}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA按钮 */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavClick('#contact')}
              className={cn(
                'transition-all duration-300',
                isScrolled
                  ? 'border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-orange-600'
              )}
            >
              联系我们
            </Button>
            <Button
              size="sm"
              onClick={() => handleNavClick('#funding')}
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              投资机会
            </Button>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            onClick={toggleMobileMenu}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors duration-300',
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                'block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300',
                activeSection === item.id
                  ? 'text-orange-600 bg-orange-50'
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              )}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 space-y-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavClick('#contact')}
              className="w-full border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              联系我们
            </Button>
            <Button
              size="sm"
              onClick={() => handleNavClick('#funding')}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white"
            >
              投资机会
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};