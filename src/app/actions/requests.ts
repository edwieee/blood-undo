'use server';

import { supabase } from '../../lib/supabase';
import { bloodRequestSchema } from '../../lib/validation/schemas';

export interface ActionResponse {
  success: boolean;
  message?: string;
  error?: string;
  fieldErrors?: Record<string, string>;
}

/**
 * Server Action to submit a new blood request.
 *
 * Enforces:
 * 1. Server-side validation & normalization via bloodRequestSchema
 * 2. Supabase insert into `requests` table with status: 'pending'
 * 3. No `.select()` call (complies with RLS insert-only anon policy)
 * 4. Zero matching logic execution (Step 4 only records the request)
 * 5. Zero exposure of phone numbers or internal error messages
 */
export async function submitBloodRequestAction(data: unknown): Promise<ActionResponse> {
  // 1. Server-side validation
  const parseResult = bloodRequestSchema.safeParse(data);

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

  const {
    requester_name,
    blood_group,
    locality,
    pincode,
    hospital,
    urgency,
    phone,
  } = parseResult.data;

  try {
    // 2. Supabase INSERT without SELECT (RLS anon insert policy)
    // Request status explicitly set to 'pending'. No matching engine triggered.
    const { error } = await supabase.from('requests').insert([
      {
        requester_name,
        blood_group,
        locality,
        pincode,
        hospital,
        urgency,
        phone,
        status: 'pending',
      },
    ]);

    if (error) {
      // Safe logging without exposing phone numbers or user data
      console.error(
        '[BloodRequest] Database insert error code:',
        error.code
      );
      return {
        success: false,
        error: 'Something went wrong while submitting. Please try again.',
      };
    }

    return {
      success: true,
      message: 'Your blood request has been recorded.',
    };
  } catch (err) {
    console.error('[BloodRequest] Unexpected submission failure');
    return {
      success: false,
      error: 'Something went wrong while submitting. Please try again.',
    };
  }
}
