export type Company = {
  id?: string;
  name: string;
  industry: string;
  roles: string[];
  branches: string[];
  skills: string[];
  description: string;
  officialUrl?: string;
  verificationDate?: string;
};

export type Skill = {
  id?: string;
  name: string;
  level: number;
  color: string;
  category?: string;
};

export type Mission = {
  id?: string;
  title: string;
  duration: string;
  type: string;
  progress: number;
  xp?: number;
};

export type DashboardStat = {
  label: string;
  value: string;
  delta: string;
};
