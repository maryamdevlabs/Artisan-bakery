function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80"
            alt="Freshly baked bread"
          />
        </div>

        <div className="about-text">
          <p className="about-eyebrow">
            Our Story
          </p>

          <h2>
            Made slowly.
            <span>Made with love.</span>
          </h2>

          <p className="about-description">
            Sweet Crumbs began with a simple idea: that the best things
            are made with patience. What started as a small kitchen
            filled with the smell of freshly baked bread grew into a
            little bakery made for everyday moments and special ones.
          </p>

          <p className="about-description">
            Every pastry is prepared in small batches, with thoughtful
            ingredients and plenty of care.
          </p>

          <a href="#featured" className="about-link">
            DISCOVER OUR BAKES
          </a>

          <div className="about-detail">✦</div>
        </div>

      </div>
    </section>
  );
}

export default About;