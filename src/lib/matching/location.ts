export type LocationMatchTier = 'EXACT_PINCODE' | 'LOCALITY' | 'DISTRICT_PREFIX' | 'NONE';

export interface LocationMatchResult {
  isMatch: boolean;
  tier: LocationMatchTier;
  explanation: string;
}

/**
 * Normalizes an arbitrary text string for tolerant alphanumeric comparison.
 */
export function normalizeLocationText(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, '');
}

/**
 * Deterministically determines whether a donor location matches the requested blood location.
 * 
 * Hierarchy:
 * 1. Tier 1: Exact 6-digit Pincode match (Immediate local postal sector)
 * 2. Tier 2: Locality text match (Normalized string equality)
 * 3. Tier 3: District postal sorting prefix (First 3 digits of Indian PIN represent the same postal district, e.g. 682xxx for Ernakulam)
 * 
 * @param donorLocality Locality name of donor
 * @param donorPincode 6-digit PIN code of donor
 * @param reqLocality Locality name of hospital / requester
 * @param reqPincode 6-digit PIN code of hospital / requester
 */
export function isLocationMatch(
  donorLocality: string,
  donorPincode: string,
  reqLocality: string,
  reqPincode: string
): LocationMatchResult {
  const normDonorPin = donorPincode.trim();
  const normReqPin = reqPincode.trim();
  const normDonorLoc = normalizeLocationText(donorLocality);
  const normReqLoc = normalizeLocationText(reqLocality);

  // 1. Exact Pincode match
  if (normDonorPin && normReqPin && normDonorPin === normReqPin) {
    return {
      isMatch: true,
      tier: 'EXACT_PINCODE',
      explanation: `Exact pincode match (${normDonorPin})`,
    };
  }

  // 2. Locality string match
  if (normDonorLoc && normReqLoc && normDonorLoc === normReqLoc) {
    return {
      isMatch: true,
      tier: 'LOCALITY',
      explanation: `Matching locality (${donorLocality})`,
    };
  }

  // 3. District prefix match (First 3 digits of Indian 6-digit PIN)
  if (
    normDonorPin.length >= 3 &&
    normReqPin.length >= 3 &&
    normDonorPin.slice(0, 3) === normReqPin.slice(0, 3)
  ) {
    return {
      isMatch: true,
      tier: 'DISTRICT_PREFIX',
      explanation: `Same postal district zone (${normDonorPin.slice(0, 3)}xxx)`,
    };
  }

  return {
    isMatch: false,
    tier: 'NONE',
    explanation: 'Outside district and postal radius',
  };
}
