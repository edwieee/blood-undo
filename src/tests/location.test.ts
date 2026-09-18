import { describe, it, expect } from 'vitest';
import { isLocationMatch, normalizeLocationText } from '../lib/matching/location';

describe('Location Matching Module', () => {
  it('should normalize text by stripping punctuation, whitespace, and lowercasing', () => {
    expect(normalizeLocationText('  Kakkanad, Kochi! ')).toBe('kakkanadkochi');
    expect(normalizeLocationText('MG Road / Sector-4')).toBe('mgroadsector4');
  });

  it('Tier 1: should match exact 6-digit pincode even if locality strings differ', () => {
    const result = isLocationMatch('Marine Drive', '682001', 'High Court Junction', '682001');
    expect(result.isMatch).toBe(true);
    expect(result.tier).toBe('EXACT_PINCODE');
  });

  it('Tier 2: should match identical normalized locality even if pincodes differ slightly', () => {
    const result = isLocationMatch('Kaloor', '682017', '  kaloor  ', '682099');
    expect(result.isMatch).toBe(true);
    expect(result.tier).toBe('LOCALITY');
  });

  it('Tier 3: should match district postal prefix (first 3 digits)', () => {
    // Both start with 682 (Ernakulam district)
    const result = isLocationMatch('Aluva', '682025', 'Edappally', '682024');
    expect(result.isMatch).toBe(true);
    expect(result.tier).toBe('DISTRICT_PREFIX');
  });

  it('should cleanly reject locations across different districts and states', () => {
    // Kochi (682001) vs Delhi (110001)
    const result = isLocationMatch('Kochi', '682001', 'Connaught Place', '110001');
    expect(result.isMatch).toBe(false);
    expect(result.tier).toBe('NONE');
  });
});
