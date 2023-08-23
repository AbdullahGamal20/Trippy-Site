import "./Hero.css";
// import image1 from
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="Hero Image" src={props.img} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
