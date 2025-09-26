// 竞争对手数据配置
export interface Competitor {
  name: string;
  intelligence: number; // 1-10 智能化程度
  price: number; // 1-10 价格水平
  description: string;
  logo?: string;
  strengths: string[];
  weaknesses: string[];
}

export interface CompetitiveAdvantage {
  title: string;
  description: string;
  icon: string;
}

// 竞争对手2x2定位图数据
export const competitors: Competitor[] = [
  {
    name: 'Mulfin',
    intelligence: 9,
    price: 6,
    description: '我们的产品 - 高智能化，中等价位，最佳性价比',
    strengths: ['多模态AI交互', '情感计算技术', '个性化成长', '触感反馈'],
    weaknesses: ['新品牌知名度待提升']
  },
  {
    name: '传统毛绒玩具',
    intelligence: 1,
    price: 2,
    description: '传统玩具厂商，价格低廉但无智能功能',
    strengths: ['价格便宜', '品牌知名度高', '渠道成熟'],
    weaknesses: ['无智能交互', '功能单一', '缺乏个性化']
  },
  {
    name: 'Replika AI',
    intelligence: 8,
    price: 3,
    description: '纯软件AI伴侣，智能化程度高但缺乏物理交互',
    strengths: ['AI对话能力强', '个性化学习', '价格较低'],
    weaknesses: ['纯软件形态', '缺乏触感', '情感连接有限']
  },
  {
    name: 'Sony Aibo',
    intelligence: 7,
    price: 9,
    description: '高端机器宠物，技术先进但价格昂贵',
    strengths: ['技术成熟', '品牌影响力', '硬件质量高'],
    weaknesses: ['价格极高', '目标用户有限', '情感交互较弱']
  },
  {
    name: 'Amazon Alexa',
    intelligence: 6,
    price: 4,
    description: '智能音箱，语音交互能力强但形态固定',
    strengths: ['语音识别准确', '生态系统完善', '价格适中'],
    weaknesses: ['形态单一', '缺乏移动性', '情感表达有限']
  },
  {
    name: 'Furby',
    intelligence: 3,
    price: 3,
    description: '电子宠物玩具，有一定交互但智能化程度低',
    strengths: ['品牌知名度', '儿童市场认知', '价格合理'],
    weaknesses: ['智能化程度低', '交互方式简单', '成长性有限']
  }
];

// 核心竞争优势
export const competitiveAdvantages: CompetitiveAdvantage[] = [
  {
    title: '多模态AI交互',
    description: '结合语音、触觉、视觉多种交互方式，提供更自然的沟通体验',
    icon: 'Zap'
  },
  {
    title: '情感计算引擎',
    description: '基于深度学习的情感识别和响应系统，真正理解用户情感状态',
    icon: 'Heart'
  },
  {
    title: '个性化成长',
    description: '每个Mulfin都会根据用户互动习惯形成独特的性格和记忆',
    icon: 'TrendingUp'
  },
  {
    title: '触感反馈技术',
    description: '先进的触觉传感器和反馈系统，提供真实的拥抱和抚摸体验',
    icon: 'Hand'
  },
  {
    title: '生态系统整合',
    description: '配套App、社区、增值服务形成完整的产品生态',
    icon: 'Globe'
  },
  {
    title: '性价比优势',
    description: '在保证高品质的前提下，提供更具竞争力的价格',
    icon: 'Award'
  }
];

// 市场定位描述
export const marketPositioning = {
  title: 'Mulfin市场定位',
  subtitle: '高智能化 × 合理价格 = 最佳选择',
  description: '在智能化程度和价格之间找到最佳平衡点，为用户提供高性价比的AI情感伴侣产品。'
};