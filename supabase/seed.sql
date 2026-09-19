-- ============================================================
-- REDLINK — Development Seed Data
--
-- Clearly fake demo data for testing the future matching engine.
-- All phone numbers are obviously not real personal contacts.
--
-- Run this AFTER 001_initial_schema.sql has been applied.
--
-- This script does NOT drop or delete any existing data.
-- It only INSERTs new rows.
-- ============================================================

-- ----------------------------------------------------------
-- DONORS
-- ----------------------------------------------------------

-- Donor A: O+, Koratty, eligible (donated 6 months ago)
INSERT INTO donors (name, blood_group, locality, pincode, last_donation_date, phone)
VALUES ('Demo Donor A', 'O+', 'Koratty', '680308', CURRENT_DATE - INTERVAL '180 days', '9000000001');

-- Donor B: O+, Koratty, NOT eligible (donated 30 days ago — within 90-day interval)
INSERT INTO donors (name, blood_group, locality, pincode, last_donation_date, phone)
VALUES ('Demo Donor B', 'O+', 'Koratty', '680308', CURRENT_DATE - INTERVAL '30 days', '9000000002');

-- Donor C: A+, Koratty, eligible (donated 4 months ago)
INSERT INTO donors (name, blood_group, locality, pincode, last_donation_date, phone)
VALUES ('Demo Donor C', 'A+', 'Koratty', '680308', CURRENT_DATE - INTERVAL '120 days', '9000000003');

-- Donor D: O-, Irinjalakuda (nearby locality), eligible (donated 5 months ago)
INSERT INTO donors (name, blood_group, locality, pincode, last_donation_date, phone)
VALUES ('Demo Donor D', 'O-', 'Irinjalakuda', '680121', CURRENT_DATE - INTERVAL '150 days', '9000000004');

-- ----------------------------------------------------------
-- REQUESTS
-- ----------------------------------------------------------

-- One test request: O+ blood needed at a fake hospital
INSERT INTO requests (requester_name, blood_group, locality, pincode, hospital, urgency, phone)
VALUES ('Demo Requester', 'O+', 'Koratty', '680308', 'Demo General Hospital', 'urgent', '9000000099');
