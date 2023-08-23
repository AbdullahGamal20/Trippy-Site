import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import abotImage from "../assets/11.jpg";
function About() {
  return (
    <>
      <Hero cName="hero-mid" img={abotImage} title="about us" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
