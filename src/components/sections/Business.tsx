import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Target, Users, Zap, Globe, BarChart3, PieChart as PieChartIcon } from 'lucide-react';
import { Card, StatCard } from '../ui/Card';
import { LineChart, PieChart, BarChart } from '../ui/Chart';
import { 
  revenueStreams, 
  channels, 
  fundingAllocation, 
  financialProjections, 
  businessMetrics,
  businessAdvantages 
} from '../../data/businessData';
import { fadeInUp, staggerChildren } from '../../utils/animations';

/**
 * Business商业模式组件
 * 展示收入模式和财务预测
 */
export const Business: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'revenue' | 'channels' | 'funding' | 'projections'>('revenue');

  // 收入结构饼图数据
  const revenueChartData = {
    labels: revenueStreams.map(stream => stream.name),
    datasets: [
      {
        data: revenueStreams.map(stream => stream.percentage),
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

  // 财务预测线图数据
  const projectionChartData = {
    labels: financialProjections.map(proj => proj.year),
    datasets: [
      {
        label: '收入 (万元)',
        data: financialProjections.map(proj => proj.revenue),
        borderColor: 'rgb(249, 115, 22)',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        tension: 0.4,
        fill: true
      },
      {
        label: '利润 (万元)',
        data: financialProjections.map(proj => proj.profit),
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  // 资金分配柱状图数据
  const fundingChartData = {
    labels: fundingAllocation.map(item => item.category),
    datasets: [
      {
        label: '资金分配 (万元)',
        data: fundingAllocation.map(item => item.amount),
        backgroundColor: 'rgba(249, 115, 22, 0.8)',
        borderColor: 'rgb(249, 115, 22)',
        borderWidth: 2
      }
    ]
  };

  // 渠道效果对比数据
  const channelChartData = {
    labels: channels.map(channel => channel.name),
    datasets: [
      {
        label: '预期转化率 (%)',
        data: channels.map(channel => channel.conversionRate),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2
      }
    ]
  };

  const tabs = [
    { id: 'revenue', label: '收入模式', icon: DollarSign },
    { id: 'channels', label: '销售渠道', icon: Target },
    { id: 'funding', label: '资金规划', icon: BarChart3 },
    { id: 'projections', label: '财务预测', icon: TrendingUp }
  ];

  return (
    <section id="business" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            <DollarSign className="w-4 h-4 mr-2" />
            商业模式
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            可持续的
            <span className="text-green-600">商业模式</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            基于多元化收入结构和精准市场定位，构建可持续增长的商业生态系统。
          </p>
        </motion.div>

        {/* 核心商业指标 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {Object.entries(businessMetrics).map(([key, value], index) => (
            <motion.div
              key={index}
              {...staggerChildren(index, 0.1)}
            >
              <StatCard
                title={key === 'targetPrice' ? '目标售价' :
                       key === 'grossMargin' ? '毛利率' :
                       key === 'customerAcquisitionCost' ? '获客成本' :
                       key === 'customerLifetimeValue' ? '客户生命周期价值' :
                       key === 'monthlyChurnRate' ? '月流失率' :
                       key === 'averageOrderValue' ? '平均订单价值' :
                       key === 'paybackPeriod' ? '投资回收期' : key}
                value={typeof value === 'number' ? 
                       (key === 'targetPrice' || key === 'customerAcquisitionCost' || key === 'customerLifetimeValue' || key === 'averageOrderValue' ? `¥${value}` :
                        key === 'grossMargin' || key === 'monthlyChurnRate' ? `${value}%` :
                        key === 'paybackPeriod' ? `${value}个月` : value.toString()) : value}
                subtitle={key === 'targetPrice' ? '产品定价策略' :
                         key === 'grossMargin' ? '盈利能力指标' :
                         key === 'customerAcquisitionCost' ? '营销效率' :
                         key === 'customerLifetimeValue' ? '用户价值' :
                         key === 'monthlyChurnRate' ? '用户留存' :
                         key === 'averageOrderValue' ? '销售效率' :
                         key === 'paybackPeriod' ? '资金回收' : ''}
                color="green"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* 选项卡导航 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 选项卡内容 */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          {activeTab === 'revenue' && (
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <PieChartIcon className="w-5 h-5 mr-2 text-green-600" />
                  收入结构分析
                </h3>
                <PieChart
                  title="收入来源分布"
                  data={revenueChartData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'bottom' as const
                      },
                      tooltip: {
                        callbacks: {
                          label: function(context: any) {
                            return `${context.label}: ${context.parsed}%`;
                          }
                        }
                      }
                    }
                  }}
                />
              </Card>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  收入模式详解
                </h3>
                {revenueStreams.map((stream, index) => (
                  <motion.div
                    key={index}
                    {...staggerChildren(index, 0.1)}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {stream.name}
                        </h4>
                        <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                          {stream.percentage}%
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {stream.description}
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">预期年收入</span>
                        <span className="font-medium text-gray-900">
                          {stream.expectedRevenue}
                        </span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'channels' && (
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  渠道转化率对比
                </h3>
                <BarChart
                  title="各渠道预期转化率"
                  data={channelChartData}
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
                          text: '转化率 (%)'
                        }
                      }
                    }
                  }}
                />
              </Card>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  销售渠道策略
                </h3>
                {channels.map((channel, index) => (
                  <motion.div
                    key={index}
                    {...staggerChildren(index, 0.1)}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {channel.name}
                        </h4>
                        <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                          {channel.conversionRate}%
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {channel.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">投入成本</span>
                          <p className="font-medium text-gray-900">{channel.cost}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">预期ROI</span>
                          <p className="font-medium text-gray-900">{channel.roi}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'funding' && (
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  资金分配计划
                </h3>
                <BarChart
                  title="资金使用分配"
                  data={fundingChartData}
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
                          text: '金额 (万元)'
                        }
                      }
                    }
                  }}
                />
              </Card>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  资金使用详情
                </h3>
                {fundingAllocation.map((item, index) => (
                  <motion.div
                    key={index}
                    {...staggerChildren(index, 0.1)}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {item.category}
                        </h4>
                        <span className="text-sm font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                          {item.amount}万元
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">占比</span>
                        <span className="font-medium text-gray-900">
                          {item.percentage}%
                        </span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'projections' && (
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  财务增长预测
                </h3>
                <LineChart
                  title="收入与利润预测 (2024-2028)"
                  data={projectionChartData}
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
                          text: '金额 (万元)'
                        }
                      }
                    }
                  }}
                />
              </Card>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {financialProjections.map((projection, index) => (
                  <motion.div
                    key={index}
                    {...staggerChildren(index, 0.1)}
                  >
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        {projection.year}年
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-500">预期收入</p>
                          <p className="text-xl font-bold text-green-600">
                            {projection.revenue}万元
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">预期利润</p>
                          <p className="text-lg font-semibold text-blue-600">
                            {projection.profit}万元
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">用户规模</p>
                          <p className="text-lg font-semibold text-purple-600">
                            {projection.users}万人
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* 商业优势总结 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            核心
            <span className="text-green-600">商业优势</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                {...staggerChildren(index, 0.1)}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {advantage.category === '多元收入' && <DollarSign className="w-8 h-8 text-green-600" />}
                  {advantage.category === '规模效应' && <TrendingUp className="w-8 h-8 text-green-600" />}
                  {advantage.category === '用户粘性' && <Users className="w-8 h-8 text-green-600" />}
                  {advantage.category === '技术壁垒' && <Zap className="w-8 h-8 text-green-600" />}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {advantage.category}
                </h4>
                <p className="text-gray-600 text-sm">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 font-medium">
              通过多元化收入模式和精准市场策略，实现可持续的商业增长
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};