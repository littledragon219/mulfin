// 商业模式数据配置
export interface RevenueStream {
  name: string;
  description: string;
  percentage: number;
  color: string;
  expectedRevenue: number; // 预计年收入（万元）
}

export interface Channel {
  name: string;
  type: 'online' | 'offline' | 'partnership';
  description: string;
  targetShare: number; // 目标市场份额 %
  timeline: string;
  conversionRate: number; // 预期转化率
  cost: string; // 投入成本
  roi: string; // 预期ROI
}

export interface FundingAllocation {
  category: string;
  amount: number; // 万元
  percentage: number;
  description: string;
  color: string;
}

export interface FinancialProjection {
  year: number;
  revenue: number; // 万元
  profit: number; // 利润
  users: number; // 用户数
  marketShare: number; // 市场份额 %
}

// 收入模式
export const revenueStreams: RevenueStream[] = [
  {
    name: '硬件销售',
    description: 'Mulfin智能伴侣硬件产品销售收入',
    percentage: 60,
    color: '#FF6B35',
    expectedRevenue: 12000
  },
  {
    name: '订阅服务',
    description: '高级AI功能、个性化内容、云端服务月费',
    percentage: 25,
    color: '#1E3A8A',
    expectedRevenue: 5000
  },
  {
    name: '增值服务',
    description: '定制化服务、配件销售、企业合作',
    percentage: 10,
    color: '#10B981',
    expectedRevenue: 2000
  },
  {
    name: '数据服务',
    description: '匿名化情感数据分析服务（B端）',
    percentage: 5,
    color: '#8B5CF6',
    expectedRevenue: 1000
  }
];

// 销售渠道策略
export const channels: Channel[] = [
  {
    name: '官方电商平台',
    type: 'online',
    description: '官网直销、天猫旗舰店、京东自营',
    targetShare: 40,
    timeline: '2024年Q3启动',
    conversionRate: 5,
    cost: '低',
    roi: '高'
  },
  {
    name: '线下零售渠道',
    type: 'offline',
    description: '苏宁、国美等3C卖场，玩具专营店',
    targetShare: 30,
    timeline: '2024年Q4启动',
    conversionRate: 3,
    cost: '高',
    roi: '中'
  },
  {
    name: '合作伙伴渠道',
    type: 'partnership',
    description: '心理咨询机构、养老院、特殊教育机构',
    targetShare: 20,
    timeline: '2025年Q1启动',
    conversionRate: 10,
    cost: '中',
    roi: '高'
  },
  {
    name: '社交电商',
    type: 'online',
    description: '小红书、抖音等社交平台直播带货',
    targetShare: 10,
    timeline: '2025年Q2启动',
    conversionRate: 8,
    cost: '中',
    roi: '高'
  }
];

// 融资用途分配
export const fundingAllocation: FundingAllocation[] = [
  {
    category: '产品研发',
    amount: 200,
    percentage: 40,
    description: 'AI算法优化、硬件迭代、软件开发',
    color: '#FF6B35'
  },
  {
    category: '供应链建设',
    amount: 125,
    percentage: 25,
    description: '生产设备、供应商合作、质量控制体系',
    color: '#1E3A8A'
  },
  {
    category: '市场推广',
    amount: 100,
    percentage: 20,
    description: '品牌建设、渠道拓展、用户获取',
    color: '#10B981'
  },
  {
    category: '团队扩张',
    amount: 50,
    percentage: 10,
    description: '核心人才招聘、团队建设',
    color: '#8B5CF6'
  },
  {
    category: '运营资金',
    amount: 25,
    percentage: 5,
    description: '日常运营、风险储备',
    color: '#F59E0B'
  }
];

// 财务预测
export const financialProjections: FinancialProjection[] = [
  {
    year: 2024,
    revenue: 500,
    profit: 50,
    users: 1000,
    marketShare: 0.1
  },
  {
    year: 2025,
    revenue: 5000,
    profit: 1000,
    users: 15000,
    marketShare: 1.2
  },
  {
    year: 2026,
    revenue: 20000,
    profit: 5000,
    users: 60000,
    marketShare: 4.8
  },
  {
    year: 2027,
    revenue: 50000,
    profit: 15000,
    users: 150000,
    marketShare: 12.0
  },
  {
    year: 2028,
    revenue: 100000,
    profit: 30000,
    users: 300000,
    marketShare: 24.0
  }
];

// 商业模式核心指标
export const businessMetrics = {
  targetPrice: 1299, // 目标售价（元）
  grossMargin: 45, // 毛利率 %
  customerAcquisitionCost: 150, // 获客成本（元）
  customerLifetimeValue: 2500, // 客户生命周期价值（元）
  monthlyChurnRate: 3, // 月流失率 %
  averageOrderValue: 1450, // 平均订单价值（元）
  paybackPeriod: 8 // 投资回收期（月）
};

// 竞争优势
export const businessAdvantages = [
  {
    category: '技术壁垒',
    description: '自主研发的情感计算引擎和多模态交互技术',
    impact: 'high'
  },
  {
    category: '先发优势',
    description: '在AI情感伴侣细分市场的早期布局',
    impact: 'high'
  },
  {
    category: '用户粘性',
    description: '个性化成长机制形成强用户粘性',
    impact: 'medium'
  },
  {
    category: '生态协同',
    description: '硬件+软件+服务的完整生态体系',
    impact: 'medium'
  }
];