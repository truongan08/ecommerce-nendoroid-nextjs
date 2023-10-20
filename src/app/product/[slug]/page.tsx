import getNenPagination from "@/action/getNenPagination";

import getRange from "@/action/getRange";
import ProductContent from "./components/ProductContent";
import NotFound from "@/components/404";

const Product = async ({ params }: { params: { slug: number } }) => {
  const { from, to } = getRange(Number(params.slug));
  const nendoroid = await getNenPagination(from, to);

  if (isNaN(Number(params.slug))) {
    return <NotFound />;
  }

  return (
    <div className="w-full mx-auto p-6 mt-12 max-md:mt-16">
      <ProductContent nendoroids={nendoroid} page={Number(params.slug)} />
    </div>
  );
};

export default Product;
