function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="brand">
        ARTISAN
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#featured">Collections</a>
        <a href="#about">Our Story</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" className="nav-order">
        Order
      </a>
    </header>
  )
}

export default Navbar