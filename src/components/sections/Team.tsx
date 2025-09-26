import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Linkedin, Github, Mail, MapPin, Calendar, Star } from 'lucide-react';
import { Card } from '../ui/Card';
import { teamData } from '../../data/teamData';
import { fadeInUp, staggerChildren, hoverScale } from '../../utils/animations';

/**
 * Team团队介绍组件
 * 展示团队成员信息和组织架构
 */
export const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'grid' | 'org'>('grid');

  // 团队统计数据
  const teamStats = [
    {
      label: '团队成员',
      value: teamData.length,
      description: '核心团队规模',
      icon: Users,
      color: 'blue'
    },
    {
      label: '平均经验',
      value: '8+',
      description: '年行业经验',
      icon: Award,
      color: 'green'
    },
    {
      label: '技术专利',
      value: '12',
      description: '已申请专利',
      icon: Star,
      color: 'purple'
    },
    {
      label: '项目经验',
      value: '50+',
      description: '成功项目数',
      icon: Calendar,
      color: 'orange'
    }
  ];

  // 组织架构数据
  const orgStructure = {
    ceo: teamData.find(member => member.position.includes('CEO')),
    departments: [
      {
        name: '技术团队',
        lead: teamData.find(member => member.position.includes('CTO')),
        members: teamData.filter(member => 
          member.position.includes('技术') || member.position.includes('CTO')
        )
      },
      {
        name: '产品团队',
        lead: teamData.find(member => member.position.includes('产品')),
        members: teamData.filter(member => 
          member.position.includes('产品') || member.position.includes('设计')
        )
      },
      {
        name: '运营团队',
        lead: teamData.find(member => member.position.includes('运营')),
        members: teamData.filter(member => 
          member.position.includes('运营') || member.position.includes('市场')
        )
      }
    ]
  };

  // 技能标签颜色映射
  const skillColors: { [key: string]: string } = {
    'AI算法': 'bg-blue-100 text-blue-700',
    '机器学习': 'bg-green-100 text-green-700',
    '深度学习': 'bg-purple-100 text-purple-700',
    '产品设计': 'bg-pink-100 text-pink-700',
    '用户体验': 'bg-indigo-100 text-indigo-700',
    '市场营销': 'bg-orange-100 text-orange-700',
    '数据分析': 'bg-teal-100 text-teal-700',
    '项目管理': 'bg-red-100 text-red-700',
    '团队领导': 'bg-yellow-100 text-yellow-700',
    '战略规划': 'bg-gray-100 text-gray-700'
  };

  const getSkillColor = (skill: string): string => {
    return skillColors[skill] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            团队介绍
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            专业的
            <span className="text-blue-600">核心团队</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            汇聚AI、产品、运营等领域的资深专家，具备丰富的行业经验和成功项目背景。
          </p>
        </motion.div>

        {/* 团队统计 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {teamStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                {...staggerChildren(index, 0.1)}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-gray-700 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-500">
                  {stat.description}
                </p>
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
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveView('grid')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeView === 'grid'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              团队成员
            </button>
            <button
              onClick={() => setActiveView('org')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeView === 'org'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              组织架构
            </button>
          </div>
        </motion.div>

        {/* 团队成员网格视图 */}
        {activeView === 'grid' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {teamData.map((member, index) => (
              <motion.div
                key={index}
                {...staggerChildren(index, 0.1)}
                {...hoverScale}
                onClick={() => setSelectedMember(
                  selectedMember === member.name ? null : member.name
                )}
                className="cursor-pointer"
              >
                <Card className={`p-6 h-full transition-all duration-300 hover:shadow-xl ${
                  selectedMember === member.name
                    ? 'border-2 border-blue-500 bg-blue-50'
                    : 'hover:border-gray-300'
                }`}>
                  {/* 头像和基本信息 */}
                  <div className="text-center mb-6">
                    <div className="relative inline-block mb-4">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mb-2">
                      {member.position}
                    </p>
                    <div className="flex items-center justify-center text-xs text-gray-500 mb-4">
                      <MapPin className="w-3 h-3 mr-1" />
                      北京
                    </div>
                  </div>

                  {/* 简介 */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {member.bio}
                  </p>

                  {/* 技能标签 */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          getSkillColor(skill)
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                        +{member.skills.length - 3}
                      </span>
                    )}
                  </div>

                  {/* 联系方式 */}
                  <div className="flex justify-center space-x-3 pt-4 border-t border-gray-200">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>

                  {/* 展开的详细信息 */}
                  {selectedMember === member.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        全部技能
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              getSkillColor(skill)
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* 组织架构视图 */}
        {activeView === 'org' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            {/* CEO */}
            {orgStructure.ceo && (
              <div className="text-center mb-12">
                <motion.div
                  {...fadeInUp}
                  className="inline-block"
                >
                  <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
                    <div className="flex items-center space-x-4">
                      <img
                        src={orgStructure.ceo.avatar}
                        alt={orgStructure.ceo.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-gray-900">
                          {orgStructure.ceo.name}
                        </h3>
                        <p className="text-blue-600 font-medium">
                          {orgStructure.ceo.position}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {orgStructure.ceo.bio.slice(0, 60)}...
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            )}

            {/* 部门 */}
            <div className="grid md:grid-cols-3 gap-8">
              {orgStructure.departments.map((dept, deptIndex) => (
                <motion.div
                  key={deptIndex}
                  {...staggerChildren(deptIndex, 0.2)}
                  className="text-center"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-6">
                    {dept.name}
                  </h3>
                  
                  {/* 部门负责人 */}
                  {dept.lead && (
                    <div className="mb-6">
                      <Card className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 border border-blue-200">
                        <div className="flex items-center space-x-3">
                          <img
                            src={dept.lead.avatar}
                            alt={dept.lead.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                          />
                          <div className="text-left">
                            <h4 className="font-semibold text-gray-900">
                              {dept.lead.name}
                            </h4>
                            <p className="text-sm text-blue-600">
                              {dept.lead.position}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  )}
                  
                  {/* 部门成员 */}
                  <div className="space-y-3">
                    {dept.members.filter(member => member !== dept.lead).map((member, memberIndex) => (
                      <motion.div
                        key={memberIndex}
                        {...staggerChildren(memberIndex, 0.1)}
                      >
                        <Card className="p-3 hover:shadow-md transition-shadow">
                          <div className="flex items-center space-x-3">
                            <img
                              src={member.avatar}
                              alt={member.name}
                              className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                            />
                            <div className="text-left">
                              <h5 className="font-medium text-gray-900 text-sm">
                                {member.name}
                              </h5>
                              <p className="text-xs text-gray-600">
                                {member.role}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 团队优势总结 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            团队
            <span className="text-blue-600">核心优势</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                行业经验
              </h4>
              <p className="text-gray-600 text-sm">
                团队成员平均拥有8年以上相关行业经验，深度理解市场需求
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                技术实力
              </h4>
              <p className="text-gray-600 text-sm">
                拥有多项AI和硬件相关专利，技术实力获得行业认可
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                团队协作
              </h4>
              <p className="text-gray-600 text-sm">
                跨领域专业团队，具备完整的产品开发和市场推广能力
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                执行能力
              </h4>
              <p className="text-gray-600 text-sm">
                成功完成50+项目，具备强大的项目管理和执行能力
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 font-medium">
              专业、高效、创新的团队是Mulfin成功的核心保障
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};