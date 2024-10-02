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
