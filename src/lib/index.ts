export interface Category {
  id: number;
  name: string;
  subcategory: string | null;
}

export interface Item {
  categoryId: number;
  id: number;
  name: string;
  picture: string | null;
  price: number;
}

import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

export const SClient = createClient<Database>(
  "https://vyssbmnzigywmtcttpul.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5c3NibW56aWd5d210Y3R0cHVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc3NDIyMzUsImV4cCI6MjA0MzMxODIzNX0.VezFjsCqw1hooQVXQo_7QVxk-wUircsmF2eCTpuxdd0"
);
