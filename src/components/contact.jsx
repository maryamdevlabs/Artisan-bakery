function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you! Your message has been sent.");
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">

        <div className="contact-intro">
          <p className="contact-eyebrow">
            Get in touch
          </p>

          <h2>
            Let's make
            <span>something sweet.</span>
          </h2>

          <p className="contact-description">
            Have a question, want to place an order, or planning something
            special? Tell us a little about what you have in mind.
          </p>

          <div className="contact-details">
            <p>hello@sweetcrumbs.com</p>
            <p>+92 300 1234567</p>
            <p>Lahore, Pakistan</p>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-field">
            <label htmlFor="name">
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Your email"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              rows="5"
              placeholder="Tell us what you're looking for..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="contact-submit"
          >
            SEND MESSAGE
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;