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
export type cartItem = {
  product_id: string;
  category_id: string;
  name: string;
  description: string;
  image_url: string[];
  price: number;
  status: string;
  stock: number;
  quantity: number;
};
export type order = {
  order_id: string;
  customer_id: string;
  created_at: Date;
  status: string;
  total_amount: number;
  method: string;
  profile: any[];
};
