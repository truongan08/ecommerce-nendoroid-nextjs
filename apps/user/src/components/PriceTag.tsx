function formatPrice(price: number) {
  return Number(price).toLocaleString("it-IT", {
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
