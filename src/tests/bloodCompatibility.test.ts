import { describe, it, expect } from 'vitest';
import { isBloodCompatible, COMPATIBILITY_MATRIX } from '../lib/matching/bloodCompatibility';
import { BloodGroup } from '../lib/types';
import { BLOOD_GROUPS } from '../lib/constants';

describe('Blood Compatibility Module', () => {
  it('should verify Universal Donor (O-) can donate to all 8 blood groups', () => {
    BLOOD_GROUPS.forEach((recipientGroup) => {
      expect(isBloodCompatible('O-', recipientGroup)).toBe(true);
    });
  });

  it('should verify Universal Recipient (AB+) can only donate to AB+', () => {
    expect(isBloodCompatible('AB+', 'AB+')).toBe(true);
    const nonABPlus: BloodGroup[] = ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-'];
    nonABPlus.forEach((recipientGroup) => {
      expect(isBloodCompatible('AB+', recipientGroup)).toBe(false);
    });
  });

  it('should verify O+ can donate to all positive groups only', () => {
    const positiveGroups: BloodGroup[] = ['O+', 'A+', 'B+', 'AB+'];
    const negativeGroups: BloodGroup[] = ['O-', 'A-', 'B-', 'AB-'];

    positiveGroups.forEach((recipient) => {
      expect(isBloodCompatible('O+', recipient)).toBe(true);
    });
    negativeGroups.forEach((recipient) => {
      expect(isBloodCompatible('O+', recipient)).toBe(false);
    });
  });

  it('should correctly reject incompatible blood groups', () => {
    // A+ cannot donate to B+ or O+
    expect(isBloodCompatible('A+', 'B+')).toBe(false);
    expect(isBloodCompatible('A+', 'O+')).toBe(false);
    // B+ cannot donate to A+ or O-
    expect(isBloodCompatible('B+', 'A+')).toBe(false);
    expect(isBloodCompatible('B+', 'O-')).toBe(false);
  });

  it('should cover the entire 8x8 compatibility matrix accurately', () => {
    BLOOD_GROUPS.forEach((donor) => {
      BLOOD_GROUPS.forEach((recipient) => {
        const expected = COMPATIBILITY_MATRIX[donor].includes(recipient);
        expect(isBloodCompatible(donor, recipient)).toBe(expected);
      });
    });
  });
});
