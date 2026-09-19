'use server';

import { supabase } from '../../lib/supabase';
import { donorRegistrationSchema } from '../../lib/validation/schemas';

export interface ActionResponse {
  success: boolean;
  message?: string;
  error?: string;
  fieldErrors?: Record<string, string>;
}

/**
 * Server Action to register a new blood donor.
 *
 * Enforces:
 * 1. Server-side validation & normalization via donorRegistrationSchema
 * 2. Supabase insert into `donors` table
 * 3. No `.select()` call (complies with RLS insert-only anon policy)
 * 4. Zero exposure of phone numbers or sensitive internal error messages
 */
export async function registerDonorAction(data: unknown): Promise<ActionResponse> {
  // 1. Server-side validation
  const parseResult = donorRegistrationSchema.safeParse(data);

  if (!parseResult.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parseResult.error.issues) {
      const field = issue.path[0];
      if (typeof field === 'string' && !fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }
    return {
      success: false,
      error: 'Please correct the errors in the form.',
      fieldErrors,
    };
  }

  const { name, blood_group, locality, pincode, last_donation_date, phone } =
    parseResult.data;

  try {
    // 2. Supabase INSERT without SELECT (RLS anon insert policy)
    const { error } = await supabase.from('donors').insert([
      {
        name,
        blood_group,
        locality,
        pincode,
        last_donation_date,
        phone,
      },
    ]);

    if (error) {
      // Safe logging without exposing phone number or user data
      console.error(
        '[DonorRegistration] Database insert error code:',
        error.code
      );
      return {
        success: false,
        error: 'Something went wrong while submitting. Please try again.',
      };
    }

    return {
      success: true,
      message: 'Your donor information has been securely saved.',
    };
  } catch (err) {
    console.error('[DonorRegistration] Unexpected submission failure');
    return {
      success: false,
      error: 'Something went wrong while submitting. Please try again.',
    };
  }
}
