import CategoryContent from "./components/CategoryContent";

const ProductCategory = async ({ params }: { params: { slug: string } }) => {
  const slug = decodeURIComponent(params.slug);
  return (
    <div className="w-full mx-auto p-6">
      <CategoryContent type={slug} />
    </div>
  );
};

export default ProductCategory;
