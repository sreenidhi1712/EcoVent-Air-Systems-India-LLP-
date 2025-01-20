import Footer from "./Components/Footer"
import MainContent from "./Pages/MainPage"
import Navbar from "./Components/Navbar"
import { IoLogoWhatsapp } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage/Index";
import ContactUs from "./Pages/ContactUsPage";
import AboutPage from "./Pages/AboutUsPage";
function App() {
  return (
    <Router>
    <div className="w-[100%] h-auto bg-slate-200 box-border overflow-hidden">

      <Navbar/>
    
        <Routes>
          <Route path="/" element={<MainContent/>}/>
          <Route path="/products/:product" element={<ProductPage/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/about-us" element={<AboutPage/>}/>
        </Routes>
    
      <Footer/>
      <div className="fixed bottom-28 right-5 p-3 tab:p-4 tab:right-10 bg-white rounded-full hover:shadow-gray-500 shadow-md hover:scale-125 transition-all duration-500">
        <a href="https://wa.me/919845059731" target="_blank" rel="noreferrer">
        <IoLogoWhatsapp className="text-3xl text-[#22876A] " />
        </a>
    
      </div>
    
      
    </div>
    </Router>
  )
}

export default App
