import { prisma } from '../lib/prisma';

export async function seedDatabase() {
  const firstCompany = await prisma.company.createMany({
    data: [
      { name: 'Reliance Industries', industry: 'Energy & Chemicals', status: 'verified' },
      { name: 'Microsoft', industry: 'Technology', status: 'verified' },
      { name: 'Amazon', industry: 'Technology', status: 'verified' },
      { name: 'L&T', industry: 'Engineering', status: 'verified' },
      { name: 'Tata Motors', industry: 'Automotive', status: 'verified' }
    ]
  });

  const firstSkill = await prisma.skill.createMany({
    data: [
      { name: 'Thermodynamics', category: 'core' },
      { name: 'Process Safety', category: 'core' },
      { name: 'Coding', category: 'software' },
      { name: 'Communication', category: 'soft' },
      { name: 'Data Structures', category: 'software' }
    ]
  });

  const mission = await prisma.mission.createMany({
    data: [
      { title: 'Material Balance Sprint', duration: 15, xp: 80 },
      { title: 'Mock Interview Warmup', duration: 10, xp: 60 },
      { title: 'Resume Bullet Lab', duration: 8, xp: 50 }
    ]
  });

  return { firstCompany, firstSkill, mission };
}
