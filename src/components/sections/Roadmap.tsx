import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Clock, Target, Zap, Rocket, Star, TrendingUp } from 'lucide-react';
import { Card } from '../ui/Card';
import { milestones, developmentPhases } from '../../data/milestoneData';
import { fadeInUp, staggerChildren } from '../../utils/animations';

/**
 * Roadmap发展规划组件
 * 展示项目里程碑和未来计划
 */
export const Roadmap: React.FC = () => {
  const [activePhase, setActivePhase] = useState<string>(developmentPhases[0]?.name || '');
  const [viewMode, setViewMode] = useState<'timeline' | 'phases'>('timeline');

  // 里程碑状态图标映射
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'in_progress':
        return <Clock className="w-5 h-5 text-blue-600" />;
      case 'planned':
        return <Target className="w-5 h-5 text-gray-400" />;
      default:
        return <Target className="w-5 h-5 text-gray-400" />;
    }
  };

  // 里程碑状态颜色映射
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 border-green-300 text-green-800';
      case 'in_progress':
        return 'bg-blue-100 border-blue-300 text-blue-800';
      case 'planned':
        return 'bg-gray-100 border-gray-300 text-gray-600';
      default:
        return 'bg-gray-100 border-gray-300 text-gray-600';
    }
  };

  // 阶段图标映射
  const getPhaseIcon = (phase: string) => {
    switch (phase) {
      case '产品研发阶段':
        return <Zap className="w-6 h-6" />;
      case '市场验证阶段':
        return <Target className="w-6 h-6" />;
      case '规模化阶段':
        return <Rocket className="w-6 h-6" />;
      case '生态建设阶段':
        return <Star className="w-6 h-6" />;
      default:
        return <TrendingUp className="w-6 h-6" />;
    }
  };

  // 统计数据
  const roadmapStats = [
    {
      label: '已完成',
      value: milestones.filter(m => m.status === 'completed').length,
      total: milestones.length,
      color: 'green'
    },
    {
      label: '进行中',
      value: milestones.filter(m => m.status === 'in_progress').length,
      total: milestones.length,
      color: 'blue'
    },
    {
      label: '计划中',
      value: milestones.filter(m => m.status === 'planned').length,
      total: milestones.length,
      color: 'gray'
    },
    {
      label: '总进度',
      value: Math.round((milestones.filter(m => m.status === 'completed').length / milestones.length) * 100),
      total: 100,
      color: 'purple',
      suffix: '%'
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            发展规划
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            清晰的
            <span className="text-purple-600">发展路线</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            基于市场需求和技术发展，制定了明确的产品发展路线图和里程碑计划。
          </p>
        </motion.div>

        {/* 进度统计 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {roadmapStats.map((stat, index) => {
            return (
              <motion.div
                key={index}
                {...staggerChildren(index, 0.1)}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <h3 className={`text-2xl font-bold mb-1 text-${stat.color}-600`}>
                  {stat.value}{stat.suffix || ''}
                </h3>
                <p className="text-sm font-medium text-gray-700 mb-1">
                  {stat.label}
                </p>
                {!stat.suffix && (
                  <p className="text-xs text-gray-500">
                    共 {stat.total} 项
                  </p>
                )}
                <div className={`w-full bg-gray-200 rounded-full h-2 mt-3`}>
                  <div
                    className={`bg-${stat.color}-600 h-2 rounded-full transition-all duration-1000`}
                    style={{ 
                      width: `${stat.suffix ? stat.value : (stat.value / stat.total) * 100}%` 
                    }}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 视图切换 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                viewMode === 'timeline'
                  ? 'bg-white text-purple-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              时间线视图
            </button>
            <button
              onClick={() => setViewMode('phases')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                viewMode === 'phases'
                  ? 'bg-white text-purple-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              阶段视图
            </button>
          </div>
        </motion.div>

        {/* 时间线视图 */}
        {viewMode === 'timeline' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-16"
          >
            {/* 时间线主轴 */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  {...staggerChildren(index, 0.1)}
                  className="relative flex items-start"
                >
                  {/* 时间线节点 */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 ${
                    getStatusColor(milestone.status)
                  } bg-white`}>
                    {getStatusIcon(milestone.status)}
                  </div>
                  
                  {/* 里程碑内容 */}
                  <div className="ml-8 flex-1">
                    <Card className={`p-6 hover:shadow-lg transition-all duration-300 ${
                      milestone.status === 'completed' ? 'border-l-4 border-l-green-500' :
                      milestone.status === 'in_progress' ? 'border-l-4 border-l-blue-500' :
                      'border-l-4 border-l-gray-300'
                    }`}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {milestone.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {milestone.date}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              getStatusColor(milestone.status)
                            }`}>
                              {milestone.status === 'completed' ? '已完成' :
                               milestone.status === 'in_progress' ? '进行中' : '计划中'}
                            </span>
                          </div>
                        </div>
                        {milestone.status === 'completed' && (
                          <div className="text-green-600">
                            <CheckCircle className="w-6 h-6" />
                          </div>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {milestone.description}
                      </p>
                      
                      {milestone.deliverables && milestone.deliverables.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">
                            主要交付物:
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {milestone.deliverables.map((deliverable, deliverableIndex) => (
                              <li key={deliverableIndex} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 阶段视图 */}
        {viewMode === 'phases' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            {/* 阶段选择器 */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {developmentPhases.map((phaseData, index) => {
                const Icon = getPhaseIcon(phaseData.name);
                return (
                  <button
                    key={index}
                    onClick={() => setActivePhase(phaseData.name)}
                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activePhase === phaseData.name
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <span className="mr-2">{Icon}</span>
                    {phaseData.name}
                  </button>
                );
              })}
            </div>

            {/* 选中阶段的详细信息 */}
            {developmentPhases.map((phaseData, phaseIndex) => (
              activePhase === phaseData.name && (
                <motion.div
                  key={phaseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-8 mb-8 bg-gradient-to-r from-purple-50 to-blue-50">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        {getPhaseIcon(phaseData.name)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {phaseData.name}
                        </h3>
                        <p className="text-purple-600 font-medium">
                          {phaseData.duration}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-lg mb-6">
                      {phaseData.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          核心目标
                        </h4>
                        <ul className="space-y-2">
                          {phaseData.keyObjectives.map((objective, objectiveIndex) => (
                            <li key={objectiveIndex} className="flex items-center text-gray-700">
                              <Target className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                              {objective}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          关键里程碑
                        </h4>
                        <ul className="space-y-2">
                          {phaseData.milestones.map((milestoneId, milestoneIndex) => {
                            const milestone = milestones.find(m => m.id === milestoneId);
                            return (
                              <li key={milestoneIndex} className="flex items-center text-gray-700">
                                <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                                {milestone?.title || milestoneId}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            ))}
          </motion.div>
        )}

        {/* 未来展望 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            未来
            <span className="text-purple-600">发展愿景</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                技术领先
              </h4>
              <p className="text-gray-600 text-sm">
                持续投入研发，保持AI情感陪伴技术的行业领先地位
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                市场扩张
              </h4>
              <p className="text-gray-600 text-sm">
                从核心用户群体出发，逐步扩展到更广泛的市场领域
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                生态建设
              </h4>
              <p className="text-gray-600 text-sm">
                构建完整的AI伴侣生态系统，连接用户、开发者和合作伙伴
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                持续创新
              </h4>
              <p className="text-gray-600 text-sm">
                基于用户反馈和技术发展，持续优化产品和服务体验
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 font-medium">
              通过清晰的发展路线图，Mulfin将成为AI情感陪伴领域的领导者
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};