function formatPrice(price: number) {
  return (price * 1000).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
}
interface PriceTagProps {
  price: number;
  className?: string;
}

export default function PriceTag({ price, className }: PriceTagProps) {
  return <span className={`badge ${className}`}>{formatPrice(price)}</span>;
}
