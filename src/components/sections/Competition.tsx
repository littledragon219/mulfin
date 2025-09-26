import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Shield, Star, TrendingUp, Award, CheckCircle, X } from 'lucide-react';
import { Card } from '../ui/Card';
import { ScatterChart } from '../ui/Chart';
import { competitors, competitiveAdvantages } from '../../data/competitorData';
import { fadeInUp, staggerChildren } from '../../utils/animations';

/**
 * Competition竞争分析组件
 * 包含2x2定位图和对比分析
 */
export const Competition: React.FC = () => {
  const [selectedCompetitor, setSelectedCompetitor] = useState<string | null>(null);

  // 2x2定位图数据
  const positioningData = {
    datasets: [
      {
        label: '竞争对手定位',
        data: competitors.map(competitor => ({
          x: competitor.intelligence,
          y: competitor.price,
          label: competitor.name,
          backgroundColor: competitor.name === 'Mulfin' ? 'rgba(249, 115, 22, 0.8)' : 'rgba(59, 130, 246, 0.6)',
          borderColor: competitor.name === 'Mulfin' ? 'rgb(249, 115, 22)' : 'rgb(59, 130, 246)',
          borderWidth: competitor.name === 'Mulfin' ? 3 : 2,
          pointRadius: competitor.name === 'Mulfin' ? 12 : 8
        })),
        showLine: false
      }
    ]
  };

  // 功能对比数据
  const featureComparison = [
    {
      feature: 'AI情感识别',
      mulfin: true,
      competitor1: false,
      competitor2: true,
      competitor3: false
    },
    {
      feature: '硬件交互',
      mulfin: true,
      competitor1: false,
      competitor2: false,
      competitor3: true
    },
    {
      feature: '24/7陪伴',
      mulfin: true,
      competitor1: true,
      competitor2: true,
      competitor3: false
    },
    {
      feature: '个性化学习',
      mulfin: true,
      competitor1: false,
      competitor2: true,
      competitor3: false
    },
    {
      feature: '隐私保护',
      mulfin: true,
      competitor1: false,
      competitor2: false,
      competitor3: true
    },
    {
      feature: '多模态交互',
      mulfin: true,
      competitor1: false,
      competitor2: false,
      competitor3: false
    },
    {
      feature: '情感数据分析',
      mulfin: true,
      competitor1: false,
      competitor2: true,
      competitor3: false
    },
    {
      feature: '社区功能',
      mulfin: true,
      competitor1: true,
      competitor2: false,
      competitor3: false
    }
  ];

  // 市场定位象限
  const marketQuadrants = [
    {
      title: '高智能 + 高价格',
      description: '专业级AI伴侣，面向高端用户',
      position: 'top-right',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      title: '高智能 + 低价格',
      description: 'Mulfin的目标定位，高性价比',
      position: 'bottom-right',
      color: 'bg-orange-100 text-orange-700'
    },
    {
      title: '低智能 + 高价格',
      description: '传统宠物机器人，功能有限',
      position: 'top-left',
      color: 'bg-red-100 text-red-700'
    },
    {
      title: '低智能 + 低价格',
      description: '基础陪伴产品，功能简单',
      position: 'bottom-left',
      color: 'bg-gray-100 text-gray-700'
    }
  ];

  return (
    <section id="competition" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4 mr-2" />
            竞争分析
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            市场
            <span className="text-purple-600">竞争格局</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            通过深入的竞争分析，我们明确了Mulfin在AI情感陪伴市场中的独特定位和竞争优势。
          </p>
        </motion.div>

        {/* 2x2定位图 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            市场定位分析
          </h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="relative">
              <ScatterChart
                title="智能化程度 vs 价格定位"
                data={positioningData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      display: false
                    },
                    tooltip: {
                      callbacks: {
                        label: function(context: any) {
                          return `${context.raw.label}: 智能度${context.parsed.x}, 价格${context.parsed.y}`;
                        }
                      }
                    }
                  },
                  scales: {
                    x: {
                      title: {
                        display: true,
                        text: '智能化程度 →'
                      },
                      min: 0,
                      max: 10
                    },
                    y: {
                      title: {
                        display: true,
                        text: '价格水平 →'
                      },
                      min: 0,
                      max: 10
                    }
                  }
                }}
              />
            </div>
            
            {/* 象限说明 */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {marketQuadrants.map((quadrant, index) => (
                <motion.div
                  key={index}
                  {...staggerChildren(index, 0.1)}
                  className={`p-4 rounded-lg ${quadrant.color}`}
                >
                  <h4 className="font-semibold mb-2">{quadrant.title}</h4>
                  <p className="text-sm">{quadrant.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 竞争对手详细分析 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            主要竞争对手分析
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitors.map((competitor, index) => (
              <motion.div
                key={index}
                {...staggerChildren(index, 0.1)}
                onClick={() => setSelectedCompetitor(
                  selectedCompetitor === competitor.name ? null : competitor.name
                )}
                className="cursor-pointer"
              >
                <Card className={`p-6 h-full transition-all duration-300 hover:shadow-xl ${
                  competitor.name === 'Mulfin' 
                    ? 'border-2 border-orange-500 bg-orange-50' 
                    : selectedCompetitor === competitor.name
                    ? 'border-2 border-blue-500 bg-blue-50'
                    : 'hover:border-gray-300'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {competitor.name}
                    </h4>
                    {competitor.name === 'Mulfin' && (
                      <Award className="w-5 h-5 text-orange-600" />
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {competitor.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">智能化程度</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < competitor.intelligence / 2 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">价格水平</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${
                              i < competitor.price / 2 
                                ? 'text-green-600' 
                                : 'text-gray-300'
                            }`}
                          >
                            ¥
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {selectedCompetitor === competitor.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <div className="space-y-2">
                        <div>
                          <span className="text-xs font-medium text-green-600">优势:</span>
                          <ul className="text-xs text-gray-600 mt-1">
                            {competitor.strengths.map((strength, i) => (
                              <li key={i} className="flex items-center">
                                <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                                {strength}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="text-xs font-medium text-red-600">劣势:</span>
                          <ul className="text-xs text-gray-600 mt-1">
                            {competitor.weaknesses.map((weakness, i) => (
                              <li key={i} className="flex items-center">
                                <X className="w-3 h-3 text-red-500 mr-1 flex-shrink-0" />
                                {weakness}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 功能对比表 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            核心功能对比
          </h3>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">功能特性</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-orange-600">Mulfin</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">竞品A</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">竞品B</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">竞品C</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {featureComparison.map((row, index) => (
                    <motion.tr
                      key={index}
                      {...staggerChildren(index, 0.05)}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-sm text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.mulfin ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.competitor1 ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.competitor2 ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.competitor3 ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mx-auto" />
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* 竞争优势总结 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Mulfin的
            <span className="text-orange-600">核心竞争优势</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                {...staggerChildren(index, 0.1)}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {advantage.category === '技术领先' && <Zap className="w-8 h-8 text-orange-600" />}
                  {advantage.category === '用户体验' && <Star className="w-8 h-8 text-orange-600" />}
                  {advantage.category === '市场定位' && <Target className="w-8 h-8 text-orange-600" />}
                  {advantage.category === '数据安全' && <Shield className="w-8 h-8 text-orange-600" />}
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
              通过技术创新和精准定位，Mulfin将在AI情感陪伴市场中建立强大的竞争壁垒
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};