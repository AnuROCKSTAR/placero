export type Company = {
  name: string;
  industry: string;
  roles: string[];
  branches: string[];
  skills: string[];
  description: string;
};

export type Skill = {
  name: string;
  level: number;
  color: string;
};

export type Mission = {
  title: string;
  duration: string;
  type: string;
  progress: number;
};
