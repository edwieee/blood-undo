import { describe, it, expect } from 'vitest';
import { checkDonationEligibility } from '../lib/matching/interval';

describe('Donation Interval Module', () => {
  const referenceDate = new Date('2026-09-19T00:00:00Z');

  it('should mark first-time donors (null last donation date) as eligible immediately', () => {
    const result = checkDonationEligibility(null, 90, referenceDate);
    expect(result.isEligible).toBe(true);
    expect(result.daysRemaining).toBe(0);
    expect(result.statusLabel).toContain('Eligible now');
  });

  it('should mark donor who donated 120 days ago as eligible', () => {
    // 120 days before 2026-09-19 is 2026-05-22
    const result = checkDonationEligibility('2026-05-22', 90, referenceDate);
    expect(result.isEligible).toBe(true);
    expect(result.daysRemaining).toBe(0);
    expect(result.daysElapsed).toBeGreaterThanOrEqual(119);
    expect(result.statusLabel).toBe('Eligible now');
  });

  it('should mark donor who donated 90 days ago as eligible (boundary test)', () => {
    // 90 days before 2026-09-19 is 2026-06-21
    const result = checkDonationEligibility('2026-06-21', 90, referenceDate);
    expect(result.isEligible).toBe(true);
    expect(result.daysRemaining).toBe(0);
    expect(result.statusLabel).toBe('Eligible now');
  });

  it('should mark donor who donated 20 days ago as ineligible and provide exact remaining days', () => {
    // 20 days before 2026-09-19 is 2026-08-30
    const result = checkDonationEligibility('2026-08-30', 90, referenceDate);
    expect(result.isEligible).toBe(false);
    expect(result.daysRemaining).toBe(70);
    expect(result.statusLabel).toBe('Eligible in 70 days');
    expect(result.nextEligibleDate).toBe('2026-11-28');
  });

  it('should support dynamic/configurable interval days (e.g. 56 days)', () => {
    // Donated 60 days ago with 56-day policy
    const result = checkDonationEligibility('2026-07-21', 56, referenceDate);
    expect(result.isEligible).toBe(true);
  });
});
