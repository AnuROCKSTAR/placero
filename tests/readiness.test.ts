import { describe, expect, it } from 'vitest';
import { calculateReadiness, transformResumeBullet } from '../lib/scoring';

describe('readiness scoring', () => {
  it('calculates a weighted score', () => {
    const score = calculateReadiness({
      assessment: 80,
      missions: 70,
      evidence: 60,
      communication: 75,
      companyFit: 85
    });

    expect(score).toBeGreaterThan(70);
    expect(score).toBeLessThanOrEqual(100);
  });
});

describe('resume bullet transformation', () => {
  it('returns a stronger bullet pattern', () => {
    const bullet = transformResumeBullet('built a process optimization project');
    expect(bullet.toLowerCase()).toContain('problem');
    expect(bullet.toLowerCase()).toContain('workflow');
  });
});
