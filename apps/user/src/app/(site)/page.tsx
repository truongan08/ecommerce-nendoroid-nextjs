import Slider from "@/components/Slider";
import PageContent from "./components/PageContent";
import CategoryGrid from "@/components/CategoryGrid";
import Chatwoot from "@/components/ChatWoot";

const HomePage = () => {
  return (
    <>
      <Slider />
      <CategoryGrid />
      <PageContent />
      <Chatwoot />
    </>
  );
};

export default HomePage;
