-- ============================================================
-- REDLINK — Initial Database Schema
-- Migration: 001_initial_schema.sql
--
-- Creates: donors, requests, matches
-- Enables: RLS on all tables
-- Adds:    CHECK constraints, foreign keys, indexes
--
-- IMPORTANT:
--   This migration does NOT drop or delete any existing objects.
--   It uses CREATE TABLE (not CREATE OR REPLACE) so it will
--   fail safely if the tables already exist.
-- ============================================================

-- ----------------------------------------------------------
-- 1. DONORS TABLE
-- ----------------------------------------------------------
CREATE TABLE donors (
  id                  uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name                text        NOT NULL,
  blood_group         text        NOT NULL
    CHECK (blood_group IN ('A+','A-','B+','B-','AB+','AB-','O+','O-')),
  locality            text        NOT NULL,
  pincode             text        NOT NULL,
  last_donation_date  date        NOT NULL,
  phone               text        NOT NULL,
  created_at          timestamptz NOT NULL DEFAULT now()
);

-- ----------------------------------------------------------
-- 2. REQUESTS TABLE
-- ----------------------------------------------------------
CREATE TABLE requests (
  id              uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  requester_name  text        NOT NULL,
  blood_group     text        NOT NULL
    CHECK (blood_group IN ('A+','A-','B+','B-','AB+','AB-','O+','O-')),
  locality        text        NOT NULL,
  pincode         text        NOT NULL,
  hospital        text        NOT NULL,
  urgency         text        NOT NULL
    CHECK (urgency IN ('urgent','normal')),
  phone           text        NOT NULL,
  status          text        NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending','matched','accepted','completed','cancelled')),
  created_at      timestamptz NOT NULL DEFAULT now()
);

-- ----------------------------------------------------------
-- 3. MATCHES TABLE
-- ----------------------------------------------------------
CREATE TABLE matches (
  id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id    uuid        NOT NULL REFERENCES requests(id) ON DELETE CASCADE,
  donor_id      uuid        NOT NULL REFERENCES donors(id)   ON DELETE CASCADE,
  match_type    text        NOT NULL
    CHECK (match_type IN ('exact','compatible')),
  match_status  text        NOT NULL DEFAULT 'pending'
    CHECK (match_status IN ('pending','accepted','declined')),
  matched_at    timestamptz NOT NULL DEFAULT now(),
  accepted_at   timestamptz
);

-- ----------------------------------------------------------
-- 4. INDEXES (12 total)
-- ----------------------------------------------------------

-- donors indexes
CREATE INDEX idx_donors_blood_group       ON donors (blood_group);
CREATE INDEX idx_donors_pincode           ON donors (pincode);
CREATE INDEX idx_donors_locality          ON donors (locality);
CREATE INDEX idx_donors_last_donation     ON donors (last_donation_date);
CREATE INDEX idx_donors_blood_pincode     ON donors (blood_group, pincode);

-- requests indexes
CREATE INDEX idx_requests_blood_group     ON requests (blood_group);
CREATE INDEX idx_requests_pincode         ON requests (pincode);
CREATE INDEX idx_requests_status          ON requests (status);
CREATE INDEX idx_requests_blood_pin_status ON requests (blood_group, pincode, status);

-- matches indexes
CREATE INDEX idx_matches_request_id       ON matches (request_id);
CREATE INDEX idx_matches_donor_id         ON matches (donor_id);
CREATE INDEX idx_matches_status           ON matches (match_status);

-- ----------------------------------------------------------
-- 5. ROW LEVEL SECURITY
-- ----------------------------------------------------------

-- Enable RLS on all tables (enforced even for the anon/publishable key)
ALTER TABLE donors   ENABLE ROW LEVEL SECURITY;
ALTER TABLE requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches  ENABLE ROW LEVEL SECURITY;

-- ----- DONORS -----
-- Allow anonymous users to register as donors (INSERT only).
-- No SELECT policy: anonymous users cannot read donor rows.
-- Phone numbers remain completely inaccessible via public queries.
CREATE POLICY "donors_anon_insert"
  ON donors
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- ----- REQUESTS -----
-- Allow anonymous users to submit blood requests (INSERT only).
-- No SELECT policy: anonymous users cannot read request rows.
-- Phone numbers remain completely inaccessible via public queries.
CREATE POLICY "requests_anon_insert"
  ON requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- ----- MATCHES -----
-- No policies for anon on matches.
-- Matches will be created and read by server-side logic using
-- a secure access mechanism (to be implemented in a future step).
-- This intentionally blocks all anon access to the matches table.

-- NOTE FOR FUTURE STEPS:
-- The matching engine, acceptance flow, and contact reveal will
-- require a server-side access mechanism (e.g., Next.js Server
-- Actions with a Supabase server client using the secret key,
-- or Supabase Edge Functions). That mechanism will be implemented
-- when those features are built. Do NOT weaken these policies to
-- make client-side queries work — the privacy model depends on
-- phone numbers being inaccessible through anonymous access.
