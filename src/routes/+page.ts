import type { PageLoad } from "./$types";
import { SClient } from "$lib/supa";
import { error as e } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }) => {
  const { data, error } = await SClient.from("Product").select("*").limit(20);

  if (error) {
    console.error(error);
    e(500, "Veritabanı hatası.");
  }

  const { data: CData, error: CError } = await SClient.from("Category").select(
    "*"
  );

  if (CError) {
    console.error(CError);
    e(500, "Veritabanı hatası.");
  }

  const newData: Record<string, Array<{ sub: string; id: number }>> = {};

  CData.forEach((cat) => {
    try {
      newData[cat.name].push({ sub: cat.subcategory || "", id: cat.id });
    } catch (error) {
      newData[cat.name] = [{ sub: cat.subcategory || "", id: cat.id }];
    }
  });

  return { items: data, categories: newData };
};
