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
  'BloodUndo is a district donor matching prototype designed for privacy-preserving notifications. It does not perform serological cross-matching, antibody screening, or clinical laboratory testing. Direct clinical confirmation by licensed blood bank personnel remains mandatory.';
