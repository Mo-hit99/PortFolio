import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_EMAIL, import.meta.env.VITE_EMAIL_TEMPLATE, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          alert("SUCCESS!")
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="container-contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        <div className="contact-info">
          <div className="phone">
            <p><i className="fa-solid fa-phone"></i>7986104250</p>
          </div>
          <div className="email-info">
            <div className="email">
              <p><i className="fa-solid fa-envelope"></i>mk3705200@gmail.com</p>
            </div>
          </div>
          <div className="address-info">
            <div className="address">
              <p><i className="fa-solid fa-location-pin"></i>7986104250</p>
            </div>
          </div>
        </div>
        <form className="form-container" ref={form} onSubmit={sendEmail}>
          <div className="input-field-container">
            <div className="input input-name">
              <input type="text" placeholder="Name" name="from_name" required />
            </div>
            <div className="input input-email">
              <input
                type="email"
                placeholder="Email"
                name="reply_to"
                required
              />
            </div>
            <div className="input input-message">
              <textarea
                name="message"
                placeholder="How Can We Help You?"
                required
              />
            </div>
            <div className="input input-btn">
              <button className="btn-send"><i className="fa-solid fa-paper-plane"></i>Send</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
