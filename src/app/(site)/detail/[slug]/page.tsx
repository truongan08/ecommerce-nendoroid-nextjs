import DetailContent from "./components/DetailContent";
import NotFound from "@/components/404";

const Product = async ({ params }: { params: { slug: string } }) => {
  return (
    <div className="w-full mx-auto p-6 mt-12 max-md:mt-16">
      <DetailContent product_id={params.slug} />
    </div>
  );
};

export default Product;
