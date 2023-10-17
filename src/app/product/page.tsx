import getNendoroid from "@/action/getNendoroid";
import PageContent from "../product/components/PageContent";

const Product = async () => {
  const nendoroid = await getNendoroid();
  return <PageContent nendoroids={nendoroid} />;
};

export default Product;
