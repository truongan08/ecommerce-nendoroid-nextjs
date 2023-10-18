import Link from "next/link";
import Button from "../Button";

const Banner = () => {
  return (
    <div className="bg-primary text-white py-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Welcome to our E-commerce Store
        </h1>
        <p className="text-lg lg:text-2xl mb-8 text-center">
          Discover amazing products at unbeatable prices.
        </p>
        <Link href="/shop">
          <Button variant="secondary" className="min-w-[7rem]">
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
