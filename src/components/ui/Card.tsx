import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * 通用卡片组件
 * 支持悬停效果、不同内边距和阴影级别
 */
export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  padding = 'md',
  shadow = 'md'
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };
  
  const baseClasses = 'bg-white rounded-xl border border-gray-100';
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-300' : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -4 } : {}}
      className={cn(
        baseClasses,
        paddingClasses[padding],
        shadowClasses[shadow],
        hoverClasses,
        className
      )}
    >
      {children}
    </motion.div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

/**
 * 功能特性卡片组件
 * 专门用于展示产品功能特性
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className
}) => {
  return (
    <Card className={cn('text-center', className)}>
      <div className="flex flex-col items-center space-y-4">
        <div className="p-3 bg-orange-100 rounded-full text-orange-500">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </Card>
  );
};

interface StatCardProps {
  value: string | number;
  label: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

/**
 * 统计数据卡片组件
 * 用于展示关键指标和数据
 */
export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  trend,
  className
}) => {
  return (
    <Card className={cn('text-center', className)}>
      <div className="space-y-2">
        <div className="text-3xl font-bold text-gray-900">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
        {trend && (
          <div className={cn(
            'text-xs font-medium',
            trend.isPositive ? 'text-green-600' : 'text-red-600'
          )}>
            {trend.isPositive ? '↗' : '↘'} {Math.abs(trend.value)}%
          </div>
        )}
      </div>
    </Card>
  );
};