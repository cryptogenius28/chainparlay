import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

/**
 * Browser/client-safe Supabase client (anon key, RLS enforced).
 * Use this for reads from client components and route handlers
 * that don't need elevated privileges.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Server-only client using the service role key. Never import this
 * from a client component — it bypasses RLS.
 *
 * Tables to set up in Supabase for this project:
 * - platforms        (mirrors lib/platforms.ts once data is live-managed)
 * - leads            (email signups from the newsletter / odds-alert form)
 * - click_events     (affiliate click tracking: platform_slug, ts, ref)
 */
export function getServiceRoleClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
