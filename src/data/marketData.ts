// 市场数据配置
export interface MarketData {
  segment: string;
  size: number; // 单位：亿元
  growth: number; // 年增长率 %
  opportunity: string;
}

export interface UserSegment {
  name: string;
  percentage: number;
  description: string;
  color: string;
}

export interface MarketTrend {
  year: number;
  petMarket: number; // 宠物市场规模
  mentalHealth: number; // 心理健康市场规模
  aiCompanion: number; // AI伴侣市场规模
}

// 市场细分数据
export const marketSegments: MarketData[] = [
  {
    segment: '宠物经济市场',
    size: 4936,
    growth: 18.5,
    opportunity: '传统宠物市场向智能化转型，AI宠物成为新增长点'
  },
  {
    segment: '心理健康市场',
    size: 1200,
    growth: 25.3,
    opportunity: '疫情后心理健康需求激增，情感陪伴产品需求旺盛'
  },
  {
    segment: 'AI伴侣市场',
    size: 156,
    growth: 45.2,
    opportunity: '新兴市场，技术成熟度提升，用户接受度快速增长'
  }
];

// 目标用户画像
export const userSegments: UserSegment[] = [
  {
    name: '都市白领',
    percentage: 35,
    description: '25-35岁，高收入，工作压力大，需要情感支持',
    color: '#FF6B35'
  },
  {
    name: '空巢老人',
    percentage: 25,
    description: '55岁以上，子女不在身边，渴望陪伴和关怀',
    color: '#1E3A8A'
  },
  {
    name: '青少年群体',
    percentage: 20,
    description: '12-18岁，社交需求强，喜欢新科技产品',
    color: '#10B981'
  },
  {
    name: '特殊需求人群',
    percentage: 20,
    description: '自闭症、抑郁症等群体，需要专业情感支持',
    color: '#8B5CF6'
  }
];

// 市场趋势数据
export const marketTrends: MarketTrend[] = [
  { year: 2020, petMarket: 2953, mentalHealth: 680, aiCompanion: 45 },
  { year: 2021, petMarket: 3490, mentalHealth: 850, aiCompanion: 68 },
  { year: 2022, petMarket: 4136, mentalHealth: 1065, aiCompanion: 98 },
  { year: 2023, petMarket: 4936, mentalHealth: 1200, aiCompanion: 156 },
  { year: 2024, petMarket: 5850, mentalHealth: 1500, aiCompanion: 226 },
  { year: 2025, petMarket: 6930, mentalHealth: 1875, aiCompanion: 328 }
];

// 痛点数据
export interface PainPoint {
  title: string;
  description: string;
  statistic: string;
  icon: string;
}

export const painPoints: PainPoint[] = [
  {
    title: '现代社会孤独感加剧',
    description: '快节奏生活导致人际关系疏离，情感需求无法得到满足',
    statistic: '68%的都市人群感到孤独',
    icon: 'Users'
  },
  {
    title: '传统宠物养护成本高',
    description: '宠物养护需要大量时间、金钱投入，且存在过敏、卫生等问题',
    statistic: '年均养宠成本超过8000元',
    icon: 'DollarSign'
  },
  {
    title: '心理健康服务供给不足',
    description: '专业心理咨询师稀缺，服务费用昂贵，获取渠道有限',
    statistic: '心理咨询师缺口达130万',
    icon: 'Brain'
  }
];