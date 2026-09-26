import { z } from 'zod';

export const scoreSchema = z.object({
  assessment: z.number().min(0).max(100),
  missions: z.number().min(0).max(100),
  evidence: z.number().min(0).max(100),
  communication: z.number().min(0).max(100),
  companyFit: z.number().min(0).max(100)
});
