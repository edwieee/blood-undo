'use client';

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { BLOOD_GROUPS } from '../../lib/constants';
import { registerDonorAction } from '../../app/actions/donors';
import { donorRegistrationSchema } from '../../lib/validation/schemas';
import { CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

interface FormState {
  name: string;
  blood_group: string;
  locality: string;
  pincode: string;
  last_donation_date: string;
  phone: string;
}

const initialFormState: FormState = {
  name: '',
  blood_group: '',
  locality: '',
  pincode: '',
  last_donation_date: '',
  phone: '',
};

export const DonorRegistrationForm: React.FC = () => {
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
    const validationResult = donorRegistrationSchema.safeParse(formData);
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
      const response = await registerDonorAction(formData);

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

  const todayDateString = new Date().toISOString().split('T')[0];

  if (isSuccess) {
    return (
      <div className="rounded-xl border border-white/[0.08] bg-[#07070a] p-8 sm:p-10 text-center space-y-6 max-w-xl mx-auto">
        <div className="w-12 h-12 rounded-full bg-[#df2531]/10 border border-[#df2531]/30 flex items-center justify-center text-[#df2531] mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-[#df2531] uppercase">
            DONOR REGISTERED
          </span>
          <h2 className="font-display font-bold text-2xl text-white">
            Registration Confirmed
          </h2>
          <p className="text-sm text-white/70 font-normal leading-relaxed">
            Your donor information has been securely saved.
          </p>
        </div>

        <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 text-xs text-white/70 space-y-1.5 text-left font-sans">
          <div className="flex items-center gap-2 text-white font-medium mb-1">
            <ShieldCheck className="w-4 h-4 text-[#df2531]" />
            Privacy Protection Active
          </div>
          <div>• Contact phone numbers are encrypted and strictly private.</div>
          <div>• No phone number is ever broadcast to public lists or social channels.</div>
          <div>• You will be privately alerted only when a nearby compatible request is recorded.</div>
        </div>

        <div className="pt-2">
          <Button variant="secondary" size="md" onClick={handleReset} fullWidth>
            Register Another Donor
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#07070a] p-6 sm:p-9 max-w-xl mx-auto">
      <div className="mb-6 space-y-1.5">
        <span className="text-[10px] font-mono tracking-widest text-[#df2531] uppercase">
          DONOR REGISTRATION
        </span>
        <h2 className="font-display font-bold text-2xl text-white">
          Become a Blood Donor
        </h2>
        <p className="text-sm text-white/60 font-normal leading-relaxed">
          Register with your blood group and locality. Your contact details remain private.
        </p>
      </div>

      {globalError && (
        <div className="mb-6 rounded-lg border border-[#df2531]/30 bg-[#df2531]/10 p-3.5 text-xs text-[#df2531] flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{globalError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* SECTION 1: YOUR DETAILS */}
        <div className="space-y-3.5">
          <div className="text-[11px] font-mono tracking-wider text-[#df2531] uppercase pb-1.5 border-b border-white/[0.06]">
            Your Details
          </div>

          <Input
            id="name"
            name="name"
            label="Full Name"
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={handleChange}
            error={fieldErrors.name}
            required
            disabled={isSubmitting}
            autoComplete="name"
          />

          <Select
            id="blood_group"
            name="blood_group"
            label="Blood Group"
            placeholder="Select blood group"
            options={BLOOD_GROUPS}
            value={formData.blood_group}
            onChange={handleChange}
            error={fieldErrors.blood_group}
            required
            disabled={isSubmitting}
          />
        </div>

        {/* SECTION 2: LOCATION */}
        <div className="space-y-3.5">
          <div className="text-[11px] font-mono tracking-wider text-[#df2531] uppercase pb-1.5 border-b border-white/[0.06]">
            Location
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              id="locality"
              name="locality"
              label="Locality or City"
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
        </div>

        {/* SECTION 3: ELIGIBILITY */}
        <div className="space-y-3.5">
          <div className="text-[11px] font-mono tracking-wider text-[#df2531] uppercase pb-1.5 border-b border-white/[0.06]">
            Eligibility
          </div>

          <Input
            id="last_donation_date"
            name="last_donation_date"
            type="date"
            label="Last Donation Date"
            max={todayDateString}
            value={formData.last_donation_date}
            onChange={handleChange}
            error={fieldErrors.last_donation_date}
            helperText="Date of your most recent blood donation. Used to calculate safe 90-day cooldown."
            required
            disabled={isSubmitting}
          />
        </div>

        {/* SECTION 4: CONTACT */}
        <div className="space-y-3.5">
          <div className="text-[11px] font-mono tracking-wider text-[#df2531] uppercase pb-1.5 border-b border-white/[0.06]">
            Contact & Privacy
          </div>

          <Input
            id="phone"
            name="phone"
            type="tel"
            label="Mobile Phone Number"
            placeholder="e.g. 9876543210"
            value={formData.phone}
            onChange={handleChange}
            error={fieldErrors.phone}
            helperText="Stored securely. Never displayed publicly or shared without verified acceptance."
            required
            disabled={isSubmitting}
            autoComplete="tel"
          />
        </div>

        {/* Submit CTA */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Register as Donor'}
          </Button>
        </div>
      </form>
    </div>
  );
};
