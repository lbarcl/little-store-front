import type { PageLoad } from "./$types";
import { SClient } from "$lib";
import { error as e } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }) => {
  const { data, error } = await SClient.from("Product").select("*").limit(20);

  if (error) {
    console.error(error);
    e(500, "Veritabanı hatası.");
  }

  return { items: data };
};
