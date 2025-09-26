import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Heart, AlertTriangle, DollarSign, Clock } from 'lucide-react';
import { Card, StatCard } from '../ui/Card';
import { BarChart, PieChart } from '../ui/Chart';
import { painPoints } from '../../data/marketData';
import { fadeInUp, staggerChildren } from '../../utils/animations';

/**
 * Problem问题分析组件
 * 展示市场痛点和数据可视化
 */
export const Problem: React.FC = () => {
  // 痛点数据可视化
  const painPointsChartData = {
    labels: painPoints.map(point => point.title),
    datasets: [
      {
        label: '统计数据',
        data: [68, 85, 130], // 对应各个痛点的统计数据
        backgroundColor: [
          'rgba(249, 115, 22, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(139, 92, 246, 0.8)'
        ],
        borderColor: [
          'rgb(249, 115, 22)',
          'rgb(59, 130, 246)',
          'rgb(16, 185, 129)',
          'rgb(139, 92, 246)'
        ],
        borderWidth: 2
      }
    ]
  };

  // 市场缺口数据
  const marketGapData = {
    labels: ['情感陪伴需求', '现有解决方案', '市场缺口'],
    datasets: [
      {
        data: [85, 25, 60],
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(249, 115, 22, 0.8)'
        ],
        borderColor: [
          'rgb(239, 68, 68)',
          'rgb(34, 197, 94)',
          'rgb(249, 115, 22)'
        ],
        borderWidth: 2
      }
    ]
  };

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            现代社会的
            <span className="text-orange-600">情感困境</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            在快节奏的现代生活中，越来越多的人面临着情感孤独、心理压力和缺乏陪伴的问题。
            传统的解决方案已经无法满足人们日益增长的情感需求。
          </p>
        </motion.div>

        {/* 核心统计数据 */}
        <motion.div
          {...staggerChildren(0, 0.1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <StatCard
            value="73%"
            label="成年人感到孤独"
            trend={{ value: 15, isPositive: false }}
          />
          <StatCard
            value="2.8亿"
            label="中国单身人群"
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            value="¥3000+"
            label="月均宠物支出"
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            value="24/7"
            label="情感需求时间"
          />
        </motion.div>

        {/* 主要痛点分析 */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* 痛点列表 */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
              核心痛点分析
            </h3>
            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  {...staggerChildren(index, 0.1)}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-orange-100 rounded-lg">
                        {point.icon === 'Users' && <Users className="w-6 h-6 text-orange-600" />}
                        {point.icon === 'DollarSign' && <DollarSign className="w-6 h-6 text-orange-600" />}
                        {point.icon === 'Brain' && <Heart className="w-6 h-6 text-orange-600" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {point.title}
                        </h4>
                        <p className="text-gray-600 mb-3">{point.description}</p>
                        <div className="flex items-center text-sm text-orange-600">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {point.statistic}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 数据可视化 */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* 痛点影响人群图表 */}
            <BarChart
              title="各类痛点影响人群分布"
              data={painPointsChartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: '影响人群(百万人)'
                    }
                  }
                }
              }}
            />

            {/* 市场缺口分析 */}
            <PieChart
              title="情感陪伴市场缺口分析"
              data={marketGapData}
              type="doughnut"
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

        {/* 问题总结 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            市场急需创新解决方案
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
            传统的情感支持方式存在时间限制、成本高昂、可及性差等问题。
            市场迫切需要一种全天候、智能化、可负担的情感陪伴解决方案。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">60%</div>
              <div className="text-sm text-gray-600">市场缺口</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000亿+</div>
              <div className="text-sm text-gray-600">潜在市场规模</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">用户需求强度</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};