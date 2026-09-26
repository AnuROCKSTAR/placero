export function calculateReadiness({
  assessment,
  missions,
  evidence,
  communication,
  companyFit
}: {
  assessment: number;
  missions: number;
  evidence: number;
  communication: number;
  companyFit: number;
}) {
  return Math.min(
    100,
    Math.round(
      assessment * 0.3 +
        missions * 0.25 +
        evidence * 0.2 +
        communication * 0.15 +
        companyFit * 0.1
    )
  );
}

export function formatPercent(value: number) {
  return `${Math.round(value)}%`;
}

export function calculateSkillGap(current: number, target: number) {
  return Math.max(0, target - current);
}

export function transformResumeBullet(raw: string) {
  const text = raw.trim();

  if (!text) {
    return 'Add your project description to generate a stronger bullet.';
  }

  const normalized = text.toLowerCase();

  return `Led ${normalized} by defining the problem, executing the workflow, and validating outcomes with measurable impact and clear business value.`;
}
