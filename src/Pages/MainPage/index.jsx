// import mainImageBg from "../../assets/18493.webp"

import AboutCard from "../../Components/AboutCard";
// import IntoductionCard from "../Introduction";
import Product from "../../Components/Products";
import ServiceCard from "../../Components/ServicesCard";
import SliderComponent from "../../Components/Slider";
import ovalDuct from "../../assets/ovalDuct.png";
import rectangular from "../../assets/Duct.jpg";  
import spiralDuct from "../../assets/spiralDucts.jpg"
import volumeDampers from "../../assets/VolumeDampers.png"



// const mainImage  = mainImageBg;
function MainContent() {
  return (
    <div className={`w-[100%] h-auto py-10 bg-slate-100 flex flex-col items-center `} >
         <SliderComponent/>
      {/* <IntoductionCard/> */}
      <AboutCard/>
      <ServiceCard/>

      <div className="w-full h-auto py-5 bg-slate-100 flex flex-col items-center">
      <p className="text-2xl tab:text-4xl font-bold"><span className="text-green-500">OUR</span> PRODUCTS</p>

      <div className="w-full h-auto grid grid-cols-1  justify-items-center gap-10 mm:gap-5 px-3 mt-10 tab:grid-cols-3 ml:grid-cols-2 " >
          <Product image={ovalDuct} data="Oval Duct"/>
          <Product image={rectangular} data="Rectangular Duct"/>
          <Product image={spiralDuct} data="Spiral Duct"/>
          <Product image={volumeDampers} data="Volume Dampers"/>


      </div>
      </div>
    </div>
  )
}

export default MainContent;