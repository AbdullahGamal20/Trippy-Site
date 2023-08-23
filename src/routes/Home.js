import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Trip from "../Components/Trip";
import HomeImg from "../assets/12.jpg";

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        img={HomeImg}
        title="your journey your story"
        text="choose your favourite destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
