// import mainImageBg from "../../assets/18493.webp"

import AboutCard from "../../Components/AboutCard";
// import IntoductionCard from "../Introduction";
import Product from "../../Components/Products";
import ServiceCard from "../../Components/ServicesCard";
import SliderComponent from "../../Components/Slider";
import ovalDuct from "../../assets/ovalDuct.png";
import rectangularDuct from "../../assets/rectangularDuct.jpg";
import spiralDuct from "../../assets/spiralDucts.jpg"
import volumeDampers from "../../assets/VolumeDampers.jpg"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Contactus from "../../Components/ContactUs";


// const mainImage  = mainImageBg;
function MainContent() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`w-[100%] h-auto pt-10 bg-slate-100 flex flex-col items-center `} >
         <SliderComponent/>
      {/* <IntoductionCard/> */}
      <AboutCard/>
      <ServiceCard/>

      <div className="w-full h-auto py-5 bg-slate-100 flex flex-col items-center">
      <p className="text-2xl tab:text-4xl font-bold"><span className="text-[#22876A]">OUR</span> PRODUCTS</p>

      <div className="w-full h-auto grid grid-cols-1  justify-items-center gap-10 mm:gap-5 px-3 mt-10 lap:grid-cols-3 tab:grid-cols-2 " >
          <Product image={ovalDuct} data="Oval Duct" Id={3}/>
          <Product image={rectangularDuct} data="Rectangular Duct" Id={1}/>
          <Product image={spiralDuct} data="Spiral Duct" Id={2}/>
          <Product image={volumeDampers} data="Volume Dampers" Id={4}/>
      </div>
      </div>
      <Contactus/>
    </div>
  )
}

export default MainContent;
