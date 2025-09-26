// 团队成员数据配置
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  role: string;
  avatar: string;
  bio: string;
  skills: string[];
}

export const teamData: TeamMember[] = [
  {
    id: '1',
    name: '李明',
    position: 'CEO & 创始人',
    role: 'CEO',
    avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20male%20CEO%20portrait%20in%20business%20suit%2C%20confident%20smile%2C%20modern%20office%20background%2C%20high%20quality%20headshot&image_size=square',
    bio: '前腾讯AI产品总监，10年人工智能产品经验，专注于情感计算和人机交互领域',
    skills: ['产品战略', 'AI产品', '团队管理', '融资经验']
  },
  {
    id: '2',
    name: '王雪',
    position: 'CTO & 联合创始人',
    role: 'CTO',
    avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20female%20CTO%20portrait%20in%20business%20attire%2C%20intelligent%20expression%2C%20tech%20office%20background%2C%20high%20quality%20headshot&image_size=square',
    bio: '前字节跳动算法专家，清华大学计算机博士，在机器学习和自然语言处理领域有深厚造诣',
    skills: ['机器学习', 'NLP', '系统架构', '技术管理']
  },
  {
    id: '3',
    name: '张伟',
    position: '硬件总监',
    role: '硬件总监',
    avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20male%20hardware%20engineer%20portrait%2C%20focused%20expression%2C%20electronics%20lab%20background%2C%20high%20quality%20headshot&image_size=square',
    bio: '前小米硬件工程师，15年消费电子产品开发经验，擅长智能硬件设计和制造',
    skills: ['硬件设计', '产品制造', '供应链管理', '质量控制']
  },
  {
    id: '4',
    name: '陈思',
    position: '设计总监',
    role: '设计总监',
    avatar: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20female%20design%20director%20portrait%2C%20creative%20expression%2C%20modern%20design%20studio%20background%2C%20high%20quality%20headshot&image_size=square',
    bio: '前苹果设计师，专注于用户体验和工业设计，曾参与多款获奖产品设计',
    skills: ['UI/UX设计', '工业设计', '用户研究', '品牌设计']
  }
];