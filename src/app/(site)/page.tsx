import Nav from "@/components/Nav";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <>
      <div>
        <Nav logo={"WIGURE"} />
      </div>
      <div>
        <Slider />
      </div>
      <Footer congty={"check"} />
    </>
  );
};

export default HomePage;
