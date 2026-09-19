import { BloodGroup, UrgencyLevel } from './types';

// Configurable donation interval policy (in days) - Single source of truth
export const DONATION_INTERVAL_DAYS = 90;

export const BLOOD_GROUPS: readonly BloodGroup[] = [
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-',
  'O+',
  'O-',
] as const;

export const URGENCY_LEVELS: readonly UrgencyLevel[] = [
  'CRITICAL',
  'URGENT',
  'STANDARD',
] as const;

export const DISCLAIMER_TEXT =
  'REDLINK is a donor matching prototype designed for private notifications. It does not perform blood testing, cross-matching, or medical screening. Verification by licensed blood bank personnel remains mandatory.';
