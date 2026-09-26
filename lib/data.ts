import { Company, Mission, Skill } from '../types';

export const companySeed = [
  {
    name: 'Reliance Industries',
    industry: 'Energy & Chemicals',
    roles: ['Process Engineer', 'Graduate Engineer'],
    branches: ['Chemical Engineering'],
    skills: ['Process Safety', 'Thermodynamics', 'Aspen Plus'],
    description: 'Large-scale process and refinery excellence.'
  },
  {
    name: 'L&T',
    industry: 'Engineering & Construction',
    roles: ['Project Engineer', 'Design Engineer'],
    branches: ['Civil', 'Mechanical', 'Electrical'],
    skills: ['Engineering Drawing', 'Project Planning', 'Cost Estimation'],
    description: 'Industrial and infrastructure expertise.'
  },
  {
    name: 'Microsoft',
    industry: 'Technology',
    roles: ['Software Engineer', 'Data Engineer'],
    branches: ['CSE', 'IT'],
    skills: ['DSA', 'System Design', 'Communication'],
    description: 'Build AI-first and product engineering teams.'
  },
  {
    name: 'Amazon',
    industry: 'Technology',
    roles: ['SDE', 'Operations Engineer'],
    branches: ['CSE', 'IT', 'ECE'],
    skills: ['Problem Solving', 'Coding', 'Leadership'],
    description: 'Scale products and systems for global consumers.'
  },
  {
    name: 'Tata Motors',
    industry: 'Automotive',
    roles: ['Manufacturing Engineer', 'Design Engineer'],
    branches: ['Mechanical', 'Electrical'],
    skills: ['CAD', 'Manufacturing', 'FMEA'],
    description: 'Mobility, manufacturing, and engineering innovation.'
  },
  {
    name: 'Indian Oil',
    industry: 'Energy',
    roles: ['Operations Engineer', 'Process Engineer'],
    branches: ['Chemical', 'Mechanical'],
    skills: ['Material Balance', 'Safety', 'Energy Balance'],
    description: 'Core process engineering and digital transformation.'
  }
] as const satisfies Company[];

export const skillSeed = [
  { name: 'Thermodynamics', level: 82, color: 'bg-blue-500' },
  { name: 'Fluid Mechanics', level: 70, color: 'bg-cyan-500' },
  { name: 'Process Safety', level: 55, color: 'bg-amber-500' },
  { name: 'Aspen Plus', level: 39, color: 'bg-violet-500' },
  { name: 'Coding', level: 78, color: 'bg-emerald-500' },
  { name: 'Communication', level: 68, color: 'bg-pink-500' },
  { name: 'Data Structures', level: 84, color: 'bg-indigo-500' },
  { name: 'System Design', level: 61, color: 'bg-sky-500' }
] as const satisfies Skill[];

export const missionSeed = [
  { title: 'Material Balance Sprint', duration: '15 min', type: 'Technical', progress: 60 },
  { title: 'Interview Answer Review', duration: '8 min', type: 'Communication', progress: 75 },
  { title: 'Resume Bullet Lab', duration: '10 min', type: 'Resume', progress: 50 },
  { title: 'Case Study Deep Dive', duration: '20 min', type: 'Industry', progress: 45 },
  { title: 'Mistake Vault Review', duration: '6 min', type: 'Reflection', progress: 80 }
] as const satisfies Mission[];

export const dashboardStats = [
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
