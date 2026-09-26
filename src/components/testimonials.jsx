function Testimonials() {
  const testimonials = [
    {
      name: "Sofia",
      text: "Everything tasted as beautiful as it looked. The perfect little treat for our celebration.",
    },
    {
      name: "Amelia",
      text: "The pastries were fresh, delicate, and absolutely delicious. I will definitely be ordering again.",
    },
    {
      name: "Emma",
      text: "Such a lovely experience from start to finish. You can really taste the care in every bite.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-heading">
        <p>Kind Words</p>

        <h2>
          Loved by those
          <span>who taste it.</span>
        </h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={testimonial.name}>
            <span className="testimonial-number">
              0{index + 1}
            </span>

            <p className="testimonial-quote">
              “{testimonial.text}”
            </p>

            <p className="testimonial-name">
              — {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;