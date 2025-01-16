import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


function Contactus() {
  return (
    <div className="w-[100%] bg-[#22876A] h-auto py-10 flex  flex-col items-center gap-10">

      <div className="w-[90%] bg-white rounded-2xl flex flex-col items-center gap-3 py-5 px-3 lap:w-[45%] ml:w-[85%] mm:w-[90%] tab:w-[70%]">
        <div className="w-[100%] flex flex-col items-start gap-1 ">
          <h1 className="text-2xl font-bold tab:text-3xl lap:text-4xl tab:self-center">Contact Us</h1>
            <p className="text-xs tab:text-base ">
            Discover excellence with our products. Reach out to us today to
            explore our offerings and find the perfect product that aligns with
            your best requirements
          </p>
        </div>
        <p className="self-start tab:text-lg">Feel free to reach us</p>

        <div className="w-[100%] flex flex-col items-start gap-4 ">

          <div className="w-[100%] flex flex-col gap-3 tab:flex-row tab:justify-between">
          <input
                type="text"
                placeholder="First Name"
                className="border-2 border-gray-300 p-2 w-[100%] rounded-lg placeholder-gray-300"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-2 border-gray-300 p-2 w-[100%] rounded-lg placeholder-gray-300"
              />
          </div>
       
          <div className="w-[100%] flex flex-col gap-3 tab:flex-row tab:justify-between">
          <input
                type="text"
                placeholder="Email"
                className="border-2 border-gray-300 p-2 w-[100%] rounded-lg placeholder-gray-300"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border-2 border-gray-300 p-2 w-[100%] rounded-lg placeholder-gray-300"
              />
          </div>
             
       
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="border-2 border-gray-300 p-2 rounded-lg min-h-6 w-[100%] placeholder-gray-300"
            ></textarea>

            <button className="bg-[#22876A] text-white py-2 w-[100%] border-2 rounded-lg text-xl font-bold lap:w-[50%] lap:self-center hover:border-2 hover:border-[#22876A] hover:text-[#22876A] hover:bg-white transition-all duration-500">
                SUBMIT
            </button>
        </div>
    
    </div>

    <div className="w-[90%] flex flex-col items-start gap-10 lap:flex-row lap:justify-evenly lap:items-start">

    <div className=" flex flex-col items-start gap-2  lap:w-[30%] lap:flex-1 lap:items-center">
            <MdLocationOn className="fill-white size-10 "/>
          <p className="text-xs font-bold text-white">
        <span className="text-sm font-extrabold"> REG OFFICE :</span> ECOVENT AIR SYSTEMS INDIA LLP,
9/7 4th cross, Saraswathipuram, Nandini layout, Bangalore - 560096

          </p>
           <p className="text-xs font-bold text-white">
             <span className="text-sm font-extrabold">FACTORY :</span> ECOVENT AIR SYSTEMS INDIA LLP- #68/1, K-Hosahalli, Kannalli Dakle,Kodigehalli Post, Bengaluru North Taluk, Yasavantapura Hobli, Bangaluru-560112,
            </p>
        </div>
 
        <div className=" flex flex-col items-start  gap-1  lap:w-[30%] lap:flex-1 lap:items-center">
             <IoCall className="fill-white size-10  "/>
             <p className="text-sm font-bold text-white">
             +91 98450 59731
          
             </p>
             <p className="text-sm font-bold text-white">
             +91 98866 51100
          </p>
        </div>

        <div className=" flex flex-col items-start gap-1  lap:w-[30%] lap:flex-1 lap:items-center">
          <MdEmail className="fill-white size-10  top-[-5rem]"/>
            <p className="text-sm font-bold text-white"> ecoventairsystems@gmail.com</p>
          </div>

    </div>
    </div>
  )
}

export default Contactus


