import Iconimg from "../../assets/logo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-[100%] bg-[#333333] py-10 flex flex-col items-center gap-5 ">

      <div className="w-[90%] flex flex-col items-center gap-2 ">
        <p className="text-white font-extrabold tab:text-xl lap:text-3xl">ECOVENT AIR SYSTEMS INDIA LLP</p>
        <p className="text-white text-center text-xs tab:text-sm lap:text-lg"> #9/7, 4th CROSS, SARASWATHIPURAM, NANDINI LAYOUT, BENGALURU - 560096</p>
      </div>

      <div className="w-[90%]  flex justify-center mt-20 tab:w-[50%] lap:w-[30%]">
        <img src={Iconimg} alt="phone" className="h-24 w-[90%] object-cover"/>
      </div>

      <div className="w-[100%] flex items-center p-2 justify-evenly tab:w-[60%] lap:w-[40%] mt-10"> 
        <div  className="flex items-center ```` justify-center p-2 tab:p-3 bg-[#3c5999] rounded-full hover:scale-110 transition-all duration-500 hover:cursor-pointer">
        <FaFacebookF className="text-white text-3xl "/>
        </div>
             <div className="flex items-center justify-center p-2 tab:p-3 rounded-full bg-[#c435a3]  hover:scale-110 transition-all duration-500 hover:cursor-pointer">
             <FaInstagram className="text-white text-3xl"/>
             </div>
             <div className="flex items-center justify-center p-2 tab:p-3 rounded-full bg-[#55abed]  hover:scale-110 transition-all duration-500 hover:cursor-pointer">
             <FaTwitter className="text-white text-3xl"/>
            </div>
            <div className="flex items-center justify-center p-2 tab:p-3 rounded-full bg-[#007cba]  hover:scale-110 transition-all duration-500 hover:cursor-pointer">
            <FaLinkedinIn className="text-white text-3xl"/>
            </div> 
      </div>

      
    </div>
  )
}

export default Footer
