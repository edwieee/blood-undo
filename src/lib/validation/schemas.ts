import { z } from 'zod';
import { BLOOD_GROUPS, URGENCY_LEVELS } from '../constants';
import { BloodGroup, UrgencyLevel } from '../types';

/**
 * Normalizes an Indian phone number:
 * - Trims whitespace
 * - Strips dashes, spaces, parentheses
 * - Removes optional leading +91, 91 (if 12 digits), or 0 (if 11 digits)
 * - Returns a clean 10-digit string or the trimmed string if non-conforming
 */
export function normalizePhone(phone: string): string {
  if (!phone) return '';
  let cleaned = phone.trim().replace(/[\s\-()]/g, '');
  if (cleaned.startsWith('+91')) {
    cleaned = cleaned.slice(3);
  } else if (cleaned.startsWith('91') && cleaned.length === 12 && /^[6-9]/.test(cleaned.slice(2))) {
    cleaned = cleaned.slice(2);
  } else if (cleaned.startsWith('0') && cleaned.length === 11 && /^[6-9]/.test(cleaned.slice(1))) {
    cleaned = cleaned.slice(1);
  }
  return cleaned;
}

/**
 * Validates a normalized Indian phone number: 10 digits, starts with 6, 7, 8, or 9.
 */
export function isValidIndianPhone(phone: string): boolean {
  const normalized = normalizePhone(phone);
  return /^[6-9]\d{9}$/.test(normalized);
}

/**
 * Validates an Indian pincode: 6 digits, first digit 1-9.
 */
export function isValidIndianPincode(pincode: string): boolean {
  return /^[1-9][0-9]{5}$/.test(pincode.trim());
}

/**
 * Donor Registration Validation Schema.
 * Enforces all Step 4 constraints.
 */
export const donorRegistrationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .refine((val) => val.trim().length >= 2, {
      message: 'Name must be at least 2 characters',
    }),
  blood_group: z.enum(
    BLOOD_GROUPS as unknown as [BloodGroup, ...BloodGroup[]],
    { message: 'Please select a valid blood group' }
  ),
  locality: z
    .string()
    .trim()
    .min(1, 'Locality is required')
    .refine((val) => val.trim().length > 0, {
      message: 'Locality cannot be empty',
    }),
  pincode: z
    .string()
    .trim()
    .min(1, 'Pincode is required')
    .refine(isValidIndianPincode, {
      message: 'Please enter a valid 6-digit Indian pincode (e.g. 680308)',
    }),
  last_donation_date: z
    .string()
    .trim()
    .min(1, 'Last donation date is required')
    .refine(
      (val) => {
        if (!val) return false;
        const d = new Date(val);
        if (isNaN(d.getTime())) return false;
        // Check date is not in future
        const today = new Date();
        today.setHours(23, 59, 59, 999);
        return d <= today;
      },
      { message: 'Last donation date cannot be in the future' }
    ),
  phone: z
    .string()
    .trim()
    .min(1, 'Phone number is required')
    .refine(isValidIndianPhone, {
      message: 'Please enter a valid 10-digit mobile number starting with 6-9',
    })
    .transform((val) => normalizePhone(val)),
});

export type DonorRegistrationFormData = z.input<typeof donorRegistrationSchema>;
export type NormalizedDonorData = z.output<typeof donorRegistrationSchema>;

/**
 * Blood Request Validation Schema.
 * Enforces all Step 4 constraints.
 */
export const bloodRequestSchema = z.object({
  requester_name: z
    .string()
    .trim()
    .min(1, 'Requester name is required')
    .refine((val) => val.trim().length >= 2, {
      message: 'Requester name must be at least 2 characters',
    }),
  blood_group: z.enum(
    BLOOD_GROUPS as unknown as [BloodGroup, ...BloodGroup[]],
    { message: 'Please select a valid blood group' }
  ),
  locality: z
    .string()
    .trim()
    .min(1, 'Locality is required')
    .refine((val) => val.trim().length > 0, {
      message: 'Locality cannot be empty',
    }),
  pincode: z
    .string()
    .trim()
    .min(1, 'Pincode is required')
    .refine(isValidIndianPincode, {
      message: 'Please enter a valid 6-digit Indian pincode (e.g. 680308)',
    }),
  hospital: z
    .string()
    .trim()
    .min(1, 'Hospital name is required')
    .refine((val) => val.trim().length > 0, {
      message: 'Hospital name cannot be empty',
    }),
  urgency: z.enum(
    ['urgent', 'normal'] as [UrgencyLevel, ...UrgencyLevel[]],
    { message: 'Urgency must be either urgent or normal' }
  ),
  phone: z
    .string()
    .trim()
    .min(1, 'Phone number is required')
    .refine(isValidIndianPhone, {
      message: 'Please enter a valid 10-digit mobile number starting with 6-9',
    })
    .transform((val) => normalizePhone(val)),
});

export type BloodRequestFormData = z.input<typeof bloodRequestSchema>;
export type NormalizedBloodRequestData = z.output<typeof bloodRequestSchema>;

export const acceptMatchSchema = z.object({
  donor_id: z.string().min(1, 'Donor ID is required to authorize acceptance'),
});
