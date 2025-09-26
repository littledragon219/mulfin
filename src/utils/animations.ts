// 动画配置工具函数

/**
 * 淡入动画配置
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

/**
 * 淡入动画配置（从左侧）
 */
export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

/**
 * 淡入动画配置（从右侧）
 */
export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

/**
 * 缩放淡入动画配置
 */
export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

/**
 * 交错动画配置
 * @param index 元素索引
 * @param delay 基础延迟时间
 */
export const staggerChildren = (index: number, delay: number = 0.1) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: index * delay }
});

/**
 * 容器交错动画配置
 */
export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

/**
 * 悬停效果配置
 */
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 }
};

/**
 * 浮动动画配置
 */
export const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

/**
 * 脉冲动画配置
 */
export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

/**
 * 旋转动画配置
 */
export const rotateAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

/**
 * 渐变背景动画配置
 */
export const gradientAnimation = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

/**
 * 数字计数动画
 * @param from 起始值
 * @param to 结束值
 * @param duration 动画时长
 */
export const countUpAnimation = (from: number, to: number, duration: number = 2) => ({
  initial: { value: from },
  whileInView: { value: to },
  viewport: { once: true },
  transition: { duration, ease: "easeOut" }
});