import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8)
});

export const onboardingSchema = z.object({
  college: z.string().min(2),
  branch: z.string().min(2),
  role: z.string().min(2),
  timeline: z.string().min(2)
});
