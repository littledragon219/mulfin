import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Target, Users, Zap, Shield, Globe, Award } from 'lucide-react';
import { Card } from '../ui/Card';
import { PieChart, LineChart } from '../ui/Chart';
import { Button } from '../ui/Button';
import { fundingAllocation } from '../../data/businessData';
import { fadeInUp, staggerChildren } from '../../utils/animations';

/**
 * Funding融资需求组件
 * 展示资金需求和使用计划
 */
export const Funding: React.FC = () => {
  const [activeRound, setActiveRound] = useState<string>('A轮');

  // 融资轮次数据
  const fundingRounds = [
    {
      round: 'A轮',
      amount: '500万美元',
      timeline: '2024年Q2',
      status: 'current',
      description: '产品开发和市场验证',
      valuation: '2000万美元',
      equity: '25%',
      investors: ['知名VC', '产业基金', '天使投资人'],
      milestones: [
        '完成MVP产品开发',
        '获得1000+种子用户',
        '建立核心团队',
        '申请核心技术专利'
      ]
    },
    {
      round: 'B轮',
      amount: '1500万美元',
      timeline: '2025年Q2',
      status: 'planned',
      description: '规模化运营和市场扩张',
      valuation: '8000万美元',
      equity: '18%',
      investors: ['头部VC', '战略投资者', '国际基金'],
      milestones: [
        '用户规模达到10万+',
        '月收入突破100万',
        '进入3个新市场',
        '建立合作伙伴网络'
      ]
    },
    {
      round: 'C轮',
      amount: '3000万美元',
      timeline: '2026年Q4',
      status: 'future',
      description: '全球化布局和生态建设',
      valuation: '3亿美元',
      equity: '10%',
      investors: ['顶级VC', '主权基金', '科技巨头'],
      milestones: [
        '全球用户超过100万',
        '年收入达到5000万',
        '完成IPO准备',
        '建立行业标准'
      ]
    }
  ];

  // 投资亮点
  const investmentHighlights = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: '巨大市场机会',
      description: '全球AI伴侣市场预计2025年达到85亿美元，年复合增长率35%',
      color: 'blue'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '技术壁垒',
      description: '拥有多项核心AI技术专利，建立了强大的技术护城河',
      color: 'purple'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '明星团队',
      description: '核心团队来自顶级科技公司，拥有丰富的AI和硬件开发经验',
      color: 'green'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: '清晰商业模式',
      description: '多元化收入来源，已验证的商业模式和盈利路径',
      color: 'orange'
    }
  ];

  // 风险控制措施
  const riskMitigation = [
    {
      risk: '技术风险',
      mitigation: '建立多重技术方案，与顶级AI研究机构合作',
      level: 'low'
    },
    {
      risk: '市场风险',
      mitigation: '深度用户调研，灵活的产品迭代策略',
      level: 'medium'
    },
    {
      risk: '竞争风险',
      mitigation: '专利保护，快速产品迭代，建立用户粘性',
      level: 'medium'
    },
    {
      risk: '监管风险',
      mitigation: '积极参与行业标准制定，合规优先策略',
      level: 'low'
    }
  ];

  // 资金使用计划图表数据
  const fundingChartData = {
    labels: fundingAllocation.map(item => item.category),
    datasets: [{
      data: fundingAllocation.map(item => item.percentage),
      backgroundColor: [
        '#8B5CF6', // 紫色
        '#3B82F6', // 蓝色
        '#10B981', // 绿色
        '#F59E0B', // 橙色
        '#EF4444', // 红色
        '#6B7280'  // 灰色
      ],
      borderWidth: 0
    }]
  };

  // 投资回报预测数据
  const roiData = {
    labels: ['2024', '2025', '2026', '2027', '2028'],
    datasets: [{
      label: '估值 (百万美元)',
      data: [20, 80, 300, 800, 2000],
      borderColor: '#8B5CF6',
      backgroundColor: 'rgba(139, 92, 246, 0.1)',
      fill: true,
      tension: 0.4
    }]
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'text-green-600 bg-green-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'high':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current':
        return 'bg-blue-600 text-white';
      case 'planned':
        return 'bg-purple-600 text-white';
      case 'future':
        return 'bg-gray-400 text-white';
      default:
        return 'bg-gray-400 text-white';
    }
  };

  return (
    <section id="funding" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            <DollarSign className="w-4 h-4 mr-2" />
            融资需求
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            寻求
            <span className="text-green-600">战略投资</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            与优秀的投资伙伴携手，共同打造AI情感陪伴领域的领导品牌。
          </p>
        </motion.div>

        {/* 投资亮点 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            投资
            <span className="text-green-600">亮点</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                {...staggerChildren(index, 0.1)}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-${highlight.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <div className={`text-${highlight.color}-600`}>
                      {highlight.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 融资轮次 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            融资
            <span className="text-green-600">计划</span>
          </h3>
          
          {/* 轮次选择器 */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-md">
              {fundingRounds.map((round, index) => (
                <button
                  key={index}
                  onClick={() => setActiveRound(round.round)}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                    activeRound === round.round
                      ? getStatusColor(round.status)
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {round.round}
                </button>
              ))}
            </div>
          </div>

          {/* 选中轮次详情 */}
          {fundingRounds.map((round, roundIndex) => (
            activeRound === round.round && (
              <motion.div
                key={roundIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 bg-white">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-6">
                        <h4 className="text-2xl font-bold text-gray-900 mr-4">
                          {round.round}融资
                        </h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          round.status === 'current' ? 'bg-blue-100 text-blue-600' :
                          round.status === 'planned' ? 'bg-purple-100 text-purple-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {round.status === 'current' ? '进行中' :
                           round.status === 'planned' ? '计划中' : '未来规划'}
                        </span>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">融资金额:</span>
                          <span className="font-semibold text-green-600">{round.amount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">预计时间:</span>
                          <span className="font-semibold">{round.timeline}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">公司估值:</span>
                          <span className="font-semibold">{round.valuation}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">出让股权:</span>
                          <span className="font-semibold">{round.equity}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6">
                        {round.description}
                      </p>
                      
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 mb-3">
                          目标投资者类型
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {round.investors.map((investor, investorIndex) => (
                            <span
                              key={investorIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {investor}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-4">
                        关键里程碑
                      </h5>
                      <ul className="space-y-3">
                        {round.milestones.map((milestone, milestoneIndex) => (
                          <li key={milestoneIndex} className="flex items-center">
                            <Target className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{milestone}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {round.status === 'current' && (
                        <div className="mt-8">
                          <Button className="w-full">
                            联系我们讨论投资机会
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          ))}
        </motion.div>

        {/* 资金使用计划 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              资金使用计划
            </h3>
            <div className="h-64 mb-6">
              <PieChart data={fundingChartData} />
            </div>
            <div className="space-y-3">
              {fundingAllocation.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-700">{item.category}</span>
                  <span className="font-semibold">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </Card>
          
          <Card className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              投资回报预测
            </h3>
            <div className="h-64 mb-6">
              <LineChart data={roiData} />
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">
                预期回报
              </h4>
              <p className="text-green-700 text-sm">
                基于保守估计，A轮投资者在5年内可获得100倍回报
              </p>
            </div>
          </Card>
        </motion.div>

        {/* 风险控制 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            风险
            <span className="text-green-600">控制</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {riskMitigation.map((item, index) => (
              <motion.div
                key={index}
                {...staggerChildren(index, 0.1)}
              >
                <Card className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.risk}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      getRiskColor(item.level)
                    }`}>
                      {item.level === 'low' ? '低风险' :
                       item.level === 'medium' ? '中风险' : '高风险'}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {item.mitigation}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 投资者权益 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            投资者
            <span className="text-green-600">权益保障</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                法律保护
              </h4>
              <p className="text-gray-600 text-sm">
                完善的法律文件和投资者保护条款
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                信息透明
              </h4>
              <p className="text-gray-600 text-sm">
                定期财务报告和业务进展更新
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                优先权利
              </h4>
              <p className="text-gray-600 text-sm">
                后续融资的优先认购权和反稀释保护
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                治理参与
              </h4>
              <p className="text-gray-600 text-sm">
                董事会席位和重大决策参与权
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 font-medium mb-4">
              与Mulfin一起，共创AI情感陪伴的美好未来
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              立即联系投资团队
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};