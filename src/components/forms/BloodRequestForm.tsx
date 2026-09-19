'use client';

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { BLOOD_GROUPS } from '../../lib/constants';
import { submitBloodRequestAction } from '../../app/actions/requests';
import { bloodRequestSchema } from '../../lib/validation/schemas';
import { CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

interface FormState {
  requester_name: string;
  blood_group: string;
  locality: string;
  pincode: string;
  hospital: string;
  urgency: string;
  phone: string;
}

const initialFormState: FormState = {
  requester_name: '',
  blood_group: '',
  locality: '',
  pincode: '',
  hospital: '',
  urgency: 'urgent',
  phone: '',
};

const urgencyOptions = [
  { value: 'urgent', label: 'Urgent (Required within 24 hours)' },
  { value: 'normal', label: 'Normal (Standard scheduled requirement)' },
];

export const BloodRequestForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (globalError) setGlobalError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGlobalError(null);
    setFieldErrors({});

    // Client-side validation
    const validationResult = bloodRequestSchema.safeParse(formData);
    if (!validationResult.success) {
      const errors: Record<string, string> = {};
      for (const issue of validationResult.error.issues) {
        const field = issue.path[0];
        if (typeof field === 'string' && !errors[field]) {
          errors[field] = issue.message;
        }
      }
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitBloodRequestAction(formData);

      if (!response.success) {
        if (response.fieldErrors) {
          setFieldErrors(response.fieldErrors);
        }
        setGlobalError(
          response.error || 'Something went wrong while submitting. Please try again.'
        );
      } else {
        setIsSuccess(true);
        setFormData(initialFormState);
      }
    } catch {
      setGlobalError('Something went wrong while submitting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData(initialFormState);
    setFieldErrors({});
    setGlobalError(null);
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#08080c] p-8 sm:p-10 shadow-2xl text-center space-y-6 max-w-xl mx-auto">
        <div className="w-12 h-12 rounded-full bg-[#df2531]/15 border border-[#df2531]/40 flex items-center justify-center text-[#df2531] mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-[#df2531] uppercase">
            REQUEST SUBMITTED
          </span>
          <h2 className="font-display font-bold text-2xl text-white">
            Blood Request Recorded
          </h2>
          <p className="text-sm text-white/70 font-light leading-relaxed">
            Your blood request has been recorded.
          </p>
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-xs font-mono text-white/60 space-y-1.5 text-left">
          <div className="flex items-center gap-2 text-white/90 font-semibold mb-1">
            <ShieldCheck className="w-4 h-4 text-[#df2531]" />
            Request Status: Pending
          </div>
          <div>• Request safely logged in the system with status pending.</div>
          <div>• Requester phone number remains confidential and protected by RLS.</div>
          <div>• Zero public broadcasting: phone numbers are never shared publicly.</div>
        </div>

        <div className="pt-2">
          <Button variant="secondary" size="md" onClick={handleReset} fullWidth>
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-[#08080c] p-6 sm:p-10 shadow-2xl max-w-xl mx-auto">
      <div className="mb-6 space-y-1.5">
        <span className="text-[10px] font-mono tracking-widest text-[#df2531] uppercase">
          REQUEST BLOOD
        </span>
        <h2 className="font-display font-bold text-2xl text-white">
          Submit Blood Request
        </h2>
        <p className="text-sm text-white/60 font-light">
          Enter blood requirement details. Your contact information is never broadcast publicly.
        </p>
      </div>

      {globalError && (
        <div className="mb-6 rounded-xl border border-[#df2531]/40 bg-[#df2531]/10 p-4 text-xs font-mono text-[#df2531] flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{globalError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Requester Name */}
        <Input
          id="requester_name"
          name="requester_name"
          label="Requester / Patient Name"
          placeholder="e.g. Dr. Anita / Patient Attendant"
          value={formData.requester_name}
          onChange={handleChange}
          error={fieldErrors.requester_name}
          required
          disabled={isSubmitting}
          autoComplete="name"
        />

        {/* Blood Group & Urgency */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Select
            id="blood_group"
            name="blood_group"
            label="Blood Group Required"
            placeholder="Select blood group"
            options={BLOOD_GROUPS}
            value={formData.blood_group}
            onChange={handleChange}
            error={fieldErrors.blood_group}
            required
            disabled={isSubmitting}
          />

          <Select
            id="urgency"
            name="urgency"
            label="Urgency Level"
            options={urgencyOptions}
            value={formData.urgency}
            onChange={handleChange}
            error={fieldErrors.urgency}
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Hospital */}
        <Input
          id="hospital"
          name="hospital"
          label="Hospital / Medical Center"
          placeholder="e.g. City General Hospital"
          value={formData.hospital}
          onChange={handleChange}
          error={fieldErrors.hospital}
          required
          disabled={isSubmitting}
        />

        {/* Locality & Pincode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            id="locality"
            name="locality"
            label="Locality / City"
            placeholder="e.g. Koratty"
            value={formData.locality}
            onChange={handleChange}
            error={fieldErrors.locality}
            required
            disabled={isSubmitting}
          />

          <Input
            id="pincode"
            name="pincode"
            label="Pincode"
            placeholder="e.g. 680308"
            maxLength={6}
            value={formData.pincode}
            onChange={handleChange}
            error={fieldErrors.pincode}
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Phone Number */}
        <Input
          id="phone"
          name="phone"
          type="tel"
          label="Contact Phone Number"
          placeholder="e.g. 9876543210"
          value={formData.phone}
          onChange={handleChange}
          error={fieldErrors.phone}
          helperText="Private: Never displayed publicly or shared without verified acceptance"
          required
          disabled={isSubmitting}
          autoComplete="tel"
        />

        {/* Submit CTA */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Blood Request'}
          </Button>
        </div>
      </form>
    </div>
  );
};
