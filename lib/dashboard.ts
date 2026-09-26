import { prisma } from '../lib/prisma';

export async function getDashboardSnapshot() {
  const companies = await prisma.company.count();
  const skills = await prisma.skill.count();
  return {
    readiness: 78,
    companies,
    skills,
    streak: 7,
    mission: 'Material balance challenge'
  };
}
