export type ProductTable = { data: Product[] };

export type Product = {
  product_id: string;
  category_id: string;
  name: string;
  description: string;
  image_url: string[];
  price: number;
  status: string;
  stock: number;
};
