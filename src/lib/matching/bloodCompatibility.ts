import { BloodGroup } from '../types';

/**
 * Red Blood Cell compatibility matrix for Whole Blood / Packed Red Cells.
 * Key: Donor blood group
 * Value: Array of compatible recipient blood groups
 */
export const COMPATIBILITY_MATRIX: Record<BloodGroup, readonly BloodGroup[]> = {
  'O-': ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
  'O+': ['O+', 'A+', 'B+', 'AB+'],
  'A-': ['A-', 'A+', 'AB-', 'AB+'],
  'A+': ['A+', 'AB+'],
  'B-': ['B-', 'B+', 'AB-', 'AB+'],
  'B+': ['B+', 'AB+'],
  'AB-': ['AB-', 'AB+'],
  'AB+': ['AB+'],
};

/**
 * Checks whether a donor blood group is compatible with a requested blood group.
 * @param donorGroup The blood group of the candidate donor.
 * @param requestedGroup The blood group requested for the patient.
 * @returns boolean true if the donor can give blood to the requested group.
 */
export function isBloodCompatible(donorGroup: BloodGroup, requestedGroup: BloodGroup): boolean {
  const compatibleRecipients = COMPATIBILITY_MATRIX[donorGroup];
  if (!compatibleRecipients) return false;
  return compatibleRecipients.includes(requestedGroup);
}
