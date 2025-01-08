import { PiTargetBold } from "react-icons/pi";
import { IoEye } from "react-icons/io5";

function AboutCard() {
  return (
    <div className="w-full flex lap:h-screen min-h-screen flex-col tab:flex-row  bg-white pb-5">
 
        <div className=" w-[100%] h-[50%] tab:w-[50%] tab:h-full p-3  mt-5 lap:flex-row flex flex-col  tab:justify-end items-center justify-center">
            <div className="lap:w-[60%] h-full w-[100%]  flex flex-col justify-center gap-3">
            <p className="text-3xl font-bold text-green-500"> 
                ABOUT <span className="text-black">US</span>
            </p>
            <p className=" font-light text-justify text-lg">
            ECOVENT AIR SYSTEMS INDIA LLP. Is a HVAC contracting company in INDIA
specializing in design, manufacturing, supply & installation of Electro-Mechanical &
HVAC Systems. Our scope covers Engineering Design, Manufacturing, Submittals
Approval, Installation, and Testing & Commissioning HVAC Products.
            </p>
            </div> 
        </div>


        <div className=" w-[100%] tab:w-[50%] h-[50%] tab:h-full  flex flex-col items-center justify-center gap-5 mt-10 ">

            <div className="hover:shadow-green-500 shadow-lg py-1 w-[95%] lap:w-[80%] h-[45%] tab:h-[30%] flex flex-col items-center justify-center bg-green-400 rounded-3xl lap:rounded-full hover:scale-105 transition-all duration-500">

                <PiTargetBold className="text-5xl text-black"/>
                <div className="flex flex-col items-center justify-center gap-1 tab:gap-5 w-full px-5">

            <p className=" text-xl tab:text-3xl font-extrabold text-white">OUR MISSION</p>
                            <p className="text-sm tab:text-lg font-bold text-white text-center">
                With the advancement in the Technology & Machinery be the Leaders & NO#1
                Manufacturers of HVAC Products
                </p>
                </div>

            </div>
            <div className="hover:shadow-green-500 shadow-lg   py-2 w-[95%] lap:w-[80%] h-[45%] tab:h-[30%] flex flex-col items-center justify-center bg-green-400 rounded-3xl lap:rounded-full hover:scale-105 transition-all duration-500">
                <IoEye className="text-5xl text-black"/>
                <div className="flex flex-col items-center justify-center gap-1 tab:gap-5 w-full px-5">
                    <p className="text-xl tab:text-3xl font-extrabold text-white">
                    OUR VISION
                    </p>
                    <p className="text-sm tab:text-lg font-bold text-white text-center">
                    Be the Leaders in HVAC industry in India.
                    </p>
                </div>
            </div>

            

        </div>
      
    </div>
  )
}

export default AboutCard
