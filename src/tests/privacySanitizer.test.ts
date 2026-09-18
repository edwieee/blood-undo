import { describe, it, expect } from 'vitest';
import { sanitizeDonorForRequester, sanitizeRequestForDonor } from '../lib/privacy/sanitizer';
import { BloodRequest, Donor, Match } from '../lib/types';

describe('Privacy & Phone Number Sanitizer (Zero-Leakage Boundary)', () => {
  const mockDonor: Donor = {
    id: 'donor-uuid-123',
    name: 'Rahul Sharma',
    blood_group: 'A+',
    locality: 'Kochi',
    pincode: '682001',
    last_donation_date: '2026-05-01',
    phone: '9840198401', // SENSITIVE
    created_at: new Date().toISOString(),
  };

  const mockRequest: BloodRequest = {
    id: 'req-uuid-456',
    requester_name: 'Dr. Anita',
    blood_group: 'A+',
    locality: 'Kochi',
    pincode: '682001',
    hospital: 'City General Hospital',
    urgency: 'CRITICAL',
    phone: '9876543210', // SENSITIVE
    status: 'OPEN',
    created_at: new Date().toISOString(),
  };

  it('BEFORE ACCEPTANCE: Requester must NOT receive donor phone number', () => {
    const unacceptedMatch: Match = {
      id: 'match-uuid-789',
      request_id: mockRequest.id,
      donor_id: mockDonor.id,
      status: 'NOTIFIED',
      created_at: new Date().toISOString(),
      accepted_at: null,
    };

    const sanitized = sanitizeDonorForRequester(mockDonor, unacceptedMatch);

    // Assert that the phone is strictly null and flagged as hidden
    expect(sanitized.phone).toBeNull();
    expect(sanitized.is_phone_revealed).toBe(false);
    expect(sanitized.name).toBe('Rahul Sharma');
  });

  it('BEFORE ACCEPTANCE: Donor must NOT receive requester phone number', () => {
    const sanitized = sanitizeRequestForDonor(mockRequest, 'NOTIFIED');

    // Assert that the requester phone is strictly null and flagged as hidden
    expect(sanitized.phone).toBeNull();
    expect(sanitized.is_phone_revealed).toBe(false);
    expect(sanitized.hospital).toBe('City General Hospital');
  });

  it('AFTER ACCEPTANCE: Both parties mutually receive each other’s contact info', () => {
    const acceptedMatch: Match = {
      id: 'match-uuid-789',
      request_id: mockRequest.id,
      donor_id: mockDonor.id,
      status: 'ACCEPTED',
      created_at: new Date().toISOString(),
      accepted_at: new Date().toISOString(),
    };

    const sanitizedDonor = sanitizeDonorForRequester(mockDonor, acceptedMatch);
    const sanitizedRequest = sanitizeRequestForDonor(mockRequest, 'ACCEPTED');

    expect(sanitizedDonor.phone).toBe('9840198401');
    expect(sanitizedDonor.is_phone_revealed).toBe(true);

    expect(sanitizedRequest.phone).toBe('9876543210');
    expect(sanitizedRequest.is_phone_revealed).toBe(true);
  });
});
