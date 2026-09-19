/**
 * One-off script to inspect existing Supabase tables.
 * Run with: npx tsx scripts/inspect-tables.ts
 *
 * This does NOT modify any data. It only checks whether
 * the target tables exist in the public schema.
 */

import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  console.error('Missing env vars. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.');
  process.exit(1);
}

const supabase = createClient(url, key);

async function inspectTables() {
  console.log('Inspecting existing Supabase tables...\n');

  for (const table of ['donors', 'requests', 'matches']) {
    const result = await supabase.from(table).select('id').limit(1);
    if (result.error) {
      const msg = result.error.message || '';
      const code = result.error.code || '';
      if (msg.includes('does not exist') || code === '42P01') {
        console.log(`  ${table}: DOES NOT EXIST (safe to create)`);
      } else if (code === '42501' || msg.includes('permission denied')) {
        console.log(`  ${table}: EXISTS (RLS blocks anon read — expected)`);
      } else {
        console.log(`  ${table}: QUERY ERROR — code=${code} message="${msg}"`);
      }
    } else {
      console.log(`  ${table}: EXISTS (${result.data?.length ?? 0} rows visible to anon)`);
    }
  }

  console.log('\nDone.');
}

inspectTables().catch(console.error);
