function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <a href="#" className="footer-logo">
            SWEET CRUMBS
          </a>

          <p>
            Small-batch treats, baked with warmth
            and a little extra love.
          </p>
        </div>

        <nav className="footer-links">
          <a href="#">Home</a>
          <a href="#products">Products</a>
          <a href="#about">Our Story</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-socials">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Sweet Crumbs</p>
        <p>Made with care in Lahore.</p>
      </div>
    </footer>
  );
}

export default Footer;