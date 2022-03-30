import "./Contact.scss";
export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <footer id="contact">
      <div className="title-container">
        <h2 className="title">Contact Me</h2>
        <p className="title-info">Let´s take a coffe</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="number-email">
            <div className="contact-number">
              <div className="number-logo">
                <i>LOGO</i>
              </div>
              <div className="number-es">
                <p>+34 640 33 48 27</p>
              </div>
            </div>

            <div className="contact-email">
              <div className="email-logo">
                <i>logo</i>
              </div>
              <div className="email-es">
                <p>franciscoiborra1997@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <form action="POST" className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            autoComplete="none"
          />
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email addres..."
          />
          <label htmlFor="message">Message:</label>
          <textarea
            style={{ resize: "none" }}
            name="message"
            id="textarea"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </footer>
  );
};
