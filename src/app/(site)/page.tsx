import Slider from "@/components/Slider";
import Nav from "@/components/Nav";
import PageContent from "./components/PageContent";
import getTrendNendoroid from "@/action/getTrendNendoroid";
import { SessionProvider } from "@/provider/session-provider";

const HomePage = async () => {
  const nendoroid = await getTrendNendoroid();
  return (
    <>
      <Nav />
      <Slider />
      <PageContent nendoroids={nendoroid} />;
    </>
  );
};

export default HomePage;
