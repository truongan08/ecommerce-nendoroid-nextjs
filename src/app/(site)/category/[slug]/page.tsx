import CategoryContent from "./components/CategoryContent";

const ProductCategory = async ({ params }: { params: { slug: string } }) => {
  return (
    <div className="w-full mx-auto p-6">
      <CategoryContent type={params.slug} />
    </div>
  );
};

export default ProductCategory;
