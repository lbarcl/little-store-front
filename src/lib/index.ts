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

let process: any;

const p = process?.env ? process.env : import.meta.env;

export const SClient = createClient<Database>(
  "https://vyssbmnzigywmtcttpul.supabase.co",
  process.env.SUPABASE_KEY
);

export async function fetchProducts(
  limit: number = 20,
  searchQuery?: string,
  rangeStart: number = 0,
  categoryId?: Array<Number>
) {
  let queryBuilder = SClient.from("Product").select("*");

  // If there's a search query, use full-text search
  if (searchQuery != undefined && searchQuery.length > 0) {
    if (searchQuery.length < 3) return { data: [], error: null }; // Do not search for very short queries
    queryBuilder = queryBuilder.textSearch(
      "fts",
      searchQuery.replace(" ", "+")
    );
  }

  if (categoryId && categoryId.length > 0)
    queryBuilder.in("categoryId", categoryId);

  // Define the range for pagination
  queryBuilder = queryBuilder.range(rangeStart, rangeStart + limit - 1);

  const { data: productsData, error } = await queryBuilder;
  if (error) {
    console.error("Error loading items from Supabase:", error);
  }

  return { data: productsData, error };
}
