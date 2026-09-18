import { DONATION_INTERVAL_DAYS } from '../constants';

export interface DonationEligibilityResult {
  isEligible: boolean;
  daysRemaining: number;
  daysElapsed: number | null;
  nextEligibleDate: string | null; // ISO YYYY-MM-DD
  statusLabel: string;
}

/**
 * Calculates whether a donor is eligible to donate based on standard donation interval guidelines.
 * Standard Whole Blood interval in India/WHO guidelines is 90 days (3 months) for male/female red blood cell replenishment.
 * 
 * @param lastDonationDate ISO date string ('YYYY-MM-DD') or null if first time donor.
 * @param intervalDays Configurable interval in days (defaults to DONATION_INTERVAL_DAYS).
 * @param referenceDate Optional reference date for deterministic testing (defaults to now).
 */
export function checkDonationEligibility(
  lastDonationDate: string | null,
  intervalDays: number = DONATION_INTERVAL_DAYS,
  referenceDate: Date = new Date()
): DonationEligibilityResult {
  if (!lastDonationDate) {
    return {
      isEligible: true,
      daysRemaining: 0,
      daysElapsed: null,
      nextEligibleDate: null,
      statusLabel: 'Eligible now (First-time donor)',
    };
  }

  const [year, month, day] = lastDonationDate.split('-').map(Number);
  // Ensure UTC date comparison to avoid timezone boundary skew
  const lastDate = new Date(Date.UTC(year, month - 1, day));
  const refUTC = new Date(Date.UTC(referenceDate.getUTCFullYear(), referenceDate.getUTCMonth(), referenceDate.getUTCDate()));

  const diffMs = refUTC.getTime() - lastDate.getTime();
  const daysElapsed = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (daysElapsed >= intervalDays) {
    return {
      isEligible: true,
      daysRemaining: 0,
      daysElapsed,
      nextEligibleDate: null,
      statusLabel: 'Eligible now',
    };
  }

  const daysRemaining = Math.max(1, intervalDays - daysElapsed);
  const nextDateObj = new Date(lastDate.getTime() + intervalDays * 24 * 60 * 60 * 1000);
  const nextEligibleDate = nextDateObj.toISOString().split('T')[0];

  return {
    isEligible: false,
    daysRemaining,
    daysElapsed,
    nextEligibleDate,
    statusLabel: `Eligible in ${daysRemaining} day${daysRemaining === 1 ? '' : 's'}`,
  };
}
