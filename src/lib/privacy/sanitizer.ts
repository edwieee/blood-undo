import { BloodRequest, Donor, Match, MatchStatus, SanitizedDonor, SanitizedRequest } from '../types';

/**
 * Server-side Data Access Layer (DAL) projection for donor data shown to the requester.
 * The donor's phone number is NEVER returned in the JSON payload unless the donor has explicitly accepted the match.
 */
export function sanitizeDonorForRequester(
  donor: Donor,
  match: Match
): SanitizedDonor {
  const isAccepted = match.status === 'ACCEPTED';

  return {
    id: donor.id,
    name: donor.name,
    blood_group: donor.blood_group,
    locality: donor.locality,
    pincode: donor.pincode,
    // Strict privacy boundary: phone is null on the wire before acceptance
    phone: isAccepted ? donor.phone : null,
    is_phone_revealed: isAccepted,
    match_status: match.status,
    accepted_at: match.accepted_at,
  };
}

/**
 * Server-side Data Access Layer (DAL) projection for blood request data shown to the donor.
 * The requester's contact number is NEVER returned in the JSON payload unless the donor has accepted this specific match.
 */
export function sanitizeRequestForDonor(
  request: BloodRequest,
  matchStatus: MatchStatus
): SanitizedRequest {
  const isAccepted = matchStatus === 'ACCEPTED';

  return {
    id: request.id,
    requester_name: request.requester_name,
    blood_group: request.blood_group,
    locality: request.locality,
    pincode: request.pincode,
    hospital: request.hospital,
    urgency: request.urgency,
    // Strict privacy boundary: requester phone is null on the wire before acceptance
    phone: isAccepted ? request.phone : null,
    is_phone_revealed: isAccepted,
    status: request.status,
    created_at: request.created_at,
  };
}
