import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
const supabase = createClient(url, key);

async function testInsert() {
  console.log('Testing anon insert into donors...');
  const donorRes = await supabase.from('donors').insert([{
    name: 'Verification Donor Test',
    blood_group: 'O+',
    locality: 'Koratty',
    pincode: '680308',
    last_donation_date: '2026-01-15',
    phone: '9876543210'
  }]);
  console.log('Donor insert error:', donorRes.error);
  console.log('Donor insert status:', donorRes.status);

  console.log('\nTesting anon insert into requests...');
  const reqRes = await supabase.from('requests').insert([{
    requester_name: 'Verification Requester Test',
    blood_group: 'O+',
    locality: 'Koratty',
    pincode: '680308',
    hospital: 'Demo General Hospital',
    urgency: 'urgent',
    phone: '9876543210',
    status: 'pending'
  }]);
  console.log('Request insert error:', reqRes.error);
  console.log('Request insert status:', reqRes.status);
}

testInsert().catch(console.error);
