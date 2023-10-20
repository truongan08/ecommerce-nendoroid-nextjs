import Nav from "@/components/Nav";
import Slider from "@/components/Slider";
import PageContent from "./components/PageContent";
import { getSession } from "@/action/getSession";
import getTrendNendoroid from "@/action/getTrendNendoroid";

const HomePage = async () => {
  const nendoroid = await getTrendNendoroid();
  const session = await getSession();
  return (
    <>
      <Nav session={session} />
      <Slider />
      <PageContent nendoroids={nendoroid} />;
    </>
  );
};

export default HomePage;
