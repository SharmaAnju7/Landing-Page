import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import AboutUs from "./components/AboutUs/AboutUs"
import Product from "./components/Products/Product"
import Press from "./components/Press/press"
import Brand from "./components/Brand/Brand"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
     <AboutUs/>
     <Product/>
     <Press/>
     <Brand/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
