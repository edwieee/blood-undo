import { z } from 'zod';
import { BLOOD_GROUPS, URGENCY_LEVELS } from '../constants';

export const donorRegistrationSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters'),
  blood_group: z.enum(BLOOD_GROUPS as unknown as [string, ...string[]]),
  locality: z.string().trim().min(2, 'Locality is required'),
  pincode: z
    .string()
    .trim()
    .regex(/^[1-9][0-9]{5}$/, 'Must be a valid 6-digit Indian PIN code (e.g. 682001)'),
  last_donation_date: z
    .string()
    .nullable()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        const d = new Date(val);
        return !isNaN(d.getTime()) && d <= new Date();
      },
      { message: 'Last donation date cannot be in the future' }
    ),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, 'Must be a valid 10-digit mobile number starting with 6-9'),
});

export const bloodRequestSchema = z.object({
  requester_name: z.string().trim().min(2, 'Requester name must be at least 2 characters'),
  blood_group: z.enum(BLOOD_GROUPS as unknown as [string, ...string[]]),
  locality: z.string().trim().min(2, 'Locality is required'),
  pincode: z
    .string()
    .trim()
    .regex(/^[1-9][0-9]{5}$/, 'Must be a valid 6-digit Indian PIN code (e.g. 682001)'),
  hospital: z.string().trim().min(2, 'Hospital name is required'),
  urgency: z.enum(URGENCY_LEVELS as unknown as [string, ...string[]]),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, 'Must be a valid 10-digit mobile number starting with 6-9'),
});

export const acceptMatchSchema = z.object({
  donor_id: z.string().min(1, 'Donor ID is required to authorize acceptance'),
});
