import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, User, Building, MessageSquare } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { fadeInUp, staggerChildren } from '../../utils/animations';

/**
 * Contact联系我们组件
 * 提供联系表单和联系方式
 */
export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    investorType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 联系方式数据
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: '邮箱联系',
      content: 'contact@mulfin.ai',
      description: '商务合作与投资咨询',
      color: 'blue'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: '电话咨询',
      content: '+86 400-123-4567',
      description: '工作日 9:00-18:00',
      color: 'green'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: '公司地址',
      content: '北京市海淀区中关村软件园',
      description: '欢迎预约实地参观',
      color: 'purple'
    }
  ];

  // 投资者类型选项
  const investorTypes = [
    '天使投资人',
    'VC机构',
    'PE机构',
    '产业基金',
    '战略投资者',
    '政府基金',
    '家族办公室',
    '其他'
  ];

  // 团队成员联系信息
  const teamContacts = [
    {
      name: '张伟',
      role: 'CEO & 创始人',
      email: 'zhang.wei@mulfin.ai',
      phone: '+86 138-0013-8001',
      avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20male%20CEO%20headshot%20portrait%20in%20business%20suit%20confident%20smile%20modern%20office%20background&image_size=square',
      expertise: '战略规划、融资对接'
    },
    {
      name: '李明',
      role: 'CTO & 联合创始人',
      email: 'li.ming@mulfin.ai',
      phone: '+86 138-0013-8002',
      avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20male%20CTO%20headshot%20portrait%20in%20casual%20business%20attire%20tech%20background&image_size=square',
      expertise: '技术架构、产品开发'
    },
    {
      name: '王芳',
      role: 'CFO',
      email: 'wang.fang@mulfin.ai',
      phone: '+86 138-0013-8003',
      avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20female%20CFO%20headshot%20portrait%20in%20business%20suit%20confident%20modern%20office&image_size=square',
      expertise: '财务管理、投资者关系'
    }
  ];

  // 表单处理
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // 重置表单
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        investorType: '',
        message: ''
      });
    }, 3000);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            <Mail className="w-4 h-4 mr-2" />
            联系我们
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            开启
            <span className="text-blue-600">合作之旅</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            我们期待与优秀的投资伙伴和合作伙伴携手，共同打造AI情感陪伴的美好未来。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 联系表单 */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                投资咨询表单
              </h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    提交成功！
                  </h4>
                  <p className="text-gray-600">
                    我们已收到您的咨询，将在24小时内回复您。
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        姓名 *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="请输入您的姓名"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        公司/机构
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="请输入公司或机构名称"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        邮箱 *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="请输入您的邮箱"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        电话
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="请输入您的电话"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      投资者类型
                    </label>
                    <select
                      name="investorType"
                      value={formData.investorType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">请选择投资者类型</option>
                      {investorTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      咨询内容 *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="请详细描述您的投资意向、关注重点或其他咨询内容..."
                        required
                      />
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    isLoading={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? '提交中...' : '发送咨询'}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* 联系信息 */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* 联系方式 */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                联系方式
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    {...staggerChildren(index, 0.1)}
                  >
                    <Card className="p-6 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start">
                        <div className={`w-12 h-12 bg-${info.color}-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                          <div className={`text-${info.color}-600`}>
                            {info.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h4>
                          <p className="text-gray-900 font-medium mb-1">
                            {info.content}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 核心团队联系 */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                核心团队
              </h3>
              <div className="space-y-4">
                {teamContacts.map((member, index) => (
                  <motion.div
                    key={index}
                    {...staggerChildren(index, 0.1)}
                  >
                    <Card className="p-6 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-16 h-16 rounded-full object-cover mr-4 flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">
                            {member.name}
                          </h4>
                          <p className="text-blue-600 font-medium mb-2">
                            {member.role}
                          </p>
                          <p className="text-gray-600 text-sm mb-3">
                            {member.expertise}
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-center text-sm text-gray-600">
                              <Mail className="w-4 h-4 mr-2" />
                              <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors">
                                {member.email}
                              </a>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Phone className="w-4 h-4 mr-2" />
                              <a href={`tel:${member.phone}`} className="hover:text-blue-600 transition-colors">
                                {member.phone}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 快速联系 */}
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                快速联系
              </h4>
              <p className="text-gray-600 mb-4">
                如需紧急联系或预约面谈，请直接致电我们的投资者热线。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.open('mailto:contact@mulfin.ai')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  发送邮件
                </Button>
                <Button
                  className="flex-1"
                  onClick={() => window.open('tel:+8640012345678')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  立即致电
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* 底部说明 */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-600">
            我们承诺在收到您的咨询后24小时内回复，并为每位投资者提供专业的服务支持。
          </p>
          <p className="text-sm text-gray-500 mt-2">
            所有商业信息将严格保密，符合相关法律法规要求。
          </p>
        </motion.div>
      </div>
    </section>
  );
};