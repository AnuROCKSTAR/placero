import { z } from 'zod';

export const companyPlanSchema = z.object({
  company: z.string(),
  role: z.string(),
  timeline: z.array(
    z.object({
      period: z.string(),
      goals: z.array(z.string())
    })
  )
});

export const reverseAuditSchema = z.object({
  company: z.string(),
  product: z.string(),
  problem: z.string(),
  evidence: z.string(),
  rootCause: z.string(),
  solution: z.string(),
  impact: z.string()
});

export const interviewFeedbackSchema = z.object({
  score: z.number().min(0).max(100),
  strengths: z.array(z.string()),
  gaps: z.array(z.string()),
  nextSteps: z.array(z.string())
});

export function buildResumeAnalysis(prompt: string) {
  return {
    summary: 'Your resume bullet is clear but can be made more outcome-driven.',
    improved: transformResumeBullet(prompt),
    suggestions: [
      'Add a measurable result or business impact.',
      'Specify the context and tools used.',
      'Highlight what changed because of your work.'
    ]
  };
}

export function transformResumeBullet(raw: string) {
  const clean = raw.trim();
  if (!clean) return 'Add a project description to generate stronger bullet points.';

  const lower = clean.toLowerCase();
  return `Led ${lower} by defining the problem, driving execution, and validating outcomes to improve efficiency, quality, and measurable project impact.`;
}
