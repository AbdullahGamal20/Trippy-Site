import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="form-container">
      <h1>Send A Message To Us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="message" rows="4"></textarea>
        <button> Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
