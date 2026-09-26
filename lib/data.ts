export const companySeed: Company[] = [
  {
    id: 'reliance',
    name: 'Reliance Industries',
    industry: 'Energy & Chemicals',
    roles: ['Process Engineer', 'Graduate Engineer', 'Operations Engineer'],
    branches: ['Chemical Engineering', 'Mechanical Engineering'],
    skills: ['Process Safety', 'Thermodynamics', 'Aspen Plus', 'Material Balance'],
    description: 'Large-scale refining, petrochemicals, and process optimization opportunities.',
    officialUrl: 'https://www.ril.com/',
    verificationDate: '2026-09-26'
  },
  {
    id: 'lt',
    name: 'L&T',
    industry: 'Engineering & Construction',
    roles: ['Project Engineer', 'Design Engineer', 'Site Engineer'],
    branches: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering'],
    skills: ['Engineering Drawing', 'Project Planning', 'Cost Estimation', 'Quality'],
    description: 'Infrastructure and industrial engineering roles with project execution focus.',
    officialUrl: 'https://www.larsentoubro.com/',
    verificationDate: '2026-09-26'
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    industry: 'Technology',
    roles: ['Software Engineer', 'Data Engineer', 'Product Engineer'],
    branches: ['Computer Science Engineering', 'Information Technology'],
    skills: ['DSA', 'System Design', 'Communication', 'Coding'],
    description: 'AI-first software and product engineering opportunities across cloud and platform teams.',
    officialUrl: 'https://careers.microsoft.com/',
    verificationDate: '2026-09-26'
  },
  {
    id: 'amazon',
    name: 'Amazon',
    industry: 'Technology',
    roles: ['SDE', 'Operations Engineer', 'Business Analyst'],
    branches: ['Computer Science', 'IT', 'Electrical'],
    skills: ['Problem Solving', 'Coding', 'Leadership', 'System Design'],
    description: 'Scale-driven software, infrastructure, and operations roles with strong problem-solving expectations.',
    officialUrl: 'https://www.amazon.jobs/',
    verificationDate: '2026-09-26'
  },
  {
    id: 'tatamotors',
    name: 'Tata Motors',
    industry: 'Automotive',
    roles: ['Manufacturing Engineer', 'Design Engineer', 'Quality Engineer'],
    branches: ['Mechanical Engineering', 'Electrical Engineering'],
    skills: ['CAD', 'Manufacturing', 'FMEA', 'Quality Control'],
    description: 'Mobility and manufacturing innovation in EVs and industrial engineering.',
    officialUrl: 'https://www.tatamotors.com/careers/',
    verificationDate: '2026-09-26'
  },
  {
    id: 'indianoil',
    name: 'Indian Oil',
    industry: 'Energy',
    roles: ['Operations Engineer', 'Process Engineer', 'Maintenance Engineer'],
    branches: ['Chemical Engineering', 'Mechanical Engineering'],
    skills: ['Material Balance', 'Energy Balance', 'PFD', 'Safety'],
    description: 'Core process and operations engineering preparation for refining and processing operations.',
    officialUrl: 'https://www.iocl.com/',
    verificationDate: '2026-09-26'
  },
  {
    id: 'adobe',
    name: 'Adobe',
    industry: 'Technology',
    roles: ['Software Engineer', 'Product Engineer'],
    branches: ['Computer Science', 'IT'],
    skills: ['DSA', 'OOP', 'Product Thinking', 'Communication'],
    description: 'Product and engineering roles focused on creativity and scalable systems.',
    officialUrl: 'https://www.adobe.com/careers.html',
    verificationDate: '2026-09-26'
  },
  {
    id: 'bosch',
    name: 'Bosch',
    industry: 'Industrial Technology',
    roles: ['R&D Engineer', 'Manufacturing Engineer'],
    branches: ['Electrical Engineering', 'Mechanical Engineering', 'Electronics'],
    skills: ['Embedded Systems', 'Automation', 'Quality', 'CAD'],
    description: 'Automation, embedded engineering, and industrial systems roles.',
    officialUrl: 'https://www.bosch-careers.com/',
    verificationDate: '2026-09-26'
  }
];

export const skillSeed: Skill[] = [
  { name: 'Thermodynamics', level: 82, color: 'bg-blue-500', category: 'core' },
  { name: 'Fluid Mechanics', level: 70, color: 'bg-cyan-500', category: 'core' },
  { name: 'Process Safety', level: 55, color: 'bg-amber-500', category: 'core' },
  { name: 'Aspen Plus', level: 39, color: 'bg-violet-500', category: 'software' },
  { name: 'Coding', level: 78, color: 'bg-emerald-500', category: 'software' },
  { name: 'Communication', level: 68, color: 'bg-pink-500', category: 'soft' },
  { name: 'Data Structures', level: 84, color: 'bg-indigo-500', category: 'software' },
  { name: 'System Design', level: 61, color: 'bg-sky-500', category: 'software' },
  { name: 'CAD', level: 64, color: 'bg-fuchsia-500', category: 'core' },
  { name: 'Problem Solving', level: 76, color: 'bg-teal-500', category: 'core' }
];

export const missionSeed: Mission[] = [
  { title: 'Material Balance Sprint', duration: '15 min', type: 'Technical', progress: 60, xp: 80 },
  { title: 'Interview Answer Review', duration: '8 min', type: 'Communication', progress: 75, xp: 60 },
  { title: 'Resume Bullet Lab', duration: '10 min', type: 'Resume', progress: 50, xp: 55 },
  { title: 'Case Study Deep Dive', duration: '20 min', type: 'Industry', progress: 45, xp: 100 },
  { title: 'Mistake Vault Review', duration: '6 min', type: 'Reflection', progress: 80, xp: 40 }
];

export const dashboardStats: DashboardStat[] = [
  { label: 'Readiness', value: '78%', delta: '+6%' },
  { label: 'Daily streak', value: '7 days', delta: '🔥' },
  { label: 'Missions', value: '3/5', delta: '+1' },
  { label: 'Proof projects', value: '2', delta: '+1' }
];

export const demoStudent = {
  name: 'Alex Student',
  branch: 'Chemical Engineering',
  target: 'Core Engineering',
  companies: ['Reliance Industries', 'L&T', 'Indian Oil'],
  readiness: 64,
  weakness: 'Process Safety',
  strength: 'Thermodynamics'
};

export const recommendationCards = [
  { title: '2-minute concept', tag: 'Learn' },
  { title: 'Interview question', tag: 'Practice' },
  { title: 'Industry insight', tag: 'Explore' },
  { title: 'Project challenge', tag: 'Proof' },
  { title: 'Company insight', tag: 'Prepare' }
];
