function formatPrice(price: number) {
  return (price / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
interface PriceTagProps {
  price: number;
  className?: string;
}

export default function PriceTag({ price, className }: PriceTagProps) {
  return <span className={`badge ${className}`}>{formatPrice(price)}</span>;
}
