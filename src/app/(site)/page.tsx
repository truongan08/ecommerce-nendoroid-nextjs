import Slider from "@/components/Slider";
import PageContent from "./components/PageContent";
import getTrendNendoroid from "@/action/getTrendNendoroid";

const HomePage = async () => {
  const nendoroid = await getTrendNendoroid();
  return (
    <>
      <Slider />
      <PageContent nendoroids={nendoroid} />;
    </>
  );
};

export default HomePage;
