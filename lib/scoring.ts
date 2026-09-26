export function formatPercent(value: number) {
  return `${Math.round(value)}%`;
}

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
  return Math.min(100, Math.round(
    assessment * 0.3 +
    missions * 0.25 +
    evidence * 0.2 +
    communication * 0.15 +
    companyFit * 0.1
  ));
}

export function transformResumeBullet(description: string) {
  if (!description || description.trim().length < 3) {
    return 'Add a clearer project description before generating a stronger bullet.';
  }

  const clean = description.trim();
  return `Led ${clean.toLowerCase()} by defining the problem, executing the workflow, and validating results with measurable impact.`;
}
