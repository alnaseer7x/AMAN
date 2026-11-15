import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

type Database = {
  public: {
    Tables: {
      aman_demo_projects: {
        Row: {
          id: string;
          title: string;
          amount: number;
          created_at: string;
        };
        Insert: {
          id: string;
          title: string;
          amount: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          amount?: number;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

let client: ReturnType<typeof createClient<Database>> | undefined;

export function getSupabaseClient() {
  if (!isSupabaseConfigured) {
    throw new Error('إعدادات Supabase غير مكتملة.');
  }

  client ??= createClient<Database>(supabaseUrl, supabaseAnonKey);
  return client;
}
