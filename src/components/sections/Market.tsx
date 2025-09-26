import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Globe, Target, BarChart3, PieChart as PieChartIcon } from 'lucide-react';
import { Card, StatCard } from '../ui/Card';
import { LineChart, PieChart, BarChart } from '../ui/Chart';
import { userSegments, marketTrends } from '../../data/marketData';
import { fadeInUp, staggerChildren } from '../../utils/animations';

/**
 * Market市场机会组件
 * 集成图表展示市场数据
 */
export const Market: React.FC = () => {
  // 市场趋势数据
  const trendChartData = {
    labels: marketTrends.map(trend => trend.year.toString()),
    datasets: [
      {
        label: '宠物市场',
        data: marketTrends.map(trend => trend.petMarket),
        borderColor: 'rgb(249, 115, 22)',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      },
      {
        label: '心理健康市场',
        data: marketTrends.map(trend => trend.mentalHealth),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      },
      {
        label: 'AI伴侣市场',
        data: marketTrends.map(trend => trend.aiCompanion),
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      }
    ]
  };

  // 用户群体分布数据
  const userSegmentData = {
    labels: userSegments.map(segment => segment.name),
    datasets: [
      {
        data: userSegments.map(segment => segment.percentage),
        backgroundColor: [
          'rgba(249, 115, 22, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(236, 72, 153, 0.8)'
        ],
        borderColor: [
          'rgb(249, 115, 22)',
          'rgb(59, 130, 246)',
          'rgb(16, 185, 129)',
          'rgb(139, 92, 246)',
          'rgb(236, 72, 153)'
        ],
        borderWidth: 2
      }
    ]
  };

  // 市场规模对比数据
  const marketSizeData = {
    labels: ['2023年', '2024年', '2025年', '2026年', '2027年'],
    datasets: [
      {
        label: 'AI伴侣市场',
        data: [50, 120, 280, 520, 850],
        backgroundColor: 'rgba(249, 115, 22, 0.8)',
        borderColor: 'rgb(249, 115, 22)',
        borderWidth: 2
      },
      {
        label: '传统宠物市场',
        data: [2400, 2520, 2650, 2780, 2920],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2
      }
    ]
  };

  // 核心市场数据
  const marketStats = [
    {
      value: '1200亿',
      label: '全球宠物市场规模',
      trend: { value: 8.2, isPositive: true },
      unit: '人民币'
    },
    {
      value: '850亿',
      label: 'AI伴侣预期市场',
      trend: { value: 45.6, isPositive: true },
      unit: '人民币'
    },
    {
      value: '2.8亿',
      label: '中国目标用户',
      trend: { value: 12.3, isPositive: true },
      unit: '人'
    },
    {
      value: '68%',
      label: '市场渗透潜力',
      trend: { value: 15.8, isPositive: true },
      unit: ''
    }
  ];

  // 目标市场特征
  const targetMarkets = [
    {
      title: '年轻专业人士',
      description: '25-35岁，高收入，工作繁忙，情感需求强烈',
      size: '8500万人',
      growth: '+15%',
      characteristics: ['高收入', '工作压力大', '社交时间少', '接受新技术']
    },
    {
      title: '空巢老人',
      description: '55-75岁，子女不在身边，需要情感陪伴',
      size: '1.2亿人',
      growth: '+8%',
      characteristics: ['情感孤独', '健康关注', '时间充裕', '消费能力强']
    },
    {
      title: '单身群体',
      description: '20-40岁，单身生活，寻求情感支持',
      size: '2.4亿人',
      growth: '+12%',
      characteristics: ['独立生活', '情感需求', '消费意愿强', '科技敏感']
    },
    {
      title: '特殊需求群体',
      description: '自闭症、抑郁症等需要特殊陪伴的人群',
      size: '3000万人',
      growth: '+20%',
      characteristics: ['特殊需求', '专业支持', '长期陪伴', '家庭支持']
    }
  ];

  return (
    <section id="market" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            市场机会分析
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            巨大的
            <span className="text-blue-600">市场潜力</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AI情感陪伴市场正处于爆发式增长期，传统宠物市场的数字化转型为我们提供了前所未有的机遇。
          </p>
        </motion.div>

        {/* 核心市场数据 */}
        <motion.div
          {...staggerChildren(0, 0.1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {marketStats.map((stat, index) => (
            <motion.div
              key={index}
              {...staggerChildren(index, 0.1)}
            >
              <StatCard
                value={stat.value}
                label={stat.label}
                trend={stat.trend}
                className="border-l-4 border-blue-500"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* 市场趋势图表 */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* 市场增长趋势 */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <LineChart
              title="相关市场增长趋势 (2020-2025)"
              data={trendChartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top' as const
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: '市场规模 (亿元)'
                    }
                  },
                  x: {
                    title: {
                      display: true,
                      text: '年份'
                    }
                  }
                }
              }}
            />
          </motion.div>

          {/* 用户群体分布 */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <PieChart
              title="目标用户群体分布"
              data={userSegmentData}
              options={{
                plugins: {
                  legend: {
                    position: 'bottom' as const
                  }
                }
              }}
            />
          </motion.div>
        </div>

        {/* 市场规模对比 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <BarChart
            title="AI伴侣市场 vs 传统宠物市场规模对比"
            data={marketSizeData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top' as const
                }
              },
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: '市场规模 (亿元)'
                  }
                }
              }
            }}
          />
        </motion.div>

        {/* 目标市场分析 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            核心
            <span className="text-blue-600">目标市场</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetMarkets.map((market, index) => (
              <motion.div
                key={index}
                {...staggerChildren(index, 0.1)}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {market.title}
                    </h4>
                    <div className="text-green-600 font-bold text-sm">
                      {market.growth}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {market.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {market.size}
                    </span>
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700 mb-2">核心特征:</div>
                    {market.characteristics.map((char, charIndex) => (
                      <div key={charIndex} className="flex items-center text-xs text-gray-500">
                        <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                        {char}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 市场机会总结 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              千亿级市场机遇
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              AI情感陪伴市场正处于爆发前夜，预计未来5年将达到850亿元规模。
              Mulfin有望成为这个新兴市场的领导者。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">全球化机遇</h4>
              <p className="text-sm text-gray-600">
                从中国市场起步，逐步扩展到全球市场
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">精准定位</h4>
              <p className="text-sm text-gray-600">
                聚焦高价值用户群体，实现快速增长
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">高速增长</h4>
              <p className="text-sm text-gray-600">
                预计年复合增长率超过45%
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};