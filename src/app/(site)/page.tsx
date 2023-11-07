import Slider from "@/components/Slider";
import PageContent from "./components/PageContent";
import CategoryGrid from "@/components/CategoryGrid";
import getSeller from "@/lib/redux/action/getSeller";


const HomePage = () => {
  return (
    <>
      <Slider />
      <CategoryGrid />
      <PageContent />
    </>
  );
};

export default HomePage;
