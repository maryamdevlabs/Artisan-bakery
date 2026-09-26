function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="hero-eyebrow">ARTISAN BAKERY · EST. 2026</p>

        <h1>
          The art of
          <span> fine baking.</span>
        </h1>

        <p className="hero-description">
          Handcrafted pastries, delicate cakes, and timeless flavors
          created for life's sweetest moments.
        </p>

        <a href="#featured" className="hero-link">
          Discover the collection →
        </a>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85"
          alt="Freshly baked artisan pastries"
        />
      </div>
    </section>
  )
}

export default Hero