import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Trip from "../Components/Trip";
import abotImage from "../assets/3.jpg";

function Services() {
  return (
    <>
      <Hero cName="hero-mid" img={abotImage} title="Service" btnClass="hide" />
      <Trip />
      <Footer />
    </>
  );
}
export default Services;
