import Navbar from './components/navbar'
import Hero from './components/hero'
import FeaturedProducts from './components/FeaturedProducts'
import About from "./components/about";
import Testimonials from "./components/testimonials";
import CTA from "./components/cta"
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <About/>
      <Testimonials />
      <CTA/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App