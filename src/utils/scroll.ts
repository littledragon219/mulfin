// 滚动控制工具函数

/**
 * 平滑滚动到指定元素
 * @param elementId 目标元素ID
 * @param offset 偏移量（用于固定导航栏）
 */
export const scrollToElement = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * 滚动到页面顶部
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * 获取当前滚动位置
 */
export const getScrollPosition = () => {
  return window.pageYOffset || document.documentElement.scrollTop;
};

/**
 * 检查元素是否在视口中
 * @param element 目标元素
 * @param threshold 阈值（0-1）
 */
export const isElementInViewport = (element: Element, threshold: number = 0.1) => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

  return (vertInView && horInView);
};

/**
 * 节流函数
 * @param func 要执行的函数
 * @param wait 等待时间
 */
export const throttle = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout | null = null;
  let previous = 0;

  return function executedFunction(...args: any[]) {
    const now = Date.now();
    const remaining = wait - (now - previous);

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(this, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now();
        timeout = null;
        func.apply(this, args);
      }, remaining);
    }
  };
};

/**
 * 防抖函数
 * @param func 要执行的函数
 * @param wait 等待时间
 */
export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * 获取当前活跃的导航项
 * @param sections 所有区域的ID数组
 * @param offset 偏移量
 */
export const getActiveSection = (sections: string[], offset: number = 100): string => {
  const scrollPosition = getScrollPosition() + offset;

  for (let i = sections.length - 1; i >= 0; i--) {
    const element = document.getElementById(sections[i]);
    if (element) {
      const elementTop = element.offsetTop;
      if (scrollPosition >= elementTop) {
        return sections[i];
      }
    }
  }

  return sections[0] || '';
};

/**
 * 监听滚动事件并更新活跃导航项
 * @param sections 所有区域的ID数组
 * @param callback 回调函数
 * @param offset 偏移量
 */
export const useScrollSpy = (
  sections: string[],
  callback: (activeSection: string) => void,
  offset: number = 100
) => {
  const handleScroll = throttle(() => {
    const activeSection = getActiveSection(sections, offset);
    callback(activeSection);
  }, 100);

  window.addEventListener('scroll', handleScroll);
  
  // 返回清理函数
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};