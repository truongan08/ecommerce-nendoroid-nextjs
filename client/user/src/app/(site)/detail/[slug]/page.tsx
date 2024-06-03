import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import DetailContent from "./components/DetailContent";
import ProductReview from "./components/Review";
import { cookies } from "next/headers";

const Product = async ({ params }: { params: { slug: string } }) => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { data, error } = await supabase
    .from("review")
    .select("*")
    .eq("product_id", params.slug);
  if (error) {
    throw Error("Fail fetch review");
  }
  return (
    <div className="w-full mx-auto p-6 mt-12 max-md:mt-16">
      <DetailContent product_id={params.slug} />
      <ProductReview props={data} />
    </div>
  );
};

export default Product;
