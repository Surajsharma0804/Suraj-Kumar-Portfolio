// src/integrations/supabase/client.ts
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  throw new Error(
    'Missing Supabase env variables. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY are set in your .env'
  );
}

/** Detect browser environment (prevents errors in SSR/tooling) */
const isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

/**
 * Typed Supabase client.
 * Usage: import { supabase } from "@/integrations/supabase/client";
 *
 * IMPORTANT:
 * - Do NOT use service_role (secret) keys here; keep them server-side.
 */
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: isBrowser ? (window.localStorage as unknown as Storage) : undefined,
    persistSession: isBrowser,
    autoRefreshToken: isBrowser,
  },
});
