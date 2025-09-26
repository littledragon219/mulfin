/**
 * Mulfin项目里程碑和发展规划数据
 * 包含项目各阶段的关键节点、时间线和未来规划
 */

// 里程碑状态类型
export type MilestoneStatus = 'completed' | 'in_progress' | 'planned';

// 里程碑阶段类型
export type MilestonePhase = 'research' | 'development' | 'testing' | 'launch' | 'growth';

// 里程碑接口定义
export interface Milestone {
  id: string;
  title: string;
  description: string;
  date: string;
  status: MilestoneStatus;
  phase: MilestonePhase;
  progress: number; // 0-100
  deliverables: string[];
  team: string[];
  budget?: number;
}

// 发展阶段接口定义
export interface DevelopmentPhase {
  id: string;
  name: string;
  description: string;
  duration: string;
  milestones: string[]; // milestone ids
  budget: number;
  keyObjectives: string[];
}

// 里程碑数据
export const milestones: Milestone[] = [
  {
    id: 'research-1',
    title: '市场调研完成',
    description: '完成目标用户调研、竞品分析和市场需求验证',
    date: '2024-01',
    status: 'completed',
    phase: 'research',
    progress: 100,
    deliverables: ['用户调研报告', '竞品分析报告', '市场需求分析'],
    team: ['产品经理', '市场分析师', 'UX研究员']
  },
  {
    id: 'research-2',
    title: '技术架构设计',
    description: '完成AI模型选型、系统架构设计和技术栈确定',
    date: '2024-02',
    status: 'completed',
    phase: 'research',
    progress: 100,
    deliverables: ['技术架构文档', 'AI模型评估报告', '开发规范'],
    team: ['技术总监', 'AI工程师', '架构师']
  },
  {
    id: 'development-1',
    title: 'MVP开发完成',
    description: '完成核心功能开发，包括基础AI对话和情绪识别',
    date: '2024-04',
    status: 'completed',
    phase: 'development',
    progress: 100,
    deliverables: ['MVP产品', '核心算法', '基础UI界面'],
    team: ['前端工程师', '后端工程师', 'AI工程师'],
    budget: 500000
  },
  {
    id: 'development-2',
    title: '硬件原型开发',
    description: '完成智能硬件原型设计和制造',
    date: '2024-06',
    status: 'in_progress',
    phase: 'development',
    progress: 75,
    deliverables: ['硬件原型', '工业设计方案', '生产工艺文档'],
    team: ['硬件工程师', '工业设计师', '供应链经理'],
    budget: 800000
  },
  {
    id: 'testing-1',
    title: '内测版本发布',
    description: '发布内测版本，收集用户反馈和数据',
    date: '2024-08',
    status: 'in_progress',
    phase: 'testing',
    progress: 30,
    deliverables: ['内测版本', '测试报告', '用户反馈分析'],
    team: ['测试工程师', '产品经理', '数据分析师'],
    budget: 300000
  },
  {
    id: 'testing-2',
    title: '公测版本发布',
    description: '发布公测版本，扩大用户规模测试',
    date: '2024-10',
    status: 'planned',
    phase: 'testing',
    progress: 0,
    deliverables: ['公测版本', '性能优化报告', '用户增长数据'],
    team: ['全体技术团队', '运营团队', '客服团队'],
    budget: 500000
  },
  {
    id: 'launch-1',
    title: '正式版本发布',
    description: '发布正式版本，开始商业化运营',
    date: '2024-12',
    status: 'planned',
    phase: 'launch',
    progress: 0,
    deliverables: ['正式版本', '营销方案', '商业化策略'],
    team: ['全体团队'],
    budget: 1000000
  },
  {
    id: 'growth-1',
    title: '用户规模突破10万',
    description: '实现用户规模突破，建立稳定的用户基础',
    date: '2025-03',
    status: 'planned',
    phase: 'growth',
    progress: 0,
    deliverables: ['用户增长报告', '运营数据分析', '盈利模式验证'],
    team: ['运营团队', '市场团队', '数据团队'],
    budget: 1500000
  },
  {
    id: 'growth-2',
    title: '国际市场拓展',
    description: '进入海外市场，实现国际化发展',
    date: '2025-06',
    status: 'planned',
    phase: 'growth',
    progress: 0,
    deliverables: ['国际版本', '本地化方案', '海外合作协议'],
    team: ['国际化团队', '商务团队', '本地化团队'],
    budget: 2000000
  }
];

// 发展阶段数据
export const developmentPhases: DevelopmentPhase[] = [
  {
    id: 'phase-1',
    name: '研究验证阶段',
    description: '市场调研、技术验证和产品定义',
    duration: '3个月',
    milestones: ['research-1', 'research-2'],
    budget: 200000,
    keyObjectives: [
      '验证市场需求和用户痛点',
      '确定技术可行性和架构方案',
      '完成产品定义和规划'
    ]
  },
  {
    id: 'phase-2',
    name: '产品开发阶段',
    description: '核心功能开发和硬件原型制造',
    duration: '6个月',
    milestones: ['development-1', 'development-2'],
    budget: 1300000,
    keyObjectives: [
      '完成MVP产品开发',
      '实现核心AI算法',
      '完成硬件原型设计'
    ]
  },
  {
    id: 'phase-3',
    name: '测试优化阶段',
    description: '产品测试、用户反馈收集和优化迭代',
    duration: '4个月',
    milestones: ['testing-1', 'testing-2'],
    budget: 800000,
    keyObjectives: [
      '验证产品功能和用户体验',
      '收集用户反馈并优化',
      '准备商业化运营'
    ]
  },
  {
    id: 'phase-4',
    name: '商业化阶段',
    description: '正式发布和商业化运营',
    duration: '3个月',
    milestones: ['launch-1'],
    budget: 1000000,
    keyObjectives: [
      '正式发布产品',
      '建立商业化模式',
      '实现初期盈利'
    ]
  },
  {
    id: 'phase-5',
    name: '规模化阶段',
    description: '用户增长和市场扩张',
    duration: '12个月',
    milestones: ['growth-1', 'growth-2'],
    budget: 3500000,
    keyObjectives: [
      '实现用户规模突破',
      '拓展国际市场',
      '建立行业领先地位'
    ]
  }
];

// 里程碑统计数据
export const milestoneStats = {
  total: milestones.length,
  completed: milestones.filter(m => m.status === 'completed').length,
  inProgress: milestones.filter(m => m.status === 'in_progress').length,
  planned: milestones.filter(m => m.status === 'planned').length,
  totalBudget: milestones.reduce((sum, m) => sum + (m.budget || 0), 0),
  completionRate: Math.round((milestones.filter(m => m.status === 'completed').length / milestones.length) * 100)
};

// 未来愿景数据
export const futureVision = {
  title: '未来愿景',
  description: '成为全球领先的AI情绪伙伴平台',
  goals: [
    {
      title: '用户规模',
      target: '1000万+',
      description: '服务全球千万用户的情绪健康需求'
    },
    {
      title: '技术领先',
      target: '行业第一',
      description: '在AI情绪识别和陪伴技术方面保持领先'
    },
    {
      title: '生态建设',
      target: '完整生态',
      description: '构建包含硬件、软件、服务的完整生态系统'
    },
    {
      title: '社会价值',
      target: '积极影响',
      description: '为改善全球心理健康状况做出积极贡献'
    }
  ],
  timeline: '2025-2030年'
};