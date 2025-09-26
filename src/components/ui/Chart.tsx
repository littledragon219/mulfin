import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ScatterController,
  BubbleController
} from 'chart.js';
import { Line, Bar, Pie, Doughnut, Scatter } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { Card } from './Card';

// 注册Chart.js组件
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ScatterController,
  BubbleController
);

interface ChartContainerProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * 图表容器组件
 * 为图表提供统一的容器和标题
 */
export const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  children,
  className
}) => {
  return (
    <Card className={className}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </Card>
  );
};

interface LineChartProps {
  data: any;
  options?: any;
  title?: string;
  className?: string;
}

/**
 * 折线图组件
 * 用于展示趋势数据
 */
export const LineChart: React.FC<LineChartProps> = ({
  data,
  options,
  title,
  className
}) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    ...options,
  };

  return (
    <ChartContainer title={title} className={className}>
      <div className="h-64">
        <Line data={data} options={defaultOptions} />
      </div>
    </ChartContainer>
  );
};

interface PieChartProps {
  data: any;
  options?: any;
  title?: string;
  className?: string;
  type?: 'pie' | 'doughnut';
}

/**
 * 饼图组件
 * 用于展示占比数据
 */
export const PieChart: React.FC<PieChartProps> = ({
  data,
  options,
  title,
  className,
  type = 'pie'
}) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
    ...options,
  };

  const ChartComponent = type === 'doughnut' ? Doughnut : Pie;

  return (
    <ChartContainer title={title} className={className}>
      <div className="h-64">
        <ChartComponent data={data} options={defaultOptions} />
      </div>
    </ChartContainer>
  );
};

interface BarChartProps {
  data: any;
  options?: any;
  title?: string;
  className?: string;
}

/**
 * 柱状图组件
 * 用于展示对比数据
 */
export const BarChart: React.FC<BarChartProps> = ({
  data,
  options,
  title,
  className
}) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    ...options,
  };

  return (
    <ChartContainer title={title} className={className}>
      <div className="h-64">
        <Bar data={data} options={defaultOptions} />
      </div>
    </ChartContainer>
  );
};

interface ScatterChartProps {
  data: any;
  options?: any;
  title?: string;
  className?: string;
}

/**
 * 散点图组件
 * 用于展示竞争对手定位等二维数据
 */
export const ScatterChart: React.FC<ScatterChartProps> = ({
  data,
  options,
  title,
  className
}) => {
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: (${context.parsed.x}, ${context.parsed.y})`;
          }
        }
      }
    },
    scales: {
      x: {
        type: 'linear' as const,
        position: 'bottom' as const,
        min: 0,
        max: 10,
        title: {
          display: true,
          text: '价格水平'
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      y: {
        min: 0,
        max: 10,
        title: {
          display: true,
          text: '智能化程度'
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    ...options,
  };

  return (
    <ChartContainer title={title} className={className}>
      <div className="h-80">
        <Scatter data={data} options={defaultOptions} />
      </div>
    </ChartContainer>
  );
};