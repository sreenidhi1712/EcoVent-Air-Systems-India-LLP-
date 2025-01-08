import { useState } from "react";
import iconImage from "../../assets/logo.png"
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";


function Navbar() {

   const navigate = useNavigate();
   const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="h-20  z-10 flex justify-between lap:justify-evenly items-center w-[100%] fixed top-0 left-0 lap:h-28 bg-white ">

        <div className="h-[100%] flex justify-start items-center lap:w-[40%]  w-[75%] lap:ml-3">
            <img src={iconImage} alt="icon" className=" lap:w-96  tab:w-72 w-full object-cover"/>       
        </div>

        <IoMenuOutline className="flex size-8 lap:hidden mr-3 " onClick={()=>setShowMenu(prev=>!prev)}/>

        <div className="h-[100%]  justify-evenly items-center w-[40%]  lap:flex hidden">

         <p className="text-xl  font-bold hover:border-b-2 border-black py-2 cursor-pointer" onClick={()=>navigate("/")}>
            Home
         </p>
         <p className="text-xl  font-bold hover:border-b-2 border-black py-2 cursor-pointer" onClick={()=>navigate("/product/rectangularDuct")}>
            Products
         </p>

         <p className="text-xl  font-bold hover:border-b-2 border-black py-2 cursor-pointer" onClick={()=>navigate("/")}>
            About
         </p>

         <p className="text-xl  font-bold hover:border-b-2 border-black py-2 cursor-pointer" onClick={()=>navigate("/")}>
            Contact
         </p>
        </div>

        <div className={`w-[70%] h-screen absolute  left-0 top-0 tab:w-[45%] ml:w-[60%] bg-gray-100 flex-col transition-all duration-300 ease-linear ${showMenu?`translate-x-0`:`translate-x-[-100%]`}`}>
         <div className="flex justify-end items-center pt-4 px-5">
            <IoMdClose className="size-8" onClick={()=>setShowMenu(false)}/>
         </div>
        <div className="flex-col h-auto"> 
               <div className="flex justify-start items-center cursor-pointer  w-full h-12 mt-3  group hover:bg-green-600" onClick={()=>navigate("/")}><p className="group-hover:text-white   ml-5 text-black ">Home</p></div>
               <div className="flex justify-start items-center cursor-pointer  w-full h-12 group hover:bg-green-600" onClick={()=>navigate("/product/spiralDuct")}><p className="group-hover:text-white ml-5 text-black">Products</p></div>
               <div className="flex justify-start items-center cursor-pointer w-full h-12 group hover:bg-green-600" onClick={()=>navigate("/")}><p className="group-hover:text-white ml-5 text-black">About</p></div>
               <div className="flex justify-start items-center cursor-pointer w-full h-12  group hover:bg-green-600" onClick={()=>navigate("/")}><p className="group-hover:text-white ml-5 text-black">Contact</p></div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar


