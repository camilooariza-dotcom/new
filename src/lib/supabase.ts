import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Evaluation {
  id: string;
  app_name: string;
  app_type: string;
  evaluator_name: string;
  functionality_score: number;
  reliability_score: number;
  usability_score: number;
  efficiency_score: number;
  maintainability_score: number;
  portability_score: number;
  final_score: number;
  observations: string;
  created_at: string;
}
